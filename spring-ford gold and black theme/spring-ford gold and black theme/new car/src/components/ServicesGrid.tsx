"use client";

import { motion } from "framer-motion";
import { Plane, Building2, Clock4, Star, ChevronRight, ShieldCheck, MapPin } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: "airport",
    title: "Airport Transfers",
    description: "Guaranteed punctual black-car service to JFK, LGA & Liberty. Includes real-time flight tracking and curbside pick-up.",
    icon: Plane,
    image: "/services/airport_service_premium_1775549642550.png",
    tag: "Priority Service",
    gridClass: "lg:col-span-8 lg:row-span-1",
  },
  {
    id: "corporate",
    title: "Corporate Excellence",
    description: "Discreet transportation for executives. Monthly billing and dedicated account management available.",
    icon: Building2,
    image: "/services/corporate_service_premium_1775549661414.png",
    tag: "Executive",
    gridClass: "lg:col-span-4 lg:row-span-2",
  },
  {
    id: "hourly",
    title: "As-Directed Hourly",
    description: "Your chauffeur remains on standby for multi-stop meetings, shopping, or evening excursions.",
    icon: Clock4,
    image: "/services/hourly_service_premium_1775549682071.png",
    tag: "Flexible",
    gridClass: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: "events",
    title: "NYC Events & Galas",
    description: "Arrive in cinematic style to weddings, movie premieres, and luxury social events across the city.",
    icon: Star,
    image: "/services/events_service_premium_1775549701420.png",
    tag: "Special Events",
    gridClass: "lg:col-span-4 lg:row-span-1",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-32 bg-void relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 blur-[150px] -z-10" />
      
      {/* Horizontal Stripe Detail */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span className="text-[10px] text-gold uppercase tracking-[0.6em] font-black">
                The Gold Standard
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl lg:text-7xl font-playfair font-bold text-ivory leading-[1.1]"
            >
              Every Journey,<br />
              <span className="italic text-gold-gradient">Perfected.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center gap-10"
          >
             <div className="flex flex-col items-end">
                <span className="text-[10px] text-silver/40 uppercase tracking-widest font-bold mb-1">Service Locations</span>
                <span className="text-sm text-ivory font-medium">NYC • Hamptons • Long Island</span>
             </div>
             <div className="h-12 w-px bg-gold/20" />
             <a href="#booking" className="bg-gold text-void px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-gold-bright transition-all shadow-[0_0_30px_rgba(201,168,76,0.15)]">
               Explore All
             </a>
          </motion.div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[450px]">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              className={`${svc.gridClass} group relative overflow-hidden rounded-2xl border border-white/5 bg-charcoal cursor-pointer`}
            >
              {/* Background Image with Layered Shadows */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover object-center transition-transform duration-[2s] group-hover:scale-105 brightness-[0.4] group-hover:brightness-[0.6]"
                />
                {/* Dynamic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent transition-opacity duration-700 opacity-80 group-hover:opacity-40" />
                <div className="absolute inset-0 border-[0.5px] border-white/5 rounded-2xl z-10" />
              </div>

              {/* Card Header (Floating Tag) */}
              <div className="absolute top-8 left-8 z-20">
                <div className="flex items-center gap-3">
                   <div className="h-1px w-4 bg-gold/40" />
                   <span className="text-[9px] text-gold uppercase tracking-[0.3em] font-black">
                     {svc.tag}
                   </span>
                </div>
              </div>

              {/* Content (Bottom Anchored) */}
              <div className="absolute inset-0 flex flex-col justify-end p-10 z-20">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                       <svc.icon className="w-6 h-6 text-gold mb-2" strokeWidth={1.5} />
                       <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-ivory tracking-tight group-hover:text-gold transition-colors duration-500">
                         {svc.title}
                       </h3>
                    </div>
                  </div>

                  <div className="h-px w-full bg-white/5 overflow-hidden">
                     <motion.div 
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.8 }}
                        className="h-full w-full bg-gold/40"
                     />
                  </div>

                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-silver/50 text-sm leading-relaxed max-w-sm pt-2">
                        {svc.description}
                      </p>
                      <div className="flex items-center gap-4 mt-6">
                         <span className="text-[10px] text-gold font-black uppercase tracking-[0.4em]">Learn More</span>
                         <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                           <ChevronRight className="w-3 h-3 text-gold group-hover:text-void transition-colors" />
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Icon */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                 <div className="p-3 rounded-full bg-white/5 backdrop-blur-md">
                   <MapPin className="w-4 h-4 text-gold/40" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Call to Action */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-20 flex justify-center"
        >
          <div className="px-10 py-6 border border-white/5 bg-void/50 backdrop-blur-xl rounded-full flex flex-col md:flex-row items-center gap-8 shadow-2xl">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                   <Star className="w-5 h-5 text-gold" />
                </div>
                <p className="text-silver/60 text-[11px] uppercase tracking-[0.2em] font-bold">Over <span className="text-ivory">5,000+</span> Elite Clients Served Annually</p>
             </div>
             <div className="hidden md:block h-6 w-px bg-white/10" />
             <button className="text-gold text-[10px] font-black uppercase tracking-[0.4em] hover:text-gold-bright transition-all flex items-center gap-4">
                Reserve Your Chauffeur
                <ChevronRight className="w-3 h-3" />
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
