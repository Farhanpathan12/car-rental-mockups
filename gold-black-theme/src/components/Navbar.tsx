"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Diamond } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Coverage", href: "#coverage" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-obsidian/90 backdrop-blur-2xl border-b border-gold/15 shadow-[0_4px_40px_rgba(0,0,0,0.8)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 relative">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-9 h-9 border border-gold/50 rotate-45 group-hover:rotate-[135deg] transition-transform duration-700 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-gold rotate-45 group-hover:scale-125 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 w-9 h-9 border border-gold/10 rotate-[22deg] group-hover:rotate-[112deg] transition-transform duration-700" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-playfair text-xl font-bold text-ivory tracking-wide whitespace-nowrap">
                  Spring-Ford <span className="text-gold-gradient">Luxury</span>
                </span>
                <span className="text-[8px] text-muted uppercase tracking-[0.3em] font-semibold mt-0.5">
                  Black Car Service
                </span>
              </div>
            </a>

            {/* Desktop Links — perfectly centered */}
            <div className="hidden lg:flex items-center justify-center gap-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-[11px] font-semibold text-silver/70 hover:text-gold uppercase tracking-[0.2em] transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-gold to-gold-bright group-hover:w-full transition-all duration-400" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+18005550199"
                className="flex items-center gap-2 text-[11px] text-silver/60 hover:text-gold transition-colors tracking-wider"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>1-800-555-0199</span>
              </a>
              <a
                href="#book"
                className="group relative overflow-hidden px-6 py-2.5 bg-gold text-obsidian text-[10px] font-black uppercase tracking-[0.25em] hover:bg-gold-bright transition-all duration-300 shadow-[0_0_20px_rgba(201,168,76,0.2)] hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
              >
                <span className="relative z-10">Reserve Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-ivory p-2 hover:text-gold transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col items-center justify-center"
          >
            {/* Background texture */}
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,_#C9A84C_1px,_transparent_0)] bg-[size:40px_40px]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="relative z-10 flex flex-col items-center gap-10 w-full px-8">
              <Diamond className="w-6 h-6 text-gold mb-4 animate-floatUp" />
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 + 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-4xl font-playfair font-bold text-ivory hover:text-gold-gradient transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#book"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 px-10 py-4 bg-gold text-obsidian font-black uppercase tracking-[0.3em] text-sm shadow-[0_0_40px_rgba(201,168,76,0.3)]"
                onClick={() => setMobileOpen(false)}
              >
                Reserve Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
