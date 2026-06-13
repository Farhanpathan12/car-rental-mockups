"use client";

import { motion } from "framer-motion";
import { Plane, Building2, Clock4, Star } from "lucide-react";

const services = [
  {
    title: "Airport Transfers",
    desc: "Seamless black-car service to JFK, LGA & Islip with real-time flight tracking.",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    tag: "Most Popular",
    num: "01",
  },
  {
    title: "Corporate Travel",
    desc: "Discreet, reliable transportation for C-suite executives and VIP clients.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    tag: "Executive",
    num: "02",
  },
  {
    title: "As-Directed Hourly",
    desc: "Your personal chauffeur on standby for any multi-stop itinerary.",
    icon: Clock4,
    image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=1200&auto=format&fit=crop",
    tag: "Flexible",
    num: "03",
  },
  {
    title: "Events & Galas",
    desc: "Arrive in cinematic style to weddings, Broadway, galas, and social events.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    tag: "Events",
    num: "04",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-black py-28 border-t border-onyx-border">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-raleway text-[10px] text-cognac uppercase tracking-[0.5em] font-semibold block mb-5">Professional Services</span>
            <h2 className="font-cinzel font-bold text-pearl uppercase leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
              Every Journey<br />
              <span className="text-cognac">Perfected.</span>
            </h2>
          </div>
          <a href="#book" className="group font-raleway text-sm text-cognac/60 hover:text-cognac transition-colors uppercase tracking-widest flex items-center gap-2">
            View All <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </div>

        {/* 2×2 Image cards with emerald theme */}
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-[420px] overflow-hidden cursor-pointer"
            >
              <img 
                src={svc.image} 
                alt={svc.title} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-90" 
              />

              {/* Forest-green gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/95 via-onyx/30 to-transparent" />
              {/* Emerald tint on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cognac/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number watermark */}
              <span className="absolute top-5 right-6 font-cinzel text-5xl font-black text-pearl/20 leading-none z-10">{svc.num}</span>

              {/* Tag */}
              <div className="absolute top-5 left-5 z-10">
                <span className="font-raleway text-[8px] text-cognac-light border border-cognac/50 px-2.5 py-1 uppercase tracking-[0.3em] bg-onyx/60 backdrop-blur-sm">
                  {svc.tag}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                {/* Emerald sweep line */}
                <div className="h-px bg-cognac mb-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 w-10" />
                <svc.icon className="w-5 h-5 text-cognac mb-3" />
                <h3 className="font-cinzel text-xl font-bold text-pearl uppercase tracking-wide mb-2">
                  {svc.title}
                </h3>
                <p className="font-raleway text-ash/50 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 max-w-xs">
                  {svc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
