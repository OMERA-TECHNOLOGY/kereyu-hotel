import RoomCard from "./RoomCard";
import oceanImg from "@/assets/room-ocean.jpg";
import deluxeImg from "@/assets/room-deluxe.jpg";
import gardenImg from "@/assets/room-garden.jpg";

const rooms = [
  {
    title: "Ocean View Suite",
    price: "$850/night",
    image: oceanImg,
    amenities: [
      "Panoramic ocean views",
      "King-size bed with premium linens",
      "Private balcony with lounge seating",
      "Marble bathroom with rain shower",
      "24/7 concierge service",
      "Complimentary breakfast"
    ]
  },
  {
    title: "Executive Business Plan",
    price: "$1,200/night",
    image: deluxeImg,
    amenities: [
      "Spacious work area with ergonomic desk",
      "High-speed Wi-Fi & business amenities",
      "Access to executive lounge",
      "Airport transfers included",
      "Daily spa treatments",
      "Priority check-in/out"
    ]
  },
  {
    title: "Romantic Getaway Package",
    price: "$2,500/3 nights",
    image: gardenImg,
    amenities: [
      "Private garden villa with pool",
      "Couples spa package",
      "Private candlelit dinners",
      "Champagne & chocolate amenities",
      "Sunset yacht cruise",
      "Photography session"
    ]
  }
];

const RoomsSection = () => {
  const handleViewDetails = (title: string) => {
    // Navigate to details page (placeholder)
    console.log(`View details for ${title}`);
  };

  return (
    <section id="suites" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-4">
            Suites & Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover your perfect sanctuary from our collection of exquisite accommodations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard
              key={index}
              {...room}
              onViewDetails={() => handleViewDetails(room.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
