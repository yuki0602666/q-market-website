
import type { Metadata } from "next";
import Link from "next/link";
import "./service.css";

export const metadata: Metadata = {
  title: "サービス紹介 | Q-Market",
  description:
    "Q-Marketは九大生限定のフリマサービスです。学生生活に必要な教科書、家具、家電、自転車などを九大生同士でつなぐマーケットプレイスを開発しています。",
};

const features = [
  {
    number: "01",
    icon: "🎓",
    title: "九大生限定",
    subtitle: "ONLY FOR KYUSHU UNIVERSITY STUDENTS",
    description:
      "Q-Marketは、九州大学の学生を対象としたマーケットプレイスです。同じ大学に通う学生同士だからこそ生まれる、身近な取引の仕組みを目指しています。",
  },
  {
    number: "02",
    icon: "📍",
    title: "近距離での手渡し",
    subtitle: "LOCAL HAND-TO-HAND",
    description:
      "キャンパスや生活圏が近いことを活かし、出品者と購入者が直接モノを受け渡せる仕組みを目指します。大型の家具や自転車なども、身近な場所での取引を想定しています。",
  },
  {
    number: "03",
    icon: "♻️",
    title: "学生生活に根ざしたリユース",
    subtitle: "STUDENT-TO-STUDENT REUSE",
    description:
      "卒業や引っ越しで不要になったモノを、次の九大生へ。学生生活の中で使われるモノを循環させ、無駄を減らす新しい選択肢をつくります。",
  },
];

const categories = [
  {
    icon: "📚",
    name: "教科書・参考書",
    example: "専門書、参考書、問題集など",
  },
  {
    icon: "🪑",
    name: "家具・インテリア",
    example: "机、椅子、収納用品など",
  },
  {
    icon: "🔌",
    name: "家電",
    example: "生活家電、調理家電など",
  },
  {
    icon: "🚲",
    name: "自転車",
    example: "通学用自転車など",
  },
  {
    icon: "💻",
    name: "PC・デジタル機器",
    example: "パソコン、周辺機器など",
  },
  {
    icon: "📦",
    name: "その他",
    example: "学生生活に役立つアイテム",
  },
];

const steps = [
  {
    number: "01",
    title: "モノを探す・出品する",
    description:
      "欲しいモノを探したり、使わなくなったモノを出品したり。九大生同士のマーケットを想定しています。",
  },
  {
    number: "02",
    title: "取引条件を確認する",
    description:
      "出品情報を確認し、価格や商品の状態、受け渡し方法などについて双方で合意します。",
  },
  {
    number: "03",
    title: "取引・受け渡し",
    description:
      "合意した条件に従って取引を進め、商品を受け渡します。正式な決済手順は公開時に案内する予定です。",
  },
];

const faqs = [
  {
    question: "Q-Marketは誰が利用できますか？",
    answer:
      "九州大学の学生を対象としたサービスとして開発しています。具体的な利用資格や学生確認の方法は、正式公開時にご案内します。",
  },
  {
    question: "サービスはもう利用できますか？",
    answer:
      "現在は開発・準備段階です。正式なサービス公開まで、もうしばらくお待ちください。",
  },
  {
    question: "どのような商品を出品できますか？",
    answer:
      "教科書、家具、家電、自転車、PC関連商品などを想定しています。出品できる商品の範囲や禁止品目については、利用規約などで定める予定です。",
  },
  {
    question: "利用料金や手数料はありますか？",
    answer:
      "料金体系は現在検討中です。正式に決定した内容は、サービス公開前にお知らせします。",
  },
  {
    question: "代金はどのように支払いますか？",
    answer:
      "サービス内での決済機能を検討しています。具体的な決済方法や売上金の受け取り方法は、確定後にご案内します。",
  },
  {
    question: "いつ公開されますか？",
    answer:
      "現在、公開時期は未定です。開発状況や今後の情報は公式Instagramなどで発信していきます。",
  },
];

