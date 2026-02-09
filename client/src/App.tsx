import { Switch, Route, useLocation } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Structure from "@/pages/structure";
import WhatWeDo from "@/pages/what-we-do";
import Projects from "@/pages/projects";
import Sponsors from "@/pages/sponsors";
import OurTeam from "@/pages/our-team";
import Contact from "@/pages/contact";
import Alumni from "@/pages/alumni";
import Partner from "@/pages/partner";
import ProjectRover from "@/pages/project-rover";
import ProjectMagazine from "@/pages/project-magazine";
import ProjectSurvey from "@/pages/project-survey";
import HiddenEgg from "@/pages/hidden-egg";
import { ScrollToTop } from "@/components/scroll-to-top";
import { useEffect } from "react";
import ComingSoon from "@/pages/coming-soon";
import ExperienceSPC from "@/pages/experience-spc";
import UnderConstruction from "@/pages/under-construction";
import CSRPage from "@/pages/csr";
import Manifesto from "@/pages/manifesto";
import Events from "@/pages/events";
import GreenShiftVision from "@/pages/green-shift";
import { SITE_LIVE, INAUGURATION_MODE } from "@/config/site";
import { useState } from "react";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  // Listen for custom scroll-to-top event
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scrollToTop", handleScrollToTop);
    return () => window.removeEventListener("scrollToTop", handleScrollToTop);
  }, []);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/structure" component={Structure} />
      <Route path="/what-we-do" component={WhatWeDo} />
      <Route path="/projects" component={Projects} />
      <Route path="/sponsors" component={Sponsors} />
      <Route path="/our-team" component={OurTeam} />
      <Route path="/contact" component={Contact} />
      <Route path="/sponsors/alumni" component={Alumni} />
      <Route path="/alumni" component={Alumni} />
      <Route path="/sponsors/partner" component={Partner} />
      <Route path="/projects/rover" component={ProjectRover} />
      <Route path="/projects/magazine" component={ProjectMagazine} />
      <Route path="/projects/survey" component={ProjectSurvey} />
      <Route path="/hidden-egg" component={HiddenEgg} />
      <Route path="/experience-spc" component={ExperienceSPC} />
      <Route path="/under-construction" component={UnderConstruction} />
      <Route path="/csr" component={CSRPage} />
      <Route path="/events" component={Events} />
      <Route path="/events/greenshift" component={GreenShiftVision} />
      <Route path="/manifesto" component={Manifesto} />
      <Route component={NotFound} />
    </Switch>
  );
}



function App() {
  const [hasEntered, setHasEntered] = useState(false);

  // Logic:
  // 1. If SITE_LIVE is true -> Always show the full app (Normal mode)
  // 2. If SITE_LIVE is false:
  //    a. If INAUGURATION_MODE is true -> Show Coming Soon, but allow entry (unlocks App)
  //    b. If INAUGURATION_MODE is false -> Show Coming Soon, strictly locked (Construction mode)

  if (!SITE_LIVE) {
    if (INAUGURATION_MODE) {
      if (!hasEntered) {
        return <ComingSoon onEnter={() => setHasEntered(true)} />;
      }
      // If hasEntered is true, fall through to render the app
    } else {
      return <ComingSoon />;
    }
  }

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="spc-theme">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Router />
            <ScrollToTop />
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
