export function CompanyInfo() {
  const rows = [
    { label: "社名", value: "株式会社サムライウタリ" },
    { label: "英文社名", value: "SAMURAI UTARI Inc." },
    { label: "設立", value: "20XX年" },
    { label: "代表", value: "藤野 悠生" },
    { label: "所在地", value: "北海道" },
    { label: "事業内容", value: "AI研修事業 / キャリア教育事業" },
  ];
  return (
    <section className="py-[60px] px-6 md:px-[60px] bg-[#0a0e14]/95">
      <table className="max-w-[800px] mx-auto w-full border-collapse">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/[0.06]">
              <th className="text-left py-4 px-3 md:px-6 text-xs font-normal text-white/40 tracking-[0.05em] w-[100px] md:w-[160px]">{row.label}</th>

              <td className="py-4 px-3 md:px-6 text-sm text-white/70">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
