import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "株式会社サムライウタリ | SAMURAI UTARI Inc.",
  description: "夢なき者に理想を。地方にビジョナリーカンパニーをつくる。AI研修事業・キャリア教育事業を展開。",
  openGraph: {
    title: "株式会社サムライウタリ | SAMURAI UTARI Inc.",
    description: "夢なき者に理想を。地方にビジョナリーカンパニーをつくる。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
