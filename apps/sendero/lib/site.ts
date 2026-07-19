import { routing } from "@/i18n/routing";

/**
 * Central site configuration. Values that vary per deployment come from env
 * vars (all optional so the site builds and renders without them); everything
 * has a sensible placeholder fallback.
 */
export const siteConfig = {
  name: "Sendero",
  // Registered legal name behind the Sendero brand. Shown in the footer so
  // Meta / WhatsApp business verification can match the domain to the business.
  legalName: "José Yovany Luis García",
  domain: "sendero.pro",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sendero.pro",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hola@sendero.pro",
  // Cal.com booking slug (the path after cal.com/), e.g. "yovany/30min".
  // Passed straight to the @calcom/embed-react <Cal calLink> prop.
  calLink: process.env.NEXT_PUBLIC_CALCOM_LINK ?? "yovany/30min",
  // WhatsApp number in international format, digits only (no + or spaces).
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "10000000000",
  social: {
    github: "https://github.com/sendero",
    linkedin: "https://www.linkedin.com/company/sendero",
    x: "https://x.com/sendero",
  },
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
} as const;

/** Pre-filled WhatsApp click-to-chat link. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
