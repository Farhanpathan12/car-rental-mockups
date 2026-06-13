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
        
        {/* Left — Dark Panel */}
        <div className="bg-midnight px-12 py-24 lg:px-20 flex flex-col justify-center relative overflow-hidden">
          {/* Background typography */}
          <span className="absolute -left-10 top-1/2 -translate-y-1/2 text-[18rem] font-playfair font-bold text-white/[0.02] leading-none select-none pointer-events-none">
            WHY
          </span>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative z-10"
          >
            <p className="text-xs text-gold uppercase tracking-widest mb-6 font-semibold">The Spring-Ford Advantage</p>
            <h2 className="text-5xl lg:text-7xl font-playfair font-bold text-pearl leading-[0.95] mb-8">
              First.<br />
              <span className="italic text-gold">Always.</span>
            </h2>
            <p className="text-silver/60 text-lg leading-relaxed max-w-sm">
              When punctuality is non-negotiable, when comfort is non-compromise, and when experience truly matters — there is only one choice.
            </p>
            <div className="mt-10 w-16 h-px bg-gold" />
          </motion.div>
        </div>

        {/* Right — Light Panel with 6 items */}
        <div className="bg-background px-12 py-24 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {whyItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="group flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-playfair font-bold text-lg text-foreground group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-softgray leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
