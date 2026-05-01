"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { StackPill } from "./stack-pill";
import { Badge } from "@/components/primitives/badge";
import { ProjectVisual } from "@/components/work/project-visual";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const onEnter = () => {
    videoRef.current?.play().catch(() => {});
  };
  const onLeave = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <Link
      href={project.href ?? `/work/${project.slug}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className={cn(
        "project-card group relative flex flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-200",
        "hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-hi)]",
        className,
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-bg-elevated)]">
        <ProjectVisual project={project} />
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            poster={project.poster}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity group-hover:opacity-100"
          />
        )}
        <div className="absolute right-3 top-3">
          <Badge tone={project.status === "Shipped" ? "success" : project.status === "Research" ? "warn" : "accent"}>
            {project.status}
          </Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[17px] font-semibold leading-[26px] text-[var(--color-fg)]">
            {project.title}
          </h3>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-[var(--color-fg-subtle)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent-hi)]"
            strokeWidth={1.75}
          />
        </div>
        <p className="text-sm text-[var(--color-fg-muted)]">{project.subtitle}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.stack.map((s) => (
            <StackPill key={s} label={s} />
          ))}
        </div>
      </div>
    </Link>
  );
}
