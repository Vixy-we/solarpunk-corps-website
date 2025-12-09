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
            Solarpunk Corps is in the founding stage — created by students who want a space where engineering meets ethics, creativity meets sustainability, and learning meets action. We want to fill the gap between classroom theory and real-world application.
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
