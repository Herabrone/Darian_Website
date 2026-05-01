# AGENTS.md — Project rules for AI coding agents

## Stack (locked)
- Next.js 15 App Router + TypeScript strict
- Tailwind v4 (CSS-first, tokens in src/app/globals.css @theme)
- Framer Motion 12, cmdk, Lucide
- Velite for MDX collections (content/**/*.mdx)
- Geist Sans + Geist Mono via the `geist` package
- Self-hosted MP4 in /public/media; never use external CDNs

## Hard rules
- Default to React Server Components. Add "use client" ONLY for: motion, cmdk, theme, video hover.
- All paths: src/* with @/* alias.
- All components typed; no any.
- Use cn() = clsx + tailwind-merge for conditional classes.
- Use design tokens — never raw hex except in /globals.css @theme.
- Never insert tracking, banners, popups, or analytics other than @vercel/analytics + @vercel/speed-insights.
- Images: next/image with width/height. Never <img>.
- Videos: <Video src poster .../> wrapper only. Always muted/loop/playsInline.
- Accessibility: every interactive element has visible focus, every image has alt, all motion respects prefers-reduced-motion.
- Copy: never write "passionate", "leverage", "synergy", "vibe coder".

## Done = Definition
- pnpm typecheck && pnpm lint && pnpm build all pass.
- Lighthouse on /, /work, and /work/stockman ≥ 95 in Performance + Accessibility + SEO.
- JSON-LD validates in Google Rich Results Test.
