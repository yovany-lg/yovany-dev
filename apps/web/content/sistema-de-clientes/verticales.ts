/**
 * Datos por vertical del "Sistema de Clientes".
 * Fuente única de verdad del contenido específico de cada giro.
 *
 * Agregar un vertical nuevo = agregar un objeto aquí (no una página).
 * `published: false` lo mantiene definido pero fuera del sitio (no se
 * prerenderiza ni aparece en sitemap) hasta que se active.
 *
 * Todo el copy es español mexicano, tono directo, cero tecnicismos: el
 * lector es un dueño de negocio, no un ingeniero.
 */

export type Turno = { rol: "cliente" | "agente"; texto: string };

export type Vertical = {
  /** Segmento de URL: /sistema-de-clientes/<slug> */
  slug: string;
  /** Solo los publicados se prerenderizan y entran al sitemap. */
  published: boolean;
  tier: 1 | 2;
  /** Nombre del giro, en minúscula, para usar dentro de frases. */
  giro: string;
  hero: { h1: string; sub: string };
  /** Exactamente 3 dolores específicos del giro. */
  dolores: [string, string, string];
  /** Conversación de ejemplo real del asistente para este giro. */
  conversacion: Turno[];
  /** Rango de ticket del trabajo (MXN) — alimenta la sección de ROI. */
  ticket: { min: number; max: number };
  /** Cierre de la sección ROI, propio del giro. */
  roiNota: string;
  /** 1–2 FAQ propias del giro (se suman a las FAQ base). */
  faqs: { q: string; a: string }[];
  /** Mensaje precargado en el enlace de WhatsApp, con el giro incluido. */
  waMensaje: string;
  seo: { title: string; description: string; keywords: string[] };
};

