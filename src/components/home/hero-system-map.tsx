"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type LayerTone = "purple" | "amber" | "teal";
type NodeId = "react" | "spring" | "mysql" | "llm" | "forecast" | "mcp";

type Layer = {
  label: string;
  sub: string;
  y: number;
  h: number;
  tone: LayerTone;
};

type NodeSpec = {
  id: NodeId;
  label: string;
  sub: string;
  tone: LayerTone;
  x: number;
  y: number;
  w: number;
  h: number;
  description: string;
  tech: string[];
  href: string;
  cta: string;
};

type ArrowSpec = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  lx: number;
  ly: number;
  anchor?: "start" | "middle" | "end";
};

const layers: Layer[] = [
  {
    label: "Presentation",
    sub: "Operator-facing inventory and assistant flows",
    y: 44,
    h: 84,
    tone: "purple",
  },
  {
    label: "Application",
    sub: "Backend routing, auth, orchestration, and business logic",
    y: 146,
    h: 100,
    tone: "purple",
  },
  {
    label: "Intelligence + data",
    sub: "Persistence, demand reasoning, and local inference",
    y: 270,
    h: 108,
    tone: "amber",
  },
  {
    label: "Tool execution",
    sub: "Structured actions routed back through the API boundary",
    y: 402,
    h: 94,
    tone: "teal",
  },
];

const nodes: NodeSpec[] = [
  {
    id: "react",
    label: "React UI",
    sub: "Inventory dashboard",
    tone: "purple",
    x: 240,
    y: 64,
    w: 200,
    h: 52,
    description:
      "Frontend dashboard for browsing inventory, reviewing stock alerts, and driving the assistant chat surface the same operators already use for daily work.",
    tech: ["React 18", "Inventory views", "Assistant chat"],
    href: "/work/stockman",
    cta: "Open Stockman",
  },
  {
    id: "spring",
    label: "Spring Boot API",
    sub: "Central application server | port 8080",
    tone: "purple",
    x: 155,
    y: 172,
    w: 370,
    h: 58,
    description:
      "Stockman's control plane. It handles routing, RBAC, backend coordination, assistant context assembly, and keeps every AI or automation surface behind the same application rules.",
    tech: ["Spring Boot 3", "Java 21", "RBAC"],
    href: "/work/stockman",
    cta: "Read the case study",
  },
  {
    id: "mysql",
    label: "MySQL",
    sub: "Inventory storage",
    tone: "teal",
    x: 40,
    y: 310,
    w: 186,
    h: 52,
    description:
      "Stores product state, sales history, supplier records, reorder thresholds, and the operational data the rest of the stack reasons over.",
    tech: ["MySQL 8", "JPA", "Inventory state"],
    href: "/work/stockman",
    cta: "See the data model",
  },
  {
    id: "llm",
    label: "Ollama LLM",
    sub: "Gemma4:26b | MoE",
    tone: "amber",
    x: 247,
    y: 310,
    w: 186,
    h: 52,
    description:
      "Local inference on the RTX 3090. The model receives live inventory context from Spring and responds with structured intents instead of free-form guesses.",
    tech: ["Ollama", "Gemma4:26b", "RTX 3090"],
    href: "/lab",
    cta: "Open the lab",
  },
  {
    id: "forecast",
    label: "Forecast engine",
    sub: "Demand and reorder",
    tone: "amber",
    x: 454,
    y: 310,
    w: 186,
    h: 52,
    description:
      "Consumes historical sales data, estimates demand, and produces reorder signals that the application can expose directly or feed into assistant workflows.",
    tech: ["Demand modeling", "Residual checks", "Reorder logic"],
    href: "/work/forecasting-engine",
    cta: "Open forecasting engine",
  },
  {
    id: "mcp",
    label: "MCP Tools",
    sub: "Structured tool calling",
    tone: "teal",
    x: 247,
    y: 438,
    w: 186,
    h: 52,
    description:
      "Executes the assistant's tool calls for inventory lookups, updates, purchase orders, and report generation, while staying permission-scoped through the API boundary.",
    tech: ["MCP protocol", "Tool routing", "Scoped actions"],
    href: "/work/re-nxt-mcp",
    cta: "Open MCP work",
  },
];

