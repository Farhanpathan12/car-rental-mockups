"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We rented the matte black G-Wagon for our commercial video shoot near Gachibowli. The vehicle was delivered camera-ready, spotless, and precisely on schedule. The best exotic hire in Hyderabad.",
    author: "Karan Verma",
    role: "Director of Photography",
    location: "Jubilee Hills, HYD",
    rating: 5,
    highlight: "Camera-ready and on schedule.",
  },
  {
    quote: "We hired the white Rolls-Royce Phantom for my daughter's royal wedding entry. The floral arrangement was spectacular and the vehicle's pristine shape made a stunning impression.",
    author: "Dr. Rao Bahadur",
    role: "Managing Director",
    location: "Banjara Hills, HYD",
    rating: 5,
    highlight: "Stunning royal entry.",
  },
  {
    quote: "Self-driving the Lamborghini Huracan along the Outer Ring Road was an unforgettable experience. Smooth document clearing, friendly team, and zero speed governor restrictions.",
    author: "Sanjay Reddy",
    role: "Tech Co-Founder",
    location: "Gachibowli, HYD",
    rating: 5,
    highlight: "Pure performance thrill.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-28 relative overflow-hidden">
      {/* Faint gold dots bg */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,_#EAA315_1px,_transparent_0)] bg-[size:36px_36px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-20 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs text-gold uppercase tracking-widest mb-4 font-semibold"
            >
              Distinguished Experiences
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-playfair font-bold text-foreground"
            >
              Voices of<br />
              <span className="italic text-gold">Excellence.</span>
            </motion.h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-softgray">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
            </div>
            <span>4.98 / 5.0 average across 1,000+ premium rentals</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
              className="group relative bg-white border border-gray-100 p-10 flex flex-col gap-6 hover:border-gold/30 hover:shadow-xl transition-all duration-500"
            >
              {/* Gold top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/60 via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Star rating */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold/20" />

              {/* Highlight text */}
              <p className="text-sm font-bold text-gold uppercase tracking-wider">{t.highlight}</p>

              {/* Full quote */}
              <p className="font-playfair italic text-lg leading-relaxed text-charcoal/80 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-6 flex items-start justify-between">
                <div>
                  <p className="font-bold text-foreground text-sm tracking-wide mb-0.5">{t.author}</p>
                  <p className="text-softgray text-xs">{t.role}</p>
                  <p className="text-softgray/60 text-xs mt-0.5">{t.location}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-gold font-playfair font-bold text-sm">{t.author[0]}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
