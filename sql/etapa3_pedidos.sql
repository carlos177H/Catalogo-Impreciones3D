-- =====================================================================
-- ETAPA 3 · Pedidos con cuenta — Catálogo 3D JCGA
-- Ejecutar UNA vez en Supabase → SQL Editor → Run (es idempotente).
-- Requiere haber ejecutado antes sql/etapa1_auth.sql
-- =====================================================================
-- Qué hace:
--   1. Agrega a `pedidos` el lugar de entrega y datos de contacto.
--   2. crear_pedido(): crea el pedido DESDE LA BD recalculando los precios
--      con productos.precio_base (el navegador no puede alterarlos),
--      guarda el detalle, el historial y vacía el carrito.
--   3. registrar_comprobante(): registra la captura de la transferencia.
--   4. Bucket privado `comprobantes` (cada usuario solo ve sus archivos).
--   5. Quita los INSERT directos a pedidos/detalle/pagos (todo vía funciones).
-- =====================================================================

-- ---------- 1. Columnas nuevas ----------
ALTER TABLE public.pedidos ADD COLUMN IF NOT EXISTS lugar_entrega  varchar(200);
ALTER TABLE public.pedidos ADD COLUMN IF NOT EXISTS nombre_contacto varchar(150);
ALTER TABLE public.pedidos ADD COLUMN IF NOT EXISTS telefono_contacto varchar(20);

-- Descripciones de estatus acordes a lo que ve el cliente
UPDATE public.estatus_pedido SET descripcion = 'Pedido recibido, esperando confirmación de pago' WHERE id_estatus = 1;
UPDATE public.estatus_pedido SET descripcion = 'Pago confirmado, en cola de impresión'          WHERE id_estatus = 2;

-- ---------- Helper: id_usuario del usuario autenticado ----------
CREATE OR REPLACE FUNCTION public.mi_id_usuario()
RETURNS integer
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$ SELECT id_usuario FROM public.usuarios WHERE id_auth = auth.uid() AND activo $$;

-- ---------- 2. Crear pedido ----------
-- p_items: [{"id": 17, "qty": 2}, ...]
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
  v_uid     integer := public.mi_id_usuario();
  v_user    public.usuarios%ROWTYPE;
  v_pedido  integer;
  v_total   numeric := 0;
  v_n       integer;
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

  -- Productos válidos (activos), cantidades 1..999, agrupando repetidos
  CREATE TEMP TABLE _items ON COMMIT DROP AS
    SELECT pr.id AS id_producto,
           least(999, greatest(1, sum((it->>'qty')::int)))::int AS cantidad,
           pr.precio_base::numeric AS precio
      FROM jsonb_array_elements(p_items) it
      JOIN public.productos pr ON pr.id = (it->>'id')::int AND pr.activo
     GROUP BY pr.id, pr.precio_base;

  SELECT count(*), coalesce(sum(cantidad * precio), 0) INTO v_n, v_total FROM _items;
  IF v_n = 0 THEN
    RAISE EXCEPTION 'Los productos del carrito ya no están disponibles';
  END IF;

  INSERT INTO public.pedidos (id_usuario, id_estatus, subtotal, descuento, total, anticipo, saldo_pendiente,
                              metodo_pago, notas, lugar_entrega, nombre_contacto, telefono_contacto)
  VALUES (v_uid, 1, v_total, 0, v_total, 0, v_total,
          p_metodo, nullif(left(trim(coalesce(p_notas, '')), 1000), ''), left(trim(p_lugar), 200),
          v_user.nombre_completo, v_user.telefono)
  RETURNING id_pedido INTO v_pedido;

  INSERT INTO public.detalle_pedido (id_pedido, id_producto, cantidad, precio_unitario, descuento_aplicado, subtotal)
  SELECT v_pedido, id_producto, cantidad, precio, 0, cantidad * precio FROM _items;

  INSERT INTO public.historial_pedido (id_pedido, id_estatus, comentario, id_usuario_cambio)
  VALUES (v_pedido, 1, 'Pedido creado desde la app', v_uid);

  DELETE FROM public.carrito WHERE id_usuario = v_uid;

  RETURN jsonb_build_object('id_pedido', v_pedido, 'total', v_total, 'productos', v_n);
