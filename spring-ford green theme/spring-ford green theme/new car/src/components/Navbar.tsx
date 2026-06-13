"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

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
      {/* Thin emerald top accent line */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cognac-dark via-cognac to-cognac-dark z-50" />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className={`fixed top-[3px] left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-black/97 backdrop-blur-2xl border-b border-onyx-border shadow-[0_8px_40px_rgba(0,0,0,0.9)]"
            : "bg-transparent border-b border-white/5"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[70px]">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-8 h-8 border border-cognac/60 flex items-center justify-center group-hover:bg-cognac/10 transition-colors">
                <span className="font-cinzel text-cognac font-bold text-base leading-none">S</span>
              </div>
              <div>
                <span className="font-cinzel text-[13px] tracking-[0.2em] text-pearl font-semibold uppercase block leading-none group-hover:text-cognac transition-colors">SPRING-FORD</span>
                <span className="font-raleway text-[8px] tracking-[0.3em] text-cognac uppercase font-bold">Luxury Rides</span>
              </div>
            </a>

            {/* Desktop nav links - Centered */}
            <div className="hidden lg:flex flex-1 justify-center items-center gap-10">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}
                  className="font-raleway text-[11px] font-bold text-pearl/70 hover:text-cognac transition-colors duration-300 tracking-[0.2em] uppercase relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-cognac scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-6 shrink-0">
              <a href="tel:+18005550199" className="flex items-center gap-2 text-[11px] text-pearl/50 hover:text-cognac transition-colors tracking-wide font-medium">
                <Phone className="w-3.5 h-3.5" />
                1-800-555-0199
              </a>
              <a href="#book"
                className="px-5 py-2.5 bg-cognac text-pearl text-[10px] font-raleway font-bold uppercase tracking-[0.2em] hover:bg-cognac-light transition-colors duration-300">
                Book Now
              </a>
            </div>

            <button className="lg:hidden text-pearl p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black flex flex-col items-center justify-center gap-9"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,122,72,0.08)_0%,_transparent_60%)]" />
            {navLinks.map((link, idx) => (
              <motion.a key={link.label} href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07 }}
                onClick={() => setMobileOpen(false)}
                className="font-cinzel text-2xl font-bold text-pearl hover:text-cognac transition-colors tracking-widest uppercase">
                {link.label}
              </motion.a>
            ))}
            <a href="#book" onClick={() => setMobileOpen(false)}
              className="mt-6 px-10 py-4 bg-cognac text-pearl font-raleway font-bold uppercase tracking-widest text-xs hover:bg-cognac-light transition-colors">
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
