"use client";

import { motion } from "framer-motion";
import { ClipboardList, Car, MapPin, Smile } from "lucide-react";

const steps = [
  { number: "01", icon: ClipboardList, title: "Reserve", desc: "Book online or via phone in 2 minutes. Confirmation is instant." },
  { number: "02", icon: Car, title: "We Prepare", desc: "Detailed, climate-set, and briefed — your vehicle is ready before you are." },
  { number: "03", icon: MapPin, title: "On Arrival", desc: "Your dedicated chauffeur arrives 10 minutes early, every single time." },
  { number: "04", icon: Smile, title: "Enjoy", desc: "Settle in, relax, connect — the journey is entirely yours." },
];

export default function ProcessSteps() {
  return (
    <section className="bg-onyx py-28 overflow-hidden relative border-t border-onyx-border">

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-raleway text-[10px] text-cognac uppercase tracking-[0.5em] font-semibold block mb-5">Simple & Seamless</span>
          <h2 className="font-cinzel font-bold text-pearl uppercase leading-[0.9]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            How It <span className="text-cognac">Works.</span>
          </h2>
        </div>

        {/* Horizontal step list with connecting line */}
        <div className="relative">
          {/* Horizontal connecting line */}
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-px bg-cognac/35" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon circle */}
                <div className="relative mb-8 w-[104px] h-[104px] bg-cognac border-2 border-cognac-light/30 group-hover:bg-cognac-light flex items-center justify-center transition-all duration-400 shadow-xl shadow-cognac/10">
                  <step.icon className="w-8 h-8 text-onyx" />
                  {/* Step badge */}
                  <span className="absolute -top-3 -right-3 w-7 h-7 bg-onyx text-cognac text-[9px] font-raleway font-bold flex items-center justify-center shadow-lg">
                    {idx + 1}
                  </span>
                </div>

                <p className="font-raleway text-[8px] text-cognac/50 uppercase tracking-[0.4em] mb-3">{step.number}</p>
                <h3 className="font-cinzel text-lg font-bold text-pearl uppercase mb-3 group-hover:text-cognac transition-colors">
                  {step.title}
                </h3>
                <p className="font-raleway text-sm text-smoke leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
