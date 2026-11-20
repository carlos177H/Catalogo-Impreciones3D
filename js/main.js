/* =========================================================
   ARRANQUE DE LA APP
   ========================================================= */
(async () => {
  const { $, $$ } = App;

  // Cerrar capas: fondo oscuro, botones X, clic fuera del modal y tecla Escape
  $("#overlay").addEventListener("click", () => App.closeLayer());
  $$(".modal").forEach(m => m.addEventListener("click", e => { if (e.target === m) App.closeLayer(m); }));
  $$("[data-close]").forEach(b => b.addEventListener("click", e => App.closeLayer(e.target.closest(".modal, .drawer"))));
  document.addEventListener("keydown", e => { if (e.key === "Escape" && App.topLayer()) App.closeLayer(); });

  $("#year").textContent = new Date().getFullYear();
  if ($("#appVersion")) $("#appVersion").textContent = CONFIG.version || "";

  // Textos del hero según la escala de descuento configurada
  const e = CONFIG.descuentosActivos ? CONFIG.escalaDescuento.filter(t => t.descuento > 0) : [];
  $("#perks").innerHTML = (e.length
    ? e.map((t, i) => `<span class="perk">${["📦", "🎯", "🚀"][i] || "🏷️"} <b>${t.min}+ pz</b> −${App.pct(t.descuento)}% por pieza</span>`).join("")
    : `<span class="perk">🖨️ Impreso a pedido</span><span class="perk">🎨 Colores a elegir</span>`
  ) + `<span class="perk">💬 Pedidos por WhatsApp</span>`;

  // ── Carga rápida ──
  // 1) Productos de la BD y sesión se piden en paralelo.
  // 2) Si ya tenemos el catálogo local (productos.js), se muestra de inmediato
  //    y la BD lo actualiza después solo si cambió algo.
  initSupabase();
  const firma = () => App.productos().map(p => `${p.id}:${p.precioBase}:${p.nombre}`).join("|");
  const hayLocales = Array.isArray(window.PRODUCTOS) && window.PRODUCTOS.length > 0;
  const firmaLocal = hayLocales ? firma() : "";
  const dbPromise = cargarProductosSupabase().catch(() => false);
  const authPromise = App.auth.init();

  if (!hayLocales) await dbPromise;   // sin respaldo local: hay que esperar a la BD
  await authPromise;

  // Auth buttons
  $("#authLoginBtn")?.addEventListener("click", () => App.auth.openLogin());
  $("#authUserBtn")?.addEventListener("click", () => App.userPanel.open());

  // (Los enlaces de correo — verificación y recuperación — los procesa App.auth.init)

  App.mantenimiento?.init();
  App.invitacion?.init();
  App.notif?.init();
  App.drawer.init();
  App.productModal.init();
  App.catalog.init();

  // Enlace directo: index.html#p=3DC-0123 abre la ficha de ese producto
  const openFromHash = () => {
    // #pedidos (desde una notificación push): abrir "Mis pedidos"
    if (location.hash === "#pedidos") {
      history.replaceState(null, "", location.pathname + location.search);
      if (App.auth.getPerfil()) App.userPanel.open("pedidos"); else App.auth.openLogin("Inicia sesión para ver tus pedidos.");
      return;
    }
    const m = location.hash.match(/^#p=([\w-]+)/i);
    const p = m && App.bySku(decodeURIComponent(m[1]));
    if (p && App.topLayer() !== App.$("#productModal")) App.productModal.open(p.id);
  };
  openFromHash();
  window.addEventListener("hashchange", openFromHash);

  // Cuando llegan los datos de la BD: volver a dibujar solo si cambió algo
  if (hayLocales) {
    dbPromise.then(ok => {
      if (!ok || firma() === firmaLocal) return;
      console.log("[App] Catálogo actualizado con datos de la BD.");
      App.catalog.render();
      App.drawer.render();
    });
  }
})();
