import { useState } from "react";
import { Button } from "@/components/ui/button";

interface RoomCardProps {
  title: string;
  price: string;
  image: string;
  amenities: string[];
  onViewDetails: () => void;
}

const RoomCard = ({ title, price, image, amenities, onViewDetails }: RoomCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-[600px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-elegant"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 className="text-3xl font-serif text-background mb-2">{title}</h3>
            <p className="text-2xl text-accent font-light">From {price}</p>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-elegant bg-card"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="h-full flex flex-col justify-between p-8">
            <div>
              <h3 className="text-3xl font-serif text-foreground mb-6">{title}</h3>
              <ul className="space-y-3">
                {amenities.map((amenity, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails();
              }}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View Full Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
