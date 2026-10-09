import Image from "next/image";
import HomeNews from "@/components/HomeNews";
import "./home-news.css";

const features = [
  {
    number: "01",
    icon: "🎓",
    title: "九大生限定",
    description:
      "九州大学の学生を対象としたマーケット。身近な学生同士で、モノをつなぐ新しい仕組みを目指します。",
  },
  {
    number: "02",
    icon: "📍",
    title: "近くで手渡し",
    description:
      "キャンパスや生活圏が近い九大生同士だからこそ、対面で受け渡しやすい取引を目指します。",
  },
  {
    number: "03",
    icon: "♻️",
    title: "学生生活をもっと便利に",
    description:
      "使わなくなったモノを、必要としている次の九大生へ。学生生活に身近なリユースを広げます。",
  },
];

const categories = [
  { icon: "📚", name: "教科書・参考書" },
  { icon: "🛋️", name: "家具・インテリア" },
  { icon: "💻", name: "パソコン・周辺機器" },
  { icon: "🚲", name: "自転車" },
  { icon: "🔌", name: "家電製品" },
  { icon: "📦", name: "その他" },
];

const steps = [
  {
    number: "01",
    title: "出品・検索",
    description:
      "使わなくなったモノを出品したり、欲しいモノを探したり。",
  },
  {
    number: "02",
    title: "取引を相談",
    description:
      "出品者と購入希望者で、取引の条件や受け渡しについて相談。",
  },
  {
    number: "03",
    title: "受け渡し",
    description:
      "双方が合意した方法で受け渡し。九大生同士の取引をもっと身近に。",
  },
];

export default function Home() {
  return (
    <main id="home">
      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-content">
          <div className="status-pill">
            <span className="status-dot" />
            現在サービス公開に向けて準備中
          </div>

          <p className="hero-eyebrow">
            KYUSHU UNIVERSITY STUDENT MARKETPLACE
          </p>

          <h1>
            九大生だけの、
            <br />
            <span className="gradient-text">
              いちばん近いマーケット。
            </span>
          </h1>

          <p className="hero-description">
            使わなくなったモノが、誰かの必要なモノになる。
            <br className="desktop-break" />
            九州大学の学生同士をつなぐ、
            <br className="desktop-break" />
            新しいフリマサービス「Q-Market」。
          </p>

          <div className="hero-actions">
            <a href="#about" className="button button-primary">
              Q-Marketについて
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://www.instagram.com/qmarket_campus/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
            >
              公式Instagram
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-bottom">
            <span className="hero-line" />
            <span>SCROLL TO EXPLORE</span>
            <span aria-hidden="true">↓</span>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">
              ABOUT Q-MARKET
            </span>

            <h2>
              九大生の「もったいない」を、
              <br />
              次の「ほしい」へ。
            </h2>

            <p>
              引っ越しや卒業、授業やサークル活動。
              学生生活の中で、必要なモノは変わっていきます。
              Q-Marketは、九大生同士の身近な取引を通して、
              モノが次の学生へつながる仕組みをつくります。
            </p>
          </div>

          <div className="about-highlight">
            <div className="highlight-icon">
              <Image
                src="/qmarket-logo.png"
                alt="Q-Market公式ロゴ"
                width={120}
                height={120}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "20px",
                }}
              />
            </div>

            <div>
              <span className="highlight-label">
                OUR CONCEPT
              </span>
              <h3>近いから、つながる。</h3>
              <p>
                同じ大学に通う学生同士だからこそ実現できる、
                距離の近さを活かしたマーケットプレイス。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="section features-section"
      >
        <div className="container">
          <div className="section-heading">
            <span className="section-label">
              OUR FEATURES
            </span>
            <h2>Q-Marketが目指す、3つの特徴。</h2>
            <p>
              大学生活の中で、もっと便利に、もっと身近に。
              九大生のためのサービスを開発しています。
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article
                className="feature-card"
                key={feature.number}
              >
                <span className="feature-number">
                  {feature.number}
                </span>

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section category-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">
              CATEGORIES
            </span>

            <h2>
              学生生活に必要なモノを、もっと身近に。
            </h2>

            <p>
              Q-Marketで取り扱いを検討している
              カテゴリーです。
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <div
                className="category-card"
                key={category.name}
              >
                <span className="category-icon">
                  {category.icon}
                </span>
                <span>{category.name}</span>
                <span
                  className="category-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            ))}
          </div>

          <p className="section-note">
            ※ カテゴリーや取引機能は開発状況に応じて
            変更される場合があります。
          </p>
        </div>
      </section>

      <section className="section how-section">
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

          <div className="steps-grid">
            {steps.map((step) => (
              <article
                className="step-card"
                key={step.number}
              >
                <span className="step-number">
                  {step.number}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <p className="section-note">
            ※ 正式な利用手順や決済方法は
            サービス公開時にご案内します。
          </p>
        </div>
      </section>

      <section
        id="organization"
        className="section organization-section"
      >
        <div className="container organization-inner">
          <div>
            <span className="section-label">
              WHO WE ARE
            </span>

            <h2>
              九大生の手で、
              <br />
              新しい価値をつくる。
            </h2>

            <p>
              Q-Marketは、九州大学の学生を対象とした
              マーケットプレイスを目指す学生プロジェクトです。
              学生生活の中で生まれる課題に向き合い、
              身近なところから新しい仕組みをつくっていきます。
            </p>

            <p>
              学生団体としての活動を出発点に、
              継続的に価値を届けられる事業への成長を
              目指しています。
            </p>
          </div>

          <div className="organization-visual">
            <span>BUILDING THE FUTURE</span>

            <div
              style={{
                width: "180px",
                height: "180px",
                position: "relative",
                margin: "0 auto",
              }}
            >
              <Image
                src="/qmarket-logo.png"
                alt="Q-Market公式ロゴ"
                fill
                style={{
                  objectFit: "contain",
                }}
                sizes="180px"
              />
            </div>

            <p>FOR KYUSHU UNIVERSITY STUDENTS</p>
          </div>
        </div>
      </section>

      <HomeNews />

      <section id="contact" className="contact-section">
        <div className="container contact-inner">
          <span className="section-label">
            STAY CONNECTED
          </span>

          <h2>
            Q-Marketのこれからを、
            <br />
            一緒に見届けよう。
          </h2>

          <p>
            サービスの開発状況や最新情報は、
            <br />
            公式Instagramで発信していきます。
          </p>

          <a
            href="https://www.instagram.com/qmarket_campus/"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-white"
          >
            @qmarket_campus
            <span aria-hidden="true">↗</span>
          </a>

          <p className="contact-note">
            お問い合わせは公式InstagramのDMでも
            受け付けています。
          </p>
        </div>
      </section>
    </main>
  );
}