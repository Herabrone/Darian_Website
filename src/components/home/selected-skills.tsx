import { SKILLS } from "@/data/skills";
import { Reveal } from "@/components/motion/reveal";

export function SelectedSkills() {
  return (
    <div className="space-y-4">
      {SKILLS.map((g) => (
        <Reveal
          key={g.label}
          className="grid grid-cols-1 gap-3 border-t border-[var(--color-border)] py-4 sm:grid-cols-[180px_1fr]"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
            {g.label}
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[13px] text-[var(--color-fg-muted)]">
            {g.items.map((s, i) => (
              <span key={s} className="inline-flex items-center gap-3">
                {s}
                {i < g.items.length - 1 && <span className="text-[var(--color-fg-faint)]">·</span>}
              </span>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
