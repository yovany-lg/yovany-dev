import { Reveal } from "../../components/Reveal";
import { SC_SHARED, type SistemaContent } from "../../../content/sistema-de-clientes/hub";
import { SC } from "../../../lib/site";
import { ScWhatsAppButton } from "./ScWhatsAppButton";
import { ScBookingButton } from "./ScBookingButton";
import { ScRoiCalc } from "./ScRoiCalc";
import { ScFaq } from "./ScFaq";
import { ScLeadForm } from "./ScLeadForm";
import { StickyWhatsApp } from "./StickyWhatsApp";

/**
 * Shared presentational template for the Sistema de Clientes hub and every
 * vertical page. All copy comes in through `content`; this file is layout
 * only. Server Component — the 3 interactive islands are imported clients.
 */
export function SistemaTemplate({ content }: { content: SistemaContent }) {
  const { giroKey, hero, dolores, conversacion, ticket, roiNota, faqs, waMensaje } =
    content;
  const zonas = SC.areaServed.join(" · ");

  return (
    <>
    <main id="main">
      {/* 1 ─ Hero */}
      <section className="section sc-hero">
        <div className="container-x">
          <p className="kicker">{hero.kicker}</p>
          <h1 className="sc-hero-h1">{hero.h1}</h1>
          <p className="sc-hero-sub">{hero.sub}</p>
          <div className="sc-hero-actions">
            <ScWhatsAppButton message={waMensaje} vertical={giroKey} />
            <ScBookingButton vertical={giroKey} />
          </div>
          <p className="sc-hero-meta">
            Contesta en 2 segundos · 24/7 · {zonas}
          </p>
        </div>
      </section>

      {/* 2 ─ El problema */}
      <section className="section rule-top">
        <div className="container-x">
          <Reveal>
            <p className="kicker">El problema</p>
            <h2 className="sc-h2">
              El 78% de los clientes le compra al primero que responde.
            </h2>
          </Reveal>
          <div className="symptoms">
            {dolores.map((d, i) => (
              <Reveal as="div" className="symptom" key={d} delay={i * 80}>
                <span className="symptom-num">0{i + 1}</span>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 ─ Cómo funciona */}
      <section className="section rule-top">
        <div className="container-x">
          <Reveal>
            <p className="kicker">Cómo funciona</p>
            <h2 className="sc-h2">De una búsqueda en Google a un cliente en tu WhatsApp.</h2>
          </Reveal>
          <div className="sc-steps">
            {SC_SHARED.pasos.map((p, i) => (
              <Reveal as="div" className="sc-step card" key={p.titulo} delay={i * 80}>
                <span className="sc-step-num">0{i + 1}</span>
                <h3 className="sc-step-title">{p.titulo}</h3>
                <p className="sc-step-text">{p.texto}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="sc-chat">
            <p className="sc-chat-label">Así contesta tu asistente</p>
            <div className="sc-chat-thread">
              {conversacion.map((t, i) => (
                <div
                  key={i}
                  className={`sc-bubble sc-bubble-${t.rol === "agente" ? "out" : "in"}`}
                >
                  {t.texto}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4 ─ Qué incluye */}
      <section className="section rule-top">
        <div className="container-x">
          <Reveal>
            <p className="kicker">Qué incluye</p>
            <h2 className="sc-h2">El sistema completo, integrado y listo para trabajar.</h2>
          </Reveal>
          <div className="sc-incluye">
            <Reveal as="div" className="sc-incluye-col card">
              <h3 className="sc-incluye-title">La instalación (una vez)</h3>
              <ul className="sc-list">
                {SC_SHARED.incluye.setup.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal as="div" className="sc-incluye-col card" delay={80}>
              <h3 className="sc-incluye-title">Cada mes</h3>
              <ul className="sc-list">
                {SC_SHARED.incluye.mensualidad.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="sc-addons">
            <p className="sc-addons-label">Disponibles cuando los necesites:</p>
            <ul className="sc-addons-list">
              {SC_SHARED.incluye.addons.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 5 ─ La cuenta sale sola (ROI) */}
      <section className="section rule-top">
        <div className="container-x sc-roi-wrap">
          <Reveal>
            <p className="kicker">La cuenta sale sola</p>
            <h2 className="sc-h2">{roiNota}</h2>
            <p className="sc-lead-copy">
              Haz la cuenta con tu propio ticket. Vas a ver lo rápido que se paga.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ScRoiCalc defaultTicket={ticket.min} vertical={giroKey} />
          </Reveal>
        </div>
      </section>

      {/* 6 ─ Por qué conmigo */}
      <section className="section rule-top">
        <div className="container-x">
          <Reveal className="sc-porque">
            <p className="kicker">Por qué conmigo</p>
            <h2 className="sc-h2">{SC_SHARED.porQue.heading}</h2>
            <p className="sc-porque-body">{SC_SHARED.porQue.body}</p>
          </Reveal>
        </div>
      </section>

      {/* 7 ─ Precio */}
      <section className="section rule-top">
        <div className="container-x">
          <Reveal as="div" className="sc-precio card">
            <p className="kicker">Precio</p>
            <h2 className="sc-precio-line">{SC_SHARED.precio.linea}</h2>
            <p className="sc-precio-nota">{SC_SHARED.precio.nota}</p>
            <p className="sc-precio-comp">{SC_SHARED.precio.comparativa}</p>
            <div className="sc-precio-cta">
              <ScWhatsAppButton
                message={waMensaje}
                vertical={giroKey}
                label="Quiero mi sistema"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8 ─ FAQ */}
      <section className="section rule-top">
        <div className="container-x">
          <Reveal>
            <p className="kicker">Preguntas frecuentes</p>
            <h2 className="sc-h2">Lo que casi todos preguntan.</h2>
          </Reveal>
          <ScFaq faqs={faqs} vertical={giroKey} />
        </div>
      </section>

      {/* 9 ─ CTA final */}
      <section className="section rule-top sc-final">
        <div className="container-x sc-final-grid">
          <Reveal>
            <h2 className="sc-h2">Que ningún cliente se quede sin respuesta.</h2>
            <p className="sc-final-sub">
              Escríbeme por WhatsApp y platícame de tu negocio, o déjame tus datos y
              yo te contacto. En la zona de {SC.areaServed[0]} y alrededores.
            </p>
            <div className="sc-hero-actions">
              <ScWhatsAppButton message={waMensaje} vertical={giroKey} />
              <ScBookingButton vertical={giroKey} />
            </div>
          </Reveal>
          <Reveal as="div" className="sc-final-card card" delay={80}>
            <p className="sc-final-card-title">¿Prefieres que yo te escriba?</p>
            <p className="sc-final-card-text">
              Déjame tu nombre, tu giro y tu WhatsApp. Te contacto sin compromiso.
            </p>
            <ScLeadForm vertical={giroKey} />
          </Reveal>
        </div>
      </section>
    </main>
    <StickyWhatsApp message={waMensaje} vertical={giroKey} />
    </>
  );
}
