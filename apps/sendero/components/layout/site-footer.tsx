import { useTranslations } from "next-intl";
import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/layout/logo";
import { ProductLink } from "@/components/layout/product-link";
import { siteConfig } from "@/lib/site";

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
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
            <div className="mt-1 flex items-center gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="text-muted-foreground transition-colors hover:text-brand"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>

          <FooterCol title={t("footer.productsTitle")}>
            <ProductLink
              product="citania"
              location="footer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {siteConfig.products.citania.name}
              <ArrowUpRight className="size-3.5" />
            </ProductLink>
          </FooterCol>

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
            <FooterLink href="/privacidad">{t("footer.privacy")}</FooterLink>
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
          <div className="flex items-center gap-4">
            <Link
              href="/privacidad"
              className="transition-colors hover:text-foreground"
            >
              {t("footer.privacy")}
            </Link>
            <p className="font-mono text-xs">{t("footer.madeWith")}</p>
          </div>
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
