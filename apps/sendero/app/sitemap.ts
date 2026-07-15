import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

const PAGES = ["", "/services", "/work", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const page of PAGES) {
    for (const locale of routing.locales) {
      const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
      entries.push({
        url: `${siteConfig.url}${prefix}${page}`,
        changeFrequency: "monthly",
        priority: page === "" ? 1 : 0.8,
      });
    }
  }
  return entries;
}
