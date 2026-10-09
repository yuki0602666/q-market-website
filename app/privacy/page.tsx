
import type { Metadata } from "next";
import Link from "next/link";
import "./privacy.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー（準備中） | Q-Market",
  description:
    "学生団体Q-Marketの公式サイトにおける個人情報の取り扱いに関する公開準備中の方針です。",
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
      "本方針案は、学生団体Q-Marketが運営する公式ホームページおよびお問い合わせ窓口における個人情報等の取り扱いを対象としています。",
      "開発中のフリマサービス本体における会員登録、学生認証、出品、取引、決済等の情報の取り扱いについては、サービスの仕様確定後に別途整備します。",
      "Q-Marketは法人格を持たない学生任意団体によるプロジェクトであり、九州大学が公式に運営するサービスではありません。",
    ],
  },
  {
    id: "information",
    number: "02",
    title: "取得する情報",
    paragraphs: [
      "お問い合わせフォームでは、お名前、メールアドレス、お問い合わせ種別、件名、お問い合わせ内容を取得します。また、本文等に利用者が任意で記載した情報を受領する場合があります。",
      "フォームの送信にはFormspreeを利用しています。送信された情報は同サービスによって受信・処理・保存され、設定されたメールアドレスに通知されます。",
      "公式メールアドレスへの直接のご連絡では、送信者のメールアドレス、件名、本文等を受領します。",
      "公式Instagramのダイレクトメッセージを通じたご連絡では、アカウント情報やメッセージ内容などを受領する場合があります。",
      "Webサイトのアクセスログ、Cookie等の取り扱いについては、ホスティングサービスや外部サービスの実際の設定を確認し、正式版に反映します。",
    ],
  },
  {
    id: "purpose",
    number: "03",
    title: "利用目的",
    paragraphs: [
      "取得した情報は、お問い合わせへの回答、必要な連絡、相談内容の確認、サービス改善の参考、法令上必要な対応のために利用します。",
      "お問い合わせ対応に必要な範囲で、権限を持つ運営メンバーが内容を確認します。",
      "個人情報を上記以外の目的で利用する場合は、適用法令に従って必要な対応を行います。",
    ],
  },
  {
    id: "thirdparty",
    number: "04",
    title: "第三者提供・外部サービス",
    paragraphs: [
      "個人データについては、法令で認められる場合を除き、本人の同意その他の適法な根拠なく第三者に提供しない方針です。",
      "公式ホームページのお問い合わせフォームにはFormspreeを利用しています。フォームに入力された情報はFormspreeに送信され、同サービスによって処理・保存されます。",
      "お問い合わせ通知の受信および返信にはGmailを利用しています。また、広報および連絡窓口としてInstagramを利用しています。",
      "外部サービスの利用に伴う情報の委託、国外での取り扱い、提供事業者による保護措置等については、各サービスの利用条件と設定を確認し、正式版に反映します。",
    ],
  },
  {
    id: "security",
    number: "05",
    title: "安全管理",
    paragraphs: [
      "取得した個人情報について、不正アクセス、漏えい、紛失、改ざん等を防ぐため、適切な管理体制を整備する方針です。",
      "お問い合わせ情報へのアクセスは、業務上必要な運営メンバーに限定する方針とし、担当者ごとの権限管理を順次整備します。",
      "公式Gmailのパスワードを複数人で共有せず、担当者ごとにアクセスを管理できる方法を採用する方針です。",
      "お問い合わせフォームでは、Formspreeのスパム判定機能を利用しています。正常なお問い合わせでも、スパム判定によって通知や回答が遅れる場合があります。",
      "パスワード、決済情報、学生証画像等の機密性の高い情報は、お問い合わせフォームから送信しないようお願いしています。",
    ],
  },
  {
    id: "retention",
    number: "06",
    title: "保存期間・削除",
    paragraphs: [
      "お問い合わせ情報は、原則として対応完了後1年間保存し、保存期間の経過後に削除する運用方針です。ただし、法令上の義務や紛争への対応など、保存を継続する合理的な理由がある場合を除きます。",
      "Formspreeの送信履歴については、利用プランに定められた保存期間が適用されます。現在利用している無料プランの送信履歴保存期間は30日です。",
      "Gmailに保存されたお問い合わせ通知および返信履歴は、対応完了日を基準として保存期間を管理する方針です。",
      "保存期間の管理と削除は、運営担当者が定期的に確認する運用とします。具体的な管理・削除手順は正式公開前に整備します。",
    ],
  },
  {
    id: "external",
    number: "07",
    title: "外部サイト・外部サービス",
    paragraphs: [
      "公式ホームページからInstagramなどの外部サイトに移動した場合、移動先での情報の取り扱いには、当該サービスの規約やプライバシーポリシーが適用されます。",
      "公式ホームページのホスティングにはVercelを利用しています。",
      "外部サービスの利用状況や設定を確認し、必要に応じて本方針の内容を更新します。",
    ],
  },
  {
    id: "rights",
    number: "08",
    title: "開示・訂正・利用停止等",
    paragraphs: [
      "個人情報の取り扱いに関するお問い合わせや、法令に基づく保有個人データの開示、訂正、利用停止、削除等の請求については、公式メールアドレスで受け付けます。",
      "本人の個人データに関する請求については、必要な範囲で本人確認を行ったうえで、適用法令に従って対応します。",
      "本人確認の際には、請求内容に照らして必要以上の個人情報を求めないよう配慮します。具体的な受付・回答手順は正式公開前に整備します。",
    ],
  },
  {
    id: "revision",
    number: "09",
    title: "方針の改定",
    paragraphs: [
      "法令、サービス内容、運営体制、利用する外部サービス等の変化に応じて、本方針の内容を見直します。",
      "正式版の制定日および改定日については、方針の確定後に掲載します。",
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
                運営者情報の提供方法、
                外部サービスの取り扱い、
                管理体制や削除手順等を確認したうえで
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
                  <span>10</span>
                  運営団体・お問い合わせ窓口
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
                  <span>10</span>
                  <h2>
                    運営団体・お問い合わせ窓口
                  </h2>
                </div>

                <div className="privacy-operator-table">
                  <div>
                    <strong>運営団体</strong>
                    <span>学生団体 Q-Market</span>
                  </div>

                  <div>
                    <strong>組織形態</strong>
                    <span>
                      任意団体（法人格なし）
                    </span>
                  </div>

                  <div>
                    <strong>公式メールアドレス</strong>
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
                    <strong>お問い合わせフォーム</strong>
                    <span>
                      <Link href="/contact">
                        公式お問い合わせページ ↗
                      </Link>
                    </span>
                  </div>

                  <div>
                    <strong>
                      運営者情報の提供
                    </strong>
                    <span>
                      法令に基づく情報提供に関する
                      ご連絡は、公式メールアドレスで
                      受け付けています。
                    </span>
                  </div>

                  <div>
                    <strong>制定日</strong>
                    <span className="privacy-pending">
                      正式版の制定時に記載
                    </span>
                  </div>
                </div>

                <div className="privacy-article-body">
                  <p>
                    運営団体の名称・住所その他、
                    法令に基づき提供が必要な
                    運営者情報についてのお問い合わせは、
                    公式メールアドレスで
                    受け付けています。
                  </p>

                  <p>
                    お申し出の内容を確認し、
                    適用法令に従って
                    遅滞なく対応します。
                    法令上必要な提供情報の範囲と
                    対応手順は、正式公開前に
                    確認・整備します。
                  </p>

                  <p>
                    運営者情報の照会と、
                    ご本人の保有個人データに関する
                    開示等の請求は、内容に応じて
                    区別して対応します。
                  </p>
                </div>
              </section>

              <div className="privacy-footnote">
                <span>IMPORTANT NOTICE</span>

                <p>
                  本ページは公開準備段階の方針案です。
                  正式公開前に運営情報の提供方法、
                  外部サービスの条件、個人情報の管理・
                  削除手順を確認して正式版を制定します。
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
