# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A conversion-focused lead-capture site for Yovany Luis (independent AI engineering consultancy). It is **not** a portfolio — every page decision serves one of two conversions, in priority order: (1) book a fit call, (2) capture an email via the lead-magnet PDF. The original build spec lives in `docs/improvements.md`.

## Commands

Run from the repo root (Turborepo orchestrates the single `web` app):

- `pnpm dev` — start the dev server (`web` on port 3000)
- `pnpm build` — production build
- `pnpm lint` — ESLint, fails on any warning (`--max-warnings 0`)
- `pnpm check-types` — `next typegen && tsc --noEmit` (run this after touching types/routes)
- `pnpm format` — Prettier over `**/*.{ts,tsx,md}`

Filter to one package with `pnpm dev --filter=web` (or `--filter=@repo/ui`). There is no test suite. `pnpm` is required (`packageManager: pnpm@9`).

## Structure

A Turborepo monorepo, but in practice it's **one Next.js app** plus shared config:

- `apps/web` — the entire site (Next.js 16 App Router, React 19, Tailwind v4). Despite the README (a stock create-turbo template), there is no `docs` app.
- `packages/ui` (`@repo/ui`) — stub shared component library, exported as raw `.tsx` via `./src/*`. Currently unused by `web`'s real UI.
- `packages/eslint-config` (`@repo/eslint-config`), `packages/typescript-config` (`@repo/typescript-config`) — shared configs consumed via `workspace:*`.

## Architecture & conventions

**All copy lives in `apps/web/lib/content.ts`.** Hero, services, case studies, FAQ, CTAs — every string is a typed `const` export there. The page components in `app/page.tsx` are presentational and read from these exports. To change site text, edit `content.ts`, not the components.

**`apps/web/lib/site.ts` is the single source of truth for identity + env-driven config** (URLs, social links, booking URL, lead-magnet path, portrait). Booking/provider values fall back to safe defaults when their env var is unset, and flags like `BOOKING_CONFIGURED` let the UI degrade gracefully (e.g. `/call` shows an email fallback instead of embedding a placeholder that 404s) rather than break.

**Graceful no-op on missing env is the house style for integrations.** `app/api/subscribe/route.ts` (Resend confirmation email + ConvertKit newsletter) and `lib/analytics.ts` (PostHog) all check for their keys and silently no-op (logging to console) when unconfigured, so dev and previews never error. Preserve this pattern when adding integrations — never throw because a key is absent.

The subscribe route also uses a hidden `company` honeypot field: a filled honeypot returns a fake success (`ok: true`) and does nothing.

**Env vars** are declared in `turbo.json`'s `globalEnv` (so the build cache busts on change): `NEXT_PUBLIC_BOOKING_URL`, `NEXT_PUBLIC_LEAD_MAGNET_URL`, `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`, `RESEND_API_KEY`, `RESEND_FROM`, `CONVERTKIT_API_KEY`, `CONVERTKIT_FORM_ID`. Add new vars there too. `.env*` is gitignored.

**SEO/metadata is centralized in `app/layout.tsx`** (Metadata API, JSON-LD `Person` + `ProfessionalService` graph) driven off `site.ts`. OG image, icons, sitemap, and robots use Next file conventions (`opengraph-image.tsx`, `icon.tsx`, `apple-icon.tsx`, `sitemap.ts`, `robots.ts`) — there are no static equivalents.

Fonts are loaded via `next/font` (Hanken Grotesk, Caveat from Google; Geist Sans/Mono local in `app/fonts/`) and exposed as CSS variables. Styling is Tailwind CSS v4 (PostCSS plugin, single `app/globals.css`).

## Agente de WhatsApp con IA (Spanish local-business subtree)