const arrows: ArrowSpec[] = [
  { x1: 340, y1: 116, x2: 340, y2: 164, label: "REST / HTTP", lx: 352, ly: 142, anchor: "start" },
  { x1: 215, y1: 230, x2: 140, y2: 304, label: "SQL", lx: 156, ly: 264, anchor: "middle" },
  { x1: 340, y1: 230, x2: 340, y2: 304, label: "Ollama API", lx: 352, ly: 268, anchor: "start" },
  { x1: 465, y1: 230, x2: 540, y2: 304, label: "sales data", lx: 510, ly: 258, anchor: "start" },
  { x1: 340, y1: 362, x2: 340, y2: 430, label: "tool calls", lx: 352, ly: 398, anchor: "start" },
];

const legend = [
  { label: "Application", tone: "purple", x: 44 },
  { label: "Intelligence", tone: "amber", x: 174 },
  { label: "Data and tools", tone: "teal", x: 322 },
] as const;

function tonePalette(tone: LayerTone) {
  switch (tone) {
    case "purple":
      return {
        band: "var(--color-accent-bg)",
        fill: "rgba(124, 140, 255, 0.14)",
        stroke: "var(--color-accent)",
        text: "var(--color-accent-hi)",
      };
    case "amber":
      return {
        band: "var(--color-amber-bg)",
        fill: "rgba(242, 184, 75, 0.12)",
        stroke: "var(--color-amber)",
        text: "#f5d39a",
      };
    case "teal":
      return {
        band: "var(--color-cyan-bg)",
        fill: "rgba(94, 227, 255, 0.11)",
        stroke: "var(--color-cyan)",
        text: "#b4f1ff",
      };
  }
}

