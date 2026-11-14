import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { ProductLink } from "@/components/layout/product-link";
import type { CtaLocation } from "@/lib/analytics";

/** Citania first: it's Sendero's own product in production, not an example. */
export const WORK_ITEMS = [
  "citania",
  "logistics",
  "marketplace",
  "support",
] as const;

export type WorkItem = (typeof WORK_ITEMS)[number];

/**
 * One editorial work row. Citania links out to citania.mx (clinic sales
 * happen there); the illustrative items optionally link to /work.
 */
export function WorkCard({
  itemKey,
  href,
  location = "work_page",
  className,
}: {
  itemKey: WorkItem;
  /** Internal link for the illustrative rows (e.g. "/work" on the teaser). */
  href?: string;
  location?: CtaLocation;
  className?: string;
}) {
  const t = useTranslations("work");

  const body = (
    <>
      <div>
        <span className="work-cat">{t(`items.${itemKey}.category`)}</span>
        <div className="work-name">
          {t(`items.${itemKey}.name`)}
          {itemKey === "citania" && <span aria-hidden> ↗</span>}
        </div>
      </div>
      <p className="work-desc">{t(`items.${itemKey}.description`)}</p>
      <div className="work-result">
        <b>{t("resultLabel")}</b>
        {t(`items.${itemKey}.result`)}
      </div>
    </>
  );

  if (itemKey === "citania") {
    return (
      <ProductLink
        product="citania"
        location={location}
        className={cn("work-row", className)}
      >
        {body}
      </ProductLink>
    );
  }
  if (href) {
    return (
      <Link href={href} className={cn("work-row", className)}>
        {body}
      </Link>
    );
  }
  return <div className={cn("work-row", className)}>{body}</div>;
}
