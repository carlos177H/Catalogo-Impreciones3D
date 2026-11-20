/* =========================================================
   PANEL DE ADMINISTRACIÓN — 3D JCGA
   ---------------------------------------------------------
   Acceso: cuenta con rol admin + verificación en dos pasos
   (TOTP: Google Authenticator / Microsoft Authenticator…).
   Todo lo que hace este panel pasa por funciones admin_*()
   de la BD, que vuelven a validar rol + 2FA en cada llamada.
   Requiere: sql/etapa4_admin.sql
   ========================================================= */
(() => {
  const { $, $$, esc, fmt } = App;
  let sb = null;

  const state = {
    pedidos: [], clientes: [], config: {}, avisos: { anuncios: [], dispositivos: 0 },
    filtro: "activos", q: "", qCli: "",
    abiertos: new Set(), urls: new Map(), cargando: false
  };

  /* ---------- Estatus ---------- */
  const EST = {
    1: { n: "Pendiente", c: "amber" }, 2: { n: "Pago confirmado", c: "blue" },
    3: { n: "En impresión", c: "violet" }, 4: { n: "Impreso", c: "cyan" },
    5: { n: "En acabado", c: "orange" }, 6: { n: "Listo para entrega", c: "green" },
    7: { n: "Entregado", c: "done" }, 8: { n: "Cancelado", c: "red" }
  };
  const tipoPago = p => !(+p.anticipo > 0) ? "ninguno" : p.metodo_pago === "transferencia" ? "total" : "anticipo";
  function nombreEstatus(p, id = p.id_estatus) {
    const t = tipoPago(p);
    if (id === 1) return t === "total" ? "Pendiente de pago" : t === "anticipo" ? "Pendiente de anticipo" : "Pedido recibido";
    if (id === 2) return t === "total" ? "Pago confirmado" : t === "anticipo" ? "Anticipo confirmado" : "Pedido confirmado";
    return EST[id]?.n || "—";
  }
  const pagoPorRevisar = p => (p.pagos || []).find(g => !g.confirmado);
  const pagoOk = p => (p.pagos || []).some(g => g.confirmado);
  const esperandoPago = p => p.id_estatus === 1 && +p.anticipo > 0 && !(p.pagos || []).length;

  const FILTROS = [
    { id: "activos",    n: "Activos",           f: p => p.id_estatus < 7 },
    { id: "revisar",    n: "📸 Revisar pago",   f: p => !!pagoPorRevisar(p) && p.id_estatus < 7 },
    { id: "esperando",  n: "⏳ Esperando pago", f: esperandoPago },
    { id: "nuevos",     n: "🆕 Por confirmar",  f: p => p.id_estatus === 1 && !(+p.anticipo > 0) },
    { id: "produccion", n: "🖨️ En producción",  f: p => [2, 3, 4, 5].includes(p.id_estatus) },
    { id: "listos",     n: "📦 Listos",         f: p => p.id_estatus === 6 },
    { id: "entregados", n: "🎉 Entregados",     f: p => p.id_estatus === 7 },
    { id: "cancelados", n: "Cancelados",        f: p => p.id_estatus === 8 },
    { id: "todos",      n: "Todos",             f: () => true }
  ];

  /* ---------- Utilidades ---------- */
  const fechaUTC = f => new Date(/Z|[+-]\d\d:?\d\d$/.test(f) ? f : f + "Z");
  function hace(f) {
    const d = fechaUTC(f), min = Math.round((Date.now() - d) / 6e4);
    if (min < 1) return "ahora";
    if (min < 60) return `hace ${min} min`;
    const h = Math.round(min / 60);
    if (h < 24) return `hace ${h} h`;
    return d.toLocaleDateString("es-MX", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
  }
  // Enlace a la ficha del producto en la tienda (misma carpeta que admin.html)
  const urlProducto = sku => new URL("index.html#p=" + encodeURIComponent(sku || ""), location.href).href;
  const tel10 = t => String(t || "").replace(/\D/g, "").slice(-10);
  const waCliente = (tel, txt) => `https://wa.me/52${tel10(tel)}?text=${encodeURIComponent(txt)}`;

  async function rpc(fn, args) {
    const { data, error } = await sb.rpc(fn, args || {});
    if (error) {
      if (error.code === "42501" || /no autorizado/i.test(error.message)) { gate(); }
      throw new Error(error.message);
    }
    return data;
  }

  /* =========================================================
     ACCESO: login → rol admin → 2FA
     ========================================================= */
  function mostrarGate(html, bind) {
    $("#app").hidden = true;
    $("#gate").hidden = false;
    $("#gateInner").innerHTML = html;
    bind?.();
    setTimeout(() => $("#gateInner input")?.focus(), 50);
  }
  const errBox = id => `<div class="auth-error" id="${id}" role="alert"></div>`;
  const setErr = (id, m) => { const e = $("#" + id); if (e) e.textContent = m || ""; };

  async function gate() {
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return pantallaLogin();

    let est;
    try {
      const r = await sb.rpc("admin_estado");
      if (r.error) throw r.error;
      est = r.data;
    } catch (e) {
      return pantallaLogin("No se pudo verificar tu cuenta. ¿Ya ejecutaste sql/etapa4_admin.sql?");
    }
    if (!est?.rol_admin) return pantallaSinAcceso(session.user.email);

    const { data: aal } = await sb.auth.mfa.getAuthenticatorAssuranceLevel();
    if (aal?.currentLevel === "aal2") return entrar();

    const { data: f } = await sb.auth.mfa.listFactors();
    const totp = (f?.totp || []).find(x => x.status === "verified");
    return totp ? pantallaCodigo(totp) : pantallaAlta(f);
  }

  function pantallaLogin(msg) {
    mostrarGate(`
      <h1 class="adm-gate-t">Panel de administración</h1>
      <p class="adm-muted">Acceso solo para administradores.</p>
      <form id="lgForm" class="auth-form" novalidate>
        <div class="field"><label for="lgEmail">Correo</label>
          <input id="lgEmail" type="email" autocomplete="username" required></div>
        <div class="field"><label for="lgPass">Contraseña</label>
          <input id="lgPass" type="password" autocomplete="current-password" required></div>
        ${errBox("lgErr")}
        <button class="btn btn-primary btn-block auth-submit" id="lgBtn">Entrar</button>
      </form>`, () => {
      if (msg) setErr("lgErr", msg);
      $("#lgForm").addEventListener("submit", async e => {
        e.preventDefault();
        setErr("lgErr");
        const btn = $("#lgBtn"); btn.disabled = true; btn.textContent = "Verificando…";
        const { error } = await sb.auth.signInWithPassword({
          email: $("#lgEmail").value.trim(), password: $("#lgPass").value
        });
        btn.disabled = false; btn.textContent = "Entrar";
        if (error) return setErr("lgErr", /invalid login/i.test(error.message) ? "Correo o contraseña incorrectos." : error.message);
        gate();
      });
    });
  }

  function pantallaSinAcceso(email) {
    mostrarGate(`
      <h1 class="adm-gate-t">Sin acceso</h1>
      <p class="adm-muted">La cuenta <b>${esc(email)}</b> no es administradora.</p>
      <button class="btn btn-ghost btn-block" id="outBtn" style="margin-top:16px">Usar otra cuenta</button>`,
      () => $("#outBtn").addEventListener("click", salir));
  }

  function pantallaCodigo(factor) {
    mostrarGate(`
      <h1 class="adm-gate-t">Verificación en dos pasos</h1>
      <p class="adm-muted">Escribe el código de 6 dígitos de tu app de autenticación.</p>
      <form id="mfaForm" class="auth-form" novalidate>
        <input id="mfaCode" class="adm-code" inputmode="numeric" autocomplete="one-time-code" maxlength="6" pattern="\\d{6}" placeholder="••••••" aria-label="Código de 6 dígitos">
        ${errBox("mfaErr")}
        <button class="btn btn-primary btn-block auth-submit" id="mfaBtn">Verificar</button>
      </form>
      <button class="link-btn adm-gate-alt" id="outBtn">Cerrar sesión</button>`, () => {
      $("#outBtn").addEventListener("click", salir);
      bindCodigo(factor.id);
    });
  }

  async function pantallaAlta(f) {
    // Limpiar altas a medias para poder empezar de nuevo
    for (const x of (f?.all || []).filter(x => x.status === "unverified")) {
      await sb.auth.mfa.unenroll({ factorId: x.id });
    }
    const { data, error } = await sb.auth.mfa.enroll({ factorType: "totp", friendlyName: "Panel 3D JCGA " + Date.now() });
    if (error) {
      return mostrarGate(`<h1 class="adm-gate-t">No se pudo activar 2FA</h1>
        <p class="adm-muted">${esc(error.message)}</p>
        <p class="adm-muted">Revisa en Supabase → Authentication → Multi-Factor que <b>TOTP</b> esté habilitado.</p>
        <button class="btn btn-ghost btn-block" id="outBtn" style="margin-top:16px">Cerrar sesión</button>`,
        () => $("#outBtn").addEventListener("click", salir));
    }
    mostrarGate(`
      <h1 class="adm-gate-t">Activa la verificación en dos pasos</h1>
      <ol class="adm-steps">
        <li>Instala <b>Google Authenticator</b> o <b>Microsoft Authenticator</b> en tu celular.</li>
        <li>Escanea este código QR con la app:</li>
      </ol>
      <img class="adm-qr" id="qrImg" alt="Código QR para la app de autenticación" width="180" height="180">
      <details class="adm-secret"><summary>¿No puedes escanear? Usa esta clave</summary><code>${esc(data.totp.secret)}</code></details>
      <ol class="adm-steps" start="3"><li>Escribe el código de 6 dígitos que muestra la app:</li></ol>
      <form id="mfaForm" class="auth-form" novalidate>
        <input id="mfaCode" class="adm-code" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="••••••" aria-label="Código de 6 dígitos">
        ${errBox("mfaErr")}
        <button class="btn btn-primary btn-block auth-submit" id="mfaBtn">Activar y entrar</button>
      </form>`, () => {
        // El QR viene como SVG con comillas: asignarlo por propiedad, nunca dentro del HTML
        const qr = data.totp.qr_code || "";
        $("#qrImg").src = qr.startsWith("data:") ? qr : "data:image/svg+xml;utf-8," + encodeURIComponent(qr);
        bindCodigo(data.id);
      });
  }

  function bindCodigo(factorId) {
    const inp = $("#mfaCode");
    inp.addEventListener("input", () => {
      inp.value = inp.value.replace(/\D/g, "").slice(0, 6);
      if (inp.value.length === 6) $("#mfaForm").requestSubmit();
    });
    $("#mfaForm").addEventListener("submit", async e => {
      e.preventDefault();
      setErr("mfaErr");
      const code = inp.value.trim();
      if (!/^\d{6}$/.test(code)) return setErr("mfaErr", "El código tiene 6 dígitos.");
      const btn = $("#mfaBtn"); btn.disabled = true;
      const { error } = await sb.auth.mfa.challengeAndVerify({ factorId, code });
      btn.disabled = false;
      if (error) { inp.value = ""; inp.focus(); return setErr("mfaErr", "Código incorrecto o vencido. Intenta con el nuevo."); }
      gate();
    });
  }

  async function salir() {
    try { await sb.auth.signOut(); } catch (_) {}
    // El SDK no borra la sesión si falla el servidor: borrarla siempre
    try {
      Object.keys(localStorage).filter(k => /^sb-.+-auth-token/.test(k)).forEach(k => localStorage.removeItem(k));
    } catch (_) {}
    clearInterval(refrescoT);
    state.pedidos = []; state.clientes = [];
    location.replace(location.pathname);
  }

  /* =========================================================
     PANEL
     ========================================================= */
  let refrescoT = null;
  async function entrar() {
    $("#gate").hidden = true;
    $("#app").hidden = false;
    await cargar();
    clearInterval(refrescoT);
    // Refresco automático cada minuto (si no estás escribiendo)
    refrescoT = setInterval(() => {
      const a = document.activeElement;
      if (!document.hidden && !(a && /INPUT|TEXTAREA|SELECT/.test(a.tagName))) cargar(true);
    }, 60000);
  }

  async function cargar(silencioso) {
    if (state.cargando) return;
    state.cargando = true;
    $("#refreshBtn").classList.add("spin");
    try {
      const [ped, cli, cfg, avs] = await Promise.all([
        rpc("admin_pedidos", { p_limite: 300 }),
        rpc("admin_clientes"),
        sb.from("configuracion").select("clave, valor"),
        rpc("admin_anuncios").catch(() => null)   // null si aún no corres etapa5
      ]);
      if (avs) state.avisos = avs;
      const antes = new Set(state.pedidos.map(p => p.id_pedido));
      const nuevos = silencioso && state.pedidos.length ? ped.filter(p => !antes.has(p.id_pedido)).length : 0;
      state.pedidos = ped || [];
      state.clientes = cli || [];
      state.config = Object.fromEntries((cfg.data || []).map(r => [r.clave, r.valor]));
      renderPedidos(); renderClientes(); renderAjustes(); renderAvisos();
      if (nuevos) App.toast(`🛒 ${nuevos} pedido${nuevos > 1 ? "s" : ""} nuevo${nuevos > 1 ? "s" : ""}`);
    } catch (e) {
      if (!silencioso) App.toast("⚠️ " + e.message);
    } finally {
      state.cargando = false;
      $("#refreshBtn").classList.remove("spin");
    }
  }

  /* ---------- Pedidos ---------- */
  function renderPedidos() {
    const P = state.pedidos;
    $("#kpis").innerHTML = FILTROS.filter(f => f.id !== "todos").map(f => {
      const n = P.filter(f.f).length;
      return `<button class="adm-kpi ${state.filtro === f.id ? "on" : ""} ${n && ["revisar", "nuevos"].includes(f.id) ? "alert" : ""}" data-filtro="${f.id}">
        <b>${n}</b><span>${f.n}</span></button>`;
    }).join("") + `<button class="adm-kpi ${state.filtro === "todos" ? "on" : ""}" data-filtro="todos"><b>${P.length}</b><span>Todos</span></button>`;

    const pend = P.filter(FILTROS[1].f).length + P.filter(FILTROS[3].f).length;
    $("#badgePend").hidden = !pend;
    $("#badgePend").textContent = pend;
    document.title = (pend ? `(${pend}) ` : "") + "Panel 3D JCGA";

    const f = FILTROS.find(x => x.id === state.filtro) || FILTROS[0];
    const q = App.norm(state.q.trim());
    const lista = P.filter(f.f).filter(p => !q ||
      String(p.id_pedido) === q.replace(/^#/, "") ||
      App.norm(p.cliente?.nombre).includes(q) ||
      tel10(p.cliente?.telefono).includes(q.replace(/\D/g, "") || "~") ||
      App.norm(p.cliente?.email).includes(q));

    $("#listaPedidos").innerHTML = lista.length
      ? lista.map(tarjetaPedido).join("")
      : `<div class="adm-empty">No hay pedidos en “${esc(f.n)}”${q ? " con esa búsqueda" : ""}.</div>`;

    // Cargar vistas previas de comprobantes en tarjetas abiertas
    $$("[data-comp-img]").forEach(cargarComprobante);
  }

  function tarjetaPedido(p) {
    const abierto = state.abiertos.has(p.id_pedido);
    const rev = pagoPorRevisar(p);
    const est = EST[p.id_estatus] || {};
    const piezas = (p.items || []).reduce((s, i) => s + i.cantidad, 0);
    return `
      <article class="adm-ped ${abierto ? "open" : ""}" data-id="${p.id_pedido}">
        <button class="adm-ped-head" data-toggle="${p.id_pedido}" aria-expanded="${abierto}">
          <span class="adm-ped-id">#${p.id_pedido}</span>
          <span class="adm-ped-who">
            <b>${esc(p.cliente?.nombre || "—")}</b>
            <small>${hace(p.fecha_pedido)} · ${piezas} pz · ${p.metodo_pago === "transferencia" ? "🏦 Transferencia" : "💵 Efectivo"}</small>
          </span>
          <span class="adm-ped-right">
            ${rev ? `<span class="adm-flag">📸 Revisar</span>` : ""}
            <span class="adm-pill ${est.c}">${esc(nombreEstatus(p))}</span>
            <b class="adm-ped-total">${fmt(+p.total)}</b>
          </span>
        </button>
        ${abierto ? detallePedido(p) : ""}
      </article>`;
  }

  function detallePedido(p) {
    const c = p.cliente || {};
    const t = tipoPago(p);
    const sig = { 1: 2, 2: 3, 3: 6, 4: 6, 5: 6, 6: 7 }[p.id_estatus];
    const msgCli = `¡Hola, ${(c.nombre || "").split(" ")[0]}! Te escribimos de ${CONFIG.negocio} sobre tu pedido #${p.id_pedido}: ahora está *${nombreEstatus(p)}*.`;
    return `
      <div class="adm-ped-body">
        <div class="adm-grid">
          <div class="adm-box">
            <h3>Cliente</h3>
            <p><b>${esc(c.nombre)}</b> ${c.requiere_anticipo === false ? `<span class="adm-tag ok">De confianza</span>` : ""}</p>
            <p class="adm-muted">${esc(c.email || "")}</p>
            <p>📱 ${esc(c.telefono || "sin teléfono")}</p>
            ${c.telefono ? `<a class="btn btn-wa-soft" href="${waCliente(c.telefono, msgCli)}" target="_blank" rel="noopener">Escribir por WhatsApp</a>` : ""}
            ${p.lugar_entrega ? `<p class="adm-mt">📍 ${esc(p.lugar_entrega)}</p>` : ""}
            ${p.notas ? `<p class="adm-note">📝 ${esc(p.notas)}</p>` : ""}
          </div>

          <div class="adm-box">
            <h3>Productos</h3>
            <div class="adm-items">
              ${(p.items || []).map(i => `<div><span>${i.cantidad} × ${esc(i.nombre || "Producto")}
                  <small class="adm-sku">ID ${esc(i.sku || "—")}</small>
                  ${i.color ? `<small class="adm-color">🎨 ${esc(i.color)}</small>` : ""}
                  ${i.sku ? `<a class="adm-link" href="${urlProducto(i.sku)}" target="_blank" rel="noopener">Ver producto ↗</a>` : ""}</span>
                <b>${fmt(+i.subtotal)}</b></div>`).join("")}
            </div>
            <div class="adm-sums">
              <div><span>Total</span><b>${fmt(+p.total)}</b></div>
              <div><span>${t === "total" ? "Pago por adelantado" : "Anticipo requerido"}</span><b>${+p.anticipo > 0 ? fmt(+p.anticipo) : "No requiere"}</b></div>
              <div><span>Saldo pendiente</span><b>${fmt(+p.saldo_pendiente)}</b></div>
            </div>
            ${p.id_estatus < 7 && +p.anticipo > 0 && !pagoOk(p) ? `
              <div class="adm-row-btns">
                <button class="btn btn-ghost btn-sm" data-anticipo="${p.id_pedido}" data-monto="0">Quitar anticipo</button>
                <button class="btn btn-ghost btn-sm" data-anticipo-ajustar="${p.id_pedido}">Ajustar monto</button>
              </div>` : ""}
          </div>
        </div>

        <div class="adm-box">
          <h3>Pagos</h3>
          ${(p.pagos || []).length ? p.pagos.map(g => `
            <div class="adm-pago ${g.confirmado ? "ok" : "rev"}">
              <div class="adm-pago-info">
                <b>${fmt(+g.monto)}</b> · ${esc(g.notas || "Pago")} · ${hace(g.fecha_pago)}
                ${g.referencia ? `<br><small>Ref: ${esc(g.referencia)}</small>` : ""}
                <br><span class="adm-pill ${g.confirmado ? "done" : "amber"}">${g.confirmado ? "Confirmado" : "Por revisar"}</span>
              </div>
              ${g.comprobante_url ? `<a class="adm-comp" data-comp-link="${esc(g.comprobante_url)}" target="_blank" rel="noopener">
                  <img data-comp-img="${esc(g.comprobante_url)}" alt="Comprobante del pedido #${p.id_pedido}">
                  <span>Ver completo</span></a>` : ""}
              ${!g.confirmado ? `<div class="adm-row-btns">
                  <button class="btn btn-primary btn-sm" data-pago="${g.id_pago}" data-accion="confirmar">✓ Confirmar pago</button>
                  <button class="btn btn-ghost btn-sm danger" data-pago="${g.id_pago}" data-accion="rechazar">Rechazar</button>
                </div>` : ""}
            </div>`).join("")
          : `<p class="adm-muted">${+p.anticipo > 0 ? "El cliente aún no sube su comprobante." : p.metodo_pago === "efectivo" ? "Paga en efectivo al recibir." : "Sin pagos."}</p>`}
        </div>

        <div class="adm-box">
          <h3>Estatus</h3>
          ${sig && p.id_estatus < 7 ? `<button class="btn btn-primary adm-next" data-estatus="${p.id_pedido}" data-valor="${sig}">Avanzar a: ${esc(nombreEstatus(p, sig))} →</button>` : ""}
          <div class="adm-status-form">
            <select data-sel-estatus="${p.id_pedido}" aria-label="Estatus">
              ${Object.keys(EST).map(k => `<option value="${k}" ${+k === p.id_estatus ? "selected" : ""}>${esc(nombreEstatus(p, +k))}</option>`).join("")}
            </select>
            <input data-com-estatus="${p.id_pedido}" type="text" maxlength="250" placeholder="Comentario para el cliente (opcional)">
            <button class="btn btn-ghost btn-sm" data-estatus-sel="${p.id_pedido}">Guardar</button>
          </div>
        </div>

        <div class="adm-grid">
          <div class="adm-box">
            <h3>Nota interna <small class="adm-muted">(el cliente no la ve)</small></h3>
            <textarea data-nota="${p.id_pedido}" rows="3" maxlength="2000" placeholder="Colores, medidas, recordatorios…">${esc(p.notas_internas || "")}</textarea>
            <button class="btn btn-ghost btn-sm" data-guardar-nota="${p.id_pedido}">Guardar nota</button>
          </div>
          <div class="adm-box">
            <h3>Historial</h3>
            <ol class="adm-hist">
              ${(p.historial || []).map(h => `<li><span class="adm-pill ${EST[h.id_estatus]?.c || ""}">${esc(nombreEstatus(p, h.id_estatus))}</span>
                ${h.comentario ? `<span>${esc(h.comentario)}</span>` : ""}<small>${hace(h.fecha)}</small></li>`).join("")}
            </ol>
          </div>
        </div>
      </div>`;
  }

  async function urlComprobante(path) {
    const hit = state.urls.get(path);
    if (hit && hit.exp > Date.now()) return hit.url;
    const { data, error } = await sb.storage.from("comprobantes").createSignedUrl(path, 600);
    if (error) throw error;
    state.urls.set(path, { url: data.signedUrl, exp: Date.now() + 540000 });
    return data.signedUrl;
  }
  async function cargarComprobante(img) {
    const path = img.dataset.compImg;
    try {
      const url = await urlComprobante(path);
      const link = img.closest("[data-comp-link]");
      if (link) link.href = url;
      if (/\.pdf$/i.test(path)) { img.replaceWith(Object.assign(document.createElement("span"), { className: "adm-pdf", textContent: "📄 PDF" })); return; }
      img.src = url;
    } catch (_) { img.alt = "No se pudo cargar"; }
  }

  /* ---------- Clientes ---------- */
  function renderClientes() {
    const q = App.norm(state.qCli.trim());
    const lista = state.clientes.filter(c => !q ||
      App.norm(c.nombre_completo).includes(q) || App.norm(c.email).includes(q) ||
      tel10(c.telefono).includes(q.replace(/\D/g, "") || "~"));
    $("#listaClientes").innerHTML = lista.length ? lista.map(c => `
      <div class="adm-cli">
        <div class="adm-cli-av">${esc((c.nombre_completo || "?").charAt(0).toUpperCase())}</div>
        <div class="adm-cli-info">
          <b>${esc(c.nombre_completo)} ${c.id_rol === 1 ? `<span class="adm-tag">Admin</span>` : ""} ${c.verificado ? "" : `<span class="adm-tag warn">Sin verificar</span>`}</b>
          <small>${esc(c.email)} · ${esc(c.telefono || "sin teléfono")}</small>
          <small>${c.pedidos} pedido${c.pedidos === 1 ? "" : "s"} · ${fmt(+c.comprado)} · ${c.ultimo_pedido ? "último " + hace(c.ultimo_pedido) : "sin pedidos"}</small>
        </div>
        <label class="adm-switch" title="Si lo desactivas, este cliente no paga anticipo en efectivo">
          <input type="checkbox" data-cli-anticipo="${c.id_usuario}" ${c.requiere_anticipo ? "checked" : ""}>
          <span class="adm-switch-ui" aria-hidden="true"></span>
          <span class="adm-switch-lbl">${c.requiere_anticipo ? "Pide anticipo" : "De confianza"}</span>
        </label>
      </div>`).join("") : `<div class="adm-empty">Sin clientes${q ? " con esa búsqueda" : ""}.</div>`;
  }

  /* ---------- Avisos ---------- */
  const ICONOS = ["📣", "🎄", "🎁", "🔥", "✨", "⏰", "🏷️", "🛠️", "❤️", "📦"];
  let iconoAviso = "📣";

  // "3DC-0123" → "#p=3DC-0123"; https://… se queda igual
  function normalizarEnlace(v) {
    v = (v || "").trim();
    if (!v) return "";
    if (/^3DC-\d+$/i.test(v)) return "#p=" + v.toUpperCase();
    return v;
  }
  const enlaceAbsoluto = u => !u ? new URL("index.html", location.href).href
    : u.startsWith("#") ? new URL("index.html" + u, location.href).href : u;

  function renderAvisos() {
    const a = state.avisos || {};
    $("#avDisp").textContent = `(${a.dispositivos || 0} dispositivo${a.dispositivos === 1 ? "" : "s"} suscrito${a.dispositivos === 1 ? "" : "s"})`;
    $("#listaAvisos").innerHTML = (a.anuncios || []).length ? a.anuncios.map(x => `
      <div class="adm-aviso">
        <span class="adm-aviso-ico">${esc(x.icono)}</span>
        <div class="adm-aviso-body">
          <b>${esc(x.titulo)}</b>
          ${x.texto ? `<p>${esc(x.texto)}</p>` : ""}
          <small>${hace(x.creado)}${x.push_enviados ? ` · 🔔 enviado a ${x.push_enviados}` : ""}${x.url ? ` · 🔗 ${esc(x.url)}` : ""}</small>
        </div>
        <button class="btn btn-ghost btn-sm danger" data-borrar-aviso="${x.id_anuncio}">Quitar</button>
      </div>`).join("") : `<div class="adm-empty">Aún no publicas avisos.</div>`;
  }

  function previewAviso() {
    const t = $("#avTitulo").value.trim() || "Título del aviso", m = $("#avTexto").value.trim();
    $("#avPreview").innerHTML = `
      <div class="adm-preview-notif">
        <img src="img/logo-icon.png" alt="" width="36" height="36">
        <div><small>3D JCGA · ahora</small><b>${esc(iconoAviso)} ${esc(t)}</b>${m ? `<span>${esc(m)}</span>` : ""}</div>
      </div>`;
  }

  /* ---------- Ajustes ---------- */
  function renderAjustes() {
    const on = state.config.mantenimiento === "true";
    $("#mantSwitch").checked = on;
    $("#mantEstado").textContent = on ? "La tienda está EN MANTENIMIENTO" : "La tienda está abierta";
    $("#mantCard").classList.toggle("on", on);
    $("#mantMsg").value = document.activeElement === $("#mantMsg") ? $("#mantMsg").value : (state.config.mantenimiento_msg || "");
    if (document.activeElement?.closest?.("#ajustesForm")) return;
    $("#cfgPct").value = state.config.anticipo_pct ?? 50;
    $("#cfgMin").value = state.config.anticipo_minimo ?? 0;
  }

  /* ---------- Acciones ---------- */
  async function accion(btn, fn) {
    btn.disabled = true;
    const txt = btn.textContent;
    btn.textContent = "…";
    try { await fn(); await cargar(true); return true; }
    catch (e) { App.toast("⚠️ " + e.message); btn.disabled = false; btn.textContent = txt; return false; }
  }

  function bind() {
    $$(".adm-tab").forEach(t => t.addEventListener("click", () => {
      $$(".adm-tab").forEach(x => x.classList.toggle("active", x === t));
      ["pedidos", "clientes", "avisos", "ajustes"].forEach(v => $("#view-" + v).hidden = v !== t.dataset.view);
    }));
    $("#refreshBtn").addEventListener("click", () => cargar());
    $("#logoutBtn").addEventListener("click", salir);
    $("#buscar").addEventListener("input", e => { state.q = e.target.value; renderPedidos(); });
    $("#buscarCli").addEventListener("input", e => { state.qCli = e.target.value; renderClientes(); });

    $("#kpis").addEventListener("click", e => {
      const b = e.target.closest("[data-filtro]");
      if (b) { state.filtro = b.dataset.filtro; renderPedidos(); }
    });

    $("#listaPedidos").addEventListener("click", e => {
      const tg = e.target.closest("[data-toggle]");
      if (tg) {
        const id = +tg.dataset.toggle;
        state.abiertos.has(id) ? state.abiertos.delete(id) : state.abiertos.add(id);
        renderPedidos();
        return;
      }
      const b = e.target.closest("button");
      if (!b) return;

      if (b.dataset.pago) {
        const rechazar = b.dataset.accion === "rechazar";
        let nota = null;
        if (rechazar) {
          nota = prompt("Motivo del rechazo (lo verá el cliente):", "El comprobante no coincide con el monto");
          if (nota === null) return;
        } else if (!confirm("¿Confirmas que el dinero ya está en tu cuenta?")) return;
        return accion(b, () => rpc("admin_pago", { p_pago: +b.dataset.pago, p_accion: b.dataset.accion, p_nota: nota }))
          .then(ok => ok && App.toast(rechazar ? "Comprobante rechazado" : "✅ Pago confirmado"));
      }
      if (b.dataset.estatus) {
        return accion(b, () => rpc("admin_cambiar_estatus", { p_pedido: +b.dataset.estatus, p_estatus: +b.dataset.valor, p_comentario: null }))
          .then(ok => ok && App.toast("✅ Estatus actualizado"));
      }
      if (b.dataset.estatusSel) {
        const id = +b.dataset.estatusSel;
        const val = +$(`[data-sel-estatus="${id}"]`).value;
        const com = $(`[data-com-estatus="${id}"]`).value.trim();
        if (val === 8 && !confirm(`¿Cancelar el pedido #${id}?`)) return;
        return accion(b, () => rpc("admin_cambiar_estatus", { p_pedido: id, p_estatus: val, p_comentario: com || null }))
          .then(ok => ok && App.toast("✅ Estatus actualizado"));
      }
      if (b.dataset.anticipo) {
        if (!confirm("¿Quitar el anticipo de este pedido? El cliente pagará todo al recibir.")) return;
        return accion(b, () => rpc("admin_anticipo", { p_pedido: +b.dataset.anticipo, p_monto: 0 }));
      }
      if (b.dataset.anticipoAjustar) {
        const v = prompt("Nuevo monto de anticipo (MXN):");
        if (v === null) return;
        const n = parseFloat(v.replace(/[^\d.]/g, ""));
        if (!(n >= 0)) return App.toast("Monto no válido");
        return accion(b, () => rpc("admin_anticipo", { p_pedido: +b.dataset.anticipoAjustar, p_monto: n }));
      }
      if (b.dataset.guardarNota) {
        const id = +b.dataset.guardarNota;
        return accion(b, () => rpc("admin_nota", { p_pedido: id, p_nota: $(`[data-nota="${id}"]`).value }))
          .then(ok => ok && App.toast("📝 Nota guardada"));
      }
    });

    $("#listaClientes").addEventListener("change", async e => {
      const cb = e.target.closest("[data-cli-anticipo]");
      if (!cb) return;
      cb.disabled = true;
      try {
        await rpc("admin_cliente_anticipo", { p_usuario: +cb.dataset.cliAnticipo, p_requiere: cb.checked });
        App.toast(cb.checked ? "Este cliente pagará anticipo" : "⭐ Marcado como cliente de confianza");
        await cargar(true);
      } catch (err) { cb.checked = !cb.checked; App.toast("⚠️ " + err.message); }
      cb.disabled = false;
    });

    $("#mantSwitch").addEventListener("change", async e => {
      const on = e.target.checked;
      if (!confirm(on ? "¿Poner la tienda en mantenimiento? Los clientes no podrán comprar." : "¿Abrir la tienda otra vez?")) {
        e.target.checked = !on; return;
      }
      e.target.disabled = true;
      try {
        await rpc("admin_config", { p_clave: "mantenimiento", p_valor: on ? "true" : "false" });
        App.toast(on ? "🛠️ Tienda en mantenimiento" : "✅ Tienda abierta");
        await cargar(true);
      } catch (err) { e.target.checked = !on; App.toast("⚠️ " + err.message); }
      e.target.disabled = false;
    });
    $("#mantMsgSave").addEventListener("click", async () => {
      try {
        await rpc("admin_config", { p_clave: "mantenimiento_msg", p_valor: $("#mantMsg").value.trim() });
        App.toast("✅ Mensaje guardado");
        await cargar(true);
      } catch (err) { App.toast("⚠️ " + err.message); }
    });

    // Avisos
    $("#avIconos").innerHTML = ICONOS.map(i => `<button type="button" class="adm-ico ${i === iconoAviso ? "on" : ""}" data-ico="${i}">${i}</button>`).join("");
    $("#avIconos").addEventListener("click", e => {
      const b = e.target.closest("[data-ico]");
      if (!b) return;
      iconoAviso = b.dataset.ico;
      $$("#avIconos .adm-ico").forEach(x => x.classList.toggle("on", x === b));
      previewAviso();
    });
    ["avTitulo", "avTexto"].forEach(id => $("#" + id).addEventListener("input", previewAviso));
    previewAviso();

    $("#avisoForm").addEventListener("submit", async e => {
      e.preventDefault();
      const titulo = $("#avTitulo").value.trim(), texto = $("#avTexto").value.trim();
      const url = normalizarEnlace($("#avUrl").value);
      const push = $("#avPush").checked;
      if (titulo.length < 3) return App.toast("Escribe un título");
      const dest = state.avisos?.dispositivos || 0;
      if (push && !confirm(`¿Publicar y enviar la notificación a ${dest} dispositivo(s)?`)) return;

      const btn = $("#avEnviar");
      btn.disabled = true; btn.textContent = "Publicando…";
      try {
        const id = await rpc("admin_anuncio_crear", { p_titulo: titulo, p_texto: texto, p_icono: iconoAviso, p_url: url || null });
        let msg = "✅ Aviso publicado";
        if (push) {
          const { data, error } = await sb.functions.invoke("enviar-push", {
            body: { titulo: `${iconoAviso} ${titulo}`, texto, url: enlaceAbsoluto(url) }
          });
          if (error) {
            // Leer el mensaje real que devuelve la función (ej. "Faltan secrets: …")
            let det = error.message || "revisa la Edge Function";
            try { const j = await error.context?.json?.(); if (j?.error) det = j.error; } catch (_) {}
            msg = "Aviso publicado, pero la notificación falló: " + det;
          }
          else {
            await rpc("admin_anuncio_push", { p_id: id, p_enviados: data?.enviados || 0 });
            msg = `✅ Publicado y enviado a ${data?.enviados || 0} dispositivo(s)`;
          }
        }
        App.toast(msg);
        $("#avisoForm").reset(); $("#avPush").checked = true; previewAviso();
        await cargar(true);
      } catch (err) { App.toast("⚠️ " + err.message); }
      btn.disabled = false; btn.textContent = "Publicar aviso";
    });

    $("#listaAvisos").addEventListener("click", async e => {
      const b = e.target.closest("[data-borrar-aviso]");
      if (!b || !confirm("¿Quitar este aviso de la campana?")) return;
      await accion(b, () => rpc("admin_anuncio_borrar", { p_id: +b.dataset.borrarAviso }));
    });

    $("#ajustesForm").addEventListener("submit", async e => {
      e.preventDefault();
      const btn = $("#cfgSave");
      const pct = String(Math.round(+$("#cfgPct").value)), min = String(Math.round(+$("#cfgMin").value));
      btn.disabled = true;
      try {
        await rpc("admin_config", { p_clave: "anticipo_pct", p_valor: pct });
        await rpc("admin_config", { p_clave: "anticipo_minimo", p_valor: min });
        document.activeElement?.blur();
        App.toast("✅ Ajustes guardados");
        await cargar(true);
      } catch (err) { App.toast("⚠️ " + err.message); }
      btn.disabled = false;
    });
  }

  /* ---------- Inicio ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    sb = initSupabase();
    if (!sb) {
      return mostrarGate(`<h1 class="adm-gate-t">Sin conexión</h1><p class="adm-muted">No se pudo cargar Supabase.</p>`);
    }
    bind();
    sb.auth.onAuthStateChange(ev => { if (ev === "SIGNED_OUT") pantallaLogin(); });
    gate();
  });
})();
