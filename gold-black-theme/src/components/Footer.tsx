import { Phone, Mail, MapPin, Instagram, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

/* ── Design: Magazine-style wide horizontal footer ── */
const links = [
  { head: "Services", items: ["Airport Transfers", "Corporate Travel", "Hourly Charter", "NYC Events", "Weddings"] },
  { head: "Company",  items: ["About Us", "Our Fleet", "Testimonials", "Service Areas", "Careers"] },
  { head: "Legal",    items: ["Terms of Service", "Privacy Policy", "Cancellation", "Wait Time"] },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-gold/10 relative overflow-hidden">
      {/* Faint bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-gold/[0.02] blur-3xl rounded-full pointer-events-none" />

      {/* Main grid */}
      <div className="max-w-[1400px] mx-auto px-10 lg:px-20 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-14 border-b border-gold/8 pb-16 mb-10">

          {/* Brand column */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 border border-gold/50 rotate-45" />
                <div className="absolute inset-[6px] bg-gold rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center text-[9px] font-black text-obsidian z-10">SF</span>
              </div>
              <div>
                <p className="font-playfair font-bold text-ivory text-lg leading-none">Spring-Ford</p>
                <p className="text-[8px] uppercase tracking-[0.35em] text-gold mt-0.5 font-semibold">Luxury Rides</p>
              </div>
            </div>

            <p className="text-stone text-sm leading-relaxed mb-8 max-w-[280px]">
              Long Island&apos;s premier high-end chauffeur service — redefining executive and family travel with uncompromised excellence since 2005.
            </p>

            {/* Socials */}
            <div className="flex gap-2 mb-10">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-gold/12 flex items-center justify-center text-stone hover:border-gold/50 hover:text-gold transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-3">
              {[
                { Icon: Phone,  text: "1 (800) 555-0199" },
                { Icon: Mail,   text: "bookings@springfordluxury.com" },
                { Icon: MapPin, text: "Garden City, NY 11530" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span className="text-stone text-[13px]">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {links.map((col) => (
            <div key={col.head}>
              <h4 className="text-[9px] uppercase tracking-[0.45em] font-bold text-gold/50 mb-7">{col.head}</h4>
              <ul className="space-y-4">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-stone text-sm hover:text-ivory flex items-center gap-0 hover:gap-2 group transition-all duration-300"
                    >
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 text-gold" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone/40 text-[11px]">
            &copy; {new Date().getFullYear()} Spring-Ford Luxury Rides. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 bg-gold/40 rotate-45" />
            <p className="text-stone/30 text-[10px] uppercase tracking-[0.35em]">
              Crafted for Excellence — Long Island, NY
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
