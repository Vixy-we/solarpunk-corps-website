import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Leaf, Cpu, BookOpen, Globe, Calendar, Users, ClipboardList, Palette, Coins } from "lucide-react";
import { motion } from "framer-motion";

const divisions = [
  {
    icon: Wrench,
    title: "Robotics & Core Engineering",
    category: "Technical",
    description: "Mechanics, electronics, programming, builds, and maintenance. The makers and innovators who prototype everything."
  },
  {
    icon: Leaf,
    title: "Sustainable Systems",
    category: "Technical",
    description: "Solar tech, eco-materials, energy optimization, and environmental monitoring systems."
  },
  {
    icon: Cpu,
    title: "Frontier Tech & Design",
    category: "Technical",
    description: "AI, biomimicry, future tech exploration. Pushing the boundaries of what's possible."
  },
  {
    icon: BookOpen,
    title: "Research & Documentation",
    category: "Knowledge",
    description: "Reports, research papers, surveys, magazine writing, and documentation archive."
  },
  {
    icon: Globe,
    title: "Outreach & Collaborations",
    category: "External",
    description: "Social media, external communication, partnerships, guest speakers, and sponsor relations."
  },
  {
    icon: Calendar,
    title: "Events & Development",
    category: "Operations",
    description: "Workshops, logistics, internal sessions, GDs, presentations, and event planning."
  },
  {
    icon: Users,
    title: "Community & CSR",
    category: "Social",
    description: "Teaching kids, cleanups, awareness events, NGO collaboration, and social impact work."
  },
  {
    icon: Palette,
    title: "Design & Media",
    category: "Creative",
    description: "Posters, branding, solarpunk aesthetics, photography, and videography."
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Technical":
      return "bg-primary/10 text-primary border-primary/20";
    case "Knowledge":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
    case "External":
      return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
    case "Operations":
      return "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20";
    case "Social":
      return "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20";
    case "Creative":
      return "bg-accent/20 text-accent-foreground border-accent/30";
    default:
      return "bg-secondary text-secondary-foreground border-secondary";
  }
};

export function DivisionsSection() {
  return (
    <section id="divisions" className="py-20 md:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4" data-testid="badge-divisions">Structure</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-divisions-title">Our Divisions</h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground" data-testid="text-divisions-description">
            SPC is organized into specialized divisions, each focusing on a key aspect of our mission. Members can participate across multiple divisions based on their interests.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((division, index) => (
            <motion.div
              key={division.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-division-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <division.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className={getCategoryColor(division.category)}>
                      {division.category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" data-testid={`text-division-title-${index}`}>{division.title}</h3>
                  <p className="text-sm text-muted-foreground">{division.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="inline-block">
            <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <Coins className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Finance Division</h3>
                <p className="text-sm text-muted-foreground">Budgeting, expenditure logs, and sponsorship proposals.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
