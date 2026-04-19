import Image from "next/image";
import { ScrollFadeIn } from "./scroll-fade-in";

export function Mission() {
  return (
    <section
      id="mission"
      className="relative py-[160px] md:py-[220px] px-6 md:px-[60px] bg-white overflow-hidden"
    >
      {/* 背景装飾：刀が右から左へ */}
      <div
        className="absolute top-[20%] -right-20 md:-right-16 w-[500px] md:w-[700px] opacity-[0.06] pointer-events-none"
        style={{ transform: "rotate(-12deg)" }}
      >
        <Image src="/motifs/katana.svg" alt="" width={400} height={60} className="w-full h-auto" />
      </div>

      <div className="relative max-w-[1100px] mx-auto">
        <ScrollFadeIn>
          <p className="text-[13px] tracking-[0.4em] text-[#1c1e2b]/45 mb-12 md:mb-16">
            <span
              className="text-[#123563] font-medium"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              私たちの使命
            </span>
            <span className="text-[10px] ml-3 uppercase text-[#1c1e2b]/30">/ Mission</span>
          </p>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <ScrollFadeIn>
            <h2
              className="text-3xl md:text-[48px] font-normal leading-[1.6] text-[#123563] tracking-[0.08em]"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              <span className="text-[#8b2500]">サムライウタリ</span>
              <br />
              をつくる。
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div
              className="space-y-8 text-[15px] text-[#1c1e2b]/75 leading-[2.2]"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              <p>夢を追う環境は、色々あります。</p>
              <p>
                ただ、夢を諦める平均年齢は
                <span className="text-[#8b2500] font-medium">24歳</span>
                らしい。夢を追いかけてフリーターになった人も、2年で諦めるのです。
              </p>
              <p>
                私たちは、周りの評価やカタチに囚われず理想を生きる人を、
                <span className="text-[#8b2500] font-medium">「サムライ」</span>
                と呼んでいます。
                <br />
                アイヌ語で同胞を意味する
                <span className="text-[#8b2500] font-medium">「ウタリ」</span>
                と共に歩む人々を、育てていく。
              </p>
              <p className="text-[#123563] font-medium">
                若者のロールモデルとなれるサムライウタリをつくるのが、私たちのミッションです。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
