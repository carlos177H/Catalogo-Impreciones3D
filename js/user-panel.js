/* =========================================================
   PANEL DE USUARIO: perfil, favoritos, historial de pedidos
   ========================================================= */
App.userPanel = (() => {
  const { $, $$, esc, fmt } = App;
  const TABS = ["perfil", "favoritos", "pedidos"];
  let activeTab = "perfil";

  function open(tab) {
    activeTab = tab || "perfil";
    render();
    App.openLayer($("#userPanel"));
  }

  function render() {
    const perfil = App.auth.getPerfil();
    if (!perfil) {
      $("#userPanelInner").innerHTML = `
        <div class="up-empty">
          <div class="big">⚠️</div>
          <p><b>No pudimos cargar tu perfil</b></p>
          <p>Recarga la página. Si sigue pasando, contáctanos por WhatsApp.</p>
        </div>
        <div class="up-footer"><button class="btn btn-ghost btn-block" id="logoutBtn">Cerrar sesión</button></div>`;
      $("#logoutBtn").addEventListener("click", async () => {
        await App.auth.logout();
        App.closeLayer($("#userPanel"));
      });
      return;
    }

    $("#userPanelInner").innerHTML = `
      <div class="up-header">
        <div class="up-avatar">${perfil.nombre_completo.charAt(0).toUpperCase()}</div>
        <div>
          <h2 class="up-name">${esc(perfil.nombre_completo)}</h2>
          <p class="up-email">${esc(perfil.email)}</p>
        </div>
      </div>
      <nav class="up-tabs">
        ${TABS.map(t => `<button class="up-tab ${t === activeTab ? "active" : ""}" data-uptab="${t}">${
          t === "perfil" ? "👤 Mi perfil" :
          t === "favoritos" ? "❤️ Favoritos" :
          "📦 Mis pedidos"
        }</button>`).join("")}
      </nav>
      <div class="up-content" id="upContent"></div>
      <div class="up-footer">
        <button class="btn btn-ghost btn-block" id="logoutBtn">Cerrar sesión</button>
      </div>`;

    // Tabs
    $$("[data-uptab]", $("#userPanelInner")).forEach(b =>
      b.addEventListener("click", () => { activeTab = b.dataset.uptab; render(); })
    );

    // Logout
    $("#logoutBtn").addEventListener("click", async () => {
      await App.auth.logout();
      App.closeLayer($("#userPanel"));
      App.toast("👋 Sesión cerrada");
    });

    // Render tab content
    if (activeTab === "perfil") renderPerfil();
    else if (activeTab === "favoritos") renderFavoritos();
    else if (activeTab === "pedidos") renderPedidos();
  }

  /* ---------- Perfil ---------- */
  function renderPerfil() {
    const p = App.auth.getPerfil();
    $("#upContent").innerHTML = `
      <form id="perfilForm" class="auth-form">
        <div class="field">
          <label for="upNombre">Nombre completo</label>
          <input id="upNombre" type="text" value="${esc(p.nombre_completo)}" autocomplete="name">
        </div>
        <div class="field">
          <label for="upEmail">Correo electrónico</label>
          <input id="upEmail" type="email" value="${esc(p.email)}" disabled>
          <span class="hint">${p.verificado ? "✅ Verificado" : "⚠️ No verificado"}</span>
        </div>
        <div class="field">
          <label for="upTel">WhatsApp / Teléfono <span class="req">*</span></label>
          <input id="upTel" type="tel" inputmode="numeric" maxlength="16" value="${esc(p.telefono || "")}" placeholder="10 dígitos, ej. 7721234567">
          ${p.telefono ? "" : `<span class="field-note">Agrega tu teléfono para poder contactarte sobre tus pedidos.</span>`}
        </div>
        <div class="auth-error" id="perfilError" role="alert" style="display:none"></div>
        <button class="btn btn-primary btn-block" type="submit" id="perfilSubmit" style="height:44px">Guardar cambios</button>
      </form>
      <div class="up-security">
        <div>
          <b>Contraseña</b>
          <span>Cámbiala cuando quieras.</span>
        </div>
        <button type="button" class="btn btn-sm btn-ghost" id="upChangePass">Cambiar</button>
      </div>
      <p class="up-since">Miembro desde ${new Date(p.fecha_registro).toLocaleDateString("es-MX", { year: "numeric", month: "long" })}</p>`;

    $("#upChangePass").addEventListener("click", () => App.auth.openCambiarPassword());

    $("#perfilForm").addEventListener("submit", async e => {
      e.preventDefault();
      const err = msg => {
        $("#perfilError").textContent = msg;
        $("#perfilError").style.display = msg ? "" : "none";
      };
      err("");
      const nombre = $("#upNombre").value.trim().replace(/\s+/g, " ");
      const tel = App.auth.normalizarTelefono($("#upTel").value);
      if (nombre.length < 3) return err("Escribe tu nombre completo.");
      if (!App.auth.telefonoValido(tel)) return err("El teléfono debe tener 10 dígitos.");

      const btn = $("#perfilSubmit");
      btn.disabled = true;
      btn.textContent = "Guardando…";
      const res = await App.auth.actualizarPerfil({ nombre_completo: nombre, telefono: tel });
      btn.disabled = false;
      btn.textContent = "Guardar cambios";

      if (res.error) return err(App.auth.traducirError(res.error));
      App.toast("✅ Perfil actualizado");
      render();
    });
  }

  /* ---------- Favoritos ---------- */
  async function renderFavoritos() {
    const sb = window.supabaseClient;
    const perfil = App.auth.getPerfil();
    if (!sb || !perfil) return;

    $("#upContent").innerHTML = `<div class="up-loading">Cargando favoritos…</div>`;

    const { data: favs, error } = await sb
      .from("favoritos")
      .select("id_producto")
      .eq("id_usuario", perfil.id_usuario);

    if (error) {
      $("#upContent").innerHTML = `<p class="up-empty">Error al cargar favoritos.</p>`;
      return;
    }

    if (!favs || favs.length === 0) {
      $("#upContent").innerHTML = `
        <div class="up-empty">
          <div class="big">❤️</div>
          <p><b>Sin favoritos aún</b></p>
          <p>Explora el catálogo y marca los productos que te gustan.</p>
        </div>`;
      return;
    }

    const ids = favs.map(f => f.id_producto);
    const productos = ids.map(id => App.byId(id)).filter(Boolean);

    $("#upContent").innerHTML = `
      <div class="up-favs">
        ${productos.map(p => `
          <div class="up-fav-item" data-id="${p.id}">
            <img src="${App.img(p.imagenes[0], 160)}" alt="${esc(p.nombre)}" ${App.IMG_ATTR}>
            <div class="up-fav-info">
              <div class="up-fav-name">${esc(p.nombre)}</div>
              <div class="up-fav-price">${fmt(p.precioBase)}</div>
            </div>
            <div class="up-fav-actions">
              <button class="btn btn-sm btn-primary" data-fav-open="${p.id}">Ver</button>
              <button class="btn btn-sm btn-ghost" data-fav-remove="${p.id}" title="Quitar de favoritos">🗑️</button>
            </div>
          </div>`).join("")}
      </div>`;

    // Events
    $$("[data-fav-open]", $("#upContent")).forEach(b =>
      b.addEventListener("click", () => {
        App.closeLayer($("#userPanel"));
        App.productModal.open(+b.dataset.favOpen);
      })
    );
    $$("[data-fav-remove]", $("#upContent")).forEach(b =>
      b.addEventListener("click", async () => {
        await toggleFavorito(+b.dataset.favRemove, false);
        renderFavoritos();
      })
    );
  }

  /* ---------- Toggle favorito ---------- */
  async function toggleFavorito(idProducto, add) {
    const sb = window.supabaseClient;
    const perfil = App.auth.getPerfil();
    if (!sb || !perfil) return false;

    if (add) {
      const { error } = await sb.from("favoritos").insert({
        id_usuario: perfil.id_usuario,
        id_producto: idProducto
      });
      if (error && !error.message.includes("duplicate")) {
        console.error("[Favoritos]", error);
        return false;
      }
      App.toast("❤️ Agregado a favoritos");
    } else {
      await sb.from("favoritos")
        .delete()
        .eq("id_usuario", perfil.id_usuario)
        .eq("id_producto", idProducto);
      App.toast("Quitado de favoritos");
    }
    return true;
  }

  async function esFavorito(idProducto) {
    const sb = window.supabaseClient;
    const perfil = App.auth.getPerfil();
    if (!sb || !perfil) return false;

    const { data } = await sb
      .from("favoritos")
      .select("id_favorito")
      .eq("id_usuario", perfil.id_usuario)
      .eq("id_producto", idProducto)
      .maybeSingle();

    return !!data;
  }

  /* ---------- Pedidos ---------- */
  async function renderPedidos() {
    const sb = window.supabaseClient;
    const perfil = App.auth.getPerfil();
    if (!sb || !perfil) return;

    $("#upContent").innerHTML = `<div class="up-loading">Cargando pedidos…</div>`;

    const { data: pedidos, error } = await sb
      .from("pedidos")
      .select(`
        id_pedido, fecha_pedido, total, notas,
        estatus_pedido ( nombre )
      `)
      .eq("id_usuario", perfil.id_usuario)
      .order("fecha_pedido", { ascending: false });

    if (error) {
      $("#upContent").innerHTML = `<p class="up-empty">Error al cargar pedidos.</p>`;
      return;
    }

    if (!pedidos || pedidos.length === 0) {
      $("#upContent").innerHTML = `
        <div class="up-empty">
          <div class="big">📦</div>
          <p><b>Sin pedidos aún</b></p>
          <p>Cuando hagas tu primer pedido, aparecerá aquí.</p>
        </div>`;
      return;
    }

    $("#upContent").innerHTML = `
      <div class="up-orders">
        ${pedidos.map(p => {
          const fecha = new Date(p.fecha_pedido).toLocaleDateString("es-MX", {
            day: "numeric", month: "short", year: "numeric"
          });
          const estatus = p.estatus_pedido?.nombre || "Pendiente";
          const statusClass = estatus.toLowerCase().includes("entreg") ? "done" :
                              estatus.toLowerCase().includes("cancel") ? "cancel" : "";
          return `
            <div class="up-order" data-order="${p.id_pedido}">
              <div class="up-order-head">
                <div>
                  <span class="up-order-id">#${p.id_pedido}</span>
                  <span class="up-order-date">${fecha}</span>
                </div>
                <span class="up-order-status ${statusClass}">${esc(estatus)}</span>
              </div>
              <div class="up-order-total">${fmt(parseFloat(p.total))}</div>
              ${p.notas ? `<div class="up-order-notes">${esc(p.notas)}</div>` : ""}
              <button class="btn btn-sm btn-ghost" data-order-detail="${p.id_pedido}">Ver detalle</button>
            </div>`;
        }).join("")}
      </div>`;

    $$("[data-order-detail]", $("#upContent")).forEach(b =>
      b.addEventListener("click", () => renderDetalleOrden(+b.dataset.orderDetail))
    );
  }

  async function renderDetalleOrden(idPedido) {
    const sb = window.supabaseClient;
    const { data: detalles, error } = await sb
      .from("detalle_pedido")
      .select("*")
      .eq("id_pedido", idPedido);

    if (error || !detalles) return App.toast("Error al cargar detalle");

    const items = detalles.map(d => {
      const p = App.byId(d.id_producto);
      return `<div class="up-detail-item">
        <span>${d.cantidad} × ${p ? esc(p.nombre) : `Producto #${d.id_producto}`}</span>
        <span>${fmt(parseFloat(d.subtotal))}</span>
      </div>`;
    }).join("");

    // Insert detail below the order
    const orderEl = $(`[data-order="${idPedido}"]`);
    const existing = orderEl.querySelector(".up-detail");
    if (existing) { existing.remove(); return; }

    orderEl.insertAdjacentHTML("beforeend", `<div class="up-detail">${items}</div>`);
  }

  return { open, render, toggleFavorito, esFavorito };
})();
