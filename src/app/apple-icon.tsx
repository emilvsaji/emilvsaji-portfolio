import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

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
          background: "linear-gradient(135deg, #1c1c20 0%, #09090b 100%)",
          borderRadius: "36px",
          border: "4px solid rgba(255, 255, 255, 0.2)",
          color: "#ffffff",
          fontSize: "116px",
          fontWeight: 900,
          fontFamily: "ui-monospace, monospace",
          letterSpacing: "-0.05em",
        }}
      >
        E
      </div>
    ),
    {
      ...size,
    }
  );
}
