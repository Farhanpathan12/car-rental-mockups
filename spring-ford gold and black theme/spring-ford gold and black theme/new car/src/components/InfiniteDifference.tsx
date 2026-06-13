"use client";

import { motion } from "framer-motion";
import { Award, History, Gem, Star, ArrowRight } from "lucide-react";
import Image from "next/image";

const philosophyItems = [
  {
    icon: Award,
    title: "Safety & Discretion",
    desc: "Rigorous vehicle maintenance and elite-certified chauffeurs ensure absolute peace of mind.",
    color: "gold",
  },
  {
    icon: History,
    title: "Legacy of Reliability",
    desc: "A 95% client retention rate built over two decades of uncompromised performance.",
    color: "gold",
  },
];

const marqueeWords = ["Punctuality", "Elegance", "Discretion", "Opulence", "Prestige"];

export default function InfiniteDifference() {
  return (
    <section id="philosophy" className="py-32 lg:py-48 bg-void relative overflow-hidden">
      
      {/* Background Ghost Marquee (Texture) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.02]">
         <div className="flex animate-marquee whitespace-nowrap text-[35rem] font-playfair font-black text-ivory">
            { marqueeWords.map((word, i) => (
              <span key={i} className="mx-20">{word}</span>
            ))}
            { marqueeWords.map((word, i) => (
              <span key={i} className="mx-20">{word}</span>
            ))}
         </div>
      </div>

      {/* Decorative Gold Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          
          {/* Magazine Image System */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[650px] lg:h-[750px] w-full rounded-2xl overflow-hidden border border-white/5"
            >
              <Image 
                src="/branding/matte_black_luxury_spotlight_1775550993912.png" 
                alt="Matte Black Luxury Chauffeur" 
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-[3s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Overlapping Detail Image (Compact Pop) */}
            <motion.div 
               initial={{ opacity: 0, x: 30, y: 30 }}
               whileInView={{ opacity: 1, x: 0, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
               className="absolute -bottom-16 -right-16 w-52 h-64 hidden xl:block bg-charcoal rounded-xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border border-white/10 z-20"
            >
               <Image 
                  src="/branding/luxury_interior_detail_premium_1775551019056.png" 
                  alt="Interior details" 
                  fill
                  className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
               <div className="absolute bottom-4 left-4">
                  <span className="text-[8px] text-ivory font-black uppercase tracking-widest bg-gold px-2.5 py-1 rounded-sm shadow-xl">
                    Detail Case
                  </span>
               </div>
            </motion.div>

            {/* Premium Stats Badge */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="absolute top-12 left-12 p-8 bg-charcoal/80 backdrop-blur-2xl border border-gold/20 rounded-2xl shadow-2xl z-20"
            >
               <div className="flex flex-col items-center gap-1">
                  <Star className="w-4 h-4 text-gold mb-2" fill="currentColor" />
                  <span className="text-4xl lg:text-5xl font-playfair font-black text-ivory leading-none">20</span>
                  <span className="text-[8px] text-gold uppercase font-black tracking-widest text-center leading-tight">Years of<br />Excellence</span>
               </div>
            </motion.div>
          </div>

          {/* Clean Elite Typography Block */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-px bg-gold" />
              <span className="text-[10px] text-gold uppercase tracking-[0.6em] font-black">
                Our Philosophy
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl lg:text-8xl font-playfair font-bold text-ivory leading-[0.95] mb-12"
            >
              The Art of<br />
              <span className="italic text-gold-gradient">Arriving.</span>
            </motion.h2>

            <p className="text-silver/60 text-lg leading-relaxed mb-16 font-light max-w-lg">
              We understand that the journey is just as important as the destination. For over two decades, we have dedicated ourselves to perfecting the nuanced art of high-end transportation — black on every level.
            </p>

            {/* Luxury Point Checklist */}
            <div className="grid grid-cols-1 gap-12 mb-20">
              {philosophyItems.map((item, idx) => (
                <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: 0.1 * idx }}
                   className="flex gap-8 group"
                >
                   <div className="w-14 h-14 border border-gold/15 flex items-center justify-center shrink-0 group-hover:bg-gold transition-all duration-500 rounded-lg">
                      <item.icon className="w-6 h-6 text-gold group-hover:text-void transition-colors" strokeWidth={1} />
                   </div>
                   <div>
                      <h4 className="text-xl font-playfair font-bold text-ivory mb-2 group-hover:text-gold transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-silver/50 text-sm leading-relaxed max-w-sm">
                        {item.desc}
                      </p>
                   </div>
                </motion.div>
              ))}
            </div>

            <motion.a 
               href="#contact"
               whileHover={{ x: 10 }}
               className="inline-flex items-center gap-6 group cursor-pointer"
            >
               <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-all duration-500 shadow-lg">
                 <ArrowRight className="w-4 h-4 text-gold group-hover:text-void transition-colors" />
               </div>
               <div className="flex flex-col">
                  <span className="text-[9px] text-gold font-black uppercase tracking-[0.4em] mb-1">Discover Our Legacy</span>
                  <div className="h-px w-full bg-gold/20 relative overflow-hidden">
                     <motion.div 
                       initial={{ x: "-100%" }}
                       whileHover={{ x: "0%" }}
                       transition={{ duration: 0.5 }}
                       className="absolute h-full w-full bg-gold"
                     />
                  </div>
               </div>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Decorative Branding Frame */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
    </section>
  );
}
