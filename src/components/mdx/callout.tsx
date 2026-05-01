import { cn } from "@/lib/utils";

type Tone = "info" | "warn" | "success";

export function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: Tone;
  title?: string;
  children: React.ReactNode;
}) {
  const toneStyles: Record<Tone, string> = {
    info: "border-l-[var(--color-accent)] bg-[var(--color-accent-bg)]",
    warn: "border-l-[var(--color-warn)] bg-[var(--color-warn-bg)]",
    success: "border-l-[var(--color-success)] bg-[var(--color-success-bg)]",
  };
  return (
    <aside
      className={cn(
        "my-6 rounded-md border border-[var(--color-border)] border-l-2 px-5 py-4 text-[15px]",
        toneStyles[tone],
      )}
    >
      {title && <div className="mb-1 font-semibold text-[var(--color-fg)]">{title}</div>}
      <div className="text-[var(--color-fg-muted)]">{children}</div>
    </aside>
  );
}
