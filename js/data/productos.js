/* =========================================================
   BASE DE DATOS DE PRODUCTOS (simulada)
   ---------------------------------------------------------
   Cada objeto es un "registro". Para agregar un producto:
   copia un registro, cambia el id (único) y sus campos.
   Puedes generar registros nuevos desde MakerWorld con
   tools/extraer-makerworld.js

   Campos:
   - id                 número único
   - nombre             nombre que ve el cliente
   - categoria          debe coincidir con CONFIG.categorias
   - descripcionCorta   1 línea para la tarjeta
   - descripcionDetallada  texto del modal
   - imagenes           1 a 5 URLs (la primera es la portada)
   - precioBase         MXN por pieza (1–4 pz)
   - escalaDescuento    null = usa CONFIG.escalaDescuento
   - tamano             texto libre o null ("Consultar")
   - impresion          datos de producción (para costos)
   - etiquetas          palabras extra para el buscador
   - fuente             origen del modelo y su licencia
   - activo             false = no aparece en el catálogo
   ========================================================= */

window.PRODUCTOS = [
  {
    id: 17,
    nombre: "Kit Card esqueleto T-Rex",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Rompecabezas de esqueleto de T-Rex que se desprende y se arma.",
    descripcionDetallada: "Rompecabezas tipo kit card de un esqueleto de Tiranosaurio Rex. Los huesos se desprenden fácilmente con los dedos y encajan con precisión. Tamaño grande de 16.5 cm de alto, con piezas numeradas y soporte opcional. Didáctico y divertido para niños y fans de los dinosaurios.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa8aa848252aa11/design/2024-03-02_5c5aa861060158.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa8aa848252aa11/design/2024-02-26_9b0c03c30c2f18.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa8aa848252aa11/design/2024-02-26_af4b8d4f97a13.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa8aa848252aa11/design/2024-02-24_056b47ee72b0b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa8aa848252aa11/design/2024-02-23_b5ea9e03973ca.jpg"
    ],
    precioBase: 180,
    escalaDescuento: null,
    tamano: "16.5 cm de alto (también 14 y 12.5 cm)",
    impresion: {
      material: "PLA",
      gramos: 87,
      horas: 4.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "dinosaurio",
      "trex",
      "rompecabezas",
      "kit card",
      "esqueleto",
      "didactico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/199388#profileId-227912",
      autor: "Fletch",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 207,
    nombre: "Rompecabezas 3D T-Rex (29 piezas)",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Esqueleto de T-Rex para armar.",
    descripcionDetallada: "Rompecabezas 3D tipo tarjeta de 29 piezas con el esqueleto de un Tiranosaurio Rex. Se arma y desarma una y otra vez.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US940b744f6543ce/design/2024-02-24_ab7d2c658b12c8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US940b744f6543ce/design/2024-02-25_281dee0b74018.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US940b744f6543ce/design/2024-02-25_04c753445ef54.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US940b744f6543ce/design/2024-02-24_05ec5d88a396f.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US940b744f6543ce/design/2024-02-24_2b7e948042d35.jpeg"
    ],
    precioBase: 85,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 43,
      horas: 2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "rompecabezas",
      "dinosaurio",
      "trex",
      "kit card"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/202358#profileId-53474873",
      autor: "3Dingo",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 209,
    nombre: "Trompo ForeverSpin",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Trompo balanceado que gira mucho tiempo.",
    descripcionDetallada: "Trompo de dos piezas perfectamente balanceado que gira durante mucho tiempo.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US857b3911ec38fc/design/2025-02-02_620aa6fee7595.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US857b3911ec38fc/design/2025-02-02_f136eeff2b99e.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 13,
      horas: 0.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "trompo",
      "juguete",
      "clasico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1065822#profileId-217778347",
      autor: "MSTR3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 210,
    nombre: "Máquina de canicas con elevador",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Pista de canicas con elevador de manivela.",
    descripcionDetallada: "Juego de canicas impreso en su sitio con elevador helicoidal de manivela; funciona con más de 10 canicas de 12 mm.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US1b03fa8f782b0a/design/2025-07-18_9f847a82101dc.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US1b03fa8f782b0a/design/2025-07-18_7f006e833625c8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US1b03fa8f782b0a/design/2025-07-18_0a73df22771628.jpeg"
    ],
    precioBase: 230,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 115,
      horas: 5.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "canicas",
      "marble run",
      "juguete",
      "mecanico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1411375#profileId-355797284",
      autor: "WillCAD",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 225,
    nombre: "Dragones flexibles de Cómo entrenar a tu dragón",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Chimuelo y sus hermanos, más un llavero.",
    descripcionDetallada: "Set de dragoncitos flexibles inspirados en Chimuelo de Cómo entrenar a tu dragón, con llavero incluido.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US36d2291decd9d2/design/2025-12-13_20ffbfef7e5678.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US36d2291decd9d2/design/2025-12-13_a0a15c4b50fcd.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US36d2291decd9d2/design/2025-12-13_3803b87aa873a.jpg"
    ],
    precioBase: 380,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 4,
      multicolor: true
    },
    etiquetas: [
      "dragon",
      "chimuelo",
      "flexi",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2111474#profileId-517315397",
      autor: "tristan",
      licencia: "MakerWorld Exclusive License",
      permiteVenta: false,
      notaLicencia: "Prohíbe el uso comercial. Usa una marca o personaje de terceros: Cómo entrenar a tu dragón (DreamWorks)."
    },
    activo: true
  },
  {
    id: 316,
    nombre: "Dragón articulado tierno",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Dragoncito flexible a 2 colores.",
    descripcionDetallada: "Dragón articulado y adorable, impreso en una sola pieza. Ideal para niños.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe00bdfd754c8ba/design/080a25d3bc2dc455.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe00bdfd754c8ba/design/93255faee1b39884.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe00bdfd754c8ba/design/a8976eae7f868e67.jpg"
    ],
    precioBase: 50,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 17,
      horas: 1.4,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "dragon",
      "flexi",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2735519#profileId-738439244",
      autor: "jars_2003",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 317,
    nombre: "Mini camión con suspensión",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Camión con suspensión funcional.",
    descripcionDetallada: "Mini camión impreso al 100% con suspensión funcional. Rueda y amortigua como uno de verdad.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa4ce45cad0b721/design/64a1903771e8cb5f.png",
      "https://makerworld.bblmw.com/makerworld/model/USa4ce45cad0b721/design/0a0645ef22ca1a2c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa4ce45cad0b721/design/5ee4b16d5dd2e661.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa4ce45cad0b721/design/073799c3afb4490c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa4ce45cad0b721/design/a7d6e9099c44bda0.jpg"
    ],
    precioBase: 160,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 74,
      horas: 3.7,
      colores: 4,
      multicolor: true
    },
    etiquetas: [
      "camion",
      "carro",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2527991#profileId-877678710",
      autor: "Peter Lancz",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 318,
    nombre: "T-Rex mordedor",
    categoria: "Juguetes para Niños",
    descripcionCorta: "T-Rex que abre y cierra la boca.",
    descripcionDetallada: "Dinosaurio T-Rex que muerde: abre y cierra la boca al presionarlo.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US71ac5f60cd4d38/design/2024-07-31_9d5188f8f9f08.png",
      "https://makerworld.bblmw.com/makerworld/model/US71ac5f60cd4d38/design/2024-07-31_74da10ee8566c.png",
      "https://makerworld.bblmw.com/makerworld/model/US71ac5f60cd4d38/design/2024-07-31_996c916dffcc7.png",
      "https://makerworld.bblmw.com/makerworld/model/US71ac5f60cd4d38/design/2024-08-03_5e4ef57248d8e.png",
      "https://makerworld.bblmw.com/makerworld/model/US71ac5f60cd4d38/design/2024-07-31_98ce0a016bd0c.jpg"
    ],
    precioBase: 90,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 30,
      horas: 2.7,
      colores: 4,
      multicolor: true
    },
    etiquetas: [
      "dinosaurio",
      "trex",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/566111#profileId-245397355",
      autor: "IDMyron",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 319,
    nombre: "Silbato súper fuerte",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Silbato de emergencia muy ruidoso.",
    descripcionDetallada: "Silbato de nueva generación muy fuerte, útil para deportes, campamentos o emergencias.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USaa3a4eda67bf64/design/a5c07e93d9e63d55.png",
      "https://makerworld.bblmw.com/makerworld/model/USaa3a4eda67bf64/design/2024-10-11_ec1ad6c324f1d.png",
      "https://makerworld.bblmw.com/makerworld/model/USaa3a4eda67bf64/design/2024-10-18_d43189f6d705e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USaa3a4eda67bf64/design/2024-10-12_78978795fdcf88.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USaa3a4eda67bf64/design/2024-10-12_0d0bb782dfae2.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 8,
      horas: 0.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "silbato",
      "deportes",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/695558#profileId-373943670",
      autor: "SimRacers Home",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 320,
    nombre: "Cohete aspersor de agua",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Cohete que riega agua con la manguera.",
    descripcionDetallada: "Cohete aspersor que se conecta a la manguera y salpica agua. Diversión garantizada en el jardín.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US7ec83340d6fb24/design/2025-04-30_d1513810cf6a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7ec83340d6fb24/design/2025-04-30_5dc8a520a9cb6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7ec83340d6fb24/design/2025-04-30_e8a67ec87f4b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7ec83340d6fb24/design/2025-04-30_496262c68f10e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7ec83340d6fb24/design/2025-04-30_84fe44be26017.jpg"
    ],
    precioBase: 600,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 4,
      multicolor: true
    },
    etiquetas: [
      "cohete",
      "agua",
      "jardin",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1370364#profileId-445158075",
      autor: "Sevro",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 321,
    nombre: "Gato (tres en raya) de viaje",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Juego de gato con caja magnética.",
    descripcionDetallada: "Juego de gato (tres en raya) de viaje con caja y tapa magnética.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US4e71f73c431bfa/design/2024-03-05_4e1da398018d1.png",
      "https://makerworld.bblmw.com/makerworld/model/US4e71f73c431bfa/design/2024-03-07_ee45f11fea15c.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US4e71f73c431bfa/design/2024-03-07_2912fb3e0f416.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US4e71f73c431bfa/design/2024-03-07_9c0c7cb6b62a6.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US4e71f73c431bfa/130965851/instance/2024-03-12_ffec6c0a471c8.png"
    ],
    precioBase: 230,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 113,
      horas: 4.8,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "gato",
      "juego de mesa",
      "viaje"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/228020#profileId-130965851",
      autor: "Celestin",
      licencia: "CC BY",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito al autor."
    },
    activo: true
  },
  {
    id: 322,
    nombre: "Flicket – juguete de trucos",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Juguete de habilidad para hacer trucos.",
    descripcionDetallada: "Flicket es un juguete sensorial y de habilidad para hacer trucos con los dedos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US27a90fa1aa8f6b/design/2025-01-11_418281732a5f9.jpeg"
    ],
    precioBase: 315,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PETG",
      gramos: 110,
      horas: 9.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "habilidad",
      "trucos",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/981417#profileId-201345326",
      autor: "TEAWRECKS",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 323,
    nombre: "Planeador ultraligero",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Avión planeador que vuela muy bien.",
    descripcionDetallada: "Planeador ultraligero de solo 5 g que vuela de verdad.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US7aa188fc4e28af/design/2025-01-17_44ed9b28a26e8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7aa188fc4e28af/design/2025-01-20_abd4cc3c51a33.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7aa188fc4e28af/design/2025-01-20_c10a128a7bdec.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7aa188fc4e28af/design/2025-01-20_f180c5d0fc23.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 5,
      horas: 0.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "avion",
      "planeador",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1002706#profileId-847160545",
      autor: "Tieq",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 324,
    nombre: "Kit card excavadora",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Excavadora para desprender y armar.",
    descripcionDetallada: "Tarjeta kit con una excavadora para separar y ensamblar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USfde3fc27bf1a8d/design/2025-08-20_422423831902b8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfde3fc27bf1a8d/design/2025-08-20_6e619bb4ff9ee8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfde3fc27bf1a8d/design/2025-08-20_7cb4d0f0d41bc8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfde3fc27bf1a8d/design/2025-08-20_46b5c1bddc7698.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfde3fc27bf1a8d/design/2025-08-20_426b1ed57ea148.jpg"
    ],
    precioBase: 110,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 39,
      horas: 3.2,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "kit card",
      "excavadora",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1717799#profileId-397587043",
      autor: "angrelou",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 325,
    nombre: "Rompecabezas de colores deslizante",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Desliza las piezas hasta ordenar los colores.",
    descripcionDetallada: "Rompecabezas de piezas deslizantes de colores para ejercitar la lógica.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US4192f918e5bc37/design/2025-11-05_e0348ea9983ae.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4192f918e5bc37/design/2025-11-05_b566badff97cf.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4192f918e5bc37/design/2025-11-05_0142a7c808e618.jpg"
    ],
    precioBase: 125,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 68,
      horas: 2.3,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "rompecabezas",
      "colores",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1962124#profileId-464820282",
      autor: "Armengol13",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 326,
    nombre: "Planeador WingStar",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Planeador compacto para interior y exterior.",
    descripcionDetallada: "Planeador de vuelo libre compacto para lanzar en interiores o al aire libre.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US38aeb9f1efeda8/design/2024-12-30_248ae13be78d7.png",
      "https://makerworld.bblmw.com/makerworld/model/US38aeb9f1efeda8/design/2024-12-25_e8c821b0fd62a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US38aeb9f1efeda8/design/2024-12-25_4e619b42969f7.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US38aeb9f1efeda8/design/2024-12-25_e24b9ed66aff.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US38aeb9f1efeda8/design/2025-01-03_3fa33cb4858bb.jpg"
    ],
    precioBase: 65,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 29,
      horas: 1.5,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "avion",
      "planeador",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/912363#profileId-193512789",
      autor: "Arty_SC",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 327,
    nombre: "Juguete de equilibrio flexible",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Figura que se balancea y mantiene el equilibrio.",
    descripcionDetallada: "Juguete de equilibrio flexible con estética mecánica.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USada22ef907102b/design/5d236212-d89b-4f9c-8fd3-30d29ea0a152.webp",
      "https://makerworld.bblmw.com/makerworld/model/USada22ef907102b/design/4b00b608-1a30-4567-81ee-0c59578e4cdc.webp",
      "https://makerworld.bblmw.com/makerworld/model/USada22ef907102b/design/2025-03-01_5f75afdda2911.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USada22ef907102b/164084368/instance/9e06d45c-2c24-44fb-b9ab-a5ea91d47fcd.webp"
    ],
    precioBase: 55,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 29,
      horas: 1.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "equilibrio",
      "ninos",
      "mecanico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/826488#profileId-164084368",
      autor: "Joywent",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: BRIO (marca registrada)."
    },
    activo: true
  },
  {
    id: 328,
    nombre: "Pista de canicas con escalera",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Las canicas suben solas por una escalera.",
    descripcionDetallada: "Pista de canicas impresa en una pieza con un autómata de escalera que sube las canicas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US440ba09f0d61f0/design/2025-08-25_144593de83797.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US440ba09f0d61f0/design/2025-08-25_e1b5eaa53248.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US440ba09f0d61f0/design/2025-08-25_9472d3d6d905d.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US440ba09f0d61f0/design/2025-08-25_1aa8fdc7440c58.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US440ba09f0d61f0/design/2025-08-25_4e244162947378.jpeg"
    ],
    precioBase: 120,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 62,
      horas: 2.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "canicas",
      "marble run",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1732564#profileId-390269231",
      autor: "WillCAD",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 329,
    nombre: "Máquina de burbujas de manivela",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Hace burbujas sin pilas, solo girando.",
    descripcionDetallada: "Máquina de pompas de jabón que funciona girando la manivela, sin pilas ni motor.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USee668cd42f42/design/2025-06-21_6e4bbcf90f067.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USee668cd42f42/design/2025-06-21_20c81d42dfeef8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USee668cd42f42/design/2025-06-21_a48744df71b4c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USee668cd42f42/design/2025-06-21_169e9704196d28.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USee668cd42f42/design/2025-06-21_5d52163df845c.jpg"
    ],
    precioBase: 650,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "burbujas",
      "ninos",
      "jardin"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1539441#profileId-670011012",
      autor: "coverv",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 330,
    nombre: "Rompecabezas apilable de formas",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Tablero Montessori de figuras.",
    descripcionDetallada: "Tablero Montessori para apilar formas a 5 colores; ayuda a aprender figuras y colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USaa41dda0ef5e8a/design/c4f6c3c92f1a14ff.png",
      "https://makerworld.bblmw.com/makerworld/model/USaa41dda0ef5e8a/design/2026-01-20_1bb60b36ee48f8.png",
      "https://makerworld.bblmw.com/makerworld/model/USaa41dda0ef5e8a/design/2026-01-20_400d29d8afb6e8.png",
      "https://makerworld.bblmw.com/makerworld/model/USaa41dda0ef5e8a/576071429/instance/2026-01-20_c840d7e4be4cf.png"
    ],
    precioBase: 260,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 146,
      horas: 4.6,
      colores: 5,
      multicolor: false
    },
    etiquetas: [
      "montessori",
      "formas",
      "bebes",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2277895#profileId-576071429",
      autor: "Stag 3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 331,
    nombre: "Jeep de juguete Fixum",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Jeep impreso en una pieza con llantas que giran.",
    descripcionDetallada: "Jeep de juguete impreso en su lugar con ruedas que giran.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc6de90ec9314e9/design/2023-09-25_0644b5830a294.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc6de90ec9314e9/design/2023-09-25_f520f2c9fe72c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc6de90ec9314e9/design/2023-09-25_319e0ea1e7e71.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc6de90ec9314e9/design/2023-09-25_d957068f16bf2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc6de90ec9314e9/design/2023-09-25_d7ac29891730e8.jpg"
    ],
    precioBase: 90,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 52,
      horas: 1.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "jeep",
      "carro",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/20866#profileId-26052311",
      autor: "Fixumdude",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 332,
    nombre: "Dinosaurio efecto tejido",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Dinosaurio con textura de crochet.",
    descripcionDetallada: "Dinosaurio decorativo con textura que imita tejido a crochet.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US3fefd72e7951c2/design/2025-01-16_8c9c34c9e110d8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3fefd72e7951c2/design/2025-01-16_93d26a9cc6034.jpg"
    ],
    precioBase: 120,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 26,
      horas: 4.4,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "dinosaurio",
      "crochet",
      "tierno"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1001454#profileId-299247512",
      autor: "TreeD-prints",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 333,
    nombre: "Fidget de burbujas",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Burbuja que hace pop.",
    descripcionDetallada: "Juguete antiestrés de burbujas que se presionan, ideal para niños.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US41ca6f9c1881d1/design/2025-01-14_c3fe30826adde8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US41ca6f9c1881d1/design/2025-01-14_64771bf910be4.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US41ca6f9c1881d1/design/2025-01-14_ab893c1f05ff9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US41ca6f9c1881d1/design/2025-01-14_7beaf09f49683.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US41ca6f9c1881d1/design/2025-01-14_04005b42491a8.jpeg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 4,
      horas: 0.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "burbujas",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/991103#profileId-737093334",
      autor: "Kong 3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 334,
    nombre: "Carrito miniatura",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Auto pequeño de impresión rápida.",
    descripcionDetallada: "Carrito en miniatura para jugar o coleccionar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe80c1db4b05441/design/2025-01-14_e19c4f3f343468.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe80c1db4b05441/design/2025-01-14_7efe0e551199f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe80c1db4b05441/design/2025-01-14_228cda9874c3f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe80c1db4b05441/design/2025-01-14_198fd613a94e5.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 7,
      horas: 0.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "carro",
      "mini",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/993817#profileId-202284761",
      autor: "Skierak",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 335,
    nombre: "Lagartija articulada",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Lagartija flexible de 5 g.",
    descripcionDetallada: "Lagartija articulada de solo 5 g, ideal como recuerdo de fiesta.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US387e72318a2969/design/3a356adb2a2854f1.png",
      "https://makerworld.bblmw.com/makerworld/model/US387e72318a2969/design/e38b5f37e84840c4.png",
      "https://makerworld.bblmw.com/makerworld/model/US387e72318a2969/design/8b474ac5575d66ab.png",
      "https://makerworld.bblmw.com/makerworld/model/US387e72318a2969/design/1aebadde88979829.png",
      "https://makerworld.bblmw.com/makerworld/model/US387e72318a2969/design/400bdc6addd1842e.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 6,
      horas: 0.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "lagartija",
      "flexi",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2716330#profileId-737255320",
      autor: "魔趣MOQU",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 336,
    nombre: "Silbato de 6 tonos",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Silbato súper fuerte con seis tonos.",
    descripcionDetallada: "Silbato de seis tonos muy potente.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US1ae8add6261f97/design/16f53e540d58fbb0.png",
      "https://makerworld.bblmw.com/makerworld/model/US1ae8add6261f97/design/92df2595bff18ac8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US1ae8add6261f97/design/b53a63f0c93e8171.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US1ae8add6261f97/design/9d37e1ea2e227d45.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US1ae8add6261f97/design/b295b37934b8f72a.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 12,
      horas: 0.7,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "silbato",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2999228#profileId-852501284",
      autor: "Chox",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 337,
    nombre: "Diorama de tren funcional",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Tren en miniatura que se mueve.",
    descripcionDetallada: "Diorama de tren en miniatura a varios colores con función de movimiento.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US1b6e131ffe48c6/design/2025-02-08_c2b7041fd4e74.png",
      "https://makerworld.bblmw.com/makerworld/model/US1b6e131ffe48c6/design/2025-02-08_7539e0acbc541.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1b6e131ffe48c6/design/2025-02-08_7a1bfadcf594c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1b6e131ffe48c6/design/2025-02-08_91453d3cce418.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1b6e131ffe48c6/design/2025-02-08_38a9e5a7eeaf9.jpg"
    ],
    precioBase: 155,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 67,
      horas: 3.7,
      colores: 8,
      multicolor: true
    },
    etiquetas: [
      "tren",
      "diorama",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1087051#profileId-554651505",
      autor: "BamBam Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 338,
    nombre: "Yate Benchy que flota",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Barquito que flota en el agua.",
    descripcionDetallada: "Barquito Benchy en versión yate que sí flota. Ideal para la tina o la alberca.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USaa99a87c143dce/design/2025-04-15_d3158dfac14c18.png",
      "https://makerworld.bblmw.com/makerworld/model/USaa99a87c143dce/design/2025-04-15_597879384a4fb.png",
      "https://makerworld.bblmw.com/makerworld/model/USaa99a87c143dce/design/2025-04-15_0636be5732a19.png",
      "https://makerworld.bblmw.com/makerworld/model/USaa99a87c143dce/design/2025-04-12_08c9dcd4bc94.png",
      "https://makerworld.bblmw.com/makerworld/model/USaa99a87c143dce/274437489/instance/2025-04-12_5538f18ccff49.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 19,
      horas: 1.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "barco",
      "flota",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1311637#profileId-274437489",
      autor: "Approx",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 339,
    nombre: "Rompecabezas lógico hexagonal",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Rompecabezas de 12 colores.",
    descripcionDetallada: "Rompecabezas de lógica con piezas hexagonales a varios colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe60ef5ab6a6d0/design/2024-09-10_7188deed5cbc68.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USe60ef5ab6a6d0/design/2024-09-10_0635c0f01cf5b8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USe60ef5ab6a6d0/design/2024-09-10_94fb57a96b62.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USe60ef5ab6a6d0/design/2024-09-10_07e535bdb268b.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USe60ef5ab6a6d0/design/2024-09-10_7e693291b1cf68.jpeg"
    ],
    precioBase: 80,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 34,
      horas: 2,
      colores: 12,
      multicolor: true
    },
    etiquetas: [
      "rompecabezas",
      "logica",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/633351#profileId-122298134",
      autor: "phillip",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 340,
    nombre: "Cohete de aire a presión",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Cohete que se lanza con aire.",
    descripcionDetallada: "Lanzador de cohetes por presión de aire. Diversión al aire libre.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US7963d96490fcda/design/2024-10-24_2468e89ba1123.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7963d96490fcda/design/2024-10-24_14c545771a62a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7963d96490fcda/design/2024-10-24_76cc8a8cc27e6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7963d96490fcda/design/2024-12-29_c775031e6195c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7963d96490fcda/143311367/instance/2024-10-24_41ee006da2941.png"
    ],
    precioBase: 135,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 81,
      horas: 2.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cohete",
      "aire",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/726755#profileId-143311367",
      autor: "Patopato_Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 341,
    nombre: "Ajedrez de fantasía El Señor de los Anillos",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Piezas de ajedrez de fantasía épica.",
    descripcionDetallada: "Juego de ajedrez de fantasía inspirado en El Señor de los Anillos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USae8329a067917c/design/fbf5aa6741e42dd4.png",
      "https://makerworld.bblmw.com/makerworld/model/USae8329a067917c/design/0417fca16b9eb356.png",
      "https://makerworld.bblmw.com/makerworld/model/USae8329a067917c/design/e1a3c656b5cae102.png",
      "https://makerworld.bblmw.com/makerworld/model/USae8329a067917c/design/85286315cd986c75.png",
      "https://makerworld.bblmw.com/makerworld/model/USae8329a067917c/design/28620011076e5ccb.png"
    ],
    precioBase: 650,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "ajedrez",
      "fantasia",
      "senor de los anillos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2726880#profileId-744319641",
      autor: "OverdoseCreative",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: El Señor de los Anillos (Middle-earth Enterprises)."
    },
    activo: true
  },
  {
    id: 342,
    nombre: "Mini avión 4.0",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Avioncito ligero que vuela.",
    descripcionDetallada: "Mini avión ligero de 3 g que vuela al lanzarlo.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6400b011883e4/design/2024-06-22_d0e63a88f8c35.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6400b011883e4/design/2024-06-22_81b072f3e3038.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6400b011883e4/design/2024-06-22_a2ef3417f14fb.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6400b011883e4/design/2024-06-22_bcd94f3f0c30b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6400b011883e4/design/2024-06-22_bca4254524a2b.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 3,
      horas: 0.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "avion",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/506378#profileId-90585902",
      autor: "Frontx",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 343,
    nombre: "Excavadora de orugas",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Excavadora de juguete resistente.",
    descripcionDetallada: "Excavadora de juguete resistente, diseñada para que jueguen niños pequeños. Escala 1:50.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USbfc9dd6ab4fc5/design/2023-09-24_13e1373485207.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbfc9dd6ab4fc5/design/2023-10-08_a44952411b60e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbfc9dd6ab4fc5/design/2023-10-17_778581670f17a.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USbfc9dd6ab4fc5/design/2023-09-26_150d3940eb586.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbfc9dd6ab4fc5/design/2023-09-23_06456c6b3d96c.jpg"
    ],
    precioBase: 495,
    escalaDescuento: null,
    tamano: "Escala 1:50",
    impresion: {
      material: "PLA",
      gramos: 192,
      horas: 13.5,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "excavadora",
      "construccion",
      "ninos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/18311#profileId-63984461",
      autor: "Murata",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 344,
    nombre: "Rompecabezas Tetris",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Tetris en físico.",
    descripcionDetallada: "Rompecabezas con piezas de Tetris para jugar en físico.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USfe66bca246062f/design/2024-07-03_c15258a6c63f4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfe66bca246062f/design/2024-07-03_a805018c576de.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfe66bca246062f/design/2024-07-14_e58f4314b91ed.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfe66bca246062f/98978664/instance/2024-07-14_c0cab9ca34387.jpg"
    ],
    precioBase: 280,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 156,
      horas: 6.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "tetris",
      "rompecabezas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/522980#profileId-98978664",
      autor: "Vejstrk",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Tetris (The Tetris Company)."
    },
    activo: true
  },
  {
    id: 345,
    nombre: "Planeador F-22 Raptor",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Planeador de caza que vuela.",
    descripcionDetallada: "Planeador con forma de avión F-22 Raptor que vuela muy bien.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US88bf37a203f504/design/2024-10-22_9e6a86c930472.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US88bf37a203f504/design/2024-10-22_24a8077766c4b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US88bf37a203f504/design/2024-10-22_de5adf5987ad.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 7,
      horas: 0.5,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "avion",
      "planeador",
      "f22"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/722799#profileId-198888964",
      autor: "udj studios",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 346,
    nombre: "Tetris balance de viaje",
    categoria: "Juguetes para Niños",
    descripcionCorta: "Juego de equilibrio con piezas de Tetris.",
    descripcionDetallada: "Juego de equilibrio para apilar piezas de Tetris, versión de viaje.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9245939caeecd8/design/2024-09-27_abc3a1ca6564f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9245939caeecd8/design/a47e0359bd41a64e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9245939caeecd8/design/fc22a4d12a14eacc.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9245939caeecd8/design/d7797f393fe89440.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9245939caeecd8/design/55ae1fa4bf2cd6ea.jpg"
    ],
    precioBase: 370,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 177,
      horas: 8.1,
      colores: 8,
      multicolor: true
    },
    etiquetas: [
      "tetris",
      "equilibrio",
      "juego de mesa"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/666495#profileId-206566073",
      autor: "Knispel",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Tetris (The Tetris Company)."
    },
    activo: true
  },
  {
    id: 2,
    nombre: "Kit Card Jeep para armar",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Jeep que se desprende de una tarjeta y se arma en minutos.",
    descripcionDetallada: "Juguete tipo kit card: todas las piezas vienen unidas en una tarjeta impresa en una sola pieza. Se separan con pinzas de corte y se ensamblan para formar un Jeep. Versión multicolor con techo de lona. Advertencia: contiene piezas pequeñas, no apto para menores de 3 años.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US5575f79fd35979/design/2024-05-19_73876eb84bb18.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5575f79fd35979/design/2024-03-03_ee8ca02b59ce4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5575f79fd35979/design/2024-03-04_f697b9afe9f7f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5575f79fd35979/design/2024-03-04_861d4135a059d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5575f79fd35979/design/2024-04-03_c33b506110352.jpg"
    ],
    precioBase: 160,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 59,
      horas: 4.5,
      colores: 4,
      multicolor: true
    },
    etiquetas: [
      "kit card",
      "carro",
      "auto",
      "armable",
      "jeep"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/223303#profileId-241285",
      autor: "agepbiz",
      licencia: "CC BY-NC-ND",
      permiteVenta: false,
      notaLicencia: "No comercial. Además, \"Jeep\" es marca registrada de Stellantis."
    },
    activo: true
  },
  {
    id: 202,
    nombre: "Kit card Fórmula 1",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Arma tu propio monoplaza de F1.",
    descripcionDetallada: "Tarjeta kit para armar un monoplaza de Fórmula 1: separa las piezas y ensambla en minutos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb4c691bf68362d/design/2025-05-30_c0d448770873a.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb4c691bf68362d/design/2025-05-30_1594a240de1668.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb4c691bf68362d/design/2025-05-30_f52ffbc3bfa128.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb4c691bf68362d/design/2025-05-30_514a94d3b7b6a8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb4c691bf68362d/315209393/instance/2025-05-30_68c8b42a48c1.jpg"
    ],
    precioBase: 55,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 23,
      horas: 1.4,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "kit card",
      "f1",
      "formula 1",
      "auto"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1471294#profileId-315209393",
      autor: "TSmitty3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 203,
    nombre: "Kit card Ferrari F40",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Ferrari F40 en tarjeta para armar.",
    descripcionDetallada: "Tarjeta kit con un Ferrari F40 para separar y ensamblar, sin soportes.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US33952e242ff622/design/dad0ca830f3677e0.png",
      "https://makerworld.bblmw.com/makerworld/model/US33952e242ff622/design/59b74f6d3382d860.png",
      "https://makerworld.bblmw.com/makerworld/model/US33952e242ff622/design/2aef9b96eee14232.png",
      "https://makerworld.bblmw.com/makerworld/model/US33952e242ff622/design/b3529c628f7a6ec6.png",
      "https://makerworld.bblmw.com/makerworld/model/US33952e242ff622/design/c61452e2af91f20e.png"
    ],
    precioBase: 125,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 40,
      horas: 4.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "kit card",
      "ferrari",
      "auto"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2377927#profileId-608014335",
      autor: "Rolf Bertz",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Ferrari (marca registrada)."
    },
    activo: true
  },
  {
    id: 348,
    nombre: "Anillos fidget giroscópicos",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Anillos que giran como giroscopio.",
    descripcionDetallada: "Juguete fidget giroscópico de anillos con bordes redondeados.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf4bc3fc518b032/design/2024-10-19_5cd3fe5b0301.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf4bc3fc518b032/design/2024-10-19_4991a6722f2b3.jpg"
    ],
    precioBase: 75,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 46,
      horas: 1.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "giroscopio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/714615#profileId-140866259",
      autor: "Marwolaeth",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 349,
    nombre: "Cubo transformador de origami",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Cubo que cambia de forma.",
    descripcionDetallada: "Cubo que se transforma y cambia de forma como un origami.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe369e0315df81c/design/2025-06-06_8cc1ceb4fe53c8.png",
      "https://makerworld.bblmw.com/makerworld/model/USe369e0315df81c/design/2025-06-06_eebe4a8f79bbb8.png",
      "https://makerworld.bblmw.com/makerworld/model/USe369e0315df81c/design/2025-06-06_0da00c84f0fa3.png",
      "https://makerworld.bblmw.com/makerworld/model/USe369e0315df81c/design/2025-06-06_daa6107d233c3.png",
      "https://makerworld.bblmw.com/makerworld/model/USe369e0315df81c/design/2025-06-06_09a2694a31db78.png"
    ],
    precioBase: 90,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 40,
      horas: 2.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cubo",
      "origami",
      "fidget"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1492537#profileId-321344362",
      autor: "Austin Vojta",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 350,
    nombre: "Ajedrez minimalista plegable",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Tablero que guarda las piezas.",
    descripcionDetallada: "Juego de ajedrez completo con tablero y almacenamiento integrado, plegable y portátil.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US8b313579bdb263/design/2024-12-21_6e24a0ff606b38.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8b313579bdb263/design/2024-12-21_e18f60d5238c68.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8b313579bdb263/design/2024-12-21_1421081a6c9448.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8b313579bdb263/design/2024-12-21_4bb42528e96f78.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8b313579bdb263/design/2024-12-21_d69f009872f5b.jpg"
    ],
    precioBase: 750,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "ajedrez",
      "juego de mesa"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/899120#profileId-246062036",
      autor: "ERAVIA",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 351,
    nombre: "Torre de dados de recarga automática",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Torre que devuelve los dados sola.",
    descripcionDetallada: "Torre de dados que regresa los dados automáticamente. Para juegos de mesa y rol.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc1bb596fc33b7b/design/2024-12-15_40339882a576a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc1bb596fc33b7b/design/2024-12-15_0a3dc4a5d404a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc1bb596fc33b7b/design/2025-03-11_a875377ce2463.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc1bb596fc33b7b/design/2024-12-21_cf37e979946fc.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc1bb596fc33b7b/design/2024-12-17_4d7089f513f7a.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "dados",
      "juego de mesa",
      "rol"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/882272#profileId-192803599",
      autor: "Rossero",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 352,
    nombre: "Dados mecánicos",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Dados con mecanismo interno.",
    descripcionDetallada: "Dados mecánicos con mecanismo interno sorprendente.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9bbd3607b71a32/design/2024-09-07_b4175ec344ed3.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9bbd3607b71a32/126474622/instance/2024-09-07_70c7ef4f3ea36.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US9bbd3607b71a32/126474622/instance/2024-09-19_166ff2698ab0a.jpg"
    ],
    precioBase: 70,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 33,
      horas: 1.6,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "dados",
      "mecanico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/628340#profileId-126474622",
      autor: "StatusSymbol",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 353,
    nombre: "Mano robótica",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Mano robótica articulada.",
    descripcionDetallada: "Pequeña mano robótica con dedos articulados.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US7669cd99499a0c/design/2025-02-21_ea49e9c24d615.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7669cd99499a0c/design/2025-02-21_1d6ac0b4a37e5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7669cd99499a0c/design/2025-02-21_4cbbfd77315f2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7669cd99499a0c/design/2025-02-21_4137b421cd423.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7669cd99499a0c/design/2025-02-21_da7657aff4305.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 18,
      horas: 0.7,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "robot",
      "mano",
      "mecanico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1133070#profileId-233261518",
      autor: "Patopato_Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 354,
    nombre: "Árbol de Navidad transformable",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Árbol que se transforma en robot.",
    descripcionDetallada: "Robot transformable que se convierte en árbol de Navidad.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US91f4abe66240d6/design/2024-11-09_c25cd234490c8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US91f4abe66240d6/design/2024-11-09_fb36f8bfef951.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US91f4abe66240d6/design/2024-11-09_3ee52d469c52d.jpg"
    ],
    precioBase: 75,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 35,
      horas: 1.5,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "robot",
      "transformable",
      "navidad"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/773259#profileId-152846516",
      autor: "Kit Crafters",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 355,
    nombre: "Trebuchet de escritorio",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Catapulta medieval que lanza monedas.",
    descripcionDetallada: "Trebuchet de mesa que lanza pequeños proyectiles como monedas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US522f13dacb47a6/design/2024-11-04_b87fbc784e7c2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US522f13dacb47a6/design/2024-11-04_59f1dadc0d337.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US522f13dacb47a6/design/2024-11-03_0ee399772016c8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US522f13dacb47a6/149399622/instance/2024-11-03_cfbc3df563227.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US522f13dacb47a6/149399622/instance/2024-11-03_3d51df27f8a228.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "trebuchet",
      "catapulta",
      "medieval"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/756525#profileId-149399622",
      autor: "OwenTF",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 356,
    nombre: "Cubo rompecabezas magnético",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Cubo 3x3 magnético.",
    descripcionDetallada: "Cubo rompecabezas 3x3 con piezas magnéticas a varios colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US37129cb531db99/design/2024-10-17_6c04d11263441.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US37129cb531db99/design/2024-10-03_fab9487261956.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US37129cb531db99/design/2024-10-06_8ee9aabf066ab.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US37129cb531db99/design/2024-10-06_75dbc05e16872.png",
      "https://makerworld.bblmw.com/makerworld/model/US37129cb531db99/140177907/instance/2024-10-17_0c244c373e82d.jpg"
    ],
    precioBase: 345,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 131,
      horas: 9.6,
      colores: 7,
      multicolor: true
    },
    etiquetas: [
      "cubo",
      "rompecabezas",
      "magnetico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/680441#profileId-140177907",
      autor: "Murata",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 357,
    nombre: "Super Mario grande",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Mario de 23 cm de alto.",
    descripcionDetallada: "Figura grande de Super Mario de 23 cm a varios colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US2bb73b106683e5/design/2025-09-24_32513d2d022ef.png",
      "https://makerworld.bblmw.com/makerworld/model/US2bb73b106683e5/design/2025-09-24_5ae8ef4578ddb8.png",
      "https://makerworld.bblmw.com/makerworld/model/US2bb73b106683e5/design/2025-09-24_9c19bb22d53d9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2bb73b106683e5/design/2025-09-24_33ad5081691c2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2bb73b106683e5/design/2025-09-24_51ed1bfcb34f1.jpg"
    ],
    precioBase: 550,
    escalaDescuento: null,
    tamano: "23 cm de alto",
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 8,
      multicolor: false
    },
    etiquetas: [
      "mario",
      "nintendo",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1823981#profileId-419640508",
      autor: "model lover",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Nintendo."
    },
    activo: true
  },
  {
    id: 358,
    nombre: "Personaje Among Us",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Tripulante a 4 colores.",
    descripcionDetallada: "Personaje de Among Us a 4 colores. Elige el color en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb3336bc770fbb3/design/e591570ce551d56b.png",
      "https://makerworld.bblmw.com/makerworld/model/USb3336bc770fbb3/design/92c10629f6df8eb1.png",
      "https://makerworld.bblmw.com/makerworld/model/USb3336bc770fbb3/design/086177aa3d6246cd.png",
      "https://makerworld.bblmw.com/makerworld/model/USb3336bc770fbb3/design/072d2e63164750dc.png",
      "https://makerworld.bblmw.com/makerworld/model/USb3336bc770fbb3/design/825e179fb68acccb.png"
    ],
    precioBase: 60,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 21,
      horas: 1.6,
      colores: 4,
      multicolor: true
    },
    etiquetas: [
      "among us",
      "videojuego",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/865068#profileId-765126432",
      autor: "ilRox.3D STUDIO",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Among Us (Innersloth)."
    },
    activo: true
  },
  {
    id: 359,
    nombre: "Sonic",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Figura de Sonic de 15.5 cm.",
    descripcionDetallada: "Figura de Sonic el erizo a varios colores, de 15.5 cm de alto.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000178904/design/2024-02-09_r7xl8zu62ch5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000178904/design/2024-02-09_wugn9yrxv1r7.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000178904/design/2024-02-09_ybxmojhqtdck.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000178904/design/2024-02-09_3td8lshgiw8a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000178904/design/2024-02-09_7heaiauguoqx.jpg"
    ],
    precioBase: 500,
    escalaDescuento: null,
    tamano: "15.5 cm de alto",
    impresion: {
      material: "PLA",
      gramos: 223,
      horas: 12.1,
      colores: 6,
      multicolor: true
    },
    etiquetas: [
      "sonic",
      "sega",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/178904#profileId-49743618",
      autor: "reddadsteve",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 360,
    nombre: "Kirby efecto crochet",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Kirby con textura de tejido.",
    descripcionDetallada: "Figura de Kirby con textura que imita crochet.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US507125c23a7e7e/design/2024-08-27_6a7baca260043.png",
      "https://makerworld.bblmw.com/makerworld/model/US507125c23a7e7e/design/2025-10-19_0b4287cc394b9.png",
      "https://makerworld.bblmw.com/makerworld/model/US507125c23a7e7e/467214219/instance/2024-08-27_097ea8305d7d2.png",
      "https://makerworld.bblmw.com/makerworld/model/US507125c23a7e7e/467214219/instance/2024-08-27_aba1ac7562b2d.png",
      "https://makerworld.bblmw.com/makerworld/model/US507125c23a7e7e/467214219/instance/2024-08-27_17ed876a65a4d.png"
    ],
    precioBase: 250,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 100,
      horas: 6.6,
      colores: 4,
      multicolor: false
    },
    etiquetas: [
      "kirby",
      "nintendo",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/608896#profileId-467214219",
      autor: "NaraaPrints",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Nintendo."
    },
    activo: true
  },
  {
    id: 361,
    nombre: "Trompo de batalla con lanzador",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Trompo con lanzador de salto.",
    descripcionDetallada: "Trompo de batalla con lanzador manual.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US63bc46d2d2a17b/design/4e837de74356df06.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US63bc46d2d2a17b/design/78ec675fd6bd3bdc.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US63bc46d2d2a17b/design/7ede07f7ba40f423.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US63bc46d2d2a17b/design/9cd21fe09d3d9509.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US63bc46d2d2a17b/design/4a556e13662721f7.jpg"
    ],
    precioBase: 115,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 60,
      horas: 2.3,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "trompo",
      "batalla",
      "lanzador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2845840#profileId-786361322",
      autor: "H2Jack Concepts",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 362,
    nombre: "Sprite de Fortnite",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Sprite Punto Cero de 3.5 cm.",
    descripcionDetallada: "Sprite Punto Cero de Fortnite en tamaño mini o llavero.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe33d6e60d6157f/design/c8a1ae35c09a4582.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe33d6e60d6157f/design/a9c6bd2709c76d1f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe33d6e60d6157f/design/5470183c88f53d5d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe33d6e60d6157f/design/74cdb203a13665db.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe33d6e60d6157f/design/97ddd7f83f9f9ec6.jpg"
    ],
    precioBase: 165,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 68,
      horas: 4.2,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "fortnite",
      "videojuego",
      "llavero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2921647#profileId-870568105",
      autor: "Paulies Prints",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Fortnite (Epic Games)."
    },
    activo: true
  },
  {
    id: 363,
    nombre: "Caja rompecabezas de laberinto",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Caja que se abre resolviendo el laberinto.",
    descripcionDetallada: "Caja rompecabezas elegante con laberinto para guardar regalos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US48f34604160ba3/design/2025-01-30_3bdc6235203c4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US48f34604160ba3/design/2025-01-30_8ea10434d4da1.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US48f34604160ba3/design/2025-01-30_4442f9d6b15cb8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US48f34604160ba3/design/2025-01-30_9db93f5d1091a8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US48f34604160ba3/design/2025-01-30_404ffbadc23b6.jpg"
    ],
    precioBase: 155,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 65,
      horas: 4.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "rompecabezas",
      "laberinto",
      "caja"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1056232#profileId-215620800",
      autor: "3D Luffy",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 364,
    nombre: "Giroscopio orbital",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Anillos orbitales de 9 cm.",
    descripcionDetallada: "Fidget giroscópico con anillos orbitales de 9 cm de diámetro.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US4e954d4bbf923b/design/2025-12-28_38f9e79a81a63.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4e954d4bbf923b/design/2025-12-28_66e42bd44368d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4e954d4bbf923b/design/2025-12-28_e17ab81a0a9ca.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4e954d4bbf923b/design/2025-12-28_cb5c6e12dc0c6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4e954d4bbf923b/design/2025-12-28_426a8cd0989ff.jpg"
    ],
    precioBase: 50,
    escalaDescuento: null,
    tamano: "9 cm",
    impresion: {
      material: "PLA",
      gramos: 29,
      horas: 1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "giroscopio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2169225#profileId-540162095",
      autor: "RJ Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 365,
    nombre: "Laberinto regalo de Navidad",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Caja-regalo con laberinto.",
    descripcionDetallada: "Rompecabezas de laberinto con forma de regalo navideño, para esconder dinero o sorpresas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb5d5e5afaa2138/design/2025-10-12_8253b8510c054.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb5d5e5afaa2138/design/2025-10-20_e28e7b1d55cbc8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb5d5e5afaa2138/design/2025-10-12_16aee8e9f6f0a8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb5d5e5afaa2138/design/2025-10-13_d073b3b510a43.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb5d5e5afaa2138/design/2025-10-13_1534d6bb1216b8.jpg"
    ],
    precioBase: 80,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 34,
      horas: 1.8,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "laberinto",
      "navidad",
      "regalo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1884855#profileId-439378202",
      autor: "piodeer",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 366,
    nombre: "Rompecabezas cubo pasante",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Cubo que pasa a través de otro.",
    descripcionDetallada: "Rompecabezas de cubo pasante impreso en su lugar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US15c830f4776ee5/design/2025-02-27_6da6fe38a9f83.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US15c830f4776ee5/design/f73a82aec7850d39.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US15c830f4776ee5/design/88e087f8d0d1e305.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US15c830f4776ee5/design/b72cc7fdb7eec44f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US15c830f4776ee5/design/2025-02-27_2f6f31d98324a8.jpg"
    ],
    precioBase: 90,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 36,
      horas: 2.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "rompecabezas",
      "cubo",
      "ilusion"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1157916#profileId-238743077",
      autor: "makerbro",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 367,
    nombre: "Ajedrez gótico ornamental",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Piezas de ajedrez de estilo gótico.",
    descripcionDetallada: "Set de piezas de ajedrez de estilo oscuro y gótico.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US31702207751128/design/2025-09-18_ee45ffdea8179.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US31702207751128/design/2025-09-18_0c05a0733435f8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US31702207751128/design/2025-09-18_da42ce1b3ab458.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US31702207751128/design/2025-09-18_42d243292a8ca8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US31702207751128/413472103/instance/2025-09-18_3f84df7a381ab8.jpg"
    ],
    precioBase: 600,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "ajedrez",
      "gotico",
      "juego de mesa"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1805690#profileId-413472103",
      autor: "29FLO",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 368,
    nombre: "Torre de dados castillo",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Torre de dados con escalera de caracol.",
    descripcionDetallada: "Torre de dados con forma de castillo y escalera de caracol.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US28bcfd534ea382/design/2024-06-24_czdjx7xgz9uc.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US28bcfd534ea382/design/2024-06-24_h8oi0be9gbww.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US28bcfd534ea382/design/2024-06-24_pextcbjkp9k2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US28bcfd534ea382/design/2024-06-24_cju5epgcxvbk.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US28bcfd534ea382/design/2024-06-24_1s36v42z23j8.jpg"
    ],
    precioBase: 375,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 155,
      horas: 10.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "dados",
      "rol",
      "castillo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/509299#profileId-91269251",
      autor: "squinn",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 369,
    nombre: "Dados clásicos",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Dados para juegos de mesa.",
    descripcionDetallada: "Dados clásicos para juegos de mesa, en varios tamaños.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USaff2e89e8ea795/design/2025-01-28_1f01ef99c7184.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USaff2e89e8ea795/design/2025-02-05_8f632dd3630818.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USaff2e89e8ea795/design/2025-01-28_09eeb26646b2f8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USaff2e89e8ea795/design/2025-01-28_7f9d0a47976d6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USaff2e89e8ea795/713302698/instance/ffe8999078300819.jpg"
    ],
    precioBase: 150,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 82,
      horas: 3.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "dados",
      "juego de mesa"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1049753#profileId-713302698",
      autor: "Hapik.cz",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 370,
    nombre: "Robot E articulado",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Robot pequeño de 20 articulaciones.",
    descripcionDetallada: "Robot pequeño con 20 articulaciones, impreso en su lugar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US299f73338efac9/design/2025-02-10_274b4f2d4113e8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US299f73338efac9/design/2025-02-10_62f451c950cd68.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US299f73338efac9/design/2025-02-10_73499ea398632.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US299f73338efac9/design/2025-02-10_3e8bc3309d3e6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US299f73338efac9/224241325/instance/2025-02-10_b39c3be47fac5.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 6,
      horas: 0.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "robot",
      "articulado",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1093551#profileId-224241325",
      autor: "DDWMAKER",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 371,
    nombre: "Camión transformable en robot",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Camión que se convierte en robot.",
    descripcionDetallada: "Camión que se transforma en robot, impreso en su lugar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa5fe685ad8de68/design/2023-09-26_s93f7e86nrk9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa5fe685ad8de68/design/2023-09-26_8u60dac7lpzz.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa5fe685ad8de68/design/2023-09-26_lahz01b6wxqv.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa5fe685ad8de68/design/2023-09-26_ujoofaarnwb0.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa5fe685ad8de68/design/2023-09-26_07v7nkonltrq.jpg"
    ],
    precioBase: 110,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 62,
      horas: 2.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "robot",
      "transformable",
      "camion"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/21960#profileId-34284798",
      autor: "mocodroid",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 372,
    nombre: "Catapulta de resortes",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Catapulta de encaje a presión.",
    descripcionDetallada: "Catapulta con muelles de hoja que se arma a presión.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9e317cf324e05d/design/2024-08-17_dce5c82847f23.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US9e317cf324e05d/design/2024-08-17_76d4dbe7397d9.jpeg"
    ],
    precioBase: 460,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 207,
      horas: 11,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "catapulta",
      "mecanico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/594700#profileId-191243201",
      autor: "uhltimate",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 373,
    nombre: "Mini balista",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Balista medieval en miniatura.",
    descripcionDetallada: "Balista mecánica en miniatura, pieza de colección.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USd38b4cd4de1b43/design/c52f20e9396f8a51.png",
      "https://makerworld.bblmw.com/makerworld/model/USd38b4cd4de1b43/design/bd8cf0e2342034d7.png",
      "https://makerworld.bblmw.com/makerworld/model/USd38b4cd4de1b43/806568734/instance/516a7d1741d8866f.png",
      "https://makerworld.bblmw.com/makerworld/model/USd38b4cd4de1b43/806568734/instance/a29f45bad019b3d2.png",
      "https://makerworld.bblmw.com/makerworld/model/USd38b4cd4de1b43/806568734/instance/8dd06d209cc8ffce.png"
    ],
    precioBase: 100,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 47,
      horas: 2.1,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "balista",
      "medieval",
      "miniatura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2878996#profileId-806568734",
      autor: "Waikikiprod",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 374,
    nombre: "Fidget magnético",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Desliza, hace clic y engancha.",
    descripcionDetallada: "Juguete magnético antiestrés que se desliza y hace clic.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc79e2fc383fd0/design/2025-08-01_fe44d627f29c98.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc79e2fc383fd0/design/2025-08-01_f3f35da238692.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc79e2fc383fd0/design/2025-08-01_ac9b69a2e355b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc79e2fc383fd0/design/2025-08-01_b4542a4b5b678.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc79e2fc383fd0/368528972/instance/2025-08-01_fc5b0e7fe7e818.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 10,
      horas: 0.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "magnetico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1660708#profileId-368528972",
      autor: "ROSBU 3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 375,
    nombre: "Bloque ? de Super Mario",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Caja para cartuchos de Switch.",
    descripcionDetallada: "Bloque de interrogación de Super Mario para guardar cartuchos de Nintendo Switch.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US835e0bd7ba09fa/design/2024-02-29_97776434bf0cf8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US835e0bd7ba09fa/design/2024-02-29_d32c3d08061fb8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US835e0bd7ba09fa/design/2024-02-29_da386c9090c918.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US835e0bd7ba09fa/design/2024-02-29_1230f1cc2348b8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US835e0bd7ba09fa/design/2024-02-29_9036196bc62d2.jpeg"
    ],
    precioBase: 170,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 77,
      horas: 4,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "mario",
      "nintendo",
      "switch"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/229811#profileId-57718065",
      autor: "SF3DPrints",
      licencia: "CC BY",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito al autor. Usa una marca o personaje de terceros: Nintendo."
    },
    activo: true
  },
  {
    id: 376,
    nombre: "Figura Among Us",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Figura sencilla de Among Us.",
    descripcionDetallada: "Figura de Among Us a dos colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US7cbf03df587ceb/design/2024-01-04_198ada1b0023.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7cbf03df587ceb/design/2024-01-04_7a0b7794fa7ad.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7cbf03df587ceb/design/2024-01-04_b99af9b436cbf.png"
    ],
    precioBase: 70,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 31,
      horas: 1.6,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "among us",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/123973#profileId-38918291",
      autor: "EZWorld",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial. Usa una marca o personaje de terceros: Among Us (Innersloth)."
    },
    activo: true
  },
  {
    id: 377,
    nombre: "Sonic articulado",
    categoria: "Juguetes para Adolescentes",
    descripcionCorta: "Sonic con articulaciones móviles.",
    descripcionDetallada: "Figura articulada de Sonic el erizo con articulaciones móviles.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US3d541ed48ed024/design/2025-10-30_24d85ec94cd9a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3d541ed48ed024/design/2025-10-30_e7ccd49b543488.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3d541ed48ed024/design/2025-10-30_d1f37b7102bcd8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3d541ed48ed024/design/2025-10-30_cbe2effbbab67.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3d541ed48ed024/design/2025-10-30_8633ad3844691.jpg"
    ],
    precioBase: 185,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 80,
      horas: 4.6,
      colores: 5,
      multicolor: false
    },
    etiquetas: [
      "sonic",
      "sega",
      "articulado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1940000#profileId-504713918",
      autor: "daokouxiaxingzou",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Sonic (SEGA)."
    },
    activo: true
  },
  {
    id: 206,
    nombre: "Caja laberinto para regalar dinero",
    categoria: "Para Jóvenes",
    descripcionCorta: "Caja de panal que se abre resolviendo el laberinto.",
    descripcionDetallada: "Caja rompecabezas con laberinto: para sacar el dinero o la tarjeta de regalo hay que resolverlo. Un regalo original.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US90acc3e378da41/design/2025-08-03_9df0ded185c908.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US90acc3e378da41/design/2025-08-03_01b6ce0d719c5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US90acc3e378da41/design/2025-08-03_b264ce52592158.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US90acc3e378da41/design/2025-08-03_8b01f871a743d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US90acc3e378da41/design/2025-08-03_303b0812bc454.jpg"
    ],
    precioBase: 155,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 82,
      horas: 3.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "rompecabezas",
      "laberinto",
      "regalo",
      "dinero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1666352#profileId-504056973",
      autor: "ToodyX",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 259,
    nombre: "Motor V8 de juguete armable",
    categoria: "Para Jóvenes",
    descripcionCorta: "Motor V8 para ensamblar.",
    descripcionDetallada: "Motor V8 de juguete para armar después de imprimir.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US2da201849b2a9e/design/2025-07-18_d7a314c169563.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US2da201849b2a9e/design/2025-07-18_face71d0a011b.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US2da201849b2a9e/design/2025-07-18_7c78ce5a3e6798.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US2da201849b2a9e/design/2025-07-18_aba9a4ca5ca18.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US2da201849b2a9e/design/2025-07-18_77b047c3230d2.jpeg"
    ],
    precioBase: 70,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 32,
      horas: 1.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "motor",
      "v8",
      "armable"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1285057#profileId-355773923",
      autor: "WillCAD",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 378,
    nombre: "Trompo de ilusión mágica",
    categoria: "Para Jóvenes",
    descripcionCorta: "Trompo que crea un efecto visual.",
    descripcionDetallada: "Peonza que crea un efecto visual único al girar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb7b116c066a3e7/design/2026-01-15_976a47fa93e7c.png",
      "https://makerworld.bblmw.com/makerworld/model/USb7b116c066a3e7/design/2026-01-15_8cc22d8de9cbe8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb7b116c066a3e7/design/2026-01-15_80c5e7885cf088.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb7b116c066a3e7/design/2026-01-15_4bf92c69db4a38.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb7b116c066a3e7/design/2026-01-15_6749d9d015457.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 13,
      horas: 0.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "trompo",
      "ilusion",
      "escritorio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2247117#profileId-565691623",
      autor: "AeroDesigns",
      licencia: "MakerWorld Exclusive License",
      permiteVenta: false,
      notaLicencia: "Prohíbe el uso comercial."
    },
    activo: true
  },
  {
    id: 379,
    nombre: "Fidget triple hélice imposible",
    categoria: "Para Jóvenes",
    descripcionCorta: "Hélices que pasan imposiblemente.",
    descripcionDetallada: "Fidget de triple hélice de paso imposible: una ilusión mecánica.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa7a2bc4322294d/design/8374f8262398676b.png",
      "https://makerworld.bblmw.com/makerworld/model/USa7a2bc4322294d/design/9424508a4272e7de.png",
      "https://makerworld.bblmw.com/makerworld/model/USa7a2bc4322294d/design/1034556295accc13.png",
      "https://makerworld.bblmw.com/makerworld/model/USa7a2bc4322294d/728372682/instance/670da8cb7d7458a5.png"
    ],
    precioBase: 130,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 50,
      horas: 3.5,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "helice",
      "ilusion"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2705903#profileId-728372682",
      autor: "Delphir",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 380,
    nombre: "Kit card cuna de Newton",
    categoria: "Para Jóvenes",
    descripcionCorta: "Arma tu propia cuna de Newton.",
    descripcionDetallada: "Cuna de Newton en formato kit card para armar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9c36145e3ea0ef/design/7ad00ffaed4e5529.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US9c36145e3ea0ef/design/a0ce75c738051641.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US9c36145e3ea0ef/design/47ecde2f2e682632.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US9c36145e3ea0ef/design/b98f16a9032025f7.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US9c36145e3ea0ef/design/5e30072e5123eb69.png"
    ],
    precioBase: 210,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 124,
      horas: 4.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "newton",
      "kit card",
      "escritorio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/3286545#profileId-990031315",
      autor: "SwissPrints",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 381,
    nombre: "Soporte para cartas de 3 niveles",
    categoria: "Para Jóvenes",
    descripcionCorta: "Sostiene tus cartas en juegos de mesa.",
    descripcionDetallada: "Soporte para cartas de juego de tres niveles.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf2a14f99e2c68a/design/2025-02-21_621f83bc291c6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf2a14f99e2c68a/design/2025-02-21_004526f4e91ab.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf2a14f99e2c68a/design/2025-02-21_6c4f9b89c7ccc.jpg"
    ],
    precioBase: 145,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 86,
      horas: 2.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cartas",
      "juego de mesa"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1134891#profileId-233678163",
      autor: "Tinker Link",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 382,
    nombre: "Basket arcade de escritorio",
    categoria: "Para Jóvenes",
    descripcionCorta: "Encesta como en las maquinitas.",
    descripcionDetallada: "Juego de basquetbol arcade de escritorio para retar a tus amigos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb3e6ac926d000e/design/2024-12-22_c7d3adec41a848.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb3e6ac926d000e/design/2024-12-22_df26816ead62b8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb3e6ac926d000e/design/2024-12-22_24a24756c591f8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb3e6ac926d000e/design/2024-12-22_76fac8c948bab.jpeg"
    ],
    precioBase: 850,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "basquetbol",
      "arcade",
      "juego"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/905278#profileId-192419620",
      autor: "Daniel",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 383,
    nombre: "Organizador de cables de escritorio",
    categoria: "Para Jóvenes",
    descripcionCorta: "Cables siempre a la mano.",
    descripcionDetallada: "Soporte de cables para escritorio que los mantiene ordenados y a la mano.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US603a5520109477/design/2025-11-16_ad36ae6dfc124.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US603a5520109477/design/2025-11-16_210221e05a9a68.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US603a5520109477/design/2025-11-16_2b2d9f91b21e48.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US603a5520109477/design/2025-11-15_4e94a4bb7519b.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US603a5520109477/design/2025-11-15_c0a16a325015e.jpeg"
    ],
    precioBase: 85,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 38,
      horas: 1.9,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "cables",
      "escritorio",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2001262#profileId-704074775",
      autor: "mgm86",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 384,
    nombre: "Calendario perpetuo",
    categoria: "Para Jóvenes",
    descripcionCorta: "Calendario 100% impreso en 3D.",
    descripcionDetallada: "Calendario perpetuo de hojas, totalmente impreso en 3D.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc43d344240789b/design/2023-12-30_43925cd847357.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc43d344240789b/design/2023-12-30_b94c2c132d3ad8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc43d344240789b/design/2023-12-30_84338af7c7d418.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc43d344240789b/design/2023-12-30_b76f806594e278.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc43d344240789b/design/2023-12-31_2fef18c1e3aa.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "calendario",
      "escritorio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/115260#profileId-45650466",
      autor: "make 3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 385,
    nombre: "Juego de paso imposible",
    categoria: "Para Jóvenes",
    descripcionCorta: "Ilusión de objetos imposibles.",
    descripcionDetallada: "Juego de paso imposible: ilusión y precisión en 3D.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US560ef56fa3bd3f/design/2025-02-04_72cf24d489a2c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US560ef56fa3bd3f/design/2025-02-03_634d8f316d43d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US560ef56fa3bd3f/design/2025-02-03_6db18ca2bc8ea.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US560ef56fa3bd3f/design/2025-02-03_25d3f83b7e41.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US560ef56fa3bd3f/design/2025-02-03_b7a8d6b10d04c.jpg"
    ],
    precioBase: 65,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 26,
      horas: 1.7,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "ilusion",
      "rompecabezas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1069902#profileId-218660099",
      autor: "Noir",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 386,
    nombre: "Basket de escritorio",
    categoria: "Para Jóvenes",
    descripcionCorta: "Mini basquetbol con lanzador.",
    descripcionDetallada: "Mini juego de basquetbol con lanzador y red.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US95d01ccb3a031/design/2025-01-11_faa17461e7174.png",
      "https://makerworld.bblmw.com/makerworld/model/US95d01ccb3a031/design/2025-01-11_c58ad5456eb47.png",
      "https://makerworld.bblmw.com/makerworld/model/US95d01ccb3a031/design/2025-01-11_e266d5ba9ad67.png",
      "https://makerworld.bblmw.com/makerworld/model/US95d01ccb3a031/design/2025-01-11_497b34dd2e4fd.png",
      "https://makerworld.bblmw.com/makerworld/model/US95d01ccb3a031/design/2025-01-11_9620207a7b29.png"
    ],
    precioBase: 140,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 66,
      horas: 3.1,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "basquetbol",
      "escritorio",
      "juego"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/927610#profileId-199827307",
      autor: "TheCogBox",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 387,
    nombre: "Mini catapulta de escritorio",
    categoria: "Para Jóvenes",
    descripcionCorta: "Catapulta con tiro al blanco.",
    descripcionDetallada: "Catapulta impresa en su lugar con blanco de tiro.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/UScd5f4891b992a7/design/2024-12-27_5399625f621c5.png",
      "https://makerworld.bblmw.com/makerworld/model/UScd5f4891b992a7/design/2024-12-27_3bdbf7341ca72.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 14,
      horas: 0.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "catapulta",
      "escritorio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/918667#profileId-187406038",
      autor: "sdaendi",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 388,
    nombre: "Soporte de celular",
    categoria: "Para Jóvenes",
    descripcionCorta: "Soporte sólido y elegante.",
    descripcionDetallada: "Soporte de celular sencillo y resistente para escritorio.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USedc5387b4b8b54/design/2024-10-20_5e4b3349950a8.png",
      "https://makerworld.bblmw.com/makerworld/model/USedc5387b4b8b54/design/2024-10-20_760f27483f53e.png",
      "https://makerworld.bblmw.com/makerworld/model/USedc5387b4b8b54/design/2024-10-20_f77932339e686.png",
      "https://makerworld.bblmw.com/makerworld/model/USedc5387b4b8b54/design/2024-10-20_5d272154b0d46.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USedc5387b4b8b54/design/2024-10-20_946792dc6638f.png"
    ],
    precioBase: 225,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 159,
      horas: 3.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "celular",
      "escritorio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/717070#profileId-141381554",
      autor: "SabreDesign",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 390,
    nombre: "Rompecabezas triple hélice",
    categoria: "Para Jóvenes",
    descripcionCorta: "Rompecabezas de 6 piezas.",
    descripcionDetallada: "Rompecabezas de 6 piezas: arma 3 hélices dentro de sus contenedores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb8673dad782107/design/2025-09-02_78d69905cbb778.png",
      "https://makerworld.bblmw.com/makerworld/model/USb8673dad782107/design/2024-07-10_ab949203884b6.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb8673dad782107/design/2024-07-10_af865ff2780718.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb8673dad782107/design/2024-07-10_1e8244e467217.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb8673dad782107/design/2024-07-10_63d1e8f78690d.jpeg"
    ],
    precioBase: 145,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 58,
      horas: 3.9,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "rompecabezas",
      "helice"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/534259#profileId-97351908",
      autor: "GlennovitS 3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 391,
    nombre: "Trompo para lápiz fidget",
    categoria: "Para Jóvenes",
    descripcionCorta: "Trompo que se pone en tu lápiz.",
    descripcionDetallada: "Trompo fidget que se coloca en el lápiz para girarlo mientras estudias.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USba44949a876d86/design/70847447233e95cd.jpeg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 4,
      horas: 0.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "lapiz",
      "estudio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2346914#profileId-597599150",
      autor: "HexByte",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 392,
    nombre: "Gato gordo dormilón",
    categoria: "Para Jóvenes",
    descripcionCorta: "Gato que descansa en el borde del monitor.",
    descripcionDetallada: "Sleepy Chonk, un gato perezoso que se acomoda en el borde de tu monitor o repisa.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe98977bc975021/design/2025-04-07_3085f88d3a7d3.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe98977bc975021/design/2025-04-07_d8ebd8d1578c7.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe98977bc975021/design/2025-04-07_d52b8315def08.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe98977bc975021/design/2025-04-07_a81d594e66a6f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe98977bc975021/design/2025-04-07_f831de2432033.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 15,
      horas: 1.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "gato",
      "monitor",
      "escritorio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1294114#profileId-663506772",
      autor: "Guybrush",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 393,
    nombre: "Fidget giro estelar",
    categoria: "Para Jóvenes",
    descripcionCorta: "Estrella que gira con espirales.",
    descripcionDetallada: "Fidget con forma de estrella con rotación suave y surcos en espiral.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US5386ce61b4a674/design/569ac68a21a83fbd.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US5386ce61b4a674/design/aa773d7f27cbbd18.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US5386ce61b4a674/design/e3cbee3c74d77d45.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US5386ce61b4a674/design/e6db0ef4100c51f7.jpeg"
    ],
    precioBase: 90,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 45,
      horas: 2.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "estrella",
      "giratorio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/3079101#profileId-889068895",
      autor: "𝗗𝗼𝗱𝗼𝘅",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 394,
    nombre: "Vortex ball fidget",
    categoria: "Para Jóvenes",
    descripcionCorta: "Bola con núcleo giratorio.",
    descripcionDetallada: "Juguete antiestrés con núcleo giratorio encerrado en una esfera.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USdf8ae9787c77d6/design/2025-06-20_1b8fc60323fc9.png",
      "https://makerworld.bblmw.com/makerworld/model/USdf8ae9787c77d6/design/2025-06-20_e5945e67e57c1.png"
    ],
    precioBase: 125,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 52,
      horas: 3.1,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "vortex",
      "esfera"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1535220#profileId-332036622",
      autor: "Helena",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 395,
    nombre: "Bailarina giratoria de luz y sombra",
    categoria: "Para Jóvenes",
    descripcionCorta: "Bailarina que proyecta sombras.",
    descripcionDetallada: "Bailarina giratoria que proyecta sombras con una luz, ideal para regalo.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb72e4e0c88dfbb/design/7aa831aa420f461a.jpg"
    ],
    precioBase: 185,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 101,
      horas: 3.3,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "bailarina",
      "sombra",
      "regalo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2759320#profileId-747801203",
      autor: "MR.LAOHUANG",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 396,
    nombre: "Cuna de Newton decorativa",
    categoria: "Para Jóvenes",
    descripcionCorta: "Clásico accesorio de oficina.",
    descripcionDetallada: "Cuna de Newton decorativa para darle estilo a tu escritorio.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USae0139556d722a/design/2024-02-01_c231abf8024b1.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USae0139556d722a/46496085/instance/2024-02-01_1167f8bfa6261.png",
      "https://makerworld.bblmw.com/makerworld/model/USae0139556d722a/46496085/instance/2024-02-01_3cb55e6ecdbd3.png",
      "https://makerworld.bblmw.com/makerworld/model/USae0139556d722a/46496085/instance/2024-02-01_fb721bad41573.png",
      "https://makerworld.bblmw.com/makerworld/model/USae0139556d722a/46496085/instance/2024-02-01_2a1717dba0638.png"
    ],
    precioBase: 285,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 143,
      horas: 5.8,
      colores: 3,
      multicolor: false
    },
    etiquetas: [
      "newton",
      "escritorio",
      "oficina"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/166276#profileId-51061568",
      autor: "uberroot",
      licencia: "CC BY",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito al autor. Usa una marca o personaje de terceros: BRIO (marca registrada)."
    },
    activo: true
  },
  {
    id: 397,
    nombre: "Soporte para cartas de 3 filas",
    categoria: "Para Jóvenes",
    descripcionCorta: "Guarda y ordena tus cartas.",
    descripcionDetallada: "Soporte para cartas de juego con hasta 3 filas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US5ebe94951d43ce/design/2025-07-11_6a3111e59176a8.webp",
      "https://makerworld.bblmw.com/makerworld/model/US5ebe94951d43ce/design/2024-04-18_6c1121d80d3ae.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5ebe94951d43ce/design/2024-04-18_f17fd0ed0109.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5ebe94951d43ce/design/2024-04-18_71682c70cd12f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5ebe94951d43ce/design/2024-04-18_6a3d93262bfc7.jpg"
    ],
    precioBase: 110,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 70,
      horas: 1.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cartas",
      "juego de mesa"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/23169#profileId-69258797",
      autor: "Ryan Ewen",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 398,
    nombre: "Mini arcade de carritos",
    categoria: "Para Jóvenes",
    descripcionCorta: "Juego de esquivar con volante, para dos.",
    descripcionDetallada: "Juego mecánico de carrito que esquiva obstáculos con volante; para uno o dos jugadores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/UScf796118a87178/design/2025-05-18_d4333b3ed82258.jpg",
      "https://makerworld.bblmw.com/makerworld/model/UScf796118a87178/design/2025-05-18_7fe96a495d3c08.jpg",
      "https://makerworld.bblmw.com/makerworld/model/UScf796118a87178/design/2025-05-18_64e96aac5241d8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/UScf796118a87178/design/2025-05-18_32191870c5fee8.jpg"
    ],
    precioBase: 750,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA + PETG",
      gramos: null,
      horas: null,
      colores: 4,
      multicolor: true
    },
    etiquetas: [
      "arcade",
      "carros",
      "juego"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1431712#profileId-305033896",
      autor: "wontonnn",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 399,
    nombre: "Pinky Buddy",
    categoria: "Para Jóvenes",
    descripcionCorta: "Apoyo para sostener el celular con comodidad.",
    descripcionDetallada: "Accesorio ergonómico para sostener el celular sin cansar el dedo meñique; también funciona como soporte.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US37e225bc1ce9f2/design/2025-09-04_e7fcb1fe8e8a48.png",
      "https://makerworld.bblmw.com/makerworld/model/US37e225bc1ce9f2/design/2025-09-04_54cb492bad8b5.png",
      "https://makerworld.bblmw.com/makerworld/model/US37e225bc1ce9f2/design/2025-09-04_e96431b6683fd8.png",
      "https://makerworld.bblmw.com/makerworld/model/US37e225bc1ce9f2/design/2025-09-04_10c543cfb9cba8.png",
      "https://makerworld.bblmw.com/makerworld/model/US37e225bc1ce9f2/design/2025-09-04_61b8155e842d48.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 16,
      horas: 0.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "celular",
      "ergonomico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1763502#profileId-399776960",
      autor: "G3D Printlab",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 400,
    nombre: "Calendario de cubos giratorios",
    categoria: "Para Jóvenes",
    descripcionCorta: "Cubos que giran para marcar la fecha.",
    descripcionDetallada: "Calendario de cubos giratorios para tu escritorio.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US32a1986c144c4b/design/d873b74f-d7dc-4d6c-b5e8-3d200b9c17d5.webp",
      "https://makerworld.bblmw.com/makerworld/model/US32a1986c144c4b/design/ca57c205-bcac-4654-bab5-6e4d15c23b31.webp",
      "https://makerworld.bblmw.com/makerworld/model/US32a1986c144c4b/design/30cff6dc-5d46-474b-8bff-04b8272e9b01.webp",
      "https://makerworld.bblmw.com/makerworld/model/US32a1986c144c4b/246242364/instance/36e0f971-e89e-4c4f-80a4-904bcc6f861d.webp",
      "https://makerworld.bblmw.com/makerworld/model/US32a1986c144c4b/246242364/instance/d6b9ecc8-9df0-4088-94ba-081f5385d7c8.webp"
    ],
    precioBase: 245,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 132,
      horas: 5.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "calendario",
      "cubos",
      "escritorio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1181509#profileId-246242364",
      autor: "Tonas",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 401,
    nombre: "Relojes de arena entrelazados",
    categoria: "Para Jóvenes",
    descripcionCorta: "Fidget de relojes de arena, 4 tamaños.",
    descripcionDetallada: "Fidget de relojes de arena entrelazados en 4 tamaños.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US302598d51d6c32/design/2025-09-03_72a9fe842a5b6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US302598d51d6c32/design/2025-09-03_ba78596f5f8a5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US302598d51d6c32/design/2025-09-03_c828f79a2f7ea.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US302598d51d6c32/399191202/instance/2025-09-03_172233f3dca3b.jpg"
    ],
    precioBase: 350,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "fidget",
      "reloj de arena"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1761762#profileId-399191202",
      autor: "RJ Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 402,
    nombre: "Mini balón de basket sin aire",
    categoria: "Para Jóvenes",
    descripcionCorta: "Balón de 8 cm que rebota.",
    descripcionDetallada: "Mini balón de basquetbol sin aire de 8 cm.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US135fb175877501/design/28e6b205324a57b7.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US135fb175877501/design/ad8437ea0751da48.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US135fb175877501/design/b8c62390a73d70cc.jpg"
    ],
    precioBase: 155,
    escalaDescuento: null,
    tamano: "8 cm",
    impresion: {
      material: "TPU",
      gramos: 45,
      horas: 5.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "basquetbol",
      "balon"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2780145#profileId-765633291",
      autor: "IDLROM Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 403,
    nombre: "Catapulta emergente",
    categoria: "Para Jóvenes",
    descripcionCorta: "Catapulta que se imprime armada.",
    descripcionDetallada: "Catapulta emergente impresa en su lugar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US4c6abfa97d9db7/design/2024-03-13_4e71d5502c9fa.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4c6abfa97d9db7/design/2024-03-12_8ddda6a137d0f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4c6abfa97d9db7/design/2024-03-12_48b9ac7c64e7e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4c6abfa97d9db7/59339500/instance/2024-03-12_c3b4d9a6d9b79.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4c6abfa97d9db7/59339500/instance/2024-03-12_f54a7fd3d6f45.png"
    ],
    precioBase: 65,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 32,
      horas: 1.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "catapulta",
      "escritorio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/249434#profileId-61236168",
      autor: "Windrose",
      licencia: "CC BY-SA",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito al autor (compartir igual)."
    },
    activo: true
  },
  {
    id: 204,
    nombre: "Bola fidget giratoria",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Esfera de segmentos que giran entre sí.",
    descripcionDetallada: "Bola fidget impresa en una pieza con segmentos curvos entrelazados que giran sin parar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc888f086d09ca3/design/a03b61104a764ad8.png",
      "https://makerworld.bblmw.com/makerworld/model/USc888f086d09ca3/design/cd26661f6a1c67d4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc888f086d09ca3/design/9e9637a2e3791d72.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc888f086d09ca3/design/43057d251c83bfa0.jpg"
    ],
    precioBase: 180,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 92,
      horas: 4.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "antiestres",
      "esfera"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2658901#profileId-711251879",
      autor: "Draisaitl29",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 205,
    nombre: "Cubo infinito",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Cubo antiestrés que se pliega sin fin.",
    descripcionDetallada: "Cubo infinito impreso en una sola pieza: se dobla una y otra vez. Ideal para concentrarse o relajarse.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US2ecaa913482ae4/design/6262bb404aee281b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2ecaa913482ae4/design/2025-07-03_afb166afd3763.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2ecaa913482ae4/design/2025-07-03_de0b673ec14ab8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2ecaa913482ae4/design/2025-07-03_8668ee5e271d3.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2ecaa913482ae4/design/2025-07-03_08cfbeb30d7e9.jpg"
    ],
    precioBase: 55,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 28,
      horas: 1.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "cubo infinito",
      "antiestres"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1572338#profileId-739135359",
      autor: "samtig_Stahl",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 208,
    nombre: "Spinner de engranajes planetarios",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Fidget spinner de dedo con engranes.",
    descripcionDetallada: "Fidget spinner con engranajes planetarios que se desliza en un dedo. Impreso en una pieza, sin ensamblaje.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US3fa154f896830/design/2024-09-21_17012f0d48041.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3fa154f896830/design/2024-09-21_f12c8f13e4ee1.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3fa154f896830/design/2024-09-21_8ec03ad1dbd3c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3fa154f896830/design/2024-09-21_544f965746388.jpg"
    ],
    precioBase: 90,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "spinner",
      "engranes"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/654785#profileId-128896066",
      autor: "G-Man Projects",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 231,
    nombre: "Fidget fichas de casino",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Fichas que se deslizan con un clic satisfactorio.",
    descripcionDetallada: "Fidget de fichas de casino que se deslizan y hacen clic. Muy satisfactorio y parece un juego de fichas real.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa82d44faf00dfa/design/2024-11-07_cfa365fa1baa5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa82d44faf00dfa/design/2024-11-07_25c07770cee7.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa82d44faf00dfa/design/2024-11-07_116c6dc579279.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa82d44faf00dfa/design/2024-11-07_d610f099d5594.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa82d44faf00dfa/151402072/instance/2024-11-07_0fb9e6e445a5e.jpg"
    ],
    precioBase: 90,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 34,
      horas: 2.4,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "fidget",
      "casino",
      "antiestres"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/766336#profileId-151402072",
      autor: "gobotoru",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 232,
    nombre: "Fidget clicker de teclas",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "15 combinaciones de teclas que hacen clic.",
    descripcionDetallada: "Fidget clicker con teclas que suenan como un teclado mecánico; disponible en 15 combinaciones.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9082f9978e42c/design/ae69f6393d2d94e2.png",
      "https://makerworld.bblmw.com/makerworld/model/US9082f9978e42c/design/fd3c021e04d9f4bc.png",
      "https://makerworld.bblmw.com/makerworld/model/US9082f9978e42c/design/bb50486d913b426a.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US9082f9978e42c/design/5542d07357420cf1.jpg"
    ],
    precioBase: 80,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 34,
      horas: 1.8,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "clicker",
      "teclas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2513119#profileId-656981680",
      autor: "Little Cloud 3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 233,
    nombre: "Giroscopio de 4 anillos",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Anillos que giran unos dentro de otros.",
    descripcionDetallada: "Giroscopio fidget de 4 anillos que giran libremente. Impreso en una sola pieza.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US246d8dbb7d06e7/design/2025-08-27_e42fed215dab28.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US246d8dbb7d06e7/design/19ccdf4c4c654f17.webp",
      "https://makerworld.bblmw.com/makerworld/model/US246d8dbb7d06e7/design/645d046a5e5338d7.webp",
      "https://makerworld.bblmw.com/makerworld/model/US246d8dbb7d06e7/design/5df86982f9f4946c.webp",
      "https://makerworld.bblmw.com/makerworld/model/US246d8dbb7d06e7/design/fe89e51d80c02711.webp"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 10,
      horas: 0.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "giroscopio",
      "spinner"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/927520#profileId-612077667",
      autor: "CRASH_3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 234,
    nombre: "Fidget palanca de cambios V2",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Imita una caja de cambios con clic en cada marcha.",
    descripcionDetallada: "Juguete antiestrés que imita una palanca de cambios: hace clic en cada velocidad. Favorito de los fans de los autos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US788707c0ea8ed5/design/2025-06-25_c936c80925b388.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US788707c0ea8ed5/design/2025-06-25_8cbf83bc8c8a5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US788707c0ea8ed5/336340720/instance/2025-06-25_aedf6f011c6b6.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 7,
      horas: 0.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "palanca",
      "autos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1548507#profileId-336340720",
      autor: "Maker Making",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 235,
    nombre: "Anillo fidget giratorio",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Anillo que gira en tu dedo, en 21 tallas.",
    descripcionDetallada: "Anillo fidget impreso en su lugar con aro giratorio. Disponible en 21 tallas: indica tu talla en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US76005a7fec2d8c/design/2024-03-05_ca1c3451bf5ec.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US76005a7fec2d8c/design/2024-03-05_02489fa68f1f58.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US76005a7fec2d8c/design/2024-03-05_a2f4e8ca1b7598.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US76005a7fec2d8c/design/2024-03-05_085037d3d8fe88.png",
      "https://makerworld.bblmw.com/makerworld/model/US76005a7fec2d8c/56849768/instance/2024-03-05_634186e000c37.jpg"
    ],
    precioBase: 205,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 69,
      horas: 6.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "anillo",
      "antiestres"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/237319#profileId-73136859",
      autor: "OwenTF",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 236,
    nombre: "Llavero corazón antiestrés",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Corazón con corazones internos que se mueven.",
    descripcionDetallada: "Llavero de corazón antiestrés con piezas internas móviles. Un detalle bonito para regalar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USfc6d7a9b1c7a15/design/a6004620fcddc05c.jpeg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 8,
      horas: 0.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "corazon",
      "llavero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2305648#profileId-725904029",
      autor: "FreshPrintsBA",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 237,
    nombre: "Finger flipper",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Mini fidget que rueda entre tus dedos.",
    descripcionDetallada: "Fidget compacto que rueda suavemente entre los dedos. Pesa solo 5 g.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US77ac366225fe71/design/2025-09-26_f03834f62a8cd.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US77ac366225fe71/design/2025-09-26_2e95749f3e2a.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US77ac366225fe71/design/2025-09-26_7e28d1a4e8861.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US77ac366225fe71/421515157/instance/2025-09-26_93c843740467c.jpeg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 5,
      horas: 0.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "dedos",
      "mini"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1829260#profileId-421515157",
      autor: "Peter Noorlander",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 238,
    nombre: "Gusano Morf fidget",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Gusano articulado que se retuerce.",
    descripcionDetallada: "Gusano fidget articulado que se dobla y retuerce en todas direcciones.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb6ba9efcd33dbe/design/2024-04-09_4aabe599e356e.png",
      "https://makerworld.bblmw.com/makerworld/model/USb6ba9efcd33dbe/440256968/instance/2024-05-05_eb2663dca4a7b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb6ba9efcd33dbe/440256968/instance/2024-05-05_d4b67efd2c25e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb6ba9efcd33dbe/440256968/instance/2024-05-05_11bd76a108971.png"
    ],
    precioBase: 95,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 47,
      horas: 2.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "gusano",
      "articulado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/420924#profileId-440256968",
      autor: "AmandaM",
      licencia: "CC0",
      permiteVenta: true,
      notaLicencia: "Dominio público: uso comercial libre."
    },
    activo: true
  },
  {
    id: 239,
    nombre: "Fidget de 10 estrellas",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Estrella de piezas que giran y se acomodan.",
    descripcionDetallada: "Fidget en forma de estrella con piezas móviles. Uno de los juguetes antiestrés más populares.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6a3e0154a93134/design/2025-09-01_58e64c22f716a8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6a3e0154a93134/design/2025-09-01_1a673063dfd49.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6a3e0154a93134/design/2025-09-01_ab8f1bd21c8da8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6a3e0154a93134/design/2025-09-01_1700a74dd1a84.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6a3e0154a93134/design/2025-09-01_62c553bc9562c.jpg"
    ],
    precioBase: 120,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 85,
      horas: 1.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "estrella",
      "antiestres"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1755208#profileId-397089235",
      autor: "BigDeX",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 240,
    nombre: "Cubo infinito antiestrés",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Cubo que se pliega una y otra vez.",
    descripcionDetallada: "Cubo infinito impreso en su lugar: se dobla sin fin. Súper satisfactorio.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US42d6578eed6848/design/2025-02-07_2c9b9e6b865dd.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US42d6578eed6848/design/2025-02-07_de320fd65d5bc.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US42d6578eed6848/design/2025-02-07_c975662bafcf5.jpeg"
    ],
    precioBase: 55,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 29,
      horas: 1.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "cubo infinito"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1084160#profileId-222140443",
      autor: "Nshark3d",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 241,
    nombre: "Pop switch fidget",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Interruptor que hace pop.",
    descripcionDetallada: "Juguete antiestrés tipo interruptor que hace \"pop\" al presionarlo.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US91ecf3c415ecbb/design/2025-01-24_5e764d9adc2f6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US91ecf3c415ecbb/design/2025-01-24_a96254ceb9cb2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US91ecf3c415ecbb/design/2025-01-24_d26c828c6d2b4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US91ecf3c415ecbb/design/2025-01-24_e1c00dec63fda.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US91ecf3c415ecbb/210393916/instance/2025-01-24_c02a8dd2dd5b1.jpg"
    ],
    precioBase: 50,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 29,
      horas: 1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "switch",
      "pop"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1032876#profileId-210393916",
      autor: "KL Worx",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 242,
    nombre: "Bola fidget twisty",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Esfera de segmentos que giran.",
    descripcionDetallada: "Bola fidget giratoria de segmentos entrelazados que giran con suavidad.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa1e9fc9d46e57e/design/2025-12-13_3050419153acd8.png",
      "https://makerworld.bblmw.com/makerworld/model/USa1e9fc9d46e57e/design/2026-01-13_f204285cc9e9e.png",
      "https://makerworld.bblmw.com/makerworld/model/USa1e9fc9d46e57e/design/2025-12-13_54b31fb5ae2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa1e9fc9d46e57e/design/2025-12-13_6339a3d4cd77f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa1e9fc9d46e57e/design/2025-12-13_19f56d6593a2d8.jpg"
    ],
    precioBase: 175,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 87,
      horas: 4.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "esfera",
      "giratorio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2112117#profileId-517561169",
      autor: "Coffey Manufactury",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 243,
    nombre: "Cubo fidget de clic y giro",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Cubo geométrico con paneles que giran.",
    descripcionDetallada: "Cubo geométrico con paneles segmentados que hacen clic y giran.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US66f5f9748457c1/design/2025-11-03_696e2e2e9a242.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US66f5f9748457c1/design/2025-11-03_b25879c1fb1118.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US66f5f9748457c1/design/2025-11-03_13f7fba025cfb.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US66f5f9748457c1/design/2025-11-03_3772a620f7d74.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US66f5f9748457c1/462484224/instance/2025-11-03_11c6cdf3e180d.jpg"
    ],
    precioBase: 60,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 30,
      horas: 1.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "cubo",
      "clic"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1954658#profileId-462484224",
      autor: "Mr_Andre",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 244,
    nombre: "Estrella flexible traviesa",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Estrella articulada que se deforma.",
    descripcionDetallada: "Estrella flexible de piezas articuladas que se mueve y deforma en tus manos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US58e8e7fedc0451/design/2025-07-17_400696c93c7cd.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US58e8e7fedc0451/design/2025-07-17_e000d73ed6827.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US58e8e7fedc0451/design/2025-07-17_e230e106e0c7f8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US58e8e7fedc0451/design/2025-07-17_00ac474154ad18.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US58e8e7fedc0451/design/2025-07-17_61ecf502802a5.jpg"
    ],
    precioBase: 380,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 122,
      horas: 12.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "estrella",
      "flexible"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1615537#profileId-355186728",
      autor: "PrintyPlay 3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 245,
    nombre: "Alpha Fidget 5 en 1",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Cinco fidgets en uno, de bolsillo.",
    descripcionDetallada: "Fidget de bolsillo con 5 mecanismos en uno y argolla para llavero.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa8fd19def474f0/design/2025-04-15_71e8aff80f5a8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa8fd19def474f0/design/2025-04-15_17b9315d8e665.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa8fd19def474f0/design/2025-01-28_dce5550a2bff3.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa8fd19def474f0/design/2025-01-28_425b9b97843b8.png",
      "https://makerworld.bblmw.com/makerworld/model/USa8fd19def474f0/design/2025-01-28_352eb969ee6ff.png"
    ],
    precioBase: 55,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 25,
      horas: 1.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "bolsillo",
      "llavero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1049589#profileId-277634800",
      autor: "Bad Astronaut",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 246,
    nombre: "Clicker de botón definitivo",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Botón con resorte de clic satisfactorio.",
    descripcionDetallada: "Fidget clicker con botón de resorte que hace un clic muy satisfactorio.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc40f1f70049c83/design/2025-11-13_207cec449ea8a.png",
      "https://makerworld.bblmw.com/makerworld/model/USc40f1f70049c83/design/2025-11-13_0d0732f827f0b.png",
      "https://makerworld.bblmw.com/makerworld/model/USc40f1f70049c83/design/2025-11-13_2ed736e57068a.png",
      "https://makerworld.bblmw.com/makerworld/model/USc40f1f70049c83/design/2025-11-13_6a6e80937d2ad8.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 8,
      horas: 0.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "clicker",
      "boton"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2000966#profileId-477688581",
      autor: "AbyssalCactus",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 247,
    nombre: "Fidget chasquido, clic y swoosh",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Tres sensaciones en un fidget.",
    descripcionDetallada: "Fidget impreso en su lugar con chasquido, clic y deslizamiento.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb3716c1f295a31/design/2024-10-26_68ae23883c6d48.png",
      "https://makerworld.bblmw.com/makerworld/model/USb3716c1f295a31/142936433/instance/2024-10-23_d92faabcf7316.png",
      "https://makerworld.bblmw.com/makerworld/model/USb3716c1f295a31/142936433/instance/2024-10-21_06a7c293371a78.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 15,
      horas: 0.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "clic",
      "antiestres"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/719725#profileId-142936433",
      autor: "Louis",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 248,
    nombre: "Fidget palanca de cambios",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Palanca de cambios compacta con clic.",
    descripcionDetallada: "Juguete antiestrés que imita una palanca de cambios, versión compacta.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US61c4067462b5d/design/2025-05-21_2cd6dcb377adf.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 9,
      horas: 1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "palanca",
      "autos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1441120#profileId-307471396",
      autor: "Maker Making",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 249,
    nombre: "Set de 6 anillos spinner",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Anillos con aro giratorio.",
    descripcionDetallada: "Colección de 6 anillos fidget con aro giratorio, en varias tallas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US97ffbf58845ee1/design/2025-01-23_aa1721785fcf.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US97ffbf58845ee1/design/2025-01-22_c043965d59dfd.png",
      "https://makerworld.bblmw.com/makerworld/model/US97ffbf58845ee1/design/2025-01-22_1da883d7bdc4e.png",
      "https://makerworld.bblmw.com/makerworld/model/US97ffbf58845ee1/design/2025-01-22_9586b890db87d.png",
      "https://makerworld.bblmw.com/makerworld/model/US97ffbf58845ee1/design/2025-01-22_d26394b49bd78.png"
    ],
    precioBase: 120,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "fidget",
      "anillo",
      "spinner"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1031049#profileId-578320021",
      autor: "bradpaiva",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 250,
    nombre: "Clicker de tecla compacto",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Tecla mecánica de bolsillo.",
    descripcionDetallada: "Clicker fidget de tecla compacto, satisfactorio y elegante.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US24f49e49562073/design/8519b10a1cee632a.png",
      "https://makerworld.bblmw.com/makerworld/model/US24f49e49562073/design/774ddef580c07513.png",
      "https://makerworld.bblmw.com/makerworld/model/US24f49e49562073/design/5dd041691fa90734.png",
      "https://makerworld.bblmw.com/makerworld/model/US24f49e49562073/design/e3bbb949d26a4537.png",
      "https://makerworld.bblmw.com/makerworld/model/US24f49e49562073/design/b9e59bedcdbbc450.png"
    ],
    precioBase: 80,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "clicker",
      "tecla"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2917888#profileId-956882090",
      autor: "Justi-Fy Studio",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 251,
    nombre: "Slider magnético fidget",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Deslizador con imanes que hace clic.",
    descripcionDetallada: "Deslizador magnético antiestrés con 12 imanes de neodimio que hace clic de lado a lado.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US19ab0129d3a59f/design/2024-03-02_be6e1fb4ec146.png",
      "https://makerworld.bblmw.com/makerworld/model/US19ab0129d3a59f/design/2024-03-02_4816640f0ecbf.png",
      "https://makerworld.bblmw.com/makerworld/model/US19ab0129d3a59f/design/2024-03-03_9a585fa3af9e2.png",
      "https://makerworld.bblmw.com/makerworld/model/US19ab0129d3a59f/design/2024-03-02_78c452225dd2e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US19ab0129d3a59f/design/2024-03-02_6c5b1af30e679.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 12,
      horas: 0.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "magnetico",
      "slider"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/219523#profileId-63827850",
      autor: "adiskovarik",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 252,
    nombre: "Bola fidget retorcida",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Bola de espirales que gira.",
    descripcionDetallada: "Bola fidget retorcida de rotación limpia, en dos tamaños.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US3d80953300c76c/design/2e5a1f9a2dc38c12.png",
      "https://makerworld.bblmw.com/makerworld/model/US3d80953300c76c/design/dd388264962187ff.png",
      "https://makerworld.bblmw.com/makerworld/model/US3d80953300c76c/design/1f825b9eae891190.png",
      "https://makerworld.bblmw.com/makerworld/model/US3d80953300c76c/design/61c5f8f53b92b5c9.png",
      "https://makerworld.bblmw.com/makerworld/model/US3d80953300c76c/design/b8240528b5414ab3.png"
    ],
    precioBase: 265,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 118,
      horas: 7.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "bola",
      "espiral"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2313012#profileId-630246321",
      autor: "Jasa Designs",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 253,
    nombre: "Cono espiral fidget",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Ilusión de espiral que gira.",
    descripcionDetallada: "Cono espiral que crea una ilusión hipnótica al girar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/UScc20b36ef7010a/design/2025-06-20_f64ebf63cad84.jpg",
      "https://makerworld.bblmw.com/makerworld/model/UScc20b36ef7010a/design/2025-06-20_2aaba4bf11c268.jpg"
    ],
    precioBase: 90,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 49,
      horas: 2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "espiral",
      "ilusion"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1536241#profileId-600686937",
      autor: "rangido",
      licencia: "CC BY",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito al autor."
    },
    activo: true
  },
  {
    id: 254,
    nombre: "Mini cubo antiestrés",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Mini cubo infinito de bolsillo.",
    descripcionDetallada: "Mini cubo antiestrés de bolsillo que se pliega sin fin.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US25bfba4f3be57f/design/2025-02-22_68efe2f4927f48.png",
      "https://makerworld.bblmw.com/makerworld/model/US25bfba4f3be57f/design/2025-02-21_73d7e668908c68.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US25bfba4f3be57f/design/2025-02-21_6070fc5179368.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US25bfba4f3be57f/design/2025-02-21_f9e85cdcbd37b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US25bfba4f3be57f/design/2025-02-21_81c3a59c71501.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 6,
      horas: 0.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "cubo",
      "mini"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1135310#profileId-235458225",
      autor: "Austin Vojta",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 255,
    nombre: "Interruptor fidget",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Interruptor tipo switch que hace clic.",
    descripcionDetallada: "Fidget con forma de interruptor que hace clic al moverlo.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb0b16ac626a2b8/design/2025-10-02_9d61e04263d01.png",
      "https://makerworld.bblmw.com/makerworld/model/USb0b16ac626a2b8/design/2025-01-27_56cdf668edd36.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb0b16ac626a2b8/design/2025-01-27_de41a2f528227.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb0b16ac626a2b8/348353326/instance/2025-04-13_df0784bd7375c8.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 8,
      horas: 0.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "switch",
      "clic"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/922493#profileId-348353326",
      autor: "Bogdy",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 256,
    nombre: "Fidget iris mecánico",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Diafragma que se abre y cierra.",
    descripcionDetallada: "Fidget con mecanismo de iris que se abre y cierra al girarlo.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US723df4a7f2a31a/design/2025-06-01_fc26bbc00012d.png",
      "https://makerworld.bblmw.com/makerworld/model/US723df4a7f2a31a/315435275/instance/2025-05-31_be444857f15a68.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 23,
      horas: 0.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "iris",
      "mecanico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1472499#profileId-315435275",
      autor: "Louis",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 347,
    nombre: "Fidget rodillo de banda",
    categoria: "Antiestrés y Fidgets",
    descripcionCorta: "Banda que rueda sin fin.",
    descripcionDetallada: "Juguete fidget de rodillo de banda con movimiento continuo muy satisfactorio.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USce43c6de6960ed/design/07f4d613bca9e40a.png",
      "https://makerworld.bblmw.com/makerworld/model/USce43c6de6960ed/design/6aedf6b36d06f9c1.png",
      "https://makerworld.bblmw.com/makerworld/model/USce43c6de6960ed/design/624cbaaf2a002d68.png",
      "https://makerworld.bblmw.com/makerworld/model/USce43c6de6960ed/design/6820cc07e3886936.png",
      "https://makerworld.bblmw.com/makerworld/model/USce43c6de6960ed/design/6208d75fe190e9ab.png"
    ],
    precioBase: 65,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 30,
      horas: 1.7,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "rodillo",
      "banda"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/3175278#profileId-936330972",
      autor: "AbyssalCactus",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 19,
    nombre: "Keycap Lickilicky (Pokémon)",
    categoria: "Pokémon",
    descripcionCorta: "Tecla chibi con lengua gigante para teclado mecánico.",
    descripcionDetallada: "Keycap estilo chibi inspirada en Lickilicky, con su enorme lengua y un toque cómico para tu teclado. Compatible con switches Cherry MX estándar y sus clones. Impresa en 4 colores con capa fina de 0.12 mm.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9546c8e5f435/design/b6c87d8c2e32d9b7.png"
    ],
    precioBase: 70,
    escalaDescuento: null,
    tamano: "Tecla estándar Cherry MX",
    impresion: {
      material: "PLA",
      gramos: 21,
      horas: 2.1,
      colores: 4,
      multicolor: true
    },
    etiquetas: [
      "keycap",
      "tecla",
      "pokemon",
      "teclado mecanico",
      "kawaii"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2682793#profileId-2971442",
      autor: "MonsieurPierre",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe la venta (licencia comercial en el Patreon del autor). Además, Pokémon es marca de Nintendo."
    },
    activo: true
  },
  {
    id: 111,
    nombre: "Llavero Pokébola",
    categoria: "Pokémon",
    descripcionCorta: "Pokébola en miniatura a tres colores.",
    descripcionDetallada: "Llavero de Pokébola a tres colores (rojo, blanco y negro). Pequeño, resistente y muy pedido por fans de Pokémon.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US2d946ac12830f5/design/2024-08-27_6187a0087ced8.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 22,
      horas: 0.7,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "pokemon",
      "pokebola",
      "pokeball",
      "nintendo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/609138#profileId-401801512",
      autor: "Super3D",
      licencia: "CC BY",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito al autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 112,
    nombre: "Mini Pikachu articulado (llavero)",
    categoria: "Pokémon",
    descripcionCorta: "Pikachu flexible que también funciona como llavero.",
    descripcionDetallada: "Mini figura articulada de Pikachu impresa en una sola pieza, con varias combinaciones de color. Se puede usar como llavero o figura de escritorio.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USbddfa1ea3ad112/design/60ce4462a8730ee9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbddfa1ea3ad112/design/a7c78b77a9fda7c4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbddfa1ea3ad112/design/95a1c4afe2d15203.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbddfa1ea3ad112/design/5ab49a15a0ff9146.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbddfa1ea3ad112/design/7a94910ea341f2a5.jpg"
    ],
    precioBase: 70,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 5,
      multicolor: true
    },
    etiquetas: [
      "pokemon",
      "pikachu",
      "flexi",
      "llavero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2287081#profileId-613105898",
      autor: "helder.bernardo",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 139,
    nombre: "Soporte de celular Gengar",
    categoria: "Pokémon",
    descripcionCorta: "Gengar sostiene tu teléfono o tablet.",
    descripcionDetallada: "Soporte de Gengar para celular o tablet. Para fans de Pokémon.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000536900/design/2024-07-12_cbd9814a35b1b.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000536900/design/2024-07-12_c58c3daf3ac06.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USe015d3510f5eb1/188739118/instance/2024-12-29_7a6b4fd9725d58.jpeg"
    ],
    precioBase: 125,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 74,
      horas: 2.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "pokemon",
      "gengar",
      "celular",
      "tablet"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/536900#profileId-188739118",
      autor: "Hsagas",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 271,
    nombre: "Pokébola fidget giratoria",
    categoria: "Pokémon",
    descripcionCorta: "Pokébola que gira sin parar.",
    descripcionDetallada: "Fidget giratorio con forma de Pokébola y núcleo interno resistente.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US39174c5e819d54/design/2026-01-16_a15c13abb963a8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US39174c5e819d54/design/2026-01-16_b077211ca22108.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US39174c5e819d54/design/2026-01-16_7df8bcd9a70da8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US39174c5e819d54/design/2026-01-16_1651fdb7bc0d5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US39174c5e819d54/design/2026-01-16_376f24b98ca008.jpg"
    ],
    precioBase: 305,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 143,
      horas: 6.8,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "pokemon",
      "pokebola",
      "fidget"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2252814#profileId-567818043",
      autor: "FilliFuu",
      licencia: "CC BY-NC-ND",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 272,
    nombre: "Llavero Pokébola",
    categoria: "Pokémon",
    descripcionCorta: "Pokébola optimizada para llavero.",
    descripcionDetallada: "Llavero de Pokébola a tres colores, mejorado para mayor resistencia.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf9bed685130231/design/2024-11-01_3df3ccc04ebfc.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf9bed685130231/design/2024-11-01_9a0d45fe65afd.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 13,
      horas: 1.2,
      colores: 3,
      multicolor: false
    },
    etiquetas: [
      "pokemon",
      "pokebola",
      "llavero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/747805#profileId-147752730",
      autor: "戒",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 273,
    nombre: "Llavero cráneo de Cubone",
    categoria: "Pokémon",
    descripcionCorta: "El cráneo de Cubone en tus llaves.",
    descripcionDetallada: "Llavero con forma del cráneo de Cubone, un accesorio original para fans de Pokémon.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9e03bdf13801f/design/2025-09-12_3b52cadea066d8.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 7,
      horas: 0.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "pokemon",
      "cubone",
      "llavero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1788386#profileId-449862261",
      autor: "DC93",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 274,
    nombre: "Pikachu mini",
    categoria: "Pokémon",
    descripcionCorta: "Figura pequeña de Pikachu.",
    descripcionDetallada: "Figura mini de Pikachu, rápida de imprimir y perfecta para regalo.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US84a3a4fa0e42ef/design/2025-09-21_687985425bccc8.png",
      "https://makerworld.bblmw.com/makerworld/model/US84a3a4fa0e42ef/design/2025-08-15_2ab3a9aa27f92.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US84a3a4fa0e42ef/design/2025-08-15_ddb8fb00ab248.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US84a3a4fa0e42ef/design/2025-09-21_0480dfb809f348.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US84a3a4fa0e42ef/380870184/instance/2025-08-15_88fec4e0e748f.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 9,
      horas: 0.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "pokemon",
      "pikachu",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1701940#profileId-380870184",
      autor: "M 3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 275,
    nombre: "Charmander chibi",
    categoria: "Pokémon",
    descripcionCorta: "Charmander en estilo chibi a varios colores.",
    descripcionDetallada: "Figura chibi de Charmander impresa a varios colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe2362c271f9799/design/2025-10-12_768acdc63a224.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe2362c271f9799/design/2025-10-12_bf20ff9429122.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe2362c271f9799/design/2025-10-12_f60f40556955a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe2362c271f9799/design/2025-10-12_4bda312c3579d8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe2362c271f9799/design/2025-10-12_12b41ddfdc9978.jpg"
    ],
    precioBase: 140,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 62,
      horas: 3.4,
      colores: 7,
      multicolor: false
    },
    etiquetas: [
      "pokemon",
      "charmander",
      "chibi"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1879122#profileId-437647738",
      autor: "Atseini",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 276,
    nombre: "Bulbasaur armable",
    categoria: "Pokémon",
    descripcionCorta: "Bulbasaur de varias piezas a 6 colores.",
    descripcionDetallada: "Figura de Bulbasaur (Pokédex #1) en varias piezas ensambladas, a 6 colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US35848b8d03af5f/design/3cea9535-d94e-432b-bc4f-37571ae84054.webp",
      "https://makerworld.bblmw.com/makerworld/model/US35848b8d03af5f/design/71cb70e7-03be-4f73-931d-4c12565f0dad.webp",
      "https://makerworld.bblmw.com/makerworld/model/US35848b8d03af5f/design/5afaec32-04a1-47bb-a634-7bee940799d8.webp",
      "https://makerworld.bblmw.com/makerworld/model/US35848b8d03af5f/design/554b1772-a91c-4a25-b621-de6affaf3171.webp",
      "https://makerworld.bblmw.com/makerworld/model/US35848b8d03af5f/design/0b4c1d65-d702-40e7-b6ae-67154c8f0003.webp"
    ],
    precioBase: 325,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 152,
      horas: 7.5,
      colores: 6,
      multicolor: true
    },
    etiquetas: [
      "pokemon",
      "bulbasaur",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/973648#profileId-353737216",
      autor: "JL3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 277,
    nombre: "Mini colección evoluciones de Eevee",
    categoria: "Pokémon",
    descripcionCorta: "Figuras de 4 cm de las evoluciones de Eevee.",
    descripcionDetallada: "Colección de mini figuras de 4 cm con las evoluciones de Eevee. Precio por figura; elige cuál en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US3d882c06ed5c2c/design/d30689b342eb1651.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US3d882c06ed5c2c/design/d1dd8aaf6b54a1ac.png",
      "https://makerworld.bblmw.com/makerworld/model/US3d882c06ed5c2c/design/2e04c927348d0ac6.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US3d882c06ed5c2c/design/54220e911cd41893.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US3d882c06ed5c2c/design/9c5b03dd74796959.jpeg"
    ],
    precioBase: 60,
    escalaDescuento: null,
    tamano: "4 cm",
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 7,
      multicolor: false
    },
    etiquetas: [
      "pokemon",
      "eevee",
      "mini",
      "coleccion"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2742119#profileId-753105199",
      autor: "DecoDejw",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 278,
    nombre: "Eevee chibi",
    categoria: "Pokémon",
    descripcionCorta: "Eevee en estilo chibi.",
    descripcionDetallada: "Figura chibi de Eevee a varios colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc2e68cbf55b4e4/design/2025-09-15_76922308ec3548.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc2e68cbf55b4e4/design/2025-09-15_2ae4dff865ac2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc2e68cbf55b4e4/design/2025-09-15_32499e17341d2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc2e68cbf55b4e4/design/2025-09-15_da7e03bf888be.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc2e68cbf55b4e4/design/2025-09-15_4f4701b50eb29.jpg"
    ],
    precioBase: 150,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 61,
      horas: 3.8,
      colores: 5,
      multicolor: false
    },
    etiquetas: [
      "pokemon",
      "eevee",
      "chibi"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1795770#profileId-410188761",
      autor: "Atseini",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 279,
    nombre: "Gengar armable",
    categoria: "Pokémon",
    descripcionCorta: "Gengar de piezas encajables, sin pegamento.",
    descripcionDetallada: "Figura de Gengar de piezas que encajan sin pegamento.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6dda3a3a1e5f31/design/2025-09-11_0b3f1a1f0927c.png",
      "https://makerworld.bblmw.com/makerworld/model/US6dda3a3a1e5f31/design/2025-09-11_b751bcb245638.png",
      "https://makerworld.bblmw.com/makerworld/model/US6dda3a3a1e5f31/455222678/instance/2025-09-11_313d4279a39e.png"
    ],
    precioBase: 165,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 78,
      horas: 3.6,
      colores: 4,
      multicolor: false
    },
    etiquetas: [
      "pokemon",
      "gengar",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/710215#profileId-455222678",
      autor: "3D Memory",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 280,
    nombre: "Gengar grande 16 cm",
    categoria: "Pokémon",
    descripcionCorta: "Gengar de 16 cm de alto.",
    descripcionDetallada: "Figura grande de Gengar de 16 cm, ideal para exhibir.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US2963636ed4f57e/design/9e86e39097a91991.png",
      "https://makerworld.bblmw.com/makerworld/model/US2963636ed4f57e/design/d579f54a6c8d6b5c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2963636ed4f57e/design/cbe786bc2345fc72.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2963636ed4f57e/design/b3f0d323933a3a07.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2963636ed4f57e/design/42d9e4adb09ffaff.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: "16 cm de alto",
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 4,
      multicolor: false
    },
    etiquetas: [
      "pokemon",
      "gengar",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2394256#profileId-1060887613",
      autor: "model lover",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 281,
    nombre: "Ditto flexible",
    categoria: "Pokémon",
    descripcionCorta: "Ditto articulado.",
    descripcionDetallada: "Figura flexible de Ditto que se mueve y se deforma.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6b21517b8e6f10/design/2025-07-24_4f202ee1b4b398.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6b21517b8e6f10/design/2025-08-25_467060a8d35958.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6b21517b8e6f10/design/2025-07-23_e6e557dadaa1f8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6b21517b8e6f10/design/2025-07-23_069e1f74b18a78.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6b21517b8e6f10/design/2025-07-23_ca78279a6d1b7.jpg"
    ],
    precioBase: 215,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 65,
      horas: 7,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "pokemon",
      "ditto",
      "flexi"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1632928#profileId-360342450",
      autor: "Big Simi",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 282,
    nombre: "Pikachu grande 21 cm",
    categoria: "Pokémon",
    descripcionCorta: "Pikachu de 21 cm de alto.",
    descripcionDetallada: "Figura grande de Pikachu de 21 cm a varios colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US781bb231eeec49/design/2026-01-08_2198901e66eb98.png",
      "https://makerworld.bblmw.com/makerworld/model/US781bb231eeec49/design/2026-01-08_58eaec5bd02388.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US781bb231eeec49/design/2026-01-08_1f46a0266c3a88.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US781bb231eeec49/design/2026-01-08_59b01c3c38e72.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US781bb231eeec49/design/2026-01-08_ba4a2ff9796118.jpg"
    ],
    precioBase: 390,
    escalaDescuento: null,
    tamano: "21 cm de alto",
    impresion: {
      material: "PLA",
      gramos: 217,
      horas: 6.9,
      colores: 6,
      multicolor: false
    },
    etiquetas: [
      "pokemon",
      "pikachu",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2214943#profileId-554785166",
      autor: "model lover",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 283,
    nombre: "Jigglypuff multicolor",
    categoria: "Pokémon",
    descripcionCorta: "Jigglypuff a 4 colores.",
    descripcionDetallada: "Figura de Jigglypuff a varios colores, redonda y tierna.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USbfed7d0a64fe31/design/2024-04-21_4352068cef774.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbfed7d0a64fe31/design/2024-04-21_b4e6b743452b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbfed7d0a64fe31/design/2024-04-21_9385bcc862ede.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbfed7d0a64fe31/design/2024-04-21_966e4b621aa6f.png",
      "https://makerworld.bblmw.com/makerworld/model/USbfed7d0a64fe31/design/2024-04-21_8b88471cc764c.png"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 4,
      multicolor: true
    },
    etiquetas: [
      "pokemon",
      "jigglypuff",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/437753#profileId-70090534",
      autor: "entroisdimensions_figurine",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 284,
    nombre: "Mew",
    categoria: "Pokémon",
    descripcionCorta: "Figura del legendario Mew.",
    descripcionDetallada: "Figura de Mew (#151), el Pokémon legendario más misterioso.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc646f66454ac7e/design/5c57170cf66fab1f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc646f66454ac7e/design/645a79036c6d21ef.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USc646f66454ac7e/design/b74a4b9a0c3f5d2b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc646f66454ac7e/656386559/instance/4f876bdbea872b18.png",
      "https://makerworld.bblmw.com/makerworld/model/USc646f66454ac7e/656386559/instance/2025-04-22_23ebbaeb910438.jpg"
    ],
    precioBase: 145,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 72,
      horas: 3,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "pokemon",
      "mew",
      "legendario"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1077678#profileId-656386559",
      autor: "N3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 286,
    nombre: "Lámpara Gengar calabaza",
    categoria: "Pokémon",
    descripcionCorta: "Gengar convertido en calabaza de Halloween.",
    descripcionDetallada: "Lámpara LED de Gengar en versión calabaza de Halloween. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6a4a81429c7e64/design/2025-09-30_49bd33fa36926.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6a4a81429c7e64/design/2025-09-30_ef6baac11d149.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6a4a81429c7e64/design/2025-09-30_d40f0f953f9918.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6a4a81429c7e64/design/2025-09-30_1475e5500de1d8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6a4a81429c7e64/design/2025-09-30_fbe63399d8887.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "pokemon",
      "gengar",
      "lampara",
      "halloween"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1843123#profileId-425771189",
      autor: "Atseini",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 287,
    nombre: "Pokébola que se abre",
    categoria: "Pokémon",
    descripcionCorta: "Pokébola con interior para guardar cosas.",
    descripcionDetallada: "Pokébola que se abre y sirve como cajita para guardar dulces o regalos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US2955bfd6339446/design/2024-12-22_25a605dc5249b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2955bfd6339446/design/2024-12-22_403da1b1491a9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2955bfd6339446/design/2024-12-22_48cd34764860e8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2955bfd6339446/216758969/instance/2025-01-01_522c79a1d111c.jpg"
    ],
    precioBase: 225,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 77,
      horas: 6.6,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "pokemon",
      "pokebola",
      "caja"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/937923#profileId-216758969",
      autor: "NorfolkB",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 288,
    nombre: "Pokébola funcional sin pegamento",
    categoria: "Pokémon",
    descripcionCorta: "Pokébola de 7.7 cm que se abre y cierra.",
    descripcionDetallada: "Pokébola funcional de unos 7.7 cm que se abre y cierra, sin pegamento.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US75656e97ad1569/design/2025-11-26_7908b49e418f38.png",
      "https://makerworld.bblmw.com/makerworld/model/US75656e97ad1569/design/2025-11-17_66162b93982258.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US75656e97ad1569/492480778/instance/2025-11-18_af8dc2b95164b8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US75656e97ad1569/492480778/instance/2025-11-18_bb7f004a10dbb8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US75656e97ad1569/492480778/instance/2025-11-18_4a81a329970af.jpg"
    ],
    precioBase: 170,
    escalaDescuento: null,
    tamano: "7.7 cm",
    impresion: {
      material: "PLA",
      gramos: 79,
      horas: 4.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "pokemon",
      "pokebola",
      "caja"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2009933#profileId-492480778",
      autor: "LayerLux3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 289,
    nombre: "Llavero Charmander articulado",
    categoria: "Pokémon",
    descripcionCorta: "Charmander flexible para tus llaves.",
    descripcionDetallada: "Llavero de Charmander con estructura articulada.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USd34593c806670c/design/115d3e7bf81d4c0d.png",
      "https://makerworld.bblmw.com/makerworld/model/USd34593c806670c/design/d73b9f4e7a82d317.png",
      "https://makerworld.bblmw.com/makerworld/model/USd34593c806670c/design/270f1b4efc62f8c5.png",
      "https://makerworld.bblmw.com/makerworld/model/USd34593c806670c/design/bbb67adf9057f8a6.png",
      "https://makerworld.bblmw.com/makerworld/model/USd34593c806670c/design/d644854fa824e302.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 11,
      horas: 0.7,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "pokemon",
      "charmander",
      "llavero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2633008#profileId-701577596",
      autor: "๖M๖",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 290,
    nombre: "Llavero Pikachu",
    categoria: "Pokémon",
    descripcionCorta: "Pikachu a 4 colores.",
    descripcionDetallada: "Llavero sencillo de Pikachu a 4 colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc5c3e650f02809/design/2024-09-04_57a1561f529a9.png",
      "https://makerworld.bblmw.com/makerworld/model/USc5c3e650f02809/design/2024-09-04_77f671238595c.png",
      "https://makerworld.bblmw.com/makerworld/model/USc5c3e650f02809/119387080/instance/2024-09-04_f37f49f682cb8.png",
      "https://makerworld.bblmw.com/makerworld/model/USc5c3e650f02809/119387080/instance/2024-09-04_7f00372183612.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 11,
      horas: 0.7,
      colores: 4,
      multicolor: true
    },
    etiquetas: [
      "pokemon",
      "pikachu",
      "llavero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/621752#profileId-119387080",
      autor: "CasalingoDisperato🏠🕷️",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 291,
    nombre: "Bebé Pikachu",
    categoria: "Pokémon",
    descripcionCorta: "Pikachu mini de impresión rápida.",
    descripcionDetallada: "Figura mini de bebé Pikachu, perfecta como recuerdo o llavero.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US4ba0b6a84365e3/design/2025-06-13_5e1b61249c856.png",
      "https://makerworld.bblmw.com/makerworld/model/US4ba0b6a84365e3/design/2025-06-10_90d0a7c57df8a.png",
      "https://makerworld.bblmw.com/makerworld/model/US4ba0b6a84365e3/design/2025-06-10_713915370e8b7.png",
      "https://makerworld.bblmw.com/makerworld/model/US4ba0b6a84365e3/design/664925298d65a540.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4ba0b6a84365e3/design/968a049a057b4392.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 4,
      horas: 0.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "pokemon",
      "pikachu",
      "mini"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1506386#profileId-326202278",
      autor: "Print3DPro.pl",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 292,
    nombre: "Charmander grande",
    categoria: "Pokémon",
    descripcionCorta: "Figura grande de Charmander a 6 colores.",
    descripcionDetallada: "Figura grande de Charmander a varios colores, para exhibir.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US2eec264cc6739e/design/2024-09-28_db24eaabd9855.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2eec264cc6739e/design/2025-02-26_70c86b4606039.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2eec264cc6739e/design/2023-10-22_0d4b23f86d50f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2eec264cc6739e/design/2023-10-22_dfda3c8bfa4f9.jpg"
    ],
    precioBase: 500,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 6,
      multicolor: true
    },
    etiquetas: [
      "pokemon",
      "charmander",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/47362#profileId-40349018",
      autor: "SnapPrint3D_SuperCrazyPrints",
      licencia: "CC BY-ND",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito; no permite modificar el diseño. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 293,
    nombre: "Bulbasaur grande multicolor",
    categoria: "Pokémon",
    descripcionCorta: "Bulbasaur grande a 5 colores.",
    descripcionDetallada: "Figura grande de Bulbasaur a 5 colores, ideal para coleccionistas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US17cf8a95553c06/design/2024-02-01_28f95695f8f78.png",
      "https://makerworld.bblmw.com/makerworld/model/US17cf8a95553c06/design/2024-02-01_9b310e6f43d46.png",
      "https://makerworld.bblmw.com/makerworld/model/US17cf8a95553c06/design/2024-02-01_3f2fff19cffc4.png",
      "https://makerworld.bblmw.com/makerworld/model/US17cf8a95553c06/design/2024-02-01_270115063f6ce.png",
      "https://makerworld.bblmw.com/makerworld/model/US17cf8a95553c06/design/2024-02-01_485ecca0e0554.png"
    ],
    precioBase: 550,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 5,
      multicolor: true
    },
    etiquetas: [
      "pokemon",
      "bulbasaur",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/166579#profileId-47125517",
      autor: "entroisdimensions_figurine",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 294,
    nombre: "Squirtle",
    categoria: "Pokémon",
    descripcionCorta: "Figura de Squirtle.",
    descripcionDetallada: "Figura de Squirtle, el Pokémon tortuga de agua.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000388291/design/2024-03-22_488bc8ecee64f8.webp",
      "https://makerworld.bblmw.com/makerworld/model/US2d0bc57a267cee/62361576/instance/2024-03-26_d273c3e22316c.png"
    ],
    precioBase: 150,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 85,
      horas: 3.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "pokemon",
      "squirtle",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/388291#profileId-62361576",
      autor: "Biglui",
      licencia: "CC BY-NC-ND",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 295,
    nombre: "Eevee bola",
    categoria: "Pokémon",
    descripcionCorta: "Eevee redondito a 5 colores.",
    descripcionDetallada: "Figura de Eevee en forma de bolita, a varios colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US943c10b6e37a62/design/164bcb8d9691eaf5.png",
      "https://makerworld.bblmw.com/makerworld/model/US943c10b6e37a62/design/eabb92263c7e2f71.png",
      "https://makerworld.bblmw.com/makerworld/model/US943c10b6e37a62/design/55011bc640d26bfc.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US943c10b6e37a62/653143958/instance/1a1b190f795e6096.png",
      "https://makerworld.bblmw.com/makerworld/model/US943c10b6e37a62/653143958/instance/2024-10-20_b263043ff08f3.jpg"
    ],
    precioBase: 235,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 107,
      horas: 5.5,
      colores: 5,
      multicolor: true
    },
    etiquetas: [
      "pokemon",
      "eevee",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/716162#profileId-653143958",
      autor: "N3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 414,
    nombre: "Soporte para cartas Pokémon",
    categoria: "Pokémon",
    descripcionCorta: "Exhibe tus cartas favoritas.",
    descripcionDetallada: "Soporte para exhibir cartas Pokémon o TCG con funda.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US3447f8cfae0471/design/2024-12-25_f8552cf1140d1.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3447f8cfae0471/design/2024-12-25_28f8a3d48e3ec.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3447f8cfae0471/design/2024-12-25_d07c18f43d8e3.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3447f8cfae0471/185872495/instance/2024-12-25_3e9ee7b281f55.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 13,
      horas: 0.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "pokemon",
      "cartas",
      "tcg"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/911768#profileId-185872495",
      autor: "Oink",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Pokémon (Nintendo / Game Freak)."
    },
    activo: true
  },
  {
    id: 3,
    nombre: "Organizador Inventario Minecraft",
    categoria: "Minecraft",
    descripcionCorta: "Barra de inventario de Minecraft que guarda piezas pequeñas.",
    descripcionDetallada: "Organizador de escritorio inspirado en la barra de inventario de Minecraft, con barras de vida y hambre y casillas para guardar piezas pequeñas. Incluye accesorios opcionales: pico de diamante, puntos de experiencia y número de nivel. Se imprime en varias piezas que se ensamblan por presión.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USfc37b60309912b/design/2024-06-12_47fc60a4c208b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfc37b60309912b/design/2024-06-12_b7aa7667d2e86.png",
      "https://makerworld.bblmw.com/makerworld/model/USfc37b60309912b/design/2024-06-12_e200e208ad155.png",
      "https://makerworld.bblmw.com/makerworld/model/USfc37b60309912b/design/2024-06-12_9b0a4b816c834.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfc37b60309912b/89361105/instance/2024-06-12_a1493299a7d63.png"
    ],
    precioBase: 255,
    escalaDescuento: null,
    tamano: "25.6 cm de largo",
    impresion: {
      material: "PLA",
      gramos: 134,
      horas: 5,
      colores: 5,
      multicolor: true
    },
    etiquetas: [
      "minecraft",
      "gamer",
      "organizador",
      "videojuego"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/492643#profileId-406267",
      autor: "鱼小兑",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe la venta. Además, Minecraft es propiedad de Mojang/Microsoft."
    },
    activo: true
  },
  {
    id: 8,
    nombre: "Lobo de Minecraft para monitor",
    categoria: "Minecraft",
    descripcionCorta: "Lobito dormilón que descansa encima de tu monitor.",
    descripcionDetallada: "Figura del lobo domesticado de Minecraft en pose dormida, diseñada para sentarse sobre el monitor, una repisa o el escritorio. Conserva el estilo cuadrado del juego con detalles sutiles. Un regalo ideal para fans de Minecraft.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US19f0a283b3c994/design/bd48738a8e6a78c7.png",
      "https://makerworld.bblmw.com/makerworld/model/US19f0a283b3c994/design/66195d5791af55ad.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US19f0a283b3c994/design/7d1bf1d0037cd72d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US19f0a283b3c994/design/0c2159b86aad67a8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US19f0a283b3c994/778945445/instance/a2efe44a6e50012b.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 11,
      horas: 1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "minecraft",
      "lobo",
      "perro",
      "monitor",
      "gamer",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2835339#profileId-3662413",
      autor: "Better_Berry",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe la venta. Además, Minecraft es propiedad de Mojang/Microsoft."
    },
    activo: true
  },
  {
    id: 107,
    nombre: "Llaveros Minecraft – espada y pico de diamante",
    categoria: "Minecraft",
    descripcionCorta: "Herramientas de diamante pixeladas para tus llaves.",
    descripcionDetallada: "Llaveros con la espada y el pico de diamante de Minecraft en estilo pixel. Para llaves, mochila o estuche.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USfb905182faae73/design/2025-02-23_460d1e7a8786d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfb905182faae73/design/2025-02-23_8b773c27e703c8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfb905182faae73/design/2025-02-23_066b9b0b439c9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfb905182faae73/design/2025-02-23_6eef297921ddf.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfb905182faae73/design/2025-02-23_0f578340f54c5.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 11,
      horas: 0.6,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "minecraft",
      "gamer",
      "espada",
      "pico",
      "diamante"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1142345#profileId-235248230",
      autor: "Franken 3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 108,
    nombre: "Llavero Creeper de Minecraft",
    categoria: "Minecraft",
    descripcionCorta: "El Creeper clásico en verde, listo para tus llaves.",
    descripcionDetallada: "Llavero del Creeper de Minecraft a dos tonos de verde. Un regalo geek rápido y económico.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US820d9342f3ea7b/design/2025-04-29_195bb2cc062308.png",
      "https://makerworld.bblmw.com/makerworld/model/US820d9342f3ea7b/design/2025-04-29_c0e68330cfd38.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US820d9342f3ea7b/design/2025-04-29_441977a5bf68f8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US820d9342f3ea7b/design/2025-04-29_1c983110d9ce4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US820d9342f3ea7b/288681033/instance/2025-04-29_d0edebff13e3b.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 5,
      horas: 0.7,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "minecraft",
      "creeper",
      "gamer"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1367797#profileId-288681033",
      autor: "Stenly_G",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 296,
    nombre: "Espada de píxeles personalizable",
    categoria: "Minecraft",
    descripcionCorta: "Espada pixelada estilo Minecraft.",
    descripcionDetallada: "Espada de píxeles inspirada en Minecraft, personalizable en colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf2804d1e037569/design/2024-10-18_cc9afd7c7eac6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf2804d1e037569/design/2024-10-18_5f21ab3fbe2fa.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf2804d1e037569/design/2024-10-18_55ee18456198b.jpg"
    ],
    precioBase: 110,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 59,
      horas: 2,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "minecraft",
      "espada",
      "pixel"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/712834#profileId-252960354",
      autor: "Creat3DWorks",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 297,
    nombre: "Creeper articulado",
    categoria: "Minecraft",
    descripcionCorta: "Creeper flexible de Minecraft.",
    descripcionDetallada: "Creeper de Minecraft flexible y articulado.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6630bb69ff9411/design/2024-12-26_8fee5fdc5c94b.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 8,
      horas: 0.5,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "minecraft",
      "creeper",
      "flexi"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/915817#profileId-350757700",
      autor: "Nismo3Dprint",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 298,
    nombre: "Linterna de Minecraft",
    categoria: "Minecraft",
    descripcionCorta: "Linterna para vela LED.",
    descripcionDetallada: "Linterna inspirada en Minecraft para vela LED. Ideal en el escritorio.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US3b7b61d76cb95a/design/2025-03-04_b0b1919076e67.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US3b7b61d76cb95a/design/2025-03-04_b3bf2bf5f8fd4.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US3b7b61d76cb95a/design/2025-03-04_59e909797cddf.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US3b7b61d76cb95a/design/2025-03-04_43aeb1d3e363a.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US3b7b61d76cb95a/design/2025-03-04_0aedc035dd992.jpeg"
    ],
    precioBase: 90,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 48,
      horas: 2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "minecraft",
      "linterna",
      "lampara"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1175061#profileId-242482152",
      autor: "izboxo",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 299,
    nombre: "Lámpara decorativa Minecraft",
    categoria: "Minecraft",
    descripcionCorta: "Lámpara de bloque estilo Minecraft.",
    descripcionDetallada: "Lámpara decorativa inspirada en Minecraft. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US591df2517b8c57/design/e1e45238da27138a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US591df2517b8c57/design/6c4256468aa343e2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US591df2517b8c57/design/52e34d0a55097b47.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US591df2517b8c57/design/6ef8024fd407bdfe.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US591df2517b8c57/design/f8cc22ede2277e1b.jpg"
    ],
    precioBase: 210,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 111,
      horas: 4,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "minecraft",
      "lampara"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2587818#profileId-1084025628",
      autor: "TheAlchemists3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 300,
    nombre: "Abeja articulada",
    categoria: "Minecraft",
    descripcionCorta: "Abejita flexible a 2 colores.",
    descripcionDetallada: "Abeja articulada y flexible, tierna y fácil de jugar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US4b34c00219c252/design/9f07b9cc1f977c6d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4b34c00219c252/design/4f8fd797d36ef2ba.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4b34c00219c252/design/886b70aef0982397.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4b34c00219c252/design/aa8d0dbc2e8df90e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4b34c00219c252/707463574/instance/fea1d2cde159ab36.jpg"
    ],
    precioBase: 150,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 57,
      horas: 4,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "abeja",
      "flexi",
      "minecraft"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2648242#profileId-707463574",
      autor: "FMCraft",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 301,
    nombre: "Ajolote de Minecraft articulado",
    categoria: "Minecraft",
    descripcionCorta: "El ajolote de Minecraft, flexible.",
    descripcionDetallada: "Ajolote de Minecraft articulado y flexible a 3 colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USffc5d5e0b3e0d2/design/2024-12-29_05eda4b9fce05.jpg"
    ],
    precioBase: 110,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 58,
      horas: 2.1,
      colores: 3,
      multicolor: false
    },
    etiquetas: [
      "minecraft",
      "ajolote",
      "flexi"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/927021#profileId-343348176",
      autor: "Nismo3Dprint",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 302,
    nombre: "Cofre de Minecraft",
    categoria: "Minecraft",
    descripcionCorta: "Cofre que se abre, con textura del juego.",
    descripcionDetallada: "Cofre articulado de Minecraft con proporciones originales: se abre y guarda cosas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US7ad6c9582d2b79/design/2025-02-28_9ee05764e3144.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7ad6c9582d2b79/design/2025-02-28_0d5add23bdd51.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7ad6c9582d2b79/design/2025-02-28_00ae061f21e45.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7ad6c9582d2b79/design/2025-02-28_06f674160553a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7ad6c9582d2b79/design/2025-02-28_bdf06d775038a.jpg"
    ],
    precioBase: 335,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 143,
      horas: 8.3,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "minecraft",
      "cofre",
      "caja"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1158947#profileId-264783790",
      autor: "kirimba",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 303,
    nombre: "Enderman articulado",
    categoria: "Minecraft",
    descripcionCorta: "Enderman con articulaciones mejoradas.",
    descripcionDetallada: "Enderman de Minecraft con articulaciones móviles.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USac1f673f44eeb7/design/2025-04-28_648584565a2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USac1f673f44eeb7/design/2025-04-28_a35290de76a8d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USac1f673f44eeb7/design/2025-04-26_f55e316a425a48.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USac1f673f44eeb7/design/2025-04-28_212f1a692d605.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USac1f673f44eeb7/design/2025-04-28_ed46b8e278d5e.jpg"
    ],
    precioBase: 70,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 31,
      horas: 1.5,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "minecraft",
      "enderman",
      "figura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1359390#profileId-296878265",
      autor: "Spennolio",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 304,
    nombre: "Cubos fidget de Minecraft",
    categoria: "Minecraft",
    descripcionCorta: "Cubos fidget con texturas de bloques.",
    descripcionDetallada: "Cubos fidget con texturas de bloques de Minecraft.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US35dda6c19b6a6c/design/2024-08-03_7342b0b714d4b.png",
      "https://makerworld.bblmw.com/makerworld/model/US35dda6c19b6a6c/design/363b2cfc3f0b0e18.png",
      "https://makerworld.bblmw.com/makerworld/model/US35dda6c19b6a6c/design/cb5a574e9782716f.png",
      "https://makerworld.bblmw.com/makerworld/model/US35dda6c19b6a6c/design/f5640e92c76d3dab.png",
      "https://makerworld.bblmw.com/makerworld/model/US35dda6c19b6a6c/106725719/instance/2024-08-03_594ccc7dff838.png"
    ],
    precioBase: 140,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 78,
      horas: 2.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "minecraft",
      "fidget",
      "cubo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/571172#profileId-106725719",
      autor: "PiNK_3DP",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 305,
    nombre: "Figuras de acción de Minecraft",
    categoria: "Minecraft",
    descripcionCorta: "Héroes y mobs articulados.",
    descripcionDetallada: "Colección de figuras de acción articuladas de Minecraft: héroes y mobs. Precio por figura.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/UScbcdbe108b2255/design/2bee4a9fec56b408.png",
      "https://makerworld.bblmw.com/makerworld/model/UScbcdbe108b2255/design/2025-09-09_411d5470cfd7d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/UScbcdbe108b2255/design/5c7ce84842ed990d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/UScbcdbe108b2255/735987371/instance/484ad7ed11a1e999.png"
    ],
    precioBase: 115,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 48,
      horas: 2.9,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "minecraft",
      "figura",
      "accion"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1762567#profileId-735987371",
      autor: "erickson85",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 306,
    nombre: "Llavero cerdito de Minecraft",
    categoria: "Minecraft",
    descripcionCorta: "Minifigura de cerdo en kit.",
    descripcionDetallada: "Kit de minifigura de cerdito de Minecraft que también funciona como llavero.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US49609b507f75d5/design/2023-08-02_49a01d67d64c1.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US49609b507f75d5/design/2023-08-02_d2d61a0b58015.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US49609b507f75d5/design/2023-08-02_44db2cec55f57.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US49609b507f75d5/design/2023-10-31_51e0852f07efe.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US49609b507f75d5/design/2023-08-15_4a8f3e0e44adb.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 17,
      horas: 1.1,
      colores: 4,
      multicolor: true
    },
    etiquetas: [
      "minecraft",
      "cerdo",
      "llavero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/12963#profileId-70437253",
      autor: "chiz_m",
      licencia: "CC BY-NC-ND",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 307,
    nombre: "Espada de diamante de Minecraft",
    categoria: "Minecraft",
    descripcionCorta: "La espada de diamante clásica.",
    descripcionDetallada: "Espada de diamante de Minecraft a dos colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USbd1fe43fd65a3d/design/2024-07-17_d9f702b86505a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbd1fe43fd65a3d/design/2024-07-17_5fb145a52652a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbd1fe43fd65a3d/856437553/instance/fc9612e474d29e7e.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USbd1fe43fd65a3d/856437553/instance/09d322dd3abe81b8.jpeg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 10,
      horas: 0.6,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "minecraft",
      "espada",
      "diamante"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/543762#profileId-856437553",
      autor: "Hajimi",
      licencia: "CC BY-NC",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 308,
    nombre: "Bloques magnéticos de Minecraft",
    categoria: "Minecraft",
    descripcionCorta: "Bloques que se unen con imanes.",
    descripcionDetallada: "Bloques magnéticos de Minecraft para armar y combinar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc8f27ecb43d9ec/design/2024-11-02_8ae32893a89f1.png",
      "https://makerworld.bblmw.com/makerworld/model/USc8f27ecb43d9ec/design/2024-11-02_ceff679ec6c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc8f27ecb43d9ec/design/2024-11-02_8b7f2fe208dbb.png",
      "https://makerworld.bblmw.com/makerworld/model/USc8f27ecb43d9ec/design/2024-11-02_a6da8927366cb.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc8f27ecb43d9ec/design/2024-11-02_7c20992d3c398.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 5,
      horas: 0.6,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "minecraft",
      "bloques",
      "magnetico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/752188#profileId-148609905",
      autor: "IDMyron",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 309,
    nombre: "Calavera hiperarticulada de Minecraft",
    categoria: "Minecraft",
    descripcionCorta: "Esqueleto articulado para adorno o llavero.",
    descripcionDetallada: "Calavera de Minecraft hiperarticulada que funciona como adorno o llavero.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USbb2c0bd5a327e/design/cc0a49f3-0d0a-4c16-90f3-083b93a1f612.webp",
      "https://makerworld.bblmw.com/makerworld/model/USbb2c0bd5a327e/design/fb5ca2f9-c64e-4b94-ae09-6ef1a61f0d5f.webp",
      "https://makerworld.bblmw.com/makerworld/model/USbb2c0bd5a327e/design/8dd2ac75-3fd7-42a5-acc9-7d9c2d7dfdcc.webp",
      "https://makerworld.bblmw.com/makerworld/model/USbb2c0bd5a327e/design/97134426-932f-484e-a307-5f9b92bf6f87.webp",
      "https://makerworld.bblmw.com/makerworld/model/USbb2c0bd5a327e/design/34f5a75f-4708-4f56-937d-abece584c8b7.webp"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 12,
      horas: 0.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "minecraft",
      "calavera",
      "llavero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1207370#profileId-270887594",
      autor: "YiYue",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 310,
    nombre: "Cubo fidget Creeper",
    categoria: "Minecraft",
    descripcionCorta: "Cubo antiestrés con cara de Creeper.",
    descripcionDetallada: "Cubo fidget antiestrés con la cara del Creeper.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USea2f2942df4770/design/2024-11-02_1af454bdf18698.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USea2f2942df4770/design/2024-11-02_216421bf7506e.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USea2f2942df4770/design/2024-11-02_c4a7cf15b519d.jpeg"
    ],
    precioBase: 200,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 87,
      horas: 4.9,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "minecraft",
      "creeper",
      "fidget"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/752702#profileId-148707211",
      autor: "M2 Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 311,
    nombre: "Lámpara de mineral de Minecraft",
    categoria: "Minecraft",
    descripcionCorta: "Bloque de mineral para vela LED.",
    descripcionDetallada: "Pequeña lámpara de bloque de mineral de Minecraft para vela LED de té.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US1d34c1ee7eda9/design/2024-10-30_795e8ad29bdf5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1d34c1ee7eda9/design/2024-10-30_fc64a671f6bdc.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1d34c1ee7eda9/design/2024-10-30_43d19d83c69c4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1d34c1ee7eda9/design/2024-10-30_e2030b32532f2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1d34c1ee7eda9/design/2024-10-30_549c2c19473e4.jpg"
    ],
    precioBase: 100,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 52,
      horas: 2,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "minecraft",
      "lampara",
      "mineral"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/742653#profileId-146678841",
      autor: "Pioterzero",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 313,
    nombre: "Cabeza de Minecraft con boca móvil",
    categoria: "Minecraft",
    descripcionCorta: "Figura con boca articulada.",
    descripcionDetallada: "Figura de Minecraft con boca articulada que se abre y se cierra.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US224a91f8e37d74/design/2025-04-04_037bc7e2aaa41.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US224a91f8e37d74/design/2025-04-04_d792ef2c84a6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US224a91f8e37d74/design/2025-04-04_708bbdcb6486f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US224a91f8e37d74/design/2025-04-04_14507b6692f42.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US224a91f8e37d74/design/2025-04-04_a5a5b382fc8e8.jpg"
    ],
    precioBase: 50,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PETG",
      gramos: 21,
      horas: 1.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "minecraft",
      "figura",
      "articulado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1282868#profileId-267458912",
      autor: "YiYue",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 314,
    nombre: "Llavero Enderman",
    categoria: "Minecraft",
    descripcionCorta: "Minifigura de Enderman en kit.",
    descripcionDetallada: "Kit de minifigura de Enderman de Minecraft que también funciona como llavero.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb455c36892ac1c/design/2023-09-23_37080127716b2.png",
      "https://makerworld.bblmw.com/makerworld/model/USb455c36892ac1c/design/2023-09-23_f3f104c8c3c9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb455c36892ac1c/design/2023-09-23_63dacb016c905.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb455c36892ac1c/design/2023-10-31_03023eee64cc8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb455c36892ac1c/design/2023-09-23_6f9e4272e49c7.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 20,
      horas: 1.1,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "minecraft",
      "enderman",
      "llavero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/18267#profileId-70436314",
      autor: "chiz_m",
      licencia: "CC BY-NC-ND",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 315,
    nombre: "Keycap de mineral Minecraft",
    categoria: "Minecraft",
    descripcionCorta: "Tecla con textura de mineral.",
    descripcionDetallada: "Keycap para teclado mecánico con textura de bloque de mineral de Minecraft.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US386fd75b0c6dab/design/0f8dc339-32fd-41f6-a030-baf2727841ae.webp",
      "https://makerworld.bblmw.com/makerworld/model/US386fd75b0c6dab/design/bf258648-4a1b-4daa-81b9-87edd610db9d.webp",
      "https://makerworld.bblmw.com/makerworld/model/US386fd75b0c6dab/design/a065f327-ed02-4dd1-8405-9845a2b990e9.webp",
      "https://makerworld.bblmw.com/makerworld/model/US386fd75b0c6dab/181103413/instance/3960d292-c7c6-499d-90d6-18970e314457.webp"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 7,
      horas: 0.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "minecraft",
      "keycap",
      "teclado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/894495#profileId-181103413",
      autor: "Huhhhh_",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 409,
    nombre: "Placa de nombre estilo Minecraft",
    categoria: "Minecraft",
    descripcionCorta: "Tu nombre como letrero de Minecraft.",
    descripcionDetallada: "Placa de nombre personalizada estilo Minecraft. Escribe el nombre en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6857e94e263d29/design/2025-11-17_962d3c6bf2eb5.png",
      "https://makerworld.bblmw.com/makerworld/model/US6857e94e263d29/design/2025-11-07_090ccf71ca917.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6857e94e263d29/design/2025-11-07_37f22cdd8aaba8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6857e94e263d29/design/2025-11-07_bc95e4d6ac55b8.png",
      "https://makerworld.bblmw.com/makerworld/model/US6857e94e263d29/486610503/instance/2025-11-07_23162c3431deb.png"
    ],
    precioBase: 155,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 80,
      horas: 3.1,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "minecraft",
      "nombre",
      "personalizado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1969808#profileId-486610503",
      autor: "Capyvara",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Minecraft (Mojang / Microsoft)."
    },
    activo: true
  },
  {
    id: 101,
    nombre: "Llaveros Naruto (Naruto, Kakashi, Jiraiya)",
    categoria: "Llaveros y Pins",
    descripcionCorta: "Llaveros de los ninjas de la Aldea de la Hoja.",
    descripcionDetallada: "Llaveros planos a dos colores inspirados en Naruto: Naruto Uzumaki, Kakashi Hatake y Jiraiya. También se pueden hacer como separador de libros o imán. Precio por pieza; indica el personaje en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USdda76314472090/design/2026-01-17_1a12b81dbd81d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USdda76314472090/design/2026-01-17_9108115bd9a578.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USdda76314472090/design/2026-01-17_d2c598ca776f9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USdda76314472090/design/2026-01-17_2c5f2edf250d38.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USdda76314472090/design/2026-01-17_749e8914088088.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "anime",
      "naruto",
      "ninja",
      "konoha"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2256681#profileId-569138805",
      autor: "ComicsArt",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Naruto (Shueisha / Masashi Kishimoto)."
    },
    activo: true
  },
  {
    id: 102,
    nombre: "Llavero Sharingan",
    categoria: "Llaveros y Pins",
    descripcionCorta: "10 diseños de Mangekyō Sharingan para elegir.",
    descripcionDetallada: "Colección de llaveros Mangekyō Sharingan: Itachi, Sasuke, Madara, Kakashi, Rinne Sharingan y más. Acabado mate a varios colores. Precio por pieza; elige el diseño en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa1a430b7fd7b50/design/2025-08-07_4f985e52f6c58.png",
      "https://makerworld.bblmw.com/makerworld/model/USa1a430b7fd7b50/design/2025-08-07_679daf1368b46.png",
      "https://makerworld.bblmw.com/makerworld/model/USa1a430b7fd7b50/design/2025-08-07_923cb9560f5b68.png",
      "https://makerworld.bblmw.com/makerworld/model/USa1a430b7fd7b50/design/2025-08-07_d190a0486399f.png",
      "https://makerworld.bblmw.com/makerworld/model/USa1a430b7fd7b50/design/2025-08-07_1c2272bf1c948.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "anime",
      "naruto",
      "sharingan",
      "uchiha",
      "itachi",
      "sasuke"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1679200#profileId-968445394",
      autor: "Fabio.L",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Naruto (Shueisha / Masashi Kishimoto)."
    },
    activo: true
  },
  {
    id: 104,
    nombre: "Llavero One Piece – Jolly Roger de Luffy",
    categoria: "Llaveros y Pins",
    descripcionCorta: "La bandera pirata de los Sombreros de Paja.",
    descripcionDetallada: "Llavero multicolor con el emblema pirata de Monkey D. Luffy y su sombrero de paja. Ideal para fans de One Piece.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US330f580fb55738/design/1fed86d68ffd4533.png",
      "https://makerworld.bblmw.com/makerworld/model/US330f580fb55738/design/7a9307615b399764.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US330f580fb55738/685229609/instance/4324410d08cdb850.jpg"
    ],
    precioBase: 60,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 22,
      horas: 1.6,
      colores: 4,
      multicolor: true
    },
    etiquetas: [
      "anime",
      "one piece",
      "luffy",
      "pirata"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2588947#profileId-685229609",
      autor: "mesivi",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: One Piece (Shueisha / Eiichirō Oda)."
    },
    activo: true
  },
  {
    id: 106,
    nombre: "Llavero Demon Slayer",
    categoria: "Llaveros y Pins",
    descripcionCorta: "Llavero a 3 colores de Kimetsu no Yaiba.",
    descripcionDetallada: "Llavero inspirado en Demon Slayer (Kimetsu no Yaiba), impreso a 3 colores con acabado planchado en la cara superior.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US8c497b215db8c/design/2024-10-22_8697641d8a16d8.jpg"
    ],
    precioBase: 105,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 39,
      horas: 2.9,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "anime",
      "demon slayer",
      "kimetsu no yaiba",
      "tanjiro"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/723079#profileId-142562116",
      autor: "GregoryMustache",
      licencia: "CC BY",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito al autor. Usa una marca o personaje de terceros: Demon Slayer (Shueisha / Koyoharu Gotōge)."
    },
    activo: true
  },
  {
    id: 109,
    nombre: "Moneda / llavero de Robux (Roblox)",
    categoria: "Llaveros y Pins",
    descripcionCorta: "Réplica de la moneda de Roblox, de doble cara.",
    descripcionDetallada: "Moneda de Robux de doble cara que puede ir como llavero. Ideal para fans de Roblox y recuerdos de fiesta.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US91ae85a2a50ef5/design/2025-02-25_83cb31c0513ed.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US91ae85a2a50ef5/design/2025-02-25_8c55741eddc958.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US91ae85a2a50ef5/236950256/instance/2025-02-25_a71809d74f657.jpeg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 2,
      horas: 0.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "roblox",
      "robux",
      "gamer",
      "moneda"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1150075#profileId-236950256",
      autor: "SuperMaribo",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Roblox (Roblox Corporation)."
    },
    activo: true
  },
  {
    id: 110,
    nombre: "Llavero Trifuerza (Zelda)",
    categoria: "Llaveros y Pins",
    descripcionCorta: "La Trifuerza de The Legend of Zelda a dos tonos.",
    descripcionDetallada: "Llavero sencillo de la Trifuerza a uno o dos colores. Para fans de The Legend of Zelda.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000942389/design/2025-01-02_757d9d3701509.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000942389/design/2025-01-02_b892759082d35.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000942389/design/2025-01-02_d8c54872130a7.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000942389/design/2025-01-02_714bdb05fae7d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US47a9565bd8a57a/194625936/instance/2025-01-02_efe815d07a161.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 8,
      horas: 0.5,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "zelda",
      "trifuerza",
      "nintendo",
      "gamer"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/942389#profileId-194625936",
      autor: "Miss_Maggie",
      licencia: "CC BY-NC",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial. Usa una marca o personaje de terceros: The Legend of Zelda (Nintendo)."
    },
    activo: true
  },
  {
    id: 113,
    nombre: "Mini Hollow Knight",
    categoria: "Llaveros y Pins",
    descripcionCorta: "El Caballero de Hollow Knight en miniatura.",
    descripcionDetallada: "Mini figura del Caballero de Hollow Knight. Funciona como llavero, pieza de exhibición o coleccionable.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US3d7309ec3a0d8e/design/2025-06-05_f9afdb98792df.png",
      "https://makerworld.bblmw.com/makerworld/model/US3d7309ec3a0d8e/design/2025-06-05_6b49aa1321c72.png",
      "https://makerworld.bblmw.com/makerworld/model/US3d7309ec3a0d8e/design/2025-06-05_5628d50016eb9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3d7309ec3a0d8e/design/2025-06-05_c768f4abd6953.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3d7309ec3a0d8e/design/2025-06-05_a8c1c673035e9.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 12,
      horas: 1.3,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "hollow knight",
      "gamer",
      "indie",
      "caballero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1490707#profileId-511218501",
      autor: "Lawson3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Hollow Knight (Team Cherry)."
    },
    activo: true
  },
  {
    id: 114,
    nombre: "Llavero Taylor Swift (Swiftie)",
    categoria: "Llaveros y Pins",
    descripcionCorta: "Llavero para fans de Taylor Swift.",
    descripcionDetallada: "Llavero Swiftie que se imprime en los colores que elijas, ideal para fans del Eras Tour.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US695bd8e51eabee/design/2025-03-02_e816dc9d9526b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US695bd8e51eabee/design/2025-03-02_6fd4f63565f31.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 7,
      horas: 0.5,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "taylor swift",
      "swiftie",
      "eras tour",
      "musica"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1168510#profileId-241013388",
      autor: "Flux",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Taylor Swift (marca y nombre de la artista)."
    },
    activo: true
  },
  {
    id: 115,
    nombre: "Llavero Bad Bunny – Debí Tirar Más Fotos",
    categoria: "Llaveros y Pins",
    descripcionCorta: "Llavero inspirado en el álbum de Bad Bunny.",
    descripcionDetallada: "Llavero a dos colores inspirado en el álbum \"Debí Tirar Más Fotos\" de Bad Bunny.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc3c9807b6ea921/design/2025-02-24_ca5db12ce1651.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc3c9807b6ea921/236308904/instance/2025-02-24_ff0f2ec7023da.jpg"
    ],
    precioBase: 60,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "bad bunny",
      "musica",
      "reggaeton",
      "dtmf"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1147467#profileId-236308904",
      autor: "Pint3dIdeas",
      licencia: "CC BY-ND",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito; no permite modificar el diseño. Usa una marca o personaje de terceros: Bad Bunny (marca y nombre del artista)."
    },
    activo: true
  },
  {
    id: 116,
    nombre: "Llavero BTS / ARMY",
    categoria: "Llaveros y Pins",
    descripcionCorta: "Logo de BTS y ARMY a dos colores.",
    descripcionDetallada: "Llavero con los logos de BTS y ARMY, a dos colores. Para fans del K-Pop.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US93b1e95be99659/design/2025-09-03_37ca61c513ad58.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US93b1e95be99659/design/2025-09-03_6182dd44e847e8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US93b1e95be99659/770134864/instance/5bdf65b7b559030a.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 6,
      horas: 0.3,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "bts",
      "army",
      "kpop",
      "musica"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1760446#profileId-770134864",
      autor: "Crafts3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: BTS (HYBE / Big Hit Music)."
    },
    activo: true
  },
  {
    id: 117,
    nombre: "Llavero BLACKPINK",
    categoria: "Llaveros y Pins",
    descripcionCorta: "Logo de BLACKPINK en rosa y negro.",
    descripcionDetallada: "Llavero con el logo de BLACKPINK a dos colores. Para fans del K-Pop.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US750a5bac7f0f4/design/2025-10-19_d61a22388bd5c8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US750a5bac7f0f4/design/2025-10-19_9f3f3fc9f46fa.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 6,
      horas: 0.3,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "blackpink",
      "kpop",
      "blink",
      "musica"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1903709#profileId-445580391",
      autor: "Pato3d",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial. Usa una marca o personaje de terceros: BLACKPINK (YG Entertainment)."
    },
    activo: true
  },
  {
    id: 121,
    nombre: "Llavero escudo del Capitán América",
    categoria: "Llaveros y Pins",
    descripcionCorta: "El escudo de Cap a tres colores.",
    descripcionDetallada: "Llavero del escudo del Capitán América con detalle fino a tres colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb944ca267729bb/design/2025-03-10_62acc149822d6.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb944ca267729bb/design/2025-03-10_2fcf21d512b388.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb944ca267729bb/design/2025-03-10_1a2d8b7cc9b27.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb944ca267729bb/247416883/instance/2025-03-10_85925946895a78.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb944ca267729bb/247416883/instance/2025-03-10_79758cc7a82bb.jpeg"
    ],
    precioBase: 65,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 14,
      horas: 2.3,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "marvel",
      "capitan america",
      "escudo",
      "avengers"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1196351#profileId-247416883",
      autor: "Patrilipeo",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial. Usa una marca o personaje de terceros: Marvel (Disney)."
    },
    activo: true
  },
  {
    id: 122,
    nombre: "Llavero araña de Spider-Man",
    categoria: "Llaveros y Pins",
    descripcionCorta: "Silueta minimalista de la araña.",
    descripcionDetallada: "Llavero minimalista con la araña de Spider-Man. Ligero y rápido de imprimir; ideal para parejas o amigos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US4181a6f29e27/design/2025-02-19_3a25bfbb52fc.webp",
      "https://makerworld.bblmw.com/makerworld/model/US4181a6f29e27/design/2025-02-19_18abd11c2666e.webp",
      "https://makerworld.bblmw.com/makerworld/model/US4181a6f29e27/design/2025-02-19_4c112c361b5a9.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 3,
      horas: 0.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "spiderman",
      "marvel",
      "arana",
      "superheroe"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1127670#profileId-231994088",
      autor: "rufus",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Spider-Man (Marvel / Disney / Sony)."
    },
    activo: true
  },
  {
    id: 123,
    nombre: "Llavero Baby Darth Vader",
    categoria: "Llaveros y Pins",
    descripcionCorta: "Darth Vader en versión bebé.",
    descripcionDetallada: "Llavero de Darth Vader en estilo bebé, muy tierno para fans de Star Wars.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US747d6b4f00f1a4/design/f13d49ca6028bfd6.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US747d6b4f00f1a4/design/d1b422aeb4461cb3.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US747d6b4f00f1a4/design/06298ad0808eec39.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US747d6b4f00f1a4/design/821f2f7842c92880.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US747d6b4f00f1a4/design/6e5b64c266950676.jpeg"
    ],
    precioBase: 70,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 20,
      horas: 2.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "star wars",
      "darth vader",
      "vader"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2911428#profileId-810392164",
      autor: "ShapeShift 3D Creations",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Star Wars (Lucasfilm / Disney)."
    },
    activo: true
  },
  {
    id: 124,
    nombre: "Llavero casco Mandaloriano",
    categoria: "Llaveros y Pins",
    descripcionCorta: "El casco del Mandaloriano.",
    descripcionDetallada: "Llavero 3D con el casco del Mandaloriano, compacto y resistente.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa78936915fc8d6/design/2024-12-28_2c4ce0456338f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa78936915fc8d6/design/2024-12-28_add26af85274a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa78936915fc8d6/design/2024-12-28_e270de9318718.jpg"
    ],
    precioBase: 110,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 42,
      horas: 2.9,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "star wars",
      "mandalorian",
      "mando",
      "grogu"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/920070#profileId-187712297",
      autor: "Hitarii",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Star Wars (Lucasfilm / Disney)."
    },
    activo: true
  },
  {
    id: 125,
    nombre: "Llaveros Harry Potter – objetos mágicos",
    categoria: "Llaveros y Pins",
    descripcionCorta: "Lentes, varita, snitch y más objetos icónicos.",
    descripcionDetallada: "Colección de mini llaveros con objetos icónicos del mundo de Harry Potter. Precio por pieza; elige el objeto en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USbba563bd5e6fd8/design/2025-12-24_ff0efb6d10ecc8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbba563bd5e6fd8/design/2025-12-24_c804ec5bcb3128.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbba563bd5e6fd8/design/2025-12-24_d30dc2c0f3dea8.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "harry potter",
      "hogwarts",
      "magia",
      "snitch"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2153344#profileId-534354478",
      autor: "Galaxy Of Prints",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Harry Potter (Warner Bros. / J.K. Rowling)."
    },
    activo: true
  },
  {
    id: 126,
    nombre: "Llavero casas de Hogwarts",
    categoria: "Llaveros y Pins",
    descripcionCorta: "Escudos con los colores de cada casa.",
    descripcionDetallada: "Llavero inspirado en Harry Potter con los colores de Gryffindor, Slytherin, Ravenclaw o Hufflepuff.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf479fe28e78885/design/2024-12-30_cd754e9156906.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USf479fe28e78885/design/2024-12-30_1344bddc122c9.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USf479fe28e78885/design/2024-12-30_a2c39ce13845d.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USf479fe28e78885/design/2024-12-30_a2733552b748b.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USf479fe28e78885/design/2024-12-30_c6afb3e382ccb.jpeg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 3,
      horas: 0.4,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "harry potter",
      "hogwarts",
      "gryffindor",
      "slytherin"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/853715#profileId-170764719",
      autor: "Vorish 3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Harry Potter (Warner Bros. / J.K. Rowling)."
    },
    activo: true
  },
  {
    id: 127,
    nombre: "Llavero con nombre – doble argolla",
    categoria: "Llaveros y Pins",
    descripcionCorta: "Tu nombre con dos orificios para colgar.",
    descripcionDetallada: "Llavero personalizado con el nombre que quieras y dos orificios: uno para la argolla y otro para colgar un dije o un segundo llavero. Escribe el nombre en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US10dd4b8612626a/design/416c88e6d57d819f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US10dd4b8612626a/design/79a033ec46319f0f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US10dd4b8612626a/design/414efc04c2e6e9de.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US10dd4b8612626a/design/ccb6ba159ba65374.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US10dd4b8612626a/874775521/instance/04228e8649aec1de.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 3,
      horas: 0.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "nombre",
      "personalizado",
      "regalo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/3050158#profileId-874775521",
      autor: "Sandy Design",
      licencia: "CC BY-ND",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito; no permite modificar el diseño."
    },
    activo: true
  },
  {
    id: 128,
    nombre: "Llavero con nombre – flor, estrella o corazón",
    categoria: "Llaveros y Pins",
    descripcionCorta: "Tu nombre en forma de flor, estrella o corazón.",
    descripcionDetallada: "Llavero 100% personalizable con nombre en tres formas: flor, estrella o corazón, a varios colores. Ideal para 14 de febrero, recuerdos y regalos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US90c825c7505b2e/design/76f501e5581b1ebe.png",
      "https://makerworld.bblmw.com/makerworld/model/US90c825c7505b2e/design/e7049b46176ddf4e.png",
      "https://makerworld.bblmw.com/makerworld/model/US90c825c7505b2e/design/077c2299138704a2.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US90c825c7505b2e/design/2f5f1f0233d93f37.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US90c825c7505b2e/738138848/instance/84363a08d8046d45.jpeg"
    ],
    precioBase: 50,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 22,
      horas: 1.2,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "nombre",
      "corazon",
      "personalizado",
      "14 de febrero",
      "amor"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2734775#profileId-738138848",
      autor: "CuteCraft 3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 129,
    nombre: "Llavero fantasmita",
    categoria: "Llaveros y Pins",
    descripcionCorta: "Fantasma tierno a dos colores.",
    descripcionDetallada: "Llavero de fantasma minimalista con bordes suaves. Perfecto para Halloween o todo el año.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US84e1943decd227/design/b81392527432c2d2.webp",
      "https://makerworld.bblmw.com/makerworld/model/US84e1943decd227/design/4a8d4dbc85d83afc.webp",
      "https://makerworld.bblmw.com/makerworld/model/US84e1943decd227/design/08193622917fec89.webp",
      "https://makerworld.bblmw.com/makerworld/model/US84e1943decd227/design/2b06d676f5c59bfc.webp",
      "https://makerworld.bblmw.com/makerworld/model/US84e1943decd227/design/2024-10-05_ff695ebd59fba.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 4,
      horas: 0.2,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "halloween",
      "fantasma",
      "boo",
      "tierno"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/682859#profileId-151934138",
      autor: "Sponge",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 130,
    nombre: "Llavero antiestrés estrella",
    categoria: "Llaveros y Pins",
    descripcionCorta: "Estrella sensorial que se mueve en tus manos.",
    descripcionDetallada: "Llavero con forma de estrella que funciona como juguete sensorial antiestrés.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US3f205d59fbed9a/design/2025-07-26_bd98b3883e9288.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3f205d59fbed9a/design/2025-07-26_4dbc272270e9e8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3f205d59fbed9a/design/2025-07-26_d40a9834557f1.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3f205d59fbed9a/design/2025-07-26_c57d6e70bb41e.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 6,
      horas: 0.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "fidget",
      "antiestres",
      "estrella"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1641520#profileId-362827207",
      autor: "ShapeCrafter",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 131,
    nombre: "Llavero trompo giroscópico",
    categoria: "Llaveros y Pins",
    descripcionCorta: "Llavero que gira como trompo.",
    descripcionDetallada: "Llavero giratorio con forma de rin, gira rápido y suave. Mide 5 cm de diámetro. Muy adictivo para mochilas y llaves.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US25e091baddddac/design/2024-12-07_5e6dfe64335e08.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US25e091baddddac/design/2024-12-07_700b74bcabccc.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US25e091baddddac/design/2024-12-07_6df20af883536.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US25e091baddddac/design/2024-12-07_765ffaed660ae.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US25e091baddddac/design/2024-12-07_2e6a732b24bb88.jpg"
    ],
    precioBase: 60,
    escalaDescuento: null,
    tamano: "5 cm de diámetro",
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "fidget",
      "spinner",
      "trompo",
      "giratorio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/856977#profileId-171548482",
      autor: "squinn",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 257,
    nombre: "Llavero placa personalizada",
    categoria: "Llaveros de Motor",
    descripcionCorta: "Tu placa de auto o moto en llavero.",
    descripcionDetallada: "Llavero con forma de placa vehicular personalizada con tu número o nombre. Escríbelo en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USadb46a60eb54eb/design/2025-02-22_6ed0cf22357c1.png",
      "https://makerworld.bblmw.com/makerworld/model/USadb46a60eb54eb/design/2025-02-22_ce22d43f5a338.png",
      "https://makerworld.bblmw.com/makerworld/model/USadb46a60eb54eb/design/2025-03-18_aa8498559ae18.png",
      "https://makerworld.bblmw.com/makerworld/model/USadb46a60eb54eb/234542817/instance/2025-02-22_92738a4dd17c7.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 12,
      horas: 0.7,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "placa",
      "auto",
      "moto",
      "personalizado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1138840#profileId-234542817",
      autor: "Plus3dLab",
      licencia: "MakerWorld Exclusive License",
      permiteVenta: false,
      notaLicencia: "Prohíbe el uso comercial."
    },
    activo: true
  },
  {
    id: 258,
    nombre: "Llavero motor en línea fidget",
    categoria: "Llaveros de Motor",
    descripcionCorta: "Motor en línea con pistones que se mueven.",
    descripcionDetallada: "Llavero de motor en línea con pistones móviles; también funciona como fidget.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US4340d6c945ef3c/design/fe3a6fd8bf3e375d.png",
      "https://makerworld.bblmw.com/makerworld/model/US4340d6c945ef3c/design/62d3a5007f9bf30a.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US4340d6c945ef3c/design/c3d46bdf90fa6d0a.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 12,
      horas: 1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "motor",
      "pistones",
      "fidget"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2786433#profileId-758817214",
      autor: "Artemix",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 260,
    nombre: "Llavero silbato turbo giratorio",
    categoria: "Llaveros de Motor",
    descripcionCorta: "Turbo que gira y silba.",
    descripcionDetallada: "Llavero que replica un turbocompresor: la turbina gira y funciona como silbato.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USeda6cf60c563b3/design/2024-04-16_b0d32bf7bc2f3.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USeda6cf60c563b3/design/2024-04-16_fe41850417ec6.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USeda6cf60c563b3/design/2024-04-16_cc9966c80a92f.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USeda6cf60c563b3/design/2024-04-16_a5fe39d6d960a.jpeg"
    ],
    precioBase: 190,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 72,
      horas: 5.3,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "turbo",
      "silbato",
      "autos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/431063#profileId-133077088",
      autor: "DjangoCashflow",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 261,
    nombre: "Llavero palanca de cambios",
    categoria: "Llaveros de Motor",
    descripcionCorta: "Palanca de velocidades en miniatura.",
    descripcionDetallada: "Llavero con forma de palanca de cambios, perfecto para fans de los autos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf6ca1e2b595ee/design/2024-02-16_3333b542d86ac.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf6ca1e2b595ee/design/2024-02-16_8885e5f450bd4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf6ca1e2b595ee/50729646/instance/2024-02-16_2916d3c8b39bb.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf6ca1e2b595ee/50729646/instance/2024-02-16_c86ca3d3b193b.jpg"
    ],
    precioBase: 150,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 67,
      horas: 3.6,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "palanca",
      "autos",
      "llavero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/188346#profileId-59162889",
      autor: "StatusSymbol",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 262,
    nombre: "Medidor de banda de llanta",
    categoria: "Llaveros de Motor",
    descripcionCorta: "Revisa la profundidad de tus llantas.",
    descripcionDetallada: "Medidor para comprobar rápidamente la profundidad de la banda de rodadura de las llantas. Útil y se puede llevar en el llavero.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US383975ed36a45d/design/2025-07-27_b30aa5464bc61.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US383975ed36a45d/design/2025-07-28_tbyuh7kxpfnr.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US383975ed36a45d/design/2025-07-27_9059f2720812e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US383975ed36a45d/364364467/instance/2025-07-27_315d59079f74b.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 7,
      horas: 0.3,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "llanta",
      "autos",
      "herramienta"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1647092#profileId-364364467",
      autor: "VC_design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 263,
    nombre: "Llavero bujía",
    categoria: "Llaveros de Motor",
    descripcionCorta: "Bujía en miniatura de menos de 5 cm.",
    descripcionDetallada: "Llavero de bujía en miniatura, armada en varias piezas. Mide menos de 5 cm.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US4399506e854d7e/design/2024-04-21_1fb73e814985a.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US4399506e854d7e/design/2024-04-21_f120151753558.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US4399506e854d7e/70086675/instance/2024-04-21_3d5324d0f4455.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: "Menos de 5 cm",
    impresion: {
      material: "PLA",
      gramos: 4,
      horas: 1.7,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "bujia",
      "motor",
      "autos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/437728#profileId-71052618",
      autor: "Xander Designs",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 264,
    nombre: "Llaveros de marcas de motos",
    categoria: "Llaveros de Motor",
    descripcionCorta: "Logos de marcas de motocicletas.",
    descripcionDetallada: "Llaveros planos con logos de marcas de motocicletas, delgados y ligeros. Indica la marca en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa72d2e0fb5987d/design/2025-06-06_557985c7e93f68.png",
      "https://makerworld.bblmw.com/makerworld/model/USa72d2e0fb5987d/design/2025-06-06_b1253cfb6e00e8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa72d2e0fb5987d/design/2025-06-06_c8e0ecd4bca3e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa72d2e0fb5987d/design/2025-06-06_ead31f262de7b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa72d2e0fb5987d/design/2025-06-06_97fe976b9aeb7.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 7,
      multicolor: true
    },
    etiquetas: [
      "moto",
      "marcas",
      "llavero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1492375#profileId-325556422",
      autor: "PSV Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Marcas de motocicletas (marcas registradas)."
    },
    activo: true
  },
  {
    id: 265,
    nombre: "Llavero Yamaha",
    categoria: "Llaveros de Motor",
    descripcionCorta: "Llavero con patrón de panal y logo Yamaha.",
    descripcionDetallada: "Llavero con logo Yamaha y patrón de panal, a uno o dos colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US41ac2d1d58bb77/design/2025-06-06_fdcdb5d194c1d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US41ac2d1d58bb77/design/2025-06-06_491036d7b590b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US41ac2d1d58bb77/320429054/instance/2025-06-06_e6408c7b39bc1.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 9,
      horas: 0.7,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "yamaha",
      "moto",
      "llavero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1491977#profileId-320429054",
      autor: "Krystian3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Yamaha (marca registrada)."
    },
    activo: true
  },
  {
    id: 266,
    nombre: "Llavero Volkswagen",
    categoria: "Llaveros de Motor",
    descripcionCorta: "Logo de Volkswagen.",
    descripcionDetallada: "Llavero con el logo de Volkswagen.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US33ba2c55177b3a/design/2025-06-02_91c7afbeb9bb8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US33ba2c55177b3a/design/2025-06-03_59ea2e83be89c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US33ba2c55177b3a/317811602/instance/2025-06-03_4baca8f5ee49f.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 9,
      horas: 0.8,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "volkswagen",
      "vw",
      "autos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1482390#profileId-317811602",
      autor: "Krystian3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Volkswagen (marca registrada)."
    },
    activo: true
  },
  {
    id: 267,
    nombre: "Llavero motor V8 antiestrés",
    categoria: "Llaveros de Motor",
    descripcionCorta: "Motor V8 con pistones que se mueven.",
    descripcionDetallada: "Llavero de motor V8 con pistones móviles que funciona como fidget.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa8c75c9b586ccb/design/6bc54980a03f9938.png",
      "https://makerworld.bblmw.com/makerworld/model/USa8c75c9b586ccb/design/9cbf0c9afe1ffc09.jpg"
    ],
    precioBase: 50,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 16,
      horas: 1.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "motor",
      "v8",
      "fidget"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2598845#profileId-759470411",
      autor: "Artemix",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 268,
    nombre: "Llavero Honda",
    categoria: "Llaveros de Motor",
    descripcionCorta: "Logo de Honda.",
    descripcionDetallada: "Llavero con el logo de Honda.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US1d9ae3edfe55a0/design/2023-09-22_6cf80cb000af28.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 9,
      horas: 0.4,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "honda",
      "moto",
      "autos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/15644#profileId-18885302",
      autor: "Metalhead Printing & Collectibles",
      licencia: "CC BY-ND",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito; no permite modificar el diseño. Usa una marca o personaje de terceros: Honda (marca registrada)."
    },
    activo: true
  },
  {
    id: 269,
    nombre: "Llavero bloque de motor V8",
    categoria: "Llaveros de Motor",
    descripcionCorta: "Bloque de motor V8 en miniatura.",
    descripcionDetallada: "Llavero con forma de bloque de motor V8.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb128a97356363b/design/2024-10-03_b38e76094694f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb128a97356363b/design/2024-10-03_48b92f6b99e18.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb128a97356363b/design/2024-10-03_59829b869caec.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb128a97356363b/design/2024-10-03_f634706830738.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb128a97356363b/133034656/instance/2024-10-03_a361e60ff0738.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 6,
      horas: 0.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "motor",
      "v8",
      "autos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/679466#profileId-133034656",
      autor: "Stenly_G",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 270,
    nombre: "Llavero motor articulado",
    categoria: "Llaveros de Motor",
    descripcionCorta: "Motor con piezas articuladas.",
    descripcionDetallada: "Llavero de motor con piezas articuladas que se mueven.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US3c2040f83220b1/design/2024-10-09_89a62f66ed678.png",
      "https://makerworld.bblmw.com/makerworld/model/US3c2040f83220b1/design/2024-10-01_26d04d68d3eca.png",
      "https://makerworld.bblmw.com/makerworld/model/US3c2040f83220b1/design/2024-10-01_062e7d4ee1533.png",
      "https://makerworld.bblmw.com/makerworld/model/US3c2040f83220b1/design/2024-10-01_e57538a8566f5.png",
      "https://makerworld.bblmw.com/makerworld/model/US3c2040f83220b1/design/2024-10-01_76dffcadb32cb.png"
    ],
    precioBase: 85,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 32,
      horas: 2.2,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "motor",
      "articulado",
      "autos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/673705#profileId-135438128",
      autor: "TianFu",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 147,
    nombre: "Dragón flexible",
    categoria: "Figuras Flexibles",
    descripcionCorta: "Dragón articulado de una sola pieza.",
    descripcionDetallada: "Dragón completamente articulado que se imprime en una sola pieza, sin soportes, y se mueve con suavidad. Disponible en PLA seda dorado, plateado o multicolor.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US790acbbbf459a2/design/2026-01-10_0f089b46ba93f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US790acbbbf459a2/design/2026-01-06_edf82b15889708.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US790acbbbf459a2/design/2026-01-06_eee5ce1935833.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US790acbbbf459a2/design/2026-01-06_6a4aa5d38f2bf.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US790acbbbf459a2/design/2026-01-06_89d99d353c3b5.jpeg"
    ],
    precioBase: 115,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 44,
      horas: 3.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "dragon",
      "flexi",
      "articulado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2207601#profileId-552495766",
      autor: "D3Craft",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 148,
    nombre: "Dragón articulado de cristal",
    categoria: "Figuras Flexibles",
    descripcionCorta: "Dragón con espinas facetadas como cristales.",
    descripcionDetallada: "Dragón articulado formado por segmentos facetados que parecen cristales o placas de armadura. Muy vistoso a dos colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USd7d5e9bdad05d2/design/2025-12-21_7b09a079454c98.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd7d5e9bdad05d2/design/2025-12-21_3cbf671d814c68.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd7d5e9bdad05d2/design/2025-12-21_75e1c05a4fac38.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd7d5e9bdad05d2/design/2025-12-21_a24a3df5a071e8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd7d5e9bdad05d2/design/2025-12-21_57cc0d691b4d58.jpg"
    ],
    precioBase: 245,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 82,
      horas: 7.5,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "dragon",
      "flexi",
      "cristal",
      "articulado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2142966#profileId-531552686",
      autor: "BT3D printing",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 149,
    nombre: "Ajolote articulado",
    categoria: "Figuras Flexibles",
    descripcionCorta: "Ajolote feliz y flexible a 4 colores.",
    descripcionDetallada: "Ajolote mexicano articulado y flexible, impreso a 4 colores. Tierno, resistente y uno de los favoritos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US384e3a4885d001/design/2025-01-19_c3df0952eea348.png",
      "https://makerworld.bblmw.com/makerworld/model/US384e3a4885d001/design/2025-01-19_e356f3aafd687.png",
      "https://makerworld.bblmw.com/makerworld/model/US384e3a4885d001/design/2025-01-19_321db97101f9c8.png",
      "https://makerworld.bblmw.com/makerworld/model/US384e3a4885d001/design/2025-01-19_db1a7ab5dcce38.png",
      "https://makerworld.bblmw.com/makerworld/model/US384e3a4885d001/design/2025-01-19_dfff0a4cf9af.png"
    ],
    precioBase: 270,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 107,
      horas: 7.3,
      colores: 4,
      multicolor: true
    },
    etiquetas: [
      "ajolote",
      "axolotl",
      "flexi",
      "mexico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1010835#profileId-218088535",
      autor: "shellbunny",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 150,
    nombre: "Serpiente flexible tierna",
    categoria: "Figuras Flexibles",
    descripcionCorta: "Serpentita articulada en 3 tamaños.",
    descripcionDetallada: "Serpiente articulada muy tierna, en tamaño mini, normal o extralargo. Ideal para jugar o como recuerdo.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US361deadef200/design/2025-11-13_32e322732f9b5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US361deadef200/design/2025-11-13_f4931c7a696aa.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US361deadef200/design/2025-11-15_03dd3070baf9b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US361deadef200/design/2025-11-13_4e8fc36ca6c3f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US361deadef200/design/2025-10-26_4c26fb5f66b958.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 3,
      horas: 0.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "serpiente",
      "flexi",
      "tierno"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1925739#profileId-452982730",
      autor: "Amanda Roos",
      licencia: "CC0",
      permiteVenta: true,
      notaLicencia: "Dominio público: uso comercial libre."
    },
    activo: true
  },
  {
    id: 151,
    nombre: "Serpiente articulada con púas",
    categoria: "Figuras Flexibles",
    descripcionCorta: "Serpiente de 47 segmentos con púas.",
    descripcionDetallada: "Serpiente articulada de 47 segmentos con púas afiladas, perfecta para decoración o para jugar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US1d1ec081deed05/design/2025-07-04_8b023bf898bbe8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1d1ec081deed05/design/2025-07-04_e8ea7c8e1502a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1d1ec081deed05/design/2025-07-04_97235da99b42c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1d1ec081deed05/design/2025-07-04_929fd5dcd82458.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1d1ec081deed05/design/2025-07-04_558c99bdda0f88.jpg"
    ],
    precioBase: 100,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 34,
      horas: 3.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "serpiente",
      "flexi",
      "articulado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1575462#profileId-347921844",
      autor: "D3Craft",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 152,
    nombre: "Gato samurái",
    categoria: "Figuras Flexibles",
    descripcionCorta: "Gato guerrero con katana.",
    descripcionDetallada: "Escultura de un gato samurái con su katana, inspirada en los guerreros de Japón. Ideal para escritorio o repisa.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US5d283290f42ab2/design/2025-02-12_d86409ef9596d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5d283290f42ab2/design/2025-02-20_5aebaa052bf43.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5d283290f42ab2/225960396/instance/2025-02-12_07f2828d86174.jpg"
    ],
    precioBase: 160,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 90,
      horas: 3.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "gato",
      "samurai",
      "katana",
      "catana"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1100638#profileId-225960396",
      autor: "Catmania3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 153,
    nombre: "Zorro flexible de cola esponjosa",
    categoria: "Figuras Flexibles",
    descripcionCorta: "Zorrito articulado de 12 cm a 3 colores.",
    descripcionDetallada: "Zorro flexible con cola esponjosa y articulaciones reforzadas. Mide 12 cm. Funciona como juguete o llavero grande.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe107654effcfb6/design/0dbd6a5ab9a195ff.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe107654effcfb6/design/0b9fca46fc5bc60b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe107654effcfb6/design/afd5153cee576c61.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe107654effcfb6/design/c762814a380f9bb9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe107654effcfb6/design/539728cb9220ab43.jpg"
    ],
    precioBase: 220,
    escalaDescuento: null,
    tamano: "12 cm",
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "zorro",
      "flexi",
      "tierno"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2426989#profileId-625934333",
      autor: "Fluffy Tails",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 154,
    nombre: "Mini tiburón martillo articulado",
    categoria: "Figuras Flexibles",
    descripcionCorta: "Tiburón martillo flexible a 3 colores.",
    descripcionDetallada: "Mini tiburón martillo articulado, impreso a 3 colores. Pequeño, resistente y muy divertido.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USab8d030868b6d1/design/2025-07-11_9894573685cff.png",
      "https://makerworld.bblmw.com/makerworld/model/USab8d030868b6d1/design/2025-07-11_6b9aa1aebeb308.png",
      "https://makerworld.bblmw.com/makerworld/model/USab8d030868b6d1/design/2025-07-11_f6a9f82a339de8.png",
      "https://makerworld.bblmw.com/makerworld/model/USab8d030868b6d1/design/2025-07-11_e2f592def6dfe8.png",
      "https://makerworld.bblmw.com/makerworld/model/USab8d030868b6d1/design/2025-07-11_dee198f1cfc61.png"
    ],
    precioBase: 55,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 21,
      horas: 1.4,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "tiburon",
      "martillo",
      "flexi"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1596667#profileId-349521341",
      autor: "Saber3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 155,
    nombre: "T-Rex flexible",
    categoria: "Figuras Flexibles",
    descripcionCorta: "Tiranosaurio articulado sin soportes.",
    descripcionDetallada: "Tiranosaurio Rex con partes completamente móviles, impreso sin soportes. Una pieza grande y llamativa.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US7066705a15cce/design/2024-09-04_64e493c5e003d.png",
      "https://makerworld.bblmw.com/makerworld/model/US7066705a15cce/design/2024-09-04_990ed4165bd358.png",
      "https://makerworld.bblmw.com/makerworld/model/US7066705a15cce/design/2024-09-04_adcc1c3b4d69f8.png",
      "https://makerworld.bblmw.com/makerworld/model/US7066705a15cce/design/2024-09-04_8cb8b4feabf4d.png"
    ],
    precioBase: 320,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 183,
      horas: 6.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "dinosaurio",
      "trex",
      "flexi"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/622438#profileId-119568547",
      autor: "Remb Studios",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 156,
    nombre: "Esqueleto flexible",
    categoria: "Figuras Flexibles",
    descripcionCorta: "Esqueleto humano articulado.",
    descripcionDetallada: "Esqueleto articulado de alta densidad. Ideal para Halloween, Día de Muertos o como pieza de escritorio.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USd7eea946c08474/design/2024-10-09_ab6e38caee56d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd7eea946c08474/design/2024-10-09_c9c02e7b58c53.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd7eea946c08474/design/2024-10-09_d60ef481993f4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd7eea946c08474/design/2024-10-09_5a337c8bfb534.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd7eea946c08474/design/2024-10-09_07c29717feb22.jpg"
    ],
    precioBase: 135,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 64,
      horas: 3.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "esqueleto",
      "halloween",
      "flexi",
      "calavera"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/692453#profileId-136045651",
      autor: "uni3Dworld",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 157,
    nombre: "Araña flexible",
    categoria: "Figuras Flexibles",
    descripcionCorta: "Araña articulada a 3 colores.",
    descripcionDetallada: "Araña con patas articuladas, impresa a 3 colores. Perfecta para Halloween o para asustar a alguien.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USec4f0354989019/design/2024-09-09_7bbe13541c585.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USec4f0354989019/design/2024-09-09_78a393e3af9238.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USec4f0354989019/design/2024-09-09_f59b459d48b4a8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USec4f0354989019/design/2024-09-09_ef0fd38918cfd.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USec4f0354989019/design/2024-09-09_aaf3a774dc47a8.jpg"
    ],
    precioBase: 195,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 71,
      horas: 5.5,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "arana",
      "halloween",
      "flexi"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/631666#profileId-127623170",
      autor: "3DPrintyi",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 158,
    nombre: "Murciélago esqueleto articulado",
    categoria: "Figuras Flexibles",
    descripcionCorta: "Murciélago con alas móviles.",
    descripcionDetallada: "Murciélago esquelético con articulaciones totalmente móviles para hacer poses. Rápido de imprimir.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USab3c9887e2ea5a/design/2025-10-14_931947ea37652.png",
      "https://makerworld.bblmw.com/makerworld/model/USab3c9887e2ea5a/design/2025-10-14_cbbd80580f0ef8.png",
      "https://makerworld.bblmw.com/makerworld/model/USab3c9887e2ea5a/439555936/instance/2025-10-14_af907be0701f6.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 9,
      horas: 0.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "murcielago",
      "halloween",
      "flexi"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1885511#profileId-439555936",
      autor: "PinkyWings",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 159,
    nombre: "Pulpo flexible",
    categoria: "Figuras Flexibles",
    descripcionCorta: "Pulpito gracioso a 3 colores.",
    descripcionDetallada: "Pulpo flexible y gracioso, impreso a 3 colores sin soportes. Uno de los flexis más populares.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USea5cf9cb2d0057/design/2025-01-23_9d59945f3212d8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USea5cf9cb2d0057/design/2025-01-23_0c9217351bf958.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USea5cf9cb2d0057/design/2025-01-23_343f593b1d5218.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USea5cf9cb2d0057/design/2025-01-23_cb6ff604fa2cb.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USea5cf9cb2d0057/design/2025-01-23_e095220ee0cce.jpeg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 13,
      horas: 1,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "pulpo",
      "flexi",
      "tierno"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1029890#profileId-209696552",
      autor: "ilya91",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 160,
    nombre: "Gato flexible de cola esponjosa",
    categoria: "Figuras Flexibles",
    descripcionCorta: "Gatito articulado a 3 colores.",
    descripcionDetallada: "Gato flexible con cola esponjosa, articulaciones reforzadas y 3 colores. Funciona como juguete o llavero.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6b941ba8302236/design/2c7d72fa7a1a4499.png",
      "https://makerworld.bblmw.com/makerworld/model/US6b941ba8302236/design/9eaae26f28a39512.png",
      "https://makerworld.bblmw.com/makerworld/model/US6b941ba8302236/design/3c42da7b30c45323.png",
      "https://makerworld.bblmw.com/makerworld/model/US6b941ba8302236/design/07b4a17a8082cf2f.png",
      "https://makerworld.bblmw.com/makerworld/model/US6b941ba8302236/design/6e7a788c5b8d1fe3.png"
    ],
    precioBase: 155,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 56,
      horas: 4.4,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "gato",
      "flexi",
      "tierno"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2459711#profileId-637608443",
      autor: "Fluffy Tails",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 312,
    nombre: "Ajolote articulado llavero",
    categoria: "Figuras Flexibles",
    descripcionCorta: "Ajolote flexible que también es llavero.",
    descripcionDetallada: "Ajolote articulado y flexible que funciona como juguete o llavero.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US522f6b115fabfa/design/2025-07-08_fcd5850f3067a8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US522f6b115fabfa/design/2025-07-08_2e1588d7923738.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US522f6b115fabfa/design/2025-07-08_6e0b90f7a805e8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US522f6b115fabfa/design/2025-07-08_2bd72159addfd8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US522f6b115fabfa/346799385/instance/2025-07-08_6e025c77c236e.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 7,
      horas: 0.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "ajolote",
      "flexi",
      "llavero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1587316#profileId-346799385",
      autor: "🔵 MontoyaMaker",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 198,
    nombre: "Lámpara de luna",
    categoria: "Lámparas",
    descripcionCorta: "Luna con cráteres para base LED.",
    descripcionDetallada: "Lámpara lunar de alta resolución con relieve de cráteres. Se ilumina con una base LED.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa08af97997d49e/design/2024-10-27_3d0bd66d97f638.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa08af97997d49e/design/2025-03-19_2cb77f1cf77158.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa08af97997d49e/design/2024-10-25_c8d161393d223.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa08af97997d49e/design/2024-10-25_3723a4e004eda8.jpg"
    ],
    precioBase: 250,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 83,
      horas: 8.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "luna",
      "led",
      "decoracion"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/731351#profileId-144295658",
      autor: "LeHa Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 211,
    nombre: "Lámpara de escritorio CubeStack",
    categoria: "Lámparas",
    descripcionCorta: "Lámpara de cubos apilados, sin pegamento.",
    descripcionDetallada: "Lámpara de escritorio formada por cubos apilados que se arma sin pegamento ni tornillos. Diseño moderno y elegante. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6c3bed6239fb56/design/2025-01-31_b98e7be190c99.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6c3bed6239fb56/design/2025-01-31_ec47fdbe68644.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6c3bed6239fb56/design/2025-02-06_8ad8ec3be532a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6c3bed6239fb56/414635568/instance/2025-01-31_abb56f4ce6919.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6c3bed6239fb56/414635568/instance/2025-01-31_aed816d3c9644.jpg"
    ],
    precioBase: 410,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "escritorio",
      "moderno"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1057953#profileId-414635568",
      autor: "F3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 212,
    nombre: "Lámpara de luna con soporte ondulado",
    categoria: "Lámparas",
    descripcionCorta: "Luna de textura suave sobre base ondulada.",
    descripcionDetallada: "Lámpara lunar con acabado difuso y soporte ondulado. Luz cálida y relajante para recámara o sala. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US8b980ddcda6155/design/2025-03-30_957eccff6eb18.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8b980ddcda6155/design/2025-03-30_f1d0b420503cf.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8b980ddcda6155/design/2025-03-30_44413e3284265.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8b980ddcda6155/design/2025-03-30_efc2fa32216be.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8b980ddcda6155/design/2025-03-30_c10b3e4432e6b.jpg"
    ],
    precioBase: 550,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "luna",
      "noche"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1266343#profileId-263784554",
      autor: "ThisIs3DPrinted",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 213,
    nombre: "Lámpara hongo acanalada",
    categoria: "Lámparas",
    descripcionCorta: "Hongo acanalado con luz cálida.",
    descripcionDetallada: "Lámpara con forma de hongo y textura acanalada que da un brillo acogedor a cualquier rincón. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9e4385c074ce28/design/2025-12-19_eb61f06d88607.png",
      "https://makerworld.bblmw.com/makerworld/model/US9e4385c074ce28/design/2025-12-19_8d80da57815a28.png",
      "https://makerworld.bblmw.com/makerworld/model/US9e4385c074ce28/design/2025-12-22_2e2effc66fc35.png",
      "https://makerworld.bblmw.com/makerworld/model/US9e4385c074ce28/design/2025-12-19_3b57acd6bee418.png",
      "https://makerworld.bblmw.com/makerworld/model/US9e4385c074ce28/design/2025-12-19_2dfd20d0cae9e8.png"
    ],
    precioBase: 370,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 215,
      horas: 7.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "hongo",
      "mushroom"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2134432#profileId-546349742",
      autor: "Cipriani 3Design Studio",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 214,
    nombre: "Lámpara litofanía de Santa Claus",
    categoria: "Lámparas",
    descripcionCorta: "Santa Claus se ilumina al encender la luz.",
    descripcionDetallada: "Lámpara de litofanía navideña con Santa Claus: la imagen aparece al encender la luz. También sirve como portalápices. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US887ebdf446ecc9/design/2024-11-17_5815ea85d08ad.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US887ebdf446ecc9/design/2024-11-17_833fa8185f99c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US887ebdf446ecc9/design/2024-11-17_029459b37ced3.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US887ebdf446ecc9/design/2024-11-17_50201fa3175db.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US887ebdf446ecc9/design/2024-11-17_7a1089388f3e.jpg"
    ],
    precioBase: 400,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 154,
      horas: 12.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "navidad",
      "lampara",
      "litofania",
      "santa"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/798439#profileId-158087668",
      autor: "msprint",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 215,
    nombre: "Set de 4 lámparas para velas de té",
    categoria: "Lámparas",
    descripcionCorta: "Cuatro mini lámparas para velas LED.",
    descripcionDetallada: "Juego de 4 mini lámparas de mesa para velas de té LED. Diseño moderno y cálido para mesa o repisa.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6220d2002d7281/design/2025-10-09_3516def4d7d6d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6220d2002d7281/design/2025-10-09_0c5f7c15d598d8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6220d2002d7281/design/2025-10-09_546963246c9388.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6220d2002d7281/design/2025-10-09_95997c17e0cbf.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6220d2002d7281/design/2025-10-09_140b3ea405cad8.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 13,
      horas: 0.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "vela",
      "set"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1871775#profileId-435178142",
      autor: "3D Fun Factory",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 216,
    nombre: "Linterna calabaza estilo bloques",
    categoria: "Lámparas",
    descripcionCorta: "Calabaza de bloques para vela LED.",
    descripcionDetallada: "Portavelas con forma de calabaza hecha de bloques de construcción; convierte una velita LED en una linterna de Halloween.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US5534f73bc87b45/design/2025-09-30_40ad4fa495da6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5534f73bc87b45/design/2025-10-04_58e181dc88966.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5534f73bc87b45/design/2444c691873f9bf1.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5534f73bc87b45/design/a96b616e852728b8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5534f73bc87b45/design/2025-10-07_e2064bfec4958.jpg"
    ],
    precioBase: 215,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 107,
      horas: 5.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "halloween",
      "calabaza",
      "vela",
      "bloques"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1843590#profileId-430673737",
      autor: "piodeer",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: LEGO (marca registrada)."
    },
    activo: true
  },
  {
    id: 217,
    nombre: "Portavelas acanalado moderno",
    categoria: "Lámparas",
    descripcionCorta: "Portavelas para velas de té de hasta 4 cm.",
    descripcionDetallada: "Portavelas acanalado de diseño moderno para velas de té estándar (de hasta 40 mm).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf15a2eaa175491/design/2024-10-16_619803da620d2.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USf15a2eaa175491/design/2024-10-16_6a82988395a208.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf15a2eaa175491/design/2024-10-16_6423875be1f038.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf15a2eaa175491/design/2024-10-16_bb84a374d02c08.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf15a2eaa175491/design/2024-10-16_62429223c3673.jpg"
    ],
    precioBase: 95,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 53,
      horas: 1.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "vela",
      "portavelas",
      "moderno"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/707807#profileId-140534559",
      autor: "Deltaprints",
      licencia: "CC BY-NC-ND",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 218,
    nombre: "Lámpara espiral rayada",
    categoria: "Lámparas",
    descripcionCorta: "Pantalla en espiral con rayas.",
    descripcionDetallada: "Lámpara con pantalla en espiral rayada; también disponible en versión colgante. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US3ed2469a80e7ce/design/2026-01-07_4f7e3c88a0be98.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3ed2469a80e7ce/design/2026-01-07_6d1392bf41aa5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3ed2469a80e7ce/design/2026-01-07_e08c90fb9a59d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3ed2469a80e7ce/design/2025-02-01_2b6855d23557c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3ed2469a80e7ce/design/2025-02-01_760ecb2749239.jpg"
    ],
    precioBase: 180,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 97,
      horas: 4.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "espiral",
      "moderno"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1018987#profileId-779962095",
      autor: "SoDR",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 219,
    nombre: "Lámpara prisma futurista Lumea",
    categoria: "Lámparas",
    descripcionCorta: "Lámpara de mesa minimalista con efecto prisma.",
    descripcionDetallada: "Lámpara de mesa minimalista y futurista con efecto prisma. Un brillo moderno en una forma atemporal. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US17fd49eace981d/design/2025-08-15_1ae3ae9604637.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US17fd49eace981d/design/2025-08-15_e1f59748f6e978.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US17fd49eace981d/design/2025-08-15_8f57e8e8835908.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US17fd49eace981d/design/2025-08-15_c5589957f5a308.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US17fd49eace981d/design/2025-08-15_2ac9d8c18d189.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA + PETG",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "futurista",
      "prisma"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1702818#profileId-383654437",
      autor: "Mike.stl",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 220,
    nombre: "Lámpara lunar minimalista 14 cm",
    categoria: "Lámparas",
    descripcionCorta: "Luna sencilla de 14 cm.",
    descripcionDetallada: "Lámpara lunar sencilla y práctica de 14 cm. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa1669c7dff5c21/design/6ae1ec3b-8853-41af-8e97-d2eba255c1d0.webp",
      "https://makerworld.bblmw.com/makerworld/model/USa1669c7dff5c21/design/6e07d832-a766-4d49-8b76-6a9b9d3ed114.webp",
      "https://makerworld.bblmw.com/makerworld/model/USa1669c7dff5c21/design/7a8589b8-06e2-4aa2-9e3a-831b8f1984dd.webp"
    ],
    precioBase: 270,
    escalaDescuento: null,
    tamano: "14 cm",
    impresion: {
      material: "PLA",
      gramos: 113,
      horas: 7.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "luna",
      "minimalista"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/740719#profileId-767436509",
      autor: "user_3412395519",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 221,
    nombre: "Mini lámpara de noche tipi",
    categoria: "Lámparas",
    descripcionCorta: "Tipi con luz para cuarto de niños.",
    descripcionDetallada: "Mini lámpara de noche con forma de tipi, ideal para el cuarto de los niños. Versión con cable o inalámbrica. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US8c0b3912f142fa/design/2025-01-20_91d47aa798a92.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8c0b3912f142fa/design/2025-01-14_d9f6abb0f9aac.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8c0b3912f142fa/design/2025-01-14_056df4718d456.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8c0b3912f142fa/design/2025-01-14_6e1b4c4b8a12e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8c0b3912f142fa/design/2025-01-14_67e31c96d7846.jpg"
    ],
    precioBase: 500,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 230,
      horas: 11.6,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "lampara",
      "noche",
      "infantil",
      "tipi"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/991201#profileId-953982493",
      autor: "jindouyun",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 222,
    nombre: "Esfera geodésica de luz ambiental",
    categoria: "Lámparas",
    descripcionCorta: "Esfera con patrón de ciudad futurista.",
    descripcionDetallada: "Luz ambiental en forma de esfera geodésica con patrón de ciudad futurista; proyecta sombras increíbles. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US92da167e8a306f/design/2025-03-10_1676ad8ea705f8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US92da167e8a306f/design/2025-03-10_60a682e57cf2c8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US92da167e8a306f/design/2025-03-10_115d57bbbbd7a.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US92da167e8a306f/design/2025-03-10_b9f3f313d14b38.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US92da167e8a306f/design/2025-03-10_28c35066d52548.jpeg"
    ],
    precioBase: 430,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 167,
      horas: 13,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "geodesica",
      "ambiente"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1194118#profileId-246927261",
      autor: "Miquel204151",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 223,
    nombre: "Lámpara de mesa compacta 13 cm",
    categoria: "Lámparas",
    descripcionCorta: "Lámpara minimalista de lujo en tamaño compacto.",
    descripcionDetallada: "Lámpara de mesa compacta de 13 cm con diseño de lujo minimalista. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US2b6aa63b0343d9/design/2025-12-30_4d24e581d0aed8.png",
      "https://makerworld.bblmw.com/makerworld/model/US2b6aa63b0343d9/design/2025-12-30_2f7246989995f8.png",
      "https://makerworld.bblmw.com/makerworld/model/US2b6aa63b0343d9/design/2025-12-30_a108fdb07882f.png",
      "https://makerworld.bblmw.com/makerworld/model/US2b6aa63b0343d9/design/2025-12-30_2522153820ddd8.png",
      "https://makerworld.bblmw.com/makerworld/model/US2b6aa63b0343d9/design/2025-12-30_74ac781c9be008.jpg"
    ],
    precioBase: 60,
    escalaDescuento: null,
    tamano: "13 cm",
    impresion: {
      material: "PLA",
      gramos: 34,
      horas: 1.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "minimalista",
      "mesa"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2175648#profileId-546436582",
      autor: "Cipriani 3Design Studio",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 224,
    nombre: "Lámpara dragón aliento de fuego",
    categoria: "Lámparas",
    descripcionCorta: "Dragón que escupe una llama luminosa.",
    descripcionDetallada: "Lámpara de dragón que escupe una llama iluminada, inspirada en la fantasía épica. Pieza central muy llamativa. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc1b7b9a8b80326/design/3f4c5fc7b054325b.png",
      "https://makerworld.bblmw.com/makerworld/model/USc1b7b9a8b80326/design/535a26a885c0200f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc1b7b9a8b80326/design/fde6633d1183e97f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc1b7b9a8b80326/design/2c581c2844f9882e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc1b7b9a8b80326/design/37f5c5a0b1e4a816.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "dragon",
      "fantasia"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/3104269#profileId-1066663302",
      autor: "everythingDND",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Juego de Tronos (HBO)."
    },
    activo: true
  },
  {
    id: 226,
    nombre: "Lámpara hongo clásica",
    categoria: "Lámparas",
    descripcionCorta: "Hongo de mesa con interruptor integrado.",
    descripcionDetallada: "Lámpara de mesa con forma de hongo con espacio para el interruptor de la luz. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US7cb34e6f71ec70/design/2024-03-16_9d373ed3e7e89.png",
      "https://makerworld.bblmw.com/makerworld/model/US7cb34e6f71ec70/design/2024-03-16_5961cfd17d618.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7cb34e6f71ec70/design/2024-03-16_3b10c8a651ad1.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7cb34e6f71ec70/59354643/instance/2024-03-16_d29ba0fac9ad4.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "hongo",
      "mesa"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/375763#profileId-60745009",
      autor: "Mdesign",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 227,
    nombre: "Caja de luz con nombre",
    categoria: "Lámparas",
    descripcionCorta: "Letrero luminoso con el nombre que quieras.",
    descripcionDetallada: "Caja de luz LED personalizada con el nombre o palabra que elijas. Ideal para cuartos, negocios o regalos. Escribe el texto en las notas. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb35827ab4ae0de/design/20ffc9b58db278de.jpg"
    ],
    precioBase: 170,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 98,
      horas: 2.7,
      colores: 4,
      multicolor: true
    },
    etiquetas: [
      "lampara",
      "nombre",
      "personalizado",
      "letrero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/3241913#profileId-968489643",
      autor: "MakerSky",
      licencia: "MakerWorld Exclusive License",
      permiteVenta: false,
      notaLicencia: "Prohíbe el uso comercial."
    },
    activo: true
  },
  {
    id: 228,
    nombre: "Linterna Sombrero Seleccionador",
    categoria: "Lámparas",
    descripcionCorta: "El Sombrero Seleccionador convertido en lámpara.",
    descripcionDetallada: "Linterna con forma del Sombrero Seleccionador de Harry Potter, con espacio para luz LED por USB. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US42915d56aa60ab/design/2025-08-11_e110eacb1496c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US42915d56aa60ab/design/2025-08-11_1f1f7aa80c5f88.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US42915d56aa60ab/design/2025-08-11_29a69b8e6c9008.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US42915d56aa60ab/design/2025-08-11_79418b3ce0d17.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US42915d56aa60ab/design/2025-08-11_44868f78caacb.jpeg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "harry potter",
      "lampara",
      "hogwarts"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1692155#profileId-381446613",
      autor: "Sally Ruby",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Harry Potter (Warner Bros.)."
    },
    activo: true
  },
  {
    id: 229,
    nombre: "Lámpara calabaza moderna",
    categoria: "Lámparas",
    descripcionCorta: "Calabaza de diseño moderno para vela LED.",
    descripcionDetallada: "Lámpara de calabaza con brillo cálido y festivo, perfecta para otoño y Halloween.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US1d278fa02eb79e/design/2025-09-13_9cc93c9f9d2f98.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1d278fa02eb79e/design/2025-09-13_b5b1401d9e311.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1d278fa02eb79e/design/2025-09-13_511f6094ef3cc8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1d278fa02eb79e/design/2025-09-13_00c53e1c1fabe.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1d278fa02eb79e/design/2025-09-13_e29e9a09d871d8.jpg"
    ],
    precioBase: 165,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 65,
      horas: 4.5,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "halloween",
      "calabaza",
      "lampara",
      "otono"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1790758#profileId-409660124",
      autor: "Maxx Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 230,
    nombre: "Lámpara LED acanalada moderna",
    categoria: "Lámparas",
    descripcionCorta: "Lámpara de mesa con paredes acanaladas.",
    descripcionDetallada: "Lámpara moderna con paredes acanaladas que suavizan la luz. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US539cd3254c8684/design/2025-04-08_adadd63f5908d8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US539cd3254c8684/design/2025-04-08_4448ca27383b78.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US539cd3254c8684/design/2025-04-08_4390431f34b2e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US539cd3254c8684/design/2025-04-08_a8e33e76b6bd68.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US539cd3254c8684/design/2025-04-08_44d4a8783f80e8.jpg"
    ],
    precioBase: 395,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "moderno",
      "acanalado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1299361#profileId-271418047",
      autor: "Andy’s Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 472,
    nombre: "Pantalla para lámpara LED",
    categoria: "Lámparas",
    descripcionCorta: "Pantalla de diseño para base LED.",
    descripcionDetallada: "Pantalla decorativa a dos colores para base de lámpara LED. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe367851202d864/design/2025-11-01_5fcb8f9c71e14.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USe367851202d864/design/2025-11-01_47ec283bf75af.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USe367851202d864/design/2025-11-01_7da9300b559bb.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USe367851202d864/460067388/instance/2025-11-01_d932bccbae97d8.jpeg"
    ],
    precioBase: 195,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 105,
      horas: 3.6,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "pantalla"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1946618#profileId-460067388",
      autor: "Makustom",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 473,
    nombre: "Lámpara colgante de ondas orgánicas",
    categoria: "Lámparas",
    descripcionCorta: "Formas suaves y orgánicas.",
    descripcionDetallada: "Lámpara colgante con ondas orgánicas que suavizan la luz. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USaee9811c43897d/design/2026-01-02_40b40aa1b3864.png",
      "https://makerworld.bblmw.com/makerworld/model/USaee9811c43897d/design/2026-01-02_4818738de36be8.jfif",
      "https://makerworld.bblmw.com/makerworld/model/USaee9811c43897d/design/2026-01-02_132f207fc5383.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USaee9811c43897d/design/2026-01-02_64bfc1e95dbbc.png",
      "https://makerworld.bblmw.com/makerworld/model/USaee9811c43897d/design/2026-01-02_81c0beebe01b28.png"
    ],
    precioBase: 160,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 95,
      horas: 3.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "colgante",
      "ondas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2188163#profileId-551850188",
      autor: "JANBERRY DESIGN",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 474,
    nombre: "Lámpara oveja de buenas noches",
    categoria: "Lámparas",
    descripcionCorta: "Ovejita luminosa para niños.",
    descripcionDetallada: "Lámpara con forma de oveja que acompaña a los niños por la noche. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US88e5c0b9939489/design/2025-11-21_4a1c1d5fa0ed28.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US88e5c0b9939489/design/2025-11-21_53ee798f7b7398.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US88e5c0b9939489/design/2025-11-21_94b45ea65d8418.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US88e5c0b9939489/design/2025-11-21_01e3cb28e9982.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US88e5c0b9939489/design/2025-11-21_b36f60e6354998.jpg"
    ],
    precioBase: 280,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 156,
      horas: 6.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "oveja",
      "infantil",
      "noche"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2025005#profileId-485836707",
      autor: "Frabet",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 475,
    nombre: "Vela flotante goteante",
    categoria: "Lámparas",
    descripcionCorta: "Portavelas que parece vela derritiéndose.",
    descripcionDetallada: "Portavelas LED con forma de vela que gotea, ideal para Halloween o decoración gótica. Para velas de té LED.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US59374ecbd391f9/design/2025-09-30_5e526da0ee93d8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US59374ecbd391f9/design/2025-09-30_ae98548693c768.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US59374ecbd391f9/design/2025-09-30_3ee47b9c5c75e8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US59374ecbd391f9/design/2025-09-30_7484fbc9f139c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US59374ecbd391f9/design/2025-09-30_5a40c22040ceb.jpg"
    ],
    precioBase: 65,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 33,
      horas: 1.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "vela",
      "halloween",
      "portavelas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1842354#profileId-432570031",
      autor: "pozsar",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 476,
    nombre: "Lámpara flor de loto",
    categoria: "Lámparas",
    descripcionCorta: "Loto que se ilumina con vela de té.",
    descripcionDetallada: "Lámpara de flor de loto para velas de té de menos de 37 mm.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa1f596c846e583/design/2025-03-31_a4baa4b1316a48.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USa1f596c846e583/design/2025-03-31_3797e0598355e8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USa1f596c846e583/design/2025-03-31_aba7227f0dd6c.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USa1f596c846e583/design/2025-03-31_5ffcc8d7b69708.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USa1f596c846e583/267878823/instance/2025-03-31_f2ce4e98114b4.jpeg"
    ],
    precioBase: 90,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 36,
      horas: 2.3,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "loto",
      "vela",
      "zen"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1271835#profileId-267878823",
      autor: "J. Theodorius Smittleton III",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 477,
    nombre: "Soporte para litofanía con vela",
    categoria: "Lámparas",
    descripcionCorta: "Base sencilla para litofanías.",
    descripcionDetallada: "Soporte económico para iluminar una litofanía con vela de té LED.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US8454c40eb7e366/design/2025-01-20_87b6827a6263c.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US8454c40eb7e366/design/2025-01-20_86b95be423768.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US8454c40eb7e366/design/2025-01-20_59daeb005e18f.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US8454c40eb7e366/design/2025-01-20_35bf2322e99d9.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US8454c40eb7e366/design/2025-01-20_912d5f0dc1274.jpeg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 6,
      horas: 0.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "litofania",
      "vela"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1019226#profileId-241980126",
      autor: "TheWolf",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 478,
    nombre: "Mini farol japonés",
    categoria: "Lámparas",
    descripcionCorta: "Pagoda para vela de té.",
    descripcionDetallada: "Mini linterna de estilo pagoda japonesa para velas de té.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa2397bf7a223fe/design/2025-03-06_dd99d9fdd2d8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa2397bf7a223fe/design/2025-05-06_1af533668c71a8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa2397bf7a223fe/design/2025-03-06_b5a3e0e357c7c8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa2397bf7a223fe/design/2025-03-06_1467bf71894c48.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa2397bf7a223fe/design/2025-03-06_2671702a174a08.jpg"
    ],
    precioBase: 355,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 171,
      horas: 7.8,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "farol",
      "japones",
      "vela"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1180829#profileId-797051795",
      autor: "Maxx Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 479,
    nombre: "Luna llena",
    categoria: "Lámparas",
    descripcionCorta: "Luna para vela o luces de hada.",
    descripcionDetallada: "Lámpara de luna llena para vela LED o luces de hada.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US834b9fb34fcca0/design/2024-11-23_c96f452d9fb9b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US834b9fb34fcca0/design/2024-11-23_32cdecd367aa8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US834b9fb34fcca0/design/2024-11-23_8f40945c79d1d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US834b9fb34fcca0/design/2024-11-23_a72e66d1e202d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US834b9fb34fcca0/design/2024-11-23_0260391678a26.jpg"
    ],
    precioBase: 245,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 103,
      horas: 6.2,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "luna",
      "lampara",
      "vela"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/813839#profileId-161419422",
      autor: "G__W__",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 480,
    nombre: "Lámpara retro tejida",
    categoria: "Lámparas",
    descripcionCorta: "Pantalla con patrón de cesta para foco E27.",
    descripcionDetallada: "Lámpara retro con pantalla tipo cesta para foco E27. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USdf74d10a54db70/design/2025-09-18_8088b4b3135c1.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USdf74d10a54db70/design/2025-09-18_2b617a527a46a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USdf74d10a54db70/design/2025-09-18_32d39c7b8ae16.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USdf74d10a54db70/design/e25b8877b0c76388.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 4,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "retro",
      "e27"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1805517#profileId-456723102",
      autor: "Super_Laserkatz",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 481,
    nombre: "Lámpara rosa romántica",
    categoria: "Lámparas",
    descripcionCorta: "Rosa en flor para vela de té.",
    descripcionDetallada: "Lámpara con forma de rosa en flor para vela de té. Ideal para San Valentín o aniversarios.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USfb09c463df0398/design/a906b92498993994.png",
      "https://makerworld.bblmw.com/makerworld/model/USfb09c463df0398/design/c2ced53552d1cf99.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfb09c463df0398/design/c2e6dbcdc3ed45ae.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfb09c463df0398/design/9f6eeb1abb591970.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfb09c463df0398/design/1cca4c00fa716cc1.jpg"
    ],
    precioBase: 100,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 57,
      horas: 2.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "rosa",
      "vela",
      "amor"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2281973#profileId-577328996",
      autor: "Rayxa",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 482,
    nombre: "Lámpara de corazones San Valentín",
    categoria: "Lámparas",
    descripcionCorta: "Portavela con corazones.",
    descripcionDetallada: "Lámpara para vela de té con motivo de San Valentín.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USfe07f7d02b3dc3/design/2024-12-29_7e4d843ba3e7f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfe07f7d02b3dc3/design/2024-12-29_bbbff6e0f031d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfe07f7d02b3dc3/design/2024-12-29_5f22a8a8e1ba4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfe07f7d02b3dc3/design/2024-12-29_8eb49db409691.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfe07f7d02b3dc3/design/2024-12-29_c69c928775cc9.jpg"
    ],
    precioBase: 90,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 36,
      horas: 2.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "san valentin",
      "vela",
      "amor"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/927176#profileId-189183538",
      autor: "Fresh_Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 483,
    nombre: "Lámpara kumiko japonesa",
    categoria: "Lámparas",
    descripcionCorta: "Celosía japonesa tradicional.",
    descripcionDetallada: "Lámpara grande con patrón kumiko japonés que proyecta sombras increíbles. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc03ed8691c3fbb/design/2024-03-14_ad36ff1feb3e88.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc03ed8691c3fbb/design/2024-03-11_da70ae8320dd1.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc03ed8691c3fbb/design/2024-03-11_79ec6ba0aa8de8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc03ed8691c3fbb/design/2024-03-11_8978e42dfa46a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc03ed8691c3fbb/design/2024-03-11_b204b8349a62d8.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "japones",
      "kumiko"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/246236#profileId-556235807",
      autor: "Foxwood",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 484,
    nombre: "Lámpara sable de luz de bloques",
    categoria: "Lámparas",
    descripcionCorta: "Sable de luz gigante con minifiguras.",
    descripcionDetallada: "Lámpara de sable de luz estilo bloques de construcción a escala 10:1. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US5fa43f12082a7e/design/2024-02-07_e6c86825b29a8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5fa43f12082a7e/design/2024-02-07_365ca397ce215.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5fa43f12082a7e/design/2024-02-07_06ad918322453.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5fa43f12082a7e/design/2024-02-07_e4314008a9934.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5fa43f12082a7e/design/2024-02-07_5afd21057349f.png"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 3,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "sable",
      "star wars"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/175789#profileId-49414373",
      autor: "3D Senju",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Star Wars (Lucasfilm / Disney) y LEGO."
    },
    activo: true
  },
  {
    id: 485,
    nombre: "Lámpara de diseño La Ola",
    categoria: "Lámparas",
    descripcionCorta: "Lámpara escultural en forma de ola.",
    descripcionDetallada: "Lámpara de diseño con forma de ola, pieza protagonista de cualquier espacio. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US5f288e5b0bd1d/design/1d03c8e342fb580c.png",
      "https://makerworld.bblmw.com/makerworld/model/US5f288e5b0bd1d/design/e473490fc19609f5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5f288e5b0bd1d/design/7d743cb4d1a55e60.png",
      "https://makerworld.bblmw.com/makerworld/model/US5f288e5b0bd1d/design/75d9d3a96d7204c0.png",
      "https://makerworld.bblmw.com/makerworld/model/US5f288e5b0bd1d/design/7a1342716e72ace4.png"
    ],
    precioBase: 550,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "diseno",
      "ola"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2571932#profileId-785517836",
      autor: "JANBERRY DESIGN",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 486,
    nombre: "Pantalla para lámpara colgante",
    categoria: "Lámparas",
    descripcionCorta: "Pantalla decorativa para techo.",
    descripcionDetallada: "Pantalla para lámpara colgante de diseño moderno. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf19a8e1ffc5976/design/2024-01-14_862acd173fed8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf19a8e1ffc5976/design/2024-01-14_3f35047e27103.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf19a8e1ffc5976/41711614/instance/2024-01-14_e24b15a90cdbe.png"
    ],
    precioBase: 180,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 118,
      horas: 3.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "colgante",
      "pantalla"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/139891#profileId-41711614",
      autor: "Syphander",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 487,
    nombre: "Lámpara colgante semiesférica",
    categoria: "Lámparas",
    descripcionCorta: "Semiesfera con patrón calado.",
    descripcionDetallada: "Lámpara colgante semiesférica con patrón decorativo, en PETG blanco. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US8ceb883cbefe95/design/2024-10-05_3012793b16ea9.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US8ceb883cbefe95/design/2024-10-05_ae5e003549278.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US8ceb883cbefe95/design/2024-10-05_e4faa41fc78fd.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US8ceb883cbefe95/133866625/instance/2024-10-05_219e0d6ce25e6.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US8ceb883cbefe95/133866625/instance/2024-10-05_681dabd37f22d.jpeg"
    ],
    precioBase: 370,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PETG",
      gramos: 208,
      horas: 6.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "colgante"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/682844#profileId-133866625",
      autor: "labar",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 488,
    nombre: "Lámpara de mesa Drift",
    categoria: "Lámparas",
    descripcionCorta: "Minimalista y modular.",
    descripcionDetallada: "Lámpara de mesa minimalista de ensamblaje modular. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US5a505614920226/design/2025-04-08_2befdd213d5e78.png",
      "https://makerworld.bblmw.com/makerworld/model/US5a505614920226/design/2025-04-08_aadd092ae792f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5a505614920226/design/2025-04-08_1ffb9494b0bed.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5a505614920226/design/2025-04-08_562b6945d3dd8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5a505614920226/design/2025-04-08_9d474b289c4f5.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "mesa",
      "minimalista"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1298362#profileId-271186085",
      autor: "h3li0",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 489,
    nombre: "Portavela de burbujas",
    categoria: "Lámparas",
    descripcionCorta: "Burbujas que dejan pasar la luz.",
    descripcionDetallada: "Portavela con patrón de burbujas para velas de té de hasta 39.5 mm.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US675136a27b2f64/design/2024-12-24_188acecfefcf5.png",
      "https://makerworld.bblmw.com/makerworld/model/US675136a27b2f64/design/2024-12-24_44fce28ecb924.png",
      "https://makerworld.bblmw.com/makerworld/model/US675136a27b2f64/291356968/instance/2024-12-24_46bd9c90a6ea4.png"
    ],
    precioBase: 70,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 36,
      horas: 1.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "vela",
      "burbujas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/908213#profileId-291356968",
      autor: "SabreDesign",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 490,
    nombre: "Fantasma vela LED",
    categoria: "Lámparas",
    descripcionCorta: "Fantasmita que se derrite.",
    descripcionDetallada: "Fantasma de Halloween para vela LED de té, con efecto de cera derretida.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USd3b551ec96eb49/design/2025-09-28_b1a4255b19c0d8.png",
      "https://makerworld.bblmw.com/makerworld/model/USd3b551ec96eb49/design/8de88fc0ada529e5.png",
      "https://makerworld.bblmw.com/makerworld/model/USd3b551ec96eb49/design/210042bb9ad0d7aa.png",
      "https://makerworld.bblmw.com/makerworld/model/USd3b551ec96eb49/design/f752ca134f4a61e0.png",
      "https://makerworld.bblmw.com/makerworld/model/USd3b551ec96eb49/450876687/instance/2025-09-27_fb2ba1d29c7c68.png"
    ],
    precioBase: 195,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 101,
      horas: 4.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "halloween",
      "fantasma",
      "vela"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1833809#profileId-450876687",
      autor: "yueylmz",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 491,
    nombre: "Lámpara litofanía con tus fotos",
    categoria: "Lámparas",
    descripcionCorta: "Tus fotos aparecen al encender la luz.",
    descripcionDetallada: "Lámpara de litofanía personalizada con tus propias fotos. Envíalas por WhatsApp. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US2d0111b302da07/design/2025-01-29_87c59fa606cfc.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2d0111b302da07/design/2025-01-28_0ae4368885292.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2d0111b302da07/design/2025-01-28_e2a95b5a74dde.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2d0111b302da07/design/2025-01-29_075470d28a304.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2d0111b302da07/design/2025-01-29_4f113511e526a.jpg"
    ],
    precioBase: 385,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 195,
      horas: 8,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "litofania",
      "fotos",
      "personalizado",
      "regalo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1048683#profileId-213781182",
      autor: "Antek",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 492,
    nombre: "Linterna esquelética",
    categoria: "Lámparas",
    descripcionCorta: "Linterna de calavera para Halloween.",
    descripcionDetallada: "Linterna de esqueleto para Halloween y Día de Muertos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US357530f1d187d8/design/2025-09-24_58c5cbf5be71c.png",
      "https://makerworld.bblmw.com/makerworld/model/US357530f1d187d8/design/2025-09-28_b09c0010b27c6.png",
      "https://makerworld.bblmw.com/makerworld/model/US357530f1d187d8/design/2025-09-28_c1a60ebdc4c1d.png",
      "https://makerworld.bblmw.com/makerworld/model/US357530f1d187d8/design/2025-09-28_79636ce215f7.png",
      "https://makerworld.bblmw.com/makerworld/model/US357530f1d187d8/design/2025-09-28_c9cf9dd87385f.png"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 3,
      multicolor: false
    },
    etiquetas: [
      "halloween",
      "calavera",
      "linterna"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1841713#profileId-427384844",
      autor: "StratoLab",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 493,
    nombre: "Estrellas navideñas para velas",
    categoria: "Lámparas",
    descripcionCorta: "Juego de dos estrellas portavelas.",
    descripcionDetallada: "Juego de dos estrellas navideñas para velas de té.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9ca35245063736/design/2024-11-29_dc5a7552da6ac.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9ca35245063736/design/2024-11-29_b472dc3e125de.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US9ca35245063736/design/2024-11-29_67be704450b4e.jpeg"
    ],
    precioBase: 210,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 137,
      horas: 3.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "navidad",
      "estrella",
      "vela"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/833876#profileId-165870269",
      autor: "Dekoracjum Designs by zajcus",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 494,
    nombre: "Lámpara rectangular retorcida",
    categoria: "Lámparas",
    descripcionCorta: "Lámpara con patrón de cesta.",
    descripcionDetallada: "Lámpara rectangular retorcida con estructura tipo cesta. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc904ef813a6b0e/design/2025-12-27_ec9b49748ee68.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc904ef813a6b0e/design/2025-12-27_20745ba5a95ea.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc904ef813a6b0e/design/2025-12-27_6ab1010eb6104.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 4,
      multicolor: false
    },
    etiquetas: [
      "lampara",
      "moderno"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2165336#profileId-538903373",
      autor: "Super_Laserkatz",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 495,
    nombre: "Lámpara búho",
    categoria: "Lámparas",
    descripcionCorta: "Búho que se ilumina.",
    descripcionDetallada: "Lámpara con forma de búho, bonita encendida o apagada. Funciona con luz LED (pregunta por la opción con luz incluida).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US3319a98e64c01a/design/2024-09-18_53ad53aa16e66.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3319a98e64c01a/design/2024-09-18_c4ce02e2e7092.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3319a98e64c01a/design/2024-09-18_6bfa9ff96d144.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3319a98e64c01a/design/2024-09-18_8157b6e06d1e4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3319a98e64c01a/design/2024-09-18_0f63fbffc9ba3.jpg"
    ],
    precioBase: 335,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 182,
      horas: 6.2,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "lampara",
      "buho",
      "infantil"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/650440#profileId-126118213",
      autor: "Zurlingo-3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 1,
    nombre: "Set decorativo Hogar Cálido",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Charola rayada, letras HOME, florero y portavela en estilo nórdico.",
    descripcionDetallada: "Conjunto de piezas decorativas de estilo moderno minimalista: charola circular con rayas verticales, letras tridimensionales HOME, florero rayado del mismo tono y portavela. Acabado mate en tonos cálidos, ideal para mesa de centro, recibidor, librero o buró. Para el portavela usa solo velas LED, no velas de fuego real.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US1d0d53c881d854/design/64a33c8ed5f9c73f.png",
      "https://makerworld.bblmw.com/makerworld/model/US1d0d53c881d854/design/d334d415badf7114.png",
      "https://makerworld.bblmw.com/makerworld/model/US1d0d53c881d854/design/bbd289e4e93c3cc0.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1d0d53c881d854/design/bab6dd115b95a182.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1d0d53c881d854/design/3122487b6ee88828.jpg"
    ],
    precioBase: 165,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 106,
      horas: 2.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "home",
      "japandi",
      "boho",
      "florero",
      "vela",
      "charola",
      "nordico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2511143#profileId-2761604",
      autor: "Q_Craft",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 9,
    nombre: "Sagrado Corazón de Jesús portarrosario",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Figura devocional con base para guardar rosarios.",
    descripcionDetallada: "Estatua del Sagrado Corazón de Jesús con un portarrosario integrado: Jesús sostiene el rosario en su mano y la base poco profunda sirve para guardar otros. Túnica y rasgos faciales detallados. Ideal para rincón de oración, altar, capilla o buró.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US37244535616b7d/design/403274f686a6f2db.png",
      "https://makerworld.bblmw.com/makerworld/model/US37244535616b7d/design/a4d95aa9be28ab74.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US37244535616b7d/design/f34e7c20b44635a2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US37244535616b7d/design/72bb4640b487d9fc.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US37244535616b7d/966068939/instance/2d17f752bec34084.jpg"
    ],
    precioBase: 175,
    escalaDescuento: null,
    tamano: "15 cm de alto",
    impresion: {
      material: "PLA",
      gramos: 83,
      horas: 4.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "religioso",
      "catolico",
      "rosario",
      "jesus",
      "altar",
      "regalo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/3236360#profileId-3666254",
      autor: "SliQ",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 11,
    nombre: "Portaincienso Espada Samurái",
    categoria: "Decoración y Hogar",
    descripcionCorta: "La varita de incienso se convierte en la katana del samurái.",
    descripcionDetallada: "Quemador de incienso con figura de samurái: la varita encendida se convierte en la hoja levantada de su katana. Decoración de inspiración japonesa para escritorio, setup gamer, espacio de meditación o librero. Impreso en PETG.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US7e1ddb712373b1/design/ce4a67575ed01f7e.png",
      "https://makerworld.bblmw.com/makerworld/model/US7e1ddb712373b1/design/6c3352c57b1e9fb0.png",
      "https://makerworld.bblmw.com/makerworld/model/US7e1ddb712373b1/design/5c156b84d49c5b8d.png",
      "https://makerworld.bblmw.com/makerworld/model/US7e1ddb712373b1/788131506/instance/0814e31c5dfebd4c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7e1ddb712373b1/788131506/instance/c797c1e4125f2bb1.jpg"
    ],
    precioBase: 320,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PETG",
      gramos: 147,
      horas: 7.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "incienso",
      "samurai",
      "katana",
      "japones",
      "zen",
      "meditacion"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2857532#profileId-3188254",
      autor: "SlowPrints3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe la venta. El autor vende archivos comerciales en Etsy."
    },
    activo: true
  },
  {
    id: 103,
    nombre: "Figura Super Saiyajin",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Figura de Goku en Super Saiyajin.",
    descripcionDetallada: "Figura de Super Saiyajin de Dragon Ball impresa en una pieza.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc3e5c4e30677e/design/2025-10-28_8ee7a01314de58.png",
      "https://makerworld.bblmw.com/makerworld/model/USc3e5c4e30677e/design/2025-10-28_8df0e7a296687.png",
      "https://makerworld.bblmw.com/makerworld/model/USc3e5c4e30677e/design/2025-10-28_2b1b12a1e7de48.png",
      "https://makerworld.bblmw.com/makerworld/model/USc3e5c4e30677e/459344278/instance/2025-11-01_d48763d32875c8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc3e5c4e30677e/459344278/instance/2025-11-01_1c3ccc4460d8b.jpg"
    ],
    precioBase: 135,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 50,
      horas: 4.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "dragon ball",
      "goku",
      "figura",
      "anime"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1933275#profileId-459344278",
      autor: "Cute Angel",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Dragon Ball (Shueisha / Toei / Akira Toriyama)."
    },
    activo: true
  },
  {
    id: 105,
    nombre: "Dedo de Sukuna (Jujutsu Kaisen)",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Dedo maldito con su caja sellada.",
    descripcionDetallada: "Réplica del dedo de Sukuna con su caja de madera sellada y soporte. Para cosplay o decoración.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USfbe9d6ce4fdc74/design/2025-01-17_06f4d016f22fe.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfbe9d6ce4fdc74/design/2025-01-17_9ed99a50b116f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfbe9d6ce4fdc74/design/2025-01-17_bccf9941f0738.jpg"
    ],
    precioBase: 415,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 190,
      horas: 9.6,
      colores: 4,
      multicolor: true
    },
    etiquetas: [
      "jujutsu kaisen",
      "sukuna",
      "anime",
      "cosplay"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1003010#profileId-508438601",
      autor: "Allthebuz3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Jujutsu Kaisen (Shueisha / Gege Akutami)."
    },
    activo: true
  },
  {
    id: 118,
    nombre: "Medalla de San Benito",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Medalla decorativa a dos colores.",
    descripcionDetallada: "Medalla de San Benito con su oración en latín, a dos colores. Para pared, altar o como protección del hogar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US7efaa73363b9f9/design/2025-01-10_742b6d63de87f.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US7efaa73363b9f9/design/2025-01-10_035ae44271758.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US7efaa73363b9f9/design/2025-01-10_6d493cd8d4f63.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US7efaa73363b9f9/design/2025-01-10_88122bcc03888.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US7efaa73363b9f9/198748879/instance/2025-01-10_3757378b1d907.jpeg"
    ],
    precioBase: 435,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 239,
      horas: 8,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "religioso",
      "san benito",
      "catolico",
      "medalla"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/975875#profileId-198748879",
      autor: "Leo.Donato",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 119,
    nombre: "Virgen de Guadalupe",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Estatua decorativa de 15 cm.",
    descripcionDetallada: "Estatua de la Virgen de Guadalupe con gran detalle, ideal en filamentos tipo mármol o piedra.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US13c80034fcac87/design/27ece1f78c7881c1.png",
      "https://makerworld.bblmw.com/makerworld/model/US13c80034fcac87/design/6b4db9fa14e477c7.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US13c80034fcac87/design/3c9371c494739aad.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US13c80034fcac87/design/66729767548f1fad.jfif",
      "https://makerworld.bblmw.com/makerworld/model/US13c80034fcac87/design/2857ead981b5eb51.jfif"
    ],
    precioBase: 95,
    escalaDescuento: null,
    tamano: "15 cm de alto",
    impresion: {
      material: "PLA",
      gramos: 41,
      horas: 2.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "religioso",
      "guadalupe",
      "virgen",
      "catolico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2475963#profileId-963558967",
      autor: "Kimsai3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 120,
    nombre: "Manos en oración",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Escultura de manos orando.",
    descripcionDetallada: "Escultura de manos en oración de alta densidad. Decoración espiritual para altar o repisa.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb828375852c0e3/design/2024-05-01_f1540d73f9371.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb828375852c0e3/design/2024-05-01_f2319bdf5bfbc.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb828375852c0e3/design/2024-05-01_ba99294d90d72.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb828375852c0e3/design/2025-10-14_09c4e354c202d8.png",
      "https://makerworld.bblmw.com/makerworld/model/USb828375852c0e3/73321401/instance/2024-05-01_da06e35a06265.jpg"
    ],
    precioBase: 310,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 195,
      horas: 5.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "religioso",
      "oracion",
      "manos",
      "escultura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/450030#profileId-73321401",
      autor: "uni3Dworld",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 201,
    nombre: "Florero de pilares retorcidos",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Florero de 16 cm con pilares entrelazados.",
    descripcionDetallada: "Florero con pilares que se entrelazan. Luce increíble en PLA seda bicolor.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb83f487dc7984f/design/2024-01-13_eeed7dc5ddf33.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb83f487dc7984f/design/2024-01-13_6c3bd1ac4ec74.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb83f487dc7984f/design/2024-01-14_465d60d9752d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb83f487dc7984f/377728958/instance/2024-01-13_a93cd26ddf274.png"
    ],
    precioBase: 70,
    escalaDescuento: null,
    tamano: "16 cm de alto",
    impresion: {
      material: "PLA",
      gramos: 27,
      horas: 2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "florero",
      "jarron",
      "decoracion"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/138113#profileId-377728958",
      autor: "jwalker55",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 555,
    nombre: "Florero Vanta",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Florero minimalista de 27.5 cm.",
    descripcionDetallada: "Florero moderno y minimalista.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf7d467519aa112/design/2025-05-30_f5644cbe8aa128.png",
      "https://makerworld.bblmw.com/makerworld/model/USf7d467519aa112/design/2025-05-30_ff8f2dc12f723.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf7d467519aa112/design/2025-05-30_f3d235d87d036.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf7d467519aa112/design/2025-05-30_79495cd9755818.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf7d467519aa112/design/2025-05-30_3d778ecb1f1ea.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "florero",
      "jarron",
      "minimalista"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1469611#profileId-314772168",
      autor: "h3li0",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 556,
    nombre: "Cuadro Porsche 911 GT3 RS",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Arte de pared delgado.",
    descripcionDetallada: "Cuadro de pared con la silueta del Porsche 911 GT3 RS.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US8151594e204afa/design/2025-02-08_a3d16bc4f143e8.png",
      "https://makerworld.bblmw.com/makerworld/model/US8151594e204afa/design/2025-02-08_24173176563078.png",
      "https://makerworld.bblmw.com/makerworld/model/US8151594e204afa/226742163/instance/2025-02-13_0c3d99ccd78bd8.png",
      "https://makerworld.bblmw.com/makerworld/model/US8151594e204afa/226742163/instance/2025-02-13_56dd17401685e8.png"
    ],
    precioBase: 50,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 20,
      horas: 1.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "porsche",
      "autos",
      "cuadro"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1087329#profileId-226742163",
      autor: "Recticle",
      licencia: "CC BY-SA",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito al autor (compartir igual). Usa una marca o personaje de terceros: Porsche (marca registrada)."
    },
    activo: true
  },
  {
    id: 557,
    nombre: "Álbum deslizante para fotos Instax",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Marco tipo libro para fotos instantáneas.",
    descripcionDetallada: "Álbum de fotos deslizante para fotos Instax Mini.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc938800734aa5d/design/ba0a2b5f01638a0f.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USc938800734aa5d/design/069d93d53d33b305.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USc938800734aa5d/design/9c594845977db273.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USc938800734aa5d/design/7b27ab6fa817a793.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USc938800734aa5d/design/17a38d13d17d467e.jpeg"
    ],
    precioBase: 145,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 73,
      horas: 3,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "fotos",
      "instax",
      "marco"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2340117#profileId-595597191",
      autor: "TUITXY",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 558,
    nombre: "Reloj de pared estilo Submariner",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Reloj de pared tipo reloj de lujo.",
    descripcionDetallada: "Reloj de pared inspirado en el Rolex Submariner (requiere mecanismo de reloj).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US7331603354f13d/design/2025-01-11_9fa90d144e4df.webp",
      "https://makerworld.bblmw.com/makerworld/model/US7331603354f13d/design/2025-01-11_e59111d0535b6.webp",
      "https://makerworld.bblmw.com/makerworld/model/US7331603354f13d/design/2025-01-11_2d0d1ba562cea.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7331603354f13d/design/2025-01-11_d2ddae15393fc.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7331603354f13d/206396530/instance/2025-01-11_d2a6b219cec5a.webp"
    ],
    precioBase: 370,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 210,
      horas: 6.4,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "reloj",
      "pared"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/978569#profileId-206396530",
      autor: "Sparco",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Rolex (marca registrada)."
    },
    activo: true
  },
  {
    id: 559,
    nombre: "Escultura en capas Porsche 911 RSR",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Escultura del 911 RSR.",
    descripcionDetallada: "Escultura en capas del Porsche 911 RSR.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US83af276ceecaf8/design/2025-08-23_70e20f912190d8.png",
      "https://makerworld.bblmw.com/makerworld/model/US83af276ceecaf8/design/2025-08-23_0fe28cf90097e8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US83af276ceecaf8/design/2025-08-23_831c451801a138.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US83af276ceecaf8/design/2025-08-23_03e645bca63e78.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US83af276ceecaf8/design/2025-08-23_101cb5f79877d8.jpg"
    ],
    precioBase: 140,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 80,
      horas: 2.3,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "porsche",
      "escultura",
      "autos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1165558#profileId-388388637",
      autor: "nameless_fox",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Porsche (marca registrada)."
    },
    activo: true
  },
  {
    id: 560,
    nombre: "Sujetalibros Harry Potter",
    categoria: "Decoración y Hogar",
    descripcionCorta: "El mago sostiene tus libros.",
    descripcionDetallada: "Sujetalibros con un joven mago que sostiene los libros con magia.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc14656b3400c1/design/2026-01-02_ddd7743baefd58.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc14656b3400c1/design/00546058e879be57.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc14656b3400c1/design/2026-01-02_31b75d236cbe08.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc14656b3400c1/design/2026-01-02_cefe862c35c078.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc14656b3400c1/design/2026-01-02_3ca88ebb9006d.jpg"
    ],
    precioBase: 235,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA + PLA-CF",
      gramos: 153,
      horas: 4.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "harry potter",
      "libros",
      "sujetalibros"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2188475#profileId-568944984",
      autor: "Sevro",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Harry Potter (Warner Bros.)."
    },
    activo: true
  },
  {
    id: 561,
    nombre: "Escultura columpio a la luna",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Arte onírico.",
    descripcionDetallada: "Escultura de una figura en un columpio colgado de la luna.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US106ef03ecd7662/design/2025-09-16_a548c3e391f058.png",
      "https://makerworld.bblmw.com/makerworld/model/US106ef03ecd7662/design/2025-09-16_0d09a478097d08.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US106ef03ecd7662/411800933/instance/2025-09-16_cf05cc5cec819.jpg"
    ],
    precioBase: 195,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 69,
      horas: 6.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "escultura",
      "luna",
      "decoracion"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1799289#profileId-411800933",
      autor: "Sculturissimo3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 562,
    nombre: "Charola ovalada",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Charola minimalista.",
    descripcionDetallada: "Charola ovalada minimalista para objetos pequeños.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US55778f70ed760f/design/2025-10-27_e2d4fa93f21638.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US55778f70ed760f/design/2025-10-27_1fcde11c95d23.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US55778f70ed760f/design/2025-10-27_bd84a8eb124978.jpg"
    ],
    precioBase: 100,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 57,
      horas: 2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "charola",
      "minimalista"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1930024#profileId-454220552",
      autor: "Pumpanjol",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 563,
    nombre: "Portaincienso El Gran Viajero",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Astronauta que sostiene el incienso.",
    descripcionDetallada: "Portaincienso con forma de viajero espacial.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US5925f62f073ff4/design/dd9568f40c80a071.png",
      "https://makerworld.bblmw.com/makerworld/model/US5925f62f073ff4/design/5d1e521454d29a7d.webp",
      "https://makerworld.bblmw.com/makerworld/model/US5925f62f073ff4/design/a715b688a3abaccd.webp",
      "https://makerworld.bblmw.com/makerworld/model/US5925f62f073ff4/design/29a11c380a626b1a.webp",
      "https://makerworld.bblmw.com/makerworld/model/US5925f62f073ff4/design/200b5440c0903ef2.webp"
    ],
    precioBase: 235,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 90,
      horas: 7.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "incienso",
      "astronauta"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2771297#profileId-761427951",
      autor: "Poneko 3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 564,
    nombre: "Marcos geométricos modulares",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Set de 3 patrones para pared.",
    descripcionDetallada: "Set de 3 marcos modulares con patrones geométricos para pared.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USbb41c186c1cef3/design/2025-06-25_d4300e686fcdd.png",
      "https://makerworld.bblmw.com/makerworld/model/USbb41c186c1cef3/design/2025-06-25_5bac5f277afb68.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbb41c186c1cef3/design/2025-06-25_4622537bd975c8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbb41c186c1cef3/design/2025-06-25_b7f56d1c66126.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbb41c186c1cef3/design/2025-06-25_7fe42ba96cfa78.jpg"
    ],
    precioBase: 110,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 66,
      horas: 2.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "pared",
      "geometrico",
      "decoracion"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1550228#profileId-685657925",
      autor: "Reydio Active",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 565,
    nombre: "Letrero Home Sweet Home",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Decoración para la entrada.",
    descripcionDetallada: "Letrero \"Home Sweet Home\" a dos colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa9b9c7a61cf217/design/2025-06-05_249585ca1e1b9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa9b9c7a61cf217/design/2025-06-05_7a3523a9102e8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa9b9c7a61cf217/design/2025-06-05_f594a1d88be938.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa9b9c7a61cf217/design/2025-06-05_00bcf6ec0bc7a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa9b9c7a61cf217/design/2025-06-05_8591b823b0f03.jpg"
    ],
    precioBase: 100,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 48,
      horas: 2.1,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "letrero",
      "hogar",
      "home"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1490117#profileId-918143986",
      autor: "_einfachKatha",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 566,
    nombre: "Letreros graciosos para la oficina",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Frases divertidas para tu escritorio.",
    descripcionDetallada: "Letreros con frases graciosas para la oficina. Precio por letrero.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US89b046211fe74a/design/2025-03-02_a5a77a9dc6584.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US89b046211fe74a/design/2025-03-02_1cc22b41d9895.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US89b046211fe74a/design/2025-03-02_33d5b728999e6.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US89b046211fe74a/design/2025-03-02_8ffb06f04020a.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US89b046211fe74a/design/2025-03-02_6397f18b22a44.jpeg"
    ],
    precioBase: 60,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 6,
      multicolor: true
    },
    etiquetas: [
      "oficina",
      "letrero",
      "gracioso"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1166177#profileId-241155613",
      autor: "3dPrintInPlace",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 567,
    nombre: "Charola japandi",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Charola de 19.7 cm.",
    descripcionDetallada: "Charola japandi para exhibir decoración o como charola multiusos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb800abee08578/design/5f0b2aecabdde816.png",
      "https://makerworld.bblmw.com/makerworld/model/USb800abee08578/design/0d9c299f571bf36d.png",
      "https://makerworld.bblmw.com/makerworld/model/USb800abee08578/design/f24b4344aee013f2.png",
      "https://makerworld.bblmw.com/makerworld/model/USb800abee08578/design/3b39b9454a7007ee.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb800abee08578/669517797/instance/21febc925a36a79c.png"
    ],
    precioBase: 115,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 69,
      horas: 2.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "charola",
      "japandi"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2419531#profileId-669517797",
      autor: "SabreDesign",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 568,
    nombre: "Cuencos de malla",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Dos cuencos con patrón de malla.",
    descripcionDetallada: "Dos cuencos decorativos con patrón de malla.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6b4caca51a6778/design/2025-08-28_f58e47630a8428.png",
      "https://makerworld.bblmw.com/makerworld/model/US6b4caca51a6778/design/2025-08-28_bed02fbc50d668.png",
      "https://makerworld.bblmw.com/makerworld/model/US6b4caca51a6778/design/2025-08-28_a76a7bf4218cf8.png",
      "https://makerworld.bblmw.com/makerworld/model/US6b4caca51a6778/design/2025-08-28_476e1ebda88c08.png",
      "https://makerworld.bblmw.com/makerworld/model/US6b4caca51a6778/design/2025-08-28_d5c4d666b8bcc8.png"
    ],
    precioBase: 455,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 208,
      horas: 12.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cuenco",
      "malla",
      "decoracion"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1741956#profileId-585427557",
      autor: "JANBERRY DESIGN",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 569,
    nombre: "Escultura flor de loto",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Flor de loto serena.",
    descripcionDetallada: "Escultura de flor de loto.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USd7dd962bc05a86/design/2025-02-11_f9a4d2a10447f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd7dd962bc05a86/design/2025-02-11_b04bf911ad6c9.png",
      "https://makerworld.bblmw.com/makerworld/model/USd7dd962bc05a86/227218810/instance/2025-02-11_699448df03f.png"
    ],
    precioBase: 145,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 58,
      horas: 4.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "loto",
      "escultura",
      "zen"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1098019#profileId-227218810",
      autor: "KvK Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 570,
    nombre: "Set decorativo wabi-sabi",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Adornos de escritorio estilo japonés.",
    descripcionDetallada: "Set de adornos de escritorio estilo wabi-sabi japonés.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb8f8926ecdd434/design/18c3da2b57e5462a.png",
      "https://makerworld.bblmw.com/makerworld/model/USb8f8926ecdd434/design/83548731336b9433.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb8f8926ecdd434/design/8ab7d4ac4513560f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb8f8926ecdd434/design/ab8bc08a2a271e83.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb8f8926ecdd434/1008445782/instance/fa5f9a26737098b2.jpg"
    ],
    precioBase: 305,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 173,
      horas: 6.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "japones",
      "decoracion",
      "set"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2367309#profileId-1008445782",
      autor: "Q_Craft",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 572,
    nombre: "Marco barroco antiguo",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Marco para cuadro o espejo.",
    descripcionDetallada: "Marco de estilo barroco para cuadros o espejos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USbf81facade701c/design/2025-07-26_7d91556cefd2e8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbf81facade701c/design/2025-07-26_e9c485d3444c6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbf81facade701c/design/2025-07-26_bc5e5250dad6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbf81facade701c/design/2025-07-26_67612265f7be08.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbf81facade701c/design/2025-07-26_4935612414f928.jpg"
    ],
    precioBase: 145,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 60,
      horas: 4.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "marco",
      "barroco",
      "espejo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1640900#profileId-362687624",
      autor: "Christian",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 573,
    nombre: "Escultura dinámica La Fuente",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Escultura en movimiento.",
    descripcionDetallada: "Escultura dinámica de diseño contemporáneo.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe5fba7040c7e97/design/9c572f3105440755.png",
      "https://makerworld.bblmw.com/makerworld/model/USe5fba7040c7e97/design/c3b058d5936e21cf.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe5fba7040c7e97/design/65fe529cc3051524.png",
      "https://makerworld.bblmw.com/makerworld/model/USe5fba7040c7e97/design/696321697f44bae3.png",
      "https://makerworld.bblmw.com/makerworld/model/USe5fba7040c7e97/design/c3849afdcdb5e84f.png"
    ],
    precioBase: 325,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 105,
      horas: 10.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "escultura",
      "dinamica"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2845609#profileId-850719588",
      autor: "Krizia88cK",
      licencia: "MakerWorld Exclusive License",
      permiteVenta: false,
      notaLicencia: "Prohíbe el uso comercial."
    },
    activo: true
  },
  {
    id: 574,
    nombre: "Recipiente remolino",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Recipiente para llaves o monedas.",
    descripcionDetallada: "Recipiente de remolino suave para llaves o monedas, de 17.8 cm.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US53e8b19bc5bbc4/design/2025-08-23_e3397c783f32f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US53e8b19bc5bbc4/design/2025-08-23_5990e088dc1248.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US53e8b19bc5bbc4/design/2025-08-23_1ed71c13bcbfb8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US53e8b19bc5bbc4/476427809/instance/2025-09-13_31dba45ca657c8.jpg"
    ],
    precioBase: 70,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 48,
      horas: 1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "recipiente",
      "llaves"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1727413#profileId-476427809",
      autor: "DBow",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 575,
    nombre: "Letrero con inicial y nombre",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Nombre personalizado.",
    descripcionDetallada: "Letrero con inicial y nombre personalizables. Escribe el nombre en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US8567a06b5c3742/design/fbdfc8c9a8bfddc8.png",
      "https://makerworld.bblmw.com/makerworld/model/US8567a06b5c3742/design/8bee925d4c1a614a.png",
      "https://makerworld.bblmw.com/makerworld/model/US8567a06b5c3742/design/1599948bdf8e6534.png",
      "https://makerworld.bblmw.com/makerworld/model/US8567a06b5c3742/944508189/instance/dc341ebfd97ead27.png",
      "https://makerworld.bblmw.com/makerworld/model/US8567a06b5c3742/944508189/instance/8ab880b55853b33b.png"
    ],
    precioBase: 245,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 159,
      horas: 4.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "nombre",
      "personalizado",
      "letrero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2674618#profileId-944508189",
      autor: "3D OTECH",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 576,
    nombre: "Mini repisa de pared",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Repisa pequeña.",
    descripcionDetallada: "Mini repisa de pared para objetos pequeños.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US44ecb190535c71/design/2024-08-01_744db39308f04.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US44ecb190535c71/design/2024-08-01_9550c1e78dc6c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US44ecb190535c71/design/2024-08-01_68491606af414.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US44ecb190535c71/design/2024-08-01_e8fe043fec035.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US44ecb190535c71/design/2024-08-01_210451fd81555.jpg"
    ],
    precioBase: 105,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 57,
      horas: 1.8,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "repisa",
      "pared"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/567136#profileId-105732836",
      autor: "Andreas",
      licencia: "CC BY-NC",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 577,
    nombre: "Cuenco de llaves dragón dormido",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Un dragón cuida tus llaves.",
    descripcionDetallada: "Cuenco para llaves con un dragón dormido.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9641dcfa5c5767/design/8114af764d20165d.png",
      "https://makerworld.bblmw.com/makerworld/model/US9641dcfa5c5767/design/aee6fe06bb6b91d8.png",
      "https://makerworld.bblmw.com/makerworld/model/US9641dcfa5c5767/design/923528b864b37fa6.png",
      "https://makerworld.bblmw.com/makerworld/model/US9641dcfa5c5767/576690582/instance/c5d15cd3ef4976fb.png",
      "https://makerworld.bblmw.com/makerworld/model/US9641dcfa5c5767/576690582/instance/6536c4cd0f24b3b8.png"
    ],
    precioBase: 95,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 45,
      horas: 2.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "dragon",
      "llaves",
      "cuenco"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2279834#profileId-576690582",
      autor: "Lynns",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 578,
    nombre: "Florero japandi Shizu",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Florero acanalado.",
    descripcionDetallada: "Florero moderno acanalado de inspiración japonesa y escandinava.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US5c25d8e674ed1f/design/2025-08-03_22ec4b76775e48.png",
      "https://makerworld.bblmw.com/makerworld/model/US5c25d8e674ed1f/design/2025-08-03_9b745d1977221.png",
      "https://makerworld.bblmw.com/makerworld/model/US5c25d8e674ed1f/design/2025-08-03_c393313bfde4b.png",
      "https://makerworld.bblmw.com/makerworld/model/US5c25d8e674ed1f/design/2025-08-03_7d8398c3811ee8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5c25d8e674ed1f/369857812/instance/2025-08-03_d74fc8d2852d3.png"
    ],
    precioBase: 265,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 142,
      horas: 6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "florero",
      "japandi"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1665014#profileId-369857812",
      autor: "SabreDesign",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 579,
    nombre: "Cuadro Stitch en la luna",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Stitch sentado en la luna.",
    descripcionDetallada: "Arte de pared de Stitch sobre la luna.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USacac0924667eb0/design/2025-03-13_0292cb7c5b5ce8.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 10,
      horas: 0.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "stitch",
      "disney",
      "cuadro"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1205438#profileId-249542304",
      autor: "Artist3d",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Disney."
    },
    activo: true
  },
  {
    id: 581,
    nombre: "Reloj de mesa sencillo",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Reloj minimalista.",
    descripcionDetallada: "Reloj de mesa sencillo (requiere mecanismo de reloj).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US70a0f06c4eeda7/design/2024-10-26_3cf97d5ecf9d6.png",
      "https://makerworld.bblmw.com/makerworld/model/US70a0f06c4eeda7/145846949/instance/2024-10-26_eb54a4f86140d.jpg"
    ],
    precioBase: 140,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 84,
      horas: 2.1,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "reloj",
      "mesa"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/731585#profileId-145846949",
      autor: "SheepMe!",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 582,
    nombre: "Escultura El Abrazo",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Escultura minimalista de amor.",
    descripcionDetallada: "Escultura minimalista de dos figuras abrazadas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US47b79b8753f4f1/design/2025-03-15_7f2433f71f31b.png",
      "https://makerworld.bblmw.com/makerworld/model/US47b79b8753f4f1/design/2025-03-15_167340ceaa6ce.png",
      "https://makerworld.bblmw.com/makerworld/model/US47b79b8753f4f1/design/2025-03-15_651855ff763dd.png",
      "https://makerworld.bblmw.com/makerworld/model/US47b79b8753f4f1/design/2025-03-15_b371ab560134f.png",
      "https://makerworld.bblmw.com/makerworld/model/US47b79b8753f4f1/design/2025-03-15_29d2ad19a0285.png"
    ],
    precioBase: 170,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 74,
      horas: 4,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "escultura",
      "amor",
      "abrazo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1212943#profileId-257606071",
      autor: "Collecticraft",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 583,
    nombre: "Sujetalibros Andén 9¾",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Inspirado en Harry Potter.",
    descripcionDetallada: "Sujetalibros inspirado en el Andén 9¾.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US8bb3341410ce13/design/2025-04-19_3a00a19889b0f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8bb3341410ce13/design/2025-04-19_011fcd48bba62.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8bb3341410ce13/design/2025-04-19_52119202b21d2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8bb3341410ce13/design/2025-04-19_b61ed4f5465c98.jpg"
    ],
    precioBase: 95,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 57,
      horas: 1.7,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "harry potter",
      "libros",
      "sujetalibros"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1335815#profileId-280401068",
      autor: "Noob2Geek",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Harry Potter (Warner Bros.)."
    },
    activo: true
  },
  {
    id: 584,
    nombre: "Silueta de pareja en columpio",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Escena romántica minimalista.",
    descripcionDetallada: "Silueta minimalista de una pareja en un columpio.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US1888b436270c37/design/42655b526aa7218e.png",
      "https://makerworld.bblmw.com/makerworld/model/US1888b436270c37/design/e8134f124ab527a1.png",
      "https://makerworld.bblmw.com/makerworld/model/US1888b436270c37/design/7c214cd3e9fab460.png"
    ],
    precioBase: 180,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 63,
      horas: 5.2,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "pareja",
      "amor",
      "silueta"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2316580#profileId-587666006",
      autor: "SaltyWorks",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 585,
    nombre: "Charola orgánica para joyas",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Charola de forma orgánica.",
    descripcionDetallada: "Charola organizadora de forma orgánica para joyas o llaves.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US12b677944ff348/design/2025-09-21_8dcf8cb663b11.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US12b677944ff348/design/2025-09-21_70d6f6926f5f.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US12b677944ff348/design/2025-09-21_8d02e493f5723.jpeg"
    ],
    precioBase: 175,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA-S",
      gramos: 97,
      horas: 3.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "charola",
      "joyas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1815848#profileId-416791008",
      autor: "Emilio",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 586,
    nombre: "Portaincienso Voronoi",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Torre de incienso de diseño.",
    descripcionDetallada: "Portaincienso de diseño moderno con patrón Voronoi.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USdaac78d32ec9fc/design/85aa7b6d7122048e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USdaac78d32ec9fc/design/2025-11-27_cb846051a2cf2.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USdaac78d32ec9fc/design/2025-11-30_be93c42fe2915.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USdaac78d32ec9fc/design/2025-11-27_c274e0de9e9f1.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USdaac78d32ec9fc/design/2025-11-27_3441619bc4c0a.jpeg"
    ],
    precioBase: 160,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 76,
      horas: 4.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "incienso",
      "moderno"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2048002#profileId-498377434",
      autor: "Kinta3DLab",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 587,
    nombre: "Repisa flor de diamante",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Repisa geométrica para plantas.",
    descripcionDetallada: "Repisa geométrica para pared para plantas pequeñas o decoración.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe6162472186c6/design/c7d074c8a499746a.png",
      "https://makerworld.bblmw.com/makerworld/model/USe6162472186c6/design/6d03c09ef713bfa2.png",
      "https://makerworld.bblmw.com/makerworld/model/USe6162472186c6/design/e674fb38b3c99e9a.png",
      "https://makerworld.bblmw.com/makerworld/model/USe6162472186c6/design/3d3bc31889afdebb.png",
      "https://makerworld.bblmw.com/makerworld/model/USe6162472186c6/design/c6e26792a2482c53.jpeg"
    ],
    precioBase: 175,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 106,
      horas: 2.5,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "repisa",
      "geometrica",
      "plantas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2904069#profileId-816570957",
      autor: "Limitless Labs",
      licencia: "MakerWorld Exclusive License",
      permiteVenta: false,
      notaLicencia: "Prohíbe el uso comercial."
    },
    activo: true
  },
  {
    id: 588,
    nombre: "Casita Home con nombres",
    categoria: "Decoración y Hogar",
    descripcionCorta: "Casa decorativa con nombres de la familia.",
    descripcionDetallada: "Casita decorativa con la palabra Home y placas con los nombres de la familia.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc9f6b9a43dd841/design/2eef2e3ef33ca3a4.png",
      "https://makerworld.bblmw.com/makerworld/model/USc9f6b9a43dd841/420028558/instance/2025-09-04_c06a35661ba5e8.jpeg"
    ],
    precioBase: 215,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 102,
      horas: 5.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "familia",
      "home",
      "personalizado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1763270#profileId-420028558",
      autor: "Daniel Lippert",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 199,
    nombre: "Maceta autorriego con indicador",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Maceta que se riega sola.",
    descripcionDetallada: "Maceta de autorriego con indicador de nivel de agua; ideal para plantas que necesitan mucha agua.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6d1c65e34a1bd3/design/2024-07-28_986c5b6e9edc3.png",
      "https://makerworld.bblmw.com/makerworld/model/US6d1c65e34a1bd3/design/2024-07-28_0c1d573d1fd09.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US6d1c65e34a1bd3/design/2024-07-28_89546448383ab.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US6d1c65e34a1bd3/design/2024-07-28_db16667bd5e19.jpeg"
    ],
    precioBase: 370,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 226,
      horas: 5.4,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "planta",
      "autorriego",
      "jardin"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/561477#profileId-105525144",
      autor: "magic_chestnut",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 200,
    nombre: "Maceta hexagonal invertida",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Maceta con patrón hexagonal.",
    descripcionDetallada: "Maceta o florero con patrón hexagonal invertido en el exterior, impresa en modo jarrón.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb08fbebefa5d58/design/2024-06-13_lhxjbaz9o7z0.jpg"
    ],
    precioBase: 115,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 75,
      horas: 2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "florero",
      "hexagono"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/497342#profileId-88106586",
      autor: "SASSy Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 285,
    nombre: "Maceta gatito",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Maceta de gato sencilla.",
    descripcionDetallada: "Maceta pequeña con forma de gato.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US2930a80646b42c/design/2025-09-19_265ad74ea9636.png",
      "https://makerworld.bblmw.com/makerworld/model/US2930a80646b42c/design/2025-09-18_ecf5e9930a958.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2930a80646b42c/design/2025-09-18_7926ae198c63e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2930a80646b42c/design/2025-09-18_fba8dc582206c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2930a80646b42c/design/2025-09-18_25f08775b1f63.jpg"
    ],
    precioBase: 65,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 43,
      horas: 1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "gato"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1805890#profileId-413552201",
      autor: "汤圆加可乐",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 389,
    nombre: "Maceta gato",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Maceta con forma de gato para suculentas.",
    descripcionDetallada: "Maceta adorable con forma de gato para suculentas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US88035cab982830/design/2025-06-10_3f15d507348a08.png",
      "https://makerworld.bblmw.com/makerworld/model/US88035cab982830/design/2025-06-10_573934fc58465.png",
      "https://makerworld.bblmw.com/makerworld/model/US88035cab982830/design/2025-06-10_867fb716685a9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US88035cab982830/design/2025-06-10_9706b6963a3668.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US88035cab982830/design/2025-06-10_e8966ff3decdd.jpg"
    ],
    precioBase: 85,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 48,
      horas: 1.7,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "gato",
      "suculenta"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1505332#profileId-323766641",
      autor: "BotanyChic",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 443,
    nombre: "Maceta Barista Buddy",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Maceta tierna para tu estación de café.",
    descripcionDetallada: "Maceta adorable con temática de café, ideal para tu barra de café o cafetería.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USd9d60608808c03/design/e4df7db45ee6a9ff.png",
      "https://makerworld.bblmw.com/makerworld/model/USd9d60608808c03/design/7d8818eb0cd91543.png",
      "https://makerworld.bblmw.com/makerworld/model/USd9d60608808c03/design/0f03a4857b12df39.png",
      "https://makerworld.bblmw.com/makerworld/model/USd9d60608808c03/design/c859909ca0341e22.png",
      "https://makerworld.bblmw.com/makerworld/model/USd9d60608808c03/design/0715b86554b080d4.png"
    ],
    precioBase: 95,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 48,
      horas: 2.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "cafe",
      "tierno"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2457875#profileId-637020093",
      autor: "CozyCraftStudios",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 444,
    nombre: "Maceta zen HexaRain",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Maceta de goteo lento para mesa o pared.",
    descripcionDetallada: "Maceta zen con sistema de goteo lento, para mesa o pared.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USbe581b975fbb2e/design/2026-01-13_22896662eeaad8.png",
      "https://makerworld.bblmw.com/makerworld/model/USbe581b975fbb2e/design/2026-01-16_395e3d7ff17258.png",
      "https://makerworld.bblmw.com/makerworld/model/USbe581b975fbb2e/design/2026-01-13_18a6c5e66b6e8.png",
      "https://makerworld.bblmw.com/makerworld/model/USbe581b975fbb2e/design/2026-01-13_574d4000055f9.png",
      "https://makerworld.bblmw.com/makerworld/model/USbe581b975fbb2e/design/2026-01-13_e630078950b9d8.png"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "zen",
      "autorriego"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2239694#profileId-600136038",
      autor: "Cipriani 3Design Studio",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 445,
    nombre: "Maceta Claudia",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Maceta elegante de diseño botánico.",
    descripcionDetallada: "Maceta de diseño elegante y atemporal para plantas pequeñas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US1ecfebe77eac10/design/2025-05-11_f539f398bc6c48.png",
      "https://makerworld.bblmw.com/makerworld/model/US1ecfebe77eac10/design/2025-05-09_70cec37e5ecba8.png",
      "https://makerworld.bblmw.com/makerworld/model/US1ecfebe77eac10/design/2025-05-09_efd18a60496368.webp",
      "https://makerworld.bblmw.com/makerworld/model/US1ecfebe77eac10/design/2025-05-09_54c275a650458.png",
      "https://makerworld.bblmw.com/makerworld/model/US1ecfebe77eac10/design/2025-05-09_6bc9e2cc1f73e.jpg"
    ],
    precioBase: 105,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 61,
      horas: 2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "elegante"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1399976#profileId-297050517",
      autor: "BotanyChic",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 446,
    nombre: "Maceta bota",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Macetero con forma de botita.",
    descripcionDetallada: "Macetero adorable con forma de bota para jardín o decoración.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US33d4a72d7fe6db/design/2025-01-08_569b23f93e983.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US33d4a72d7fe6db/design/2025-01-08_2ee85d7638553.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US33d4a72d7fe6db/design/2025-01-08_1484d5f416507.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US33d4a72d7fe6db/design/2025-01-08_b67e42c53a551.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US33d4a72d7fe6db/design/2025-01-08_c067d7cae6952.jpg"
    ],
    precioBase: 140,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 85,
      horas: 2.7,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "bota",
      "jardin"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/967173#profileId-196965690",
      autor: "SA3D Designs",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 447,
    nombre: "Maceta geométrica para suculentas",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Maceta facetada moderna.",
    descripcionDetallada: "Maceta geométrica moderna para suculentas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000221344/design/2024-03-03_1307899d677ac8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000221344/design/2024-03-03_2e34944701d8a8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000221344/design/2024-03-03_2d7e26c1801e9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000221344/design/2024-03-03_56c78cf259a038.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000221344/design/2024-03-03_87e82b2798a758.jpg"
    ],
    precioBase: 370,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PETG",
      gramos: 150,
      horas: 9.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "suculentas",
      "geometrica"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/221344#profileId-55696803",
      autor: "SchulteGeileTechnik",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 448,
    nombre: "Etiqueta de jardín personalizada",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Marca tus plantas con su nombre.",
    descripcionDetallada: "Letrero para identificar plantas en jardín o macetas, con el nombre que quieras. Precio por pieza.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000881635/design/2024-12-15_58bbc7cc8bccd8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US76dea2fc26fce0/177583932/instance/2024-12-15_2d80aeb23bafb8.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "ASA",
      gramos: 3,
      horas: 0.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "jardin",
      "etiqueta",
      "plantas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/881635#profileId-177583932",
      autor: "JB",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 449,
    nombre: "Macetero acanalado con patas",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Maceta de 8 cm con patitas.",
    descripcionDetallada: "Macetero acanalado con patas, de 8 cm de diámetro (se puede hacer más grande).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US448e7078f7c43a/design/2025-01-27_77836b00da59a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US448e7078f7c43a/design/2025-01-27_98ce4f33349f4.png",
      "https://makerworld.bblmw.com/makerworld/model/US448e7078f7c43a/212911345/instance/2025-01-27_a4f66d2a62f59.png"
    ],
    precioBase: 225,
    escalaDescuento: null,
    tamano: "8 cm de diámetro",
    impresion: {
      material: "PLA",
      gramos: 129,
      horas: 3.8,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "acanalado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1044978#profileId-212911345",
      autor: "FrSo",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 450,
    nombre: "Comedero moderno para pájaros",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Atrae aves a tu jardín.",
    descripcionDetallada: "Comedero para pájaros de diseño moderno para jardín o balcón.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf2b86c57bd475c/design/2025-01-26_76c5a49904a51.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf2b86c57bd475c/design/2025-01-26_f9c8f5f64991b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf2b86c57bd475c/design/2025-01-26_90bd9c1a9a921.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf2b86c57bd475c/design/2025-01-26_b2aff3b7b55d8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf2b86c57bd475c/design/2025-01-26_3024d5357088a.jpg"
    ],
    precioBase: 365,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PETG",
      gramos: 166,
      horas: 8.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "pajaros",
      "comedero",
      "jardin"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1039770#profileId-211894679",
      autor: "Tord Asnes",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 451,
    nombre: "Semillero modular con autorriego",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Kit de cultivo con herramientas.",
    descripcionDetallada: "Kit modular de semillero con autorriego y herramientas para germinar tus plantas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US300293b2858c3b/design/2025-05-11_9f4182f5c66a7.png",
      "https://makerworld.bblmw.com/makerworld/model/US300293b2858c3b/design/2025-05-09_c745a934ae3898.png",
      "https://makerworld.bblmw.com/makerworld/model/US300293b2858c3b/design/2025-05-09_ef8f155c53987.png",
      "https://makerworld.bblmw.com/makerworld/model/US300293b2858c3b/design/2025-05-09_2696cc1c0a30a8.png",
      "https://makerworld.bblmw.com/makerworld/model/US300293b2858c3b/design/2025-05-09_108c82708c5498.png"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA + PETG",
      gramos: null,
      horas: null,
      colores: 3,
      multicolor: false
    },
    etiquetas: [
      "semillero",
      "huerto",
      "autorriego"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1400373#profileId-298919107",
      autor: "Meyui",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 452,
    nombre: "Globo de riego",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Riega tus plantas mientras no estás.",
    descripcionDetallada: "Globo de riego que mantiene la tierra húmeda poco a poco.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US436afac1839d39/design/2024-07-13_200b93a1eda25.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US436afac1839d39/design/2024-07-13_a33cbb10e8864.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US436afac1839d39/design/2024-07-13_c5468d4446d5a.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US436afac1839d39/design/2024-07-13_000488086a1b9.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US436afac1839d39/design/2024-07-13_67615c2e7fa64.jpeg"
    ],
    precioBase: 95,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 56,
      horas: 1.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "riego",
      "plantas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/538761#profileId-98507979",
      autor: "Augustas",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 454,
    nombre: "Maceta lector acogedor",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Maceta para amantes de los libros.",
    descripcionDetallada: "Maceta con forma de lector acurrucado, para amantes de los libros y las plantas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe2c95134f65330/design/a3f284ad3874270e.png",
      "https://makerworld.bblmw.com/makerworld/model/USe2c95134f65330/design/cb52514e848623cb.png",
      "https://makerworld.bblmw.com/makerworld/model/USe2c95134f65330/design/5e075e7283333510.png",
      "https://makerworld.bblmw.com/makerworld/model/USe2c95134f65330/design/bbcfa078879dc722.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USe2c95134f65330/design/c45748a2db19096c.jpeg"
    ],
    precioBase: 105,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 61,
      horas: 2.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "libros",
      "tierno"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2465460#profileId-639159641",
      autor: "CozyCraftStudios",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 455,
    nombre: "Maceta japandi acanalada",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Maceta minimalista con drenaje.",
    descripcionDetallada: "Maceta acanalada estilo japandi con drenaje.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf8a7b410060d0d/design/b1e7df96f03b6337.png",
      "https://makerworld.bblmw.com/makerworld/model/USf8a7b410060d0d/design/5bcd39d6900a98d6.png",
      "https://makerworld.bblmw.com/makerworld/model/USf8a7b410060d0d/design/354810e52b68dd33.png",
      "https://makerworld.bblmw.com/makerworld/model/USf8a7b410060d0d/design/dd5acf3767dfd2d8.png",
      "https://makerworld.bblmw.com/makerworld/model/USf8a7b410060d0d/design/379201f50e3fd6c2.png"
    ],
    precioBase: 145,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PETG",
      gramos: 70,
      horas: 3.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "japandi",
      "minimalista"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2414690#profileId-772878387",
      autor: "Dekora.3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 456,
    nombre: "Macetero poligonal para orquídeas",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Maceta ventilada para orquídeas.",
    descripcionDetallada: "Macetero poligonal minimalista con ventilación para raíces de orquídea.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9bd46bbe703c4d/design/2025-04-26_2d2517e4dcdb6.png",
      "https://makerworld.bblmw.com/makerworld/model/US9bd46bbe703c4d/design/2025-04-26_a393f695e91fc8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9bd46bbe703c4d/design/2025-04-26_d33cd4d54a234.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9bd46bbe703c4d/design/2025-04-26_fd1edeb97202b8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9bd46bbe703c4d/design/2025-04-26_560470e5369308.jpg"
    ],
    precioBase: 305,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 127,
      horas: 7.7,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "orquidea",
      "maceta"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1358566#profileId-286229095",
      autor: "h3li0",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 457,
    nombre: "Tapa para esquejes",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Sostiene esquejes en un frasco con agua.",
    descripcionDetallada: "Tapa que sostiene esquejes de plantas en frascos durante la propagación.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USfba8287319ce75/design/2025-02-17_e97e44fa120ce.png",
      "https://makerworld.bblmw.com/makerworld/model/USfba8287319ce75/design/2025-02-17_427c2439eb3ee.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfba8287319ce75/design/2025-02-17_62a8b3fc7e1a4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfba8287319ce75/design/2025-02-17_18ad3468bafe4.png",
      "https://makerworld.bblmw.com/makerworld/model/USfba8287319ce75/design/2025-02-17_80c36fcf71cc5.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 6,
      horas: 0.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "esquejes",
      "propagacion",
      "plantas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1120043#profileId-230287843",
      autor: "MakerPair",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 458,
    nombre: "Macetero octogonal con patas",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Macetero geométrico en 3 tamaños.",
    descripcionDetallada: "Macetero octogonal geométrico con patas, disponible en 5, 7 y 10 cm.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf978e05c3a2e26/design/2024-11-20_c5b4c89c76d64.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf978e05c3a2e26/design/2024-11-20_d95ba96140d7b.png",
      "https://makerworld.bblmw.com/makerworld/model/USf978e05c3a2e26/design/2024-11-24_3158230890f7e.png",
      "https://makerworld.bblmw.com/makerworld/model/USf978e05c3a2e26/design/2024-11-24_f1031f0c12062.png",
      "https://makerworld.bblmw.com/makerworld/model/USf978e05c3a2e26/729106310/instance/2024-11-24_dae88d5d82dc8.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "geometrica"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/805434#profileId-729106310",
      autor: "FrSo",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 459,
    nombre: "Maceta ramen",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Maceta con forma de tazón de ramen.",
    descripcionDetallada: "Maceta divertida inspirada en un tazón de ramen.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc379f3fc4c0fbd/design/2024-07-04_a775055bdb5c5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc379f3fc4c0fbd/design/2025-05-03_0c742512953cf8.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "ramen",
      "original"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/525429#profileId-95260678",
      autor: "NaturalVectors",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 460,
    nombre: "Maceta para orquídeas Mirage",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Maceta minimalista ventilada.",
    descripcionDetallada: "Maceta minimalista para orquídeas con ventilación para las raíces.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US4d981b758233f2/design/2025-02-16_3a49070f5fd13.png",
      "https://makerworld.bblmw.com/makerworld/model/US4d981b758233f2/design/2025-02-16_934703f061f36.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4d981b758233f2/design/2025-02-16_8bec006104218.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4d981b758233f2/design/2025-02-16_80ef34722c054.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4d981b758233f2/design/2025-02-16_67c5859b291a6.jpg"
    ],
    precioBase: 385,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 166,
      horas: 9.6,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "orquidea",
      "maceta"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1123316#profileId-231015425",
      autor: "h3li0",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 461,
    nombre: "Esparcidor de mano",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Esparce semillas, fertilizante o sal.",
    descripcionDetallada: "Esparcidor de mano versátil para semillas o fertilizante en jardín.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe4c0f313c4e7fd/design/64ad6f69ecc7837e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe4c0f313c4e7fd/design/fc644274fe50b73f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe4c0f313c4e7fd/design/327763874c2d3008.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe4c0f313c4e7fd/design/8b1f5e71d16ad009.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "jardin",
      "esparcidor",
      "semillas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2288228#profileId-579335359",
      autor: "Andy’s Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 462,
    nombre: "Maceta con plato de 12 cm",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Maceta ligera con bandeja de goteo.",
    descripcionDetallada: "Maceta sencilla de 12 cm con plato de goteo.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US778ba1213cee0a/design/2024-08-03_a0efd4aae56e08.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US778ba1213cee0a/design/2024-08-03_8efcda1b0f25d8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US778ba1213cee0a/design/2024-08-03_9c7a32bc4cdf68.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US778ba1213cee0a/107283314/instance/2024-08-03_87ed2c25a75648.png",
      "https://makerworld.bblmw.com/makerworld/model/US778ba1213cee0a/107283314/instance/2024-08-03_1fec7a7c8d743.png"
    ],
    precioBase: 400,
    escalaDescuento: null,
    tamano: "12 cm",
    impresion: {
      material: "PLA",
      gramos: 161,
      horas: 11.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "plato"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/570607#profileId-107283314",
      autor: "tempo",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 463,
    nombre: "Maceta con bandeja de agua",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Riega desde la bandeja.",
    descripcionDetallada: "Maceta con bandeja de agua para regar desde abajo.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US1993d1e3e14c0f/design/2024-06-13_64ba2717fa80a8.png",
      "https://makerworld.bblmw.com/makerworld/model/US1993d1e3e14c0f/design/2024-06-13_1c0afe792b0ae8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US1993d1e3e14c0f/design/2024-06-13_7d2891e36bfaa8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US1993d1e3e14c0f/design/2024-06-13_9ae0e84ec51e5.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US1993d1e3e14c0f/design/2024-06-09_fee60c1ff0123.jpeg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "autorriego"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/491985#profileId-445141972",
      autor: "Jurdis",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 464,
    nombre: "Maceta colgante",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Maceta para colgar con cuerda.",
    descripcionDetallada: "Maceta colgante en dos versiones; solo necesita una cuerda.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US3fee92c292f767/design/2024-07-15_cfcc2dab28e58.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3fee92c292f767/design/2024-07-15_979d9c7a199b4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3fee92c292f767/design/2024-07-15_632c9923d8aa7.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3fee92c292f767/design/2024-07-15_92a232cc269ba.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3fee92c292f767/design/2025-10-30_b39665afb19a9.jpg"
    ],
    precioBase: 280,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 168,
      horas: 5.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "colgante"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/541861#profileId-103147138",
      autor: "uni3Dworld",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 465,
    nombre: "Set de 4 macetas Stillwater con autorriego",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Cuatro macetas con autorriego.",
    descripcionDetallada: "Set de 4 macetas con insertos de autorriego.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf6c78243975f42/design/2025-12-22_b9a00b9254c978.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf6c78243975f42/design/2025-12-22_e34d223e668398.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf6c78243975f42/design/2025-12-22_5df659f6ca7de8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf6c78243975f42/design/2025-12-22_b54f3017e82928.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf6c78243975f42/design/2025-12-22_0e8875cc62d0b8.jpg"
    ],
    precioBase: 375,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "set",
      "autorriego"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2145389#profileId-531004351",
      autor: "Ikigaiform",
      licencia: "MakerWorld Exclusive License",
      permiteVenta: false,
      notaLicencia: "Prohíbe el uso comercial."
    },
    activo: true
  },
  {
    id: 466,
    nombre: "Maceta El Pensador",
    categoria: "Macetas y Jardín",
    descripcionCorta: "La escultura de El Pensador como maceta.",
    descripcionDetallada: "Maceta con forma de El Pensador; la planta sale de su cabeza.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US7b9c79e353333f/design/2025-04-21_52216a9af3247.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7b9c79e353333f/design/2025-04-21_b5e5ff78f01c78.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7b9c79e353333f/282314166/instance/2025-04-21_3f5174f90a0778.jpg"
    ],
    precioBase: 145,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 84,
      horas: 3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "pensador",
      "original"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1343691#profileId-282314166",
      autor: "StevieWander",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 467,
    nombre: "Maceta Fractura",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Maceta con efecto de piedra agrietada.",
    descripcionDetallada: "Maceta de diseño con aspecto de piedra agrietada, en tres tamaños.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US1238ccf2eac92/design/2025-01-18_fb625002ffcc7.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1238ccf2eac92/design/2025-01-17_e9bf08db15ec28.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1238ccf2eac92/design/2025-01-17_d4de9b5d80ce6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1238ccf2eac92/design/2025-01-17_780556b37ff52.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1238ccf2eac92/204437083/instance/2025-01-17_cba6523fbf23d8.jpg"
    ],
    precioBase: 395,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 201,
      horas: 8,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "maceta",
      "piedra",
      "moderno"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1003509#profileId-204437083",
      autor: "Maxx Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 468,
    nombre: "Marcadores para huerto",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Etiquetas para hortalizas y frutas.",
    descripcionDetallada: "Marcadores de jardín editables para hortalizas y frutas. Precio por pieza.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe8ace54351290a/design/2025-03-20_c97bd56051a7f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe8ace54351290a/design/2025-03-20_c5b015305e0f5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe8ace54351290a/design/2025-03-20_07cd50ad33082.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe8ace54351290a/design/2025-03-20_064225887e025.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe8ace54351290a/255262584/instance/2025-03-20_3b0d05cc714dd.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PETG",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "huerto",
      "etiqueta",
      "jardin"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1229615#profileId-255262584",
      autor: "Greanbeanz",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 469,
    nombre: "Exhibidor de 3 niveles",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Escalón para figuras o productos.",
    descripcionDetallada: "Exhibidor de 3 niveles para coleccionables, figuras, joyería o productos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USd369ab2fc1d608/design/f67a41660c792bf8.png",
      "https://makerworld.bblmw.com/makerworld/model/USd369ab2fc1d608/design/19cfd9295bca39ba.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USd369ab2fc1d608/design/80630d2269117cd0.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USd369ab2fc1d608/design/90e3a6a00e0c638a.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USd369ab2fc1d608/design/2bdd46ecd8bb7c3a.jpeg"
    ],
    precioBase: 315,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 218,
      horas: 4.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "exhibidor",
      "niveles",
      "tienda"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2822595#profileId-773387173",
      autor: "RJ",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 470,
    nombre: "Comedero minimalista para pájaros",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Comedero de una sola pieza.",
    descripcionDetallada: "Comedero para pájaros minimalista, impreso en una sola pieza.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/DSM00000002340285/design/35a2ddf19285c89c.png",
      "https://makerworld.bblmw.com/makerworld/model/USc8d25486b35e59/596119487/instance/a8e3a0e3f3af94e5.png"
    ],
    precioBase: 200,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 111,
      horas: 4.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "pajaros",
      "comedero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2340285#profileId-596119487",
      autor: "Mati119922",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 471,
    nombre: "Semillero de autorriego",
    categoria: "Macetas y Jardín",
    descripcionCorta: "Germina semillas sin preocuparte.",
    descripcionDetallada: "Semillero con autorriego para empezar tus plantas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6c462d196a7bcc/design/2024-03-09_1e1c8dc46274f.png",
      "https://makerworld.bblmw.com/makerworld/model/US6c462d196a7bcc/design/2024-03-09_7d043387bc25d.png",
      "https://makerworld.bblmw.com/makerworld/model/US6c462d196a7bcc/design/2024-03-09_a6ade1d63a128.png",
      "https://makerworld.bblmw.com/makerworld/model/US6c462d196a7bcc/design/2024-03-09_c20f18333e7ba.png",
      "https://makerworld.bblmw.com/makerworld/model/US6c462d196a7bcc/design/2024-03-09_7e8dadaa48a2c.png"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 197,
      horas: 12.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "semillero",
      "huerto"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/241212#profileId-57559543",
      autor: "Makefy",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 194,
    nombre: "Cortador de galletas hombre de jengibre",
    categoria: "Cocina",
    descripcionCorta: "Cortador clásico para tus galletas.",
    descripcionDetallada: "Cortador de galletas con forma de hombre de jengibre. También hacemos cortadores con letras, logos o figuras: pregunta en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US7d18da13ea3d40/design/2024-12-01_dfc544ecf43bf.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US7d18da13ea3d40/design/2024-12-01_0bc92698de668.jpeg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 11,
      horas: 0.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "galletas",
      "cortador",
      "navidad"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/840138#profileId-167357767",
      autor: "MPdesign",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 195,
    nombre: "Posavasos de panal",
    categoria: "Cocina",
    descripcionCorta: "Posavasos redondo con patrón hexagonal.",
    descripcionDetallada: "Posavasos de patrón de panal en versión delgada, a dos colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf786bbe516b18d/design/2025-02-26_dd4ff639b5fe5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf786bbe516b18d/design/2025-02-26_668883b2ea05c8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf786bbe516b18d/design/2025-02-26_7eb8d1c69247a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf786bbe516b18d/design/2025-02-26_a7bb6c9e2dc52.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf786bbe516b18d/design/2025-02-26_183ce0fcd45b8.jpg"
    ],
    precioBase: 100,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 46,
      horas: 2.3,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "posavasos",
      "cocina",
      "hexagono",
      "hogar"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1152962#profileId-237605578",
      autor: "Anders Gustavsson",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 531,
    nombre: "Especiero",
    categoria: "Cocina",
    descripcionCorta: "Organizador de especias.",
    descripcionDetallada: "Especiero para tener tus especias ordenadas y a la mano.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US8a4ba6d2e2c549/design/2025-04-09_4a7c87e31cd3d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8a4ba6d2e2c549/design/2025-04-09_3591f8b0777f08.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8a4ba6d2e2c549/design/2025-04-09_be9425de3822b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8a4ba6d2e2c549/design/2025-04-09_2f950043bd08e8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8a4ba6d2e2c549/design/2025-04-09_bbb49c36fe29c8.jpg"
    ],
    precioBase: 200,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 130,
      horas: 3.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "especias",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1300164#profileId-278993950",
      autor: "imtocxo",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 532,
    nombre: "Porta utensilios",
    categoria: "Cocina",
    descripcionCorta: "Para cucharas y espátulas.",
    descripcionDetallada: "Porta utensilios de cocina práctico y limpio.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe2fca5a7815553/design/2025-02-14_27ac5149c646d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe2fca5a7815553/design/2025-02-14_8953211fd1585.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe2fca5a7815553/design/2025-02-14_d8edbb258849.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe2fca5a7815553/232949756/instance/2025-02-14_1ff18ea4f7a8c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe2fca5a7815553/232949756/instance/2025-02-14_0ae46c649a21.png"
    ],
    precioBase: 130,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PETG",
      gramos: 65,
      horas: 2.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "utensilios"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1107388#profileId-232949756",
      autor: "UniversalMaker",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 533,
    nombre: "Mini clip para bolsas",
    categoria: "Cocina",
    descripcionCorta: "Cierra tus bolsas de comida.",
    descripcionDetallada: "Mini clip para cerrar bolsas de comida.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US554734a18c1446/design/2025-02-12_0d6396be8318c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US554734a18c1446/design/2025-02-12_7fb80f5bfa1c2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US554734a18c1446/design/2025-02-12_6d6d9b9be674e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US554734a18c1446/design/2025-02-12_72dcb6c01256e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US554734a18c1446/226045161/instance/2025-02-12_0b8206655139c.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 4,
      horas: 0.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "clip",
      "bolsas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1101226#profileId-226045161",
      autor: "fifindr",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 534,
    nombre: "Cuchara embudo",
    categoria: "Cocina",
    descripcionCorta: "Llena botellas sin tirar nada.",
    descripcionDetallada: "Cuchara con conducto para llenar botellas de agua con proteína, café o polvos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US387cefccb3d697/design/2025-05-03_8d088aade62b18.png",
      "https://makerworld.bblmw.com/makerworld/model/US387cefccb3d697/design/2025-05-03_0fff625388a8d8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US387cefccb3d697/design/2025-05-03_86bca8d8ee0ea8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US387cefccb3d697/design/2025-05-03_4d0b25a17a702.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US387cefccb3d697/292544869/instance/2025-05-03_4bdbac5be68f.jpg"
    ],
    precioBase: 255,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 115,
      horas: 6.1,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "cuchara",
      "embudo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1379378#profileId-292544869",
      autor: "Sapo",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 535,
    nombre: "Dispensador de huevos",
    categoria: "Cocina",
    descripcionCorta: "Organiza tus huevos en el refri.",
    descripcionDetallada: "Dispensador de huevos sin pegamento ni soportes.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa6877d6db535e1/design/2024-10-15_0b648f5ee76e7.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa6877d6db535e1/design/2024-10-15_c78caa28bc141.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa6877d6db535e1/design/2024-10-15_6c33c8e612578.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa6877d6db535e1/design/2024-10-15_02692d53ac34b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa6877d6db535e1/design/2024-10-15_33d7a0bb1ae44.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "huevos",
      "refrigerador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/705535#profileId-577989381",
      autor: "3Dbeast",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 536,
    nombre: "Portarrollos de cocina japandi",
    categoria: "Cocina",
    descripcionCorta: "Dispensador de papel de cocina.",
    descripcionDetallada: "Portarrollos de papel de cocina estilo japandi.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US146adb5b110ef3/design/2025-05-26_70b54048ecf5d.png",
      "https://makerworld.bblmw.com/makerworld/model/US146adb5b110ef3/design/2025-05-26_7f74df85e92d58.png",
      "https://makerworld.bblmw.com/makerworld/model/US146adb5b110ef3/design/2025-07-28_e6001ebef9dd08.png",
      "https://makerworld.bblmw.com/makerworld/model/US146adb5b110ef3/design/2025-07-28_585eb229e7527.png",
      "https://makerworld.bblmw.com/makerworld/model/US146adb5b110ef3/design/2025-05-26_cd78a4106e1168.png"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "papel",
      "japandi"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1455387#profileId-364372724",
      autor: "SabreDesign",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 537,
    nombre: "Porta esponja Scrub Daddy",
    categoria: "Cocina",
    descripcionCorta: "Soporte para tu esponja.",
    descripcionDetallada: "Soporte para esponja tipo Scrub Mommy/Daddy.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf35ad8edae94d8/design/2025-04-03_7670e30a2b244.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf35ad8edae94d8/design/2025-04-03_3d6ccb4e899d28.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf35ad8edae94d8/design/2025-04-06_40a61b29dd2e58.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf35ad8edae94d8/design/2025-04-06_e8be09ae0f0f38.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf35ad8edae94d8/design/2025-04-06_ec8ed0ff39eb08.jpg"
    ],
    precioBase: 65,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 37,
      horas: 1.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "esponja"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1282329#profileId-424751639",
      autor: "3D_Designdalarna",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 538,
    nombre: "Taza medidora personalizada",
    categoria: "Cocina",
    descripcionCorta: "Mide la cantidad exacta.",
    descripcionDetallada: "Taza o cuchara medidora con la medida que necesites.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USef10383c12e9aa/design/2024-06-21_1fdbb4eb16ff6.png",
      "https://makerworld.bblmw.com/makerworld/model/USef10383c12e9aa/design/2024-06-21_86d107040d489.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USef10383c12e9aa/129515092/instance/2024-09-26_36c67c1a1a25.jpg"
    ],
    precioBase: 85,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 44,
      horas: 1.5,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "cocina",
      "medidora"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/504520#profileId-129515092",
      autor: "Matthew Ghost",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 539,
    nombre: "Organizador de té",
    categoria: "Cocina",
    descripcionCorta: "Dispensador de sobres de té.",
    descripcionDetallada: "Organizador moderno para sobres de té.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USeb6c81343d6311/design/2025-01-12_669c2c9dbdc52.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USeb6c81343d6311/design/2025-01-12_7dd8edd1165dd8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USeb6c81343d6311/design/2025-01-12_d2a82e842995f8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USeb6c81343d6311/design/2025-01-12_189d859a33a62.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USeb6c81343d6311/200378136/instance/2025-01-12_10930e0c7dd088.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "te",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/984298#profileId-200378136",
      autor: "Deltaprints",
      licencia: "CC BY-NC-ND",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 540,
    nombre: "Abrebotellas lanzador de corcholatas",
    categoria: "Cocina",
    descripcionCorta: "Abre la botella y lanza la corcholata.",
    descripcionDetallada: "Abrebotellas que lanza las corcholatas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf86740b8413939/design/3b01b6fc863aa36b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf86740b8413939/design/3c5f2b6d0e8c34a6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf86740b8413939/design/412a286a907cb4c2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf86740b8413939/design/cf30d59aca9e9f04.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf86740b8413939/design/f017e90330152466.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 20,
      horas: 0.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "abrebotellas",
      "fiesta"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2371807#profileId-614809885",
      autor: "3D Karl",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 541,
    nombre: "Exprimidor de cítricos",
    categoria: "Cocina",
    descripcionCorta: "Exprime limones y naranjas.",
    descripcionDetallada: "Exprimidor de cítricos de estructura robusta.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6e3ad2f366ae1e/design/2025-01-12_c3ff3a87896a88.webp",
      "https://makerworld.bblmw.com/makerworld/model/US6e3ad2f366ae1e/design/2024-03-24_e3210e09986c48.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US6e3ad2f366ae1e/design/2024-03-24_959df30f7c5b08.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US6e3ad2f366ae1e/design/2024-03-24_5fc193866dc528.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US6e3ad2f366ae1e/design/2024-03-24_0b7e1fff9fd51.jpeg"
    ],
    precioBase: 190,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 112,
      horas: 3.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "limon",
      "exprimidor"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/393319#profileId-445147003",
      autor: "Jurdis",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 542,
    nombre: "Organizador de cubiertos ajustable",
    categoria: "Cocina",
    descripcionCorta: "Para cajones de cocina.",
    descripcionDetallada: "Organizador ajustable de cubiertos estilo Gridfinity.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USed696443e94041/design/2024-11-05_b887fcfa1eb1.webp"
    ],
    precioBase: 110,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 75,
      horas: 1.7,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "cubiertos",
      "cajon"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/761606#profileId-150436328",
      autor: "boasist",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 543,
    nombre: "Imán de refrigerador mariposa",
    categoria: "Cocina",
    descripcionCorta: "Mariposa a 3 colores.",
    descripcionDetallada: "Imán de refrigerador con forma de mariposa.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc8c7c381ab2f50/design/2024-07-28_ed9677ebe4c0c.png",
      "https://makerworld.bblmw.com/makerworld/model/USc8c7c381ab2f50/131436159/instance/2024-09-30_9c0165c20fe9b.png",
      "https://makerworld.bblmw.com/makerworld/model/USc8c7c381ab2f50/131436159/instance/2024-07-28_ee95dab366bbc.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PETG",
      gramos: 12,
      horas: 0.9,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "iman",
      "refrigerador",
      "mariposa"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/556761#profileId-131436159",
      autor: "TianFu",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 544,
    nombre: "Organizador de cápsulas de café",
    categoria: "Cocina",
    descripcionCorta: "Torre para cápsulas.",
    descripcionDetallada: "Organizador de cápsulas de café de diseño moderno.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa2c03cb0247a7a/design/2025-05-25_647c56d6081f.png",
      "https://makerworld.bblmw.com/makerworld/model/USa2c03cb0247a7a/design/2025-05-25_bbf91f41d7fd18.png",
      "https://makerworld.bblmw.com/makerworld/model/USa2c03cb0247a7a/design/2025-05-25_cfe00570959bf.png",
      "https://makerworld.bblmw.com/makerworld/model/USa2c03cb0247a7a/design/2025-05-25_b995658cb0d768.png",
      "https://makerworld.bblmw.com/makerworld/model/USa2c03cb0247a7a/design/2025-05-25_d316536476bf5.png"
    ],
    precioBase: 355,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 243,
      horas: 5.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "cafe",
      "capsulas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1452640#profileId-310428207",
      autor: "Deltaprints",
      licencia: "CC BY-NC-ND",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 545,
    nombre: "Abrebotellas",
    categoria: "Cocina",
    descripcionCorta: "Abridor sencillo.",
    descripcionDetallada: "Abrebotellas sencillo y resistente.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6006bd08c30599/design/11f948c69f427174.png",
      "https://makerworld.bblmw.com/makerworld/model/US6006bd08c30599/631265925/instance/9c6b46b61c867314.png",
      "https://makerworld.bblmw.com/makerworld/model/US6006bd08c30599/631265925/instance/3d1b6817ed047e14.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 17,
      horas: 0.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "abrebotellas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2434946#profileId-631265925",
      autor: "DDDP",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 546,
    nombre: "Embudo con salida de aire",
    categoria: "Cocina",
    descripcionCorta: "Embudo en 3 tamaños.",
    descripcionDetallada: "Embudo rápido con salida de aire, en 3 tamaños.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US2de717080e2d97/design/2024-03-28_ec9da5c4abda5.png",
      "https://makerworld.bblmw.com/makerworld/model/US2de717080e2d97/design/2024-03-28_7ee0e22c6a55c.png",
      "https://makerworld.bblmw.com/makerworld/model/US2de717080e2d97/design/2024-03-28_479fabc5f606f.png",
      "https://makerworld.bblmw.com/makerworld/model/US2de717080e2d97/design/2024-03-28_b9c42efaf6753.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2de717080e2d97/62938002/instance/2024-03-28_ec83f1ba7c623.jpg"
    ],
    precioBase: 95,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 49,
      horas: 2.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "embudo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/400324#profileId-62939794",
      autor: "ngprint",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 547,
    nombre: "Secador de biberones",
    categoria: "Cocina",
    descripcionCorta: "Escurre biberones.",
    descripcionDetallada: "Secador para biberones y vasitos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US43892065061970/design/2025-05-10_f06511d0611dc8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US43892065061970/design/2025-05-10_d9d4d28054276.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US43892065061970/design/2025-05-10_52e5a73df403b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US43892065061970/design/2025-05-10_e5665adcaed5d8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US43892065061970/design/2025-05-10_8c359f9484183.jpg"
    ],
    precioBase: 65,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 42,
      horas: 1.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "bebe",
      "biberones",
      "cocina"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1403815#profileId-298012898",
      autor: "fifindr",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 548,
    nombre: "Cortadores y sellos de galletas Bluey",
    categoria: "Cocina",
    descripcionCorta: "Galletas de Bluey y su familia.",
    descripcionDetallada: "Cortadores y sellos de galletas de Bluey. Ideales para fiestas infantiles.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US758f9ca8c2df68/design/2023-10-15_44e81856b7148.png"
    ],
    precioBase: 145,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 82,
      horas: 3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "galletas",
      "bluey",
      "reposteria"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/41575#profileId-26435670",
      autor: "Bean Eating Cookies",
      licencia: "CC BY-SA",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito al autor (compartir igual). Usa una marca o personaje de terceros: Bluey (Ludo Studio / BBC)."
    },
    activo: true
  },
  {
    id: 549,
    nombre: "Atril para recetas",
    categoria: "Cocina",
    descripcionCorta: "Sostiene tu libro de cocina.",
    descripcionDetallada: "Soporte para libro de cocina o recetas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf99855ddfd9486/design/2024-11-20_a0a58253c468e.png",
      "https://makerworld.bblmw.com/makerworld/model/USf99855ddfd9486/design/2024-11-20_350facce13981.png",
      "https://makerworld.bblmw.com/makerworld/model/USf99855ddfd9486/design/2024-11-20_f5daa264ed4db.png",
      "https://makerworld.bblmw.com/makerworld/model/USf99855ddfd9486/design/2024-11-20_561c6f2d9203a.png",
      "https://makerworld.bblmw.com/makerworld/model/USf99855ddfd9486/design/2024-11-20_7f6219b9490a.png"
    ],
    precioBase: 360,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 234,
      horas: 6.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "recetas",
      "atril"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/804747#profileId-159360276",
      autor: "Andy_Designs",
      licencia: "MakerWorld Exclusive License",
      permiteVenta: false,
      notaLicencia: "Prohíbe el uso comercial."
    },
    activo: true
  },
  {
    id: 550,
    nombre: "Organizador de alacena y refri",
    categoria: "Cocina",
    descripcionCorta: "Contenedor con asa.",
    descripcionDetallada: "Organizador profundo con asa para alacena o refrigerador.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US3c9e0000686a61/design/b0c65a3f5a7fa700.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3c9e0000686a61/design/8bd550a5968eb8b7.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3c9e0000686a61/design/4df548553071bc56.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3c9e0000686a61/design/162d968cfc005156.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3c9e0000686a61/design/ea205d2616fbfa68.jpg"
    ],
    precioBase: 270,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 142,
      horas: 6.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "alacena",
      "refrigerador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/3191169#profileId-963019106",
      autor: "23",
      licencia: "MakerWorld Exclusive License",
      permiteVenta: false,
      notaLicencia: "Prohíbe el uso comercial."
    },
    activo: true
  },
  {
    id: 551,
    nombre: "Porta utensilios acanalado",
    categoria: "Cocina",
    descripcionCorta: "Contenedor moderno para cubiertos.",
    descripcionDetallada: "Contenedor acanalado para utensilios de cocina y cubiertos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US805a3a809f02b5/design/2024-11-16_c2e2bf051c3568.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US805a3a809f02b5/design/2024-11-01_6caf4e50aed438.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US805a3a809f02b5/design/2024-11-01_a1170dd92e2c5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US805a3a809f02b5/design/2024-11-01_cdc5e2cbf06558.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US805a3a809f02b5/148034781/instance/2024-11-01_bc0098b89fee6.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "utensilios",
      "acanalado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/749168#profileId-148034781",
      autor: "Deltaprints",
      licencia: "CC BY-NC-ND",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 552,
    nombre: "Clips para bolsas en varios tamaños",
    categoria: "Cocina",
    descripcionCorta: "Set de clips.",
    descripcionDetallada: "Clips para cerrar bolsas en diferentes tamaños.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USaf36245ac29900/design/2024-11-23_2b4e5a32544de.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USaf36245ac29900/design/2024-11-23_df485f7b587b5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USaf36245ac29900/design/2024-11-23_e467b88e4d3c2.jpg"
    ],
    precioBase: 195,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 109,
      horas: 4.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "clips",
      "bolsas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/813980#profileId-167092105",
      autor: "StefB",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 553,
    nombre: "Cucharas medidoras de 3 a 10 g",
    categoria: "Cocina",
    descripcionCorta: "Set para creatina o proteína.",
    descripcionDetallada: "Set de cucharas medidoras de 3 a 10 g para creatina, proteína o especias.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US49c7e25e44ead7/design/2024-08-28_5451ed4884085.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US49c7e25e44ead7/design/2024-08-28_713e2122abce9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US49c7e25e44ead7/design/2024-08-28_d28781819e876.jpg"
    ],
    precioBase: 155,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 83,
      horas: 2.8,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "cucharas",
      "gym",
      "medidoras"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/610018#profileId-561388583",
      autor: "custom3dmodels",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 554,
    nombre: "Dispensador de huevos compacto",
    categoria: "Cocina",
    descripcionCorta: "Para espacios reducidos.",
    descripcionDetallada: "Dispensador de huevos compacto para espacios reducidos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US793c2b7f8381d2/design/e1f165c5-712a-455a-b7ab-dbce69cd9bca.webp",
      "https://makerworld.bblmw.com/makerworld/model/US793c2b7f8381d2/design/8b8907f1-acb8-4e0e-9439-dd37820e12bd.webp",
      "https://makerworld.bblmw.com/makerworld/model/US793c2b7f8381d2/design/2024-10-07_5d2864b6512fb.png",
      "https://makerworld.bblmw.com/makerworld/model/US793c2b7f8381d2/design/2024-10-07_532661e55f15c.png",
      "https://makerworld.bblmw.com/makerworld/model/US793c2b7f8381d2/design/2024-10-07_5526919dfd14.png"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cocina",
      "huevos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/659796#profileId-134834821",
      autor: "special man",
      licencia: "CC BY",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito al autor."
    },
    activo: true
  },
  {
    id: 16,
    nombre: "Portabrochas de maquillaje con moño",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Organizador de brochas en forma de moño, 15 cm.",
    descripcionDetallada: "Portabrochas con forma de elegante moño, de curvas suaves y estilo femenino. Organiza brochas de maquillaje y esenciales de belleza mientras decora tu tocador o espacio de trabajo. Mide 15 cm.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US33cdfa57f76b36/design/911453caa08627a7.png",
      "https://makerworld.bblmw.com/makerworld/model/US33cdfa57f76b36/design/70938890f566303d.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US33cdfa57f76b36/778559848/instance/ed4385ede99ded5c.jpeg"
    ],
    precioBase: 300,
    escalaDescuento: null,
    tamano: "15 cm",
    impresion: {
      material: "PLA",
      gramos: 186,
      horas: 5.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maquillaje",
      "brochas",
      "mono",
      "tocador",
      "belleza",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2834454#profileId-3158841",
      autor: "Pappis320",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe la venta. El autor ofrece licencia comercial por membresía (~3 USD/mes)."
    },
    activo: true
  },
  {
    id: 187,
    nombre: "Cajas organizadoras apilables BUCKETS",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Set de cajas apilables de boca ancha.",
    descripcionDetallada: "Cajas organizadoras apilables con aberturas amplias para tomar piezas fácilmente. Para taller, escritorio o cocina.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US4583c074d9425a/design/2025-08-19_eed0cfdef379c8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4583c074d9425a/design/2025-08-19_7b3c9bd1bb2d3.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4583c074d9425a/design/2025-08-19_6c9e961de9898.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4583c074d9425a/design/2025-08-19_7bd1291893f56.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4583c074d9425a/design/2025-08-19_eb2c57f6a5f898.jpg"
    ],
    precioBase: 465,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 266,
      horas: 7.8,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "organizador",
      "cajas",
      "apilable",
      "taller"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1714179#profileId-384662040",
      autor: "SMACKMAX",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 188,
    nombre: "Portalápices Asanoha",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Organizador hexagonal de 9 compartimentos.",
    descripcionDetallada: "Portalápices hexagonal estilo kumiko con 9 compartimentos para plumas, tijeras y papelería.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US11e61d1676b79d/design/2025-03-30_08fa289d1b12.png",
      "https://makerworld.bblmw.com/makerworld/model/US11e61d1676b79d/design/2025-03-29_b8d885299fe36.png",
      "https://makerworld.bblmw.com/makerworld/model/US11e61d1676b79d/design/2025-03-29_8670a703a42e6.png",
      "https://makerworld.bblmw.com/makerworld/model/US11e61d1676b79d/design/2025-03-29_84629f7595444.png",
      "https://makerworld.bblmw.com/makerworld/model/US11e61d1676b79d/design/2025-03-29_aa67c5b1e628f.png"
    ],
    precioBase: 315,
    escalaDescuento: null,
    tamano: "11 × 9.5 cm",
    impresion: {
      material: "PLA",
      gramos: 157,
      horas: 7.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "escritorio",
      "portalapices",
      "japones",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1258888#profileId-262113984",
      autor: "Meyui",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 189,
    nombre: "Organizador de escritorio con Post-it",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Plumas y notas adhesivas en un solo lugar.",
    descripcionDetallada: "Organizador minimalista para plumas, plumones y bloc de notas adhesivas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US99bbd87f8a4684/design/2025-04-18_0ff6022175bab8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US99bbd87f8a4684/design/2025-04-18_26624bdfa75298.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US99bbd87f8a4684/design/2025-04-18_1e99240f672c5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US99bbd87f8a4684/design/2025-04-18_39d2d5d02032a8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US99bbd87f8a4684/design/2025-04-18_81362f08d0d178.jpg"
    ],
    precioBase: 150,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 88,
      horas: 3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "escritorio",
      "post-it",
      "organizador",
      "oficina"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1333643#profileId-279826539",
      autor: "ARTICAT Realm",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 191,
    nombre: "Estuche para memorias SD y USB",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Guarda 12 microSD, 6 SD y 2 USB.",
    descripcionDetallada: "Estuche con cierre para transportar 12 tarjetas microSD, 6 SD y 2 memorias USB.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf549708ca74777/design/2024-05-29_b67d383b5c5fd.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf549708ca74777/design/2024-05-29_f52b3fe8a80c5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf549708ca74777/design/2024-05-29_8483cd8d55a44.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf549708ca74777/design/2024-05-29_f0eb830286932.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf549708ca74777/design/2024-05-29_27327ea6b4144.jpg"
    ],
    precioBase: 135,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PETG",
      gramos: 62,
      horas: 2.5,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "sd",
      "usb",
      "memoria",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/479663#profileId-82642797",
      autor: "Rugg",
      licencia: "CC0",
      permiteVenta: true,
      notaLicencia: "Dominio público: uso comercial libre."
    },
    activo: true
  },
  {
    id: 192,
    nombre: "Enrollador de cables",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Mantén tus cables sin nudos.",
    descripcionDetallada: "Enrollador para guardar cables de audífonos o cargadores sin enredos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USace2765331880a/design/2025-06-12_0409decde4e838.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USace2765331880a/design/2025-06-12_b913e2253cadf.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USace2765331880a/design/2025-06-12_28e93583ef97.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USace2765331880a/design/2025-06-12_86b366dbf5141.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USace2765331880a/design/2025-06-12_8c2939c85ecbf8.jpg"
    ],
    precioBase: 180,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 101,
      horas: 3.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cables",
      "organizador",
      "viaje"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1509676#profileId-684019714",
      autor: "KL Worx",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 193,
    nombre: "Sujetacables de escritorio",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Mantiene los cargadores siempre a la mano.",
    descripcionDetallada: "Sujetacables que se pega al escritorio con cinta doble cara y mantiene tus cargadores en su lugar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USbcb92501d6008e/design/2025-01-17_ff9eb295f7f8a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbcb92501d6008e/design/2025-01-17_ff6043e163a31.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbcb92501d6008e/design/2025-01-17_f32cc6a623c4e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbcb92501d6008e/252675305/instance/2025-01-17_3pd50a5op7oj.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbcb92501d6008e/252675305/instance/2025-01-17_7f24c436587bc.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 4,
      horas: 0.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cables",
      "escritorio",
      "cargador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1003508#profileId-252675305",
      autor: "VC_design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 196,
    nombre: "Portalápices sudadera",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Portaplumas con forma de sudadera con capucha.",
    descripcionDetallada: "Portalápices con forma de sudadera con capucha. Divertido y original para tu escritorio.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe09eb248eee30d/design/2025-12-25_d7f907cb0d83c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe09eb248eee30d/design/2025-12-25_be428f15497c5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe09eb248eee30d/design/154ed70209a3b55d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe09eb248eee30d/535744004/instance/2025-12-04_2bf670056bd37.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe09eb248eee30d/535744004/instance/2025-12-25_54eebb5ef4e34.jpg"
    ],
    precioBase: 170,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 95,
      horas: 3.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "escritorio",
      "portalapices",
      "original"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2074420#profileId-535744004",
      autor: "Morganja",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 197,
    nombre: "Portaplumas Caballero medieval",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Caballero arrodillado que ofrece tu pluma.",
    descripcionDetallada: "Portaplumas con un caballero medieval arrodillado que sostiene una pluma. Mide unos 11.5 cm.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US5db9c285cae834/design/2025-03-16_6a084b1653338.png",
      "https://makerworld.bblmw.com/makerworld/model/US5db9c285cae834/design/2025-03-16_48e50e5e2330b.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US5db9c285cae834/design/2025-03-16_03c1d5942d008.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US5db9c285cae834/design/2025-03-16_068fdfdb2c5e.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US5db9c285cae834/design/2025-03-16_4ba31f07ad0b.jpeg"
    ],
    precioBase: 175,
    escalaDescuento: null,
    tamano: "11.5 cm de alto",
    impresion: {
      material: "PLA",
      gramos: 77,
      horas: 4.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "escritorio",
      "caballero",
      "medieval",
      "pluma"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1206023#profileId-276086609",
      autor: "Sny44",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 415,
    nombre: "Estuche para hisopos",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Estuche de viaje para cotonetes.",
    descripcionDetallada: "Estuche de viaje para hisopos de algodón.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US3b1f12f58ee47d/design/2025-11-02_b44e557edcb2b8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US3b1f12f58ee47d/design/2025-01-20_5e1bb14e9f1fe.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US3b1f12f58ee47d/design/2025-01-20_36cfde82281a48.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US3b1f12f58ee47d/design/2025-01-17_8081208319ca68.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US3b1f12f58ee47d/design/2025-01-17_eec61395b32578.jpeg"
    ],
    precioBase: 50,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 28,
      horas: 1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "bano",
      "viaje",
      "estuche"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1005131#profileId-204705194",
      autor: "practical3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 417,
    nombre: "Sujetalibros resistente",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Mantiene tus libros en orden.",
    descripcionDetallada: "Sujetalibros resistente y estable.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa57e599162d5a4/design/2025-09-30_17116bc49b8a2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa57e599162d5a4/design/2025-09-30_682ac6a27f11a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa57e599162d5a4/design/2025-09-15_dab94aa7b5bb7.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa57e599162d5a4/design/2025-09-15_4a8b921b9e59e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa57e599162d5a4/design/2025-09-15_8ab6e4f86123c.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PETG",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "libros",
      "sujetalibros"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1796202#profileId-411697532",
      autor: "百川造物",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 426,
    nombre: "Soporte de lentes para visera del auto",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Lentes siempre a la mano en el auto.",
    descripcionDetallada: "Soporte minimalista que se engancha a la visera del auto para guardar lentes de sol.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USac64afe19c97ca/design/4f5d8784af804d0c.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USac64afe19c97ca/design/ab2581b21f6ab7c6.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USac64afe19c97ca/design/2fe7e472701fe7b8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USac64afe19c97ca/design/496e26815f8fb9d9.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USac64afe19c97ca/design/915b4adbe0793aa2.jpeg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 14,
      horas: 0.7,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "auto",
      "lentes",
      "visera"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2558189#profileId-673337014",
      autor: "formastampa",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 453,
    nombre: "Boquilla para aspiradora",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Punta redonda o plana a la medida.",
    descripcionDetallada: "Boquilla para aspiradora hecha a la medida de tu modelo. Indica el diámetro en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc046d7b5505a3e/design/c7b6f608bbaad778.png",
      "https://makerworld.bblmw.com/makerworld/model/USc046d7b5505a3e/design/a37e03c3ea295d51.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc046d7b5505a3e/design/31c624b3e75e0f51.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc046d7b5505a3e/design/6c6aa6ed9f473c3a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc046d7b5505a3e/design/2bbd8f3f889281d8.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 19,
      horas: 0.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "aspiradora",
      "limpieza"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2488033#profileId-784719403",
      autor: "John_M",
      licencia: "MakerWorld Exclusive License",
      permiteVenta: false,
      notaLicencia: "Prohíbe el uso comercial."
    },
    activo: true
  },
  {
    id: 496,
    nombre: "Caja de almacenamiento moderna",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Caja con diseño moderno.",
    descripcionDetallada: "Caja de almacenamiento moderna para escritorio, baño o closet.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6f02cf88b3b747/design/2025-04-16_46a5acdcb5b5d8.png",
      "https://makerworld.bblmw.com/makerworld/model/US6f02cf88b3b747/design/2026-01-12_eed702d4e774a8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6f02cf88b3b747/551108276/instance/2026-01-05_650adcb4c0fd9.jpg"
    ],
    precioBase: 145,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 83,
      horas: 3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "caja",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1327732#profileId-551108276",
      autor: "Rob",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 497,
    nombre: "Base Gridfinity a la medida",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Rejilla modular para cajones.",
    descripcionDetallada: "Base Gridfinity del tamaño de tu cajón para organizar con contenedores modulares. Indica medidas en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb17c444dc3ae76/design/2024-10-13_07425d9b8a411.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb17c444dc3ae76/design/2024-10-13_e8f3ee4b7ba01.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb17c444dc3ae76/design/2024-10-13_148b6e39e4c7e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb17c444dc3ae76/design/2024-10-13_f6afd4534a374.jpg"
    ],
    precioBase: 180,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "gridfinity",
      "cajon",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/700948#profileId-137893655",
      autor: "Schmidsfeld",
      licencia: "CC BY-NC",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 498,
    nombre: "Set de vasos para cepillos de dientes",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Dos vasos acanalados con base.",
    descripcionDetallada: "Set de dos vasos acanalados para cepillos de dientes con base a juego.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US57eb8de4b7ad21/design/2024-11-16_941b5395e8f9e8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US57eb8de4b7ad21/design/2024-10-29_d25a438183b748.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US57eb8de4b7ad21/design/2024-10-29_339b623e40469.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US57eb8de4b7ad21/design/2024-10-29_1df6cd6787a2b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US57eb8de4b7ad21/146406493/instance/2024-10-29_98b78f7ca8abf.jpg"
    ],
    precioBase: 235,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 147,
      horas: 4.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "bano",
      "cepillos",
      "acanalado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/741363#profileId-146406493",
      autor: "Deltaprints",
      licencia: "CC BY-NC-ND",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 499,
    nombre: "Jabonera autodrenante",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Mantiene tu jabón seco.",
    descripcionDetallada: "Jabonera elegante que escurre el agua y mantiene el jabón seco.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US10d8219360b102/design/2025-03-16_10cf82433bc798.png",
      "https://makerworld.bblmw.com/makerworld/model/US10d8219360b102/design/2025-03-16_47e04b5ca36d2.png",
      "https://makerworld.bblmw.com/makerworld/model/US10d8219360b102/design/2025-03-16_3abcdf388a5628.png",
      "https://makerworld.bblmw.com/makerworld/model/US10d8219360b102/design/2025-09-04_daed5d08028df8.png",
      "https://makerworld.bblmw.com/makerworld/model/US10d8219360b102/design/2025-03-16_9b7c6e22279a2.png"
    ],
    precioBase: 90,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 36,
      horas: 2.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "bano",
      "jabonera"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1199126#profileId-305427401",
      autor: "jorm",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 500,
    nombre: "Plato de burbujas",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Platito para joyas o llaves.",
    descripcionDetallada: "Plato minimalista para guardar joyas, llaves o objetos pequeños.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US5bb9f5c35fcc8f/design/5d2bf4a2234c73c6.png",
      "https://makerworld.bblmw.com/makerworld/model/US5bb9f5c35fcc8f/design/ffaec7f595e026b7.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5bb9f5c35fcc8f/586226770/instance/0960de174fb0c802.jpg"
    ],
    precioBase: 120,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 72,
      horas: 2.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "plato",
      "joyas",
      "llaves"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2312272#profileId-586226770",
      autor: "BAUGR STUDIO",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 501,
    nombre: "Soporte para controles de TV",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Para 1, 2 o 3 controles.",
    descripcionDetallada: "Soporte moderno para guardar controles remotos de TV.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa43e21d0b580bf/design/2024-10-06_a048aa2a2e9098.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa43e21d0b580bf/design/2024-10-06_e9d39e835c2348.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USa43e21d0b580bf/design/2024-10-06_17d1440979bb28.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USa43e21d0b580bf/design/6a4aab54dee4a53f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa43e21d0b580bf/design/2024-10-06_acd6945361b838.jpeg"
    ],
    precioBase: 180,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 124,
      horas: 2.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "controles",
      "sala",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/686062#profileId-134706115",
      autor: "JB Custom Designs",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 502,
    nombre: "Porta llaves con ganchos plegables",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Ganchos que se pliegan.",
    descripcionDetallada: "Porta llaves de pared con ganchos plegables impresos en su lugar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USd41cc4274fb953/design/2025-05-17_ff47c40975d8e.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USd41cc4274fb953/303509788/instance/2025-05-17_36befab54cba88.png"
    ],
    precioBase: 60,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 33,
      horas: 1.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "llaves",
      "pared",
      "ganchos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1424869#profileId-303509788",
      autor: "Birz",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 503,
    nombre: "Perchero de pared modular",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Ganchos intercambiables.",
    descripcionDetallada: "Soporte de pared con ganchos intercambiables para colgar lo que necesites.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US63bef789e4616c/design/2024-11-25_d55484004d6f18.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US63bef789e4616c/design/2025-05-16_a2e5ac33741a1.png",
      "https://makerworld.bblmw.com/makerworld/model/US63bef789e4616c/394327378/instance/2024-11-26_feb8d35cc2326.png",
      "https://makerworld.bblmw.com/makerworld/model/US63bef789e4616c/394327378/instance/2025-08-29_6c39593d35cc4.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US63bef789e4616c/394327378/instance/2025-08-29_2d3b7a8ed50468.jpeg"
    ],
    precioBase: 135,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 50,
      horas: 4.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "perchero",
      "ganchos",
      "pared"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/822400#profileId-394327378",
      autor: "PrintManufaktur",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 504,
    nombre: "Escuadras en L para muebles",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Refuerza esquinas de muebles.",
    descripcionDetallada: "Escuadras en L personalizables para reforzar muebles y estantes.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USbbc2278d7a808/design/2024-08-13_6ba347c080b95.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbbc2278d7a808/110701381/instance/2024-08-13_5ad0b0663fe8f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbbc2278d7a808/110701381/instance/plate_1.png"
    ],
    precioBase: 185,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PETG",
      gramos: 91,
      horas: 4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "escuadra",
      "muebles",
      "herramienta"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/586289#profileId-110701381",
      autor: "Matthew Ghost",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 505,
    nombre: "Panel perforado Skadis PRO",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Tablero para organizar herramientas.",
    descripcionDetallada: "Panel perforado minimalista para organizar herramientas o accesorios.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US30776145590cae/design/2025-11-25_8d58b11e1605d8.png",
      "https://makerworld.bblmw.com/makerworld/model/US30776145590cae/design/2025-11-25_a1c9d01c49261.png",
      "https://makerworld.bblmw.com/makerworld/model/US30776145590cae/design/2025-11-27_809399a1ec53f.png"
    ],
    precioBase: 370,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 246,
      horas: 6.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "panel",
      "taller",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2048355#profileId-493521223",
      autor: "Stag 3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 506,
    nombre: "Organizador de pilas",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Caja para pilas AA y AAA.",
    descripcionDetallada: "Organizador apilable para pilas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US593ff6b474fb36/design/2025-03-14_72cc6e1cddd47.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US593ff6b474fb36/design/2025-03-14_e52371cd86ef48.jpeg"
    ],
    precioBase: 135,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 71,
      horas: 3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "pilas",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1209640#profileId-250563396",
      autor: "JS Ball python",
      licencia: "CC0",
      permiteVenta: true,
      notaLicencia: "Dominio público: uso comercial libre."
    },
    activo: true
  },
  {
    id: 507,
    nombre: "Contenedor con tapa de rosca",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Frasquito con tapa para piezas pequeñas.",
    descripcionDetallada: "Contenedor con tapa de rosca para tornillos, cuentas o piezas pequeñas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US42bba0e2885f73/design/6ac0d3b3e4301f75.png",
      "https://makerworld.bblmw.com/makerworld/model/US42bba0e2885f73/design/cb966c37519e29df.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US42bba0e2885f73/design/b773e96795679d84.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US42bba0e2885f73/design/daed01709edd0151.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US42bba0e2885f73/design/a41bf3580be98dd0.jpeg"
    ],
    precioBase: 90,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 35,
      horas: 2.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "contenedor",
      "tornillos",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2726071#profileId-734712210",
      autor: "Ben_3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 508,
    nombre: "Organizador de maquillaje",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Para brochas, labiales y más.",
    descripcionDetallada: "Organizador de maquillaje y escritorio de bordes suaves.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/UScf296702a5b7e/design/e44668941557891a.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/UScf296702a5b7e/design/c8f9f321c0d0e880.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/UScf296702a5b7e/design/2026-01-11_25d4e84c894878.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/UScf296702a5b7e/design/793e04f95ac25b28.webp",
      "https://makerworld.bblmw.com/makerworld/model/UScf296702a5b7e/design/f59576679fdc28f3.jpeg"
    ],
    precioBase: 230,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 165,
      horas: 3.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maquillaje",
      "organizador",
      "tocador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2233514#profileId-913680014",
      autor: "3d.tresd",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 509,
    nombre: "Organizador de ligas para el cabello",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Guarda tus coletas.",
    descripcionDetallada: "Soporte compacto para guardar ligas para el cabello.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US69442113793499/design/2025-12-11_2648dbf0a87158.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US69442113793499/design/2025-12-11_903ea4d409f06.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US69442113793499/design/2025-12-11_d4dbcadb3e0818.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US69442113793499/design/2025-12-11_b61d0aaccc1a5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US69442113793499/design/2025-12-11_0d4cec89ba6bc.jpg"
    ],
    precioBase: 55,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 35,
      horas: 0.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cabello",
      "ligas",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2103952#profileId-514313482",
      autor: "Anton",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 510,
    nombre: "Bandeja de papel apilable",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Para hojas carta y A4.",
    descripcionDetallada: "Bandeja de papel de diseño, apilable, para hojas tamaño carta y A4.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US10c2b870b36ed6/design/2025-03-04_00ba81e5c1f6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US10c2b870b36ed6/design/2025-03-04_fa421c9ed5435.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US10c2b870b36ed6/design/2025-03-04_1c7eedf981dcc.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US10c2b870b36ed6/design/2025-03-04_34c4ac0ba72e9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US10c2b870b36ed6/design/2025-03-04_cad97cd5cfd3e.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "oficina",
      "papel",
      "bandeja"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1174856#profileId-242422481",
      autor: "Surrey Homeware",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 511,
    nombre: "Zapatero de pared",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Repisa compacta para zapatos.",
    descripcionDetallada: "Zapatero de pared compacto que ahorra espacio.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US84e4784439f5ca/design/2025-02-08_e41d0c6df1e51.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US84e4784439f5ca/design/2025-02-08_e93d418cb6186.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US84e4784439f5ca/design/2025-02-08_dc0ff2aec3867.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US84e4784439f5ca/design/2025-02-08_73a540eb19957.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US84e4784439f5ca/design/2025-02-08_da267bde29a4a.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "zapatos",
      "pared",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1087625#profileId-279056801",
      autor: "Uzziel3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 512,
    nombre: "Gancho de pared reforzado",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Gancho de alta resistencia.",
    descripcionDetallada: "Gancho de pared de alta resistencia para uso general.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USbfc54ce9614db/design/5f629403112abacf.png",
      "https://makerworld.bblmw.com/makerworld/model/USbfc54ce9614db/design/7084bde5c04ee483.png",
      "https://makerworld.bblmw.com/makerworld/model/USbfc54ce9614db/design/8ec56c59fb408881.png",
      "https://makerworld.bblmw.com/makerworld/model/USbfc54ce9614db/design/4f1ae707bc7c0ff0.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USbfc54ce9614db/design/453c417a51047c02.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 6,
      horas: 0.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "gancho",
      "pared"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2292319#profileId-662902998",
      autor: "FITBODYdotcom",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 513,
    nombre: "Masky, porta cinta",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Amiguito que corta la cinta.",
    descripcionDetallada: "Masky, un pequeño dispensador que se engancha al rollo de cinta y ayuda a cortarla. Precio por pieza.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9c87051ce163/design/2026-01-10_8a7dd8142a5838.png",
      "https://makerworld.bblmw.com/makerworld/model/US9c87051ce163/design/2025-03-22_6ea817d2271a28.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9c87051ce163/design/2025-03-22_0742c0dc3a7cd.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9c87051ce163/603570201/instance/2025-08-10_ce1fdffa44126.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9c87051ce163/603570201/instance/2025-08-10_a9520a483099a.jpg"
    ],
    precioBase: 60,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cinta",
      "oficina",
      "original"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1235623#profileId-603570201",
      autor: "npopson",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 514,
    nombre: "Organizador de escritorio inclinado",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Plumas y papelería a la mano.",
    descripcionDetallada: "Organizador de escritorio con compartimentos inclinados para plumas y papelería.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US93ba844e6af9a4/design/2025-12-16_1695141694a54.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US93ba844e6af9a4/design/2025-12-11_8a0fd4de6447e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US93ba844e6af9a4/design/2025-12-11_cd7d1cfa70cd2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US93ba844e6af9a4/design/2025-12-11_2ba226d9a19ae.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US93ba844e6af9a4/design/2025-12-11_32b6baab500198.jpg"
    ],
    precioBase: 380,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "escritorio",
      "organizador",
      "plumas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2102633#profileId-513783391",
      autor: "windko 3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 515,
    nombre: "Clip de cables para borde de mesa",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Cables siempre a la mano.",
    descripcionDetallada: "Abrazadera que se fija al borde de la mesa y sostiene los cables.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US7c2432417fd573/design/2024-12-14_5e494a5ed501f8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7c2432417fd573/design/2024-12-14_71f10054d06b58.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7c2432417fd573/179291825/instance/2024-12-14_dcf7d67774fe18.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US7c2432417fd573/179291825/instance/2024-12-15_30497a8ca80bc8.jpg"
    ],
    precioBase: 60,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 31,
      horas: 1.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "cables",
      "escritorio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/878180#profileId-179291825",
      autor: "CatMaster Lab",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 516,
    nombre: "Caja con tapa deslizante a la medida",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Caja personalizada en tamaño.",
    descripcionDetallada: "Caja con tapa deslizante hecha a la medida que necesites. Indica medidas en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc65e88b09e59cc/design/2025-08-15_a5985590f72f78.png",
      "https://makerworld.bblmw.com/makerworld/model/USc65e88b09e59cc/design/2025-08-14_fb3ea2654b9f98.png",
      "https://makerworld.bblmw.com/makerworld/model/USc65e88b09e59cc/design/2025-08-14_74bef687762998.png",
      "https://makerworld.bblmw.com/makerworld/model/USc65e88b09e59cc/design/2025-08-14_1b20d929419428.png",
      "https://makerworld.bblmw.com/makerworld/model/USc65e88b09e59cc/385243469/instance/2025-08-14_df93e07dafb208.png"
    ],
    precioBase: 70,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 33,
      horas: 1.4,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "caja",
      "personalizado",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1699192#profileId-385243469",
      autor: "TuTu",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 517,
    nombre: "Perchero autoblocante",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Perchero impreso en una pieza.",
    descripcionDetallada: "Perchero autobloqueable impreso en una sola pieza.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US7ea63c10a0d61/design/2025-01-11_5ce5dca9bbdb6.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US7ea63c10a0d61/design/2025-01-11_29da85c9d2136.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US7ea63c10a0d61/design/2025-01-11_0e796118ecd7e.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US7ea63c10a0d61/design/2025-01-11_a6901416731dc.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US7ea63c10a0d61/design/2025-01-11_c0fa7c46d4faf.jpeg"
    ],
    precioBase: 345,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 195,
      horas: 5.9,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "perchero",
      "ropa"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/978372#profileId-221559639",
      autor: "Birz",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 518,
    nombre: "Soporte para lentes",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Guarda y exhibe tus lentes.",
    descripcionDetallada: "Soporte para lentes o gafas de sol.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc826a9bb76cf50/design/2025-06-29_a9c8af8da6f7.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc826a9bb76cf50/design/2025-06-29_84c1650074a64.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc826a9bb76cf50/design/2025-06-29_f1da8eb61fc348.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc826a9bb76cf50/design/2025-06-29_a0e933abe5c558.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc826a9bb76cf50/design/2025-06-29_b916dbd04a9cf8.jpg"
    ],
    precioBase: 425,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 240,
      horas: 7.4,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "lentes",
      "gafas",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1561862#profileId-339896181",
      autor: "KL Worx",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 519,
    nombre: "Portarrollos con compartimento",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Portarrollo con espacio extra.",
    descripcionDetallada: "Portarrollos de papel higiénico con compartimento para guardar un rollo extra o el celular.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USd883a216c90a94/design/2025-07-24_83d84aa8601498.png",
      "https://makerworld.bblmw.com/makerworld/model/USd883a216c90a94/design/2025-07-24_cde99bdea492f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd883a216c90a94/design/2025-07-24_d2a44a5db4cd68.png",
      "https://makerworld.bblmw.com/makerworld/model/USd883a216c90a94/design/2025-07-24_b9ad2d8b03514.png",
      "https://makerworld.bblmw.com/makerworld/model/USd883a216c90a94/design/2025-07-24_6f85e1bc19e468.png"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "bano",
      "papel",
      "portarrollos"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1636314#profileId-361341967",
      autor: "SMACKMAX",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 520,
    nombre: "Organizador de tocador autodrenante",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Baño ordenado y seco.",
    descripcionDetallada: "Organizador minimalista de tocador de baño con autodrenaje.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9a337224b537b5/design/2025-12-09_17ae8a07fa3f48.png",
      "https://makerworld.bblmw.com/makerworld/model/US9a337224b537b5/design/2025-12-12_ad591f4de636a8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9a337224b537b5/design/2025-12-09_c5ff9fc20a6258.png",
      "https://makerworld.bblmw.com/makerworld/model/US9a337224b537b5/design/2025-12-09_36b90eb54c4488.png",
      "https://makerworld.bblmw.com/makerworld/model/US9a337224b537b5/design/2025-12-09_0812fbc65cc458.jpg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "bano",
      "tocador",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2094889#profileId-526688442",
      autor: "Cipriani 3Design Studio",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 521,
    nombre: "Organizador apilable de escritorio",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Cajones apilables en 3 tamaños.",
    descripcionDetallada: "Organizador de escritorio o taller apilable, en 3 tamaños.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US2ec00b7aaade03/design/2024-12-27_beb445e4b06be.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2ec00b7aaade03/design/2024-12-27_f129076e479fd.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US2ec00b7aaade03/design/2024-12-27_8a0a7019623b78.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US2ec00b7aaade03/design/2024-12-27_93d087b35f60f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2ec00b7aaade03/design/2024-12-27_1c858f9cf589c8.jpeg"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "organizador",
      "apilable",
      "taller"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/919813#profileId-187644494",
      autor: "PaperPlaneLab",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 522,
    nombre: "Contenedores Gridfinity ligeros",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Contenedores que usan la mitad de material.",
    descripcionDetallada: "Contenedores Gridfinity personalizables y ligeros para organizar cajones.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US694103168a492e/design/2025-08-09_110f315cb8f44.png",
      "https://makerworld.bblmw.com/makerworld/model/US694103168a492e/design/2025-08-09_605e1fa90a4e5.png",
      "https://makerworld.bblmw.com/makerworld/model/US694103168a492e/design/2025-08-09_652b997d74b918.png",
      "https://makerworld.bblmw.com/makerworld/model/US694103168a492e/design/2025-08-09_1a458c3ae83ab8.png",
      "https://makerworld.bblmw.com/makerworld/model/US694103168a492e/design/2025-08-09_9a041e2c5520a8.png"
    ],
    precioBase: 105,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 52,
      horas: 2.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "gridfinity",
      "contenedor",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1685835#profileId-376048317",
      autor: "Sparky",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 523,
    nombre: "Soporte para cepillos Oral-B",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Para 2 cepillos eléctricos.",
    descripcionDetallada: "Soporte para 2 cepillos eléctricos Oral-B con escurridor.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US8c0bc1188fbfaf/design/2025-08-30_56a66dd7efad6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8c0bc1188fbfaf/design/2025-01-19_ea13cb56f811e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8c0bc1188fbfaf/design/2025-01-19_3500f341d3f47.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8c0bc1188fbfaf/design/2025-01-19_3c6edfc6fb10a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8c0bc1188fbfaf/design/2025-08-30_02f5656b27a5f8.jpg"
    ],
    precioBase: 145,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 72,
      horas: 2.9,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "bano",
      "cepillos",
      "electrico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1013156#profileId-206204474",
      autor: "Burger.Print",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 524,
    nombre: "Jabonera ovalada con insertos",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Jabonera con 4 insertos.",
    descripcionDetallada: "Jabonera ovalada con 4 insertos intercambiables.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa75f9dce512484/design/2025-01-19_d5ec6533b56ef.png",
      "https://makerworld.bblmw.com/makerworld/model/USa75f9dce512484/design/2025-01-19_c895f05ae29ba.png",
      "https://makerworld.bblmw.com/makerworld/model/USa75f9dce512484/design/2025-01-18_b7d3c4f608ac7.png",
      "https://makerworld.bblmw.com/makerworld/model/USa75f9dce512484/design/2025-01-18_065e549eba587.png",
      "https://makerworld.bblmw.com/makerworld/model/USa75f9dce512484/design/2025-01-18_b2dc212a0d482.png"
    ],
    precioBase: 160,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 73,
      horas: 3.7,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "bano",
      "jabonera"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1009172#profileId-206971168",
      autor: "M1chal",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 525,
    nombre: "Plato coqueta con moño",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Platito para joyas con moño.",
    descripcionDetallada: "Plato organizador coqueta con moño para joyas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US20b70b61dd8c02/design/2025-10-05_f9df1f58a90e98.png",
      "https://makerworld.bblmw.com/makerworld/model/US20b70b61dd8c02/design/2025-10-05_ceb80b16e3f078.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US20b70b61dd8c02/design/2025-10-05_bac2f1cbffde9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US20b70b61dd8c02/design/2025-10-05_7ed2d02b50a61.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US20b70b61dd8c02/design/2025-10-05_9ea5d16f14e1.jpg"
    ],
    precioBase: 180,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 87,
      horas: 4.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "joyas",
      "moño",
      "coqueta"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1859351#profileId-430913398",
      autor: "TheHexArtist",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 526,
    nombre: "Soporte minimalista para controles",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "4 diseños.",
    descripcionDetallada: "Soporte minimalista para controles remotos en 4 diseños.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe15c8148214820/design/75ba2b9691fdf2c4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe15c8148214820/design/59f301aa1bfba1d3.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe15c8148214820/design/cc5b65e6bc29b1a8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe15c8148214820/design/9298b7291dc2b4c1.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe15c8148214820/design/9b506e4e4bbcf4be.jpg"
    ],
    precioBase: 230,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 143,
      horas: 4.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "controles",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2392250#profileId-639933087",
      autor: "Random 3D Prints",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 527,
    nombre: "Repisa de entrada con ganchos",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Para llaves, correo y más.",
    descripcionDetallada: "Repisa organizadora para la entrada con ganchos para llaves.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa7f825a5dfc486/design/efe9a4bc45fffccb.png",
      "https://makerworld.bblmw.com/makerworld/model/USa7f825a5dfc486/design/a0c4fedd6342c93c.png",
      "https://makerworld.bblmw.com/makerworld/model/USa7f825a5dfc486/1040080380/instance/38178e4202ee614b.png"
    ],
    precioBase: 300,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 214,
      horas: 4.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "entrada",
      "llaves",
      "repisa"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2699152#profileId-1040080380",
      autor: "Q_Craft",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 528,
    nombre: "Gancho universal fuerte",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Gancho para objetos pesados.",
    descripcionDetallada: "Gancho de pared reforzado para objetos grandes.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/UScf6e4839fc027/design/423b99574e9e9210.jpg",
      "https://makerworld.bblmw.com/makerworld/model/UScf6e4839fc027/design/c208cd717a438147.jpg",
      "https://makerworld.bblmw.com/makerworld/model/UScf6e4839fc027/755127867/instance/fc80eea718ed8845.jpg"
    ],
    precioBase: 50,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 24,
      horas: 1.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "gancho",
      "pared"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2777171#profileId-755127867",
      autor: "VC_design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 529,
    nombre: "Soporte de repisa orgánico",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Ménsula optimizada.",
    descripcionDetallada: "Ménsula orgánica y resistente para montar repisas en la pared.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US2a02717aed6e5c/design/2025-04-19_e5ebc6c4023dd.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2a02717aed6e5c/design/2025-04-19_e8f3490afa8188.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2a02717aed6e5c/design/2025-04-19_dcae05616f5098.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2a02717aed6e5c/design/2025-04-19_f6191a153c82e.jpg"
    ],
    precioBase: 105,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 55,
      horas: 2.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "repisa",
      "mensula",
      "pared"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1336087#profileId-280464694",
      autor: "Basement Factory",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 530,
    nombre: "Gancho para escobas",
    categoria: "Organizadores y Utilitarios",
    descripcionCorta: "Sostiene escobas y trapeadores.",
    descripcionDetallada: "Soporte modular para escobas y trapeadores de 16 a 39 mm.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USea7f38e67bed2c/design/2026-01-13_b15205661b77e8.png",
      "https://makerworld.bblmw.com/makerworld/model/USea7f38e67bed2c/design/2025-09-17_ef9cc642fed0c.png",
      "https://makerworld.bblmw.com/makerworld/model/USea7f38e67bed2c/design/2026-01-13_afb314d6dfc27.png",
      "https://makerworld.bblmw.com/makerworld/model/USea7f38e67bed2c/design/2026-01-12_88b9415caf38c.png",
      "https://makerworld.bblmw.com/makerworld/model/USea7f38e67bed2c/design/2025-09-17_c5c9f137786bc.jpeg"
    ],
    precioBase: 150,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 90,
      horas: 2.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "escoba",
      "limpieza",
      "gancho"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1789134#profileId-562447797",
      autor: "MXDesign",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 190,
    nombre: "Tarjetero de presentación",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Porta tarjetas acanalado estilo japandi.",
    descripcionDetallada: "Porta tarjetas de presentación moderno, en versión acanalada japandi o lisa texturizada. Admite tarjetas de hasta 9.2 cm.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9fa031a7d60302/design/2025-07-25_57b151dc1b178.png",
      "https://makerworld.bblmw.com/makerworld/model/US9fa031a7d60302/design/2025-07-25_144fa981248808.png",
      "https://makerworld.bblmw.com/makerworld/model/US9fa031a7d60302/design/2025-07-25_3f57bcb9f37f9.png",
      "https://makerworld.bblmw.com/makerworld/model/US9fa031a7d60302/design/2025-07-25_6ceeead7ff7758.png",
      "https://makerworld.bblmw.com/makerworld/model/US9fa031a7d60302/design/2025-07-25_49ddb2f4db3a68.jpg"
    ],
    precioBase: 55,
    escalaDescuento: null,
    tamano: "10.4 × 2.4 × 3.2 cm",
    impresion: {
      material: "PLA",
      gramos: 24,
      horas: 1.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "oficina",
      "tarjetas",
      "escritorio",
      "japandi"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1638512#profileId-362239292",
      autor: "SabreDesign",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 404,
    nombre: "Código QR con soporte",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "QR de tu WiFi, menú o página, de pie sobre el mostrador.",
    descripcionDetallada: "Placa con código QR personalizado (WiFi, menú, redes o página web) con soporte para mostrador. Envíanos el enlace en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa2b91558a8412e/design/59f919f541ebc799.png",
      "https://makerworld.bblmw.com/makerworld/model/USa2b91558a8412e/design/b5691c20be836584.png",
      "https://makerworld.bblmw.com/makerworld/model/USa2b91558a8412e/design/a876a7de737e70d1.webp",
      "https://makerworld.bblmw.com/makerworld/model/USa2b91558a8412e/design/f85d6c76d6a578bc.webp",
      "https://makerworld.bblmw.com/makerworld/model/USa2b91558a8412e/design/1a7fbeaf25141e33.jpeg"
    ],
    precioBase: 60,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 25,
      horas: 1.5,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "qr",
      "negocio",
      "wifi",
      "menu"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2876996#profileId-1039588685",
      autor: "Jinx",
      licencia: "MakerWorld Exclusive License",
      permiteVenta: false,
      notaLicencia: "Prohíbe el uso comercial."
    },
    activo: true
  },
  {
    id: 405,
    nombre: "Mini caballete exhibidor",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Exhibe tarjetas, arte o productos pequeños.",
    descripcionDetallada: "Caballete en miniatura para exhibir tarjetas, precios, cuadros pequeños o dispositivos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US2d2c335d571858/design/2024-10-14_998744ddf735c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2d2c335d571858/design/2024-10-14_7cd8dae531249.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2d2c335d571858/design/2024-10-14_3f84afa936175.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US2d2c335d571858/design/2024-10-14_865ca38a01eec.jpg"
    ],
    precioBase: 50,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 27,
      horas: 1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "caballete",
      "exhibidor",
      "negocio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/703803#profileId-138489343",
      autor: "zekesnack",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 406,
    nombre: "Exhibidor giratorio de llaveros con precio",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Torre giratoria para vender llaveros.",
    descripcionDetallada: "Exhibidor modular giratorio para llaveros con portaprecios personalizable. Ideal para tiendas y bazares.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc6bc10f30b0db5/design/2024-07-29_5182653d7ad56.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc6bc10f30b0db5/design/2024-07-29_8cd848715ad0e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc6bc10f30b0db5/design/2024-07-29_368b2b1614849.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc6bc10f30b0db5/design/b5fa8d59ea3441d6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc6bc10f30b0db5/design/e50424144217cf2c.jpg"
    ],
    precioBase: 370,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 182,
      horas: 7.9,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "exhibidor",
      "llaveros",
      "tienda"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/563039#profileId-488191821",
      autor: "TuttoLandPrint",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 407,
    nombre: "Caballete para placa o letrero",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Soporte para placas, cuadros o letreros.",
    descripcionDetallada: "Soporte tipo caballete para exhibir placas, letreros o cuadros pequeños.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USd1547c3acf5a70/design/2024-12-09_360dbb7bb2cb2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd1547c3acf5a70/design/2024-12-09_b795a69a26471.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 15,
      horas: 0.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "caballete",
      "exhibidor",
      "letrero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/863015#profileId-928404595",
      autor: "The Crafted Nook",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 408,
    nombre: "Letrero abierto / cerrado abatible",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Letrero creativo que gira de abierto a cerrado.",
    descripcionDetallada: "Letrero de puerta que se transforma de \"abierto\" a \"cerrado\" con un giro. Para negocios u oficinas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa5ec32b6292041/design/f72bfe5e-c7d8-4632-987e-27d1130641c0.webp"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "letrero",
      "abierto",
      "cerrado",
      "negocio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/962433#profileId-196016217",
      autor: "JCRx",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 410,
    nombre: "Joyero árbol",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Árbol para collares, aretes y anillos.",
    descripcionDetallada: "Joyero con forma de árbol para colgar collares, aretes y anillos; útil para exhibir en tiendas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US811437e12f7fb4/design/2025-07-25_a1bac746d6fed.png",
      "https://makerworld.bblmw.com/makerworld/model/US811437e12f7fb4/design/2025-07-25_ec3bb4a89e7628.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US811437e12f7fb4/design/2025-07-25_5dbb64c764724.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US811437e12f7fb4/631328459/instance/6e2c9f68a9c48d24.png"
    ],
    precioBase: 330,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 196,
      horas: 6.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "joyero",
      "joyeria",
      "exhibidor"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1639611#profileId-631328459",
      autor: "ChromeCraft",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 411,
    nombre: "Exhibidor de joyas en forma de mano",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Mano realista para anillos y pulseras.",
    descripcionDetallada: "Exhibidor de joyas con forma de mano escaneada en 3D para anillos, pulseras y relojes.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US475f4ca83e1fd4/design/2025-09-17_5fe8aba7b39248.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US475f4ca83e1fd4/design/2024-12-23_95234552f8ef18.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US475f4ca83e1fd4/design/2024-12-23_8934138e383948.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US475f4ca83e1fd4/design/2024-12-23_99be5604cf12d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US475f4ca83e1fd4/design/2024-12-23_bf484139c80f4.jpg"
    ],
    precioBase: 195,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 122,
      horas: 3.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "joyeria",
      "mano",
      "exhibidor"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/907761#profileId-192598113",
      autor: "dio765",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 412,
    nombre: "Exhibidor de aretes, collares y pulseras",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Exhibidor completo de joyería.",
    descripcionDetallada: "Exhibidor de joyería para aretes, collares y pulseras. Perfecto para bazares y tiendas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US4544d98593fda2/design/2025-07-06_06aab4e7359c78.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US4544d98593fda2/design/2025-07-06_3f563f58ba4f4.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US4544d98593fda2/design/2025-07-06_6a002730912048.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US4544d98593fda2/design/2025-07-06_8e9f49c2a2ba78.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US4544d98593fda2/design/2025-07-06_f4e69405dea9f8.jpeg"
    ],
    precioBase: 230,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 141,
      horas: 4.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "joyeria",
      "aretes",
      "exhibidor"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1582368#profileId-417477854",
      autor: "Printing3Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 413,
    nombre: "Organizador de esmaltes Mani Dock",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Estación para esmaltes de uñas.",
    descripcionDetallada: "Organizador para esmaltes y accesorios de manicure. Ideal para salones de uñas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6e5086a9ec3bc6/design/7b7a80af2ad87252.png",
      "https://makerworld.bblmw.com/makerworld/model/US6e5086a9ec3bc6/design/33fb184a07aae2f9.png",
      "https://makerworld.bblmw.com/makerworld/model/US6e5086a9ec3bc6/design/96c1eb33d3ccbb09.png",
      "https://makerworld.bblmw.com/makerworld/model/US6e5086a9ec3bc6/design/dddc31e40b71d4fe.png",
      "https://makerworld.bblmw.com/makerworld/model/US6e5086a9ec3bc6/design/78dd000c0c655c72.png"
    ],
    precioBase: 100,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 55,
      horas: 1.6,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "unas",
      "esmaltes",
      "salon",
      "manicure"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/3145556#profileId-921379131",
      autor: "Less Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 416,
    nombre: "Soporte de celular plegable de bolsillo",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Se dobla y cabe en la bolsa.",
    descripcionDetallada: "Soporte de celular plegable con tres ángulos, impreso en una sola pieza. Buen artículo promocional.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/DSM00000002371884/design/ce26b5aeec4a2921.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000002371884/design/8b75117d8d2294cd.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000002371884/design/ea294005d2be26a7.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000002371884/design/ba46234efaf2e1d8.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 24,
      horas: 1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "celular",
      "plegable",
      "promocional"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2371884#profileId-606403465",
      autor: "Anycall",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 418,
    nombre: "Placa de nombre de escritorio",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Placa con tu nombre o puesto.",
    descripcionDetallada: "Placa de escritorio personalizada con nombre y puesto en relieve. Escribe el texto en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US73fb64309b390/design/2024-01-24_835e92d0b310e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US73fb64309b390/160841116/instance/2024-11-22_4951d7a9fc08.webp"
    ],
    precioBase: 125,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 70,
      horas: 2.2,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "placa",
      "nombre",
      "oficina",
      "personalizado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/155671#profileId-160841116",
      autor: "matt thibs",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 419,
    nombre: "Servilletero Monstera",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Servilletero con hoja de monstera.",
    descripcionDetallada: "Servilletero de una pieza inspirado en la hoja de monstera. Para restaurantes, cafeterías o casa.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc9f064ce4ed9d/design/2025-11-14_79cae4ef6982e8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc9f064ce4ed9d/design/2025-11-14_941da60214a29.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc9f064ce4ed9d/design/2025-11-14_81849bf288b14.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc9f064ce4ed9d/design/2025-11-14_5c702a93d23b18.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc9f064ce4ed9d/design/2025-11-14_a07e7cfb1546e8.jpg"
    ],
    precioBase: 125,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 67,
      horas: 2.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "servilletero",
      "restaurante",
      "monstera"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1995317#profileId-475777471",
      autor: "dastoole",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 420,
    nombre: "Porta tarjetas de mesa Miffy",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Conejito para fotos, números de mesa o tarjetas.",
    descripcionDetallada: "Conejito Miffy para exhibir fotos, números de mesa o tarjetas de lugar en eventos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US8c76e9ba1857d2/design/b260609ea3900b02.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8c76e9ba1857d2/design/c56126fd8e5a02ae.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8c76e9ba1857d2/design/afed8e7f8dbc779d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8c76e9ba1857d2/design/3a689084697a4bcb.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 14,
      horas: 1.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "eventos",
      "numero de mesa",
      "miffy"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2631860#profileId-812945960",
      autor: "emeline",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial. Usa una marca o personaje de terceros: Miffy (Mercis BV)."
    },
    activo: true
  },
  {
    id: 421,
    nombre: "Indicador de estado para escritorio",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Disponible / ocupado / no molestar.",
    descripcionDetallada: "Indicador giratorio de estado para escritorio u oficina: disponible, ocupado, en reunión.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb442b841f1cfd4/design/2fa60b776623d018.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb442b841f1cfd4/design/36be96556cdea74c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb442b841f1cfd4/design/dda7f4c48a50acf2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb442b841f1cfd4/design/47e07c113791cd3e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb442b841f1cfd4/design/9a1c1af55bc2a931.jpg"
    ],
    precioBase: 95,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 45,
      horas: 2.1,
      colores: 5,
      multicolor: true
    },
    etiquetas: [
      "oficina",
      "estado",
      "letrero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2457849#profileId-637012390",
      autor: "Chris 3D",
      licencia: "MakerWorld Exclusive License",
      permiteVenta: false,
      notaLicencia: "Prohíbe el uso comercial."
    },
    activo: true
  },
  {
    id: 422,
    nombre: "Base para pastel acanalada",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Base para pasteles y galletas.",
    descripcionDetallada: "Base para pastel o charola para galletas de diseño acanalado. Para reposterías y fiestas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USd0700ec9e7368b/design/ba250a127f7f7837.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd0700ec9e7368b/design/09eb5e01fe1de37c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd0700ec9e7368b/design/151c8ebac0b92a86.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd0700ec9e7368b/design/b47b37d5091725ad.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd0700ec9e7368b/design/703e5f1c798039f9.jpg"
    ],
    precioBase: 325,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 233,
      horas: 4.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "pastel",
      "reposteria",
      "base"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2896217#profileId-804184914",
      autor: "Deltaprints",
      licencia: "CC BY-NC-ND",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 423,
    nombre: "Porta bálsamo labial florecitas",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Llavero porta bálsamo con flores.",
    descripcionDetallada: "Porta bálsamo labial con flores; un detalle ideal para el Día de las Madres o para regalar a clientas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US23a8a1f23a9c84/design/8546f96ed132b6bf.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US23a8a1f23a9c84/design/e9011f9744d8c675.jpg"
    ],
    precioBase: 65,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 22,
      horas: 2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "balsamo",
      "regalo",
      "dia de las madres"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2706365#profileId-728435134",
      autor: "Ana Teodoro :p",
      licencia: "CC BY-ND",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito; no permite modificar el diseño."
    },
    activo: true
  },
  {
    id: 424,
    nombre: "Exhibidor de reloj",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Soporte para mostrar un reloj de pulsera.",
    descripcionDetallada: "Soporte compacto para exhibir un reloj de pulsera en casa o en tienda.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US51169f28a825ae/design/2024-01-05_1ba670b0755cf.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US51169f28a825ae/design/2024-01-05_6a7a55cd14435.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US51169f28a825ae/design/2024-01-05_89e3e20324878.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US51169f28a825ae/design/2024-01-05_bd6817a6555d4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US51169f28a825ae/design/2024-01-05_98a8f9baa7d84.jpg"
    ],
    precioBase: 60,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 35,
      horas: 1.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "reloj",
      "exhibidor"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/124686#profileId-39578656",
      autor: "Pulsar Designs",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 425,
    nombre: "Exhibidor giratorio apilable de llaveros",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Torre de llaveros con etiqueta de precio.",
    descripcionDetallada: "Exhibidor giratorio y apilable para llaveros con espacio para precio o nombre.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US8063fee2aad493/design/2024-02-20_7f2c56931d737.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8063fee2aad493/design/2024-02-20_aac41a26bf08a.jpg"
    ],
    precioBase: 145,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 86,
      horas: 2.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "exhibidor",
      "llaveros",
      "tienda"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/194146#profileId-72212811",
      autor: "Wickieprints",
      licencia: "CC BY",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito al autor."
    },
    activo: true
  },
  {
    id: 427,
    nombre: "Etiqueta de precio minimalista",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Etiqueta de precio para anaquel o mostrador.",
    descripcionDetallada: "Etiqueta de precio minimalista personalizable para anaqueles o mostradores. Precio por pieza.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa1afdb7a793e28/design/2024-08-31_f4ef91a8761e3.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa1afdb7a793e28/design/2024-08-31_7d481e552f341.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa1afdb7a793e28/design/2024-08-31_5660996d0843d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa1afdb7a793e28/design/2024-08-31_158fe64ef368e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa1afdb7a793e28/design/2024-08-31_ca73792bff1c5.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "precio",
      "etiqueta",
      "tienda"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/615235#profileId-117845703",
      autor: "FrancyStore3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 428,
    nombre: "Letrero WiFi con QR",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Tus clientes se conectan escaneando.",
    descripcionDetallada: "Letrero con código QR para que tus invitados o clientes se conecten al WiFi. Envía nombre y contraseña de la red en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USdeb1a525356ff2/design/ed6072ff736b802d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USdeb1a525356ff2/design/60b3aeb680abffe6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USdeb1a525356ff2/design/d7bebc755848e80e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USdeb1a525356ff2/design/4552741428d2d669.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USdeb1a525356ff2/design/b018ec4d293b87a5.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 25,
      horas: 1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "wifi",
      "qr",
      "negocio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1513074#profileId-336001360",
      autor: "Maraxos3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 429,
    nombre: "Exhibidor NFC de redes sociales",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Acercan el celular y abren tus redes.",
    descripcionDetallada: "Exhibidor de mostrador con chip NFC y QR para que tus clientes abran tus redes sociales o reseñas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US3285c639d023ff/design/2025-03-30_a764b3059bddc.png",
      "https://makerworld.bblmw.com/makerworld/model/US3285c639d023ff/design/2025-03-30_b7282a0db56fc.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US3285c639d023ff/design/2025-03-30_a612e80f59c9c.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US3285c639d023ff/design/2025-03-30_8913a93052c7.jpeg"
    ],
    precioBase: 180,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 98,
      horas: 3.2,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "nfc",
      "redes sociales",
      "negocio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1267116#profileId-275784674",
      autor: "Egloris",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Logos de redes sociales (Meta / ByteDance)."
    },
    activo: true
  },
  {
    id: 430,
    nombre: "Soporte elevador para tablet",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Soporte de tablet con paso de cable.",
    descripcionDetallada: "Soporte de escritorio para iPad o tablet con pasacables y bandeja. Útil como punto de venta o menú digital.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USed8466018779e1/design/2024-12-22_f5db8e93c19e4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USed8466018779e1/design/2024-12-22_c5f5e870c5ee2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USed8466018779e1/design/2024-12-22_5ba025ed4571b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USed8466018779e1/design/2024-12-22_2e8dc035a49ee.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USed8466018779e1/design/2024-12-21_103a38716e856.jpg"
    ],
    precioBase: 440,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "tablet",
      "punto de venta",
      "soporte"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/899478#profileId-182461724",
      autor: "Meyui",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 431,
    nombre: "Letrero de puerta personalizado",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Letrero para habitación o consultorio.",
    descripcionDetallada: "Letrero de puerta personalizable para habitaciones, consultorios u oficinas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USad0e791b0369f2/design/2024-12-03_37d229287a56c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USad0e791b0369f2/168814336/instance/2024-12-03_b4075cbb596e6.jpg"
    ],
    precioBase: 120,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 51,
      horas: 3,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "letrero",
      "puerta",
      "personalizado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/845990#profileId-168814336",
      autor: "Mas-Tool",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 432,
    nombre: "Charola moderna para monedas",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Charola para cambio o llaves.",
    descripcionDetallada: "Charola moderna para dar el cambio en caja o dejar llaves y objetos pequeños.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USdf412507e106b0/design/2026-01-20_118110f6bd6d2.png",
      "https://makerworld.bblmw.com/makerworld/model/USdf412507e106b0/design/2024-12-03_c88b23621dfa6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USdf412507e106b0/design/2026-01-13_7bff6334d74e6.png",
      "https://makerworld.bblmw.com/makerworld/model/USdf412507e106b0/design/2024-11-30_0b99ca4855a3c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USdf412507e106b0/design/2024-11-30_fa74ca812475e.jpg"
    ],
    precioBase: 160,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 90,
      horas: 3.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "charola",
      "caja",
      "monedas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/835871#profileId-353256442",
      autor: "EleHazar 3DinPlastic",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 433,
    nombre: "Tarjetero moderno",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Para tarjetas de 8.5 × 5.5 cm.",
    descripcionDetallada: "Porta tarjetas de presentación moderno para mostrador o escritorio.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc887b423fb62bf/design/2025-05-12_25e6eb9a5888e.png",
      "https://makerworld.bblmw.com/makerworld/model/USc887b423fb62bf/design/2025-05-12_13a1ea18cf836.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc887b423fb62bf/design/2025-05-12_a285fb16099428.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc887b423fb62bf/299660220/instance/2025-05-12_ed84473f9c94c8.jpg"
    ],
    precioBase: 55,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA-CF",
      gramos: 27,
      horas: 1.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "tarjetas",
      "negocio",
      "mostrador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1410292#profileId-299660220",
      autor: "LemonArts",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 434,
    nombre: "Estantería modular Pure",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Estantes y conectores para armar tu exhibidor.",
    descripcionDetallada: "Sistema de estantería modular minimalista para exhibir productos en tienda o casa.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa48ba4070c0229/design/2024-11-25_2968fb22cc3fb8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa48ba4070c0229/design/2024-11-25_f956ee444d9b4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa48ba4070c0229/design/2025-01-20_a6d5f02c2dd95.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa48ba4070c0229/design/2024-11-25_e73437d685a75.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USa48ba4070c0229/design/2024-11-25_3f4e9bb330e6d.jpeg"
    ],
    precioBase: 175,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 106,
      horas: 3.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "estante",
      "exhibidor",
      "modular"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/820310#profileId-162768950",
      autor: "Kong 3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 435,
    nombre: "Código QR personalizado",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Placa QR con el enlace que quieras.",
    descripcionDetallada: "Placa con código QR personalizado para menús, pagos, redes o WiFi.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb2d9248881170f/design/2025-08-21_f8d412db7c5598.png",
      "https://makerworld.bblmw.com/makerworld/model/USb2d9248881170f/design/2025-08-21_56d5c16d68d218.png",
      "https://makerworld.bblmw.com/makerworld/model/USb2d9248881170f/design/2025-08-21_f3b8754a1a0028.png",
      "https://makerworld.bblmw.com/makerworld/model/USb2d9248881170f/design/2025-08-21_a08f8a18b60bd.png",
      "https://makerworld.bblmw.com/makerworld/model/USb2d9248881170f/design/2025-02-04_c53c81f4f2a.webp"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 11,
      horas: 0.5,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "qr",
      "negocio",
      "menu"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/617663#profileId-164677678",
      autor: "Mike33D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 436,
    nombre: "Servilletero cuchara y tenedor",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Servilletero moderno para mesa.",
    descripcionDetallada: "Servilletero con diseño de cuchara y tenedor para restaurante o comedor.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US228af609579026/design/2024-06-26_55d5b7adb5c2b.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US228af609579026/design/2024-06-26_9ee7b7de19e22.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US228af609579026/design/2024-06-26_3216576256329.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US228af609579026/design/2024-06-26_90b6a6788e216.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US228af609579026/92151656/instance/2024-06-26_fecf518aa5d1f.png"
    ],
    precioBase: 185,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 103,
      horas: 4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "servilletero",
      "restaurante"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/512939#profileId-92151656",
      autor: "3Dcrabi",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 437,
    nombre: "Exhibidor giratorio profesional de llaveros",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Exhibidor robusto para vendedores.",
    descripcionDetallada: "Exhibidor giratorio de calidad profesional para vender llaveros en mercados y tiendas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc6ceca67c60950/design/2026-01-02_626b3201445c78.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc6ceca67c60950/design/2026-01-02_5754608007bb28.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc6ceca67c60950/design/2026-01-02_cfe125dded259.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc6ceca67c60950/design/2026-01-02_b8481cb1d8afb8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc6ceca67c60950/design/2026-01-02_d9991012c5dfd.jpg"
    ],
    precioBase: 550,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "exhibidor",
      "llaveros",
      "tienda"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2186751#profileId-561445141",
      autor: "HexaLogic",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 438,
    nombre: "Soporte de exhibición simple",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Soporte para placas, platos o tarjetas.",
    descripcionDetallada: "Soporte sencillo para exhibir placas, cuadros o tarjetas, ajustable al tamaño que necesites.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US4bcc8f6b899834/design/cd82b8b79a503ca4.png",
      "https://makerworld.bblmw.com/makerworld/model/US4bcc8f6b899834/design/2024-06-11_97547b1c74d3.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4bcc8f6b899834/design/9fe36d99be5c468f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4bcc8f6b899834/design/2024-05-30_07bee7ac3582a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US4bcc8f6b899834/design/2024-06-11_8f3350970163f.jpg"
    ],
    precioBase: 50,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 16,
      horas: 1.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "soporte",
      "exhibidor"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/479988#profileId-759195089",
      autor: "Kopp3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 439,
    nombre: "Letrero abierto / cerrado deslizante",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Letrero minimalista de dos caras.",
    descripcionDetallada: "Letrero minimalista deslizante \"abierto / cerrado\" para escaparates y puertas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000812869/design/2024-11-22_778381a3322ef.webp",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000000812869/design/2024-11-22_ec86825dc5bc9.png",
      "https://makerworld.bblmw.com/makerworld/model/USa55b9e5ce7594d/167362811/instance/2024-12-01_d09198d7caed.png",
      "https://makerworld.bblmw.com/makerworld/model/USa55b9e5ce7594d/167362811/instance/2024-12-01_672f787b1895.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa55b9e5ce7594d/167362811/instance/2024-12-01_57763aaeeca97.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 18,
      horas: 0.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "letrero",
      "abierto",
      "cerrado",
      "negocio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/812869#profileId-167362811",
      autor: "Little Ghost",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 440,
    nombre: "Placa de nombre de dos líneas",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Nombre o logotipo en dos líneas.",
    descripcionDetallada: "Placa de nombre personalizada de dos líneas, multicolor. Para negocios, escritorios o eventos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9538cedf2ae99a/design/962b287db7107339.png",
      "https://makerworld.bblmw.com/makerworld/model/US9538cedf2ae99a/design/36457d961ebc104a.png",
      "https://makerworld.bblmw.com/makerworld/model/US9538cedf2ae99a/design/a85429d3abd3bac3.png",
      "https://makerworld.bblmw.com/makerworld/model/US9538cedf2ae99a/design/12c71a30bc7d8fbc.png",
      "https://makerworld.bblmw.com/makerworld/model/US9538cedf2ae99a/1013704094/instance/60e6ca63293e2b63.png"
    ],
    precioBase: 205,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 107,
      horas: 4,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "placa",
      "nombre",
      "personalizado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/3048428#profileId-1013704094",
      autor: "3D On Fire 🏅",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 441,
    nombre: "Árbol organizador de llaves y joyas",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Árbol para colgar llaves o joyas.",
    descripcionDetallada: "Organizador en forma de árbol para llaves o joyería, en dos versiones.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US6a67694cefb375/design/2025-07-05_22c3d249d413f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6a67694cefb375/design/2025-07-05_09cf7c71abda1.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6a67694cefb375/design/2025-07-05_c3d1dfd1bac8d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6a67694cefb375/design/2025-07-05_3b68d3e2ec2af.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US6a67694cefb375/design/2025-07-05_58d18340d1e64.jpg"
    ],
    precioBase: 110,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 46,
      horas: 3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "joyero",
      "llaves",
      "organizador"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1577641#profileId-344181794",
      autor: "pozsar",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 442,
    nombre: "Joyero hongo místico",
    categoria: "Negocios y Tiendas",
    descripcionCorta: "Hongo con espacio para joyas.",
    descripcionDetallada: "Joyero con forma de hongo místico, decorativo y funcional.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US49450758296132/design/2025-02-15_42af1a8158751.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US49450758296132/design/2025-02-20_fb272c6c89e6e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US49450758296132/228432951/instance/2025-02-15_45468e8da6d57.jpg"
    ],
    precioBase: 395,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 168,
      horas: 11.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "joyero",
      "hongo",
      "decoracion"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1110937#profileId-228432951",
      autor: "black3dworks",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 4,
    nombre: "Placa para mascota con nombre",
    categoria: "Mascotas",
    descripcionCorta: "Placa en forma de huesito con el nombre de tu perro.",
    descripcionDetallada: "Placa identificadora en forma de hueso, personalizada con el nombre de tu mascota. Base, borde, nombre y huellita pueden ir en colores distintos. Opcional: número de teléfono al reverso, huellita con mini corazón y filamento que brilla en la oscuridad para los paseos nocturnos. Escribe el nombre, teléfono y colores en las notas del pedido.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb492415e96f93a/design/b066a058bfbdf091.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb492415e96f93a/design/2f48ca6b6fb20c9c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb492415e96f93a/design/a6671904eba903b8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb492415e96f93a/design/fcca108fccf53777.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb492415e96f93a/design/42d4f27165fc00ec.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 4,
      horas: 0.3,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "perro",
      "mascota",
      "medalla",
      "personalizado",
      "nombre",
      "collar",
      "glow"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/3235688#profileId-3665441",
      autor: "Sandy Design",
      licencia: "CC BY-ND",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito al autor; no permite modificar el diseño."
    },
    activo: true
  },
  {
    id: 589,
    nombre: "Comedero elevado para mascotas",
    categoria: "Mascotas",
    descripcionCorta: "Base elevada para platos.",
    descripcionDetallada: "Base elevada para comedero de perro o gato.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf29fd0a78a56e8/design/2025-10-01_11095ea628998.png",
      "https://makerworld.bblmw.com/makerworld/model/USf29fd0a78a56e8/design/2025-09-14_9faf53b26a3d7.png",
      "https://makerworld.bblmw.com/makerworld/model/USf29fd0a78a56e8/design/2025-09-14_deb767c54eac48.png",
      "https://makerworld.bblmw.com/makerworld/model/USf29fd0a78a56e8/design/2025-09-14_13c478b54358a8.png",
      "https://makerworld.bblmw.com/makerworld/model/USf29fd0a78a56e8/design/2025-09-14_dce509b0fc232.png"
    ],
    precioBase: 340,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 206,
      horas: 6.7,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "mascotas",
      "comedero",
      "perro",
      "gato"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1794239#profileId-952284001",
      autor: "Meyui",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 590,
    nombre: "Gato de resorte",
    categoria: "Mascotas",
    descripcionCorta: "Gatito que rebota.",
    descripcionDetallada: "Juguete de gato con resorte.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb94ab2ddf7a199/design/2024-07-20_d36154b334a91.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb94ab2ddf7a199/design/2024-07-20_be213301ea9f2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb94ab2ddf7a199/design/2024-07-20_70698f4f5e40b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb94ab2ddf7a199/164252377/instance/2024-07-20_bc9d6ccb24249.png",
      "https://makerworld.bblmw.com/makerworld/model/USb94ab2ddf7a199/164252377/instance/2024-07-20_45702307e556.jpg"
    ],
    precioBase: 310,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 188,
      horas: 6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "gato",
      "resorte",
      "juguete"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/549082#profileId-164252377",
      autor: "Queazy",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 591,
    nombre: "Perro salchicha de resorte",
    categoria: "Mascotas",
    descripcionCorta: "Salchicha que se estira.",
    descripcionDetallada: "Juguete de perro salchicha con cuerpo de resorte.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US3a827461897cee/design/2026-01-02_a22b3a4726fe4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3a827461897cee/design/2026-01-02_e50d6f8507b3f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3a827461897cee/design/2026-01-02_55a796f351382.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3a827461897cee/design/2026-01-02_126a2a15b37e18.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US3a827461897cee/design/2026-01-02_7831a832b01cb.jpg"
    ],
    precioBase: 80,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 39,
      horas: 1.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "perro",
      "resorte",
      "juguete"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2189453#profileId-560811049",
      autor: "MakutoOTK",
      licencia: "CC BY-NC-SA",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 592,
    nombre: "Dispensador de premios para gatos",
    categoria: "Mascotas",
    descripcionCorta: "El gato juega para sacar su premio.",
    descripcionDetallada: "Dispensador de golosinas para gatos que los mantiene activos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US8f35ad1dcd462e/design/2025-01-06_cc342dc9ebfd1.png",
      "https://makerworld.bblmw.com/makerworld/model/US8f35ad1dcd462e/design/2025-01-06_d4fd7c79d929b.png",
      "https://makerworld.bblmw.com/makerworld/model/US8f35ad1dcd462e/design/2025-01-06_865983a6d5e86.png",
      "https://makerworld.bblmw.com/makerworld/model/US8f35ad1dcd462e/design/2025-01-06_70608fa987881.png",
      "https://makerworld.bblmw.com/makerworld/model/US8f35ad1dcd462e/195220314/instance/2025-01-06_be4eb806cc54c.png"
    ],
    precioBase: 365,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 207,
      horas: 6.1,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "gato",
      "premios",
      "juguete"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/958425#profileId-195220314",
      autor: "Kien Designs",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 593,
    nombre: "Porta bolsas para popó Poo-ch Pouch",
    categoria: "Mascotas",
    descripcionCorta: "Lleva las bolsitas en la correa.",
    descripcionDetallada: "Porta bolsas para desechos de perro que se engancha a la correa.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USab6583913d214d/design/a68b699bd96458db.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USab6583913d214d/design/a8adc94abd476031.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USab6583913d214d/design/3ba80ee636877ecb.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USab6583913d214d/design/2024-08-22_eb74c4865e944.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USab6583913d214d/202380831/instance/2024-08-22_1f4dc7d0b8a4.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 16,
      horas: 0.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "perro",
      "bolsas",
      "paseo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/601386#profileId-202380831",
      autor: "Mikhail",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 594,
    nombre: "Dispensador de bolsas para perro",
    categoria: "Mascotas",
    descripcionCorta: "Dispensador resistente.",
    descripcionDetallada: "Dispensador de bolsas para desechos caninos de alta resistencia.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9a8d8d0da1c892/design/2025-05-19_4588bc290947a.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US9a8d8d0da1c892/design/2025-03-10_659f4392c3d1d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9a8d8d0da1c892/design/2025-03-10_7304c2305226e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9a8d8d0da1c892/design/2025-03-10_4a8f092426c26.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9a8d8d0da1c892/design/2025-03-10_5564291d8a67e.jpg"
    ],
    precioBase: 125,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 77,
      horas: 2.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "perro",
      "bolsas"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1196761#profileId-247511386",
      autor: "MM3D Workshop",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 595,
    nombre: "Cepillo autoacicalador para gatos",
    categoria: "Mascotas",
    descripcionCorta: "El gato se rasca solo.",
    descripcionDetallada: "Autoacicalador para gatos: se fija en una esquina y el gato se rasca solo.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US5ee4405e2e3e0f/design/2024-08-20_4f1b13cc30637.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5ee4405e2e3e0f/design/2024-08-20_81ba688ecb1ad.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5ee4405e2e3e0f/design/2024-08-20_834b532ae9433.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5ee4405e2e3e0f/design/2024-08-20_4ac1f4e152734.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US5ee4405e2e3e0f/design/2024-08-20_39a3ad948347c.jpg"
    ],
    precioBase: 115,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 55,
      horas: 3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "gato",
      "cepillo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/597813#profileId-114474389",
      autor: "Aditya Patel",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 596,
    nombre: "Adorno de pecera esqueleto bailarín",
    categoria: "Mascotas",
    descripcionCorta: "Esqueleto que baila con las burbujas.",
    descripcionDetallada: "Adorno para pecera con esqueleto que baila con el oxigenador.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe43ef68f5c1e42/design/ab555c9b26259e99.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USe43ef68f5c1e42/design/cc7d8321477a1ec3.png",
      "https://makerworld.bblmw.com/makerworld/model/USe43ef68f5c1e42/design/40810ba196a06cce.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe43ef68f5c1e42/design/6b55fb0685c4bca6.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe43ef68f5c1e42/design/2539aed594af4492.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PETG",
      gramos: 19,
      horas: 0.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "pecera",
      "acuario",
      "adorno"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/3022609#profileId-861511338",
      autor: "桐宁浩煜",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 597,
    nombre: "Silbato de pájaro",
    categoria: "Mascotas",
    descripcionCorta: "Agrega agua y suena como pájaro.",
    descripcionDetallada: "Silbato que imita el canto de un pájaro al agregarle agua.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/UScb82f263114ea6/design/1cd37e5d307e246d.png",
      "https://makerworld.bblmw.com/makerworld/model/UScb82f263114ea6/design/87436525812debc5.png",
      "https://makerworld.bblmw.com/makerworld/model/UScb82f263114ea6/design/5ff154bac44dd07f.png",
      "https://makerworld.bblmw.com/makerworld/model/UScb82f263114ea6/design/996e1c96f1be0ac0.png",
      "https://makerworld.bblmw.com/makerworld/model/UScb82f263114ea6/design/0b3e66fde0e8c3b7.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 23,
      horas: 1.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "silbato",
      "pajaro",
      "juguete"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2566446#profileId-677873858",
      autor: "yongyia3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 598,
    nombre: "Pala para croquetas",
    categoria: "Mascotas",
    descripcionCorta: "Pala para alimento de mascotas.",
    descripcionDetallada: "Pala para servir croquetas sin derramar.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US76cab74ed9ffe6/design/2024-08-02_34b699e41d8bb.png",
      "https://makerworld.bblmw.com/makerworld/model/US76cab74ed9ffe6/design/2024-08-02_b84db29183031.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US76cab74ed9ffe6/106118150/instance/2024-08-02_e71b36bbf0627.jpg"
    ],
    precioBase: 280,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 185,
      horas: 4.7,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "mascotas",
      "croquetas",
      "pala"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/568758#profileId-106118150",
      autor: "SabreDesign",
      licencia: "CC BY-NC-ND",
      permiteVenta: false,
      notaLicencia: "Licencia no comercial."
    },
    activo: true
  },
  {
    id: 599,
    nombre: "Placa con nombre para mascota",
    categoria: "Mascotas",
    descripcionCorta: "Placa o llavero con nombre.",
    descripcionDetallada: "Placa o llavero con el nombre de tu mascota. Escribe el nombre en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USef44e767491c4a/design/2025-12-14_4af77202c4f55.png",
      "https://makerworld.bblmw.com/makerworld/model/USef44e767491c4a/design/d7a15ecb651f83c4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USef44e767491c4a/design/bfb3bbe1785ec7ba.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USef44e767491c4a/design/24e4253bd26e1b1a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USef44e767491c4a/design/e3697660d23af9c4.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 8,
      horas: 0.7,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "mascota",
      "nombre",
      "placa"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2115391#profileId-676840162",
      autor: "Pumpkin Studios",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 600,
    nombre: "Cueva para gato pentágono",
    categoria: "Mascotas",
    descripcionCorta: "Refugio moderno para tu gato.",
    descripcionDetallada: "Cueva moderna para gatos con diseño de pentágono.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USfd118fa3a75142/design/b2b48b20b56aa70a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfd118fa3a75142/design/beae41746f71ccc8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfd118fa3a75142/design/5678e30b7e201538.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfd118fa3a75142/design/b245ebc7de0b3a02.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USfd118fa3a75142/design/aa79e3e3028c84ca.png"
    ],
    precioBase: 650,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PETG + PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "gato",
      "cama",
      "cueva"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2930301#profileId-1063730901",
      autor: "TessKess Studio",
      licencia: "MakerWorld Exclusive License",
      permiteVenta: false,
      notaLicencia: "Prohíbe el uso comercial."
    },
    activo: true
  },
  {
    id: 601,
    nombre: "Bebedero y comedero de viaje para perro",
    categoria: "Mascotas",
    descripcionCorta: "2 en 1 para paseos.",
    descripcionDetallada: "Bebedero y comedero 2 en 1 para llevar a paseos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US31517e0ba78c3b/design/2025-04-26_323a1ee4f906b8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US31517e0ba78c3b/design/2025-04-26_f41d66e9a1895.png",
      "https://makerworld.bblmw.com/makerworld/model/US31517e0ba78c3b/design/2025-04-26_e8a0788577fde8.png",
      "https://makerworld.bblmw.com/makerworld/model/US31517e0ba78c3b/design/2025-04-26_9e7d1c2ce27318.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US31517e0ba78c3b/design/2025-04-26_6493c2fedc7de8.jpeg"
    ],
    precioBase: 290,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 191,
      horas: 4.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "perro",
      "bebedero",
      "viaje"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1358156#profileId-479788987",
      autor: "Math & Katy",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 602,
    nombre: "Base para plato de perro",
    categoria: "Mascotas",
    descripcionCorta: "Base ajustable para el plato.",
    descripcionDetallada: "Base paramétrica para el plato de tu perro, a la medida.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe56379bd74fec5/design/75610df72f26b14e.png",
      "https://makerworld.bblmw.com/makerworld/model/USe56379bd74fec5/design/0bcca6913c6725c6.png",
      "https://makerworld.bblmw.com/makerworld/model/USe56379bd74fec5/776966214/instance/291afeee2be79aa8.png"
    ],
    precioBase: 450,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "perro",
      "comedero"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2830492#profileId-776966214",
      autor: "Arthur Matiello",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 603,
    nombre: "Juguetes para gatos",
    categoria: "Mascotas",
    descripcionCorta: "Juguetes impresos en una pieza.",
    descripcionDetallada: "Juguetes para gatos impresos en una sola pieza.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb454187a28ebc0/design/2025-02-19_776a6e95252a6.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb454187a28ebc0/design/2025-02-19_e4a8be3ec35a3.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb454187a28ebc0/design/2025-02-19_ce8e7e7cb17db.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb454187a28ebc0/design/2025-02-19_cb49d1c2de094.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb454187a28ebc0/design/2025-02-19_7f3df6f5f4b73.jpeg"
    ],
    precioBase: 255,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 87,
      horas: 7.6,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "gato",
      "juguete"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1129196#profileId-417080591",
      autor: "LRB Design",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 5,
    nombre: "Soporte moderno para celular",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Base para celular con charola para AirPods y paso de cable.",
    descripcionDetallada: "Soporte de escritorio con ángulo cómodo para videollamadas, streaming o carga. Incluye charola frontal para AirPods, anillos u objetos pequeños, abertura para el cable del cargador y ranuras para gomas antiderrapantes de 8 × 2 mm. Compatible con la mayoría de celulares, con o sin funda, en vertical u horizontal.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc21fdd29f1c84/design/b6a382b5f0ccb7f1.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc21fdd29f1c84/design/0b97e94b40543d76.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc21fdd29f1c84/design/da9299ce8486ff55.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc21fdd29f1c84/design/b15efc9f0c8dc02d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc21fdd29f1c84/design/29592a86d2ff6505.jpg"
    ],
    precioBase: 175,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 98,
      horas: 2.9,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "telefono",
      "iphone",
      "android",
      "base",
      "stand",
      "oficina"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2438331#profileId-2675491",
      autor: "KL Worx",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 7,
    nombre: "Soporte para teclado panal",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Eleva tu teclado mecánico con un diseño hexagonal futurista.",
    descripcionDetallada: "Soporte con patrón de panal que inclina el teclado a un ángulo más ergonómico. Funciona con la mayoría de teclados, especialmente mecánicos compactos (como un 60 %). Impreso en PLA mate para un acabado limpio que combina con cualquier setup.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US96b6dd4de00598/design/2025-12-27_5e827a19739788.png",
      "https://makerworld.bblmw.com/makerworld/model/US96b6dd4de00598/design/2025-12-27_23ba34df08677.png",
      "https://makerworld.bblmw.com/makerworld/model/US96b6dd4de00598/design/2025-12-27_73c1da1df35498.png",
      "https://makerworld.bblmw.com/makerworld/model/US96b6dd4de00598/design/2025-12-27_07001caef7b498.png",
      "https://makerworld.bblmw.com/makerworld/model/US96b6dd4de00598/design/2025-12-27_9142fbcb060e3.png"
    ],
    precioBase: 105,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 59,
      horas: 2.1,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "teclado",
      "keyboard",
      "setup",
      "ergonomico",
      "hexagono"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2163348#profileId-2345596",
      autor: "IVDV",
      licencia: "MakerWorld Exclusive License",
      permiteVenta: false,
      notaLicencia: "Prohíbe estrictamente el uso comercial."
    },
    activo: true
  },
  {
    id: 12,
    nombre: "Soporte para laptop",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Eleva tu laptop para mejor postura y ventilación.",
    descripcionDetallada: "Soporte sencillo y resistente para laptop de 15–16 pulgadas que mejora la postura y la ventilación. También se fabrica para laptops de 11–12\" y 13–14\": indícalo en las notas del pedido. Ideal para estudiar o trabajar muchas horas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US35a769b477e815/design/2024-11-20_804e2b3997001.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US35a769b477e815/design/2024-11-20_53ba552cc2d93.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US35a769b477e815/design/2024-11-20_301a704c6abc2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US35a769b477e815/design/2024-11-20_e89ec7167da75.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US35a769b477e815/design/2024-11-20_ad5a86ebbcbb9.jpg"
    ],
    precioBase: 170,
    escalaDescuento: null,
    tamano: "Para laptop de 15–16\" (ajustable a 11–14\")",
    impresion: {
      material: "PLA",
      gramos: 113,
      horas: 2.7,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "laptop",
      "portatil",
      "computadora",
      "estudio",
      "ergonomico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/804733#profileId-745134",
      autor: "Siegroto",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 13,
    nombre: "Soporte para control PS5 – GTA VI",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Base para DualSense con el logo \"VI\" en rosa y azul neón.",
    descripcionDetallada: "Soporte para el control DualSense de PS5 con temática inspirada en GTA VI: logotipo \"VI\" en rosa neón y azul pastel, letrero en blanco con contorno negro y base negra mate. Sostiene el control firme y seguro. Un buen regalo para gamers y coleccionistas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb0546b76c4e440/design/5c2d911e7128dfd2.png",
      "https://makerworld.bblmw.com/makerworld/model/USb0546b76c4e440/design/8f6e510cffc80b95.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb0546b76c4e440/design/653ddb39b4e24f7b.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb0546b76c4e440/design/0a6291e9836813ab.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb0546b76c4e440/design/557ceca8dbccb317.jpeg"
    ],
    precioBase: 130,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 71,
      horas: 2.3,
      colores: 4,
      multicolor: true
    },
    etiquetas: [
      "ps5",
      "playstation",
      "control",
      "dualsense",
      "gta",
      "gamer"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/3019789#profileId-3424305",
      autor: "GROGO3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe la venta. Además, GTA es marca de Rockstar Games y PS5 de Sony."
    },
    activo: true
  },
  {
    id: 14,
    nombre: "Elevador ergonómico para laptop con charola",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Eleva la laptop 14 cm a 75° y suma una charola de guardado.",
    descripcionDetallada: "Soporte ergonómico que eleva la laptop 140 mm con un ángulo de 75°, más una charola para accesorios. Estructura desmontable con uniones de espiga y caja y tornillos impresos; la base en PETG y la charola en PLA para mayor resistencia. Una mejora notable para estudiar o hacer home office.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US60f6bd13c973da/design/768382634a4f4264.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US60f6bd13c973da/design/3969cd831cc57cc2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US60f6bd13c973da/design/75a214ef775f2d6a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US60f6bd13c973da/design/4f86e24f9caf497c.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US60f6bd13c973da/design/57005c34ab246359.jpg"
    ],
    precioBase: 595,
    escalaDescuento: null,
    tamano: "Elevación de 14 cm, ángulo de 75°",
    impresion: {
      material: "PLA + PETG",
      gramos: 327,
      horas: 8.4,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "laptop",
      "elevador",
      "ergonomico",
      "home office",
      "charola"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2520574#profileId-3123718",
      autor: "liugwl",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 132,
    nombre: "Soporte invisible para control Xbox",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Base minimalista que casi no se ve.",
    descripcionDetallada: "Soporte minimalista para control de Xbox: el control parece flotar sobre el escritorio. Diseño original de dominio público.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf431ec65bcd134/design/2025-01-05_21428d8c2f755.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf431ec65bcd134/design/2025-01-05_2da774f3c48c7.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf431ec65bcd134/design/2025-01-05_9afbed84b640a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf431ec65bcd134/design/2025-01-05_d34f66c827486.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf431ec65bcd134/design/2025-01-05_8e6b634acf008.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 9,
      horas: 0.7,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "xbox",
      "control",
      "gamer",
      "minimalista"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/952139#profileId-194943651",
      autor: "Luke",
      licencia: "CC0",
      permiteVenta: true,
      notaLicencia: "Dominio público: uso comercial libre."
    },
    activo: true
  },
  {
    id: 133,
    nombre: "Soporte Master Chief para control",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Master Chief sosteniendo tu control.",
    descripcionDetallada: "Figura de Master Chief (Halo) que sostiene tu control de Xbox; también sirve para celular o plumas. Pieza grande y detallada.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/UScd9ecbf3ed45f0/design/2024-08-15_356d29c006017.png",
      "https://makerworld.bblmw.com/makerworld/model/UScd9ecbf3ed45f0/design/2024-08-12_03851afd6be8d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/UScd9ecbf3ed45f0/design/2024-08-12_bf542d5dc3b2b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/UScd9ecbf3ed45f0/design/2024-08-11_ac4f96250814f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/UScd9ecbf3ed45f0/design/2024-08-11_44f93faa8326e.jpg"
    ],
    precioBase: 625,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 166,
      horas: 21.7,
      colores: 3,
      multicolor: false
    },
    etiquetas: [
      "halo",
      "master chief",
      "xbox",
      "control"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/582711#profileId-109688233",
      autor: "丰川祥子",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Halo (Microsoft / Xbox)."
    },
    activo: true
  },
  {
    id: 134,
    nombre: "Soporte Kratos para control PS5",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Kratos de God of War sostiene tu DualSense.",
    descripcionDetallada: "Soporte inspirado en Kratos de God of War para el control de PS5, con un martillo a la espalda que sostiene el mando.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USdf2f40f0539b03/design/404d3b738261c06a.png",
      "https://makerworld.bblmw.com/makerworld/model/USdf2f40f0539b03/design/22a9a0e33779ad28.png",
      "https://makerworld.bblmw.com/makerworld/model/USdf2f40f0539b03/design/fb1744a91381a9d3.png",
      "https://makerworld.bblmw.com/makerworld/model/USdf2f40f0539b03/design/fa42816576711646.png",
      "https://makerworld.bblmw.com/makerworld/model/USdf2f40f0539b03/design/5add85ff5dd063c3.png"
    ],
    precioBase: 340,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 176,
      horas: 6.7,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "god of war",
      "kratos",
      "ps5",
      "playstation"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2685262#profileId-721102392",
      autor: "Djm",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: God of War (Sony / Santa Monica Studio)."
    },
    activo: true
  },
  {
    id: 135,
    nombre: "Soporte araña para control (PS5/PS4/Xbox)",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Base con motivo de Spider-Man.",
    descripcionDetallada: "Soporte para control con motivo de araña. Compatible con controles de PS5, PS4 y Xbox.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb12ae8947bd116/design/2024-03-28_2ab48422e875.jpg"
    ],
    precioBase: 75,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 43,
      horas: 1.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "spiderman",
      "control",
      "ps5",
      "xbox"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/400050#profileId-62891697",
      autor: "Makerbara",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Spider-Man (Marvel / Disney / Sony)."
    },
    activo: true
  },
  {
    id: 136,
    nombre: "Soporte Batman para control",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Batman sostiene tu control.",
    descripcionDetallada: "Soporte de Batman para controles de PS5, PS4 y Xbox, a cuatro colores.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USa50eea8f640b05/design/2024-10-17_d733fc0d026c4.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa50eea8f640b05/design/2024-10-17_87dad9171ad7.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa50eea8f640b05/design/2024-10-17_489e7f109461a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa50eea8f640b05/design/2024-10-17_b731f8f0ea728.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USa50eea8f640b05/design/2024-10-17_fdc94804cd603.jpg"
    ],
    precioBase: 410,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 190,
      horas: 9.4,
      colores: 4,
      multicolor: true
    },
    etiquetas: [
      "batman",
      "dc",
      "control",
      "gamer"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/710401#profileId-331593636",
      autor: "cms",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Batman (DC / Warner Bros.)."
    },
    activo: true
  },
  {
    id: 137,
    nombre: "Soporte de celular Goku SSJ3",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Goku lanzando un Kamehameha.",
    descripcionDetallada: "Soporte para celular de Goku en Super Saiyajin 3 lanzando un Kamehameha.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US52a685617d1d06/design/2025-02-08_accd0239512e2.png",
      "https://makerworld.bblmw.com/makerworld/model/US52a685617d1d06/design/2025-02-08_c27739e9b1d2f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US52a685617d1d06/design/2025-02-08_35fd4c7db67ff.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US52a685617d1d06/design/2025-02-08_d02ea64f49502.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US52a685617d1d06/222461307/instance/2025-02-08_6f7f24cd298f7.jpg"
    ],
    precioBase: 215,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 96,
      horas: 5.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "dragon ball",
      "goku",
      "kamehameha",
      "celular"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1085459#profileId-222461307",
      autor: "Asci3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Dragon Ball (Shueisha / Toei / Akira Toriyama)."
    },
    activo: true
  },
  {
    id: 138,
    nombre: "Soporte de celular Stitch",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Stitch abrazando tu celular.",
    descripcionDetallada: "Soporte para celular de Stitch, tierno y estable. Ideal para escritorio o buró.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/DSM00000002741285/design/54f51e862dc3ef07.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000002741285/design/ceb41697b153df9d.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000002741285/design/afe8eda2597d4cd5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000002741285/design/5b8fa9a814b110d9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000002741285/design/a0c9dbe9d058b353.jpg"
    ],
    precioBase: 100,
    escalaDescuento: null,
    tamano: "8 cm",
    impresion: {
      material: "PLA",
      gramos: 59,
      horas: 2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "stitch",
      "disney",
      "celular"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2741285#profileId-796471425",
      autor: "puresa",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor. Usa una marca o personaje de terceros: Stitch (Disney)."
    },
    activo: true
  },
  {
    id: 140,
    nombre: "Soporte de celular osito",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Osito tierno que sostiene tu celular.",
    descripcionDetallada: "Soporte minimalista con forma de osito sentado que sostiene el celular. Perfecto para escritorio o buró.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/UScaa833f7f324ba/design/2025-12-01_65c5183ce029.jpg",
      "https://makerworld.bblmw.com/makerworld/model/UScaa833f7f324ba/design/2025-12-01_94ace1bcdae0d8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/UScaa833f7f324ba/design/2025-12-01_0f690b6982374.jpg",
      "https://makerworld.bblmw.com/makerworld/model/UScaa833f7f324ba/design/2025-12-01_2be17f8313755.png",
      "https://makerworld.bblmw.com/makerworld/model/UScaa833f7f324ba/design/2025-12-01_bb8f90dd1811b8.png"
    ],
    precioBase: 110,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 70,
      horas: 2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "oso",
      "osito",
      "celular",
      "tierno"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2064395#profileId-499274197",
      autor: "Floramilla",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 141,
    nombre: "Soporte moderno para audífonos",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Base curva y minimalista para tus audífonos.",
    descripcionDetallada: "Soporte para audífonos de diseño suave y curvo, sin ensamblaje. Le da orden y estilo a tu escritorio.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US25af55f0f6a3c8/design/2024-10-28_1dd7ffcfae1dc.png",
      "https://makerworld.bblmw.com/makerworld/model/US25af55f0f6a3c8/251128145/instance/2024-10-28_8ed1dbf0f13cf.jpeg"
    ],
    precioBase: 265,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 176,
      horas: 4.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "audifonos",
      "headphones",
      "escritorio",
      "setup"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/737349#profileId-251128145",
      autor: "JAM3D l Adriana Angélico",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 142,
    nombre: "Soporte de celular gatito",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Gatito minimalista para tu celular.",
    descripcionDetallada: "Soporte de celular con forma de gato, sencillo y estable.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/DSM00000002094802/design/2025-12-09_ae834e3585ba1.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000002094802/design/2025-12-09_ac1a64a6148e2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000002094802/design/2025-12-09_37be03946e178.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000002094802/design/2025-12-09_0d211d2d0a6f8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/DSM00000002094802/design/2025-12-09_a624213976459.jpg"
    ],
    precioBase: 65,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 38,
      horas: 1.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "gato",
      "celular",
      "tierno"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2094802#profileId-510740223",
      autor: "Hazel",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 143,
    nombre: "Soporte de celular T-Rex",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Un T-Rex sostiene tu teléfono.",
    descripcionDetallada: "Soporte de celular con forma de T-Rex. Divertido para niños y fans de los dinosaurios.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US1bc008e11b5dbc/design/2024-12-19_099f1642db25e.png",
      "https://makerworld.bblmw.com/makerworld/model/US1bc008e11b5dbc/design/2024-12-19_2913198fad03.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1bc008e11b5dbc/design/2024-12-19_2dc5cfa775e77.png",
      "https://makerworld.bblmw.com/makerworld/model/US1bc008e11b5dbc/180980602/instance/2024-12-19_3d7f63d2df717.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 22,
      horas: 0.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "dinosaurio",
      "trex",
      "celular",
      "infantil"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/894081#profileId-180980602",
      autor: "oruoff",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 144,
    nombre: "Soporte de celular cráneo de dinosaurio",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Cráneo fósil con garras que sostienen el celular.",
    descripcionDetallada: "Soporte inspirado en un cráneo fósil de dinosaurio, con base sólida y garras que sostienen la mayoría de los celulares.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USd0dff251d85f38/design/2025-07-29_891230dc908738.png",
      "https://makerworld.bblmw.com/makerworld/model/USd0dff251d85f38/design/2025-07-29_380f264afd93b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd0dff251d85f38/design/2025-07-29_b0b4b039b0233.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd0dff251d85f38/design/2025-07-29_fb19dce7441dc8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd0dff251d85f38/design/2025-07-29_731d6071605288.jpg"
    ],
    precioBase: 370,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 185,
      horas: 9.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "dinosaurio",
      "fosil",
      "celular",
      "craneo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1651692#profileId-365718840",
      autor: "3DLEX",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 145,
    nombre: "Soporte para laptop V2",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Soporte resistente para laptop de 13–14\".",
    descripcionDetallada: "Soporte para laptop reforzado y estable, para equipos de 13–14 pulgadas. Mejora la postura y la ventilación.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf95dcd53ed3c7b/design/2025-04-24_c8e9fb9bcc23.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf95dcd53ed3c7b/design/2025-02-23_1f4b4697cfcd.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf95dcd53ed3c7b/design/2025-02-23_132987f2ca0b2.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf95dcd53ed3c7b/design/2025-02-23_48ec71a50805a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USf95dcd53ed3c7b/design/2025-02-23_6ab2df0f37359.jpg"
    ],
    precioBase: 400,
    escalaDescuento: null,
    tamano: "Laptop de 13–14\"",
    impresion: {
      material: "PLA",
      gramos: 242,
      horas: 7.7,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "laptop",
      "portatil",
      "escritorio",
      "ergonomico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1139653#profileId-234713351",
      autor: "Zenit",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 146,
    nombre: "Gancho para audífonos bajo escritorio",
    categoria: "Soportes y Gaming",
    descripcionCorta: "Se atornilla al borde del escritorio.",
    descripcionDetallada: "Gancho para audífonos con tornillo de ajuste: se fija al borde de cualquier escritorio y tiene cabezal giratorio que no raya.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US78331f0973f9fa/design/2024-11-30_ca596d0187f0b.png",
      "https://makerworld.bblmw.com/makerworld/model/US78331f0973f9fa/design/2024-11-30_ee090183a6a65.png",
      "https://makerworld.bblmw.com/makerworld/model/US78331f0973f9fa/design/2024-04-01_48c7708c70377.png",
      "https://makerworld.bblmw.com/makerworld/model/US78331f0973f9fa/design/2024-03-06_ec73adb03df5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US78331f0973f9fa/design/2024-11-30_9fe9264197d0e.jpg"
    ],
    precioBase: 75,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 44,
      horas: 1.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "audifonos",
      "gancho",
      "escritorio",
      "setup"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/231863#profileId-166265582",
      autor: "ngprint",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 10,
    nombre: "Casita de jengibre miniatura",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Casita de galleta navideña a escala 1:6, en dos colores.",
    descripcionDetallada: "Casa de jengibre en miniatura (escala 1:6) con detalles de glaseado en blanco. Perfecta para nacimientos, dioramas navideños, casas de muñecas o como adorno de mesa. Impresa con boquilla fina de 0.2 mm para mayor detalle.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USd04641d354bb8f/design/2025-10-25_0711998a7ad5e8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd04641d354bb8f/design/2025-10-25_a0724d158875e8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USd04641d354bb8f/452157615/instance/2025-10-25_9385aeb6b9a6f8.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: "Escala 1:6",
    impresion: {
      material: "PLA",
      gramos: 6,
      horas: 1.3,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "navidad",
      "jengibre",
      "miniatura",
      "adorno",
      "diciembre"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1923215#profileId-2063752",
      autor: "DnAle",
      licencia: "CC BY",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito al autor."
    },
    activo: true
  },
  {
    id: 15,
    nombre: "Árbol de Navidad realista",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Pino navideño con ramas detalladas, 17.5 cm de alto.",
    descripcionDetallada: "Árbol de Navidad de aspecto realista con base para mayor estabilidad. Se imprime sin soportes y sus ramas finas le dan mucho volumen. Tamaño de 17.5 cm; también disponible en otros tamaños (pregunta en las notas). Ideal para centros de mesa, escritorios o nacimientos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc15fac54dc046a/design/2024-11-18_27eea2cb972b9.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USc15fac54dc046a/design/2024-11-18_bef4b3a5e2132.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USc15fac54dc046a/design/2024-11-18_f65f8dc5206418.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USc15fac54dc046a/design/2024-11-18_065b53473d27f.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USc15fac54dc046a/design/2024-11-18_ef59e89455b6d.jpeg"
    ],
    precioBase: 525,
    escalaDescuento: null,
    tamano: "17.5 cm de alto",
    impresion: {
      material: "PLA",
      gramos: 151,
      horas: 18.6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "navidad",
      "arbol",
      "pino",
      "adorno",
      "diciembre"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/799707#profileId-739559",
      autor: "gabriele_ristallo",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 18,
    nombre: "Árboles de Navidad estilo Japandi (set de 2)",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Dos pinos minimalistas de 12.5 y 8.5 cm.",
    descripcionDetallada: "Set de dos árboles de Navidad minimalistas de estilo japandi (fusión japonesa-escandinava): uno grande de 12.5 cm y uno pequeño de 8.5 cm. Lucen muy bien en verde oscuro, olivo o beige. Ideales para una decoración navideña elegante y discreta.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US19f5bbe1a7bcb5/design/2025-10-14_caa57d42b095b.png",
      "https://makerworld.bblmw.com/makerworld/model/US19f5bbe1a7bcb5/design/2025-10-14_1e7db67633ad48.png",
      "https://makerworld.bblmw.com/makerworld/model/US19f5bbe1a7bcb5/design/2025-10-14_b71acfdcb420e8.png",
      "https://makerworld.bblmw.com/makerworld/model/US19f5bbe1a7bcb5/449238420/instance/2025-10-22_2baef293fcba98.png"
    ],
    precioBase: 140,
    escalaDescuento: null,
    tamano: "12.5 cm y 8.5 cm",
    impresion: {
      material: "PLA",
      gramos: 69,
      horas: 3.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "navidad",
      "arbol",
      "japandi",
      "minimalista",
      "nordico",
      "diciembre"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1885816#profileId-2053743",
      autor: "3D2K",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 161,
    nombre: "Esqueleto \"chill\" relajado",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Esqueleto sonriente con espacio para vela LED.",
    descripcionDetallada: "Esqueleto relajado y sonriente; en la versión grande cabe una vela LED en su caja torácica. Ideal para Halloween y Día de Muertos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US1c9df3734a506f/design/2025-09-21_3ba500e316e82.png",
      "https://makerworld.bblmw.com/makerworld/model/US1c9df3734a506f/design/2025-09-21_0901eacc70588.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1c9df3734a506f/design/2025-09-21_5e5496222868e.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1c9df3734a506f/design/2025-09-21_e9dac97d1f3c58.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US1c9df3734a506f/design/2025-09-21_176cdf41c5b7c.jpg"
    ],
    precioBase: 495,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 282,
      horas: 10.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "halloween",
      "dia de muertos",
      "esqueleto",
      "calavera"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1815363#profileId-416623465",
      autor: "DTM247",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 162,
    nombre: "Calaveritas de bolsillo",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Mini calaveras tiernas y espeluznantes.",
    descripcionDetallada: "Calaveritas de tamaño bolsillo, rápidas de imprimir. Perfectas para ofrenda, bolos de Halloween o recuerdos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb8a0720a6e94e9/design/2025-08-20_60eb357102b4f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb8a0720a6e94e9/design/2025-08-20_20d484b34aafe.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 2,
      horas: 0.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "calavera",
      "dia de muertos",
      "halloween",
      "ofrenda"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1716426#profileId-385407160",
      autor: "3dPrintInPlace",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 163,
    nombre: "Fantasma con globo",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Fantasmita tierno con su globo.",
    descripcionDetallada: "Decoración de fantasma con globo a 4 colores, con base estable. Para Halloween o decorar el escritorio.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USc8d7fe1ccf0b6/design/2025-10-21_a3b32cee1e5f1.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc8d7fe1ccf0b6/design/2025-10-21_c999691c1d3ca8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc8d7fe1ccf0b6/design/2025-12-05_47281e7a072fa8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc8d7fe1ccf0b6/design/2025-10-21_3bcea9f0e9d058.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USc8d7fe1ccf0b6/design/2025-10-21_bfbad1e7daceb8.jpg"
    ],
    precioBase: 85,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 39,
      horas: 1.9,
      colores: 4,
      multicolor: false
    },
    etiquetas: [
      "halloween",
      "fantasma",
      "globo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1911210#profileId-505214201",
      autor: "Sevro",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 164,
    nombre: "Calabacitas mini",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Calabacitas de Halloween a 3 colores.",
    descripcionDetallada: "Mini calabazas de Halloween para escritorio, repisa o centro de mesa.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9dc063f019f40b/design/2025-08-19_8604005ee934a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9dc063f019f40b/384428707/instance/2025-08-19_47278e7e386098.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 8,
      horas: 0.5,
      colores: 3,
      multicolor: true
    },
    etiquetas: [
      "halloween",
      "calabaza",
      "pumpkin"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1713428#profileId-384428707",
      autor: "3dPrintInPlace",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 165,
    nombre: "Calabaza Jack-o'-lantern para vela LED",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Calabaza tallada clásica con tapa.",
    descripcionDetallada: "Calabaza Jack-o'-lantern clásica para velas LED de hasta 38 mm. No necesita pegamento: la tapa es removible.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US18e684258dcf09/design/2024-10-19_b8cbc217d4b198.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US18e684258dcf09/design/2024-08-27_1c1141614204c.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US18e684258dcf09/116445794/instance/2024-08-27_c4b9c5cf3428.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US18e684258dcf09/116445794/instance/2024-08-27_3c46d1cd27ef7.png",
      "https://makerworld.bblmw.com/makerworld/model/US18e684258dcf09/116445794/instance/2024-08-27_c0913b2824a39.png"
    ],
    precioBase: 175,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 49,
      horas: 5.9,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "halloween",
      "calabaza",
      "vela",
      "led"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/608645#profileId-116445794",
      autor: "NUKDDD",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 166,
    nombre: "Ofrenda de Día de Muertos",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Altar tradicional de 3 niveles.",
    descripcionDetallada: "Altarcito tradicional de Día de Muertos de 3 niveles, a 3 colores. Ideal para escritorio, oficina o escuela.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USfcb40ee3aded38/design/2dba091b9d9d716b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfcb40ee3aded38/design/160cf68d2da4e1e5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfcb40ee3aded38/design/33f5fade89df5a3a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfcb40ee3aded38/design/390c8ada7f02a6e3.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USfcb40ee3aded38/1035920981/instance/bb2bbf34ff0d53a8.jpg"
    ],
    precioBase: 260,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 134,
      horas: 5.2,
      colores: 3,
      multicolor: false
    },
    etiquetas: [
      "dia de muertos",
      "ofrenda",
      "altar",
      "mexico"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/3379371#profileId-1035920981",
      autor: "Makia.Crea",
      licencia: "CC BY",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito al autor."
    },
    activo: true
  },
  {
    id: 167,
    nombre: "Esfera navideña con nombre",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Esfera personalizada para el árbol.",
    descripcionDetallada: "Esfera navideña con el nombre que quieras, a dos colores. Perfecta para cada miembro de la familia. Escribe los nombres en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USebc0e25e374ad9/design/2024-12-01_7bdf3522cb5df.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USebc0e25e374ad9/design/2024-12-01_92a3fb3bbd941.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USebc0e25e374ad9/design/2024-12-01_48dd72960bf7c8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USebc0e25e374ad9/design/2024-12-01_978778979e54f8.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 12,
      horas: 1.1,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "navidad",
      "esfera",
      "nombre",
      "personalizado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/840408#profileId-167414954",
      autor: "rauloko11500",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 168,
    nombre: "Adorno navideño con nombre",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Adorno colgante personalizado.",
    descripcionDetallada: "Adorno navideño personalizable con nombres de familia, amigos o mascotas. Escribe el nombre en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US8f35a138d293b0/design/2024-11-23_b1d934f91cc45.png",
      "https://makerworld.bblmw.com/makerworld/model/US8f35a138d293b0/design/2024-11-23_b99077bfd879b.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8f35a138d293b0/design/2024-11-23_c1bcb16df3a21.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8f35a138d293b0/design/2024-11-23_79cfbc03c68de.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8f35a138d293b0/163557457/instance/2024-11-26_f83db3024073a.jpg"
    ],
    precioBase: 50,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 23,
      horas: 1.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "navidad",
      "adorno",
      "nombre",
      "personalizado"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/816097#profileId-163557457",
      autor: "Mr.Fusible",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 169,
    nombre: "Estrella para punta del árbol",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Estrella facetada para coronar tu árbol.",
    descripcionDetallada: "Estrella para la punta del árbol de Navidad con muchos ángulos que reflejan la luz.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb1dc4da4c20643/design/2024-11-21_38f1fd1b439fc.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb1dc4da4c20643/design/2024-11-21_ac78648534ba7.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb1dc4da4c20643/design/2024-11-21_c29a7e0d8ad91.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USb1dc4da4c20643/design/2024-11-21_8cbdb4f651642.png",
      "https://makerworld.bblmw.com/makerworld/model/USb1dc4da4c20643/160232581/instance/2024-11-20_55160176abd5d.png"
    ],
    precioBase: 255,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 138,
      horas: 5.8,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "navidad",
      "estrella",
      "arbol"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/808758#profileId-160232581",
      autor: "KitKat423",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 170,
    nombre: "Nochebuena articulada",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Flor de Nochebuena con hojas ajustables.",
    descripcionDetallada: "Nochebuena (poinsettia) con hojas articuladas que se acomodan a tu gusto. Una flor navideña que dura para siempre.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USde5efe0e743679/design/2024-12-11_f4f4ad8b1e85c.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USde5efe0e743679/design/2024-12-11_d202a7e4556b5.jpeg"
    ],
    precioBase: 480,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: null,
      horas: null,
      colores: 5,
      multicolor: true
    },
    etiquetas: [
      "navidad",
      "nochebuena",
      "flor"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/870844#profileId-178808757",
      autor: "RFSworks",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 171,
    nombre: "Reno minimalista",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Reno japandi de 13.5 cm.",
    descripcionDetallada: "Reno decorativo de estilo japandi, moderno y elegante para la temporada de invierno.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US54e683eb15165c/design/2025-11-16_c540fbdd15f248.png",
      "https://makerworld.bblmw.com/makerworld/model/US54e683eb15165c/design/2025-11-16_e5f21ba237c8.png",
      "https://makerworld.bblmw.com/makerworld/model/US54e683eb15165c/design/2025-11-16_cd91059ecb16c.png",
      "https://makerworld.bblmw.com/makerworld/model/US54e683eb15165c/design/2025-11-16_cc6cff360a294.png",
      "https://makerworld.bblmw.com/makerworld/model/US54e683eb15165c/design/2025-11-16_c3bf8d58f06a58.jpeg"
    ],
    precioBase: 50,
    escalaDescuento: null,
    tamano: "13.5 cm de alto",
    impresion: {
      material: "PLA",
      gramos: 21,
      horas: 1.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "navidad",
      "reno",
      "japandi",
      "minimalista"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2003920#profileId-478597394",
      autor: "SabreDesign",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 172,
    nombre: "Rosa eterna con corazón",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Rosa con un corazón en el tallo.",
    descripcionDetallada: "Rosa impresa en 3D con un corazón curvado en el tallo. Un regalo de amor que no se marchita, ideal para 14 de febrero.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe9f5e068224536/design/2025-12-25_54b498fcfce81.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe9f5e068224536/design/2025-12-25_5bf4eef4672928.png",
      "https://makerworld.bblmw.com/makerworld/model/USe9f5e068224536/design/2025-12-25_bba5e369cb25a8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe9f5e068224536/design/2025-12-25_4449214830b9a.png",
      "https://makerworld.bblmw.com/makerworld/model/USe9f5e068224536/design/2025-12-25_dcfde64622b7.png"
    ],
    precioBase: 60,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 29,
      horas: 1.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "14 de febrero",
      "rosa",
      "amor",
      "san valentin"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2157365#profileId-536109712",
      autor: "MR2305",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 173,
    nombre: "Caja corazón steampunk con engranajes",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Corazón mecánico que se abre girando.",
    descripcionDetallada: "Caja de regalo en forma de corazón con mecanismo de engranajes visible: se abre al girar. Ideal para guardar un anillo o una nota.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9c13b8f87ed855/design/59069ecdf6273363.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US9c13b8f87ed855/design/2026-01-20_5c43001ea8f348.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US9c13b8f87ed855/design/2026-01-20_8c941f6cbacd18.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US9c13b8f87ed855/design/2026-01-20_aa45cd37a52ef8.jpeg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 8,
      horas: 0.9,
      colores: 2,
      multicolor: false
    },
    etiquetas: [
      "14 de febrero",
      "corazon",
      "engranajes",
      "steampunk"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2280939#profileId-583759032",
      autor: "Liviu",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 174,
    nombre: "Letrero mini \"I Love You\"",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Letrero tipo \"piso mojado\" con mensaje de amor.",
    descripcionDetallada: "Pequeño letrero de amor estilo señal de advertencia, a dos colores. Un detalle rápido y muy popular.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe07d3c42fa264f/design/2025-04-20_ad0fe5e3a569c8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe07d3c42fa264f/design/2024-12-31_adaa27c5129b9.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe07d3c42fa264f/design/2024-12-31_d7f033143f27a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe07d3c42fa264f/design/2024-12-31_57e41bf00a4f7.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe07d3c42fa264f/design/2024-12-31_1abb0f671fa2b.jpg"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 12,
      horas: 0.5,
      colores: 2,
      multicolor: true
    },
    etiquetas: [
      "14 de febrero",
      "amor",
      "love",
      "regalo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/935499#profileId-191221891",
      autor: "HumbleBee",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 175,
    nombre: "Portarretrato corazón \"Te amo\"",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Marco de fotos en forma de corazón.",
    descripcionDetallada: "Portarretrato con forma de corazón y la frase \"Te amo\". Regalo perfecto para San Valentín o aniversario.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US820892b61847b0/design/2025-01-25_2cb0c9802515a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US820892b61847b0/design/2025-01-25_8bad92627c42f.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US820892b61847b0/design/2025-01-25_f5375e19a4598.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US820892b61847b0/design/2025-01-25_75c9f5333b97.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US820892b61847b0/design/2025-01-25_3123871c177b9.jpeg"
    ],
    precioBase: 310,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 209,
      horas: 5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "14 de febrero",
      "te amo",
      "marco",
      "foto"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1035899#profileId-211066875",
      autor: "Denixoid",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 571,
    nombre: "Árbol de Navidad espiral minimalista",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Árbol moderno en espiral.",
    descripcionDetallada: "Árbol de Navidad minimalista en espiral.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe11a183eb1e66c/design/ecf8cf92cb6b63fa.png",
      "https://makerworld.bblmw.com/makerworld/model/USe11a183eb1e66c/design/d2a419d12fba15e8.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe11a183eb1e66c/design/95524485f4911243.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe11a183eb1e66c/design/fc39c571844d9744.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USe11a183eb1e66c/design/9d5f1e01996bbaf1.jpg"
    ],
    precioBase: 80,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 40,
      horas: 2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "navidad",
      "arbol",
      "minimalista"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/3338545#profileId-1014338689",
      autor: "NowCraft3D",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 580,
    nombre: "Marco de amor San Valentín",
    categoria: "Temporada y Festividades",
    descripcionCorta: "Portarretrato para San Valentín.",
    descripcionDetallada: "Marco de fotos para San Valentín.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US73559cdd63104c/design/2025-01-17_5e300bb0a7eb5.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US73559cdd63104c/design/2025-03-04_e5237931e93e6.webp"
    ],
    precioBase: 85,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 50,
      horas: 1.7,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "san valentin",
      "marco",
      "amor"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1005257#profileId-206709737",
      autor: "Zenit",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 6,
    nombre: "Vitrina miniatura con arco (1:12)",
    categoria: "Maquetas e Ingeniería",
    descripcionCorta: "Mueble miniatura con puertas que abren y cajones, escala 1:12.",
    descripcionDetallada: "Vitrina en miniatura a escala 1:12 para casas de muñecas, dioramas o para exhibir colecciones pequeñas. Tiene puertas con bisagras funcionales, cajones con jaladeras y estantes de altura ajustable. Se imprime en varias piezas que se ensamblan.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USed4ec1e39a6dea/design/2025-03-30_227d541bcbb338.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USed4ec1e39a6dea/design/2025-03-30_8b74cf078457a.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USed4ec1e39a6dea/design/2025-03-30_37c3430525464.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USed4ec1e39a6dea/design/2025-03-30_cd42627f048c08.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USed4ec1e39a6dea/design/2025-03-30_9733e3c5272e28.jpeg"
    ],
    precioBase: 215,
    escalaDescuento: null,
    tamano: "Escala 1:12",
    impresion: {
      material: "PLA",
      gramos: 120,
      horas: 3.6,
      colores: 3,
      multicolor: false
    },
    etiquetas: [
      "miniatura",
      "casa de munecas",
      "diorama",
      "mueble",
      "coleccion"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1265345#profileId-1290968",
      autor: "Printed a mini",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 176,
    nombre: "Mobiliario arquitectónico 1:100",
    categoria: "Maquetas e Ingeniería",
    descripcionCorta: "Set de muebles para maquetas de arquitectura.",
    descripcionDetallada: "Set de muebles a escala 1:100 (salas, camas, comedores, baños y más) para amueblar maquetas arquitectónicas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USf3b8e8bf5547e/design/5dd2bc4bf7e23e34.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USf3b8e8bf5547e/design/1e5d3abbc17bcfe0.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USf3b8e8bf5547e/design/8f540302187ee903.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USf3b8e8bf5547e/design/371ff4689b1575b8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USf3b8e8bf5547e/design/79a3da3d53208230.jpeg"
    ],
    precioBase: 165,
    escalaDescuento: null,
    tamano: "Escala 1:100",
    impresion: {
      material: "PLA",
      gramos: 54,
      horas: 5.4,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maqueta",
      "arquitectura",
      "muebles",
      "escala"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2671913#profileId-762382224",
      autor: "jonathan.lnd",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 177,
    nombre: "Mobiliario a escala 1/8\" y 1/4\"",
    categoria: "Maquetas e Ingeniería",
    descripcionCorta: "Muebles para arquitectura e interiorismo.",
    descripcionDetallada: "Set de mobiliario para maquetas de arquitectura y diseño de interiores, a escala 1/8\" o 1/4\".",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US342bb4258a063a/design/2025-04-04_e0f42b507e8098.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US342bb4258a063a/design/2025-04-04_2c60897037a89.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US342bb4258a063a/design/2025-04-04_2fad3415b6e37.jpg"
    ],
    precioBase: 50,
    escalaDescuento: null,
    tamano: "Escala 1/8\" o 1/4\"",
    impresion: {
      material: "PLA",
      gramos: 23,
      horas: 1.3,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maqueta",
      "arquitectura",
      "muebles",
      "interiorismo"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1284249#profileId-267799120",
      autor: "Sir Red Alfredo",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 178,
    nombre: "Personas a escala para maquetas",
    categoria: "Maquetas e Ingeniería",
    descripcionCorta: "Set de figuras humanas en distintas poses.",
    descripcionDetallada: "Figuras humanas de varias edades y poses para dar vida a maquetas. Escala 1:100 (también 1:50).",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US1eff46b356a127/design/2025-12-24_1daad10c37bec.png",
      "https://makerworld.bblmw.com/makerworld/model/US1eff46b356a127/design/2025-10-28_c15d72f54c81e.png",
      "https://makerworld.bblmw.com/makerworld/model/US1eff46b356a127/533816164/instance/2025-12-24_bc3a2b93c39ae.png",
      "https://makerworld.bblmw.com/makerworld/model/US1eff46b356a127/533816164/instance/2025-10-27_48fd641de52b5.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: "Escala 1:100 o 1:50",
    impresion: {
      material: "PLA",
      gramos: 4,
      horas: 1.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maqueta",
      "personas",
      "escala",
      "arquitectura"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1931762#profileId-533816164",
      autor: "L.A.",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 179,
    nombre: "Figuras estilizadas a escala",
    categoria: "Maquetas e Ingeniería",
    descripcionCorta: "Hombres y mujeres estilizados.",
    descripcionDetallada: "Figuras arquitectónicas estilizadas (hombre y mujer) que se pueden escalar a la medida de tu maqueta.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US897da769f3ab94/design/2025-01-18_c223501e540dc.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US897da769f3ab94/design/f27be08bf8355ef4.webp",
      "https://makerworld.bblmw.com/makerworld/model/US897da769f3ab94/design/81c75fa9ca07b923.webp",
      "https://makerworld.bblmw.com/makerworld/model/US897da769f3ab94/design/fa00ffb065283981.webp",
      "https://makerworld.bblmw.com/makerworld/model/US897da769f3ab94/design/6fe1e5670047a190.webp"
    ],
    precioBase: 165,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 43,
      horas: 6,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maqueta",
      "personas",
      "escala"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1008310#profileId-205316825",
      autor: "naregj91",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 180,
    nombre: "Set de árboles para maqueta",
    categoria: "Maquetas e Ingeniería",
    descripcionCorta: "Árboles de varias formas y tamaños.",
    descripcionDetallada: "Colección de árboles en miniatura de distintas formas y tamaños para maquetas, dioramas o juegos de mesa.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USb2c4aad7e7aff9/design/93778d2119781cda.png",
      "https://makerworld.bblmw.com/makerworld/model/USb2c4aad7e7aff9/design/9d3168648c611f7a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/USb2c4aad7e7aff9/802922816/instance/7e2bdabe72e76aea.jpg"
    ],
    precioBase: 145,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 46,
      horas: 4.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "maqueta",
      "arboles",
      "urbanismo",
      "diorama"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/2893300#profileId-802922816",
      autor: "Elzofans",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 181,
    nombre: "Engranes a medida",
    categoria: "Maquetas e Ingeniería",
    descripcionCorta: "Engranes rectos, cónicos, cremalleras y más.",
    descripcionDetallada: "Engranes paramétricos hechos a la medida: rectos, de anillo, cónicos, sinfín y cremalleras. Indica módulo, número de dientes y diámetro en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USce1b6106deb1fb/design/2025-01-28_46e7d287a1351.png",
      "https://makerworld.bblmw.com/makerworld/model/USce1b6106deb1fb/design/2025-01-28_d9bd7e50e5b65.png",
      "https://makerworld.bblmw.com/makerworld/model/USce1b6106deb1fb/design/2025-01-28_c52ecae10189c.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USce1b6106deb1fb/design/2025-01-28_ae276df7f98e8.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/USce1b6106deb1fb/design/2025-01-28_bc35b5e723c6.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 20,
      horas: 0.9,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "engranes",
      "mecanica",
      "robotica",
      "ingenieria"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1049303#profileId-213925147",
      autor: "Koolm",
      licencia: "CC BY",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito al autor."
    },
    activo: true
  },
  {
    id: 182,
    nombre: "Poleas dentadas a medida",
    categoria: "Maquetas e Ingeniería",
    descripcionCorta: "Poleas GT2/T5 para correas de distribución.",
    descripcionDetallada: "Poleas dentadas paramétricas para correas GT2, T5 y otras. Indica perfil, dientes y diámetro de eje en las notas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US9b91b17532dcfa/design/2025-02-12_d56f8efb89162.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US9b91b17532dcfa/design/2025-02-12_eeb715c950d6c.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US9b91b17532dcfa/design/2025-02-12_078d9100139.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US9b91b17532dcfa/design/2025-02-12_662e89b45eba.png",
      "https://makerworld.bblmw.com/makerworld/model/US9b91b17532dcfa/design/2025-02-12_cc0525ac8fdd4.png"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 13,
      horas: 0.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "polea",
      "gt2",
      "mecanica",
      "robotica"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1102161#profileId-226899850",
      autor: "Koolm",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 183,
    nombre: "Base para Arduino Uno y protoboard",
    categoria: "Maquetas e Ingeniería",
    descripcionCorta: "Une el Arduino y la protoboard en una sola base.",
    descripcionDetallada: "Base que sostiene un Arduino Uno y una protoboard de 160 mm juntos. Requiere 3 tornillos y tuercas M3.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US103a2a7629d40d/design/2024-04-08_f09218b28a2b4.jpeg",
      "https://makerworld.bblmw.com/makerworld/model/US103a2a7629d40d/design/2024-04-08_98147bfaf571a.png",
      "https://makerworld.bblmw.com/makerworld/model/US103a2a7629d40d/66424536/instance/2024-04-08_d5234217f20fd.png"
    ],
    precioBase: 80,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 54,
      horas: 1.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "arduino",
      "protoboard",
      "electronica",
      "proyecto"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/419772#profileId-66424536",
      autor: "Clyde Frog",
      licencia: "CC0",
      permiteVenta: true,
      notaLicencia: "Dominio público: uso comercial libre."
    },
    activo: true
  },
  {
    id: 184,
    nombre: "Estación de trabajo modular Arduino",
    categoria: "Maquetas e Ingeniería",
    descripcionCorta: "Estación ajustable para prototipos.",
    descripcionDetallada: "Estación de trabajo modular para Arduino UNO y protoboard, ajustable y ampliable con módulos. Ideal para prácticas.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US8759829cc1481a/design/2025-01-09_bd6d599761682.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8759829cc1481a/design/2025-01-09_6cc7659d020fc.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8759829cc1481a/design/2025-01-09_40b0d626d2b9a.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US8759829cc1481a/design/2025-01-09_d84e005cc77ba.jpg"
    ],
    precioBase: 230,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 138,
      horas: 4.5,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "arduino",
      "protoboard",
      "electronica",
      "laboratorio"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/906327#profileId-546626786",
      autor: "DJL 3Designs",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  },
  {
    id: 185,
    nombre: "Carcasa delgada Arduino Uno",
    categoria: "Maquetas e Ingeniería",
    descripcionCorta: "Caja de dos piezas para proteger tu Arduino.",
    descripcionDetallada: "Carcasa compacta de dos piezas para Arduino Uno, con acceso a puertos.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/USe775ade3b4107/design/2023-09-22_f37168c68ceb4.webp",
      "https://makerworld.bblmw.com/makerworld/model/USe775ade3b4107/design/2023-09-22_eef7684a840e4.webp",
      "https://makerworld.bblmw.com/makerworld/model/USe775ade3b4107/design/2023-09-22_283ae530a47b1.webp",
      "https://makerworld.bblmw.com/makerworld/model/USe775ade3b4107/design/2023-09-22_12734da97d477.webp",
      "https://makerworld.bblmw.com/makerworld/model/USe775ade3b4107/design/2023-09-22_14b22c5df733c.webp"
    ],
    precioBase: 45,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PLA",
      gramos: 24,
      horas: 0.7,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "arduino",
      "carcasa",
      "electronica"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/16287#profileId-25958714",
      autor: "Kazikk",
      licencia: "CC BY",
      permiteVenta: true,
      notaLicencia: "Permite uso comercial dando crédito al autor."
    },
    activo: true
  },
  {
    id: 186,
    nombre: "Cremallera y piñón",
    categoria: "Maquetas e Ingeniería",
    descripcionCorta: "Mecanismo de movimiento lineal en PETG.",
    descripcionDetallada: "Conjunto de cremallera y piñón para movimiento lineal suave. Útil para prototipos y proyectos de mecánica.",
    imagenes: [
      "https://makerworld.bblmw.com/makerworld/model/US52bb1f7fba117e/design/2025-02-06_bdf63b6b3cf88.jpg",
      "https://makerworld.bblmw.com/makerworld/model/US52bb1f7fba117e/221118310/instance/2025-02-06_fed0fc25a336e.jpg"
    ],
    precioBase: 50,
    escalaDescuento: null,
    tamano: null,
    impresion: {
      material: "PETG",
      gramos: 19,
      horas: 1.2,
      colores: 1,
      multicolor: false
    },
    etiquetas: [
      "engranes",
      "cremallera",
      "mecanica",
      "robotica"
    ],
    fuente: {
      plataforma: "MakerWorld",
      url: "https://makerworld.com/es/models/1079883#profileId-221118310",
      autor: "CorwineCustoms.3D LLC",
      licencia: "Standard Digital File License",
      permiteVenta: false,
      notaLicencia: "Prohíbe vender las piezas impresas sin autorización del autor."
    },
    activo: true
  }
];
