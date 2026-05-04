import type { Project } from "@/data/projects";

export function ProjectVisual({ project }: { project: Project }) {
  const kind = project.kind ?? project.slug;
  switch (kind) {
    case "stockman":
      return <StockmanVisual />;
    case "forecasting-engine":
      return <ForecastingVisual />;
    case "n-body-simulator":
      return <NBodyVisual />;
    case "re-nxt-mcp":
      return <McpVisual />;
    case "hockey-goal-detector":
      return <HockeyGoalVisual />;
    case "homelab":
      return <HomelabVisual />;
    case "blast":
      return <BlastVisual />;
    default:
      return null;
  }
}

function HockeyGoalVisual() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label="Hockey goal detector preview">
      <rect width="320" height="200" rx="14" fill="var(--color-bg-elevated)" />
      <g opacity="0.5" stroke="var(--color-border)" strokeWidth="1">
        <path d="M28 44 H292" />
        <path d="M28 84 H292" />
        <path d="M28 124 H292" />
        <path d="M28 164 H292" />
      </g>
      <rect x="36" y="52" width="160" height="96" rx="10" fill="var(--color-surface-hi)" stroke="var(--color-border-strong)" />
      <path d="M58 74 H174 V134 H58 Z" fill="none" stroke="var(--color-cyan)" strokeWidth="2" strokeDasharray="6 5" />
      <path d="M80 132 C112 112 126 98 156 78" fill="none" stroke="var(--color-fg-subtle)" strokeWidth="2" strokeLinecap="round" />
      <circle className="visual-pulse" cx="156" cy="78" r="7" fill="var(--color-fg)" />
      <rect className="visual-fade" x="122" y="58" width="52" height="26" rx="6" fill="var(--color-green-bg)" stroke="var(--color-green-ring)" />
      <text x="148" y="75" textAnchor="middle" fill="var(--color-green)" fontSize="10" fontFamily="var(--font-mono)">
        GOAL
      </text>
      <rect x="214" y="58" width="70" height="82" rx="10" fill="var(--color-surface-hi)" stroke="var(--color-border)" />
      <circle className="visual-pulse" cx="249" cy="86" r="20" fill="var(--color-amber-bg)" stroke="var(--color-amber)" strokeWidth="2" />
      <path d="M238 120 H260" stroke="var(--color-border-strong)" strokeWidth="3" strokeLinecap="round" />
      <text x="160" y="176" textAnchor="middle" fill="var(--color-fg-subtle)" fontSize="10" fontFamily="var(--font-mono)">
        YOLO detector · relay trigger
      </text>
    </svg>
  );
}

function StockmanVisual() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label="Animated inventory dashboard preview">
      <rect width="320" height="200" rx="14" fill="var(--color-bg-elevated)" />
      <g opacity="0.55" stroke="var(--color-border)" strokeWidth="1">
        <path d="M24 42 H296" />
        <path d="M24 92 H296" />
        <path d="M24 142 H296" />
      </g>
      <g>
        {[44, 76, 108, 140, 172].map((x, index) => (
          <rect
            key={x}
            className="visual-bar"
            x={x}
            y={88 - index * 8}
            width="18"
            height={76 + index * 8}
            rx="5"
            fill="var(--color-green)"
            opacity={0.35 + index * 0.1}
            style={{ animationDelay: `${index * 0.16}s` }}
          />
        ))}
      </g>
      <path
        className="visual-draw"
        d="M34 151 C74 111 104 133 134 98 C162 67 189 91 215 62 C237 39 260 52 288 31"
        pathLength={1}
        fill="none"
        stroke="var(--color-green)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <g className="visual-pulse">
        <rect x="202" y="116" width="86" height="26" rx="13" fill="var(--color-green-bg)" stroke="var(--color-green-ring)" />
        <text x="245" y="133" textAnchor="middle" fill="var(--color-green)" fontSize="10" fontFamily="var(--font-mono)">
          LOW STOCK
        </text>
      </g>
      <g className="visual-fade">
        <rect x="152" y="154" width="136" height="28" rx="8" fill="var(--color-surface-hi)" stroke="var(--color-border-strong)" />
        <text x="220" y="172" textAnchor="middle" fill="var(--color-fg)" fontSize="10" fontFamily="var(--font-mono)">
          Reorder risk detected
        </text>
      </g>
    </svg>
  );
}

