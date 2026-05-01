import type { Metadata } from "next";
import Link from "next/link";
import { notes } from "#site/content";
import { Section } from "@/components/shared/section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Notes · Darian Lagman",
  description: "Shorter writeups: bioinformatics, cryptology, databases, and other smaller pieces.",
  path: "/notes",
});

export default function NotesPage() {
  const items = [...notes].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  return (
    <Section eyebrow="NOTES" title="Notes.">
      {items.length === 0 ? (
        <p className="text-sm text-[var(--color-fg-subtle)]">No notes published yet.</p>
      ) : (
        <ul className="divide-y divide-[var(--color-border)]">
          {items.map((n) => (
            <li key={n.slug}>
              <Link
                href={`/notes/${n.slugAsParams}`}
                className="flex flex-col gap-1 py-5 transition-colors hover:text-[var(--color-fg)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[var(--color-fg)]">{n.title}</span>
                  <span className="font-mono text-[11px] text-[var(--color-fg-faint)]">
                    {n.publishedAt}
                  </span>
                </div>
                <span className="text-sm text-[var(--color-fg-muted)]">{n.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
