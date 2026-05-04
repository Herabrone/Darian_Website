import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Darian Lagman — Full-stack engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0d1b36",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          backgroundImage:
            "radial-gradient(at 25% 0%, rgba(59,130,246,0.25), transparent 55%)",
        }}
      >
        <div style={{ fontFamily: "ui-monospace, monospace", color: "#60a5fa", fontSize: 22 }}>
          darianlagman.ca
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ fontSize: 80, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
          Darian Lagman
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 30,
            color: "#e2e8f0",
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          Full-stack engineer — AI-assisted products, forecasting systems, applied infrastructure.
        </div>
        <div
          style={{
            marginTop: 40,
            fontFamily: "ui-monospace, monospace",
            fontSize: 18,
            color: "#94a3b8",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          PORTFOLIO · 2026
        </div>
      </div>
    ),
    size,
  );
}
