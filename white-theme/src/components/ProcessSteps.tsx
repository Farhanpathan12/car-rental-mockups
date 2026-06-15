"use client";

import { motion } from "framer-motion";
import { ClipboardList, UserCheck, CreditCard, Car } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Select Your Ride",
    desc: "Browse our fleet online and check availability via a quick call or WhatsApp.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Upload KYC Info",
    desc: "Submit a copy of your valid driving license and basic ID for instant clearance.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Secure Deposit",
    desc: "Pay a fully refundable security deposit online or upon doorstep delivery.",
  },
  {
    number: "04",
    icon: Car,
    title: "Ignite & Escape",
    desc: "Receive the keys, inspect your immaculate machine, and hit the open road.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,_#BEA365_1px,_transparent_0)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs text-gold uppercase tracking-widest mb-4 font-semibold"
          >
            Simple & Seamless
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-playfair font-bold text-foreground"
          >
            How It <span className="italic text-gold">Works.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gold/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step circle */}
                <div className="relative mb-8">
                  <div className="w-28 h-28 rounded-full border border-gold/20 bg-white flex items-center justify-center shadow-xl shadow-gold/5 group-hover:border-gold/60 group-hover:shadow-gold/20 transition-all duration-500">
                    <step.icon className="w-8 h-8 text-gold" />
                  </div>
                  <span className="absolute -top-2 -right-2 text-xs font-bold text-white bg-gold w-7 h-7 rounded-full flex items-center justify-center">
                    {idx + 1}
                  </span>
                </div>

                <p className="text-xs tracking-widest text-gold/60 uppercase mb-2 font-semibold">{step.number}</p>
                <h3 className="text-xl font-playfair font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-softgray leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
