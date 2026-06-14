import type { Metadata } from "next";
import Link from "next/link";
import { SC, SITE } from "../../lib/site";
import { ScWhatsAppButton } from "./_components/ScWhatsAppButton";

const SC_DESCRIPTION =
  "Un agente de WhatsApp con inteligencia artificial que contesta por ti 24/7, califica al cliente, pide fotos y te pasa el prospecto listo para cotizar. Para negocios de servicios en Guadalajara. Sitio web opcional como add-on.";

const NAV_WA_MESSAGE =
  "Hola Yovany, quiero saber más del agente de WhatsApp para mi negocio.";

/**
 * Layout for the Spanish "Agente de WhatsApp con IA" subtree. Declares es-MX
 * on a wrapper (the root <html lang> stays "en" for the English AI site), sets
 * the Spanish OpenGraph locale, and owns the section's own header/footer —
 * this tree is intentionally NOT linked from the main yovany.dev navigation.
 */
export const metadata: Metadata = {
  title: {
    default: "Agente de WhatsApp con IA — Yovany Luis",
    template: "%s — Agente de WhatsApp con IA",
  },
  description: SC_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Agente de WhatsApp con IA — Yovany Luis",
    locale: "es_MX",
  },
};

export default function SistemaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div lang="es-MX" className="sc-root">
      <header className="sc-nav">
        <div className="container-x sc-nav-inner">
          <Link href="/sistema-de-clientes" className="sc-nav-brand">
            <span className="nav-dot" aria-hidden />
            Agente de WhatsApp
          </Link>
          <nav className="sc-nav-links" aria-label="Secundaria">
            <Link href="/sistema-de-clientes/demo">Demo</Link>
            <Link href="/sistema-de-clientes/blog">Blog</Link>
          </nav>
          <ScWhatsAppButton
            message={NAV_WA_MESSAGE}
            vertical="nav"
            label="WhatsApp"
            variant="ghost"
            size="sm"
            className="sc-nav-cta"
          />
        </div>
      </header>

      {children}

      <footer className="sc-footer">
        <div className="container-x sc-footer-inner">
          <div>
            <p className="sc-footer-name">Yovany Luis</p>
            <p className="sc-footer-meta">
              Agentes de WhatsApp con IA · {SC.areaServed.join(", ")}
            </p>
          </div>
          <div className="sc-footer-links">
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <Link href="/sistema-de-clientes">Inicio</Link>
          </div>
          <p className="sc-footer-copy">
            © {SITE.name} · Hecho en Jalisco, México.
          </p>
        </div>
      </footer>
    </div>
  );
}
