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
    <footer className="bg-deep-blue border-t border-gold/10">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 border border-gold/60 rotate-45 flex items-center justify-center">
                <div className="w-2 h-2 bg-gold rotate-45" />
              </div>
              <span className="font-playfair text-2xl font-bold text-pearl">
                Infinite<span className="text-gold">.</span>
              </span>
            </div>

            <p className="text-silver/40 text-sm leading-relaxed mb-8 max-w-xs">
              Long Island&apos;s premier high-end chauffeur and luxury car service. Redefining executive and family travel with uncompromised excellence since 2005.
            </p>

            {/* Social links */}
            <div className="flex gap-3 mb-10">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-silver/40 hover:border-gold/40 hover:text-gold transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span className="text-silver/60 text-sm">1 (800) 555-0199</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span className="text-silver/60 text-sm">bookings@infinitecar.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-silver/60 text-sm">100 Luxury Lane, Garden City, NY 11530</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-silver/30 mb-6">{col.heading}</h3>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-silver/50 text-sm hover:text-gold transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Gold divider line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-6 lg:mx-8" />

      {/* Bottom strip */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-silver/30 text-xs">
          &copy; {new Date().getFullYear()} Infinite Car Service. All rights reserved.
        </p>
        <p className="text-silver/20 text-xs tracking-widest uppercase">
          Crafted for Excellence &mdash; Long Island, New York
        </p>
      </div>
    </footer>
  );
}
