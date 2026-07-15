import { useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const t = useTranslations("common");

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-radial opacity-50"
        aria-hidden
      />
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-6 text-center container-px">
        <span className="font-mono text-6xl font-semibold text-brand-gradient">
          404
        </span>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("notFoundTitle")}
        </h1>
        <p className="text-lg text-muted-foreground">{t("notFoundText")}</p>
        <Button asChild className="h-11 rounded-xl px-6 text-base">
          <Link href="/">
            <ArrowLeft />
            {t("backHome")}
          </Link>
        </Button>
      </div>
    </section>
  );
}
