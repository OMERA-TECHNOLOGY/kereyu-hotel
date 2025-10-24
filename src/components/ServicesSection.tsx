import ServiceCard from "./ServiceCard";
import conferenceImg from "@/assets/service-conference.jpg";
import weddingImg from "@/assets/service-wedding.jpg";
import spaImg from "@/assets/service-spa.jpg";
import yachtImg from "@/assets/service-yacht.jpg";

const services = [
  {
    title: "Grand Conference Hall",
    image: conferenceImg,
    features: [
      "Capacity for 200 guests",
      "Full A/V support & high-speed connectivity",
      "Dedicated event planner",
      "Natural lighting & ocean views",
    ],
  },
  {
    title: "Vista Wedding Venue",
    image: weddingImg,
    features: [
      "Beachfront ceremony settings",
      "Customizable reception spaces",
      "Expert wedding coordination",
      "Gourmet catering & floral design",
    ],
  },
  {
    title: "Serenity Spa",
    image: spaImg,
    features: [
      "Ancient wellness traditions",
      "Signature treatments & therapies",
      "Private treatment suites",
      "Natural botanical products",
    ],
  },
  {
    title: "Private Yacht Charter",
    image: yachtImg,
    features: [
      "Luxury vessel with full crew",
      "Customized itineraries",
      "Gourmet catering on board",
      "Water sports & diving equipment",
    ],
  },
];

const ServicesSection = () => {
  const handleLearnMore = (title: string) => {
    // Scroll to dedicated section (placeholder)
    console.log(`Learn more about ${title}`);
  };

  return (
    <section id="experiences" className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-4">
            Curated Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every moment at Kereyu is designed to inspire and delight
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              onLearnMore={() => handleLearnMore(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
