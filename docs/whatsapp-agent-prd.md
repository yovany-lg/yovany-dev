# PRD — WhatsApp AI Agent (Meta Tech Provider)

**Owner:** Yovany Luis / Sendero (sendero.pro)
**Status:** Draft · 2026-07-15
**Repo:** built in a separate repo (not this monorepo)

## 1. Summary

Sendero becomes a **Meta Tech Provider** (direct, not via a BSP) so it can offer
official **WhatsApp AI agents** to client businesses. Each agent answers 24/7 on
the client's own WhatsApp number, qualifies leads, and hands the owner a
ready-to-quote summary. Sendero owns the Meta relationship, the client assets,
and the margin.

## 2. Goals

- Ship a working WhatsApp Cloud API integration with an AI agent reply loop.
- Pass Meta **App Review** with Advanced Access for the two WhatsApp permissions.
- Onboard clients self-serve via **Embedded Signup** (their number, their billing).

**Non-goals (v1):** billing/credit line (clients pay Meta directly), multi-language
routing, template-campaign broadcasts, a client-facing dashboard.

## 3. Users

- **Client business owner** — connects their WhatsApp, receives lead summaries.
- **End customer** — messages the client's WhatsApp, talks to the AI agent.
- **Sendero (operator)** — configures agents, monitors conversations.

## 4. Requirements

### 4.1 Messaging core (`whatsapp_business_messaging`)
- Webhook `GET` verification handshake (verify token match → return challenge).
- Webhook `POST` receives messages; acks `200` fast.
- Verify `X-Hub-Signature-256` against the app secret before trusting a payload.
- Send replies via `POST graph.facebook.com/v23.0/{PHONE_NUMBER_ID}/messages`.
- AI reply via Claude (Sonnet 5 / Haiku 4.5) with a per-client system prompt;
  short conversation state keyed by `wa_id`.
- Respect the 24-hour customer-service window (free-form in-window; templates out).

### 4.2 Client onboarding (`whatsapp_business_management`)
- **Embedded Signup** (or Hosted ES) so a client connects their own number.
- Exchange the returned code for a client-scoped **business token**.
- Store per-client tokens + phone number IDs; route inbound messages by
  `phone_number_id` to the right client agent.

### 4.3 Config / infra
- Env: `WHATSAPP_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`, `WHATSAPP_VERIFY_TOKEN`,
  `WHATSAPP_APP_SECRET`, `ANTHROPIC_API_KEY`.
- Public HTTPS endpoint (deploy target, e.g. Vercel). No localhost for Meta.
- Graceful no-op / clear error when a key is missing (house style).

## 5. Meta prerequisites (gating)

- Business Portfolio **verified** (sole proprietor, Mexico — INE + SAT CSF +
  proof of address; name must match everywhere). See partner-application PDF.
- Business-type Meta app + WhatsApp product + test number.
- System user token with `whatsapp_business_messaging` + `whatsapp_business_management`.
- App Review submitted requesting **Advanced Access** for both permissions.

## 6. Milestones

1. **Echo bot** — webhook in → hardcoded reply out (proves the pipe).
2. **Agent** — swap hardcoded reply for Claude with a client persona prompt.
3. **Hardening** — signature verification + conversation state.
4. **Onboarding** — Embedded Signup + per-client business tokens (multi-tenant).
5. **Review** — record screencasts (messaging + onboarding), submit App Review.

## 7. Demo for App Review

- **Screencast 1 (messaging):** split screen phone + logs — user sends → webhook
  fires → AI replies.
- **Screencast 2 (onboarding):** a client completes Embedded Signup and connects
  their number.

## 8. Success metrics

- App Review approved (Advanced Access on both permissions).
- First real client onboarded via Embedded Signup, agent answering live.
- Time-to-first-reply < a few seconds; webhook `200` ack < 1s.

## 9. Open questions

- Which vertical is the first paying client (ties to `docs/imper.md` launch)?
- Direct-only, or pair with a Solution Partner later for a shared credit line?
- Where conversation state / client tokens are stored (DB choice).
