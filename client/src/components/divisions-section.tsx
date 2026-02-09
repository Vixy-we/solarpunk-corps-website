import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Wrench, Leaf, Cpu, BookOpen, Globe, Calendar, Users, ClipboardList, Palette, Coins, Compass, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const leadership = [
  {
    icon: Compass,
    title: "General Secretary",
    role: "Vision & Strategy",
    description: "Responsible for vision, strategy, long-term direction, and coordination of all SPC initiatives.",
    details: "The General Secretary acts as the primary visionary for the Student Project Club. They set the strategic roadmap, ensuring that all divisions align with the club's core mission of fostering innovation and sustainability.",
    focusAreas: ["Strategic Planning", "Cross-Division Coordination", "External Representation", "Long-term Goal Setting"],
    skills: ["Strategic Thinking", "Crisis Management", "Team Calibration"]
  },
  {
    icon: CheckCircle2,
    title: "Secretary",
    role: "Operations & Execution",
    description: "Oversees execution, internal coordination, and continuity of SPC operations.",
    details: "The Secretary allows the club to function effectively day-to-day. They manage the operational backbone, ensuring that resources are available, schedules are met, and internal communications flow smoothly.",
    focusAreas: ["Operational Efficiency", "Resource Management", "Internal Communication", "Process Optimization"],
    skills: ["Operational Planning", "Conflict Resolution", "Administrative Management", "Workflow Optimization"]
  }
];

