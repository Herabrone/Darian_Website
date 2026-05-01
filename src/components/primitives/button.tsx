import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent)] text-[var(--color-accent-contrast)] hover:bg-[var(--color-accent-hi)] border border-transparent",
  secondary:
    "border border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-fg)] hover:bg-[var(--color-surface-hi)]",
  ghost: "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]",
};

export function Button({
  href,
  variant = "secondary",
  external,
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const cls = cn(
    "inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
    styles[variant],
    className,
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
