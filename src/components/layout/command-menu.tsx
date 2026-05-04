"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { notes } from "#site/content";
import { NAV } from "@/data/nav";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/lib/seo";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("command-menu:open", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("command-menu:open", onOpen);
    };
  }, []);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
    } catch {}
    setOpen(false);
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      className="fixed inset-0 z-50"
    >
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <div className="fixed left-1/2 top-[20%] z-50 w-[min(640px,92vw)] -translate-x-1/2 overflow-hidden rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] shadow-2xl">
        <Command.Input
          placeholder="Search pages, work, links…"
          className="w-full border-b border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] focus:outline-none"
        />
        <Command.List className="max-h-[60vh] overflow-y-auto p-2">
          <Command.Empty className="px-4 py-6 text-center text-sm text-[var(--color-fg-subtle)]">
            No results.
          </Command.Empty>

          <Command.Group heading="Pages" className="text-[var(--color-fg-subtle)]">
            <PaletteItem onSelect={() => go("/")}>Home</PaletteItem>
            {NAV.map((n) => (
              <PaletteItem key={n.href} onSelect={() => go(n.href)}>
                {n.label}
              </PaletteItem>
            ))}
          </Command.Group>

          <Command.Group heading="Work" className="text-[var(--color-fg-subtle)]">
            {PROJECTS.map((p) => (
              <PaletteItem
                key={p.slug}
                onSelect={() => go(p.href ?? `/work/${p.slug}`)}
              >
                {p.title}
              </PaletteItem>
            ))}
          </Command.Group>

          <Command.Group heading="Notes" className="text-[var(--color-fg-subtle)]">
            {notes
              .slice()
              .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
              .map((n) => (
                <PaletteItem key={n.slug} onSelect={() => go(`/${n.slug}`)}>
                  {n.title}
                </PaletteItem>
              ))}
          </Command.Group>

          <Command.Group heading="Actions" className="text-[var(--color-fg-subtle)]">
            <PaletteItem onSelect={copyEmail}>Copy email — {SITE.email}</PaletteItem>
            <PaletteItem
              onSelect={() => {
                window.open("/resume/Darian-Lagman-Resume.pdf", "_blank");
                setOpen(false);
              }}
            >
              Download resume (PDF)
            </PaletteItem>
            <PaletteItem
              onSelect={() => {
                window.open(SITE.github, "_blank");
                setOpen(false);
              }}
            >
              GitHub ↗
            </PaletteItem>
            <PaletteItem
              onSelect={() => {
                const root = document.documentElement;
                const next = root.dataset.reducedMotion === "true" ? "false" : "true";
                root.dataset.reducedMotion = next;
                try {
                  localStorage.setItem("dl-reduced-motion", next);
                } catch {}
                setOpen(false);
              }}
            >
              Toggle reduced motion
            </PaletteItem>
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
}

function PaletteItem({
  children,
  onSelect,
}: {
  children: React.ReactNode;
  onSelect: () => void;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center rounded-md px-3 py-2 text-sm text-[var(--color-fg-muted)] aria-selected:bg-[var(--color-surface-hi)] aria-selected:text-[var(--color-fg)]"
    >
      {children}
    </Command.Item>
  );
}
