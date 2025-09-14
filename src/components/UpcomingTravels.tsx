import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Compass, Camera, Heart, Plane } from "lucide-react";
import minimalBeach from "@/assets/minimalist-beach.jpg";
import travelElements from "@/assets/travel-elements.jpg";
import minimalTravel from "@/assets/minimalist-travel-1.jpg";

const UpcomingTravels = () => {
  const upcomingTrips = [
    {
      id: 1,
      destination: "Japan",
      dates: "April 2024",
      duration: "3 weeks",
      budget: "$55/day",
      highlights: ["Cherry Blossoms", "Temple Hopping", "Street Food"],
      status: "Planning",
      image: minimalTravel,
      description: "Experiencing cherry blossom season while exploring ancient temples and modern cities."
    },
    {
      id: 2,
      destination: "Portugal",
      dates: "June 2024",
      duration: "2 weeks",
      budget: "$42/day",
      highlights: ["Coastal Towns", "Surfing", "Wine Tasting"],
      status: "Booked",
      image: minimalBeach,
      description: "Surfing the Atlantic coast and exploring charming Portuguese fishing villages."
    },
    {
      id: 3,
      destination: "Colombia",
      dates: "September 2024",
      duration: "4 weeks",
      budget: "$35/day",
      highlights: ["Coffee Farms", "Caribbean Coast", "Colonial Cities"],
      status: "Research",
      image: travelElements,
      description: "From Bogotá's coffee culture to Cartagena's colorful colonial architecture."
    }
  ];

  const dreamDestinations = [
    { name: "Patagonia", reason: "Epic hiking trails", priority: "High" },
    { name: "Madagascar", reason: "Unique wildlife", priority: "Medium" },
    { name: "Socotra Island", reason: "Alien landscapes", priority: "High" },
    { name: "Raja Ampat", reason: "Marine biodiversity", priority: "Medium" },
    { name: "Faroe Islands", reason: "Nordic beauty", priority: "Low" },
    { name: "Bhutan", reason: "Himalayan culture", priority: "High" }
  ];

  const statusColors = {
    "Planning": "bg-yellow-100 text-yellow-800",
    "Booked": "bg-green-100 text-green-800",
    "Research": "bg-blue-100 text-blue-800"
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-section">Upcoming Adventures</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The adventure never stops! Here's what we're planning next and our dream destinations 
            that we're working towards. Want to join us? Let's plan something together!
          </p>
        </div>

        {/* Upcoming Trips */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {upcomingTrips.map((trip) => (
            <Card key={trip.id} className="travel-card overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={trip.image}
                  alt={`${trip.destination} travel plans`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={statusColors[trip.status as keyof typeof statusColors]}>
                    {trip.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-semibold text-foreground">{trip.budget}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-foreground">{trip.destination}</h3>
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                
                <p className="text-muted-foreground mb-4">{trip.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{trip.dates} • {trip.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-secondary" />
                    <span>Budget: {trip.budget}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Planned Highlights</h4>
                  <div className="flex flex-wrap gap-1">
                    {trip.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-white"
                >
                  Follow This Trip
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dream Destinations */}
        <Card className="travel-card">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-2">
                <Heart className="h-8 w-8 text-red-400" />
                Dream Destinations
              </h3>
              <p className="text-muted-foreground">
                Places on our bucket list that we're saving up for and researching. 
                Some are closer than others, but each one represents a future adventure!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dreamDestinations.map((dest, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-tertiary/30 rounded-xl hover:bg-tertiary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Compass className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">{dest.name}</h4>
                      <p className="text-sm text-muted-foreground">{dest.reason}</p>
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      dest.priority === 'High' ? 'border-red-300 text-red-600' :
                      dest.priority === 'Medium' ? 'border-yellow-300 text-yellow-600' :
                      'border-gray-300 text-gray-600'
                    }`}
                  >
                    {dest.priority}
                  </Badge>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Have suggestions for these destinations or want to travel together?
              </p>
              <Button className="btn-adventure">
                <Camera className="h-4 w-4 mr-2" />
                Let's Plan Together
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UpcomingTravels;