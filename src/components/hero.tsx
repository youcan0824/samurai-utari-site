import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#e8dfc9] overflow-hidden">
      {/* 上部の会社名 */}
      <div
        className="absolute top-24 md:top-28 left-6 md:left-[60px] z-10 text-[#1c1e2b]/70"
        style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
      >
        <p className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase leading-[1.8]">
          Samurai Utari Inc.
        </p>
        <p className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase leading-[1.8] text-[#1c1e2b]/40">
          Corporate Web Site
        </p>
      </div>

      {/* 群像（夜の森の志の集会） */}
      <div className="flex-1 flex items-end justify-center pt-32 md:pt-36 pb-24 md:pb-28 px-2 md:px-10">
        <div className="relative w-full max-w-[1400px] h-[60vh] md:h-[70vh] flex items-end justify-center gap-1 md:gap-2">
          {/* 木・大（左端） */}
          <div
            className="relative h-[52%] md:h-[56%] aspect-[120/220] shrink-0 hero-sway"
            style={{ animationDelay: "0s, 0.05s" }}
          >
            <Image src="/motifs/tree.svg" alt="" fill className="object-contain object-bottom" priority />
          </div>

          {/* ウタリ1（中・左） */}
          <div
            className="relative h-[42%] md:h-[44%] aspect-[160/340] shrink-0 hero-sway-mini"
            style={{ animationDelay: "0.15s, 0.15s" }}
          >
            <Image src="/motifs/utari.svg" alt="" fill className="object-contain object-bottom" priority />
          </div>

          {/* 焚き火（中央・主役） */}
          <div
            className="relative h-[38%] md:h-[42%] aspect-[140/240] shrink-0 self-end mb-1 hero-fire"
            style={{ animationDelay: "0.3s, 0.25s" }}
          >
            <Image src="/motifs/fire.svg" alt="" fill className="object-contain object-bottom" priority />
          </div>

          {/* ウタリ2（中・右） */}
          <div
            className="relative h-[44%] md:h-[46%] aspect-[160/340] shrink-0 hero-sway-mini"
            style={{ animationDelay: "0.45s, 0.35s" }}
          >
            <Image src="/motifs/utari.svg" alt="" fill className="object-contain object-bottom" priority />
          </div>

          {/* ウタリ3（小・右） */}
          <div
            className="relative h-[38%] md:h-[40%] aspect-[160/340] shrink-0 hero-sway-mini-delay"
            style={{ animationDelay: "0.6s, 0.45s" }}
          >
            <Image src="/motifs/utari.svg" alt="" fill className="object-contain object-bottom" priority />
          </div>

          {/* サムライ（最大・リーダー） */}
          <div
            className="relative h-[70%] md:h-[74%] aspect-[160/340] shrink-0 hero-sway-slow"
            style={{ animationDelay: "0.75s, 0.55s" }}
          >
            <Image src="/motifs/samurai.svg" alt="" fill className="object-contain object-bottom" priority />
          </div>

          {/* 木・小（右端） */}
          <div
            className="relative h-[45%] md:h-[48%] aspect-[120/220] shrink-0 hero-sway hidden md:block"
            style={{ animationDelay: "0.9s, 0.65s" }}
          >
            <Image src="/motifs/tree.svg" alt="" fill className="object-contain object-bottom" priority />
          </div>
        </div>
      </div>

      {/* 下部スクロールインジケータ */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-[#1c1e2b]/40 text-center"
        style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
      >
        <span>スクロール</span>
        <div className="w-px h-10 bg-[#1c1e2b]/25 mx-auto mt-3 animate-pulse" />
      </div>

      <style>{`
        @keyframes hero-fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-sway {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(0.5deg); }
        }
        @keyframes hero-sway-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(-0.3deg); }
        }
        @keyframes hero-sway-mini {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(0.4deg); }
        }
        @keyframes hero-sway-mini-delay {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(-0.4deg); }
        }
        @keyframes hero-fire {
          0%, 100% { transform: translateY(0) scaleY(1); }
          33% { transform: translateY(-3px) scaleY(1.05); }
          66% { transform: translateY(-1px) scaleY(0.97); }
        }
        .hero-sway { animation: hero-fade-in 1s ease-out both, hero-sway 5s ease-in-out infinite; }
        .hero-sway-slow { animation: hero-fade-in 1s ease-out both, hero-sway-slow 6.5s ease-in-out infinite; }
        .hero-sway-mini { animation: hero-fade-in 1s ease-out both, hero-sway-mini 5.5s ease-in-out infinite; }
        .hero-sway-mini-delay { animation: hero-fade-in 1s ease-out both, hero-sway-mini-delay 6s ease-in-out infinite; }
        .hero-fire { animation: hero-fade-in 1s ease-out both, hero-fire 1.6s ease-in-out infinite; transform-origin: bottom center; }
      `}</style>
    </section>
  );
}
