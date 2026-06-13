"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Wifi, ArrowRight } from "lucide-react";
import Image from "next/image";

const fleet = [
  {
    id: "escalade",
    name: "Cadillac Escalade ESV",
    class: "Luxury Large SUV",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
    passengers: 6,
    luggage: 6,
    amenities: ["Premium WiFi", "Fiji Water", "Rear Screens", "Privacy Tint"],
    tagline: "Command every arrival.",
  },
  {
    id: "sclass",
    name: "Mercedes-Benz S-Class",
    class: "Executive Sedan",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
    passengers: 3,
    luggage: 3,
    amenities: ["Massage Seats", "Premium WiFi", "Fiji Water", "Ambient Lighting"],
    tagline: "The standard of executive travel.",
  },
  {
    id: "suburban",
    name: "Chevrolet Suburban LTZ",
    class: "Premium Family SUV",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop",
    passengers: 7,
    luggage: 8,
    amenities: ["Spacious Cabin", "WiFi Available", "Bottled Water", "USB Charging"],
    tagline: "Space, comfort, and family first.",
  },
];

export default function FleetShowcase() {
  return (
    <section id="fleet" className="bg-background">

      {/* Section Header */}
      <div className="py-20 max-w-7xl mx-auto px-6 lg:px-8 border-b border-gray-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs text-gold uppercase tracking-widest mb-4 font-semibold"
            >
              Embrace the Journey
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-playfair font-bold text-foreground"
            >
              The Finest<br />
              <span className="italic text-gold">Fleet on Long Island.</span>
            </motion.h2>
          </div>
          <p className="text-softgray max-w-xs text-sm leading-relaxed">
            Each vehicle is meticulously maintained, professionally detailed, and stocked with premium amenities before every journey.
          </p>
        </div>
      </div>

      {/* Alternating Vehicle Rows */}
      {fleet.map((vehicle, idx) => (
        <motion.div
          key={vehicle.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`grid lg:grid-cols-2 items-stretch ${idx % 2 === 1 ? "bg-deep-blue" : "bg-royal-blue"}`}
        >
          {/* Image */}
          <div className={`relative h-[450px] lg:h-auto ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-[3s]"
            />
            {/* Number overlay with gold tint */}
            <div className={`absolute top-8 ${idx % 2 === 1 ? "right-8" : "left-8"} z-10`}>
              <span className="text-7xl font-playfair font-bold text-gold/15 leading-none">
                0{idx + 1}
              </span>
            </div>
            {/* Gradient Overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Info */}
          <div className={`px-12 py-20 lg:px-24 flex flex-col justify-center ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                {vehicle.class}
              </span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-playfair font-bold text-pearl mb-4">
              {vehicle.name.split(" ").slice(0, 2).join(" ")}<br />
              <span className="italic text-gold font-normal">{vehicle.name.split(" ").slice(2).join(" ")}</span>
            </h3>
            <p className="text-silver/60 text-sm leading-relaxed mb-8 max-w-md">&ldquo;{vehicle.tagline}&rdquo;</p>

            {/* Specs with theme colors */}
            <div className="flex gap-10 border-y border-gold/10 py-8 mb-8">
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-gold" strokeWidth={2.5} />
                <div>
                  <p className="text-[9px] text-silver/40 uppercase tracking-tighter">Capacity</p>
                  <p className="font-bold text-pearl text-sm">{vehicle.passengers}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-gold" strokeWidth={2.5} />
                <div>
                  <p className="text-[9px] text-silver/40 uppercase tracking-tighter">Luggage</p>
                  <p className="font-bold text-pearl text-sm">{vehicle.luggage} Items</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Wifi className="w-4 h-4 text-gold" strokeWidth={2.5} />
                <div>
                  <p className="text-[9px] text-silver/40 uppercase tracking-tighter">Suite</p>
                  <p className="font-bold text-pearl text-sm">Included</p>
                </div>
              </div>
            </div>

            {/* Amenities pills with theme styling */}
            <div className="flex flex-wrap gap-2 mb-12">
              {vehicle.amenities.map((a) => (
                <span key={a} className="text-[9px] text-pearl/70 border border-gold/20 px-4 py-1.5 uppercase tracking-widest bg-gold/5 font-semibold">
                  {a}
                </span>
              ))}
            </div>

            <a
              href="#book"
              className="group inline-flex items-center gap-3 text-sm font-bold text-gold uppercase tracking-widest hover:gap-5 transition-all duration-300"
            >
              Reserve this Vehicle <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
