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
      <div className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs text-gold uppercase tracking-widest mb-4 font-semibold"
            >
              Global Reach
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-playfair font-bold text-foreground"
            >
              Metropolitan<br />
              <span className="italic text-gold">Network.</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {regions.map((region, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-gold border-b border-gold/20 pb-4 mb-6">
                  {region.title}
                </h3>
                <ul className="space-y-3">
                  {region.areas.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-sm text-softgray hover:text-foreground transition-colors group cursor-default">
                      <span className="w-1 h-1 bg-gold/40 group-hover:bg-gold rounded-full transition-colors" />
                      {area}
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
        {/* Left: Dark panel — headline */}
        <div className="bg-midnight px-12 py-28 lg:px-20 flex flex-col justify-center relative overflow-hidden">
          {/* Ghost text background */}
          <span className="absolute text-[12rem] font-playfair font-bold text-white/[0.02] leading-none -right-10 -top-10 select-none pointer-events-none">
            GO
          </span>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <p className="text-xs text-gold uppercase tracking-widest mb-6 font-semibold">The Next Step</p>
            <h2 className="text-6xl lg:text-7xl font-playfair font-bold text-pearl leading-[0.9] mb-8">
              Request<br />
              <span className="italic text-gold">Arrangement.</span>
            </h2>
            <p className="text-silver/50 text-sm leading-relaxed max-w-sm">
              Your journey begins with a single call — or a few simple clicks. Our reservations team is available around the clock.
            </p>
          </motion.div>
        </div>

        {/* Right: Light cream panel — action */}
        <div className="bg-[#F2EFE8] px-12 py-28 lg:px-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-foreground/50 text-sm mb-10 leading-relaxed max-w-sm">
              Elevate every journey — from your first mile to your last. Experience the gold standard of luxury transportation on Long Island and beyond.
            </p>

            <div className="space-y-4 mb-10">
              {["Complimentary meet & greet", "Real-time chauffeur tracking", "Premium in-vehicle amenities", "Dedicated 24/7 concierge line"].map((feat) => (
                <div key={feat} className="flex items-center gap-3 text-sm text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {feat}
                </div>
              ))}
            </div>

            <a
              href="#book"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-midnight font-bold uppercase tracking-widest text-sm hover:bg-gold-hover transition-all duration-300 shadow-lg shadow-gold/20"
            >
              Book Your Chauffeur
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
