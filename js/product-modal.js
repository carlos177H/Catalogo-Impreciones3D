/* =========================================================
   MODAL DE PRODUCTO: galería, ficha técnica y calculadora
   ========================================================= */
App.productModal = (() => {
  const { $, $$, esc, fmt, round2, pct } = App;
  const state = { p: null, i: 0, qty: 1, imgs: [] };
  let color = null; // selector de color
  const modal = () => $("#productModal");

  function open(id) {
    const p = App.byId(id);
    if (!p) return;
    Object.assign(state, { p, i: 0, qty: 1 });

    $("#pmCat").textContent = p.categoria;
    $("#pmTitle").textContent = p.nombre;
    $("#pmSku").textContent = "ID: " + App.skuOf(p);
    setHash("#p=" + encodeURIComponent(App.skuOf(p)));
    $("#pmDesc").textContent = p.descripcionDetallada;
    refreshFav();
    $("#shareMenu").hidden = true;

    state.imgs = p.imagenes.filter(u => !rotas.has(u));
    if (!state.imgs.length) state.imgs = p.imagenes.slice(0, 1);
    renderGaleria();
    revisarFotos(p);

    renderSpecs(p);
    color.reset();
    $("#pmColorField").classList.remove("err");
    const inCart = App.cart.items.some(i => i.id === id);
    $("#addLabel").textContent = inCart ? "Agregar más al carrito" : "Agregar al carrito";
    updateCalc();
    App.openLayer(modal());
    $("#productModal .modal-box").scrollTop = 0;
  }

  /* ---------- Galería ---------- */
  const rotas = new Set(); // fotos que ya no existen en la fuente
  function renderGaleria() {
    const p = state.p, imgs = state.imgs, many = imgs.length > 1;
    state.i = 0;
    $("#stageTrack").innerHTML = imgs.map((src, k) =>
      `<img src="${App.img(src, 800)}" srcset="${App.srcset(src, [500, 800, 1000])}" sizes="(max-width:860px) 92vw, 500px" alt="${esc(p.nombre)} – imagen ${k + 1}" ${k ? App.IMG_ATTR : App.IMG_ATTR_YA}>`).join("");
    $("#thumbs").innerHTML = many ? imgs.map((src, k) =>
      `<button class="thumb ${k ? "" : "on"}" data-i="${k}" aria-label="Ver imagen ${k + 1}"><img src="${App.img(src, 160)}" alt="" ${App.IMG_ATTR}></button>`).join("") : "";
    $("#dots").innerHTML = many ? imgs.map((_, k) => `<span class="${k ? "" : "on"}"></span>`).join("") : "";
    $("#dots").style.display = many ? "" : "none";
    $("#prevImg").style.display = $("#nextImg").style.display = many ? "" : "none";
    $("#stageTrack").style.transform = "translateX(0)";
  }
  // Comprueba cada foto con una miniatura; si alguna no existe, se quita de la galería
  function revisarFotos(p) {
    p.imagenes.forEach(src => {
      if (rotas.has(src)) return;
      const im = new Image();
      im.referrerPolicy = "no-referrer";
      im.onerror = () => {
        rotas.add(src);
        if (state.p !== p) return;
        const quedan = p.imagenes.filter(u => !rotas.has(u));
        if (quedan.length && quedan.length !== state.imgs.length) { state.imgs = quedan; renderGaleria(); }
      };
      im.src = App.img(src, 160);
    });
  }

  // Mantiene en la URL el producto abierto para poder compartir el enlace
  function setHash(h) {
    try { history.replaceState(null, "", location.pathname + location.search + h); } catch (e) {}
  }

  function renderSpecs(p) {
    const imp = p.impresion || {};
    const tam = App.opciones.tamanoDe(p);
    const specs = [
      ["Tamaño aproximado", tam ? tam.texto : "Consultar", tam && !tam.exacto ? "Estimado; confírmalo con el vendedor" : ""],
      imp.colores > 1 && ["Diseño", `${imp.colores} colores`],
      imp.horas && ["Producción", imp.horas < 1 ? "Menos de 1 h por pieza" : `~${Math.ceil(imp.horas)} h por pieza`]
    ].filter(Boolean);
    $("#pmSpecs").innerHTML = specs.map(([k, v, n]) => `<div class="spec"><div class="k">${esc(k)}</div><div class="v">${esc(v)}</div>${n ? `<div class="n">${esc(n)}</div>` : ""}</div>`).join("");

    const f = p.fuente;
    $("#pmCredit").innerHTML = f?.autor
      ? `Diseño de <b>${esc(f.autor)}</b>${f.url ? ` · <a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.plataforma || "ver original")}</a>` : ""}`
      : "";
  }

  function go(i) {
    const n = state.imgs.length;
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
    // Al cerrar el modal, se limpia el enlace de la barra de direcciones
    const close = App.closeLayer;
    App.closeLayer = el => {
      const target = el || App.topLayer();
      close(el);
      if (target === modal()) setHash("");
    };

    $("#prevImg").addEventListener("click", () => go(state.i - 1));
    $("#nextImg").addEventListener("click", () => go(state.i + 1));
    $("#thumbs").addEventListener("click", e => { const b = e.target.closest(".thumb"); if (b) go(+b.dataset.i); });

    // Deslizar con el dedo en móvil
    let x0 = null;
    $("#stage").addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
    $("#stage").addEventListener("touchend", e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40 && state.imgs.length > 1) go(state.i + (dx < 0 ? 1 : -1));
      x0 = null;
    });

    // Flechas del teclado
    document.addEventListener("keydown", e => {
      if (App.topLayer() !== modal() || e.target.tagName === "INPUT" || state.imgs.length < 2) return;
      if (e.key === "ArrowRight") go(state.i + 1);
      if (e.key === "ArrowLeft") go(state.i - 1);
    });

    $("#qtyMinus").addEventListener("click", () => { state.qty = App.clampQty(state.qty - 1); updateCalc(); });
    $("#qtyPlus").addEventListener("click", () => { state.qty = App.clampQty(state.qty + 1); updateCalc(); });
    $("#qtyInput").addEventListener("input", e => { if (e.target.value !== "") { state.qty = App.clampQty(e.target.value); updateCalc(); } });
    $("#qtyInput").addEventListener("blur", e => { state.qty = App.clampQty(e.target.value); updateCalc(); });

    color = App.opciones.colorPicker($("#pmColor"), { foto: true, onChange: () => $("#pmColorField").classList.remove("err") });

    $("#addToCart").addEventListener("click", () => {
      if (!color.valid()) {
        $("#pmColorField").classList.add("err");
        $("#pmColorField").scrollIntoView({ behavior: "smooth", block: "center" });
        color.marcarError();
        return App.toast("🎨 Elige el color de tu pieza");
      }
      App.cart.add(state.p.id, state.qty, color.value());
      App.drawer.render();
      App.drawer.bump();
      App.closeLayer(modal());
      App.toast(`✅ ${state.qty} × ${state.p.nombre} (${color.value()}) agregado`);
    });

    // Compartir (botón sobre la foto y junto a favoritos)
    modal().addEventListener("click", e => {
      if (e.target.closest("[data-share]")) { compartir(); return; }
      if (e.target.closest("[data-share-copy]")) { copiarEnlace(); return; }
      if (e.target.closest("[data-share-close]") || e.target.closest(".share-opt")) { $("#shareMenu").hidden = true; return; }
    });

    // Favorito: requiere sesión
    $("#pmFav").addEventListener("click", async () => {
      if (!App.auth?.isLoggedIn()) {
        App.toast("Inicia sesión para guardar favoritos");
        return App.auth?.openLogin();
      }
      const btn = $("#pmFav");
      const add = !btn.classList.contains("active");
      btn.disabled = true;
      setFav(add); // respuesta inmediata
      const ok = await App.userPanel.toggleFavorito(state.p.id, add);
      if (!ok) setFav(!add);
      btn.disabled = false;
    });
  }

  /* ---------- Compartir ---------- */
  function datosCompartir() {
    const p = state.p;
    const url = App.productUrl(p) || location.href;
    const texto = `¡Mira esto en ${CONFIG.negocio}! ${p.nombre} · ${App.fmt(p.precioBase)} 🖨️✨`;
    return { p, url, texto };
  }

  async function compartir() {
    const { p, url, texto } = datosCompartir();
    // Celular (y navegadores compatibles): menú nativo para compartir
    if (navigator.share) {
      try { await navigator.share({ title: p.nombre, text: texto, url }); return; }
      catch (e) { if (e.name === "AbortError") return; } // canceló: no hacer nada
    }
    abrirMenuCompartir();
  }

  // Respaldo para computadoras sin menú nativo
  function abrirMenuCompartir() {
    const { url, texto } = datosCompartir();
    const enc = encodeURIComponent;
    const m = $("#shareMenu");
    m.innerHTML = `
      <div class="share-head"><b>Compartir producto</b><button type="button" class="share-close" data-share-close aria-label="Cerrar">×</button></div>
      <div class="share-opts">
        <a class="share-opt wa" href="https://wa.me/?text=${enc(texto + "\n" + url)}" target="_blank" rel="noopener"><span>💬</span>WhatsApp</a>
        <a class="share-opt fb" href="https://www.facebook.com/sharer/sharer.php?u=${enc(url)}" target="_blank" rel="noopener"><span>📘</span>Facebook</a>
        <a class="share-opt tg" href="https://t.me/share/url?url=${enc(url)}&text=${enc(texto)}" target="_blank" rel="noopener"><span>✈️</span>Telegram</a>
        <button type="button" class="share-opt cp" data-share-copy><span>🔗</span>Copiar enlace</button>
      </div>`;
    m.hidden = false;
  }

  async function copiarEnlace() {
    const { url } = datosCompartir();
    try { await navigator.clipboard.writeText(url); }
    catch (_) {
      const ta = Object.assign(document.createElement("textarea"), { value: url });
      ta.style.cssText = "position:fixed;opacity:0"; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (_) {}
      ta.remove();
    }
    App.toast("🔗 Enlace copiado. ¡Pégalo donde quieras!");
    $("#shareMenu").hidden = true;
  }

  function setFav(on) {
    const btn = $("#pmFav");
    btn.classList.toggle("active", on);
    btn.classList.remove("pop"); void btn.offsetWidth; if (on) btn.classList.add("pop");
    btn.setAttribute("aria-pressed", on);
    btn.setAttribute("aria-label", on ? "Quitar de favoritos" : "Agregar a favoritos");
    btn.title = btn.getAttribute("aria-label");
  }

  async function refreshFav() {
    const btn = $("#pmFav");
    if (!btn) return;
    btn.classList.remove("active", "pop");
    btn.setAttribute("aria-pressed", "false");
    if (!App.auth?.getPerfil()) return;
    const id = state.p.id;
    const on = await App.userPanel.esFavorito(id);
    if (state.p.id === id) { btn.classList.toggle("active", on); btn.setAttribute("aria-pressed", on); }
  }

  return { init, open };
})();
