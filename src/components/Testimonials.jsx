import { useState, useEffect } from "react";
import { Heart, Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Sharma",
        role: "Homeowner",
        word: "Outstanding Quality",
        text: "The bespoke wardrobe Amit built for my bedroom is truly a piece of art. The attention to detail in the wood joinery is exceptional.",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
        name: "Priya Patel",
        role: "Interior Designer",
        word: "Truly Artisan",
        text: "Amit understands the language of wood. His custom furniture pieces have become the centerpiece of my luxury design projects.",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    {
        name: "Vikram Mehta",
        role: "Architect",
        word: "Precision Finish",
        text: "As an architect, I value structural integrity. Amit's architectural millwork is precise, durable, and aesthetically superior.",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="py-24 md:py-32 bg-slate-50 overflow-hidden relative">
            <div className="max-w-2xl mx-auto px-6 text-center">

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-12 tracking-tighter">
                    Client <span className="text-amber-500">Feedback</span>
                </h2>

                {/* Main Slider Container */}
                <div className="relative group">
                    <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 md:p-12 shadow-2xl">
                        <Quote className="absolute top-4 left-4 text-amber-500/10 h-12 w-12" />

                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${index * 100}%)` }}
                        >
                            {testimonials.map((t, i) => (
                                <div key={i} className="min-w-full flex flex-col items-center px-4">
                                    <div className="relative mb-8">
                                        <img
                                            src={t.photo}
                                            alt={t.name}
                                            className="w-20 h-20 rounded-full object-cover border-4 border-amber-400 shadow-xl"
                                        />
                                        <div className="absolute -bottom-2 -right-2 bg-amber-400 p-1.5 rounded-lg shadow-md">
                                            <Heart size={14} className="text-black fill-current" />
                                        </div>
                                    </div>

                                    <h4 className="text-xl font-black text-amber-600 mb-4 italic">"{t.word}"</h4>
                                    <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed mb-8">
                                        {t.text}
                                    </p>

                                    <div className="flex gap-1 justify-center mb-4">
                                        {[...Array(5)].map((_, starIdx) => (
                                            <Star key={starIdx} className="text-amber-500 h-5 w-5 fill-current" />
                                        ))}
                                    </div>

                                    <h3 className="text-slate-900 font-black text-lg">{t.name}</h3>
                                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mt-1">
                                        {t.role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Minimalist Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`transition-all duration-300 rounded-full ${i === index ? "w-8 h-2 bg-amber-500" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
