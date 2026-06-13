"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    number: "01",
    title: "Executive Travel",
    subtitle: "Business Class. Redefined.",
    desc: "Maximize productivity and minimize travel stress. A mobile office environment with absolute punctuality — because your time is priceless.",
    items: ["High-speed complimentary WiFi", "Real-time flight tracking", "Strict confidentiality & privacy"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Chauffeur On-Demand",
    subtitle: "Your Family, Our Priority.",
    desc: "Begin your vacation the moment you leave home. Spacious, immaculate vehicles with premium amenities curated for every family member.",
    items: ["Spacious SUVs for ample luggage", "Premium car seats available", "Stress-free airport navigation"],
    image: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?q=80&w=2075&auto=format&fit=crop",
  },
];

export default function ValueProp() {
  return (
    <section className="bg-deep-blue py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,_#D4AF37_1px,_transparent_0)] bg-[size:48px_48px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs text-gold uppercase tracking-[0.4em] mb-6 font-bold"
          >
            Tailored Excellence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-7xl font-playfair font-bold text-pearl leading-none"
          >
            The Family<br />
            <span className="italic text-gold font-normal">Standard.</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="space-y-12">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group grid lg:grid-cols-2 items-stretch bg-royal-blue/30 border border-gold/10 overflow-hidden hover:border-gold/30 hover:bg-royal-blue/50 transition-all duration-700 backdrop-blur-sm ${
                idx % 2 === 1 ? "" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative h-96 lg:h-auto ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-[4s]"
                />
                {/* Number overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-10 left-10 text-9xl font-playfair font-bold text-white/5 leading-none select-none">
                  {card.number}
                </span>
              </div>

              {/* Content */}
              <div className={`px-12 py-20 lg:px-20 flex flex-col justify-center ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[1px] bg-gold shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gold">{card.subtitle}</p>
                </div>
                <h3 className="text-4xl lg:text-5xl font-playfair font-bold text-pearl mb-8 tracking-tight group-hover:text-gold transition-colors duration-500">
                  {card.title}
                </h3>
                <p className="text-silver/50 leading-relaxed mb-10 text-lg font-light">
                  {card.desc}
                </p>
                <div className="grid sm:grid-cols-1 gap-5">
                  {card.items.map((item) => (
                    <div key={item} className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.1em] text-silver/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.5)] shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-14">
                  <a
                    href="#book"
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-4 px-10 py-5 bg-gold text-midnight font-black uppercase tracking-[0.3em] text-[10px] shadow-[0_0_40px_-10px_rgba(212,175,55,0.4)] transition-all duration-500 hover:shadow-[0_0_60px_-15px_rgba(212,175,55,0.6)] hover:-translate-y-1"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                    <span className="relative z-10">Bespoke Reservation</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
