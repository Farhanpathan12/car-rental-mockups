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
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-midnight/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group shrink-0">
              <div className="w-8 h-8 border border-gold/60 rotate-45 group-hover:rotate-90 transition-transform duration-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-gold rotate-45" />
              </div>
              <span className="font-playfair text-xl md:text-2xl font-bold text-pearl tracking-tight">
                Wheels Four Rent
              </span>
            </a>

            {/* Desktop Links - Absolutely Centered */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-xs font-semibold uppercase tracking-widest text-silver/60 hover:text-gold transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a
                href="tel:+18005550199"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-silver/60 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>1-800-555-0199</span>
              </a>
              <a
                href="#book"
                className="px-6 py-2.5 bg-gold text-midnight text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold-hover transition-colors shadow-[0_0_20px_-5px_rgba(190,163,101,0.4)]"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-pearl p-2"
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
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-midnight flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-playfair font-bold text-pearl hover:text-gold transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#book"
              className="mt-4 px-8 py-4 bg-gold text-midnight font-bold uppercase tracking-widest text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
