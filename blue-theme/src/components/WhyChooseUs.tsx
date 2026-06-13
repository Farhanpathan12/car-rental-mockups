"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Navigation, Clock, Radio, Lock, Users } from "lucide-react";

const whyItems = [
  {
    icon: ShieldCheck,
    title: "Safety Certified",
    desc: "Fully insured chauffeurs with rigorous background verification.",
  },
  {
    icon: Navigation,
    title: "Real-Time Routing",
    desc: "Dynamic traffic intelligence ensures the fastest route, always.",
  },
  {
    icon: Clock,
    title: "Flight Monitoring",
    desc: "We track every flight so you're never waiting, even with delays.",
  },
  {
    icon: Radio,
    title: "24/7 Dispatch",
    desc: "Live support around the clock—because luxury never sleeps.",
  },
  {
    icon: Lock,
    title: "Full Confidentiality",
    desc: "Absolute discretion for executives and high-profile clients.",
  },
  {
    icon: Users,
    title: "Family-Operated",
    desc: "Personal care and accountability not found in corporate chains.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        
        {/* Left — Royal Blue Panel */}
        <div className="bg-royal-blue px-12 py-32 lg:px-24 flex flex-col justify-center relative overflow-hidden border-r border-gold/10">
          {/* Background typography */}
          <span className="absolute -left-10 top-1/2 -translate-y-1/2 text-[18rem] font-playfair font-bold text-white/[0.03] leading-none select-none pointer-events-none">
            WHY
          </span>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-gold" />
              <p className="text-xs text-gold uppercase tracking-[0.4em] font-bold font-sans">The Elite Edge</p>
            </div>
            <h2 className="text-5xl lg:text-8xl font-playfair font-bold text-pearl leading-[0.9] mb-12">
              Driven by<br />
              <span className="italic text-gold font-normal">Perfection.</span>
            </h2>
            <p className="text-silver/50 text-xl leading-relaxed max-w-sm font-light">
              When punctuality is non-negotiable and comfort is absolute, there is only one choice.
            </p>
          </motion.div>
        </div>

        {/* Right — Deep Blue Panel with 6 items */}
        <div className="bg-deep-blue px-12 py-32 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
            {whyItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                className="group flex flex-col gap-5"
              >
                <div className="w-14 h-14 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-midnight transition-all duration-500 rounded-sm">
                  <item.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-2xl text-pearl mb-3 group-hover:text-gold transition-colors tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-silver/40 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
