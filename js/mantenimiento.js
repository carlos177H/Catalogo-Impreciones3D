/* =========================================================
   MODO MANTENIMIENTO
   ---------------------------------------------------------
   Lee configuracion.mantenimiento (lo activas desde el panel
   de admin → Ajustes). Clientes: pantalla de mantenimiento.
   Admin con sesión: navega normal con un aviso abajo.
   La BD además bloquea pedidos nuevos (sql/etapa4b_ajustes.sql).
   ========================================================= */
App.mantenimiento = (() => {
  const { $, esc } = App;
  let activo = false, mensaje = "";

  const esAdmin = () => App.auth?.getPerfil()?.id_rol === 1;

  async function leer() {
    const sb = window.supabaseClient;
    if (!sb) return;
    try {
      const { data } = await sb.from("configuracion").select("clave, valor").in("clave", ["mantenimiento", "mantenimiento_msg"]);
      const c = Object.fromEntries((data || []).map(r => [r.clave, r.valor]));
      activo = c.mantenimiento === "true";
      mensaje = c.mantenimiento_msg || "";
    } catch (_) { /* sin conexión: no bloquear la tienda */ }
  }

  function aplicar() {
    $("#mantScreen")?.remove();
    $("#mantBanner")?.remove();
    document.body.classList.remove("mant-login");
    if (!activo) return;

    if (esAdmin()) {
      document.body.insertAdjacentHTML("beforeend",
        `<div class="mant-banner" id="mantBanner" role="status">🛠️ Modo mantenimiento activo · solo tú ves la tienda</div>`);
      return;
    }
    const wa = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(`¡Hola, ${CONFIG.negocio}! Quiero información.`)}`;
    document.body.insertAdjacentHTML("beforeend", `
      <div class="mant-screen" id="mantScreen" role="dialog" aria-modal="true" aria-labelledby="mantTitle">
        <div class="mant-box">
          <img src="img/logo-icon.png" alt="" width="64" height="64">
          <span class="mant-ico" aria-hidden="true">🛠️</span>
          <h1 id="mantTitle">Estamos en mantenimiento</h1>
          <p>${esc(mensaje || "Estamos mejorando la tienda para ti. Volvemos muy pronto 🙌")}</p>
          <a class="btn btn-wa" href="${wa}" target="_blank" rel="noopener">Escríbenos por WhatsApp</a>
          <button type="button" class="link-btn mant-admin" id="mantAdmin">Acceso administrador</button>
        </div>
      </div>`);
    $("#mantAdmin").addEventListener("click", () => {
      document.body.classList.add("mant-login"); // deja ver el login encima
      App.auth.openLogin();
    });
  }

  async function revisar() {
    await leer();
    aplicar();
  }

  function init() {
    App.auth?.onAuthChange(() => aplicar());
    // Si se cierra el login sin ser admin, la pantalla vuelve al frente
    document.addEventListener("click", () => {
      if (document.body.classList.contains("mant-login") && !$("#authModal")?.classList.contains("open")) {
        document.body.classList.remove("mant-login");
      }
    });
    // Revisar cada 2 minutos (por si lo activas o desactivas mientras navegan)
    setInterval(() => { if (!document.hidden) revisar(); }, 120000);
    return revisar();
  }

  return { init, revisar, isActivo: () => activo };
})();
