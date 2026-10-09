
import type { Metadata } from "next";
import Link from "next/link";
import "./privacy.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー（準備中） | Q-Market",
  description:
    "Q-Market公式サイトの個人情報の取り扱いに関する方針案です。正式公開前の確認・整備を進めています。",
  robots: {
    index: false,
    follow: false,
  },
};

const privacySections = [
  {
    id: "scope",
    number: "01",
    title: "適用範囲",
    paragraphs: [
      "本方針案は、Q-Marketの公式ホームページにおける個人情報等の取り扱いについて定めるものです。",
      "Q-Marketのフリマサービス本体については、会員登録、学生確認、出品、取引、決済等の仕様が確定した段階で、必要な事項を別途整備します。",
    ],
  },
  {
    id: "information",
    number: "02",
    title: "取得する情報",
    paragraphs: [
      "公式ホームページでは、利用者が外部の連絡手段を通じて任意に提供する氏名、連絡先、お問い合わせ内容等を、運営者が受領する場合があります。",
      "現在の公式サイトに設けているお問い合わせ内容作成フォームは、入力内容を利用者の端末上でコピーする方式であり、コピー操作そのものによってQ-Marketにお問い合わせが送信されるものではありません。",
      "サーバーやホスティングサービス等が取り扱うアクセスログ、通信情報、Cookie等については、実際の利用サービスと設定を確認し、正式公開前に必要な説明を整備します。",
    ],
  },
  {
    id: "purpose",
    number: "03",
    title: "情報の利用目的",
    paragraphs: [
      "取得した個人情報を取り扱う場合は、お問い合わせへの回答、連絡対応、サービスの企画・改善、適切な運営および法令上必要な対応など、特定した利用目的の範囲内で取り扱う方針です。",
      "今後、利用目的を追加または変更する場合は、法令に従って必要な通知・公表等を行います。",
    ],
  },
  {
    id: "thirdparty",
    number: "04",
    title: "第三者提供",
    paragraphs: [
      "取得した個人データの第三者への提供については、法令上認められる場合を除き、本人の同意その他の適法な根拠なく行わない方針です。",
      "外部サービスへの業務委託や情報の取り扱いについては、実際の運営構成を確認したうえで必要な情報を明示します。",
    ],
  },
  {
    id: "security",
    number: "05",
    title: "安全管理措置",
    paragraphs: [
      "個人データを取り扱う場合には、不正アクセス、漏えい、滅失、毀損等の防止のため、取り扱う情報の内容とリスクに応じた安全管理措置を整備する方針です。",
      "具体的なアクセス権限、保存期間、管理責任、委託先の監督等については、正式な運営体制に合わせて確認・整備します。",
    ],
  },
  {
    id: "external",
    number: "06",
    title: "外部サービスの利用",
    paragraphs: [
      "公式サイトからInstagram等の外部サイトへ移動した場合、移動先における個人情報等の取り扱いには、各サービスの規約やプライバシーポリシーが適用されます。",
      "公式サイト自体のホスティング、アクセス解析、フォーム送信等に利用する外部サービスについては、採用状況とデータの取り扱いを確認し、必要な情報を掲載します。",
    ],
  },
  {
    id: "rights",
    number: "07",
    title: "個人情報に関するお問い合わせ・請求",
    paragraphs: [
      "本人から個人情報の取り扱いに関するお問い合わせや、法令に基づく開示、訂正、利用停止等の請求があった場合には、本人確認および対象となる情報の確認を行ったうえで、適用法令に従って対応する方針です。",
      "正式な受付窓口、請求方法および対応手順については、公開前に整備します。",
    ],
  },
  {
    id: "revision",
    number: "08",
    title: "方針の見直し",
    paragraphs: [
      "法令の改正、サービス内容の変更、個人情報の取り扱い方法の変更等に応じて、方針を見直すことがあります。",
      "正式な方針の制定日、改定日および改定内容の周知方法は、運営開始までに確定します。",
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

            <h2>個人情報を適切に取り扱うために。</h2>

            <p>
              Q-Marketでは、利用者の個人情報を
              適切に取り扱うことを重要な責任と考えています。
              本ページは、公式ホームページの
              運営に向けて準備している
              プライバシーポリシーの案です。
            </p>
          </div>

          <div className="privacy-warning">
            <div className="privacy-warning-icon">
              i
            </div>

            <div>
              <h3>現在、正式な方針を整備中です</h3>
              <p>
                本ページは確定済みの規程ではありません。
                運営者情報、利用サービス、
                個人情報の管理体制等を確認したうえで、
                正式版を制定する予定です。
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
                    href={`#${section.id}`}
                    key={section.id}
                  >
                    <span>{section.number}</span>
                    {section.title}
                  </a>
                ))}

                <a href="#operator">
                  <span>09</span>
                  運営者情報
                </a>
              </nav>
            </aside>

            <div className="privacy-content">
              {privacySections.map((section) => (
                <section
                  className="privacy-article"
                  id={section.id}
                  key={section.id}
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
                  </div>
                </section>
              ))}

              <section
                id="operator"
                className="privacy-article"
              >
                <div className="privacy-article-heading">
                  <span>09</span>
                  <h2>運営者情報</h2>
                </div>

                <div className="privacy-operator-table">
                  <div>
                    <strong>プロジェクト名</strong>
                    <span>Q-Market</span>
                  </div>

                  <div>
                    <strong>正式な運営者名</strong>
                    <span className="privacy-pending">
                      公開前に要確認
                    </span>
                  </div>

                  <div>
                    <strong>所在地・連絡先</strong>
                    <span className="privacy-pending">
                      公開前に要確認
                    </span>
                  </div>

                  <div>
                    <strong>個人情報に関する窓口</strong>
                    <span className="privacy-pending">
                      公開前に要確認
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
                  本ページは公式HPの開発段階で
                  作成した暫定文案です。
                  実際の取り扱い、適用法令および
                  外部サービスの仕様に照らして
                  正式公開前に内容を確定します。
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
            Q-Marketへの
            <br />
            お問い合わせ
          </h2>

          <p>
            現在のお問い合わせ窓口は、
            お問い合わせページをご確認ください。
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
