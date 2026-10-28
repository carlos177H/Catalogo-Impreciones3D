# 3D Print Shop · Catálogo

Catálogo web estático (HTML + CSS + JavaScript, sin frameworks) listo para GitHub Pages.

## Estructura

```
catalogo/
├── index.html              ← solo la estructura de la página
├── css/
│   └── styles.css          ← todo el diseño (colores en :root)
├── js/
│   ├── config.js           ← WhatsApp, banco, categorías, descuentos, costos
│   ├── data/
│   │   └── productos.js    ← "base de datos" de productos
│   ├── utils.js            ← funciones comunes (precios, formato, imágenes, modales)
│   ├── cart.js             ← estado del carrito y totales
│   ├── catalog.js          ← pestañas, buscador y grid
│   ├── product-modal.js    ← galería, ficha técnica y calculadora
│   ├── cart-drawer.js      ← carrito lateral y datos del cliente
│   ├── checkout.js         ← método de pago y mensaje de WhatsApp
│   └── main.js             ← arranque
└── tools/
    └── extraer-makerworld.js  ← genera registros desde MakerWorld
```

Los scripts son clásicos (no módulos ES), así que el sitio funciona igual en GitHub Pages
que abriendo `index.html` con doble clic.

## Lo que más vas a editar

| Quiero…                              | Archivo                      |
|--------------------------------------|------------------------------|
| Agregar / quitar / cambiar productos | `js/data/productos.js`       |
| Ocultar un producto sin borrarlo     | `activo: false` en su registro |
| Cambiar número de WhatsApp o CLABE   | `js/config.js`               |
| Activar descuentos por mayoreo       | `descuentosActivos: true` en `js/config.js` |
| Cambiar la escala de descuentos      | `CONFIG.escalaDescuento`     |
| Agregar una pestaña                  | `CONFIG.categorias`          |
| Cambiar colores                      | `:root` en `css/styles.css`  |

Las pestañas sin productos se ocultan solas.

## Agregar productos desde MakerWorld

1. Abre el modelo en makerworld.com (elige el perfil de impresión si quieres uno específico).
2. F12 → **Console** → pega todo `tools/extraer-makerworld.js` → Enter.
3. El registro queda copiado: pégalo en `js/data/productos.js` y cambia el `id`.

Varios a la vez (después de pegar el script):

```js
mwLote([
  "https://makerworld.com/es/models/...",
  "https://makerworld.com/es/models/..."
])
```

Revisa siempre `categoria`, `precioBase`, `descripcionCorta` y **la licencia**
(`fuente.permiteVenta`). Con `ocultarSinLicenciaComercial: true` en `config.js`
el catálogo oculta automáticamente los que no se pueden vender.

## Precio sugerido

```
precio = (gramos × costo/g × [1.15 si es multicolor] + horas × costo/h) × margen
```

Valores por defecto: PLA $0.40/g, PETG $0.45/g, $8/h, margen ×2.5, mínimo $45,
redondeado a $5. Cámbialos en `CONFIG.costos` y en la parte de arriba del extractor.

## Publicar en GitHub Pages

1. Sube el **contenido** de esta carpeta a la raíz de un repositorio.
2. Settings → Pages → Branch `main`, carpeta `/ (root)`.
3. En 1–2 minutos queda en `https://<usuario>.github.io/<repositorio>/`.
