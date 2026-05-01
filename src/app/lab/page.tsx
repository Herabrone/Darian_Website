import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/shared/section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Lab · Darian Lagman",
  description:
    "Homelab, local LLMs, Docker, and the smaller systems projects that keep the toolkit sharp.",
  path: "/lab",
});

const RACK = [
  { label: "Workstation", value: "Ryzen + RTX 3090", sub: "64GB · NVMe RAID" },
  { label: "Containers", value: "~22 active", sub: "Docker Compose" },
  { label: "Models", value: "Llama 3.1, Qwen, Phi", sub: "Quantized 4-bit" },
  { label: "Network", value: "Tailscale mesh", sub: "Per-device addrs" },
  { label: "Tunnel", value: "Cloudflare", sub: "Zero open ports" },
  { label: "Ingress", value: "Caddy", sub: "Auto-TLS" },
];

const NOTES = [
  {
    slug: "blast-bioinformatics",
    title: "BLAST bioinformatics",
    sub: "From-scratch implementation of BLAST's seed-and-extend heuristic.",
  },
  {
    slug: "cryptology",
    title: "Cryptology project",
    sub: "Implementations with a focus on side-channel-aware coding habits.",
  },
  {
    slug: "database-project",
    title: "Database project",
    sub: "Query planner, B-tree index, transactional buffer pool.",
  },
];

export default function LabPage() {
  return (
    <>
      <Section eyebrow="LAB" title="The lab.">
        <p className="max-w-[68ch] text-[17px] leading-[28px] text-[var(--color-fg-muted)]">
          Where I run my own infrastructure, my own models, and my own experiments.
        </p>
      </Section>

      <Section eyebrow="THE RACK" title="What's running.">
        <div className="grid gap-3 md:grid-cols-3">
          {RACK.map((t) => (
            <div
              key={t.label}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
                {t.label}
              </div>
              <div className="mt-2 font-mono text-[18px] text-[var(--color-fg)]">{t.value}</div>
              <div className="mt-1 font-mono text-[12px] text-[var(--color-fg-faint)]">{t.sub}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="WHY">
        <div className="prose-darian">
          <p>
            <strong>Docker is the operating system of my workflow.</strong> Every service I run —
            Stockman&apos;s full dev stack, local LLMs through Ollama, OpenWebUI behind Tailscale,
            Langfuse for trace logging, a personal RAG corpus, Caddy as the ingress, Grafana for the
            things I want to actually see — runs as a Compose-defined container, declared in code,
            reproducible from a fresh disk in fifteen minutes. Secrets in a vault. Observability
            before features. One command to rebuild.
          </p>
          <p>
            <strong>Local models are a daily driver, not a demo.</strong> A quantized Llama 3.1 8B
            answers terminal questions faster than any vendor API can; Qwen 2.5 32B handles the
            longer reasoning tasks I don&apos;t want round-tripping. Frontier models still win on hard
            problems — and I use them — but for the loop of &quot;summarize this log, draft this commit
            message, sketch this API surface&quot;, local is faster, private, and free.
          </p>
          <p>
            <strong>The lab is production with a smaller blast radius.</strong> Tailscale gives every
            device a stable internal address; Cloudflare Tunnel exposes exactly the surface I want
            without opening a port. The same skills move both directions: a CI pipeline I prototype
            against a homelab Postgres lands cleanly in a Vercel + Neon production stack the next
            week.
          </p>

          <h2>Physics &amp; astronomy</h2>
          <p>
            Numerical methods, statistics, and a comfort with messy real-world data are the same
            toolkit, whether the data is gravitational or commercial. The N-body simulator and the
            forecasting engine are both downstream of the Physics &amp; Astronomy minor.
          </p>
        </div>
      </Section>

      <Section eyebrow="NOTES" title="Smaller showcases.">
        <div className="grid gap-3 md:grid-cols-3">
          {NOTES.map((n) => (
            <Link
              key={n.slug}
              href={`/notes/${n.slug}`}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-hi)]"
            >
              <div className="text-[var(--color-fg)]">{n.title}</div>
              <p className="mt-2 text-sm text-[var(--color-fg-muted)]">{n.sub}</p>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm text-[var(--color-fg-subtle)]">
          For the personal interests, see <Link href="/life" className="text-[var(--color-accent)]">/life</Link>.
        </p>
      </Section>
    </>
  );
}
