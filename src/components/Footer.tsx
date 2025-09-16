import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  Send,
  Building
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Properties", href: "#properties" },
    { name: "Market Research", href: "#research" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Property Management",
    "Investment Consulting", 
    "Property Valuation",
    "Sales & Marketing",
    "Market Analysis"
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-primary-foreground/80">
                Get the latest market insights and investment opportunities delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="Enter your email address"
                className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/60"
              />
              <Button variant="accent" className="hover-glow">
                Subscribe
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Building className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Presidio</h3>
                <p className="text-sm text-primary-foreground/80 -mt-1">Asset Management</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Ethiopia's premier real estate asset management company, dedicated to adding 
              value to your property investments through professional expertise and 
              comprehensive market knowledge.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Bole Road, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span>+251 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span>info@presidioethiopia.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="font-semibold mb-6">Connect With Us</h4>
            
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth hover-lift"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <div className="space-y-3">
              <Button variant="accent" size="sm" className="w-full hover-glow">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="sm" className="w-full bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/10" />
      
      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-primary-foreground/80">
            © 2024 Presidio Asset Management. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;