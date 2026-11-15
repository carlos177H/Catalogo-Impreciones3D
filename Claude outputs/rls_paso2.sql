-- ============================================
-- PASO 2: Row Level Security (RLS)
-- Catálogo 3D JCGA
-- ============================================
-- Lógica:
--   • Tablas de catálogo (productos, categorias, licencias): lectura pública (ya configurado)
--   • Tablas de referencia (estatus_pedido, roles): lectura pública
--   • Tablas de usuario: solo el usuario autenticado ve/modifica SUS propios datos
--   • usuarios: lectura de su propio registro
-- ============================================

-- =====================
-- 1. Tablas de referencia — lectura pública
-- =====================

ALTER TABLE estatus_pedido ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Estatus visibles para todos"
  ON estatus_pedido FOR SELECT USING (true);

ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Roles visibles para todos"
  ON roles FOR SELECT USING (true);

-- =====================
-- 2. Usuarios — cada quien ve solo su registro
-- =====================

ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;

-- Leer su propio perfil (vinculado por id_auth = auth.uid())
CREATE POLICY "Usuario ve su propio perfil"
  ON usuarios FOR SELECT
  USING (id_auth = auth.uid());

-- Actualizar su propio perfil
CREATE POLICY "Usuario actualiza su propio perfil"
  ON usuarios FOR UPDATE
  USING (id_auth = auth.uid())
  WITH CHECK (id_auth = auth.uid());

-- Insertar su registro al registrarse
CREATE POLICY "Usuario crea su perfil al registrarse"
  ON usuarios FOR INSERT
  WITH CHECK (id_auth = auth.uid());

-- =====================
-- 3. Carrito — cada usuario su carrito
-- =====================

ALTER TABLE carrito ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuario ve su carrito"
  ON carrito FOR SELECT
  USING (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()));

CREATE POLICY "Usuario agrega a su carrito"
  ON carrito FOR INSERT
  WITH CHECK (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()));

CREATE POLICY "Usuario modifica su carrito"
  ON carrito FOR UPDATE
  USING (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()))
  WITH CHECK (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()));

CREATE POLICY "Usuario elimina de su carrito"
  ON carrito FOR DELETE
  USING (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()));

-- =====================
-- 4. Favoritos — cada usuario sus favoritos
-- =====================

ALTER TABLE favoritos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuario ve sus favoritos"
  ON favoritos FOR SELECT
  USING (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()));

CREATE POLICY "Usuario agrega favoritos"
  ON favoritos FOR INSERT
  WITH CHECK (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()));

CREATE POLICY "Usuario elimina favoritos"
  ON favoritos FOR DELETE
  USING (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()));

-- =====================
-- 5. Direcciones — cada usuario sus direcciones
-- =====================

ALTER TABLE direcciones ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuario ve sus direcciones"
  ON direcciones FOR SELECT
  USING (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()));

CREATE POLICY "Usuario agrega direcciones"
  ON direcciones FOR INSERT
  WITH CHECK (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()));

CREATE POLICY "Usuario modifica sus direcciones"
  ON direcciones FOR UPDATE
  USING (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()))
  WITH CHECK (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()));

CREATE POLICY "Usuario elimina direcciones"
  ON direcciones FOR DELETE
  USING (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()));

-- =====================
-- 6. Pedidos — cada usuario ve sus pedidos
-- =====================

ALTER TABLE pedidos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuario ve sus pedidos"
  ON pedidos FOR SELECT
  USING (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()));

CREATE POLICY "Usuario crea pedidos"
  ON pedidos FOR INSERT
  WITH CHECK (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()));

-- No UPDATE ni DELETE — los pedidos los gestiona el admin

-- =====================
-- 7. Detalle de pedido — visible si el pedido es del usuario
-- =====================

ALTER TABLE detalle_pedido ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuario ve detalle de sus pedidos"
  ON detalle_pedido FOR SELECT
  USING (id_pedido IN (
    SELECT id_pedido FROM pedidos
    WHERE id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid())
  ));

CREATE POLICY "Usuario crea detalle de pedido"
  ON detalle_pedido FOR INSERT
  WITH CHECK (id_pedido IN (
    SELECT id_pedido FROM pedidos
    WHERE id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid())
  ));

-- =====================
-- 8. Pagos — visible si el pedido es del usuario
-- =====================

ALTER TABLE pagos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuario ve sus pagos"
  ON pagos FOR SELECT
  USING (id_pedido IN (
    SELECT id_pedido FROM pedidos
    WHERE id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid())
  ));

-- Solo INSERT — el sistema registra pagos
CREATE POLICY "Usuario registra pago"
  ON pagos FOR INSERT
  WITH CHECK (id_pedido IN (
    SELECT id_pedido FROM pedidos
    WHERE id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid())
  ));

-- =====================
-- 9. Historial de pedido — visible si el pedido es del usuario
-- =====================

ALTER TABLE historial_pedido ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuario ve historial de sus pedidos"
  ON historial_pedido FOR SELECT
  USING (id_pedido IN (
    SELECT id_pedido FROM pedidos
    WHERE id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid())
  ));

-- =====================
-- 10. Log de actividad — cada usuario ve su actividad
-- =====================

ALTER TABLE log_actividad ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuario ve su actividad"
  ON log_actividad FOR SELECT
  USING (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()));

-- =====================
-- 11. Sesiones — cada usuario ve sus sesiones
-- =====================

ALTER TABLE sesiones ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuario ve sus sesiones"
  ON sesiones FOR SELECT
  USING (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()));

CREATE POLICY "Usuario crea sesion"
  ON sesiones FOR INSERT
  WITH CHECK (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()));

CREATE POLICY "Usuario actualiza su sesion"
  ON sesiones FOR UPDATE
  USING (id_usuario IN (SELECT id_usuario FROM usuarios WHERE id_auth = auth.uid()));

-- ============================================
-- NOTA: Las políticas de productos, categorias y licencias
-- ya están configuradas (SELECT público) del Paso 1.
--
-- Para administración (Carlos como admin), puedes usar
-- la Service Role Key en el backend o el dashboard de Supabase
-- directamente — esa clave bypasea RLS.
-- ============================================
