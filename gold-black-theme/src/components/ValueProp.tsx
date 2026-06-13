"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Diamond } from "lucide-react";

const brandingItems = [
  {
    id: "executive",
    title: "Executive Class",
    subtitle: "For the C-Suite",
    desc: "Maximize productivity in a mobile obsidian sanctuary. Designed for those whose time is their most precious asset, our executive service is more than a ride — it's a competitive advantage.",
    items: [
      "High-speed 5G WiFi",
      "Punctuality Guaranteed",
      "Full Confidentiality",
    ],
    image: "/branding/executive_woman_luxury_1775550432516.png",
  },
  {
    id: "family",
    title: "Chauffeur On-Demand",
    subtitle: "Family & Vacation",
    desc: "Elite travel for every generation. Experience seamless family coordination with spacious vehicle options and white-glove service that handles every detail of your journey.",
    items: [
      "Ample Luggage Space",
      "Premium Car Seats",
      "Hassle-Free Arrival",
    ],
    image: "/branding/chauffeur_welcome_luxury_1775550451390.png",
  }
];

export default function ValueProp() {
  return (
    <section id="values" className="bg-void py-24 relative overflow-hidden">
      {/* Subtle Background Detail */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Centered) */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-gold/40" />
            <span className="text-[10px] text-gold uppercase tracking-[0.6em] font-black">
              Tailored Excellence
            </span>
            <div className="w-8 h-px bg-gold/40" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-playfair font-bold text-ivory leading-none"
          >
            The Gold<br />
            <span className="italic text-gold-gradient">Standard.</span>
          </motion.h2>
        </div>

        {/* 2-Column Premium Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {brandingItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col bg-charcoal/30 border border-white/5 overflow-hidden rounded-2xl"
            >
              {/* Image Container (Fixed Aspect) */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s] brightness-[0.75] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6">
                   <span className="bg-obsidian/60 backdrop-blur-md border border-gold/20 px-3 py-1.5 text-[9px] text-gold uppercase tracking-widest font-black">
                     {item.subtitle}
                   </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-10 lg:p-12 flex flex-col gap-6 relative">
                 {/* Top Glow */}
                 <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent group-hover:via-gold/40 transition-all duration-700" />
                 
                 <div>
                    <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-ivory mb-5 group-hover:text-gold transition-colors duration-500 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-silver/50 text-sm leading-relaxed font-light mb-8 italic">
                      &quot;{item.desc}&quot;
                    </p>
                 </div>

                 {/* List of points */}
                 <div className="space-y-4 mb-8">
                    {item.items.map((point) => (
                      <div key={point} className="flex items-center gap-3">
                         <Diamond className="w-2.5 h-2.5 text-gold/40 fill-gold/20" />
                         <span className="text-[11px] text-silver/70 font-bold uppercase tracking-widest leading-none">
                           {point}
                         </span>
                      </div>
                    ))}
                 </div>

                 <motion.a
                   href="#book"
                   className="inline-flex items-center gap-5 text-[10px] font-black text-ivory uppercase tracking-[0.4em] group/btn self-start"
                 >
                   Reserve Service
                   <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center group-hover/btn:bg-gold transition-all duration-500">
                     <ArrowRight className="w-4 h-4 text-gold group-hover/btn:text-void" />
                   </div>
                 </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Detail */}
        <div className="mt-20 text-center">
           <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold/20 to-transparent mx-auto mb-8" />
           <p className="text-silver/40 text-[9px] uppercase tracking-[0.4em]">Available across Long Island & NYC</p>
        </div>
      </div>
    </section>
  );
}
