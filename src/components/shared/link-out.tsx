import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function LinkOut({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 text-[var(--color-accent)] hover:text-[var(--color-accent-hi)]",
        className,
      )}
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
    </a>
  );
}
