import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/work/project-card";
import { Reveal } from "@/components/motion/reveal";

export function WorkStrip() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
      <Reveal className="md:col-span-8 md:row-span-2">
        <ProjectCard project={PROJECTS[0]} />
      </Reveal>
      <Reveal className="md:col-span-4" delay={0.06}>
        <ProjectCard project={PROJECTS[1]} />
      </Reveal>
      <Reveal className="md:col-span-4" delay={0.12}>
        <ProjectCard project={PROJECTS[2]} />
      </Reveal>
      <Reveal className="md:col-span-8" delay={0.18}>
        <ProjectCard project={PROJECTS[3]} />
      </Reveal>
      <Reveal className="md:col-span-4" delay={0.24}>
        <ProjectCard project={PROJECTS[4]} />
      </Reveal>
    </div>
  );
}
