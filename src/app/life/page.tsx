import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/shared/section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Outside the editor · Darian Lagman",
  description:
    "Astronomy, fishing, gardening — the interests that keep my judgement calibrated.",
  path: "/life",
});

export default function LifePage() {
  return (
    <>
      <Section eyebrow="LIFE" title="Outside the editor.">
        <p className="max-w-[68ch] text-[17px] leading-[28px] text-[var(--color-fg-muted)]">
          Outside work I keep close to slower systems: night-sky observing, fishing, and gardening.
          They reward patience, clean setup, and noticing small signals before making a move.
        </p>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          <Essay
            title="Astronomy"
            image="/media/life/banff.jpg"
            body={`There's a reason my electives kept circling back to physics. I'm a member of RASC, and I take amateur astrophotography with a Seestar S50 whenever the sky cooperates. The night sky is the original messy real-world dataset: partial observations, instrument noise, models that almost work. The N-body simulator started as a coursework assignment and became a long-running side project because the math is honest in a way most software isn't: when energy stops being conserved, you've shipped a bug.`}
            className="md:col-span-2"
            imageClassName="md:aspect-[16/7] md:h-full md:object-cover"
          />
          <Essay
            title="Fishing"
            image="/media/life/bench.jpg"
            body={`Three things fishing teaches that no codebase will: patience without a progress bar, comfort with non-determinism, and the discipline of doing nothing while observing carefully. I fish lakes in Manitoba most summers. The relevant skill is the same one that makes a good engineer: pay attention to the small evidence the system is giving you before you change anything.`}
          />
          <Essay
            title="Gardening"
            image="/media/life/art.jpg"
            body={`Gardening is the longest-feedback-loop interest I have, and that's the point. You can't iterate weekly. You set a system up, you tend it, and you find out in months whether your assumptions about light, soil, and water were correct. It's the closest analog to designing a long-lived piece of infrastructure: most of the work is invisible, and the failure modes are slow.`}
          />
        </div>
      </Section>

      <Section>
        <p className="text-sm text-[var(--color-fg-subtle)]">
          For the technical interests, see{" "}
          <Link href="/lab" className="text-[var(--color-accent)] hover:text-[var(--color-accent-hi)]">
            /lab
          </Link>
          .
        </p>
      </Section>
    </>
  );
}

function Essay({
  title,
  image,
  body,
  className,
  imageClassName,
}: {
  title: string;
  image: string;
  body: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <article className={className}>
      <div className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className={`h-auto w-full object-cover ${imageClassName ?? ""}`}
          unoptimized
        />
      </div>
      <h3 className="mt-5 text-[17px] font-semibold text-[var(--color-fg)]">{title}</h3>
      <p className="mt-3 text-[15px] leading-[25px] text-[var(--color-fg-muted)]">{body}</p>
    </article>
  );
}
