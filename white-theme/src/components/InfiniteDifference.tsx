"use client";

import { motion } from "framer-motion";
import { Award, History } from "lucide-react";

export default function SpringFordDifference() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[600px] w-full"
          >
            {/* Offset accent box */}
            <div className="absolute top-10 -left-10 w-full h-full bg-gold/8 pointer-events-none" />

            {/* Main image */}
            <div className="relative h-full w-full overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/lamborghini_yellow.png"
                alt="Luxury yellow Lamborghini sports car"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: "center" }}
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-white p-8 shadow-2xl z-20 border-b-2 border-gold"
            >
              <p className="font-playfair text-6xl font-bold text-gold leading-none mb-1">50+</p>
              <p className="text-[10px] font-bold tracking-widest text-charcoal uppercase">Luxury Cars</p>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-xs text-gold uppercase tracking-widest mb-6 font-semibold">Unmatched Experience</p>

            <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-8 leading-[1.05]">
              The Ultimate<br />
              <span className="italic text-gold font-medium">Self-Drive Thrill.</span>
            </h2>

            <p className="text-softgray text-lg mb-14 leading-relaxed">
              Take the keys to Hyderabad&apos;s most exclusive supercars and high-end SUVs. Whether it&apos;s for a luxury wedding entry, high-profile shoot, or weekend escape, we deliver pristine performance on your own terms.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-playfair font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                    Showroom Quality Vehicles
                  </h4>
                  <p className="text-softgray text-sm leading-relaxed">
                    Our luxury fleet undergoes rigorous mechanical maintenance and professional detailing before every single rental.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-gold/20 to-transparent" />

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-400">
                  <History className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-playfair font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                    100% Transparent Pricing
                  </h4>
                  <p className="text-softgray text-sm leading-relaxed">
                    Zero hidden charges, straightforward security deposits, and clean document processing for a hassle-free experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="#fleet"
                className="inline-flex items-center gap-3 text-sm font-bold text-gold uppercase tracking-widest hover:gap-5 transition-all duration-300"
              >
                Browse Our Fleet <span>→</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
