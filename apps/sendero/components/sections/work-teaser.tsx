import { useTranslations } from "next-intl";
import { Section, SectionHeader } from "@/components/layout/section";
import { WorkCard, WORK_ITEMS } from "@/components/sections/work-card";

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
        {WORK_ITEMS.map((key) => (
          <WorkCard key={key} itemKey={key} href="/work" location="products" />
        ))}
      </div>

      <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-[color:var(--ink-faint)]">
        {t("note")}
      </p>
    </Section>
  );
}
