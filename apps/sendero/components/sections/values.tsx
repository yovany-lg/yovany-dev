import { useTranslations } from "next-intl";
import { Section, SectionHeader } from "@/components/layout/section";

const ITEMS = ["shipFast", "ownership", "senior", "aiNative"] as const;

export function Values() {
  const t = useTranslations("values");

  return (
    <Section id="values">
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="vals">
        {ITEMS.map((key, i) => (
          <div key={key} className="val">
            <span className="val-i">{String(i + 1).padStart(2, "0")}</span>
            <h3>{t(`items.${key}.title`)}</h3>
            <p>{t(`items.${key}.description`)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
