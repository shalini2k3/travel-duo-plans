import { Button } from "@/components/ui/button";
import { MapPin, Camera, Heart } from "lucide-react";
import heroImage from "@/assets/hero-travel-adventure.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="space-y-6 slide-in-up">
          {/* Main Heading */}
          <h1 className="heading-hero hero-text font-display">
            Adventure Awaits,{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Budget Friendly
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl hero-text max-w-3xl mx-auto leading-relaxed">
            Join two friends on epic adventures around the world. Get custom travel itineraries, 
            budget breakdowns, and insider tips for unforgettable journeys without breaking the bank.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 mb-8">
            <div className="flex items-center gap-2 hero-text">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">47 Countries</span>
            </div>
            <div className="flex items-center gap-2 hero-text">
              <Camera className="h-6 w-6 text-secondary" />
              <span className="text-lg font-semibold">1000+ Photos</span>
            </div>
            <div className="flex items-center gap-2 hero-text">
              <Heart className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold">Budget Under $50/day</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="btn-adventure px-8 py-4 text-lg font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Custom Itinerary
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-warm text-lg px-6 py-4"
              onClick={() => document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Adventures
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 float-animation">
        <div className="w-20 h-20 bg-primary/20 rounded-full backdrop-blur-sm"></div>
      </div>
      <div className="absolute top-20 right-20 float-animation" style={{ animationDelay: "1s" }}>
        <div className="w-16 h-16 bg-secondary/20 rounded-full backdrop-blur-sm"></div>
      </div>
    </section>
  );
};

export default Hero;