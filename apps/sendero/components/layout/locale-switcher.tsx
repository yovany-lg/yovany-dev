"use client";

import { useLocale } from "next-intl";
import { Languages } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const other = locale === "es" ? "en" : "es";

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={`Switch language to ${other.toUpperCase()}`}
      onClick={() => {
        track("locale_switched", { from: locale, to: other });
        router.replace(pathname, { locale: other });
      }}
      className="gap-1.5 font-mono uppercase"
    >
      <Languages className="text-brand" />
      {other}
    </Button>
  );
}
