"use client";

import { useTranslations, useLocale } from "next-intl";
import { whatsappLink } from "@/lib/site";
import { track } from "@/lib/analytics";

/** WhatsApp logo (brand-agnostic glyph). */
function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.44 9.44 0 0 1-4.81-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.45 9.45 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.47-9.47 9.47zM20.52 3.47A11.34 11.34 0 0 0 12.05 0C5.7 0 .53 5.17.52 11.52c0 2.03.53 4 1.54 5.75L.43 24l6.9-1.81a11.5 11.5 0 0 0 5.5 1.4h.01c6.34 0 11.51-5.17 11.52-11.52a11.45 11.45 0 0 0-3.84-8.6z" />
    </svg>
  );
}

export function WhatsAppFab() {
  const t = useTranslations("common");
  const locale = useLocale();

  return (
    <a
      href={whatsappLink(t("whatsappPrefill"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp")}
      onClick={() => track("cta_whatsapp", { location: "whatsapp_fab", locale })}
      className="fixed bottom-5 right-5 z-40 flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 ring-1 ring-white/10 transition-transform hover:scale-105 active:scale-95 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 motion-safe:animate-ping" />
      <span className="relative">
        <WhatsAppGlyph />
      </span>
    </a>
  );
}
