/* =========================================================
   CATÁLOGO: inicio (tendencias + filas por categoría),
   pestañas, buscador y grid de productos
   ========================================================= */
App.catalog = (() => {
  const { $, esc, fmt } = App;
  const INICIO = "Inicio", TODOS = "Todos";
  const state = { cat: INICIO, q: "" };
  const CART_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>`;
  const ARROW = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`;

  const esTodo = c => c === INICIO || c === TODOS;
  const enCategoria = (p, c) => esTodo(c) || p.categoria === c;
  const filtrados = () => App.productos().filter(p => enCategoria(p, state.cat) && App.coincide(p, state.q));
  const categorias = () => CONFIG.categorias.filter(c => c !== TODOS && App.productos().some(p => p.categoria === c));

  /* ---------- Tendencias: temporada del mes + lista manual (CONFIG.tendencias) ---------- */
  function tendencias() {
    const cfg = CONFIG.tendencias || {};
    const out = [], seen = new Set();
    const push = p => { if (p && !seen.has(p.id)) { seen.add(p.id); out.push(p); } };
    const claves = (cfg.temporada || {})[new Date().getMonth() + 1] || [];
    if (claves.length) {
      const re = new RegExp(claves.map(k => App.norm(k)).join("|"));
      App.productos().filter(p => re.test(App.norm(p.nombre + " " + (p.etiquetas || []).join(" "))))
        .slice(0, cfg.maxTemporada || 6).forEach(push);
    }
    (cfg.manual || []).forEach(sku => push(App.bySku(sku)));
    return out.slice(0, cfg.max || 16);
  }

  /* ---------- Pestañas ---------- */
  function renderTabs() {
    const cats = [INICIO, TODOS, ...categorias()];
    $("#tabs").innerHTML = cats.map(c => {
      const on = c === state.cat;
      const n = c === INICIO ? "" : App.productos().filter(p => enCategoria(p, c) && App.coincide(p, state.q)).length;
      return `<button class="tab ${on ? "active" : ""}" role="tab" aria-selected="${on}" data-cat="${esc(c)}">${c === INICIO ? "🏠 " : ""}${esc(c)}${n !== "" ? ` <span class="n">${n}</span>` : ""}</button>`;
    }).join("");
  }

  /* ---------- Banner de cotización ---------- */
  function quoteHTML(compact) {
    return `
      <div class="quote-cta ${compact ? "compact" : ""}">
        <span class="q-ico" aria-hidden="true">📸</span>
        <div class="q-txt">
          <b>¿No encuentras lo que quieres?</b>
          <span>Mándanos una foto o la idea de tu diseño y te lo cotizamos.</span>
        </div>
        <button class="btn btn-primary btn-sm" type="button" data-quote>Cotizar mi diseño</button>
      </div>`;
  }

  /* ---------- Inicio ---------- */
  function rowHTML(title, list, opts = {}) {
    if (!list.length) return "";
    return `
      <section class="home-sec">
        <div class="home-head">
          <h2>${title}</h2>
          ${opts.cat ? `<button class="see-all" data-goto="${esc(opts.cat)}">Ver todo <span>(${opts.total})</span>${ARROW}</button>` : ""}
        </div>
        ${opts.sub ? `<p class="home-sub">${opts.sub}</p>` : ""}
        <div class="row-scroll">${list.map((p, i) => cardHTML(p, i, opts.badge)).join("")}</div>
      </section>`;
  }

  function renderHome() {
    $("#resultInfo").textContent = "";
    const all = App.productos();
    let html = rowHTML("🔥 Lo que está de moda", tendencias(), { sub: "Lo más pedido y lo de temporada.", badge: "Tendencia" });
    html += quoteHTML(false);
    categorias().forEach(c => {
      const list = all.filter(p => p.categoria === c);
      html += rowHTML(esc(c), list.slice(0, 10), { cat: c, total: list.length });
    });
    html += `<div class="home-end">
      <button class="btn btn-ghost" data-goto="${TODOS}">Ver los ${all.length.toLocaleString("es-MX")} productos</button>
    </div>` + quoteHTML(false);
    $("#grid").className = "home";
    $("#grid").innerHTML = html;
  }

  /* ---------- Grid (categoría, todos o búsqueda) ---------- */
  function renderGrid() {
    $("#grid").className = "grid";
    const list = filtrados();
    const q = state.q.trim();
    $("#resultInfo").innerHTML = q
      ? `${list.length} resultado${list.length === 1 ? "" : "s"} para “${esc(q)}”${!esTodo(state.cat) ? " en " + esc(state.cat) : ""} · <button class="link-quote" data-quote>¿No es lo que buscas? Cotiza tu diseño</button>`
      : `${list.length} producto${list.length === 1 ? "" : "s"}`;

    if (!list.length) {
      const enTodo = esTodo(state.cat) ? 0 : App.productos().filter(p => App.coincide(p, state.q)).length;
      $("#grid").innerHTML = `<div class="empty"><div class="big">🔍</div><p><b>No encontramos “${esc(q)}”${esTodo(state.cat) ? "" : " en " + esc(state.cat)}.</b><br>${enTodo
        ? `Hay <b>${enTodo}</b> resultado${enTodo === 1 ? "" : "s"} en otras categorías.</p><button class="btn btn-ghost" style="margin-top:14px" data-goto="${TODOS}">Ver resultados en todo el catálogo</button>`
        : "Pero lo podemos imprimir para ti.</p>"}</div>` + quoteHTML(false);
      return;
    }
    // Carga progresiva: primero PAGE tarjetas, el resto al acercarse al final
    state.list = list; state.shown = 0;
    $("#grid").innerHTML = "";
    loadMore();
  }

  const PAGE = 48, QUOTE_AT = 12;
  let observer = null;
  function loadMore() {
    const from = state.shown;
    const next = state.list.slice(from, from + PAGE);
    $("#gridSentinel")?.remove();
    let html = "";
    next.forEach((p, k) => {
      html += cardHTML(p, k);
      if (from + k + 1 === QUOTE_AT && state.list.length > QUOTE_AT + 4) html += quoteHTML(true);
    });
    $("#grid").insertAdjacentHTML("beforeend", html);
    state.shown += next.length;
    if (state.shown < state.list.length) {
      $("#grid").insertAdjacentHTML("beforeend",
        `<div id="gridSentinel" class="grid-more"><button class="btn btn-ghost" type="button">Ver más productos (${state.list.length - state.shown})</button></div>`);
      const s = $("#gridSentinel");
      s.querySelector("button").addEventListener("click", loadMore);
      if ("IntersectionObserver" in window) {
        observer?.disconnect();
        observer = new IntersectionObserver(es => { if (es[0].isIntersecting) loadMore(); }, { rootMargin: "600px" });
        observer.observe(s);
      }
    } else {
      $("#grid").insertAdjacentHTML("beforeend", quoteHTML(false));
    }
  }

  function cardHTML(p, i, badge) {
    return `
      <article class="card" data-open="${p.id}" style="animation-delay:${Math.min(i, 10) * 40}ms">
        <div class="card-media">
          <img src="${App.img(p.imagenes[0], 600)}" alt="${esc(p.nombre)}" ${App.IMG_ATTR}>
          ${badge ? `<span class="badge-trend">🔥 ${esc(badge)}</span>` : ""}
          ${App.maxDiscount(p) > 0 ? `<span class="badge-disc"><span class="long">Hasta </span>−${App.pct(App.maxDiscount(p))}%<span class="long"> mayoreo</span></span>` : ""}
        </div>
        <div class="card-body">
          <span class="card-cat">${esc(p.categoria)}</span>
          <h3 class="card-title">${esc(p.nombre)}</h3>
          <p class="card-desc">${esc(p.descripcionCorta)}</p>
          <div class="card-foot">
            <div>
              <div class="price-from">Precio de referencia</div>
              <div class="price">${fmt(p.precioBase)} <small>/ pz</small></div>
            </div>
            <button class="btn btn-primary btn-sm card-btn" aria-label="Ver ${esc(p.nombre)}">${CART_ICON}<span class="lbl">Ver detalles</span></button>
          </div>
        </div>
      </article>`;
  }

  function render() {
    renderTabs();
    if (state.cat === INICIO && !state.q.trim()) renderHome(); else renderGrid();
  }

  function goTo(cat) {
    state.cat = cat;
    render();
    window.scrollTo({ top: Math.max(0, $(".hero").offsetTop + $(".hero").offsetHeight - 10), behavior: "smooth" });
    $(`.tab[data-cat="${CSS.escape(cat)}"]`)?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  function init() {
    $("#tabs").addEventListener("click", e => {
      const t = e.target.closest(".tab");
      if (!t) return;
      state.cat = t.dataset.cat;
      render();
      $(`.tab[data-cat="${CSS.escape(state.cat)}"]`)?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });

    document.addEventListener("click", e => {
      if (e.target.closest("[data-quote]")) { App.quote.open(state.q.trim()); return; }
      const g = e.target.closest("[data-goto]");
      if (g) { goTo(g.dataset.goto); return; }
      const o = e.target.closest("#grid [data-open]");
      if (o) App.productModal.open(+o.dataset.open);
    });

    let t;
    $("#search").addEventListener("input", e => {
      state.q = e.target.value;
      $("#searchBox").classList.toggle("has-value", !!state.q);
      clearTimeout(t);
      t = setTimeout(render, 120);
    });
    $("#clearSearch").addEventListener("click", () => {
      $("#search").value = ""; state.q = "";
      $("#searchBox").classList.remove("has-value");
      render(); $("#search").focus();
    });

    render();
  }

  return { init, render, tendencias };
})();
