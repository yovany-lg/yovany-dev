import { cn } from "@/lib/utils";

/** Sendero wordmark with a winding "trail" mark (start + summit nodes). */
export function Logo({
  className,
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M3 20C8 20 8 4 13 4C18 4 17 13 21 13"
          stroke="var(--brand)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="3" cy="20" r="2.4" fill="var(--brand)" />
        <circle cx="21" cy="13" r="2.4" fill="var(--brand)" />
      </svg>
      {withWordmark && (
        <span className="font-[family-name:var(--font-display)] text-lg font-extrabold uppercase tracking-tight text-foreground">
          Sendero
        </span>
      )}
    </span>
  );
}
