"use client";

import { motion } from "framer-motion";
import { ClipboardList, Car, MapPin, Smile } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Secure",
    desc: "Boutique booking via our secure portal or concierge line.",
  },
  {
    number: "02",
    icon: Car,
    title: "Prepare",
    desc: "Elite detailing and chauffeur briefing 2 hours prior.",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Arrive",
    desc: "On-site 15 minutes early, standing by for your departure.",
  },
  {
    number: "04",
    icon: Smile,
    title: "Transit",
    desc: "Complete privacy in a moving, luxury sanctuary.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-28 bg-obsidian relative overflow-hidden border-t border-gold/10">
      {/* Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#C9A84C_0.5px,transparent_0.5px)] bg-[size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header (Simple) */}
        <div className="mb-24 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] text-gold uppercase tracking-[0.5em] font-black mb-4"
            >
              Simple & Seamless
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-playfair font-bold text-ivory"
            >
              How It <span className="italic text-gold font-normal">Works.</span>
            </motion.h2>
        </div>

        {/* Simplified Process Grid */}
        <div className="relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
             {steps.map((step, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: idx * 0.1 }}
                 className="flex flex-col items-center text-center group"
               >
                  {/* Icon Node */}
                  <div className="relative mb-10">
                     <div className="w-24 h-24 bg-carbon border border-gold/15 rounded-full flex items-center justify-center shadow-lg group-hover:border-gold/40 transition-all duration-500">
                        <step.icon className="w-8 h-8 text-gold stroke-[1.2]" />
                     </div>
                     {/* Floating Step Number */}
                     <span className="absolute -top-1 -right-1 text-[9px] font-black text-obsidian bg-gold w-6 h-6 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(201,168,76,0.3)]">
                        {step.number}
                     </span>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-playfair font-bold text-ivory mb-4 group-hover:text-gold transition-colors duration-400">
                    {step.title}
                  </h3>
                  <p className="text-silver/50 text-sm leading-relaxed font-light px-4">
                    {step.desc}
                  </p>
               </motion.div>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
}
