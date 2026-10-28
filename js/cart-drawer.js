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

  function render() {
    updateCount();
    const has = App.cart.items.length > 0;
    $("#customerForm").style.display = has ? "" : "none";
    $("#toCheckout").disabled = !has;

    if (!has) {
      $("#cartList").innerHTML = `<div class="cart-empty"><div class="big">🛒</div><p><b>Tu carrito está vacío</b></p><p style="font-size:.88rem;margin-top:4px">Explora el catálogo y agrega tus productos.</p><button class="btn btn-ghost" style="margin-top:16px" data-keep-shopping>Ver productos</button></div>`;
      $("#cartTotals").innerHTML = "";
      return;
    }

    $("#cartList").innerHTML = App.cart.lines().map(l => `
      <div class="ci" data-id="${l.p.id}">
        <img src="${App.img(l.p.imagenes[0], 160)}" alt="${esc(l.p.nombre)}" ${App.IMG_ATTR}>
        <div>
          <div class="ci-name">${esc(l.p.nombre)}</div>
          <div class="ci-sku">${esc(App.skuOf(l.p))}</div>
          <div class="ci-meta">${fmt(l.unit)} c/u${l.tier.descuento ? `<span class="tag">−${pct(l.tier.descuento)}%</span>` : ""}</div>
          <div class="stepper sm">
            <button data-act="dec" aria-label="Menos">−</button>
            <input type="number" min="1" max="999" value="${l.qty}" data-act="set" aria-label="Cantidad de ${esc(l.p.nombre)}">
            <button data-act="inc" aria-label="Más">+</button>
          </div>
        </div>
        <div class="ci-right">
          <div class="ci-sub">${fmt(l.subtotal)}</div>
          <button class="ci-del" data-act="del">Quitar</button>
        </div>
      </div>`).join("");

    const t = App.cart.totals();
    $("#cartTotals").innerHTML = `
      <div><span>Piezas</span><span>${t.pcs}</span></div>
      ${t.ahorro > 0 ? `<div><span>Subtotal sin descuento</span><span>${fmt(t.base)}</span></div><div class="save"><span>Descuento por mayoreo</span><span>−${fmt(t.ahorro)}</span></div>` : ""}
      <div class="grand"><span>Total estimado</span><span>${fmt(t.total)}</span></div>
      <p class="ref-note">Precios de referencia: te confirmamos el total por WhatsApp.</p>`;
  }

  /* ---------- Datos del cliente ---------- */
  function saveForm() {
    App.store.set("3dps_form", { name: $("#cName").value, loc: $("#cLoc").value, notes: $("#cNotes").value });
  }
  function loadForm() {
    const f = App.store.get("3dps_form", null);
    if (!f) return;
    $("#cName").value = f.name || "";
    $("#cLoc").value = f.loc || "";
    $("#cNotes").value = f.notes || "";
  }

  function customer() {
    return {
      name: $("#cName").value.trim(),
      loc: $("#cLoc").value.trim(),
      notes: $("#cNotes").value.trim()
    };
  }

  function validate() {
    let ok = true, first = null;
    const mark = (fid, bad, input) => { $(fid).classList.toggle("err", bad); if (bad) { ok = false; first = first || input; } };
    mark("#fName", $("#cName").value.trim().length < 3, $("#cName"));
    mark("#fLoc", $("#cLoc").value.trim().length < 3, $("#cLoc"));
    first?.focus();
    return ok;
  }

  function clearNotes() { $("#cNotes").value = ""; saveForm(); }

  function init() {
    App.cart.init();

    $("#cartList").addEventListener("click", e => {
      if (e.target.closest("[data-keep-shopping]")) { App.closeLayer(drawer()); return; }
      const btn = e.target.closest("[data-act]");
      if (!btn || btn.tagName === "INPUT") return;
      const id = +btn.closest(".ci").dataset.id;
      const item = App.cart.items.find(i => i.id === id);
      const act = btn.dataset.act;
      if (act === "inc") App.cart.setQty(id, item.qty + 1);
      if (act === "dec" && item.qty > 1) App.cart.setQty(id, item.qty - 1);
      if (act === "del") App.cart.remove(id);
      render();
    });
    $("#cartList").addEventListener("change", e => {
      if (e.target.dataset.act !== "set") return;
      App.cart.setQty(+e.target.closest(".ci").dataset.id, e.target.value);
      render();
    });

    $$("[data-open-cart]").forEach(b => b.addEventListener("click", () => { render(); App.openLayer(drawer()); }));

    ["cName", "cLoc", "cNotes"].forEach(id => $("#" + id).addEventListener("input", e => {
      e.target.closest(".field").classList.remove("err");
      saveForm();
    }));
    loadForm();

    $("#toCheckout").addEventListener("click", () => {
      if (!App.cart.items.length) return;
      if (!validate()) { App.toast("Completa tus datos de entrega"); return; }
      App.checkout.open();
    });

    render();
  }

  return { init, render, bump, customer, clearNotes };
})();
