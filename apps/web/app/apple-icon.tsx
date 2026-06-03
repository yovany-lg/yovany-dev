import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon — full-bleed (iOS applies its own rounded mask), so no radius.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f0341a",
          color: "#faf9f6",
          fontSize: 120,
          fontWeight: 800,
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        Y
      </div>
    ),
    { ...size },
  );
}
