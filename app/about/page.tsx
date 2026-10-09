
import type { Metadata } from "next";
import Link from "next/link";
import "./about.css";

export const metadata: Metadata = {
  title: "運営団体について | Q-Market",
  description:
    "Q-Marketの理念、設立背景、運営方針、今後の展望をご紹介します。九大生のための新しいマーケットプレイスを目指しています。",
};

const values = [
  {
    number: "01",
    icon: "🎓",
    english: "STUDENT FIRST",
    title: "九大生を中心に考える",
    description:
      "サービスの起点は、九大生のリアルな課題。日々の学生生活に目を向け、必要とされる価値を追求します。",
  },
  {
    number: "02",
    icon: "🤝",
    english: "TRUST & RESPONSIBILITY",
    title: "信頼と責任を大切にする",
    description:
      "学生同士が安心して利用できるように、透明性のある運営と適切なルールづくりを重視します。",
  },
  {
    number: "03",
    icon: "🚀",
    english: "CHALLENGE & INNOVATION",
    title: "挑戦し、改善し続ける",
    description:
      "既存の仕組みにとらわれず、小さな挑戦と改善を積み重ねながら、新たな可能性を切り開きます。",
  },
  {
    number: "04",
    icon: "♻️",
    english: "SUSTAINABLE VALUE",
    title: "価値を次につなげる",
    description:
      "まだ使えるモノを必要な人へ。身近なリユースを通じて、資源を大切にする選択肢を広げます。",
  },
];

const organization = [
  {
    english: "MANAGEMENT",
    title: "運営・事業企画",
    description:
      "事業方針、運営体制、予算管理、事業化に向けた計画などを担う領域です。",
  },
  {
    english: "DEVELOPMENT",
    title: "プロダクト開発",
    description:
      "Q-Market本体の設計・開発、機能改善、技術的な運用などを担う領域です。",
  },
  {
    english: "MARKETING",
    title: "広報・マーケティング",
    description:
      "公式サイトやSNSを通じた情報発信、認知拡大、利用者との接点づくりを担う領域です。",
  },
  {
    english: "OPERATIONS",
    title: "サービス運営",
    description:
      "利用規約、安全対策、問い合わせ対応など、サービス運営に必要な仕組みを整える領域です。",
  },
];

