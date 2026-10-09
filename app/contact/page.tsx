
import type { Metadata } from "next";
import Link from "next/link";
import "./contact.css";

export const metadata: Metadata = {
  title: "お問い合わせ | Q-Market",
  description:
    "学生団体Q-Marketの公式お問い合わせ窓口。サービスのご質問、取材・協業のご相談などはこちらから。",
};

const email = "q.market.campus@gmail.com";
const instagram =
  "https://www.instagram.com/qmarket_campus/";

const categories = [
  {
    title: "サービスについて",
    description:
      "Q-Marketの仕組みや公開予定に関するご質問。",
    subject: "サービスに関するお問い合わせ",
  },
  {
    title: "ご意見・ご提案",
    description:
      "開発中のサービスに関するご意見や改善案。",
    subject: "ご意見・ご提案",
  },
  {
    title: "取材・広報",
    description:
      "学生団体への取材や広報に関するご相談。",
    subject: "取材・広報に関するお問い合わせ",
  },
  {
    title: "協業・事業連携",
    description:
      "企業や学生団体との連携に関するご相談。",
    subject: "協業・事業連携に関するお問い合わせ",
  },
];

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
            <span className="gradient-text">合わせ</span>
          </h1>
          <p>
            Q-Marketに関するご質問・ご相談は、
            <br />
            公式窓口までお問い合わせください。
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
            <h2>お問い合わせ窓口</h2>
            <p>
              学生団体Q-Marketへのお問い合わせは、
              メールまたは公式Instagramから
              お送りいただけます。
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-form-card">
              <div className="contact-form-heading">
                <span>OFFICIAL CONTACT</span>
                <h3>メールでお問い合わせ</h3>
                <p>
                  サービスに関するご質問、
                  取材・広報、協業のご相談などを
                  メールで受け付けています。
                </p>
              </div>

              <div className="contact-privacy-note">
                <strong>公式メールアドレス</strong>
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#142c43",
                    overflowWrap: "anywhere",
                  }}
                >
                  {email}
                </p>
              </div>

              <a
                href={`mailto:${email}`}
                className="contact-submit-button"
                style={{
                  display: "block",
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                メールを作成する ↗
              </a>

              <p className="contact-submit-note">
                メールアプリが起動します。
                送信するにはメールアプリ上で
                送信操作が必要です。
              </p>

              <div
                className="contact-form-heading"
                style={{
                  marginTop: 48,
                  marginBottom: 20,
                }}
              >
                <span>CONTACT CATEGORY</span>
                <h3>お問い合わせの種類</h3>
              </div>

              {categories.map((item) => (
                <div
                  key={item.title}
                  style={{
                    borderBottom: "1px solid #e3ebf1",
                    padding: "20px 0",
                  }}
                >
                  <h4
                    style={{
                      color: "#142c43",
                      fontSize: 15,
                      margin: "0 0 8px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      color: "#64778b",
                      fontSize: 13,
                      lineHeight: 1.9,
                      margin: "0 0 10px",
                    }}
                  >
                    {item.description}
                  </p>
                  <a
                    href={`mailto:${email}?subject=${encodeURIComponent(
                      `[Q-Market] ${item.subject}`
                    )}`}
                    style={{
                      color: "#137bc2",
                      fontSize: 12,
                      fontWeight: 800,
                    }}
                  >
                    この内容でメールを作成 ↗
                  </a>
                </div>
              ))}

              <div
                className="contact-privacy-note"
                style={{ marginTop: 30 }}
              >
                <strong>お問い合わせに際して</strong>
                <p>
                  メールにはお問い合わせに必要な情報のみを
                  記載してください。
                  パスワード、決済情報、学生証画像などの
                  機密情報は送信しないでください。
                </p>
                <p style={{ marginTop: 12 }}>
                  お送りいただいた情報は、
                  お問い合わせへの回答および
                  必要な連絡対応に利用します。
                </p>
                <p style={{ marginTop: 12 }}>
                  <Link
                    href="/privacy"
                    style={{
                      color: "#137bc2",
                      fontWeight: 700,
                      textDecoration: "underline",
                    }}
                  >
                    プライバシーポリシー案を見る ↗
                  </Link>
                </p>
              </div>
            </div>

            <aside className="contact-sidebar">
              <div className="contact-side-card">
                <span className="contact-side-label">
                  OFFICIAL INSTAGRAM
                </span>
                <h3>Instagramから連絡</h3>
                <p>
                  公式InstagramのDMからも
                  お問い合わせいただけます。
                </p>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-side-link"
                >
                  @qmarket_campus ↗
                </a>
              </div>

              <div className="contact-side-card">
                <span className="contact-side-label">
                  ORGANIZATION
                </span>
                <h3>運営団体情報</h3>
                <p>
                  Q-Marketは、九大生向けの
                  フリマサービスを開発する
                  学生団体です。
                </p>
                <Link
                  href="/operator"
                  className="contact-side-link"
                >
                  運営団体情報を見る ↗
                </Link>
              </div>

              <div className="contact-side-card">
                <span className="contact-side-label">
                  HELP CENTER
                </span>
                <h3>よくある質問</h3>
                <p>
                  サービスについての疑問は
                  FAQもご確認ください。
                </p>
                <Link
                  href="/faq"
                  className="contact-side-link"
                >
                  FAQを見る ↗
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