END;
$$;

-- ---------- 3. Registrar comprobante de transferencia ----------
CREATE OR REPLACE FUNCTION public.registrar_comprobante(
  p_pedido     integer,
  p_archivo    text,
  p_referencia text DEFAULT NULL
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid  integer := public.mi_id_usuario();
  v_ped  public.pedidos%ROWTYPE;
  v_pago integer;
BEGIN
  SELECT * INTO v_ped FROM public.pedidos WHERE id_pedido = p_pedido AND id_usuario = v_uid;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Pedido no encontrado';
  END IF;
  IF v_ped.id_estatus IN (7, 8) THEN
    RAISE EXCEPTION 'Este pedido ya está cerrado';
  END IF;
  -- El archivo debe estar en la carpeta del propio usuario: <auth.uid>/...
  IF p_archivo IS NULL OR split_part(p_archivo, '/', 1) <> auth.uid()::text THEN
    RAISE EXCEPTION 'Archivo no válido';
  END IF;

  -- Si ya había un comprobante sin confirmar, se reemplaza
  DELETE FROM public.pagos WHERE id_pedido = p_pedido AND NOT confirmado;

  INSERT INTO public.pagos (id_pedido, monto, metodo, referencia, comprobante_url, confirmado)
  VALUES (p_pedido, v_ped.saldo_pendiente, 'transferencia',
          nullif(left(trim(coalesce(p_referencia, '')), 100), ''), p_archivo, false)
  RETURNING id_pago INTO v_pago;

  UPDATE public.pedidos SET metodo_pago = 'transferencia' WHERE id_pedido = p_pedido;

  INSERT INTO public.historial_pedido (id_pedido, id_estatus, comentario, id_usuario_cambio)
  VALUES (p_pedido, v_ped.id_estatus, 'Comprobante de pago enviado', v_uid);

  RETURN jsonb_build_object('id_pago', v_pago);
END;
$$;

-- Solo usuarios con sesión pueden llamar estas funciones
REVOKE ALL ON FUNCTION public.crear_pedido(jsonb, text, text, text) FROM public, anon;
REVOKE ALL ON FUNCTION public.registrar_comprobante(integer, text, text) FROM public, anon;
REVOKE ALL ON FUNCTION public.mi_id_usuario() FROM public, anon;
GRANT EXECUTE ON FUNCTION public.crear_pedido(jsonb, text, text, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.registrar_comprobante(integer, text, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.mi_id_usuario() TO authenticated;

-- ---------- 5. Sin INSERT directos (todo pasa por las funciones) ----------
DROP POLICY IF EXISTS "Usuario crea pedidos" ON public.pedidos;
DROP POLICY IF EXISTS "Usuario crea detalle de pedido" ON public.detalle_pedido;
DROP POLICY IF EXISTS "Usuario registra pago" ON public.pagos;
REVOKE INSERT, UPDATE, DELETE ON public.pedidos, public.detalle_pedido, public.pagos, public.historial_pedido
  FROM anon, authenticated;

-- ---------- 4. Bucket privado para comprobantes ----------
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('comprobantes', 'comprobantes', false, 5242880,
        ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'application/pdf'])
ON CONFLICT (id) DO UPDATE
  SET public = false, file_size_limit = 5242880,
      allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'application/pdf'];

DROP POLICY IF EXISTS "Comprobantes: subir los propios" ON storage.objects;
CREATE POLICY "Comprobantes: subir los propios" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'comprobantes' AND (storage.foldername(name))[1] = auth.uid()::text);

DROP POLICY IF EXISTS "Comprobantes: ver los propios" ON storage.objects;
CREATE POLICY "Comprobantes: ver los propios" ON storage.objects
  FOR SELECT TO authenticated
  USING (bucket_id = 'comprobantes' AND (storage.foldername(name))[1] = auth.uid()::text);

-- Verificación rápida
SELECT 'ok' AS etapa3,
       (SELECT count(*) FROM storage.buckets WHERE id = 'comprobantes') AS bucket,
       (SELECT count(*) FROM pg_proc WHERE proname IN ('crear_pedido', 'registrar_comprobante')) AS funciones;
