import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/section";
import { ProductLink } from "@/components/layout/product-link";
import { Button } from "@/components/ui/button";

/**
 * Sendero's own products. Citania is featured as product 01; it links out to
 * citania.mx (where clinic sales happen) instead of selling here.
 */
export function Products() {
  const t = useTranslations("products");
  const points = t.raw("citania.points") as string[];

  return (
    <Section id="products">
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <article className="product">
        <div>
          <span className="product-label">{t("citania.label")}</span>
          <h3 className="product-name">{t("citania.name")}</h3>
          <p className="product-tagline">{t("citania.tagline")}</p>
          <p className="product-desc">{t("citania.description")}</p>
        </div>

        <div className="product-side">
          <ul className="svc-points">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="product-note">{t("citania.forClinics")}</p>
          <Button asChild className="h-11 rounded-md px-5 text-[0.95rem]">
            <ProductLink product="citania" location="products">
              {t("citania.cta")}
              <ArrowUpRight className="size-4" />
            </ProductLink>
          </Button>
        </div>
      </article>
    </Section>
  );
}
