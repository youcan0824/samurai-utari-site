import { ScrollFadeIn } from "./scroll-fade-in";

export function About() {
  return (
    <section id="about" className="py-[120px] px-6 md:px-[60px] bg-[#0d1117]">
      <ScrollFadeIn>
        <p className="text-[11px] tracking-[0.3em] uppercase text-white/30 mb-10 max-w-[1100px] mx-auto">
          About Us
        </p>
      </ScrollFadeIn>
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-[1100px] mx-auto">
        <ScrollFadeIn>
          <h2 className="text-2xl md:text-[32px] font-light tracking-[0.05em] leading-[1.6] mb-6">
            地方から、
            <br />
            <span className="text-[#6ea8dc]">次世代のキャリア</span>を
            <br />
            再定義する。
          </h2>
          <p className="text-sm text-white/60 leading-[2]">
            地方と都市のビジネスリテラシー格差をなくす。
            ポテンシャルは変わらない。足りないのは環境と道案内人だけ。
            サムライウタリは、理想を生きる人を「サムライ」と呼び、
            アイヌ語で同胞を意味する「ウタリ」とともに歩む会社です。
          </p>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <div className="flex flex-col gap-6 pt-2">
            <div className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-lg">
              <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#6ea8dc] mb-2">サムライ</h3>
              <p className="text-sm text-white/70">
                周りの評価やカタチに囚われず、理想を生きる人。
                夢を諦める平均年齢は24歳。それでも理想を追い続ける人を、
                私たちはサムライと呼んでいます。
              </p>
            </div>
            <div className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-lg">
              <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#6ea8dc] mb-2">ウタリ</h3>
              <p className="text-sm text-white/70">
                アイヌ語で「同胞」。ひとりで戦うのではなく、
                志を同じくする仲間とともに歩む。
                44人のサムライウタリをつくることが、私たちのミッションです。
              </p>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
