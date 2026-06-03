# Website Build Specification — yovany.dev

> **For:** Claude Code
> **Goal:** Rebuild `yovany.dev` from a job-seeker portfolio into a conversion-focused
> lead-capture site that books freelance/consulting calls.
> **Owner:** Yovany Luis — Senior Software Engineer & Independent Consultant (Jalisco, MX, Remote)

---

## 1. Objective

Turn the personal site into a **lead-capture machine** for an independent consulting practice.
Every page decision serves one of two conversions, in priority order:

1. **Primary CTA — Book a fit call** (a scheduled 20-min call).
2. **Secondary CTA — Capture an email** via a lead magnet (for visitors not ready to talk).

Success = a stranger lands on the site, understands within 5 seconds what Yovany does and for
whom, sees proof, and takes one of the two actions above.

**Non-goals:** This is not a blog platform, not a résumé dump, not a generic portfolio. Do not
re-create the old structure (long work-history list, tech-stack logo wall as the centerpiece,
education section above the fold).

---

## 2. Positioning & Audience

- **Audience:** Founders / CTOs / product leads at SaaS companies and funded startups (US-first,
  LATAM-friendly) who need AI features shipped to production reliably.
- **Positioning statement (the spine of all copy):**
  _"I help SaaS and funded startups ship production-grade AI features and automations — not demos that break in production."_
- **Tone:** Senior, calm, proof-driven. Confident without hype. Avoid buzzword soup
  ("synergy", "ninja", "passionate"). Lead with outcomes, not tech stacks.
- **Differentiation to convey:** Most "AI freelancers" are prompt jockeys. Yovany has shipped
  production AI inside an enterprise platform (RAG agents, large-scale AI migrations) AND owns
  full delivery end-to-end (DB → frontend → deploy).

---

## 3. Tech Stack

Keep it lean — this is a marketing site, not an app.

- **Framework:** Next.js 15 (App Router), TypeScript, React Server Components where sensible.
- **Styling:** Tailwind CSS. Use CSS variables for the theme (see Design Direction).
- **Booking:** Cal.com embed (preferred) or Calendly. Use an inline embed on `/call` and a
  popup/redirect from primary CTA buttons. **Booking link is an env var:** `NEXT_PUBLIC_BOOKING_URL`.
- **Email capture:** POST to a Next.js API route (`/api/subscribe`) that forwards to the email
  provider. Default to **Resend** (transactional confirmation) + a newsletter provider
  (ConvertKit/Buttondown) for the lead-magnet sequence. Provider keys via env vars; never hardcode.
- **Analytics:** PostHog (Yovany already uses it) or Plausible. Track CTA clicks, scroll depth,
  and form submits as events.
- **Deploy:** Vercel.
- **Forms:** Use native event handlers + a server action / API route. Validate with Zod.
  Include a honeypot field for spam.

**Performance budget:** Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, SEO.
LCP < 2.0s, CLS < 0.05. (Yovany sells performance — the site must demonstrate it.)

---

## 4. Information Architecture

Single long-form landing page (`/`) with anchored sections, plus a few standalone routes.

**Home (`/`) section order — order is conversion, do not reorder:**

1. Hero
2. Trusted-by logo strip
3. The Problem
4. Proof / Results
5. Services (productized offers)
6. Case Studies
7. About
8. Final CTA + Lead Capture
9. Footer

**Standalone routes:**

- `/call` — full-page Cal.com embed + a short "what to expect on the call" blurb.
- `/case-studies/[slug]` — optional detailed case studies (start with BridgeDoc + Encargogo).
- `/api/subscribe` — email capture endpoint.

---

## 5. Section-by-Section Content & Copy

> Copy below is production-ready unless wrapped in `[[ ... ]]`, which marks an asset or value
> **Yovany must provide** (see Section 9). Use the copy verbatim unless told otherwise.

### 5.1 Hero

**Purpose:** Communicate outcome + who + proof + one CTA in 5 seconds.

