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
    <section className="bg-midnight py-28 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,_#BEA365_1px,_transparent_1px),_linear-gradient(to_bottom,_#BEA365_1px,_transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs text-gold uppercase tracking-widest mb-4 font-semibold flex items-center gap-2">
                <PlaneTakeoff className="w-4 h-4" />
                Airport Intelligence
              </p>
              <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-pearl">
                Mastering<br />
                <span className="italic text-gold">NYC Aviation.</span>
              </h2>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-silver/50 max-w-sm text-sm leading-relaxed md:text-right"
          >
            Navigating JFK and LGA requires more than a GPS — it requires local expertise, real-time data, and unshakeable composure.
          </motion.p>
        </div>

        {/* Airport Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {airports.map((airport, idx) => (
            <motion.div
              key={airport.code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
              className="group relative bg-charcoal/60 border border-white/8 p-10 md:p-14 overflow-hidden hover:border-gold/20 transition-all duration-500"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                {/* Airport code — huge typography */}
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h3 className="text-8xl font-playfair font-bold text-pearl/90 tracking-tighter leading-none">
                      {airport.code}
                    </h3>
                    <p className="text-silver/30 text-xs uppercase tracking-widest mt-2">{airport.name}</p>
                  </div>
                  <span className={`px-3 py-1 text-[10px] uppercase tracking-widest font-semibold border ${airport.badgeStyle}`}>
                    {airport.badge}
                  </span>
                </div>

                <div className="space-y-8">
                  {airport.items.map((item, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                        <item.icon className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-pearl mb-2">{item.title}</h4>
                        <p
                          className="text-silver/50 text-sm leading-relaxed"
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
