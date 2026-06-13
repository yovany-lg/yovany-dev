"use client";

import { track } from "../../../lib/analytics";

/**
 * FAQ accordion built on native <details> (zero JS to render/open — keeps
 * Lighthouse high). The only client behavior is firing `sc_faq_open` the
 * first time each question is expanded.
 */
export function ScFaq({
  faqs,
  vertical,
}: {
  faqs: { q: string; a: string }[];
  vertical: string;
}) {
  return (
    <div className="faq">
      {faqs.map((f) => (
        <details
          key={f.q}
          className="faq-item"
          onToggle={(e) => {
            if ((e.currentTarget as HTMLDetailsElement).open) {
              track("sc_faq_open", { vertical, question: f.q });
            }
          }}
        >
          <summary>
            {f.q}
            <span className="faq-icon" aria-hidden />
          </summary>
          <p className="faq-answer">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
