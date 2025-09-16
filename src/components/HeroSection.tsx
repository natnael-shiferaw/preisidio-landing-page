import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Target } from "lucide-react";
import heroImage from "@/assets/addis-skyline-hero.jpg";

const HeroSection = () => {
  const stats = [
    { icon: TrendingUp, label: "Portfolio Growth", value: "25% YoY" },
    { icon: Shield, label: "Properties Managed", value: "500+" },
    { icon: Target, label: "Client Satisfaction", value: "98%" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-secondary/80 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
                <span>Ethiopia's Premier Real Estate Partner</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block">Adding Value to</span>
                <span className="text-gradient-accent block">Real Estate</span>
                <span className="block">Investment</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Partner with Presidio Asset Management to unlock exceptional opportunities 
                in Addis Ababa's thriving real estate market. Professional guidance, proven results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="hover-lift shadow-elegant">
                Start Your Investment Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                Explore Properties
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className="text-center sm:text-left animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Additional Content or Space */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Floating Cards */}
              <div className="space-y-4 animate-float">
                <div className="bg-card shadow-card rounded-xl p-6 max-w-sm backdrop-blur-sm border border-border/50">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="font-semibold">Investment Insight</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Addis Ababa real estate values increased by 18% in the past year, 
                    outperforming traditional investments.
                  </p>
                </div>

                <div className="bg-card shadow-card rounded-xl p-6 max-w-sm backdrop-blur-sm border border-border/50 ml-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="font-semibold">Market Leader</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trusted by 500+ investors for comprehensive real estate 
                    solutions across Ethiopia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;