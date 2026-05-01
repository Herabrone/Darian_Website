import type { Metadata } from "next";

const SITE_URL = "https://darianlagman.ca";
const SITE_NAME = "Darian Lagman";
const DEFAULT_DESCRIPTION =
  "Full-stack engineer in Winnipeg, Canada. Building AI-assisted products with real systems underneath.";

export function buildMetadata(input: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const title = input.title ?? `${SITE_NAME} — Full-stack engineer`;
  const description = input.description ?? DEFAULT_DESCRIPTION;
  const url = `${SITE_URL}${input.path ?? ""}`;
  const ogImage = input.ogImage ?? "/og/default.png";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_CA",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export const SITE = {
  url: SITE_URL,
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  email: "darjaylag@gmail.com",
  github: "https://github.com/Herabrone",
  location: "Winnipeg, MB, Canada",
} as const;
