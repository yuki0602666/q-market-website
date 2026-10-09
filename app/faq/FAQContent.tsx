
"use client";

import { useMemo, useState } from "react";
import {
  faqCategories,
  faqItems,
  type FAQCategory,
} from "@/data/faq";

export default function FAQContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<FAQCategory>("すべて");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFAQs = useMemo(() => {
    const normalizedQuery = searchQuery
      .normalize("NFKC")
      .trim()
      .toLowerCase();

    return faqItems.filter((faq) => {
      const matchesCategory =
        selectedCategory === "すべて" ||
        faq.category === selectedCategory;

      const searchableText = [
        faq.question,
        faq.answer,
        faq.category,
      ]
        .join(" ")
        .normalize("NFKC")
        .toLowerCase();

      return (
        matchesCategory &&
        searchableText.includes(normalizedQuery)
      );
    });
  }, [searchQuery, selectedCategory]);

  function toggleItem(id: string) {
    setOpenItems((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  function resetFilters() {
    setSearchQuery("");
    setSelectedCategory("すべて");
  }

  return (
    <>
      <div className="faq-search-panel">
        <div className="faq-search-heading">
          <span className="section-label">
            FIND YOUR ANSWER
          </span>
          <h2>何についてお困りですか？</h2>
          <p>
            キーワード検索やカテゴリーから、
            知りたい情報を探せます。
          </p>
        </div>

        <div className="faq-search-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>

          <input
            type="search"
            value={searchQuery}
            onChange={(event) =>
              setSearchQuery(event.target.value)
            }
            placeholder="例：手数料、学生認証、受け渡し"
            aria-label="よくある質問を検索"
          />
        </div>
      </div>

      <div className="faq-category-section">
        <div className="faq-category-heading">
          <h2>カテゴリーから探す</h2>
        </div>

        <div
          className="faq-category-filters"
          role="group"
          aria-label="FAQカテゴリー"
        >
          {faqCategories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                selectedCategory === category
                  ? "faq-category-button active"
                  : "faq-category-button"
              }
              aria-pressed={
                selectedCategory === category
              }
              onClick={() => {
                setSelectedCategory(category);
                setOpenItems([]);
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="faq-results">
        <div className="faq-results-header">
          <div>
            <span className="section-label">
              QUESTIONS & ANSWERS
            </span>
            <h2>
              {selectedCategory === "すべて"
                ? "すべての質問"
                : selectedCategory}
            </h2>
          </div>

          <span className="faq-results-count">
            {filteredFAQs.length} 件
          </span>
        </div>

        {filteredFAQs.length === 0 ? (
          <div className="faq-empty">
            <span className="faq-empty-icon">⌕</span>
            <h3>該当する質問が見つかりませんでした。</h3>
            <p>
              キーワードやカテゴリーを変更して、
              もう一度検索してください。
            </p>

            <button
              type="button"
              className="faq-reset-button"
              onClick={resetFilters}
            >
              検索条件をリセット
            </button>
          </div>
        ) : (
          <div className="faq-list">
            {filteredFAQs.map((faq) => {
              const isOpen = openItems.includes(faq.id);

              return (
                <article
                  className={
                    isOpen
                      ? "faq-item is-open"
                      : "faq-item"
                  }
                  key={faq.id}
                >
                  <h3 className="faq-question-heading">
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() =>
                        toggleItem(faq.id)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`answer-${faq.id}`}
                    >
                      <span className="faq-question-mark">
                        Q.
                      </span>

                      <span className="faq-question-text">
                        {faq.question}
                      </span>

                      <span
                        className="faq-question-toggle"
                        aria-hidden="true"
                      >
                        {isOpen ? "−" : "＋"}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`answer-${faq.id}`}
                    className="faq-answer"
                    hidden={!isOpen}
                  >
                    <span className="faq-answer-mark">
                      A.
                    </span>

                    <div className="faq-answer-body">
                      <p>{faq.answer}</p>

                      <span className="faq-answer-category">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      <div className="faq-bottom-notice">
        <span>INFORMATION</span>
        <p>
          Q-Marketは現在、サービス公開に向けて
          開発・準備を進めています。
          掲載内容は開発状況に応じて変更される場合があります。
        </p>
      </div>
    </>
  );
}
