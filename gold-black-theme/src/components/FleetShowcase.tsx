"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Wifi, ArrowRight, Gauge, ShieldCheck, MapPin, Eye, MousePointer2, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const fleet = [
  {
    id: "escalade",
    name: "Cadillac Escalade ESV",
    class: "Luxury Large SUV",
    exterior: "/fleet/escalade_studio_1775549145141.png",
    interior: "/fleet/escalade_interior_1775549207965.png",
    passengers: 6,
    luggage: 6,
    specs: [
      { label: "Captain's Chairs", value: "Executive Recline" },
      { label: "Sound", value: "AKG Studio Reference" },
      { label: "Connectivity", value: "4G LTE Wi-Fi" },
    ],
    amenities: ["Signature Snacks", "Bottle Service", "Privacy Partition", "OLED Rear Screens"],
    tagline: "The Unrivaled Flagship of American Luxury",
    description: "Command the road in the legendary Escalade. Featuring a cavernous interior with hand-stitched leather and cutting-edge tech, it's the gold standard for executive transport.",
  },
  {
    id: "sclass",
    name: "Mercedes-Benz S-Class",
    class: "Elite Executive Sedan",
    exterior: "/fleet/sclass_studio_1775549161054.png",
    interior: "/fleet/sclass_interior_1775549224304.png",
    passengers: 3,
    luggage: 3,
    specs: [
      { label: "Rear Seating", value: "Massage & Heat" },
      { label: "Air Quality", value: "Ionized & Fragranced" },
      { label: "Cabin Noise", value: "Acoustic Silence" },
    ],
    amenities: ["Soft-Close Doors", "Wine Chiller", "Nappa Leather", "4-Zone Climate"],
    tagline: "The Pinnacle of Engineering & Elegance",
    description: "For those who demand the finest. The S-Class offers a whisper-quiet ride and unmatched sophistication, perfect for first-class arrival at any event.",
  },
  {
    id: "suburban",
    name: "Chevrolet Suburban LTZ",
    class: "Premium Group Transport",
    exterior: "/fleet/suburban_studio_1775549181763.png",
    interior: "/fleet/suburban_interior_1775549243412.png",
    passengers: 7,
    luggage: 8,
    specs: [
      { label: "Max Luggage", value: "8 Large Bags" },
      { label: "Entertainment", value: "Dual Rear Screens" },
      { label: "Seating", value: "Heated Second Row" },
    ],
    amenities: ["USB-C Charging", "Extended Cargo", "Quiet Cabin", "Smooth Suspension"],
    tagline: "Versatile Luxury for Every Occasion.",
    description: "Whether it's a family getaway or a corporate team outing, the Suburban provides the reliability and space you need without sacrificing an ounce of luxury.",
  }
];

