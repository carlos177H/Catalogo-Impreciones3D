-- =====================================================================
-- ETAPA 3c · Aviso automático a tu WhatsApp (CallMeBot) — 3D JCGA
-- Ejecutar en Supabase → SQL Editor → Run (idempotente).
-- =====================================================================
-- Cada vez que un cliente con cuenta:
--   • crea un pedido            → te llega el resumen por WhatsApp
--   • sube un comprobante       → te llega el aviso para revisarlo
--
-- ANTES de ejecutar: consigue tu apikey de CallMeBot (ver instrucciones
-- que te dio Claude) y pégala abajo en 'PEGA_AQUI_TU_APIKEY'.
-- Si la dejas así, todo funciona pero no se envían mensajes.
-- =====================================================================

CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- ---------- Datos privados (schema no expuesto a la API) ----------
CREATE SCHEMA IF NOT EXISTS privado;
REVOKE ALL ON SCHEMA privado FROM public, anon, authenticated;

CREATE TABLE IF NOT EXISTS privado.secretos (
  clave varchar(50) PRIMARY KEY,
  valor text NOT NULL
);
REVOKE ALL ON privado.secretos FROM public, anon, authenticated;

INSERT INTO privado.secretos (clave, valor) VALUES
  ('whatsapp_admin',   '5217721509872'),
  ('callmebot_apikey', 'PEGA_AQUI_TU_APIKEY')
ON CONFLICT (clave) DO NOTHING;

-- Para cambiar la apikey después:
--   UPDATE privado.secretos SET valor = 'TU_APIKEY' WHERE clave = 'callmebot_apikey';

-- ---------- Enviar mensaje ----------
CREATE OR REPLACE FUNCTION privado.enviar_whatsapp(p_texto text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = privado, public, extensions
AS $$
DECLARE
  v_tel text := (SELECT valor FROM privado.secretos WHERE clave = 'whatsapp_admin');
  v_key text := (SELECT valor FROM privado.secretos WHERE clave = 'callmebot_apikey');
BEGIN
  IF v_key IS NULL OR v_key = '' OR v_key LIKE 'PEGA_AQUI%' THEN
    RETURN;  -- sin configurar: no se envía nada
  END IF;
  -- pg_net es asíncrono: se envía después de guardar el pedido y nunca lo bloquea
  PERFORM net.http_get(
    url    := 'https://api.callmebot.com/whatsapp.php',
    params := jsonb_build_object('phone', v_tel, 'apikey', v_key, 'text', left(p_texto, 3500))
  );
EXCEPTION WHEN others THEN
  RAISE WARNING 'enviar_whatsapp: %', SQLERRM;
END;
$$;
REVOKE ALL ON FUNCTION privado.enviar_whatsapp(text) FROM public, anon, authenticated;

-- ---------- Disparador: pedido nuevo / comprobante enviado ----------
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

DROP TRIGGER IF EXISTS tr_avisar_whatsapp ON public.historial_pedido;
CREATE TRIGGER tr_avisar_whatsapp
  AFTER INSERT ON public.historial_pedido
  FOR EACH ROW EXECUTE FUNCTION privado.avisar_movimiento_pedido();

-- ---------- Prueba: manda un mensaje ahora mismo ----------
SELECT privado.enviar_whatsapp('✅ Prueba: los avisos de pedidos de 3D JCGA ya están conectados.');

-- Si no llega en 1-2 minutos, revisa la respuesta de CallMeBot:
--   SELECT status_code, content FROM net._http_response ORDER BY created DESC LIMIT 3;
