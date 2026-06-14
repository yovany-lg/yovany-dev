/**
 * Copy del hub `/sistema-de-clientes` + contenido compartido por todas las
 * páginas del subárbol, y los adaptadores que convierten (hub | vertical) en
 * el mismo `SistemaContent` que renderiza <SistemaTemplate>.
 *
 * Producto rector: el AGENTE de WhatsApp con IA. El sitio web es un add-on.
 * Español mexicano, tono directo, frases cortas. Vender resultados, no
 * características. Prohibido: "RAG", "pipeline", "API", "stack".
 */

import type { Resumen, Turno, Vertical } from "./verticales";
import { SC } from "../../lib/site";

const peso = (n: number) => n.toLocaleString("es-MX", { maximumFractionDigits: 0 });

/** Bloques idénticos en hub y en todos los verticales. */
export const SC_SHARED = {
  pasos: [
    {
      titulo: "El cliente te escribe por WhatsApp",
      texto:
        "A cualquier hora — un domingo a las 10 de la noche con una filtración, o a media instalación cuando no puedes contestar.",
    },
    {
      titulo: "El agente atiende, califica y pide fotos",
      texto:
        "Contesta en segundos, hace las preguntas correctas una por una, junta fotos y medidas, y detecta si es urgente.",
    },
    {
      titulo: "Te llega el prospecto listo para cotizar",
      texto:
        "Un resumen ordenado a tu WhatsApp: servicio, medidas, zona, urgencia, fotos y contacto. Tú solo pasas el precio.",
    },
  ],
  incluye: {
    // Columna 1 — el agente, el corazón del producto.
    agente: [
      "Contesta tu WhatsApp al instante, 24/7, los 365 días.",
      "Califica al cliente con las preguntas correctas de tu giro, una a la vez.",
      "Pide fotos y medidas del trabajo — para que cotices casi sin visita.",
      "Te arma un resumen ordenado del prospecto, listo para cotizar.",
      "Escala a un humano (a ti) cuando el caso es raro o el cliente lo pide.",
    ],
    // Columna 2 — la mensualidad.
    mensualidad: [
      "Operación y ajustes del agente: servicios, preguntas, horarios.",
      "Servidor, WhatsApp Business y la inteligencia artificial corriendo.",
      "Reporte mensual: cuántos clientes escribieron y qué pidieron.",
      "Soporte por WhatsApp directo conmigo.",
    ],
    // Add-ons — el sitio web ahora vive aquí.
    addons: [
      `Sitio web sencillo: botón de WhatsApp + galería de trabajos (+$${peso(SC.sitioAddon.setup)} + $${peso(SC.sitioAddon.mensual)}/mes)`,
      "Perfil de Google Maps optimizado",
      "Cotizador automático con rangos de precio",
      "Motor de reseñas de Google automatizado",
      "Campañas de reactivación a clientes pasados",
    ],
  },
  porQue: {
    heading: "¿Por qué conmigo?",
    body: "Soy ingeniero de software con más de 8 años construyendo sistemas de inteligencia artificial que funcionan solos. No soy una agencia que subcontrata: el agente lo construyo yo y lo opero yo. Hablas directo con quien lo hace.",
  },
  precio: {
    titulo: "Precio claro, sin letras chiquitas",
    linea: `Desde $${peso(SC.setupDesde)} MXN de instalación + $${peso(SC.mensualidadDesde)} al mes.`,
    nota: "Sin contratos forzosos. Mes a mes.",
    addon: `¿Quieres también sitio web? Es un add-on: +$${peso(SC.sitioAddon.setup)} de instalación + $${peso(SC.sitioAddon.mensual)}/mes. Muchos clientes empiezan solo con el agente.`,
    comparativa:
      "Recuperar UN cliente perdido al mes ya pagó el sistema. El agente es el activo; el sitio web es opcional.",
  },
  /** FAQ base — se les suman las FAQ del vertical. */
  faqsBase: [
    {
      q: "¿Tengo que cambiar mi número de WhatsApp?",
      a: "No necesariamente. Podemos usar tu número actual o migrar a uno nuevo de WhatsApp Business. Lo definimos según lo que más te convenga.",
    },
    {
      q: "¿El agente reemplaza a una persona?",
      a: "No. Contesta al instante, califica al cliente y te pasa el resumen listo. Cuando el caso lo amerita o el cliente lo pide, escala a un humano: a ti o a tu equipo.",
    },
    {
      q: "¿El sitio web está incluido?",
      a: `El producto es el agente de WhatsApp. El sitio web es un add-on opcional (+$${peso(SC.sitioAddon.setup)} de instalación + $${peso(SC.sitioAddon.mensual)}/mes): una landing con botón de WhatsApp y galería de trabajos. Muchos clientes arrancan solo con el agente.`,
    },
    {
      q: "¿En cuánto tiempo está listo?",
      a: "El agente queda en 1 o 2 semanas, dependiendo de qué tan rápido me pases la información de tu negocio.",
    },
    {
      q: "¿Funciona para mi giro?",
      a: "Funciona para negocios de servicios donde el cliente te escribe por WhatsApp y tú cotizas: impermeabilización, pintura, remodelaciones, instalaciones y más. Si pierdes clientes por no contestar a tiempo, te sirve.",
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
  /** El resumen que le llega al dueño (el "oro"). */
  resumen: Resumen;
  /** Rango de ticket del trabajo (MXN) — alimenta el ROI. */
  ticket: { min: number; max: number };
  roiNota: string;
  faqs: { q: string; a: string }[];
  waMensaje: string;
};

/** Resumen genérico para el hub (sin giro específico). */
const RESUMEN_HUB: Resumen = {
  servicio: "Cotización de servicio",
  lineas: [
    { label: "Nombre", value: "Juan Pérez" },
    { label: "Servicio", value: "Lo que ofreces (con detalle)" },
    { label: "Zona", value: "Col. Providencia" },
    { label: "Urgencia", value: "Esta semana" },
    { label: "Fotos", value: "2 adjuntas" },
    { label: "WhatsApp", value: "33 1234 5678" },
    { label: "Recibido", value: "10:42 pm" },
  ],
};

/** Copy propio del hub (genérico, sin giro). */
const HUB = {
  hero: {
    kicker: "Agente de WhatsApp con IA",
    h1: "Tu negocio contestando WhatsApp al instante. 24/7. Aunque tú estés trabajando.",
    sub: "Un agente de inteligencia artificial que contesta por ti, califica al cliente, junta fotos y medidas, y te pasa el prospecto listo para cotizar. El sitio web, si lo quieres, va como add-on.",
  },
  dolores: [
    "Pierdes clientes porque no alcanzas a contestar WhatsApp a tiempo.",
    "Los mensajes llegan a deshoras y el que contesta primero se lleva el trabajo.",
    "Te llega un “hola, info?” sin contexto y se te va el cliente entre tanto mensaje.",
  ],
  conversacion: [
    { rol: "cliente", texto: "Hola, ¿me pueden cotizar un trabajo?" },
    { rol: "agente", texto: "¡Claro que sí! 👋 Con gusto le ayudo a cotizar rapidito. ¿Qué servicio necesita?" },
    { rol: "cliente", texto: "Sí, para mi casa." },
    { rol: "agente", texto: "Perfecto. ¿Me manda 1 o 2 fotos del área? 📷 Con eso le damos un precio mucho más exacto. ¿Y en qué colonia está?" },
    { rol: "cliente", texto: "[envía foto] En Providencia." },
    { rol: "agente", texto: "¡Listo! Ya tengo todo. El equipo le manda su cotización hoy mismo. 🙌" },
  ] as Turno[],
  ticket: { min: 8000, max: 60000 },
  roiNota: "Recuperar un solo cliente al mes ya paga el sistema.",
  waMensaje: "Hola Yovany, quiero saber más del agente de WhatsApp para mi negocio.",
} as const;

export const hubContent = (): SistemaContent => ({
  variant: "hub",
  slug: "",
  giroKey: "general",
  hero: HUB.hero,
  dolores: [...HUB.dolores],
  conversacion: HUB.conversacion,
  resumen: RESUMEN_HUB,
  ticket: HUB.ticket,
  roiNota: HUB.roiNota,
  faqs: [...SC_SHARED.faqsBase],
  waMensaje: HUB.waMensaje,
});

export const verticalContent = (v: Vertical): SistemaContent => ({
  variant: "vertical",
  slug: v.slug,
  giroKey: v.slug,
  hero: { kicker: "Agente de WhatsApp con IA", h1: v.hero.h1, sub: v.hero.sub },
  dolores: [...v.dolores],
  conversacion: v.conversacion,
  resumen: v.resumen ?? RESUMEN_HUB,
  ticket: v.ticket,
  roiNota: v.roiNota,
  // FAQ del giro primero (lo más relevante), luego las base.
  faqs: [...v.faqs, ...SC_SHARED.faqsBase],
  waMensaje: v.waMensaje,
});
