
import type { MetadataRoute } from "next";
import { newsArticles } from "@/data/news";

const siteUrl = "https://q-market-website.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/service",
    "/about",
    "/news",
    "/faq",
    "/contact",
    "/operator",
    "/privacy",
  ];

  const staticPages: MetadataRoute.Sitemap = pages.map(
    (path) => ({
      url: `${siteUrl}${path}`,
    })
  );

  const newsPages: MetadataRoute.Sitemap = newsArticles.map(
    (article) => ({
      url: `${siteUrl}/news/${encodeURIComponent(
        article.slug
      )}`,
    })
  );

  return [...staticPages, ...newsPages];
}
