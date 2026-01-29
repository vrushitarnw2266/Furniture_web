import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load components below the fold
const Services = lazy(() => import("./components/Service"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const About = lazy(() => import("./components/About"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-20 bg-slate-900" />}>
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
