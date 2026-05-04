export type ProjectStatus = "Shipped" | "In progress" | "Research" | "Ongoing";
export type ProjectCategory = "Full-stack" | "ML / Forecasting" | "Computer Vision" | "Agents / MCP" | "Systems" | "Infra";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  stack: string[];
  poster: string;
  video?: string;
  /** Override the default /work/[slug] route. Used for lab/notes-backed cards. */
  href?: string;
  /** Override the visual switch in ProjectVisual. Defaults to slug. */
  kind?: string;
  span: { col: number; row?: number }; // for bento grid
  order: number;
};

export const PROJECTS: Project[] = [
  {
    slug: "stockman",
    title: "Stockman / En Login",
    subtitle: "Inventory + decision-support SaaS with forecasting, analytics, and an LLM/MCP assistant layer.",
    category: "Full-stack",
    status: "Shipped",
    stack: ["React", "Spring Boot", "MCP"],
    poster: "/media/stockman/hero.svg",
    video: undefined,
    span: { col: 8, row: 2 },
    order: 1,
  },
  {
    slug: "forecasting-engine",
    title: "Forecasting Engine",
    subtitle: "Holt-Winters demand forecasting with parameter tuning and residual correction experiments.",
    category: "ML / Forecasting",
    status: "In progress",
    stack: ["Python", "PyTorch", "NumPy"],
    poster: "/media/forecasting/hero.svg",
    video: undefined,
    span: { col: 4 },
    order: 2,
  },
  {
    slug: "n-body-simulator",
    title: "N-Body Simulator",
    subtitle: "Gravitational simulation focused on numerical stability, energy conservation, and optimization.",
    category: "Systems",
    status: "Shipped",
    stack: ["C", "Python", "Physics"],
    poster: "/media/nbody/hero.svg",
    video: undefined,
    span: { col: 4 },
    order: 3,
  },
  {
    slug: "re-nxt-mcp",
    title: "Raiser's Edge NXT MCP",
    subtitle: "Domain-split tool architecture for LLM agents working with Raiser's Edge NXT-style workflows.",
    category: "Agents / MCP",
    status: "Research",
    stack: ["MCP", "TypeScript", "RE NXT"],
    poster: "/media/re-mcp/hero.svg",
    span: { col: 8 },
    order: 4,
  },
  {
    slug: "hockey-goal-detector",
    title: "Hockey Goal Detector",
    subtitle: "YOLO-based goal detection that triggers a retro Bud Light goal light when a shot crosses the line.",
    category: "Computer Vision",
    status: "In progress",
    stack: ["YOLO", "Python", "OpenCV"],
    poster: "/media/hockey/hero.svg",
    video: undefined,
    kind: "hockey-goal-detector",
    span: { col: 4 },
    order: 5,
  },
  {
    slug: "homelab",
    title: "Homelab · LLM + Self-hosted Infra",
    subtitle: "RTX 3090 box running Gemma4:26b, plus Docker-hosted Immich, Jellyfin, Nextcloud, and supporting services.",
    category: "Infra",
    status: "Ongoing",
    stack: ["Ollama", "Docker", "RTX 3090"],
    poster: "/media/about/darian.jpg",
    href: "/lab",
    kind: "homelab",
    span: { col: 4 },
    order: 6,
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function relatedProjects(slug: string, n = 2) {
  return PROJECTS.filter((p) => p.slug !== slug).slice(0, n);
}
