import Image from "next/image";
import { ScrollFadeIn } from "./scroll-fade-in";

export function Opening() {
  return (
    <section className="py-[160px] md:py-[220px] px-6 md:px-[60px] bg-[#faf8f3]">
      <div className="max-w-[1100px] mx-auto">
        <ScrollFadeIn>
          <div className="flex flex-col items-center">
            {/* 家紋ロゴ */}
            <div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] mb-16 md:mb-20 text-[#123563]">
              <Image
                src="/logo/primary/logo-primary.svg"
                alt="SAMURAI UTARI"
                fill
                className="object-contain"
              />
            </div>

            {/* 会社名 */}
            <div
              className="text-center mb-16 md:mb-20"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              <p className="text-[11px] md:text-[13px] tracking-[0.5em] text-[#1c1e2b]/50 uppercase mb-4">
                Samurai Utari Inc.
              </p>
              <p className="text-xl md:text-2xl tracking-[0.3em] text-[#123563]">
                株式会社サムライウタリ
              </p>
            </div>

            {/* ストーリー文 */}
            <div
              className="max-w-[780px] text-[#1c1e2b]/80 text-[14px] md:text-[15px] leading-[2.4] md:leading-[2.6] tracking-[0.05em]"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              <p>
                二〇二四（令和六）年、北海道札幌市にて創業。広島大学で地方大学生として過ごした創業者が、就職活動の中で目の当たりにした、都心と地方の埋めがたい格差──キャリアに対する視座、挑戦を後押しする文化、そもそもの選択肢の広さ。
              </p>
              <p className="mt-8">
                しかし、本質的なポテンシャルは都市の学生と変わらない。足りなかったのは、質の高い機会と、挑戦を受け止める文化だけだった。
              </p>
              <p className="mt-8">
                周りの評価やカタチに囚われず理想を生きる人を「サムライ」、志を同じくする同胞をアイヌ語で「ウタリ」と呼ぶ。地方の夢なき若者に理想を届けること──それが、私たちの存在する理由です。
              </p>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
