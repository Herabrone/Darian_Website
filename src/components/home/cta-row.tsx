import { SITE } from "@/lib/seo";

export function CtaRow() {
  return (
    <div className="flex flex-col gap-3 text-sm text-[var(--color-fg-muted)] sm:flex-row sm:items-center sm:justify-between">
      <p>
        Looking for: full-time SWE, MLE, or AI engineering roles · Summer 2026 onward.
      </p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[13px]">
        <a href={`mailto:${SITE.email}`} className="text-[var(--color-accent)] hover:text-[var(--color-accent-hi)]">
          {SITE.email} →
        </a>
        <a
          href={SITE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--color-fg)]"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  );
}
