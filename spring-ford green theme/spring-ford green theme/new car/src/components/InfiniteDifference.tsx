"use client";

import { motion } from "framer-motion";
import { Shield, Target, EyeOff, ChevronRight } from "lucide-react";
import Image from "next/image";

const pillars = [
  { 
    num: "01", 
    heading: "SAFETY", 
    icon: Shield,
    text: "Meticulously vetted chauffeurs and the highest insurance coverage in the state. Every mile monitored, every journey secure." 
  },
  { 
    num: "02", 
    heading: "PRECISION", 
    icon: Target,
    text: "Uncompromised 10-minute-early arrival standard. Live flight tracking and dynamic routing for flawless timing." 
  },
  { 
    num: "03", 
    heading: "DISCRETION", 
    icon: EyeOff,
    text: "Absolute confidentiality for high-profile clients and executives. What happens in the cabin, stays in the cabin." 
  },
];

export default function InfiniteDifference() {
  return (
    <section className="bg-black py-32 relative overflow-hidden text-left">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cognac/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cognac/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 relative z-10">
        
        {/* Editorial Split Header */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-cognac" />
              <span className="font-raleway text-[11px] text-cognac uppercase tracking-[0.6em] font-bold">Uncompromised Standard</span>
            </div>
            <h2 className="font-cinzel text-pearl uppercase font-black tracking-tight leading-[0.88] mb-8"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}>
              The Spring-Ford<br />
              <span className="bg-gradient-to-r from-cognac via-cognac-light to-cognac bg-clip-text text-transparent italic">Difference.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-raleway text-smoke text-base lg:text-lg leading-relaxed max-w-sm lg:mb-4 lg:text-right"
          >
            A legacy of private transportation excellence. For those who demand more than just a ride — we provide an experience of absolute refinement.
          </motion.p>
        </div>

        {/* Feature Grid - Large Individual Cards */}
        <div className="grid lg:grid-cols-3 gap-0">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className={`group relative p-12 lg:p-14 border border-cognac/10 ${idx === 1 ? "bg-black lg:scale-105 z-20 border-cognac/25" : "bg-black"} hover:border-cognac/40 transition-all duration-500`}
            >
              <div className="absolute top-0 right-0 p-8">
                <span className="font-cinzel text-5xl font-black text-cognac/10 group-hover:text-cognac/20 transition-colors leading-none">{p.num}</span>
              </div>
              
              <div className="w-14 h-14 border border-cognac/30 flex items-center justify-center mb-10 group-hover:bg-cognac transition-all duration-500">
                <p.icon className="w-6 h-6 text-cognac group-hover:text-onyx" />
              </div>
              
              <h3 className="font-cinzel text-2xl font-bold text-pearl mb-6 tracking-[0.2em]">{p.heading}</h3>
              <p className="font-raleway text-smoke text-sm leading-relaxed mb-10 group-hover:text-pearl/70 transition-colors">
                {p.text}
              </p>
              
              <a href="#about" className="inline-flex items-center gap-2 text-[10px] font-raleway font-bold text-cognac uppercase tracking-[0.3em] overflow-hidden group/link">
                Learn More
                <ChevronRight className="w-3.5 h-3.5 translate-x-0 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
