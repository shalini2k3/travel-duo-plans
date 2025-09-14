import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Instagram, Youtube, Facebook, Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { label: "About Us", href: "#about" },
      { label: "Travel Stories", href: "#stories" },
      { label: "Photo Gallery", href: "#gallery" },
      { label: "Budget Tips", href: "#budget" },
    ],
    "Services": [
      { label: "Custom Itineraries", href: "#contact" },
      { label: "Budget Planning", href: "#contact" },
      { label: "Group Travel", href: "#contact" },
      { label: "Travel Consultation", href: "#contact" },
    ],
    "Resources": [
      { label: "Travel Blog", href: "#stories" },
      { label: "Packing Lists", href: "#" },
      { label: "Travel Insurance", href: "#" },
      { label: "FAQ", href: "#faq" },
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram", count: "25K" },
    { icon: Youtube, href: "#", label: "YouTube", count: "12K" },
    { icon: Facebook, href: "#", label: "Facebook", count: "8K" },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-8 w-8 text-primary" />
              <span className="text-2xl font-display font-bold">
                Wanderlust Duo
              </span>
            </div>
            <p className="text-background/80 mb-6 text-sm leading-relaxed">
              Two friends sharing budget-friendly adventures and helping fellow travelers 
              explore the world without breaking the bank. Every journey starts with a single step!
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-background">Stay Updated</h4>
              <p className="text-xs text-background/70">
                Get weekly travel tips, budget guides, and destination inspiration
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
                <Button className="btn-adventure shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-background mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-background/70 text-sm">Follow our journey:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="text-xs">{social.count}</span>
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-6">
              <a 
                href="mailto:hello@wanderlustduo.com"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                hello@wanderlustduo.com
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-background/20 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-background/60 text-sm">
                © 2024 Wanderlust Duo. All rights reserved.
              </p>
              <div className="flex items-center gap-1 text-background/60 text-sm">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-400 fill-current" />
                <span>for fellow adventurers</span>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-center gap-6 text-xs text-background/50">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;