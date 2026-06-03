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
