"use client";

import { motion } from "framer-motion";
import { Navigation, ClockAlert, PlaneTakeoff } from "lucide-react";

const airports = [
  {
    code: "JFK",
    name: "John F. Kennedy International",
    badge: "High Traffic",
    badgeStyle: "bg-red-950/30 text-red-400/80 border-red-800/30",
    items: [
      {
        icon: Navigation,
        title: "Terminal Construction Navigation",
        desc: "JFK&apos;s ongoing renovations mean closed roads and shifting pickup zones. Our chauffeurs get live dispatch updates to meet you at the exact active curb.",
      },
      {
        icon: ClockAlert,
        title: "International Arrivals Guarantee",
        desc: "We track your flight tail number. Whether you land 30 minutes early or 2 hours late through customs — your driver is waiting.",
      },
    ],
  },
  {
    code: "LGA",
    name: "LaGuardia Airport",
    badge: "Rapid Transit",
    badgeStyle: "bg-gold/5 text-gold/70 border-gold/20",
    items: [
      {
        icon: Navigation,
        title: "Terminal B & C Expertise",
        desc: "We know exactly which level of each terminal to use for the fastest exit — dropping you closer to security, away from rideshare gridlock.",
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
    <section className="bg-void py-36 relative overflow-hidden border-t border-gold/8">
      {/* Fine dot texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,_#C9A84C_1px,_transparent_0)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[10px] text-gold uppercase tracking-[0.5em] mb-6 font-bold flex items-center gap-3">
                <PlaneTakeoff className="w-4 h-4" />
                Airport Intelligence
              </p>
              <h2 className="text-5xl lg:text-7xl font-playfair font-bold text-ivory leading-none">
                Mastering<br />
                <span className="italic font-normal text-gold-gradient">NYC Aviation.</span>
              </h2>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-silver/35 max-w-sm text-base font-light leading-relaxed md:text-right"
          >
            Navigating JFK and LGA requires more than a GPS — it demands local expertise and unshakeable composure.
          </motion.p>
        </div>

        {/* Airport Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {airports.map((airport, idx) => (
            <motion.div
              key={airport.code}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-carbon border border-gold/8 p-12 md:p-16 overflow-hidden hover:border-gold/28 transition-all duration-700"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/0 group-hover:border-gold/40 transition-all duration-700" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/0 group-hover:border-gold/40 transition-all duration-700" />

              {/* Hover ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="relative z-10">
                {/* Airport code header */}
                <div className="flex justify-between items-start mb-16">
                  <div>
                    <h3 className="text-[8rem] font-playfair font-black text-gold-gradient tracking-tighter leading-none select-none">
                      {airport.code}
                    </h3>
                    <p className="text-gold/50 text-[9px] font-bold uppercase tracking-[0.4em] mt-3">{airport.name}</p>
                  </div>
                  <span className={`px-4 py-2 text-[9px] uppercase tracking-[0.25em] font-black border ${airport.badgeStyle} mt-4`}>
                    {airport.badge}
                  </span>
                </div>

                <div className="space-y-12">
                  {airport.items.map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-11 h-11 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/8 transition-colors duration-500">
                        <item.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-ivory mb-3 group-hover:text-gold transition-colors duration-500">
                          {item.title}
                        </h4>
                        <p
                          className="text-silver/35 text-sm leading-relaxed"
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
