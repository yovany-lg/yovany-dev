"use client";

import * as React from "react";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { useLocale, useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig, whatsappLink } from "@/lib/site";
import { track, type CtaLocation } from "@/lib/analytics";

const CAL_NAMESPACE = "intro";

/** Initializes the Cal.com embed once per page. */
function useCalEmbed() {
  useEffect(() => {
    let active = true;
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      if (!active) return;
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": "#235f41" },
          dark: { "cal-brand": "#235f41" },
        },
      });
    })();
    return () => {
      active = false;
    };
  }, []);
}

type BookCallButtonProps = React.ComponentProps<typeof Button> & {
  location: CtaLocation;
};

export function BookCallButton({
  location,
  className,
  children,
  onClick,
  ...props
}: BookCallButtonProps) {
  const t = useTranslations("common");
  const locale = useLocale();
  useCalEmbed();

  return (
    <Button
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={siteConfig.calLink}
      data-cal-config={JSON.stringify({ layout: "month_view", theme: "light" })}
      className={className}
      onClick={(e) => {
        track("cta_book_call", { location, locale });
        onClick?.(e);
      }}
      {...props}
    >
      {children ?? t("bookCall")}
    </Button>
  );
}

type WhatsAppButtonProps = React.ComponentProps<typeof Button> & {
  location: CtaLocation;
  showIcon?: boolean;
};

export function WhatsAppButton({
  location,
  className,
  children,
  showIcon = true,
  ...props
}: WhatsAppButtonProps) {
  const t = useTranslations("common");
  const locale = useLocale();

  return (
    <Button
      asChild
      variant="outline"
      className={cn(className)}
      {...props}
    >
      <a
        href={whatsappLink(t("whatsappPrefill"))}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("cta_whatsapp", { location, locale })}
      >
        {showIcon && <MessageCircle className="text-brand" />}
        {children ?? t("whatsapp")}
      </a>
    </Button>
  );
}
