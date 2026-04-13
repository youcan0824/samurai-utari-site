import { ScrollFadeIn } from "./scroll-fade-in";

const services = [
  { tag: "AI × Education", name: "AI Training", description: "生成AIを事業成長につなげる企業向け研修プログラム。実践型ワークショップで、明日から使えるAI活用スキルを提供します。", comingSoon: false },
  { tag: "Career × Community", name: "Divide Base", description: "地方大学生のための次世代キャリアスクール。経営者の視座・思考をインストールし、ビジネス戦闘力のベースをつくる。", comingSoon: true },
];

export function Service() {
  return (
    <section id="service" className="py-[120px] px-6 md:px-[60px] bg-[#0f1520]">
      <ScrollFadeIn>
        <p className="text-[11px] tracking-[0.3em] uppercase text-white/30 mb-10 max-w-[1100px] mx-auto">Service</p>
      </ScrollFadeIn>
      <div className="grid md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
        {services.map((svc, i) => (
          <ScrollFadeIn key={i}>
            <div className="group relative p-10 md:p-12 bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#6ea8dc]/30 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#123563] to-[#6ea8dc] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="inline-block px-3 py-1 text-[10px] tracking-[0.15em] uppercase border border-white/20 rounded text-white/60 mb-6">{svc.tag}</span>
              <h3 className="text-2xl font-semibold mb-4">
                {svc.name}
                {svc.comingSoon && <span className="ml-3 px-2.5 py-0.5 text-[10px] bg-[#6ea8dc]/20 text-[#6ea8dc] rounded tracking-[0.05em]">Coming Soon</span>}
              </h3>
              <p className="text-sm text-white/50 leading-[1.8]">{svc.description}</p>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </section>
  );
}
