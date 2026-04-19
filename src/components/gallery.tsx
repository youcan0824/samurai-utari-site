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
    <section className="py-[100px] px-6 md:px-[60px] bg-[#0d1117]">
      <ScrollFadeIn>
        <p className="text-[13px] tracking-[0.3em] text-white/40 mb-10 max-w-[1100px] mx-auto">
          <span className="text-white/70">文化</span>
          <span className="text-[10px] ml-3 uppercase text-white/25">/ Culture</span>
        </p>
      </ScrollFadeIn>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-[1100px] mx-auto">
        {photos.map((photo, i) => (
          <ScrollFadeIn key={i}>
            <div className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-[#123563]/30 to-[#1e508c]/15">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                <p className="p-4 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-[0.05em]">{photo.caption}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-xs text-white/20 pointer-events-none">{photo.caption}</div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </section>
  );
}
