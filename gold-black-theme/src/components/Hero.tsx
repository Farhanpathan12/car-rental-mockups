"use client";

import { motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-obsidian overflow-hidden flex items-center">

      {/* Elite-Fleet Backdrop */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/Gemini_Generated_Image_dszb88dszb88dszb-Picsart-AiImageEnhancer.png"
          alt="Spring-Ford Luxury Chauffeur"
          className="w-full h-full object-cover object-center brightness-[0.8] contrast-[1.05]"
        />
        {/* Soft Side-Fade Stage */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[55%] bg-gradient-to-r from-obsidian via-obsidian/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10" />
      </div>

      {/* Content Area: Left Stage Column */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-10">
        <div className="max-w-2xl">
          
          {/* Subtle Tagline Accent */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-10 h-[1px] bg-gold" />
            <span className="text-[10px] text-gold uppercase tracking-[0.5em] font-black">
              Established 2005
            </span>
          </motion.div>

          {/* Catalog-Scale Premium Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-ivory leading-[1.05] tracking-tight mb-8"
          >
            The Dark Standard <br />
            <span className="italic font-normal text-gold-gradient block mt-2">
               Of Executive Travel.
            </span>
          </motion.h1>

          {/* Understated Executive Copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-silver/60 text-base md:text-lg font-light max-w-md mb-14 leading-relaxed"
          >
            Experience arrival redefined. Spring-Ford provides an exclusive obsidian sanctuary for those who demand uncompromised perfection in every detail.
          </motion.p>

          {/* Elite Interaction Unit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-8"
          >
            <a
              href="#book"
              className="group h-14 px-12 flex items-center justify-center bg-gold text-obsidian font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500 rounded-sm shadow-[0_15px_40px_rgba(201,168,76,0.25)] hover:-translate-y-1"
            >
              Reserve Excellence <ChevronRight className="w-4 h-4 ml-6 group-hover:translate-x-2 transition-transform" />
            </a>
            
            <a
              href="tel:+18005550199"
              className="group h-14 px-10 flex items-center justify-center border border-white/10 hover:border-gold/30 text-ivory font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-500 rounded-sm backdrop-blur-md"
            >
               <Phone className="w-4 h-4 text-gold mr-4" />
               <span>Private Concierge</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Metric Hint (Vertical) */}
      <div className="absolute right-12 bottom-24 hidden xl:block overflow-hidden h-32">
         <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: "-100%" }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="text-[9px] text-ivory/20 uppercase tracking-[0.8em] font-black flex flex-col gap-24 whitespace-nowrap rotate-[-90deg] origin-right"
         >
            <span>Punctuality</span>
            <span>Discretion</span>
            <span>Opulence</span>
         </motion.div>
      </div>

      {/* Subtle Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-6 flex items-center gap-3"
      >
        <div className="w-8 h-px bg-gold/30" />
        <span className="text-[8px] text-gold/50 uppercase tracking-[0.5em]">Explore Fleet</span>
      </motion.div>

    </section>
  );
}
