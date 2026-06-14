import { ImageResponse } from "next/og";
import {
  getVertical,
  publishedVerticales,
} from "../../../content/sistema-de-clientes/verticales";

export const alt = "Sistema de Clientes — Yovany Luis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return publishedVerticales().map((v) => ({ vertical: v.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ vertical: string }>;
}) {
  const { vertical } = await params;
  const v = getVertical(vertical);
  const giro = v?.giro ?? "negocios de servicios";

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
          Agente de WhatsApp con IA
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#5f5d57", textTransform: "capitalize" }}>
            {`Para ${giro}`}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: 18,
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -3,
              maxWidth: 1040,
            }}
          >
            <span>Contestando WhatsApp&nbsp;</span>
            <span style={{ color: "#f0341a" }}>24/7.</span>
          </div>
          <div style={{ marginTop: 30, fontSize: 27, color: "#5f5d57" }}>
            Sitio web + asistente con IA + Google Maps · Guadalajara
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
