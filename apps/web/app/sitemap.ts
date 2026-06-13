import type { MetadataRoute } from "next";
import { SITE } from "../lib/site";
import { publishedVerticales } from "../content/sistema-de-clientes/verticales";

export default function sitemap(): MetadataRoute.Sitemap {
  // Sistema de Clientes subtree — included for search, but intentionally not
  // linked from the main navigation (distinct, Spanish-speaking audience).
  const sistema: MetadataRoute.Sitemap = [
    {
      url: `${SITE.url}/sistema-de-clientes`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...publishedVerticales().map((v) => ({
      url: `${SITE.url}/sistema-de-clientes/${v.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return [
    { url: SITE.url, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/call`, changeFrequency: "monthly", priority: 0.8 },
    ...sistema,
  ];
}
