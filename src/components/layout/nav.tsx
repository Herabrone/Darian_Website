"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { NAV } from "@/data/nav";
import { cn } from "@/lib/utils";

export function Nav() {
  const openCommandMenu = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent("command-menu:open"));
  };

  return (
    <header className="sticky top-0 z-40 bg-[var(--color-nav-bg)] backdrop-blur-md">
      <div className="mx-auto grid h-14 max-w-[1200px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 font-mono text-[13px] tracking-tight text-[var(--color-fg)] hover:text-[var(--color-accent-hi)]"
        >
          darian<span className="text-[var(--color-accent)]">.</span>lagman
        </Link>

        <nav className="no-scrollbar flex min-w-0 items-center justify-center gap-1 overflow-x-auto">
          {NAV.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={openCommandMenu}
          aria-label="Open command menu"
          className={cn(
            "shrink-0 rounded-md p-2 text-[var(--color-fg-muted)] transition-colors",
            "hover:bg-[var(--color-surface-hi)] hover:text-[var(--color-fg)]",
          )}
        >
          <Search size={18} aria-hidden />
        </button>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "shrink-0 rounded-md px-3 py-1.5 text-sm font-medium text-[var(--color-fg)] transition-colors",
        "hover:text-[var(--color-accent-hi)]",
      )}
    >
      {children}
    </Link>
  );
}
