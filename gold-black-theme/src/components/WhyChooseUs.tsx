"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Navigation, Clock, Radio, Lock, Users } from "lucide-react";

const whyItems = [
  {
    icon: ShieldCheck,
    title: "Safety Certified",
    desc: "Fully insured chauffeurs with rigorous background verification and elite training.",
  },
  {
    icon: Navigation,
    title: "Real-Time Routing",
    desc: "Dynamic traffic intelligence ensures the fastest route, always — no guesswork.",
  },
  {
    icon: Clock,
    title: "Flight Monitoring",
    desc: "We track every flight so you're never left waiting, even with hours of delay.",
  },
  {
    icon: Radio,
    title: "24/7 Dispatch",
    desc: "Live concierge support around the clock — because true luxury never sleeps.",
  },
  {
    icon: Lock,
    title: "Full Confidentiality",
    desc: "Absolute discretion for executives, VIPs and high-profile clients.",
  },
  {
    icon: Users,
    title: "Family-Operated",
    desc: "Personal accountability and warmth not found in any corporate chain.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">

        {/* Left — Obsidian panel */}
        <div className="bg-obsidian px-12 py-32 lg:px-24 flex flex-col justify-center relative overflow-hidden border-r border-gold/8">
          {/* Large ghost typography */}
          <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-[16rem] font-playfair font-bold text-gold/[0.025] leading-none select-none pointer-events-none">
            WHY
          </span>
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-[1px] bg-gradient-to-r from-gold to-gold-bright" />
              <p className="text-[10px] text-gold uppercase tracking-[0.45em] font-bold">The Elite Edge</p>
            </div>
            <h2 className="text-5xl lg:text-8xl font-playfair font-bold text-ivory leading-[0.9] mb-14">
              Driven by<br />
              <span className="italic font-normal text-gold-gradient">Perfection.</span>
            </h2>
            <p className="text-silver/45 text-xl leading-relaxed max-w-sm font-light">
              When punctuality is non-negotiable and comfort is absolute, there is only one choice.
            </p>

            {/* Gold decorative element */}
            <div className="flex items-center gap-3 mt-14">
              <div className="w-2 h-2 bg-gold rotate-45" />
              <div className="w-32 h-[1px] bg-gradient-to-r from-gold/50 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Right — Charcoal panel with grid */}
        <div className="bg-charcoal px-12 py-32 lg:px-20 relative overflow-hidden">
          {/* subtle dot texture */}
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,_#C9A84C_1px,_transparent_0)] bg-[size:36px_36px]" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-14">
            {whyItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: idx * 0.08, ease: "easeOut" }}
                className="group flex flex-col gap-5"
              >
                <div className="w-14 h-14 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-obsidian group-hover:border-gold transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]">
                  <item.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl text-ivory mb-3 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-silver/40 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