function ForecastingVisual() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label="Animated time-series forecasting preview">
      <rect width="320" height="200" rx="14" fill="var(--color-bg-elevated)" />
      <g opacity="0.55" stroke="var(--color-border)" strokeWidth="1">
        <path d="M28 42 H292" />
        <path d="M28 82 H292" />
        <path d="M28 122 H292" />
        <path d="M28 162 H292" />
      </g>
      <path
        className="visual-fade"
        d="M180 74 C210 48 242 62 292 38 L292 112 C247 132 210 108 180 130 Z"
        fill="var(--color-accent-bg)"
      />
      <path
        className="visual-draw"
        d="M30 136 C50 119 65 132 82 106 C98 80 116 96 132 75 C151 51 164 85 178 66"
        pathLength={1}
        fill="none"
        stroke="var(--color-fg-subtle)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="visual-draw"
        d="M180 66 C205 42 230 62 251 50 C270 39 282 47 292 38"
        pathLength={1}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        style={{ animationDelay: "0.65s" }}
      />
      {[64, 92, 120, 148, 176, 204, 232, 260].map((x, index) => (
        <circle
          key={x}
          className="visual-pulse"
          cx={x}
          cy={index % 2 === 0 ? 154 : 146}
          r="3"
          fill="var(--color-accent-hi)"
          style={{ animationDelay: `${index * 0.18}s` }}
        />
      ))}
    </svg>
  );
}

function NBodyVisual() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label="Animated orbital simulation preview">
      <rect width="320" height="200" rx="14" fill="var(--color-bg-elevated)" />
      <g transform="translate(160 100)">
        <circle r="4" fill="var(--color-fg)" opacity="0.8" />
        <circle className="visual-pulse" r="10" fill="none" stroke="var(--color-amber-ring)" />
        {[42, 68, 92].map((r) => (
          <ellipse key={r} rx={r * 1.25} ry={r * 0.62} fill="none" stroke="var(--color-border)" strokeWidth="1" />
        ))}
        <g className="visual-orbit">
          <circle cx="52" cy="0" r="4" fill="var(--color-amber)" />
          <circle cx="-78" cy="16" r="3" fill="var(--color-cyan)" />
          <circle cx="110" cy="-8" r="2.5" fill="var(--color-fg-muted)" />
          <path d="M40 4 C24 12 2 14 -20 8" fill="none" stroke="var(--color-amber)" strokeOpacity="0.36" strokeWidth="2" />
        </g>
        <g className="visual-orbit" style={{ animationDuration: "26s", animationDirection: "reverse" }}>
          <circle cx="-42" cy="0" r="3.5" fill="var(--color-rose)" />
          <circle cx="84" cy="20" r="3" fill="var(--color-amber)" opacity="0.85" />
          <path d="M-30 -4 C-10 -14 18 -16 44 -10" fill="none" stroke="var(--color-rose)" strokeOpacity="0.3" strokeWidth="2" />
        </g>
      </g>
      <text x="24" y="176" fill="var(--color-fg-subtle)" fontSize="10" fontFamily="var(--font-mono)">
        energy drift: bounded
      </text>
    </svg>
  );
}

function McpVisual() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label="Animated MCP tool graph preview">
      <rect width="320" height="200" rx="14" fill="var(--color-bg-elevated)" />
      {[
        "M74 94 H142",
        "M178 94 H246",
        "M160 109 L92 150",
        "M164 109 L160 152",
        "M170 109 L232 150",
      ].map((d, index) => (
        <path
          key={d}
          className="visual-draw"
          d={d}
          pathLength={1}
          fill="none"
          stroke={index === 1 ? "var(--color-cyan)" : "var(--color-border-strong)"}
          strokeWidth="2"
          strokeLinecap="round"
          style={{ animationDelay: `${index * 0.16}s` }}
        />
      ))}
      <GraphNode x={28} y={74} label="User" tone="var(--color-fg-muted)" />
      <GraphNode x={130} y={74} label="Planner" tone="var(--color-cyan)" pulse />
      <GraphNode x={246} y={74} label="Tools" tone="var(--color-cyan)" />
      <GraphNode x={46} y={140} label="CRM" tone="var(--color-accent-hi)" />
      <GraphNode x={132} y={140} label="Data" tone="var(--color-green)" />
      <GraphNode x={218} y={140} label="Debug" tone="var(--color-amber)" />
      <rect x="30" y="20" width="116" height="22" rx="6" fill="var(--color-surface-hi)" stroke="var(--color-border)" />
      <text x="42" y="35" fill="var(--color-fg-subtle)" fontSize="10" fontFamily="var(--font-mono)">
        route request
      </text>
      <rect className="visual-cursor" x="130" y="27" width="7" height="10" rx="1" fill="var(--color-cyan)" />
    </svg>
  );
}

