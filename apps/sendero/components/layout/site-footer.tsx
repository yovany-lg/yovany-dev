import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/lib/site";

// lucide-react v1 removed brand logos (trademark), so we inline them.
function GithubGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56v-2.02c-3.2.7-3.88-1.37-3.88-1.37-.53-1.35-1.28-1.71-1.28-1.71-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z" />
    </svg>
  );
}
function LinkedinGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z" />
    </svg>
  );
}

export function SiteFooter() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  const services = [
    { key: "web", href: "/services" },
    { key: "mobile", href: "/services" },
    { key: "ai", href: "/services" },
    { key: "whatsapp", href: "/services" },
  ] as const;

  const company = [
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.work"), href: "/work" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  return (
    <footer className="border-t border-border bg-background/40">
      <div className="mx-auto w-full max-w-6xl py-16 container-px">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
            <div className="mt-1 flex items-center gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-brand"
              >
                <GithubGlyph />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-brand"
              >
                <LinkedinGlyph />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="text-muted-foreground transition-colors hover:text-brand"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>

          <FooterCol title={t("footer.servicesTitle")}>
            {services.map((s, i) => (
              <FooterLink key={i} href={s.href}>
                {t(`services.${s.key}.title`)}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title={t("footer.companyTitle")}>
            {company.map((c) => (
              <FooterLink key={c.href} href={c.href}>
                {c.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title={t("footer.contactTitle")}>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {siteConfig.email}
            </a>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("common.bookCall")}
            </Link>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {siteConfig.legalName} ({siteConfig.name}).{" "}
            {t("footer.rights")}
          </p>
          <p className="font-mono text-xs">{t("footer.madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/70">
        {title}
      </h3>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
}
