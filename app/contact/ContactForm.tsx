
"use client";

import { useState } from "react";
import {
  useForm,
  ValidationError,
} from "@formspree/react";

const categories = [
  "サービスに関するお問い合わせ",
  "出品・購入について",
  "不具合・改善のご提案",
  "取材・広報について",
  "協業・事業連携について",
  "運営団体について",
  "個人情報の取り扱いについて",
  "その他",
];

export default function ContactForm() {
  const [state, handleSubmit, reset] =
    useForm("xljgbzqv");

  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState("");

  if (state.succeeded) {
    return (
      <div
        className="contact-form-card"
        role="status"
      >
        <div
          style={{
            textAlign: "center",
            padding: "40px 0",
          }}
        >
          <div
            style={{
              fontSize: 48,
              color: "#0ca99e",
              marginBottom: 20,
            }}
          >
            ✓
          </div>

          <h2
            style={{
              color: "#142c43",
              fontSize: 26,
              marginBottom: 18,
            }}
          >
            送信を受け付けました
          </h2>

          <p
            style={{
              color: "#64778b",
              fontSize: 14,
              lineHeight: 2,
              marginBottom: 30,
            }}
          >
            お問い合わせありがとうございます。
            <br />
            内容を確認のうえ、必要に応じて
            運営からご連絡いたします。
          </p>

          <button
            type="button"
            className="contact-submit-button"
            onClick={() => {
              reset();
              setAgreed(false);
              setMessage("");
            }}
          >
            別のお問い合わせを送る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <div className="contact-form-heading">
        <span>CONTACT FORM</span>
        <h3>お問い合わせフォーム</h3>
        <p>
          必要事項を入力して送信してください。
          Q-Marketの運営窓口に届きます。
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="contact-field-row">
          <div className="contact-field">
            <label htmlFor="contact-name">
              お名前 <span>必須</span>
            </label>

            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="九大 太郎"
              autoComplete="name"
              maxLength={100}
              required
            />

            <ValidationError
              prefix="お名前"
              field="name"
              errors={state.errors}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">
              メールアドレス <span>必須</span>
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="example@email.com"
              autoComplete="email"
              maxLength={254}
              required
            />

            <ValidationError
              prefix="メールアドレス"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>

        <div className="contact-field">
          <label htmlFor="contact-category">
            お問い合わせ種別 <span>必須</span>
          </label>

          <select
            id="contact-category"
            name="category"
            defaultValue=""
            required
          >
            <option value="" disabled>
              選択してください
            </option>

            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>

          <ValidationError
            prefix="お問い合わせ種別"
            field="category"
            errors={state.errors}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-subject">
            件名 <span>必須</span>
          </label>

          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="お問い合わせの件名"
            maxLength={150}
            required
          />

          <ValidationError
            prefix="件名"
            field="subject"
            errors={state.errors}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-message">
            お問い合わせ内容 <span>必須</span>
          </label>

          <textarea
            id="contact-message"
            name="message"
            placeholder="お問い合わせ内容を入力してください。"
            rows={8}
            maxLength={5000}
            value={message}
            onChange={(event) =>
              setMessage(event.target.value)
            }
            required
          />

          <p className="contact-character-count">
            {message.length} / 5000文字
          </p>

          <ValidationError
            prefix="お問い合わせ内容"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="contact-privacy-note">
          <strong>個人情報の取り扱いについて</strong>

          <p>
            お問い合わせ内容は、Formspreeを
            通じてQ-Marketの運営窓口へ
            送信されます。
            ご提供いただいた情報は、
            お問い合わせへの回答や
            必要な連絡対応に利用します。
          </p>

          <p style={{ marginTop: 12 }}>
            パスワード、決済情報、学生証画像などの
            機密情報は送信しないでください。
          </p>

          <p style={{ marginTop: 12 }}>
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#137bc2",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              プライバシーポリシー案を見る ↗
            </a>
          </p>
        </div>

        <label
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
            marginBottom: 25,
            color: "#142c43",
            fontSize: 13,
            lineHeight: 1.8,
            cursor: "pointer",
          }}
        >
          <input
            type="checkbox"
            checked={agreed}
            onChange={(event) =>
              setAgreed(event.target.checked)
            }
            required
            style={{
              width: 18,
              height: 18,
              marginTop: 4,
              flexShrink: 0,
              accentColor: "#137bc2",
            }}
          />

          <span>
            上記の個人情報の取り扱いについて
            確認し、同意します。
          </span>
        </label>

        <ValidationError errors={state.errors} />

        <button
          type="submit"
          className="contact-submit-button"
          disabled={state.submitting || !agreed}
          style={{
            opacity:
              state.submitting || !agreed ? 0.55 : 1,
            cursor:
              state.submitting || !agreed
                ? "not-allowed"
                : "pointer",
          }}
        >
          {state.submitting
            ? "送信中..."
            : "お問い合わせを送信する ↗"}
        </button>

        <p className="contact-submit-note">
          送信に成功すると、
          完了メッセージが表示されます。
        </p>
      </form>
    </div>
  );
}
