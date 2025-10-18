import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  image: string;
  features: string[];
  onLearnMore: () => void;
}

const ServiceCard = ({ title, image, features, onLearnMore }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[500px] rounded-2xl overflow-hidden shadow-elegant cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent"></div>

      {/* Title (Always Visible) */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-3xl font-serif text-background mb-4">{title}</h3>

        {/* Features (Slide Up on Hover) */}
        <div
          className={`transition-all duration-500 ${
            isHovered
              ? "opacity-100 translate-y-0 max-h-96"
              : "opacity-0 translate-y-4 max-h-0"
          } overflow-hidden`}
        >
          <ul className="space-y-2 mb-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className="text-background/90 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                {feature}
              </li>
            ))}
          </ul>
          
          <button
            onClick={onLearnMore}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
