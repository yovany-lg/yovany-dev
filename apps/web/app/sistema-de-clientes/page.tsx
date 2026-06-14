import type { Metadata } from "next";
import { hubContent } from "../../content/sistema-de-clientes/hub";
import { SistemaTemplate } from "./_components/SistemaTemplate";
import { ServiceJsonLd } from "./_components/ServiceJsonLd";

const TITLE =
  "Agente de WhatsApp con IA para negocios de servicios en Guadalajara";
const DESCRIPTION =
  "Un agente de inteligencia artificial que contesta tu WhatsApp 24/7, califica al cliente, pide fotos y medidas, y te pasa el prospecto listo para cotizar. Sitio web opcional como add-on.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/sistema-de-clientes" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/sistema-de-clientes",
    locale: "es_MX",
  },
  keywords: [
    "agente de WhatsApp con IA Guadalajara",
    "chatbot de WhatsApp para negocios",
    "automatizar WhatsApp negocio México",
    "asistente de WhatsApp inteligencia artificial",
    "cotizar por WhatsApp automático",
  ],
};

export default function SistemaDeClientesHub() {
  return (
    <>
      <ServiceJsonLd
        name={TITLE}
        description={DESCRIPTION}
        path="/sistema-de-clientes"
      />
      <SistemaTemplate content={hubContent()} />
    </>
  );
}
