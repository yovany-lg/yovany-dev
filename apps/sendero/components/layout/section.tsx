import { cn } from "@/lib/utils";

/**
 * A full-bleed section with a hairline top rule and the shared content shell.
 * Rhythm and separators come from `.section` / `.shell` in globals.css.
 */
export function Section({
  id,
  className,
  flush = false,
  children,
}: {
  id?: string;
  className?: string;
  /** Drop the top hairline (use for the first section under the header). */
  flush?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("section", flush && "section--flush", className)}>
      <div className="shell">{children}</div>
    </section>
  );
}

/** Mono, uppercase, wide-tracked label with a small Monte tick. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="kicker">{children}</p>;
}

/**
 * The kicker → h2 → lead triad. Left-aligned everywhere by design — centered
 * headers read as generic, so the `align` prop is accepted but intentionally
 * ignored to keep existing call sites working.
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("head", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {subtitle && <p className="lead">{subtitle}</p>}
    </div>
  );
}
