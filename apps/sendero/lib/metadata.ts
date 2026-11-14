import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type PageKey = "services" | "work" | "about" | "contact" | "privacy";

/** URL segment per page — usually the key, except where the slug is Spanish. */
const PATHS: Record<PageKey, string> = {
  services: "/services",
  work: "/work",
  about: "/about",
  contact: "/contact",
  privacy: "/privacidad",
};

/** Builds localized <title>/<description>/OG metadata for an inner page. */
export async function pageMetadata(
  locale: string,
  key: PageKey,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `metadata.${key}` });
  const title = t("title");
  const description = t("description");
  const segment = PATHS[key];
  const path = locale === "es" ? segment : `/en${segment}`;

  return {
    title,
    description,
    openGraph: { title, description, url: path },
    alternates: {
      canonical: path,
      languages: { es: segment, en: `/en${segment}` },
    },
  };
}
