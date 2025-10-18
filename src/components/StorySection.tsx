import storyBg from "@/assets/story-bg.jpg";

const StorySection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={storyBg}
          alt="Kerayu Gardens"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Video/Cinemagraph Side */}
          <div className="relative rounded-2xl overflow-hidden shadow-elegant animate-fade-in">
            <div className="aspect-[4/5] relative">
              <img
                src={storyBg}
                alt="Serene hotel gardens"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent"></div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-serif text-foreground">
              Our World, Your Sanctuary
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nestled on a pristine private beach where azure waters meet golden sands, 
              Kerayu represents the pinnacle of coastal luxury. Our philosophy is simple: 
              create moments of profound serenity while celebrating the natural beauty 
              that surrounds us.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Just 20 minutes from the international airport yet a world away from the 
              ordinary, we offer seamless access to cultural landmarks and city attractions 
              while maintaining an atmosphere of complete tranquility. Our location provides 
              the perfect balance between connection and escape.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Every detail at Kerayu has been thoughtfully curated—from our award-winning 
              culinary team crafting locally-inspired gastronomy, to transformative spa 
              experiences that honor ancient wellness traditions, to exclusively curated 
              coastal excursions that reveal hidden natural wonders. This is luxury that 
              feels personal, authentic, and deeply restorative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
