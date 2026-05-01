"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  BarChart3,
  Code2,
  Cpu,
  Database,
  Dna,
  LineChart,
  Network,
  Orbit,
  Server,
  TrendingUp,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type InfraNode = {
  label: string;
  detail: string;
  x: number;
  y: number;
  icon: LucideIcon;
  tone: string;
};

type ProjectNode = {
  label: string;
  detail: string;
  href: string;
  x: number;
  icon: LucideIcon;
  tone: string;
  ring: string;
};

const projects: ProjectNode[] = [
  {
    label: "Stockman",
    detail: "Inventory + decisions",
    href: "/work/stockman",
    x: 8,
    icon: BarChart3,
    tone: "text-[var(--color-green)]",
    ring: "shadow-[0_0_0_1px_var(--color-green-ring),0_8px_24px_-12px_var(--color-green-ring)]",
  },
  {
    label: "Forecasting",
    detail: "Holt-Winters + ML",
    href: "/work/forecasting-engine",
    x: 24,
    icon: TrendingUp,
    tone: "text-[var(--color-accent-hi)]",
    ring: "shadow-[0_0_0_1px_var(--color-accent-ring),0_8px_24px_-12px_var(--color-accent-ring)]",
  },
  {
    label: "MCP",
    detail: "Domain-split tools",
    href: "/work/re-nxt-mcp",
    x: 40,
    icon: Network,
    tone: "text-[var(--color-cyan)]",
    ring: "shadow-[0_0_0_1px_var(--color-cyan-ring),0_8px_24px_-12px_var(--color-cyan-ring)]",
  },
  {
    label: "BLAST",
    detail: "Sequence alignment",
    href: "/notes/blast-bioinformatics",
    x: 56,
    icon: Dna,
    tone: "text-[var(--color-rose)]",
    ring: "shadow-[0_0_0_1px_var(--color-rose-ring),0_8px_24px_-12px_var(--color-rose-ring)]",
  },
  {
    label: "N-body",
    detail: "Numerical sim",
    href: "/work/n-body-simulator",
    x: 72,
    icon: Orbit,
    tone: "text-[var(--color-amber)]",
    ring: "shadow-[0_0_0_1px_var(--color-amber-ring),0_8px_24px_-12px_var(--color-amber-ring)]",
  },
  {
    label: "Homelab",
    detail: "RTX 3090 · Ollama",
    href: "/lab",
    x: 90,
    icon: Cpu,
    tone: "text-[var(--color-fg)]",
    ring: "shadow-[0_0_0_1px_var(--color-border-strong),0_8px_24px_-12px_rgba(0,0,0,0.5)]",
  },
];

const infra: InfraNode[] = [
  {
    label: "React UI",
    detail: "Inventory workflows",
    x: 14,
    y: 44,
    icon: Code2,
    tone: "text-[var(--color-cyan)]",
  },
  {
    label: "Spring API",
    detail: "Auth, RBAC, domain logic",
    x: 48,
    y: 44,
    icon: Server,
    tone: "text-[var(--color-accent-hi)]",
  },
  {
    label: "MySQL",
    detail: "Inventory state",
    x: 80,
    y: 44,
    icon: Database,
    tone: "text-[var(--color-green)]",
  },
  {
    label: "LLM Assistant",
    detail: "Workflow intent",
    x: 20,
    y: 80,
    icon: Bot,
    tone: "text-[var(--color-rose)]",
  },
  {
    label: "MCP Tools",
    detail: "Permission-scoped actions",
    x: 50,
    y: 80,
    icon: Wrench,
    tone: "text-[var(--color-cyan)]",
  },
  {
    label: "Forecast engine",
    detail: "Demand and reorder risk",
    x: 82,
    y: 80,
    icon: LineChart,
    tone: "text-[var(--color-amber)]",
  },
];

// viewBox 460 x 420. Lines connect project layer (y~60) → infra (y~190) → agents (y~342).
const lines = [
  // project → infra
  "M 37 80 C 50 110, 60 130, 64 178",
  "M 110 80 C 140 110, 200 150, 221 178",
  "M 184 80 C 200 120, 220 140, 230 342",
  "M 258 80 C 230 130, 180 150, 92 342",
  "M 331 80 C 300 120, 260 150, 246 178",
  "M 414 80 C 380 130, 320 240, 377 342",
  // infra row
  "M 90 192 H 196",
  "M 246 192 H 343",
  // infra → agents
  "M 64 206 V 326",
  "M 221 206 V 326",
  "M 377 206 V 326",
];

