import Image from "next/image";
import { ScrollFadeIn } from "./scroll-fade-in";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-[160px] md:py-[240px] px-6 md:px-[60px] bg-[#123563] overflow-hidden"
    >
      {/* 大きな家紋を透かし */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[80vmin] h-[80vmin] max-w-[720px] max-h-[720px] text-white opacity-[0.06]">
          <Image src="/motifs/kamon.svg" alt="" fill className="object-contain" />
        </div>
      </div>

      <div className="relative max-w-[1100px] mx-auto">
        <ScrollFadeIn>
          <p
            className="text-[10px] md:text-xs tracking-[0.5em] text-white/55 uppercase mb-12 md:mb-16 text-center"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Philosophy
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <h2
            className="text-center text-5xl md:text-[96px] font-normal leading-[1.5] md:leading-[1.4] tracking-[0.15em] md:tracking-[0.25em] text-white"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            夢なき者に、
            <br />
            <span className="text-[#e8dfc9]">理想を。</span>
          </h2>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <p
            className="mt-16 md:mt-24 text-center text-[14px] md:text-[15px] text-white/70 leading-[2.2] md:leading-[2.4] max-w-[720px] mx-auto"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            周りの評価やカタチに囚われず、理想を生きる人へ。
            地方に生まれただけで、夢を諦めなくていい。
            本質的価値と市場評価のギャップを埋め、
            未開拓の人的資本を、次世代のビジネス戦闘力へと変換する。
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
