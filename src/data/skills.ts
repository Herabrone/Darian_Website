export type SkillGroup = { label: string; items: string[] };

export const SKILLS: SkillGroup[] = [
  {
    label: "LANGUAGES",
    items: ["Python", "TypeScript", "Java", "SQL", "C"],
  },
  {
    label: "WEB & SAAS",
    items: ["React", "Next.js", "Spring Boot", "Node", "Tailwind"],
  },
  {
    label: "DATA & ML",
    items: ["NumPy", "Pandas", "scikit-learn", "PyTorch", "time-series"],
  },
  {
    label: "INFRA",
    items: ["Docker", "MySQL", "Postgres", "Vercel", "Linux", "Cloudflare"],
  },
  {
    label: "AI & AGENTS",
    items: ["MCP", "Claude Code", "Codex", "LangChain primitives", "Ollama"],
  },
];
