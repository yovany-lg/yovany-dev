import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type PageKey = "services" | "work" | "about" | "contact";

/** Builds localized <title>/<description>/OG metadata for an inner page. */
export async function pageMetadata(
  locale: string,
  key: PageKey,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `metadata.${key}` });
  const title = t("title");
  const description = t("description");
  const path = locale === "es" ? `/${key}` : `/en/${key}`;

  return {
    title,
    description,
    openGraph: { title, description, url: path },
    alternates: {
      canonical: path,
      languages: { es: `/${key}`, en: `/en/${key}` },
    },
  };
}
