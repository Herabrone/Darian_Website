import { Badge } from "@/components/primitives/badge";
import { Button } from "@/components/primitives/button";
import { StackPill } from "./stack-pill";

type Cta = { label: string; href: string; external?: boolean; primary?: boolean };

export function CaseStudyHeader({
  eyebrow,
  title,
  summary,
  meta,
  ctas,
  status,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  meta: { role: string; timeline: string; status: string; stack: string[] };
  ctas?: Cta[];
  status: "Shipped" | "In progress" | "Research";
}) {
  return (
    <header className="border-b border-[var(--color-border)] pb-10">
      <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
        {eyebrow}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <h1 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--color-fg)] lg:text-[44px]">
          {title}
        </h1>
        <Badge tone={status === "Shipped" ? "success" : status === "Research" ? "warn" : "accent"}>
          {status}
        </Badge>
      </div>
      <p className="mt-5 max-w-[68ch] text-[17px] leading-[28px] text-[var(--color-fg-muted)]">
        {summary}
      </p>

      {ctas && ctas.length > 0 && (
        <div className="mt-7 flex flex-wrap items-center gap-3">
          {ctas.map((c) => (
            <Button
              key={c.label}
              href={c.href}
              external={c.external}
              variant={c.primary ? "primary" : "secondary"}
            >
              {c.label}
            </Button>
          ))}
        </div>
      )}

      <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 font-mono text-[12px] sm:grid-cols-4">
        <Meta label="Role" value={meta.role} />
        <Meta label="Timeline" value={meta.timeline} />
        <Meta label="Status" value={meta.status} />
        <Meta label="Stack" value={null}>
          <div className="mt-1.5 flex flex-wrap gap-1">
            {meta.stack.slice(0, 6).map((s) => (
              <StackPill key={s} label={s} />
            ))}
          </div>
        </Meta>
      </dl>
    </header>
  );
}

function Meta({
  label,
  value,
  children,
}: {
  label: string;
  value: string | null;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-faint)]">
        {label}
      </dt>
      <dd className="mt-1 text-[var(--color-fg)]">{value ?? children}</dd>
    </div>
  );
}
