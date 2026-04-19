import { ScrollFadeIn } from "./scroll-fade-in";

export function Message() {
  return (
    <section className="py-[160px] md:py-[200px] px-6 md:px-[60px] bg-white">
      <ScrollFadeIn>
        <p className="text-[13px] tracking-[0.4em] text-[#1c1e2b]/45 mb-12 md:mb-16 max-w-[900px] mx-auto">
          <span
            className="text-[#123563] font-medium"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            代表の言葉
          </span>
          <span className="text-[10px] ml-3 uppercase text-[#1c1e2b]/30">/ Message</span>
        </p>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <div className="relative max-w-[900px] mx-auto bg-[#f5efe0] rounded-sm overflow-hidden shadow-[0_8px_30px_rgba(28,30,43,0.12)] border border-[#1c1e2b]/[0.05]">
          {/* 和紙テクスチャ */}
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              background:
                "radial-gradient(ellipse at top left, rgba(255,245,220,0.8), transparent 60%), radial-gradient(ellipse at bottom right, rgba(180,150,100,0.15), transparent 60%)",
            }}
          />

          <div className="relative py-14 px-8 md:py-24 md:px-24">
            <h2
              className="text-xl md:text-2xl font-normal tracking-[0.25em] text-[#8b2500] mb-12 md:mb-14"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              代表メッセージ
            </h2>

            <div
              className="space-y-7 text-[#1a1a1a]/85 text-sm md:text-[15px] leading-[2.2]"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              <p className="text-base md:text-lg text-[#1a1a1a] font-medium">
                「地方と都心のあいだには、キャリアに関する明確な格差がある」
              </p>

              <p>
                広島大学で学生時代を過ごし、就職活動で東京・大阪・京都・福岡の同世代と交わる中で、その現実を当事者として経験しました。キャリアに対する視座、挑戦を後押しする文化、そもそもの選択肢の広さ──そのすべてに、埋めがたい格差が確かにありました。
              </p>

              <p>
                ただし、これは人材のポテンシャルの差ではありません。根本的には同じ大学生であり、本質的価値は変わらない。差が生じているのは、質の高い機会と、挑戦を受け止める文化です。
              </p>

              <p>
                言い換えれば、地方には「本質的価値と市場評価のギャップ」──未開拓の人的資本が膨大に眠っている。既存の大手には市場規模が小さく、スタートアップには長期伴走の体力がいる。構造的に、手つかずのまま残された領域です。
              </p>

              <p>
                株式会社サムライウタリは、この格差に正面から向き合う会社です。
              </p>

              <p className="pt-2 text-[#1a1a1a] font-medium">
                地方の、夢なき若者に、理想を届ける。それは社会課題の解決であると同時に、未開拓の人的資本を市場価値へと変換する事業機会であると確信しています。
              </p>
            </div>

            <div
              className="mt-14 md:mt-20 pt-6 border-t border-[#1a1a1a]/10 text-right text-[#1a1a1a]/75 text-[13px] md:text-sm"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              <p>株式会社サムライウタリ</p>
              <p className="mt-1">代表取締役　藤野 悠生</p>
            </div>
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
