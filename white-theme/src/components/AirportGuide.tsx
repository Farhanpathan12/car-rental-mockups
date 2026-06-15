"use client";

import { motion } from "framer-motion";
import { Sparkles, Film, HeartHandshake, Clapperboard } from "lucide-react";

const occasions = [
  {
    code: "WDG",
    name: "Grand Wedding Entries",
    badge: "Royal Entries",
    badgeStyle: "bg-amber-950/40 text-amber-400 border-amber-900/50",
    items: [
      {
        icon: Sparkles,
        title: "Royal Groom & Bride Entries",
        desc: "Arrive in a majestic white Rolls-Royce Phantom or luxury convertible. We coordinate flower decor alignment and strict timing with your event planners.",
      },
      {
        icon: HeartHandshake,
        title: "VIP Family Escorts",
        desc: "Arrange luxury SUV fleets (G-Wagons, Fortuners) to transport immediate family, high-profile delegates, and special guests in royal comfort.",
      },
    ],
  },
  {
    code: "SHT",
    name: "Tollywood & Media Shoots",
    badge: "Film & Production",
    badgeStyle: "bg-emerald-950/40 text-emerald-400 border-emerald-900/50",
    items: [
      {
        icon: Film,
        title: "Flexible Production Hires",
        desc: "Book our matte black G-Wagon or yellow Lamborghini Huracan on hourly schedules custom-tailored to film shoots, music videos, and fashion campaigns.",
      },
      {
        icon: Clapperboard,
        title: "On-Set Showroom Prep",
        desc: "Our detailing team delivers the car in immaculate, camera-ready shape, managing positioning on set under the guidance of your director.",
      },
    ],
  },
];

export default function AirportGuide() {
  return (
    <section className="bg-midnight py-28 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,_#EAA315_1px,_transparent_1px),_linear-gradient(to_bottom,_#EAA315_1px,_transparent_1px)] bg-[size:60px_60px]" />

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
                <Sparkles className="w-4 h-4" />
                Event Intelligence
              </p>
              <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-pearl">
                Crafting<br />
                <span className="italic text-gold">Royal Occasions.</span>
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
            Making an impact at weddings and film sets requires more than just an exotic car — it demands spotless presentation and absolute professionalism.
          </motion.p>
        </div>

        {/* Occasion Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {occasions.map((occasion, idx) => (
            <motion.div
              key={occasion.code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
              className="group relative bg-charcoal/60 border border-white/8 p-10 md:p-14 overflow-hidden hover:border-gold/20 transition-all duration-500"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                {/* Occasion code — huge typography */}
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h3 className="text-8xl font-playfair font-bold text-pearl/90 tracking-tighter leading-none">
                      {occasion.code}
                    </h3>
                    <p className="text-silver/30 text-xs uppercase tracking-widest mt-2">{occasion.name}</p>
                  </div>
                  <span className={`px-3 py-1 text-[10px] uppercase tracking-widest font-semibold border ${occasion.badgeStyle}`}>
                    {occasion.badge}
                  </span>
                </div>

                <div className="space-y-8">
                  {occasion.items.map((item, i) => (
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
