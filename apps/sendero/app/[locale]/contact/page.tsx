import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { ContactForm } from "@/components/sections/contact-form";
import { BookCallButton } from "@/components/layout/cta-buttons";
import { siteConfig } from "@/lib/site";

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return params.then(({ locale }) => pageMetadata(locale, "contact"));
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <Section>
        <div className="grid items-start gap-x-14 gap-y-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <ContactForm />
          </div>

          <aside className="border-t border-[color:var(--hairline)] pt-12 lg:border-t-0 lg:border-l lg:border-[color:var(--hairline)] lg:pt-0 lg:pl-14">
            <p className="kicker">{t("bookTitle")}</p>
            <p className="mt-4 max-w-sm text-[color:var(--ink-muted)]">
              {t("bookSubtitle")}
            </p>
            <div className="mt-6">
              <BookCallButton location="contact_page" className="h-11 w-full sm:w-auto sm:px-6" />
            </div>

            <div className="mt-10 border-t border-[color:var(--hairline)] pt-8">
              <p className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.14em] text-[color:var(--ink-faint)]">
                {t("form.email")}
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 inline-block text-[color:var(--ink)] underline decoration-[color:var(--hairline-hard)] decoration-1 underline-offset-4 transition-colors hover:decoration-[color:var(--monte)]"
              >
                {siteConfig.email}
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
