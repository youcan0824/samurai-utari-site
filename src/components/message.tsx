import { ScrollFadeIn } from "./scroll-fade-in";

export function Message() {
  return (
    <section className="py-[120px] px-6 md:px-[60px] bg-[#0d1117]">
      <ScrollFadeIn>
        <p className="text-[11px] tracking-[0.3em] uppercase text-white/30 mb-10 max-w-[900px] mx-auto">
          Message
        </p>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <div className="relative max-w-[900px] mx-auto bg-[#f5efe0] rounded-sm overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
          {/* 和紙テクスチャ */}
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              background:
                "radial-gradient(ellipse at top left, rgba(255,245,220,0.8), transparent 60%), radial-gradient(ellipse at bottom right, rgba(180,150,100,0.15), transparent 60%)",
            }}
          />

          <div className="relative py-14 px-8 md:py-20 md:px-20">
            <h2
              className="text-xl md:text-2xl font-normal tracking-[0.2em] text-[#8b2500] mb-10 md:mb-12"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              代表メッセージ
            </h2>

            <div
              className="space-y-6 text-[#1a1a1a]/85 text-sm md:text-[15px] leading-[2.1]"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              <p>
                私自身、広島大学という地方で大学生活を過ごしました。就職活動を通して東京・大阪・京都・福岡の現地の社会人・学生との交流を重ねる中で、都心と地方のビジネスリテラシー、マーケットレベルの差を痛感しました。
              </p>

              <p>
                東京には、自分の夢・理想を持ち、固定概念に囚われず様々な手段を講じて叶えようとする若者と、それを支える文化がありました。一方で地方は、そんな人は少数派で、文化もない。
              </p>

              <p>
                ただ、根本的には同じ大学生。ポテンシャルは変わらない、と感じました。
              </p>

              <p>
                だからこそ、地方のポテンシャルある大学生の人的資本価値を最大化させる。本質的価値と市場で評価されている価値のギャップがあり、かつ誰も身を投じていない分野なのだと思っています。
              </p>

              <p className="pt-2 text-[#1a1a1a] font-medium">
                地方の夢なき若者に、理想を届ける。
                <br />
                その活動を、株式会社サムライウタリは行っていきます。
              </p>
            </div>

            <div
              className="mt-12 md:mt-16 pt-6 border-t border-[#1a1a1a]/10 text-right text-[#1a1a1a]/70 text-[13px] md:text-sm"
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
