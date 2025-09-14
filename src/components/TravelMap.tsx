import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Camera } from "lucide-react";
import worldMapImage from "@/assets/world-map-minimal.jpg";

const TravelMap = () => {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null);

  const destinations = [
    {
      id: 1,
      name: "Vietnam",
      position: { top: "42%", left: "75%" },
      visits: 3,
      lastVisit: "March 2024",
      highlight: "Street Food Paradise",
      budget: "$30/day",
      duration: "14 days",
      description: "Incredible street food, stunning landscapes from Ha Long Bay to the Mekong Delta."
    },
    {
      id: 2,
      name: "Greece",
      position: { top: "38%", left: "52%" },
      visits: 2,
      lastVisit: "February 2024",
      highlight: "Island Hopping",
      budget: "$45/day",
      duration: "21 days",
      description: "Crystal blue waters, ancient history, and perfect sunsets across the islands."
    },
    {
      id: 3,
      name: "Nepal",
      position: { top: "40%", left: "72%" },
      visits: 2,
      lastVisit: "January 2024",
      highlight: "Himalayan Trekking",
      budget: "$25/day",
      duration: "18 days",
      description: "Breathtaking mountain views and the famous Annapurna Circuit trek."
    },
    {
      id: 4,
      name: "Morocco",
      position: { top: "45%", left: "45%" },
      visits: 1,
      lastVisit: "December 2023",
      highlight: "Sahara Desert",
      budget: "$35/day",
      duration: "12 days",
      description: "From bustling Marrakech souks to peaceful desert camps under the stars."
    },
    {
      id: 5,
      name: "Thailand",
      position: { top: "52%", left: "76%" },
      visits: 4,
      lastVisit: "November 2023",
      highlight: "Tropical Paradise",
      budget: "$28/day",
      duration: "16 days",
      description: "Hidden beaches, ancient temples, and the most delicious street food."
    },
    {
      id: 6,
      name: "Czech Republic",
      position: { top: "30%", left: "50%" },
      visits: 1,
      lastVisit: "October 2023",
      highlight: "Medieval Charm",
      budget: "$40/day",
      duration: "7 days",
      description: "Fairy-tale architecture and incredibly affordable European adventure."
    },
    {
      id: 7,
      name: "Peru",
      position: { top: "60%", left: "25%" },
      visits: 1,
      lastVisit: "September 2023",
      highlight: "Machu Picchu",
      budget: "$32/day",
      duration: "14 days",
      description: "Ancient Incan ruins and the incredible Andes mountain range."
    },
    {
      id: 8,
      name: "Indonesia",
      position: { top: "65%", left: "80%" },
      visits: 2,
      lastVisit: "August 2023",
      highlight: "Island Culture",
      budget: "$22/day",
      duration: "20 days",
      description: "Volcanic landscapes, rice terraces, and incredibly welcoming local culture."
    }
  ];

  return (
    <section className="py-20 px-4 bg-tertiary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-section">Our Travel Map</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Click on any destination to see our experiences, budgets, and tips from each adventure!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <Card className="travel-card overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={worldMapImage}
                    alt="World travel map"
                    className="w-full h-auto"
                  />
                  
                  {/* Destination Pins */}
                  {destinations.map((dest) => (
                    <button
                      key={dest.id}
                      className={`absolute w-6 h-6 rounded-full transition-all duration-300 transform hover:scale-125 ${
                        selectedDestination === dest.id
                          ? 'bg-secondary scale-125 shadow-lg'
                          : 'bg-primary hover:bg-secondary'
                      }`}
                      style={{
                        top: dest.position.top,
                        left: dest.position.left,
                        transform: 'translate(-50%, -50%)'
                      }}
                      onClick={() => setSelectedDestination(
                        selectedDestination === dest.id ? null : dest.id
                      )}
                      aria-label={`View details for ${dest.name}`}
                    >
                      <MapPin className="w-4 h-4 text-white mx-auto" />
                    </button>
                  ))}

                  {/* Floating Stats */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-warm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">47</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-warm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">8</div>
                      <div className="text-sm text-muted-foreground">Years</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Destination Details */}
          <div className="space-y-6">
            {selectedDestination ? (
              <Card className="travel-card">
                <CardContent className="p-6">
                  {(() => {
                    const dest = destinations.find(d => d.id === selectedDestination);
                    return dest ? (
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold text-foreground">{dest.name}</h3>
                          <Badge className="bg-primary text-white">
                            {dest.visits} visit{dest.visits > 1 ? 's' : ''}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-6">{dest.description}</p>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="text-sm">Last visit: {dest.lastVisit}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-secondary" />
                            <span className="text-sm">Duration: {dest.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Camera className="h-4 w-4 text-accent" />
                            <span className="text-sm">Budget: {dest.budget}</span>
                          </div>
                        </div>
                        
                        <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                          <div className="text-sm font-semibold text-primary mb-1">Highlight</div>
                          <div className="text-sm text-foreground">{dest.highlight}</div>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </CardContent>
              </Card>
            ) : (
              <Card className="travel-card">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Explore Our Adventures
                  </h3>
                  <p className="text-muted-foreground">
                    Click on any pin on the map to see detailed information about our travels, 
                    including budgets, durations, and personal highlights from each destination.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Quick Stats */}
            <Card className="travel-card bg-adventure-gradient text-white">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Travel Stats</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold">200+</div>
                    <div className="opacity-90">Adventures</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">$35</div>
                    <div className="opacity-90">Avg/Day</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1000+</div>
                    <div className="opacity-90">Photos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">6</div>
                    <div className="opacity-90">Continents</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelMap;