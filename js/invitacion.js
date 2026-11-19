/* =========================================================
   INVITACIÓN A CREAR CUENTA
   ---------------------------------------------------------
   A quien navega sin sesión le mostramos UNA sola vez una
   tarjeta discreta con los beneficios de registrarse.
   Aparece tras ~40 s de navegación o al agregar algo al carrito
   (lo que pase primero), nunca encima de otra ventana.
   ========================================================= */
App.invitacion = (() => {
  const { $ } = App;
  const KEY = "3dps_invitacion_vista";
  const ESPERA_MS = 40000;
  let timer = null, mostrada = false;

  const yaVista = () => App.store.get(KEY, false);
  const marcar = () => App.store.set(KEY, true);

  function puedeMostrar() {
    return !mostrada && !yaVista() && !App.auth?.isLoggedIn()
      && !App.topLayer() && !$("#mantScreen") && !$("#notifPanel:not([hidden])");
  }

  function mostrar() {
    if (!puedeMostrar()) { programar(15000); return; } // reintentar cuando no estorbe
    mostrada = true;
    marcar();
    document.body.insertAdjacentHTML("beforeend", `
      <aside class="invite" id="invite" role="dialog" aria-labelledby="inviteT" aria-describedby="inviteD">
        <button class="invite-x" type="button" data-invite-close aria-label="Cerrar">×</button>
        <div class="invite-head">
          <span class="invite-ico" aria-hidden="true">✨</span>
          <div>
            <b id="inviteT">Crea tu cuenta gratis</b>
            <small id="inviteD">Toma menos de un minuto</small>
          </div>
        </div>
        <ul class="invite-list">
          <li>🛒 Tu carrito guardado en cualquier dispositivo</li>
          <li>📦 Sigue tu pedido paso a paso, sin mandar mensajes</li>
          <li>🔔 Te avisamos cuando tu pedido avance</li>
          <li>❤️ Guarda tus productos favoritos</li>
        </ul>
        <p class="invite-safe">🔒 Tus datos están protegidos y solo los usamos para tus pedidos.</p>
        <div class="invite-actions">
          <button class="btn btn-primary" type="button" data-invite-go>Crear mi cuenta</button>
          <button class="btn btn-ghost" type="button" data-invite-close>Ahora no</button>
        </div>
      </aside>`);
    const el = $("#invite");
    requestAnimationFrame(() => el.classList.add("show"));
    el.addEventListener("click", e => {
      if (e.target.closest("[data-invite-go]")) { cerrar(); App.auth.openRegistro(); }
      else if (e.target.closest("[data-invite-close]")) cerrar();
    });
    document.addEventListener("keydown", escape);
  }

  function escape(e) { if (e.key === "Escape") cerrar(); }

  function cerrar() {
    const el = $("#invite");
    document.removeEventListener("keydown", escape);
    if (!el) return;
    el.classList.remove("show");
    setTimeout(() => el.remove(), 350);
  }

  function programar(ms) {
    clearTimeout(timer);
    timer = setTimeout(mostrar, ms);
  }

  function init() {
    if (yaVista() || App.auth?.isLoggedIn()) return;
    programar(ESPERA_MS);
    // Si agrega algo al carrito, es buen momento (cuando cierre la ficha)
    document.addEventListener("click", e => {
      if (e.target.closest("#addToCart") && !mostrada) programar(2500);
    });
    // Si inicia sesión antes, ya no hace falta
    App.auth?.onAuthChange(user => { if (user) { clearTimeout(timer); cerrar(); } });
  }

  return { init };
})();
