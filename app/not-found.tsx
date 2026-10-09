
import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="qm-not-found">
      <div className="container qm-not-found-inner">
        <div className="qm-not-found-decoration">
          <span>404</span>
        </div>

        <span className="qm-not-found-eyebrow">
          PAGE NOT FOUND
        </span>

        <h1>
          お探しのページが
          <br />
          <span className="gradient-text">
            見つかりませんでした。
          </span>
        </h1>

        <p className="qm-not-found-description">
          URLが間違っているか、
          ページが移動・削除された可能性があります。
          <br />
          以下のリンクからQ-Marketの
          公式HPをご覧ください。
        </p>

        <div className="qm-not-found-actions">
          <Link
            href="/"
            className="button button-primary"
          >
            トップページへ ↗
          </Link>

          <Link
            href="/faq"
            className="button button-secondary"
          >
            よくある質問を見る ↗
          </Link>
        </div>

        <div className="qm-not-found-help">
          <span>NEED HELP?</span>
          <p>
            お困りの場合は
            <Link href="/contact">
              お問い合わせページ
            </Link>
            をご確認ください。
          </p>
        </div>
      </div>
    </main>
  );
}
