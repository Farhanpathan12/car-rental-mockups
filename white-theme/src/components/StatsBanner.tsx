"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 450, suffix: "+", label: "5-Star Reviews" },
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
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  if (display) return <span ref={ref}>{inView ? display : "0"}</span>;
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsBanner() {
  return (
    <section className="bg-charcoal py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`flex flex-col items-center text-center py-6 ${
                idx < stats.length - 1 ? "lg:border-r border-white/10" : ""
              }`}
            >
              <div className="text-5xl lg:text-6xl font-playfair font-bold text-gold mb-2 tabular-nums">
                <AnimatedCounter {...stat} />
              </div>
              <div className="text-xs text-silver/60 uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
