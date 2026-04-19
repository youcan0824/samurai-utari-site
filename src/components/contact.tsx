import { ScrollFadeIn } from "./scroll-fade-in";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-[160px] md:py-[200px] px-6 md:px-[60px] bg-[#123563] text-center"
    >
      <ScrollFadeIn>
        <p className="text-[13px] tracking-[0.4em] text-white/50 mb-12 md:mb-16">
          <span
            className="text-white/90 font-medium"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            連絡
          </span>
          <span className="text-[10px] ml-3 uppercase text-white/35">/ Contact</span>
        </p>
        <h2
          className="text-3xl md:text-[40px] font-normal tracking-[0.2em] mb-6 text-white"
          style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
        >
          話をしよう。
        </h2>
        <p
          className="text-sm md:text-[15px] text-white/60 mb-14 leading-[2]"
          style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
        >
          研修のご依頼・採用・取材、
          <br className="md:hidden" />
          その他のお問い合わせ。
        </p>
        <a
          href="mailto:info@samurai-utari.jp"
          className="inline-block px-12 py-4 text-sm tracking-[0.2em] bg-white text-[#123563] hover:bg-[#f5efe0] transition-all"
          style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
        >
          メールで問い合わせる
        </a>
      </ScrollFadeIn>
    </section>
  );
}
