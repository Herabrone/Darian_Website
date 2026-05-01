# darianlagman.ca

Personal portfolio. Next.js 15 (App Router) · TypeScript · Tailwind v4 · Framer Motion · Velite (MDX) · Geist · cmdk · Vercel.

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm start
```

## Layout

- `src/app/` — routes (App Router, RSC by default)
- `src/components/` — primitives, layout, home, work, mdx, lab, life, shared
- `src/data/` — typed canonical data (nav, projects, skills, now)
- `src/lib/` — `cn()`, SEO, JSON-LD, tokens
- `content/` — MDX (work, notes, lab) validated by Velite
- `public/media/` — self-hosted MP4 + posters + diagrams
- `legacy/` — archived original static site

See `AGENTS.md` for project rules.
