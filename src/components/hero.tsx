import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#0f1d33] to-[#123563]" />

      {/* Radial orbs (subtle) */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[30%] w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(18,53,99,0.4),transparent)] rounded-full" />
        <div className="absolute bottom-[20%] right-[30%] w-[500px] h-[300px] bg-[radial-gradient(ellipse,rgba(30,80,140,0.3),transparent)] rounded-full" />
      </div>

      {/* 家紋モチーフ（薄く大きく背景に） */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[90vmin] h-[90vmin] max-w-[800px] max-h-[800px] text-[#4a7fc8] opacity-[0.06]">
          <Image
            src="/motifs/kamon.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p className="text-[12px] tracking-[0.4em] uppercase text-white/35 mb-8">
          株式会社サムライウタリ
        </p>
        <h1 className="text-4xl md:text-[60px] font-extralight tracking-[0.15em] md:tracking-[0.3em] text-white [text-shadow:0_0_80px_rgba(18,53,99,0.5)]">
          夢なき者に理想を
        </h1>
        <p className="mt-8 text-[11px] tracking-[0.4em] uppercase text-white/30">
          Samurai Utari Inc.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-white/25">
        <span>スクロール</span>
        <div className="w-px h-10 bg-white/20 mx-auto mt-3 animate-pulse" />
      </div>
    </section>
  );
}
