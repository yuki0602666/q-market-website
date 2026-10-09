
import type { Metadata } from "next";
import Link from "next/link";
import "./operator.css";

export const metadata: Metadata = {
  title: "運営団体情報 | Q-Market",
  description:
    "学生団体Q-Marketの活動内容、基本情報、公式お問い合わせ窓口をご案内します。",
};

const email = "q.market.campus@gmail.com";

const information = [
  {
    label: "団体名",
    value: "Q-Market",
  },
  {
    label: "組織形態",
    value: "学生団体",
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
    label: "お問い合わせ",
    value: email,
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
            <span className="gradient-text">情報</span>
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
          </div>

          <div className="operator-table">
            {information.map((item) => (
              <div
                className="operator-table-row"
                key={item.label}
              >
                <strong>{item.label}</strong>

                {item.label === "お問い合わせ" ? (
                  <a href={`mailto:${email}`}>
                    {item.value}
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
              Q-Marketは九州大学の学生を対象とした
              独立したプロジェクトです。
              九州大学が公式に運営している
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
                ご質問、取材、協業に関する
                ご相談などは、公式メールアドレスへ
                お問い合わせください。
              </p>
            </div>

            <a
              href={`mailto:${email}`}
              className="operator-email"
            >
              メールで問い合わせる ↗
            </a>
          </div>

          <div className="operator-notice">
            <h3>個人情報の取り扱いについて</h3>

            <p>
              お問い合わせで受け取った情報は、
              対応に必要な範囲で取り扱います。
              個人情報の取り扱いに関する詳細は、
              プライバシーポリシーをご確認ください。
            </p>

            <p>
              運営責任者情報、所在地、正式な管理体制など
              未確定の事項については、
              一般公開までに整理を進めます。
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
