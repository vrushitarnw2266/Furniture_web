const categories = [
  {
    name: "Luxury Wardrobes",
    img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&q=80",
    desc: "Custom-built closet systems designed for maximum elegance and storage efficiency."
  },
  {
    name: "Bespoke Sofas",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80",
    desc: "Premium handcrafted sofas tailored to your comfort and aesthetic preferences."
  },
  {
    name: "Architectural Beds",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RtnVaFWwfEjsZjiVvHoPhi9ZWFDUvOa68w&s",
    desc: "Masterpiece bed frames that blend structural integrity with luxury comfort."
  },
  {
    name: "Artisan Chairs",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RtnVaFWwfEjsZjiVvHoPhi9ZWFDUvOa68w&s",
    desc: "Ergonomic and statement chairs crafted from the finest sustainable hardwoods."
  },
  {
    name: "Modern Kitchens",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=80",
    desc: "Functional ART—precision-engineered kitchen cabinetry and layouts."
  },
  {
    name: "Premium Mattresses",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=400&q=80",
    desc: "High-grade materials ensuring the ultimate rest for a productive life."
  },
  {
    name: "Study Furniture",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmt1BhmecKz7LMyOmDOZts4tNSogw4HnMbQ&s",
    desc: "Inspiring workspaces with custom desks and integrated library systems."
  },
  {
    name: "Storage Solutions",
    img: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&w=400&q=80",
    desc: "Intelligent storage furniture that maximizes space without sacrificing style."
  },
  {
    name: "Lighting Decor",
    img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=400&q=80",
    desc: "Integrated lighting solutions that highlight the beauty of architectural woodwork."
  },
  {
    name: "Living Spaces",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80",
    desc: "Complete interior transformations creating harmonious and luxury living environments."
  }
];

const About = () => (
  <section id="about" className="py-24 md:py-32 bg-slate-50 text-slate-900">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
          Our <span className="text-amber-500">Premium Range</span>
        </h2>
        <p className="text-xl md:text-2xl font-normal text-slate-600 max-w-4xl mx-auto leading-relaxed">
          From custom wardrobes to complete living room transformations, we craft every piece with meticulous precision and an unwavering dedication to quality.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 transition-all duration-500 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10"
          >
            {/* Image */}
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
              <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                {cat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Brand Commitment */}
      <div className="mt-24 text-center p-12 bg-white rounded-3xl border border-slate-200 shadow-xl">
        <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Invest in <span className="text-amber-500">Lasting Quality</span></h3>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
          Every product category we serve is defined by our commitment to sustainable materials and artisan joinery techniques that stand the test of time.
        </p>
      </div>
    </div>
  </section>
);

export default About;