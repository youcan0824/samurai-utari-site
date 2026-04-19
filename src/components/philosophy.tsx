import Image from "next/image";
import { ScrollFadeIn } from "./scroll-fade-in";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-[160px] md:py-[240px] px-6 md:px-[60px] bg-[#123563] overflow-hidden"
    >
      {/* テック感：グリッドライン */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* 大きな家紋を透かし */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[80vmin] h-[80vmin] max-w-[720px] max-h-[720px] text-white opacity-[0.06]">
          <Image src="/motifs/kamon.svg" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* 刀：画面を横切る */}
      <div className="absolute top-[40%] -left-8 md:-left-12 w-[60%] md:w-[50%] max-w-[700px] pointer-events-none opacity-80">
        <Image src="/motifs/katana.svg" alt="" width={400} height={60} className="w-full h-auto" />
      </div>
      <div
        className="absolute bottom-[30%] -right-8 md:-right-12 w-[60%] md:w-[50%] max-w-[700px] pointer-events-none opacity-80"
        style={{ transform: "rotate(180deg)" }}
      >
        <Image src="/motifs/katana.svg" alt="" width={400} height={60} className="w-full h-auto" />
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
            className="mt-16 md:mt-24 text-center text-[14px] md:text-[15px] text-white/75 leading-[2.2] md:leading-[2.4] max-w-[720px] mx-auto"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            周りの評価やカタチに囚われず、理想を生きる人へ。
            地方に生まれただけで、夢を諦めなくていい。
            本質的価値と市場評価のギャップを埋め、
            未開拓の人的資本を、次世代のビジネス戦闘力へと変換する。
          </p>
        </ScrollFadeIn>

        {/* 革命コピー */}
        <ScrollFadeIn>
          <p
            className="mt-14 md:mt-20 text-center text-sm md:text-base tracking-[0.4em] text-[#e8dfc9]/85"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            ──　地方に、革命を。　──
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
