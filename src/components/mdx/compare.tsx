export function Compare({ children }: { children: React.ReactNode }) {
  return <div className="my-8 grid gap-4 md:grid-cols-2">{children}</div>;
}

export function CompareItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
      <h4 className="text-[15px] font-semibold text-[var(--color-fg)]">{title}</h4>
      <div className="mt-2 text-[14px] leading-[22px] text-[var(--color-fg-muted)]">{children}</div>
    </div>
  );
}
