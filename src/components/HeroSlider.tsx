import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroExterior from "@/assets/hero-exterior.jpg";
import heroPool from "@/assets/hero-pool.jpg";
import heroSuite from "@/assets/hero-suite.jpg";
import heroSpa from "@/assets/hero-spa.jpg";

const slides = [
  { image: heroExterior, alt: "Kerayu Hotel Exterior at Dusk" },
  { image: heroPool, alt: "Infinity Pool at Sunset" },
  { image: heroSuite, alt: "Luxury Suite Interior" },
  { image: heroSpa, alt: "Tranquil Spa Experience" },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif text-background mb-6 leading-tight">
            Kerayu: Where Timeless Elegance Meets Serenity
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8 font-light">
            Experience luxury redefined on your private sanctuary
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-gold transition-all duration-300 hover:scale-105"
          >
            Discover Your Sanctuary
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
