
import Link from "next/link";

const exploreLinks = [
  {
    number: "01",
    title: "サービスについて",
    english: "OUR SERVICE",
    description:
      "Q-Marketが目指すサービスの特徴や仕組みをご紹介します。",
    href: "/service",
    icon: "service",
  },
  {
    number: "02",
    title: "運営団体",
    english: "ABOUT US",
    description:
      "Q-Marketの理念やプロジェクトについてご紹介します。",
    href: "/about",
    icon: "team",
  },
  {
    number: "03",
    title: "よくある質問",
    english: "FAQ",
    description:
      "サービスや利用方法についての疑問はこちらから。",
    href: "/faq",
    icon: "faq",
  },
  {
    number: "04",
    title: "お問い合わせ",
    english: "CONTACT",
    description:
      "ご質問やご相談など、お問い合わせはこちらから。",
    href: "/contact",
    icon: "contact",
  },
];

function ExploreIcon({
  type,
}: {
  type: string;
}) {
  const common = {
    width: 27,
    height: 27,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (type) {
    case "service":
      return (
        <svg {...common}>
          <rect
            x="3"
            y="7"
            width="18"
            height="14"
            rx="2"
          />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18" />
        </svg>
      );

    case "team":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );

    case "faq":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.5-3 4" />
          <path d="M12 17h.01" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <rect
            x="2"
            y="4"
            width="20"
            height="16"
            rx="2"
          />
          <path d="m22 7-10 6L2 7" />
        </svg>
      );
  }
}

export default function ExploreLinks() {
  return (
    <section
      className="explore-section"
      aria-labelledby="explore-title"
    >
      <div className="container">
        <div className="explore-heading">
          <span className="explore-eyebrow">
            EXPLORE Q-MARKET
          </span>

          <h2 id="explore-title">
            Q-Marketをもっと知る
          </h2>

          <p>
            気になる情報から、
            Q-Marketについてもっと知ろう。
          </p>
        </div>

        <div className="explore-grid">
          {exploreLinks.map((item) => (
            <Link
              href={item.href}
              key={item.number}
              className="explore-card"
            >
              <div className="explore-card-top">
                <div className="explore-icon">
                  <ExploreIcon type={item.icon} />
                </div>

                <span className="explore-number">
                  {item.number}
                </span>
              </div>

              <div className="explore-card-content">
                <span className="explore-card-english">
                  {item.english}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>

              <div className="explore-card-bottom">
                <span>詳しく見る</span>

                <span
                  className="explore-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="explore-news-link">
          <span>
            最新の開発情報はこちら
          </span>

          <Link href="/news">
            お知らせ一覧を見る
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
