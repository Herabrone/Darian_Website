"use client";

import { useState } from "react";
import { Activity, ArrowRight, Bot, ClipboardList, Cpu, GitBranch, Network, Orbit, Terminal } from "lucide-react";
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

const sddStages: { title: string; detail: string; Icon: LucideIcon; tone: string }[] = [
  {
    title: "Spec first",
    detail: "Write the target behavior, interfaces, constraints, and validation plan before code moves.",
    Icon: ClipboardList,
    tone: "text-[var(--color-accent-hi)]",
  },
  {
    title: "Delegate slices",
    detail: "Break the work into bounded jobs for search, implementation, review, and verification agents.",
    Icon: GitBranch,
    tone: "text-[var(--color-cyan)]",
  },
  {
    title: "Reconcile and validate",
    detail: "Pull the slices back together, compare against the spec, then rerun the narrowest checks that can falsify it.",
    Icon: ArrowRight,
    tone: "text-[var(--color-green)]",
  },
];

const sddJobs: { title: string; summary: string; tags: string[] }[] = [
  {
    title: "Stockman assistant features",
    summary: "Spec the tool contract and RBAC boundary, delegate API and assistant-context slices, then validate with typecheck plus behavior-scoped checks.",
    tags: ["spec", "tool contract", "validation"],
  },
  {
    title: "Hockey goal detector",
    summary: "Split the work into clip collection, detector tuning, and relay-trigger integration so the model loop and the hardware loop can iterate independently.",
    tags: ["YOLO", "delegation", "hardware bridge"],
  },
  {
    title: "Website delivery jobs",
    summary: "Use a content spec, a UI slice, and a verification slice so layout changes, copy updates, and checks do not get mixed into one noisy task.",
    tags: ["agentic workflow", "UI slice", "build checks"],
  },
];

export function LabPreview() {
  const [tab, setTab] = useState<"lab" | "sdd">("lab");

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-2" role="tablist" aria-label="Lab preview tabs">
        {[
          { id: "lab", label: "Current lab" },
          { id: "sdd", label: "SDD workflow" },
        ].map((item) => {
          const active = tab === item.id;
          return (
            <button
              key={item.id}
              role="tab"
              type="button"
              aria-selected={active}
              onClick={() => setTab(item.id as "lab" | "sdd")}
              className={
                "rounded-full border px-3 py-1.5 font-mono text-[12px] transition-colors " +
                (active
                  ? "border-[var(--color-accent-ring)] bg-[var(--color-accent-bg)] text-[var(--color-accent-hi)]"
                  : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg-subtle)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]")
              }
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {tab === "lab" ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
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
      ) : (
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]" role="tabpanel">
          <div className="grid gap-3">
            {sddStages.map(({ title, detail, Icon, tone }, index) => (
              <Reveal key={title} delay={index * 0.05}>
                <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
                        SDD loop
                      </div>
                      <h3 className="mt-2 text-[15px] font-semibold text-[var(--color-fg)]">{title}</h3>
                    </div>
                    <Icon className={tone} size={19} strokeWidth={1.75} />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-fg-muted)]">{detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.08}>
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
                Live jobs
              </div>
              <div className="mt-4 space-y-4">
                {sddJobs.map((job) => (
                  <div key={job.title} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4">
                    <h3 className="text-[15px] font-semibold text-[var(--color-fg)]">{job.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-fg-muted)]">{job.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[var(--color-border)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-fg-subtle)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      )}
    </div>
  );
}