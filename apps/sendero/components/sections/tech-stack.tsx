import { useTranslations } from "next-intl";
import { Section, SectionHeader } from "@/components/layout/section";
import { STACK } from "@/lib/stack";

export function TechStack() {
  const t = useTranslations("stack");

  return (
    <Section id="stack">
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="stack-groups">
        {STACK.map((group) => (
          <div key={group.group} className="stack-group">
            <span className="stack-label">{group.group}</span>
            <div className="stack-items">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
