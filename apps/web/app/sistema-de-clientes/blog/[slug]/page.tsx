import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArticulo,
  publishedArticulos,
} from "../../../../content/sistema-de-clientes/blog";
import { SITE } from "../../../../lib/site";
import { ArticleBody } from "../../_components/ArticleBody";
import { ScWhatsAppButton } from "../../_components/ScWhatsAppButton";
import { ScBookingButton } from "../../_components/ScBookingButton";
import { publicFileExists } from "../../_lib/publicFile";

type Params = { slug: string };

export function generateStaticParams() {
  return publishedArticulos().map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

const fecha = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const WA_MESSAGE =
  "Hola Yovany, leí tu artículo y quiero saber más del agente de WhatsApp para mi negocio.";

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticulo(slug);
  if (!a) return {};
  const path = `/sistema-de-clientes/blog/${a.slug}`;
  return {
    title: { absolute: a.title },
    description: a.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.description,
      url: path,
      locale: "es_MX",
      publishedTime: a.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const a = getArticulo(slug);
  if (!a) notFound();

  const path = `/sistema-de-clientes/blog/${a.slug}`;
  const showHero = a.hero && publicFileExists(a.hero.src);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    inLanguage: "es-MX",
    url: `${SITE.url}${path}`,
    author: { "@type": "Person", name: SITE.name, url: SITE.url },
    ...(showHero ? { image: `${SITE.url}${a.hero!.src}` } : {}),
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="section sc-article">
        <div className="container-x sc-article-wrap">
          <Link href="/sistema-de-clientes/blog" className="sc-article-back">
            <span aria-hidden>←</span> Blog
          </Link>
          <p className="sc-blog-meta">
            {fecha(a.date)} · {a.readingMinutes} min de lectura
          </p>
          <h1 className="sc-article-title">{a.title}</h1>

          <div className="sc-article-hero">
            {showHero ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={a.hero!.src} alt={a.hero!.alt} />
            ) : (
              <div className="sc-article-hero-ph gradient-soft" aria-hidden />
            )}
          </div>

          <ArticleBody body={a.body} />

          <aside className="sc-article-cta card">
            <h2 className="sc-article-cta-title">
              ¿Listo para que ningún cliente se quede sin respuesta?
            </h2>
            <p className="sc-article-cta-text">
              Te armo un agente de WhatsApp con el nombre y los servicios de tu
              negocio. Sin compromiso.
            </p>
            <div className="sc-hero-actions">
              <ScWhatsAppButton message={WA_MESSAGE} vertical={`blog:${a.slug}`} />
              <ScBookingButton vertical={`blog:${a.slug}`} />
            </div>
            <p className="sc-article-cta-link">
              O mira primero el{" "}
              <Link href="/sistema-de-clientes/demo" className="link-u">
                demo en vivo
              </Link>{" "}
              ·{" "}
              <Link href="/sistema-de-clientes/impermeabilizacion" className="link-u">
                impermeabilización y pintura
              </Link>
            </p>
          </aside>
        </div>
      </article>
    </main>
  );
}
