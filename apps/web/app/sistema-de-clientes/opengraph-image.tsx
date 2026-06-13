import { ImageResponse } from "next/og";

export const alt = "Sistema de Clientes — sitio web + WhatsApp con IA + Google Maps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          Sistema de Clientes
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -3,
              maxWidth: 1040,
            }}
          >
            <span>Tu negocio contestando WhatsApp&nbsp;</span>
            <span style={{ color: "#f0341a" }}>las 24 horas.</span>
          </div>
          <div style={{ marginTop: 30, fontSize: 27, color: "#5f5d57" }}>
            Sitio web + asistente de WhatsApp con IA + Google Maps · Guadalajara
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
