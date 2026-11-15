/* =========================================================
   AUTENTICACIÓN con Supabase Auth
   ---------------------------------------------------------
   Registro, login, logout, verificación de correo,
   recuperación de contraseña, y sesión persistente.

   Requiere: supabase.js (inicializado antes)
   ========================================================= */
App.auth = (() => {
  const { $, $$, esc } = App;

  /* ---------- Estado ---------- */
  let user = null;      // Supabase auth user
  let perfil = null;    // Row from 'usuarios' table
  const listeners = []; // callbacks on auth change

  function onAuthChange(fn) { listeners.push(fn); }
  function notify() { listeners.forEach(fn => fn(user, perfil)); }

  /* ---------- Init: escuchar cambios de sesión ---------- */
  async function init() {
    const sb = window.supabaseClient;
    if (!sb) return;

    // Listener de cambio de auth
    sb.auth.onAuthStateChange(async (event, session) => {
      console.log("[Auth] Evento:", event);
      if (session?.user) {
        user = session.user;
        await cargarPerfil();
      } else {
        user = null;
        perfil = null;
      }
      updateUI();
      notify();
    });

    // Verificar sesión existente
    const { data: { session } } = await sb.auth.getSession();
    if (session?.user) {
      user = session.user;
      await cargarPerfil();
      updateUI();
      notify();
    }
  }

  /* ---------- Cargar perfil de la tabla usuarios ---------- */
  async function cargarPerfil() {
    if (!user) return;
    const sb = window.supabaseClient;
    const { data, error } = await sb
      .from("usuarios")
      .select("*")
      .eq("id_auth", user.id)
      .single();

    if (error && error.code === "PGRST116") {
      // No existe perfil → crearlo
      const { data: nuevo, error: errIns } = await sb
        .from("usuarios")
        .insert({
          id_auth: user.id,
          nombre_completo: user.user_metadata?.nombre || user.email.split("@")[0],
          email: user.email,
          telefono: user.user_metadata?.telefono || null,
          password_hash: "supabase_auth", // No usamos esta columna con Supabase Auth
          verificado: !!user.email_confirmed_at
        })
        .select()
        .single();
      if (!errIns) perfil = nuevo;
      else console.error("[Auth] Error creando perfil:", errIns);
    } else if (!error) {
      perfil = data;
      // Actualizar último acceso
      sb.from("usuarios")
        .update({ ultimo_acceso: new Date().toISOString() })
        .eq("id_usuario", data.id_usuario)
        .then(() => {});
    }
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
        emailRedirectTo: CONFIG.urlSitio || window.location.origin + window.location.pathname
      }
    });

    if (error) return { error };

    // Si Supabase requiere confirmación de email
    if (data.user && !data.session) {
      return { ok: true, needsVerification: true };
    }

    return { ok: true, user: data.user };
  }

  /* ---------- Login ---------- */
  async function login(email, password) {
    const sb = window.supabaseClient;
    if (!sb) return { error: { message: "Sin conexión a la base de datos" } };

    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) return { error };
    return { ok: true, user: data.user };
  }

  /* ---------- Logout ---------- */
  async function logout() {
    const sb = window.supabaseClient;
    if (!sb) return;
    await sb.auth.signOut();
    user = null;
    perfil = null;
    updateUI();
    notify();
  }

  /* ---------- Recuperar contraseña ---------- */
  async function recuperarPassword(email) {
    const sb = window.supabaseClient;
    if (!sb) return { error: { message: "Sin conexión" } };

    const { error } = await sb.auth.resetPasswordForEmail(email, {
      redirectTo: (CONFIG.urlSitio || window.location.origin + window.location.pathname) + "#reset-password"
    });
    if (error) return { error };
    return { ok: true };
  }

  /* ---------- Actualizar contraseña (desde enlace de recuperación) ---------- */
  async function actualizarPassword(newPassword) {
    const sb = window.supabaseClient;
    if (!sb) return { error: { message: "Sin conexión" } };

    const { error } = await sb.auth.updateUser({ password: newPassword });
    if (error) return { error };
    return { ok: true };
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

  /* ---------- UI: actualizar header ---------- */
  function updateUI() {
    const btnLogin = $("#authLoginBtn");
    const btnUser = $("#authUserBtn");
    const userName = $("#authUserName");
    if (!btnLogin || !btnUser) return;

    if (user && perfil) {
      btnLogin.style.display = "none";
      btnUser.style.display = "";
      userName.textContent = perfil.nombre_completo.split(" ")[0]; // primer nombre
    } else {
      btnLogin.style.display = "";
      btnUser.style.display = "none";
    }
  }

  /* ---------- Modales de Auth ---------- */
  function openLogin() {
    const m = $("#authModal");
    $("#authModalInner").innerHTML = loginHTML();
    bindLoginEvents();
    App.openLayer(m);
  }

  function openRegistro() {
    const m = $("#authModal");
    $("#authModalInner").innerHTML = registroHTML();
    bindRegistroEvents();
    App.openLayer(m);
  }

  function openRecuperar() {
    $("#authModalInner").innerHTML = recuperarHTML();
    bindRecuperarEvents();
  }

  function openResetPassword() {
    const m = $("#authModal");
    $("#authModalInner").innerHTML = resetPasswordHTML();
    bindResetPasswordEvents();
    App.openLayer(m);
  }

  /* ---------- Templates HTML ---------- */
  function loginHTML() {
    return `
      <h2 id="authTitle">Iniciar sesión</h2>
      <p class="auth-sub">Accede a tu cuenta para ver tu historial y guardar favoritos.</p>
      <form id="loginForm" class="auth-form" novalidate>
        <div class="field">
          <label for="loginEmail">Correo electrónico</label>
          <input id="loginEmail" type="email" placeholder="tu@correo.com" autocomplete="email" required>
        </div>
        <div class="field">
          <label for="loginPass">Contraseña</label>
          <input id="loginPass" type="password" placeholder="Tu contraseña" autocomplete="current-password" required>
        </div>
        <div class="auth-error" id="loginError" role="alert"></div>
        <button class="btn btn-primary btn-block" type="submit" id="loginSubmit" style="height:48px">Entrar</button>
      </form>
      <div class="auth-links">
        <button class="link-btn" id="goRecuperar">¿Olvidaste tu contraseña?</button>
        <p>¿No tienes cuenta? <button class="link-btn" id="goRegistro"><b>Regístrate gratis</b></button></p>
      </div>`;
  }

  function registroHTML() {
    return `
      <h2 id="authTitle">Crear cuenta</h2>
      <p class="auth-sub">Regístrate para guardar tu carrito, favoritos y ver tu historial de pedidos.</p>
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
          <label for="regTel">Teléfono (opcional)</label>
          <input id="regTel" type="tel" placeholder="Ej. 7721234567" autocomplete="tel">
        </div>
        <div class="field">
          <label for="regPass">Contraseña <span class="req">*</span></label>
          <input id="regPass" type="password" placeholder="Mínimo 6 caracteres" autocomplete="new-password" required minlength="6">
          <span class="hint">Al menos 6 caracteres</span>
        </div>
        <div class="field">
          <label for="regPass2">Confirmar contraseña <span class="req">*</span></label>
          <input id="regPass2" type="password" placeholder="Repite tu contraseña" autocomplete="new-password" required>
        </div>
        <div class="auth-error" id="regError" role="alert"></div>
        <button class="btn btn-primary btn-block" type="submit" id="regSubmit" style="height:48px">Crear mi cuenta</button>
      </form>
      <div class="auth-links">
        <p>¿Ya tienes cuenta? <button class="link-btn" id="goLogin"><b>Inicia sesión</b></button></p>
      </div>`;
  }

  function recuperarHTML() {
    return `
      <h2 id="authTitle">Recuperar contraseña</h2>
      <p class="auth-sub">Te enviaremos un enlace a tu correo para restablecer tu contraseña.</p>
      <form id="recuperarForm" class="auth-form" novalidate>
        <div class="field">
          <label for="recEmail">Correo electrónico</label>
          <input id="recEmail" type="email" placeholder="tu@correo.com" autocomplete="email" required>
        </div>
        <div class="auth-error" id="recError" role="alert"></div>
        <button class="btn btn-primary btn-block" type="submit" id="recSubmit" style="height:48px">Enviar enlace</button>
      </form>
      <div class="auth-links">
        <button class="link-btn" id="goLoginBack">← Volver a iniciar sesión</button>
      </div>`;
  }

  function resetPasswordHTML() {
    return `
      <h2 id="authTitle">Nueva contraseña</h2>
      <p class="auth-sub">Escribe tu nueva contraseña.</p>
      <form id="resetForm" class="auth-form" novalidate>
        <div class="field">
          <label for="resetPass">Nueva contraseña</label>
          <input id="resetPass" type="password" placeholder="Mínimo 6 caracteres" autocomplete="new-password" required minlength="6">
        </div>
        <div class="field">
          <label for="resetPass2">Confirmar contraseña</label>
          <input id="resetPass2" type="password" placeholder="Repite tu contraseña" autocomplete="new-password" required>
        </div>
        <div class="auth-error" id="resetError" role="alert"></div>
        <button class="btn btn-primary btn-block" type="submit" style="height:48px">Actualizar contraseña</button>
      </form>`;
  }

  function verificationHTML() {
    return `
      <div class="auth-success">
        <div class="big">📧</div>
        <h2 id="authTitle">Revisa tu correo</h2>
        <p>Te enviamos un enlace de verificación. Haz clic en él para activar tu cuenta.</p>
        <p class="auth-sub" style="margin-top:12px">Si no lo ves, revisa tu carpeta de spam.</p>
        <button class="btn btn-ghost btn-block" data-close style="margin-top:16px">Entendido</button>
      </div>`;
  }

  /* ---------- Bind Events ---------- */
  function showError(id, msg) {
    const el = $(id);
    el.textContent = msg;
    el.style.display = msg ? "" : "none";
  }

  function setLoading(btn, loading) {
    btn.disabled = loading;
    btn.dataset.originalText = btn.dataset.originalText || btn.textContent;
    btn.textContent = loading ? "Cargando…" : btn.dataset.originalText;
  }

  function bindLoginEvents() {
    $("#loginForm").addEventListener("submit", async e => {
      e.preventDefault();
      showError("#loginError", "");
      const email = $("#loginEmail").value.trim();
      const pass = $("#loginPass").value;
      if (!email || !pass) return showError("#loginError", "Completa todos los campos.");

      const btn = $("#loginSubmit");
      setLoading(btn, true);
      const res = await login(email, pass);
      setLoading(btn, false);

      if (res.error) {
        const msg = res.error.message.includes("Invalid login")
          ? "Correo o contraseña incorrectos."
          : res.error.message.includes("Email not confirmed")
          ? "Debes verificar tu correo antes de iniciar sesión. Revisa tu bandeja."
          : res.error.message;
        return showError("#loginError", msg);
      }

      App.toast("👋 ¡Bienvenido!");
      App.closeLayer($("#authModal"));
    });
    $("#goRegistro")?.addEventListener("click", openRegistro);
    $("#goRecuperar")?.addEventListener("click", openRecuperar);
  }

  function bindRegistroEvents() {
    $("#registroForm").addEventListener("submit", async e => {
      e.preventDefault();
      showError("#regError", "");
      const nombre = $("#regNombre").value.trim();
      const email = $("#regEmail").value.trim();
      const tel = $("#regTel").value.trim();
      const pass = $("#regPass").value;
      const pass2 = $("#regPass2").value;

      if (!nombre || !email || !pass) return showError("#regError", "Completa los campos obligatorios.");
      if (pass.length < 6) return showError("#regError", "La contraseña debe tener al menos 6 caracteres.");
      if (pass !== pass2) return showError("#regError", "Las contraseñas no coinciden.");

      const btn = $("#regSubmit");
      setLoading(btn, true);
      const res = await registrar(email, pass, nombre, tel);
      setLoading(btn, false);

      if (res.error) {
        const msg = res.error.message.includes("already registered")
          ? "Este correo ya está registrado. ¿Quieres iniciar sesión?"
          : res.error.message;
        return showError("#regError", msg);
      }

      if (res.needsVerification) {
        $("#authModalInner").innerHTML = verificationHTML();
      } else {
        App.toast("🎉 ¡Cuenta creada!");
        App.closeLayer($("#authModal"));
      }
    });
    $("#goLogin")?.addEventListener("click", () => { openLogin(); /* reopen */ });
  }

  function bindRecuperarEvents() {
    $("#recuperarForm").addEventListener("submit", async e => {
      e.preventDefault();
      showError("#recError", "");
      const email = $("#recEmail").value.trim();
      if (!email) return showError("#recError", "Escribe tu correo.");

      const btn = $("#recSubmit");
      setLoading(btn, true);
      const res = await recuperarPassword(email);
      setLoading(btn, false);

      if (res.error) return showError("#recError", res.error.message);

      $("#authModalInner").innerHTML = `
        <div class="auth-success">
          <div class="big">📧</div>
          <h2 id="authTitle">Enlace enviado</h2>
          <p>Si el correo existe en nuestro sistema, recibirás un enlace para restablecer tu contraseña.</p>
          <button class="btn btn-ghost btn-block" data-close style="margin-top:16px">Entendido</button>
        </div>`;
    });
    $("#goLoginBack")?.addEventListener("click", () => {
      $("#authModalInner").innerHTML = loginHTML();
      bindLoginEvents();
    });
  }

  function bindResetPasswordEvents() {
    $("#resetForm").addEventListener("submit", async e => {
      e.preventDefault();
      showError("#resetError", "");
      const pass = $("#resetPass").value;
      const pass2 = $("#resetPass2").value;
      if (pass.length < 6) return showError("#resetError", "Mínimo 6 caracteres.");
      if (pass !== pass2) return showError("#resetError", "Las contraseñas no coinciden.");

      const res = await actualizarPassword(pass);
      if (res.error) return showError("#resetError", res.error.message);

      App.toast("✅ Contraseña actualizada");
      App.closeLayer($("#authModal"));
    });
  }

  /* ---------- Getters ---------- */
  function getUser() { return user; }
  function getPerfil() { return perfil; }
  function isLoggedIn() { return !!user; }

  return {
    init, openLogin, openRegistro, openRecuperar, openResetPassword,
    login, logout, registrar, recuperarPassword, actualizarPerfil,
    getUser, getPerfil, isLoggedIn, onAuthChange
  };
})();
