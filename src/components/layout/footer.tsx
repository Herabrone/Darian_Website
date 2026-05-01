import Link from "next/link";
import { SITE } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-[var(--color-border)]">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-16 sm:px-6 sm:grid-cols-3 lg:px-8">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
            Sitemap
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/work" className="hover:text-[var(--color-fg)]">Work</Link></li>
            <li><Link href="/about" className="hover:text-[var(--color-fg)]">About</Link></li>
            <li><Link href="/lab" className="hover:text-[var(--color-fg)]">Lab</Link></li>
            <li><Link href="/life" className="hover:text-[var(--color-fg)]">Life</Link></li>
            <li><Link href="/now" className="hover:text-[var(--color-fg)]">Now</Link></li>
            <li><Link href="/resume" className="hover:text-[var(--color-fg)]">Resume</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
            Connect
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-[var(--color-fg)]">
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-fg)]"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
            Colophon
          </div>
          <p className="mt-4 max-w-[36ch] text-sm text-[var(--color-fg-subtle)]">
            Built with Next.js, Tailwind, and Geist. {SITE.location}.
          </p>
        </div>
      </div>
      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-6 font-mono text-[11px] text-[var(--color-fg-faint)] sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} Darian Lagman</span>
          <span>darianlagman.ca</span>
        </div>
      </div>
    </footer>
  );
}
