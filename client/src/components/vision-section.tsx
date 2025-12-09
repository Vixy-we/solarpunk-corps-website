import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Leaf, Palette, Heart, GraduationCap, Target } from "lucide-react";
import { motion } from "framer-motion";

const visionPoints = [
  { icon: Cpu, text: "Technology is hands-on" },
  { icon: Leaf, text: "Sustainability is everyday life" },
  { icon: Palette, text: "Creativity is celebrated" },
  { icon: Heart, text: "Social responsibility is natural" },
  { icon: GraduationCap, text: "Learning becomes meaningful" }
];

export function VisionSection() {
  return (
    <section id="vision" className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4" data-testid="badge-vision">Our Purpose</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-vision-title">Vision & Roadmap</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6" data-testid="text-why-launching-title">Why We're Launching</h3>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-why-launching-description">
              Solarpunk Corps is launching because students deserve a space where:
            </p>
            
            <div className="space-y-4">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={point.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover-elevate"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{point.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20" data-testid="card-3-year-vision">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold" data-testid="text-3-year-vision-title">3-Year Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-8" data-testid="text-3-year-vision-description">
                  We aim to build a green, innovative campus culture over the next 3 years. Our goal is to transform BIET Jhansi into a hub for sustainable innovation and student-led change.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold">Year 1: Foundation</h4>
                      <p className="text-sm text-muted-foreground">Establish the club, complete pilot projects, build core team</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/70 text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold">Year 2: Expansion</h4>
                      <p className="text-sm text-muted-foreground">Scale projects, expand outreach, build partnerships</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/50 text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold">Year 3: Impact</h4>
                      <p className="text-sm text-muted-foreground">Sustainable culture established, measurable campus impact</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
