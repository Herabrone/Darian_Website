import Link from "next/link";
import { NOW_BULLETS, NOW_UPDATED } from "@/data/now";

export function NowCard() {
  return (
    <Link
      href="/now"
      className="block rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-hi)]"
    >
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-success)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-success)]" />
          </span>
          Now
        </div>
        <span className="font-mono text-[11px] text-[var(--color-fg-faint)]">{NOW_UPDATED}</span>
      </div>
      <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-fg-muted)]">
        {NOW_BULLETS.slice(0, 3).map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-[var(--color-fg-faint)]">—</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 font-mono text-[12px] text-[var(--color-accent)]">Read /now →</div>
    </Link>
  );
}
