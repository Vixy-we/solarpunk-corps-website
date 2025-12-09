import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Cpu, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

    const [location, navigate] = useLocation();

    const defaultAnchors: Record<string, string> = {
      "/about": "about-top",
      "/what-we-do": "activities-top",
      "/our-team": "team-top",
      "/structure": "divisions",
      "/sponsors": "sponsor-top",
      "/projects": "projects-top",
      "/membership": "membership-top",
      "/contact": "contact-main"
    };

    const handleNavigate = (e: React.MouseEvent | null, href: string) => {
      if (e) e.preventDefault();
      const [path, hash] = href.split("#");

      if (path && path !== location) {
        navigate(path);
        let attempts = 0;
        const tryScroll = () => {
          attempts += 1;
          const targetHash = hash || defaultAnchors[path];
          if (!targetHash) return;
          const el = document.getElementById(targetHash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
          else if (attempts < 20) setTimeout(tryScroll, 100);
        };
        setTimeout(tryScroll, 120);
      } else {
        const targetHash = hash || defaultAnchors[location];
        if (targetHash) {
          const el = document.getElementById(targetHash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/csr.png')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      
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

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center z-20">
        <div className="relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-700/25 border border-emerald-400/30 text-emerald-100 text-sm font-semibold mb-8 backdrop-blur-sm drop-shadow-md"
              data-testid="badge-launching"
            >
              <Leaf className="h-4 w-4 text-emerald-200" />
              <span>Now Launching at BIET Jhansi</span>
            </div>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="inline-block bg-black/30 backdrop-blur-md rounded-2xl px-8 py-10 text-center">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              data-testid="text-hero-title"
            >
              <span className="block">Solarpunk Corps</span>
              <span className="block text-base sm:text-lg md:text-xl font-semibold text-white/90 mt-3">Where Technology, Nature, and People Meet</span>
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 text-lg text-white/90 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary" />
                Technology with Purpose
              </span>
              <span className="hidden sm:inline text-white/50">|</span>
              <span className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                Nature in Mind
              </span>
              <span className="hidden sm:inline text-white/50">|</span>
              <span className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                People at Heart
              </span>
            </motion.div>

            <motion.p
              className="max-w-3xl mx-auto text-md text-white/80 mb-6"
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
                onClick={(e) => handleNavigate(e, "/about")}
                data-testid="button-hero-about"
                className="text-white"
              >
                About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={(e) => handleNavigate(e, "/structure#divisions")}
                data-testid="button-hero-divisions"
                className="text-white border-white/25"
              >
                Our Divisions
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={(e) => handleNavigate(e, "/membership")}
                data-testid="button-hero-membership"
                className="text-white border-white/25"
              >
                <Users className="mr-2 h-4 w-4 text-white" />
                Join Us
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={(e) => handleNavigate(e, "/sponsors")}
                data-testid="button-hero-sponsor"
                className="bg-accent text-accent-foreground hover:bg-accent/90 border-accent"
              >
                Sponsor Us
              </Button>
            </motion.div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
