-- =====================================================================
-- ETAPA 7 · Limpieza del catálogo — Catálogo 3D JCGA
-- Borra los 1,000 productos FALSOS (ID 2369 a 3368, cargados el 8-nov):
-- nombres inventados, enlaces a modelos que no coinciden y fotos que
-- nunca existieron.
-- Ejecutar en Supabase → SQL Editor → Run. Se puede correr varias veces.
-- =====================================================================

-- 1. Quitar las referencias en tablas como carrito y favoritos
--    (no toca los pedidos: esos productos se desactivan en lugar de borrarse)
DO $$
DECLARE r record; n integer;
BEGIN
  FOR r IN
    SELECT c.conrelid::regclass AS tabla, a.attname AS columna
      FROM pg_constraint c
      JOIN pg_attribute a ON a.attrelid = c.conrelid AND a.attnum = c.conkey[1]
     WHERE c.contype = 'f' AND c.confrelid = 'public.productos'::regclass
       AND c.conrelid <> 'public.detalle_pedido'::regclass
  LOOP
    EXECUTE format('DELETE FROM %s WHERE %I BETWEEN 2369 AND 3368', r.tabla, r.columna);
    GET DIAGNOSTICS n = ROW_COUNT;
    RAISE NOTICE '% filas quitadas de %', n, r.tabla;
  END LOOP;
END $$;

-- 2. Los que aparecen en algún pedido: solo se desactivan (el pedido conserva su detalle)
UPDATE public.productos SET activo = false
 WHERE id BETWEEN 2369 AND 3368
   AND EXISTS (SELECT 1 FROM public.detalle_pedido d WHERE d.id_producto = productos.id);

-- 3. El resto se borra
DELETE FROM public.productos p
 WHERE p.id BETWEEN 2369 AND 3368
   AND NOT EXISTS (SELECT 1 FROM public.detalle_pedido d WHERE d.id_producto = p.id);

-- Verificación: debe dar 0 productos falsos activos
SELECT
  (SELECT count(*) FROM public.productos WHERE id BETWEEN 2369 AND 3368 AND activo) AS falsos_activos,
  (SELECT count(*) FROM public.productos WHERE id BETWEEN 2369 AND 3368)            AS falsos_restantes_en_pedidos,
  (SELECT count(*) FROM public.productos WHERE activo)                               AS productos_activos;
