import { cn } from "@/lib/utils";

export function Section({
  eyebrow,
  title,
  count,
  children,
  className,
  containerClassName,
}: {
  eyebrow?: string;
  title?: string;
  count?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      className={cn(
        "border-t border-[var(--color-border)] py-20 lg:py-28 first:border-t-0",
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8", containerClassName)}>
        {(eyebrow || title) && (
          <header className="mb-12">
            {eyebrow && (
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
                {eyebrow}
                {count ? <span className="text-[var(--color-fg-faint)]"> / {count}</span> : null}
              </div>
            )}
            {title && (
              <h2 className="mt-3 text-[32px] font-semibold leading-[40px] tracking-[-0.015em] text-[var(--color-fg)]">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
