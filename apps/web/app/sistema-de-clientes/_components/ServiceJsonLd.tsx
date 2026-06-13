import { SC, SITE } from "../../../lib/site";

/**
 * Schema.org `Service` graph for a Sistema de Clientes page, with local
 * `areaServed` (the GDL metro municipios) and Yovany as provider. Rendered as
 * an inline ld+json script — one per page (hub + each vertical).
 */
export function ServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: "Sistema de captación de clientes (sitio web + WhatsApp con IA + Google Maps)",
    url: `${SITE.url}${path}`,
    provider: {
      "@type": "Person",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: SC.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    inLanguage: "es-MX",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
