import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#e8dfc9]">
      {/* テック感：うっすらグリッドライン */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(28,30,43,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,30,43,0.10) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* テック感：淡い光のオーブ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(74,127,200,0.08),transparent)] rounded-full" />
        <div className="absolute bottom-[15%] right-[18%] w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(139,37,0,0.05),transparent)] rounded-full" />
      </div>

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

      {/* 刀：左（斜め上向き） */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[45vw] md:w-[42vw] max-w-[600px] hero-katana-left pointer-events-none"
        style={{ transform: "translateY(-50%) rotate(-18deg) translateX(-18%)" }}
      >
        <Image
          src="/motifs/katana.svg"
          alt=""
          width={400}
          height={60}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* 刀：右（斜め下向き） */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[45vw] md:w-[42vw] max-w-[600px] hero-katana-right pointer-events-none"
        style={{ transform: "translateY(-50%) rotate(162deg) translateX(-18%)" }}
      >
        <Image
          src="/motifs/katana.svg"
          alt=""
          width={400}
          height={60}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Content：タイポグラフィ主役 */}
      <div
        className="relative z-10 px-6"
        style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
      >
        <p className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#1c1e2b]/40 mb-10 hero-fade-1">
          Philosophy
        </p>
        <h1 className="text-5xl md:text-[104px] font-normal tracking-[0.15em] md:tracking-[0.22em] text-[#1c1e2b] leading-[1.45] hero-fade-2">
          夢なき者に、
          <br />
          <span className="text-[#8b2500]">理想を。</span>
        </h1>
        <p className="mt-12 md:mt-16 text-sm md:text-lg tracking-[0.3em] text-[#1c1e2b]/65 hero-fade-3">
          地方に、
          <span className="text-[#8b2500] mx-1">革命</span>
          を。
        </p>
      </div>

      {/* 下部スクロールインジケータ */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-[#1c1e2b]/40 text-center hero-fade-4"
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
        @keyframes katana-slash-left {
          0% { opacity: 0; transform: translateY(-50%) rotate(-18deg) translateX(-120%); }
          100% { opacity: 1; transform: translateY(-50%) rotate(-18deg) translateX(-18%); }
        }
        @keyframes katana-slash-right {
          0% { opacity: 0; transform: translateY(-50%) rotate(162deg) translateX(-120%); }
          100% { opacity: 1; transform: translateY(-50%) rotate(162deg) translateX(-18%); }
        }
        @keyframes katana-shine {
          0%, 100% { filter: drop-shadow(0 0 0 rgba(74,127,200,0)); }
          50% { filter: drop-shadow(0 0 14px rgba(74,127,200,0.45)); }
        }
        .hero-katana-left {
          animation: katana-slash-left 1.4s ease-out 0.1s both, katana-shine 4s ease-in-out 2s infinite;
        }
        .hero-katana-right {
          animation: katana-slash-right 1.4s ease-out 0.25s both, katana-shine 4s ease-in-out 2.5s infinite;
        }
        .hero-fade-1 { animation: hero-fade-in 1s ease-out 0.8s both; opacity: 0; }
        .hero-fade-2 { animation: hero-fade-in 1.2s ease-out 1s both; opacity: 0; }
        .hero-fade-3 { animation: hero-fade-in 1s ease-out 1.5s both; opacity: 0; }
        .hero-fade-4 { animation: hero-fade-in 1s ease-out 2s both; opacity: 0; }
      `}</style>
    </section>
  );
}
