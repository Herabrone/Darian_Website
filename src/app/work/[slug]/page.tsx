import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { work } from "#site/content";

import { CaseStudyHeader } from "@/components/work/case-study-header";
import { TldrCard } from "@/components/work/tldr-card";
import { Outcomes } from "@/components/work/outcomes";
import { RelatedWork } from "@/components/work/related-work";
import { MDXContent } from "@/components/mdx/mdx-components";
import { Video } from "@/components/mdx/video";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug.replace(/^work\//, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = work.find((w) => w.slug === `work/${slug}`);
  if (!post) return {};
  return buildMetadata({
    title: post.ogTitle ?? `${post.title} · Darian Lagman`,
    description: post.ogDescription ?? post.summary,
    path: `/work/${slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = work.find((w) => w.slug === `work/${slug}`);
  if (!post) notFound();

  const ctas: { label: string; href: string; external?: boolean; primary?: boolean }[] = [];
  if (post.links?.live) ctas.push({ label: "Live Demo ↗", href: post.links.live, external: true, primary: true });
  if (post.links?.github) ctas.push({ label: "GitHub ↗", href: post.links.github, external: true });
  if (post.links?.video) ctas.push({ label: "Video Walkthrough ▶", href: post.links.video, external: true });

  return (
    <article className="mx-auto max-w-[840px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <CaseStudyHeader
        eyebrow={`WORK / ${String(post.order).padStart(2, "0")}`}
        title={post.title}
        summary={post.summary}
        status={post.status}
        meta={{
          role: post.role,
          timeline: post.timeline,
          status: post.status,
          stack: post.stack,
        }}
        ctas={ctas}
      />

      <TldrCard>{post.summary}</TldrCard>

      {post.hero?.type === "video" && post.hero.src ? (
        <Video src={post.hero.src} poster={post.hero.poster} />
      ) : post.hero?.src ? (
        <figure className="my-8 overflow-hidden rounded-lg border border-[var(--color-border)]">
          <Image
            src={post.hero.src}
            alt={`${post.title} hero`}
            width={1280}
            height={800}
            className="h-auto w-full"
            unoptimized
          />
        </figure>
      ) : null}

      <div className="prose-darian">
        <MDXContent code={post.body} />
      </div>

      {post.outcomes && <Outcomes stats={post.outcomes} />}

      <RelatedWork currentSlug={slug} />
    </article>
  );
}
