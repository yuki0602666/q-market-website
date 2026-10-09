
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "ホーム", href: "/" },
  { label: "サービスについて", href: "/service" },
  { label: "運営団体", href: "/about" },
  { label: "お知らせ", href: "/news" },
  { label: "よくある質問", href: "/faq" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Q-Market ホーム"
          onClick={closeMenu}
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

        <button
          type="button"
          className={
            isMenuOpen
              ? "qm-menu-button is-active"
              : "qm-menu-button"
          }
          aria-label={
            isMenuOpen
              ? "メニューを閉じる"
              : "メニューを開く"
          }
          aria-expanded={isMenuOpen}
          aria-controls="qm-mobile-menu"
          onClick={() =>
            setIsMenuOpen((current) => !current)
          }
        >
          <span className="qm-menu-line" />
          <span className="qm-menu-line" />
          <span className="qm-menu-line" />
        </button>
      </div>

      <nav
        id="qm-mobile-menu"
        className={
          isMenuOpen
            ? "qm-mobile-menu is-open"
            : "qm-mobile-menu"
        }
        aria-label="スマートフォン用メニュー"
        inert={!isMenuOpen}
      >
        <div className="qm-mobile-menu-inner">
          <span className="qm-mobile-menu-label">
            MENU / NAVIGATION
          </span>

          {menuItems.map((item, index) => {
            const isCurrent =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(
                    `${item.href}/`
                  );

            return (
              <Link
                href={item.href}
                key={item.href}
                className={
                  isCurrent
                    ? "qm-mobile-menu-link is-current"
                    : "qm-mobile-menu-link"
                }
                aria-current={
                  isCurrent ? "page" : undefined
                }
                onClick={closeMenu}
              >
                <span className="qm-mobile-menu-number">
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <span>{item.label}</span>

                <span
                  className="qm-mobile-menu-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>
            );
          })}

          <div className="qm-mobile-menu-bottom">
            <span>FOLLOW US</span>

            <a
              href="https://www.instagram.com/qmarket_campus/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Instagram @qmarket_campus ↗
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
