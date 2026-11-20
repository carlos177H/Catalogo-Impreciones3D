/* =========================================================
   CARRITO LATERAL: lista de productos + datos del cliente
   ========================================================= */
App.drawer = (() => {
  const { $, $$, esc, fmt, pct } = App;
  const drawer = () => $("#drawer");

  function updateCount() {
    const n = App.cart.count();
    $$("[data-count]").forEach(c => c.textContent = n > 99 ? "99+" : n);
  }
  function bump() {
    $$("[data-count]").forEach(c => { c.classList.remove("bump"); void c.offsetWidth; c.classList.add("bump"); });
  }

  /* Aviso: compra como invitado (WhatsApp) o con cuenta */
  const ICO_USER = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
  const ICO_CLOUD = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9z"/><path d="m9 14 2 2 4-4"/></svg>`;
  function renderMode() {
    const el = $("#cartMode");
    if (!el) return;
    const perfil = App.auth?.getPerfil();
    el.innerHTML = perfil
      ? `<div class="cart-mode ok">${ICO_CLOUD}<div><b>Carrito guardado en tu cuenta</b><span>Lo verás en cualquier dispositivo donde inicies sesión.</span></div></div>`
      : `<div class="cart-mode">${ICO_USER}<div><b>Comprando como invitado</b><span>Tu pedido se envía por WhatsApp. <button type="button" class="link-btn" data-cart-login>Inicia sesión</button> para guardar tu carrito.</span></div></div>`;
    el.querySelector("[data-cart-login]")?.addEventListener("click", () => App.auth.openLogin());

    $("#toCheckout").textContent = perfil ? "Revisar y confirmar pedido →" : "Proceder al pago →";

    // Con sesión, prellenar el nombre si está vacío
    if (perfil && !$("#cName").value.trim()) { $("#cName").value = perfil.nombre_completo; saveForm(); }
  }

  function render() {
    updateCount();
    renderMode();
    const has = App.cart.items.length > 0;
    $("#customerForm").style.display = has ? "" : "none";
    $("#toCheckout").disabled = !has;

    if (!has) {
      $("#cartList").innerHTML = `<div class="cart-empty"><div class="big">🛒</div><p><b>Tu carrito está vacío</b></p><p style="font-size:.88rem;margin-top:4px">Explora el catálogo y agrega tus productos.</p><button class="btn btn-ghost" style="margin-top:16px" data-keep-shopping>Ver productos</button></div>`;
      $("#cartTotals").innerHTML = "";
      return;
    }

    $("#cartList").innerHTML = App.cart.lines().map(l => `
      <div class="ci" data-id="${l.p.id}" data-key="${esc(l.key)}">
        <button class="ci-img" type="button" data-act="ver" aria-label="Ver ${esc(l.p.nombre)}">
          <img src="${App.img(l.p.imagenes[0], 160)}" data-alt="${esc(l.p.imagenes.slice(1, 5).map(u => App.img(u, 160)).join("|"))}" alt="" ${App.IMG_ATTR}>
          <span class="ci-zoom" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8v6M8 11h6"/></svg></span>
        </button>
        <div>
          <button class="ci-name" type="button" data-act="ver">${esc(l.p.nombre)}</button>
          <div class="ci-sku">${esc(App.skuOf(l.p))}</div>
          ${l.color
            ? `<div class="ci-color">${colorChip(l.color)}<button type="button" class="link-btn" data-act="color">Cambiar</button></div>`
            : `<div class="ci-color falta" data-act="color" role="button" tabindex="0">🎨 <b>Elige el color</b> <span>(obligatorio)</span></div>`}
          <div class="ci-meta">${fmt(l.unit)} c/u${l.tier.descuento ? `<span class="tag">−${pct(l.tier.descuento)}%</span>` : ""}</div>
          <div class="stepper sm">
            <button data-act="dec" aria-label="Menos">−</button>
            <input type="number" min="1" max="999" value="${l.qty}" data-act="set" aria-label="Cantidad de ${esc(l.p.nombre)}">
            <button data-act="inc" aria-label="Más">+</button>
          </div>
        </div>
        <div class="ci-right">
          <div class="ci-sub">${fmt(l.subtotal)}</div>
          <button class="ci-ver" data-act="ver">Ver detalles</button>
          <button class="ci-del" data-act="del">Quitar</button>
        </div>
      </div>`).join("");

    const t = App.cart.totals();
    $("#cartTotals").innerHTML = `
      <div><span>Piezas</span><span>${t.pcs}</span></div>
      ${t.ahorro > 0 ? `<div><span>Subtotal sin descuento</span><span>${fmt(t.base)}</span></div><div class="save"><span>Descuento por mayoreo</span><span>−${fmt(t.ahorro)}</span></div>` : ""}
      <div class="grand"><span>Total estimado</span><span>${fmt(t.total)}</span></div>
      <p class="ref-note">${App.auth?.getPerfil() ? "Precios de referencia: verás el estatus de tu pedido en Mi cuenta." : "Precios de referencia: te confirmamos el total por WhatsApp."}</p>`;
  }

  /* Muestra "● Rojo + ● Negro" con su color */
  function colorChip(txt) {
    return txt.split(" + ").map(c => {
      const hex = (App.opciones.COLORES.find(x => x[0] === c) || [])[1];
      return `<span class="cchip"><i style="${hex ? "background:" + hex : ""}" class="${c === App.opciones.FOTO ? "foto" : hex ? "" : "otro"}"></i>${esc(c)}</span>`;
    }).join(`<span class="cplus">+</span>`);
  }

  /* Elegir o cambiar el color de una línea del carrito */
  function editarColor(key) {
    const item = App.cart.find(key), p = item && App.byId(item.id);
    if (!p) return;
    $("#coInner").innerHTML = `
      <h2 id="coTitle">Color de tu pieza</h2>
      <p class="co-sub">${esc(p.nombre)}</p>
      <div class="field" style="margin-top:14px"><label>Color <span class="req">*</span></label><div id="ccPick"></div>
        <span class="hint">Elige un color para continuar.</span></div>
      <div class="co-actions">
        <button class="btn btn-primary btn-block" id="ccSave" style="height:50px">Guardar color</button>
        <button class="btn btn-ghost btn-block" data-back>Cancelar</button>
      </div>`;
    const pick = App.opciones.colorPicker($("#ccPick"), { foto: true, value: item.color });
    const modal = $("#checkoutModal");
    $("#ccSave").addEventListener("click", () => {
      if (!pick.valid()) { pick.marcarError(); return App.toast("Elige el color"); }
      App.cart.setColor(key, pick.value());
      App.closeLayer(modal);
      render();
    });
    $("[data-back]", $("#coInner")).addEventListener("click", () => App.closeLayer(modal));
    App.openLayer(modal);
  }

  /* ---------- Datos del cliente ---------- */
  let zona = null;
  function saveForm() {
    if (!zona) return; // aún no se carga el formulario
    App.store.set("3dps_form", { name: $("#cName").value, zona: zona?.value() || null, loc: zona?.texto() || "", notes: $("#cNotes").value });
  }
  function loadForm() {
    const f = App.store.get("3dps_form", null) || {};
    $("#cName").value = f.name || "";
    $("#cNotes").value = f.notes || "";
    zona = App.opciones.zonaPicker($("#cZona"), { prefijo: "cz", label: "", value: f.zona, onChange: saveForm });
  }

  function customer() {
    return {
      name: $("#cName").value.trim(),
      loc: zona?.texto() || "",
      notes: $("#cNotes").value.trim()
    };
  }

  function validate() {
    let ok = true, first = null;
    const mark = (fid, bad, input) => { $(fid).classList.toggle("err", bad); if (bad) { ok = false; first = first || input; } };
    mark("#fName", $("#cName").value.trim().length < 3, $("#cName"));
    mark("#fLoc", !zona?.valid(), null);
    if (first) first.focus(); else if (!zona?.valid()) zona?.focus();
    return ok;
  }

  function clearNotes() { $("#cNotes").value = ""; saveForm(); }

  function init() {
    App.cart.init();

    $("#cartList").addEventListener("click", e => {
      if (e.target.closest("[data-keep-shopping]")) { App.closeLayer(drawer()); return; }
      const btn = e.target.closest("[data-act]");
      if (!btn || btn.tagName === "INPUT") return;
      const ci = btn.closest(".ci"), id = +ci.dataset.id, key = ci.dataset.key;
      const item = App.cart.find(key);
      const act = btn.dataset.act;
      if (act === "inc") App.cart.setQty(key, item.qty + 1);
      if (act === "dec" && item.qty > 1) App.cart.setQty(key, item.qty - 1);
      if (act === "del") App.cart.remove(key);
      if (act === "color") { editarColor(key); return; }
      if (act === "ver") { App.closeLayer(drawer()); App.productModal.open(id); return; }
      render();
    });
    $("#cartList").addEventListener("change", e => {
      if (e.target.dataset.act !== "set") return;
      App.cart.setQty(e.target.closest(".ci").dataset.key, e.target.value);
      render();
    });

    $$("[data-open-cart]").forEach(b => b.addEventListener("click", () => { render(); App.openLayer(drawer()); }));

    ["cName", "cNotes"].forEach(id => $("#" + id).addEventListener("input", e => {
      e.target.closest(".field").classList.remove("err");
      saveForm();
    }));
    loadForm();

    $("#toCheckout").addEventListener("click", () => {
      if (!App.cart.items.length) return;
      const falta = App.cart.sinColor()[0];
      if (falta) { App.toast(`🎨 Elige el color de “${falta.p.nombre}”`); editarColor(falta.key); return; }
      if (!validate()) { App.toast("Completa tus datos de entrega"); return; }
      App.checkout.open();
    });

    App.auth?.onAuthChange(() => render());
    render();
  }

  return { init, render, bump, customer, clearNotes };
})();
