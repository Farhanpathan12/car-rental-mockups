"use client";

import { motion } from "framer-motion";
import { Award, History } from "lucide-react";

export default function InfiniteDifference() {
  return (
    <section className="py-32 bg-deep-blue relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[650px] w-full"
          >
            {/* Offset accent box with gold border */}
            <div className="absolute top-10 -left-10 w-full h-full border border-gold/20 pointer-events-none" />

            {/* Main image with luxury frame */}
            <div className="relative h-full w-full overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] rounded-sm border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury black car chauffeur service"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000"
              />
              {/* Subtle vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-deep-blue/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge with premium styling */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-royal-blue border border-gold/30 p-10 shadow-2xl z-20 backdrop-blur-xl"
            >
              <div className="flex flex-col items-center">
                <p className="font-playfair text-7xl font-bold text-gold leading-none mb-2">20</p>
                <p className="text-[10px] font-black tracking-[0.4em] text-white/50 uppercase">Years of Artistry</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-gold" />
              <p className="text-xs text-gold uppercase tracking-[0.4em] font-bold">Our Philosophy</p>
            </div>

            <h2 className="text-5xl lg:text-7xl font-playfair font-bold text-pearl mb-10 leading-[1.05]">
              The Art of<br />
              <span className="italic text-gold font-normal">Arriving.</span>
            </h2>

            <p className="text-silver/70 text-lg mb-14 leading-relaxed max-w-xl font-light">
              We understand that the journey is just as important as the destination. For over two decades, we have dedicated ourselves to perfecting the nuanced art of high-end transportation.
            </p>

            <div className="space-y-12">
              <div className="flex gap-8 items-start group">
                <div className="w-14 h-14 border border-gold/20 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold/10 transition-all duration-500">
                  <Award className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xl font-playfair font-bold text-pearl mb-2 tracking-wide group-hover:text-gold transition-colors">
                    Safety & Discretion
                  </h4>
                  <p className="text-silver/50 text-sm leading-relaxed max-w-sm">
                    Rigorous maintenance and elite chauffeurs ensure absolute peace of mind during every mile.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-14 h-14 border border-gold/20 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold/10 transition-all duration-500">
                  <History className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xl font-playfair font-bold text-pearl mb-2 tracking-wide group-hover:text-gold transition-colors">
                    Legacy of Reliability
                  </h4>
                  <p className="text-silver/50 text-sm leading-relaxed max-w-sm">
                    A 97% client retention rate built on two decades of consistent, uncompromised performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <a
                href="#book"
                className="group inline-flex items-center gap-4 text-xs font-black text-gold uppercase tracking-[0.3em] hover:gap-6 transition-all duration-300"
              >
                <span>Discover Our Legacy</span>
                <div className="w-8 h-[1px] bg-gold group-hover:w-12 transition-all duration-300" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
