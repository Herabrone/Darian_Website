import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { WorkIndex } from "@/components/work/work-index";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Work · Darian Lagman",
  description:
    "Four case studies — Stockman, a forecasting engine, an N-body simulator, and an MCP architecture study.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <Section eyebrow="WORK" title="Work.">
      <p className="mb-10 max-w-[68ch] text-[17px] leading-[28px] text-[var(--color-fg-muted)]">
        Four case studies, plus shorter notes. Filter by category, hover a card to preview.
      </p>
      <WorkIndex />
    </Section>
  );
}
