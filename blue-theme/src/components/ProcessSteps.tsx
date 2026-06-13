"use client";

import { motion } from "framer-motion";
import { ClipboardList, Car, MapPin, Smile } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Reserve Your Ride",
    desc: "Book online or via phone in under 2 minutes. We'll confirm immediately.",
  },
  {
    number: "02",
    icon: Car,
    title: "We Prepare",
    desc: "Your vehicle is detailed, pre-cooled or heated, and your chauffeur is briefed.",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Chauffeur Arrives",
    desc: "Your dedicated chauffeur arrives 10 minutes early — every single time.",
  },
  {
    number: "04",
    icon: Smile,
    title: "Enjoy the Ride",
    desc: "Relax in pure luxury. WiFi, water, and silence — on your terms.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-32 bg-deep-blue relative overflow-hidden border-t border-gold/5">
      {/* Subtle gold grid background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,_var(--color-gold)_1px,_transparent_1px),_linear-gradient(to_bottom,_var(--color-gold)_1px,_transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs text-gold uppercase tracking-[0.4em] mb-6 font-bold"
          >
            Simple & Seamless
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-playfair font-bold text-pearl leading-none"
          >
            How It <span className="italic text-gold font-normal">Works.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting line with gold gradient — desktop only */}
          <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step circle with royal blue & gold styling */}
                <div className="relative mb-10">
                  <div className="w-32 h-32 rounded-sm border border-gold/20 bg-royal-blue/40 backdrop-blur-xl flex items-center justify-center shadow-2xl group-hover:border-gold/60 group-hover:bg-royal-blue/60 transition-all duration-700">
                    <step.icon className="w-10 h-10 text-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-3 -right-3 text-[10px] font-black text-midnight bg-gold w-8 h-8 rounded-full flex items-center justify-center shadow-lg uppercase tracking-tighter">
                    {idx + 1}
                  </span>
                </div>

                <p className="text-[10px] tracking-[0.3em] text-gold uppercase mb-3 font-bold">{step.number}</p>
                <h3 className="text-2xl font-playfair font-bold text-pearl mb-4 tracking-wide group-hover:text-gold transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-sm text-silver/40 leading-relaxed font-medium px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
