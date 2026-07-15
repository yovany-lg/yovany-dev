import { useTranslations } from "next-intl";
import { Section, SectionHeader } from "@/components/layout/section";

const STEPS = ["discovery", "design", "build", "launch", "iterate"] as const;

export function Process() {
  const t = useTranslations("process");

  return (
    <Section id="process">
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* The sendero, made literal: dashed waypoints from idea to launch */}
      <ol className="proc">
        {STEPS.map((step, i) => (
          <li key={step} className="proc-step">
            <span className="proc-node">{String(i + 1).padStart(2, "0")}</span>
            <span className="proc-name">{t(`steps.${step}.title`)}</span>
            <p className="proc-desc">{t(`steps.${step}.description`)}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
