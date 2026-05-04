"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/work/project-card";
import { PROJECTS } from "@/data/projects";

const FILTERS = ["All", "Full-stack", "ML / Forecasting", "Computer Vision", "Agents / MCP", "Systems", "Infra"] as const;
type Filter = (typeof FILTERS)[number];

export function WorkIndex() {
  const [filter, setFilter] = useState<Filter>("All");

  const items = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={
                "rounded-full border px-3 py-1 font-mono text-[12px] transition-colors " +
                (active
                  ? "border-[var(--color-accent-ring)] bg-[var(--color-accent-bg)] text-[var(--color-accent-hi)]"
                  : "border-[var(--color-border)] text-[var(--color-fg-subtle)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]")
              }
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      {items.length === 0 && (
        <p className="text-center text-sm text-[var(--color-fg-subtle)]">No projects in this category.</p>
      )}
    </div>
  );
}
