
import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";
import "./contact.css";

export const metadata: Metadata = {
  title: "お問い合わせ | Q-Market",
  description:
    "学生団体Q-Marketへのお問い合わせ。サービスに関するご質問、改善のご提案、取材・広報、協業についてのお問い合わせはこちら。",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <nav
        className="contact-breadcrumb"
        aria-label="パンくずリスト"
      >
        <div className="container">
          <Link href="/">HOME</Link>
          <span>/</span>
          <span>CONTACT</span>
        </div>
      </nav>

      <section className="contact-page-hero">
        <div className="container">
          <span className="contact-page-eyebrow">
            CONTACT US
          </span>

          <h1>
            お問い
            <span className="gradient-text">
              合わせ
            </span>
          </h1>

          <p>
            Q-Marketに関するご質問やご相談は、
            <br />
            以下のフォームからお問い合わせください。
          </p>

          <span className="contact-prelaunch">
            SERVICE COMING SOON
          </span>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="container">
          <div className="contact-introduction">
            <span className="section-label">
              GET IN TOUCH
            </span>

            <h2>Q-Marketへのお問い合わせ</h2>

            <p>
              サービスに関するご質問、
              改善のご提案、取材・広報、
              協業に関するご相談などを
              受け付けています。
            </p>
          </div>

          <div className="contact-layout">
            <ContactForm />

            <aside className="contact-sidebar">
              <div className="contact-side-card">
                <span className="contact-side-label">
                  OFFICIAL CONTACT
                </span>

                <h3>公式メールアドレス</h3>

                <p>
                  メールで直接お問い合わせいただく
                  こともできます。
                </p>

                <a
                  href="mailto:q.market.campus@gmail.com"
                  className="contact-side-link"
                  style={{
                    overflowWrap: "anywhere",
                  }}
                >
                  q.market.campus@gmail.com ↗
                </a>
              </div>

              <div className="contact-side-card">
                <span className="contact-side-label">
                  OFFICIAL INSTAGRAM
                </span>

                <h3>公式Instagram</h3>

                <p>
                  Q-Marketの開発情報を発信しています。
                  DMからのご連絡も可能です。
                </p>

                <a
                  href="https://www.instagram.com/qmarket_campus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-side-link"
                >
                  @qmarket_campus ↗
                </a>
              </div>

              <div className="contact-side-card">
                <span className="contact-side-label">
                  HELP CENTER
                </span>

                <h3>よくある質問</h3>

                <p>
                  サービスについての疑問は、
                  FAQもご確認ください。
                </p>

                <Link
                  href="/faq"
                  className="contact-side-link"
                >
                  FAQを見る ↗
                </Link>
              </div>

              <div className="contact-side-card contact-side-info">
                <span className="contact-side-label">
                  ORGANIZATION
                </span>

                <h3>運営団体情報</h3>

                <p>
                  Q-Marketは、九大生向け
                  フリマサービスの開発を進める
                  学生団体です。
                </p>

                <Link
                  href="/operator"
                  className="contact-side-link"
                >
                  運営団体情報を見る ↗
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="contact-bottom-section">
        <div className="container">
          <span>Q-MARKET</span>

          <h2>
            九大生だけの、
            <br />
            いちばん近いマーケット。
          </h2>

          <p>
            サービス公開に向けて、
            現在開発を進めています。
          </p>

          <Link
            href="/service"
            className="button button-white"
          >
            サービスについて ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
