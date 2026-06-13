"use client";

import { motion } from "framer-motion";
import { Navigation, ClockAlert, PlaneTakeoff } from "lucide-react";

const airports = [
  {
    code: "JFK",
    name: "John F. Kennedy International",
    badge: "High Traffic",
    badgeColor: "text-rose-400 border-rose-500/30",
    items: [
      { icon: Navigation, title: "Terminal Navigation Expertise", desc: "JFK's ongoing renovations mean closed roads. Our chauffeurs get live dispatch updates to meet you at the exact active curb." },
      { icon: ClockAlert, title: "International Arrivals Guarantee", desc: "We track your flight tail number. Whether you land early or 2 hours late through customs — your driver is waiting." },
    ],
  },
  {
    code: "LGA",
    name: "LaGuardia Airport",
    badge: "Rapid Transit",
    badgeColor: "text-emerald-400 border-emerald-500/30",
    items: [
      { icon: Navigation, title: "Terminal B & C Expertise", desc: "We know exactly which level of each terminal to use for the fastest exit — away from rideshare gridlock." },
      { icon: ClockAlert, title: "Executive Domestic Transit", desc: "Our chauffeurs use hyper-local Queens routes to bypass Grand Central Parkway stalls so you make every meeting." },
    ],
  },
];

export default function AirportGuide() {
  return (
    <section className="bg-black py-28 overflow-hidden relative border-t border-onyx-border">
      {/* Cognac ambient bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-cognac/6 blur-[100px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="font-raleway text-[10px] text-cognac uppercase tracking-[0.5em] font-semibold flex items-center gap-2 mb-5">
              <PlaneTakeoff className="w-3.5 h-3.5" /> Airport Intelligence
            </span>
            <h2 className="font-cinzel font-bold text-pearl uppercase leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              Mastering<br />
              <span className="text-cognac">NYC Airports.</span>
            </h2>
          </div>
          <p className="font-raleway text-smoke max-w-xs text-sm leading-relaxed md:text-right">
            Navigating JFK and LGA needs live data, local expertise, and zero margin for error.
          </p>
        </div>

        {/* Airport cards — stacked borderless panels */}
        <div className="grid lg:grid-cols-2 gap-6">
          {airports.map((airport, idx) => (
            <motion.div
              key={airport.code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group relative border border-onyx-border bg-black hover:border-cognac/30 transition-colors duration-500 overflow-hidden"
            >
              {/* Cognac left rail */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-cognac opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-12">
                {/* Big code + badge */}
                <div className="flex items-start justify-between mb-10">
                  <h3 className="font-cinzel font-black text-pearl leading-none tracking-tight"
                    style={{ fontSize: "clamp(4rem, 7vw, 6.5rem)" }}
                  >
                    {airport.code}
                  </h3>
                  <div className="text-right">
                    <span className={`font-raleway text-[8px] border px-2.5 py-1 uppercase tracking-[0.25em] ${airport.badgeColor}`}>
                      {airport.badge}
                    </span>
                    <p className="font-raleway text-[9px] text-smoke uppercase tracking-wider mt-2 max-w-[160px] text-right">{airport.name}</p>
                  </div>
                </div>

                <div className="space-y-7">
                  {airport.items.map((item, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="w-8 h-8 border border-cognac/25 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon className="w-3.5 h-3.5 text-cognac" />
                      </div>
                      <div>
                        <h4 className="font-raleway font-semibold text-pearl text-sm mb-1.5">{item.title}</h4>
                        <p className="font-raleway text-smoke text-sm leading-relaxed">{item.desc}</p>
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
