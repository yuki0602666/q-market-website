
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  newsArticles,
  getNewsArticle,
  formatNewsDate,
} from "@/data/news";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    return {
      title: "記事が見つかりません | Q-Market",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${article.title} | Q-Market`,
    description: article.summary,
    alternates: {
      canonical: `/news/${article.slug}`,
    },
  };
}

export default async function NewsDetailPage({
  params,
}: Props) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="news-page">
      <section className="news-detail-hero">
        <div className="container">
          <nav
            className="news-breadcrumb"
            aria-label="パンくずリスト"
          >
            <Link href="/">HOME</Link>
            <span>/</span>
            <Link href="/news">NEWS</Link>
            <span>/</span>
            <span>ARTICLE</span>
          </nav>

          <div className="news-detail-heading">
            <div className="news-article-meta">
              <span className="news-date">
                {formatNewsDate(article.date)}
              </span>

              <span className="news-category-label">
                {article.category}
              </span>
            </div>

            <h1>{article.title}</h1>
          </div>
        </div>
      </section>

      <section className="news-detail-section">
        <div className="container">
          <article className="news-detail-content">
            {article.paragraphs.map(
              (paragraph, index) => (
                <p key={index}>{paragraph}</p>
              )
            )}

            <div className="news-detail-divider" />

            <p>
              今後ともQ-Marketをよろしく
              お願いいたします。
            </p>
          </article>

          <div className="news-detail-back">
            <Link
              href="/news"
              className="news-back-button"
            >
              ← お知らせ一覧に戻る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