export function HeroSystemMap() {
  const [activeId, setActiveId] = useState<NodeId>("spring");
  const markerId = useId().replace(/:/g, "");
  const activeNode = nodes.find((node) => node.id === activeId) ?? nodes[1];
  const activeTone = tonePalette(activeNode.tone);

  return (
    <div className="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_10%,var(--color-accent-bg),transparent_36%),radial-gradient(circle_at_78%_76%,var(--color-cyan-bg),transparent_34%)]" />

      <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-[var(--color-border)] opacity-35">
        <defs>
          <pattern id="stockman-grid" width="22" height="22" patternUnits="userSpaceOnUse">
            <path d="M 22 0 L 0 0 0 22" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stockman-grid)" />
      </svg>

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
            System map · Stockman
          </div>
          <p className="mt-2 max-w-[40ch] text-sm leading-6 text-[var(--color-fg-muted)]">
            A layered architecture diagram for the product: explicit boundaries, visible protocols,
            and the path from operator action to model-assisted tool execution.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)] shadow-[0_0_10px_var(--color-success-ring)]" />
          live
        </div>
      </div>

      <div className="relative z-10 mt-5 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[rgba(10,12,18,0.22)] p-3">
        <svg viewBox="0 0 680 540" className="h-auto w-full" role="img" aria-label="Layered Stockman architecture diagram">
          <defs>
            <marker
              id={markerId}
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path
                d="M2 1L8 5L2 9"
                fill="none"
                stroke="var(--color-border-strong)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>

          {layers.map((layer) => {
            const palette = tonePalette(layer.tone);
            return (
              <g key={layer.label}>
                <rect
                  x="20"
                  y={layer.y}
                  width="640"
                  height={layer.h}
                  rx="18"
                  fill={palette.band}
                  fillOpacity="0.34"
                  stroke="var(--color-border)"
                  strokeOpacity="0.55"
                />
                <text
                  x="42"
                  y={layer.y + 24}
                  fill="var(--color-fg-subtle)"
                  fontSize="11"
                  fontFamily="var(--font-mono)"
                  letterSpacing="0.08em"
                >
                  {layer.label}
                </text>
                <text
                  x="42"
                  y={layer.y + 42}
                  fill="var(--color-fg-faint)"
                  fontSize="12"
                  fontFamily="var(--font-mono)"
                >
                  {layer.sub}
                </text>
              </g>
            );
          })}

          {arrows.map((arrow) => (
            <g key={`${arrow.label}-${arrow.x1}-${arrow.y1}`}>
              <line
                x1={arrow.x1}
                y1={arrow.y1}
                x2={arrow.x2}
                y2={arrow.y2}
                stroke="var(--color-border-strong)"
                strokeWidth="1.5"
                markerEnd={`url(#${markerId})`}
              />
              <text
                x={arrow.lx}
                y={arrow.ly}
                fill="var(--color-fg-subtle)"
                fontSize="12"
                fontFamily="var(--font-mono)"
                textAnchor={arrow.anchor ?? "start"}
              >
                {arrow.label}
              </text>
            </g>
          ))}

          {nodes.map((node) => {
            const palette = tonePalette(node.tone);
            const isActive = node.id === activeId;
            const opacity = isActive ? 1 : 0.42;
            const centerX = node.x + node.w / 2;

            return (
              <g
                key={node.id}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onClick={() => setActiveId(node.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveId(node.id);
                  }
                }}
                style={{ cursor: "pointer", opacity, transition: "opacity 180ms ease" }}
              >
                <rect
                  x={node.x}
                  y={node.y}
                  width={node.w}
                  height={node.h}
                  rx="10"
                  fill={palette.fill}
                  stroke={palette.stroke}
                  strokeWidth={isActive ? 1.8 : 1}
                />
                <text
                  x={centerX}
                  y={node.y + 19}
                  textAnchor="middle"
                  fill={palette.text}
                  fontSize="14"
                  fontWeight="600"
                  fontFamily="var(--font-sans)"
                >
                  {node.label}
                </text>
                <text
                  x={centerX}
                  y={node.y + 36}
                  textAnchor="middle"
                  fill="var(--color-fg-subtle)"
                  fontSize="11.5"
                  fontFamily="var(--font-mono)"
                >
                  {node.sub}
                </text>
              </g>
            );
          })}

          {legend.map((item) => {
            const palette = tonePalette(item.tone);
            return (
              <g key={item.label}>
                <circle cx={item.x} cy={522} r="5" fill={palette.stroke} />
                <text
                  x={item.x + 12}
                  y={526}
                  fill="var(--color-fg-subtle)"
                  fontSize="12"
                  fontFamily="var(--font-mono)"
                >
                  {item.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 mt-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
              Selected component
            </div>
            <h3 className="mt-1 text-[17px] font-semibold text-[var(--color-fg)]">{activeNode.label}</h3>
          </div>
          <Link
            href={activeNode.href}
            className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-fg)] transition-colors hover:bg-[var(--color-surface-hi)]"
          >
            {activeNode.cta}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
          </Link>
        </div>

        <p className="mt-3 max-w-[64ch] text-sm leading-6 text-[var(--color-fg-muted)]">
          {activeNode.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {activeNode.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border px-3 py-1 font-mono text-[11px]"
              style={{
                borderColor: activeTone.stroke,
                color: activeTone.text,
                background: activeTone.fill,
              }}
            >
              {item}
            </span>
          ))}
        </div>

        <p className="mt-4 text-xs leading-5 text-[var(--color-fg-faint)]">
          Every automation surface still routes through Spring&apos;s permission model. The AI layer can
          recommend or request actions, but the application boundary decides what is allowed.
        </p>
      </div>
    </div>
  );
}
