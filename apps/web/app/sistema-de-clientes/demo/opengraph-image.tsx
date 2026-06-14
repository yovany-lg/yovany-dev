import { ImageResponse } from "next/og";

export const alt = "Demo — mira al agente de WhatsApp contestar a las 10 de la noche";
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
          background: "#0c0c0b",
          color: "#faf9f6",
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
            color: "#9a978e",
          }}
        >
          <div style={{ width: 13, height: 13, borderRadius: 99, background: "#128c4b" }} />
          Demo en vivo
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 74,
              fontWeight: 800,
              lineHeight: 1.03,
              letterSpacing: -3,
              maxWidth: 1040,
            }}
          >
            <span>Mira al agente contestar&nbsp;</span>
            <span style={{ color: "#36d77e" }}>a las 10 de la noche.</span>
          </div>
          <div style={{ marginTop: 30, fontSize: 27, color: "#9a978e" }}>
            Contesta · califica · pide fotos · te pasa el prospecto listo
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