export default function ServicePage() {
  return (
    <main>
      {/* パンくずリスト */}
      <div className="service-breadcrumb">
        <div className="container">
          <Link href="/">HOME</Link>
          <span>/</span>
          <span>SERVICE</span>
        </div>
      </div>

      {/* ファーストビュー */}
      <section className="service-hero">
        <div className="container service-hero-inner">
          <span className="service-eyebrow">
            OUR SERVICE
          </span>

          <h1>
            九大生のための、
            <br />
            <span className="gradient-text">
              新しいマーケット。
            </span>
          </h1>

          <p>
            学生生活に必要なモノを、
            <br />
            もっと身近に、もっと便利に。
          </p>

          <span className="service-coming">
            SERVICE COMING SOON
          </span>
        </div>
      </section>

      {/* サービス概要 */}
      <section className="section service-intro">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">
              WHAT IS Q-MARKET?
            </span>

            <h2>
              九大生と九大生を、
              <br />
              モノでつなぐ。
            </h2>

            <p>
              Q-Marketは、九州大学の学生を対象とした
              フリマサービスです。
              卒業や引っ越し、授業やサークル活動など、
              大学生活で生まれる「譲りたい」と
              「欲しい」をつなぐことを目指しています。
            </p>
          </div>

          <div className="service-concept">
            <div className="service-concept-symbol">
              Q<span>↗</span>
            </div>

            <div className="service-concept-text">
              <span>OUR VISION</span>
              <h3>近いから、つながる。</h3>
              <p>
                九州大学という共通のコミュニティと、
                近い生活圏を活かした取引体験。
                学生生活をより便利で豊かなものにする
                新しいマーケットを目指しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 解決したい課題 */}
      <section className="section service-problem">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">
              WHY Q-MARKET?
            </span>
            <h2>
              こんな経験、ありませんか？
            </h2>
          </div>

          <div className="service-problem-grid">
            <div className="service-problem-card">
              <span>01</span>
              <h3>教科書を安く手に入れたい</h3>
              <p>
                授業で必要な教科書や参考書。
                できれば身近な先輩から譲ってもらいたい。
              </p>
            </div>

            <div className="service-problem-card">
              <span>02</span>
              <h3>引っ越しで家具を手放したい</h3>
              <p>
                まだ使える家具や家電があるのに、
                譲る相手が見つからない。
              </p>
            </div>

            <div className="service-problem-card">
              <span>03</span>
              <h3>配送が大変なモノを取引したい</h3>
              <p>
                自転車や大型家具など、
                配送の手間がかかるモノを近くで受け渡したい。
              </p>
            </div>
          </div>

          <div className="service-solution">
            <span>Q-MARKET SOLUTION</span>
            <h3>
              そんな学生生活の課題を、
              <br />
              Q-Marketで解決したい。
            </h3>
            <p>
              九大生限定・近距離手渡しを中心とした
              マーケットプレイスを開発しています。
            </p>
          </div>
        </div>
      </section>

      {/* 3つの特徴 */}
      <section className="section service-features">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">
              OUR FEATURES
            </span>
            <h2>Q-Marketが目指す3つの特徴</h2>
            <p>
              九大生の生活圏と学生コミュニティに
              着目したサービスを目指します。
            </p>
          </div>

          <div className="service-feature-list">
            {features.map((feature) => (
              <article
                className="service-feature-row"
                key={feature.number}
              >
                <div className="service-feature-number">
                  {feature.number}
                </div>

                <div className="service-feature-icon">
                  {feature.icon}
                </div>

                <div className="service-feature-content">
                  <span>{feature.subtitle}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 取扱カテゴリー */}
      <section className="section service-categories">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">
              CATEGORIES
            </span>
            <h2>取扱予定カテゴリー</h2>
            <p>
              学生生活に身近な、さまざまな商品を
              取り扱うことを検討しています。
            </p>
          </div>

          <div className="service-category-grid">
            {categories.map((category) => (
              <article
                className="service-category-card"
                key={category.name}
              >
                <span className="service-category-icon">
                  {category.icon}
                </span>
                <h3>{category.name}</h3>
                <p>{category.example}</p>
              </article>
            ))}
          </div>

          <p className="section-note">
            ※ 取扱カテゴリーは予定です。
            正式な出品条件や禁止品目は公開時にご案内します。
          </p>
        </div>
      </section>

      {/* 利用の流れ */}
      <section className="section service-flow">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">
              HOW IT WORKS
            </span>
            <h2>利用の流れ</h2>
            <p>
              Q-Marketでは、次のような取引体験を
              想定しています。
            </p>
          </div>

          <div className="service-flow-grid">
            {steps.map((step) => (
              <article
                className="service-flow-card"
                key={step.number}
              >
                <span className="service-flow-number">
                  STEP {step.number}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <p className="section-note">
            ※ サービスは現在開発中です。
            利用手順や決済方法は変更される場合があります。
          </p>
        </div>
      </section>

      {/* 安心安全への取り組み */}
      <section className="section service-safety">
        <div className="container service-safety-inner">
          <div>
            <span className="section-label">
              SAFETY & TRUST
            </span>
            <h2>
              安心して利用できる
              <br />
              サービスを目指して。
            </h2>
            <p>
              学生同士の取引だからこそ、
              分かりやすいルールと安全性が重要です。
              Q-Marketでは、学生確認の仕組みや
              取引ルール、禁止品目、トラブルへの対応方針などを
              検討・整備していきます。
            </p>
            <p className="section-note">
              ※ 具体的な安全対策は現在検討中です。
            </p>
          </div>

          <div className="service-safety-box">
            <div>🛡️</div>
            <h3>SAFETY FIRST</h3>
            <p>
              学生にとって利用しやすく、
              信頼できるマーケットプレイスへ。
            </p>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="section service-faq">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2>よくある質問</h2>
          </div>

          <div className="service-faq-list">
            {faqs.map((faq) => (
              <details
                className="service-faq-item"
                key={faq.question}
              >
                <summary>
                  <span className="service-faq-q">Q.</span>
                  <span>{faq.question}</span>
                  <span className="service-faq-plus">
                    ＋
                  </span>
                </summary>

                <div className="service-faq-answer">
                  <span>A.</span>
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 公開前案内 */}
      <section className="service-final-cta">
        <div className="container">
          <span>COMING SOON</span>

          <h2>
            九大生のための新しい選択肢を、
            <br />
            ただいま準備中。
          </h2>

          <p>
            Q-Marketは現在開発を進めています。
            <br />
            最新情報は公式Instagramをご確認ください。
          </p>

          <a
            href="https://www.instagram.com/qmarket_campus/"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-white"
          >
            公式Instagramを見る ↗
          </a>
        </div>
      </section>
    </main>
  );
}
