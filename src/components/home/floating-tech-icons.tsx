import { Activity, Bot, Box, Code2, Cpu, Database, Dna, Github, Orbit, Server, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: { Icon: LucideIcon; label: string; top: string; left: string; duration: string; delay: string }[] = [
  { Icon: Code2, label: "React", top: "12%", left: "7%", duration: "8s", delay: "-2s" },
  { Icon: Server, label: "Java", top: "22%", left: "88%", duration: "11s", delay: "-4s" },
  { Icon: Database, label: "MySQL", top: "63%", left: "6%", duration: "9s", delay: "-1s" },
  { Icon: Box, label: "Docker", top: "78%", left: "92%", duration: "10s", delay: "-5s" },
  { Icon: Terminal, label: "Terminal", top: "44%", left: "3%", duration: "12s", delay: "-3s" },
  { Icon: Cpu, label: "GPU", top: "9%", left: "73%", duration: "7s", delay: "-2s" },
  { Icon: Activity, label: "Chart", top: "88%", left: "20%", duration: "10s", delay: "-6s" },
  { Icon: Dna, label: "DNA", top: "36%", left: "96%", duration: "8s", delay: "-1s" },
  { Icon: Orbit, label: "Orbit", top: "72%", left: "66%", duration: "12s", delay: "-7s" },
  { Icon: Bot, label: "Agent", top: "54%", left: "78%", duration: "9s", delay: "-4s" },
  { Icon: Github, label: "GitHub", top: "4%", left: "43%", duration: "11s", delay: "-8s" },
];

export function FloatingTechIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {icons.map(({ Icon, label, top, left, duration, delay }) => (
        <div
          key={label}
          className="float-tech-icon absolute flex items-center gap-1.5 font-mono text-[11px] text-[var(--color-fg)]"
          style={{ top, left, animationDuration: duration, animationDelay: delay, opacity: 0.12 }}
        >
          <Icon className="h-4 w-4" strokeWidth={1.5} />
          <span className="hidden lg:inline">{label}</span>
        </div>
      ))}
    </div>
  );
}