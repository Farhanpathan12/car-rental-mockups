"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    number: "01",
    title: "Executive Travel",
    subtitle: "Business Class. Redefined.",
    desc: "Maximize productivity and minimize stress. Your mobile office comes equipped with high-speed WiFi, absolute silence, and strict discretion.",
    items: ["High-speed complimentary WiFi", "Real-time flight tracking", "Strict confidentiality & privacy"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200", 
  },
  {
    number: "02",
    title: "Family Transfers",
    subtitle: "Your Family, Our Priority.",
    desc: "Spacious, immaculate vehicles with premium amenities curated for every family member. From pristine car seats to effortless airport navigation.",
    items: ["Spacious SUVs for ample luggage", "Premium car seats available", "Stress-free airport navigation"],
    image: "https://images.unsplash.com/photo-1549237511-6b64e006ce65?auto=format&fit=crop&q=80&w=1200", 
  },
];

export default function ValueProp() {
  return (
    <section className="bg-black py-32 overflow-hidden relative">
      {/* Subtle emerald grid pattern on dark background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#1E7A48_1px,transparent_1px),linear-gradient(to_bottom,#1E7A48_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 relative z-10">
        
        {cards.map((card, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-14 lg:gap-24 mb-32 last:mb-0`}>
            
            {/* Image Side - Editorial Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-5/12 aspect-[4/5] relative bg-black shadow-2xl group"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlapping Number */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 1 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`absolute ${idx % 2 === 1 ? "-right-8" : "-left-8"} -bottom-8 w-24 h-24 bg-cognac flex items-center justify-center shadow-xl z-20`}
              >
                <span className="font-cinzel text-5xl font-black text-onyx leading-none">{card.number}</span>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 1 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-6/12 pt-8 lg:pt-0"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-cognac" />
                <p className="font-raleway text-[10px] font-bold text-cognac uppercase tracking-[0.4em]">{card.subtitle}</p>
              </div>
              
              <h2 className="font-cinzel text-pearl uppercase font-black leading-[0.9] mb-8"
                style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}
              >
                {card.title}
              </h2>
              
              <p className="font-raleway text-pearl/60 text-base lg:text-lg leading-relaxed mb-10 max-w-lg">
                {card.desc}
              </p>
              
              <ul className="space-y-4 mb-12">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-4 font-raleway text-sm text-pearl/50">
                    <span className="w-1.5 h-1.5 bg-cognac rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <a href="#book" className="group inline-flex items-center gap-4 text-[11px] font-raleway font-bold text-pearl uppercase tracking-[0.3em] hover:text-cognac transition-all duration-300">
                <span className="w-10 h-10 border border-cognac/30 rounded-full flex items-center justify-center group-hover:bg-cognac transition-colors">
                  <span className="w-1.5 h-1.5 bg-cognac group-hover:bg-onyx rounded-full transition-colors" />
                </span>
                Reserve Now
              </a>
            </motion.div>
            
          </div>
        ))}

      </div>
    </section>
  );
}
