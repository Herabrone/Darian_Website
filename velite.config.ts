import { defineConfig, defineCollection, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const work = defineCollection({
  name: "Work",
  pattern: "work/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(120),
      slug: s.path(),
      order: s.number().default(99),
      role: s.string(),
      timeline: s.string(),
      status: s.enum(["Shipped", "In progress", "Research"]),
      category: s.enum(["Full-stack", "ML / Forecasting", "Agents / MCP", "Systems"]),
      stack: s.array(s.string()),
      links: s
        .object({
          live: s.string().optional(),
          github: s.string().optional(),
          video: s.string().optional(),
        })
        .optional(),
      hero: s.object({
        type: s.enum(["video", "image"]),
        src: s.string(),
        poster: s.string().optional(),
      }),
      summary: s.string(),
      ogTitle: s.string().optional(),
      ogDescription: s.string().optional(),
      publishedAt: s.isodate(),
      updatedAt: s.isodate().optional(),
      outcomes: s
        .array(
          s.object({
            label: s.string(),
            value: s.string(),
            sub: s.string().optional(),
          }),
        )
        .optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

const notes = defineCollection({
  name: "Note",
  pattern: "notes/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(120),
      slug: s.path(),
      summary: s.string(),
      tags: s.array(s.string()).default([]),
      publishedAt: s.isodate(),
      updatedAt: s.isodate().optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

const lab = defineCollection({
  name: "Lab",
  pattern: "lab/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(120),
      slug: s.path(),
      summary: s.string(),
      publishedAt: s.isodate(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { work, notes, lab },
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "github-dark-default", keepBackground: false }],
      rehypeKatex,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: { className: ["heading-anchor"] },
        },
      ],
    ],
  },
});
