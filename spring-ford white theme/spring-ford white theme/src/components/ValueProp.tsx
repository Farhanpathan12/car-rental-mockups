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
    <section className="bg-background py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(circle_at_1px_1px,_#BEA365_1px,_transparent_0)] bg-[size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs text-gold uppercase tracking-widest mb-4 font-semibold"
          >
            Tailored Excellence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-6xl font-playfair font-bold text-foreground"
          >
            The Family<br />
            <span className="italic text-gold">Standard.</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className={`group grid lg:grid-cols-2 items-stretch bg-white border border-gray-100 overflow-hidden hover:border-gold/20 hover:shadow-xl transition-all duration-500 ${
                idx % 2 === 1 ? "" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative h-72 lg:h-auto ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Number overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-6 left-6 text-7xl font-playfair font-bold text-white/15 leading-none">
                  {card.number}
                </span>
              </div>

              {/* Content */}
              <div className={`px-10 py-14 lg:px-16 flex flex-col justify-center ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2">{card.subtitle}</p>
                <h3 className="text-4xl font-playfair font-bold text-foreground mb-4 group-hover:text-gold transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-softgray leading-relaxed mb-8 text-sm">
                  {card.desc}
                </p>
                <ul className="space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-foreground/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <a
                    href="#book"
                    className="inline-flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-widest hover:gap-4 transition-all duration-300"
                  >
                    Reserve Now <span>→</span>
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