- **Headline (H1):** `Ship AI features your users actually trust.`
- **Subhead:** `I'm Yovany — a senior engineer who's put production AI into an enterprise platform serving premium clients. I help SaaS teams turn AI prototypes into reliable, shipped product.`
- **Primary CTA button:** `Book a free 20-min fit call` → `NEXT_PUBLIC_BOOKING_URL`
- **Secondary link (ghost/text):** `See results ↓` → anchor to Proof section.
- **Visual:** `[[ professional headshot / portrait ]]` — right side on desktop, top on mobile.
- **Micro-proof line under CTA (small text):** `8+ years · Immunefi · Thrive Market · Remote from México`

### 5.2 Trusted-by logo strip

**Purpose:** Instant credibility.

- Grayscale logos, single row, subtle.
- Logos: `[[ Immunefi ]] [[ Thrive Market ]] [[ Luxoft ]] [[ BridgeDoc ]] [[ Encargogo ]]`
- Caption (optional): `Trusted with mission-critical platforms.`

### 5.3 The Problem

**Purpose:** Name the client's pain in their words so they feel understood.

- **Section heading:** `Your AI demo impressed everyone. Then it met real data.`
- **Body:** `Most AI features look great in a demo and fall apart in production — hallucinated answers, brittle pipelines, no observability, and edge cases nobody planned for. Shipping AI that's actually reliable takes senior engineering judgment, not just a clever prompt.`
- Optional 3-item "sound familiar?" list (short, 1 line each):
  - `A prototype that works on 10 documents but not 10,000.`
  - `No visibility into why the model gives the answers it does.`
  - `Features stuck at "almost production-ready" for months.`

### 5.4 Proof / Results

**Purpose:** Hard numbers. This is where the CV metrics move onto the site.
Render as a grid of outcome cards (big number + one-line context). Do **not** invent numbers —
use only those below; bracketed ones are pending confirmation from Yovany.

| Metric          | Context                                                                             |
| --------------- | ----------------------------------------------------------------------------------- |
| **99.5%**       | accuracy on an AI-driven migration of 400 programs (Immunefi)                       |
| **−35%**        | support response time via an AI support system (Immunefi)                           |
| **300+**        | assets discovered by automated AI smart-contract discovery (Immunefi)               |
| **40%**         | faster enterprise onboarding via RBAC/permissions redesign (Immunefi)               |
| **+10% / −15%** | conversion growth / CAC reduction from a company-wide analytics platform (Immunefi) |
| **50%**         | reduction in Time-to-Interactive & Total Blocking Time (Thrive Market)              |
| **+40%**        | Core Web Vitals improvement, lifting conversion (Thrive Market)                     |

### 5.5 Services (productized offers)

**Purpose:** Give a concrete, named thing to buy. Three cards. No hourly rates on the page;
CTA is always "book a call."

- **Card 1 — AI Feature Sprint**
  `From prototype to production-ready in ~4 weeks. RAG pipelines, agents, and AI workflows built with evals, guardrails, and observability so they hold up with real users and real data.`
- **Card 2 — AI Architecture Review**
  `A focused audit of your AI feature or pipeline. You get a clear report on reliability, cost, failure modes, and a prioritized plan to get it production-grade.`
- **Card 3 — Fractional Senior Engineer**
  `Embedded senior/lead engineering for early-stage teams. End-to-end ownership: database, frontend, backend, and deployment — shipping features, not tickets.`
- Each card: short outcome line + `Book a call →` CTA.

### 5.6 Case Studies

