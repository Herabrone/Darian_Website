import { Hero } from "@/components/home/hero";
import { WorkStrip } from "@/components/home/work-strip";
import { CtaRow } from "@/components/home/cta-row";
import { LabPreview } from "@/components/home/lab-preview";
import { Section } from "@/components/shared/section";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section eyebrow="WORK" count="05" title="What I'm building.">
        <WorkStrip />
      </Section>

      <Section eyebrow="LAB" title="Current experiments.">
        <LabPreview />
      </Section>

      <Section eyebrow="CONTACT">
        <CtaRow />
      </Section>
    </>
  );
}
