import { Hammer, Ruler, Layout, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Sparkles size={48} />,
    title: "Bespoke Furniture Design",
    desc: "Creating signature, one-of-a-kind pieces—from detailed cabinetry to grand architectural installations—perfectly tailored to your space.",
  },
  {
    icon: <Layout size={48} />,
    title: "Integrated Architectural Millwork",
    desc: "Seamlessly blending furniture with the building structure, including custom wall panels, integrated libraries, and sophisticated built-ins.",
  },
  {
    icon: <Ruler size={48} />,
    title: "Material & Finish Consultation",
    desc: "Expert guidance on selecting the finest sustainable woods, high-grade veneers, and durable finishes to ensure longevity and aesthetic perfection.",
  },
];

const Services = () => (
  <section id="services" className="py-28 md:py-36 bg-slate-100 text-slate-900">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

      {/* Enhanced Title */}
      <h2 className="text-5xl md:text-6xl font-black mb-4 text-center tracking-tight text-slate-900">
        Our <span className="text-amber-500">Expertise</span>
      </h2>
      <p className="text-xl text-slate-600 text-center max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
        We deliver unparalleled craftsmanship across the full spectrum of fine carpentry and integrated architectural solutions.
      </p>

      {/* Service Cards Grid (Improved Aesthetics) */}
      <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-8 md:p-10 bg-slate-50 rounded-3xl border border-slate-100 shadow-xl transition-all duration-300 transform 
                       hover:scale-105 hover:shadow-2xl hover:border-amber-500/30 group"
          >
            {/* Icon Container - Elevated & Colored */}
            <div className="flex justify-center text-amber-400 mb-6 transition-all duration-300 group-hover:text-amber-300 group-hover:scale-110">
              {s.icon}
            </div>

            <h3 className="text-xl md:text-2xl font-black mb-4 tracking-wide text-center text-slate-900 group-hover:text-amber-500 transition-colors duration-300">
              {s.title}
            </h3>
            <p className="text-slate-600 text-center leading-relaxed text-sm md:text-base font-medium">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Services;