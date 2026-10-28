/* =========================================================
   COTIZACIÓN PERSONALIZADA: "¿No encuentras lo que quieres?"
   Formulario → mensaje de WhatsApp. Las fotos o archivos
   se adjuntan después en el mismo chat.
   ========================================================= */
App.quote = (() => {
  const { $, $$, esc } = App;
  const modal = () => $("#quoteModal");
  const KEY = "3dps_quote";
  const TIENE = ["Foto o imagen", "Archivo 3D (STL / 3MF)", "Enlace a un modelo", "Solo la idea"];
  const ICON_WA = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>`;
  let busqueda = "";

  function form() {
    const f = App.store.get(KEY, {}), c = App.store.get("3dps_form", {}) || {};
    const v = (k, d = "") => esc(f[k] ?? d);
    return `
      <h2 id="qTitle">Cotiza tu diseño</h2>
      <p class="co-sub">Cuéntanos qué quieres y te respondemos por WhatsApp con el precio.</p>
      <form id="quoteForm" novalidate>
        <div class="field" id="qfName">
          <label for="qName">Tu nombre <span class="req">*</span></label>
          <input id="qName" type="text" autocomplete="name" placeholder="Ej. Ana López" value="${v("name", c.name)}">
          <span class="hint">Escribe tu nombre.</span>
        </div>
        <div class="field" id="qfDesc">
          <label for="qDesc">¿Qué quieres que imprimamos? <span class="req">*</span></label>
          <textarea id="qDesc" placeholder="Ej. Un llavero con el logo de mi negocio, una figura de mi mascota, una pieza de repuesto…">${v("desc", busqueda ? "Busqué “" + busqueda + "” y no lo encontré. " : "")}</textarea>
          <span class="hint">Describe brevemente lo que necesitas.</span>
        </div>
        <div class="field">
          <label>¿Qué tienes de referencia?</label>
          <div class="chips" role="group">
            ${TIENE.map(t => `<label class="chip"><input type="checkbox" name="qTiene" value="${esc(t)}" ${(f.tiene || []).includes(t) ? "checked" : ""}><span>${esc(t)}</span></label>`).join("")}
          </div>
        </div>
        <div class="field">
          <label for="qLink">Enlace (opcional)</label>
          <input id="qLink" type="url" inputmode="url" placeholder="MakerWorld, Thingiverse, Pinterest, Instagram…" value="${v("link")}">
        </div>
        <div class="field-grid">
          <div class="field">
            <label for="qSize">Tamaño aproximado</label>
            <input id="qSize" type="text" placeholder="Ej. 10 cm de alto" value="${v("size")}">
          </div>
          <div class="field">
            <label for="qQty">Cantidad</label>
            <input id="qQty" type="number" min="1" max="9999" inputmode="numeric" value="${v("qty", 1)}">
          </div>
          <div class="field">
            <label for="qColors">Colores</label>
            <input id="qColors" type="text" placeholder="Ej. negro y dorado" value="${v("colors")}">
          </div>
          <div class="field">
            <label for="qMat">Material</label>
            <select id="qMat">
              ${["Sin preferencia", "PLA (rígido, el más común)", "PETG (más resistente)", "TPU (flexible)"].map(m => `<option ${f.mat === m ? "selected" : ""}>${m}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="qWhen">¿Para cuándo lo necesitas?</label>
            <input id="qWhen" type="text" placeholder="Ej. viernes 7 de nov." value="${v("when")}">
          </div>
          <div class="field">
            <label for="qBudget">Presupuesto aproximado</label>
            <input id="qBudget" type="text" inputmode="decimal" placeholder="Opcional" value="${v("budget")}">
          </div>
        </div>
        <div class="field">
          <label for="qLoc">Zona de entrega</label>
          <input id="qLoc" type="text" placeholder="Ej. Centro de Pachuca, campus ITP…" value="${v("loc", c.loc)}">
        </div>
        <div class="receipt-tip"><span class="i">📎</span>
          <span>Al enviar se abre WhatsApp con tu solicitud. <b>Adjunta ahí mismo tus fotos, capturas o archivos</b> (una sola vez, en el mismo chat).</span>
        </div>
        <div class="co-actions">
          <button class="btn btn-wa btn-block" type="submit" style="height:52px;font-size:.98rem">${ICON_WA} Enviar solicitud por WhatsApp</button>
        </div>
      </form>`;
  }

  function data() {
    return {
      name: $("#qName").value.trim(), desc: $("#qDesc").value.trim(),
      tiene: $$('input[name="qTiene"]:checked').map(i => i.value),
      link: $("#qLink").value.trim(), size: $("#qSize").value.trim(), qty: $("#qQty").value.trim(),
      colors: $("#qColors").value.trim(), mat: $("#qMat").value, when: $("#qWhen").value.trim(),
      budget: $("#qBudget").value.trim(), loc: $("#qLoc").value.trim()
    };
  }

  function message(d) {
    const L = [`👋 ¡Hola, *${CONFIG.negocio}*! Quiero cotizar un diseño personalizado.`, ""];
    L.push(`👤 *Nombre:* ${d.name}`);
    L.push(`📝 *Lo que necesito:* ${d.desc}`);
    if (d.tiene.length) L.push(`📎 *Tengo:* ${d.tiene.join(", ")}`);
    if (d.link) L.push(`🔗 *Enlace:* ${d.link}`);
    if (d.size) L.push(`📏 *Tamaño:* ${d.size}`);
    if (d.qty) L.push(`🔢 *Cantidad:* ${d.qty}`);
    if (d.colors) L.push(`🎨 *Colores:* ${d.colors}`);
    if (d.mat && d.mat !== "Sin preferencia") L.push(`🧵 *Material:* ${d.mat}`);
    if (d.when) L.push(`📅 *Para cuándo:* ${d.when}`);
    if (d.budget) L.push(`💵 *Presupuesto:* ${d.budget}`);
    if (d.loc) L.push(`📍 *Entrega:* ${d.loc}`);
    if (busqueda && !d.desc.includes(busqueda)) L.push(`🔍 *Busqué en el catálogo:* “${busqueda}”`);
    L.push("");
    if (d.tiene.some(t => t !== "Solo la idea")) L.push("📸 Te envío las fotos / archivos en este chat.");
    L.push("¡Gracias! 🙌");
    return L.join("\n");
  }

  function validate() {
    let ok = true, first = null;
    const mark = (fid, bad, input) => { $(fid).classList.toggle("err", bad); if (bad) { ok = false; first = first || input; } };
    mark("#qfName", $("#qName").value.trim().length < 2, $("#qName"));
    mark("#qfDesc", $("#qDesc").value.trim().length < 5, $("#qDesc"));
    first?.focus();
    return ok;
  }

  function send(e) {
    e.preventDefault();
    if (!validate()) { App.toast("Completa tu nombre y lo que necesitas"); return; }
    const d = data();
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message(d))}`;
    const w = window.open(url, "_blank", "noopener");
    if (!w) location.href = url;
    App.store.set(KEY, {});
    $("#qInner").innerHTML = `
      <div class="success">
        <div class="big">📸</div>
        <h2 id="qTitle" style="padding:0">¡Solicitud lista!</h2>
        <p>Se abrió WhatsApp con los datos de tu diseño. <b>Presiona “Enviar”</b> y adjunta tus fotos o archivos en el mismo chat.</p>
        <p style="margin-top:10px;font-size:.9rem">Te respondemos con el precio y el tiempo de entrega.</p>
        <div class="co-actions">
          <a class="btn btn-wa btn-block" href="${url}" target="_blank" rel="noopener">Abrir WhatsApp otra vez</a>
          <button class="btn btn-ghost btn-block" data-done>Seguir viendo el catálogo</button>
        </div>
      </div>`;
    $("[data-done]", $("#qInner")).addEventListener("click", () => App.closeLayer(modal()));
  }

  function open(q = "") {
    busqueda = q;
    $("#qInner").innerHTML = form();
    $("#quoteForm").addEventListener("submit", send);
    // Guarda lo escrito por si cierra la ventana sin enviar
    $("#quoteForm").addEventListener("input", e => {
      e.target.closest(".field")?.classList.remove("err");
      App.store.set(KEY, data());
    });
    App.openLayer(modal());
    $("#quoteModal .modal-box").scrollTop = 0;
  }

  return { open, message };
})();
