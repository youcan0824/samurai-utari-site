import { ScrollFadeIn } from "./scroll-fade-in";

const values = [
  {
    num: "01",
    title: "絆を紡ぐ。",
    subtitle: "〜 長く続ける 〜",
    paragraphs: [
      "お金は増えたり減ったりするけれど、絆は重ねるほど太くなる。",
      "だから、先に知らせる。盛らない。約束は書いて守る。",
      "気まずいときほど、正直に。別れが来ても、敵にしない。",
      "それが、うちの誠実さのかたち。",
    ],
  },
  {
    num: "02",
    title: "現地現物主義。",
    subtitle: "〜 見て、触って、すぐやる 〜",
    paragraphs: [
      "机でうなるより、現場に触って、すぐ試す。",
      "「価値は何？ どう測る？」感想より指標、言い訳より72時間の小さな実験。",
      "うまくいったら続ける、ダメならすぐ直す。それだけ。",
    ],
  },
  {
    num: "03",
    title: "こえて、わたす。",
    subtitle: "〜 出藍の誉れ 〜",
    paragraphs: [
      "後輩が自分を超えたら、いちばん大きく拍手する。",
      "権限も情報も前に出して、席を譲る。",
      "やる時は全力でやる、終わったら全力で祝う。",
      "祝ったあとに、やり方を残して次へ渡す。",
    ],
  },
];

export function Value() {
  return (
    <section
      id="value"
      className="relative py-[160px] md:py-[220px] px-6 md:px-[60px] bg-[#faf8f3]"
    >
      <div className="relative max-w-[1200px] mx-auto">
        <ScrollFadeIn>
          <p className="text-[13px] tracking-[0.4em] text-[#1c1e2b]/45 mb-12 md:mb-16">
            <span
              className="text-[#123563] font-medium"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              行動規範
            </span>
            <span className="text-[10px] ml-3 uppercase text-[#1c1e2b]/30">/ Value</span>
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <h2
            className="text-2xl md:text-[34px] font-normal leading-[1.7] mb-20 md:mb-28 text-[#123563] tracking-[0.05em] max-w-[820px]"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            三つの約束で、
            <br />
            <span className="text-[#8b2500]">理想</span>に嘘をつかない。
          </h2>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {values.map((v, i) => (
            <ScrollFadeIn key={i}>
              <div className="border-t-2 border-[#123563]/20 pt-10">
                <p
                  className="text-xs tracking-[0.3em] text-[#4a7fc8] mb-6"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {v.num}
                </p>
                <h3
                  className="text-2xl md:text-[26px] font-medium mb-3 text-[#123563] tracking-[0.08em]"
                  style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-[11px] md:text-xs text-[#8b2500] tracking-[0.15em] mb-8"
                  style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                >
                  {v.subtitle}
                </p>
                <div
                  className="space-y-4 text-[14px] text-[#1c1e2b]/75 leading-[2.1]"
                  style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                >
                  {v.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
