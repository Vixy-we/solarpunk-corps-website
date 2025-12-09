import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Cpu, Wrench, Newspaper, Heart, Building2, TrendingUp, ArrowRight, Users, Coins } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

const fundingAreas = [
  { icon: Cpu, title: "Hardware Lab", description: "Microcontrollers, sensors, motors, battery systems" },
  { icon: Wrench, title: "Workshop Tools", description: "Soldering stations, safety equipment, prototyping tools" },
  { icon: Newspaper, title: "Creative Output", description: "Magazine printing costs, art supplies" },
  { icon: Heart, title: "Community Impact", description: "CSR logistics, survey tools, outreach materials" }
];

const commitments = [
  { title: "100% Impact Allocation", description: "Every rupee goes directly into hardware, tools, and project logistics." },
  { title: "Annual Updates", description: "Detailed impact reports showing exactly how funds were used." },
  { title: "Open Books", description: "Financial records are transparent and available to sponsors upon request." },
  { title: "Direct Engagement", description: "Choose to direct support toward specific projects or divisions." },
  { title: "Logo Placements", description: "Recognition on our website, magazine, and event materials." }
];

export function SponsorSection() {
  const [location, setLocation] = useLocation();

  const defaultAnchors: Record<string, string> = {
    "/sponsors/partner": "partner-top",
    "/sponsors/alumni": "alumni-top"
  };

  const handleNavigate = (path: string) => {
    if (path !== location) {
      setLocation(path);
      let attempts = 0;
      const tryScroll = () => {
        attempts += 1;
        const targetHash = defaultAnchors[path];
        if (!targetHash) return;
        const el = document.getElementById(targetHash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else if (attempts < 20) setTimeout(tryScroll, 100);
      };
      setTimeout(tryScroll, 120);
    }
  };

  return (
    <section id="sponsor-top" className="py-20 md:py-32 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
      <span id="sponsor" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4" data-testid="badge-sponsor">Partner With Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-sponsor-title">Become a Founding Sponsor</h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground" data-testid="text-sponsor-description">
            As we lay the foundation for Solarpunk Corps, we're looking for Founding Partners to help turn this vision into reality. Starting a hardware and impact-focused club requires significant resources — and we're starting from zero.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6" data-testid="text-funding-title">What Your Support Funds</h3>
            <p className="text-muted-foreground mb-8" data-testid="text-funding-description">
              Your contributions will directly fund our startup inventory and enable students to build, create, and serve their community.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {fundingAreas.map((area, index) => (
                <Card key={area.title} className="hover-elevate">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <area.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{area.title}</h4>
                      <p className="text-xs text-muted-foreground">{area.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6" data-testid="text-commitments-title">Our Commitments to You</h3>
                <p className="text-muted-foreground mb-6" data-testid="text-commitments-description">
                  We're building our reputation on trust and tangible results. Here's what we promise:
                </p>

                <ul className="space-y-4">
                  {commitments.map((commitment) => (
                    <li key={commitment.title} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="font-semibold">{commitment.title}</span>
                        <p className="text-sm text-muted-foreground">{commitment.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-card border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">The ROI of Sponsorship</h3>
                    <p className="text-muted-foreground">You're investing in the future workforce</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                    <Building2 className="h-4 w-4 text-primary" />
                    <span>Brand as Sustainability Champion</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/20 rounded-full">
                    <TrendingUp className="h-4 w-4 text-accent-foreground" />
                    <span>Youth Leadership Support</span>
                  </div>
                </div>

                <Button size="lg" onClick={() => handleNavigate("/sponsors/partner")} data-testid="button-sponsor-contact">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-r from-emerald-500/5 to-emerald-400/5 border-2 border-emerald-500/20">
            <CardContent className="p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-800 dark:from-emerald-400 dark:to-emerald-200">
                      Calling All Alumni
                    </h3>
                    <p className="text-lg text-muted-foreground mt-1">
                      Reconnect with your roots and empower the next generation.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-100/50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full border border-green-200/50 dark:border-green-700/50">
                    <Heart className="h-4 w-4" />
                    <span>Mentorship</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-100/50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full border border-blue-200/50 dark:border-blue-700/50">
                    <Building2 className="h-4 w-4" />
                    <span>Guest Lectures</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-yellow-100/50 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full border border-yellow-200/50 dark:border-yellow-700/50">
                    <Wrench className="h-4 w-4" />
                    <span>Project Guidance</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-orange-100/50 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full border border-orange-200/50 dark:border-orange-700/50">
                    <Coins className="h-4 w-4" />
                    <span>Donations</span>
                  </div>
                </div>

                <Button size="lg" onClick={() => handleNavigate("/sponsors/alumni")} data-testid="button-alumni-join">
                  Help Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
