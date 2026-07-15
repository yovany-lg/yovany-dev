import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export function WorkCard({
  itemKey,
  className,
}: {
  itemKey: string;
  className?: string;
}) {
  const t = useTranslations("work");

  return (
    <div className={cn("work-row", className)}>
      <div>
        <span className="work-cat">{t(`items.${itemKey}.category`)}</span>
        <div className="work-name">{t(`items.${itemKey}.name`)}</div>
      </div>
      <p className="work-desc">{t(`items.${itemKey}.description`)}</p>
      <div className="work-result">
        <b>{t("resultLabel")}</b>
        {t(`items.${itemKey}.result`)}
      </div>
    </div>
  );
}

export const WORK_ITEMS = [
  "logistics",
  "marketplace",
  "support",
  "whatsappBot",
] as const;
