import { useTranslations } from "next-intl";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ServiceKey } from "@/lib/services";

/**
 * A service rendered as an editorial hairline block — no icon tile, no card,
 * no glow. Structure comes from a top hairline and Monte em-dash points.
 * The `icon` prop is kept in the API for call-site compatibility but is
 * intentionally not rendered.
 */
export function ServiceCard({
  serviceKey,
  detailed = false,
  className,
}: {
  icon: LucideIcon;
  serviceKey: ServiceKey;
  detailed?: boolean;
  className?: string;
}) {
  const t = useTranslations(`services.${serviceKey}`);
  const points = detailed ? (t.raw("points") as string[]) : [];

  return (
    <div
      className={cn(
        "border-t border-[color:var(--hairline)] pt-7",
        className,
      )}
    >
      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.03em] text-[color:var(--ink)]">
        {t("title")}
      </h3>
      <p className="mt-3 max-w-[52ch] leading-relaxed text-[color:var(--ink-muted)]">
        {t("description")}
      </p>

      {detailed && points.length > 0 && (
        <ul className="svc-points mt-6 border-t border-[color:var(--hairline)] pt-6">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
