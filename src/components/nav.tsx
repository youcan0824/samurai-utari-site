"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#philosophy", jp: "理念", en: "Philosophy" },
    { href: "#vision", jp: "景色", en: "Vision" },
    { href: "#mission", jp: "使命", en: "Mission" },
    { href: "#value", jp: "規範", en: "Value" },
    { href: "#service", jp: "事業", en: "Service" },
    { href: "#team", jp: "UTARI", en: "Team" },
    { href: "#contact", jp: "連絡", en: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-[60px] py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[#e8dfc9]/95 backdrop-blur-xl border-b border-[#1c1e2b]/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="SAMURAI UTARI"
            width={180}
            height={32}
            className="h-8 md:h-10 w-auto [filter:brightness(0.2)]"
            priority
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 lg:gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex flex-col items-center text-[#1c1e2b]/75 hover:text-[#123563] transition-colors py-1"
            >
              <span
                className="text-[13px] md:text-sm tracking-[0.18em]"
                style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
              >
                {link.jp}
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#1c1e2b]/35 mt-0.5 group-hover:text-[#123563]/60 transition-colors">
                {link.en}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span
            className={`w-6 h-px bg-[#1c1e2b] transition-transform ${
              menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-[#1c1e2b] transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-[#1c1e2b] transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-4 flex flex-col gap-5 border-t border-[#1c1e2b]/10 pt-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#1c1e2b]/80 text-base hover:text-[#123563] flex items-baseline gap-3"
              onClick={() => setMenuOpen(false)}
            >
              <span
                className="tracking-[0.15em]"
                style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
              >
                {link.jp}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#1c1e2b]/35">
                {link.en}
              </span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