export default function FleetShowcase() {
  const [viewState, setViewState] = useState<Record<string, "exterior" | "interior">>(
    Object.fromEntries(fleet.map(v => [v.id, "exterior"]))
  );

  const toggleView = (id: string) => {
    setViewState(prev => ({
      ...prev,
      [id]: prev[id] === "exterior" ? "interior" : "exterior"
    }));
  };

  return (
    <section id="fleet" className="relative bg-void overflow-hidden py-24">
      {/* Decorative Overlays */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-gold/3 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Floating Heritage Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.01] uppercase tracking-tighter whitespace-nowrap pointer-events-none select-none">
        Heritage
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Modern Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-[10px] text-gold uppercase tracking-[0.5em] font-black">
              The Prestige Fleet
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-ivory leading-[0.9]"
            >
              Curated For <br />
              <span className="italic text-gold-gradient">The Discerning.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-md pb-4"
            >
              <p className="text-silver/50 text-lg leading-relaxed font-light">
                Discover a collection of world-class vehicles, each selected for its presence, performance, and peerless comfort.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="space-y-24">
          {fleet.map((vehicle, idx) => (
            <div key={vehicle.id} className="relative group/vehicle">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                
                {/* Media Section (Large) */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className={`lg:col-span-7 relative ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-charcoal border border-white/5 shadow-2xl">
                    <div className="absolute inset-0 bg-void/20 z-10" />
                    
                    {/* Main Image */}
                    <div className="relative w-full h-full transition-transform duration-1000 group-hover:scale-105">
                      <Image
                        src={viewState[vehicle.id] === "exterior" ? vehicle.exterior : vehicle.interior}
                        alt={vehicle.name}
                        fill
                        className="object-cover brightness-[0.8] contrast-[1.1]"
                      />
                    </div>

                    {/* Image Overlay UI */}
                    <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className="bg-void/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                          <span className="text-[10px] text-ivory/80 uppercase tracking-widest font-bold">
                            Chauffeur Experience
                          </span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleView(vehicle.id)}
                          className="bg-gold text-void px-5 py-2.5 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-wider shadow-[0_0_20px_rgba(201,168,76,0.5)]"
                        >
                          {viewState[vehicle.id] === "exterior" ? <Eye className="w-3 h-3" /> : <MousePointer2 className="w-3 h-3" />}
                          {viewState[vehicle.id] === "exterior" ? "View Interior" : "View Exterior"}
                        </motion.button>
                      </div>

                      <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-full border border-gold/40 flex items-center justify-center backdrop-blur-sm bg-void/20">
                          <Star className="w-5 h-5 text-gold fill-gold" />
                        </div>
                        <div className="h-12 flex items-center px-6 rounded-full border border-white/10 backdrop-blur-sm bg-void/20 text-ivory text-xs font-medium uppercase tracking-[0.2em]">
                          Elite Series 0{idx + 1}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Aesthetic Shadow */}
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold/5 blur-[100px] -z-10 rounded-full" />
                </motion.div>

                {/* Content Section */}
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex flex-col gap-6">
                    <div>
                      <span className="text-[10px] text-gold font-black uppercase tracking-[0.4em] mb-3 block">
                        {vehicle.class}
                      </span>
                      <h3 className="text-4xl lg:text-5xl font-playfair font-bold text-ivory mb-4 tracking-tight leading-tight">
                        {vehicle.name}
                      </h3>
                      <p className="text-silver/60 text-base leading-relaxed font-light mb-6 italic">
                        &quot;{vehicle.tagline}&quot;
                      </p>
                    </div>

                    <p className="text-silver/60 text-xs leading-relaxed max-w-sm">
                      {vehicle.description}
                    </p>

                    {/* Key Specs Grid */}
                    <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                      {vehicle.specs.map((spec, i) => (
                        <div key={i}>
                          <p className="text-[9px] text-gold uppercase tracking-[0.2em] font-bold mb-1">{spec.label}</p>
                          <p className="text-ivory text-sm font-medium">{spec.value}</p>
                        </div>
                      ))}
                      <div className="flex items-center gap-6 mt-4 col-span-2">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 mb-1">
                            <Users className="w-3 h-3 text-gold" />
                            <span className="text-[9px] text-silver/40 uppercase font-black">Capacity</span>
                          </div>
                          <span className="text-xs text-ivory">{vehicle.passengers} GUESTS</span>
                        </div>
                        <div className="flex flex-col border-l border-white/10 pl-6">
                          <div className="flex items-center gap-2 mb-1">
                            <Briefcase className="w-3 h-3 text-gold" />
                            <span className="text-[9px] text-silver/40 uppercase font-black">Luggage</span>
                          </div>
                          <span className="text-xs text-ivory">{vehicle.luggage} CASES</span>
                        </div>
                      </div>
                    </div>

                    {/* Amenities Badges */}
                    <div className="flex flex-wrap gap-2">
                      {vehicle.amenities.map(item => (
                        <span key={item} className="px-3 py-1.5 bg-white/[0.02] border border-white/5 text-[9px] text-silver/60 uppercase tracking-widest font-black flex items-center gap-2">
                          <div className="w-1 h-1 bg-gold rounded-full" />
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4">
                      <motion.a
                        href="#book"
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-8 group"
                      >
                        <div className="flex flex-col">
                          <span className="text-[10px] text-gold font-black uppercase tracking-[0.3em] mb-1">Secure Reservation</span>
                          <div className="h-px w-full bg-gold/20 relative overflow-hidden">
                             <motion.div 
                               initial={{ x: "-100%" }}
                               whileHover={{ x: "100%" }}
                               transition={{ duration: 0.5 }}
                               className="absolute inset-0 bg-gold"
                             />
                          </div>
                        </div>
                        <div className="h-12 w-12 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                          <ArrowRight className="w-4 h-4 text-gold group-hover:text-void transition-colors duration-500" />
                        </div>
                      </motion.a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Service Bar */}
        <div className="mt-24 flex flex-col items-center">
           <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold/30 to-transparent mb-8" />
           <div className="text-center max-w-2xl">
              <h4 className="text-ivory font-playfair text-3xl mb-3 italic">Uncompromising Standards.</h4>
              <p className="text-silver/40 text-xs mb-8">All vehicles are maintained to factory standards and sanitized before every journey.</p>
              <div className="flex gap-4 justify-center">
                 <button className="px-8 py-4 bg-gold text-void text-[10px] font-black uppercase tracking-[0.3em] hover:bg-gold-bright transition-all shadow-[0_0_30px_rgba(201,168,76,0.1)]">
                    Reserve Now
                 </button>
                 <button className="px-8 py-4 border border-white/10 text-ivory text-[10px] font-black uppercase tracking-[0.3em] hover:border-gold/30 transition-all">
                    Inventory
                 </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
