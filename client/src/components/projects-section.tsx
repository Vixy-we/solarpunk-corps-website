import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sun, BookOpen, ClipboardList, Cpu, Battery, Eye, Bot, Newspaper, Pen, Users, BarChart3, Leaf, Heart } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    icon: Sun,
    title: "Solar-Powered Environmental Rover",
    badge: "Flagship Project",
    badgeColor: "bg-primary text-primary-foreground",
    description: "Our first big technical project after launch. A 6-wheel functional prototype powered entirely by solar energy.",
    image: "/rover.png",
    features: [
      { icon: Battery, text: "Solar powered" },
      { icon: Cpu, text: "Environmental sensors" },
      { icon: Leaf, text: "Real-time data collection" }
    ],
    futureScope: [
      "Robotic arm integration",
      "Computer vision",
      "Autonomous movement"
    ]
  },
  {
    icon: BookOpen,
    title: "Solarpunk Magazine Vol. 1",
    subtitle: "CodeGreen",
    badge: "Creative",
    badgeColor: "bg-accent text-accent-foreground",
    description: "Our student-run publication to define our voice and establish our creative identity.",
    image: "/magazine.png",
    features: [
      { icon: Pen, text: "Stories & articles" },
      { icon: Newspaper, text: "Tech ideas & research" },
      { icon: Heart, text: "Social issues coverage" }
    ],
    futureScope: [
      "Guest contributions",
      "Digital editions",
      "Podcast companion"
    ]
  },
  {
    icon: ClipboardList,
    title: "Campus Tech-Life Sustainability Survey",
    badge: "Research",
    badgeColor: "bg-blue-500 text-white",
    description: "A comprehensive study to understand student technology usage, burnout, and sustainability habits.",
    image: "/survey.png",
    features: [
      { icon: Users, text: "Student tech habits" },
      { icon: BarChart3, text: "Burnout analysis" },
      { icon: Leaf, text: "Eco-routine mapping" }
    ],
    futureScope: [
      "Data-driven solutions",
      "Campus policy recommendations",
      "Longitudinal tracking"
    ]
  }
];

export function ProjectsSection() {
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
              <Card className="h-full hover-elevate transition-all duration-300 overflow-hidden" data-testid={`card-project-${index}`}>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
