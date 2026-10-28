/* =========================================================
   UTILIDADES GENERALES
   ========================================================= */
window.App = window.App || {};

App.$ = (s, el = document) => el.querySelector(s);
App.$$ = (s, el = document) => [...el.querySelectorAll(s)];

App.fmt = n => new Intl.NumberFormat("es-MX", {
  style: "currency", currency: "MXN",
  minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2
}).format(n);

App.round2 = n => Math.round(n * 100) / 100;
App.esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
App.norm = s => String(s ?? "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
App.clampQty = q => Math.max(1, Math.min(999, parseInt(q, 10) || 1));

/* ---------- Productos ---------- */
App.productos = () => PRODUCTOS.filter(p =>
  p.activo !== false && (!CONFIG.ocultarSinLicenciaComercial || p.fuente?.permiteVenta));
App.byId = id => App.productos().find(p => p.id === id);
App.bySku = sku => App.productos().find(p => (p.sku || "").toLowerCase() === String(sku).toLowerCase());
App.skuOf = p => p.sku || ("3DC-" + String(p.id).padStart(4, "0"));
// Enlace directo a la ficha del producto (abre el modal al cargar la página)
App.productUrl = p => {
  let base = CONFIG.urlSitio || (/^https?:/.test(location.protocol) ? location.origin + location.pathname : "");
  return base ? base.replace(/#.*$/, "") + "#p=" + encodeURIComponent(App.skuOf(p)) : "";
};

const SIN_DESCUENTO = [{ min: 1, max: null, descuento: 0 }];
App.escala = p => CONFIG.descuentosActivos ? (p.escalaDescuento || CONFIG.escalaDescuento) : SIN_DESCUENTO;
App.tierFor = (p, qty) => {
  const e = App.escala(p);
  return e.find(t => qty >= t.min && (t.max === null || qty <= t.max)) || e[0];
};
App.unitPrice = (p, qty) => App.round2(p.precioBase * (1 - App.tierFor(p, qty).descuento));
App.tierLabel = t => t.max === null ? `${t.min}+ pz` : `${t.min}–${t.max} pz`;
App.maxDiscount = p => Math.max(...App.escala(p).map(t => t.descuento));
App.pct = d => Math.round(d * 100);

App.textoBusqueda = p => App.norm([
  p.nombre, p.sku, p.categoria, p.descripcionCorta, p.descripcionDetallada, (p.etiquetas || []).join(" ")
].join(" "));
App.coincide = (p, q) => {
  const words = App.norm(q).trim().split(/\s+/).filter(Boolean);
  if (!words.length) return true;
  const hay = App.textoBusqueda(p);
  return words.every(w => hay.includes(w));
};

/* ---------- Imágenes ---------- */
// Pide a la CDN de MakerWorld una versión redimensionada (más ligera)
App.img = (url, w = 800) => {
  if (/bblmw\.com/.test(url)) return `${url.split("?")[0]}?x-oss-process=image/resize,w_${w}/format,webp`;
  if (/unsplash\.com/.test(url)) return url.replace(/([?&])w=\d+/, `$1w=${w}`);
  return url;
};

// Si una imagen no carga, muestra un placeholder en lugar del ícono roto
window.imgFallback = function (el) {
  if (el.dataset.fb) return;
  el.dataset.fb = 1;
  const t = (el.alt || "3D").trim().charAt(0).toUpperCase();
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#ccfbf1'/><stop offset='1' stop-color='#99f6e4'/></linearGradient></defs><rect width='400' height='300' fill='url(#g)'/><g fill='none' stroke='#0f766e' stroke-width='6' stroke-linejoin='round' opacity='.35'><path d='M200 70l-70 40v80l70 40 70-40v-80z'/><path d='M130 110l70 40 70-40M200 150v80'/></g><text x='200' y='275' text-anchor='middle' font-family='sans-serif' font-size='22' font-weight='700' fill='#0f766e' opacity='.6'>${t}</text></svg>`;
  el.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
};
App.IMG_ATTR = `onerror="imgFallback(this)" loading="lazy" decoding="async" referrerpolicy="no-referrer"`;

/* ---------- Toast ---------- */
let toastT;
App.toast = msg => {
  const t = App.$("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove("show"), 2400);
};

/* ---------- Almacenamiento local seguro ---------- */
App.store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};

/* ---------- Capas (modales y carrito lateral) ---------- */
(() => {
  const layers = [];
  let lastFocus = null;

  App.openLayer = el => {
    if (!layers.length) lastFocus = document.activeElement;
    layers.push(el);
    el.classList.add("open");
    App.$("#overlay").classList.add("open");
    document.body.classList.add("locked");
    setTimeout(() => { const f = el.querySelector("[data-close]"); f && f.focus({ preventScroll: true }); }, 50);
  };

  App.closeLayer = el => {
    el = el || layers[layers.length - 1];
    if (!el) return;
    el.classList.remove("open");
    const i = layers.indexOf(el);
    if (i > -1) layers.splice(i, 1);
    if (!layers.length) {
      App.$("#overlay").classList.remove("open");
      document.body.classList.remove("locked");
      lastFocus?.focus?.({ preventScroll: true });
    }
  };

  App.topLayer = () => layers[layers.length - 1];
})();
