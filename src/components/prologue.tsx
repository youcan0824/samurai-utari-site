import { ScrollFadeIn } from "./scroll-fade-in";

export function Prologue() {
  return (
    <section className="py-[140px] md:py-[180px] px-6 md:px-[60px] bg-[#0d1117]">
      <ScrollFadeIn>
        <div
          className="max-w-[760px] mx-auto text-center"
          style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
        >
          <p className="text-[10px] md:text-[11px] tracking-[0.4em] text-white/30 mb-8 md:mb-10 uppercase">
            Prologue
          </p>
          <p className="text-lg md:text-2xl text-white/85 leading-[2.2] md:leading-[2.4] font-normal tracking-[0.08em]">
            地方に生まれただけで、
            <br />
            選べる道が、狭くなる。
            <br />
            <br />
            その現実を、変えたい。
            <br />
            <br />
            同じ志を持つ同胞（ウタリ）と、
            <br />
            理想を生きる人（サムライ）を、地方から。
          </p>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
