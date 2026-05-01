export function Steps({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 [counter-reset:step] space-y-6 border-l border-[var(--color-border)] pl-8">
      {children}
    </div>
  );
}

export function Step({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="relative [counter-increment:step]">
      <div className="absolute -left-[calc(2rem+1px)] top-0 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg)] font-mono text-[12px] text-[var(--color-fg)] [content:counter(step)] before:content-[counter(step)]" />
      <h4 className="text-[17px] font-semibold text-[var(--color-fg)]">{title}</h4>
      {children && <div className="mt-2 text-[15px] text-[var(--color-fg-muted)]">{children}</div>}
    </div>
  );
}
