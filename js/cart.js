/* =========================================================
   CARRITO: estado, persistencia y totales
   ========================================================= */
App.cart = {
  items: App.store.get("3dps_cart", []),   // [{ id, qty }]

  init() { this.items = this.items.filter(i => App.byId(i.id)); },
  save() { App.store.set("3dps_cart", this.items); },
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
  }
};
