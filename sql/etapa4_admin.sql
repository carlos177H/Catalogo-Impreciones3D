-- =====================================================================
-- ETAPA 4 · Panel de administración — Catálogo 3D JCGA
-- Ejecutar en Supabase → SQL Editor → Run (idempotente).
-- Requiere etapa1, etapa3 y etapa3b.
-- =====================================================================
-- Seguridad:
--   • es_admin() = rol admin (id_rol = 1) + sesión con 2FA (aal2).
--   • El panel NO lee tablas directo: todo pasa por funciones admin_*()
--     que validan es_admin() en cada llamada.
--   • notas_internas de pedidos ya no es visible para clientes.
-- =====================================================================

-- ---------- ¿Quién es admin? ----------
-- Rol de admin + 2FA verificado en esta sesión
CREATE OR REPLACE FUNCTION public.es_admin()
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT coalesce(auth.jwt()->>'aal', '') = 'aal2'
     AND EXISTS (SELECT 1 FROM public.usuarios
                  WHERE id_auth = auth.uid() AND id_rol = 1 AND activo);
$$;

-- Para que el panel sepa si pedir el código 2FA (solo informa sobre uno mismo)
CREATE OR REPLACE FUNCTION public.admin_estado()
RETURNS jsonb
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT jsonb_build_object(
    'rol_admin', EXISTS (SELECT 1 FROM public.usuarios WHERE id_auth = auth.uid() AND id_rol = 1 AND activo),
    'aal', coalesce(auth.jwt()->>'aal', 'aal1'));
$$;

CREATE OR REPLACE FUNCTION public._exigir_admin()
RETURNS integer
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public
AS $$
DECLARE v integer;
BEGIN
  IF NOT public.es_admin() THEN
    RAISE EXCEPTION 'No autorizado' USING ERRCODE = '42501';
  END IF;
  SELECT id_usuario INTO v FROM public.usuarios WHERE id_auth = auth.uid();
  RETURN v;
END;
$$;

-- ---------- Privacidad: notas internas fuera del alcance del cliente ----------
REVOKE SELECT ON public.pedidos FROM anon, authenticated;
GRANT SELECT (id_pedido, id_usuario, id_direccion, fecha_pedido, fecha_entrega_estimada, fecha_entrega_real,
              id_estatus, subtotal, descuento, total, anticipo, saldo_pendiente, metodo_pago, notas,
              lugar_entrega, nombre_contacto, telefono_contacto)
  ON public.pedidos TO authenticated;

-- ---------- Listado de pedidos ----------
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
                     'subtotal', d.subtotal, 'nombre', pr.nombre, 'sku', pr.sku) ORDER BY d.id_detalle), '[]')
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

-- ---------- Cambiar estatus ----------
CREATE OR REPLACE FUNCTION public.admin_cambiar_estatus(p_pedido integer, p_estatus integer, p_comentario text DEFAULT NULL)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE v_admin integer := public._exigir_admin();
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.estatus_pedido WHERE id_estatus = p_estatus) THEN
    RAISE EXCEPTION 'Estatus no válido';
  END IF;
  UPDATE public.pedidos
     SET id_estatus = p_estatus,
         saldo_pendiente   = CASE WHEN p_estatus = 7 THEN 0 ELSE saldo_pendiente END,
         fecha_entrega_real = CASE WHEN p_estatus = 7 THEN current_date ELSE fecha_entrega_real END
   WHERE id_pedido = p_pedido;
  IF NOT FOUND THEN RAISE EXCEPTION 'Pedido no encontrado'; END IF;

  INSERT INTO public.historial_pedido (id_pedido, id_estatus, comentario, id_usuario_cambio)
  VALUES (p_pedido, p_estatus, nullif(left(trim(coalesce(p_comentario, '')), 250), ''), v_admin);
END;
$$;

-- ---------- Confirmar o rechazar un comprobante ----------
CREATE OR REPLACE FUNCTION public.admin_pago(p_pago integer, p_accion text, p_nota text DEFAULT NULL)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  v_admin integer := public._exigir_admin();
  g public.pagos%ROWTYPE;
  p public.pedidos%ROWTYPE;
  v_txt text;
BEGIN
  SELECT * INTO g FROM public.pagos WHERE id_pago = p_pago;
  IF NOT FOUND THEN RAISE EXCEPTION 'Pago no encontrado'; END IF;
  SELECT * INTO p FROM public.pedidos WHERE id_pedido = g.id_pedido;
  v_txt := CASE WHEN p.metodo_pago = 'efectivo' THEN 'Anticipo' ELSE 'Pago' END;

  IF p_accion = 'confirmar' THEN
    IF g.confirmado THEN RETURN; END IF;
    UPDATE public.pagos SET confirmado = true, fecha_confirmacion = now()
     WHERE id_pago = p_pago;
    UPDATE public.pedidos SET saldo_pendiente = greatest(0, saldo_pendiente - g.monto)
     WHERE id_pedido = p.id_pedido;
    IF p.id_estatus = 1 THEN
      UPDATE public.pedidos SET id_estatus = 2 WHERE id_pedido = p.id_pedido;
      INSERT INTO public.historial_pedido (id_pedido, id_estatus, comentario, id_usuario_cambio)
      VALUES (p.id_pedido, 2, v_txt || ' confirmado', v_admin);
    ELSE
      INSERT INTO public.historial_pedido (id_pedido, id_estatus, comentario, id_usuario_cambio)
      VALUES (p.id_pedido, p.id_estatus, v_txt || ' confirmado', v_admin);
    END IF;

  ELSIF p_accion = 'rechazar' THEN
    IF g.confirmado THEN RAISE EXCEPTION 'Ese pago ya estaba confirmado'; END IF;
    DELETE FROM public.pagos WHERE id_pago = p_pago;
    INSERT INTO public.historial_pedido (id_pedido, id_estatus, comentario, id_usuario_cambio)
    VALUES (p.id_pedido, p.id_estatus,
            'Comprobante rechazado' || coalesce(': ' || nullif(left(trim(p_nota), 200), ''), ''), v_admin);
  ELSE
    RAISE EXCEPTION 'Acción no válida';
  END IF;
