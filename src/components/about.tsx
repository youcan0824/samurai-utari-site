import Image from "next/image";
import { ScrollFadeIn } from "./scroll-fade-in";

export function About() {
  return (
    <section id="about" className="py-[160px] px-6 md:px-[60px] bg-[#0d1117]">
      <ScrollFadeIn>
        <p className="text-[13px] tracking-[0.3em] text-white/40 mb-10 max-w-[980px] mx-auto">
          <span className="text-white/70">会社について</span>
          <span className="text-[10px] ml-3 uppercase text-white/25">/ About</span>
        </p>
      </ScrollFadeIn>
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-[980px] mx-auto">
        <ScrollFadeIn>
          <h2 className="text-2xl md:text-[32px] font-light tracking-[0.05em] leading-[1.6] mb-6">
            地方から、
            <br />
            <span className="text-[#4a7fc8]">次世代のキャリア</span>の
            <br />
            再定義を。
          </h2>
          <p className="text-sm text-white/60 leading-[2]">
            地方と都市のビジネスリテラシー格差をなくす。
            ポテンシャルは変わらない。足りないのは環境と道案内人だけ。
            サムライウタリは、理想を生きる人を「サムライ」と呼び、
            アイヌ語で同胞を意味する「ウタリ」とともに歩む会社です。
          </p>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <div className="flex flex-col gap-6 pt-2">
            {/* サムライカード - 和紙風 */}
            <div className="relative bg-[#f5efe0] rounded-sm overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              {/* 和紙テクスチャ風のグラデーション */}
              <div
                className="absolute inset-0 pointer-events-none opacity-50"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, rgba(255,245,220,0.8), transparent 60%), radial-gradient(ellipse at bottom right, rgba(180,150,100,0.15), transparent 60%)",
                }}
              />
              <div className="relative flex items-stretch">
                <div className="flex-1 p-6 pr-4 min-w-0">
                  <h3 className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#8b2500] mb-3">
                    侍 / SAMURAI
                  </h3>
                  <p className="text-sm text-[#1a1a1a]/85 leading-[1.9]">
                    周りの評価やカタチに囚われず、理想を生きる人。
                    夢を諦める平均年齢は24歳。それでも理想を追い続ける人を、
                    私たちはサムライと呼んでいます。
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
            <div className="relative bg-[#f5efe0] rounded-sm overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <div
                className="absolute inset-0 pointer-events-none opacity-50"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, rgba(255,245,220,0.8), transparent 60%), radial-gradient(ellipse at bottom right, rgba(180,150,100,0.15), transparent 60%)",
                }}
              />
              <div className="relative flex items-stretch">
                <div className="flex-1 p-6 pr-4 min-w-0">
                  <h3 className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#8b2500] mb-3">
                    同胞 / UTARI
                  </h3>
                  <p className="text-sm text-[#1a1a1a]/85 leading-[1.9]">
                    アイヌ語で「同胞」。ひとりで戦うのではなく、
                    志を同じくする仲間とともに歩む。
                    44人のサムライウタリをつくることが、私たちのミッションです。
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
