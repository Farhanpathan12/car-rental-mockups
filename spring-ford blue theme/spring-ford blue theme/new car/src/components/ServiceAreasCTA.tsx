"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

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
      {/* Coverage listing — light */}
      <div className="bg-deep-blue py-32 border-t border-gold/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs text-gold uppercase tracking-[0.4em] mb-6 font-bold"
            >
              Global Reach
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-8xl font-playfair font-bold text-pearl leading-none"
            >
              The Network of<br />
              <span className="italic text-gold font-normal">Prestige.</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            {regions.map((region, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="relative group"
              >
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold border-b border-gold/20 pb-6 mb-8 group-hover:border-gold/40 transition-colors">
                  {region.title}
                </h3>
                <ul className="space-y-4">
                  {region.areas.map((area) => (
                    <li key={area} className="flex items-center gap-3 text-sm text-silver/40 hover:text-pearl transition-all group/item cursor-default">
                      <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      <span className="tracking-wide">{area}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Striking CTA — editorial split */}
      <div className="grid lg:grid-cols-2">
        {/* Left: Royal Blue panel */}
        <div className="bg-royal-blue px-12 py-32 lg:px-24 flex flex-col justify-center relative overflow-hidden border-r border-gold/10">
          <span className="absolute text-[20rem] font-playfair font-bold text-white/[0.02] leading-none -right-20 -top-20 select-none pointer-events-none">
            REERVE
          </span>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-gold" />
              <p className="text-xs text-gold uppercase tracking-[0.4em] font-bold">The Next Step</p>
            </div>
            <h2 className="text-5xl lg:text-7xl font-playfair font-bold text-pearl leading-[0.95] mb-10">
              Request Your<br />
              <span className="italic text-gold font-normal">Arrangement.</span>
            </h2>
            <p className="text-silver/40 text-lg leading-relaxed max-w-sm font-light">
              Your journey begins with a single inquiry. Our dedicated team is available 24/7 to orchestrate your travel needs.
            </p>
          </motion.div>
        </div>

        {/* Right: Deep Blue panel */}
        <div className="bg-deep-blue px-12 py-32 lg:px-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-pearl/60 text-lg mb-12 leading-relaxed max-w-md font-light italic">
              &ldquo;Experience the absolute fusion of royal blue elegance and liquid gold luxury, redefined for the modern connoisseur.&rdquo;
            </p>

            <div className="space-y-5 mb-14">
              {["24/7 Dedicated Concierge", "Elite Background-Checked Chauffeurs", "Premium In-Vehicle Connectivity", "Guaranteed Absolute Discretion"].map((feat) => (
                <div key={feat} className="flex items-center gap-4 text-xs text-silver/60 uppercase tracking-[0.2em] font-bold">
                  <div className="w-1.5 h-1.5 bg-gold shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                  {feat}
                </div>
              ))}
            </div>

            <a
              href="#book"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-4 px-12 py-6 bg-gold text-midnight font-black uppercase tracking-[0.3em] text-xs shadow-[0_0_60px_-15px_rgba(212,175,55,0.5)] hover:shadow-[0_0_80px_-20px_rgba(212,175,55,0.7)] transition-all duration-500 hover:-translate-y-1"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              <span className="relative z-10">Reserve Your Ride</span>
              <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
