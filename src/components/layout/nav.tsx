import Link from "next/link";
import { cn } from "@/lib/utils";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-nav-bg)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-4 overflow-hidden px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 font-mono text-[13px] tracking-tight text-[var(--color-fg)] hover:text-[var(--color-accent-hi)]"
        >
          darian<span className="text-[var(--color-accent)]">.</span>lagman
        </Link>

        <nav className="no-scrollbar flex min-w-0 items-center gap-1 overflow-x-auto">
          <NavLink href="/work">Work</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/lab">Lab</NavLink>
          <NavLink href="/life">Life</NavLink>
          <NavLink href="/now">Now</NavLink>
          <NavLink href="/resume">Resume</NavLink>
          <span
            className="ml-2 hidden items-center gap-1 rounded-md border border-[var(--color-border)] px-2 py-1 font-mono text-[11px] text-[var(--color-fg-subtle)] sm:flex"
            aria-hidden
          >
            <kbd className="font-mono">⌘</kbd>
            <kbd className="font-mono">K</kbd>
          </span>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "shrink-0 rounded-md px-2.5 py-1.5 text-sm text-[var(--color-fg-muted)] transition-colors",
        "hover:text-[var(--color-fg)]",
      )}
    >
      {children}
    </Link>
  );
}
