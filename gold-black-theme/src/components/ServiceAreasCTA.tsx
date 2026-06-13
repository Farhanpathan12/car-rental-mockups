"use client";

import { motion } from "framer-motion";
import { ChevronRight, Globe, MapPin } from "lucide-react";

const regions = [
  {
    title: "Tri-State Area",
    areas: ["New York City", "New Jersey", "Connecticut", "Long Island", "Westchester", "The Hamptons"],
  },
  {
    title: "National Affiliates",
    areas: ["Los Angeles", "Miami", "Chicago", "Las Vegas", "Washington D.C.", "Dallas"],
  },
  {
    title: "Global Partners",
    areas: ["London", "Paris", "Dubai", "Tokyo", "Milan", "Geneva"],
  },
];

export default function ServiceAreasCTA() {
  return (
    <section id="coverage">

      {/* Coverage listing */}
      <div className="bg-void py-32 border-t border-white/5 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">

          {/* Centered Header */}
          <div className="text-center mb-32">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] text-gold uppercase tracking-[0.6em] font-black mb-8 block"
            >
              The Global Infrastructure
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl lg:text-7xl font-playfair font-bold text-ivory leading-tight"
            >
              The Network of<br />
              <span className="italic font-normal text-gold-gradient">Prestige.</span>
            </motion.h2>
          </div>

          {/* Symmetrical Centered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
            {regions.map((region, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-full border-b border-white/5 pb-6 mb-8 group">
                   <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold">
                     {region.title}
                   </h3>
                </div>
                <ul className="space-y-5">
                  {region.areas.map((area) => (
                    <li
                      key={area}
                      className="text-[13px] text-silver/40 hover:text-gold transition-colors duration-300 tracking-wide font-light cursor-default"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Split */}
      <div className="grid lg:grid-cols-2">

        {/* Left — obsidian panel */}
        <div className="bg-obsidian px-12 py-36 lg:px-24 flex flex-col justify-center relative overflow-hidden border-r border-gold/8">
          {/* Ghost text */}
          <span className="absolute text-[18rem] font-playfair font-bold text-gold/[0.018] leading-none -right-16 -bottom-20 select-none pointer-events-none rotate-[-8deg]">
            BOOK
          </span>
          {/* Glow */}
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl pointer-events-none -translate-x-1/2" />

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-[1px] bg-gradient-to-r from-gold to-gold-bright" />
              <p className="text-[10px] text-gold uppercase tracking-[0.45em] font-bold">The Next Step</p>
            </div>
            <h2 className="text-5xl lg:text-7xl font-playfair font-bold text-ivory leading-[0.95] mb-12">
              Request Your<br />
              <span className="italic font-normal text-gold-gradient">Arrangement.</span>
            </h2>
            <p className="text-silver/35 text-lg leading-relaxed max-w-sm font-light">
              Your journey begins with a single inquiry. Our dedicated team is available 24/7 to orchestrate your travel needs.
            </p>
          </motion.div>
        </div>

        {/* Right — carbon panel */}
        <div className="bg-carbon px-12 py-36 lg:px-24 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,_#C9A84C_1px,_transparent_0)] bg-[size:36px_36px]" />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <p className="text-ivory/50 text-lg mb-14 leading-relaxed max-w-md font-light italic">
              &ldquo;Experience the absolute fusion of obsidian black and liquid gold luxury — redefined for the modern connoisseur.&rdquo;
            </p>

            <div className="space-y-5 mb-16">
              {[
                "24/7 Dedicated Concierge",
                "Elite Background-Checked Chauffeurs",
                "Premium In-Vehicle Connectivity",
                "Guaranteed Absolute Discretion",
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-4 text-[10px] text-silver/55 uppercase tracking-[0.2em] font-bold">
                  <div className="w-1.5 h-1.5 bg-gold rotate-45 shadow-[0_0_8px_rgba(201,168,76,0.4)] shrink-0" />
                  {feat}
                </div>
              ))}
            </div>

            <a
              href="#book"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-5 px-14 py-6 bg-gold text-obsidian font-black uppercase tracking-[0.3em] text-[10px] shadow-[0_0_50px_-10px_rgba(201,168,76,0.5)] hover:shadow-[0_0_80px_-10px_rgba(201,168,76,0.8)] transition-all duration-500 hover:-translate-y-1"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="relative z-10">Reserve Your Ride</span>
              <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
