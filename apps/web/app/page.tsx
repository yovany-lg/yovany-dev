import Image from "next/image";
import { Nav } from "./components/Nav";
import { StatusBar } from "./components/StatusBar";
import { BookCallButton } from "./components/BookCallButton";
import { Reveal } from "./components/Reveal";
import { LeadForm } from "./components/LeadForm";
import { SOCIAL, SITE, PORTRAIT_SRC } from "../lib/site";
import {
  hero,
  trustedBy,
  problem,
  metrics,
  aiAgentsHighlight,
  services,
  caseStudies,
  testimonials,
  about,
  faqs,
  finalCta,
} from "../lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <StatusBar />
      <main id="main">
        <Hero />
        <TrustedBy />
        <Problem />
        <Proof />
        <Services />
        <CaseStudies />
        <Testimonials />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

/* ---------------------------------- Hero --------------------------------- */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container-x hero-grid">
        <div>
          <p className="kicker hero-rise" style={{ animationDelay: "0.05s" }}>
            {hero.kicker}
          </p>
          <h1 className="hero-rise" style={{ animationDelay: "0.12s" }}>
            Ship AI features your users{" "}
            <span className="accent">actually trust.</span>
          </h1>
          <p className="hero-sub hero-rise" style={{ animationDelay: "0.22s" }}>
            {hero.subhead}
          </p>
          <div className="hero-actions hero-rise" style={{ animationDelay: "0.32s" }}>
            <BookCallButton location="hero" />
            <a href="#proof" className="btn btn-ghost">
              See results <span aria-hidden>↓</span>
            </a>
          </div>
          <p className="hero-risk hero-rise" style={{ animationDelay: "0.4s" }}>
            {hero.riskReversal}
          </p>
          <p className="hero-proof hero-rise" style={{ animationDelay: "0.5s" }}>
            {hero.microProof}
          </p>
        </div>

        <div className="hero-rise" style={{ animationDelay: "0.3s" }}>
          <Portrait />
        </div>
      </div>
    </section>
  );
}

/**
 * Hero portrait. Shows a real headshot when `PORTRAIT_SRC` (lib/site.ts) is
 * set; otherwise a designed monogram placeholder so nothing looks unfinished.
 */
function Portrait() {
  if (PORTRAIT_SRC) {
    return (
      <div className="portrait portrait--photo">
        <Image
          src={PORTRAIT_SRC}
          alt="Yovany Luis"
          fill
          priority
          sizes="(max-width: 940px) 90vw, 40vw"
          style={{ objectFit: "cover" }}
        />
        <span className="portrait-note">AI Product Engineer · Remote, México</span>
      </div>
    );
  }
  return (
    <div className="portrait" role="img" aria-label="Yovany Luis">
      <span className="portrait-mono" aria-hidden>
        YL
      </span>
      <span className="portrait-note">AI Product Engineer · Remote, México</span>
    </div>
  );
}

