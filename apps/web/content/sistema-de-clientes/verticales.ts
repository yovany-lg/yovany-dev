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

/** Resumen estructurado que el agente le entrega al dueño — el diferenciador. */
export type Resumen = {
  servicio: string;
  lineas: { label: string; value: string }[];
};

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
  /** Resumen que recibe el dueño; si falta, se usa uno genérico. */
  resumen?: Resumen;
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
      h1: "Tu empresa de paneles solares contestando WhatsApp al instante. Aunque andes en un techo.",
      sub: "Un agente de inteligencia artificial que contesta por ti mientras estás en una instalación, pide el recibo de CFE, pre-dimensiona el sistema y te entrega el cliente ya calificado. ¿Quieres sitio web? Va como add-on.",
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
    resumen: {
      servicio: "Cotización de paneles solares (residencial)",
      lineas: [
        { label: "Nombre", value: "Laura Méndez" },
        { label: "Consumo", value: "Bimestral, tarifa DAC" },
        { label: "Inmueble", value: "Casa propia" },
        { label: "Zona", value: "Zapopan" },
        { label: "Recibo CFE", value: "1 foto adjunta" },
        { label: "WhatsApp", value: "33 1234 5678" },
        { label: "Recibido", value: "9:15 pm" },
      ],
    },
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
      "Hola Yovany, tengo una empresa de paneles solares y quiero saber más del agente de WhatsApp.",
    seo: {
      title: "Agente de WhatsApp con IA para empresas de paneles solares en Guadalajara",
      description:
        "Un agente de WhatsApp que contesta 24/7, pide el recibo de CFE, pre-dimensiona el sistema y te entrega el cliente ya calificado. Para instaladores de paneles solares en Guadalajara.",
      keywords: [
        "agente de WhatsApp paneles solares Guadalajara",
        "chatbot WhatsApp energía solar GDL",
        "cotizar paneles solares por WhatsApp",
        "automatizar WhatsApp instaladores solares",
      ],
    },
  },
  {
    slug: "impermeabilizacion",
    published: true,
    tier: 2,
    giro: "impermeabilización y pintura",
    hero: {
      h1: "Tu negocio de impermeabilización y pintura contestando WhatsApp al instante. Aunque sean las 10 de la noche.",
      sub: "Un agente de inteligencia artificial que contesta por ti en plena temporada de lluvias, califica al cliente, pide fotos del área y te pasa el prospecto listo para cotizar. ¿Quieres sitio web? Va como add-on.",
    },
    dolores: [
      "Llega el temporal y se te juntan los “se me está metiendo agua” que no alcanzas a contestar — y se van con quien sí responde.",
      "Una filtración no espera a horario de oficina: el que contesta a las 10 de la noche un domingo se lleva el trabajo.",
      "En tus reseñas la gente pide “un número para cotizar” y nadie contesta: demanda que se te escapa.",
    ],
    conversacion: [
      { rol: "cliente", texto: "Buenas, ¿hacen impermeabilización de azotea? Se me está metiendo agua." },
      { rol: "agente", texto: "¡Hola! 👋 Gracias por escribir. Soy el asistente y le ayudo a cotizar rapidito. ¿Busca impermeabilización, pintura, o las dos?" },
      { rol: "cliente", texto: "Impermeabilización." },
      { rol: "agente", texto: "¿Tiene filtraciones ahorita o es más preventivo? ¿Y cuántos metros cuadrados son, más o menos?" },
      { rol: "cliente", texto: "Filtración activa, como 80 metros, casa de un piso." },
      { rol: "agente", texto: "Entendido. ¿Me manda 1 o 2 fotos del área? 📷 Con eso le damos un precio mucho más exacto. ¿En qué colonia está?" },
      { rol: "cliente", texto: "[envía fotos] En Providencia." },
      { rol: "agente", texto: "¿Para cuándo lo necesita, urgente o cotizando con calma? ¿Y a nombre de quién preparo la cotización?" },
      { rol: "cliente", texto: "Urgente, me entra agua. Juan Pérez." },
      { rol: "agente", texto: "¡Listo, Juan! Ya tengo todo. El equipo le manda su cotización hoy mismo; con sus fotos le dan un número bien preciso. 🙌" },
    ],
    resumen: {
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
    },
    ticket: { min: 4000, max: 50000 },
    roiNota: "Recuperar un solo cliente perdido en temporada de lluvias ya paga el sistema.",
    faqs: [
      {
        q: "¿El agente atiende impermeabilización y pintura?",
        a: "Sí. Maneja las dos ramas y, si el cliente pide ambas, junta todo en un solo resumen para que cotices de una vez.",
      },
      {
        q: "¿De verdad pide fotos del área?",
        a: "Sí, siempre. Es el diferenciador: con una foto de la azotea o los muros cotizas casi sin ir a la visita.",
      },
      {
        q: "¿Le da precios al cliente?",
        a: "Tú decides. Por default junta medidas y fotos y tú cotizas (lo más justo). Si prefieres, configuramos un rango orientativo por m² y el agente lo comparte mientras sigue calificando.",
      },
    ],
    waMensaje:
      "Hola Yovany, tengo un negocio de impermeabilización y pintura y quiero saber más del agente de WhatsApp.",
    seo: {
      title: "Agente de WhatsApp con IA para impermeabilización y pintura en Guadalajara",
      description:
        "Un agente de WhatsApp que contesta 24/7 en temporada de lluvias, califica al cliente, pide fotos del área y te entrega el prospecto listo para cotizar. Para impermeabilizadores y pintores en Guadalajara.",
      keywords: [
        "agente de WhatsApp impermeabilización Guadalajara",
        "chatbot WhatsApp pintura GDL",
        "cotizar impermeabilización por WhatsApp",
        "WhatsApp automático impermeabilizantes Guadalajara",
        "agente IA para pintores Guadalajara",
      ],
    },
  },
  {
    slug: "portones-electricos",
    published: true,
    tier: 2,
    giro: "portones eléctricos y canceles",
    hero: {
      h1: "Tu negocio de portones y canceles contestando WhatsApp al instante. Aunque estés en una instalación.",
      sub: "Un agente de inteligencia artificial que contesta por ti, junta medidas y fotos, califica al cliente y te lo entrega listo para cotizar. ¿Quieres sitio web? Va como add-on.",
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
    resumen: {
      servicio: "Portón eléctrico corredizo (4 m)",
      lineas: [
        { label: "Nombre", value: "Carlos Ruiz" },
        { label: "Producto", value: "Portón corredizo" },
        { label: "Medida", value: "~4 m de ancho" },
        { label: "Zona", value: "Tonalá" },
        { label: "Fotos", value: "1 adjunta" },
        { label: "WhatsApp", value: "33 1234 5678" },
        { label: "Recibido", value: "8:30 pm" },
      ],
    },
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
      "Hola Yovany, tengo un negocio de portones y canceles y quiero saber más del agente de WhatsApp.",
    seo: {
      title: "Agente de WhatsApp con IA para negocios de portones y canceles en Guadalajara",
      description:
        "Un agente de WhatsApp que contesta 24/7, junta medidas y fotos, y te entrega el cliente listo para cotizar. Para negocios de portones eléctricos, canceles y aluminio en Guadalajara.",
      keywords: [
        "agente de WhatsApp portones eléctricos Guadalajara",
        "chatbot WhatsApp canceles de aluminio GDL",
        "cotizar portones por WhatsApp",
        "automatizar WhatsApp herrería Guadalajara",
      ],
    },
  },

  // ───────────────── DEFINIDOS, AÚN SIN PUBLICAR (Tier 1/2) ─────────────────
  {
    slug: "clinicas-dentales",
    published: true,
    tier: 1,
    giro: "clínica dental",
    hero: {
      h1: "Tu clínica dental con la agenda llena y WhatsApp contestado al instante, 24/7.",
      sub: "Un agente de inteligencia artificial que califica el tratamiento, agenda la valoración y responde en español e inglés — sin que tu recepción viva pegada al teléfono. ¿Quieres sitio web? Va como add-on.",
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
    resumen: {
      servicio: "Valoración — implante dental (1 pieza)",
      lineas: [
        { label: "Nombre", value: "Sarah Johnson" },
        { label: "Tratamiento", value: "Implante (1 pieza)" },
        { label: "Idioma", value: "Inglés (paciente de EE. UU.)" },
        { label: "Agenda", value: "Valoración esta semana" },
        { label: "WhatsApp", value: "+1 555 123 4567" },
        { label: "Recibido", value: "11:05 pm" },
      ],
    },
    ticket: { min: 24000, max: 600000 },
    roiNota: "Un solo tratamiento de implantes paga el sistema de todo el año.",
    faqs: [
      {
        q: "¿El asistente responde en inglés a pacientes extranjeros?",
        a: "Sí. Atiende en español e inglés, califica el tratamiento y agenda la valoración sin que tu recepción tenga que estar pendiente del teléfono.",
      },
    ],
    waMensaje:
      "Hola Yovany, tengo una clínica dental y quiero saber más del agente de WhatsApp.",
    seo: {
      title: "Agente de WhatsApp con IA para clínicas dentales en Guadalajara",
      description:
        "Un agente de WhatsApp que califica el tratamiento, agenda valoraciones y responde en español e inglés 24/7. Para clínicas dentales en Guadalajara y turismo dental.",
      keywords: [
        "agente de WhatsApp clínica dental Guadalajara",
        "chatbot WhatsApp dentista GDL",
        "agendar citas dentales por WhatsApp",
        "turismo dental Guadalajara WhatsApp",
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
