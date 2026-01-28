import { Instagram, Facebook, Twitter, Mail, Heart, Phone, MapPin, Clock, ArrowRight, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">


        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <h3 className="text-xl font-black tracking-tighter text-amber-400">AMIT PANCHAL</h3>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">Architectural Carpentry</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Excellence in bespoke furniture and high-end architectural millwork. We transform your vision into timeless wooden masterpieces.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, link: "https://instagram.com" },
                { Icon: Facebook, link: "https://facebook.com" },
                { Icon: Twitter, link: "https://twitter.com" },
                { Icon: Mail, link: "mailto:amit.panchal@furniture.com" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-amber-400 hover:text-amber-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]"
                >
                  <item.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Signature Services */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest font-bold text-white border-b border-amber-400/30 pb-2 inline-block">Our Products</h4>
            <nav className="flex flex-col gap-3">
              {["Luxury Wardrobes", "Bespoke Sofas", "Modular Kitchens", "Artisan Beds", "Living Spaces"].map((item) => (
                <a
                  key={item}
                  href="#about"
                  className="text-gray-400 hover:text-amber-400 transition-all duration-300 text-sm flex items-center gap-2 group"
                >
                  <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest font-bold text-white border-b border-amber-400/30 pb-2 inline-block">Navigation</h4>
            <nav className="flex flex-col gap-3 text-sm">
              <a href="#home" className="text-gray-400 hover:text-amber-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">About Story</a>
              <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors">Our Services</a>
              <a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">Get in Touch</a>
              <div className="pt-4 flex gap-4 text-[10px] text-gray-500 uppercase tracking-tighter">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </nav>
          </div>

          {/* Column 4: Contact & Studio */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest font-bold text-white border-b border-amber-400/30 pb-2 inline-block">Studio Details</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-400 h-5 w-5 mt-0.5 shrink-0" />
                <p className="text-gray-400 text-sm leading-snug">
                  45/B Woodwork Plaza, Interior Hub,<br />
                  Versova, Mumbai 400061
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-amber-400 h-5 w-5 shrink-0" />
                <p className="text-gray-400 text-sm font-medium">+91 98XXX XXX10</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-amber-400 h-5 w-5 shrink-0" />
                <div className="text-gray-400 text-xs">
                  <p>Mon - Sat: 10:00 AM - 08:00 PM</p>
                  <p className="text-amber-400/40 italic">Sunday: Visit by Appointment</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <p className="text-gray-500 text-[10px] uppercase tracking-widest">
              © {new Date().getFullYear()} Amit Panchal Furniture Design. Architectural Excellence.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-gray-500 text-[10px] uppercase tracking-widest flex items-center gap-2">
              Made with <Heart className="h-3 w-3 text-red-500 fill-current" /> for Quality Homes
            </p>
            <button
              onClick={scrollToTop}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-amber-400 hover:text-black transition-all duration-300"
              aria-label="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
