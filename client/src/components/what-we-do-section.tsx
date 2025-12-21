import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sun, Leaf, Heart, Palette, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation, Link } from "wouter";

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

        <div className="flex flex-wrap justify-center gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]"
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
          <div className="mb-20 max-w-4xl mx-auto px-4 relative font-sans">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-primary/5 to-purple-500/5 rounded-3xl blur-3xl -z-10" />

            <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-500">
              <div className="flex flex-wrap justify-center gap-3 text-lg md:text-2xl text-muted-foreground leading-relaxed mb-8 items-center cursor-default">
                <div className="flex flex-wrap justify-center items-center gap-3">
                  <span>From</span>
                  <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium text-base hover:scale-110 transition-transform duration-300 shadow-sm">🤖 Building Robots</span>
                  <span>to</span>
                  <span className="px-4 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full font-medium text-base hover:scale-110 transition-transform duration-300 shadow-sm">🌿 Healing Ecosystems</span>
                </div>
                <div className="w-full h-0"></div>
                <div className="flex flex-wrap justify-center items-center gap-3">
                  <span>From</span>
                  <span className="px-4 py-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full font-medium text-base hover:scale-110 transition-transform duration-300 shadow-sm">❤️ Serving Society</span>
                  <span>to</span>
                  <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full font-medium text-base hover:scale-110 transition-transform duration-300 shadow-sm">✨ Crafting Stories</span>
                </div>
              </div>

              <p className="text-base text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                We are shaping students who can <span className="text-foreground font-medium">build</span>, <span className="text-foreground font-medium">care</span>, and <span className="text-foreground font-medium">lead</span>.
                <br />
                Help us provide the essential tools—from sensors to sketchbooks—to make this vision a reality.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 border-t border-primary/5 pt-8">
                <Link href="/sponsors">
                  <a className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold tracking-wide overflow-hidden shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center">
                    <span className="relative z-10">Support This Vision</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  </a>
                </Link>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleNavigate("/projects")}
                  className="rounded-full px-8 py-4 h-auto text-base font-medium border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-foreground transition-all group/btn"
                >
                  See Inaugural Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform opacity-70 group-hover/btn:opacity-100" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
