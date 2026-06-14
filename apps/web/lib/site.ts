/**
 * Single source of truth for environment-driven config and identity.
 * Booking + provider keys come from env so nothing sensitive is hardcoded.
 */

export const SITE = {
  url: "https://www.yovany.dev",
  name: "Yovany Luis",
  role: "AI Product Engineer & Independent Consultant",
  location: "Remote — Jalisco, México",
  email: "yovany.lg@gmail.com",
  title: "Yovany Luis — AI Product Engineer | Ship Production-Grade AI Features",
  description:
    "Senior engineer helping SaaS & startups ship reliable, production-grade AI features and automations. 8+ years, ex-Immunefi & Thrive Market. Book a free fit call.",
  ogImage: "/og.png",
  // Public résumé — stable path (no year) so the URL never changes on update.
  resume: "/yovany-luis-cv.pdf",
} as const;

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/yovanyluis",
  github: "https://github.com/yovanylg",
  x: "https://x.com/yovanylg",
} as const;

/**
 * Primary conversion target. Cal.com or Calendly link, set per-environment.
 * The booking page (`/call`) embeds this; CTA buttons route to `/call`.
 */
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://cal.com/yovany/fit-call";

/**
 * True only when a real booking URL has been configured. Until then the
 * /call page shows an email fallback instead of embedding the placeholder
 * (which 404s), so the page is never broken.
 */
export const BOOKING_CONFIGURED = Boolean(process.env.NEXT_PUBLIC_BOOKING_URL);

/**
 * Hero portrait. Drop a photo in /public (portrait orientation, ~4:5,
 * ideally ≥ 1000×1250, .webp or .jpg) and set this to its path
 * (e.g. "/portrait.jpg"). While null, a designed monogram placeholder shows.
 */
export const PORTRAIT_SRC: string | null = "/profile.png";

/** Lead-magnet PDF delivered after email confirmation. */
export const LEAD_MAGNET = {
  title: "5 Reasons AI Features Fail in Production (and how to fix them)",
  pdfPath: process.env.NEXT_PUBLIC_LEAD_MAGNET_URL ?? "/guide.pdf",
} as const;

/**
 * "Agente de WhatsApp con IA" — Spanish lead-gen subtree for local Mexican
 * service businesses (/sistema-de-clientes/*). The WhatsApp AI agent is the
 * core product; a client website is a paid add-on. Kept isolated from the
 * English AI site. Same graceful-degradation house style: missing env → CTAs
 * fall back to email instead of pointing at a broken link.
 */
export const SC = {
  /** Yovany's sales WhatsApp, digits only with country code (e.g. "5213312345678"). */
  waNumber: (process.env.NEXT_PUBLIC_SC_WHATSAPP ?? "").replace(/[^\d]/g, ""),
  /** Cal.com event type for the 15-min "Diagnóstico" booking. */
  bookingUrl: process.env.NEXT_PUBLIC_SC_BOOKING_URL ?? "",
  /** Municipios served — drives JSON-LD areaServed + copy. */
  areaServed: ["Guadalajara", "Zapopan", "Tlaquepaque", "Tonalá", "Tlajomulco"],
  /** Agent price anchors (MXN) for the Precio + ROI sections. */
  setupDesde: 15000,
  mensualidadDesde: 3000,
  /** Optional client-website add-on (MXN). */
  sitioAddon: { setup: 4000, mensual: 400 },
  /** Demo screen-recording for /sistema-de-clientes/demo. Empty → placeholder. */
  demoVideo: process.env.NEXT_PUBLIC_SC_DEMO_VIDEO ?? "",
} as const;

export const SC_DEMO_CONFIGURED = SC.demoVideo.length > 0;

export const SC_WHATSAPP_CONFIGURED = SC.waNumber.length > 0;
export const SC_BOOKING_CONFIGURED = SC.bookingUrl.length > 0;

/**
 * Build a wa.me deep link with a pre-filled message. Returns null when no
 * WhatsApp number is configured so callers can render an email fallback.
 */
export function waLink(message: string): string | null {
  if (!SC_WHATSAPP_CONFIGURED) return null;
  return `https://wa.me/${SC.waNumber}?text=${encodeURIComponent(message)}`;
}
