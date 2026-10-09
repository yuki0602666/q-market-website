
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link
              href="/"
              className="brand"
              aria-label="Q-Market ホーム"
            >
              <Image
                src="/qmarket-logo.png"
                alt="Q-Market公式ロゴ"
                width={42}
                height={42}
                className="brand-logo"
              />
              <span className="brand-name">
                Q-Market
              </span>
            </Link>

            <p>
              九大生だけの、いちばん近いマーケット。
            </p>

            <span className="footer-status">
              SERVICE COMING SOON
            </span>
          </div>

          <div className="footer-links">
            <div>
              <h4>Q-MARKET</h4>

              <Link href="/service">
                サービスについて
              </Link>

              <Link href="/about">
                運営団体
              </Link>

              <Link href="/faq">
                よくある質問
              </Link>
            </div>

            <div>
              <h4>INFORMATION</h4>

              <Link href="/news">
                お知らせ
              </Link>

              <Link href="/contact">
                お問い合わせ
              </Link>

              <Link href="/privacy">
                プライバシーポリシー（準備中）
              </Link>

              <a
                href="https://www.instagram.com/qmarket_campus/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Q-Market.</span>

          <span>
            Made for Kyushu University Students.
          </span>
        </div>
      </div>
    </footer>
  );
}
