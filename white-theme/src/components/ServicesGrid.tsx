"use client";

import { motion } from "framer-motion";
import { Car, Sparkles, Film, Compass } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Self-Drive Luxury",
    description: "Command elite supercars and SUVs. Enjoy complete driving freedom with zero artificial speed limits.",
    icon: Car,
    image: "/images/lamborghini_yellow.png",
    tag: "Popular",
  },
  {
    title: "Royal Weddings",
    description: "Make an unforgettable wedding entry. Premium white luxury fleets with professional decor readiness.",
    icon: Sparkles,
    image: "/images/rolls_royce_white.png",
    tag: "Royal Entry",
  },
  {
    title: "Shoots & Media",
    description: "Exotic cars for Tollywood movies, advertising shoots, music videos, and private campaigns.",
    icon: Film,
    image: "/images/g_wagon_black.png",
    tag: "Shoots & Events",
  },
  {
    title: "Outstation Drives",
    description: "Hit the highway in absolute comfort. Luxurious SUVs for premium weekend getaways.",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
    tag: "Long Highway",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-28 bg-midnight">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs text-gold uppercase tracking-widest mb-4 font-semibold"
            >
              Tailored Experiences
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-playfair font-bold text-pearl leading-tight"
            >
              Every Drive,<br />
              <span className="italic text-gold">Redefined.</span>
            </motion.h2>
          </div>
          <a href="#fleet" className="text-gold/70 text-sm font-medium hover:text-gold transition-colors flex items-center gap-2 whitespace-nowrap">
            Explore Fleet <span>→</span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: "easeOut" }}
              className="group relative h-[520px] overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                className="object-cover object-center transition-all duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-70"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
              
              {/* Top tag */}
              <div className="absolute top-6 left-6 z-10">
                <span className="text-[10px] text-gold/80 uppercase tracking-widest border border-gold/30 px-3 py-1 bg-midnight/40 backdrop-blur-sm">
                  {svc.tag}
                </span>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 transition-all duration-500 z-10" />

              {/* Content at bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                <svc.icon className="w-7 h-7 text-gold mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500" />
                <h3 className="text-2xl font-playfair font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {svc.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {svc.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  Learn More <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
