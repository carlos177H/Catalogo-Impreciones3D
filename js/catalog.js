/* =========================================================
   CATÁLOGO: pestañas, buscador y grid de productos
   ========================================================= */
App.catalog = (() => {
  const { $, esc, fmt } = App;
  const state = { cat: "Todos", q: "" };
  const CART_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>`;

  const enCategoria = (p, c) => c === "Todos" || p.categoria === c;
  const filtrados = () => App.productos().filter(p => enCategoria(p, state.cat) && App.coincide(p, state.q));

  function renderTabs() {
    // Solo muestra categorías con productos (y "Todos")
    const cats = CONFIG.categorias.filter(c => c === "Todos" || App.productos().some(p => p.categoria === c));
    $("#tabs").innerHTML = cats.map(c => {
      const n = App.productos().filter(p => enCategoria(p, c) && App.coincide(p, state.q)).length;
      const on = c === state.cat;
      return `<button class="tab ${on ? "active" : ""}" role="tab" aria-selected="${on}" data-cat="${esc(c)}">${esc(c)} <span class="n">${n}</span></button>`;
    }).join("");
  }

  function renderGrid() {
    const list = filtrados();
    const q = state.q.trim();
    $("#resultInfo").textContent = q
      ? `${list.length} resultado${list.length === 1 ? "" : "s"} para “${q}”${state.cat !== "Todos" ? " en " + state.cat : ""}`
      : `${list.length} producto${list.length === 1 ? "" : "s"}`;

    if (!list.length) {
      $("#grid").innerHTML = `<div class="empty"><div class="big">🔍</div><p><b>No encontramos productos.</b><br>Prueba con otra palabra o cambia de categoría.</p></div>`;
      return;
    }
    // Carga progresiva: primero PAGE tarjetas, el resto al acercarse al final
    state.list = list; state.shown = 0;
    $("#grid").innerHTML = "";
    loadMore();
  }

  const PAGE = 48;
  let observer = null;
  function loadMore() {
    const next = state.list.slice(state.shown, state.shown + PAGE);
    $("#gridSentinel")?.remove();
    $("#grid").insertAdjacentHTML("beforeend", next.map(cardHTML).join(""));
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
    }
  }

  function cardHTML(p, i) {
    return `
      <article class="card" data-open="${p.id}" style="animation-delay:${Math.min(i, 10) * 40}ms">
        <div class="card-media">
          <img src="${App.img(p.imagenes[0], 600)}" alt="${esc(p.nombre)}" ${App.IMG_ATTR}>
          ${App.maxDiscount(p) > 0 ? `<span class="badge-disc"><span class="long">Hasta </span>−${App.pct(App.maxDiscount(p))}%<span class="long"> mayoreo</span></span>` : ""}
        </div>
        <div class="card-body">
          <span class="card-cat">${esc(p.categoria)}</span>
          <h3 class="card-title">${esc(p.nombre)}</h3>
          <p class="card-desc">${esc(p.descripcionCorta)}</p>
          <div class="card-foot">
            <div>
              <div class="price-from">Desde</div>
              <div class="price">${fmt(p.precioBase)} <small>/ pz</small></div>
            </div>
            <button class="btn btn-primary btn-sm card-btn" aria-label="Ver ${esc(p.nombre)}">${CART_ICON}<span class="lbl">Ver detalles</span></button>
          </div>
        </div>
      </article>`;
  }

  function render() { renderTabs(); renderGrid(); }

  function init() {
    $("#tabs").addEventListener("click", e => {
      const t = e.target.closest(".tab");
      if (!t) return;
      state.cat = t.dataset.cat;
      render();
      $(`.tab[data-cat="${CSS.escape(state.cat)}"]`)?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });

    $("#grid").addEventListener("click", e => {
      const o = e.target.closest("[data-open]");
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

  return { init, render };
})();
