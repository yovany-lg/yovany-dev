import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section, SectionHeader } from "@/components/layout/section";

const ITEMS = ["logistics", "marketplace", "support", "whatsappBot"] as const;

export function WorkTeaser() {
  const t = useTranslations("work");

  return (
    <Section id="work">
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="work-list">
        {ITEMS.map((key) => (
          <Link key={key} href="/work" className="work-row">
            <div>
              <span className="work-cat">{t(`items.${key}.category`)}</span>
              <div className="work-name">{t(`items.${key}.name`)}</div>
            </div>
            <p className="work-desc">{t(`items.${key}.description`)}</p>
            <div className="work-result">
              <b>{t("resultLabel")}</b>
              {t(`items.${key}.result`)}
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-[color:var(--ink-faint)]">
        {t("note")}
      </p>
    </Section>
  );
}
