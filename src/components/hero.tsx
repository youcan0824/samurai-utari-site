import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#faf8f3]">
      {/* 家紋モチーフ（薄く大きく背景に） */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[90vmin] h-[90vmin] max-w-[820px] max-h-[820px] text-[#123563] opacity-[0.08]">
          <Image
            src="/motifs/kamon.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* 淡いグラデーションオーブ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[25%] w-[500px] h-[400px] bg-[radial-gradient(ellipse,rgba(74,127,200,0.08),transparent)] rounded-full" />
        <div className="absolute bottom-[20%] right-[25%] w-[500px] h-[400px] bg-[radial-gradient(ellipse,rgba(18,53,99,0.06),transparent)] rounded-full" />
      </div>

      {/* Content */}
      <div
        className="relative z-10"
        style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
      >
        <p className="text-[11px] md:text-[12px] tracking-[0.4em] text-[#1c1e2b]/45 mb-10 uppercase">
          株式会社サムライウタリ
        </p>
        <h1 className="text-4xl md:text-[64px] font-normal tracking-[0.15em] md:tracking-[0.3em] text-[#123563] leading-[1.4]">
          夢なき者に、
          <br className="md:hidden" />
          理想を。
        </h1>
        <p className="mt-10 text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-[#1c1e2b]/35">
          Samurai Utari Inc.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-[#1c1e2b]/30"
        style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
      >
        <span>スクロール</span>
        <div className="w-px h-10 bg-[#1c1e2b]/20 mx-auto mt-3 animate-pulse" />
      </div>
    </section>
  );
}
