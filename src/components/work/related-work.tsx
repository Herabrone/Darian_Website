import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { relatedProjects } from "@/data/projects";

export function RelatedWork({ currentSlug }: { currentSlug: string }) {
  const items = relatedProjects(currentSlug, 2);
  if (items.length === 0) return null;
  return (
    <nav className="mt-16 grid gap-4 border-t border-[var(--color-border)] pt-10 sm:grid-cols-2">
      {items.map((p) => (
        <Link
          key={p.slug}
          href={`/work/${p.slug}`}
          className="group flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-hi)]"
        >
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
              Related
            </div>
            <div className="mt-1 text-[var(--color-fg)]">{p.title}</div>
          </div>
          <ArrowRight
            className="h-4 w-4 text-[var(--color-fg-subtle)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-accent-hi)]"
            strokeWidth={1.75}
          />
        </Link>
      ))}
    </nav>
  );
}
