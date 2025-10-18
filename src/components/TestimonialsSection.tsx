import { useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Travel Blogger",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    quote: "Kerayu exceeded every expectation. The attention to detail, from the moment we arrived until our reluctant departure, was extraordinary. The seamless blend of luxury and natural beauty created an experience I'll treasure forever."
  },
  {
    name: "James Chen",
    role: "Executive",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    quote: "As someone who travels extensively for business, I can confidently say Kerayu sets a new standard for luxury hospitality. The conference facilities were impeccable, and the spa treatments helped me achieve the perfect work-life balance."
  },
  {
    name: "Emma & David Taylor",
    role: "Honeymooners",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    quote: "Our honeymoon at Kerayu was absolutely magical. Every moment felt like it was designed just for us. The sunset yacht cruise, private beach dinners, and couples spa treatments created memories we'll cherish for a lifetime."
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Physician",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    quote: "After a demanding year, Kerayu provided the perfect sanctuary for restoration. The combination of world-class amenities, thoughtful service, and natural serenity helped me truly disconnect and recharge."
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-4">
            Voices of Kerayu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from those who have experienced our sanctuary
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-card rounded-2xl p-12 shadow-elegant relative animate-fade-in">
            <Quote className="w-12 h-12 text-accent/30 absolute top-8 left-8" />
            <div className="relative z-10">
              <p className="text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-accent"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Guest Avatars */}
          <div className="flex flex-col gap-6">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary/10 border-2 border-primary shadow-soft"
                    : "bg-card hover:bg-muted border-2 border-transparent"
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`w-12 h-12 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "border-2 border-accent scale-110"
                      : "border-2 border-muted"
                  }`}
                />
                <div className="text-left">
                  <p className={`font-medium ${
                    index === activeIndex ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
