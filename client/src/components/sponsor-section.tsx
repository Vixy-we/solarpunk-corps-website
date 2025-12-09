import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Cpu, Wrench, Newspaper, Heart, Building2, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fundingAreas = [
  { icon: Cpu, title: "Hardware Lab", description: "Microcontrollers, sensors, motors, battery systems" },
  { icon: Wrench, title: "Workshop Tools", description: "Soldering stations, safety equipment, prototyping tools" },
  { icon: Newspaper, title: "Creative Output", description: "Magazine printing costs, art supplies" },
  { icon: Heart, title: "Community Impact", description: "CSR logistics, survey tools, outreach materials" }
];

const commitments = [
  { title: "100% Impact Allocation", description: "Every rupee goes directly into hardware, tools, and project logistics." },
  { title: "Quarterly Updates", description: "Detailed impact reports showing exactly how funds were used." },
  { title: "Open Books", description: "Financial records are transparent and available to sponsors upon request." },
  { title: "Direct Engagement", description: "Choose to direct support toward specific projects or divisions." },
  { title: "Logo Placements", description: "Recognition on our website, magazine, and event materials." }
];

export function SponsorSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="sponsor" className="py-20 md:py-32 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
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
                
                <Button size="lg" onClick={scrollToContact} data-testid="button-sponsor-contact">
                  Partner With Us
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
