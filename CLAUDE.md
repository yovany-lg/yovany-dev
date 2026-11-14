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

A Turborepo monorepo with **two Next.js apps** plus shared config:

- `apps/web` — the yovany.dev site (Next.js 16 App Router, React 19, Tailwind v4). Despite the README (a stock create-turbo template), there is no `docs` app.
- `apps/sendero` — the **Sendero** agency marketing site (`sendero.pro`), a fully separate brand: bilingual ES/EN via **next-intl** (`[locale]` routing, `proxy.ts`), **warm-paper editorial** design — a deliberate **sibling of yovany.dev** (`apps/web`): near-black ink `#0c0c0b` on off-white paper `#faf9f6`, 1px hairlines (no glow/gradients/cards), one deep-green **"Monte"** accent `#235f41` used sparingly, **Archivo** display + **Geist**/**Geist Mono** (the shared body/label faces), on retained **shadcn/ui** primitives + Tailwind v4. Structure lives in semantic classes in `app/globals.css` (`.section`/`.shell`/`.kicker`/`.svc`/`.work-row`/etc.), not utility soup. The "sendero" (trail) motif shows up as the hero elevation map + dashed process waypoints. Dev on **port 3001**. Deliberately isolated from `web` at the brand level — different domain, accent, and i18n approach; shares the `@repo/*` config packages, the Geist faces, and PostHog analytics. Booking uses **`@calcom/embed-react`** (`calLink` from `NEXT_PUBLIC_CALCOM_LINK`, e.g. `yovany/30min`), themed Monte. Positioning (2026-11-14): Sendero is the agency behind **Citania** (featured as product 01; every Citania link goes out to `https://citania.mx` via `components/layout/product-link.tsx`, tracked as `product_click` + UTM params — sendero.pro never sells to clinics directly) plus custom software. LFPDPPP privacy notice at `/privacidad` (`components/sections/privacy-notice.tsx`, Spanish on both locales, bracketed placeholders still to fill). WhatsApp contact channel is currently disabled (graceful no-op). Its copy lives in `apps/sendero/messages/{es,en}.json`; config in `apps/sendero/lib/site.ts`.
- `packages/ui` (`@repo/ui`) — stub shared component library, exported as raw `.tsx` via `./src/*`. Currently unused by both apps' real UI.
- `packages/eslint-config` (`@repo/eslint-config`), `packages/typescript-config` (`@repo/typescript-config`) — shared configs consumed via `workspace:*`.

## Architecture & conventions

**All copy lives in `apps/web/lib/content.ts`.** Hero, services, case studies, FAQ, CTAs — every string is a typed `const` export there. The page components in `app/page.tsx` are presentational and read from these exports. To change site text, edit `content.ts`, not the components.

**`apps/web/lib/site.ts` is the single source of truth for identity + env-driven config** (URLs, social links, booking URL, lead-magnet path, portrait). Booking/provider values fall back to safe defaults when their env var is unset, and flags like `BOOKING_CONFIGURED` let the UI degrade gracefully (e.g. `/call` shows an email fallback instead of embedding a placeholder that 404s) rather than break.

**Graceful no-op on missing env is the house style for integrations.** `app/api/subscribe/route.ts` (Resend confirmation email + ConvertKit newsletter) and `lib/analytics.ts` (PostHog) all check for their keys and silently no-op (logging to console) when unconfigured, so dev and previews never error. Preserve this pattern when adding integrations — never throw because a key is absent.

The subscribe route also uses a hidden `company` honeypot field: a filled honeypot returns a fake success (`ok: true`) and does nothing.

**Env vars** are declared in `turbo.json`'s `globalEnv` (so the build cache busts on change): `NEXT_PUBLIC_BOOKING_URL`, `NEXT_PUBLIC_LEAD_MAGNET_URL`, `NEXT_PUBLIC_POSTHOG_KEY`/`NEXT_PUBLIC_POSTHOG_HOST` (shared with the Sendero app), `RESEND_API_KEY`, `RESEND_FROM`, `CONVERTKIT_API_KEY`, `CONVERTKIT_FORM_ID`. Add new vars there too. `.env*` is gitignored.

**SEO/metadata is centralized in `app/layout.tsx`** (Metadata API, JSON-LD `Person` + `ProfessionalService` graph) driven off `site.ts`. OG image, icons, sitemap, and robots use Next file conventions (`opengraph-image.tsx`, `icon.tsx`, `apple-icon.tsx`, `sitemap.ts`, `robots.ts`) — there are no static equivalents.

Fonts are loaded via `next/font` (Hanken Grotesk, Caveat from Google; Geist Sans/Mono local in `app/fonts/`) and exposed as CSS variables. Styling is Tailwind CSS v4 (PostCSS plugin, single `app/globals.css`).

## Retired: `/sistema-de-clientes` (2026-11-14)

The Spanish "Agente de WhatsApp con IA" subtree (`app/sistema-de-clientes/*`, its lead API, `content/sistema-de-clientes/*`, the `SC` config, `sc_*` events and `.sc-*` styles) was removed. The clinic offer now lives on **citania.mx**; `next.config.js` permanently redirects (308) `/sistema-de-clientes` and every sub-path to `https://citania.mx` (query strings pass through). `docs/imper.md`, `docs/clientes.md` and `docs/sistema-de-clientes-plan.md` are kept as historical context only.

## Known issue

`addToNewsletter` in `app/api/subscribe/route.ts` passes tag *names* (`["lead-magnet", source]`) to ConvertKit's subscribe endpoint, which expects tag *IDs* — leads subscribe but are never tagged. Fix deferred.
