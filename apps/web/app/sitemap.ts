import type { MetadataRoute } from "next";
import { SITE } from "../lib/site";
import { publishedVerticales } from "../content/sistema-de-clientes/verticales";
import { publishedArticulos } from "../content/sistema-de-clientes/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  // Agente de WhatsApp subtree — included for search, but intentionally not
  // linked from the main navigation (distinct, Spanish-speaking audience).
  const sistema: MetadataRoute.Sitemap = [
    {
      url: `${SITE.url}/sistema-de-clientes`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/sistema-de-clientes/demo`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/sistema-de-clientes/blog`,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...publishedVerticales().map((v) => ({
      url: `${SITE.url}/sistema-de-clientes/${v.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...publishedArticulos().map((a) => ({
      url: `${SITE.url}/sistema-de-clientes/blog/${a.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [
    { url: SITE.url, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/call`, changeFrequency: "monthly", priority: 0.8 },
    ...sistema,
  ];
}
