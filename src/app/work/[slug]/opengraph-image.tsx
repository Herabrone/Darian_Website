import { ImageResponse } from "next/og";
import { work } from "#site/content";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata() {
  return work.map((item) => ({
    id: item.slugAsParams,
    alt: `${item.title} - Darian Lagman`,
    size,
    contentType,
  }));
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = work.find((entry) => entry.slugAsParams === slug);
  const title = item?.title ?? "Darian Lagman";
  const summary = item?.ogDescription ?? item?.summary ?? "Full-stack software, forecasting systems, and AI tools.";
  const category = item?.category ?? "Portfolio";
  const stack = item?.stack.slice(0, 5) ?? ["Next.js", "TypeScript", "Systems"];

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
          padding: "70px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          backgroundImage:
            "radial-gradient(at 18% 0%, rgba(59,130,246,0.30), transparent 52%), radial-gradient(at 86% 82%, rgba(34,197,94,0.16), transparent 42%)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "ui-monospace, monospace", color: "#60a5fa", fontSize: 22 }}>
            darianlagman.ca / work
          </div>
          <div
            style={{
              fontFamily: "ui-monospace, monospace",
              color: "#cbd5e1",
              border: "1px solid #2c4a86",
              borderRadius: 999,
              padding: "10px 16px",
              fontSize: 18,
            }}
          >
            {category}
          </div>
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.04, letterSpacing: -2, maxWidth: 940 }}>
          {title}
        </div>
        <div style={{ marginTop: 22, fontSize: 28, color: "#cbd5e1", maxWidth: 930, lineHeight: 1.32 }}>
          {summary}
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 42 }}>
          {stack.map((item) => (
            <div
              key={item}
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: 17,
                color: "#ffffff",
                background: "#112347",
                border: "1px solid #2c4a86",
                borderRadius: 8,
                padding: "10px 14px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}