/* =========================================================
   CARRITO: estado, persistencia local + Supabase
   ========================================================= */
App.cart = {
  items: App.store.get("3dps_cart", []),   // [{ id, qty }]
  _syncing: false,

  init() {
    this.items = this.items.filter(i => App.byId(i.id));
    // Si el usuario está logueado, cargar su carrito de la BD
    if (App.auth?.isLoggedIn()) this.loadFromDB();
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
      if (data && data.length > 0) {
        // Merge: BD tiene prioridad, pero conservar items locales nuevos
        const dbMap = new Map(data.map(r => [r.id_producto, r.cantidad]));
        const localOnly = this.items.filter(i => !dbMap.has(i.id));
        const fromDB = data.map(r => ({ id: r.id_producto, qty: r.cantidad })).filter(i => App.byId(i.id));
        this.items = [...fromDB, ...localOnly];
        App.store.set("3dps_cart", this.items);
        // Subir los locales que no estaban en BD
        if (localOnly.length) this.syncToDB();
      } else if (this.items.length > 0) {
        // BD vacía pero hay local → subir
        this.syncToDB();
      }
      if (App.drawer?.render) App.drawer.render();
    } catch (e) {
      console.error("[Carrito] Error cargando de BD:", e);
    }
  },

  async syncToDB() {
    if (this._syncing) return;
    this._syncing = true;
    const sb = window.supabaseClient;
    const perfil = App.auth?.getPerfil();
    if (!sb || !perfil) { this._syncing = false; return; }

    try {
      // Borrar carrito actual en BD
      await sb.from("carrito").delete().eq("id_usuario", perfil.id_usuario);

      // Insertar items actuales
      if (this.items.length > 0) {
        const rows = this.items.map(i => ({
          id_usuario: perfil.id_usuario,
          id_producto: i.id,
          cantidad: i.qty
        }));
        await sb.from("carrito").insert(rows);
      }
    } catch (e) {
      console.error("[Carrito] Error sincronizando:", e);
    }
    this._syncing = false;
  }
};
