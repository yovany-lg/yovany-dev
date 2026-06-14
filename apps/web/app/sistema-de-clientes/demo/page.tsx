import type { Metadata } from "next";
import { Reveal } from "../../components/Reveal";
import { SC, SC_DEMO_CONFIGURED } from "../../../lib/site";
import { getVertical } from "../../../content/sistema-de-clientes/verticales";
import { ScWhatsAppButton } from "../_components/ScWhatsAppButton";
import { ScBookingButton } from "../_components/ScBookingButton";
import { StickyWhatsApp } from "../_components/StickyWhatsApp";
import { ResumenCard } from "../_components/ResumenCard";
import type { Resumen } from "../../../content/sistema-de-clientes/verticales";

const TITLE = "Mira al agente contestar a las 10 de la noche";
const DESCRIPTION =
  "Le escribí como cliente a varios negocios a las 10pm preguntando por una filtración. Ninguno contestó. Así contestaría el tuyo: al instante, calificando y juntando fotos. Mira el demo.";

const WA_MESSAGE =
  "Hola Yovany, vi tu demo del agente de WhatsApp y quiero saber cómo quedaría el mío.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/sistema-de-clientes/demo" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/sistema-de-clientes/demo",
    locale: "es_MX",
  },
};

const FALLBACK_RESUMEN: Resumen = {
  servicio: "Impermeabilizar azotea (filtración activa)",
  lineas: [
    { label: "Nombre", value: "Juan Pérez" },
    { label: "Superficie", value: "~80 m² (casa 1 piso)" },
    { label: "Zona", value: "Col. Providencia" },
    { label: "Urgencia", value: "Esta semana (le entra agua)" },
    { label: "Fotos", value: "2 adjuntas" },
    { label: "WhatsApp", value: "33 1234 5678" },
    { label: "Recibido", value: "10:42 pm" },
  ],
};

const PASOS_DEMO = [
  "Saluda y pregunta qué servicio necesita.",
  "Califica: tipo de trabajo, metros, si hay filtración activa.",
  "Pide fotos del área — el diferenciador para cotizar sin visita.",
  "Junta zona, urgencia y contacto, y arma el resumen para el dueño.",
];

export default function DemoPage() {
  const resumen = getVertical("impermeabilizacion")?.resumen ?? FALLBACK_RESUMEN;

  return (
    <>
      <main id="main">
        <section className="section sc-hero">
          <div className="container-x">
            <p className="kicker">Demo en vivo</p>
            <h1 className="sc-hero-h1">
              Mira cómo tu negocio contestaría a las 10 de la noche.
            </h1>
            <p className="sc-hero-sub">
              Un cliente con una filtración no espera a mañana. Esto es lo que pasa
              cuando el agente contesta por ti, al instante, mientras tú descansas.
            </p>
          </div>
        </section>

        {/* Prueba del comprador secreto */}
        <section className="section rule-top">
          <div className="container-x">
            <Reveal as="div" className="sc-proof card">
              <p className="sc-proof-label">El experimento</p>
              <p className="sc-proof-text">
                Le escribí como cliente a varios negocios de impermeabilización a las
                10 de la noche, preguntando por una filtración. <strong>La mayoría
                contestó hasta el día siguiente — o nunca.</strong> Normal: nadie puede
                estar 24/7 en el teléfono. Por eso pierden trabajos que ya estaban
                tocando la puerta.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Video */}
        <section className="section rule-top">
          <div className="container-x sc-demo-wrap">
            <Reveal>
              <p className="kicker">El demo</p>
              <h2 className="sc-h2">Así contesta tu agente, paso a paso.</h2>
            </Reveal>
            <Reveal as="div" className="sc-demo-video" delay={80}>
              {SC_DEMO_CONFIGURED ? (
                <video controls preload="metadata" playsInline className="sc-demo-player">
                  <source src={SC.demoVideo} />
                  Tu navegador no puede reproducir el video.
                </video>
              ) : (
                <div className="sc-demo-placeholder">
                  <p className="sc-demo-placeholder-title">▶ Video del agente</p>
                  <ol className="sc-demo-steps">
                    {PASOS_DEMO.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ol>
                </div>
              )}
            </Reveal>
          </div>
        </section>

        {/* Lo que le llega al dueño */}
        <section className="section rule-top">
          <div className="container-x sc-resumen-wrap">
            <Reveal>
              <p className="kicker">Y al final…</p>
              <h2 className="sc-h2">
                El dueño despierta con esto, no con un “hola, info?”.
              </h2>
            </Reveal>
            <Reveal as="div" delay={80}>
              <ResumenCard resumen={resumen} />
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="section rule-top sc-final">
          <div className="container-x">
            <Reveal>
              <h2 className="sc-h2">¿Quieres ver cómo quedaría el tuyo?</h2>
              <p className="sc-final-sub">
                Te armo un demo con el nombre y los servicios de tu negocio. Sin
                compromiso, en {SC.areaServed[0]} y alrededores.
              </p>
              <div className="sc-hero-actions">
                <ScWhatsAppButton message={WA_MESSAGE} vertical="demo" />
                <ScBookingButton vertical="demo" />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <StickyWhatsApp message={WA_MESSAGE} vertical="demo" />
    </>
  );
}
