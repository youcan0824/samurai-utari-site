import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#e8dfc9] overflow-hidden">
      {/* 上部の会社名（中川政七商店風に左上） */}
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

      {/* イラスト群像 */}
      <div className="flex-1 flex items-end justify-center pt-32 md:pt-36 pb-24 md:pb-28 px-4 md:px-12">
        <div className="relative w-full max-w-[1400px] h-[62vh] md:h-[70vh] flex items-end justify-center gap-2 md:gap-3">
          {/* 木1（一番大きい） */}
          <div
            className="relative h-[55%] md:h-[58%] aspect-[120/220] shrink-0 hero-sway hero-fade"
            style={{ animationDelay: "0s, 0.05s" }}
          >
            <Image src="/motifs/tree.svg" alt="" fill className="object-contain object-bottom" priority />
          </div>
          {/* 木2 */}
          <div
            className="relative h-[50%] md:h-[52%] aspect-[120/220] shrink-0 hero-sway-slow hero-fade"
            style={{ animationDelay: "0.3s, 0.15s" }}
          >
            <Image src="/motifs/tree.svg" alt="" fill className="object-contain object-bottom" priority />
          </div>
          {/* 木3 */}
          <div
            className="relative h-[45%] md:h-[46%] aspect-[120/220] shrink-0 hero-sway hero-fade"
            style={{ animationDelay: "0.6s, 0.25s" }}
          >
            <Image src="/motifs/tree.svg" alt="" fill className="object-contain object-bottom" priority />
          </div>

          {/* 焚き火 */}
          <div
            className="relative h-[32%] md:h-[34%] aspect-[140/240] shrink-0 self-end mb-2 hero-fire hero-fade"
            style={{ animationDelay: "0.2s, 0.35s" }}
          >
            <Image src="/motifs/fire.svg" alt="" fill className="object-contain object-bottom" priority />
          </div>

          {/* サムライ（主役・大きい） */}
          <div
            className="relative h-[85%] md:h-[88%] aspect-[3/5] shrink-0 hero-sway-mini hero-fade"
            style={{ animationDelay: "0.4s, 0.45s" }}
          >
            <Image src="/silhouettes/samurai.png" alt="Samurai" fill className="object-contain object-bottom" priority />
          </div>

          {/* 家紋 */}
          <div
            className="relative h-[32%] md:h-[34%] aspect-square shrink-0 self-center text-[#1c1e2b] hero-rotate hero-fade hidden md:block"
            style={{ animationDelay: "0s, 0.55s" }}
          >
            <Image src="/motifs/kamon.svg" alt="" fill className="object-contain" priority />
          </div>

          {/* ウタリ（アイヌ偶像） */}
          <div
            className="relative h-[75%] md:h-[78%] aspect-[3/5] shrink-0 hero-sway-mini hero-fade"
            style={{ animationDelay: "0.5s, 0.65s" }}
          >
            <Image src="/silhouettes/utari.png" alt="Utari" fill className="object-contain object-bottom" priority />
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
          50% { transform: translateY(-8px) rotate(-0.4deg); }
        }
        @keyframes hero-sway-mini {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(0.3deg); }
        }
        @keyframes hero-fire {
          0%, 100% { transform: translateY(0) scaleY(1); }
          33% { transform: translateY(-3px) scaleY(1.04); }
          66% { transform: translateY(-1px) scaleY(0.98); }
        }
        @keyframes hero-rotate {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(6deg); }
        }
        .hero-fade {
          animation-name: hero-fade-in, hero-idle;
          animation-duration: 1s, 5s;
          animation-iteration-count: 1, infinite;
          animation-timing-function: ease-out, ease-in-out;
          animation-fill-mode: both, both;
          opacity: 0;
        }
        .hero-sway { animation: hero-fade-in 1s ease-out both, hero-sway 5s ease-in-out infinite; }
        .hero-sway-slow { animation: hero-fade-in 1s ease-out both, hero-sway-slow 6s ease-in-out infinite; }
        .hero-sway-mini { animation: hero-fade-in 1s ease-out both, hero-sway-mini 7s ease-in-out infinite; }
        .hero-fire { animation: hero-fade-in 1s ease-out both, hero-fire 1.6s ease-in-out infinite; transform-origin: bottom center; }
        .hero-rotate { animation: hero-fade-in 1s ease-out both, hero-rotate 12s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
