
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  newsArticles,
  newsCategories,
  formatNewsDate,
  type NewsCategory,
} from "@/data/news";

type SelectedCategory = "すべて" | NewsCategory;

export default function NewsList() {
  const [selectedCategory, setSelectedCategory] =
    useState<SelectedCategory>("すべて");

  const filteredArticles = newsArticles
    .filter(
      (article) =>
        selectedCategory === "すべて" ||
        article.category === selectedCategory
    )
    .sort((a, b) =>
      (b.date ?? "").localeCompare(a.date ?? "")
    );

  return (
    <>
      <div className="news-list-header">
        <div>
          <span className="section-label">
            INFORMATION
          </span>
          <h2>最新のお知らせ</h2>
        </div>

        <p>
          {filteredArticles.length} 件の記事
        </p>
      </div>

      <div
        className="news-filters"
        role="group"
        aria-label="お知らせのカテゴリー"
      >
        {newsCategories.map((category) => (
          <button
            type="button"
            key={category}
            className={
              selectedCategory === category
                ? "news-filter active"
                : "news-filter"
            }
            aria-pressed={
              selectedCategory === category
            }
            onClick={() =>
              setSelectedCategory(category)
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="news-article-list">
        {filteredArticles.length === 0 ? (
          <div className="news-empty">
            <span>NO ARTICLES</span>
            <h3>該当するお知らせはありません。</h3>
            <p>
              新しい情報を掲載するまで
              しばらくお待ちください。
            </p>
          </div>
        ) : (
          filteredArticles.map((article) => (
            <Link
              href={`/news/${article.slug}`}
              className="news-article-card"
              key={article.slug}
            >
              <div className="news-article-meta">
                <span className="news-date">
                  {formatNewsDate(article.date)}
                </span>

                <span className="news-category-label">
                  {article.category}
                </span>
              </div>

              <div className="news-article-body">
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
              </div>

              <span
                className="news-article-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          ))
        )}
      </div>

      <div className="news-follow">
        <span>FOLLOW OUR UPDATES</span>
        <h2>最新情報はInstagramでも。</h2>
        <p>
          Q-Marketの開発状況やお知らせを
          公式Instagramで発信していきます。
        </p>

        <a
          href="https://www.instagram.com/qmarket_campus/"
          target="_blank"
          rel="noopener noreferrer"
          className="button button-primary"
        >
          公式Instagramを見る ↗
        </a>
      </div>
    </>
  );
}
