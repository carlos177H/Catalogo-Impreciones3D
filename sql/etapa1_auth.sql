-- =====================================================================
-- ETAPA 1 · Autenticación — Catálogo 3D JCGA
-- Ejecutar UNA vez en Supabase → SQL Editor → Run.
-- Es seguro volver a ejecutarlo (idempotente).
-- =====================================================================
-- Qué hace:
--   1. El perfil en `usuarios` lo crea la BD automáticamente al registrarse
--      (trigger en auth.users), ya no el navegador.
--   2. Mantiene `verificado` y `email` sincronizados con Supabase Auth.
--   3. Impide que un usuario se cambie a sí mismo el rol, activo, verificado…
--      (solo puede editar nombre, teléfono, foto y último acceso).
--   4. Crea perfiles faltantes para usuarios que ya existían.
-- =====================================================================

-- ---------- 1. Ajustes de la tabla ----------
ALTER TABLE public.usuarios ALTER COLUMN password_hash SET DEFAULT 'supabase_auth';
CREATE UNIQUE INDEX IF NOT EXISTS usuarios_id_auth_uidx ON public.usuarios (id_auth);

-- ---------- 2. Crear / vincular perfil al registrarse ----------
CREATE OR REPLACE FUNCTION public.handle_new_auth_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_nombre   text := nullif(trim(new.raw_user_meta_data->>'nombre'), '');
  v_telefono text := nullif(regexp_replace(coalesce(new.raw_user_meta_data->>'telefono', ''), '\D', '', 'g'), '');
BEGIN
  -- Si ya existía un registro con ese correo sin vincular, se vincula
  UPDATE public.usuarios
     SET id_auth    = new.id,
         verificado = (new.email_confirmed_at IS NOT NULL),
         telefono   = coalesce(telefono, v_telefono)
   WHERE lower(email) = lower(new.email)
     AND id_auth IS NULL;

  IF NOT FOUND THEN
    INSERT INTO public.usuarios (id_auth, nombre_completo, email, telefono, password_hash, verificado)
    VALUES (new.id,
            coalesce(v_nombre, split_part(new.email, '@', 1)),
            new.email,
            v_telefono,
            'supabase_auth',
            new.email_confirmed_at IS NOT NULL)
    ON CONFLICT (id_auth) DO NOTHING;
  END IF;

  RETURN new;
EXCEPTION WHEN others THEN
  -- Nunca bloquear el registro por un problema con el perfil
  RAISE WARNING 'handle_new_auth_user: %', SQLERRM;
  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_auth_user();

-- ---------- 3. Sincronizar verificación y cambio de correo ----------
CREATE OR REPLACE FUNCTION public.handle_auth_user_updated()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.usuarios
     SET verificado = (new.email_confirmed_at IS NOT NULL),
         email      = new.email
   WHERE id_auth = new.id;
  RETURN new;
EXCEPTION WHEN others THEN
  RAISE WARNING 'handle_auth_user_updated: %', SQLERRM;
  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_updated ON auth.users;
CREATE TRIGGER on_auth_user_updated
  AFTER UPDATE OF email_confirmed_at, email ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_auth_user_updated();

-- ---------- 4. Permisos: qué puede tocar el usuario de su perfil ----------
-- El navegador ya no inserta perfiles (lo hace el trigger).
DROP POLICY IF EXISTS "Usuario crea su perfil al registrarse" ON public.usuarios;
REVOKE INSERT, DELETE ON public.usuarios FROM anon, authenticated;

-- Solo estas columnas son editables por el propio usuario.
REVOKE UPDATE ON public.usuarios FROM anon, authenticated;
GRANT UPDATE (nombre_completo, telefono, foto_perfil, ultimo_acceso)
  ON public.usuarios TO authenticated;

-- ---------- 5. Perfiles faltantes de usuarios que ya existían ----------
INSERT INTO public.usuarios (id_auth, nombre_completo, email, telefono, password_hash, verificado)
SELECT u.id,
       coalesce(nullif(trim(u.raw_user_meta_data->>'nombre'), ''), split_part(u.email, '@', 1)),
       u.email,
       nullif(regexp_replace(coalesce(u.raw_user_meta_data->>'telefono', ''), '\D', '', 'g'), ''),
       'supabase_auth',
       u.email_confirmed_at IS NOT NULL
  FROM auth.users u
 WHERE NOT EXISTS (SELECT 1 FROM public.usuarios p WHERE p.id_auth = u.id)
   AND NOT EXISTS (SELECT 1 FROM public.usuarios p WHERE lower(p.email) = lower(u.email))
ON CONFLICT (id_auth) DO NOTHING;

UPDATE public.usuarios p
   SET verificado = (u.email_confirmed_at IS NOT NULL)
  FROM auth.users u
 WHERE p.id_auth = u.id;

-- Verificación rápida
SELECT id_usuario, nombre_completo, email, telefono, verificado, id_rol
  FROM public.usuarios ORDER BY id_usuario;
