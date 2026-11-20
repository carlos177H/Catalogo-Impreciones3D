/* =========================================================
   CALCULADORA DE PRECIOS (v3) — misma fórmula que CONFIG.precios
   ---------------------------------------------------------
   costo de impresión = material + máquina
     material = gramos/1000 × $kg × (1 + merma) × (1 + merma multicolor si aplica)
     máquina  = horas × (luz + desgaste)
   extras (se cobran a costo, sin margen):
     empaque     → solo llaveros y clickers
     mano de obra → solo productos que se arman o llevan varias piezas
   precio = redondear hacia arriba a $5 de:
     costo total + máx(ganancia mínima, costo de impresión × margen)
   Así ninguna pieza deja menos de $10 de ganancia.
   ========================================================= */
const P = {
  kgPLA: 300, kgPETG: 450,
  merma: 0.05, mermaMulticolor: 0.15,
  luzHora: 0.448, desgasteHora: 3.33,
  empaque: 5,          // bolsita / tarjeta para llaveros y clickers
  manoObra: 4,         // ~5 min de armado
  margen: 2,           // 200 % sobre el costo de impresión (opción B, 20-nov-2026)
  gananciaMinima: 10,  // nunca menos de $10 de ganancia por pieza
  redondeo: 5
};

const norm = s => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const RE_EMPAQUE = /llavero|clicker|keychain/;
const RE_ARMADO = /armable|para armar|se arma|ensambl|montaje|tornill|pegamento|se pega|\bimanes?\b|varias piezas|\b\d{2,} piezas|piezas que se unen|partes que se unen/;
const RE_SIN_ARMADO = /en una sola pieza|en una pieza|sin armar|sin ensambl|print in place|impres[oa] ya armad/;

function llevaEmpaque(p) { return RE_EMPAQUE.test(norm(p.nombre + " " + p.categoria)); }
function llevaArmado(p) {
  const t = norm(p.nombre + " " + (p.descripcion_detallada || p.descripcionDetallada || ""));
  return RE_ARMADO.test(t) && !RE_SIN_ARMADO.test(t);
}

function calcular({ gramos, horas, multicolor, material = "PLA", empaque, armado }) {
  const kg = /petg/i.test(material) ? P.kgPETG : P.kgPLA;
  const mat = (gramos || 0) / 1000 * kg * (1 + P.merma) * (multicolor ? 1 + P.mermaMulticolor : 1);
  const maq = (horas || 0) * (P.luzHora + P.desgasteHora);
  const impresion = mat + maq;
  const extras = (empaque ? P.empaque : 0) + (armado ? P.manoObra : 0);
  const costo = impresion + extras;
  const ganancia = Math.max(P.gananciaMinima, impresion * P.margen);
  const precio = Math.ceil((costo + ganancia) / P.redondeo) * P.redondeo;
  return { impresion: +impresion.toFixed(2), extras, costo: +costo.toFixed(2), precio, ganancia: +(precio - costo).toFixed(2) };
}

module.exports = { P, calcular, llevaEmpaque, llevaArmado };