const roadmap = [
  {
    number: "01",
    stage: "CURRENT PHASE",
    title: "プロジェクト立ち上げ",
    description:
      "サービスの企画、ブランドの構築、開発体制の整備を進める段階です。",
  },
  {
    number: "02",
    stage: "PREPARATION",
    title: "サービス開発・公開準備",
    description:
      "主要機能の開発やテスト、利用ルールと運営体制の整備を進めます。",
  },
  {
    number: "03",
    stage: "FUTURE",
    title: "サービス公開・改善",
    description:
      "公開後は実際の利用状況やフィードバックをもとに改善を重ねる構想です。",
  },
  {
    number: "04",
    stage: "LONG-TERM VISION",
    title: "持続可能な事業へ",
    description:
      "継続的な運営を目指し、必要に応じて法人化などの事業体制を検討します。",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-breadcrumb">
        <div className="container">
          <Link href="/">HOME</Link>
          <span>/</span>
          <span>ABOUT US</span>
        </div>
      </div>

      {/* メインビジュアル */}
      <section className="about-hero">
        <div className="about-hero-orb about-orb-one" />
        <div className="about-hero-orb about-orb-two" />

        <div className="container about-hero-inner">
          <span className="about-eyebrow">WHO WE ARE</span>

          <h1>
            九大生から、
            <br />
            <span className="gradient-text">
              新しい当たり前を。
            </span>
          </h1>

          <p>
            学生生活の課題を、学生自身の手で。
            <br />
            Q-Marketは、九大生のための
            新しい価値づくりに挑戦しています。
          </p>

          <span className="about-hero-tag">
            BUILDING THE FUTURE OF CAMPUS LIFE
          </span>
        </div>
      </section>

      {/* 団体紹介 */}
      <section className="section about-introduction">
        <div className="container about-introduction-grid">
          <div>
            <span className="section-label">ABOUT US</span>
            <h2 className="about-title">
              学生の視点から、
              <br />
              学生のためのサービスを。
            </h2>
          </div>

          <div className="about-description">
            <p>
              Q-Marketは、九州大学の学生を対象とした
              フリマサービスの実現を目指す
              学生発のプロジェクトです。
            </p>
            <p>
              教科書や家具、家電など、
              学生生活の中で役割を終えたモノを、
              それを必要とする次の学生へ。
            </p>
            <p>
              九大生というコミュニティと、
              近い生活圏を活かした仕組みを通じて、
              大学生活に新しい選択肢を生み出します。
            </p>
          </div>
        </div>
      </section>

      {/* ミッション */}
      <section className="section about-mission">
        <div className="container">
          <span className="section-label">OUR MISSION</span>

          <div className="about-statement">
            <div className="about-statement-index">01 / MISSION</div>
            <div>
              <h2>
                学生生活に、
                <br />
                <span>もっと自由な選択肢を。</span>
              </h2>
              <p>
                九大生同士をつなぐマーケットプレイスを通じて、
                モノを売る・買う・譲るという選択肢を
                もっと身近なものにする。
                それがQ-Marketの目指す役割です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ビジョン */}
      <section className="section about-vision">
        <div className="container">
          <span className="section-label">OUR VISION</span>

          <div className="about-statement">
            <div className="about-statement-index">02 / VISION</div>
            <div>
              <h2>
                必要なモノが、
                <br />
                <span>必要な学生へつながる未来。</span>
              </h2>
              <p>
                まだ使えるモノが無駄にならず、
                誰かの新しい学生生活に役立つ。
                Q-Marketは、大学という身近な場所から
                モノの循環を生み出すことを目指します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* バリュー */}
      <section className="section about-values">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">OUR VALUES</span>
            <h2>私たちが大切にしたいこと。</h2>
            <p>
              Q-Marketがサービスづくりを進めるうえで
              大切にしたい、4つの考え方です。
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => (
              <article
                className="about-value-card"
                key={value.number}
              >
                <div className="about-value-top">
                  <span>{value.number}</span>
                  <span className="about-value-icon">
                    {value.icon}
                  </span>
                </div>

                <span className="about-value-english">
                  {value.english}
                </span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 設立背景 */}
      <section className="section about-story">
        <div className="container about-story-grid">
          <div className="about-story-visual">
            <span>OUR STORY</span>
            <div className="about-story-symbol">
              Q<span>↗</span>
            </div>
            <p>FROM STUDENTS, FOR STUDENTS.</p>
          </div>

          <div className="about-story-content">
            <span className="section-label">OUR STORY</span>
            <h2 className="about-title">
              はじまりは、
              <br />
              大学生活の身近な課題。
            </h2>

            <p>
              大学生活では、授業で使う教科書、
              一人暮らしの家具や家電、
              通学に使う自転車など、
              さまざまなモノが必要になります。
            </p>
            <p>
              一方で、卒業や引っ越し、
              生活環境の変化によって、
              使わなくなるモノも生まれます。
            </p>
            <p>
              こうした「不要になったモノ」と
              「必要としている人」を、
              もっと簡単につなげられないか。
              その課題意識から、Q-Marketの構想は始まりました。
            </p>
            <p>
              まずは九大生の身近な生活圏から。
              小さな課題を解決することを通じて、
              新たな価値の創出に取り組みます。
            </p>
          </div>
        </div>
      </section>

      {/* 運営体制 */}
      <section className="section about-organization">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">ORGANIZATION</span>
            <h2>運営体制</h2>
            <p>
              Q-Marketでは、サービスの開発と
              運営に必要な機能を分担しながら、
              プロジェクトを進めていきます。
            </p>
          </div>

          <div className="about-organization-grid">
            {organization.map((item) => (
              <article
                className="about-organization-card"
                key={item.english}
              >
                <span>{item.english}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <p className="about-small-note">
            ※ 上記は運営上の機能区分を示したものです。
            正式な部署編成や担当者の情報は、
            体制の整備に合わせて更新します。
          </p>
        </div>
      </section>

      {/* ロードマップ */}
      <section className="section about-roadmap">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">OUR ROADMAP</span>
            <h2>これからのQ-Market</h2>
            <p>
              学生発のプロジェクトから、
              持続可能なサービスへ。
              段階的に成長することを目指します。
            </p>
          </div>

          <div className="about-roadmap-list">
            {roadmap.map((item) => (
              <article
                className="about-roadmap-item"
                key={item.number}
              >
                <div className="about-roadmap-number">
                  {item.number}
                </div>

                <div className="about-roadmap-content">
                  <span>{item.stage}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="about-small-note">
            ※ 上記は現時点での構想であり、
            各段階の実施時期や実現を保証するものではありません。
          </p>
        </div>
      </section>

      {/* 団体概要 */}
      <section className="section about-profile">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">PROFILE</span>
            <h2>プロジェクト概要</h2>
          </div>

          <div className="about-profile-table">
            <div className="about-profile-row">
              <span>プロジェクト名</span>
              <p>Q-Market（キューマーケット）</p>
            </div>
            <div className="about-profile-row">
              <span>活動形態</span>
              <p>学生発プロジェクト（事業化構想）</p>
            </div>
            <div className="about-profile-row">
              <span>対象</span>
              <p>九州大学の学生（九大生）</p>
            </div>
            <div className="about-profile-row">
              <span>事業内容</span>
              <p>
                九大生向けマーケットプレイスの
                企画・開発・運営準備
              </p>
            </div>
            <div className="about-profile-row">
              <span>サービス状況</span>
              <p>公開準備中</p>
            </div>
            <div className="about-profile-row">
              <span>公式Instagram</span>
              <p>
                <a
                  href="https://www.instagram.com/qmarket_campus/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @qmarket_campus ↗
                </a>
              </p>
            </div>
          </div>

          <p className="about-small-note">
            ※ Q-Marketは九州大学の学生を対象とした
            独立したプロジェクトです。
            九州大学による公式運営・公認を示すものではありません。
          </p>
        </div>
      </section>

      {/* 最終CTA */}
      <section className="about-cta">
        <div className="container">
          <span>CONNECT WITH Q-MARKET</span>

          <h2>
            新しいマーケットの、
            <br />
            はじまりを。
          </h2>

          <p>
            Q-Marketは現在、サービス公開に向けて
            準備を進めています。
            <br />
            開発状況や最新情報は公式Instagramで
            発信しています。
          </p>

          <div className="about-cta-buttons">
            <Link href="/service" className="button button-white">
              サービスについて ↗
            </Link>

            <a
              href="https://www.instagram.com/qmarket_campus/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-instagram-button"
            >
              公式Instagram ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