A **second, separate offering** lives under `app/sistema-de-clientes/*` (URL kept; brand reads "Agente de WhatsApp con IA"). The **WhatsApp AI agent is the product** — it answers 24/7, qualifies the lead, asks for photos, and hands the owner a ready-to-quote summary; a client **website is a paid add-on** (+$4k setup + $400/mo). It is **deliberately isolated** from the English AI consultancy site — different audience, different copy, **not linked from the main nav** (but in the sitemap). Strategy/spec: `docs/imper.md` (current, single-vertical launch) supersedes the bundle framing in `docs/clientes.md`; build plan: `docs/sistema-de-clientes-plan.md`.

- **Focus vertical:** only **impermeabilización + pintura** is `published` right now (rainy-season launch per `docs/imper.md`). Solar, portones, dental, etc. are defined but `published: false` until this one is validated.
- **Routes:** `/sistema-de-clientes` (hub, static) + `/sistema-de-clientes/[vertical]` (SSG via `generateStaticParams`, `dynamicParams = false` so unpublished/unknown slugs 404).
- **Content is data-driven** like the main site: `content/sistema-de-clientes/verticales.ts` (per-vertical objects with a `published` flag, a `conversacion` agent-flow example, and a `resumen` owner-payload) and `content/sistema-de-clientes/hub.ts` (shared copy + price anchors + the `SistemaContent` adapter both hub and verticals render through `_components/SistemaTemplate`).
- **Pricing/config** lives in `lib/site.ts` as the `SC` object (`setupDesde` 15000, `mensualidadDesde` 3000, `sitioAddon`) + `waLink()` helper. Envs: `NEXT_PUBLIC_SC_WHATSAPP`, `NEXT_PUBLIC_SC_BOOKING_URL` (both in `turbo.json` globalEnv). Graceful-degradation house style — missing WhatsApp/booking config makes CTAs fall back to email, never a broken link.
- **i18n approach:** no full-site `[locale]` migration. Root `<html lang>` stays `en`; the subtree declares `es-MX` on the `.sc-root` wrapper + `og:locale: es_MX` + Spanish `Service` JSON-LD with local `areaServed`. The English site is untouched.
- **Separate lead funnel:** `app/api/sistema-de-clientes/route.ts` (nombre/giro/WhatsApp → Resend → Yovany, honeypot + Mexican-phone validation) — distinct from `/api/subscribe`, does not touch ConvertKit.
- **Analytics:** PostHog events prefixed `sc_*`, each carrying a `vertical` prop (see `lib/analytics.ts`).
- **Styling:** reuses the existing design tokens with a `.sc-*` layer in `globals.css` (slightly warmer, WhatsApp-green CTAs). Interactive islands only: `ScRoiCalc` (one job pays N months of the agent), `ScFaq`, `ScWhatsAppButton`/`StickyWhatsApp`, `ScBookingButton`, `ScLeadForm`.
- **Difusión (outreach for Facebook groups):** `/sistema-de-clientes/demo` (secret-shopper proof + demo video slot via `NEXT_PUBLIC_SC_DEMO_VIDEO`, else a placeholder), a value blog at `/sistema-de-clientes/blog` + `/blog/[slug]` (typed articles in `content/sistema-de-clientes/blog.ts`, BlogPosting JSON-LD, per-article OG; hero images auto-load from `public/blog/<slug>.webp` via the server-only `publicFileExists` check, else a gradient placeholder — see `public/blog/README.md` and each article's `heroPrompt`), and a link-in-bio page `/sistema-de-clientes/enlaces`.
- **UTM attribution:** `_lib/campaign.ts` `useCampaign()` reads `?utm_source=`/`?ref=` and (a) appends it to the pre-filled WhatsApp message ("Vengo de: …") and (b) passes it as a `source` prop on every `sc_*` PostHog event and the lead API — so you learn which Facebook group converts.

## Known issue

`addToNewsletter` in `app/api/subscribe/route.ts` passes tag *names* (`["lead-magnet", source]`) to ConvertKit's subscribe endpoint, which expects tag *IDs* — leads subscribe but are never tagged. Fix deferred.
