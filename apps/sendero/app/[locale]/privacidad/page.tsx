import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import {
  PrivacyNotice,
  NOTICE_FACTS,
} from "@/components/sections/privacy-notice";

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return params.then(({ locale }) => pageMetadata(locale, "privacy"));
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");
  const languageNote = t("languageNote");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("lead")} />
      <Section>
        <div className="legal-meta">
          {t("updated")}: {NOTICE_FACTS.fecha}
          {languageNote && (
            <span className="mt-3 block normal-case tracking-normal">
              {languageNote}
            </span>
          )}
        </div>
        <PrivacyNotice />
      </Section>
    </>
  );
}
