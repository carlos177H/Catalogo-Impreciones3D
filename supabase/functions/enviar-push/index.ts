// =====================================================================
// Edge Function: enviar-push — Catálogo 3D JCGA
// ---------------------------------------------------------------------
// Envía notificaciones web push a los dispositivos suscritos.
// Quién puede llamarla:
//   • El panel de admin (sesión con rol admin + 2FA → es_admin() = true)
//       body: { titulo, texto, url?, id_usuario? }  (sin id_usuario = a todos)
//   • La propia BD (trigger), con el encabezado x-push-secret
//       body: { id_usuario, titulo, texto, url }
//
// Secrets necesarios (Edge Functions → Secrets):
//   VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, VAPID_SUBJECT, PUSH_INTERNAL_SECRET
// (SUPABASE_URL, SUPABASE_ANON_KEY y SUPABASE_SERVICE_ROLE_KEY ya vienen incluidos)
//
// Al crearla, DESACTIVA "Verify JWT": esta función valida por su cuenta.
// =====================================================================
import webpush from "npm:web-push@3.6.7";
import { createClient } from "npm:@supabase/supabase-js@2.49.1";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-push-secret",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { ...CORS, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "Método no permitido" }, 405);
  // Cualquier error inesperado regresa un mensaje claro (y con CORS) en lugar de tronar
  try { return await manejar(req); }
  catch (e) { return json({ error: "Error interno: " + ((e as Error)?.message ?? String(e)) }, 500); }
});

async function manejar(req: Request): Promise<Response> {
  const faltan = ["VAPID_PUBLIC_KEY", "VAPID_PRIVATE_KEY", "VAPID_SUBJECT", "PUSH_INTERNAL_SECRET"]
    .filter((k) => !Deno.env.get(k));
  if (faltan.length) {
    return json({ error: "Faltan secrets en Edge Functions → Secrets: " + faltan.join(", ") }, 500);
  }

  const URL_SB = Deno.env.get("SUPABASE_URL")!;
  const SERVICE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const ANON = Deno.env.get("SUPABASE_ANON_KEY")!;
  const SECRET = Deno.env.get("PUSH_INTERNAL_SECRET") ?? "";

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return json({ error: "JSON no válido" }, 400); }

  // ---------- ¿Quién llama? ----------
  const interno = req.headers.get("x-push-secret");
  if (interno) {
    if (!SECRET || interno !== SECRET) return json({ error: "No autorizado" }, 401);
    if (!body.id_usuario) return json({ error: "Falta id_usuario" }, 400);
  } else {
    const jwt = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");
    if (!jwt) return json({ error: "No autorizado" }, 401);
    const comoUsuario = createClient(URL_SB, ANON, { global: { headers: { Authorization: `Bearer ${jwt}` } } });
    const { data: esAdmin, error } = await comoUsuario.rpc("es_admin");
    if (error || esAdmin !== true) return json({ error: "Solo el administrador (con 2FA) puede enviar avisos" }, 403);
  }

  const titulo = String(body.titulo ?? "").slice(0, 80).trim();
  const texto = String(body.texto ?? "").slice(0, 300).trim();
  const url = String(body.url ?? "").slice(0, 300).trim();
  if (titulo.length < 3) return json({ error: "Falta el título" }, 400);

  // ---------- Destinatarios ----------
  const admin = createClient(URL_SB, SERVICE);
  let q = admin.from("push_suscripciones").select("id_suscripcion, endpoint, p256dh, auth");
  if (body.id_usuario) q = q.eq("id_usuario", Number(body.id_usuario));
  const { data: subs, error: errSubs } = await q;
  if (errSubs) return json({ error: errSubs.message }, 500);

  webpush.setVapidDetails(
    Deno.env.get("VAPID_SUBJECT") ?? "mailto:admin@example.com",
    Deno.env.get("VAPID_PUBLIC_KEY")!,
    Deno.env.get("VAPID_PRIVATE_KEY")!,
  );
  const payload = JSON.stringify({ title: titulo, body: texto, url, tag: body.id_usuario ? "pedido" : "aviso" });

  let enviados = 0;
  const caducadas: number[] = [];
  await Promise.all((subs ?? []).map(async (s) => {
    try {
      await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, payload, { TTL: 86400 });
      enviados++;
    } catch (e) {
      const code = (e as { statusCode?: number }).statusCode;
      if (code === 404 || code === 410) caducadas.push(s.id_suscripcion); // el usuario quitó el permiso
    }
  }));
  if (caducadas.length) await admin.from("push_suscripciones").delete().in("id_suscripcion", caducadas);

  return json({ total: subs?.length ?? 0, enviados, eliminadas: caducadas.length });
}
