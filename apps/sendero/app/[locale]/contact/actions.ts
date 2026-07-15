"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { siteConfig } from "@/lib/site";

export type ContactResult = { ok: boolean; error?: "invalid" | "send" };

export async function submitContact(input: unknown): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: "invalid" };

  const { name, email, company, service, message } = parsed.data;
  const summary = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    service ? `Service: ${service}` : null,
    "",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.CONTACT_INBOX ?? siteConfig.email;

  // Graceful no-op when email isn't configured yet — keeps local/dev working.
  if (!apiKey) {
    console.log("[contact] RESEND_API_KEY not set — lead logged only:\n", summary);
    return { ok: true };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Sendero Web <onboarding@resend.dev>",
      to: inbox,
      replyTo: email,
      subject: `Nuevo contacto — ${name}`,
      text: summary,
    });
    if (error) {
      console.error("[contact] Resend error:", error);
      return { ok: false, error: "send" };
    }
    return { ok: true };
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return { ok: false, error: "send" };
  }
}
