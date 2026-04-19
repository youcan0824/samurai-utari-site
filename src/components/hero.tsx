import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#e8dfc9] overflow-hidden pt-24 md:pt-28">
      {/* イラスト群像 */}
      <div className="flex-1 flex items-end justify-center px-4 md:px-[60px] pb-14 md:pb-20">
        <div className="relative w-full max-w-[1280px] flex items-end justify-center gap-2 md:gap-6">
          {/* 左：サムライ */}
          <div className="relative w-[38%] md:w-[32%] aspect-[3/5] drop-shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
            <Image
              src="/silhouettes/samurai.png"
              alt="Samurai"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
          {/* 中央：家紋（背面装飾的に） */}
          <div className="relative w-[20%] md:w-[16%] aspect-square self-center text-[#1c1e2b] opacity-75">
            <Image
              src="/motifs/kamon.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          {/* 右：ウタリ */}
          <div className="relative w-[38%] md:w-[32%] aspect-[3/5] drop-shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
            <Image
              src="/silhouettes/utari.png"
              alt="Utari"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>

      {/* 下部の会社名 */}
      <div
        className="text-center pb-10 md:pb-14"
        style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
      >
        <p className="text-[10px] md:text-[11px] tracking-[0.5em] text-[#1c1e2b]/60 uppercase mb-2">
          Samurai Utari Inc.
        </p>
        <p className="text-[10px] md:text-[11px] tracking-[0.5em] text-[#1c1e2b]/40 uppercase">
          Corporate Web Site
        </p>
      </div>
    </section>
  );
}
