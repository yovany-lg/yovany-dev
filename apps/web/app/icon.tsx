import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Brand monogram favicon — cream "Y" on the accent. Generated (not a static
// asset) so it stays crisp at every size and tracks --color-accent / --color-base.
export default function Icon() {
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
          fontSize: 23,
          fontWeight: 800,
          fontFamily: "Helvetica, Arial, sans-serif",
          borderRadius: 7,
        }}
      >
        Y
      </div>
    ),
    { ...size },
  );
}
