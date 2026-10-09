
import type { Metadata } from "next";
import NewsList from "./NewsList";
import "./news.css";

export const metadata: Metadata = {
  title: "お知らせ | Q-Market",
  description:
    "Q-Marketの最新情報、開発状況、プレスリリースなどのお知らせを掲載しています。",
  alternates: {
    canonical: "/news",
  },
};

export default function NewsPage() {
  return (
    <main className="news-page">
      <section className="news-hero">
        <div className="container news-hero-inner">
          <span className="news-eyebrow">
            NEWS & UPDATES
          </span>

          <h1>お知らせ</h1>

          <p>
            Q-Marketの最新情報や開発状況を
            <br />
            お届けします。
          </p>
        </div>
      </section>

      <section className="news-section-main">
        <div className="container">
          <NewsList />
        </div>
      </section>
    </main>
  );
}
