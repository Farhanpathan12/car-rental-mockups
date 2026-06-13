"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

      {/* Coverage columns — dark forest */}
      <div className="bg-black py-24 relative overflow-hidden border-t border-onyx-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(30,122,72,0.06),transparent)] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cognac/40 to-transparent" />

        <div className="max-w-screen-xl mx-auto px-6 lg:px-14 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="font-raleway text-[10px] text-cognac uppercase tracking-[0.5em] font-semibold block mb-5">Global Reach</span>
              <h2 className="font-cinzel font-bold text-pearl uppercase leading-[0.9]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
                Our<br />
                <span className="bg-gradient-to-r from-cognac to-cognac-light bg-clip-text text-transparent">Network.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-onyx-border">
            {regions.map((region, idx) => (
              <motion.div key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-10 group relative ${idx < regions.length - 1 ? "border-r border-onyx-border" : ""} hover:bg-cognac/5 transition-colors duration-400`}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-cognac scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <h3 className="font-cinzel text-[10px] tracking-[0.4em] text-cognac uppercase mb-6 pb-4 border-b border-onyx-border">
                  {region.title}
                </h3>
                <ul className="space-y-3">
                  {region.areas.map((area) => (
                    <li key={area} className="flex items-center gap-3 font-raleway text-sm text-smoke hover:text-pearl transition-colors cursor-default group/item">
                      <span className="w-1 h-1 bg-cognac/50 group-hover/item:bg-cognac rounded-full transition-colors shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA — rich ivory + dark forest split */}
      <div className="grid lg:grid-cols-2">

        {/* Left: forest panel with huge text */}
        <div className="bg-black px-12 py-28 lg:px-20 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_0%_50%,rgba(30,122,72,0.1),transparent)] pointer-events-none" />
          <span className="absolute font-cinzel font-black text-[11rem] text-cognac/[0.04] leading-none -right-6 top-0 select-none pointer-events-none">∞</span>

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-10">
            <span className="font-raleway text-[10px] text-cognac uppercase tracking-[0.5em] font-semibold block mb-6">The Next Step</span>
            <h2 className="font-cinzel font-black text-pearl uppercase leading-[0.88] mb-8"
              style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}>
              Book<br />
              Your<br />
              <span className="bg-gradient-to-r from-cognac to-cognac-light bg-clip-text text-transparent">Ride.</span>
            </h2>
            <p className="font-raleway text-smoke text-sm leading-relaxed max-w-xs">
              Reservations available around the clock. One call — or a few clicks.
            </p>
          </motion.div>
        </div>

        {/* Right: warm ivory panel */}
        <div className="bg-ivory-warm px-12 py-28 lg:px-20 flex flex-col justify-center relative">
          <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-cognac/30 to-transparent" />
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
            <p className="font-raleway text-charcoal-text text-base leading-relaxed mb-10 max-w-sm">
              Elevate every journey — from the first mile to the last. The gold standard of luxury transportation in Pennsylvania.
            </p>

            <ul className="space-y-4 mb-10">
              {["Complimentary meet & greet", "Real-time chauffeur tracking", "Premium in-vehicle amenities", "24/7 concierge line"].map((feat) => (
                <li key={feat} className="flex items-center gap-4 font-raleway text-sm text-charcoal-text/60">
                  <span className="w-1.5 h-1.5 bg-cognac rounded-full shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>

            <a href="#book"
              className="group inline-flex items-center gap-3 bg-cognac text-pearl px-10 py-5 font-raleway font-bold text-[10px] uppercase tracking-[0.25em] hover:bg-cognac-light transition-colors duration-300 shadow-lg shadow-cognac/20">
              Reserve Your Ride
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
