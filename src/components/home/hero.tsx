import { Button } from "@/components/primitives/button";
import { HeroSystemMap } from "@/components/home/hero-system-map";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)]">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(at 28% 0%, var(--color-accent-bg), transparent 58%)",
        }}
      />
      <div className="mx-auto max-w-[1240px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_600px]">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-accent-hi)]">
              Available · Summer 2026
            </div>

            <h1 className="mt-6 max-w-[16ch] text-[44px] font-semibold leading-[1.05] tracking-[-0.02em] text-[var(--color-fg)] sm:text-[56px] lg:text-[64px] lg:leading-[68px]">
              Full-stack systems, forecasting, and agentic software.
            </h1>

            <p className="mt-7 max-w-[52ch] text-[17px] leading-[28px] text-[var(--color-fg-muted)]">
              Building <span className="text-[var(--color-fg)]">Stockman</span>, exploring LLM
              infrastructure, and turning experiments into working products.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/work" variant="primary">
                View Work
              </Button>
              <Button href="/resume/darian-lagman-resume.pdf" external>
                Resume PDF
              </Button>
              <Button href="https://github.com/Herabrone" external variant="ghost">
                GitHub
              </Button>
            </div>
          </div>

          <HeroSystemMap />
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-mono text-[12px] text-[var(--color-fg-subtle)]">
          <span>Winnipeg</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-success)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-success)]" />
            </span>
            Open to roles
          </span>
          <span>Currently: forecasting v2</span>
          <span>GitHub: Herabrone</span>
          <span className="inline-flex items-center gap-1 rounded-md border border-[var(--color-border)] px-1.5 py-0.5 text-[11px]">
            ⌘K
          </span>
        </div>
      </div>
    </section>
  );
}
