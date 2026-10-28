/* =========================================================
   CONFIGURACIÓN DEL NEGOCIO — edita aquí
   ========================================================= */
window.CONFIG = {
  negocio: "3D Catálogo",

  // 52 = México + número a 10 dígitos (sin espacios ni +)
  whatsapp: "527721509872",

  // ⚠️ DATOS DE EJEMPLO: reemplázalos por los reales
  banco: {
    nombre: "BBVA México (ejemplo)",
    clabe: "012180001234567890",   // 18 dígitos
    titular: "Nombre del Titular"
  },

  // Pestañas del catálogo (el orden importa). "Todos" siempre va primero.
  categorias: [
    "Todos",
    "Juguetes para Niños",
    "Juguetes para Adolescentes",
    "Para Jóvenes",
    "Antiestrés y Fidgets",
    "Pokémon",
    "Minecraft",
    "Llaveros y Pins",
    "Llaveros de Motor",
    "Figuras Flexibles",
    "Lámparas",
    "Decoración y Hogar",
    "Macetas y Jardín",
    "Cocina",
    "Organizadores y Utilitarios",
    "Negocios y Tiendas",
    "Mascotas",
    "Soportes y Gaming",
    "Temporada y Festividades",
    "Maquetas e Ingeniería"
  ],

  // Descuentos por cantidad: false = desactivados (todos pagan precioBase).
  // Cuando quieras activarlos cambia a true; la escala de abajo ya está lista.
  descuentosActivos: false,

  // Escala de descuento por cantidad (se usa cuando un producto tiene escalaDescuento: null)
  escalaDescuento: [
    { min: 1,  max: 4,    descuento: 0    },
    { min: 5,  max: 19,   descuento: 0.05 },
    { min: 20, max: null, descuento: 0.15 }
  ],

  // Costos para calcular precios sugeridos (tools/extraer-makerworld.js usa la misma fórmula)
  // precio = (gramos × costoGramo × [recargo multicolor] + horas × costoHora) × margen
  costos: {
    costoGramo: { PLA: 0.40, PETG: 0.45 },  // MXN por gramo (≈ $400–450 el kg)
    costoHora: 8,                          // luz + desgaste de la impresora, MXN/h
    recargoMulticolor: 1.15,               // purga de filamento al cambiar colores
    margen: 2.5,
    precioMinimo: 45,
    redondeo: 5
  },

  // true = oculta del catálogo los productos cuya licencia no permite venderlos
  ocultarSinLicenciaComercial: false
};
