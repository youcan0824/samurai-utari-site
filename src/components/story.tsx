import { ScrollFadeIn } from "./scroll-fade-in";

const milestones = [
  {
    year: "2020",
    title: "始まり",
    text: "創業者・藤野悠生が、広島大学在学中にキャリア支援NPOの地方支部立ち上げを主導。3名の組織を15名へ拡大し、年間300名の地方大学生にキャリアの入口を届ける。",
  },
  {
    year: "2021",
    title: "原点",
    text: "新卒入社した東証一部上場企業を1ヶ月で退職し独立。広島に若者起業家シェアハウスを創業、累計200名超の大学生が全国から集う拠点となる。",
  },
  {
    year: "2022",
    title: "北海道へ",
    text: "ゲーミフィケーションを活用した地方の起業スクールにて、北海道拠点のゼロイチ立ち上げを担う。",
  },
  {
    year: "2023",
    title: "事業開発",
    text: "新規事業コンサルタントとして、外資系製薬会社のヘルスケアサービス立ち上げ、大手自動車メーカーの地域共創型サービス立ち上げなど、調査・設計・実行を一気通貫で担う。",
  },
  {
    year: "2024",
    title: "創業",
    text: "株式会社サムライウタリを設立。北海道札幌市を拠点に、「人づくり・場づくり・事業づくり」の三軸で本格始動。",
  },
];

export function Story() {
  return (
    <section
      id="story"
      className="py-[160px] md:py-[220px] px-6 md:px-[60px] bg-white"
    >
      <div className="max-w-[1100px] mx-auto">
        <ScrollFadeIn>
          <p className="text-[13px] tracking-[0.4em] text-[#1c1e2b]/45 mb-12 md:mb-16">
            <span
              className="text-[#123563] font-medium"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              これまでの歩み
            </span>
            <span className="text-[10px] ml-3 uppercase text-[#1c1e2b]/30">/ Story</span>
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <h2
            className="text-2xl md:text-[34px] font-normal leading-[1.7] mb-20 md:mb-28 text-[#123563] tracking-[0.05em] max-w-[820px]"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            一人の地方大学生の違和感から、
            <br />
            会社はじまった。
          </h2>
        </ScrollFadeIn>

        <div className="relative">
          {/* 縦線 */}
          <div className="absolute left-[80px] md:left-[100px] top-2 bottom-2 w-px bg-[#1c1e2b]/15" />

          <div className="space-y-16 md:space-y-20">
            {milestones.map((m, i) => (
              <ScrollFadeIn key={i}>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-6 md:gap-12 relative">
                  {/* 年号 */}
                  <div className="relative">
                    <p
                      className="text-xl md:text-2xl text-[#4a7fc8] font-normal tracking-[0.05em]"
                      style={{
                        fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif',
                      }}
                    >
                      {m.year}
                    </p>
                    {/* ドット */}
                    <div className="absolute -right-[5px] top-3 w-[9px] h-[9px] rounded-full bg-[#123563]" />
                  </div>
                  {/* 内容 */}
                  <div className="pl-4 md:pl-8">
                    <h3
                      className="text-xl md:text-2xl font-medium mb-3 md:mb-4 text-[#123563] tracking-[0.1em]"
                      style={{
                        fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif',
                      }}
                    >
                      {m.title}
                    </h3>
                    <p
                      className="text-[14px] md:text-[15px] text-[#1c1e2b]/75 leading-[2.1]"
                      style={{
                        fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif',
                      }}
                    >
                      {m.text}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
