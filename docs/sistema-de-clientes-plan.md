# Plan de implementación — Sistema de Clientes (subárbol en español)

> Plan técnico file-by-file para construir `/sistema-de-clientes/*` sobre el codebase actual
> de yovany.dev (Next.js 16.2, React 19, Tailwind v4, App Router). Deriva de `docs/clientes.md`.
> **Decisiones tomadas:** (1) subárbol en español únicamente — el sitio AI en inglés no se toca;
> (2) URLs sin prefijo de locale: `/sistema-de-clientes/[vertical]`; (3) este plan se aprueba antes de codear.

---

## 0. Principios de arquitectura

- **Aislamiento total del sitio en inglés.** Cero cambios en `app/page.tsx`, `app/call`, `lib/content.ts`,
  `lib/site.ts` salvo añadir *nuevas* exportaciones. La navegación principal NO enlaza al subárbol.
- **Server Components por defecto.** Las páginas de vertical son estáticas (SSG). Solo 3 islas cliente:
  botón de WhatsApp (tracking), calculadora ROI, acordeón FAQ. Objetivo Lighthouse móvil ≥ 90.
- **Patrón de diccionario tipado**, igual que `lib/content.ts`. Sin `next-intl`, sin dependencias nuevas.
- **`<html lang>` se queda en `"en"`** (root layout intacto). El subárbol declara su idioma con
  `lang="es-MX"` en el wrapper + `og:locale: "es_MX"` + `content-language` por página. SEO-correcto:
  Google usa contenido on-page + hreflang antes que `html lang`.

---

## 1. Datos: `apps/web/content/sistema-de-clientes/verticales.ts`

Fuente única de verdad del contenido por vertical. Nuevo vertical = nuevo objeto (no página).

```ts
export type Vertical = {
  slug: string;                 // "paneles-solares"
  published: boolean;           // generateStaticParams filtra por esto
  giro: string;                 // "paneles solares"
  tier: 1 | 2;
  hero: { h1: string; sub: string };
  dolores: [string, string, string];           // 3 dolores del giro (§4.2)
  conversacion: { mensaje: string; rol: "cliente" | "agente" }[]; // ejemplo del agente
  ticket: { min: number; max: number; unidad: "MXN" }; // para ROI
  roiNota: string;              // "Un solo trabajo paga el sistema del año"
  seo: { title: string; description: string; keywords: string[] };
  faqs: { q: string; a: string }[];            // 1–2 propias del giro (se suman a las del hub)
  waMensaje: string;            // mensaje precargado wa.me con el vertical incluido
};

export const VERTICALES: Vertical[] = [ /* 8 objetos, 3 con published:true */ ];

// Helpers
export const publishedVerticales = () => VERTICALES.filter(v => v.published);
export const getVertical = (slug: string) => VERTICALES.find(v => v.slug === slug && v.published);
```

**Publicados al lanzar:** `impermeabilizacion`, `portones-electricos`, `paneles-solares`.
**Definidos pero `published:false`:** `clinicas-dentales`, `abogados`, `remodelaciones`, `minisplits`, `clinicas-esteticas`.

Copy del hub (genérico) vive aparte en `apps/web/content/sistema-de-clientes/hub.ts` con la misma forma
de secciones, para que el template renderice hub y vertical con la misma estructura.

---

## 2. Identidad / config: añadir a `apps/web/lib/site.ts`

Nuevas exportaciones (no se toca `SITE`). Mismo patrón de fallback graceful que ya usa el archivo.

```ts
export const SC = {
  waNumber: process.env.NEXT_PUBLIC_SC_WHATSAPP ?? "",          // número de ventas de Yovany (52...)
  bookingUrl: process.env.NEXT_PUBLIC_SC_BOOKING_URL ?? "",     // Cal.com event "Diagnóstico 15 min"
  areaServed: ["Guadalajara", "Zapopan", "Tlaquepaque", "Tonalá", "Tlajomulco"],
  setupDesde: 18000, mensualidadDesde: 2500,                    // MXN, para sección Precio
};
export const SC_WHATSAPP_CONFIGURED = Boolean(SC.waNumber);
export const SC_BOOKING_CONFIGURED = Boolean(SC.bookingUrl);
```

`waLink(vertical?)` helper: construye `https://wa.me/<num>?text=<encodeURIComponent(mensaje)>`.
Si `!SC_WHATSAPP_CONFIGURED`, el botón degrada a mostrar email (mismo patrón que `/call`).

**Envs nuevas** (registrar en `turbo.json > globalEnv` para que el cache invalide):
`NEXT_PUBLIC_SC_WHATSAPP`, `NEXT_PUBLIC_SC_BOOKING_URL`. Documentar en `.env.example`.

---

## 3. Rutas (App Router)

```
app/sistema-de-clientes/
  layout.tsx                      # wrapper lang="es-MX", metadata base es, JSON-LD Service del hub
  page.tsx                        # HUB — lee hub.ts, renderiza <SistemaTemplate variant="hub">
  opengraph-image.tsx             # OG del hub vía next/og
  [vertical]/
    page.tsx                      # generateStaticParams = publishedVerticales().map(slug)
                                  # generateMetadata por vertical (title/desc/keywords es)
                                  # notFound() si getVertical() es undefined
    opengraph-image.tsx           # OG dinámico con nombre del giro (params: Promise<{vertical}>)
```

- `params` es `Promise` en Next 16 → `const { vertical } = await params`.
- `layout.tsx` del subárbol envuelve en `<div lang="es-MX">` y monta el botón flotante sticky de WhatsApp
  + el `<StickyWhatsApp>` solo en móvil. La `metadata` aquí fija `openGraph.locale: "es_MX"`.
