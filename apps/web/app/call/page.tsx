import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, BOOKING_CONFIGURED, SITE } from "../../lib/site";
import { callPage } from "../../lib/content";

export const metadata: Metadata = {
  title: "Book a free fit call",
  description:
    "Book a free, no-pressure 20-minute fit call to see whether I'm the right engineer to get your AI feature production-ready.",
  alternates: { canonical: "/call" },
};

export default function CallPage() {
  return (
    <main id="main" className="container-x call-wrap">
      <aside className="call-aside">
        <Link href="/" className="call-back">
          <span aria-hidden>←</span> Back to yovany.dev
        </Link>
        <p className="kicker" style={{ marginTop: "1.6rem" }}>
          Free · 20 minutes
        </p>
        <h1>{callPage.heading}</h1>
        <p className="call-intro">{callPage.intro}</p>

        <ul className="call-expect">
          {callPage.expect.map((step, i) => (
            <li key={step}>
              <span className="call-step">0{i + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>

        <p className="call-promise">{callPage.promise}</p>
      </aside>

      {BOOKING_CONFIGURED ? (
        <div className="call-embed">
          <iframe
            src={BOOKING_URL}
            title="Book a fit call with Yovany Luis"
            loading="lazy"
            allow="camera; microphone; fullscreen; payment"
          />
        </div>
      ) : (
        <div className="call-embed call-fallback">
          <p className="kicker">Scheduler coming online</p>
          <p className="call-fallback-title">
            Grab a time the simple way — email me.
          </p>
          <p className="call-fallback-text">
            Tell me a bit about your AI feature and a couple of times that work,
            and I&apos;ll send a calendar invite.
          </p>
          <a
            className="btn btn-primary"
            href={`mailto:${SITE.email}?subject=${encodeURIComponent(
              "Fit call — production AI",
            )}&body=${encodeURIComponent(
              "Hi Yovany,\n\nI'd like to book a 20-min fit call. Here's what I'm working on:\n\n- AI feature / project:\n- Where it's stuck:\n- A couple of times that work for me:\n\nThanks!",
            )}`}
          >
            Email me to book <span aria-hidden>→</span>
          </a>
        </div>
      )}
    </main>
  );
}
