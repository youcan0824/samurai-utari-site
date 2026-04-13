export function Footer() {
  return (
    <footer className="py-10 px-6 md:px-[60px] bg-[#0a0e14] border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[11px] text-white/30 tracking-[0.05em]">&copy; 2026 SAMURAI UTARI Inc. All rights reserved.</p>
        <div className="flex gap-5">
          {[{ label: "X", href: "#" }, { label: "note", href: "#" }, { label: "LINE", href: "#" }].map((link) => (
            <a key={link.label} href={link.href} className="text-xs text-white/30 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">{link.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
