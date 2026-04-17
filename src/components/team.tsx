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
    bio: "兵庫県神戸市出身。広島大学在学中、キャリア支援NPOの地方支部立ち上げを主導し、3名の組織を15名規模に拡大、年間300名の地方大学生にキャリアの入口を届ける。2021年、新卒入社した東証一部上場企業を1ヶ月で退職し独立、同年に広島で若者起業家シェアハウスを創業し、累計200名超の大学生が全国から集う拠点を築く。2022年より全国4拠点で展開される審査制エンタメ教育コミュニティに経営参画し、北海道支部のゼロイチ立ち上げを担う。2023年より新規事業コンサルタントとして、外資系製薬会社のヘルスケアサービス立ち上げ、大手自動車メーカーの新規事業リーダー（281自治体の調査を統括）、大手メーカーの人事制度改革PMO（約1年）など、調査・設計・実行を一気通貫で担う新規事業開発に従事。2024年に株式会社サムライウタリを設立し、「人づくり・場づくり・事業づくり」の3軸で現在取り組んでいる。",
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
