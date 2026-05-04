import type { MetadataRoute } from "next";
import { work, notes } from "#site/content";

const SITE = "https://darianlagman.ca";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/about", "/lab", "/life", "/now", "/resume", "/notes"].map(
    (p) => ({ url: `${SITE}${p}`, lastModified: new Date() }),
  );
  const workRoutes = work.map((w) => ({
    url: `${SITE}/work/${w.slug.replace(/^work\//, "")}`,
    lastModified: w.updatedAt ? new Date(w.updatedAt) : new Date(w.publishedAt),
  }));
  const noteRoutes = notes.map((n) => ({
    url: `${SITE}/notes/${n.slugAsParams}`,
    lastModified: n.updatedAt ? new Date(n.updatedAt) : new Date(n.publishedAt),
  }));
  return [...staticRoutes, ...workRoutes, ...noteRoutes];
}
