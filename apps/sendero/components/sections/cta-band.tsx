import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/layout/cta-buttons";
import { siteConfig } from "@/lib/site";

export function CtaBand() {
  const t = useTranslations();

  return (
    <Section>
      <div className="close-grid">
        <div>
          <p className="kicker">{t("common.getStarted")}</p>
          <h2>{t("cta.title")}</h2>
          <p className="lead">{t("contact.subtitle")}</p>
        </div>

        <div className="close-actions">
          <BookCallButton
            location="final_cta"
            className="h-11 rounded-md px-5 text-[0.95rem]"
          >
            {t("cta.primary")}
          </BookCallButton>
          <Button
            asChild
            variant="outline"
            className="h-11 rounded-md px-5 text-[0.95rem]"
          >
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
