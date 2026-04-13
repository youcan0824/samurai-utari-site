import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "株式会社サムライウタリ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0d1117 0%, #123563 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.4)",
            marginBottom: 40,
          }}
        >
          SAMURAI UTARI Inc.
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 200,
            letterSpacing: "0.15em",
            color: "white",
            marginBottom: 24,
          }}
        >
          夢なき者に理想を
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.1em",
          }}
        >
          地方にビジョナリーカンパニーをつくる
        </div>
      </div>
    ),
    { ...size }
  );
}
