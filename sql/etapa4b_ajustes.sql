-- =====================================================================
-- ETAPA 4b · Modo mantenimiento — Catálogo 3D JCGA
-- Ejecutar en Supabase → SQL Editor → Run (idempotente).
-- Requiere etapa4_admin.sql
-- =====================================================================

-- ---------- Ajustes nuevos ----------
INSERT INTO public.configuracion (clave, valor, descripcion) VALUES
  ('mantenimiento',     'false', 'true = la tienda muestra pantalla de mantenimiento'),
  ('mantenimiento_msg', '',      'Mensaje que ven los clientes durante el mantenimiento'),
  ('url_tienda',        'https://carlos177h.github.io/Catalogo-Impreciones3D/index.html',
                        'Dirección de la tienda (para los enlaces de productos en WhatsApp)')
ON CONFLICT (clave) DO NOTHING;

-- ---------- admin_config: acepta también el mantenimiento ----------
CREATE OR REPLACE FUNCTION public.admin_config(p_clave text, p_valor text)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  PERFORM public._exigir_admin();
  IF p_clave IN ('anticipo_pct', 'anticipo_minimo') THEN
    IF p_valor !~ '^\d+(\.\d+)?$' THEN RAISE EXCEPTION 'Valor no válido'; END IF;
    IF p_clave = 'anticipo_pct' AND p_valor::numeric > 100 THEN RAISE EXCEPTION 'Máximo 100 %%'; END IF;
  ELSIF p_clave = 'mantenimiento' THEN
    IF p_valor NOT IN ('true', 'false') THEN RAISE EXCEPTION 'Valor no válido'; END IF;
  ELSIF p_clave = 'mantenimiento_msg' THEN
    p_valor := left(trim(coalesce(p_valor, '')), 300);
  ELSE
    RAISE EXCEPTION 'Ajuste no permitido';
  END IF;
  UPDATE public.configuracion SET valor = p_valor WHERE clave = p_clave;
END;
$$;
REVOKE ALL ON FUNCTION public.admin_config(text, text) FROM public, anon;
GRANT EXECUTE ON FUNCTION public.admin_config(text, text) TO authenticated;

-- ---------- En mantenimiento no entran pedidos (salvo del admin) ----------
CREATE OR REPLACE FUNCTION public.bloquear_pedido_en_mantenimiento()
RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  IF (SELECT valor FROM public.configuracion WHERE clave = 'mantenimiento') = 'true'
     AND NOT EXISTS (SELECT 1 FROM public.usuarios WHERE id_usuario = new.id_usuario AND id_rol = 1) THEN
    RAISE EXCEPTION 'La tienda está en mantenimiento. Intenta más tarde.';
  END IF;
  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS tr_bloquear_mantenimiento ON public.pedidos;
CREATE TRIGGER tr_bloquear_mantenimiento
  BEFORE INSERT ON public.pedidos
  FOR EACH ROW EXECUTE FUNCTION public.bloquear_pedido_en_mantenimiento();

SELECT clave, valor FROM public.configuracion ORDER BY clave;
