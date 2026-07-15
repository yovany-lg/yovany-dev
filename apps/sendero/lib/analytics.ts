/**
 * Thin, provider-agnostic event helper for Sendero. Mirrors the yovany.dev
 * (apps/web) analytics module: PostHog is loaded client-side by the
 * AnalyticsProvider only when NEXT_PUBLIC_POSTHOG_KEY is set, and it exposes
 * `window.posthog`. Every helper here is a safe no-op until then, so dev and
 * unconfigured previews never block on analytics.
 */

/** Where a CTA lives, so we can compare conversion by placement. */
export type CtaLocation =
  | "header"
  | "hero"
  | "final_cta"
  | "contact_page"
  | "whatsapp_fab"
  | "services_page"
  | "work_page"
  | "footer";

type Props = Record<string, string | number | boolean | undefined>;

type EventMap = {
  cta_book_call: { location: CtaLocation; locale: string };
  cta_whatsapp: { location: CtaLocation; locale: string };
  locale_switched: { from: string; to: string };
  service_viewed: { service: string; locale: string };
  contact_submitted: { service?: string; locale: string };
};

type PostHog = {
  capture?: (event: string, props?: Props) => void;
  identify?: (id: string, props?: Props) => void;
};

function ph(): PostHog | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { posthog?: PostHog }).posthog;
}

export function track<E extends keyof EventMap>(event: E, props: EventMap[E]) {
  ph()?.capture?.(event, props as Props);
}

/**
 * Tie a submitted lead's email to the PostHog person so the address is stored
 * as a person property. Safe no-op when PostHog isn't configured.
 */
export function identifyLead(email: string, props?: Props) {
  ph()?.identify?.(email, { email, ...props });
}
