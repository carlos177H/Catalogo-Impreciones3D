/* =========================================================
   CARRITO: estado, persistencia local + Supabase
   ========================================================= */
App.cart = {
  items: App.store.get("3dps_cart", []),   // [{ id, qty }]
  _syncing: false,
  _pending: false,
  _userId: null,

  init() {
    this.items = this.items.filter(i => App.byId(i.id));
    // Al iniciar sesión: combinar con el carrito guardado. Al cerrarla: limpiar.
    App.auth?.onAuthChange((user, perfil) => {
      const id = perfil?.id_usuario || null;
      if (id && id !== this._userId) { this._userId = id; this.loadFromDB(); }
      else if (!user && this._userId) {
        this._userId = null;
        this.items = [];
        App.store.set("3dps_cart", this.items);
        App.drawer?.render();
      }
    });
    const perfil = App.auth?.getPerfil();
    if (perfil) { this._userId = perfil.id_usuario; this.loadFromDB(); }
  },

  save() {
    App.store.set("3dps_cart", this.items);
    // Sincronizar con Supabase si hay sesión
    if (App.auth?.isLoggedIn()) this.syncToDB();
  },

  count() { return this.items.reduce((s, i) => s + i.qty, 0); },

  add(id, qty) {
    const item = this.items.find(i => i.id === id);
    if (item) item.qty = App.clampQty(item.qty + qty);
    else this.items.push({ id, qty: App.clampQty(qty) });
    this.save();
  },
  setQty(id, qty) {
    const item = this.items.find(i => i.id === id);
    if (item) { item.qty = App.clampQty(qty); this.save(); }
  },
  remove(id) { this.items = this.items.filter(i => i.id !== id); this.save(); },
  clear() { this.items = []; this.save(); },

  // Líneas con precio calculado según la escala de descuento
  lines() {
    return this.items.map(i => {
      const p = App.byId(i.id);
      const tier = App.tierFor(p, i.qty);
      const unit = App.unitPrice(p, i.qty);
      return { p, qty: i.qty, tier, unit, subtotal: App.round2(unit * i.qty) };
    });
  },
  totals() {
    let total = 0, base = 0, pcs = 0;
    this.lines().forEach(l => { total += l.subtotal; base += l.p.precioBase * l.qty; pcs += l.qty; });
    return { total: App.round2(total), base: App.round2(base), ahorro: App.round2(base - total), pcs };
  },

  /* ---------- Supabase sync ---------- */
  async loadFromDB() {
    const sb = window.supabaseClient;
    const perfil = App.auth?.getPerfil();
    if (!sb || !perfil) return;

    try {
      const { data, error } = await sb
        .from("carrito")
        .select("id_producto, cantidad")
        .eq("id_usuario", perfil.id_usuario);

      if (error) throw error;
      // Combinar: carrito de la cuenta + lo que agregó como invitado.
      // Si un producto está en ambos, se queda la cantidad mayor.
      const merged = new Map();
      (data || []).forEach(r => { if (App.byId(r.id_producto)) merged.set(r.id_producto, r.cantidad); });
      const antes = merged.size;
      let cambio = false;
      this.items.forEach(i => {
        const q = merged.get(i.id) || 0;
        if (i.qty > q) { merged.set(i.id, i.qty); cambio = true; }
      });
      this.items = [...merged].map(([id, qty]) => ({ id, qty: App.clampQty(qty) }));
      App.store.set("3dps_cart", this.items);
      if (cambio || merged.size !== antes) this.syncToDB();
      App.drawer?.render();
    } catch (e) {
      console.error("[Carrito] Error cargando de BD:", e);
    }
  },

  async syncToDB() {
    // Si ya hay un guardado en curso, marcar pendiente y repetir al terminar
    if (this._syncing) { this._pending = true; return; }
    const sb = window.supabaseClient;
    const perfil = App.auth?.getPerfil();
    if (!sb || !perfil) return;

    this._syncing = true;
    do {
      this._pending = false;
      try {
        const { error: errDel } = await sb.from("carrito").delete().eq("id_usuario", perfil.id_usuario);
        if (errDel) throw errDel;
        if (this.items.length > 0) {
          const rows = this.items.map(i => ({
            id_usuario: perfil.id_usuario,
            id_producto: i.id,
            cantidad: i.qty
          }));
          const { error: errIns } = await sb.from("carrito").insert(rows);
          if (errIns) throw errIns;
        }
      } catch (e) {
        console.error("[Carrito] Error sincronizando:", e);
      }
    } while (this._pending);
    this._syncing = false;
  }
};
