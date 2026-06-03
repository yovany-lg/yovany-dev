/**
 * All site copy + structured content in one place.
 * Copy is production-ready per the build spec; research-driven additions
 * (FAQ, risk-reversal, urgency, guarantee) are folded in.
 *
 * `pending: true` marks a value awaiting confirmation from Yovany — the UI
 * hides anything still bracketed so no placeholder leaks to production.
 */

export const hero = {
  kicker: "Production AI — not prototypes",
  headline: "Ship AI features your users actually trust.",
  subhead:
    "I'm Yovany — a senior engineer who's put production AI into an enterprise platform serving premium clients. I help SaaS teams turn AI prototypes into reliable, shipped product.",
  microProof: "8+ years · Immunefi · Thrive Market · Remote from México",
  riskReversal: "Free, 20 minutes, no sales pitch — just a straight read on your AI.",
} as const;

export const positioning =
  "I help SaaS and funded startups ship production-grade AI features and automations — not demos that break in production.";

export const trustedBy: { name: string; logo?: string }[] = [
  { name: "Immunefi" },
  { name: "Thrive Market" },
  { name: "Luxoft" },
  { name: "BridgeDoc" },
  { name: "Encargogo" },
];

export const problem = {
  heading: "Your AI demo impressed everyone. Then it met real data.",
  body: "Most AI features look great in a demo and fall apart in production — hallucinated answers, brittle pipelines, no observability, and edge cases nobody planned for. Shipping AI that's actually reliable takes senior engineering judgment, not just a clever prompt.",
  symptoms: [
    "A prototype that works on 10 documents but not 10,000.",
    "No visibility into why the model gives the answers it does.",
    'Features stuck at "almost production-ready" for months.',
  ],
} as const;

/** Hard numbers only — no invented metrics. Kept tight so the proof reads
 *  as outcomes, not an employment history. The AI-agent work (new focus)
 *  is carried by the highlight panel + case studies below. */
export const metrics: { value: string; context: string }[] = [
  { value: "99.5%", context: "accuracy on an AI-driven migration of 400 programs" },
  { value: "−35%", context: "support response time via an AI support system" },
  { value: "50%", context: "reduction in Time-to-Interactive & Total Blocking Time" },
  { value: "+40%", context: "Core Web Vitals improvement, lifting conversion" },
];

/** New-work highlight that fills the proof grid and shifts focus to the
 *  AI agents currently being built. */
export const aiAgentsHighlight = {
  kicker: "AI agents · what I build now",
  text: "Production AI agents end-to-end: a document-intelligence RAG agent at BridgeDoc, AI-assisted data agents at Encargogo, and WhatsApp AI agents now in build at Citania.",
  linkLabel: "citania.mx",
  href: "https://citania.mx",
} as const;

export const services: {
  name: string;
  outcome: string;
  body: string;
  badge?: string;
}[] = [
  {
    name: "AI Feature Sprint",
    outcome: "From prototype to production in ~4 weeks.",
    body: "I build and own the feature end-to-end — RAG pipelines, agents, and AI workflows with evals, guardrails, and observability so they hold up with real users and real data.",
  },
  {
    name: "Fractional Senior Engineer",
    outcome: "End-to-end ownership for early-stage teams.",
    body: "Embedded senior/lead engineering: database, frontend, backend, and deployment — shipping features, not tickets.",
  },
  {
    name: "AI Architecture Review",
    outcome: "A clear, prioritized path to production-grade.",
    body: "I get into your codebase and AI pipeline, then deliver a written diagnostic: where reliability, cost, and failure modes will bite, and a prioritized, concrete plan to fix them — so you know exactly what to do next.",
    badge: "Fixed scope · written deliverable",
  },
];

