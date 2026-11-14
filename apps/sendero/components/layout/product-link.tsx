"use client";

import { useLocale } from "next-intl";
import { siteConfig } from "@/lib/site";
import { track, type CtaLocation } from "@/lib/analytics";

type ProductKey = keyof typeof siteConfig.products;

/**
 * Outbound link to a Sendero product's own site (e.g. citania.mx). Clinic
 * buyers convert there, so every click is tracked as `product_click` with its
 * placement — the referral side of the funnel stays measurable. Because
 * `noreferrer` strips the Referer header, attribution travels as UTM params
 * (utm_content = placement) so the product site can see sendero.pro traffic.
 */
export function ProductLink({
  product,
  location,
  className,
  children,
  onClick,
  ...props
}: Omit<React.ComponentProps<"a">, "href" | "target" | "rel"> & {
  product: ProductKey;
  location: CtaLocation;
}) {
  const locale = useLocale();
  const url = new URL(siteConfig.products[product].url);
  url.searchParams.set("utm_source", "sendero.pro");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_content", location);

  return (
    <a
      href={url.toString()}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className={className}
      onClick={(e) => {
        track("product_click", { product, location, locale });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
