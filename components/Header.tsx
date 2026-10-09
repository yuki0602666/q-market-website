
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Q-Market ホーム"
        >
          <Image
            src="/qmarket-logo.png"
            alt="Q-Market公式ロゴ"
            width={48}
            height={48}
            className="brand-logo"
            priority
          />
          <span className="brand-name">
            Q-Market
          </span>
        </Link>

        <nav
          className="desktop-nav"
          aria-label="メインメニュー"
        >
          <Link href="/service">
            サービスについて
          </Link>

          <Link href="/about">
            運営団体
          </Link>

          <Link href="/news">
            お知らせ
          </Link>

          <Link href="/faq">
            よくある質問
          </Link>
        </nav>

        <Link
          href="/contact"
          className="header-contact"
        >
          お問い合わせ
          <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <nav
        className="mobile-nav"
        aria-label="モバイルメニュー"
      >
        <Link href="/service">
          サービス
        </Link>

        <Link href="/about">
          運営団体
        </Link>

        <Link href="/news">
          お知らせ
        </Link>

        <Link href="/faq">
          よくある質問
        </Link>
      </nav>
    </header>
  );
}
