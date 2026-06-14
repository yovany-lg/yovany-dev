import type { Metadata } from "next";
import Link from "next/link";
import { SC } from "../../../lib/site";
import { ScWhatsAppButton } from "../_components/ScWhatsAppButton";

const TITLE = "Enlaces — Agente de WhatsApp con IA · Yovany Luis";
const DESCRIPTION =
  "Todo en un solo lugar: demo del agente, servicios y WhatsApp directo. Agentes de WhatsApp con IA para negocios de servicios en Guadalajara.";

const WA_MESSAGE =
  "Hola Yovany, quiero saber más del agente de WhatsApp para mi negocio.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/sistema-de-clientes/enlaces" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/sistema-de-clientes/enlaces",
    locale: "es_MX",
  },
};

const LINKS = [
  { href: "/sistema-de-clientes/demo", label: "▶  Mira el demo en vivo" },
  { href: "/sistema-de-clientes/impermeabilizacion", label: "💧  Impermeabilización y pintura" },
  { href: "/sistema-de-clientes/blog", label: "📝  Blog: más clientes por WhatsApp" },
  { href: "/sistema-de-clientes", label: "🤖  Qué es el agente y cuánto cuesta" },
];

export default function EnlacesPage() {
  return (
    <main id="main" className="section">
      <div className="container-x sc-links">
        <div className="sc-links-head">
          <span className="nav-dot" aria-hidden />
          <p className="sc-links-name">Yovany Luis</p>
          <p className="sc-links-tagline">
            Agentes de WhatsApp con IA para negocios de servicios · {SC.areaServed[0]}
          </p>
        </div>

        <ScWhatsAppButton
          message={WA_MESSAGE}
          vertical="enlaces"
          label="Escríbeme por WhatsApp"
          className="sc-links-wa"
        />

        <div className="sc-links-list">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="sc-links-item">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
