import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, BookOpen, ClipboardList, Cpu, Battery, Eye, Bot, Newspaper, Pen, Users, BarChart3, Leaf, Heart, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

const projects = [
  {
    icon: Sun,
    title: "Solar-Powered Environmental Rover",
    badge: "Flagship Project",
    badgeColor: "bg-primary text-primary-foreground",
    description: "Our first big technical project after launch. A 6-wheel functional prototype powered entirely by solar energy.",
    image: "/rover.webp",
    features: [
      { icon: Battery, text: "Solar powered" },
      { icon: Cpu, text: "Environmental sensors" },
      { icon: Leaf, text: "Real-time data collection" }
    ],
    futureScope: [
      "Robotic arm integration",
      "Computer vision",
      "Autonomous movement"
    ],
    href: "/projects/rover"
  },
  {
    icon: BookOpen,
    title: "Solarpunk Magazine Vol. 1",
    subtitle: "CodeGreen",
    badge: "Creative",
    badgeColor: "bg-accent text-accent-foreground",
    description: "Our student-run publication to define our voice and establish our creative identity.",
    image: "/magazine.webp",
    features: [
      { icon: Pen, text: "Stories & articles" },
      { icon: Newspaper, text: "Tech ideas & research" },
      { icon: Heart, text: "Social issues coverage" }
    ],
    futureScope: [
      "Guest contributions",
      "Digital editions",
      "Podcast companion"
    ],
    href: "/projects/magazine"
  },
  {
    icon: ClipboardList,
    title: "Campus Tech-Life Sustainability Survey",
    badge: "Research",
    badgeColor: "bg-blue-500 text-white",
    description: "A comprehensive study to understand student technology usage, burnout, and sustainability habits.",
    image: "/survey.webp",
    features: [
      { icon: Users, text: "Student tech habits" },
      { icon: BarChart3, text: "Burnout analysis" },
      { icon: Leaf, text: "Eco-routine mapping" }
    ],
    futureScope: [
      "Data-driven solutions",
      "Campus policy recommendations",
      "Longitudinal tracking"
    ],
    href: "/projects/survey"
  }
];

export function ProjectsSection() {
  const [, setLocation] = useLocation();
  return (
    <section id="projects-top" className="py-20 md:py-32 bg-card/50">
      <span id="projects" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4" data-testid="badge-projects">2026 Roadmap</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-projects-title">Inaugural Projects</h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground" data-testid="text-projects-description">
            These three pilot initiatives will kickstart our journey and demonstrate our capabilities. Your sponsorship will directly fund these projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={project.href}>
                <div className="h-full">
                  <Card className="h-full hover-elevate transition-all duration-300 overflow-hidden cursor-pointer" data-testid={`card-project-${index}`}>
                    {project.image && (
                      <div className="w-full h-48 bg-muted overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-2 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <project.icon className="h-7 w-7 text-primary" />
                        </div>
                        <Badge className={project.badgeColor}>{project.badge}</Badge>
                      </div>
                      <CardTitle className="text-xl" data-testid={`text-project-title-${index}`}>{project.title}</CardTitle>
                      {project.subtitle && (
                        <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{project.description}</p>

                      <div className="space-y-3 mb-6">
                        {project.features.map((feature) => (
                          <div key={feature.text} className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <feature.icon className="h-4 w-4 text-primary" />
                            </div>
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="text-xs font-medium text-muted-foreground mb-2">FUTURE SCOPE</p>
                        <div className="flex flex-wrap gap-2">
                          {project.futureScope.map((scope) => (
                            <Badge key={scope} variant="outline" className="text-xs">
                              {scope}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>


        <motion.div
          className="mt-20 text-center bg-primary/5 rounded-3xl p-12 border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to Bring These Projects to Life?</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We are looking for partners and alumni to fund materials, provide mentorship, or donate equipment for these inaugural builds.
          </p>
          <Button size="lg" className="group" onClick={() => setLocation("/sponsors")}>
            Support These Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div >
    </section >
  );
}
