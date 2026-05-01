import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/shared/section";
import { SelectedSkills } from "@/components/home/selected-skills";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About · Darian Lagman",
  description:
    "Honours CS at the University of Manitoba, minors in Statistics and Physics. Full-stack with a forecasting + agent-infrastructure bent.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section eyebrow="ABOUT" title="The short version.">
      <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
        <div>
          <Image
            src="/media/about/darian.jpg"
            alt="Portrait of Darian Lagman"
            width={240}
            height={240}
            className="rounded-lg border border-[var(--color-border)] object-cover"
            unoptimized
          />
        </div>

        <div className="prose-darian">
          <p>
            I&apos;m Darian Lagman, a full-stack engineer based in Winnipeg, Canada, finishing an
            Honours Computer Science degree at the University of Manitoba with minors in Statistics
            and Physics &amp; Astronomy.
          </p>
          <p>
            I work at the seam between AI-assisted product development and the systems those
            products run on — which means I ship fast with Claude Code and Codex, and I can also
            defend the math, the database choices, and the auth model when someone asks. Right now
            most of my time goes into <strong>Stockman</strong>, a SaaS inventory and decision-support
            platform with an LLM/MCP assistant layer, and a from-scratch Holt-Winters forecasting
            engine that powers it.
          </p>
          <p>
            I&apos;m looking for a full-time engineering role where the team takes both speed and
            depth seriously.
          </p>

          <h2>The longer version</h2>
          <p>
            I started programming because I wanted to simulate things — orbits, populations, anything
            where the rules were simple but the behavior wasn&apos;t. That&apos;s still the through-line.
            The N-body simulator I built for my Physics &amp; Astronomy minor and the forecasting
            engine I built for Stockman are the same instinct: take a system that looks chaotic,
            decompose it into level / trend / seasonality (or position / velocity / acceleration),
            and find out what&apos;s predictable and what isn&apos;t.
          </p>
          <p>
            The full-stack work is the same instinct applied sideways. Stockman started because a
            small distributor was running their entire business out of CSV files, and the gap between
            &quot;spreadsheet that works&quot; and &quot;system that scales&quot; is mostly engineering, not magic.
            React on the front end, Spring Boot and MySQL on the back, session-based auth with
            role-based access because the product is a back-office tool and stateless tokens were
            solving a problem we didn&apos;t have, Docker Compose for dev parity, and an MCP layer so
            the assistant can call the same APIs the UI does, with the same permissions.
          </p>
          <p>
            I use AI tooling — Claude Code, Codex, Cursor, and a stack of local models running on a
            homelab box — the way a senior engineer uses any other force multiplier: aggressively,
            with skepticism, and with a hand-tuned <code>AGENTS.md</code> so the model has the same
            constraints I&apos;d give a junior. The point isn&apos;t speed for its own sake. The point is
            that I can ship a feature today and six months from now still know exactly why every
            line is the way it is.
          </p>
          <p>
            Outside of work I fish in Manitoba lakes, garden, and read more astronomy than is
            strictly justified. I&apos;m currently looking for a full-time role; my email&apos;s at the
            bottom of every page.
          </p>

          <h2>What I&apos;m optimizing for</h2>
          <ul>
            <li>Technical depth — math, systems, and code that holds up under review.</li>
            <li>Shipped impact — products real users touch, not slide-deck demos.</li>
            <li>The right team — small, sharp, willing to read papers and write tests.</li>
          </ul>

          <h2>Where I am</h2>
          <p>
            Winnipeg, Canada. Open to remote, hybrid, or relocation. See <a href="/now">/now</a>{" "}
            for what I&apos;m currently working on, or <a href="/resume">/resume</a> for the formal
            version.
          </p>
        </div>
      </div>
    </Section>

    <Section eyebrow="STACK" title="Selected skills.">
      <SelectedSkills />
    </Section>

    <Section eyebrow="EDUCATION" title="CS, statistics, and physics.">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
            Degree
          </div>
          <p className="mt-3 text-[15px] leading-[24px] text-[var(--color-fg)]">
            Honours Computer Science at the University of Manitoba.
          </p>
        </div>
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
            Minors
          </div>
          <p className="mt-3 text-[15px] leading-[24px] text-[var(--color-fg)]">
            Statistics and Physics &amp; Astronomy.
          </p>
        </div>
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
            Focus
          </div>
          <p className="mt-3 text-[15px] leading-[24px] text-[var(--color-fg)]">
            Forecasting, agent tools, simulation, and applied infrastructure.
          </p>
        </div>
      </div>
    </Section>
    </>
  );
}
