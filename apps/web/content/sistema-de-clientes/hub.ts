/**
 * Copy del hub `/sistema-de-clientes` + contenido compartido por todas las
 * páginas del subárbol, y los adaptadores que convierten (hub | vertical) en
 * el mismo `SistemaContent` que renderiza <SistemaTemplate>.
 *
 * Español mexicano, tono directo, frases cortas. Vender resultados, no
 * características. Prohibido: "RAG", "pipeline", "API", "stack".
 */

import type { Turno, Vertical } from "./verticales";
import { SC } from "../../lib/site";

/** Bloques idénticos en hub y en todos los verticales. */
export const SC_SHARED = {
  pasos: [
    {
      titulo: "Te encuentran en Google",
      texto:
        "Tu negocio aparece en Google Maps y en las búsquedas cuando alguien necesita tu servicio en tu zona.",
    },
    {
      titulo: "El asistente atiende y califica",
      texto:
        "Tu asistente de WhatsApp contesta en segundos, de día o de noche, hace las preguntas correctas y arma el resumen del cliente.",
    },
    {
      titulo: "Tú solo cotizas",
      texto:
        "Te llega el cliente listo, con todo lo que necesitas para cotizar. Cero clientes perdidos por no contestar a tiempo.",
    },
  ],
  incluye: {
    setup: [
      "Sitio web profesional, rápido y hecho para celular, con tu dominio propio.",
      "Asistente de WhatsApp con inteligencia artificial que contesta 24/7 y califica a cada cliente.",
      "Tu perfil de Google Maps optimizado para que aparezcas cuando te buscan.",
      "Botón de WhatsApp en todo el sitio para que te escriban con un clic.",
      "Galería de trabajos y tu zona de cobertura, clave para que Google te muestre.",
    ],
    mensualidad: [
      "Hosting, dominio y mantenimiento del sitio.",
      "Operación y ajustes del asistente: precios, servicios y horarios.",
      "Publicaciones mensuales en tu perfil de Google.",
      "Reporte mensual: cuántos clientes te escribieron y qué pidieron.",
      "Soporte por WhatsApp directo conmigo.",
    ],
    addons: [
      "Motor de reseñas de Google automatizado",
      "Campañas de reactivación a clientes pasados",
      "Cotizador automático con rangos de precio",
      "Google Ads local administrado",
      "Mini panel de clientes (CRM)",
    ],
  },
  porQue: {
    heading: "¿Por qué conmigo?",
    body: "Soy ingeniero de software con más de 8 años construyendo sistemas que funcionan solos. No soy una agencia que subcontrata: el sistema lo construyo yo y lo mantengo yo. Hablas directo con quien lo hace.",
  },
  precio: {
    titulo: "Precio claro, sin letras chiquitas",
    linea: `Desde $${SC.setupDesde.toLocaleString("es-MX")} MXN de instalación + desde $${SC.mensualidadDesde.toLocaleString("es-MX")} al mes.`,
    nota: "Sin contratos forzosos. Mes a mes.",
    comparativa:
      "Solo el chatbot cuesta entre $15,000 y $28,000 más mensualidad en otro lado. Aquí va todo integrado: sitio, asistente y Google.",
  },
  /** FAQ base — se les suman las FAQ del vertical. */
  faqsBase: [
    {
      q: "¿Tengo que cambiar mi número de WhatsApp?",
      a: "No necesariamente. Podemos usar tu número actual o migrar a uno nuevo de WhatsApp Business. Lo definimos según lo que más te convenga.",
    },
    {
      q: "¿El asistente reemplaza a una persona?",
      a: "No. Contesta al instante, califica al cliente y te pasa el resumen. Cuando el caso lo amerita o el cliente lo pide, escala a un humano: a ti o a tu equipo.",
    },
    {
      q: "¿En cuánto tiempo está listo?",
      a: "Entre 2 y 3 semanas, dependiendo de tu giro y de qué tan rápido me pases la información de tu negocio.",
    },
    {
      q: "¿Qué pasa si cancelo?",
      a: "El dominio y tu perfil de Google son tuyos, te quedas con ellos. No hay contratos forzosos: es mes a mes.",
    },
    {
      q: "¿Funciona para mi giro?",
      a: "Funciona para negocios de servicios de ticket alto: paneles solares, remodelaciones, clínicas, despachos, impermeabilización y más. Si tu cliente te busca en Google y te escribe por WhatsApp, te sirve.",
    },
  ],
} as const;

/** Forma única que consume <SistemaTemplate>; hub y vertical la producen. */
export type SistemaContent = {
  variant: "hub" | "vertical";
  /** "" en el hub; el slug del giro en un vertical. */
  slug: string;
  /** Etiqueta del giro para badges/tracking; "general" en el hub. */
  giroKey: string;
  hero: { kicker: string; h1: string; sub: string };
  dolores: string[];
  conversacion: Turno[];
  ticket: { min: number; max: number };
  roiNota: string;
  faqs: { q: string; a: string }[];
  waMensaje: string;
};

/** Copy propio del hub (genérico, sin giro). */
const HUB = {
  hero: {
    kicker: "Sistema de Clientes",
    h1: "Tu negocio contestando WhatsApp las 24 horas. Aunque tú estés trabajando.",
    sub: "Sitio web profesional + asistente de WhatsApp con inteligencia artificial + Google Maps optimizado. El sistema completo para que los clientes te encuentren y te escriban — y ninguno se quede sin respuesta.",
  },
  dolores: [
    "Pierdes clientes porque no alcanzas a contestar WhatsApp a tiempo.",
    "No apareces en Google Maps cuando alguien busca tu servicio en tu zona.",
    "Tu competencia se ve más profesional en internet, aunque tú hagas mejor trabajo.",
  ],
  conversacion: [
    { rol: "cliente", texto: "Hola, ¿hacen cotizaciones?" },
    { rol: "agente", texto: "¡Claro! Con gusto te ayudo. ¿Para qué tipo de proyecto lo necesitas?" },
    { rol: "cliente", texto: "Para mi casa." },
    { rol: "agente", texto: "Perfecto. Para darte un número exacto, ¿me compartes una foto del espacio y tu colonia?" },
    { rol: "cliente", texto: "[envía foto] En Zapopan." },
    { rol: "agente", texto: "Listo, ya tengo todo. Un asesor te confirma el precio en breve." },
  ] as Turno[],
  ticket: { min: 20000, max: 120000 },
  roiNota: "Un solo trabajo paga el sistema de todo el año.",
  waMensaje: "Hola Yovany, quiero saber más del Sistema de Clientes para mi negocio.",
} as const;

export const hubContent = (): SistemaContent => ({
  variant: "hub",
  slug: "",
  giroKey: "general",
  hero: HUB.hero,
  dolores: [...HUB.dolores],
  conversacion: HUB.conversacion,
  ticket: HUB.ticket,
  roiNota: HUB.roiNota,
  faqs: [...SC_SHARED.faqsBase],
  waMensaje: HUB.waMensaje,
});

export const verticalContent = (v: Vertical): SistemaContent => ({
  variant: "vertical",
  slug: v.slug,
  giroKey: v.slug,
  hero: { kicker: "Sistema de Clientes", h1: v.hero.h1, sub: v.hero.sub },
  dolores: [...v.dolores],
  conversacion: v.conversacion,
  ticket: v.ticket,
  roiNota: v.roiNota,
  // FAQ del giro primero (lo más relevante), luego las base.
  faqs: [...v.faqs, ...SC_SHARED.faqsBase],
  waMensaje: v.waMensaje,
});