- **Sin** `dynamicParams` extra: por defecto un slug no-publicado da 404 (deseado).

---

## 4. Componentes nuevos: `apps/web/app/sistema-de-clientes/_components/`

| Componente | Tipo | Función |
|---|---|---|
| `SistemaTemplate.tsx` | Server | Orquesta las 9 secciones (§5.2). Recibe `data` (hub o vertical) + `variant`. |
| `ScHero.tsx` | Server | H1 + sub + CTA WhatsApp (primario) + CTA Cal.com (secundario). |
| `ScProblema.tsx` | Server | 3 dolores (del vertical o genéricos). |
| `ScComoFunciona.tsx` | Server | 3 pasos; en vertical muestra `conversacion` del agente. |
| `ScIncluye.tsx` | Server | Paquete base redactado a cliente final. |
| `ScRoiCalc.tsx` | **Client** | Input: ticket promedio → output: trabajos/año para recuperar. Sin backend. Emite `sc_calculator_used`. |
| `ScPorQue.tsx` | Server | "Soy ingeniero, no agencia que subcontrata". |
| `ScPrecio.tsx` | Server | Desde $18,000 + desde $2,500/mes + comparativa. |
| `ScFaq.tsx` | **Client** | Acordeón. FAQs del hub + del vertical. Emite `sc_faq_open`. |
| `ScCtaFinal.tsx` | Server | WhatsApp + Cal.com. |
| `ScWhatsAppButton.tsx` | **Client** | Botón reutilizable; `track("sc_whatsapp_click", { vertical })`; degrada a email si no configurado. |
| `StickyWhatsApp.tsx` | **Client** | Flotante sticky en móvil (oculto en desktop). |
| `ScLeadForm.tsx` | **Client** | Fallback (nombre, giro, WhatsApp) → POST `/api/sistema-de-clientes`. Honeypot `company`. Valida tel MX (10 díg/+52). |

Reutiliza tokens Tailwind v4 existentes (`--color-accent` vermillion, `--color-base`, etc.). Tono más
cálido permitido vía utilidades, sin design system nuevo. Reutiliza `Reveal.tsx` para scroll-reveal.

---

## 5. API: `apps/web/app/api/sistema-de-clientes/route.ts`

Ruta **separada** de `/api/subscribe` (funnels distintos; no toca el bug de ConvertKit).

- POST, validación Zod: `{ nombre, giro, whatsapp, company? }`.
- Honeypot `company` lleno → `{ ok: true }` y no hace nada (mismo patrón que subscribe).
- Valida teléfono mexicano. Envía email a Yovany vía Resend (asunto: `Nuevo lead SC — <giro>`).
- **No-op graceful** si `RESEND_API_KEY` ausente (loggea, responde `ok:true`) — house style.
- Sin ConvertKit aquí (estos leads no van a newsletter).

---

## 6. SEO / metadata / discoverability

- **`generateMetadata`** por página: title/description en español mexicano, `openGraph.locale:"es_MX"`,
  `alternates.canonical` absoluto.
- **JSON-LD `Service`** por página (hub y verticales) con `areaServed: SC.areaServed`, `provider` = Yovany,
  `serviceType` por giro. Inyectado como `<script type="application/ld+json">` en el `page.tsx`.
- **OG dinámico** con `next/og` (`opengraph-image.tsx`), incluye el nombre del giro en verticales.
- **`app/sitemap.ts`**: añadir hub + `publishedVerticales()`. **NO** añadir a la navegación principal.
- **`app/robots.ts`**: sin cambios (allow-all ya cubre el subárbol).

---

## 7. Analytics (PostHog)

- Eventos (todos con propiedad `vertical`, `"hub"` en el hub):
  `sc_whatsapp_click`, `sc_cal_booking_click`, `sc_calculator_used`, `sc_faq_open`, `sc_lead_submit`.
- **Super-property `site: "sistema-de-clientes"`** seteada al montar el subárbol, para no contaminar
  las métricas del sitio AI. Se usa el helper `track()` existente en `lib/analytics.ts` (ya no-op si falta key).

---

## 8. Orden de construcción

1. Datos (`verticales.ts` + `hub.ts`) y config (`site.ts`, envs, `.env.example`, `turbo.json`).
2. `SistemaTemplate` + las 9 secciones + WhatsApp/sticky/FAQ/ROI/lead-form.
3. Rutas hub + `[vertical]` con `generateStaticParams`, `generateMetadata`, `notFound()`.
4. API lead route. JSON-LD. OG images. Sitemap. Eventos PostHog.
5. `pnpm lint && pnpm check-types`. Revisión Lighthouse móvil de las 3 páginas publicadas.

## 9. Fuera de alcance de esta fase

- Blog MDX (`/sistema-de-clientes/blog`) → Fase 2, tras el primer cliente cerrado (§4.4 del doc base).
- Traducción al inglés del subárbol; migración bilingüe del sitio AI.
- Dashboard/CRM de leads; cotizador; Google Ads (add-ons futuros).

## 10. Decisiones que necesito de ti antes de codear

1. **Número de WhatsApp de ventas** (el tuyo para la landing) y si ya tienes el **event type de Cal.com**
   "Diagnóstico Sistema de Clientes (15 min)" o lo dejo con fallback a email.
2. ¿Escribo yo el **copy en español** de los 3 verticales + hub (lo apruebas después), o me pasas borradores?
3. ¿OK con el **acento vermillion actual** para esta sección, o quieres un acento más cálido (p. ej. ámbar)?
