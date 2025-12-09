import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Crown, Users, Cpu, Globe, Palette, GraduationCap, Building } from "lucide-react";
import { motion } from "framer-motion";

const leaders = [
  {
    title: "Founder & Chairperson",
    icon: Crown,
    initials: "FC",
    color: "bg-primary/20 text-primary"
  },
  {
    title: "Deputy Chairperson",
    icon: Users,
    initials: "DC",
    color: "bg-blue-500/20 text-blue-600 dark:text-blue-400"
  },
  {
    title: "Technical Lead",
    icon: Cpu,
    initials: "TL",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
  },
  {
    title: "Outreach & Corporate Relations Lead",
    icon: Globe,
    initials: "OL",
    color: "bg-purple-500/20 text-purple-600 dark:text-purple-400"
  },
  {
    title: "Creative Lead",
    icon: Palette,
    initials: "CL",
    color: "bg-amber-500/20 text-amber-600 dark:text-amber-400"
  },
  {
    title: "Faculty Advisor (Officer-in-Charge)",
    icon: GraduationCap,
    initials: "FA",
    color: "bg-red-500/20 text-red-600 dark:text-red-400"
  },
  {
    title: "President (Head of Department)",
    icon: Building,
    initials: "HoD",
    color: "bg-slate-500/20 text-slate-600 dark:text-slate-400"
  }
];

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 md:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4" data-testid="badge-leadership">Our Team</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-leadership-title">Leadership</h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground" data-testid="text-leadership-description">
            Meet the founding team driving Solarpunk Corps forward. Together, we're building something meaningful.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-leader-${index}`}>
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-border">
                    <AvatarFallback className={`text-lg font-bold ${leader.color}`}>
                      {leader.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="w-10 h-10 mx-auto rounded-lg bg-muted flex items-center justify-center mb-3">
                    <leader.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-1">To be announced</p>
                  <h3 className="font-semibold text-sm" data-testid={`text-leader-title-${index}`}>{leader.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-muted-foreground">
            Leadership positions will be filled as the club officially launches.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
