/* =========================================================
   OPCIONES GUIADAS: colores, zonas de entrega y tamaño
   (se usan en la ficha del producto, el carrito y la cotización)
   ========================================================= */
App.opciones = (() => {
  const { esc } = App;

  /* ---------- Colores disponibles ---------- */
  const COLORES = [
    ["Blanco", "#ffffff"], ["Negro", "#1b1b1b"], ["Gris", "#8a8f98"], ["Plateado", "#c3c8cf"],
    ["Dorado", "#d4af37"], ["Rojo", "#d62828"], ["Rosa", "#f48fb1"], ["Morado", "#7b3fa0"],
    ["Azul", "#1e4fd8"], ["Azul cielo", "#5bc0eb"], ["Verde", "#2a9d4b"], ["Verde menta", "#98e0c4"],
    ["Amarillo", "#f9d71c"], ["Naranja", "#f77f00"], ["Café", "#7b4b2a"], ["Beige", "#e8d8b8"]
  ];
  const FOTO = "Como en la foto", OTRO = "__otro";
  const hexDe = n => (COLORES.find(c => c[0] === n) || [])[1];
  const MAX_COLORES = 4;

  /* Selector de color: un desplegable por color + "Agregar otro color" para combinar.
     opts.foto = true agrega la opción "Como en la foto". */
  function colorPicker(el, opts = {}) {
    const optsHTML = sel => `
      <option value="" ${sel ? "" : "selected"} disabled>Elige un color…</option>
      ${opts.foto ? `<option value="${FOTO}" ${sel === FOTO ? "selected" : ""}>📷 ${FOTO}</option>` : ""}
      ${COLORES.map(([n]) => `<option ${sel === n ? "selected" : ""}>${esc(n)}</option>`).join("")}
      <option value="${OTRO}" ${sel && sel !== FOTO && !hexDe(sel) ? "selected" : ""}>✏️ Otro color (escríbelo)</option>`;

    const filaHTML = (v = "", k = 0) => {
      const otro = v && v !== FOTO && !hexDe(v);
      return `
      <div class="cpick-row">
        <span class="cdot ${v === FOTO ? "foto" : ""}" style="${hexDe(v) ? `background:${hexDe(v)}` : ""}" aria-hidden="true"></span>
        <select aria-label="Color ${k + 1}">${optsHTML(v)}</select>
        ${k ? `<button type="button" class="cpick-del" aria-label="Quitar este color">×</button>` : ""}
        <input type="text" class="cpick-otro" maxlength="30" placeholder="Ej. verde limón" value="${otro ? esc(v) : ""}" ${otro ? "" : "hidden"}>
      </div>`;
    };

    function dibujar(lista) {
      el.innerHTML = `
        <div class="cpick-rows">${(lista.length ? lista : [""]).map(filaHTML).join("")}</div>
        <button type="button" class="cpick-add">＋ Agregar otro color (combinar)</button>`;
      refrescar();
    }

    function filas() { return [...el.querySelectorAll(".cpick-row")]; }
    function valorFila(r) {
      const s = r.querySelector("select").value;
      return s === OTRO ? r.querySelector(".cpick-otro").value.trim() : s;
    }
    function refrescar() {
      const rs = filas();
      rs.forEach(r => {
        const s = r.querySelector("select").value;
        const dot = r.querySelector(".cdot");
        dot.style.background = hexDe(s) || "";
        dot.classList.toggle("foto", s === FOTO);
        dot.classList.toggle("otro", s === OTRO);
        r.querySelector(".cpick-otro").hidden = s !== OTRO;
      });
      const foto = rs[0]?.querySelector("select").value === FOTO;
      el.querySelector(".cpick-add").hidden = foto || rs.length >= MAX_COLORES;
    }

    el.classList.add("cpick");
    el.addEventListener("change", e => {
      if (e.target.tagName !== "SELECT") return;
      const r = e.target.closest(".cpick-row");
      // "Como en la foto" no se combina con otros colores
      if (e.target.value === FOTO && r === filas()[0]) filas().slice(1).forEach(x => x.remove());
      if (e.target.value === OTRO) r.querySelector(".cpick-otro").hidden = false;
      refrescar();
      if (e.target.value === OTRO) r.querySelector(".cpick-otro").focus();
      el.classList.remove("err");
      opts.onChange?.(api.value());
    });
    el.addEventListener("input", e => {
      if (e.target.classList.contains("cpick-otro")) { el.classList.remove("err"); opts.onChange?.(api.value()); }
    });
    el.addEventListener("click", e => {
      if (e.target.closest(".cpick-add")) {
        el.querySelector(".cpick-rows").insertAdjacentHTML("beforeend", filaHTML("", filas().length));
        refrescar();
        filas().at(-1).querySelector("select").focus();
      }
      const d = e.target.closest(".cpick-del");
      if (d) { d.closest(".cpick-row").remove(); refrescar(); opts.onChange?.(api.value()); }
    });

    const api = {
      // "Rojo + Negro" (vacío si falta elegir)
      value() { return filas().map(valorFila).filter(Boolean).join(" + "); },
      // Todos los desplegables tienen un color válido
      valid() { return filas().every(r => { const v = valorFila(r); return v && v.length >= 3; }); },
      set(str) { dibujar(String(str || "").split(" + ").map(s => s.trim()).filter(Boolean).slice(0, MAX_COLORES)); },
      reset() { dibujar([]); },
      marcarError() { el.classList.add("err"); filas().find(r => !valorFila(r))?.querySelector("select, input:not([hidden])")?.focus(); }
    };
    dibujar(opts.value ? String(opts.value).split(" + ") : []);
    return api;
  }

  /* ---------- Zonas de entrega ---------- */
  const ZONAS = ["Pachuca", "Actopan (zona centro)", "El Arenal", "Tepa (Tepatepec)", "Progreso", "Mixquiahuala"];
  const PACHUCA = ["Central de Autobuses", "ITP (Instituto Tecnológico de Pachuca)", "Estación del Tuzobús"];
  // Línea troncal Centro Histórico – Téllez (de norte a sur)
  const TUZOBUS = [
    "Centro Histórico", "Niños Héroes", "Presidente Alemán", "Plaza Juárez", "Manuel Dublán", "Parque del Maestro",
    "Revolución", "Bioparque", "Prepa 1", "Santa Julia", "Cuna del Fútbol", "Central de Autobuses", "Estadio Hidalgo",
    "Tecnológico de Monterrey", "Zona Plateada", "Centro Minero", "Bicentenario", "Tecnológico", "SEPH", "Hospitales",
    "Juan C. Doria", "Vicente Segura", "Centro de Justicia", "Felipe Ángeles", "Ejército Mexicano", "San Antonio",
    "Tercera Edad", "Efrén Rebolledo", "Matilde", "Gabriel Mancera", "Terminal Téllez"
  ];

  /* Texto final, p. ej. "Pachuca · Tuzobús, estación Bioparque" */
  function textoZona(z) {
    if (!z?.zona) return "";
    if (z.zona !== "Pachuca") return z.zona;
    if (!z.punto) return "";
    if (z.punto === "Estación del Tuzobús") return z.estacion ? `Pachuca · Tuzobús, estación ${z.estacion}` : "";
    return `Pachuca · ${z.punto}`;
  }

  /* Selector de zona con sub-opciones para Pachuca y estaciones del Tuzobús */
  function zonaPicker(el, opts = {}) {
    let z = Object.assign({ zona: "", punto: "", estacion: "" }, opts.value || {});
    const sel = (id, label, list, v, ph) => `
      <div class="zpick-step">
        ${label ? `<label for="${id}">${label}</label>` : ""}
        <select id="${id}"><option value="" ${v ? "" : "selected"} disabled>${ph}</option>
          ${list.map(x => `<option ${v === x ? "selected" : ""}>${esc(x)}</option>`).join("")}</select>
      </div>`;
    const p = opts.prefijo || "z";

    function dibujar() {
      el.innerHTML = sel(p + "Zona", opts.label ?? "Zona de entrega", ZONAS, z.zona, "Elige tu zona…")
        + (z.zona === "Pachuca" ? sel(p + "Punto", "¿En qué punto de Pachuca?", PACHUCA, z.punto, "Elige un punto…") : "")
        + (z.zona === "Pachuca" && z.punto === "Estación del Tuzobús" ? sel(p + "Est", "¿Qué estación?", TUZOBUS, z.estacion, "Elige la estación…") : "");
    }
    el.classList.add("zpick");
    el.addEventListener("change", e => {
      const id = e.target.id;
      if (id === p + "Zona") z = { zona: e.target.value, punto: "", estacion: "" };
      if (id === p + "Punto") z = { ...z, punto: e.target.value, estacion: "" };
      if (id === p + "Est") z = { ...z, estacion: e.target.value };
      dibujar();
      el.closest(".field")?.classList.remove("err");
      opts.onChange?.(z);
      // Llevar al usuario al siguiente desplegable
      [...el.querySelectorAll("select")].find(s => !s.value)?.focus();
    });
    dibujar();
    return {
      value: () => ({ ...z }),
      texto: () => textoZona(z),
      valid: () => !!textoZona(z),
      focus: () => [...el.querySelectorAll("select")].find(s => !s.value)?.focus()
    };
  }

  /* ---------- Tamaño aproximado del producto ---------- */
  // 1) Si el producto trae su medida, se usa. 2) Si no, se estima por el peso de impresión.
  const RE_MEDIDA = /\d+(?:[.,]\d+)?\s?(cm|mm)\b/i;
  function tamanoDe(p) {
    const t = (p.tamano || "").trim();
    if (t && RE_MEDIDA.test(t) && t.length <= 60 && !/[¡!\[]/.test(t)) return { texto: t.replace(/^[•📐\s]+/u, ""), exacto: true };
    const g = p.impresion?.gramos || 0;
    if (!g) return null;
    const texto = g < 15 ? "Pequeño (≈ 3–7 cm)" : g < 60 ? "Mediano (≈ 7–12 cm)" : g < 200 ? "Grande (≈ 12–20 cm)" : "Extra grande (20 cm o más)";
    return { texto, exacto: false };
  }

  return { COLORES, FOTO, colorPicker, ZONAS, TUZOBUS, zonaPicker, textoZona, tamanoDe };
})();
