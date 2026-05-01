import { cn } from "@/lib/utils";

export function StackPill({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-border)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--color-fg-subtle)]",
        className,
      )}
    >
      {label}
    </span>
  );
}
