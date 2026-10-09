
export type NewsCategory =
  | "お知らせ"
  | "開発情報"
  | "プレスリリース";

export type NewsArticle = {
  slug: string;
  title: string;
  category: NewsCategory;
  date: string | null;
  summary: string;
  paragraphs: string[];
};

export const newsCategories: Array<
  "すべて" | NewsCategory
> = [
  "すべて",
  "お知らせ",
  "開発情報",
  "プレスリリース",
];

export const newsArticles: NewsArticle[] = [
  {
    slug: "website-preparation",
    title: "Q-Market公式サイトを準備中",
    category: "お知らせ",
    date: null,
    summary:
      "Q-Marketでは現在、サービス公開に向けた開発と公式サイトの準備を進めています。",
    paragraphs: [
      "Q-Marketは、九州大学の学生を対象としたフリマサービスの実現を目指すプロジェクトです。",

      "教科書や家具、家電、自転車など、学生生活に身近なモノを九大生同士でつなぐマーケットプレイスの開発を進めています。",

      "現在、Q-Market公式サイトの制作とサービス本体の開発を進めています。",

      "サービス公開日や具体的な利用方法については、決定次第ご案内します。",

      "今後の開発状況や最新情報については、公式サイトおよび公式Instagramで発信していく予定です。",
    ],
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find(
    (article) => article.slug === slug
  );
}

export function formatNewsDate(date: string | null) {
  if (!date) {
    return "日付未設定";
  }

  return date.replaceAll("-", ".");
}