const divisions = [
  {
    icon: Wrench,
    title: "Robotics & Core Engineering",
    category: "Technical",
    description: "Mechanics, electronics, programming, builds, and maintenance. The makers and innovators who prototype everything.",
    details: "This division is the backbone of SPC's hardware projects. Members gain hands-on experience in building robots, drones, and automated systems from scratch.",
    focusAreas: ["Mechanical Design & CAD", "Electronics & Circuit Design", "Embedded Systems Programming", "Hardware Prototyping"],
    skills: ["Arduino/Raspberry Pi", "SolidWorks/Fusion 360", "PCB Design", "Troubleshooting"]
  },
  {
    icon: Leaf,
    title: "Sustainable Systems",
    category: "Technical",
    description: "Solar tech, eco-materials, energy optimization, and environmental monitoring systems.",
    details: "Focused on green technology, this division bridges engineering with environmental science to create sustainable solutions for the future.",
    focusAreas: ["Renewable Energy Integration", "Waste Management Solutions", "Eco-friendly Materials", "Smart Environmental Monitoring"],
    skills: ["Solar PV Systems", "Material Science", "Data Analysis", "Sustainability Auditing"]
  },
  {
    icon: Cpu,
    title: "Frontier Tech & Design",
    category: "Technical",
    description: "AI, biomimicry, future tech exploration. Pushing the boundaries of what's possible.",
    details: "Explores cutting-edge technologies and their application in solarpunk futures. This is where sci-fi meets reality.",
    focusAreas: ["AI & Machine Learning", "Biomimetic Design", "Futuristic Concepts", "Human-Computer Interaction"],
    skills: ["Python/TensorFlow", "Generative Design", "Conceptual Thinking", "Rapid Prototyping"]
  },
  {
    icon: BookOpen,
    title: "Research & Documentation",
    category: "Knowledge",
    description: "Reports, research papers, surveys, magazine writing, and documentation archive.",
    details: "Ensures that knowledge is preserved and shared. This division handles all academic research, publication of findings, and maintaining the club's knowledge base.",
    focusAreas: ["Technical Writing", "Academic Research", "Survey Design & Analysis", "Knowledge Management"],
    skills: ["Research Methodologies", "LaTeX/Markdown", "Data Visualization", "Critical Thinking"]
  },
  {
    icon: Globe,
    title: "Outreach & Collaborations",
    category: "External",
    description: "Social media, external communication, partnerships, guest speakers, and sponsor relations.",
    details: "The face of SPC. This division builds relationships with other organizations, manages our public image, and secures the resources we need to grow.",
    focusAreas: ["Public Relations", "Social Media Management", "Strategic Partnerships", "Sponsorship Acquisition"],
    skills: ["Communication", "Negotiation", "Brand Management", "Networking"]
  },
  {
    icon: Calendar,
    title: "Events & Development",
    category: "Operations",
    description: "Workshops, logistics, internal sessions, GDs, presentations, and event planning.",
    details: "The engine that keeps SPC running. From organizing workshops to managing internal team dynamics, this division ensures everything happens smoothly.",
    focusAreas: ["Event Management", "Logistics Planning", "Team Building", "Workshop Coordination"],
    skills: ["Project Management", "Leadership", "Organizational Skills", "Time Management"]
  },
  {
    icon: Users,
    title: "Community & CSR",
    category: "Social",
    description: "Teaching kids, cleanups, awareness events, NGO collaboration, and social impact work.",
    details: "Dedicated to making a real-world impact. We take our technology and values out into the community to drive positive change.",
    focusAreas: ["Educational Outreach", "Community Service", "Environmental Drives", "Social Impact Assessment"],
    skills: ["Teaching/Mentoring", "Empathy", "Community Organizing", "Safety Planning"]
  },
  {
    icon: Palette,
    title: "Design & Media",
    category: "Creative",
    description: "Posters, branding, solarpunk aesthetics, photography, and videography.",
    details: "Visualizes the solarpunk future. This division creates the art, media, and design language that defines SPC's identity.",
    focusAreas: ["Graphic Design & Branding", "Photography & Videography", "UI/UX Design", "Digital Art"],
    skills: ["Adobe Creative Suite", "Figma", "Visual Storytelling", "Composition"]
  },
  {
    icon: Coins,
    title: "Finance Division",
    category: "Finance",
    description: "Budgeting, expenditure logs, and sponsorship proposals.",
    details: "Manages the financial health of the club. Ensures transparency, strategic allocation of funds, and sustainable growth.",
    focusAreas: ["Budget Planning", "Expenditure Tracking", "Financial Reporting", "Resource Allocation"],
    skills: ["Accounting Basics", "Excel/Sheets", "Financial Planning", "Attention to Detail"]
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
    case "Finance":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-divisions-title">Student Leadership</h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground" data-testid="text-divisions-description">
            Guiding the vision and ensuring the smooth operation of our community.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-32">
          {leadership.map((leader, index) => (
            <motion.div
              key={leader.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="h-full hover-elevate transition-all duration-300 border-primary/20 bg-primary/5 cursor-pointer hover:bg-primary/10">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <leader.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{leader.title}</h3>
                      <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/5">
                        {leader.role}
                      </Badge>
                      <p className="text-muted-foreground">{leader.description}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <leader.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <DialogTitle className="text-2xl font-bold">{leader.title}</DialogTitle>
                        <Badge variant="outline" className="mt-2 border-primary/30 text-primary bg-primary/5">
                          {leader.role}
                        </Badge>
                      </div>
                    </div>
                    <DialogDescription className="text-base text-foreground/80">
                      {leader.details}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 mt-4">
                    <div>
                      <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-3 tracking-wider">Key Responsibilities</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.focusAreas.map((area) => (
                          <Badge key={area} variant="secondary" className="bg-secondary/50">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-3 tracking-wider">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Divisions</h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            SPC is organized into specialized divisions, each focusing on a key aspect of our mission. Members can participate across multiple divisions based on their interests.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.slice(0, 8).map((division, index) => (
            <motion.div
              key={division.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="h-full hover-elevate transition-all duration-300 cursor-pointer hover:border-primary/50" data-testid={`card-division-${index}`}>
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
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <division.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <DialogTitle className="text-2xl font-bold">{division.title}</DialogTitle>
                        <Badge variant="outline" className={`mt-2 ${getCategoryColor(division.category)}`}>
                          {division.category} Division
                        </Badge>
                      </div>
                    </div>
                    <DialogDescription className="text-base text-foreground/80">
                      {division.details}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 mt-4">
                    <div>
                      <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-3 tracking-wider">Focus Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {division.focusAreas.map((area) => (
                          <Badge key={area} variant="secondary" className="bg-secondary/50">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-3 tracking-wider">Skills You'll Gain</h4>
                      <div className="flex flex-wrap gap-2">
                        {division.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <motion.div
            className="w-full sm:max-w-[calc(50%-12px)] lg:max-w-[calc(25%-18px)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Card className="h-full hover-elevate transition-all duration-300 cursor-pointer hover:border-primary/50" data-testid="card-division-finance">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Coins className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className={getCategoryColor("Finance")}>
                        Treasurer
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2" data-testid="text-division-title-finance">Finance Division</h3>
                    <p className="text-sm text-muted-foreground">Budgeting, expenditure logs, and sponsorship proposals.</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Coins className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl font-bold">Finance Division</DialogTitle>
                      <Badge variant="outline" className={`mt-2 ${getCategoryColor("Finance")}`}>
                        Finance Division
                      </Badge>
                    </div>
                  </div>
                  <DialogDescription className="text-base text-foreground/80">
                    {divisions[8].details}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  <div>
                    <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-3 tracking-wider">Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {divisions[8].focusAreas.map((area) => (
                        <Badge key={area} variant="secondary" className="bg-secondary/50">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-3 tracking-wider">Skills You'll Gain</h4>
                    <div className="flex flex-wrap gap-2">
                      {divisions[8].skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
