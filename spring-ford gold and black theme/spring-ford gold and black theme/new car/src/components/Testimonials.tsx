"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    quote: "The only service I trust for my weekly flights to London. Punctual to the minute and remarkably discreet.",
    author: "Jonathan Pierce",
    role: "CEO, Global Equities",
    location: "Great Neck, NY"
  },
  {
    quote: "Three young children is usually a nightmare. They made the entire process seamless with pristine car seats.",
    author: "Sarah Montgomery",
    role: "North Shore Resident",
    location: "Manhasset, NY"
  },
  {
    quote: "Exceptional from start to finish. The vehicle was immaculate and the chauffeur was professional.",
    author: "David Chen",
    role: "Managing Partner",
    location: "Manhattan, NY"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-obsidian py-32 relative border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Minimalist Header */}
        <div className="text-center mb-24">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] text-gold uppercase tracking-[0.5em] font-black mb-4"
            >
              Voices of Excellence
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-playfair font-bold text-ivory"
            >
              Client <span className="italic text-gold font-normal">Perspectives.</span>
            </motion.h2>
            
            {/* Simple Rating Summary */}
            <div className="flex items-center justify-center gap-4 mt-8 opacity-60">
               <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-gold text-gold" />
                  ))}
               </div>
               <div className="w-px h-3 bg-white/20" />
               <span className="text-[10px] text-ivory tracking-[0.2em] font-bold uppercase text-gold">4.98 Rating</span>
            </div>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-10 border border-white/5 bg-void/30 backdrop-blur-sm group hover:border-gold/20 transition-all duration-500"
            >
               {/* Minimal Identity */}
               <div className="w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center bg-gold/5 mb-8 group-hover:bg-gold/10 transition-colors">
                  <span className="text-gold font-playfair font-bold text-xl">{t.author[0]}</span>
               </div>

               {/* Quote Content */}
               <p className="font-playfair italic text-lg text-ivory/70 leading-relaxed mb-10 flex-1">
                  &ldquo;{t.quote}&rdquo;
               </p>

               {/* Signature Line */}
               <div className="pt-8 border-t border-white/5 w-full">
                  <p className="font-bold text-ivory text-[13px] tracking-widest uppercase mb-1">{t.author}</p>
                  <p className="text-gold/50 text-[9px] font-black uppercase tracking-[0.2em]">{t.role}</p>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Verified Badge */}
        <div className="mt-20 flex justify-center opacity-30">
           <div className="flex items-center gap-3 grayscale">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span className="text-[9px] text-white uppercase tracking-[0.3em] font-bold">Verified Executive Service</span>
           </div>
        </div>

      </div>
    </section>
  );
}
