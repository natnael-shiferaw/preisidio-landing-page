import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Calendar
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: "Bole Road, Addis Ababa\nEthiopia",
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us Today",
      details: "+251 11 123 4567\n+251 91 234 5678",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@presidioethiopia.com\nsales@presidioethiopia.com",
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM",
      action: "Schedule Meeting"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span>Contact Us</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start Your Real Estate
            <span className="text-gradient-accent block">Journey Today</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to explore investment opportunities in Ethiopia's dynamic real estate market? 
            Our expert team is here to guide you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card hover-lift animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-primary" />
                  <span>Send Us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input type="tel" placeholder="+251 91 234 5678" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Service Interest</label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option>Property Investment Consultation</option>
                    <option>Property Management Services</option>
                    <option>Property Valuation</option>
                    <option>Market Research</option>
                    <option>Sales & Marketing</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us about your real estate goals and how we can help..."
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="hover-glow flex-1">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={info.title}
                  className="hover-lift shadow-card animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        <p className="text-sm text-muted-foreground whitespace-pre-line mb-3">
                          {info.details}
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick Contact CTA */}
            <Card className="bg-gradient-hero shadow-elegant">
              <CardContent className="p-6 text-center">
                <h3 className="text-white font-semibold mb-2">Need Immediate Assistance?</h3>
                <p className="text-primary-foreground/90 text-sm mb-4">
                  Our expert consultants are available for urgent inquiries
                </p>
                <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;