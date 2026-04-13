export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#0f1d33] to-[#123563]" />

      {/* Radial orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[30%] w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(18,53,99,0.4),transparent)] rounded-full" />
        <div className="absolute bottom-[20%] right-[30%] w-[500px] h-[300px] bg-[radial-gradient(ellipse,rgba(30,80,140,0.3),transparent)] rounded-full" />
      </div>

      {/* Particles */}
      {[
        { top: "15%", left: "20%", size: 4, delay: "0s", opacity: 0.5 },
        { top: "30%", right: "25%", size: 6, delay: "1s", opacity: 0.3 },
        { top: "60%", left: "15%", size: 3, delay: "2s", opacity: 0.4 },
        { top: "45%", right: "15%", size: 5, delay: "3s", opacity: 0.35 },
        { top: "75%", left: "40%", size: 4, delay: "4s", opacity: 0.25 },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            top: p.top,
            left: p.left,
            right: (p as { right?: string }).right,
            width: p.size,
            height: p.size,
            background: `rgba(110,168,220,${p.opacity})`,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">
        <p className="text-[13px] tracking-[0.4em] uppercase text-white/40 mb-10">
          SAMURAI UTARI Inc.
        </p>
        <h1 className="text-4xl md:text-[56px] font-extralight tracking-[0.25em] text-white mb-6 [text-shadow:0_0_80px_rgba(18,53,99,0.5)]">
          夢なき者に理想を
        </h1>
        <p className="text-sm tracking-[0.15em] text-white/45">
          地方にビジョナリーカンパニーをつくる
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.2em] uppercase text-white/30">
        Scroll
        <div className="w-px h-10 bg-white/20 mx-auto mt-3 animate-pulse" />
      </div>
    </section>
  );
}
