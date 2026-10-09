
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import "./navigation.css";

export const metadata: Metadata = {
  title: "Q-Market | 九大生だけの、いちばん近いマーケット。",
  description:
    "Q-Marketは、九州大学の学生を対象としたフリマサービスです。教科書、家具、家電、自転車など、九大生同士の身近な取引を目指して開発中です。",
  applicationName: "Q-Market",
  keywords: [
    "Q-Market",
    "九州大学",
    "九大生",
    "フリマ",
    "学生向けマーケットプレイス",
  ],
  icons: {
    icon: "/qmarket-logo.png",
    apple: "/qmarket-logo.png",
  },
  robots: {
    index: false,
    follow: false,
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
        <Footer />
      </body>
    </html>
  );
}
