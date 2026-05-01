import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { notes } from "#site/content";
import { MDXContent } from "@/components/mdx/mdx-components";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slugAsParams }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = notes.find((n) => n.slugAsParams === slug);
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} · Notes`,
    description: post.summary,
    path: `/notes/${slug}`,
  });
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = notes.find((n) => n.slugAsParams === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-[760px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
        Note · {post.publishedAt}
      </div>
      <h1 className="mt-3 text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--color-fg)]">
        {post.title}
      </h1>
      <p className="mt-4 max-w-[68ch] text-[17px] leading-[28px] text-[var(--color-fg-muted)]">
        {post.summary}
      </p>
      <hr className="my-10 border-[var(--color-border)]" />
      <div className="prose-darian">
        <MDXContent code={post.body} />
      </div>
    </article>
  );
}
