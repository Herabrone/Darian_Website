import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-[600px] flex-col items-start justify-center px-4 py-16 sm:px-6">
      <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
        404
      </div>
      <h1 className="mt-3 text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--color-fg)]">
        Not here.
      </h1>
      <p className="mt-4 text-[var(--color-fg-muted)]">
        That page doesn&apos;t exist. Try the home page or the work index.
      </p>
      <div className="mt-8 flex gap-3 font-mono text-[13px]">
        <Link href="/" className="text-[var(--color-accent)] hover:text-[var(--color-accent-hi)]">
          ← Home
        </Link>
        <span className="text-[var(--color-fg-faint)]">·</span>
        <Link href="/work" className="text-[var(--color-accent)] hover:text-[var(--color-accent-hi)]">
          Work
        </Link>
      </div>
    </div>
  );
}
