import { ScrollFadeIn } from "./scroll-fade-in";

const services = [
  {
    tag: "AI × Education",
    name: "AI Training",
    description:
      "生成AIを事業成長につなげる企業向け研修プログラム。実践型ワークショップで、明日から使えるAI活用スキルを提供します。",
    comingSoon: false,
  },
  {
    tag: "Career × Community",
    name: "Divide Base",
    description:
      "地方大学生のための次世代キャリアスクール。経営者の視座・思考をインストールし、ビジネス戦闘力のベースをつくる。",
    comingSoon: true,
  },
];

export function Service() {
  return (
    <section id="service" className="py-[160px] md:py-[200px] px-6 md:px-[60px] bg-[#faf8f3]">
      <ScrollFadeIn>
        <p className="text-[13px] tracking-[0.4em] text-[#1c1e2b]/45 mb-12 md:mb-16 max-w-[980px] mx-auto">
          <span
            className="text-[#123563] font-medium"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            事業
          </span>
          <span className="text-[10px] ml-3 uppercase text-[#1c1e2b]/30">/ Service</span>
        </p>
      </ScrollFadeIn>
      <div className="grid md:grid-cols-2 gap-8 max-w-[980px] mx-auto">
        {services.map((svc, i) => (
          <ScrollFadeIn key={i}>
            <div className="group relative p-10 md:p-12 bg-white border border-[#1c1e2b]/[0.08] overflow-hidden transition-all duration-300 hover:border-[#4a7fc8]/50 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#123563] to-[#4a7fc8] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="inline-block px-3 py-1 text-[10px] tracking-[0.15em] uppercase border border-[#1c1e2b]/20 text-[#1c1e2b]/70 mb-6">
                {svc.tag}
              </span>
              <h3
                className="text-2xl md:text-[26px] font-medium mb-5 text-[#123563]"
                style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
              >
                {svc.name}
                {svc.comingSoon && (
                  <span
                    className="ml-3 px-2.5 py-0.5 text-[10px] bg-[#4a7fc8]/15 text-[#4a7fc8] rounded-sm tracking-[0.08em] align-middle"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    Coming Soon
                  </span>
                )}
              </h3>
              <p
                className="text-[14px] md:text-[15px] text-[#1c1e2b]/70 leading-[2]"
                style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
              >
                {svc.description}
              </p>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </section>
  );
}