/* ------------------------------- Trusted-by ------------------------------ */
function TrustedBy() {
  return (
    <section className="section rule-top" style={{ paddingBlock: "clamp(2.5rem,5vw,4rem)" }}>
      <div className="container-x">
        <Reveal>
          <p className="logos-caption">Trusted with mission-critical platforms</p>
          <div className="logos">
            {trustedBy.map((c) => (
              <span key={c.name} className="logo-word">
                {c.name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Problem -------------------------------- */
function Problem() {
  return (
    <section className="section rule-top">
      <div className="container-x">
        <Reveal className="section-head">
          <p className="kicker">The problem</p>
          <h2>{problem.heading}</h2>
          <p className="lead">{problem.body}</p>
        </Reveal>
        <Reveal>
          <div className="symptoms">
            {problem.symptoms.map((s, i) => (
              <div className="symptom" key={s}>
                <span className="symptom-num">0{i + 1}</span>
                <p>{s}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Proof --------------------------------- */
function Proof() {
  return (
    <section className="section rule-top" id="proof">
      <div className="container-x">
        <Reveal className="section-head">
          <p className="kicker">Proof</p>
          <h2>Outcomes, not adjectives.</h2>
          <p className="lead">
            Real numbers from production systems I&apos;ve built and owned.{" "}
            <span className="annotate">measured in prod, not slideware</span>
          </p>
        </Reveal>
        <Reveal>
          <div className="metrics">
            {metrics.map((m, i) => (
              <div className={`metric ${i === 0 ? "metric--accent" : ""}`} key={m.context}>
                <div className="metric-value">{m.value}</div>
                <p className="metric-context">{m.context}</p>
              </div>
            ))}
            <div className="metric metric-panel">
              <p className="kicker">{aiAgentsHighlight.kicker}</p>
              <p className="metric-panel-text">{aiAgentsHighlight.text}</p>
              <a
                className="link-u metric-panel-link"
                href={aiAgentsHighlight.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {aiAgentsHighlight.linkLabel} <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Services ------------------------------- */
function Services() {
  return (
    <section className="section rule-top" id="services">
      <div className="container-x">
        <Reveal className="section-head">
          <p className="kicker">Services</p>
          <h2>Three ways to work together.</h2>
          <p className="lead">
            Concrete, scoped engagements — no hourly rates, no open-ended retainers.
          </p>
        </Reveal>
        <Reveal>
          <div className="svc-list">
            {services.map((s, i) => (
              <details className="svc-item" key={s.name} open={i === 0}>
                <summary className="svc-summary">
                  <span className="svc-num">0{i + 1}</span>
                  <span>
                    <span className="svc-title">{s.name}</span>
                    <span className="svc-outcome">{s.outcome}</span>
                  </span>
                  <span className="svc-icon" aria-hidden />
                </summary>
                <div className="svc-body">
                  <span className="spacer" aria-hidden />
                  <div className="svc-detail">
                    <p>{s.body}</p>
                    {s.badge ? <span className="svc-badge">{s.badge}</span> : null}
                    <div className="svc-cta">
                      <BookCallButton
                        label="Book a call"
                        location={`service:${s.name}`}
                        variant="ghost"
                        size="sm"
                      />
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Case studies ----------------------------- */
function CaseStudies() {
  const featured = caseStudies.filter((c) => c.featured);
  const rest = caseStudies.filter((c) => !c.featured);
  return (
    <section className="section rule-top" id="work">
      <div className="container-x">
        <Reveal className="section-head">
          <p className="kicker">Selected work</p>
          <h2>Production systems, owned end-to-end.</h2>
        </Reveal>

        {featured.map((c) => {
          const building = c.status?.toLowerCase().includes("building");
          return (
            <Reveal key={c.slug}>
              <article className="card case case--featured">
                <div className="case-feat-head">
                  <div>
                    <span className="case-status">
                      <span className="case-status-dot" aria-hidden />
                      {c.status}
                    </span>
                    <h3 className="case-client">{c.client}</h3>
                    <p className="case-tag">{c.tagline}</p>
                  </div>
                  {c.url ? (
                    <a
                      className="link-u case-url"
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {c.url.replace(/^https?:\/\/(www\.)?/, "")} <span aria-hidden>↗</span>
                    </a>
                  ) : null}
                  {c.stats ? (
                    <dl className="case-stats">
                      {c.stats.map((s) => (
                        <div className="case-stat" key={s.label}>
                          <dt className="case-stat-value">{s.value}</dt>
                          <dd className="case-stat-label">{s.label}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                </div>
                <div className="case-feat-rows">
                  <CaseRow label="Problem" text={c.problem} />
                  <CaseRow label={building ? "What I'm building" : "What I built"} text={c.action} />
                  <CaseRow label={building ? "Outcome" : "Result"} text={c.result} strong />
                </div>
              </article>
            </Reveal>
          );
        })}

        <div className="cases">
          {rest.map((c, i) => (
            <Reveal key={c.slug} delay={i * 90}>
              <article className="card case">
                <h3 className="case-client">{c.client}</h3>
                <p className="case-tag">{c.tagline}</p>
                <CaseRow label="Problem" text={c.problem} />
                <CaseRow label="What I did" text={c.action} />
                <CaseRow label="Result" text={c.result} strong />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseRow({ label, text, strong = false }: { label: string; text: string; strong?: boolean }) {
  return (
    <div className="case-row">
      <span className="case-label">{label}</span>
      <p className="case-text">{strong ? <strong>{text}</strong> : text}</p>
    </div>
  );
}

/* ------------------------------ Testimonials ----------------------------- */
/** Renders nothing until real quotes exist — no placeholder leaks. */
function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section className="section rule-top">
      <div className="container-x">
        <Reveal className="section-head">
          <p className="kicker">In their words</p>
          <h2>What clients say.</h2>
        </Reveal>
        <div className="quotes">
          {testimonials.map((t) => (
            <Reveal key={t.name}>
              <figure className="card quote">
                <span className="quote-mark" aria-hidden>
                  &ldquo;
                </span>
                <blockquote className="quote-text">{t.quote}</blockquote>
                <figcaption className="quote-by">
                  {t.name} · {t.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- About --------------------------------- */
function About() {
  return (
    <section className="section rule-top" id="about">
      <div className="container-x about-grid">
        <Reveal className="section-head">
          <p className="kicker">About</p>
          <h2>Senior engineering, end to end.</h2>
        </Reveal>
        <Reveal className="about-body">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <div className="about-links">
            <a className="about-link" href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a className="about-link" href={SOCIAL.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a className="about-link" href={SOCIAL.x} target="_blank" rel="noopener noreferrer">
              X ↗
            </a>
            <a className="about-link" href={`mailto:${SITE.email}`}>
              Email ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- FAQ ---------------------------------- */
function Faq() {
  return (
    <section className="section rule-top">
      <div className="container-x">
        <Reveal className="section-head">
          <p className="kicker">Questions</p>
          <h2>Before you book.</h2>
        </Reveal>
        <Reveal>
          <div className="faq">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>
                  {f.q}
                  <span className="faq-icon" aria-hidden />
                </summary>
                <p className="faq-answer">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- Final CTA ------------------------------- */
function FinalCta() {
  return (
    <section className="section rule-top final" id="contact">
      <div className="container-x final-grid">
        <Reveal>
          <p className="kicker">Let&apos;s talk</p>
          <h2>{finalCta.heading}</h2>
          <p className="lead" style={{ color: "var(--color-ink-muted)", marginTop: "1.2rem" }}>
            {finalCta.subhead}
          </p>
          <div style={{ marginTop: "2rem" }}>
            <BookCallButton location="final" />
          </div>
          <p className="urgency">
            <span className="urgency-dot" aria-hidden />
            {finalCta.urgency}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="card lead-card">
            <div className="lead-card-grad gradient-soft" aria-hidden />
            <div className="lead-card-inner">
              <p className="lead-intro">{finalCta.leadMagnetIntro}</p>
              <p className="lead-magnet-title">{finalCta.leadMagnetTitle}</p>
              <LeadForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Footer -------------------------------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container-x footer-inner">
        <div>
          <p className="footer-name">Yovany Luis</p>
          <p className="footer-meta">
            AI Product Engineer · {SITE.location} · {SITE.email}
          </p>
        </div>
        <nav className="footer-social" aria-label="Social">
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={SOCIAL.x} target="_blank" rel="noopener noreferrer">
            X
          </a>
        </nav>
        <p className="footer-copy">
          © {new Date().getFullYear()} Yovany Luis. Built for production —
          like everything I ship.
        </p>
      </div>
    </footer>
  );
}
