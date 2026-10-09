
import Link from "next/link";
import {
  newsArticles,
  formatNewsDate,
} from "@/data/news";

export default function HomeNews() {
  const latestArticles = [...newsArticles]
    .sort((a, b) =>
      (b.date ?? "").localeCompare(a.date ?? "")
    )
    .slice(0, 3);

  return (
    <section id="news" className="section news-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">
            NEWS & UPDATES
          </span>
          <h2>お知らせ</h2>
          <p>
            Q-Marketの開発情報や最新のお知らせを
            お届けします。
          </p>
        </div>

        <div className="home-news-list">
          {latestArticles.length === 0 ? (
            <p className="home-news-empty">
              現在、お知らせはありません。
            </p>
          ) : (
            latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="home-news-item"
              >
                <div className="home-news-meta">
                  <span className="home-news-date">
                    {formatNewsDate(article.date)}
                  </span>
                  <span className="news-tag">
                    {article.category}
                  </span>
                </div>

                <div className="home-news-content">
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                </div>

                <span
                  className="home-news-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>
            ))
          )}
        </div>

        <div className="home-news-more">
          <Link href="/news" className="button button-secondary">
            お知らせ一覧を見る ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
