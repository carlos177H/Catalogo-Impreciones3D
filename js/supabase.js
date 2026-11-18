/* =========================================================
   CONEXIÓN A SUPABASE
   ---------------------------------------------------------
   Carga los productos desde la base de datos en Supabase.
   Si falla, la app sigue funcionando con el archivo estático
   productos.js como respaldo.
   ========================================================= */

const SUPABASE_URL = "https://ygopomgquxovyqtfssvs.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_k0bj54R4PfgEBHTYjBidFQ_T-1X2Owi";

window.supabaseClient = null;

/* ---------- Inicializar cliente ---------- */
function initSupabase() {
  if (!window.supabase?.createClient) {
    console.warn("[Supabase] SDK no cargado, usando datos locales.");
    return null;
  }
  // Guardar el hash ANTES de crear el cliente: el SDK lo procesa y lo borra
  // (enlaces de confirmación de correo y recuperación de contraseña).
  window.AUTH_URL_HASH = location.hash;
  try {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("[Supabase] Cliente inicializado.");
    return window.supabaseClient;
  } catch (e) {
    console.error("[Supabase] Error al inicializar:", e);
    return null;
  }
}

/* ---------- Transformar fila de BD → formato del frontend ---------- */
function dbToProducto(row) {
  return {
    id: row.id,
    sku: row.sku,
    fechaRegistro: row.fecha_registro,
    nombre: row.nombre,
    categoria: row.categoria,
    descripcionCorta: row.descripcion_corta || "",
    descripcionDetallada: row.descripcion_detallada || "",
    imagenes: [],  // Se cargarán después cuando exista producto_imagenes
    precioBase: parseFloat(row.precio_base),
    escalaDescuento: null,
    tamano: row.tamano || null,
    impresion: {
      material: row.material || "PLA",
      gramos: parseFloat(row.gramos) || 0,
      horas: parseFloat(row.horas) || 0,
      colores: row.colores || 1,
      multicolor: row.multicolor || false
    },
    etiquetas: [],  // Se cargarán después cuando exista producto_etiquetas
    fuente: {
      plataforma: row.plataforma_fuente || "",
      url: row.url_fuente || "",
      autor: row.autor_fuente || "",
      licencia: row.licencia_nombre || "",
      permiteVenta: row.permite_venta || false,
      notaLicencia: row.licencia_nota || ""
    },
    activo: row.activo
  };
}

/* ---------- Cargar productos desde Supabase ---------- */
async function cargarProductosSupabase() {
  const client = initSupabase();
  if (!client) return false;

  try {
    // Supabase limita cada respuesta a 1000 filas por defecto.
    const pageSize = 1000;
    const data = [];
    for (let from = 0; ; from += pageSize) {
      const { data: page, error } = await client
        .from("v_productos_catalogo")
        .select("*")
        .order("id", { ascending: true })
        .range(from, from + pageSize - 1);

      if (error) throw error;
      if (!page || page.length === 0) break;
      data.push(...page);
      if (page.length < pageSize) break;
    }

    if (data.length === 0) {
      console.warn("[Supabase] No hay productos en la BD, usando datos locales.");
      return false;
    }

    // Transformar y asignar
    const productos = data.map(dbToProducto);

    // Si hay productos locales (del archivo estático), mezclar las imágenes
    // que ya tenemos ahí mientras no exista producto_imagenes en la BD
    if (window.PRODUCTOS && window.PRODUCTOS.length > 0) {
      const mapaLocal = new Map();
      window.PRODUCTOS.forEach(p => mapaLocal.set(p.id, p));

      productos.forEach(p => {
        const local = mapaLocal.get(p.id);
        if (local) {
          // Tomar imágenes y etiquetas del archivo estático
          if (local.imagenes?.length) p.imagenes = local.imagenes;
          if (local.etiquetas?.length) p.etiquetas = local.etiquetas;
        }
        // Si no hay imágenes, usar placeholder
        if (!p.imagenes.length) {
          p.imagenes = [""];  // El fallback imgFallback() se encargará
        }
      });
    }

    window.PRODUCTOS = productos;
    console.log(`[Supabase] ✅ ${productos.length} productos cargados desde la BD.`);
    return true;
  } catch (e) {
    console.error("[Supabase] Error al cargar productos:", e);
    return false;
  }
}
