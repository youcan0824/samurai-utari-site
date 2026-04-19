"use client";

import { ScrollFadeIn } from "./scroll-fade-in";
import Image from "next/image";

const photos = [
  { src: "/photos/gallery/event-01.jpg", caption: "Z世代ザムライの腹が割れる会" },
  { src: "/photos/gallery/event-02.jpg", caption: "トークセッション @ カクレガ" },
  { src: "/photos/gallery/event-03.jpg", caption: "イベント風景" },
  { src: "/photos/gallery/event-04.jpg", caption: "ディスカッション" },
  { src: "/photos/gallery/event-05.jpg", caption: "BBQ & 交流会" },
  { src: "/photos/gallery/event-06.jpg", caption: "懇親会" },
];

export function Gallery() {
  return (
    <section className="py-[160px] md:py-[200px] px-6 md:px-[60px] bg-[#faf8f3]">
      <ScrollFadeIn>
        <p className="text-[13px] tracking-[0.4em] text-[#1c1e2b]/45 mb-6 md:mb-8 max-w-[980px] mx-auto">
          <span
            className="text-[#123563] font-medium"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            これまでの歩み
          </span>
          <span className="text-[10px] ml-3 uppercase text-[#1c1e2b]/30">/ Story</span>
        </p>
        <p
          className="text-[14px] md:text-[15px] text-[#1c1e2b]/70 leading-[2.1] mb-12 md:mb-16 max-w-[980px] mx-auto"
          style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
        >
          一人の地方大学生の違和感から、会社は始まった。
          <br className="hidden md:inline" />
          地方の同胞たちと共に重ねてきた、熱狂の軌跡。
        </p>
      </ScrollFadeIn>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-[980px] mx-auto">
        {photos.map((photo, i) => (
          <ScrollFadeIn key={i}>
            <div className="group relative aspect-[4/3] overflow-hidden bg-[#f5efe0] border border-[#1c1e2b]/[0.05]">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-[#123563]/0 group-hover:bg-[#123563]/60 transition-all duration-300 flex items-end">
                <p
                  className="p-4 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-[0.08em]"
                  style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                >
                  {photo.caption}
                </p>
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center text-xs text-[#1c1e2b]/30 pointer-events-none"
                style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
              >
                {photo.caption}
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </section>
  );
}
