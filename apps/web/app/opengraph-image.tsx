import { ImageResponse } from "next/og";

export const alt = "Yovany Luis — ship production-grade AI features";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dynamically generated share image — light studio look, no static asset.
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
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#5f5d57",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 13, height: 13, borderRadius: 99, background: "#f0341a" }} />
            yovany.dev
          </div>
          <div>Production AI — not prototypes</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: -3,
              maxWidth: 1000,
            }}
          >
            <span>Ship AI features your users&nbsp;</span>
            <span style={{ color: "#f0341a" }}>actually trust.</span>
          </div>
          <div style={{ marginTop: 34, fontSize: 28, color: "#5f5d57" }}>
            Senior engineer · production AI · 8+ years · ex-Immunefi &amp; Thrive Market
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