function GraphNode({ x, y, label, tone, pulse = false }: { x: number; y: number; label: string; tone: string; pulse?: boolean }) {
  return (
    <g className={pulse ? "visual-pulse" : undefined}>
      <rect x={x} y={y} width="46" height="40" rx="10" fill="var(--color-surface-hi)" stroke={tone} strokeOpacity="0.55" />
      <circle cx={x + 23} cy={y + 12} r="4" fill={tone} />
      <text x={x + 23} y={y + 29} textAnchor="middle" fill="var(--color-fg)" fontSize="9" fontFamily="var(--font-mono)">
        {label}
      </text>
    </g>
  );
}

function HomelabVisual() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label="Homelab GPU and inference status preview">
      <rect width="320" height="200" rx="14" fill="var(--color-bg-elevated)" />
      <g opacity="0.5" stroke="var(--color-border)" strokeWidth="1">
        <path d="M28 44 H292" />
        <path d="M28 76 H292" />
        <path d="M28 108 H292" />
        <path d="M28 140 H292" />
      </g>
      {/* server chassis */}
      <g>
        <rect x="34" y="34" width="252" height="86" rx="10" fill="var(--color-surface-hi)" stroke="var(--color-border-strong)" />
        <rect x="46" y="50" width="60" height="56" rx="6" fill="var(--color-bg)" stroke="var(--color-border)" />
        <text x="76" y="84" textAnchor="middle" fill="var(--color-fg-subtle)" fontSize="9" fontFamily="var(--font-mono)">
          GPU
        </text>
        <circle className="visual-pulse" cx="76" cy="58" r="3" fill="var(--color-green)" />
        {/* GPU fan icon */}
        <g className="visual-orbit" style={{ transformOrigin: "76px 80px", animationDuration: "6s" }}>
          <path d="M76 70 L80 80 L76 76 L72 80 Z" fill="var(--color-cyan)" opacity="0.6" />
          <path d="M86 80 L76 84 L80 80 L76 76 Z" fill="var(--color-cyan)" opacity="0.6" />
          <path d="M76 90 L72 80 L76 84 L80 80 Z" fill="var(--color-cyan)" opacity="0.6" />
          <path d="M66 80 L76 76 L72 80 L76 84 Z" fill="var(--color-cyan)" opacity="0.6" />
        </g>
        {/* VRAM bar */}
        <text x="118" y="62" fill="var(--color-fg-subtle)" fontSize="9" fontFamily="var(--font-mono)">
          VRAM
        </text>
        <rect x="118" y="68" width="156" height="8" rx="4" fill="var(--color-bg)" stroke="var(--color-border)" />
        <rect className="visual-bar" x="118" y="68" width="118" height="8" rx="4" fill="var(--color-accent)" style={{ transformOrigin: "118px 72px" }} />
        <text x="276" y="62" textAnchor="end" fill="var(--color-fg)" fontSize="9" fontFamily="var(--font-mono)">
          18.6 / 24 GB
        </text>
        {/* power LED */}
        <text x="118" y="92" fill="var(--color-fg-subtle)" fontSize="9" fontFamily="var(--font-mono)">
          power
        </text>
        <rect x="118" y="98" width="156" height="8" rx="4" fill="var(--color-bg)" stroke="var(--color-border)" />
        <rect className="visual-bar" x="118" y="98" width="92" height="8" rx="4" fill="var(--color-amber)" style={{ transformOrigin: "118px 102px", animationDelay: "0.4s" }} />
        <text x="276" y="92" textAnchor="end" fill="var(--color-fg)" fontSize="9" fontFamily="var(--font-mono)">
          240W
        </text>
      </g>
      {/* status pill */}
      <g className="visual-fade">
        <rect x="34" y="138" width="252" height="34" rx="10" fill="var(--color-surface-hi)" stroke="var(--color-border)" />
        <circle className="visual-pulse" cx="50" cy="155" r="4" fill="var(--color-green)" />
        <text x="64" y="159" fill="var(--color-fg)" fontSize="10" fontFamily="var(--font-mono)">
          ollama: Gemma4:26b
        </text>
        <text x="64" y="168" fill="var(--color-fg-subtle)" fontSize="9" fontFamily="var(--font-mono)">
          idle · RTX 3090
        </text>
      </g>
    </svg>
  );
}

