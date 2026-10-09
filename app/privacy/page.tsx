
import type { Metadata } from "next";
import Link from "next/link";
import "./privacy.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー（準備中） | Q-Market",
  description:
    "学生団体Q-Marketの公式サイトにおける個人情報の取り扱いに関する暫定方針です。",
  robots: {
    index: false,
    follow: false,
  },
};

const email = "q.market.campus@gmail.com";

const privacySections = [
  {
    id: "scope",
    number: "01",
    title: "適用範囲",
    paragraphs: [
      "本方針案は、学生団体Q-Marketが運営する公式ホームページにおける個人情報等の取り扱いを対象としています。",
      "開発中のフリマサービス本体における会員登録、学生認証、出品、取引、決済等の情報の取り扱いについては、サービスの仕様確定後に別途整備します。",
      "本ホームページおよびQ-Marketは、九州大学が公式に運営するサービスではありません。",
    ],
  },
  {
    id: "information",
    number: "02",
    title: "取得する情報",
    paragraphs: [
      "お問い合わせフォームでは、お名前、メールアドレス、お問い合わせ種別、件名、お問い合わせ内容を取得します。また、利用者が本文に任意で記載した情報を受領する場合があります。",
      "お問い合わせフォームから送信された情報は、フォーム送信サービスFormspreeによって受信・処理され、同サービスの管理画面上に保存されます。お問い合わせ内容は設定された通知先メールアドレスにも送信される場合があります。",
      "公式メールアドレスに直接お問い合わせいただいた場合は、送信者のメールアドレス、氏名（記載された場合）、件名、本文等を受領します。",
      "Instagramのダイレクトメッセージによるお問い合わせでは、アカウント情報やメッセージ内容など、利用者が送信した情報を受領する場合があります。",
      "Webサイトのアクセスログ、Cookie等については、実際に利用するホスティングサービス、外部サービスおよび各種設定を確認し、正式版に反映します。",
    ],
  },
  {
    id: "purpose",
    number: "03",
    title: "利用目的",
    paragraphs: [
      "取得した情報は、お問い合わせへの回答、必要な連絡、相談内容の確認、サービス改善に向けた意見の整理、ならびに法令上必要な対応のために利用します。",
      "お問い合わせへの対応に必要な範囲で、運営メンバーが送信内容を確認する場合があります。",
      "個人情報を上記以外の目的で利用する場合は、適用法令に従って必要な対応を行います。",
    ],
  },
  {
    id: "thirdparty",
    number: "04",
    title: "第三者提供・外部サービス",
    paragraphs: [
      "個人データについては、法令で認められる場合を除き、本人の同意その他の適法な根拠なく第三者に提供しない方針です。",
      "公式ホームページのお問い合わせフォームには、外部サービスであるFormspreeを利用しています。フォームに入力されたお名前、メールアドレス、件名、お問い合わせ内容等は、フォームの送信先としてFormspreeに送られ、同サービスによって処理・保存されます。",
      "お問い合わせ通知の受信および回答にはGmailを利用しています。また、連絡窓口としてInstagramを利用する場合があります。これらの外部サービスにおいて、各提供事業者がそれぞれのサービス提供に必要な情報を取り扱う場合があります。",
      "外部サービスの利用に伴う委託、第三者提供、国外での情報の取り扱い、提供先における保護措置等については、各サービスの契約条件や運用状況を確認し、正式版に反映します。",
    ],
  },
  {
    id: "security",
    number: "05",
    title: "安全管理",
    paragraphs: [
      "取得した個人情報について、不正アクセス、漏えい、紛失、改ざん等の防止に必要な安全管理措置を整備する方針です。",
      "お問い合わせフォームでは、迷惑送信等への対策としてFormspreeのスパム判定機能を利用しています。正常なお問い合わせであっても、判定結果によっては運営側での確認や通知が遅れる場合があります。",
      "運営メンバーのアクセス権限、アカウント管理、送信データの保存期間、削除方法、退任時の権限整理等については、実際の運用体制に合わせて整備します。",
      "お問い合わせフォームには、パスワード、決済情報、学生証の画像等の機密性の高い情報を送信しないようお願いしています。",
    ],
  },
  {
    id: "external",
    number: "06",
    title: "外部サイト・外部サービス",
    paragraphs: [
      "公式ホームページからInstagramなどの外部サイトへ移動した場合、移動先での情報の取り扱いには、当該サービスの利用規約やプライバシーポリシーが適用されます。",
      "Formspreeによるフォーム送信データの取り扱いについては、Formspreeが公開するプライバシー関連の説明や利用条件もご確認ください。",
      "公式ホームページのホスティングにはVercelを利用しています。ホスティングやアクセス解析に伴う情報の取り扱いについては、実際の設定を確認し、正式版に必要な説明を掲載します。",
    ],
  },
  {
    id: "rights",
    number: "07",
    title: "開示・訂正・利用停止等",
    paragraphs: [
      "個人情報の取り扱いに関するお問い合わせや、法令に基づく開示、訂正、利用停止、削除等の請求については、下記の公式メールアドレスで受け付けます。",
      "請求内容に応じて必要な本人確認を行ったうえで、適用法令に従って対応します。具体的な手続きや対応体制については、正式公開前に整備します。",
    ],
  },
  {
    id: "revision",
    number: "08",
    title: "方針の改定",
    paragraphs: [
      "法令、サービス内容、運営体制、外部サービスの利用状況等の変化に応じて、本方針の内容を見直します。",
      "正式版の制定日や改定日については、方針を確定した段階で掲載します。",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <nav
        className="privacy-breadcrumb"
        aria-label="パンくずリスト"
      >
        <div className="container">
          <Link href="/">HOME</Link>
          <span>/</span>
          <span>PRIVACY POLICY</span>
        </div>
      </nav>

      <section className="privacy-hero">
        <div className="container">
          <span className="privacy-eyebrow">
            PRIVACY POLICY
          </span>

          <h1>
            プライバシー
            <br />
            <span className="gradient-text">
              ポリシー
            </span>
          </h1>

          <p>
            Q-Market公式サイトにおける
            <br />
            個人情報の取り扱いについて
          </p>

          <div className="privacy-draft-badge">
            正式公開前の方針案
          </div>
        </div>
      </section>

      <section className="privacy-main">
        <div className="container">
          <div className="privacy-intro">
            <span className="section-label">
              OUR APPROACH TO PRIVACY
            </span>

            <h2>
              個人情報を適切に取り扱うために。
            </h2>

            <p>
              学生団体Q-Marketでは、
              お問い合わせなどで受け取る情報を
              適切に管理できるよう、
              個人情報の取り扱い方針を整備しています。
            </p>
          </div>

          <div className="privacy-warning">
            <div className="privacy-warning-icon">
              i
            </div>

            <div>
              <h3>正式な方針を整備中です</h3>

              <p>
                本ページは確定済みの
                プライバシーポリシーではありません。
                運営者情報、外部サービスの契約条件、
                個人情報の保存・削除方法、
                管理体制等を確認したうえで
                正式版を制定します。
              </p>
            </div>
          </div>

          <div className="privacy-layout">
            <aside className="privacy-sidebar">
              <span className="privacy-sidebar-title">
                CONTENTS
              </span>

              <nav aria-label="ポリシーの目次">
                {privacySections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                  >
                    <span>{section.number}</span>
                    {section.title}
                  </a>
                ))}

                <a href="#operator">
                  <span>09</span>
                  運営者情報・窓口
                </a>
              </nav>
            </aside>

            <div className="privacy-content">
              {privacySections.map((section) => (
                <section
                  id={section.id}
                  key={section.id}
                  className="privacy-article"
                >
                  <div className="privacy-article-heading">
                    <span>{section.number}</span>
                    <h2>{section.title}</h2>
                  </div>

                  <div className="privacy-article-body">
                    {section.paragraphs.map(
                      (paragraph, index) => (
                        <p key={index}>
                          {paragraph}
                        </p>
                      )
                    )}

                    {section.id === "external" && (
                      <p>
                        <a
                          href="https://formspree.io/legal/privacy-policy/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Formspreeのプライバシーポリシー ↗
                        </a>
                      </p>
                    )}
                  </div>
                </section>
              ))}

              <section
                id="operator"
                className="privacy-article"
              >
                <div className="privacy-article-heading">
                  <span>09</span>
                  <h2>
                    運営者情報・お問い合わせ窓口
                  </h2>
                </div>

                <div className="privacy-operator-table">
                  <div>
                    <strong>運営団体</strong>
                    <span>学生団体 Q-Market</span>
                  </div>

                  <div>
                    <strong>
                      公式メールアドレス
                    </strong>
                    <span>
                      <a href={`mailto:${email}`}>
                        {email}
                      </a>
                    </span>
                  </div>

                  <div>
                    <strong>公式Instagram</strong>
                    <span>
                      <a
                        href="https://www.instagram.com/qmarket_campus/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @qmarket_campus ↗
                      </a>
                    </span>
                  </div>

                  <div>
                    <strong>
                      お問い合わせフォーム
                    </strong>
                    <span>
                      <Link href="/contact">
                        公式お問い合わせページ ↗
                      </Link>
                    </span>
                  </div>

                  <div>
                    <strong>
                      所在地・責任者情報
                    </strong>
                    <span className="privacy-pending">
                      正式公開前に要確認
                    </span>
                  </div>

                  <div>
                    <strong>制定日</strong>
                    <span className="privacy-pending">
                      正式版の制定時に記載
                    </span>
                  </div>
                </div>
              </section>

              <div className="privacy-footnote">
                <span>IMPORTANT NOTICE</span>

                <p>
                  このページは開発段階の暫定文案です。
                  一般公開前に、実際の運営体制、
                  利用する外部サービス、
                  データ管理の手順を確認し、
                  正式版を整備します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-contact">
        <div className="container">
          <span>CONTACT Q-MARKET</span>

          <h2>
            個人情報についての
            <br />
            お問い合わせ
          </h2>

          <p>
            ご質問やご相談は、Q-Marketの
            公式お問い合わせ窓口へご連絡ください。
          </p>

          <Link
            href="/contact"
            className="button button-white"
          >
            お問い合わせページへ ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
