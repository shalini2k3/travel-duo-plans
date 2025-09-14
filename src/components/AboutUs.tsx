import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, DollarSign, Camera } from "lucide-react";
import aboutImage from "@/assets/about-us-friends.jpg";

const AboutUs = () => {
  const stats = [
    { icon: MapPin, label: "Countries Visited", value: "47", color: "text-primary" },
    { icon: Users, label: "Years of Friendship", value: "8", color: "text-secondary" },
    { icon: DollarSign, label: "Average Daily Budget", value: "$45", color: "text-accent" },
    { icon: Camera, label: "Adventures Documented", value: "200+", color: "text-tertiary-foreground" },
  ];

  const specialties = [
    "Budget Backpacking",
    "Solo Female Travel",
    "Cultural Immersion",
    "Adventure Sports",
    "Food Tourism",
    "Photography",
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-section">Meet the Wanderlust Duo</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Two best friends who turned their passion for adventure into a mission to help others 
            explore the world without breaking the bank. We believe amazing experiences shouldn't cost a fortune!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="travel-card">
              <img
                src={aboutImage}
                alt="Sarah and Emma - The Wanderlust Duo"
                className="w-full rounded-2xl shadow-warm"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-2xl shadow-warm">
              <div className="text-center">
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sm">Years Traveling</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Sarah & Emma</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                What started as a spontaneous backpacking trip through Southeast Asia has grown into 
                8 years of adventures across 47 countries. We've mastered the art of traveling smart, 
                not expensive, and we're here to share every secret we've learned along the way.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                From sleeping in $5 hostels to finding the best street food, from navigating language 
                barriers to discovering hidden gems off the beaten path - we've been there, done that, 
                and documented it all for you!
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="travel-card">
                  <CardContent className="p-4 text-center">
                    <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Specialties */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">Our Travel Specialties</h4>
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;