function BlastVisual() {
  // Two stacked DNA strings with a sliding alignment window highlighting matches.
  const query = "ACGTGCATTGAC";
  const subject = "GTACGTGCATAGAC";
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label="Animated sequence alignment preview">
      <rect width="320" height="200" rx="14" fill="var(--color-bg-elevated)" />
      <text x="24" y="38" fill="var(--color-fg-subtle)" fontSize="10" fontFamily="var(--font-mono)">
        query
      </text>
      <text x="24" y="106" fill="var(--color-fg-subtle)" fontSize="10" fontFamily="var(--font-mono)">
        subject
      </text>
      {/* alignment window slider */}
      <rect
        className="visual-fade"
        x="92"
        y="46"
        width="100"
        height="58"
        rx="6"
        fill="var(--color-rose-bg)"
        stroke="var(--color-rose-ring)"
      />
      {/* query bases */}
      {query.split("").map((base, i) => (
        <g key={`q-${i}`}>
          <rect
            x={88 + i * 16}
            y={48}
            width={14}
            height={22}
            rx={3}
            fill="var(--color-surface-hi)"
            stroke="var(--color-border)"
          />
          <text
            x={95 + i * 16}
            y={64}
            textAnchor="middle"
            fill="var(--color-fg)"
            fontSize="11"
            fontFamily="var(--font-mono)"
          >
            {base}
          </text>
        </g>
      ))}
      {/* subject bases */}
      {subject.split("").map((base, i) => {
        const isMatch = i >= 2 && i <= 11 && query[i - 2] === base;
        return (
          <g key={`s-${i}`} className={isMatch ? "visual-pulse" : undefined} style={{ animationDelay: `${i * 0.08}s` }}>
            <rect
              x={56 + i * 16}
              y={116}
              width={14}
              height={22}
              rx={3}
              fill={isMatch ? "var(--color-rose-bg)" : "var(--color-surface-hi)"}
              stroke={isMatch ? "var(--color-rose)" : "var(--color-border)"}
            />
            <text
              x={63 + i * 16}
              y={132}
              textAnchor="middle"
              fill={isMatch ? "var(--color-rose)" : "var(--color-fg-muted)"}
              fontSize="11"
              fontFamily="var(--font-mono)"
            >
              {base}
            </text>
          </g>
        );
      })}
      {/* match connectors */}
      {Array.from({ length: 10 }).map((_, i) => (
        <path
          key={`c-${i}`}
          className="visual-draw"
          d={`M${95 + i * 16} 72 V112`}
          pathLength={1}
          fill="none"
          stroke="var(--color-rose)"
          strokeOpacity="0.35"
          strokeWidth="1"
          style={{ animationDelay: `${0.4 + i * 0.08}s` }}
        />
      ))}
      {/* score pill */}
      <g className="visual-fade">
        <rect x="220" y="160" width="76" height="22" rx="11" fill="var(--color-rose-bg)" stroke="var(--color-rose-ring)" />
        <text x="258" y="175" textAnchor="middle" fill="var(--color-rose)" fontSize="10" fontFamily="var(--font-mono)">
          score +28
        </text>
      </g>
      <text x="24" y="175" fill="var(--color-fg-subtle)" fontSize="10" fontFamily="var(--font-mono)">
        seed-and-extend
      </text>
    </svg>
  );
}