import { StackPill } from "@/components/work/stack-pill";

export function TechStack({
  groups,
}: {
  groups: { label: string; items: string[] }[];
}) {
  return (
    <div className="my-8 space-y-3">
      {groups.map((g) => (
        <div key={g.label} className="grid grid-cols-1 gap-2 sm:grid-cols-[140px_1fr]">
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
            {g.label}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {g.items.map((i) => (
              <StackPill key={i} label={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
