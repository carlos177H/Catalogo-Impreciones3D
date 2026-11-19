/* =========================================================
   PANEL DE USUARIO: perfil, favoritos, historial de pedidos
   ========================================================= */
App.userPanel = (() => {
  const { $, $$, esc, fmt } = App;
  const svg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const ICON = {
    perfil: svg('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
    favoritos: svg('<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>'),
    pedidos: svg('<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5"/><path d="M12 13v8"/>'),
    logout: svg('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>'),
    check: svg('<path d="M20 6 9 17l-5-5"/>'),
    alert: svg('<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>'),
    trash: svg('<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/>'),
    lock: svg('<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>')
  };
  const TABS = [
    { id: "perfil", label: "Perfil" },
    { id: "favoritos", label: "Favoritos" },
    { id: "pedidos", label: "Pedidos" }
  ];
  let activeTab = "perfil";

  function open(tab) {
    activeTab = tab || "perfil";
    render();
    const el = $("#userPanel");
    if (!el.classList.contains("open")) App.openLayer(el);
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
        <div class="up-avatar">${esc(perfil.nombre_completo.charAt(0).toUpperCase())}</div>
        <div class="up-header-info">
          <h2 class="up-name">${esc(perfil.nombre_completo)}</h2>
          <p class="up-email">${esc(perfil.email)}</p>
          <span class="up-badge ${perfil.verificado ? "ok" : "warn"}">${perfil.verificado ? ICON.check + "Cuenta verificada" : ICON.alert + "Correo sin verificar"}</span>
        </div>
      </div>
      <nav class="up-tabs" role="tablist">
        ${TABS.map(t => `<button class="up-tab ${t.id === activeTab ? "active" : ""}" role="tab" aria-selected="${t.id === activeTab}" data-uptab="${t.id}">${ICON[t.id]}<span>${t.label}</span></button>`).join("")}
      </nav>
      <div class="up-content" id="upContent"></div>
      <div class="up-footer">
        <button class="btn btn-ghost btn-block up-logout" id="logoutBtn">${ICON.logout}Cerrar sesión</button>
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
        <span class="up-security-ico">${ICON.lock}</span>
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
              <button class="btn btn-sm btn-ghost" data-fav-remove="${p.id}" title="Quitar de favoritos" aria-label="Quitar de favoritos">${ICON.trash}</button>
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
    if (!App.pedidos) return;
    $("#upContent").innerHTML = `<div class="up-loading">Cargando pedidos…</div>`;

    let pedidos;
    try { pedidos = await App.pedidos.listar(); }
    catch (e) {
      $("#upContent").innerHTML = `<p class="up-empty">${esc(e.message)}</p>`;
      return;
    }
    if (activeTab !== "pedidos") return; // cambió de pestaña mientras cargaba

    if (!pedidos.length) {
      $("#upContent").innerHTML = `
        <div class="up-empty">
          <div class="big">📦</div>
          <p><b>Sin pedidos aún</b></p>
          <p>Cuando hagas tu primer pedido, aquí verás cada paso: pago, impresión y entrega.</p>
        </div>`;
      return;
    }

    $("#upContent").innerHTML = `<div class="ped-list">${pedidos.map(App.pedidos.tarjeta).join("")}</div>`;
    App.notif?.sincronizarPedidos?.(pedidos);

    $("#upContent").querySelectorAll("[data-subir-comp]").forEach(b =>
      b.addEventListener("click", () => {
        const id = +b.dataset.subirComp;
        const ped = pedidos.find(p => p.id_pedido === id);
        App.pedidos.abrirSubida(id, ped ? parseFloat(ped.anticipo) : null, () => renderPedidos(),
          ped && App.pedidos.tipoPago(ped) === "anticipo");
      })
    );
    $("#upContent").querySelectorAll("[data-ver-prod]").forEach(b =>
      b.addEventListener("click", () => App.productModal.open(+b.dataset.verProd))
    );
    $("#upContent").querySelectorAll("[data-ver-comp]").forEach(b =>
      b.addEventListener("click", async () => {
        const w = window.open("", "_blank");
        try {
          const url = await App.pedidos.urlComprobante(b.dataset.verComp);
          if (w) w.location = url; else location.href = url;
        } catch (e) { w?.close(); App.toast(e.message); }
      })
    );
  }

  return { open, render, toggleFavorito, esFavorito };
})();
