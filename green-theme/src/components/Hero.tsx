"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex">

      {/* Forest green ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_60%,rgba(30,122,72,0.12)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-cognac/6 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Subtle forest grid texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#1E7A48_1px,transparent_1px),linear-gradient(to_bottom,#1E7A48_1px,transparent_1px)] bg-[size:80px_80px] z-0" />

      {/* ─── LEFT PANEL (55%) ─── */}
      <div className="relative flex flex-col justify-between w-full lg:w-[55%] px-8 lg:px-16 pt-36 pb-16 z-20">

        {/* Emerald left rule */}
        <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent via-cognac/40 to-transparent" />

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <div className="w-6 h-px bg-cognac" />
          <span className="font-raleway text-[10px] text-cognac uppercase tracking-[0.5em] font-semibold">Pennsylvania&apos;s Premier Chauffeur</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col justify-center py-12 relative z-10"
        >
          {/* Giant S watermark */}
          <span className="absolute -left-4 top-1/2 -translate-y-1/2 font-cinzel font-black text-[16rem] text-cognac/[0.08] leading-none select-none pointer-events-none">S</span>

          <h1 className="font-cinzel font-black text-pearl uppercase leading-[0.9] tracking-[-0.02em] relative z-10 drop-shadow-2xl break-words"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 6rem)" }}>
            Premium<br />
            Chauffeur<br />
            <span className="bg-gradient-to-r from-cognac to-cognac-light bg-clip-text text-transparent">Service.</span>
          </h1>

          <div className="flex items-start gap-4 mt-8 mb-8">
            <div className="w-px h-12 bg-cognac/40 mt-1 shrink-0" />
            <p className="font-raleway text-pearl/50 text-base leading-relaxed max-w-sm">
              Spring-Ford Luxury Rides — uncompromised excellence, absolute discretion, flawless punctuality.
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-10">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-cognac text-cognac" />)}
            </div>
            <span className="font-raleway text-[11px] text-ash/35 tracking-wide">4.98 · 450+ Five-Star Reviews</span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#book"
              className="group inline-flex items-center justify-center gap-3 bg-cognac text-pearl px-9 py-4 text-[10px] font-raleway font-bold uppercase tracking-[0.3em] hover:bg-cognac-light transition-all duration-300 shadow-lg shadow-cognac/25">
              Reserve a Ride
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+18005550199"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 border border-onyx-border text-ash/50 text-[11px] font-raleway hover:border-cognac/40 hover:text-cognac transition-all duration-300">
              <Phone className="w-3.5 h-3.5" />
              Call Directly
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-0 relative z-10"
        >
          {[
            { val: "20+", lbl: "Years" },
            { val: "10K+", lbl: "Clients" },
            { val: "100%", lbl: "On-Time" },
          ].map((s, i) => (
            <div key={i} className={`flex items-center ${i > 0 ? "border-l border-onyx-border" : ""}`}>
              <div className={`px-7 text-center ${i === 0 ? "pl-0" : ""}`}>
                <p className="font-cinzel text-2xl font-bold text-cognac leading-none mb-1">{s.val}</p>
                <p className="font-raleway text-[8px] text-ash/30 uppercase tracking-[0.3em]">{s.lbl}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ─── RIGHT PANEL — image ─── */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[47%] z-10"
      >
        <div className="relative w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop"
            alt="Luxury chauffeur service"
            className="w-full h-full object-cover object-center brightness-75"
          />
          {/* Black tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/50" />
          {/* Subtle emerald color grade */}
          <div className="absolute inset-0 bg-gradient-to-br from-cognac/8 via-transparent to-transparent mix-blend-soft-light" />
        </div>

        {/* JFK / LGA floating card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="absolute bottom-14 left-10 z-20 bg-cognac p-6 shadow-2xl shadow-cognac/30"
        >
          <p className="font-cinzel text-4xl font-black text-pearl leading-none mb-1">JFK</p>
          <p className="font-cinzel text-4xl font-black text-pearl leading-none mb-3">LGA</p>
          <div className="w-8 h-0.5 bg-pearl/30 mb-2" />
          <p className="font-raleway text-[9px] text-pearl/60 uppercase tracking-[0.3em] font-semibold">Airport Specialists</p>
        </motion.div>

        {/* 24/7 badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="absolute top-28 right-8 z-20 bg-black/80 backdrop-blur-md border border-cognac/25 p-5 text-center"
        >
          <p className="font-raleway text-[9px] font-bold text-ash/50 uppercase tracking-[0.2em] mb-1">Available</p>
          <p className="font-cinzel text-2xl font-black text-cognac leading-none">24/7</p>
        </motion.div>
      </motion.div>

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}
