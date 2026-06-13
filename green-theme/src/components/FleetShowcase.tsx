"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Wifi } from "lucide-react";

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
    tagline: "Space, comfort, family first.",
  },
];

export default function FleetShowcase() {
  return (
    <section id="fleet" className="bg-black">

      {/* Header */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 pt-24 pb-16 border-b border-onyx-border">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <span className="font-raleway text-[10px] text-cognac uppercase tracking-[0.5em] font-semibold block mb-5">The Fleet</span>
            <h2 className="font-cinzel font-bold text-pearl uppercase leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              The Finest<br />
              <span className="text-cognac">Vehicles.</span>
            </h2>
          </div>
          <p className="font-raleway text-smoke max-w-xs text-sm leading-relaxed">
            Meticulously maintained, professionally detailed, and stocked with premium amenities before every journey.
          </p>
        </div>
      </div>

      {/* Full-width alternating vehicle sections */}
      {fleet.map((vehicle, idx) => (
        <motion.div
          key={vehicle.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className={`grid lg:grid-cols-2 border-b border-onyx-border`}
        >
          {/* Image */}
          <div className={`relative h-[420px] lg:h-auto overflow-hidden ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
            <img 
              src={vehicle.image} 
              alt={vehicle.name} 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" 
            />
            {/* Cognac bottom bar on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-cognac scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
          </div>

          {/* Content */}
          <div className={`px-12 py-16 lg:px-20 flex flex-col justify-center bg-black group ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
            <span className="font-raleway text-[9px] text-cognac uppercase tracking-[0.5em] mb-5 font-semibold">{vehicle.class}</span>
            <h3 className="font-cinzel text-pearl uppercase font-bold leading-[0.95] mb-3"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              {vehicle.name.split(" ").slice(0, 2).join(" ")}<br />
              <span className="text-cognac">{vehicle.name.split(" ").slice(2).join(" ")}</span>
            </h3>
            <p className="font-raleway text-smoke text-sm italic mb-8">&ldquo;{vehicle.tagline}&rdquo;</p>

            {/* Specs row */}
            <div className="flex gap-8 border-t border-b border-onyx-border py-6 mb-8">
              {[
                { Icon: Users, label: "Passengers", val: `Up to ${vehicle.passengers}` },
                { Icon: Briefcase, label: "Luggage", val: `${vehicle.luggage} Bags` },
                { Icon: Wifi, label: "Amenities", val: `${vehicle.amenities.length} Included` },
              ].map(({ Icon, label, val }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-cognac" />
                  <div>
                    <p className="font-raleway text-[8px] text-pearl/30 uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="font-raleway font-semibold text-pearl text-sm">{val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Amenity tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {vehicle.amenities.map((a) => (
                <span key={a} className="font-raleway text-[8px] text-smoke border border-onyx-border px-3 py-1.5 uppercase tracking-wider">
                  {a}
                </span>
              ))}
            </div>

            <a href="#book" className="inline-flex items-center gap-3 text-[10px] font-raleway font-bold text-cognac uppercase tracking-[0.35em] hover:gap-5 transition-all duration-300">
              Reserve This Vehicle →
            </a>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
