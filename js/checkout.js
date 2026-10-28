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
    const c = App.drawer.customer(), t = App.cart.totals();
    const b = CONFIG.banco;
    const clabeFmt = b.clabe.replace(/(\d{3})(\d{3})(\d{11})(\d{1})/, "$1 $2 $3 $4");

    $("#coInner").innerHTML = `
      <h2 id="coTitle">Confirmar pedido</h2>
      <p class="co-sub">Para <b>${esc(c.name)}</b> · ${esc(c.loc)}</p>
      <div class="summary">
        ${App.cart.lines().map(l => `<div class="row"><span>${l.qty} × ${esc(l.p.nombre)}</span><span>${fmt(l.subtotal)}</span></div>`).join("")}
        ${t.ahorro > 0 ? `<div class="row" style="color:var(--accent-ink);font-weight:700"><span>Descuento por mayoreo</span><span>−${fmt(t.ahorro)}</span></div>` : ""}
        <div class="row total"><span>Total a pagar</span><span>${fmt(t.total)}</span></div>
      </div>

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
        <div class="bank-row"><span>Monto</span><b>${fmt(t.total)}</b></div>
        <div class="receipt-tip"><span class="i">📸</span>
          <span>Haz tu transferencia y, cuando se abra WhatsApp, <b>envía la captura del comprobante en el mismo chat</b> junto con tu pedido. Así confirmamos tu pago.</span>
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
      L.push(`    ${l.qty} pz × ${fmt(l.unit)}${l.tier.descuento ? ` (−${pct(l.tier.descuento)}%)` : ""} = *${fmt(l.subtotal)}*`);
    });
    L.push("");
    if (t.ahorro > 0) L.push(`🏷️ Descuento por mayoreo: −${fmt(t.ahorro)}`);
    L.push(`💰 *Total a pagar: ${fmt(t.total)} MXN*`, "");
    if (state.payment === "transferencia") {
      L.push("💳 *Método de pago:* Transferencia bancaria");
      L.push("📸 Te envío la captura del comprobante en este chat.");
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

  return { open, buildMessage };
})();
