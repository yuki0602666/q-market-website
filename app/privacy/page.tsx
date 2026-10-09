
import type { Metadata } from "next";
import Link from "next/link";

import "./privacy.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー（準備中） | Q-Market",
  description:
    "学生団体Q-Marketの公式ホームページにおける個人情報の取り扱いについて、正式制定に向けて整備中の方針案です。",
  alternates: {
    canonical: "/privacy",
  },
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
      "本方針案は、学生団体Q-Marketが運営する公式ホームページおよび公式のお問い合わせ窓口における個人情報等の取り扱いを対象としています。",
      "対象となるお問い合わせ窓口には、公式ホームページのお問い合わせフォーム、公式メールアドレスおよび公式Instagramのダイレクトメッセージが含まれます。",
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
      "フォームの送信にはFormspreeを利用しています。送信された情報は同サービスによって受信・処理・保存され、Q-Marketが設定したメールアドレスに通知されます。",
      "公式メールアドレスへの直接のご連絡では、送信者のメールアドレス、件名、本文等を受領します。",
      "公式Instagramのダイレクトメッセージでは、アカウント情報、メッセージ内容その他お問い合わせに伴う情報を受領する場合があります。",
      "お問い合わせへの対応状況を管理するため、受付番号、受付日、問い合わせ種別、受付経路、担当者、対応状況、対応完了日、削除予定日等を管理台帳に記録します。",
      "Webサイトのアクセスログ、Cookie等の取り扱いについては、ホスティングサービスおよび外部サービスの実際の設定を確認し、正式版に反映します。",
    ],
  },
  {
    id: "purpose",
    number: "03",
    title: "利用目的",
    paragraphs: [
      "取得した情報は、お問い合わせへの回答、必要な連絡、相談内容の確認、対応履歴の管理、サービス改善の参考、法令上必要な対応のために利用します。",
      "お問い合わせ対応および個人情報の管理は、現時点ではQ-Marketの代表者が担当しています。",
      "将来、運営体制の変更によって担当者を追加する場合は、業務上必要な範囲に限って情報へのアクセスを認める方針です。",
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
      "お問い合わせ通知の受信および返信にはGoogleのGmailを利用し、対応状況等の管理にはGoogleスプレッドシートを利用しています。",
      "広報およびお問い合わせ窓口としてInstagramを利用しています。Instagramのダイレクトメッセージで受け付けたお問い合わせも、必要な範囲で共通の管理台帳に記録します。",
      "公式ホームページのホスティングにはVercelを利用しています。",
      "外部サービスの利用に伴う情報処理の委託、国外での取り扱い、事業者による保護措置、適用される法的要件等については確認を継続しており、正式版の制定前に必要な事項を整理します。",
    ],
  },
  {
    id: "security",
    number: "05",
    title: "安全管理",
    paragraphs: [
      "Q-Marketでは、取得した個人情報への不正アクセス、漏えい、紛失、改ざん等を防ぐため、アカウントの認証保護、アクセス権限の制限、管理記録の作成等に取り組んでいます。",
      "お問い合わせ対応と個人情報管理の最終責任者はQ-Marketの代表者です。現時点では代表者が問い合わせ対応、Gmail・Formspreeおよび管理台帳の管理を担当しています。",
      "公式アカウントのパスワードを運営メンバー間で共有せず、今後担当者を追加する場合は各サービスで利用可能な適切な権限管理方法を確認します。",
      "お問い合わせフォームでは、Formspreeのスパム判定機能を利用しています。正常なお問い合わせでも、スパム判定によって通知や回答が遅れる場合があります。",
      "パスワード、決済情報、学生証画像等の機密性の高い情報は、お問い合わせフォームやInstagramのダイレクトメッセージから送信しないようお願いしています。",
    ],
  },
  {
    id: "retention",
    number: "06",
    title: "保存期間・削除",
    paragraphs: [
      "お問い合わせに関する情報は、原則として対応完了後1年間を保存期間とする方針です。ただし、法令上の保存義務、紛争への対応その他保存を継続する合理的な理由がある場合は、必要な範囲で保存を継続することがあります。",
      "お問い合わせの受付日、対応状況、対応完了日、削除予定日等は、Googleスプレッドシートの管理台帳で管理します。",
      "個人情報管理台帳の定期点検日は毎月1日とし、代表者が保存期限の到来した案件や対応状況を確認します。保存期間の経過後は、継続保存の必要性を確認したうえで、対象情報を速やかに削除する方針です。",
      "Gmailに保存された通知メールおよび返信履歴は、管理台帳の記録に基づいて削除対象を確認します。削除が必要な場合は、メール本文や添付ファイルだけでなく、関連する保存先についても確認します。",
      "Instagramのダイレクトメッセージについても共通の管理台帳で期限を管理します。ただし、Instagram上でQ-Marketが削除できる情報の範囲には、サービスの仕様による制限があります。",
      "Formspreeの管理画面上の送信履歴には、利用プランに応じた保存期間が適用されます。現在利用している無料プランでは、送信履歴の保存期間は30日と案内されています。Gmail等に残る情報については、これとは別に管理します。",
      "削除作業の実施状況は管理台帳に記録します。関連するすべての外部サービスや相手方の環境からの完全な消去を保証するものではありません。",
    ],
  },
  {
    id: "external",
    number: "07",
    title: "外部サイト・外部サービス",
    paragraphs: [
      "公式ホームページからInstagramなどの外部サイトに移動した場合、移動先での情報の取り扱いには、当該サービスの規約やプライバシーポリシーが適用されます。",
      "Q-Marketでは、公式ホームページの運営にVercel、お問い合わせの受付にFormspree、連絡および管理にGoogleのサービス、広報および連絡窓口にInstagramを利用しています。",
      "これらのサービスによるアクセスログ、Cookie、通信情報等の取り扱いについては、実際の設定および各サービスの公表資料を確認し、必要に応じて本方針を更新します。",
      "外部サービスの仕様や利用条件の変更に応じて、利用方法や個人情報の管理方法を見直すことがあります。",
    ],
  },
  {
    id: "rights",
    number: "08",
    title: "開示・訂正・利用停止等",
    paragraphs: [
      "個人情報の取り扱いに関するお問い合わせや、法令に基づく保有個人データの開示、訂正、利用停止、削除等の請求については、Q-Marketの公式メールアドレスで受け付けます。",
      "請求を受け付けた場合は、代表者が内容を確認し、必要な範囲で本人確認を行ったうえで、適用法令に従って対応します。",
      "本人確認の際には、請求内容に照らして必要以上の個人情報を取得しないよう配慮します。本人確認の方法や回答手順については、正式版の制定前に必要な事項を整理します。",
      "請求の内容や適用法令によっては、全部または一部のご希望に対応できない場合があります。その場合は、法令に従って必要な説明を行います。",
    ],
  },
  {
    id: "revision",
    number: "09",
    title: "方針の改定",
    paragraphs: [
      "法令、サービス内容、運営体制、利用する外部サービス等の変化に応じて、本方針を見直します。",
      "現在掲載している内容は正式制定前の草案であり、運営者情報の提供方法や外部サービスの取り扱いなど、確認が必要な事項が残っています。",
      "正式版の制定日および改定日は、方針の確定後に本ページへ掲載します。",
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
            正式制定前の草案
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
              適切に管理するため、
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
                本ページは正式制定前の草案です。
                お問い合わせの管理体制や保存期間など、
                現在の運用方針を反映しています。
                運営者情報の提供方法、
                外部サービスの取り扱い、
                法令上必要な事項を確認したうえで
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
                    <strong>個人情報管理責任者</strong>
                    <span>
                      Q-Market代表者
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
                    <strong>運営者情報の提供</strong>
                    <span>
                      法令に基づく情報提供に関する
                      お問い合わせは、公式メールアドレスで
                      受け付けています。
                    </span>
                  </div>

                  <div>
                    <strong>制定日</strong>
                    <span className="privacy-pending">
                      未制定（正式版の制定時に記載）
                    </span>
                  </div>
                </div>

                <div className="privacy-article-body">
                  <p>
                    運営団体の名称・住所その他、
                    法令に基づき提供が必要な
                    運営者情報に関するお問い合わせは、
                    公式メールアドレスで受け付けています。
                  </p>

                  <p>
                    お申し出の内容を確認し、
                    適用法令に従って対応します。
                    法令上必要な提供情報の範囲と
                    対応手順については、
                    現在確認を進めています。
                  </p>

                  <p>
                    運営者情報の照会と、
                    ご本人の保有個人データに関する
                    開示等の請求は、
                    内容に応じて区別して対応します。
                  </p>
                </div>
              </section>

              <div className="privacy-footnote">
                <span>IMPORTANT NOTICE</span>

                <p>
                  本ページは正式制定前の草案です。
                  個人情報管理の運用方針を反映していますが、
                  法定運営者情報の提供方法、
                  外部サービスの個人情報処理条件、
                  請求対応手順等には
                  未確認の事項があります。
                  必要な確認を完了したうえで
                  正式版を制定します。
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
