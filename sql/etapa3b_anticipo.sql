-- =====================================================================
-- ETAPA 3b · Anticipo del 50 % — Catálogo 3D JCGA
-- Ejecutar en Supabase → SQL Editor → Run (idempotente).
-- Requiere sql/etapa3_pedidos.sql
-- =====================================================================
-- Reglas:
--   • Transferencia: se paga el 100 % por adelantado (con captura).
--   • Efectivo: anticipo del X % (configuracion.anticipo_pct) por transferencia
--     con captura, y el resto al entregar, EXCEPTO si:
--       - el cliente es de confianza (usuarios.requiere_anticipo = false), o
--       - el total es menor a configuracion.anticipo_minimo.
--   • El admin puede quitar el anticipo de un pedido (pedidos.anticipo = 0).
--
-- pedidos.anticipo = monto que se debe pagar ANTES de imprimir
--                    (transferencia: total · efectivo: X % o 0).
-- =====================================================================

-- ---------- Configuración editable ----------
CREATE TABLE IF NOT EXISTS public.configuracion (
  clave       varchar(50) PRIMARY KEY,
  valor       text NOT NULL,
  descripcion varchar(200)
);
ALTER TABLE public.configuracion ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Configuración visible para todos" ON public.configuracion;
CREATE POLICY "Configuración visible para todos" ON public.configuracion FOR SELECT USING (true);
REVOKE INSERT, UPDATE, DELETE ON public.configuracion FROM anon, authenticated;

INSERT INTO public.configuracion (clave, valor, descripcion) VALUES
  ('anticipo_pct',    '50',  'Porcentaje de anticipo para pedidos en efectivo'),
  ('anticipo_minimo', '150', 'Pedidos con total menor a este monto no piden anticipo')
ON CONFLICT (clave) DO NOTHING;

-- ---------- Cliente de confianza ----------
ALTER TABLE public.usuarios ADD COLUMN IF NOT EXISTS requiere_anticipo boolean NOT NULL DEFAULT true;
-- (El usuario no puede cambiarlo: solo tiene UPDATE en nombre, teléfono, foto y último acceso.)

-- ---------- crear_pedido con anticipo ----------
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
           least(999, greatest(1, sum((it->>'qty')::int)))::int AS cantidad,
           pr.precio_base::numeric AS precio
      FROM jsonb_array_elements(p_items) it
      JOIN public.productos pr ON pr.id = (it->>'id')::int AND pr.activo
     GROUP BY pr.id, pr.precio_base;

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

  INSERT INTO public.detalle_pedido (id_pedido, id_producto, cantidad, precio_unitario, descuento_aplicado, subtotal)
  SELECT v_pedido, id_producto, cantidad, precio, 0, cantidad * precio FROM _items;

  INSERT INTO public.historial_pedido (id_pedido, id_estatus, comentario, id_usuario_cambio)
  VALUES (v_pedido, 1, 'Pedido creado desde la app', v_uid);

  DELETE FROM public.carrito WHERE id_usuario = v_uid;

  RETURN jsonb_build_object('id_pedido', v_pedido, 'total', v_total, 'anticipo', v_anticipo, 'productos', v_n);
END;
$$;

-- ---------- registrar_comprobante: sirve para pago total o anticipo ----------
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
  IF v_ped.anticipo <= 0 THEN
    RAISE EXCEPTION 'Este pedido no requiere pago por adelantado';
  END IF;
  IF p_archivo IS NULL OR split_part(p_archivo, '/', 1) <> auth.uid()::text THEN
    RAISE EXCEPTION 'Archivo no válido';
  END IF;

  DELETE FROM public.pagos WHERE id_pedido = p_pedido AND NOT confirmado;

  INSERT INTO public.pagos (id_pedido, monto, metodo, referencia, comprobante_url, confirmado, notas)
  VALUES (p_pedido, v_ped.anticipo, 'transferencia',
          nullif(left(trim(coalesce(p_referencia, '')), 100), ''), p_archivo, false,
          CASE WHEN v_ped.metodo_pago = 'efectivo' THEN 'Anticipo' ELSE 'Pago total' END)
  RETURNING id_pago INTO v_pago;

  INSERT INTO public.historial_pedido (id_pedido, id_estatus, comentario, id_usuario_cambio)
  VALUES (p_pedido, v_ped.id_estatus,
          CASE WHEN v_ped.metodo_pago = 'efectivo' THEN 'Comprobante de anticipo enviado' ELSE 'Comprobante de pago enviado' END,
          v_uid);

  RETURN jsonb_build_object('id_pago', v_pago);
END;
$$;

REVOKE ALL ON FUNCTION public.crear_pedido(jsonb, text, text, text) FROM public, anon;
REVOKE ALL ON FUNCTION public.registrar_comprobante(integer, text, text) FROM public, anon;
GRANT EXECUTE ON FUNCTION public.crear_pedido(jsonb, text, text, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.registrar_comprobante(integer, text, text) TO authenticated;

-- Pedidos de prueba ya creados por transferencia: su pago adelantado es el total
UPDATE public.pedidos SET anticipo = total
 WHERE metodo_pago = 'transferencia' AND anticipo = 0 AND id_estatus = 1;

-- Verificación
SELECT clave, valor FROM public.configuracion ORDER BY clave;
