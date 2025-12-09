import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sun, Leaf, Heart, Palette, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

const activities = [
  {
    icon: Sun,
    title: "Tech & Innovation",
    subtitle: "Robotics + Engineering Projects",
    description: "Robotics builds, automation, eco-tech prototypes, electronics, sensors, and maker culture. We give students a place to learn and build.",
    items: ["Basic robotics", "Sustainable engineering tech", "Automation", "DIY eco-tech prototypes", "Maker culture & hands-on builds"]
  },
  {
    icon: Leaf,
    title: "Sustainability & Environment",
    subtitle: "Green Campus Initiatives",
    description: "Solar gadgets, green campus initiatives, waste reduction, and eco-monitoring projects. SPC encourages responsible engineering.",
    items: ["Clean, eco-friendly tech", "Campus green initiatives", "Reducing waste", "Solar gadgets", "Environmental monitoring"]
  },
  {
    icon: Heart,
    title: "Club Social Responsibility",
    subtitle: "CSR Activities",
    description: "Teaching underprivileged children, cleaning drives, social awareness events. Helping students become good humans, not just engineers.",
    items: ["Teaching underprivileged children", "Campus cleaning drives", "Social awareness events", "Community service", "NGO collaborations"]
  },
  {
    icon: Palette,
    title: "Culture & Creativity",
    subtitle: "Art, Design & Storytelling",
    description: "Solarpunk storytelling, art, design, UI/UX, and magazine publication. Students of all backgrounds contribute to a shared hopeful vision.",
    items: ["Solarpunk art & storytelling", "UI/UX design", "Magazine publication", "Creative showcases", "Interdisciplinary collaboration"]
  },
  {
    icon: Rocket,
    title: "Skill Development",
    subtitle: "Personal Growth",
    description: "PPT skills, public speaking, leadership training, project management, and teamwork. We shape members into capable, well-rounded individuals.",
    items: ["Presentation skills", "Public speaking", "Leadership training", "Project management", "Team collaboration"]
  }
];

export function WhatWeDoSection() {
  const [location, navigate] = useLocation();

  const defaultAnchors: Record<string, string> = {
    "/projects": "projects-top"
  };

  const handleNavigate = (path: string) => {
    if (path !== location) {
      navigate(path);
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
    <section id="activities-top" className="py-20 md:py-32">
      <span id="what-we-do" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4" data-testid="badge-activities">Core Activities</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-activities-title">What We Do</h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-4" data-testid="text-activities-description">
            Our approach is simple — we learn, we act, and we share. Every student, from any branch, can participate in something — whether it's technical, creative, or social.
          </p>
          <p className="max-w-2xl mx-auto text-muted-foreground bg-accent/20 px-4 py-3 rounded-lg" data-testid="text-activities-note">
            <span className="font-medium">Note:</span> We have not started projects yet — this is what we are preparing to do after our launch.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-activity-${index}`}>
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <activity.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl" data-testid={`text-activity-title-${index}`}>{activity.title}</CardTitle>
                  <p className="text-sm text-primary font-medium">{activity.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{activity.description}</p>
                  <ul className="space-y-2">
                    {activity.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            size="lg"
            onClick={() => handleNavigate("/projects")}
            data-testid="button-inaugural-projects"
          >
            Our Inaugural Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
