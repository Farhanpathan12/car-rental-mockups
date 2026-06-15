"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Wifi, ArrowRight } from "lucide-react";
import Image from "next/image";

const fleet = [
  {
    id: "rolls-royce",
    name: "Rolls-Royce Phantom Series II",
    class: "Ultra-Luxury Limousine",
    image: "/images/rolls_royce_white.png",
    passengers: 4,
    luggage: 4,
    amenities: ["Royal Starlight Headliner", "Signature Coach Doors", "Custom Floral Decor Ready", "Rear Theater Screens"],
    tagline: "The absolute pinnacle of wedding entries and state presence.",
  },
  {
    id: "g-wagon",
    name: "Mercedes-AMG G-63 AMG",
    class: "High-Performance SUV",
    image: "/images/g_wagon_black.png",
    passengers: 5,
    luggage: 5,
    amenities: ["V8 BiTurbo Engine", "Satin Matte Black Finish", "Premium Exhaust Valve", "Burmester Sound System"],
    tagline: "Command ultimate presence and raw authority on the street.",
  },
  {
    id: "lamborghini",
    name: "Lamborghini Huracan LP 610-4",
    class: "Exotic V10 Supercar",
    image: "/images/lamborghini_yellow.png",
    passengers: 2,
    luggage: 1,
    amenities: ["Naturally Aspirated V10", "Zero Speed Governor", "Corsa Performance Exhaust", "Carbon Fiber Trim"],
    tagline: "Turn heads instantly. Feel the racing adrenaline of an absolute beast.",
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
              Experience The Pinnacle
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-playfair font-bold text-foreground"
            >
              The Finest<br />
              <span className="italic text-gold">Fleet in Hyderabad.</span>
            </motion.h2>
          </div>
          <p className="text-softgray max-w-xs text-sm leading-relaxed">
            Every machine in our garage is hand-polished, mechanically verified, and prepared to deliver pure motoring perfection.
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
          className={`grid lg:grid-cols-2 items-stretch ${idx === 1 ? "bg-background" : "bg-[#F2EFE8]"}`}
        >
          {/* Image */}
          <div className={`relative h-[380px] lg:h-auto ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              fill
              className="object-cover object-center"
            />
            {/* Number overlay */}
            <div className={`absolute top-8 ${idx % 2 === 1 ? "right-8" : "left-8"} z-10`}>
              <span className="text-6xl font-playfair font-bold text-white/20 leading-none">
                0{idx + 1}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className={`px-12 py-16 lg:px-20 flex flex-col justify-center ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
            <span className="text-[10px] uppercase tracking-widest text-gold font-semibold mb-6">
              {vehicle.class}
            </span>
            <h3 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
              {vehicle.name.split(" ").slice(0, 2).join(" ")}<br />
              <span className="italic text-gold font-medium">{vehicle.name.split(" ").slice(2).join(" ")}</span>
            </h3>
            <p className="text-softgray text-sm italic mb-8">&ldquo;{vehicle.tagline}&rdquo;</p>

            {/* Specs */}
            <div className="flex gap-8 border-y border-gray-200 py-6 mb-8">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gold" />
                <div>
                  <p className="text-[10px] text-softgray uppercase">Passengers</p>
                  <p className="font-bold text-foreground text-sm">Up to {vehicle.passengers}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-gold" />
                <div>
                  <p className="text-[10px] text-softgray uppercase">Luggage</p>
                  <p className="font-bold text-foreground text-sm">{vehicle.luggage} Bags</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-gold" />
                <div>
                  <p className="text-[10px] text-softgray uppercase">Amenities</p>
                  <p className="font-bold text-foreground text-sm">{vehicle.amenities.length} Included</p>
                </div>
              </div>
            </div>

            {/* Amenities pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {vehicle.amenities.map((a) => (
                <span key={a} className="text-[10px] text-charcoal/60 border border-gray-200 px-3 py-1 uppercase tracking-wider">
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
