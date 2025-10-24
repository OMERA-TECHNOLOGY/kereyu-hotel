import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to Kereyu",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={ctaBg}
          alt="Kereyu at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif text-background mb-6">
            Your Unforgettable Stay Awaits
          </h2>
          <p className="text-xl text-background/90 mb-12 font-light">
            Join our community and receive exclusive offers, seasonal packages,
            and inspiration for your next escape
          </p>

          {/* Email Capture Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background/90 border-none text-foreground placeholder:text-muted-foreground py-6"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-foreground px-8 py-6 shadow-gold transition-all duration-300 hover:scale-105"
            >
              Subscribe
            </Button>
          </form>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-6 shadow-elegant transition-all duration-300 hover:scale-105"
          >
            Reserve Your Suite
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
