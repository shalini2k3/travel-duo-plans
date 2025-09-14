import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, DollarSign, Eye } from "lucide-react";

const TravelStories = () => {
  const stories = [
    {
      id: 1,
      title: "Backpacking Through Vietnam for $30/Day",
      excerpt: "How we explored the stunning landscapes of Vietnam, from Ha Long Bay to the Mekong Delta, on an incredibly tight budget.",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Budget Guide",
      budget: "$30/day",
      duration: "14 days",
      location: "Vietnam",
      readTime: "8 min",
      date: "March 2024"
    },
    {
      id: 2,
      title: "Island Hopping in Greece: A Complete Guide",
      excerpt: "Our ultimate guide to exploring the Greek islands without spending a fortune, including ferry tips and hidden gems.",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Island Guide",
      budget: "$45/day",
      duration: "21 days",
      location: "Greece",
      readTime: "12 min",
      date: "February 2024"
    },
    {
      id: 3,
      title: "Nepal Trek: Annapurna Circuit on a Shoestring",
      excerpt: "The complete guide to trekking the Annapurna Circuit without breaking the bank, including gear tips and local insights.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Adventure",
      budget: "$25/day",
      duration: "18 days",
      location: "Nepal",
      readTime: "15 min",
      date: "January 2024"
    },
    {
      id: 4,
      title: "Morocco Magic: Marrakech to Sahara",
      excerpt: "An enchanting journey through Morocco's diverse landscapes, from bustling souks to serene desert camps.",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6930311?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Cultural",
      budget: "$35/day",
      duration: "12 days",
      location: "Morocco",
      readTime: "10 min",
      date: "December 2023"
    },
    {
      id: 5,
      title: "Thailand's Hidden Gems: Off the Beaten Path",
      excerpt: "Discover Thailand beyond the tourist trail with our guide to secret beaches, local markets, and authentic experiences.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Hidden Gems",
      budget: "$28/day",
      duration: "16 days",
      location: "Thailand",
      readTime: "9 min",
      date: "November 2023"
    },
    {
      id: 6,
      title: "Eastern Europe Adventure: 6 Countries, 3 Weeks",
      excerpt: "Our epic journey through Eastern Europe, proving that this region offers incredible value for budget travelers.",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c0a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Multi-Country",
      budget: "$40/day",
      duration: "21 days",
      location: "Eastern Europe",
      readTime: "14 min",
      date: "October 2023"
    }
  ];

  return (
    <section id="stories" className="py-20 px-4 bg-tertiary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-section">Our Travel Stories</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real adventures, real budgets, real tips. Dive into our detailed guides and get inspired 
            for your next budget-friendly adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card key={story.id} className="travel-card overflow-hidden group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white">
                    {story.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {story.budget}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="heading-card group-hover:text-primary transition-colors">
                  {story.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {story.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{story.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{story.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{story.readTime}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{story.date}</span>
                  <Button variant="outline" size="sm" className="hover:bg-primary hover:text-white">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-adventure">
            View All Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TravelStories;