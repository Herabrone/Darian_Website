import { cn } from "@/lib/utils";

export function Kbd({ keys, className }: { keys: string[]; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--color-fg-subtle)]",
        className,
      )}
    >
      {keys.map((k, i) => (
        <kbd key={i} className="font-mono">
          {k}
        </kbd>
      ))}
    </span>
  );
}
