import { ScrollFadeIn } from "./scroll-fade-in";

export function Contact() {
  return (
    <section id="contact" className="py-[120px] px-6 md:px-[60px] bg-gradient-to-b from-[#0f1925] to-[#123563] text-center">
      <ScrollFadeIn>
        <p className="text-[11px] tracking-[0.3em] uppercase text-white/30 mb-10">Contact</p>
        <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] mb-4">Get in Touch</h2>
        <p className="text-sm text-white/50 mb-12">研修のご依頼・採用・取材・その他のお問い合わせ</p>
        <a href="mailto:info@samurai-utari.jp" className="inline-block px-12 py-4 text-[13px] tracking-[0.15em] uppercase bg-white/10 border border-white/25 rounded-lg text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all">Contact Us</a>
      </ScrollFadeIn>
    </section>
  );
}
