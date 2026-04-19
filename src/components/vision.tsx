import Image from "next/image";
import { ScrollFadeIn } from "./scroll-fade-in";

export function Vision() {
  return (
    <section
      id="vision"
      className="relative py-[160px] md:py-[220px] px-6 md:px-[60px] bg-[#123563] overflow-hidden"
    >
      {/* 大きな家紋を透かし */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[80vmin] h-[80vmin] max-w-[700px] max-h-[700px] text-white opacity-[0.08]">
          <Image
            src="/motifs/kamon.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative max-w-[1100px] mx-auto">
        <ScrollFadeIn>
          <p
            className="text-[10px] md:text-xs tracking-[0.5em] text-white/55 uppercase mb-10 md:mb-14 text-center"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Vision
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <h2
            className="text-center text-4xl md:text-[72px] font-normal leading-[1.5] md:leading-[1.5] tracking-[0.12em] md:tracking-[0.2em] text-white"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            地方の、
            <br />
            夢なき若者に、
            <br />
            <span className="text-[#e8dfc9]">理想を届ける。</span>
          </h2>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <p
            className="mt-16 md:mt-20 text-center text-[14px] md:text-[15px] text-white/70 leading-[2.2] md:leading-[2.4] max-w-[720px] mx-auto"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            地方に生まれただけで、選べる道が狭くなる現実を変える。
            本質的価値と市場評価のあいだに横たわるギャップを埋め、
            未開拓の人的資本を、次世代のビジネス戦闘力へと変換する。
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
