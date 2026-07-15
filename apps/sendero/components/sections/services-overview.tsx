import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Section, SectionHeader } from "@/components/layout/section";
import { SERVICES } from "@/lib/services";

export function ServicesOverview() {
  const t = useTranslations("services");
  const c = useTranslations("common");

  return (
    <Section id="services">
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="svc-list">
        {SERVICES.map((s, i) => {
          const points = t.raw(`${s.key}.points`) as string[];
          return (
            <details key={s.key} className="svc" open={i === 0}>
              <summary>
                <span className="svc-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="svc-title">{t(`${s.key}.title`)}</span>
                <span className="svc-plus" aria-hidden />
              </summary>
              <div className="svc-body">
                <p className="svc-desc">{t(`${s.key}.description`)}</p>
                <ul className="svc-points">
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </details>
          );
        })}
      </div>

      <Link
        href="/services"
        className="mt-8 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--monte)] hover:opacity-70"
      >
        {c("allServices")}
        <ArrowRight className="size-3.5" />
      </Link>
    </Section>
  );
}
