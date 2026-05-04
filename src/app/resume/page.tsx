import type { Metadata } from "next";
import { Download, Mail } from "lucide-react";
import { SITE } from "@/lib/seo";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/shared/section";

const resumePdf = "/resume/Darian-Lagman-Resume.pdf";

export const metadata: Metadata = buildMetadata({
  title: "Resume · Darian Lagman",
  description: "Web-rendered resume. Single-page PDF download available.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <Section eyebrow="RESUME" title="Darian Lagman.">
      <div className="mb-10 flex flex-wrap items-center gap-3">
        <a
          href={resumePdf}
          download
          className="inline-flex items-center gap-2 rounded-md border border-transparent bg-[var(--color-accent)] px-4 py-2.5 text-sm font-medium text-[var(--color-accent-contrast)] transition-colors hover:bg-[var(--color-accent-hi)]"
        >
          <Download className="h-4 w-4" strokeWidth={1.8} />
          Download PDF
        </a>
        <a
          href={`mailto:${SITE.email}`}
          className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hi)]"
        >
          <Mail className="h-4 w-4" strokeWidth={1.8} />
          {SITE.email}
        </a>
      </div>

      <div className="mb-12 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl">
        <iframe
          title="Darian Lagman resume PDF preview"
          src={`${resumePdf}#toolbar=1&navpanes=0`}
          className="h-[78vh] min-h-[640px] w-full bg-[var(--color-bg-elevated)]"
        />
      </div>

      <div className="prose-darian">
        <h2>Summary</h2>
        <p>
          Full-stack engineer in Winnipeg, Canada. AI-assisted products, forecasting systems, and
          applied infrastructure. Honours CS at the University of Manitoba.
        </p>

        <h2>Education</h2>
        <p>
          <strong>University of Manitoba</strong> — Honours BSc, Computer Science (Statistics minor,
          Physics &amp; Astronomy minor) — Expected 2026.
        </p>

        <h2>Selected projects</h2>
        <ul>
          <li>
            <strong>Stockman / En Login</strong> — Full-stack inventory + decision-support SaaS with
            an LLM/MCP assistant layer. React, Spring Boot, MySQL, Docker, MCP.
          </li>
          <li>
            <strong>Forecasting Engine</strong> — Holt-Winters additive triple exponential smoothing,
            parameter tuning, and an experimental ML residual layer. Python, NumPy, PyTorch.
          </li>
          <li>
            <strong>Raiser&apos;s Edge NXT MCP</strong> — Comparative architecture study of three MCP
            server topologies for nonprofit CRM integration.
          </li>
          <li>
            <strong>N-Body Simulator</strong> — Numerical integration &amp; energy-conservation
            benchmarks. Physics &amp; Astronomy coursework, extended.
          </li>
        </ul>

        <h2>Skills</h2>
        <ul>
          <li><strong>Languages:</strong> Python · TypeScript · Java · SQL · C</li>
          <li><strong>Web/SaaS:</strong> React · Next.js · Spring Boot · Node · Tailwind</li>
          <li><strong>Data/ML:</strong> NumPy · Pandas · scikit-learn · PyTorch · time-series</li>
          <li><strong>Infra:</strong> Docker · MySQL · Postgres · Vercel · Linux · Cloudflare · Tailscale</li>
          <li><strong>Agents:</strong> MCP · Claude Code · Codex · LangChain primitives · Ollama</li>
        </ul>

        <h2>Contact</h2>
        <p>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> · <a href={SITE.github}>GitHub</a>
        </p>
      </div>
    </Section>
  );
}
