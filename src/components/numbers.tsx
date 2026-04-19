"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(start); }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-5xl md:text-[48px] font-extralight tracking-[0.05em] bg-gradient-to-br from-white to-[#4a7fc8] bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { target: 493, suffix: "+", label: "累計支援学生数" },
  { target: 10, suffix: "+", label: "創業企業数" },
  { target: 6, suffix: "", label: "拠点都市" },
  { target: 3, suffix: "", label: "事業領域" },
];

export function Numbers() {
  return (
    <section className="py-20 px-6 md:px-[60px] bg-gradient-to-b from-[#0d1117] to-[#0f1520]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-[1100px] mx-auto text-center">
        {stats.map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
            <CountUp target={stat.target} suffix={stat.suffix} />
            <p className="text-xs text-white/40 mt-2 tracking-[0.05em]">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
