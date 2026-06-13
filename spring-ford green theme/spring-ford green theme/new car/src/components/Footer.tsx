import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  {
    heading: "Services",
    links: ["Airport Transfers", "Corporate Travel", "Hourly Charter", "NYC Events", "Weddings"],
  },
  {
    heading: "Company",
    links: ["About Us", "Our Fleet", "Testimonials", "Service Areas", "Careers"],
  },
  {
    heading: "Legal",
    links: ["Terms of Service", "Privacy Policy", "Cancellation Policy", "Wait Time Policy"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Top emerald stripe */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cognac to-transparent" />
      {/* Forest glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cognac/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 pt-20 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

          {/* Brand col */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 border border-cognac/50 flex items-center justify-center">
                <span className="font-cinzel text-cognac font-bold text-base leading-none">S</span>
              </div>
              <div>
                <span className="font-cinzel text-[13px] tracking-[0.2em] text-pearl font-semibold uppercase block leading-none">SPRING-FORD</span>
                <span className="font-raleway text-[8px] tracking-[0.3em] text-cognac uppercase font-bold">Luxury Rides</span>
              </div>
            </div>

            <p className="font-raleway text-pearl/50 text-sm leading-relaxed mb-8 max-w-xs">
              Pennsylvania&apos;s most distinguished luxury transportation service. Redefining executive and family travel since 2004.
            </p>

            {/* Social */}
            <div className="flex gap-3 mb-10">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 border border-onyx-border flex items-center justify-center text-ash/25 hover:border-cognac/50 hover:text-cognac transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-4">
              {[
                { Icon: Phone, text: "1 (800) 555-0199" },
                { Icon: Mail, text: "bookings@infinitecar.com" },
                { Icon: MapPin, text: "100 Forest Ave, Garden City, NY 11530" },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                  <span className="font-raleway text-smoke text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="font-cinzel text-[9px] uppercase tracking-[0.4em] font-bold text-pearl/30 mb-6 pb-3 border-b border-onyx-border">{col.heading}</h3>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-raleway text-smoke text-sm hover:text-cognac transition-colors duration-200 flex items-center gap-2 group">
                      <span className="w-3 h-px bg-cognac/0 group-hover:bg-cognac/60 transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Emerald gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-cognac/25 to-transparent mx-6 lg:mx-14" />

      {/* Bottom strip */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 py-7 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-raleway text-pearl/20 text-xs">
          &copy; {new Date().getFullYear()} Spring-Ford Luxury Rides. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-cognac rounded-full animate-pulse" />
          <p className="font-raleway text-pearl/40 text-xs uppercase tracking-[0.25em]">Pennsylvania, USA</p>
        </div>
      </div>
    </footer>
  );
}
