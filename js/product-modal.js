/* =========================================================
   MODAL DE PRODUCTO: galería, ficha técnica y calculadora
   ========================================================= */
App.productModal = (() => {
  const { $, $$, esc, fmt, round2, pct } = App;
  const state = { p: null, i: 0, qty: 1 };
  const modal = () => $("#productModal");

  function open(id) {
    const p = App.byId(id);
    if (!p) return;
    Object.assign(state, { p, i: 0, qty: 1 });

    $("#pmCat").textContent = p.categoria;
    $("#pmTitle").textContent = p.nombre;
    $("#pmDesc").textContent = p.descripcionDetallada;

    const many = p.imagenes.length > 1;
    $("#stageTrack").innerHTML = p.imagenes.map((src, k) =>
      `<img src="${App.img(src, 900)}" alt="${esc(p.nombre)} – imagen ${k + 1}" ${App.IMG_ATTR}>`).join("");
    $("#thumbs").innerHTML = many ? p.imagenes.map((src, k) =>
      `<button class="thumb ${k ? "" : "on"}" data-i="${k}" aria-label="Ver imagen ${k + 1}"><img src="${App.img(src, 200)}" alt="" ${App.IMG_ATTR}></button>`).join("") : "";
    $("#dots").innerHTML = many ? p.imagenes.map((_, k) => `<span class="${k ? "" : "on"}"></span>`).join("") : "";
    $("#dots").style.display = many ? "" : "none";
    $("#prevImg").style.display = $("#nextImg").style.display = many ? "" : "none";
    $("#stageTrack").style.transform = "translateX(0)";

    renderSpecs(p);
    const inCart = App.cart.items.some(i => i.id === id);
    $("#addLabel").textContent = inCart ? "Agregar más al carrito" : "Agregar al carrito";
    updateCalc();
    App.openLayer(modal());
    $("#productModal .modal-box").scrollTop = 0;
  }

  function renderSpecs(p) {
    const imp = p.impresion || {};
    const specs = [
      ["Tamaño", p.tamano || "Consultar"],
      imp.material && ["Material", imp.material],
      imp.colores && ["Colores", imp.colores === 1 ? "1 color (a elegir)" : `${imp.colores} colores`],
      imp.horas && ["Producción", imp.horas < 1 ? "Menos de 1 h por pieza" : `~${Math.ceil(imp.horas)} h por pieza`]
    ].filter(Boolean);
    $("#pmSpecs").innerHTML = specs.map(([k, v]) => `<div class="spec"><div class="k">${esc(k)}</div><div class="v">${esc(v)}</div></div>`).join("");

    const f = p.fuente;
    $("#pmCredit").innerHTML = f?.autor
      ? `Diseño de <b>${esc(f.autor)}</b>${f.url ? ` · <a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.plataforma || "ver original")}</a>` : ""}`
      : "";
  }

  function go(i) {
    const n = state.p.imagenes.length;
    state.i = (i + n) % n;
    $("#stageTrack").style.transform = `translateX(-${state.i * 100}%)`;
    $$("#thumbs .thumb").forEach((t, k) => t.classList.toggle("on", k === state.i));
    $$("#dots span").forEach((d, k) => d.classList.toggle("on", k === state.i));
  }

  function updateCalc() {
    const { p, qty: q } = state;
    const t = App.tierFor(p, q), u = App.unitPrice(p, q), total = round2(u * q);
    const escala = App.escala(p);
    $("#qtyInput").value = q;
    $("#pmTiersBox").style.display = escala.length > 1 ? "" : "none";

    $("#pmTiers").innerHTML = escala.map(tt => `
      <div class="tier ${tt === t ? "on" : ""}">
        <div class="r">${App.tierLabel(tt)}</div>
        <div class="p">${fmt(round2(p.precioBase * (1 - tt.descuento)))}</div>
        <div class="d">${tt.descuento ? "−" + pct(tt.descuento) + "%" : "Precio base"}</div>
      </div>`).join("");

    $("#calcLines").innerHTML = `
      <div><span>Precio unitario</span><span>${fmt(u)}${t.descuento ? ` <s style="color:var(--ink-3)">${fmt(p.precioBase)}</s>` : ""}</span></div>
      <div><span>${q} × ${fmt(u)}</span><span>${fmt(total)}</span></div>
      ${t.descuento ? `<div class="save"><span>Ahorras (−${pct(t.descuento)}%)</span><span>${fmt(round2(p.precioBase * q - total))}</span></div>` : ""}`;

    const next = escala.find(tt => tt.min > q);
    $("#nudge").textContent = next
      ? `💡 Agrega ${next.min - q} pz más y paga ${fmt(round2(p.precioBase * (1 - next.descuento)))} c/u (−${pct(next.descuento)}%).`
      : "";
    $("#calcTotal").textContent = fmt(total);
  }

  function init() {
    $("#prevImg").addEventListener("click", () => go(state.i - 1));
    $("#nextImg").addEventListener("click", () => go(state.i + 1));
    $("#thumbs").addEventListener("click", e => { const b = e.target.closest(".thumb"); if (b) go(+b.dataset.i); });

    // Deslizar con el dedo en móvil
    let x0 = null;
    $("#stage").addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
    $("#stage").addEventListener("touchend", e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40 && state.p.imagenes.length > 1) go(state.i + (dx < 0 ? 1 : -1));
      x0 = null;
    });

    // Flechas del teclado
    document.addEventListener("keydown", e => {
      if (App.topLayer() !== modal() || e.target.tagName === "INPUT" || state.p.imagenes.length < 2) return;
      if (e.key === "ArrowRight") go(state.i + 1);
      if (e.key === "ArrowLeft") go(state.i - 1);
    });

    $("#qtyMinus").addEventListener("click", () => { state.qty = App.clampQty(state.qty - 1); updateCalc(); });
    $("#qtyPlus").addEventListener("click", () => { state.qty = App.clampQty(state.qty + 1); updateCalc(); });
    $("#qtyInput").addEventListener("input", e => { if (e.target.value !== "") { state.qty = App.clampQty(e.target.value); updateCalc(); } });
    $("#qtyInput").addEventListener("blur", e => { state.qty = App.clampQty(e.target.value); updateCalc(); });

    $("#addToCart").addEventListener("click", () => {
      App.cart.add(state.p.id, state.qty);
      App.drawer.render();
      App.drawer.bump();
      App.closeLayer(modal());
      App.toast(`✅ ${state.qty} × ${state.p.nombre} agregado`);
    });
  }

  return { init, open };
})();
