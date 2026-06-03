import { NextResponse } from "next/server";
import { z } from "zod";
import { LEAD_MAGNET, SITE } from "../../../lib/site";

export const runtime = "nodejs";

const SubscribeSchema = z.object({
  email: z.string().trim().toLowerCase().email("Please enter a valid email."),
  source: z.string().max(64).optional(),
  // Honeypot: real users never fill this (it's visually hidden).
  company: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = SubscribeSchema.safeParse(body);

  // A filled honeypot (or any spam shape) — respond like success, do nothing.
  if (!parsed.success) {
    const honeypotTripped =
      typeof (body as { company?: unknown })?.company === "string" &&
      (body as { company: string }).company.length > 0;
    if (honeypotTripped) {
      return NextResponse.json({ ok: true, downloadUrl: LEAD_MAGNET.pdfPath });
    }
    const message = parsed.error.issues[0]?.message ?? "Please check your email.";
    return NextResponse.json({ ok: false, error: message }, { status: 422 });
  }

  const { email, source } = parsed.data;

  try {
    await Promise.all([deliverConfirmation(email), addToNewsletter(email, source)]);
  } catch (err) {
    console.error("[subscribe] delivery failed:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send the guide right now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, downloadUrl: LEAD_MAGNET.pdfPath });
}

/** Transactional confirmation + PDF link via Resend. No key → no-op (dev). */
async function deliverConfirmation(email: string): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM; // e.g. "Yovany Luis <hello@yovany.dev>"
  if (!key || !from) {
    console.info(`[subscribe] (no Resend config) would email ${email}`);
    return;
  }

  const { Resend } = await import("resend");
  const resend = new Resend(key);
  const url = LEAD_MAGNET.pdfPath.startsWith("http")
    ? LEAD_MAGNET.pdfPath
    : `${SITE.url}${LEAD_MAGNET.pdfPath}`;

  const { error } = await resend.emails.send({
    from,
    to: email,
    subject: "Your guide: 5 Reasons AI Features Fail in Production",
    html: `
      <div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:520px;margin:0 auto;color:#1a1a1a;line-height:1.6">
        <h1 style="font-size:20px;margin:0 0 16px">Here's your guide 👇</h1>
        <p style="margin:0 0 20px">Thanks for grabbing <strong>${LEAD_MAGNET.title}</strong>. You can read it here:</p>
        <p style="margin:0 0 28px">
          <a href="${url}" style="background:#c8743c;color:#140c06;text-decoration:none;padding:12px 20px;border-radius:999px;font-weight:600;display:inline-block">Read the guide →</a>
        </p>
        <p style="margin:0 0 8px">If you'd rather just talk it through, you can book a free 20-minute fit call:</p>
        <p style="margin:0 0 28px"><a href="${SITE.url}/call" style="color:#c8743c">${SITE.url}/call</a></p>
        <p style="margin:0;color:#777;font-size:13px">— Yovany Luis · AI Product Engineer</p>
      </div>
    `,
  });

  if (error) throw error;
}

/**
 * Newsletter provider hook. Tagging here is what lets a 5-day micro-course
 * drip be switched on later with zero rebuild. No key → no-op.
 * Supports ConvertKit (Kit) out of the box; swap for Buttondown if preferred.
 */
async function addToNewsletter(email: string, source?: string): Promise<void> {
  const formId = process.env.CONVERTKIT_FORM_ID;
  const apiKey = process.env.CONVERTKIT_API_KEY;
  if (!formId || !apiKey) {
    console.info(`[subscribe] (no newsletter config) would tag ${email} (${source ?? "n/a"})`);
    return;
  }

  const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: apiKey,
      email,
      tags: ["lead-magnet", source].filter(Boolean),
    }),
  });

  if (!res.ok) {
    throw new Error(`ConvertKit subscribe failed: ${res.status}`);
  }
}
