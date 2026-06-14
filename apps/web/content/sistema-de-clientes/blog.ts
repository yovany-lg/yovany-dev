/**
 * Mini-blog de valor para difusión (grupos de Facebook, etc.).
 * Artículos dirigidos al DUEÑO del negocio, no al cliente final. Cada uno
 * cierra con CTA al agente. Contenido en español mexicano, tono directo.
 *
 * Sin MDX/CMS: los artículos son datos tipados (consistente con el resto del
 * sitio). El campo `hero.src` apunta a /public/blog/<slug>.webp; si la imagen
 * no existe todavía, la página muestra un placeholder con degradado.
 */

export type Bloque =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Articulo = {
  slug: string;
  published: boolean;
  title: string;
  description: string;
  /** Fecha absoluta ISO (YYYY-MM-DD). */
  date: string;
  readingMinutes: number;
  hero?: { src: string; alt: string };
  /** Prompt sugerido para generar la imagen hero (referencia, no se renderiza). */
  heroPrompt?: string;
  body: Bloque[];
};

export const ARTICULOS: Articulo[] = [
  {
    slug: "pierdes-clientes-whatsapp-temporada-lluvias",
    published: true,
    title:
      "Por qué pierdes clientes en WhatsApp en temporada de lluvias (y cómo evitarlo)",
    description:
      "En temporada de lluvias los mensajes se juntan y el que contesta primero se lleva el trabajo. Te explico por qué pasa y cómo arreglarlo sin estar 24/7 en el teléfono.",
    date: "2026-06-09",
    readingMinutes: 4,
    hero: {
      src: "/blog/pierdes-clientes-whatsapp-temporada-lluvias.webp",
      alt: "Teléfono con WhatsApp lleno de mensajes sin contestar bajo la lluvia",
    },
    heroPrompt:
      "Wide editorial hero image, 16:9. A smartphone on a rainy windowsill at night showing a WhatsApp-style chat full of unread message bubbles glowing green. Warm interior light vs cool blue rain outside. Cinematic, shallow depth of field, no text, no logos, no watermark. Muted off-white and vermillion accent palette to match a premium studio brand. Photorealistic.",
    body: [
      { type: "p", text: "Son las 10 de la noche, está lloviendo, y a alguien se le está metiendo agua por la azotea. Agarra el teléfono y le escribe a tres negocios de impermeabilización al mismo tiempo. ¿Quién se queda el trabajo? El que contesta primero." },
      { type: "h2", text: "El 78% le compra al primero que responde" },
      { type: "p", text: "No es que tu trabajo sea peor. Es que el cliente con una urgencia no espera. Para cuando ves el mensaje a la mañana siguiente, ya contrató a alguien más. En temporada de lluvias esto se multiplica: los mensajes se juntan y físicamente no alcanzas a contestar todos a tiempo." },
      { type: "h2", text: "Por qué no es tu culpa (pero sí tu problema)" },
      { type: "p", text: "Nadie puede estar pegado al teléfono las 24 horas. Estás en una azotea, manejando, comiendo o durmiendo. El problema es que cada mensaje sin contestar es un trabajo de varios miles de pesos que se va con la competencia." },
      { type: "h2", text: "La solución: un asistente que nunca duerme" },
      { type: "p", text: "Un agente de WhatsApp con inteligencia artificial contesta por ti al instante, a cualquier hora. No solo dice “hola”: hace las preguntas correctas y te arma el prospecto listo para cotizar." },
      {
        type: "ul",
        items: [
          "Contesta en segundos, de día o de noche.",
          "Pregunta qué necesita, cuántos metros, si hay filtración activa.",
          "Pide fotos del área para que cotices casi sin visita.",
          "Te manda un resumen ordenado con zona, urgencia y contacto.",
        ],
      },
      { type: "p", text: "Tú despiertas con un prospecto calificado en lugar de un “hola, info?” sin contexto. Y el cliente, en lugar de irse con otro, ya está esperando tu cotización." },
    ],
  },
  {
    slug: "cuanto-cuesta-chatbot-whatsapp-mexico",
    published: true,
    title: "¿Cuánto cuesta un chatbot de WhatsApp en México? Precios reales 2026",
    description:
      "Lo que cobran las agencias por un chatbot de WhatsApp en México, qué incluye de verdad, y cómo saber si te conviene. Sin rodeos.",
    date: "2026-06-05",
    readingMinutes: 4,
    hero: {
      src: "/blog/cuanto-cuesta-chatbot-whatsapp-mexico.webp",
      alt: "Calculadora y teléfono con WhatsApp sobre un escritorio de trabajo",
    },
    heroPrompt:
      "Wide editorial hero image, 16:9. A clean desk with a smartphone showing a WhatsApp-style chat next to a simple calculator and a small stack of pesos bills, soft natural daylight. Minimal, premium, photorealistic, shallow depth of field. No text, no logos, no watermark. Muted off-white background with a single vermillion accent object.",
    body: [
      { type: "p", text: "Si estás pensando en automatizar tu WhatsApp, lo primero que quieres saber es cuánto cuesta. Aquí van los números reales que se manejan en México en 2026, sin letra chiquita." },
      { type: "h2", text: "Lo que cobran las agencias" },
      { type: "p", text: "Un chatbot de WhatsApp en México normalmente se cobra así:" },
      {
        type: "ul",
        items: [
          "Instalación (setup): entre $8,000 y $28,000 MXN.",
          "Mensualidad: entre $2,000 y $5,000 MXN.",
          "Muchas veces el sitio web se cobra aparte: $14,000 a $30,000 MXN.",
        ],
      },
      { type: "h2", text: "Lo que de verdad importa: el retorno" },
      { type: "p", text: "El precio solo tiene sentido frente a lo que recuperas. Si tu ticket promedio es de $15,000 y el agente te recupera UN cliente al mes que se te iba a escapar, ya se pagó solo — varias veces. La pregunta correcta no es “¿cuánto cuesta?”, es “¿cuántos clientes estoy perdiendo hoy por no contestar?”." },
      { type: "h2", text: "Mi enfoque" },
      { type: "p", text: "Soy ingeniero, no agencia que subcontrata. El agente lo construyo y lo opero yo. Cobro desde $15,000 de instalación + $3,000 al mes, sin contratos forzosos, y el sitio web es un add-on opcional. Hablas directo con quien lo hace." },
    ],
  },
  {
    slug: "experimento-escribi-impermeabilizadores-10pm",
    published: true,
    title: "Le escribí a 5 impermeabilizadores de Guadalajara a las 10pm. Esto pasó.",
    description:
      "Hice un experimento: me hice pasar por cliente con una filtración y escribí a 5 negocios a las 10 de la noche. Los resultados explican por qué pierden trabajos.",
    date: "2026-06-02",
    readingMinutes: 3,
    hero: {
      src: "/blog/experimento-escribi-impermeabilizadores-10pm.webp",
      alt: "Reloj marcando las 10 de la noche junto a un teléfono con un chat abierto",
    },
    heroPrompt:
      "Wide editorial hero image, 16:9. Close-up of a phone screen showing a WhatsApp-style chat sent at 10:02 PM with a single 'delivered' check and no reply, a clock in soft focus in the background reading 10 PM. Moody night lighting, cinematic, photorealistic. No readable text other than a time stamp, no logos, no watermark. Vermillion accent.",
    body: [
      { type: "p", text: "Quería comprobar algo, así que hice la prueba más sencilla del mundo: me hice pasar por cliente con una filtración y escribí a 5 negocios de impermeabilización de Guadalajara a las 10 de la noche un domingo." },
      { type: "quote", text: "“Buenas, ¿hacen impermeabilización de azotea? Tengo una filtración en una casa de un piso, como 80m². ¿Me pueden cotizar?”" },
      { type: "h2", text: "Los resultados" },
      {
        type: "ul",
        items: [
          "3 de 5 no contestaron esa noche. Dos respondieron hasta el día siguiente por la tarde.",
          "1 contestó al otro día temprano, pero ya sin preguntar nada útil.",
          "1 nunca respondió.",
        ],
      },
      { type: "h2", text: "La lección" },
      { type: "p", text: "Ninguno es mal negocio. Simplemente nadie puede estar contestando a las 10pm. Pero ese cliente con una gotera activa no esperó: contrató al primero que le respondió al día siguiente con un número. Cada uno de esos mensajes era un trabajo de miles de pesos." },
      { type: "p", text: "Por eso construyo agentes de WhatsApp: para que el negocio conteste al instante, califique y junte las fotos — aunque el dueño esté dormido. El que contesta primero, gana." },
    ],
  },
];

export const publishedArticulos = (): Articulo[] =>
  ARTICULOS.filter((a) => a.published).sort((a, b) => (a.date < b.date ? 1 : -1));

export const getArticulo = (slug: string): Articulo | undefined =>
  ARTICULOS.find((a) => a.slug === slug && a.published);