export function HeroSystemMap() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative min-h-[440px] overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,var(--color-accent-bg),transparent_42%),radial-gradient(circle_at_82%_80%,var(--color-green-bg),transparent_42%)]" />

      {/* engineering grid */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-[var(--color-border)] opacity-40"
      >
        <defs>
          <pattern id="map-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#map-grid)" />
      </svg>

      <div className="absolute left-4 top-4 z-10 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
        System map
      </div>
      <div className="absolute right-4 top-4 z-10 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)] shadow-[0_0_8px_var(--color-success-ring)]" />
          live
        </span>
      </div>

      <svg
        viewBox="0 0 460 420"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="system-map-line" x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="var(--color-cyan)" stopOpacity="0.72" />
            <stop offset="1" stopColor="var(--color-accent)" stopOpacity="0.86" />
          </linearGradient>
          <linearGradient id="system-map-line-2" x1="0" x2="0" y1="0" y2="1">
            <stop stopColor="var(--color-accent)" stopOpacity="0.6" />
            <stop offset="1" stopColor="var(--color-amber)" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {lines.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke={index < 6 ? "url(#system-map-line-2)" : "url(#system-map-line)"}
            strokeLinecap="round"
            strokeWidth="1.4"
            initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={reducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
            transition={{
              delay: 0.18 + index * 0.12,
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        ))}
      </svg>

      {/* roving packets — two flows so the graph feels alive */}
      {!reducedMotion && (
        <>
          <motion.span
            aria-hidden="true"
            className="absolute z-20 h-2 w-2 rounded-full bg-[var(--color-cyan)] shadow-[0_0_16px_var(--color-cyan)]"
            animate={{
              left: ["40%", "50%", "50%", "20%", "40%"],
              top: ["10%", "44%", "80%", "80%", "10%"],
            }}
            transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute z-20 h-2 w-2 rounded-full bg-[var(--color-amber)] shadow-[0_0_16px_var(--color-amber)]"
            animate={{
              left: ["8%", "14%", "48%", "82%", "90%", "8%"],
              top: ["10%", "44%", "44%", "44%", "10%", "10%"],
            }}
            transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
          />
        </>
      )}

      {/* project layer — clickable */}
      {projects.map((p, index) => {
        const Icon = p.icon;
        return (
          <motion.div
            key={p.label}
            className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x}%`, top: "10%" }}
            initial={reducedMotion ? false : { opacity: 0, y: -10 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={p.href}
              className={cn(
                "group/proj relative flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] transition-all duration-200 hover:scale-110 hover:border-[var(--color-border-strong)] focus-visible:scale-110",
                p.ring,
              )}
              aria-label={`${p.label} — ${p.detail}`}
            >
              <Icon className={cn("h-4 w-4", p.tone)} strokeWidth={1.9} />
              <span className="pointer-events-none absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-1 text-center font-mono text-[10px] leading-[14px] text-[var(--color-fg)] opacity-0 shadow-xl transition-opacity duration-150 group-hover/proj:opacity-100 group-focus-visible/proj:opacity-100">
                <span className="block text-[var(--color-fg)]">{p.label}</span>
                <span className="block text-[var(--color-fg-subtle)]">{p.detail}</span>
              </span>
            </Link>
          </motion.div>
        );
      })}

      {/* infra + agent layers */}
      {infra.map((node, index) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            className="group/node absolute z-30 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.18 + index * 0.1, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative flex min-w-[112px] items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-2 shadow-xl transition-all duration-200 group-hover/node:min-w-[156px] group-hover/node:border-[var(--color-border-strong)] group-hover/node:bg-[var(--color-surface-hi)]">
              <Icon className={cn("h-4 w-4 shrink-0", node.tone)} strokeWidth={1.75} />
              <span className="whitespace-nowrap font-mono text-[11px] text-[var(--color-fg)]">
                {node.label}
              </span>
              <span className="pointer-events-none absolute left-3 top-[calc(100%+6px)] hidden max-w-[200px] rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-1 font-mono text-[10px] leading-[15px] text-[var(--color-fg-muted)] shadow-xl group-hover/node:block">
                {node.detail}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
