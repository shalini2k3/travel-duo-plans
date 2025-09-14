import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Clock, MapPin, Users, DollarSign } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    duration: "",
    budget: "",
    groupSize: "",
    interests: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully! 🎉",
      description: "We'll get back to you within 24 hours with a custom itinerary draft!",
    });

    setFormData({
      name: "",
      email: "",
      destination: "",
      duration: "",
      budget: "",
      groupSize: "",
      interests: "",
      message: ""
    });

    setIsSubmitting(false);
  };

  const services = [
    {
      title: "Custom Itinerary",
      description: "Detailed day-by-day plans tailored to your interests and budget",
      price: "From $25",
      icon: MapPin
    },
    {
      title: "Budget Planning",
      description: "Complete cost breakdown with money-saving tips and tricks",
      price: "From $15",
      icon: DollarSign
    },
    {
      title: "Group Travel Planning",
      description: "Coordinated plans for friend groups and family adventures",
      price: "From $40",
      icon: Users
    },
    {
      title: "Travel Consultation",
      description: "One-on-one video call to discuss your travel plans and concerns",
      price: "From $35",
      icon: MessageSquare
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-section">Get Your Custom Itinerary</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to turn your travel dreams into reality? Let us create a personalized, 
            budget-friendly itinerary that matches your style, interests, and wallet!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="form-floating">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-6 w-6 text-primary" />
                Tell Us About Your Dream Trip
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="destination">Destination *</Label>
                    <Input
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      required
                      placeholder="Where do you want to go?"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Input
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      placeholder="e.g., 2 weeks"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Total Budget (USD)</Label>
                    <Input
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      placeholder="e.g., $1500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="groupSize">Group Size</Label>
                    <Input
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleInputChange}
                      placeholder="e.g., 2 people"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">Interests & Activities</Label>
                  <Input
                    id="interests"
                    name="interests"
                    value={formData.interests}
                    onChange={handleInputChange}
                    placeholder="e.g., hiking, food tours, nightlife, museums"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your travel style, any concerns, special requirements, or questions you have..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-adventure w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Get My Custom Itinerary"}
                </Button>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>We typically respond within 24 hours</span>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Services & Pricing */}
          <div className="space-y-6">
            <Card className="travel-card">
              <CardHeader>
                <CardTitle>Our Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-tertiary/30 rounded-xl">
                      <service.icon className="h-6 w-6 text-primary mt-1" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-foreground">{service.title}</h4>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {service.price}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="travel-card bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span><strong>Personal Experience:</strong> We've been where you want to go</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span><strong>Budget-Focused:</strong> Maximum adventure, minimum cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span><strong>Updated Info:</strong> Current prices and insider tips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span><strong>24/7 Support:</strong> We're here even while you travel</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;