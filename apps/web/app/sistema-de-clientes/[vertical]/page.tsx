import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getVertical,
  publishedVerticales,
} from "../../../content/sistema-de-clientes/verticales";
import { verticalContent } from "../../../content/sistema-de-clientes/hub";
import { SistemaTemplate } from "../_components/SistemaTemplate";
import { ServiceJsonLd } from "../_components/ServiceJsonLd";

type Params = { vertical: string };

/** Prerender only published verticals; any other slug 404s. */
export function generateStaticParams() {
  return publishedVerticales().map((v) => ({ vertical: v.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { vertical } = await params;
  const v = getVertical(vertical);
  if (!v) return {};

  const path = `/sistema-de-clientes/${v.slug}`;
  return {
    title: { absolute: v.seo.title },
    description: v.seo.description,
    keywords: v.seo.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: v.seo.title,
      description: v.seo.description,
      url: path,
      locale: "es_MX",
    },
  };
}

export default async function VerticalPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { vertical } = await params;
  const v = getVertical(vertical);
  if (!v) notFound();

  return (
    <>
      <ServiceJsonLd
        name={v.seo.title}
        description={v.seo.description}
        path={`/sistema-de-clientes/${v.slug}`}
      />
      <SistemaTemplate content={verticalContent(v)} />
    </>
  );
}
