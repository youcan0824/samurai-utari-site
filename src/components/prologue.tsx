import { ScrollFadeIn } from "./scroll-fade-in";

export function Prologue() {
  return (
    <section className="py-[160px] md:py-[200px] px-6 md:px-[60px] bg-white">
      <ScrollFadeIn>
        <div
          className="max-w-[760px] mx-auto text-center"
          style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
        >
          <p className="text-[10px] md:text-[11px] tracking-[0.5em] text-[#1c1e2b]/35 mb-12 md:mb-14 uppercase">
            Prologue
          </p>
          <p className="text-lg md:text-2xl text-[#1c1e2b]/90 leading-[2.4] md:leading-[2.6] font-normal tracking-[0.08em]">
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
