import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  TrendingUp,
  Eye,
  Heart,
  ArrowRight,
  Building2
} from "lucide-react";
import luxuryBuilding from "@/assets/luxury-building.jpg";

const PropertiesSection = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Residential Complex",
      location: "Bole, Addis Ababa",
      price: "ETB 15,000,000",
      pricePerSqm: "ETB 25,000/m²",
      bedrooms: 3,
      bathrooms: 2,
      area: "180 m²",
      type: "Apartment",
      status: "Available",
      roi: "+18% ROI",
      image: luxuryBuilding,
      tags: ["New Development", "Prime Location", "High ROI"]
    },
    {
      id: 2,
      title: "Commercial Office Space",
      location: "CMC, Addis Ababa", 
      price: "ETB 25,000,000",
      pricePerSqm: "ETB 35,000/m²",
      bedrooms: 0,
      bathrooms: 4,
      area: "350 m²",
      type: "Commercial",
      status: "Under Construction",
      roi: "+22% ROI",
      image: luxuryBuilding,
      tags: ["Investment Grade", "Premium Finish", "Central Location"]
    },
    {
      id: 3,
      title: "Modern Villa Complex",
      location: "Kazanchis, Addis Ababa",
      price: "ETB 35,000,000",
      pricePerSqm: "ETB 28,000/m²",
      bedrooms: 5,
      bathrooms: 4,
      area: "450 m²",
      type: "Villa",
      status: "Ready to Move",
      roi: "+15% ROI",
      image: luxuryBuilding,
      tags: ["Luxury Living", "Garden View", "Premium Area"]
    }
  ];

  const stats = [
    { label: "Properties Sold", value: "500+", icon: Building2 },
    { label: "Average ROI", value: "18%", icon: TrendingUp },
    { label: "Client Satisfaction", value: "98%", icon: Heart },
    { label: "Years Experience", value: "15+", icon: Eye }
  ];

  return (
    <section id="properties" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Building2 className="h-4 w-4 text-accent" />
            <span>Featured Properties</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Premium Investment
            <span className="text-gradient-accent block">Opportunities</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our carefully curated selection of high-potential real estate investments 
            in Addis Ababa's most promising locations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center p-6 bg-card rounded-xl shadow-card hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {properties.map((property, index) => (
            <Card 
              key={property.id}
              className="overflow-hidden hover-lift shadow-card group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Status Badge */}
                <Badge 
                  className="absolute top-3 left-3 bg-accent text-accent-foreground"
                >
                  {property.status}
                </Badge>

                {/* ROI Badge */}
                <Badge 
                  className="absolute top-3 right-3 bg-primary text-primary-foreground"
                >
                  {property.roi}
                </Badge>

                {/* Action Buttons */}
                <div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button size="sm" variant="outline" className="bg-white/20 border-white/20 text-white hover:bg-white/30">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white/20 border-white/20 text-white hover:bg-white/30">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Property Details */}
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg leading-tight">{property.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {property.type}
                  </Badge>
                </div>
                
                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{property.location}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Price */}
                <div>
                  <p className="text-2xl font-bold text-foreground">{property.price}</p>
                  <p className="text-sm text-muted-foreground">{property.pricePerSqm}</p>
                </div>

                {/* Property Features */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Bed className="h-4 w-4" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="h-4 w-4" />
                    <span>{property.area}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {property.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-2">
                  <Button variant="hero" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Contact Agent
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-elegant rounded-2xl p-12 animate-fade-in">
          <h3 className="text-3xl font-bold mb-4">Ready to Invest?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our expert team will help you find the perfect property investment opportunity 
            that matches your budget and investment goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="hover-glow">
              Browse All Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Property Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;