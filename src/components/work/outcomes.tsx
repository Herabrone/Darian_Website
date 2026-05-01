export type Stat = { label: string; value: string; sub?: string };

export function Outcomes({ stats }: { stats: Stat[] }) {
  if (!stats || stats.length === 0) return null;
  return (
    <section className="my-14">
      <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
        Outcomes
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
          >
            <div className="font-mono text-[24px] leading-[1.1] tracking-tight text-[var(--color-fg)]">
              {s.value}
            </div>
            <div className="mt-2 text-[13px] text-[var(--color-fg-muted)]">{s.label}</div>
            {s.sub && (
              <div className="mt-1 font-mono text-[11px] text-[var(--color-fg-faint)]">{s.sub}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
