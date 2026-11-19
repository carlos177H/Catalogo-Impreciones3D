-- =====================================================================
-- ETAPA 5 · Avisos y notificaciones push — Catálogo 3D JCGA
-- Ejecutar en Supabase → SQL Editor → Run (idempotente).
-- Requiere etapa4_admin.sql y etapa3c_whatsapp.sql (schema privado).
-- =====================================================================

-- ---------- Avisos (los que ves en la campana 🔔) ----------
CREATE TABLE IF NOT EXISTS public.anuncios (
  id_anuncio  serial PRIMARY KEY,
  titulo      varchar(80)  NOT NULL,
  texto       varchar(300),
  icono       varchar(8)   NOT NULL DEFAULT '📣',
  url         varchar(300),
  creado      timestamptz  NOT NULL DEFAULT now(),
  activo      boolean      NOT NULL DEFAULT true,
  push_enviados integer    NOT NULL DEFAULT 0
);
ALTER TABLE public.anuncios ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Avisos activos visibles" ON public.anuncios;
CREATE POLICY "Avisos activos visibles" ON public.anuncios FOR SELECT USING (activo);
REVOKE INSERT, UPDATE, DELETE ON public.anuncios FROM anon, authenticated;

-- ---------- Dispositivos suscritos a push ----------
CREATE TABLE IF NOT EXISTS public.push_suscripciones (
  id_suscripcion serial PRIMARY KEY,
  endpoint    text NOT NULL UNIQUE,
  p256dh      text NOT NULL,
  auth        text NOT NULL,
  id_usuario  integer REFERENCES public.usuarios(id_usuario) ON DELETE SET NULL,
  creado      timestamptz NOT NULL DEFAULT now(),
  actualizado timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.push_suscripciones ENABLE ROW LEVEL SECURITY;
-- Sin políticas: nadie la lee desde la página. Solo las funciones de abajo.
REVOKE ALL ON public.push_suscripciones FROM anon, authenticated;

-- Guardar / actualizar la suscripción de este dispositivo (invitado o con sesión)
CREATE OR REPLACE FUNCTION public.guardar_suscripcion(p_endpoint text, p_p256dh text, p_auth text)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  IF p_endpoint !~ '^https://' OR length(p_endpoint) > 1000
     OR coalesce(length(p_p256dh), 0) NOT BETWEEN 40 AND 200
     OR coalesce(length(p_auth), 0) NOT BETWEEN 10 AND 100 THEN
    RAISE EXCEPTION 'Suscripción no válida';
  END IF;
  INSERT INTO public.push_suscripciones (endpoint, p256dh, auth, id_usuario)
  VALUES (p_endpoint, p_p256dh, p_auth, public.mi_id_usuario())
  ON CONFLICT (endpoint) DO UPDATE
    SET p256dh = excluded.p256dh, auth = excluded.auth,
        id_usuario = coalesce(excluded.id_usuario, public.push_suscripciones.id_usuario),
        actualizado = now();
END;
$$;

CREATE OR REPLACE FUNCTION public.borrar_suscripcion(p_endpoint text)
RETURNS void
LANGUAGE sql SECURITY DEFINER SET search_path = public
AS $$ DELETE FROM public.push_suscripciones WHERE endpoint = p_endpoint $$;

-- mi_id_usuario() debe poder llamarse sin sesión (devuelve NULL)
GRANT EXECUTE ON FUNCTION public.mi_id_usuario() TO anon;
REVOKE ALL ON FUNCTION public.guardar_suscripcion(text, text, text) FROM public;
REVOKE ALL ON FUNCTION public.borrar_suscripcion(text) FROM public;
GRANT EXECUTE ON FUNCTION public.guardar_suscripcion(text, text, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.borrar_suscripcion(text) TO anon, authenticated;

-- ---------- Admin: avisos ----------
CREATE OR REPLACE FUNCTION public.admin_anuncios()
RETURNS jsonb
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE r jsonb;
BEGIN
  PERFORM public._exigir_admin();
  SELECT jsonb_build_object(
    'anuncios', coalesce((SELECT jsonb_agg(to_jsonb(a) ORDER BY a.creado DESC)
                            FROM (SELECT * FROM public.anuncios WHERE activo ORDER BY creado DESC LIMIT 50) a), '[]'),
    'dispositivos', (SELECT count(*) FROM public.push_suscripciones),
    'dispositivos_clientes', (SELECT count(*) FROM public.push_suscripciones WHERE id_usuario IS NOT NULL)
  ) INTO r;
  RETURN r;
END;
$$;

CREATE OR REPLACE FUNCTION public.admin_anuncio_crear(p_titulo text, p_texto text, p_icono text, p_url text)
RETURNS integer
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE v integer;
BEGIN
  PERFORM public._exigir_admin();
  IF coalesce(length(trim(p_titulo)), 0) < 3 THEN RAISE EXCEPTION 'Escribe un título'; END IF;
  IF p_url IS NOT NULL AND p_url <> '' AND p_url !~ '^(https?://|#)' THEN RAISE EXCEPTION 'Enlace no válido'; END IF;
  INSERT INTO public.anuncios (titulo, texto, icono, url)
  VALUES (left(trim(p_titulo), 80), nullif(left(trim(coalesce(p_texto, '')), 300), ''),
          coalesce(nullif(left(trim(p_icono), 8), ''), '📣'), nullif(left(trim(coalesce(p_url, '')), 300), ''))
  RETURNING id_anuncio INTO v;
  RETURN v;
END;
$$;

CREATE OR REPLACE FUNCTION public.admin_anuncio_borrar(p_id integer)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  PERFORM public._exigir_admin();
  UPDATE public.anuncios SET activo = false WHERE id_anuncio = p_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.admin_anuncio_push(p_id integer, p_enviados integer)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  PERFORM public._exigir_admin();
  UPDATE public.anuncios SET push_enviados = push_enviados + greatest(0, p_enviados) WHERE id_anuncio = p_id;
END;
$$;

DO $$
DECLARE f text;
BEGIN
  FOREACH f IN ARRAY ARRAY['public.admin_anuncios()', 'public.admin_anuncio_crear(text, text, text, text)',
                           'public.admin_anuncio_borrar(integer)', 'public.admin_anuncio_push(integer, integer)']
  LOOP
    EXECUTE format('REVOKE ALL ON FUNCTION %s FROM public, anon', f);
    EXECUTE format('GRANT EXECUTE ON FUNCTION %s TO authenticated', f);
  END LOOP;
END $$;

-- ---------- Push automático al cliente cuando cambia su pedido ----------
-- Llama a la Edge Function "enviar-push" con una clave interna.
INSERT INTO privado.secretos (clave, valor) VALUES
  ('push_function_url', 'https://ygopomgquxovyqtfssvs.supabase.co/functions/v1/enviar-push'),
  ('push_secret',       'PEGA_AQUI_PUSH_INTERNAL_SECRET')
ON CONFLICT (clave) DO NOTHING;

CREATE OR REPLACE FUNCTION privado.push_estatus_pedido()
RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER
SET search_path = privado, public, extensions
AS $$
DECLARE
  p        public.pedidos%ROWTYPE;
  v_url    text := (SELECT valor FROM privado.secretos WHERE clave = 'push_function_url');
  v_secret text := (SELECT valor FROM privado.secretos WHERE clave = 'push_secret');
  v_tienda text := coalesce((SELECT valor FROM public.configuracion WHERE clave = 'url_tienda'),
                            'https://carlos177h.github.io/Catalogo-Impreciones3D/index.html');
  v_tit    text;
  v_txt    text;
  v_tipo   text;
BEGIN
  -- Solo cambios hechos por el admin (no los que hace el propio cliente)
  IF v_secret IS NULL OR v_secret LIKE 'PEGA_AQUI%'
     OR new.comentario IN ('Pedido creado desde la app')
     OR new.comentario LIKE 'Comprobante%enviado' THEN
    RETURN new;
  END IF;
  SELECT * INTO p FROM public.pedidos WHERE id_pedido = new.id_pedido;
  IF NOT FOUND OR new.id_usuario_cambio = p.id_usuario THEN RETURN new; END IF;

  v_tipo := CASE WHEN p.anticipo <= 0 THEN 'ninguno' WHEN p.metodo_pago = 'transferencia' THEN 'total' ELSE 'anticipo' END;
  v_tit := 'Pedido #' || p.id_pedido || ': ' || CASE
    WHEN new.comentario LIKE 'Comprobante rechazado%' THEN 'revisa tu comprobante'
    WHEN new.id_estatus = 2 THEN CASE v_tipo WHEN 'total' THEN 'pago confirmado ✅' WHEN 'anticipo' THEN 'anticipo confirmado ✅' ELSE 'pedido confirmado ✅' END
    WHEN new.id_estatus IN (3, 4) THEN 'en impresión 🖨️'
    WHEN new.id_estatus = 5 THEN 'en acabado 🎨'
    WHEN new.id_estatus = 6 THEN 'listo para entrega 📦'
    WHEN new.id_estatus = 7 THEN 'entregado 🎉'
    WHEN new.id_estatus = 8 THEN 'cancelado'
    ELSE 'actualizado' END;
  v_txt := coalesce(nullif(new.comentario, ''), 'Toca para ver el detalle de tu pedido.');

  PERFORM net.http_post(
    url     := v_url,
    headers := jsonb_build_object('Content-Type', 'application/json', 'x-push-secret', v_secret),
    body    := jsonb_build_object('id_usuario', p.id_usuario, 'titulo', v_tit, 'texto', v_txt,
                                  'url', v_tienda || '#pedidos')
  );
  RETURN new;
EXCEPTION WHEN others THEN
  RAISE WARNING 'push_estatus_pedido: %', SQLERRM;
  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS tr_push_estatus ON public.historial_pedido;
CREATE TRIGGER tr_push_estatus
  AFTER INSERT ON public.historial_pedido
  FOR EACH ROW EXECUTE FUNCTION privado.push_estatus_pedido();

SELECT 'ok' AS etapa5,
       (SELECT count(*) FROM public.anuncios) AS avisos,
       (SELECT count(*) FROM public.push_suscripciones) AS dispositivos;
