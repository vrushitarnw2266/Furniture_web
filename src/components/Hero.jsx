import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center 
                 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80" />

      {/* Floating Texture (Adds Premium Look) */}
      <motion.div
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-amber-400 drop-shadow-2xl leading-tight mb-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          Premium Carpentry &
          <br />
          <span className="text-white">Architectural Furnishing</span>
        </motion.h1>

        <motion.p
          className="text-gray-200 text-base sm:text-lg md:text-xl mt-6 mb-8 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Custom-crafted furniture, interior woodwork, and luxury architectural
          designs — built with precision and passion by <span className="text-amber-400 font-semibold">Amit Panchal</span>.
        </motion.p>

        <motion.a
          href="#contact"
          aria-label="Request a quote for custom furniture"
          className="inline-block px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold 
                     text-base md:text-lg rounded-xl shadow-lg hover:shadow-2xl hover:shadow-amber-500/50
                     transition-all transform hover:scale-105 hover:-translate-y-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Request a Quote
        </motion.a>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          aria-hidden="true"
        >
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#05070a] to-transparent" />
    </section>
  );
};

export default Hero;
