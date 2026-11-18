/* =========================================================
   AUTENTICACIÓN con Supabase Auth
   ---------------------------------------------------------
   Registro (con teléfono obligatorio), login, logout,
   verificación de correo (con reenvío), recuperación y
   cambio de contraseña, y sesión persistente.

   El perfil en la tabla `usuarios` lo crea la BD con un
   trigger (ver sql/etapa1_auth.sql), no el navegador.

   Requiere: supabase.js (inicializado antes)
   ========================================================= */
App.auth = (() => {
  const { $, esc } = App;

  const MIN_PASS = 8;

  /* ---------- Estado ---------- */
  let user = null;      // Supabase auth user
  let perfil = null;    // Fila de la tabla 'usuarios'
  const listeners = []; // callbacks al cambiar la sesión

  function onAuthChange(fn) { listeners.push(fn); }
  function notify() { listeners.forEach(fn => fn(user, perfil)); }

  /* URL a la que regresan los enlaces de los correos (local o producción) */
  function urlBase() {
    return CONFIG.urlSitio || window.location.origin + window.location.pathname;
  }

  /* ---------- Utilidades ---------- */
  function normalizarTelefono(v) {
    let d = String(v || "").replace(/\D/g, "");
    if (d.length === 12 && d.startsWith("52")) d = d.slice(2);
    if (d.length === 13 && d.startsWith("521")) d = d.slice(3);
    return d;
  }
  const telefonoValido = t => /^\d{10}$/.test(t);
  const emailValido = e => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);

  function traducirError(err) {
    const m = (err?.message || "").toLowerCase();
    if (m.includes("invalid login")) return "Correo o contraseña incorrectos.";
    if (m.includes("email not confirmed")) return "Tu correo aún no está verificado.";
    if (m.includes("already registered") || m.includes("already been registered")) return "Este correo ya está registrado. ¿Quieres iniciar sesión?";
    if (m.includes("rate limit") || m.includes("too many") || err?.status === 429) return "Demasiados intentos. Espera unos minutos e inténtalo de nuevo.";
    if (m.includes("for security purposes")) {
      const s = m.match(/(\d+)\s*seconds?/);
      return `Por seguridad, espera ${s ? s[1] + " segundos" : "un momento"} antes de volver a intentarlo.`;
    }
    if (m.includes("password should") || m.includes("weak password")) return `La contraseña es muy débil. Usa al menos ${MIN_PASS} caracteres con letras y números.`;
    if (m.includes("same password") || m.includes("different from the old")) return "La nueva contraseña debe ser distinta a la anterior.";
    if (m.includes("invalid email") || m.includes("unable to validate email")) return "El correo no es válido.";
    if (m.includes("error sending")) return "No pudimos enviar el correo en este momento. Inténtalo en unos minutos o contáctanos por WhatsApp.";
    if (m.includes("signups not allowed")) return "Por ahora no se permiten registros nuevos.";
    if (m.includes("session") && m.includes("missing")) return "El enlace expiró. Solicita uno nuevo.";
    if (m.includes("failed to fetch") || m.includes("network")) return "Sin conexión. Revisa tu internet.";
    return err?.message || "Ocurrió un error. Inténtalo de nuevo.";
  }

  /* ---------- Init: escuchar cambios de sesión ---------- */
  async function init() {
    const sb = window.supabaseClient;
    if (!sb) return;

    sb.auth.onAuthStateChange((event, session) => {
      console.log("[Auth] Evento:", event);
      if (event === "PASSWORD_RECOVERY") setTimeout(openResetPassword, 0);
      // No hacer llamadas a la BD dentro del callback (puede bloquear el SDK)
      setTimeout(() => aplicarSesion(session), 0);
    });

    const { data: { session } } = await sb.auth.getSession();
    await aplicarSesion(session);
    procesarEnlaceDeCorreo();
  }

  // Evita procesar dos veces la misma sesión (evento inicial + getSession)
  let ultimoId;         // id de usuario ya aplicado (undefined = nada aún)
  let enCurso = null;   // { id, promise } de la carga en progreso
  function aplicarSesion(session) {
    const nuevoId = session?.user?.id || null;
    if (enCurso && enCurso.id === nuevoId) return enCurso.promise;
    if (nuevoId === ultimoId) { if (session?.user) user = session.user; return Promise.resolve(); }

    const promise = (async () => {
      user = session?.user || null;
      perfil = null;
      if (user) await cargarPerfil();
      ultimoId = nuevoId;
      updateUI();
      notify();
    })().finally(() => { if (enCurso?.promise === promise) enCurso = null; });
    enCurso = { id: nuevoId, promise };
    return promise;
  }

  /* Enlaces que llegan por correo: confirmación, recuperación o error */
  function procesarEnlaceDeCorreo() {
    const raw = window.AUTH_URL_HASH || "";
    if (!raw) return;
    const h = new URLSearchParams(raw.replace(/^#/, ""));
    const limpiar = () => history.replaceState(null, "", location.pathname + location.search);

    if (h.get("error") || h.get("error_code")) {
      limpiar();
      const code = h.get("error_code") || "";
      const msg = code === "otp_expired"
        ? "El enlace expiró o ya fue usado. Solicita uno nuevo."
        : (h.get("error_description") || "El enlace no es válido.").replace(/\+/g, " ");
      openLogin(msg);
      return;
    }
    const type = h.get("type");
    if (type === "recovery" || raw.includes("reset-password")) {
      openResetPassword();
    } else if (type === "signup" || type === "email" || type === "invite") {
      limpiar();
      App.toast("✅ ¡Correo verificado! Bienvenido.");
    } else if (type === "email_change") {
      limpiar();
      App.toast("✅ Correo actualizado.");
    }
    window.AUTH_URL_HASH = "";
  }

  /* ---------- Cargar perfil de la tabla usuarios ---------- */
  async function cargarPerfil() {
    if (!user) return;
    const sb = window.supabaseClient;
    const { data, error } = await sb
      .from("usuarios")
      .select("*")
      .eq("id_auth", user.id)
      .maybeSingle();

    if (error) { console.error("[Auth] Error cargando perfil:", error); return; }
    if (!data) { console.warn("[Auth] El usuario no tiene perfil en 'usuarios'."); return; }

    perfil = data;
    sb.from("usuarios")
      .update({ ultimo_acceso: new Date().toISOString() })
      .eq("id_usuario", data.id_usuario)
      .then(() => {});
  }

  /* ---------- Registro ---------- */
  async function registrar(email, password, nombre, telefono) {
    const sb = window.supabaseClient;
    if (!sb) return { error: { message: "Sin conexión a la base de datos" } };

    const { data, error } = await sb.auth.signUp({
      email,
      password,
      options: {
        data: { nombre, telefono },
        emailRedirectTo: urlBase()
      }
    });
    if (error) return { error };

    // Con "Confirm email" activo, si el correo ya existe Supabase responde
    // sin error pero con identities vacío.
    if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
      return { error: { message: "already registered" } };
    }
    if (data.user && !data.session) return { ok: true, needsVerification: true };
    return { ok: true, user: data.user };
  }

  /* ---------- Reenviar correo de verificación ---------- */
  async function reenviarVerificacion(email) {
    const sb = window.supabaseClient;
    if (!sb) return { error: { message: "Sin conexión" } };
    const { error } = await sb.auth.resend({
      type: "signup",
      email,
      options: { emailRedirectTo: urlBase() }
    });
    return error ? { error } : { ok: true };
  }

  /* ---------- Login / Logout ---------- */
  async function login(email, password) {
    const sb = window.supabaseClient;
    if (!sb) return { error: { message: "Sin conexión a la base de datos" } };
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) return { error };
    return { ok: true, user: data.user };
  }

  async function logout() {
    const sb = window.supabaseClient;
    if (!sb) return;
    await sb.auth.signOut();
    user = null;
    perfil = null;
    updateUI();
    notify();
  }

  /* ---------- Contraseña ---------- */
  async function recuperarPassword(email) {
    const sb = window.supabaseClient;
    if (!sb) return { error: { message: "Sin conexión" } };
    const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: urlBase() });
    return error ? { error } : { ok: true };
  }

  async function actualizarPassword(newPassword) {
    const sb = window.supabaseClient;
    if (!sb) return { error: { message: "Sin conexión" } };
    const { error } = await sb.auth.updateUser({ password: newPassword });
    return error ? { error } : { ok: true };
  }

  function validarPassword(pass, pass2) {
    if (pass.length < MIN_PASS) return `La contraseña debe tener al menos ${MIN_PASS} caracteres.`;
    if (!/[a-zA-Z]/.test(pass) || !/\d/.test(pass)) return "La contraseña debe incluir letras y números.";
    if (pass !== pass2) return "Las contraseñas no coinciden.";
    return "";
  }

  /* ---------- Actualizar perfil ---------- */
  async function actualizarPerfil(campos) {
    if (!perfil) return { error: { message: "No hay sesión" } };
    const sb = window.supabaseClient;
    const { data, error } = await sb
      .from("usuarios")
      .update(campos)
      .eq("id_usuario", perfil.id_usuario)
      .select()
      .single();
    if (error) return { error };
    perfil = data;
    updateUI();
    return { ok: true, perfil: data };
  }

  /* ---------- UI: header ---------- */
  function nombreVisible() {
    const n = perfil?.nombre_completo || user?.user_metadata?.nombre || user?.email || "";
    return n.split(/[\s@]/)[0];
  }

  function updateUI() {
    const btnLogin = $("#authLoginBtn");
    const btnUser = $("#authUserBtn");
    if (!btnLogin || !btnUser) return;

    if (user) {
      const nombre = nombreVisible();
      btnLogin.style.display = "none";
      btnUser.style.display = "";
      $("#authUserName").textContent = nombre;
      const av = $("#authAvatar");
      if (av) av.textContent = (nombre.charAt(0) || "?").toUpperCase();
    } else {
      btnLogin.style.display = "";
      btnUser.style.display = "none";
    }
  }

  /* ---------- Modales ---------- */
  function mostrar(html, bind) {
    const m = $("#authModal");
    $("#authModalInner").innerHTML = html;
    bindPasswordToggles();
    bind?.();
    if (App.topLayer() !== m) App.openLayer(m);
    setTimeout(() => $("#authModalInner input:not([disabled])")?.focus(), 60);
  }

  function openLogin(msg, email) {
    mostrar(loginHTML(email), bindLoginEvents);
    if (msg) showError("#loginError", msg);
  }
  const openRegistro = () => mostrar(registroHTML(), bindRegistroEvents);
  const openRecuperar = email => mostrar(recuperarHTML(email), bindRecuperarEvents);
  const openResetPassword = () => mostrar(resetPasswordHTML(false), bindResetPasswordEvents);
  const openCambiarPassword = () => mostrar(resetPasswordHTML(true), bindResetPasswordEvents);

  /* ---------- Templates ---------- */
  const EYE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>`;
  const EYE_OFF = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 19c-6.5 0-10-7-10-7a18.4 18.4 0 0 1 5.06-5.94M9.9 4.24A9.1 9.1 0 0 1 12 4c6.5 0 10 7 10 7a18.5 18.5 0 0 1-2.16 3.19M14.12 14.12a3 3 0 1 1-4.24-4.24"/><path d="M1 1l22 22"/></svg>`;

  function passField(id, label, placeholder, autocomplete, req = false) {
    return `
      <div class="field">
        <label for="${id}">${label}${req ? ' <span class="req">*</span>' : ""}</label>
        <div class="pass-wrap">
          <input id="${id}" type="password" placeholder="${placeholder}" autocomplete="${autocomplete}" required>
          <button type="button" class="pass-toggle" data-pass-toggle="${id}" aria-label="Mostrar contraseña">${EYE}</button>
        </div>
      </div>`;
  }

  function loginHTML(email = "") {
    return `
      <h2 id="authTitle">Iniciar sesión</h2>
      <p class="auth-sub">Accede para guardar tu carrito, favoritos y ver tus pedidos.</p>
      <form id="loginForm" class="auth-form" novalidate>
        <div class="field">
          <label for="loginEmail">Correo electrónico</label>
          <input id="loginEmail" type="email" placeholder="tu@correo.com" autocomplete="email" value="${esc(email)}" required>
        </div>
        ${passField("loginPass", "Contraseña", "Tu contraseña", "current-password")}
        <div class="auth-error" id="loginError" role="alert"></div>
        <div id="loginResend"></div>
        <button class="btn btn-primary btn-block auth-submit" type="submit" id="loginSubmit">Entrar</button>
      </form>
      <div class="auth-links">
        <button type="button" class="link-btn" id="goRecuperar">¿Olvidaste tu contraseña?</button>
        <p>¿No tienes cuenta? <button type="button" class="link-btn" id="goRegistro"><b>Regístrate gratis</b></button></p>
      </div>`;
  }

  function registroHTML() {
    return `
      <h2 id="authTitle">Crear cuenta</h2>
      <p class="auth-sub">Guarda tu carrito en cualquier dispositivo y sigue tus pedidos.</p>
      <form id="registroForm" class="auth-form" novalidate>
        <div class="field">
          <label for="regNombre">Nombre completo <span class="req">*</span></label>
          <input id="regNombre" type="text" placeholder="Ej. Ana López" autocomplete="name" required>
        </div>
        <div class="field">
          <label for="regEmail">Correo electrónico <span class="req">*</span></label>
          <input id="regEmail" type="email" placeholder="tu@correo.com" autocomplete="email" required>
        </div>
        <div class="field">
          <label for="regTel">WhatsApp / Teléfono <span class="req">*</span></label>
          <input id="regTel" type="tel" inputmode="numeric" placeholder="10 dígitos, ej. 7721234567" autocomplete="tel-national" maxlength="16" required>
        </div>
        ${passField("regPass", "Contraseña", `Mínimo ${MIN_PASS} caracteres`, "new-password", true)}
        <div class="pass-meter" id="regMeter" aria-hidden="true"><span></span></div>
        ${passField("regPass2", "Confirmar contraseña", "Repite tu contraseña", "new-password", true)}
        <p class="field-note">Usa al menos ${MIN_PASS} caracteres con letras y números. Te enviaremos un correo para verificar tu cuenta.</p>
        <div class="auth-error" id="regError" role="alert"></div>
        <button class="btn btn-primary btn-block auth-submit" type="submit" id="regSubmit">Crear mi cuenta</button>
      </form>
      <div class="auth-links">
        <p>¿Ya tienes cuenta? <button type="button" class="link-btn" id="goLogin"><b>Inicia sesión</b></button></p>
      </div>`;
  }

  function recuperarHTML(email = "") {
    return `
      <h2 id="authTitle">Recuperar contraseña</h2>
      <p class="auth-sub">Te enviaremos un enlace a tu correo para crear una nueva contraseña.</p>
      <form id="recuperarForm" class="auth-form" novalidate>
        <div class="field">
          <label for="recEmail">Correo electrónico</label>
          <input id="recEmail" type="email" placeholder="tu@correo.com" autocomplete="email" value="${esc(email)}" required>
        </div>
        <div class="auth-error" id="recError" role="alert"></div>
        <button class="btn btn-primary btn-block auth-submit" type="submit" id="recSubmit">Enviar enlace</button>
      </form>
      <div class="auth-links">
        <button type="button" class="link-btn" id="goLoginBack">← Volver a iniciar sesión</button>
      </div>`;
  }

  function resetPasswordHTML(desdePanel) {
    return `
      <h2 id="authTitle">${desdePanel ? "Cambiar contraseña" : "Nueva contraseña"}</h2>
      <p class="auth-sub">Escribe tu nueva contraseña.</p>
      <form id="resetForm" class="auth-form" novalidate>
        ${passField("resetPass", "Nueva contraseña", `Mínimo ${MIN_PASS} caracteres`, "new-password")}
        <div class="pass-meter" id="resetMeter" aria-hidden="true"><span></span></div>
        ${passField("resetPass2", "Confirmar contraseña", "Repite tu contraseña", "new-password")}
        <div class="auth-error" id="resetError" role="alert"></div>
        <button class="btn btn-primary btn-block auth-submit" type="submit" id="resetSubmit">Guardar contraseña</button>
      </form>`;
  }

  function verificationHTML(email) {
    return `
      <div class="auth-success">
        <div class="big">📧</div>
        <h2 id="authTitle">Revisa tu correo</h2>
        <p>Enviamos un enlace de verificación a <b>${esc(email)}</b>. Ábrelo para activar tu cuenta.</p>
        <p class="auth-sub" style="margin-top:12px">¿No llegó? Revisa spam o promociones.</p>
        <div class="auth-error" id="verError" role="alert"></div>
        <button type="button" class="btn btn-ghost btn-block" id="verResend" style="margin-top:16px">Reenviar correo</button>
        <button type="button" class="btn btn-primary btn-block" id="verGoLogin" style="margin-top:8px">Ya lo verifiqué, iniciar sesión</button>
      </div>`;
  }

  /* ---------- Helpers de UI ---------- */
  function showError(id, msg) {
    const el = $(id);
    if (!el) return;
    el.textContent = msg;
    el.style.display = msg ? "" : "none";
  }

  function setLoading(btn, loading) {
    if (!btn) return;
    btn.disabled = loading;
    btn.dataset.originalText = btn.dataset.originalText || btn.textContent;
    btn.textContent = loading ? "Un momento…" : btn.dataset.originalText;
  }

  function bindPasswordToggles() {
    $("#authModalInner").querySelectorAll("[data-pass-toggle]").forEach(b => {
      b.addEventListener("click", () => {
        const inp = $("#" + b.dataset.passToggle);
        const mostrarTxt = inp.type === "password";
        inp.type = mostrarTxt ? "text" : "password";
        b.innerHTML = mostrarTxt ? EYE_OFF : EYE;
        b.setAttribute("aria-label", mostrarTxt ? "Ocultar contraseña" : "Mostrar contraseña");
      });
    });
  }

  function bindMeter(inputId, meterId) {
    const inp = $(inputId), meter = $(meterId);
    if (!inp || !meter) return;
    inp.addEventListener("input", () => {
      const v = inp.value;
      let s = 0;
      if (v.length >= MIN_PASS) s++;
      if (/[a-zA-Z]/.test(v) && /\d/.test(v)) s++;
      if (/[A-Z]/.test(v) && /[a-z]/.test(v)) s++;
      if (/[^a-zA-Z0-9]/.test(v) || v.length >= 12) s++;
      meter.dataset.level = v ? s : "";
    });
  }

  /* Botón de reenvío con espera de 60 s (límite de Supabase) */
  function bindResend(btn, email, errId) {
    btn.addEventListener("click", async () => {
      showError(errId, "");
      setLoading(btn, true);
      const res = await reenviarVerificacion(email);
      btn.dataset.originalText = "Reenviar correo";
      setLoading(btn, false);
      if (res.error) return showError(errId, traducirError(res.error));
      App.toast("📧 Correo reenviado");
      let s = 60;
      btn.disabled = true;
      const t = setInterval(() => {
        btn.textContent = `Reenviar en ${--s}s`;
        if (s <= 0) { clearInterval(t); btn.disabled = false; btn.textContent = "Reenviar correo"; }
      }, 1000);
    });
  }

  /* ---------- Eventos ---------- */
  function bindLoginEvents() {
    $("#loginForm").addEventListener("submit", async e => {
      e.preventDefault();
      showError("#loginError", "");
      $("#loginResend").innerHTML = "";
      const email = $("#loginEmail").value.trim();
      const pass = $("#loginPass").value;
      if (!email || !pass) return showError("#loginError", "Completa todos los campos.");
      if (!emailValido(email)) return showError("#loginError", "Escribe un correo válido.");

      const btn = $("#loginSubmit");
      setLoading(btn, true);
      const res = await login(email, pass);
      setLoading(btn, false);

      if (res.error) {
        showError("#loginError", traducirError(res.error));
        if ((res.error.message || "").toLowerCase().includes("email not confirmed")) {
          $("#loginResend").innerHTML = `<button type="button" class="btn btn-ghost btn-block" id="loginResendBtn">Reenviar correo de verificación</button>`;
          bindResend($("#loginResendBtn"), email, "#loginError");
        }
        return;
      }
      App.toast("👋 ¡Bienvenido!");
      App.closeLayer($("#authModal"));
    });
    $("#goRegistro").addEventListener("click", openRegistro);
    $("#goRecuperar").addEventListener("click", () => openRecuperar($("#loginEmail").value.trim()));
  }

  function bindRegistroEvents() {
    bindMeter("#regPass", "#regMeter");
    $("#registroForm").addEventListener("submit", async e => {
      e.preventDefault();
      showError("#regError", "");
      const nombre = $("#regNombre").value.trim().replace(/\s+/g, " ");
      const email = $("#regEmail").value.trim().toLowerCase();
      const tel = normalizarTelefono($("#regTel").value);
      const pass = $("#regPass").value;
      const pass2 = $("#regPass2").value;

      if (!nombre || !email || !tel || !pass) return showError("#regError", "Completa los campos obligatorios.");
      if (nombre.length < 3) return showError("#regError", "Escribe tu nombre completo.");
      if (!emailValido(email)) return showError("#regError", "Escribe un correo válido.");
      if (!telefonoValido(tel)) return showError("#regError", "El teléfono debe tener 10 dígitos.");
      const errPass = validarPassword(pass, pass2);
      if (errPass) return showError("#regError", errPass);

      const btn = $("#regSubmit");
      setLoading(btn, true);
      const res = await registrar(email, pass, nombre, tel);
      setLoading(btn, false);

      if (res.error) return showError("#regError", traducirError(res.error));

      if (res.needsVerification) {
        mostrar(verificationHTML(email), () => {
          bindResend($("#verResend"), email, "#verError");
          $("#verGoLogin").addEventListener("click", () => openLogin("", email));
        });
      } else {
        App.toast("🎉 ¡Cuenta creada!");
        App.closeLayer($("#authModal"));
      }
    });
    $("#goLogin").addEventListener("click", () => openLogin("", $("#regEmail").value.trim()));
  }

  function bindRecuperarEvents() {
    $("#recuperarForm").addEventListener("submit", async e => {
      e.preventDefault();
      showError("#recError", "");
      const email = $("#recEmail").value.trim();
      if (!emailValido(email)) return showError("#recError", "Escribe un correo válido.");

      const btn = $("#recSubmit");
      setLoading(btn, true);
      const res = await recuperarPassword(email);
      setLoading(btn, false);
      if (res.error) return showError("#recError", traducirError(res.error));

      mostrar(`
        <div class="auth-success">
          <div class="big">📧</div>
          <h2 id="authTitle">Enlace enviado</h2>
          <p>Si <b>${esc(email)}</b> tiene una cuenta, recibirás un enlace para crear una nueva contraseña.</p>
          <p class="auth-sub" style="margin-top:12px">El enlace vence en 1 hora. Revisa también spam.</p>
          <button type="button" class="btn btn-ghost btn-block" data-close-auth style="margin-top:16px">Entendido</button>
        </div>`, () => {
        $("[data-close-auth]").addEventListener("click", () => App.closeLayer($("#authModal")));
      });
    });
    $("#goLoginBack").addEventListener("click", () => openLogin("", $("#recEmail").value.trim()));
  }

  function bindResetPasswordEvents() {
    bindMeter("#resetPass", "#resetMeter");
    $("#resetForm").addEventListener("submit", async e => {
      e.preventDefault();
      showError("#resetError", "");
      const pass = $("#resetPass").value;
      const errPass = validarPassword(pass, $("#resetPass2").value);
      if (errPass) return showError("#resetError", errPass);

      const btn = $("#resetSubmit");
      setLoading(btn, true);
      const res = await actualizarPassword(pass);
      setLoading(btn, false);
      if (res.error) return showError("#resetError", traducirError(res.error));

      history.replaceState(null, "", location.pathname + location.search);
      App.toast("✅ Contraseña actualizada");
      App.closeLayer($("#authModal"));
    });
  }

  /* ---------- Getters ---------- */
  const getUser = () => user;
  const getPerfil = () => perfil;
  const isLoggedIn = () => !!user;

  return {
    init, openLogin, openRegistro, openRecuperar, openResetPassword, openCambiarPassword,
    login, logout, registrar, recuperarPassword, actualizarPerfil, reenviarVerificacion,
    normalizarTelefono, telefonoValido, traducirError,
    getUser, getPerfil, isLoggedIn, onAuthChange
  };
})();
