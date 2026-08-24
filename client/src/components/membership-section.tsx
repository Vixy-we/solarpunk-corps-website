import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Compass, Briefcase, Zap, ArrowRight, Check, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  {
    icon: Compass,
    title: "Explorer Members",
    year: "Explorers",
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
    title: "Executive Members",
    year: "Executives",
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
    title: "Lead Members",
    year: "Leaders",
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

  return (
    <>
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

      </div>
    </section>

    {/* APPLY SECTION */}
    <section id="apply-now" className="relative py-24 px-4 overflow-hidden bg-[#F4F4F0] dark:bg-zinc-900 bg-[radial-gradient(#00000015_1px,transparent_1px)] [background-size:20px_20px]">

      {/* Decorative blobs */}
      <div className="absolute top-10 right-10 w-32 md:w-48 h-32 md:h-48 bg-[#A1E4A3] border-[3px] border-stone-900 dark:border-white rounded-full shadow-[6px_6px_0px_rgba(28,25,23,1)] rotate-12 opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-24 md:w-36 h-24 md:h-36 bg-[#FFD33D] border-[3px] border-stone-900 dark:border-white shadow-[6px_6px_0px_rgba(28,25,23,1)] -rotate-6 opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 bg-[#FFD33D] border-[3px] border-stone-900 dark:border-white px-5 py-1.5 font-mono text-xs font-black tracking-widest uppercase shadow-[4px_4px_0px_rgba(28,25,23,1)] dark:shadow-[4px_4px_0px_rgba(255,255,255,0.8)] -rotate-1">
            <span className="w-2 h-2 rounded-full bg-stone-900" />
            InitializeSequence
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase mb-6 dark:text-white"
        >
          Spaces are limited.
          <br />
          <span className="text-[#27AE60]">Apply now.</span>
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-2xl mx-auto mt-10"
        >
          {/* Shadow card behind */}
          <div className="absolute inset-0 bg-stone-900 dark:bg-white translate-x-3 translate-y-3 rounded-[2rem]" />
          {/* Main card */}
          <div className="relative bg-white dark:bg-zinc-800 border-[3px] border-stone-900 dark:border-white rounded-[2rem] p-8 md:p-12 text-left">

            <p className="text-lg md:text-xl font-medium leading-relaxed text-stone-700 dark:text-zinc-300 mb-10">
              We use an external platform to handle applications more efficiently. Click the button below to start your journey.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col items-start gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSejfro1-uKG2XuV_l1cq_ye2D6Jej1jkChRtwaeamQwDhbbVw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-membership-apply"
                className="group relative inline-flex items-center justify-center overflow-hidden bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-black text-base md:text-lg py-4 px-8 border-[3px] border-stone-900 dark:border-white shadow-[6px_6px_0px_rgba(28,25,23,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,0.8)] hover:shadow-[2px_2px_0px_rgba(28,25,23,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 rounded-xl"
              >
                {/* Default label — slides up on hover */}
                <span className="flex items-center gap-3 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-full absolute inset-0 justify-center px-8">
                  Apply via Google Forms
                  <ArrowRight className="w-5 h-5" />
                </span>
                {/* Hover label — slides in from below */}
                <span className="flex items-center gap-3 transition-all duration-300 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 text-[#A1E4A3]">
                  OPEN EXTERNAL LINK
                  <ExternalLink className="w-5 h-5" />
                </span>
                {/* Spacer */}
                <span className="invisible flex items-center gap-3">Apply via Google Forms <ArrowRight className="w-5 h-5" /></span>
              </a>

              <p className="font-mono text-xs font-bold text-stone-400 dark:text-zinc-500 tracking-widest uppercase">
                * Application takes approximately 5–10 minutes.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
    </>
  );
}
