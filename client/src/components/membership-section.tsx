import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Compass, Briefcase, Zap, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  {
    icon: Compass,
    title: "Explorers",
    year: "1st–3rd Year",
    color: "from-amber-400/20 to-yellow-500/20",
    borderColor: "border-amber-400/30",
    iconColor: "text-amber-500",
    description: "Beginners who join to explore robotics, sustainability, and creative tech ideas.",
    benefits: [
      "Attend sessions and workshops",
      "Join mini-projects",
      "Learn basics across divisions",
      "Build experience gradually"
    ]
  },
  {
    icon: Briefcase,
    title: "Executives",
    year: "2nd–3rd Year",
    color: "from-blue-400/20 to-blue-600/20",
    borderColor: "border-blue-400/30",
    iconColor: "text-blue-500",
    description: "The action team. Executives help organize events, handle ongoing projects, and support the Leads.",
    benefits: [
      "Organize events and workshops",
      "Handle ongoing projects",
      "Support division leads",
      "Take on operational roles"
    ]
  },
  {
    icon: Zap,
    title: "Leaders",
    year: "3rd–4th Year",
    color: "from-primary/20 to-primary/30",
    borderColor: "border-primary/30",
    iconColor: "text-primary",
    description: "They guide the whole club by managing divisions, planning, and setting overall direction.",
    benefits: [
      "Manage divisions",
      "Set club direction",
      "Mentor juniors",
      "Lead major initiatives"
    ]
  }
];

export function MembershipSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="membership-top" className="py-20 md:py-32">
      <span id="membership" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4" data-testid="badge-membership">Join Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-membership-title">Membership Structure</h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-6" data-testid="text-membership-description">
            SPC has three tiers of membership, designed to help students grow from curious beginners to confident leaders.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium" data-testid="text-membership-open">
            <Check className="h-4 w-4" />
            Membership is open to all branches. No experience required.
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full bg-gradient-to-b ${tier.color} ${tier.borderColor} border-2 hover-elevate transition-all duration-300`} data-testid={`card-tier-${index}`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-background/80 flex items-center justify-center mb-4`}>
                    <tier.icon className={`h-8 w-8 ${tier.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl" data-testid={`text-tier-title-${index}`}>{tier.title}</CardTitle>
                  <Badge variant="outline" className="mx-auto mt-2">{tier.year}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-6">{tier.description}</p>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <Check className={`h-5 w-5 ${tier.iconColor} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
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
          <div className="flex flex-col items-center gap-3">
            <Button size="lg" onClick={scrollToContact} data-testid="button-membership-apply" disabled>
              Apply to Join
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              This feature will be added soon. Meanwhile, please use the <a href="/contact" className="text-green-600 hover:underline">Contact Us</a> page.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
