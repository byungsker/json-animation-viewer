import { MetadataRoute } from "next";

const BASE_URL = "https://json-animation-viewer.vercel.app";
const locales = ["en", "ko"] as const;

type SitemapEntry = {
  path: string;
  lastModified: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

const pages: SitemapEntry[] = [
  {
    path: "",
    lastModified: "2025-03-11",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/about",
    lastModified: "2025-03-11",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/guide",
    lastModified: "2025-03-11",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/faq",
    lastModified: "2025-03-11",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog",
    lastModified: "2025-02-20",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    path: "/blog/what-is-lottie",
    lastModified: "2025-02-20",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/json-animation-tutorial",
    lastModified: "2025-02-18",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/lottie-vs-gif",
    lastModified: "2025-02-15",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/best-lottie-resources",
    lastModified: "2025-02-12",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/how-to-create-lottie-animation",
    lastModified: "2025-02-10",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/privacy",
    lastModified: "2025-03-11",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/terms",
    lastModified: "2025-03-11",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${page.path}`,
      lastModified: new Date(page.lastModified),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${BASE_URL}/${l}${page.path}`])
        ),
      },
    }))
  );
}
