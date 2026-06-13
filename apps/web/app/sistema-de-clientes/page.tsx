import type { Metadata } from "next";
import { hubContent } from "../../content/sistema-de-clientes/hub";
import { SistemaTemplate } from "./_components/SistemaTemplate";
import { ServiceJsonLd } from "./_components/ServiceJsonLd";

const TITLE =
  "Sistema de Clientes para negocios de servicios en Guadalajara";
const DESCRIPTION =
  "Sitio web profesional + asistente de WhatsApp con inteligencia artificial + Google Maps optimizado. El sistema completo para que los clientes te encuentren, te escriban y ninguno se quede sin respuesta.";

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
    "sistema de clientes Guadalajara",
    "página web para negocios de servicios",
    "asistente de WhatsApp con IA",
    "Google Maps para negocios locales",
    "chatbot WhatsApp México",
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
