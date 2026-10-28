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
│   ├── catalog.js          ← inicio (tendencias + filas por categoría), pestañas, buscador y grid
│   ├── product-modal.js    ← galería, ficha técnica y calculadora
│   ├── cart-drawer.js      ← carrito lateral y datos del cliente
│   ├── checkout.js         ← método de pago y mensaje de WhatsApp
│   ├── quote.js            ← «Cotiza tu diseño» (pedido personalizado por WhatsApp)
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
| Poner la dirección pública del sitio | `urlSitio` en `js/config.js` (para los enlaces del pedido) |
| Cambiar número de WhatsApp o CLABE   | `js/config.js`               |
| Activar descuentos por mayoreo       | `descuentosActivos: true` en `js/config.js` |
| Cambiar la escala de descuentos      | `CONFIG.escalaDescuento`     |
| Agregar una pestaña                  | `CONFIG.categorias`          |
| Cambiar «Lo que está de moda»        | `CONFIG.tendencias` (`manual` = SKUs fijos, `temporada` = palabras por mes) |
| Cambiar colores                      | `:root` en `css/styles.css`  |

Las pestañas sin productos se ocultan solas.

Al cambiar archivos, sube el número `?v=` de `index.html` para que los navegadores no muestren la versión anterior.

## Inicio y cotizaciones

- **Inicio**: primero «Lo que está de moda» (productos de temporada según el mes + los SKUs de `CONFIG.tendencias.manual`), luego una fila por categoría con «Ver todo».
- **¿No encuentras lo que quieres?**: aparece en el inicio, dentro de los resultados, al final de cada lista y en cada búsqueda. Abre un formulario que manda la solicitud por WhatsApp; las fotos o archivos el cliente los adjunta en ese mismo chat.
- Los precios se muestran como **precios de referencia**; el total final se confirma por WhatsApp antes del pago.

## Identificadores y enlaces

Cada producto tiene `sku` (por ejemplo `3DC-0123`), que se muestra discreto en la ficha y en el carrito,
y `fechaRegistro` (AAAA-MM-DD), que no ve el cliente. El buscador también encuentra productos por su `sku`.

`index.html#p=3DC-0123` abre directamente la ficha de ese producto. El mensaje de WhatsApp incluye
el `sku` y ese enlace por cada artículo, para que reconozcas rápido qué compró el cliente.

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

## Precios

Los precios salen de `costos_catalogo_3d.xlsx` (hoja «Parámetros»: filamento por color, luz, impresora,
mano de obra, empaque y margen). Cambia ahí tus costos y la columna «Precio final» da el precio de cada pieza.
El extractor usa la misma fórmula (valores en `CONFIG.costos`).

## Publicar en GitHub Pages

1. Sube el **contenido** de esta carpeta a la raíz de un repositorio.
2. Settings → Pages → Branch `main`, carpeta `/ (root)`.
3. En 1–2 minutos queda en `https://<usuario>.github.io/<repositorio>/`.