**Purpose:** Proof as story. Format each as **Problem → What I did → Result.**
Start with these two (content from Yovany's recent work). Link to `/case-studies/[slug]` if expanded.

- **BridgeDoc — AI document intelligence for US construction firms**
  - _Problem:_ Teams buried in hundreds of project documents, no fast way to find answers.
  - _What I did:_ Owned the platform end-to-end (DB, frontend, deploy to Vercel + custom VPS pipeline) and built a Retrieval-Augmented Generation (RAG) workflow powering a conversational agent.
  - _Result:_ Users get instant, grounded answers retrieved across hundreds of documents instead of manual search. `[[ add a metric if available ]]`
- **Encargogo — E-commerce stabilization & search performance**
  - _Problem:_ An e-commerce platform with reliability and search-performance issues, limited visibility into user behavior.
  - _What I did:_ Owned development and stabilization; introduced observability and analytics; optimized Meilisearch and re-tuned the MongoDB schema/indexing; built AI-assisted scraping to aggregate data from Amazon, eBay, and Shopify.
  - _Result:_ A more reliable platform with optimized conversion flows and faster search. `[[ add metrics if available ]]`

### 5.7 About

**Purpose:** Human + credibility. Short. Below proof, not above.

- `I'm Yovany Luis, a senior software engineer based in Jalisco, México, with 8+ years building and owning mission-critical platforms — from Web3 security infrastructure at Immunefi to high-traffic e-commerce at Thrive Market. I work independently with SaaS and startup teams who need someone who can own delivery end-to-end and ship AI that survives contact with production.`
- `As a father of two, I value efficiency and quality in equal measure — every solution I build is meant to be scalable, reliable, and maintainable long after I'm gone.`
- Links: LinkedIn, GitHub, X/Twitter, email.

### 5.8 Final CTA + Lead Capture

**Purpose:** Capture the ~95% who won't book on the first visit.

- **Heading:** `Let's make your AI features production-ready.`
- **Primary CTA:** `Book a free 20-min fit call`
- **Lead magnet block:** `Not ready to talk? Grab the free guide:`
  - Title: `[[ "5 Reasons AI Features Fail in Production (and how to fix them)" — PDF ]]`
  - Email input + button `Send me the guide`.
  - On submit → POST `/api/subscribe` → confirmation + deliver PDF link.
- Privacy microcopy: `No spam. Unsubscribe anytime.`

### 5.9 Footer

- Name, role, location (Remote — México), email.
- Social links (LinkedIn, GitHub, X).
- Copyright line.

---

## 6. Lead Capture Mechanics

- **Primary CTA** appears in: nav bar (sticky), hero, after services, final section. Same label,
  same destination everywhere.
- **Sticky header** with a compact `Book a call` button after the user scrolls past the hero.
- **Email form:** Zod-validated, honeypot anti-spam, loading + success + error states. On success,
  show inline confirmation (no full-page redirect). Fire a PostHog `lead_captured` event.
- **Booking:** primary CTA opens Cal.com (popup) or routes to `/call`. Fire `cta_book_call` event.
- **No `<form>`-driven full reloads** — use server actions / fetch to the API route.

---

## 7. Design Direction

Commit to a **refined, premium, editorial-minimal** aesthetic — the visual equivalent of "senior
and trustworthy." Restraint and precision over decoration. Avoid generic AI-template looks.

- **Do NOT use:** Inter / Roboto / Arial / system-font defaults, purple-gradient-on-white,
  cookie-cutter SaaS-template layouts, stocky illustrations.
- **Typography:** Pair a distinctive display/serif or characterful grotesk for headings with a
  clean, refined body font. High contrast in weight and size. Generous type scale on the hero.
- **Color:** One dominant, confident base (consider a deep near-black or warm dark, or a crisp
  off-white) with **one** sharp accent color used sparingly for CTAs and key numbers. Define all
  colors as CSS variables. Decide light vs dark intentionally — don't hedge.
- **Layout:** Generous negative space. Strong visual hierarchy that funnels the eye to CTAs and the
  proof numbers. The big metric numbers should be a visual centerpiece (large, confident).
- **Motion:** One well-orchestrated hero load with staggered reveals (animation-delay). Subtle
  scroll-triggered fades on sections. Tasteful hover states on cards/CTAs. Nothing gimmicky.
- **Backgrounds:** Add quiet depth — a subtle grain/noise texture, a soft gradient mesh, or fine
  geometric lines — not flat white. Keep it understated.
- **Responsive:** Mobile-first. Hero stacks (copy top, portrait below). Logo strip wraps. Metric
  grid → 2 columns on mobile.
- **Accessibility:** WCAG AA contrast, focus states on all interactive elements, semantic landmarks,
  alt text on logos/portrait, reduced-motion media query respected.

> When implementing the UI, follow the `frontend-design` skill: pick one bold, cohesive direction
> and execute it with precision rather than a generic, evenly-distributed look.

---

## 8. SEO & Meta

- `<title>`: `Yovany Luis — AI Product Engineer | Ship Production-Grade AI Features`
- Meta description: `Senior engineer helping SaaS & startups ship reliable, production-grade AI features and automations. 8+ years, ex-Immunefi & Thrive Market. Book a free fit call.`
- Open Graph + Twitter card: title, description, and a 1200×630 OG image `[[ provide or generate ]]`.
- Canonical URL `https://www.yovany.dev/`. **Fix the old site's stray `og:url` pointing to
  `store.aprendo.dev` — it must be `yovany.dev`.**
- JSON-LD `Person` + `ProfessionalService` structured data.
- Sitemap + robots.txt. Semantic headings (one H1).
- **Consistency fix:** use **"8+ years"** everywhere (the old site said "nearly 10"; the CV says 8+).

---

## 9. Assets & Content Yovany Must Provide

Mark these as TODO placeholders in the build so the site renders without them:

- [ ] Professional headshot / portrait (hero).
- [ ] Client/employer logos: Immunefi, Thrive Market, Luxoft, BridgeDoc, Encargogo (SVG/PNG).
- [ ] `NEXT_PUBLIC_BOOKING_URL` (Cal.com or Calendly link).
- [ ] Email provider API keys (Resend + ConvertKit/Buttondown).
- [ ] PostHog/Plausible key.
- [ ] Lead-magnet PDF: "5 Reasons AI Features Fail in Production."
- [ ] **Testimonials** (1–3 short client quotes with name + company) — strongly recommended; add a
      testimonials block near Proof or Services once available.
- [ ] Confirmed metrics for the BridgeDoc & Encargogo case studies.
- [ ] OG share image (1200×630).

---

## 10. Acceptance Criteria

- [ ] Above the fold, a first-time visitor can state what Yovany does and for whom.
- [ ] One primary CTA (Book a call), identical wording, present in nav + hero + mid-page + footer.
- [ ] Proof section shows real metrics as the visual centerpiece.
- [ ] Three named, productized service offers — no hourly rates shown.
- [ ] At least two case studies in Problem → Action → Result format.
- [ ] Working email capture (validation, spam guard, success/error states) wired to `/api/subscribe`.
- [ ] Working booking flow via env-configured URL.
- [ ] Analytics events fire for `cta_book_call` and `lead_captured`.
- [ ] Lighthouse ≥ 95 across all four categories; LCP < 2.0s; CLS < 0.05.
- [ ] WCAG AA accessibility; reduced-motion respected.
- [ ] No placeholder text leaks to production; all `[[ ]]` items are either filled or gracefully hidden.
- [ ] Distinctive design (per Section 7) — not a generic template; no Inter/purple-gradient defaults.

---

## 11. Research-Driven Additions (implemented)

Researched how high-converting independent consultants structure lead-capture sites
(Jonathan Stark's sales-page order, Brennan Dunn / Philip Morgan on productized
positioning, a 41k-form MailerLite lead-magnet study, AI-consultant differentiation in
2025–26). Net changes layered on top of the original spec:

- **FAQ / objection-handling section** added before the final CTA — Stark's structure
  treats this as a core conversion block. Five objection-busting Q&As (prompt-jockey
  differentiation, what the call covers, scope, team size, pricing).
- **Risk-reversal microcopy** under the hero CTA and on `/call`
  ("Free, 20 minutes, no sales pitch") — the single highest-leverage tweak per the research.
- **Subtle urgency** in the final CTA ("Currently booking · limited engagements per month")
  with a pulsing indicator — scarcity without hype.
- **Money-back guarantee badge** on the AI Architecture Review card — research flags a
  guarantee on a fixed-scope audit as the best objection-killer.
- **`/call` page upgraded** with a numbered "what to expect" flow + no-pressure promise so
  visitors arrive pre-framed (research: qualify + reassure before the call).
- **Lead capture built provider-agnostic** ("build for both"): ships the PDF now via
  `/api/subscribe` (Resend confirmation + download link), with a ConvertKit/Buttondown
  tagging hook so the higher-converting 5-day micro-course drip can be switched on later
  with zero code change.

### Decisions locked with Yovany
- **Design (current): premium-studio light.** After review, the first dark/copper/serif
  pass read "too AI-template." Redesigned to match the references Yovany chose —
  [solt.ws](https://www.solt.ws/) and [designme.agency](https://www.designme.agency/):
  - Off-white canvas `#FAF9F6`, near-black ink `#0C0C0B`, single **vermillion** accent
    `#F0341A` (both references use red), thin `#E7E5DF` hairlines.
  - **Hanken Grotesk** (bold, tight display) + Geist (body) + Geist Mono (technical labels)
    + **Caveat** for one handwritten annotation. No serif, no grain, no glow.
  - Studio personality details that defeat the "AI look": a live **status bar** with
    registration-mark corners (`Guadalajara · clock · available`), **numbered accordion**
    services (`01 / 02 / 03` with a red +/× toggle, à la DesignMe), one metric rendered as
    a **red color-swatch panel**, a **soft pastel-gradient** portrait/lead card, and the
    handwritten "measured in prod, not slideware" note.
  - Anti-AI-slop hero kicker: **"Production AI — not prototypes."**
  - _(The original warm-editorial-dark direction in §7 is superseded by this.)_
- **Content focus: the AI-agent work (new), not the résumé.** Proof grid trimmed from
  7 metrics (5× Immunefi) to 4 tight outcomes with employer names dropped from the labels;
  the freed grid space is now an **"AI agents · what I build now"** panel. Case studies
  lead with the agents — BridgeDoc's RAG agent, Encargogo's AI data agents — and
  **Citania ([citania.mx](https://citania.mx), WhatsApp AI agents)** is a **featured,
  in-progress** project ("Building now") at the top of the work section.
- **Work section broadened beyond AI.** Added **Sendero Home
  ([senderohome.pro](https://www.senderohome.pro))** as a second featured ("Live")
  project — a full-stack condominium access-control platform (Next.js + Hono, Expo/RN
  native app, AWS IoT Core + ESP32/ESPHome, go2rtc video streaming behind a Cloudflare
  Worker). It's the flagship proof of **end-to-end ownership**, so the section headline
  changed from "AI agents, built for production" to **"Production systems, owned
  end-to-end"** to frame both the AI agents and Sendero honestly. Featured-card labels
  adapt by tense (Building now → "What I'm building"; Live → "What I built").
- **Lead magnet:** PDF now, micro-course-ready later.

### Implementation notes
- Stack as built: **Next.js 16.2 (App Router) + React 19**, Tailwind v4 (CSS-first
  `@theme`), TypeScript, Zod 4. Lives in `apps/web`; the generated `apps/docs` and all
  create-turbo boilerplate were removed.
- Animations are **CSS-only** (staggered hero load + IntersectionObserver scroll reveals),
  gated behind a `js` class so no-JS users and crawlers always see content; full
  `prefers-reduced-motion` support.
- **OG share image is generated dynamically** via `app/opengraph-image.tsx` (`next/og`) —
  no static 1200×630 asset needed from Yovany.
- SEO: `Person` + `ProfessionalService` JSON-LD, dynamic `sitemap.ts` / `robots.ts`,
  canonical `https://www.yovany.dev`, one H1, "8+ years" used consistently.
- Build is green; `pnpm lint` (max-warnings 0) and `pnpm check-types` both pass.

### Still required from Yovany (graceful placeholders in place)
- `NEXT_PUBLIC_BOOKING_URL` — the `/call` iframe currently embeds a placeholder Cal.com
  link that 404s until set. See `apps/web/.env.example` for all env vars.
- Real headshot (swap the monogram block in `Portrait`), client logo SVGs, the
  lead-magnet PDF (`/public/guide.pdf`), email-provider + PostHog keys, and 1–3 client
  testimonials (the testimonials block hides itself until provided).
