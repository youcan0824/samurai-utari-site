"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollFadeIn } from "./scroll-fade-in";

const members = [
  {
    name: "藤野 悠生",
    nameEn: "Yuki Fujino",
    role: "CEO",
    motto: "「現代の松下村塾をつくる」",
    bio: "兵庫県神戸市出身。東証一部上場企業を1ヶ月で退職し起業。広島で若者起業家シェアハウス「もみじ」創業、スタートアップ体験企画を北海道・大阪・福岡で展開。",
    photo: "/photos/fujino.jpg",
    initial: "YF",
  },
  {
    name: "アントニアンズ 大我",
    nameEn: "Taiga Antonians",
    role: "COO",
    motto: "「ポテンシャルを解放する」",
    bio: "兵庫県神戸市出身。高校生キャリア雑誌Zoo創業、起業家シェアハウスZooハウス創業。コーチング事業・アントレプレナーシッププログラム提供を展開。",
    photo: "/photos/antonians.jpg",
    initial: "TA",
  },
  {
    name: "宮代 健太",
    nameEn: "Kenta Miyashiro",
    role: "CSO",
    motto: "「リアルとゲームの境界線をあいまいにする」",
    bio: "神奈川県茅ヶ崎市出身。廃校を活用したライブ・アクション・ロールプレイング「ガチ文化祭」主催。エンターテイメント・コミュニティ事業「Amuse!」を運営、7年で累計261名在籍。",
    photo: "/photos/miyashiro.jpg",
    initial: "KM",
  },
];

function PhotoOrInitial({ photo, initial, name }: { photo: string; initial: string; name: string }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="w-[200px] h-[200px] mx-auto mb-6 rounded-full border border-white/[0.06] overflow-hidden bg-gradient-to-br from-[#123563]/30 to-[#1e508c]/15 flex items-center justify-center">
      {imgError ? (
        <span className="text-2xl font-light text-white/30 tracking-[0.1em]">{initial}</span>
      ) : (
        <Image src={photo} alt={name} width={200} height={200} className="w-full h-full object-cover" onError={() => setImgError(true)} />
      )}
    </div>
  );
}

export function Team() {
  return (
    <section id="team" className="py-[120px] px-6 md:px-[60px] bg-[#0d1117]">
      <ScrollFadeIn>
        <p className="text-[11px] tracking-[0.3em] uppercase text-white/30 mb-10 max-w-[1100px] mx-auto">Team</p>
      </ScrollFadeIn>
      <div className="grid md:grid-cols-3 gap-10 max-w-[1100px] mx-auto">
        {members.map((m, i) => (
          <ScrollFadeIn key={i}>
            <div className="text-center">
              <PhotoOrInitial photo={m.photo} initial={m.initial} name={m.name} />
              <h3 className="text-lg font-semibold mb-1">{m.name}</h3>
              <p className="text-[11px] text-white/40 tracking-[0.1em] uppercase mb-4">{m.role}</p>
              <p className="text-[13px] text-[#6ea8dc] italic mb-3">{m.motto}</p>
              <p className="text-[13px] text-white/50 leading-[1.8] max-w-[300px] mx-auto">{m.bio}</p>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </section>
  );
}