export const VERTICALES: Vertical[] = [
  // ─────────────────────────── PUBLICADOS ───────────────────────────
  {
    slug: "paneles-solares",
    published: true,
    tier: 1,
    giro: "paneles solares",
    hero: {
      h1: "Tu empresa de paneles solares contestando WhatsApp 24/7. Aunque andes en un techo.",
      sub: "Sitio web profesional + asistente de WhatsApp con inteligencia artificial + Google Maps optimizado. Mientras tú instalas, tu asistente contesta, pide el recibo de CFE y te entrega el cliente ya calificado.",
    },
    dolores: [
      "Mientras estás en una instalación entran mensajes que no alcanzas a contestar — y el cliente se va con otro instalador.",
      "Hay 160+ instaladores en Guadalajara peleando por los mismos clientes en Google. Gana el que se ve más profesional y contesta primero.",
      "Inviertes en anuncios, pero los leads llegan a deshoras y se enfrían antes de que puedas responder.",
    ],
    conversacion: [
      { rol: "cliente", texto: "Hola, quiero cotizar paneles solares para mi casa." },
      { rol: "agente", texto: "¡Va! Para pre-dimensionar tu sistema, ¿me mandas una foto de tu recibo de CFE? Con eso veo tu consumo." },
      { rol: "cliente", texto: "[envía foto del recibo]" },
      { rol: "agente", texto: "Gracias. Veo que estás en tarifa DAC pagando bimestral — eres muy buen candidato para ahorrar. ¿La casa es propia y en qué colonia está?" },
      { rol: "cliente", texto: "Sí, es propia, en Zapopan." },
      { rol: "agente", texto: "Perfecto, ya tengo lo necesario. Un asesor te manda hoy mismo la propuesta con tu ahorro estimado." },
    ],
    ticket: { min: 23000, max: 120000 },
    roiNota: "Una sola instalación paga el sistema de todo el año — y te sobra.",
    faqs: [
      {
        q: "¿El asistente puede pre-dimensionar el sistema con el recibo?",
        a: "Sí. Le pide al cliente una foto de su recibo de CFE, identifica su consumo y tarifa, y te entrega un lead ya calificado para que tú mandes la propuesta exacta.",
      },
      {
        q: "¿Atiende clientes residenciales y comerciales?",
        a: "Los dos. Califica por tipo de inmueble y consumo, y te dice de entrada qué tipo de cliente es para que priorices.",
      },
    ],
    waMensaje:
      "Hola Yovany, tengo una empresa de paneles solares y quiero saber más del Sistema de Clientes.",
    seo: {
      title: "Sistema de Clientes para empresas de paneles solares en Guadalajara",
      description:
        "Sitio web + asistente de WhatsApp con IA + Google Maps para instaladores de paneles solares en Guadalajara. Contesta 24/7, califica con el recibo de CFE y no pierdas ni un cliente.",
      keywords: [
        "sistema de clientes paneles solares Guadalajara",
        "página web instaladores de paneles solares",
        "WhatsApp automático energía solar GDL",
        "marketing para empresas de paneles solares",
      ],
    },
  },
  {
    slug: "impermeabilizacion",
    published: true,
    tier: 2,
    giro: "impermeabilización",
    hero: {
      h1: "Tu negocio de impermeabilización contestando WhatsApp 24/7. Aunque esté lloviendo.",
      sub: "Sitio web profesional + asistente de WhatsApp con inteligencia artificial + Google Maps optimizado. Cuando llega el temporal y se te juntan los mensajes, tu asistente contesta a todos y te pasa los clientes listos para cotizar.",
    },
    dolores: [
      "Llega el temporal de lluvias y te saturas de mensajes: contestas a unos cuantos y el resto se va con quien sí responde.",
      "El cliente con gotera quiere solución HOY. El primero que contesta es el que cierra el trabajo.",
      "No apareces en Google Maps cuando alguien busca “impermeabilización” en tu colonia.",
    ],
    conversacion: [
      { rol: "cliente", texto: "Hola, tengo una gotera, ¿cuánto cobran?" },
      { rol: "agente", texto: "¡Te ayudo de inmediato! Para darte un estimado, ¿cuántos metros cuadrados son aprox. y de qué es la azotea (concreto, lámina)?" },
      { rol: "cliente", texto: "Como 80 metros, de concreto." },
      { rol: "agente", texto: "Perfecto. ¿Me mandas una foto de la zona afectada y tu colonia? Con eso te paso un rango de precio." },
      { rol: "cliente", texto: "[envía foto] Estoy en Tlaquepaque." },
      { rol: "agente", texto: "Listo, ya tengo todo. Un asesor te confirma el precio y agenda la visita hoy mismo." },
    ],
    ticket: { min: 8000, max: 60000 },
    roiNota: "Con los leads de una sola temporada de lluvias recuperas el sistema del año.",
    faqs: [
      {
        q: "Vendo más en temporada de lluvias, ¿me sirve todo el año?",
        a: "Sí. En temporada evita que pierdas la avalancha de clientes que no alcanzas a contestar; el resto del año mantiene tu presencia en Google y capta trabajos de mantenimiento.",
      },
      {
        q: "¿Puede pedir fotos de la azotea?",
        a: "Sí. El asistente pide metros, tipo de superficie y fotos de la zona afectada, así te llega el lead casi cotizado.",
      },
    ],
    waMensaje:
      "Hola Yovany, tengo un negocio de impermeabilización y quiero saber más del Sistema de Clientes.",
    seo: {
      title: "Sistema de Clientes para negocios de impermeabilización en Guadalajara",
      description:
        "Sitio web + asistente de WhatsApp con IA + Google Maps para impermeabilizadores en Guadalajara. Contesta 24/7 en plena temporada de lluvias y no pierdas ni un cliente con gotera.",
      keywords: [
        "sistema de clientes impermeabilización Guadalajara",
        "página web impermeabilización GDL",
        "WhatsApp automático impermeabilizantes",
        "leads de impermeabilización Guadalajara",
      ],
    },
  },
  {
    slug: "portones-electricos",
    published: true,
    tier: 2,
    giro: "portones eléctricos y canceles",
    hero: {
      h1: "Tu negocio de portones y canceles contestando WhatsApp 24/7. Aunque estés en una instalación.",
      sub: "Sitio web profesional + asistente de WhatsApp con inteligencia artificial + Google Maps optimizado. Tu asistente junta medidas y fotos, califica al cliente y te lo entrega listo para cotizar.",
    },
    dolores: [
      "Te escriben para cotizar un portón o cancel y, si no contestas rápido, le piden a tres más y se van con el primero.",
      "Las cotizaciones se piden con medidas y fotos; si no las juntas bien, pierdes tiempo y el cliente se enfría.",
      "No apareces en Google cuando buscan “portones eléctricos” o “canceles de aluminio” en tu zona.",
    ],
    conversacion: [
      { rol: "cliente", texto: "Hola, quiero un portón eléctrico, ¿cuánto sale?" },
      { rol: "agente", texto: "¡Con gusto! Para darte un número, ¿cuál es el ancho aproximado del acceso y lo quieres abatible o corredizo?" },
      { rol: "cliente", texto: "Como 4 metros, corredizo." },
      { rol: "agente", texto: "Va. ¿Me mandas una foto del espacio y tu colonia? Con eso te paso un rango de precio." },
      { rol: "cliente", texto: "[envía foto] En Tonalá." },
      { rol: "agente", texto: "Listo. Un asesor te confirma precio y disponibilidad hoy mismo." },
    ],
    ticket: { min: 20000, max: 80000 },
    roiNota: "Un par de portones al año pagan el sistema completo.",
    faqs: [
      {
        q: "¿Sirve para portones, canceles y herrería en general?",
        a: "Sí. El asistente se adapta a tus productos (portones, canceles, aluminio, herrería) y hace las preguntas correctas para cada uno.",
      },
      {
        q: "¿Puede juntar medidas y fotos?",
        a: "Sí. Pide medidas del acceso, tipo de producto y fotos, así te llega el lead listo para cotizar.",
      },
    ],
    waMensaje:
      "Hola Yovany, tengo un negocio de portones y canceles y quiero saber más del Sistema de Clientes.",
    seo: {
      title: "Sistema de Clientes para negocios de portones y canceles en Guadalajara",
      description:
        "Sitio web + asistente de WhatsApp con IA + Google Maps para negocios de portones eléctricos, canceles y aluminio en Guadalajara. Contesta 24/7 y no pierdas ni una cotización.",
      keywords: [
        "sistema de clientes portones eléctricos Guadalajara",
        "página web canceles de aluminio GDL",
        "WhatsApp automático portones",
        "leads de herrería Guadalajara",
      ],
    },
  },

  // ───────────────── DEFINIDOS, AÚN SIN PUBLICAR (Tier 1/2) ─────────────────
  {
    slug: "clinicas-dentales",
    published: false,
    tier: 1,
    giro: "clínica dental",
    hero: {
      h1: "Tu clínica dental con la agenda llena y WhatsApp contestado 24/7.",
      sub: "Sitio web profesional + asistente de WhatsApp con inteligencia artificial + Google Maps optimizado. Tu asistente califica el tratamiento, agenda la valoración y responde en español e inglés.",
    },
    dolores: [
      "Los pacientes preguntan por WhatsApp a cualquier hora y, si no contestas, agendan en otra clínica.",
      "Agendar valoraciones y reagendar consume medio día de tu recepción.",
      "Pacientes de Estados Unidos y Canadá te buscan, pero no contestas en inglés a tiempo.",
    ],
    conversacion: [
      { rol: "cliente", texto: "Hi, how much for dental implants?" },
      { rol: "agente", texto: "Hi! Happy to help. Are you looking at a single implant or full-arch (All-on-X)? And do you have a recent X-ray or photo?" },
      { rol: "cliente", texto: "Just one implant for now." },
      { rol: "agente", texto: "Perfect. I can book you a free valuation. What dates work for you this week?" },
    ],
    ticket: { min: 24000, max: 600000 },
    roiNota: "Un solo tratamiento de implantes paga el sistema de todo el año.",
    faqs: [
      {
        q: "¿El asistente responde en inglés a pacientes extranjeros?",
        a: "Sí. Atiende en español e inglés, califica el tratamiento y agenda la valoración sin que tu recepción tenga que estar pendiente del teléfono.",
      },
    ],
    waMensaje:
      "Hola Yovany, tengo una clínica dental y quiero saber más del Sistema de Clientes.",
    seo: {
      title: "Sistema de Clientes para clínicas dentales en Guadalajara",
      description:
        "Sitio web + asistente de WhatsApp con IA + Google Maps para clínicas dentales. Califica tratamientos, agenda valoraciones y responde en español e inglés 24/7.",
      keywords: [
        "sistema de clientes clínica dental Guadalajara",
        "página web dentista GDL",
        "WhatsApp automático clínica dental",
        "turismo dental Guadalajara",
      ],
    },
  },
  {
    slug: "abogados",
    published: false,
    tier: 1,
    giro: "despacho de abogados",
    hero: {
      h1: "Tu despacho filtrando y agendando casos por WhatsApp 24/7.",
      sub: "Sitio web profesional + asistente de WhatsApp con inteligencia artificial + Google Maps optimizado. Tu asistente filtra la materia, la etapa y la urgencia del caso antes de que pierdas tiempo en una llamada.",
    },
    dolores: [
      "Pagas los clics más caros de Google y aun así pierdes leads por no contestar a tiempo.",
      "Gastas horas en consultas que no son de tu materia o que nunca iban a contratar.",
      "Los casos urgentes llegan de noche y fin de semana, justo cuando nadie contesta.",
    ],
    conversacion: [
      { rol: "cliente", texto: "Hola, me despidieron y quiero demandar." },
      { rol: "agente", texto: "Lamento la situación, te puedo orientar. ¿Te liquidaron o te dieron de baja sin nada? ¿Hace cuánto fue?" },
      { rol: "cliente", texto: "Sin nada, hace una semana." },
      { rol: "agente", texto: "Entiendo, es materia laboral y estás en tiempo. ¿Te agendo una consulta con el abogado esta semana?" },
    ],
    ticket: { min: 15000, max: 250000 },
    roiNota: "Un solo caso ganado paga el sistema de varios años.",
    faqs: [
      {
        q: "¿El asistente filtra por materia y urgencia?",
        a: "Sí. Identifica si es laboral, penal, familiar o mercantil, en qué etapa va el caso y qué tan urgente es — así solo atiendes consultas que valen la pena.",
      },
    ],
    waMensaje:
      "Hola Yovany, tengo un despacho de abogados y quiero saber más del Sistema de Clientes.",
    seo: {
      title: "Sistema de Clientes para despachos de abogados en Guadalajara",
      description:
        "Sitio web + asistente de WhatsApp con IA + Google Maps para despachos jurídicos. Filtra materia, etapa y urgencia del caso, y agenda consultas 24/7.",
      keywords: [
        "sistema de clientes abogados Guadalajara",
        "página web despacho jurídico GDL",
        "WhatsApp automático abogados",
        "leads para abogados Guadalajara",
      ],
    },
  },
  {
    slug: "remodelaciones",
    published: false,
    tier: 1,
    giro: "remodelaciones y cocinas integrales",
    hero: {
      h1: "Tu negocio de remodelaciones contestando WhatsApp 24/7, con medio levantamiento ya hecho.",
      sub: "Sitio web profesional + asistente de WhatsApp con inteligencia artificial + Google Maps optimizado. Tu asistente pide medidas, fotos y presupuesto objetivo, y te entrega el lead casi cotizado.",
    },
    dolores: [
      "Cada cotización pide medidas, fotos y presupuesto; juntarlo por chat se vuelve un caos.",
      "Te escriben muchos curiosos sin presupuesto y se te va el tiempo en los que no van a contratar.",
      "El cliente premium decide por quien se ve más profesional y le responde primero.",
    ],
    conversacion: [
      { rol: "cliente", texto: "Hola, quiero remodelar mi cocina." },
      { rol: "agente", texto: "¡Excelente! Para darte una idea de inversión, ¿me compartes el largo aproximado de la cocina y unas fotos del espacio actual?" },
      { rol: "cliente", texto: "[envía fotos] Como 4 metros lineales." },
      { rol: "agente", texto: "Gracias. ¿Tienes un presupuesto objetivo en mente? Con eso te propongo opciones realistas y agendo una visita." },
    ],
    ticket: { min: 30000, max: 300000 },
    roiNota: "Una sola cocina integral paga el sistema de todo el año.",
    faqs: [
      {
        q: "¿El asistente junta medidas, fotos y presupuesto?",
        a: "Sí. Pide las medidas, fotos del espacio y el presupuesto objetivo del cliente, así te llega el lead con medio levantamiento hecho.",
      },
    ],
    waMensaje:
      "Hola Yovany, tengo un negocio de remodelaciones y quiero saber más del Sistema de Clientes.",
    seo: {
      title: "Sistema de Clientes para remodelaciones y cocinas integrales en Guadalajara",
      description:
        "Sitio web + asistente de WhatsApp con IA + Google Maps para remodelaciones y cocinas integrales. Junta medidas, fotos y presupuesto, y filtra a los clientes serios 24/7.",
      keywords: [
        "sistema de clientes remodelaciones Guadalajara",
        "página web cocinas integrales GDL",
        "WhatsApp automático remodelaciones",
        "leads de remodelación Guadalajara",
      ],
    },
  },
  {
    slug: "minisplits",
    published: false,
    tier: 2,
    giro: "aires acondicionados (minisplits)",
    hero: {
      h1: "Tu negocio de minisplits contestando WhatsApp 24/7, sobre todo en temporada de calor.",
      sub: "Sitio web profesional + asistente de WhatsApp con inteligencia artificial + Google Maps optimizado. Tu asistente cotiza instalación, agenda mantenimientos y reactiva a tus clientes de cada año.",
    },
    dolores: [
      "Llega el calor y se te juntan las solicitudes; las que no contestas se van con la competencia.",
      "Pierdes los contratos de mantenimiento recurrente porque no das seguimiento.",
      "No apareces en Google cuando buscan “instalación de minisplit” en tu zona.",
    ],
    conversacion: [
      { rol: "cliente", texto: "Hola, ¿cuánto cobran por instalar un minisplit?" },
      { rol: "agente", texto: "¡Con gusto! ¿De cuántas toneladas o BTU lo necesitas, y ya tienes el equipo o lo incluyes en la cotización?" },
      { rol: "cliente", texto: "De 1.5 toneladas, lo incluyen ustedes." },
      { rol: "agente", texto: "Perfecto. ¿En qué colonia es y a qué altura va? Con eso te paso el precio de equipo + instalación y agendo." },
    ],
    ticket: { min: 7000, max: 45000 },
    roiNota: "Unas cuantas instalaciones en temporada pagan el sistema del año.",
    faqs: [
      {
        q: "¿Puede agendar mantenimientos recurrentes?",
        a: "Sí. Además de cotizar instalaciones, el asistente puede recordar y agendar los mantenimientos, que es donde está el ingreso recurrente.",
      },
    ],
    waMensaje:
      "Hola Yovany, tengo un negocio de minisplits y quiero saber más del Sistema de Clientes.",
    seo: {
      title: "Sistema de Clientes para negocios de minisplits en Guadalajara",
      description:
        "Sitio web + asistente de WhatsApp con IA + Google Maps para instalación y mantenimiento de minisplits. Cotiza, agenda y reactiva clientes 24/7.",
      keywords: [
        "sistema de clientes minisplits Guadalajara",
        "página web aire acondicionado GDL",
        "WhatsApp automático minisplits",
        "leads de instalación de aires Guadalajara",
      ],
    },
  },
  {
    slug: "clinicas-esteticas",
    published: false,
    tier: 2,
    giro: "clínica estética",
    hero: {
      h1: "Tu clínica estética con la agenda llena y WhatsApp contestado 24/7.",
      sub: "Sitio web profesional + asistente de WhatsApp con inteligencia artificial + Google Maps optimizado. Tu asistente califica el tratamiento, resuelve dudas y agenda la valoración sin que pierdas un solo mensaje.",
    },
    dolores: [
      "Las pacientes preguntan por WhatsApp a toda hora y, si no contestas, agendan en otra clínica.",
      "Agendar y reagendar valoraciones consume el tiempo de tu recepción.",
      "Inviertes en redes sociales, pero los mensajes llegan más rápido de lo que alcanzas a contestar.",
    ],
    conversacion: [
      { rol: "cliente", texto: "Hola, ¿cuánto cuesta un tratamiento facial?" },
      { rol: "agente", texto: "¡Hola! Con gusto. ¿Buscas algo para manchas, líneas de expresión o limpieza profunda? Así te oriento mejor." },
      { rol: "cliente", texto: "Para manchas." },
      { rol: "agente", texto: "Perfecto. Te agendo una valoración gratis para definir el tratamiento ideal. ¿Qué día te queda esta semana?" },
    ],
    ticket: { min: 5000, max: 80000 },
    roiNota: "Unos cuantos tratamientos al mes pagan el sistema de sobra.",
    faqs: [
      {
        q: "¿El asistente califica el tratamiento y agenda la valoración?",
        a: "Sí. Identifica qué busca la paciente, resuelve dudas básicas y agenda la valoración, igual que en una clínica dental.",
      },
    ],
    waMensaje:
      "Hola Yovany, tengo una clínica estética y quiero saber más del Sistema de Clientes.",
    seo: {
      title: "Sistema de Clientes para clínicas estéticas en Guadalajara",
      description:
        "Sitio web + asistente de WhatsApp con IA + Google Maps para clínicas estéticas. Califica tratamientos, resuelve dudas y agenda valoraciones 24/7.",
      keywords: [
        "sistema de clientes clínica estética Guadalajara",
        "página web medicina estética GDL",
        "WhatsApp automático clínica estética",
        "leads para clínicas estéticas Guadalajara",
      ],
    },
  },
];

export const publishedVerticales = (): Vertical[] =>
  VERTICALES.filter((v) => v.published);

export const getVertical = (slug: string): Vertical | undefined =>
  VERTICALES.find((v) => v.slug === slug && v.published);
