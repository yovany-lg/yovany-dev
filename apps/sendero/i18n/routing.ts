import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Sendero ships bilingual: Spanish (primary) and English.
  locales: ["es", "en"],
  defaultLocale: "es",
  // Default locale (es) serves clean URLs (/), English lives under /en.
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
