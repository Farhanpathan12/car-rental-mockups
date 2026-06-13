"use client";

import { motion } from "framer-motion";
import { ChevronRight, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-midnight overflow-hidden flex items-center">
      {/* Background Image user provided */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Gemini_Generated_Image_dszb88dszb88dszb-Picsart-AiImageEnhancer.png"
          alt="Royal Chauffeur Service"
          className="w-full h-full object-cover object-center scale-[1.02] animate-[slowZoom_20s_infinite_alternate]"
        />
        {/* Soft, deep overlays for readability without crushing the image entirely */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/95 via-deep-blue/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(10,25,49,1)_0%,_transparent_60%)] z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Elegant Prestige Tagline */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-[10px] text-gold uppercase tracking-[0.4em] font-bold">
                The Absolute Gold Standard
              </span>
            </div>

            {/* Luxurious Heading - Scaled Down Appropriately */}
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-playfair font-bold text-pearl leading-[1.05] tracking-tight mb-8">
              Royal <br />
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#C6A75E] via-[#eed8a1] to-[#C6A75E]">
                Journeys.
              </span>
            </h1>

            {/* Subtitle - Professional Sizing */}
            <p className="text-silver/80 text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-light">
              Redefining executive travel through the alchemy of royal blue elegance and liquid gold luxury.
            </p>

            {/* CTAs - Refined Proportions */}
            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <a
                href="#book"
                className="group relative overflow-hidden flex items-center justify-center gap-4 px-10 py-4 bg-gold text-midnight font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-300 shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.6)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">Reserve Excellence</span>
                <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+18005550199"
                className="flex items-center justify-center gap-4 px-10 py-4 border border-gold/40 text-pearl font-bold uppercase tracking-[0.2em] text-[10px] hover:border-gold hover:bg-gold/10 transition-all duration-300 backdrop-blur-md group"
              >
                <Phone className="w-4 h-4 text-gold group-hover:rotate-12 transition-transform" />
                <span>Concierge Line</span>
              </a>
            </div>

            {/* Premium Stats - Elegant */}
            <div className="flex flex-wrap items-center gap-10 pt-10 border-t border-gold/15">
              <div className="flex flex-col">
                <span className="text-3xl font-playfair font-bold text-white mb-1">98<span className="text-gold text-base">%</span></span>
                <span className="text-[9px] text-silver/50 uppercase tracking-[0.3em] font-semibold">Retention</span>
              </div>
              <div className="w-px h-10 bg-gold/20 hidden sm:block" />
              <div className="flex flex-col">
                <div className="flex gap-1.5 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />)}
                </div>
                <span className="text-[9px] text-silver/50 uppercase tracking-[0.3em] font-semibold">Elite Rated</span>
              </div>
              <div className="w-px h-10 bg-gold/20 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-3xl font-playfair font-bold text-white mb-1">24<span className="text-gold text-base">/7</span></span>
                <span className="text-[9px] text-silver/50 uppercase tracking-[0.3em] font-semibold">Dispatch</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
