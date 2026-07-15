import { Eyebrow } from "@/components/layout/section";

/** Inner-page header: kicker → title → lead, left-aligned on paper. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <section className="section section--flush">
      <div className="shell head">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="lead">{subtitle}</p>}
      </div>
    </section>
  );
}
