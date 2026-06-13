"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 450, suffix: "+", label: "Five-Star Reviews" },
  { value: 10000, suffix: "+", label: "Clients Served", display: "10K+" },
  { value: 100, suffix: "%", label: "On-Time Guarantee" },
];

function AnimatedCounter({ value, suffix, display }: { value: number; suffix: string; display?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  if (display) return <span ref={ref}>{inView ? display : "0"}</span>;
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsBanner() {
  return (
    <section className="bg-black relative overflow-hidden">
      {/* Dual-tone: black base */}
      <div className="absolute inset-0 bg-black" />
      {/* Emerald center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_50%,rgba(30,122,72,0.2),transparent)] pointer-events-none" />
      {/* Top/bottom emerald lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cognac/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cognac/50 to-transparent" />

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col items-center text-center py-14 px-8 relative group ${
                idx < stats.length - 1 ? "border-r border-onyx-border" : ""
              }`}
            >
              {/* Hover emerald glow */}
              <div className="absolute inset-0 bg-cognac/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="font-cinzel text-5xl lg:text-6xl font-bold text-cognac mb-3 tabular-nums relative z-10">
                <AnimatedCounter {...stat} />
              </div>
              <div className="font-raleway text-[9px] text-ash/40 uppercase tracking-[0.35em] font-semibold relative z-10">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
