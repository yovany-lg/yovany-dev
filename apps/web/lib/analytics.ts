/**
 * Thin, provider-agnostic event helper. Safe to call anywhere — if PostHog
 * isn't configured (no key) it silently no-ops, so analytics never blocks UX.
 */
export type AnalyticsEvent =
  | "cta_book_call"
  | "lead_captured"
  | "lead_submit_error"
  // Sistema de Clientes funnel — every event carries a `vertical` prop.
  | "sc_whatsapp_click"
  | "sc_cal_booking_click"
  | "sc_calculator_used"
  | "sc_faq_open"
  | "sc_lead_submit"
  | "sc_lead_error";

type Props = Record<string, string | number | boolean | undefined>;

type PostHog = {
  capture?: (e: string, p?: Props) => void;
  identify?: (id: string, props?: Props) => void;
};

function ph(): PostHog | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { posthog?: PostHog }).posthog;
}

export function track(event: AnalyticsEvent, props?: Props): void {
  ph()?.capture?.(event, props);
}

/**
 * Capture a lead's email in PostHog: identify the person by email so the
 * address is stored as a person property, and tag the source. Safe no-op
 * when PostHog isn't configured.
 */
export function identifyLead(email: string, props?: Props): void {
  ph()?.identify?.(email, { email, ...props });
}
