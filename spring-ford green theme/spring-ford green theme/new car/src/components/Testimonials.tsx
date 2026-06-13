"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The only service I trust for my weekly flights to London. Punctual to the minute, remarkably discreet, and the WiFi is always flawless.",
    author: "Jonathan Pierce",
    role: "CEO, Global Equities",
    location: "Great Neck, NY",
    highlight: "Punctual to the minute.",
  },
  {
    quote: "Traveling with three young children is usually a nightmare. Spring-Ford provided pristine car seats and a driver who made the entire process incredibly smooth.",
    author: "Sarah Montgomery",
    role: "North Shore Resident",
    location: "Manhasset, NY",
    highlight: "Smooth from start to finish.",
  },
  {
    quote: "Exceptional service. The vehicle was immaculate, the chauffeur professional, and their traffic knowledge truly impressive.",
    author: "David Chen",
    role: "Managing Partner",
    location: "Manhattan, NY",
    highlight: "Truly exceptional.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black py-28 relative overflow-hidden border-t border-onyx-border">
      {/* Subtle leaf-green dot pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,#1E7A48_1px,transparent_0)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="font-raleway text-[10px] text-cognac uppercase tracking-[0.5em] font-semibold block mb-5">Client Voices</span>
            <h2 className="font-cinzel text-pearl uppercase font-bold leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
              Voices of<br />
              <span className="text-cognac">Excellence.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-cognac text-cognac" />)}
            </div>
            <span className="font-raleway text-sm text-smoke/80">4.98 / 5.0 · 450+ reviews</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="group relative bg-black border border-cognac/15 p-10 flex flex-col gap-5 hover:border-cognac/40 hover:shadow-2xl hover:shadow-cognac/10 transition-all duration-500"
            >
              {/* Left emerald bar */}
              <div className="absolute top-10 left-0 w-[3px] h-12 bg-cognac" />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-cognac text-cognac" />)}
              </div>

              {/* Quote icon */}
              <Quote className="w-7 h-7 text-cognac/15" />

              {/* Highlight quote */}
              <p className="font-cinzel text-base font-bold text-pearl uppercase tracking-wide leading-snug">
                &ldquo;{t.highlight}&rdquo;
              </p>

              {/* Full text */}
              <p className="font-raleway text-pearl/50 text-sm leading-relaxed flex-1">{t.quote}</p>

              {/* Author */}
              <div className="border-t border-onyx-border pt-5 flex items-center gap-4">
                <div className="w-10 h-10 bg-cognac flex items-center justify-center shrink-0">
                  <span className="font-cinzel text-onyx font-bold text-base">{t.author[0]}</span>
                </div>
                <div>
                  <p className="font-raleway font-semibold text-pearl text-sm">{t.author}</p>
                  <p className="font-raleway text-smoke text-xs">{t.role} · {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
