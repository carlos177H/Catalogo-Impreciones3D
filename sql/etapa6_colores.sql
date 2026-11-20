-- =====================================================================
-- ETAPA 6 · Colores por producto, fotos de cotización y registro sin
--           verificar correo — Catálogo 3D JCGA (v2.2.0)
-- Ejecutar en Supabase → SQL Editor → Run (se puede correr varias veces).
-- Requiere las etapas 1 a 5.
-- =====================================================================

-- ---------- 1. Color en carrito y en el detalle del pedido ----------
ALTER TABLE public.carrito        ADD COLUMN IF NOT EXISTS color varchar(80);
ALTER TABLE public.detalle_pedido ADD COLUMN IF NOT EXISTS color varchar(80);

-- El mismo producto puede ir en dos colores distintos: se quitan las
-- restricciones "un producto una sola vez" del carrito y del detalle.
DO $$
DECLARE r record;
BEGIN
  FOR r IN
    SELECT c.conrelid::regclass AS tabla, c.conname
      FROM pg_constraint c
     WHERE c.conrelid IN ('public.carrito'::regclass, 'public.detalle_pedido'::regclass)
       AND c.contype IN ('u', 'p')
       AND array_length(c.conkey, 1) > 1
       AND EXISTS (SELECT 1 FROM pg_attribute a
                    WHERE a.attrelid = c.conrelid AND a.attnum = ANY (c.conkey) AND a.attname = 'id_producto')
  LOOP
    EXECUTE format('ALTER TABLE %s DROP CONSTRAINT %I', r.tabla, r.conname);
    RAISE NOTICE 'Quitada la restricción % de %', r.conname, r.tabla;
  END LOOP;
END $$;

