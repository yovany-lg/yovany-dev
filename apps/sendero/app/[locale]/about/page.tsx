import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Values } from "@/components/sections/values";
import { CtaBand } from "@/components/sections/cta-band";

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return params.then(({ locale }) => pageMetadata(locale, "about"));
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const body = t.raw("body") as string[];

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("lead")} />

      <Section>
        <div className="grid gap-x-16 gap-y-10 md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]">
          <div>
            <p className="kicker md:sticky md:top-28">{t("valuesTitle")}</p>
          </div>

          <div className="max-w-[63ch]">
            {body.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-balance text-[1.375rem] leading-[1.55] text-[color:var(--ink)]"
                    : "mt-7 text-[1.1875rem] leading-[1.85] text-[color:var(--ink-muted)]"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Values />
      <CtaBand />
    </>
  );
}
