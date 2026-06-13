"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Calendar, Users, Star } from "lucide-react";

const stats = [
  { id: 1, value: 20,    suffix: "+", label: "Years Mastery", icon: Calendar },
  { id: 2, value: 10,    suffix: "k+", label: "Elite Journeys", icon: Users },
  { id: 3, value: 98,    suffix: "%", label: "Retention Rate", icon: ShieldCheck },
  { id: 4, value: 24,    suffix: "/7", label: "Global Dispatch", icon: Star },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); } 
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsBanner() {
  return (
    <section className="bg-void border-y border-white/5 relative overflow-hidden">
      {/* Decorative center glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(201,168,76,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 items-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`flex flex-col items-center group relative ${
                idx !== stats.length - 1 ? "lg:border-r lg:border-white/5" : ""
              }`}
            >
              <div className="mb-4">
                 <stat.icon className="w-4 h-4 text-gold/40 group-hover:text-gold transition-colors duration-500" strokeWidth={1} />
              </div>
              
              <div className="text-4xl lg:text-5xl font-playfair font-bold text-ivory mb-2 tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              
              <div className="relative">
                 <span className="text-[9px] text-silver/40 uppercase tracking-[0.4em] font-black group-hover:text-gold/60 transition-colors duration-500">
                   {stat.label}
                 </span>
                 <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-gold/30 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
