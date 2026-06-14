import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "../../components/Reveal";
import { publishedArticulos } from "../../../content/sistema-de-clientes/blog";
import { publicFileExists } from "../_lib/publicFile";

const TITLE = "Blog — Más clientes por WhatsApp para tu negocio";
const DESCRIPTION =
  "Ideas prácticas para dueños de negocios de servicios en Guadalajara: cómo dejar de perder clientes en WhatsApp, cuánto cuesta automatizarlo y qué funciona de verdad.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/sistema-de-clientes/blog" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/sistema-de-clientes/blog",
    locale: "es_MX",
  },
};

const fecha = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogIndex() {
  const articulos = publishedArticulos();

  return (
    <main id="main">
      <section className="section sc-hero">
        <div className="container-x">
          <p className="kicker">Blog</p>
          <h1 className="sc-hero-h1">
            Cómo dejar de perder clientes por WhatsApp.
          </h1>
          <p className="sc-hero-sub">
            Ideas directas para dueños de negocios de servicios. Sin tecnicismos.
          </p>
        </div>
      </section>

      <section className="section rule-top">
        <div className="container-x">
          <div className="sc-blog-grid">
            {articulos.map((a, i) => {
              const showHero = a.hero && publicFileExists(a.hero.src);
              return (
                <Reveal as="article" className="sc-blog-card card card-hover" key={a.slug} delay={i * 70}>
                  <Link href={`/sistema-de-clientes/blog/${a.slug}`} className="sc-blog-link">
                    <div className="sc-blog-thumb">
                      {showHero ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={a.hero!.src} alt={a.hero!.alt} loading="lazy" />
                      ) : (
                        <div className="sc-blog-thumb-ph gradient-soft" aria-hidden />
                      )}
                    </div>
                    <div className="sc-blog-card-body">
                      <p className="sc-blog-meta">
                        {fecha(a.date)} · {a.readingMinutes} min
                      </p>
                      <h2 className="sc-blog-title">{a.title}</h2>
                      <p className="sc-blog-excerpt">{a.description}</p>
                      <span className="sc-blog-more">Leer más →</span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
