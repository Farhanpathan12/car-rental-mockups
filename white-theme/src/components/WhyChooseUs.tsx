"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Navigation, Clock, Radio, Lock, Users } from "lucide-react";

const whyItems = [
  {
    icon: ShieldCheck,
    title: "Zero Speed Governors",
    desc: "Experience the true power of luxury supercars without artificial limiters.",
  },
  {
    icon: Navigation,
    title: "Unlimited Kilometers",
    desc: "Drive as far as your heart desires. No strict daily limits on mileage.",
  },
  {
    icon: Clock,
    title: "24/7 Doorstep Delivery",
    desc: "We bring the car directly to your home, office, hotel, or airport in Hyderabad.",
  },
  {
    icon: Radio,
    title: "Instant Verification",
    desc: "Quick, hassle-free document review for rapid delivery.",
  },
  {
    icon: Lock,
    title: "Tollywood & Shoot Ready",
    desc: "Tailored hourly booking options for movie shoots and media events.",
  },
  {
    icon: Users,
    title: "Royal Wedding Experts",
    desc: "Flawless coordination for high-end entries, bidai, and floral decorations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        
        {/* Left — Dark Panel */}
        <div className="bg-midnight px-12 py-24 lg:px-20 flex flex-col justify-center relative overflow-hidden">
          {/* Background typography */}
          <span className="absolute -left-10 top-1/2 -translate-y-1/2 text-[18rem] font-playfair font-bold text-white/[0.02] leading-none select-none pointer-events-none">
            WHY
          </span>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative z-10"
          >
            <p className="text-xs text-gold uppercase tracking-widest mb-6 font-semibold">The Wheels Four Rent Edge</p>
            <h2 className="text-5xl lg:text-7xl font-playfair font-bold text-pearl leading-[0.95] mb-8">
              Elite.<br />
              <span className="italic text-gold">Unleashed.</span>
            </h2>
            <p className="text-silver/60 text-lg leading-relaxed max-w-sm">
              When driving is a personal statement, when luxury is non-negotiable, and when only the absolute finest vehicle will do — there is only one choice.
            </p>
            <div className="mt-10 w-16 h-px bg-gold" />
          </motion.div>
        </div>

        {/* Right — Light Panel with 6 items */}
        <div className="bg-background px-12 py-24 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {whyItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="group flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-playfair font-bold text-lg text-foreground group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-softgray leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
