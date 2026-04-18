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
                地方と都心のあいだには、キャリアに関する明確な格差がある。
              </p>

              <p>
                広島大学在学中、就職活動で東京・大阪・京都・福岡の学生・社会人と交わる中で、視座・文化・選択肢の広さ、そのすべてに埋めがたい差を認識した。ただし、これは人材のポテンシャルの差ではない。根本的には同じ大学生であり、本質的な力は変わらない。差が生じているのは、評価環境と機会へのアクセスである。
              </p>

              <p>
                地方には、本質的価値と市場評価のギャップが存在し、この領域に本気で取り組むプレイヤーはほとんどいない。
              </p>

              <p className="pt-2 text-[#1a1a1a] font-medium">
                株式会社サムライウタリは、この領域に取り組む会社である。地方の夢なき若者に理想を届けることを、社会課題の解決と事業機会の両立として捉え、「人づくり・場づくり・事業づくり」の3軸で現在取り組んでいる。
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
