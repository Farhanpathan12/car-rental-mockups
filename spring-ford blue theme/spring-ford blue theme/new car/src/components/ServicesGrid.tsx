"use client";

import { motion } from "framer-motion";
import { Plane, Building2, Clock4, Star } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Airport Transfers",
    description: "Guaranteed punctual black-car service to JFK, LGA & Islip. Flight tracking included.",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    tag: "Most Popular",
  },
  {
    title: "Corporate Travel",
    description: "Discreet, reliable transportation for C-suite executives and VIP clients worldwide.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    tag: "Executive",
  },
  {
    title: "As-Directed Hourly",
    description: "Your personal chauffeur on standby for multi-stop itineraries and full-day bookings.",
    icon: Clock4,
    image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=1200&auto=format&fit=crop",
    tag: "Flexible",
  },
  {
    title: "NYC Events & Galas",
    description: "Arrive in cinematic style to weddings, galas, Broadway, and premium social events.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    tag: "Events",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-28 bg-deep-blue relative overflow-hidden">
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
              Professional Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-playfair font-bold text-pearl leading-tight"
            >
              Every Journey,<br />
              <span className="italic text-gold">Perfected.</span>
            </motion.h2>
          </div>
          <a href="#book" className="text-gold/70 text-sm font-medium hover:text-gold transition-colors flex items-center gap-2 whitespace-nowrap">
            View All Services <span>→</span>
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
