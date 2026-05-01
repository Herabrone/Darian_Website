import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { NOW_BULLETS, NOW_UPDATED } from "@/data/now";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Now · Darian Lagman",
  description: "What I'm building, reading, and looking for, right now.",
  path: "/now",
});

export default function NowPage() {
  return (
    <Section eyebrow="NOW" title="Currently.">
      <div className="font-mono text-[12px] text-[var(--color-fg-subtle)]">
        Last updated: <span className="text-[var(--color-fg)]">{NOW_UPDATED}</span>
      </div>
      <ul className="mt-8 space-y-4 text-[16px] leading-[26px] text-[var(--color-fg-muted)]">
        {NOW_BULLETS.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-[var(--color-fg-faint)]">—</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <p className="mt-12 max-w-[68ch] text-sm text-[var(--color-fg-subtle)]">
        This page is updated by hand. If it&apos;s stale, send me a nudge.
      </p>
    </Section>
  );
}
