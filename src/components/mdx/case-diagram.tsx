"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Kind = "stockman" | "forecasting" | "nbody" | "mcp";

const copy: Record<Kind, { title: string; caption: string }> = {
  stockman: {
    title: "Stockman runtime path",
    caption: "The assistant routes through the same API and role checks as the UI.",
  },
  forecasting: {
    title: "Forecasting pipeline",
    caption: "Level, trend, seasonality, and residuals are evaluated before a reorder signal is emitted.",
  },
  nbody: {
    title: "Integrator benchmark loop",
    caption: "The simulator treats conservation drift as the test surface, not just a visual artifact.",
  },
  mcp: {
    title: "Domain-split MCP routing",
    caption: "A small router selects the domain server before exposing role-scoped tools.",
  },
};

export function CaseDiagram({ kind }: { kind: Kind }) {
  return (
    <figure className="not-prose my-8 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <figcaption>
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
            Diagram
          </div>
          <div className="mt-1 text-[16px] font-semibold text-[var(--color-fg)]">{copy[kind].title}</div>
        </figcaption>
        <div className="hidden font-mono text-[11px] text-[var(--color-fg-faint)] sm:block">layer reveal</div>
      </div>
      <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-3">
        {kind === "stockman" && <StockmanDiagram />}
        {kind === "forecasting" && <ForecastingDiagram />}
        {kind === "nbody" && <NBodyDiagram />}
        {kind === "mcp" && <McpDiagram />}
      </div>
      <p className="mt-3 text-sm leading-6 text-[var(--color-fg-muted)]">{copy[kind].caption}</p>
    </figure>
  );
}

