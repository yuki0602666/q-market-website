
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ExploreLinks from "@/components/ExploreLinks";

import "./globals.css";
import "./navigation.css";
import "./home-news.css";
import "./back-to-top.css";
import "./explore-links.css";
import "./responsive-polish.css";

const siteUrl = "https://q-market-website.vercel.app";

const siteTitle =
  "Q-Market | 九大生だけの、いちばん近いマーケット。";

const siteDescription =
  "Q-Marketは、九大生向けフリマサービスの開発を進める学生団体です。教科書、家具、家電、自転車など、九大生同士が身近にモノを譲り合えるマーケットプレイスの実現を目指しています。現在、サービス公開に向けて準備中です。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: siteTitle,
  description: siteDescription,

  applicationName: "Q-Market",

  keywords: [
    "Q-Market",
    "九大生",
    "九州大学",
    "学生団体",
    "学生向けフリマ",
    "フリマサービス",
    "マーケットプレイス",
    "教科書",
    "家具",
    "家電",
    "自転車",
    "学生生活",
  ],

  icons: {
    icon: "/qmarket-logo.png",
    apple: "/qmarket-logo.png",
  },

  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "Q-Market",
    title: siteTitle,
    description: siteDescription,
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },

  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <ExploreLinks />
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
