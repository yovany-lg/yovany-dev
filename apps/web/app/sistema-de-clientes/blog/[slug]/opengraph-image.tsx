import { ImageResponse } from "next/og";
import {
  getArticulo,
  publishedArticulos,
} from "../../../../content/sistema-de-clientes/blog";

export const alt = "Artículo — Agente de WhatsApp con IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return publishedArticulos().map((a) => ({ slug: a.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticulo(slug);
  const title = a?.title ?? "Más clientes por WhatsApp";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#faf9f6",
          color: "#0c0c0b",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#5f5d57",
          }}
        >
          <div style={{ width: 13, height: 13, borderRadius: 99, background: "#f0341a" }} />
          Agente de WhatsApp con IA · Blog
        </div>

        <div
          style={{
            display: "flex",
            fontSize: title.length > 70 ? 52 : 62,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 1040,
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#5f5d57" }}>
          yovany.dev · Guadalajara
        </div>
      </div>
    ),
    { ...size },
  );
}
