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
    bio: "兵庫県神戸市生まれ、広島大学経済学部卒。新卒で東証一部上場企業を1ヶ月で退職し独立。以降「人づくり・場づくり・事業づくり」の3軸で実績を重ねる。キャリア支援NPOの広島支部を3名から15名へ拡大、年間300名の地方大学生にキャリアの入口を届け、若者起業家シェアハウス「もみじ」を創業（累計200名超）。東京のスタートアップ支援ファームZeronityでは、外資系製薬会社の新規ヘルスケアサービスのコンセプト検証〜GTM戦略立案、大手自動車メーカーグループ新規事業のPL（281自治体の施策データベース構築を統括）、月額120万円規模のデジタルマーケティング運用まで、調査・設計・実行を一気通貫で担当。29歳、まだ途中。",
    photo: "/photos/fujino.webp",
    initial: "YF",
  },
  {
    name: "アントニアンズ 大我",
    nameEn: "Taiga Antonians",
    role: "COO",
    motto: "「ポテンシャルを解放する」",
    bio: "兵庫県神戸市出身。高校生キャリア雑誌Zoo創業、起業家シェアハウスZooハウス創業。コーチング事業・アントレプレナーシッププログラム提供を展開。",
    photo: "/photos/antonians.webp",
    initial: "TA",
  },
  {
    name: "宮代 健太",
    nameEn: "Kenta Miyashiro",
    role: "CSO",
    motto: "「人生を無限で表現する」",
    bio: "神奈川県茅ヶ崎市出身。日本大学在学中、アジア最大級の留学エージェンシーや社会課題解決を目的としたNPO法人と提携し、国際協力団体リーダー層への指導・組織構築プログラムを自ら開発し、法人含め約30団体を輩出。その後、数百名単位の会員制ビジネスモデルのマーケティングを専門領域とし、地方の起業スクールにてサービス・カリキュラム改善に従事。2018年よりエンタメ領域での商品開発・プラットフォーム構築に取り組み、北海道栗山町、千葉県勝浦市、兵庫県丹波市、奈良県下市町、福岡県糸島市、熊本県芦北町などで若手人材の宿泊を目的とした継続的な誘致に現在取り組んでいる。",
    photo: "/photos/miyashiro.png",
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
