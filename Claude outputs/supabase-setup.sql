-- ============================================================
-- VISTA: v_productos_catalogo
-- Junta productos + categorías + licencias para el frontend
-- Ejecutar en Supabase SQL Editor
-- ============================================================

CREATE OR REPLACE VIEW v_productos_catalogo AS
SELECT
  p.id,
  p.sku,
  p.fecha_registro,
  p.nombre,
  c.nombre AS categoria,
  p.descripcion_corta,
  p.descripcion_detallada,
  p.precio_base,
  p.tamano,
  p.material,
  p.gramos,
  p.horas,
  p.colores,
  p.multicolor,
  p.plataforma_fuente,
  p.url_fuente,
  p.autor_fuente,
  l.nombre AS licencia_nombre,
  l.permite_venta,
  l.nota AS licencia_nota,
  p.activo
FROM productos p
JOIN categorias c ON p.id_categoria = c.id_categoria
LEFT JOIN licencias l ON p.id_licencia = l.id_licencia
WHERE p.activo = TRUE;

-- ============================================================
-- RLS: Permitir lectura pública de productos y la vista
-- ============================================================

-- Habilitar RLS en productos (si no está habilitado)
ALTER TABLE productos ENABLE ROW LEVEL SECURITY;
ALTER TABLE categorias ENABLE ROW LEVEL SECURITY;
ALTER TABLE licencias ENABLE ROW LEVEL SECURITY;

-- Políticas de lectura pública (cualquiera puede ver productos)
CREATE POLICY "Productos visibles para todos" ON productos
  FOR SELECT USING (true);

CREATE POLICY "Categorías visibles para todos" ON categorias
  FOR SELECT USING (true);

CREATE POLICY "Licencias visibles para todos" ON licencias
  FOR SELECT USING (true);
