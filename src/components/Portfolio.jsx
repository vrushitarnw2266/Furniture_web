import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    title: "Modern Living Room Suite",
    category: "Custom Furniture",
  },
  {
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    title: "Executive Office Desk",
    category: "Bespoke Workspace",
  },
  {
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    title: "Contemporary Dining Set",
    category: "Dining Collection",
  },
  {
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    title: "Luxury Bedroom Furniture",
    category: "Master Suite",
  },
  {
    img: "https://cdn.mos.cms.futurecdn.net/dibYjqNK5LGvsZuPYTLbHe-1200-80.jpg",
    title: "Minimalist Kitchen Cabinets",
    category: "Architectural Cabinetry",
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality (3 second interval for more attraction)
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="portfolio"
      className="py-28 md:py-36 bg-white text-center text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight text-slate-900">
          Project <span className="text-amber-500">Showcase</span>
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16 font-medium">
          Experience the pinnacle of fine carpentry and interior design through our latest works.
        </p>

        {/* Auto-Slider with Clean Layout */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-slate-100">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="min-w-full relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-[500px] md:h-[650px] object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-10">
                    <p className="text-sm font-black uppercase text-amber-400 tracking-widest mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-black text-white flex items-center justify-center gap-3">
                      {project.title}
                      <ArrowUpRight className="text-amber-400 h-8 w-8" />
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-amber-400 text-white hover:text-black p-4 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-amber-400 text-white hover:text-black p-4 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full ${index === currentIndex
                  ? "w-16 h-2.5 bg-amber-500"
                  : "w-2.5 h-2.5 bg-slate-200 hover:bg-amber-200"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;