
"use client";

import { useState } from "react";
import Link from "next/link";
import "./contact.css";

const contactTypes = [
  "サービスに関するお問い合わせ",
  "出品・取引について",
  "不具合・改善のご提案",
  "取材・広報について",
  "協業・事業連携について",
  "運営団体について",
  "その他",
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  function getContactText() {
    return [
      "【Q-Market お問い合わせ】",
      "",
      `お名前：${name.trim()}`,
      `メールアドレス：${email.trim()}`,
      `お問い合わせ種別：${type}`,
      `件名：${subject.trim()}`,
      "",
      "【お問い合わせ内容】",
      message.trim(),
    ].join("\n");
  }

  async function handleCopy(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setStatus("idle");

    try {
      await navigator.clipboard.writeText(
        getContactText()
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

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
            お問い<span className="gradient-text">
              合わせ
            </span>
          </h1>
          <p>
            Q-Marketに関するご質問やご相談は、
            <br />
            こちらからお問い合わせください。
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
              サービスに関するご質問、改善のご提案、
              取材・協業のご相談などをお受けしています。
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-form-card">
              <div className="contact-form-heading">
                <span>CONTACT DRAFT</span>
                <h3>お問い合わせ内容の作成</h3>
                <p>
                  必要事項をご入力ください。
                  入力内容をコピーし、公式Instagramの
                  DMなどで送ることができます。
                </p>
              </div>

              <form onSubmit={handleCopy}>
                <div className="contact-field-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">
                      お名前 <span>必須</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) =>
                        setName(e.target.value)
                      }
                      placeholder="お名前"
                      autoComplete="name"
                      maxLength={100}
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">
                      メールアドレス
                      <span>必須</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      placeholder="example@email.com"
                      autoComplete="email"
                      maxLength={254}
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-type">
                    お問い合わせ種別
                    <span>必須</span>
                  </label>
                  <select
                    id="contact-type"
                    value={type}
                    onChange={(e) =>
                      setType(e.target.value)
                    }
                    required
                  >
                    <option value="">
                      選択してください
                    </option>
                    {contactTypes.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-subject">
                    件名 <span>必須</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) =>
                      setSubject(e.target.value)
                    }
                    placeholder="お問い合わせの件名"
                    maxLength={150}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">
                    お問い合わせ内容
                    <span>必須</span>
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) =>
                      setMessage(e.target.value)
                    }
                    placeholder={
                      "お問い合わせ内容を詳しくご入力ください。"
                    }
                    rows={8}
                    maxLength={5000}
                    required
                  />
                  <p className="contact-character-count">
                    {message.length} / 5000文字
                  </p>
                </div>

                <div className="contact-privacy-note">
                  <strong>
                    個人情報について
                  </strong>
                  <p>
                    このフォームの入力内容は、
                    Q-Marketのサーバーには送信されません。
                    コピー後にご自身で送信先を選びます。
                    パスワードや決済情報などの
                    機密情報は入力しないでください。
                  </p>
                </div>

                <button
                  type="submit"
                  className="contact-submit-button"
                >
                  入力内容をコピーする ↗
                </button>

                {status === "success" && (
                  <p
                    className="contact-status success"
                    role="status"
                  >
                    入力内容をコピーしました。
                    下の公式Instagramを開いて、
                    DMに貼り付けて送信してください。
                  </p>
                )}

                {status === "error" && (
                  <div
                    className="contact-status error"
                    role="alert"
                  >
                    <p>
                      コピーできませんでした。
                      次の欄から内容を選択して
                      コピーしてください。
                    </p>
                    <textarea
                      readOnly
                      value={getContactText()}
                      aria-label="コピー用お問い合わせ内容"
                      rows={9}
                    />
                  </div>
                )}

                <p className="contact-submit-note">
                  ※ このボタンではお問い合わせは
                  送信されません。
                </p>
              </form>
            </div>

            <aside className="contact-sidebar">
              <div className="contact-side-card">
                <span className="contact-side-label">
                  OFFICIAL SOCIAL MEDIA
                </span>
                <h3>公式Instagram</h3>
                <p>
                  Q-Marketの最新情報や開発状況を
                  発信しています。
                  お問い合わせはDMからも可能です。
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
                  サービスの利用条件や決済、
                  受け渡しなどについての
                  よくある質問を掲載しています。
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
                  INFORMATION
                </span>
                <h3>サービス公開について</h3>
                <p>
                  Q-Marketは現在開発中です。
                  正式な公開日や詳細なサービス仕様は、
                  決定次第お知らせします。
                </p>
                <Link
                  href="/news"
                  className="contact-side-link"
                >
                  お知らせを見る ↗
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
            新しいサービスの公開に向けて、
            現在準備を進めています。
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
