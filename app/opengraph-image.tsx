
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Q-Market — A marketplace for Kyushu University students";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoBuffer = await readFile(
    join(process.cwd(), "public", "qmarket-logo.png")
  );

  const logoDataUrl =
    `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "75px 88px",
          color: "#ffffff",
          background:
            "linear-gradient(125deg, #0962b6 0%, #087dc3 42%, #0eb5a5 100%)",
          overflow: "hidden",
        }}
      >
        {/* 背景の円形装飾 */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "-240px",
            right: "-170px",
            width: "670px",
            height: "670px",
            borderRadius: "50%",
            border:
              "2px solid rgba(255,255,255,0.20)",
          }}
        />

        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "-145px",
            right: "-75px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            border:
              "2px solid rgba(255,255,255,0.13)",
          }}
        />

        {/* 正式ロゴ */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "27px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoDataUrl}
            alt="Q-Market"
            width={112}
            height={112}
            style={{
              width: "112px",
              height: "112px",
              objectFit: "contain",
              borderRadius: "24px",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "9px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "72px",
                fontWeight: 800,
                letterSpacing: "-3px",
              }}
            >
              Q-Market
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "2px",
                color: "#d6f7fa",
              }}
            >
              KYUSHU UNIVERSITY STUDENT MARKETPLACE
            </div>
          </div>
        </div>

        {/* キャッチコピー */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "53px",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-1px",
            }}
          >
            Your Campus.
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "53px",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-1px",
            }}
          >
            Your Marketplace.
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "20px",
              color: "#d7f9f4",
              marginTop: "8px",
            }}
          >
            COMING SOON
          </div>
        </div>

        {/* フッター */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "20px",
            borderTop:
              "1px solid rgba(255,255,255,0.3)",
            fontSize: "17px",
            color: "#e5f9fb",
          }}
        >
          <span>Q-MARKET OFFICIAL WEBSITE</span>
          <span>q-market-website.vercel.app</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
