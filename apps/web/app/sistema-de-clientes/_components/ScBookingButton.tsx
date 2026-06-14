"use client";

import { track } from "../../../lib/analytics";
import { SC, SC_BOOKING_CONFIGURED, SITE } from "../../../lib/site";
import { useCampaign } from "../_lib/campaign";

/**
 * Secondary CTA: book the 15-min "Diagnóstico" call. Links to the Cal.com
 * event when configured, otherwise falls back to email. Fires
 * `sc_cal_booking_click` with the vertical.
 */
export function ScBookingButton({
  vertical,
  label = "Agenda una llamada de 15 min",
  className = "",
}: {
  vertical: string;
  label?: string;
  className?: string;
}) {
  const source = useCampaign();
  const href = SC_BOOKING_CONFIGURED
    ? SC.bookingUrl
    : `mailto:${SITE.email}?subject=${encodeURIComponent(
        "Diagnóstico Sistema de Clientes (15 min)",
      )}&body=${encodeURIComponent(
        "Hola Yovany, me gustaría agendar una llamada de 15 minutos para platicar del Sistema de Clientes para mi negocio.",
      )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("sc_cal_booking_click", { vertical, source })}
      className={`btn btn-ghost ${className}`}
      data-cta="sc-booking"
    >
      {label}
    </a>
  );
}
