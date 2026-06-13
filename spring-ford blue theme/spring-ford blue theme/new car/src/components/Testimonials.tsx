"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The only service I trust for my weekly flights to London. Punctual to the minute, remarkably discreet, and the WiFi is always flawless.",
    author: "Jonathan Pierce",
    role: "CEO, Global Equities",
    location: "Great Neck, NY",
    rating: 5,
    highlight: "Punctual to the minute.",
  },
  {
    quote: "Traveling with three young children is usually a nightmare. Infinite provided two pristine car seats and a driver who made the entire process incredibly smooth.",
    author: "Sarah Montgomery",
    role: "North Shore Resident",
    location: "Manhasset, NY",
    rating: 5,
    highlight: "Smooth from start to finish.",
  },
  {
    quote: "Exceptional from start to finish. The vehicle was immaculate, the chauffeur was professional, and their knowledge of avoiding traffic was impressive.",
    author: "David Chen",
    role: "Managing Partner",
    location: "Manhattan, NY",
    rating: 5,
    highlight: "Truly exceptional service.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-deep-blue py-28 relative overflow-hidden">
      {/* Faint gold dots bg */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,_var(--color-gold)_1px,_transparent_0)] bg-[size:48px_48px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-20 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs text-gold uppercase tracking-widest mb-4 font-bold"
            >
              Distinguished Experiences
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-7xl font-playfair font-bold text-pearl"
            >
              Voices of<br />
              <span className="italic text-gold font-normal">Excellence.</span>
            </motion.h2>
          </div>
          <div className="flex items-center gap-4 text-xs text-silver/50 tracking-widest uppercase font-bold">
            <div className="flex gap-1.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold shadow-[0_0_8px_rgba(212,175,55,0.4)]" />)}
            </div>
            <span>4.98 / 5.0 Average</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              className="group relative bg-royal-blue/40 border border-gold/10 p-12 flex flex-col gap-8 hover:border-gold/40 hover:bg-royal-blue/60 hover:-translate-y-2 transition-all duration-700 shadow-2xl backdrop-blur-sm"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-gold/10 absolute top-8 right-8" />

              {/* Star rating */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Highlight text */}
              <p className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">{t.highlight}</p>

              {/* Full quote */}
              <p className="font-playfair italic text-xl leading-relaxed text-pearl/80 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-gold/10 pt-8 flex items-center justify-between">
                <div>
                  <p className="font-bold text-pearl text-sm tracking-widest mb-1 uppercase">{t.author}</p>
                  <p className="text-gold/60 text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                  <p className="text-silver/30 text-[9px] mt-1 font-medium tracking-wider">{t.location}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center bg-gold/5">
                  <span className="text-gold font-playfair font-bold text-lg">{t.author[0]}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
