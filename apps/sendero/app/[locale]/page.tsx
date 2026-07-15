import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Process } from "@/components/sections/process";
import { Values } from "@/components/sections/values";
import { WorkTeaser } from "@/components/sections/work-teaser";
import { TechStack } from "@/components/sections/tech-stack";
import { CtaBand } from "@/components/sections/cta-band";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ServicesOverview />
      <Process />
      <Values />
      <WorkTeaser />
      <TechStack />
      <CtaBand />
    </>
  );
}
