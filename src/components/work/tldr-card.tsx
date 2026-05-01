export function TldrCard({ children }: { children: React.ReactNode }) {
  return (
    <aside
      className="my-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
      style={{ borderLeft: "2px solid var(--color-accent)" }}
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-accent-hi)]">
        TL;DR
      </div>
      <p className="mt-3 text-[15px] leading-[26px] text-[var(--color-fg)]">{children}</p>
    </aside>
  );
}
