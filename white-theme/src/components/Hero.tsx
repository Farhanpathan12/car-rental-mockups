"use client";

import { motion } from "framer-motion";
import { ChevronRight, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-midnight overflow-hidden flex flex-col">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-midnight to-midnight z-0" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay z-0" />
      
      {/* Abstract Gold Decorative Lines */}
      <div className="absolute top-0 right-0 w-px h-[60%] bg-gradient-to-b from-transparent via-gold/20 to-transparent z-10 hidden xl:block" style={{ right: "12%" }} />

      <div className="relative z-20 flex-1 flex items-center mt-20 lg:mt-0">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32 w-full">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">

            {/* Left: Text Content */}
            <div className="lg:col-span-7 xl:col-span-6 relative z-30">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Tag line */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-[2px] bg-gradient-to-r from-gold to-transparent" />
                  <span className="text-sm text-gold uppercase tracking-[0.3em] font-semibold">Long Island&apos;s Premier Chauffeur</span>
                </div>

                {/* Heading */}
                <h1 className="text-7xl md:text-8xl xl:text-[7rem] font-playfair font-bold text-pearl leading-[0.95] tracking-tight mb-8">
                  The <br />
                  Science <br />
                  <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#e6c981] to-[#a38036]">
                    of Service.
                  </span>
                </h1>

                <p className="text-silver/80 text-xl leading-relaxed max-w-lg mb-12 font-light">
                  Long Island&apos;s most trusted chauffeur service. Built on two decades of uncompromised excellence, absolute discretion, and flawless punctuality.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-5 mb-16">
                  <a
                    href="#book"
                    className="group relative overflow-hidden flex items-center justify-center gap-3 px-10 py-5 bg-gold text-midnight font-bold uppercase tracking-widest text-sm transition-all duration-500 shadow-[0_0_40px_-10px_rgba(190,163,101,0.4)] hover:shadow-[0_0_60px_-15px_rgba(190,163,101,0.6)] hover:-translate-y-1"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    <span className="relative z-10">Reserve Your Ride</span>
                    <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="tel:+18005550199"
                    className="flex items-center justify-center gap-3 px-10 py-5 border border-white/10 text-pearl font-medium hover:border-gold/50 hover:bg-white/5 transition-all duration-300 backdrop-blur-md"
                  >
                    <Phone className="w-4 h-4 text-gold" />
                    <span className="tracking-wide">Call Directly</span>
                  </a>
                </div>

                {/* Inline stats - Redesigned */}
                <div className="flex items-center gap-8 md:gap-12 pt-8 border-t border-white/10">
                  <div>
                    <p className="text-4xl font-playfair font-bold text-white mb-1">20<span className="text-gold text-2xl">+</span></p>
                    <p className="text-[10px] text-silver/60 uppercase tracking-[0.2em] font-semibold">Years Active</p>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />)}
                    </div>
                    <p className="text-[10px] text-silver/60 uppercase tracking-[0.2em] font-semibold">450+ 5-Star Reviews</p>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div>
                    <p className="text-4xl font-playfair font-bold text-white mb-1">100<span className="text-gold text-2xl">%</span></p>
                    <p className="text-[10px] text-silver/60 uppercase tracking-[0.2em] font-semibold">On-Time Record</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Premium Image Frame */}
            <div className="lg:col-span-5 xl:col-span-6 relative mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative lg:ml-auto w-full max-w-[600px] aspect-[3/4] lg:aspect-[4/5]"
              >
                {/* Decorative background blocks */}
                <div className="absolute -inset-4 border border-gold/20 z-0 hidden md:block" />
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-gold/10 to-transparent blur-3xl rounded-full z-0" />

                {/* Main image container */}
                <div className="relative w-full h-full shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] z-10 overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop"
                    alt="Luxury Executive SUV"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[2s] ease-out"
                  />
                  
                  {/* Internal image shadow to blend with background */}
                  <div className="absolute inset-0 block bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.6)] pointer-events-none" />
                </div>

                {/* Floating "Since 2004" element */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-6 -left-6 md:-left-12 z-30 bg-[#0a0a0c] border border-white/10 p-6 md:p-8 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-[2px] h-12 bg-gold" />
                    <div>
                      <p className="text-xs text-silver/50 tracking-[0.2em] font-semibold mb-1 uppercase">Excellence</p>
                      <p className="text-2xl font-playfair font-bold text-white tracking-wide">Since 2004.</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
