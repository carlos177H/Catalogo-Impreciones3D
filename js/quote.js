/* =========================================================
   COTIZACIÓN PERSONALIZADA: "¿No encuentras lo que quieres?"
   Formulario guiado → mensaje de WhatsApp. Las fotos de
   referencia se suben aquí y su enlace va en el mensaje.
   ========================================================= */
App.quote = (() => {
  const { $, $$, esc } = App;
  const modal = () => $("#quoteModal");
  const KEY = "3dps_quote";
  const BUCKET = "referencias", MAX_FOTOS = 4, MAX_MB = 8;
  const FOTO = "Foto o imagen", ENLACE = "Enlace a un modelo", ARCHIVO = "Archivo 3D (STL / 3MF)";
  const TIENE = [FOTO, ARCHIVO, ENLACE, "Solo la idea"];
  const TAMANOS = ["5 cm", "10 cm", "15 cm", "20 cm", "Personalizado", "Acordar con el vendedor"];
  const ICON_WA = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>`;
  let busqueda = "", fotos = [], colores = null, zona = null;

  // Fechas para el calendario: desde mañana hasta un año
  const iso = d => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const manana = () => { const d = new Date(); d.setDate(d.getDate() + 1); return iso(d); };
  const enUnAno = () => { const d = new Date(); d.setFullYear(d.getFullYear() + 1); return iso(d); };
  const fechaLarga = s => new Date(s + "T12:00:00").toLocaleDateString("es-MX", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  function form() {
    const f = App.store.get(KEY, {}), c = App.store.get("3dps_form", {}) || {};
    const v = (k, d = "") => esc(f[k] ?? d);
    const tiene = f.tiene || [];
    return `
      <h2 id="qTitle">Cotiza tu diseño</h2>
      <p class="co-sub">Cuéntanos qué quieres y te respondemos por WhatsApp con el precio.</p>
      <form id="quoteForm" novalidate>
        <div class="field" id="qfName">
          <label for="qName">Tu nombre <span class="req">*</span></label>
          <input id="qName" type="text" autocomplete="name" maxlength="80" placeholder="Ej. Ana López" value="${v("name", c.name)}">
          <span class="hint">Escribe tu nombre (mínimo 2 letras).</span>
        </div>
        <div class="field" id="qfDesc">
          <label for="qDesc">¿Qué quieres que imprimamos? <span class="req">*</span></label>
          <textarea id="qDesc" maxlength="800" placeholder="Ej. Un llavero con el logo de mi negocio, una figura de mi mascota, una pieza de repuesto…">${v("desc", busqueda ? "Busqué “" + busqueda + "” y no lo encontré. " : "")}</textarea>
          <span class="hint">Describe brevemente lo que necesitas.</span>
        </div>

        <div class="field" id="qfTiene">
          <label>¿Qué tienes de referencia?</label>
          <div class="chips" role="group">
            ${TIENE.map(t => `<label class="chip"><input type="checkbox" name="qTiene" value="${esc(t)}" ${tiene.includes(t) ? "checked" : ""}><span>${esc(t)}</span></label>`).join("")}
          </div>
        </div>
        <div class="field q-sub" id="qfFotos" ${tiene.includes(FOTO) ? "" : "hidden"}>
          <label for="qFotos">Sube tus fotos o imágenes <span class="req">*</span></label>
          <label class="q-upload" for="qFotos">📷 <span>Elegir fotos <small>(hasta ${MAX_FOTOS})</small></span></label>
          <input id="qFotos" type="file" accept="image/*" multiple hidden>
          <div class="q-thumbs" id="qThumbs"></div>
          <span class="hint">Sube al menos una foto (máx. ${MAX_FOTOS}, de ${MAX_MB} MB cada una).</span>
        </div>
        <div class="field q-sub" id="qfLink" ${tiene.includes(ENLACE) ? "" : "hidden"}>
          <label for="qLink">Enlace del modelo <span class="req">*</span></label>
          <input id="qLink" type="url" inputmode="url" placeholder="https://makerworld.com/…" value="${v("link")}">
          <span class="hint">Pega un enlace válido (empieza con https://).</span>
        </div>
        <p class="field-note q-sub" id="qfArchivo" ${tiene.includes(ARCHIVO) ? "" : "hidden"}>📎 El archivo STL / 3MF lo adjuntas en el chat de WhatsApp al enviar.</p>

        <div class="field" id="qfSize">
          <label>Tamaño aproximado</label>
          <div class="chips" role="radiogroup">
            ${TAMANOS.map(t => `<label class="chip"><input type="radio" name="qSize" value="${esc(t)}" ${f.size === t ? "checked" : ""}><span>${esc(t)}</span></label>`).join("")}
          </div>
          <div class="field-grid q-medidas" id="qMedidas" ${f.size === "Personalizado" ? "" : "hidden"}>
            <div class="field"><label for="qAlto">Alto (cm)</label><input id="qAlto" type="number" min="1" max="200" step="0.5" inputmode="decimal" value="${v("alto")}"></div>
            <div class="field"><label for="qAncho">Ancho (cm)</label><input id="qAncho" type="number" min="1" max="200" step="0.5" inputmode="decimal" value="${v("ancho")}"></div>
          </div>
          <span class="hint">Escribe alto y ancho entre 1 y 200 cm.</span>
        </div>

        <div class="field-grid">
          <div class="field" id="qfQty">
            <label for="qQty">Cantidad <span class="req">*</span></label>
            <input id="qQty" type="number" min="1" max="9999" inputmode="numeric" value="${v("qty", 1)}">
            <span class="hint">De 1 a 9,999 piezas.</span>
          </div>
          <div class="field" id="qfBudget">
            <label for="qBudget">Presupuesto aproximado</label>
            <input id="qBudget" type="number" min="1" max="100000" step="1" inputmode="decimal" placeholder="Opcional, en $" value="${v("budget")}">
            <span class="hint">Escribe solo el número (ej. 300).</span>
          </div>
        </div>

        <div class="field" id="qfColors">
          <label>Colores</label>
          <div id="qColors"></div>
          <span class="hint">Completa o quita el color que dejaste vacío.</span>
        </div>

        <div class="field" id="qfWhen">
          <label for="qWhen">¿Cuándo lo necesitas?</label>
          <input id="qWhen" type="date" min="${manana()}" max="${enUnAno()}" value="${v("when")}">
          <span class="hint">Elige una fecha a partir de mañana.</span>
        </div>

        <div class="field" id="qfLoc">
          <label for="qzZona">Zona de entrega <span class="req">*</span></label>
          <div id="qZona"></div>
          <span class="hint">Elige tu zona y punto de entrega.</span>
        </div>

        <div class="receipt-tip"><span class="i">💬</span>
          <span>Al enviar se abre WhatsApp con tu solicitud${tiene.includes(FOTO) ? " y el enlace de tus fotos" : ""}. Solo presiona <b>“Enviar”</b>.</span>
        </div>
        <div class="co-actions">
          <button class="btn btn-wa btn-block" type="submit" id="qSend" style="height:52px;font-size:.98rem">${ICON_WA} Enviar solicitud por WhatsApp</button>
        </div>
      </form>`;
  }

  function data() {
    const size = $('input[name="qSize"]:checked')?.value || "";
    return {
      name: $("#qName").value.trim(), desc: $("#qDesc").value.trim(),
      tiene: $$('input[name="qTiene"]:checked').map(i => i.value),
      link: $("#qLink").value.trim(), size, alto: $("#qAlto").value, ancho: $("#qAncho").value,
      qty: $("#qQty").value.trim(), colors: colores?.value() || "", when: $("#qWhen").value,
      budget: $("#qBudget").value.trim(), zona: zona?.value() || null, loc: zona?.texto() || ""
    };
  }

  function textoTamano(d) {
    if (d.size === "Personalizado") return `${d.alto} cm de alto × ${d.ancho} cm de ancho`;
    return d.size;
  }

  function message(d, urls = []) {
    const L = [`👋 ¡Hola, *${CONFIG.negocio}*! Quiero cotizar un diseño personalizado.`, ""];
    L.push(`👤 *Nombre:* ${d.name}`);
    L.push(`📝 *Lo que necesito:* ${d.desc}`);
    if (d.tiene.length) L.push(`📎 *Tengo:* ${d.tiene.join(", ")}`);
    if (urls.length) { L.push(`📷 *Fotos de referencia:*`); urls.forEach((u, k) => L.push(`   ${k + 1}. ${u}`)); }
    if (d.link && d.tiene.includes(ENLACE)) L.push(`🔗 *Enlace:* ${d.link}`);
    if (d.size) L.push(`📏 *Tamaño:* ${textoTamano(d)}`);
    if (d.qty) L.push(`🔢 *Cantidad:* ${d.qty}`);
    if (d.colors) L.push(`🎨 *Colores:* ${d.colors}`);
    if (d.when) L.push(`📅 *Lo necesito para:* ${fechaLarga(d.when)}`);
    if (d.budget) L.push(`💵 *Presupuesto:* ${App.fmt(+d.budget)}`);
    if (d.loc) L.push(`📍 *Entrega:* ${d.loc}`);
    if (busqueda && !d.desc.includes(busqueda)) L.push(`🔍 *Busqué en el catálogo:* “${busqueda}”`);
    L.push("");
    if (d.tiene.includes(ARCHIVO)) L.push("📎 Te envío el archivo 3D en este chat.");
    L.push("¡Gracias! 🙌");
    return L.join("\n");
  }

  function validate() {
    let ok = true, first = null;
    const mark = (fid, bad, input) => { $(fid).classList.toggle("err", bad); if (bad) { ok = false; first = first || input; } };
    const d = data();
    const num = (x, a, b) => x !== "" && !isNaN(+x) && +x >= a && +x <= b;
    mark("#qfName", d.name.length < 2, $("#qName"));
    mark("#qfDesc", d.desc.length < 5, $("#qDesc"));
    mark("#qfFotos", d.tiene.includes(FOTO) && !fotos.length, $("#qfFotos .q-upload"));
    mark("#qfLink", d.tiene.includes(ENLACE) && !/^https?:\/\/[^\s.]+\.[^\s]{2,}$/i.test(d.link), $("#qLink"));
    mark("#qfSize", d.size === "Personalizado" && !(num(d.alto, 1, 200) && num(d.ancho, 1, 200)), $("#qAlto"));
    mark("#qfQty", !(num(d.qty, 1, 9999) && Number.isInteger(+d.qty)), $("#qQty"));
    mark("#qfBudget", d.budget !== "" && !num(d.budget, 1, 100000), $("#qBudget"));
    // Colores es opcional: solo se marca si dejó un desplegable a medias
    const filas = $$("#qColors .cpick-row");
    const sinElegir = filas.length === 1 && !filas[0].querySelector("select").value;
    mark("#qfColors", !colores.valid() && !sinElegir, $("#qColors select"));
    mark("#qfWhen", d.when !== "" && (d.when < manana() || d.when > enUnAno()), $("#qWhen"));
    mark("#qfLoc", !zona.valid(), null);
    if (first) first.focus?.(); else if (!zona.valid()) zona.focus();
    ($(".field.err", $("#quoteForm")))?.scrollIntoView({ behavior: "smooth", block: "center" });
    return ok;
  }

  /* ---------- Fotos de referencia ---------- */
  function dibujarFotos() {
    $("#qThumbs").innerHTML = fotos.map((f, k) => `
      <div class="q-thumb"><img src="${f.url}" alt="Foto ${k + 1}"><button type="button" data-quitar="${k}" aria-label="Quitar foto">×</button></div>`).join("");
    $(".q-upload span", $("#qfFotos")).innerHTML = fotos.length
      ? `Agregar más <small>(${fotos.length}/${MAX_FOTOS})</small>` : `Elegir fotos <small>(hasta ${MAX_FOTOS})</small>`;
    $("#qfFotos .q-upload").hidden = fotos.length >= MAX_FOTOS;
  }
  function agregarFotos(files) {
    let rechazadas = 0;
    [...files].forEach(file => {
      if (fotos.length >= MAX_FOTOS) return rechazadas++;
      if (!/^image\//.test(file.type) || file.size > MAX_MB * 1024 * 1024) return rechazadas++;
      fotos.push({ file, url: URL.createObjectURL(file) });
    });
    if (rechazadas) App.toast(`Solo imágenes de hasta ${MAX_MB} MB, máximo ${MAX_FOTOS}`);
    $("#qfFotos").classList.remove("err");
    dibujarFotos();
  }

  async function subirFotos() {
    const sb = window.supabaseClient;
    if (!sb) throw new Error("Sin conexión para subir las fotos");
    const mes = new Date().toISOString().slice(0, 7);
    const urls = [];
    for (const f of fotos) {
      const file = await App.pedidos.comprimir(f.file);
      const ext = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg";
      const id = (crypto.randomUUID?.() || Date.now() + "-" + Math.random().toString(36).slice(2));
      const path = `cotizaciones/${mes}/${id}.${ext}`;
      const { error } = await sb.storage.from(BUCKET).upload(path, file, { contentType: file.type || "image/jpeg", upsert: false });
      if (error) throw new Error("No se pudo subir una foto. Intenta de nuevo.");
      urls.push(sb.storage.from(BUCKET).getPublicUrl(path).data.publicUrl);
    }
    return urls;
  }

  async function send(e) {
    e.preventDefault();
    if (!validate()) { App.toast("Revisa los campos marcados en rojo"); return; }
    const d = data();
    const btn = $("#qSend");
    // Se abre la pestaña antes de subir para que el navegador no la bloquee
    const w = window.open("", "_blank");
    let urls = [];
    if (d.tiene.includes(FOTO) && fotos.length) {
      btn.disabled = true; btn.textContent = "Subiendo fotos…";
      try { urls = await subirFotos(); }
      catch (err) {
        w?.close();
        btn.disabled = false; btn.innerHTML = `${ICON_WA} Enviar solicitud por WhatsApp`;
        return App.toast(err.message);
      }
    }
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message(d, urls))}`;
    if (w) w.location = url; else location.href = url;
    App.store.set(KEY, {});
    fotos = [];
    $("#qInner").innerHTML = `
      <div class="success">
        <div class="big">📸</div>
        <h2 id="qTitle" style="padding:0">¡Solicitud lista!</h2>
        <p>Se abrió WhatsApp con los datos de tu diseño. <b>Presiona “Enviar”</b> en el chat.</p>
        <p style="margin-top:10px;font-size:.9rem">Te respondemos con el precio y el tiempo de entrega.</p>
        <div class="co-actions">
          <a class="btn btn-wa btn-block" href="${url}" target="_blank" rel="noopener">Abrir WhatsApp otra vez</a>
          <button class="btn btn-ghost btn-block" data-done>Seguir viendo el catálogo</button>
        </div>
      </div>`;
    $("[data-done]", $("#qInner")).addEventListener("click", () => App.closeLayer(modal()));
  }

  function guardar() { if (zona) App.store.set(KEY, data()); }

  function open(q = "") {
    busqueda = q;
    fotos = [];
    const f = App.store.get(KEY, {}), c = App.store.get("3dps_form", {}) || {};
    $("#qInner").innerHTML = form();
    colores = App.opciones.colorPicker($("#qColors"), { foto: true, value: f.colors, onChange: guardar });
    zona = App.opciones.zonaPicker($("#qZona"), { prefijo: "qz", label: "", value: f.zona || c.zona, onChange: guardar });

    const fm = $("#quoteForm");
    fm.addEventListener("submit", send);
    fm.addEventListener("change", e => {
      const t = e.target;
      if (t.name === "qTiene") {
        // "Solo la idea" excluye las demás opciones
        if (t.value === "Solo la idea" && t.checked) $$('input[name="qTiene"]').forEach(i => { if (i !== t) i.checked = false; });
        else if (t.checked) $('input[name="qTiene"][value="Solo la idea"]').checked = false;
        const now = $$('input[name="qTiene"]:checked').map(i => i.value);
        $("#qfFotos").hidden = !now.includes(FOTO);
        $("#qfLink").hidden = !now.includes(ENLACE);
        $("#qfArchivo").hidden = !now.includes(ARCHIVO);
        if (t.value === FOTO && t.checked && !fotos.length) $("#qFotos").click();
      }
      if (t.name === "qSize") {
        $("#qMedidas").hidden = t.value !== "Personalizado";
        $("#qfSize").classList.remove("err");
        if (t.value === "Personalizado") $("#qAlto").focus();
      }
      if (t.id === "qFotos") { agregarFotos(t.files); t.value = ""; }
      guardar();
    });
    fm.addEventListener("input", e => { e.target.closest(".field")?.classList.remove("err"); guardar(); });
    $("#qThumbs").addEventListener("click", e => {
      const b = e.target.closest("[data-quitar]");
      if (!b) return;
      URL.revokeObjectURL(fotos[+b.dataset.quitar]?.url);
      fotos.splice(+b.dataset.quitar, 1);
      dibujarFotos();
    });
    App.openLayer(modal());
    $("#quoteModal .modal-box").scrollTop = 0;
  }

  return { open, message };
})();
