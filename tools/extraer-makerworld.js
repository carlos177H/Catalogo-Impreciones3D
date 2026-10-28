/* =========================================================
   EXTRACTOR DE MAKERWORLD → registro para js/data/productos.js
   ---------------------------------------------------------
   USO (un modelo):
     1. Abre la página del modelo en makerworld.com (en español: /es/models/...)
        Si eliges un perfil de impresión, queda en la URL (#profileId-...).
     2. Abre la consola: F12 → pestaña "Console".
     3. Pega TODO este archivo y presiona Enter.
     4. El registro queda copiado: pégalo dentro de window.PRODUCTOS = [ ... ]

   USO (varios modelos de golpe), después del paso 3:
     mwLote([
       "https://makerworld.com/es/models/2511143-decoration-set-cozy-home-q_craft#profileId-2761604",
       "https://makerworld.com/es/models/223303-jeep-kit-card#profileId-241285"
     ])

   Revisa siempre: id, categoria, precioBase y la licencia.
   ========================================================= */
(() => {
  // Misma fórmula que CONFIG.costos en js/config.js
  const COSTOS = { PLA: 0.40, PETG: 0.45, hora: 8, multicolor: 1.15, margen: 2.5, minimo: 45, redondeo: 5 };
  const LICENCIAS_VENTA_OK = ["BY", "BY-SA", "BY-ND", "CC0", "CC BY", "CC BY-SA", "CC BY-ND"];

  const CATEGORIA = (cats, tags) => {
    const t = (cats.join(" ") + " " + tags.join(" ")).toLowerCase();
    if (/pok[eé]|pikachu|eevee|charmander|gengar/.test(t)) return "Pokémon";
    if (/minecraft|creeper|enderman/.test(t)) return "Minecraft";
    if (/navidad|halloween|muertos|san valent|christmas|temporada|ofrenda/.test(t)) return "Temporada y Festividades";
    if (/l[aá]mpara|lamp|linterna|lantern|night light/.test(t)) return "Lámparas";
    if (/fidget|antiestr[eé]s|clicker|spinner/.test(t)) return "Antiestrés y Fidgets";
    if (/motor|pist[oó]n|turbo|buj[ií]a|placa de auto/.test(t)) return "Llaveros de Motor";
    if (/llavero|keychain|pin\b|medalla/.test(t)) return "Llaveros y Pins";
    if (/flexi|articulad|articulated/.test(t)) return "Figuras Flexibles";
    if (/soporte|stand|holder|teclado|keycap|ps5|xbox|control|celular|tel[eé]fono|aud[ií]fono|laptop/.test(t)) return "Soportes y Gaming";
    if (/maceta|planter|jard[ií]n|semillero|orqu[ií]dea|comedero para p[aá]jaros/.test(t)) return "Macetas y Jardín";
    if (/mascota|perro|gato|\bdog\b|\bcat\b|pecera/.test(t)) return "Mascotas";
    if (/cocina|kitchen|especias|utensilio|huevo|caf[eé]|t[eé]\b|cubiertos/.test(t)) return "Cocina";
    if (/negocio|tienda|exhibidor|display|qr|men[uú]|precio|letrero|mostrador/.test(t)) return "Negocios y Tiendas";
    if (/maqueta|escala|arquitect|engran|polea|arduino|protoboard|electr[oó]nic/.test(t)) return "Maquetas e Ingeniería";
    if (/organiza|caja|cable|portal[aá]piz|posavaso|cortador|cocina|almacen/.test(t)) return "Organizadores y Utilitarios";
    if (/beb[eé]|ni[ñn]o|kids|montessori|silbato|avi[oó]n|planeador|carrito/.test(t)) return "Juguetes para Niños";
    if (/ajedrez|dados|rompecabezas|puzzle|robot|catapulta|juego/.test(t)) return "Juguetes para Adolescentes";
    if (/escritorio|desk|calendario|newton/.test(t)) return "Para Jóvenes";
    return "Decoración y Hogar";
  };

  const strip = h => {
    const el = document.createElement("div");
    el.innerHTML = (h || "").replace(/<(br|\/p|\/li|\/h\d)[^>]*>/gi, "\n");
    return el.textContent.replace(/¡Dame un impulso!.*?(\n|$)/gi, "").replace(/\s*\n\s*/g, "\n").trim();
  };

  const precio = (g, h, colores, material) => {
    const cg = /PETG/i.test(material) ? COSTOS.PETG : COSTOS.PLA;
    const costo = g * cg * (colores > 1 ? COSTOS.multicolor : 1) + h * COSTOS.hora;
    return Math.max(COSTOS.minimo, Math.ceil(costo * COSTOS.margen / COSTOS.redondeo) * COSTOS.redondeo);
  };

  function aRegistro(d, profileId) {
    const inst = d.instances.find(i => i.profileId == profileId)
      || d.instances.find(i => i.id == d.defaultInstanceId) || d.instances[0];
    const desc = strip(d.summaryTranslated || d.summary);
    const primera = desc.split(/\n|(?<=\.)\s/)[0].slice(0, 110);
    const fil = inst.instanceFilaments || [];
    const material = [...new Set(fil.map(f => f.type))].join(" + ") || "PLA";
    const gramos = Math.round(inst.weight || fil.reduce((s, f) => s + +f.usedG, 0));
    const horas = Math.round((inst.prediction || 0) / 360) / 10;
    const colores = inst.materialColorCnt || fil.length || 1;
    const fname = u => u.split("/").pop().split("?")[0];
    const fotos = [];
    [...(d.designExtension?.design_pictures || []).map(p => p.url), ...(inst.pictures || []).map(p => p.url)]
      .forEach(u => { if (u && !fotos.some(f => fname(f) === fname(u))) fotos.push(u.split("?")[0]); });
    // Solo frases que hablan de medidas (alto, tamaño, mide...) con una unidad
    const dims = (desc.match(/[^.\n]*\d+(?:[.,]\d+)?\s*(?:mm|cm)\b[^.\n]*/gi) || [])
      .filter(s => /alt[oa]|altura|tama[ñn]o|mide|medida|largo|ancho|di[aá]metro|dimensi|size|height/i.test(s))
      .map(s => s.trim().slice(0, 60)).slice(0, 2).join(" · ") || null;
    const cats = (d.categories || []).map(c => c.name), tags = d.tagsTranslated || d.tags || [];
    const lic = d.license || "";

    return {
      id: 0, // ← CAMBIA por un id único
      nombre: d.titleTranslated || d.title,
      categoria: CATEGORIA(cats, tags),
      descripcionCorta: primera,
      descripcionDetallada: desc.slice(0, 700),
      imagenes: fotos.slice(0, 5),
      precioBase: precio(gramos, horas, colores, material),
      escalaDescuento: null,
      tamano: dims,
      impresion: { material, gramos, horas, colores, multicolor: !!inst.needAms },
      etiquetas: [...new Set(tags.map(t => t.toLowerCase()))].slice(0, 8),
      fuente: {
        plataforma: "MakerWorld",
        url: `https://makerworld.com/es/models/${d.id}#profileId-${inst.profileId}`,
        autor: d.designCreator?.name || "",
        licencia: lic,
        permiteVenta: LICENCIAS_VENTA_OK.includes(lic.replace(/^CC\s*/, "").trim()) || LICENCIAS_VENTA_OK.includes(lic),
        notaLicencia: (d.licenseDescriptionInfo?.content || "").slice(0, 160)
      },
      activo: true
    };
  }

  const texto = r => JSON.stringify(r, null, 2).replace(/"(\w+)":/g, "$1:") + ",";

  async function copiar(t) {
    try { await navigator.clipboard.writeText(t); console.log("%c✔ Copiado al portapapeles", "color:#0f766e;font-weight:bold"); }
    catch (e) { console.log("No se pudo copiar automáticamente; copia el texto de abajo:"); }
    console.log(t);
  }

  async function leer(url) {
    const u = new URL(url, location.origin);
    const html = await fetch(u.pathname.replace(/^\/(?!es\/)(\w\w\/)?/, "/es/")).then(r => r.text());
    const m = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
    const d = JSON.parse(m[1]).props.pageProps.design;
    return aRegistro(d, (u.hash.match(/profileId-(\d+)/) || [])[1]);
  }

  window.mwLote = async urls => {
    const out = [];
    for (const url of urls) {
      try { out.push(await leer(url)); console.log("✔", url); }
      catch (e) { console.warn("✘ No se pudo leer", url, e); }
      await new Promise(r => setTimeout(r, 400));
    }
    await copiar(out.map(texto).join("\n"));
    return out;
  };

  // Ejecutar sobre la página actual
  if (/\/models\/\d+/.test(location.pathname)) {
    const nd = document.getElementById("__NEXT_DATA__");
    const d = nd && JSON.parse(nd.textContent).props.pageProps.design;
    if (d) copiar(texto(aRegistro(d, (location.hash.match(/profileId-(\d+)/) || [])[1])));
  } else {
    console.log("Abre la página de un modelo de MakerWorld, o usa mwLote([...urls]).");
  }
})();
