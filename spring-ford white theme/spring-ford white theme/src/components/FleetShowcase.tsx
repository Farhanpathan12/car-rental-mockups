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
