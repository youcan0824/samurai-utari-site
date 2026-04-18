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
                地方と都心のあいだには、いま明確な「歪み」がある。
              </p>

              <p>
                私自身、広島大学で学生時代を過ごし、就職活動で東京・大阪・京都・福岡の同世代と交わる中で、その差を痛感しました。キャリアに対する視座、挑戦を後押しする文化、そもそもの選択肢の広さ──そのすべてに、埋めがたい格差が存在する。
              </p>

              <p>
                ただし、これは人材のポテンシャルの差ではありません。根本的には同じ大学生であり、本質的価値は変わらない。差が生じているのは、評価環境と機会へのアクセスです。
              </p>

              <p>
                言い換えれば、地方には「本質的価値と市場評価のギャップ」──未開拓の人的資本が膨大に眠っている。そして、この領域に本気で参入しているプレイヤーは、未だほとんど存在しません。
              </p>

              <p>
                株式会社サムライウタリは、この歪みに最初に手を入れる会社です。
              </p>

              <p className="pt-2 text-[#1a1a1a] font-medium">
                地方の、夢なき若者に、理想を届ける。
                <br />
                それは社会課題の解決であると同時に、未開拓の人的資本を市場価値へと変換する事業機会。そう確信しています。
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
