"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Navigation, Clock, Radio, Lock, Users } from "lucide-react";

const whyItems = [
  { icon: ShieldCheck, title: "Safety Certified", desc: "Fully insured chauffeurs with rigorous background verification." },
  { icon: Navigation, title: "Real-Time Routing", desc: "Dynamic traffic intelligence ensures the fastest route, always." },
  { icon: Clock, title: "Flight Monitoring", desc: "We track every flight so you're never waiting, even with delays." },
  { icon: Radio, title: "24/7 Dispatch", desc: "Live support around the clock — because luxury never sleeps." },
  { icon: Lock, title: "Full Confidentiality", desc: "Absolute discretion for executives and high-profile clients." },
  { icon: Users, title: "Family-Operated", desc: "Personal care and accountability not found in corporate chains." },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Black bg with top highlight */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cognac/60 to-transparent" />
      {/* Radial glow left */}
      <div className="absolute -left-20 top-1/3 w-[500px] h-[500px] bg-cognac/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 py-32 relative z-10">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="font-raleway text-[10px] text-cognac uppercase tracking-[0.5em] block mb-6 font-semibold">The Spring-Ford Advantage</span>
            <h2 className="font-cinzel font-bold text-pearl uppercase leading-[0.9]"
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}>
              Why<br />
              We <span className="bg-gradient-to-r from-cognac to-cognac-light bg-clip-text text-transparent">Win.</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="font-raleway text-smoke text-base leading-relaxed lg:max-w-sm self-end">
            When punctuality is non-negotiable and comfort is absolute — there is only one choice in Pennsylvania.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-onyx-border">
          {whyItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group bg-black p-10 hover:bg-gradient-to-br hover:from-black hover:to-cognac/10 transition-all duration-500 cursor-default relative overflow-hidden"
            >
              {/* Corner emerald accent */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-cognac group-hover:w-full transition-all duration-500" />

              <div className="w-11 h-11 border border-cognac/20 flex items-center justify-center text-cognac mb-7 group-hover:bg-cognac group-hover:border-cognac group-hover:text-pearl transition-all duration-300">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-sm font-bold text-pearl mb-3 uppercase tracking-[0.12em] group-hover:text-cognac-light transition-colors">
                {item.title}
              </h3>
              <p className="font-raleway text-sm text-smoke leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