-- ---------- 2. crear_pedido guarda el color de cada producto ----------
CREATE OR REPLACE FUNCTION public.crear_pedido(
  p_items  jsonb,
  p_lugar  text,
  p_notas  text DEFAULT NULL,
  p_metodo text DEFAULT 'efectivo'
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid      integer := public.mi_id_usuario();
  v_user     public.usuarios%ROWTYPE;
  v_pedido   integer;
  v_total    numeric := 0;
  v_anticipo numeric := 0;
  v_pct      numeric;
  v_min      numeric;
  v_n        integer;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Debes iniciar sesión para hacer un pedido' USING ERRCODE = '28000';
  END IF;
  SELECT * INTO v_user FROM public.usuarios WHERE id_usuario = v_uid;

  IF p_metodo NOT IN ('efectivo', 'transferencia') THEN
    RAISE EXCEPTION 'Método de pago no válido';
  END IF;
  IF coalesce(length(trim(p_lugar)), 0) < 3 THEN
    RAISE EXCEPTION 'Indica el lugar de entrega';
  END IF;
  IF jsonb_typeof(p_items) <> 'array' OR jsonb_array_length(p_items) = 0 THEN
    RAISE EXCEPTION 'El carrito está vacío';
  END IF;
  IF jsonb_array_length(p_items) > 100 THEN
    RAISE EXCEPTION 'Demasiados productos en un solo pedido';
  END IF;

  DROP TABLE IF EXISTS pg_temp._items;
  CREATE TEMP TABLE _items ON COMMIT DROP AS
    SELECT pr.id AS id_producto,
           nullif(left(trim(coalesce(it->>'color', '')), 80), '') AS color,
           least(999, greatest(1, sum((it->>'qty')::int)))::int AS cantidad,
           pr.precio_base::numeric AS precio
      FROM jsonb_array_elements(p_items) it
      JOIN public.productos pr ON pr.id = (it->>'id')::int AND pr.activo
     GROUP BY pr.id, 2, pr.precio_base;

  SELECT count(*), coalesce(sum(cantidad * precio), 0) INTO v_n, v_total FROM _items;
  IF v_n = 0 THEN
    RAISE EXCEPTION 'Los productos del carrito ya no están disponibles';
  END IF;

  -- Pago por adelantado
  SELECT coalesce((SELECT valor::numeric FROM public.configuracion WHERE clave = 'anticipo_pct'), 50),
         coalesce((SELECT valor::numeric FROM public.configuracion WHERE clave = 'anticipo_minimo'), 0)
    INTO v_pct, v_min;

  IF p_metodo = 'transferencia' THEN
    v_anticipo := v_total;
  ELSIF v_user.requiere_anticipo AND v_total >= v_min THEN
    v_anticipo := ceil(v_total * v_pct / 100);   -- redondeado hacia arriba al peso
  ELSE
    v_anticipo := 0;
  END IF;

  INSERT INTO public.pedidos (id_usuario, id_estatus, subtotal, descuento, total, anticipo, saldo_pendiente,
                              metodo_pago, notas, lugar_entrega, nombre_contacto, telefono_contacto)
  VALUES (v_uid, 1, v_total, 0, v_total, v_anticipo, v_total,
          p_metodo, nullif(left(trim(coalesce(p_notas, '')), 1000), ''), left(trim(p_lugar), 200),
          v_user.nombre_completo, v_user.telefono)
  RETURNING id_pedido INTO v_pedido;

  INSERT INTO public.detalle_pedido (id_pedido, id_producto, color, cantidad, precio_unitario, descuento_aplicado, subtotal)
  SELECT v_pedido, id_producto, color, cantidad, precio, 0, cantidad * precio FROM _items;

  INSERT INTO public.historial_pedido (id_pedido, id_estatus, comentario, id_usuario_cambio)
  VALUES (v_pedido, 1, 'Pedido creado desde la app', v_uid);

  DELETE FROM public.carrito WHERE id_usuario = v_uid;

  RETURN jsonb_build_object('id_pedido', v_pedido, 'total', v_total, 'anticipo', v_anticipo, 'productos', v_n);
END;
$$;

REVOKE ALL ON FUNCTION public.crear_pedido(jsonb, text, text, text) FROM public, anon;
GRANT EXECUTE ON FUNCTION public.crear_pedido(jsonb, text, text, text) TO authenticated;

-- ---------- 3. Panel de admin: muestra el color ----------
CREATE OR REPLACE FUNCTION public.admin_pedidos(p_limite integer DEFAULT 300)
RETURNS jsonb
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE r jsonb;
BEGIN
  PERFORM public._exigir_admin();
  SELECT coalesce(jsonb_agg(to_jsonb(x) ORDER BY x.fecha_pedido DESC), '[]'::jsonb) INTO r
  FROM (
    SELECT p.id_pedido, p.fecha_pedido, p.id_estatus, p.total, p.anticipo, p.saldo_pendiente,
           p.metodo_pago, p.notas, p.notas_internas, p.lugar_entrega, p.fecha_entrega_real,
           jsonb_build_object('id_usuario', u.id_usuario, 'nombre', u.nombre_completo, 'email', u.email,
                              'telefono', coalesce(p.telefono_contacto, u.telefono),
                              'requiere_anticipo', u.requiere_anticipo) AS cliente,
           (SELECT coalesce(jsonb_agg(jsonb_build_object('cantidad', d.cantidad, 'precio', d.precio_unitario,
                     'subtotal', d.subtotal, 'nombre', pr.nombre, 'sku', pr.sku, 'color', d.color) ORDER BY d.id_detalle), '[]')
              FROM public.detalle_pedido d LEFT JOIN public.productos pr ON pr.id = d.id_producto
             WHERE d.id_pedido = p.id_pedido) AS items,
           (SELECT coalesce(jsonb_agg(jsonb_build_object('id_pago', g.id_pago, 'monto', g.monto,
                     'referencia', g.referencia, 'comprobante_url', g.comprobante_url, 'confirmado', g.confirmado,
                     'fecha_pago', g.fecha_pago, 'notas', g.notas) ORDER BY g.fecha_pago DESC), '[]')
              FROM public.pagos g WHERE g.id_pedido = p.id_pedido) AS pagos,
           (SELECT coalesce(jsonb_agg(jsonb_build_object('id_estatus', h.id_estatus, 'fecha', h.fecha,
                     'comentario', h.comentario) ORDER BY h.fecha DESC, h.id_historial DESC), '[]')
              FROM public.historial_pedido h WHERE h.id_pedido = p.id_pedido) AS historial
      FROM public.pedidos p JOIN public.usuarios u ON u.id_usuario = p.id_usuario
     ORDER BY p.fecha_pedido DESC
     LIMIT greatest(1, least(p_limite, 1000))
  ) x;
  RETURN r;
END;
$$;

-- ---------- 4. Aviso de WhatsApp al vendedor: incluye el color ----------
CREATE OR REPLACE FUNCTION privado.avisar_movimiento_pedido()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = privado, public
AS $$
DECLARE
  p      public.pedidos%ROWTYPE;
  v_txt  text;
  v_items text;
  v_n    integer;
  fmt    text := 'FM999,999,990.00';
  v_url  text := coalesce((SELECT valor FROM public.configuracion WHERE clave = 'url_tienda'),
                          'https://carlos177h.github.io/Catalogo-Impreciones3D/index.html');
BEGIN
  SELECT * INTO p FROM public.pedidos WHERE id_pedido = new.id_pedido;
  IF NOT FOUND THEN RETURN new; END IF;

  IF new.comentario = 'Pedido creado desde la app' THEN
    SELECT string_agg('• ' || d.cantidad || ' × ' || coalesce(pr.nombre, 'Producto #' || d.id_producto)
                      || ' = $' || to_char(d.subtotal, fmt)
                      || E'\n   🆔 ' || coalesce(pr.sku, '#' || d.id_producto)
                      || CASE WHEN d.color IS NOT NULL THEN E'\n   🎨 ' || d.color ELSE '' END
                      || CASE WHEN pr.sku IS NOT NULL THEN E'\n   🔗 ' || v_url || '#p=' || pr.sku ELSE '' END,
                      E'\n' ORDER BY d.id_detalle),
           count(*)
      INTO v_items, v_n
      FROM public.detalle_pedido d LEFT JOIN public.productos pr ON pr.id = d.id_producto
     WHERE d.id_pedido = p.id_pedido;

    v_txt := '🛒 *Nuevo pedido #' || p.id_pedido || '*' || E'\n\n'
          || '👤 ' || coalesce(p.nombre_contacto, '') || E'\n'
          || '📱 ' || coalesce(p.telefono_contacto, 's/tel') || '  wa.me/52' || coalesce(p.telefono_contacto, '') || E'\n'
          || '📍 ' || coalesce(p.lugar_entrega, '') || E'\n'
          || CASE WHEN p.notas IS NOT NULL THEN '📝 ' || p.notas || E'\n' ELSE '' END
          || E'\n' || coalesce(v_items, '') || E'\n\n'
          || '💰 *Total: $' || to_char(p.total, fmt) || '*' || E'\n'
          || CASE
               WHEN p.metodo_pago = 'transferencia' THEN '🏦 Transferencia (pago total por adelantado)'
               WHEN p.anticipo > 0 THEN '💵 Efectivo · anticipo $' || to_char(p.anticipo, fmt) || ' por transferencia'
               ELSE '💵 Efectivo al entregar (sin anticipo)'
             END;

  ELSIF new.comentario LIKE 'Comprobante%enviado' THEN
    v_txt := '📸 *Comprobante recibido · Pedido #' || p.id_pedido || '*' || E'\n'
          || '👤 ' || coalesce(p.nombre_contacto, '') || E'\n'
          || '💰 ' || CASE WHEN p.metodo_pago = 'efectivo' THEN 'Anticipo' ELSE 'Pago' END
          || ': $' || to_char(p.anticipo, fmt) || E'\n'
          || 'Revísalo en Supabase → Storage → comprobantes.';
  ELSE
    RETURN new;
  END IF;

  PERFORM privado.enviar_whatsapp(v_txt);
  RETURN new;
EXCEPTION WHEN others THEN
  RAISE WARNING 'avisar_movimiento_pedido: %', SQLERRM;
  RETURN new;
END;
$$;

-- ---------- 5. Fotos de referencia para "Cotiza tu diseño" ----------
-- Bucket público (solo lectura por enlace). Cualquiera puede SUBIR imágenes
-- a la carpeta cotizaciones/; nadie puede listar, cambiar ni borrar.
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('referencias', 'referencias', true, 8388608,
        ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif', 'image/gif'])
ON CONFLICT (id) DO UPDATE
  SET public = true, file_size_limit = 8388608,
      allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif', 'image/gif'];

DROP POLICY IF EXISTS "Referencias: subir fotos de cotización" ON storage.objects;
CREATE POLICY "Referencias: subir fotos de cotización" ON storage.objects
  FOR INSERT TO anon, authenticated
  WITH CHECK (bucket_id = 'referencias' AND (storage.foldername(name))[1] = 'cotizaciones');

-- ---------- 6. Registro sin verificar el correo (por ahora) ----------
-- Además, en Supabase → Authentication → Sign In / Providers → Email
-- apaga "Confirm email". Esta línea deja entrar a quienes se registraron
-- antes y nunca abrieron el correo de verificación.
UPDATE auth.users SET email_confirmed_at = now()
 WHERE email_confirmed_at IS NULL AND deleted_at IS NULL;

-- ---------- Verificación ----------
SELECT
  (SELECT count(*) FROM information_schema.columns
    WHERE table_schema = 'public' AND column_name = 'color'
      AND table_name IN ('carrito', 'detalle_pedido'))              AS columnas_color,  -- debe ser 2
  (SELECT count(*) FROM storage.buckets WHERE id = 'referencias')    AS bucket_fotos,    -- debe ser 1
  (SELECT count(*) FROM auth.users WHERE email_confirmed_at IS NULL) AS sin_verificar;   -- debe ser 0
