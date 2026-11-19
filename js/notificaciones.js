/* =========================================================
   NOTIFICACIONES / AVISOS (campana del header)
   ---------------------------------------------------------
   Junta dos fuentes:
     • CONFIG.anuncios (avisos generales)
     • Movimientos de tus pedidos (historial_pedido), con sesión
   Los leídos se recuerdan en este navegador.
   ========================================================= */
App.notif = (() => {
  const { $, esc } = App;
  const KEY = "3dps_notif_leidas";
  let abierto = false;
  let eventos = [];          // avisos generados a partir de pedidos
  let avisosBD = [];         // avisos que publicas desde el panel de admin

  const ts = f => { const d = new Date(/T/.test(f) ? f : f + "T12:00:00"); return isNaN(d) ? 0 : +d; };

  function anuncios() {
    const generales = (CONFIG.anuncios || []).map(a => ({ ...a, ts: ts(a.fecha) }));
    return [...eventos, ...avisosBD, ...generales].sort((a, b) => b.ts - a.ts);
  }

  async function cargarAvisos() {
    const sb = window.supabaseClient;
    if (!sb) return;
    try {
      const { data } = await sb.from("anuncios").select("id_anuncio, titulo, texto, icono, url, creado")
        .order("creado", { ascending: false }).limit(20);
      avisosBD = (data || []).map(a => ({
        id: "a" + a.id_anuncio, ts: +new Date(a.creado), icono: a.icono, titulo: a.titulo, texto: a.texto || "",
        accion: a.url ? { texto: "Ver más", url: a.url } : null
      }));
      updateBadge();
      if (abierto) render();
    } catch (_) {}
  }

  /* ---------- Notificaciones push (llegan aunque la app esté cerrada) ---------- */
  const pushSoportado = () => "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && !!CONFIG.vapidPublicKey;
  const esIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const instalada = () => matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  let swReg = null;

  function b64ToU8(b64) {
    const s = atob((b64 + "=".repeat((4 - b64.length % 4) % 4)).replace(/-/g, "+").replace(/_/g, "/"));
    return Uint8Array.from(s, c => c.charCodeAt(0));
  }

  async function guardarSuscripcion(sub) {
    const j = sub.toJSON();
    const { error } = await window.supabaseClient.rpc("guardar_suscripcion",
      { p_endpoint: j.endpoint, p_p256dh: j.keys.p256dh, p_auth: j.keys.auth });
    if (error) throw error;
  }

  async function suscripcionActual() {
    if (!pushSoportado()) return null;
    swReg = swReg || await navigator.serviceWorker.register("sw.js");
    return swReg.pushManager.getSubscription();
  }

  async function activarPush() {
    if (!pushSoportado()) return false;
    const perm = await Notification.requestPermission();
    if (perm !== "granted") { if (abierto) render(); return false; }
    try {
      swReg = swReg || await navigator.serviceWorker.register("sw.js");
      await navigator.serviceWorker.ready;
      const sub = (await swReg.pushManager.getSubscription()) ||
        await swReg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64ToU8(CONFIG.vapidPublicKey) });
      await guardarSuscripcion(sub);
      App.toast("🔔 Listo: te avisaremos aunque la app esté cerrada");
      if (abierto) render();
      return true;
    } catch (e) {
      console.warn("[Push]", e);
      App.toast("No se pudieron activar los avisos en este navegador");
      return false;
    }
  }

  async function desactivarPush() {
    const sub = await suscripcionActual();
    if (sub) {
      await window.supabaseClient.rpc("borrar_suscripcion", { p_endpoint: sub.endpoint });
      await sub.unsubscribe();
    }
    App.toast("Avisos desactivados en este dispositivo");
    if (abierto) render();
  }

  // Si ya dio permiso, mantener la suscripción al día (y ligarla a su cuenta al iniciar sesión)
  async function refrescarPush() {
    try {
      if (!pushSoportado() || Notification.permission !== "granted") return;
      const sub = await suscripcionActual();
      if (sub) await guardarSuscripcion(sub);
    } catch (_) {}
  }

  const puedePedirPush = () => pushSoportado() && Notification.permission === "default";

  async function pushHTML() {
    if (!pushSoportado()) {
      return esIOS && !instalada()
        ? `<div class="notif-push info">📱 En iPhone: toca <b>Compartir</b> → <b>Agregar a inicio</b> y abre la app desde ahí para recibir avisos.</div>`
        : "";
    }
    if (Notification.permission === "denied") {
      return `<div class="notif-push info">🔕 Bloqueaste las notificaciones. Actívalas en el candado 🔒 junto a la dirección de la página.</div>`;
    }
    const sub = Notification.permission === "granted" ? await suscripcionActual().catch(() => null) : null;
    return sub
      ? `<div class="notif-push ok">✅ Recibes avisos en este dispositivo <button type="button" class="link-btn" data-push-off>Desactivar</button></div>`
      : `<button type="button" class="notif-push-btn" data-push-on>🔔 Recibir avisos aunque la app esté cerrada</button>`;
  }
  const leidas = () => new Set(App.store.get(KEY, []));
  const sinLeer = () => { const l = leidas(); return anuncios().filter(a => !l.has(a.id)).length; };

  function fechaCorta(t) {
    if (!t) return "";
    const min = Math.round((Date.now() - t) / 6e4);
    if (min < 1) return "Ahora";
    if (min < 60) return `Hace ${min} min`;
    const h = Math.round(min / 60);
    if (h < 24) return `Hace ${h} h`;
    const dias = Math.round(h / 24);
    if (dias === 1) return "Ayer";
    if (dias < 7) return `Hace ${dias} días`;
    return new Date(t).toLocaleDateString("es-MX", { day: "numeric", month: "short" });
  }

  /* ---------- Avisos de pedidos ---------- */
  const ICONO_ESTATUS = { 1: "📝", 2: "✅", 3: "🖨️", 4: "🖨️", 5: "🎨", 6: "📦", 7: "🎉", 8: "❌" };

  function sincronizarPedidos(pedidos) {
    const lista = [];
    (pedidos || []).forEach(p => {
      (p.historial_pedido || []).forEach(h => {
        const com = h.comentario || "";
        const rechazado = /comprobante rechazado/i.test(com);
        const comp = !rechazado && /comprobante.*enviado/i.test(com);
        const titulo = rechazado ? `Pedido #${p.id_pedido}: revisa tu comprobante`
          : comp ? `Pedido #${p.id_pedido}: comprobante enviado`
          : h.id_estatus === 1 && /desde la app/i.test(com) ? `Pedido #${p.id_pedido} recibido`
          : `Pedido #${p.id_pedido}: ${App.pedidos.etiqueta({ ...p, id_estatus: h.id_estatus, pagos: [] })}`;
        lista.push({
          id: "h" + h.id_historial,
          ts: ts(h.fecha.endsWith("Z") || /[+-]\d\d:?\d\d$/.test(h.fecha) ? h.fecha : h.fecha + "Z"),
          icono: rechazado ? "⚠️" : comp ? "📸" : ICONO_ESTATUS[h.id_estatus] || "📦",
          titulo,
          texto: rechazado ? com.replace(/^comprobante rechazado:?\s*/i, "") + " Sube uno nuevo desde Mis pedidos."
            : comp ? "Lo revisaremos y confirmaremos tu pago."
            : (com && !/desde la app/i.test(com) ? com : ""),
          accion: { texto: "Ver pedido", pedidos: true }
        });
      });
    });
    eventos = lista.sort((a, b) => b.ts - a.ts).slice(0, 20);
    updateBadge();
    if (abierto) render();
  }

  async function cargarPedidos() {
    if (!App.auth?.getPerfil() || !App.pedidos) { eventos = []; updateBadge(); return; }
    try { sincronizarPedidos(await App.pedidos.listar()); }
    catch (e) { console.warn("[Avisos] No se pudieron cargar pedidos:", e.message); }
  }

  /* ---------- UI ---------- */
  function updateBadge() {
    const n = sinLeer();
    const b = $("#notifCount");
    if (!b) return;
    b.textContent = n > 9 ? "9+" : n;
    b.hidden = n === 0;
    $("#notifBtn").setAttribute("aria-label", n ? `Avisos (${n} sin leer)` : "Avisos");
  }

  function render() {
    const l = leidas();
    const list = anuncios();
    $("#notifPanel").innerHTML = `
      <div class="notif-head">
        <b>Avisos</b>
        ${list.some(a => !l.has(a.id)) ? `<button type="button" class="link-btn" data-notif-all>Marcar todo como leído</button>` : ""}
      </div>
      <div class="notif-list">
        ${list.length ? list.map(a => `
          <div class="notif-item ${l.has(a.id) ? "" : "nuevo"}">
            <span class="notif-ico" aria-hidden="true">${esc(a.icono || "📣")}</span>
            <div class="notif-body">
              <b>${esc(a.titulo)}</b>
              ${a.texto ? `<p>${esc(a.texto)}</p>` : ""}
              <div class="notif-meta">
                <span>${fechaCorta(a.ts)}</span>
                ${a.accion ? `<button type="button" class="notif-cta" data-notif-act="${esc(a.id)}">${esc(a.accion.texto)} →</button>` : ""}
              </div>
            </div>
          </div>`).join("")
        : `<p class="notif-empty">No hay avisos por ahora.</p>`}
      </div>
      <div class="notif-foot" id="notifPush"></div>`;
    pushHTML().then(h => { const el = $("#notifPush"); if (el) el.innerHTML = h; });
  }

  function marcar(ids) {
    const l = leidas();
    ids.forEach(id => l.add(id));
    App.store.set(KEY, [...l].slice(-300));
    updateBadge();
  }

  function ejecutar(a) {
    const ac = a.accion || {};
    cerrar();
    if (ac.pedidos) return App.userPanel.open("pedidos");
    if (ac.registro) return App.auth?.isLoggedIn() ? App.userPanel.open() : App.auth.openRegistro();
    if (ac.cotizar) return App.quote?.open("");
    if (ac.url) return ac.url.startsWith("#") ? (location.hash = ac.url) : window.open(ac.url, "_blank", "noopener");
    if (ac.buscar) {
      const s = $("#search");
      s.value = ac.buscar;
      s.dispatchEvent(new Event("input", { bubbles: true }));
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (ac.categoria) $(`.tab[data-cat="${CSS.escape(ac.categoria)}"]`)?.click();
  }

  function abrir() {
    render();
    abierto = true;
    $("#notifPanel").hidden = false;
    $("#notifBtn").setAttribute("aria-expanded", "true");
    // Lo visible cuenta como visto (el resaltado "nuevo" se queda hasta cerrar)
    marcar(anuncios().map(a => a.id));
    cargarPedidos().then(() => marcar(anuncios().map(a => a.id)));
  }
  function cerrar() {
    if (!abierto) return;
    abierto = false;
    $("#notifPanel").hidden = true;
    $("#notifBtn").setAttribute("aria-expanded", "false");
  }

  function init() {
    const btn = $("#notifBtn");
    if (!btn) return;
    // Sacar el panel del header: su backdrop-filter + overflow:hidden lo recortan
    document.body.appendChild($("#notifPanel"));
    btn.addEventListener("click", e => { e.stopPropagation(); abierto ? cerrar() : abrir(); });
    $("#notifPanel").addEventListener("click", e => {
      e.stopPropagation();
      if (e.target.closest("[data-notif-all]")) { marcar(anuncios().map(a => a.id)); render(); return; }
      if (e.target.closest("[data-push-on]")) { activarPush(); return; }
      if (e.target.closest("[data-push-off]")) { desactivarPush(); return; }
      const act = e.target.closest("[data-notif-act]");
      if (act) { const a = anuncios().find(x => x.id === act.dataset.notifAct); if (a) ejecutar(a); }
    });
    document.addEventListener("click", cerrar);
    document.addEventListener("keydown", e => { if (e.key === "Escape" && abierto) { cerrar(); btn.focus(); } });

    App.auth?.onAuthChange(() => { cargarPedidos(); refrescarPush(); });
    cargarPedidos();
    cargarAvisos();
    refrescarPush();
    // Revisar cambios de estatus y avisos nuevos cada 2 minutos mientras la página está visible
    setInterval(() => { if (!document.hidden) { cargarPedidos(); cargarAvisos(); } }, 120000);
    updateBadge();
  }

  return { init, abrir, cerrar, updateBadge, sincronizarPedidos, activarPush, puedePedirPush };
})();