END;
$$;

-- ---------- Ajustar / quitar anticipo de un pedido ----------
CREATE OR REPLACE FUNCTION public.admin_anticipo(p_pedido integer, p_monto numeric)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  v_admin integer := public._exigir_admin();
  p public.pedidos%ROWTYPE;
  v numeric;
BEGIN
  SELECT * INTO p FROM public.pedidos WHERE id_pedido = p_pedido;
  IF NOT FOUND THEN RAISE EXCEPTION 'Pedido no encontrado'; END IF;
  v := greatest(0, least(p.total, coalesce(p_monto, 0)));
  UPDATE public.pedidos SET anticipo = v WHERE id_pedido = p_pedido;
  INSERT INTO public.historial_pedido (id_pedido, id_estatus, comentario, id_usuario_cambio)
  VALUES (p_pedido, p.id_estatus,
          CASE WHEN v = 0 THEN 'No se requiere pago por adelantado' ELSE 'Anticipo ajustado a $' || v END, v_admin);
END;
$$;

-- ---------- Nota interna ----------
CREATE OR REPLACE FUNCTION public.admin_nota(p_pedido integer, p_nota text)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  PERFORM public._exigir_admin();
  UPDATE public.pedidos SET notas_internas = nullif(left(trim(coalesce(p_nota, '')), 2000), '')
   WHERE id_pedido = p_pedido;
END;
$$;

-- ---------- Clientes ----------
CREATE OR REPLACE FUNCTION public.admin_clientes()
RETURNS jsonb
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE r jsonb;
BEGIN
  PERFORM public._exigir_admin();
  SELECT coalesce(jsonb_agg(to_jsonb(x) ORDER BY x.ultimo_pedido DESC NULLS LAST, x.fecha_registro DESC), '[]') INTO r
  FROM (
    SELECT u.id_usuario, u.nombre_completo, u.email, u.telefono, u.verificado, u.requiere_anticipo,
           u.id_rol, u.fecha_registro, u.ultimo_acceso,
           (SELECT count(*) FROM public.pedidos p WHERE p.id_usuario = u.id_usuario) AS pedidos,
           (SELECT coalesce(sum(total), 0) FROM public.pedidos p WHERE p.id_usuario = u.id_usuario AND p.id_estatus <> 8) AS comprado,
           (SELECT max(fecha_pedido) FROM public.pedidos p WHERE p.id_usuario = u.id_usuario) AS ultimo_pedido
      FROM public.usuarios u
  ) x;
  RETURN r;
END;
$$;

CREATE OR REPLACE FUNCTION public.admin_cliente_anticipo(p_usuario integer, p_requiere boolean)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  PERFORM public._exigir_admin();
  UPDATE public.usuarios SET requiere_anticipo = p_requiere WHERE id_usuario = p_usuario;
END;
$$;

-- ---------- Ajustes (solo anticipo) ----------
CREATE OR REPLACE FUNCTION public.admin_config(p_clave text, p_valor text)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  PERFORM public._exigir_admin();
  IF p_clave NOT IN ('anticipo_pct', 'anticipo_minimo') THEN RAISE EXCEPTION 'Ajuste no permitido'; END IF;
  IF p_valor !~ '^\d+(\.\d+)?$' THEN RAISE EXCEPTION 'Valor no válido'; END IF;
  IF p_clave = 'anticipo_pct' AND p_valor::numeric > 100 THEN RAISE EXCEPTION 'Máximo 100 %%'; END IF;
  UPDATE public.configuracion SET valor = p_valor WHERE clave = p_clave;
END;
$$;

-- ---------- Permisos de las funciones ----------
DO $$
DECLARE f text;
BEGIN
  FOREACH f IN ARRAY ARRAY[
    'public.es_admin()', 'public.admin_estado()', 'public._exigir_admin()',
    'public.admin_pedidos(integer)', 'public.admin_cambiar_estatus(integer, integer, text)',
    'public.admin_pago(integer, text, text)', 'public.admin_anticipo(integer, numeric)',
    'public.admin_nota(integer, text)', 'public.admin_clientes()',
    'public.admin_cliente_anticipo(integer, boolean)', 'public.admin_config(text, text)']
  LOOP
    EXECUTE format('REVOKE ALL ON FUNCTION %s FROM public, anon', f);
    EXECUTE format('GRANT EXECUTE ON FUNCTION %s TO authenticated', f);
  END LOOP;
END $$;

-- ---------- Comprobantes: el admin puede verlos todos ----------
DROP POLICY IF EXISTS "Comprobantes: admin ve todos" ON storage.objects;
CREATE POLICY "Comprobantes: admin ve todos" ON storage.objects
  FOR SELECT TO authenticated
  USING (bucket_id = 'comprobantes' AND public.es_admin());

-- ---------- ¿Quién será admin? ----------
-- Cambia el correo por la cuenta con la que entrarás al panel
-- (debe estar registrada y verificada en la app):
-- UPDATE public.usuarios SET id_rol = 1 WHERE lower(email) = lower('impreciones3djcga@gmail.com');

SELECT id_usuario, nombre_completo, email, id_rol, (id_auth IS NOT NULL) AS tiene_login
  FROM public.usuarios WHERE id_rol = 1;
