import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "accent" | "success" | "warn";
  className?: string;
}) {
  const tones: Record<string, string> = {
    default: "border-[var(--color-border)] text-[var(--color-fg-subtle)]",
    accent: "border-[var(--color-accent-ring)] text-[var(--color-accent-hi)] bg-[var(--color-accent-bg)]",
    success: "border-[var(--color-success-ring)] text-[var(--color-success)] bg-[var(--color-success-bg)]",
    warn: "border-[var(--color-warn-ring)] text-[var(--color-warn)] bg-[var(--color-warn-bg)]",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.04em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
