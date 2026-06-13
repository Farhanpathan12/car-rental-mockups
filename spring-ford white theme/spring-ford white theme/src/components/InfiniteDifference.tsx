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
                src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury black car chauffeur service"
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
              <p className="font-playfair text-6xl font-bold text-gold leading-none mb-1">20</p>
              <p className="text-[10px] font-bold tracking-widest text-charcoal uppercase">Years of Service</p>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-xs text-gold uppercase tracking-widest mb-6 font-semibold">Our Ethos</p>

            <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-8 leading-[1.05]">
              The Art of<br />
              <span className="italic text-gold font-medium">Arriving in Style.</span>
            </h2>

            <p className="text-softgray text-lg mb-14 leading-relaxed">
              We understand that the journey is just as important as the destination. For over two decades, we have dedicated ourselves to perfecting the nuanced art of high-end transportation, ensuring every moment spent in our care is flawless.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-playfair font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                    Safety First, Always
                  </h4>
                  <p className="text-softgray text-sm leading-relaxed">
                    Rigorous vehicle maintenance, background-checked chauffeurs, and comprehensive insurance — every single ride.
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
                    97% Client Retention Rate
                  </h4>
                  <p className="text-softgray text-sm leading-relaxed">
                    Our clients trust us repeatedly because we consistently meet — and exceed — the highest standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="#book"
                className="inline-flex items-center gap-3 text-sm font-bold text-gold uppercase tracking-widest hover:gap-5 transition-all duration-300"
              >
                Learn Our Story <span>→</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
