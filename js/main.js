/* =========================================================
   ARRANQUE DE LA APP
   ========================================================= */
(() => {
  const { $, $$ } = App;

  // Cerrar capas: fondo oscuro, botones X, clic fuera del modal y tecla Escape
  $("#overlay").addEventListener("click", () => App.closeLayer());
  $$(".modal").forEach(m => m.addEventListener("click", e => { if (e.target === m) App.closeLayer(m); }));
  $$("[data-close]").forEach(b => b.addEventListener("click", e => App.closeLayer(e.target.closest(".modal, .drawer"))));
  document.addEventListener("keydown", e => { if (e.key === "Escape" && App.topLayer()) App.closeLayer(); });

  $("#brandName").textContent = CONFIG.negocio;
  $("#year").textContent = new Date().getFullYear();

  // Textos del hero según la escala de descuento configurada
  const e = CONFIG.descuentosActivos ? CONFIG.escalaDescuento.filter(t => t.descuento > 0) : [];
  $("#perks").innerHTML = (e.length
    ? e.map((t, i) => `<span class="perk">${["📦", "🎯", "🚀"][i] || "🏷️"} <b>${t.min}+ pz</b> −${App.pct(t.descuento)}% por pieza</span>`).join("")
    : `<span class="perk">🖨️ Impreso a pedido</span><span class="perk">🎨 Colores a elegir</span>`
  ) + `<span class="perk">💬 Pedidos por WhatsApp</span>`;

  App.drawer.init();
  App.productModal.init();
  App.catalog.init();

  // Enlace directo: index.html#p=3DC-0123 abre la ficha de ese producto
  const openFromHash = () => {
    const m = location.hash.match(/^#p=([\w-]+)/i);
    const p = m && App.bySku(decodeURIComponent(m[1]));
    if (p && App.topLayer() !== App.$("#productModal")) App.productModal.open(p.id);
  };
  openFromHash();
  window.addEventListener("hashchange", openFromHash);
})();
