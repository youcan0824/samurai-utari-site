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
    { href: "#about", label: "About" },
    { href: "#service", label: "Service" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-[60px] py-5 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1117]/85 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="SAMURAI UTARI" width={120} height={20} />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/60 text-xs tracking-[0.1em] uppercase hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span className={`w-5 h-px bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`w-5 h-px bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-px bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-white/[0.06] pt-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/60 text-sm tracking-[0.1em] uppercase hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
