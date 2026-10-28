/* =========================================================
   CONFIGURACIÓN DEL NEGOCIO — edita aquí
   ========================================================= */
window.CONFIG = {
  negocio: "3D Catálogo",

  // 52 = México + número a 10 dígitos (sin espacios ni +)
  whatsapp: "527721509872",

  // Datos para transferencia (se muestran al elegir "Transferencia bancaria")
  banco: {
    nombre: "Nu México",
    clabe: "63818000193558418",
    titular: "José Carlos Granados Abraham"
  },

  // Pestañas del catálogo (el orden importa). "Todos" siempre va primero.
  categorias: [
    "Todos",
    "Oficina y Escritorio",
    "Decoración Elegante",
    "Decoración y Hogar",
    "Lámparas",
    "Macetas y Jardín",
    "Cocina",
    "Organizadores y Utilitarios",
    "Regalos Corporativos y Premios",
    "Negocios y Tiendas",
    "Recuerdos para Eventos",
    "Parejas y Amor",
    "Maestros y Escuela",
    "Libros y Lectura",
    "Juegos de Mesa",
    "Juguetes para Niños",
    "Juguetes para Adolescentes",
    "Para Jóvenes",
    "Antiestrés y Fidgets",
    "Deportes y Fitness",
    "Autos",
    "Fans: Música y Figuras",
    "Pokémon",
    "Minecraft",
    "Llaveros y Pins",
    "Llaveros de Motor",
    "Figuras Flexibles",
    "Mascotas",
    "Soportes y Gaming",
    "Souvenirs del Mundo",
    "Temporada y Festividades",
    "Miniaturas y Dioramas",
    "Maquetas e Ingeniería"
  ],

  // "Lo que está de moda" en el inicio:
  //   temporada: palabras clave por mes (1 = enero … 12 = diciembre); toma hasta maxTemporada productos que coincidan.
  //   manual: SKUs que quieras destacar siempre (cámbialos cuando algo se ponga de moda).
  tendencias: {
    max: 16,
    maxTemporada: 6,
    temporada: {
      1:  ["reyes", "rosca", "ano nuevo"],
      2:  ["san valent", "corazon", "amor"],
      3:  ["primavera", "flor"],
      4:  ["pascua", "conejo"],
      5:  ["mama", "madre", "flor"],
      6:  ["papa", "padre", "mundial", "copa"],
      7:  ["vacaciones", "playa"],
      8:  ["escolar", "regreso a clases", "lapiz"],
      9:  ["mexico", "patri", "independencia"],
      10: ["halloween", "muertos", "calavera", "calabaza", "fantasma"],
      11: ["muertos", "calavera", "catrina", "navidad"],
      12: ["navidad", "navideno", "reno", "nieve", "santa"]
    },
    manual: [
      "3DC-0878", "3DC-1477", "3DC-1360", "3DC-1343", "3DC-1246", "3DC-0316",
      "3DC-1309", "3DC-1308", "3DC-0112", "3DC-0301", "3DC-1307", "3DC-0393"
    ]
  },

  // Descuentos por cantidad: false = desactivados (todos pagan precioBase).
  // Cuando quieras activarlos cambia a true; la escala de abajo ya está lista.
  descuentosActivos: false,

  // Escala de descuento por cantidad (se usa cuando un producto tiene escalaDescuento: null)
  escalaDescuento: [
    { min: 1,  max: 4,    descuento: 0    },
    { min: 5,  max: 19,   descuento: 0.05 },
    { min: 20, max: null, descuento: 0.15 }
  ],

  // Costos reales (de costos_catalogo_3d.xlsx, 28-oct-2026). tools/extraer-makerworld.js usa la misma fórmula:
  // costo = g/1000 × $kg × (1+merma) × [1+merma multicolor] + h × (luz + desgaste) + mano de obra + empaque
  // precio = máx(mínimo, redondear(costo × (1 + margen)))
  costos: {
    kgPLA: 300,            // PLA otros colores; verde 288, negro 259, blanco 266, amarillo 275, rojo 266
    kgPETG: 450,
    merma: 0.05, mermaMulticolor: 0.15,
    luzHora: 0.448,        // 140 W × $3.20/kWh
    desgasteHora: 3.33,    // impresora $11,650 / 5,000 h + $1 mantenimiento
    manoObra: 8.33,        // $50/h × 10 min
    empaque: 5,
    margen: 1.5,           // 150 % sobre el costo
    precioMinimo: 10,
    redondeo: 5
  },

  // true = oculta del catálogo los productos cuya licencia no permite venderlos
  ocultarSinLicenciaComercial: false,

  // Dirección pública del catálogo (por ejemplo https://usuario.github.io/catalogo/).
  // Se usa para el enlace de cada producto en el mensaje de WhatsApp.
  // Si queda vacía, se usa la dirección desde donde se abrió la página (si es http/https).
  urlSitio: ""
};