export const caseStudies: {
  slug: string;
  client: string;
  tagline: string;
  problem: string;
  action: string;
  result: string;
  featured?: boolean;
  status?: string;
  url?: string;
  stats?: { value: string; label: string }[];
}[] = [
  {
    slug: "sendero-home",
    client: "Sendero Home",
    tagline: "IoT access control & surveillance for condominiums",
    featured: true,
    status: "Live in production",
    url: "https://www.senderohome.pro",
    stats: [
      { value: "3", label: "condominiums live" },
      { value: "200+", label: "active residents" },
      { value: "6", label: "cameras streaming" },
    ],
    problem:
      "Condominiums run security and operations on spreadsheets, WhatsApp, and legacy desktop software — no resident app, no real hardware integration, and clunky access control nobody trusts.",
    action:
      "Designed and own the platform end-to-end: a multi-tenant Next.js + Hono dashboard and API (PostgreSQL/Prisma, Supabase auth), an Expo/React Native resident app, and the hardware layer — ESP32/ESPHome gate controllers driven in real time through AWS IoT Core (MQTT + device shadows) with per-device mutual-TLS provisioning. Live entrance video streams from on-site cameras via go2rtc (RTSP→HLS) over Cloudflare Tunnel, secured with HMAC-signed URLs validated by a Cloudflare Worker and played natively in the app.",
    result:
      "In production across 3 condominiums with 200+ residents opening gates from their phones daily, area-based access permissions, and live camera check-ins at the entrance.",
  },
  {
    slug: "citania",
    client: "Citania",
    tagline: "AI agents for WhatsApp",
    featured: true,
    status: "Building now",
    url: "https://citania.mx",
    problem:
      "Businesses live in WhatsApp, but their support, sales, and follow-up are still manual — slow replies, leads going cold, and no way to scale conversations.",
    action:
      "Building Citania: conversational AI agents that work natively inside WhatsApp. They hold real conversations, answer from a business's own knowledge, qualify and route leads, and trigger backend workflows — with guardrails and human-handoff so they stay reliable on real customer traffic.",
    result:
      "A WhatsApp-native AI agent platform that turns the channel customers already use into an automated, always-on front line.",
  },
  {
    slug: "bridgedoc",
    client: "BridgeDoc",
    tagline: "A document-intelligence AI agent for US construction firms",
    problem:
      "Teams buried in hundreds of project documents, with no fast way to find answers.",
    action:
      "Owned the platform end-to-end (DB, frontend, deploy to Vercel + a custom VPS pipeline) and built a Retrieval-Augmented Generation (RAG) agent: a conversational assistant that retrieves across hundreds of documents and answers with grounded, cited responses — plus the chunking, embedding, and retrieval tuning that keep those answers accurate at scale.",
    result:
      "Users ask questions in plain language and get instant, source-grounded answers instead of manually searching hundreds of documents.",
  },
  {
    slug: "encargogo",
    client: "Encargogo",
    tagline: "AI-assisted data agents + e-commerce stabilization",
    problem:
      "An e-commerce platform with reliability and search-performance issues, limited visibility into user behavior, and no scalable way to keep product data fresh.",
    action:
      "Owned development and stabilization; introduced observability and analytics; optimized Meilisearch and re-tuned the MongoDB schema/indexing; and built AI-assisted scraping agents that aggregate and normalize product data across Amazon, eBay, and Shopify.",
    result:
      "A more reliable platform with faster search, optimized conversion flows, and product data kept current by automated agents instead of manual entry.",
  },
];

/** Strongly recommended once available; the block hides itself while empty. */
export const testimonials: {
  quote: string;
  name: string;
  title: string;
  pending?: boolean;
}[] = [];

export const about = {
  paragraphs: [
    "I'm Yovany Luis, a senior software engineer based in Jalisco, México, with 8+ years building and owning mission-critical platforms — from Web3 security infrastructure at Immunefi to high-traffic e-commerce at Thrive Market. I work independently with SaaS and startup teams who need someone who can own delivery end-to-end and ship AI that survives contact with production.",
    "As a father of two, I value efficiency and quality in equal measure — every solution I build is meant to be scalable, reliable, and maintainable long after I'm gone.",
  ],
} as const;

/** Objection-busting FAQ — research add (Jonathan Stark structure). */
export const faqs: { q: string; a: string }[] = [
  {
    q: "How is this different from hiring an AI freelancer off a marketplace?",
    a: "Most “AI freelancers” are prompt jockeys — they wire up a demo and disappear. I'm a senior engineer who has shipped production AI inside an enterprise platform and owns full delivery: database, backend, frontend, and deploy. You get evals, guardrails, and observability, not a clever prompt that breaks on real data.",
  },
  {
    q: "What does the free fit call actually cover?",
    a: "20 minutes to understand your AI feature, where it's stuck, and whether I'm the right person to help. You'll leave with a straight read on your biggest reliability risk — whether or not we work together. No slides, no pressure.",
  },
  {
    q: "Do you only do AI work?",
    a: "AI is the focus, but I own delivery end-to-end. If shipping your AI feature means fixing the data layer, the pipeline, the frontend, or the deploy, that's included — I ship features, not tickets.",
  },
  {
    q: "What size teams do you work with?",
    a: "SaaS companies and funded startups — typically seed to Series B — that need production-grade AI shipped reliably without hiring a full in-house AI team. US-first, LATAM-friendly, fully remote from México.",
  },
  {
    q: "How do you price engagements?",
    a: "Fixed scope, not hourly. The Architecture Review is a flat fee with a money-back guarantee; sprints and fractional work are scoped on the fit call so you know exactly what you're paying for and what you'll get.",
  },
];

export const finalCta = {
  heading: "Let's make your AI features production-ready.",
  subhead:
    "I take a small number of new clients each month so every engagement gets senior attention. If your AI needs to be reliable, let's talk.",
  urgency: "Currently booking · limited engagements per month",
  leadMagnetIntro: "Not ready to talk? Grab the free guide:",
  leadMagnetTitle: "5 Reasons AI Features Fail in Production (and how to fix them)",
  privacy: "No spam. Unsubscribe anytime.",
} as const;

export const callPage = {
  heading: "Book a free 20-minute fit call",
  intro:
    "A short, no-pressure conversation to see whether I'm the right person to get your AI feature production-ready.",
  expect: [
    "You walk me through your AI feature and where it's stuck.",
    "I give you a straight read on your biggest reliability risk — on the call, free.",
    "If it's a fit, we scope next steps. If it's not, I'll point you in the right direction.",
  ],
  promise: "No slides. No sales pitch. Just senior engineering judgment.",
} as const;
