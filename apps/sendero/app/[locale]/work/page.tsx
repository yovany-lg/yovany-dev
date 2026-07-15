import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { WorkCard, WORK_ITEMS } from "@/components/sections/work-card";
import { CtaBand } from "@/components/sections/cta-band";

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return params.then(({ locale }) => pageMetadata(locale, "work"));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("work");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <Section>
        <div className="work-list">
          {WORK_ITEMS.map((key) => (
            <WorkCard key={key} itemKey={key} />
          ))}
        </div>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-[color:var(--ink-faint)]">
          {t("note")}
        </p>
      </Section>
      <CtaBand />
    </>
  );
}
