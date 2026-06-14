import { NextResponse } from "next/server";
import { z } from "zod";
import { SITE } from "../../../lib/site";

export const runtime = "nodejs";

/**
 * Fallback lead capture for the Sistema de Clientes funnel (nombre, giro,
 * WhatsApp). Kept separate from /api/subscribe: this funnel emails Yovany and
 * never touches the newsletter. Same house style — missing Resend config is a
 * graceful no-op (logs, returns ok) so dev/previews never error.
 */

// Mexican mobile: 10 national digits, optionally +52 / 52 / 521 prefixed.
const phone = z
  .string()
  .trim()
  .transform((s) => s.replace(/[^\d]/g, ""))
  .refine(
    (d) => {
      const local = d.replace(/^52(1)?/, "");
      return local.length === 10;
    },
    { message: "Escribe un WhatsApp válido de 10 dígitos." },
  );

const LeadSchema = z.object({
  nombre: z.string().trim().min(2, "Escribe tu nombre.").max(80),
  giro: z.string().trim().min(2, "Dinos a qué se dedica tu negocio.").max(120),
  whatsapp: phone,
  vertical: z.string().max(64).optional(),
  // Campaign source (utm_source / ref) — which Facebook group, etc.
  source: z.string().max(64).optional(),
  // Honeypot: real users never fill this (visually hidden).
  company: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 });
  }

  const parsed = LeadSchema.safeParse(body);

  if (!parsed.success) {
    // Filled honeypot → fake success, do nothing.
    const honeypotTripped =
      typeof (body as { company?: unknown })?.company === "string" &&
      (body as { company: string }).company.length > 0;
    if (honeypotTripped) {
      return NextResponse.json({ ok: true });
    }
    const message =
      parsed.error.issues[0]?.message ?? "Revisa tus datos e inténtalo de nuevo.";
    return NextResponse.json({ ok: false, error: message }, { status: 422 });
  }

  const { nombre, giro, whatsapp, vertical } = parsed.data;

  try {
    await notifyOwner({ nombre, giro, whatsapp, vertical });
  } catch (err) {
    console.error("[sistema-de-clientes] notify failed:", err);
    return NextResponse.json(
      { ok: false, error: "No pudimos enviar tus datos. Inténtalo de nuevo." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

/** Email the new lead to Yovany via Resend. No key → no-op (dev/preview). */
async function notifyOwner(lead: {
  nombre: string;
  giro: string;
  whatsapp: string;
  vertical?: string;
}): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM; // e.g. "Yovany Luis <hello@yovany.dev>"
  if (!key || !from) {
    console.info(
      `[sistema-de-clientes] (no Resend config) new lead: ${JSON.stringify(lead)}`,
    );
    return;
  }

  const { Resend } = await import("resend");
  const resend = new Resend(key);
  const origen = lead.vertical && lead.vertical !== "general" ? lead.vertical : "hub";
  const wa = lead.whatsapp.replace(/^52(1)?/, "");

  const { error } = await resend.emails.send({
    from,
    to: SITE.email,
    replyTo: SITE.email,
    subject: `Nuevo lead SC — ${lead.giro} (${origen})`,
    html: `
      <div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:520px;margin:0 auto;color:#1a1a1a;line-height:1.6">
        <h1 style="font-size:20px;margin:0 0 16px">Nuevo lead — Sistema de Clientes</h1>
        <p style="margin:0 0 6px"><strong>Nombre:</strong> ${lead.nombre}</p>
        <p style="margin:0 0 6px"><strong>Giro:</strong> ${lead.giro}</p>
        <p style="margin:0 0 6px"><strong>WhatsApp:</strong>
          <a href="https://wa.me/52${wa}">+52 ${wa}</a>
        </p>
        <p style="margin:0 0 6px"><strong>Origen:</strong> ${origen}</p>
      </div>
    `,
  });

  if (error) throw error;
}
