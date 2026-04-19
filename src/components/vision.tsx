import { ScrollFadeIn } from "./scroll-fade-in";
import Image from "next/image";

export function Vision() {
  return (
    <section
      id="vision"
      className="relative py-[160px] md:py-[220px] px-6 md:px-[60px] bg-[#faf8f3] overflow-hidden"
    >
      {/* 背景装飾：焚き火 */}
      <div className="absolute right-0 bottom-0 w-[280px] md:w-[420px] opacity-[0.08] pointer-events-none">
        <Image src="/motifs/fire.svg" alt="" width={140} height={240} className="w-full h-auto" />
      </div>

      <div className="relative max-w-[1100px] mx-auto">
        <ScrollFadeIn>
          <p className="text-[13px] tracking-[0.4em] text-[#1c1e2b]/45 mb-12 md:mb-16">
            <span
              className="text-[#123563] font-medium"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              目指す景色
            </span>
            <span className="text-[10px] ml-3 uppercase text-[#1c1e2b]/30">/ Vision</span>
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <h2
            className="text-3xl md:text-[48px] font-normal leading-[1.65] text-[#123563] tracking-[0.08em] mb-20 md:mb-24 max-w-[900px]"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            絆を紡いで、
            <br />
            <span className="text-[#8b2500]">サムライDNA</span>を、ふやす。
          </h2>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20">
          <ScrollFadeIn>
            <div
              className="space-y-8 text-[15px] md:text-base text-[#1c1e2b]/80 leading-[2.3]"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              <p className="text-lg md:text-xl text-[#123563] font-medium leading-[1.9]">
                ひとりの「好き」は火花。
                <br />
                仲間（ウタリ）とやれば、焚き火になる。
              </p>
              <p>
                うまくいく日も、転ぶ日も、
                <br />
                同じ輪で笑って、直して、またやる。
              </p>
              <p>
                その手ざわりの毎日が、
                <br />
                気づけば絆になっていく。
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div
              className="space-y-8 text-[15px] md:text-base text-[#1c1e2b]/80 leading-[2.3]"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              <p>
                私たちは、見せて・会えて・試せて・
                <br />
                自分のものにできる場を用意する。
              </p>
              <p className="text-[#123563] font-medium">
                <span className="text-[#8b2500]">“好き”</span>を長持ちさせる仕組みで、
                <br />
                理想で生きる人をふやしていく。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
