import { SITE } from "./seo";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#person`,
    name: "Darian Lagman",
    url: SITE.url,
    image: `${SITE.url}/og/default.png`,
    jobTitle: "Full-stack Software Engineer",
    description:
      "Full-stack engineer working on AI-assisted products, forecasting systems, and applied infrastructure.",
    email: `mailto:${SITE.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Winnipeg",
      addressRegion: "MB",
      addressCountry: "CA",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Manitoba",
      sameAs: "https://umanitoba.ca/",
    },
    knowsAbout: [
      "Full-stack engineering",
      "TypeScript",
      "React",
      "Next.js",
      "Spring Boot",
      "Time-series forecasting",
      "Holt-Winters",
      "Model Context Protocol",
      "Docker",
      "Local LLMs",
      "Numerical methods",
    ],
    sameAs: [SITE.github],
  };
}
