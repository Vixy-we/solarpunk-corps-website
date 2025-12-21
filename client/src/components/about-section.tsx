import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Leaf, Users, Heart, Zap, Cpu, Palette, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Lightbulb,
    title: "Hopeful Innovation",
    description: "We believe technology should inspire optimism and create positive change in our world."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Environmental consciousness is at the core of everything we build and practice."
  },
  {
    icon: Users,
    title: "Interdisciplinary Collaboration",
    description: "Bringing together minds from all branches to create holistic solutions."
  },
  {
    icon: Heart,
    title: "Social Responsibility",
    description: "Technology must serve communities and uplift those who need it most."
  },
  {
    icon: Zap,
    title: "Student Empowerment",
    description: "Equipping students with real skills and confidence to lead change."
  }
];

const identity = [
  { icon: Cpu, label: "Robotics" },
  { icon: Leaf, label: "Sustainability" },
  { icon: Heart, label: "Social Responsibility" },
  { icon: Palette, label: "Creativity" },
  { icon: GraduationCap, label: "Skill Building" }
];

export function AboutSection() {
  return (
    <section id="about-top" className="py-20 md:py-32 bg-card/50">
      <span id="about" />

      {/* Large banner before "Who We Are" */}
      <div className="mb-12">
        <div
          className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden"
          style={{ backgroundImage: "url('/csr.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black/50" aria-hidden />
          <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
            <div className="inline-block bg-black/30 backdrop-blur-sm rounded-lg px-6 py-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md">Solarpunk Corps</h1>
              <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90 font-medium">Where Technology, Nature, and People Meet</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4" data-testid="badge-about">About Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-about-title">Who We Are</h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground" data-testid="text-about-description">
            Solarpunk Corps is an interdisciplinary student-led club currently in its founding stage. It is being built by students from diverse fields who believe engineering should meet ethics, creativity should meet sustainability, and learning should lead to real-world action. Our goal is to bridge the gap between classroom theory and practical, socially responsible application
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20" data-testid="card-identity">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center" data-testid="text-identity-title">Our Identity</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {identity.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 px-4 py-2 bg-background/80 rounded-full border border-border"
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{item.label}</span>
                    {index < identity.length - 1 && (
                      <span className="ml-2 text-primary font-bold">+</span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mt-0 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-background to-muted/50 border border-primary/10 shadow-sm text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12 bg-primary/5 rounded-full blur-3xl"></div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground relative z-10" data-testid="text-about-what-we-do-title">
              What Do <span className="text-primary">We Actually Do?</span>
            </h3>

            <div className="space-y-6 relative z-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Solarpunk Corps, we work on <span className="font-semibold text-foreground">robotics, sustainable technologies, and socially responsible initiatives</span>—but we don’t put rigid limits on what that must look like.
              </p>

              <div className="pl-4 border-l-4 border-primary/20 italic text-muted-foreground">
                Projects can range from building robots or automation systems to developing eco-friendly tech, community-focused engineering solutions, educational outreach, or creative–technical experiments.
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Rather than handing students a fixed roadmap, <span className="font-semibold text-foreground">we encourage members to define the problems they care about</span>, shape the goals, and design the projects themselves.
              </p>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-lg font-medium text-foreground">
                  If you want to propose an idea, lead a project, or even redefine what the club should work on next—
                  <span className="text-primary font-bold">this is the place to do it.</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]"
            >
              <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-value-${index}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" data-testid={`text-value-title-${index}`}>{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
