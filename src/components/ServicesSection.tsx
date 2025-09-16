import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Search, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Real Estate Sales Solutions",
      description: "Comprehensive off-take and sales strategies for residential and commercial properties",
      features: [
        "Market positioning & pricing strategy",
        "Professional marketing campaigns",
        "Sales team coordination",
        "Buyer qualification & financing"
      ],
      gradient: "bg-gradient-hero"
    },
    {
      icon: TrendingUp,
      title: "Consulting & Valuation",
      description: "Expert analysis and valuation services for informed investment decisions",
      features: [
        "Professional property appraisals",
        "Market feasibility studies",
        "Investment advisory services",
        "Risk assessment & mitigation"
      ],
      gradient: "bg-gradient-accent"
    },
    {
      icon: Users,
      title: "Property Management",
      description: "End-to-end management solutions to maximize your property returns",
      features: [
        "Tenant screening & placement",
        "Rent collection & accounting",
        "Maintenance coordination",
        "Performance reporting"
      ],
      gradient: "bg-gradient-elegant"
    },
    {
      icon: BarChart3,
      title: "Market Research",
      description: "In-depth market intelligence for strategic real estate decisions",
      features: [
        "Market trend analysis",
        "Competitive landscape studies",
        "Demographic research",
        "Investment opportunity identification"
      ],
      gradient: "bg-gradient-hero"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Search className="h-4 w-4 text-primary" />
            <span>Our Expertise</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Comprehensive Real Estate
            <span className="text-gradient-accent block">Solutions</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to ongoing management, we provide end-to-end real estate 
            services designed to maximize your investment potential in Ethiopia's dynamic market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="hover-lift shadow-card border-0 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-xl ${service.gradient} shadow-elegant`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full hover-lift">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-elegant animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let our experienced team help you navigate Ethiopia's real estate market 
            with confidence and achieve your investment goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="hover-glow">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;