import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { ServiceCard } from "@/components/sections/service-card";
import { Process } from "@/components/sections/process";
import { CtaBand } from "@/components/sections/cta-band";
import { SERVICES } from "@/lib/services";
import { ProductLink } from "@/components/layout/product-link";

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return params.then(({ locale }) => pageMetadata(locale, "services"));
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <Section>
        <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
          {SERVICES.map((s) => (
            <ServiceCard key={s.key} icon={s.icon} serviceKey={s.key} detailed />
          ))}
        </div>
        <p className="mt-12 border-l-2 border-[color:var(--monte)] pl-3.5 text-[color:var(--ink-muted)]">
          <ProductLink
            product="citania"
            location="services_page"
            className="underline decoration-[color:var(--hairline-hard)] decoration-1 underline-offset-4 transition-colors hover:decoration-[color:var(--monte)]"
          >
            {t("clinicNote")}
          </ProductLink>
        </p>
      </Section>
      <Process />
      <CtaBand />
    </>
  );
}
