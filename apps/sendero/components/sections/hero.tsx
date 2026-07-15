import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/layout/cta-buttons";

export function Hero() {
  const t = useTranslations("hero");
  const c = useTranslations("common");
  const p = useTranslations("process");

  return (
    <section className="section section--flush">
      <div className="shell hero-grid">
        <div>
          <p className="kicker">{t("eyebrow")}</p>
          <h1 className="hero-title">
            {t.rich("title", {
              accent: (chunks) => <span className="accent">{chunks}</span>,
            })}
          </h1>
          <p className="hero-sub">{t("subtitle")}</p>

          <div className="hero-cta">
            <BookCallButton
              location="hero"
              className="h-11 rounded-md px-5 text-[0.95rem]"
            />
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-md px-5 text-[0.95rem]"
            >
              <Link href="/work">{c("viewWork")}</Link>
            </Button>
          </div>

          <div className="hero-proof">
            <span>{t("trust.one")}</span>
            <span>{t("trust.two")}</span>
            <span>{t("trust.three")}</span>
          </div>
        </div>

        {/* The trail as an object — an elevation map from start to production */}
        <aside className="map" aria-hidden>
          <div className="map-top">
            <span>Sendero</span>
            <span>05</span>
          </div>
          <svg viewBox="0 0 260 150" fill="none">
            <path
              d="M8 138 L56 138 L56 106 L110 106 L110 74 L164 74 L164 42 L252 42"
              stroke="#235f41"
              strokeWidth="1.6"
            />
            <circle cx="8" cy="138" r="3.5" fill="#faf9f6" stroke="#235f41" strokeWidth="1.6" />
            <circle cx="56" cy="106" r="3.5" fill="#faf9f6" stroke="#235f41" strokeWidth="1.6" />
            <circle cx="110" cy="74" r="3.5" fill="#faf9f6" stroke="#235f41" strokeWidth="1.6" />
            <circle cx="164" cy="42" r="3.5" fill="#faf9f6" stroke="#235f41" strokeWidth="1.6" />
            <circle cx="252" cy="42" r="4" fill="#235f41" />
            <path d="M8 148 L252 148" stroke="#d6d3cb" strokeWidth="1" strokeDasharray="2 4" />
          </svg>
          <div className="map-legend">
            <span>{p("steps.discovery.title")}</span>
            <span>
              <b>{p("steps.launch.title")}</b>
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}
