import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  MapPin, 
  Calendar,
  ArrowRight,
  Star,
  Building,
  Target
} from "lucide-react";
import consultationImage from "@/assets/consultation-team.jpg";

const AboutSection = () => {
  const achievements = [
    {
      icon: Building,
      number: "500+",
      label: "Properties Managed",
      description: "Across Addis Ababa"
    },
    {
      icon: Users,
      number: "1000+",
      label: "Satisfied Clients",
      description: "Trust our expertise"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "In Ethiopian market"
    },
    {
      icon: Target,
      number: "98%",
      label: "Success Rate",
      description: "Client satisfaction"
    }
  ];

  const values = [
    {
      title: "Integrity",
      description: "Transparent dealings and honest communication in every transaction"
    },
    {
      title: "Excellence", 
      description: "Delivering superior results through professional expertise and dedication"
    },
    {
      title: "Innovation",
      description: "Embracing modern solutions for traditional real estate challenges"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Star className="h-4 w-4 text-accent" />
                <span>About Presidio</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ethiopia's Trusted
                <span className="text-gradient-accent block">Real Estate Partner</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Presidio Asset Management is a leading provider of premium real estate services 
                in Ethiopia, specializing in helping clients identify opportunities, create value, 
                and preserve wealth through strategic property investments.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're seeking to make a new investment in real estate or looking for 
                a comprehensive solution to managing an existing rental property, we have the 
                tools, expertise, and networks to add value for you.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Our Core Values</h3>
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="flex items-start space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="hover-glow">
              Learn Our Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={consultationImage}
                alt="Presidio team consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card shadow-elegant rounded-xl p-6 animate-float">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Addis Ababa Focused</p>
                  <p className="text-sm text-muted-foreground">Local market expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={achievement.label}
                className="text-center hover-lift shadow-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">{achievement.number}</h3>
                    <p className="font-semibold text-foreground">{achievement.label}</p>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;