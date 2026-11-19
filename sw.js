/* =========================================================
   SERVICE WORKER — notificaciones push de 3D JCGA
   Solo recibe y muestra avisos; no guarda nada en caché.
   ========================================================= */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

self.addEventListener("push", e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { body: e.data && e.data.text() }; }
  const base = self.registration.scope;
  e.waitUntil(self.registration.showNotification(d.title || "3D JCGA", {
    body: d.body || "",
    icon: base + "img/logo-icon.png",
    badge: base + "img/logo-icon.png",
    tag: d.tag || "aviso",
    renotify: true,
    data: { url: d.url || base + "index.html" }
  })));
});

self.addEventListener("notificationclick", e => {
  e.notification.close();
  const url = new URL(e.notification.data?.url || "index.html", self.registration.scope).href;
  e.waitUntil((async () => {
    const wins = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    const w = wins.find(c => c.url.split("#")[0] === url.split("#")[0]);
    if (w) { await w.focus(); w.navigate?.(url); return; }
    await self.clients.openWindow(url);
  })());
});
