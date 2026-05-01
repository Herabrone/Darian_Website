import { Activity, Bot, Cpu, Network, Orbit, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const items: { title: string; reveal: string; Icon: LucideIcon; tone: string }[] = [
  { title: "Agentic coding workflows", reveal: "Claude Code · Codex · Copilot", Icon: Bot, tone: "text-[var(--color-cyan)]" },
  { title: "Local LLM routing", reveal: "Ollama · traces · evals", Icon: Network, tone: "text-[var(--color-green)]" },
  { title: "Forecasting evaluation", reveal: "MAE · RMSE · residuals", Icon: Activity, tone: "text-[var(--color-accent-hi)]" },
  { title: "GPU-backed inference", reveal: "RTX 3090 · quantized models", Icon: Cpu, tone: "text-[var(--color-amber)]" },
  { title: "MCP orchestration", reveal: "Scoped tools · routing", Icon: Terminal, tone: "text-[var(--color-cyan)]" },
  { title: "Scientific simulations", reveal: "orbits · stability · energy", Icon: Orbit, tone: "text-[var(--color-rose)]" },
];

export function LabPreview() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ title, reveal, Icon, tone }, index) => (
        <Reveal key={title} delay={index * 0.04}>
          <div className="group relative min-h-[104px] overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-hi)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
                  Exploring
                </div>
                <h3 className="mt-2 text-[15px] font-semibold leading-[22px] text-[var(--color-fg)]">
                  {title}
                </h3>
              </div>
              <Icon className={tone} size={20} strokeWidth={1.75} />
            </div>
            <div className="mt-4 translate-y-1 font-mono text-[12px] text-[var(--color-fg-subtle)] opacity-70 transition-all duration-200 group-hover:translate-y-0 group-hover:text-[var(--color-fg-muted)] group-hover:opacity-100">
              {reveal}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}