/* =========================================================
   CHECKOUT: método de pago, CLABE, comprobante y WhatsApp
   ========================================================= */
App.checkout = (() => {
  const { $, $$, esc, fmt, pct } = App;
  const state = { payment: "efectivo" };
  const modal = () => $("#checkoutModal");

  const ICON_COPY = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>`;
  const ICON_WA = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>`;

  function open() {
    // Con sesión: el pedido se registra en la app. Sin sesión: WhatsApp (como antes).
    if (App.auth?.getPerfil() && App.pedidos) return openCuenta();
    const c = App.drawer.customer(), t = App.cart.totals();
    const b = CONFIG.banco;
    const clabeFmt = /^\d{18}$/.test(b.clabe) ? b.clabe.replace(/(\d{3})(\d{3})(\d{11})(\d{1})/, "$1 $2 $3 $4") : b.clabe.replace(/(\d{4})(?=\d)/g, "$1 ");

    $("#coInner").innerHTML = `
      <h2 id="coTitle">Confirmar pedido</h2>
      <p class="co-sub">Para <b>${esc(c.name)}</b> · ${esc(c.loc)}</p>
      <div class="summary">
        ${App.cart.lines().map(l => `<div class="row"><span>${l.qty} × ${esc(l.p.nombre)}</span><span>${fmt(l.subtotal)}</span></div>`).join("")}
        ${t.ahorro > 0 ? `<div class="row" style="color:var(--accent-ink);font-weight:700"><span>Descuento por mayoreo</span><span>−${fmt(t.ahorro)}</span></div>` : ""}
        <div class="row total"><span>Total estimado</span><span>${fmt(t.total)}</span></div>
      </div>
      <p class="ref-note" style="margin:-8px 0 16px">Son precios de referencia: te confirmamos el total final por WhatsApp antes de pagar.</p>

      <div class="section-t" style="margin-top:0">Método de pago</div>
      <div class="pay-opts" role="radiogroup">
        <label class="pay"><input type="radio" name="pay" value="efectivo" ${state.payment === "efectivo" ? "checked" : ""}>
          <div><div class="t">Efectivo contra entrega</div><div class="s">Pagas al recibir tu pedido</div></div><span class="emo">💵</span></label>
        <label class="pay"><input type="radio" name="pay" value="transferencia" ${state.payment === "transferencia" ? "checked" : ""}>
          <div><div class="t">Transferencia bancaria</div><div class="s">SPEI a la cuenta indicada</div></div><span class="emo">🏦</span></label>
      </div>

      <div class="bank ${state.payment === "transferencia" ? "show" : ""}" id="bankBox">
        <div class="bank-row"><span>Banco</span><b>${esc(b.nombre)}</b></div>
        <div class="bank-row"><span>CLABE</span>
          <div class="clabe-wrap"><b class="clabe">${clabeFmt}</b>
          <button class="copy-btn" id="copyClabe" type="button">${ICON_COPY}<span>Copiar</span></button></div></div>
        <div class="bank-row"><span>Titular</span><b>${esc(b.titular)}</b></div>
        <div class="bank-row"><span>Monto estimado</span><b>${fmt(t.total)}</b></div>
        <div class="receipt-tip"><span class="i">📸</span>
          <span>Cuando te confirmemos el total por WhatsApp, haz tu transferencia y <b>envía la captura del comprobante en el mismo chat</b>. Así confirmamos tu pago.</span>
        </div>
      </div>

      <div class="co-actions">
        <button class="btn btn-wa btn-block" id="sendWa" style="height:52px;font-size:.98rem">${ICON_WA} Confirmar y enviar pedido por WhatsApp</button>
        <button class="btn btn-ghost btn-block" data-back>← Volver al carrito</button>
      </div>`;

    $$('input[name="pay"]', $("#coInner")).forEach(r => r.addEventListener("change", e => {
      state.payment = e.target.value;
      $("#bankBox").classList.toggle("show", state.payment === "transferencia");
    }));
    $("#copyClabe").addEventListener("click", copyClabe);
    $("#sendWa").addEventListener("click", send);
    $("[data-back]", $("#coInner")).addEventListener("click", () => App.closeLayer(modal()));

    App.openLayer(modal());
    $("#checkoutModal .modal-box").scrollTop = 0;
  }

  async function copyClabe() {
    const btn = $("#copyClabe"), txt = CONFIG.banco.clabe;
    let ok = false;
    try { await navigator.clipboard.writeText(txt); ok = true; }
    catch (e) {
      const ta = document.createElement("textarea");
      ta.value = txt; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { ok = document.execCommand("copy"); } catch (_) {}
      ta.remove();
    }
    if (!ok) return App.toast("No se pudo copiar; selecciona la CLABE manualmente");
    btn.classList.add("ok"); btn.querySelector("span").textContent = "¡Copiada!";
    App.toast("📋 CLABE copiada al portapapeles");
    setTimeout(() => { btn.classList.remove("ok"); btn.querySelector("span").textContent = "Copiar"; }, 2000);
  }

  function buildMessage() {
    const c = App.drawer.customer(), t = App.cart.totals();
    const L = [];
    L.push(`👋 ¡Hola, *${CONFIG.negocio}*! Quiero hacer un pedido.`, "");
    L.push(`👤 *Cliente:* ${c.name}`);
    L.push(`📍 *Entrega:* ${c.loc}`);
    if (c.notes) L.push(`📝 *Notas:* ${c.notes}`);
    L.push("", "🛒 *Pedido:*");
    App.cart.lines().forEach((l, k) => {
      L.push(`${k + 1}. ${l.p.nombre}`);
      L.push(`    🆔 ${App.skuOf(l.p)}`);
      L.push(`    ${l.qty} pz × ${fmt(l.unit)}${l.tier.descuento ? ` (−${pct(l.tier.descuento)}%)` : ""} = *${fmt(l.subtotal)}*`);
      const link = App.productUrl(l.p);
      if (link) L.push(`    🔗 ${link}`);
    });
    L.push("");
    if (t.ahorro > 0) L.push(`🏷️ Descuento por mayoreo: −${fmt(t.ahorro)}`);
    L.push(`💰 *Total estimado: ${fmt(t.total)} MXN* (precios de referencia; quedo atento a la confirmación)`, "");
    if (state.payment === "transferencia") {
      L.push("💳 *Método de pago:* Transferencia bancaria");
      L.push("📸 Al confirmar el total, te envío la captura del comprobante en este chat.");
    } else {
      L.push("💵 *Método de pago:* Efectivo contra entrega");
    }
    L.push("", "¡Gracias! 🙌");
    return L.join("\n");
  }

  function send() {
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(buildMessage())}`;
    const w = window.open(url, "_blank", "noopener");
    if (!w) location.href = url;
    const transfer = state.payment === "transferencia";

    $("#coInner").innerHTML = `
      <div class="success">
        <div class="big">🎉</div>
        <h2 id="coTitle" style="padding:0">¡Pedido listo para enviar!</h2>
        <p>Se abrió WhatsApp con el resumen de tu pedido. <b>Solo presiona “Enviar”</b> en el chat.</p>
        ${transfer ? `<p style="margin-top:10px;background:var(--accent-softer);padding:10px 12px;border-radius:12px;color:var(--accent-ink);font-weight:600">📸 No olvides enviar la captura de tu transferencia en el chat.</p>` : ""}
        <p style="margin-top:10px;font-size:.9rem">El lugar exacto, día y hora de entrega los acordamos por ahí mismo.</p>
        <div class="co-actions">
          <a class="btn btn-wa btn-block" href="${url}" target="_blank" rel="noopener">Abrir WhatsApp otra vez</a>
          <button class="btn btn-ghost btn-block" data-done>Seguir comprando</button>
        </div>
      </div>`;
    $("[data-done]", $("#coInner")).addEventListener("click", () => { App.closeLayer(modal()); App.closeLayer($("#drawer")); });

    App.cart.clear();
    App.drawer.render();
    App.drawer.clearNotes();
  }

  /* ================= Compra con cuenta ================= */
  function payOptsHTML() {
    return `
      <div class="section-t" style="margin-top:0">Método de pago</div>
      <div class="pay-opts" role="radiogroup">
        <label class="pay"><input type="radio" name="pay" value="efectivo" ${state.payment === "efectivo" ? "checked" : ""}>
          <div><div class="t">Efectivo contra entrega</div><div class="s">Pagas al recibir tu pedido</div></div><span class="emo">💵</span></label>
        <label class="pay"><input type="radio" name="pay" value="transferencia" ${state.payment === "transferencia" ? "checked" : ""}>
          <div><div class="t">Transferencia bancaria</div><div class="s">Subes tu comprobante en la app</div></div><span class="emo">🏦</span></label>
      </div>`;
  }

  function openCuenta() {
    const c = App.drawer.customer(), t = App.cart.totals();
    const perfil = App.auth.getPerfil();

    $("#coInner").innerHTML = `
      <h2 id="coTitle">Confirmar pedido</h2>
      <p class="co-sub">Para <b>${esc(perfil.nombre_completo)}</b> · ${esc(c.loc)}</p>
      <div class="summary">
        ${App.cart.lines().map(l => `<div class="row"><span>${l.qty} × ${esc(l.p.nombre)}</span><span>${fmt(l.subtotal)}</span></div>`).join("")}
        <div class="row total"><span>Total estimado</span><span>${fmt(t.total)}</span></div>
      </div>
      <p class="ref-note" style="margin:-8px 0 16px">Precios de referencia. Si algo cambia (tamaño, colores o personalización) te avisamos antes de imprimir.</p>
      ${payOptsHTML()}
      <div id="payPlan"></div>
      <div class="auth-error" id="coError" role="alert"></div>
      <div class="co-actions">
        <button class="btn btn-primary btn-block" id="confirmOrder" style="height:52px;font-size:.98rem">Confirmar pedido</button>
        <button class="btn btn-ghost btn-block" data-back>← Volver al carrito</button>
      </div>
      <p class="co-foot-note">Podrás ver el estatus de tu pedido en <b>Mi cuenta → Pedidos</b>.</p>`;

    $$('input[name="pay"]', $("#coInner")).forEach(r => r.addEventListener("change", e => {
      state.payment = e.target.value;
      renderPlan(t.total);
    }));
    renderPlan(t.total);
    $("[data-back]", $("#coInner")).addEventListener("click", () => App.closeLayer(modal()));
    $("#confirmOrder").addEventListener("click", confirmarCuenta);

    App.openLayer(modal());
    $("#checkoutModal .modal-box").scrollTop = 0;
  }

  /* Cómo se paga: total por adelantado, anticipo + resto, o todo al recibir */
  async function renderPlan(total) {
    const metodo = state.payment;
    const ant = await App.pedidos.anticipoEstimado(total, metodo);
    if (state.payment !== metodo || !$("#payPlan")) return;
    const tip = `<div class="receipt-tip"><span class="i">📸</span><span>Al confirmar te mostramos la cuenta y podrás <b>subir la captura de tu transferencia aquí mismo</b>, ahora o después desde “Mis pedidos”.</span></div>`;
    let html;
    if (metodo === "transferencia") {
      html = `<div class="pay-plan">
          <div class="pp-row now"><span>🏦 Transfieres ahora</span><b>${fmt(total)}</b></div>
        </div>${tip}`;
    } else if (ant > 0) {
      html = `<div class="pay-plan">
          <div class="pp-row now"><span>🏦 Anticipo 50% por transferencia</span><b>${fmt(ant)}</b></div>
          <div class="pp-row"><span>💵 Resto en efectivo al entregar</span><b>${fmt(total - ant)}</b></div>
        </div>${tip}`;
    } else {
      html = `<div class="pay-plan">
          <div class="pp-row"><span>💵 Pagas en efectivo al recibir</span><b>${fmt(total)}</b></div>
        </div>`;
    }
    $("#payPlan").innerHTML = html;
  }

  async function confirmarCuenta() {
    const btn = $("#confirmOrder"), err = $("#coError");
    const c = App.drawer.customer();
    err.textContent = "";
    btn.disabled = true; btn.textContent = "Enviando pedido…";
    try {
      const res = await App.pedidos.crear({ lugar: c.loc, notas: c.notes, metodo: state.payment });
      App.cart.items = [];
      App.store.set("3dps_cart", []);
      App.drawer.render();
      App.drawer.clearNotes();
      exitoCuenta(res);
    } catch (e) {
      err.textContent = e.message;
      btn.disabled = false; btn.textContent = "Confirmar pedido";
    }
  }

  function exitoCuenta({ id_pedido, total, anticipo }) {
    total = parseFloat(total); anticipo = parseFloat(anticipo) || 0;
    const transfer = anticipo > 0;               // hay que transferir algo ahora
    const esAnticipo = transfer && state.payment === "efectivo";
    const b = CONFIG.banco;
    const aviso = App.pedidos.waInfo(id_pedido, "lo acabo de hacer en la app");

    $("#coInner").innerHTML = `
      <div class="success">
        <div class="ok-anim" aria-hidden="true"><svg viewBox="0 0 52 52"><circle cx="26" cy="26" r="24"/><path d="M15 27l7 7 15-15"/></svg></div>
        <h2 id="coTitle" style="padding:0">¡Pedido #${id_pedido} recibido!</h2>
        <p>Total: <b>${fmt(total)}</b>. Ya lo tenemos registrado y te avisaremos cada avance.</p>
        ${esAnticipo ? `<p class="ok-ant">Para empezar a imprimir, transfiere el <b>anticipo de ${fmt(anticipo)}</b>. El resto (${fmt(total - anticipo)}) lo pagas en efectivo al recibir.</p>` : ""}
        ${transfer ? `
          <div class="bank show" style="text-align:left;margin-top:14px">
            <div class="bank-row"><span>Banco</span><b>${esc(b.nombre)}</b></div>
            <div class="bank-row"><span>CLABE</span>
              <div class="clabe-wrap"><b class="clabe">${esc(b.clabe)}</b>
              <button class="copy-btn" id="copyClabe" type="button">${ICON_COPY}<span>Copiar</span></button></div></div>
            <div class="bank-row"><span>Titular</span><b>${esc(b.titular)}</b></div>
            <div class="bank-row"><span>${esAnticipo ? "Anticipo" : "Monto"}</span><b>${fmt(anticipo)}</b></div>
          </div>` : `<p style="margin-top:10px;font-size:.9rem">Pagas en efectivo al recibirlo. El lugar exacto, día y hora los acordamos contigo.</p>`}
        <div class="co-actions">
          ${transfer ? `<button class="btn btn-primary btn-block" id="goUpload" style="height:50px">${App.pedidos.ICO.subir} Subir comprobante ahora</button>` : ""}
          <button class="btn ${transfer ? "btn-ghost" : "btn-primary"} btn-block" id="goOrders">Ver mis pedidos</button>
          ${App.notif?.puedePedirPush() ? `<button class="btn btn-ghost btn-block co-push" id="goPush">🔔 Avísame cuando cambie mi pedido</button>` : ""}
          <a class="btn btn-wa-soft btn-block ped-wa" href="${aviso}" target="_blank" rel="noopener">${App.pedidos.ICO.wa} Información por WhatsApp</a>
          <p class="co-foot-note">Ya recibimos tu pedido. Sigue su estatus aquí en la app o escríbenos cuando quieras.</p>
        </div>
      </div>`;

    $("#copyClabe")?.addEventListener("click", copyClabe);
    $("#goPush")?.addEventListener("click", async e => {
      const ok = await App.notif.activarPush();
      if (ok) e.target.remove();
    });
    $("#goUpload")?.addEventListener("click", () =>
      App.pedidos.abrirSubida(id_pedido, anticipo, () => App.userPanel.open("pedidos"), esAnticipo));
    $("#goOrders").addEventListener("click", () => {
      App.closeLayer(modal()); App.closeLayer($("#drawer"));
      App.userPanel.open("pedidos");
    });
  }

  return { open, buildMessage };
})();
