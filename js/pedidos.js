/* =========================================================
   PEDIDOS CON CUENTA
   ---------------------------------------------------------
   Crear pedido (vía la función crear_pedido de la BD, que
   recalcula precios), subir comprobante de transferencia,
   listar pedidos y dibujar la línea de estatus.
   Requiere: sql/etapa3_pedidos.sql
   ========================================================= */
App.pedidos = (() => {
  const { $, esc, fmt } = App;
  const BUCKET = "comprobantes";
  const MAX_MB = 5;

  const svg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const ICO = {
    recibido: svg('<path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 14l2 2 4-4"/>'),
    pago: svg('<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4"/>'),
    impresion: svg('<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>'),
    listo: svg('<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5"/><path d="M12 13v8"/>'),
    entregado: svg('<path d="M20 6 9 17l-5-5"/>'),
    cancelado: svg('<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>'),
    subir: svg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>'),
    reloj: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    wa: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>`,
    ojo: svg('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>')
  };

  /* Los 8 estatus de la BD agrupados en 5 pasos para el cliente */
  const PASOS = [
    { key: "recibido",  estatus: [1],       titulo: p => tipoPago(p) === "total" ? "Pendiente de pago" : tipoPago(p) === "anticipo" ? "Pendiente de anticipo" : "Pedido recibido" },
    { key: "pago",      estatus: [2],       titulo: p => tipoPago(p) === "total" ? "Pago confirmado" : tipoPago(p) === "anticipo" ? "Anticipo recibido" : "Pedido confirmado" },
    { key: "impresion", estatus: [3, 4, 5], titulo: () => "En impresión" },
    { key: "listo",     estatus: [6],       titulo: () => "Listo para entrega" },
    { key: "entregado", estatus: [7],       titulo: () => "Entregado" }
  ];
  const CANCELADO = 8;
  // "total": transferencia (paga todo antes) · "anticipo": efectivo con anticipo · "ninguno": paga al recibir
  const tipoPago = p => !(parseFloat(p.anticipo) > 0) ? "ninguno" : p.metodo_pago === "transferencia" ? "total" : "anticipo";
  const pasoDe = idEstatus => PASOS.findIndex(p => p.estatus.includes(idEstatus));

  function etiqueta(ped) {
    if (ped.id_estatus === CANCELADO) return "Cancelado";
    const pago = pagoPendiente(ped);
    if (ped.id_estatus === 1 && pago) return "Comprobante en revisión";
    const i = pasoDe(ped.id_estatus);
    return i >= 0 ? PASOS[i].titulo(ped) : (ped.estatus_pedido?.descripcion || "En proceso");
  }
  const pagoPendiente = ped => (ped.pagos || []).find(p => !p.confirmado);
  const pagoConfirmado = ped => (ped.pagos || []).find(p => p.confirmado);

  /* ---------- API ---------- */
  function sb() {
    const c = window.supabaseClient;
    if (!c) throw new Error("Sin conexión a la base de datos");
    return c;
  }

  function errorLegible(e) {
    const m = e?.message || "";
    if (/failed to fetch|network/i.test(m)) return "Sin conexión. Revisa tu internet.";
    if (/jwt|not authenticated|28000/i.test(m)) return "Tu sesión expiró. Vuelve a iniciar sesión.";
    if (/mime|type/i.test(m)) return "Formato no permitido. Sube una imagen (JPG, PNG) o PDF.";
    if (/size|too large|exceeded/i.test(m)) return `El archivo pesa más de ${MAX_MB} MB.`;
    return m || "Ocurrió un error. Inténtalo de nuevo.";
  }

  let _config = null;
  async function config() {
    if (_config) return _config;
    _config = { anticipo_pct: 50, anticipo_minimo: 0 };
    try {
      const { data } = await sb().from("configuracion").select("clave, valor");
      (data || []).forEach(r => { _config[r.clave] = parseFloat(r.valor); });
    } catch (_) {}
    return _config;
  }

  /* Estimación en el navegador (la BD decide el monto real al crear el pedido) */
  async function anticipoEstimado(total, metodo) {
    if (metodo === "transferencia") return total;
    const c = await config();
    const perfil = App.auth?.getPerfil();
    if (perfil?.requiere_anticipo === false || total < c.anticipo_minimo) return 0;
    return Math.ceil(total * c.anticipo_pct / 100);
  }

  async function crear({ lugar, notas, metodo }) {
    const items = App.cart.items.map(i => ({ id: i.id, qty: i.qty }));
    const { data, error } = await sb().rpc("crear_pedido", {
      p_items: items, p_lugar: lugar, p_notas: notas || null, p_metodo: metodo
    });
    if (error) throw new Error(errorLegible(error));
    return data; // { id_pedido, total, productos }
  }

  async function listar() {
    const perfil = App.auth?.getPerfil();
    if (!perfil) return [];
    const { data, error } = await sb()
      .from("pedidos")
      .select(`id_pedido, fecha_pedido, id_estatus, total, anticipo, metodo_pago, notas, lugar_entrega,
               estatus_pedido ( nombre, descripcion ),
               pagos ( id_pago, monto, comprobante_url, confirmado, fecha_pago ),
               detalle_pedido ( id_producto, cantidad, precio_unitario, subtotal ),
               historial_pedido ( id_historial, id_estatus, fecha, comentario )`)
      .eq("id_usuario", perfil.id_usuario)
      .order("fecha_pedido", { ascending: false });
    if (error) throw new Error(errorLegible(error));
    return data || [];
  }

  /* Reduce fotos grandes a JPEG ~1600px para que suban rápido */
  async function comprimir(file) {
    if (!/^image\/(jpeg|png|webp)$/.test(file.type) || file.size < 1.5 * 1024 * 1024) return file;
    try {
      const bmp = await createImageBitmap(file);
      const k = Math.min(1, 1600 / Math.max(bmp.width, bmp.height));
      const c = document.createElement("canvas");
      c.width = Math.round(bmp.width * k); c.height = Math.round(bmp.height * k);
      c.getContext("2d").drawImage(bmp, 0, 0, c.width, c.height);
      const blob = await new Promise(r => c.toBlob(r, "image/jpeg", 0.85));
      return blob && blob.size < file.size ? new File([blob], "comprobante.jpg", { type: "image/jpeg" }) : file;
    } catch (_) { return file; }
  }

  async function subirComprobante(idPedido, file, referencia) {
    const { data: { user } } = await sb().auth.getUser();
    if (!user) throw new Error("Tu sesión expiró. Vuelve a iniciar sesión.");
    const f = await comprimir(file);
    if (f.size > MAX_MB * 1024 * 1024) throw new Error(`El archivo pesa más de ${MAX_MB} MB.`);
    const ext = (f.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
    const path = `${user.id}/pedido-${idPedido}-${Date.now()}.${ext}`;

    const up = await sb().storage.from(BUCKET).upload(path, f, { contentType: f.type || undefined, upsert: false });
    if (up.error) throw new Error(errorLegible(up.error));

    const { error } = await sb().rpc("registrar_comprobante", {
      p_pedido: idPedido, p_archivo: path, p_referencia: referencia || null
    });
    if (error) throw new Error(errorLegible(error));
    return path;
  }

  async function urlComprobante(path) {
    const { data, error } = await sb().storage.from(BUCKET).createSignedUrl(path, 300);
    if (error) throw new Error(errorLegible(error));
    return data.signedUrl;
  }

  /* Enlace de WhatsApp para pedir información de un pedido */
  function waInfo(idPedido, extra) {
    const txt = `¡Hola, ${CONFIG.negocio}! Quiero información de mi pedido #${idPedido}${extra ? ` (${extra})` : ""}.`;
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(txt)}`;
  }

  /* ---------- Vistas ---------- */
  function lineaEstatus(ped) {
    if (ped.id_estatus === CANCELADO) {
      return `<div class="ped-cancel">${ICO.cancelado}<span>Este pedido fue cancelado.</span></div>`;
    }
    const actual = Math.max(0, pasoDe(ped.id_estatus));
    const pct = (actual / (PASOS.length - 1)) * 100;
    return `
      <ol class="ped-steps" style="--progreso:${pct}%">
        ${PASOS.map((p, i) => `
          <li class="ped-step ${i < actual ? "hecho" : i === actual ? "actual" : ""}">
            <span class="ped-dot">${ICO[p.key]}</span>
            <span class="ped-lbl">${esc(p.titulo(ped))}</span>
          </li>`).join("")}
      </ol>`;
  }

  function bloquePago(ped) {
    if (ped.id_estatus === CANCELADO) return "";
    const total = parseFloat(ped.total), ant = parseFloat(ped.anticipo) || 0;
    const tipo = tipoPago(ped);
    if (tipo === "ninguno") {
      return ped.metodo_pago === "efectivo" && ped.id_estatus !== 7
        ? `<div class="ped-pay info">💵<span>Pagas ${fmt(total)} en efectivo al recibir</span></div>` : "";
    }
    const conf = pagoConfirmado(ped), pend = pagoPendiente(ped);
    const resto = tipo === "anticipo" ? `<div class="ped-rest"><span>Resta al entregar (efectivo)</span><b>${fmt(total - ant)}</b></div>` : "";
    const que = tipo === "anticipo" ? `Anticipo de ${fmt(ant)}` : `Pago de ${fmt(ant)}`;
    if (conf) return `<div class="ped-pay ok">${ICO.entregado}<span>${que} confirmado</span>
        ${conf.comprobante_url ? `<button type="button" class="link-btn" data-ver-comp="${esc(conf.comprobante_url)}">Ver comprobante</button>` : ""}</div>${ped.id_estatus !== 7 ? resto : ""}`;
    if (pend) return `<div class="ped-pay rev">${ICO.reloj}<span>${que}: comprobante en revisión</span>
        <button type="button" class="link-btn" data-ver-comp="${esc(pend.comprobante_url)}">Ver</button>
        <button type="button" class="link-btn" data-subir-comp="${ped.id_pedido}">Cambiar</button></div>${resto}`;
    return `<div class="ped-due">
        <div><span>${tipo === "anticipo" ? "Anticipo pendiente (50%)" : "Pago pendiente"}</span><b>${fmt(ant)}</b></div>
        <p>Transfiere y sube la captura para que empecemos a imprimir.</p>
      </div>
      <button type="button" class="btn btn-primary btn-block ped-upload" data-subir-comp="${ped.id_pedido}">${ICO.subir} Subir comprobante</button>${resto}`;
  }

  function tarjeta(ped) {
    const fecha = new Date(ped.fecha_pedido).toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" });
    const piezas = (ped.detalle_pedido || []).reduce((s, d) => s + d.cantidad, 0);
    const cls = ped.id_estatus === CANCELADO ? "cancel" : ped.id_estatus === 7 ? "done" : "";
    return `
      <article class="ped-card" data-order="${ped.id_pedido}">
        <div class="ped-head">
          <div>
            <b class="ped-id">Pedido #${ped.id_pedido}</b>
            <span class="ped-date">${fecha} · ${piezas} pz</span>
          </div>
          <span class="up-order-status ${cls}">${esc(etiqueta(ped))}</span>
        </div>
        ${lineaEstatus(ped)}
        <div class="ped-total"><span>Total</span><b>${fmt(parseFloat(ped.total))}</b></div>
        ${bloquePago(ped)}
        <a class="btn btn-wa-soft btn-block ped-wa" href="${waInfo(ped.id_pedido, `${etiqueta(ped)} · ${fmt(parseFloat(ped.total))}`)}" target="_blank" rel="noopener">${ICO.wa} Información por WhatsApp</a>
        <details class="ped-more">
          <summary>Ver detalle</summary>
          <div class="ped-items">
            ${(ped.detalle_pedido || []).map(d => {
              const p = App.byId(d.id_producto);
              return `<div class="up-detail-item"><span>${d.cantidad} × ${p
                  ? `<button type="button" class="ped-prod" data-ver-prod="${p.id}">${esc(p.nombre)}</button> <small class="ped-sku">${esc(App.skuOf(p))}</small>`
                  : "Producto #" + d.id_producto}</span><span>${fmt(parseFloat(d.subtotal))}</span></div>`;
            }).join("")}
          </div>
          ${ped.lugar_entrega ? `<p class="ped-note">📍 ${esc(ped.lugar_entrega)}</p>` : ""}
          ${ped.notas ? `<p class="ped-note">📝 ${esc(ped.notas)}</p>` : ""}
          <p class="ped-note">${ped.metodo_pago === "transferencia" ? "🏦 Transferencia bancaria" : "💵 Efectivo contra entrega"}</p>
        </details>
      </article>`;
  }

  /* Modal para subir comprobante (usa el modal de checkout) */
  function abrirSubida(idPedido, monto, alTerminar, esAnticipo) {
    const b = CONFIG.banco;
    $("#coInner").innerHTML = `
      <h2 id="coTitle">Subir comprobante</h2>
      <p class="co-sub">Pedido <b>#${idPedido}</b>${monto != null ? ` · ${esAnticipo ? "Anticipo" : "Monto"} a transferir <b>${fmt(monto)}</b>` : ""}</p>
      <div class="bank show" style="margin-top:12px">
        <div class="bank-row"><span>Banco</span><b>${esc(b.nombre)}</b></div>
        <div class="bank-row"><span>CLABE</span><b class="clabe">${esc(b.clabe)}</b></div>
        <div class="bank-row"><span>Titular</span><b>${esc(b.titular)}</b></div>
      </div>
      <form id="compForm" class="auth-form" novalidate>
        <label class="comp-drop" for="compFile">
          ${ICO.subir}
          <b id="compName">Toca para elegir la captura</b>
          <span>JPG, PNG o PDF · máx. ${MAX_MB} MB</span>
          <input id="compFile" type="file" accept="image/*,application/pdf" hidden>
        </label>
        <img id="compPreview" class="comp-preview" alt="Vista previa del comprobante" hidden>
        <div class="field">
          <label for="compRef">Referencia o folio (opcional)</label>
          <input id="compRef" type="text" maxlength="100" placeholder="Ej. 1234567">
        </div>
        <div class="auth-error" id="compError" role="alert"></div>
        <button class="btn btn-primary btn-block auth-submit" type="submit" id="compSubmit" disabled>Enviar comprobante</button>
      </form>`;

    let file = null;
    $("#compFile").addEventListener("change", e => {
      file = e.target.files[0] || null;
      $("#compName").textContent = file ? file.name : "Toca para elegir la captura";
      $("#compSubmit").disabled = !file;
      const prev = $("#compPreview");
      if (file && file.type.startsWith("image/")) { prev.src = URL.createObjectURL(file); prev.hidden = false; }
      else prev.hidden = true;
    });
    $("#compForm").addEventListener("submit", async e => {
      e.preventDefault();
      if (!file) return;
      const btn = $("#compSubmit"), err = $("#compError");
      err.textContent = "";
      btn.disabled = true; btn.textContent = "Subiendo…";
      try {
        await subirComprobante(idPedido, file, $("#compRef").value.trim());
        App.toast("✅ Comprobante enviado. Lo revisaremos pronto.");
        App.closeLayer($("#checkoutModal"));
        alTerminar?.();
      } catch (ex) {
        err.textContent = ex.message;
        btn.disabled = false; btn.textContent = "Enviar comprobante";
      }
    });

    const m = $("#checkoutModal");
    if (App.topLayer() !== m) App.openLayer(m);
  }

  return { waInfo, config, anticipoEstimado, tipoPago, crear, listar, subirComprobante, urlComprobante, abrirSubida, tarjeta, etiqueta, PASOS, ICO };
})();
