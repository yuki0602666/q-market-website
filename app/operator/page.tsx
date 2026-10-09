
import type { Metadata } from "next";
import Link from "next/link";
import "./operator.css";

export const metadata: Metadata = {
  title: "運営団体情報 | Q-Market",
  description:
    "学生団体Q-Marketの組織形態、活動内容、運営体制および公式お問い合わせ窓口をご案内します。",
};

const email = "q.market.campus@gmail.com";

const information = [
  {
    label: "団体名",
    value: "学生団体 Q-Market",
  },
  {
    label: "組織形態",
    value: "任意団体（法人格なし）",
  },
  {
    label: "運営体制",
    value:
      "会則に基づき、代表者および各役職を設置",
  },
  {
    label: "活動内容",
    value:
      "九大生向けフリマサービスの企画・開発・運営準備",
  },
  {
    label: "サービス状況",
    value: "開発中・サービス公開前",
  },
  {
    label: "主な対象",
    value: "九州大学の学生（九大生）",
  },
  {
    label: "公式メールアドレス",
    value: email,
  },
  {
    label: "公式Instagram",
    value: "@qmarket_campus",
  },
];

export default function OperatorPage() {
  return (
    <main className="operator-page">
      <nav
        className="operator-breadcrumb"
        aria-label="パンくずリスト"
      >
        <div className="container">
          <Link href="/">HOME</Link>
          <span>/</span>
          <span>ORGANIZATION</span>
        </div>
      </nav>

      <section className="operator-hero">
        <div className="container">
          <span className="operator-eyebrow">
            ORGANIZATION INFORMATION
          </span>

          <h1>
            運営団体
            <span className="gradient-text">
              情報
            </span>
          </h1>

          <p>
            Q-Marketの運営団体について、
            <br />
            基本情報をご案内します。
          </p>
        </div>
      </section>

      <section className="operator-main">
        <div className="container">
          <div className="operator-intro">
            <span className="section-label">
              ABOUT OUR ORGANIZATION
            </span>

            <h2>学生団体 Q-Market</h2>

            <p>
              Q-Marketは、九大生同士の
              身近なリユースを実現するため、
              フリマサービスの開発を進める
              学生団体です。
            </p>

            <p>
              学生生活の中で使われなくなったモノを、
              必要としている次の学生へつなぐことを
              目指しています。
            </p>

            <p>
              現在は法人格を持たない任意団体として、
              会則に基づき代表者および各役職を
              設置して活動しています。
              将来的なサービスの公開に向けて、
              開発・運営準備を進めています。
            </p>
          </div>

          <div className="operator-table">
            {information.map((item) => (
              <div
                className="operator-table-row"
                key={item.label}
              >
                <strong>{item.label}</strong>

                {item.label ===
                "公式メールアドレス" ? (
                  <a href={`mailto:${email}`}>
                    {item.value}
                  </a>
                ) : item.label ===
                  "公式Instagram" ? (
                  <a
                    href="https://www.instagram.com/qmarket_campus/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value} ↗
                  </a>
                ) : (
                  <span>{item.value}</span>
                )}
              </div>
            ))}
          </div>

          <div className="operator-notice">
            <h3>九州大学との関係について</h3>

            <p>
              Q-Marketは、九州大学の学生を
              対象とした独立した学生団体です。
              九州大学が公式に運営・提供する
              サービスではありません。
            </p>
          </div>

          <div className="operator-contact">
            <div>
              <span className="section-label">
                OFFICIAL CONTACT
              </span>

              <h2>公式お問い合わせ窓口</h2>

              <p>
                サービスに関するご質問、
                取材・広報、協業に関する
                ご相談などを受け付けています。
              </p>

              <p>
                お問い合わせフォームから、
                Q-Market運営窓口へ
                直接ご連絡いただけます。
              </p>
            </div>

            <Link
              href="/contact"
              className="operator-email"
            >
              お問い合わせフォームへ ↗
            </Link>
          </div>

          <div className="operator-notice">
            <h3>
              運営者情報の提供について
            </h3>

            <p>
              Q-Marketの運営団体に関する情報や、
              法令に基づく運営者情報の提供についての
              お問い合わせは、公式メールアドレス
              またはお問い合わせフォームから
              受け付けています。
            </p>

            <p>
              法令に基づき提供が必要な情報については、
              お申し出の内容を確認し、
              適用法令に従って遅滞なく対応します。
            </p>

            <p>
              なお、法令上必要となる運営者情報の
              範囲および具体的な提供手順については、
              一般公開前に確認・整備を進めています。
            </p>

            <a href={`mailto:${email}`}>
              公式メールアドレスへ問い合わせる ↗
            </a>
          </div>

          <div className="operator-notice">
            <h3>個人情報の取り扱いについて</h3>

            <p>
              お問い合わせで受け取った情報は、
              対応に必要な範囲で取り扱います。
              問い合わせ情報は原則として
              対応完了後1年間保存し、
              保存期間の経過後に削除する
              運用方針としています。
            </p>

            <p>
              フォームから送信された情報は
              Formspreeを通じて処理されます。
              個人情報の取り扱いについては、
              プライバシーポリシー案を
              ご確認ください。
            </p>

            <Link href="/privacy">
              プライバシーポリシー案を見る ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
