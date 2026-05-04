import { ArrowRight } from "lucide-react";
import { Button } from "@/components/primitives/button";
import { OrbBackground } from "@/components/motion/orb-background";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <OrbBackground className="pointer-events-none absolute inset-0 z-0 opacity-100" />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(at 28% 0%, var(--color-accent-bg), transparent 58%)",
        }}
      />
      <div className="hero-slashes z-[2]" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className="relative z-10 mx-auto max-w-[1240px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_600px]">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-accent-hi)]">
              Available · Summer 2026
            </div>

            <h1 className="mt-6 max-w-[18ch] text-[48px] font-black leading-[1.02] tracking-[-0.02em] text-[var(--color-fg)] sm:text-[64px] lg:text-[80px] lg:leading-[1.02]">
              <span className="text-[var(--color-fg)]">Full-stack systems,</span>{" "}
              <span className="text-[var(--color-accent-hi)]">forecasting,</span>{" "}
              <span className="text-[var(--color-accent-hi)]">and agentic software</span>{" "}
              <span className="text-[var(--color-fg)]">from Winnipeg.</span>
            </h1>

            <p className="mt-7 max-w-[58ch] text-[18px] leading-[1.6] text-[var(--color-fg-muted)]">
              Building <span className="text-[var(--color-fg)]">Stockman</span>, exploring LLM
              infrastructure, and turning experiments into working products.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/work" variant="primary">
                View Work
              </Button>
              <Button href="/resume/Darian-Lagman-Resume.pdf" external>
                Resume PDF
              </Button>
              <Button href="https://github.com/Herabrone" external variant="ghost">
                GitHub
              </Button>
            </div>

            <a
              href="mailto:darjaylag@gmail.com"
              className="mt-8 inline-flex items-center gap-3 text-[15px] font-medium text-[var(--color-green)] underline decoration-[var(--color-green)]/60 underline-offset-4 transition-colors hover:text-[var(--color-fg)] hover:decoration-[var(--color-fg)]"
            >
              <span className="relative inline-flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-green)] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-green)] shadow-[0_0_12px_var(--color-green-ring)]" />
              </span>
              Open to roles for summer 2026 — let&apos;s chat
              <ArrowRight size={16} aria-hidden />
            </a>

            <div
              aria-hidden
              className="mt-6 select-none text-[80px] leading-none text-white/95"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Darian
            </div>
          </div>

          <div aria-hidden className="hidden h-[560px] lg:block" />
        </div>
      </div>
    </section>
  );
}

