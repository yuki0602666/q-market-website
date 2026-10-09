
import type { Metadata } from "next";
import Link from "next/link";
import FAQContent from "./FAQContent";
import "./faq.css";

export const metadata: Metadata = {
  title: "よくある質問 | Q-Market",
  description:
    "Q-Marketのサービス、会員登録、出品・購入、決済、受け渡し、安全性などに関するよくある質問を掲載しています。",
};

export default function FAQPage() {
  return (
    <main className="faq-page">
      <nav
        className="faq-breadcrumb"
        aria-label="パンくずリスト"
      >
        <div className="container">
          <Link href="/">HOME</Link>
          <span>/</span>
          <span>FAQ</span>
        </div>
      </nav>

      <section className="faq-hero">
        <div className="container faq-hero-inner">
          <span className="faq-eyebrow">
            HELP CENTER
          </span>

          <h1>
            よくある<span className="gradient-text">質問</span>
          </h1>

          <p>
            Q-Marketについての疑問や、
            <br />
            サービスに関するご質問にお答えします。
          </p>

          <div className="faq-status">
            <span className="faq-status-dot" />
            サービス公開に向けて準備中
          </div>
        </div>
      </section>

      <section className="faq-main-section">
        <div className="container">
          <FAQContent />
        </div>
      </section>

      <section className="faq-contact-section">
        <div className="container faq-contact-inner">
          <span className="faq-contact-label">
            NEED MORE HELP?
          </span>

          <h2>
            お探しの回答が
            <br />
            見つかりませんでしたか？
          </h2>

          <p>
            Q-Marketについてのご質問やお問い合わせは、
            <br />
            公式Instagramからご連絡ください。
          </p>

          <a
            href="https://www.instagram.com/qmarket_campus/"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-white"
          >
            公式Instagramへ ↗
          </a>

          <p className="faq-contact-note">
            @qmarket_campus
          </p>
        </div>
      </section>
    </main>
  );
}