function DiagramNode({
  x,
  y,
  label,
  tone = "accent",
  delay,
}: {
  x: number;
  y: number;
  label: string;
  tone?: "accent" | "cyan" | "green" | "amber" | "rose" | "muted";
  delay: number;
}) {
  const reducedMotion = useReducedMotion();
  const tones = {
    accent: "border-[var(--color-accent-ring)] bg-[var(--color-accent-bg)] text-[var(--color-accent-hi)]",
    cyan: "border-[var(--color-cyan-ring)] bg-[var(--color-cyan-bg)] text-[var(--color-cyan)]",
    green: "border-[var(--color-green-ring)] bg-[var(--color-green-bg)] text-[var(--color-green)]",
    amber: "border-[var(--color-amber-ring)] bg-[var(--color-amber-bg)] text-[var(--color-amber)]",
    rose: "border-[var(--color-rose-ring)] bg-[var(--color-rose-bg)] text-[var(--color-rose)]",
    muted: "border-[var(--color-border)] bg-[var(--color-surface-hi)] text-[var(--color-fg-muted)]",
  };

  return (
    <motion.div
      className={cn(
        "absolute -translate-x-1/2 -translate-y-1/2 rounded-md border px-2.5 py-1.5 font-mono text-[11px] shadow-lg",
        tones[tone],
      )}
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={reducedMotion ? false : { opacity: 0, y: 8 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.38, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {label}
    </motion.div>
  );
}

function DiagramLine({ d, delay, tone = "var(--color-accent)" }: { d: string; delay: number; tone?: string }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={tone}
      strokeLinecap="round"
      strokeWidth="2"
      initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
      whileInView={reducedMotion ? undefined : { pathLength: 1, opacity: 0.9 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

function DiagramShell({ children, lines }: { children: React.ReactNode; lines: React.ReactNode }) {
  return (
    <div className="relative aspect-[16/8] min-h-[230px] w-full overflow-hidden rounded-md">
      <svg viewBox="0 0 720 360" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <g opacity="0.36" stroke="var(--color-border)" strokeWidth="1">
          {Array.from({ length: 8 }).map((_, index) => (
            <path key={`h-${index}`} d={`M0 ${45 + index * 38} H720`} />
          ))}
          {Array.from({ length: 10 }).map((_, index) => (
            <path key={`v-${index}`} d={`M${44 + index * 70} 0 V360`} />
          ))}
        </g>
        {lines}
      </svg>
      {children}
    </div>
  );
}

function StockmanDiagram() {
  return (
    <DiagramShell
      lines={
        <>
          <DiagramLine d="M150 96 H340" delay={0.12} tone="var(--color-cyan)" />
          <DiagramLine d="M390 96 H560" delay={0.22} tone="var(--color-green)" />
          <DiagramLine d="M360 132 L190 260" delay={0.32} tone="var(--color-rose)" />
          <DiagramLine d="M390 132 L530 260" delay={0.42} tone="var(--color-amber)" />
        </>
      }
    >
      <DiagramNode x={18} y={27} label="React UI" tone="cyan" delay={0.08} />
      <DiagramNode x={51} y={27} label="Spring API" tone="accent" delay={0.16} />
      <DiagramNode x={79} y={27} label="MySQL" tone="green" delay={0.24} />
      <DiagramNode x={27} y={72} label="Assistant" tone="rose" delay={0.32} />
      <DiagramNode x={74} y={72} label="Forecasts" tone="amber" delay={0.4} />
      <DiagramNode x={51} y={51} label="RBAC gate" tone="muted" delay={0.48} />
    </DiagramShell>
  );
}

function ForecastingDiagram() {
  return (
    <DiagramShell
      lines={
        <>
          <DiagramLine d="M110 170 H235" delay={0.12} tone="var(--color-accent)" />
          <DiagramLine d="M285 170 H405" delay={0.22} tone="var(--color-accent)" />
          <DiagramLine d="M455 170 H585" delay={0.32} tone="var(--color-cyan)" />
        </>
      }
    >
      <DiagramNode x={14} y={48} label="Demand series" tone="muted" delay={0.08} />
      <DiagramNode x={36} y={48} label="Level + trend" tone="accent" delay={0.18} />
      <DiagramNode x={58} y={48} label="Seasonality" tone="cyan" delay={0.28} />
      <DiagramNode x={80} y={48} label="Forecast" tone="green" delay={0.38} />
      <DiagramNode x={58} y={73} label="Residual check" tone="amber" delay={0.48} />
    </DiagramShell>
  );
}

function NBodyDiagram() {
  return (
    <DiagramShell
      lines={
        <>
          <DiagramLine d="M125 118 C248 54 430 62 578 122" delay={0.16} tone="var(--color-amber)" />
          <DiagramLine d="M125 238 C260 304 450 292 578 226" delay={0.28} tone="var(--color-cyan)" />
        </>
      }
    >
      <DiagramNode x={18} y={33} label="State" tone="muted" delay={0.08} />
      <DiagramNode x={48} y={29} label="Integrator" tone="amber" delay={0.18} />
      <DiagramNode x={80} y={34} label="Next step" tone="cyan" delay={0.28} />
      <DiagramNode x={48} y={68} label="Energy drift" tone="rose" delay={0.38} />
      <DiagramNode x={80} y={64} label="Momentum" tone="green" delay={0.48} />
    </DiagramShell>
  );
}

function McpDiagram() {
  return (
    <DiagramShell
      lines={
        <>
          <DiagramLine d="M120 180 H270" delay={0.12} tone="var(--color-cyan)" />
          <DiagramLine d="M320 180 L490 96" delay={0.22} tone="var(--color-accent)" />
          <DiagramLine d="M320 180 H510" delay={0.32} tone="var(--color-green)" />
          <DiagramLine d="M320 180 L490 270" delay={0.42} tone="var(--color-amber)" />
        </>
      }
    >
      <DiagramNode x={16} y={50} label="User request" tone="muted" delay={0.08} />
      <DiagramNode x={42} y={50} label="Router" tone="cyan" delay={0.18} />
      <DiagramNode x={74} y={27} label="Constituents" tone="accent" delay={0.28} />
      <DiagramNode x={78} y={50} label="Gifts" tone="green" delay={0.38} />
      <DiagramNode x={74} y={75} label="Events" tone="amber" delay={0.48} />
      <DiagramNode x={42} y={70} label="Role scope" tone="rose" delay={0.58} />
    </DiagramShell>
  );
}