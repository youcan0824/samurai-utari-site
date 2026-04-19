export function CompanyInfo() {
  const rows = [
    { label: "社名", value: "株式会社サムライウタリ" },
    { label: "英文社名", value: "SAMURAI UTARI Inc." },
    { label: "設立", value: "2024年4月26日" },
    { label: "代表取締役", value: "藤野 悠生" },
    { label: "所在地", value: "北海道札幌市白石区栄通6丁目8-17" },
    {
      label: "事業内容",
      value:
        "1. アウトソーシング事業の受託及び請負\n2. 人材の育成、職業適性、能力開発のための教育及びカウンセリング業務\n3. 研修、セミナー、講演会、講習会等の各種催事の企画、立案、実施、運営及びそれらに関するコンサルティング業務\n4. 前各号に附帯関連する一切の業務",
    },
  ];

  return (
    <section className="py-[120px] md:py-[160px] px-6 md:px-[60px] bg-[#faf8f3]">
      <div className="max-w-[900px] mx-auto">
        <p className="text-[13px] tracking-[0.4em] text-[#1c1e2b]/45 mb-10">
          <span
            className="text-[#123563] font-medium"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            会社概要
          </span>
          <span className="text-[10px] ml-3 uppercase text-[#1c1e2b]/30">
            / Company
          </span>
        </p>
        <table className="w-full border-collapse">
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-[#1c1e2b]/10">
                <th
                  className="text-left py-5 pr-3 md:pr-6 text-[12px] md:text-[13px] font-normal text-[#1c1e2b]/55 tracking-[0.15em] w-[110px] md:w-[180px] align-top"
                  style={{
                    fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif',
                  }}
                >
                  {row.label}
                </th>
                <td
                  className="py-5 px-3 md:px-6 text-[13px] md:text-sm text-[#1c1e2b]/85 whitespace-pre-line leading-[1.9]"
                  style={{
                    fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif',
                  }}
                >
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
