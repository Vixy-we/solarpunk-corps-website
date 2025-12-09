import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Cpu, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 50 25 M 50 75 L 50 100 M 0 50 L 25 50 M 75 50 L 100 50" 
                stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary/20" />
              <circle cx="50" cy="50" r="3" className="fill-primary/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8" data-testid="badge-launching">
            <Leaf className="h-4 w-4" />
            <span>Now Launching at BIET Jhansi</span>
          </div>
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          data-testid="text-hero-title"
        >
          <span className="block">Solarpunk Corps</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground mt-4" data-testid="text-hero-tagline">
            Where Technology, Nature, and People Meet
          </span>
        </motion.h1>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4 text-lg text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="flex items-center gap-2">
            <Cpu className="h-5 w-5 text-primary" />
            Technology with Purpose
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            Nature in Mind
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            People at Heart
          </span>
        </motion.div>

        <motion.p 
          className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          data-testid="text-hero-description"
        >
          We are launching Solarpunk Corps — a new club being formed for students who want to build technology, promote sustainability, and create real social impact. Join us in building a future that is inclusive, practical, and green.
        </motion.p>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            size="lg" 
            onClick={() => scrollToSection("#about")}
            data-testid="button-hero-about"
          >
            About Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => scrollToSection("#divisions")}
            data-testid="button-hero-divisions"
          >
            Our Divisions
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => scrollToSection("#membership")}
            data-testid="button-hero-membership"
          >
            <Users className="mr-2 h-4 w-4" />
            Join Us
          </Button>
          <Button 
            size="lg" 
            variant="secondary" 
            onClick={() => scrollToSection("#sponsor")}
            data-testid="button-hero-sponsor"
          >
            Sponsor Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
