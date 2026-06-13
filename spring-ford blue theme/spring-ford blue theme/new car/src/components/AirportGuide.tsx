"use client";

import { motion } from "framer-motion";
import { Navigation, ClockAlert, PlaneTakeoff } from "lucide-react";

const airports = [
  {
    code: "JFK",
    name: "John F. Kennedy International",
    badge: "High Traffic",
    badgeStyle: "bg-red-950/40 text-red-400 border-red-900/50",
    items: [
      {
        icon: Navigation,
        title: "Terminal Construction Navigation",
        desc: "JFK&apos;s ongoing renovations mean closed roads and shifting pickup zones. Our chauffeurs get live dispatch updates to meet you at the exact active curb.",
      },
      {
        icon: ClockAlert,
        title: "International Arrivals Guarantee",
        desc: "We track your flight tail number. Whether you land 30 minutes early or 2 hours late through customs — your driver is waiting for you.",
      },
    ],
  },
  {
    code: "LGA",
    name: "LaGuardia Airport",
    badge: "Rapid Transit",
    badgeStyle: "bg-emerald-950/40 text-emerald-400 border-emerald-900/50",
    items: [
      {
        icon: Navigation,
        title: "Terminal B & C Expertise",
        desc: "We know exactly which level of each terminal to use for the fastest exit — dropping you closer to security and picking up away from rideshare gridlock.",
      },
      {
        icon: ClockAlert,
        title: "Executive Domestic Transit",
        desc: "Time is money. Our chauffeurs use hyper-local Queens routes to bypass Grand Central Parkway stalls so you make every meeting.",
      },
    ],
  },
];

export default function AirportGuide() {
  return (
    <section className="bg-deep-blue py-32 relative overflow-hidden border-t border-gold/5">
      {/* Background grid pattern in gold */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,_var(--color-gold)_1px,_transparent_1px),_linear-gradient(to_bottom,_var(--color-gold)_1px,_transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs text-gold uppercase tracking-[0.4em] mb-6 font-bold flex items-center gap-3">
                <PlaneTakeoff className="w-4 h-4 shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                Airport Intelligence
              </p>
              <h2 className="text-5xl lg:text-7xl font-playfair font-bold text-pearl leading-none">
                Mastering<br />
                <span className="italic text-gold font-normal">NYC Aviation.</span>
              </h2>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-silver/40 max-w-sm text-lg font-light leading-relaxed md:text-right"
          >
            Navigating JFK and LGA requires more than a GPS — it requires local expertise and unshakeable composure.
          </motion.p>
        </div>

        {/* Airport Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {airports.map((airport, idx) => (
            <motion.div
              key={airport.code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-royal-blue/30 border border-gold/10 p-12 md:p-16 overflow-hidden hover:border-gold/30 hover:bg-royal-blue/50 transition-all duration-700 backdrop-blur-sm shadow-2xl"
            >
              {/* Hover gold glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="relative z-10">
                {/* Airport code — dramatic gold typography */}
                <div className="flex justify-between items-start mb-16">
                  <div>
                    <h3 className="text-9xl font-playfair font-black text-transparent bg-clip-text bg-gradient-to-b from-gold via-gold/80 to-gold/40 tracking-tighter leading-none select-none">
                      {airport.code}
                    </h3>
                    <p className="text-gold/60 text-[10px] font-bold uppercase tracking-[0.4em] mt-4">{airport.name}</p>
                  </div>
                  <span className={`px-4 py-1.5 text-[9px] uppercase tracking-[0.2em] font-black border ${airport.badgeStyle} shadow-lg`}>
                    {airport.badge}
                  </span>
                </div>

                <div className="space-y-12">
                  {airport.items.map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-10 h-10 border border-gold/20 flex items-center justify-center shrink-0 mt-1 group-hover:bg-gold/10 transition-colors">
                        <item.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-pearl mb-3 group-hover:text-gold transition-colors duration-500">{item.title}</h4>
                        <p
                          className="text-silver/40 text-sm leading-relaxed font-medium"
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
