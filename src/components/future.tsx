import { ScrollFadeIn } from "./scroll-fade-in";

export function Future() {
  return (
    <section className="py-[160px] md:py-[220px] px-6 md:px-[60px] bg-[#faf8f3]">
      <div className="max-w-[1100px] mx-auto">
        <ScrollFadeIn>
          <p className="text-[13px] tracking-[0.4em] text-[#1c1e2b]/45 mb-12 md:mb-16">
            <span
              className="text-[#123563] font-medium"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              これからの私たち
            </span>
            <span className="text-[10px] ml-3 uppercase text-[#1c1e2b]/30">/ Future</span>
          </p>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <ScrollFadeIn>
            <h2
              className="text-3xl md:text-[44px] font-normal leading-[1.7] text-[#123563] tracking-[0.08em]"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              四十四人の
              <br />
              サムライウタリを、
              <br />
              <span className="text-[#4a7fc8]">地方から。</span>
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div
              className="space-y-8 text-[15px] text-[#1c1e2b]/75 leading-[2.2]"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              <p>
                私たちが目指すのは、単に一社の成長ではありません。地方から、現代における「松下村塾」を幾つも生み出すことです。
              </p>
              <p>
                理想を生きる人を「サムライ」、志を同じくする同胞を「ウタリ」と呼ぶ。四十四人のサムライウタリをつくることが、私たちのミッション。
              </p>
              <p>
                北海道を起点に、地方のポテンシャルある若者の可能性を最大限に引き出し、やがて「地方にビジョナリーカンパニーをつくる」──その未来の証明を、ここから始めます。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
