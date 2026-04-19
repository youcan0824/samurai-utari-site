import Image from "next/image";
import { ScrollFadeIn } from "./scroll-fade-in";

export function About() {
  return (
    <section id="about" className="py-[160px] md:py-[200px] px-6 md:px-[60px] bg-[#faf8f3]">
      <ScrollFadeIn>
        <p className="text-[13px] tracking-[0.4em] text-[#1c1e2b]/45 mb-12 md:mb-16 max-w-[980px] mx-auto">
          <span
            className="text-[#123563] font-medium"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            会社について
          </span>
          <span className="text-[10px] ml-3 uppercase text-[#1c1e2b]/30">/ About</span>
        </p>
      </ScrollFadeIn>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24 max-w-[980px] mx-auto">
        <ScrollFadeIn>
          <h2
            className="text-2xl md:text-[34px] font-normal tracking-[0.06em] leading-[1.7] mb-8 text-[#123563]"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            地方から、
            <br />
            <span className="text-[#4a7fc8]">次世代のキャリア</span>の
            <br />
            再定義を。
          </h2>
          <p
            className="text-[15px] text-[#1c1e2b]/75 leading-[2.2]"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            地方と都市のビジネスリテラシー格差をなくす。
            ポテンシャルは変わらない。足りないのは環境と道案内人だけ。
            <br />
            <br />
            サムライウタリは、理想を生きる人を「サムライ」と呼び、
            アイヌ語で同胞を意味する「ウタリ」とともに歩む会社です。
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="flex flex-col gap-6 pt-2">
            {/* サムライカード - 和紙風 */}
            <div className="relative bg-[#f5efe0] rounded-sm overflow-hidden shadow-[0_6px_24px_rgba(28,30,43,0.12)] border border-[#1c1e2b]/[0.05]">
              <div
                className="absolute inset-0 pointer-events-none opacity-50"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, rgba(255,245,220,0.8), transparent 60%), radial-gradient(ellipse at bottom right, rgba(180,150,100,0.15), transparent 60%)",
                }}
              />
              <div className="relative flex items-stretch">
                <div className="flex-1 p-6 pr-4 min-w-0">
                  <h3
                    className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#8b2500] mb-3"
                    style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                  >
                    侍 / SAMURAI
                  </h3>
                  <p
                    className="text-[13px] md:text-sm text-[#1a1a1a]/85 leading-[2]"
                    style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                  >
                    周りの評価やカタチに囚われず、理想を生きる人。夢を諦める平均年齢は24歳。それでも理想を追い続ける人を、私たちはサムライと呼んでいます。
                  </p>
                </div>
                <div className="relative w-28 md:w-36 shrink-0">
                  <Image
                    src="/silhouettes/samurai.png"
                    alt="Samurai"
                    fill
                    sizes="(max-width: 768px) 112px, 144px"
                    className="object-contain object-center p-2"
                  />
                </div>
              </div>
            </div>

            {/* ウタリカード - 和紙風 */}
            <div className="relative bg-[#f5efe0] rounded-sm overflow-hidden shadow-[0_6px_24px_rgba(28,30,43,0.12)] border border-[#1c1e2b]/[0.05]">
              <div
                className="absolute inset-0 pointer-events-none opacity-50"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, rgba(255,245,220,0.8), transparent 60%), radial-gradient(ellipse at bottom right, rgba(180,150,100,0.15), transparent 60%)",
                }}
              />
              <div className="relative flex items-stretch">
                <div className="flex-1 p-6 pr-4 min-w-0">
                  <h3
                    className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#8b2500] mb-3"
                    style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                  >
                    同胞 / UTARI
                  </h3>
                  <p
                    className="text-[13px] md:text-sm text-[#1a1a1a]/85 leading-[2]"
                    style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                  >
                    アイヌ語で「同胞」。ひとりで戦うのではなく、志を同じくする仲間とともに歩む。44人のサムライウタリをつくることが、私たちのミッションです。
                  </p>
                </div>
                <div className="relative w-28 md:w-36 shrink-0">
                  <Image
                    src="/silhouettes/utari.png"
                    alt="Utari"
                    fill
                    sizes="(max-width: 768px) 112px, 144px"
                    className="object-contain object-center p-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
