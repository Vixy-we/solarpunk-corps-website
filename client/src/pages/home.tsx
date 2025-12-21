import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight, Cpu, Leaf, Heart, Zap, Globe, Rocket, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [, navigate] = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      <main>
        <HeroSection />

        {/* SECTION 1: THE MISSION SUMMARY (The "Why") */}
        <section className="py-24 relative overflow-hidden bg-card/30 border-y border-border/50">
          <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="outline" className="mb-4 border-primary/30 text-primary">The Solarpunk Ethos</Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  We don't just build machines. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">We build a Future.</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Engineering often forgets the human element. We're bringing it back.
                  Solarpunk Corps is a student movement closing the gap between classroom theory and real-world impact.
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary text-base font-semibold group hover:bg-transparent hover:underline" onClick={() => handleNavigate("/about")}>
                  Read our full manifesto <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <div className="grid gap-4">
                {[
                  { icon: Cpu, title: "The Technologist", desc: "Hardware, Sensors, Automation with purpose.", color: "text-blue-500", bg: "bg-blue-500/10" },
                  { icon: Leaf, title: "The Ecologist", desc: "Sustainability, Renewables, Circular Economy.", color: "text-green-500", bg: "bg-green-500/10" },
                  { icon: Heart, title: "The Humanist", desc: "Social Impact, Ethics, Community Service.", color: "text-rose-500", bg: "bg-rose-500/10" }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-accent/10 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE PLAYGROUND (The "What") */}
        <section className="py-24 bg-gradient-to-b from-background to-accent/5">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Playground</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're breaking down the silos. <br /> Whether you code, design, solder, or write, there is a place for you here.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { label: "Hardware Forge", icon: Zap, color: "#246AA5" },
                { label: "Green Initiatives", icon: Leaf, color: "#58AC4A" },
                { label: "Digital Art & UI", icon: Globe, color: "#FFC32F" },
                { label: "Social Drives", icon: Users, color: "#FD8F36" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial="initial"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  variants={{
                    initial: { opacity: 0, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.3, delay: i * 0.1 }
                    },
                    hover: {
                      scale: 1.05,
                      y: -8,
                      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                        delay: 0.2
                      }
                    }
                  }}
                  style={{ "--theme-color": item.color } as React.CSSProperties}
                  className="relative p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 transition-colors duration-300 delay-150 cursor-default group hover:border-[var(--theme-color)] overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{ backgroundColor: item.color }}
                    variants={{
                      initial: { opacity: 0 },
                      hover: { opacity: 0.15 }
                    }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  />
                  <div className="relative z-10">
                    <item.icon
                      className="h-8 w-8 mx-auto mb-3 text-muted-foreground transition-colors duration-200 group-hover:text-[var(--theme-color)]"
                    />
                    <span className="font-semibold block group-hover:text-[var(--theme-color)] transition-colors duration-200">{item.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button onClick={() => handleNavigate("/what-we-do")}>
              Explore All Activities
            </Button>
          </div>
        </section>

        {/* SECTION 3: THE LAUNCH (The "Projects") */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -skew-y-3 z-0 transform origin-center scale-125" />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
              <div>
                <Badge className="mb-4 bg-primary text-primary-foreground">Pilot Phase</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Launching with Impact</h2>
                <p className="text-muted-foreground mt-2 max-w-md">
                  We are kicking off our journey with three ambitious flagship projects for 2026.
                </p>
              </div>
              <Button variant="outline" onClick={() => handleNavigate("/projects")}>View Roadmaps</Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Solar Rover", role: "The Builder", desc: "A 6-wheel environmental monitoring bot.", icon: Rocket, color: "text-orange-500", img: "/rover.webp" },
                { title: "CodeGreen", role: "The Voice", desc: "Our magazine defining the solarpunk aesthetic.", icon: Globe, color: "text-purple-500", img: "/magazine.webp" },
                { title: "Campus Survey", role: "The Mirror", desc: "Mapping tech burnout & eco-habits.", icon: Target, color: "text-blue-500", img: "/survey.webp" },
              ].map((proj, i) => (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  onClick={() => handleNavigate("/projects")}
                  className="group cursor-pointer"
                >
                  <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-muted">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                    <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute bottom-3 left-3 z-20 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                      <proj.icon className={`h-3 w-3 ${proj.color}`} />
                      {proj.role}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{proj.title}</h3>
                  <p className="text-sm text-muted-foreground">{proj.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: THE SUPPORT (Sponsors) */}
        <section className="py-24 bg-card border-t border-border">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Fuel the Movement</h2>
            <p className="text-lg text-muted-foreground mb-12">
              A student club is only as strong as its community. <br /> Whether you are an alumni, an individual or a company — we need you.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:border-primary/50 transition-colors group cursor-pointer hover:-translate-y-1 hover:shadow-xl duration-300" onClick={() => handleNavigate("/sponsors/alumni")}>
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-600 transition-all duration-300">
                    <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">For Alumni</h3>
                  <p className="text-sm text-muted-foreground mb-4">Mentor and support the next generation.</p>
                  <span className="text-emerald-600 font-semibold text-sm">Join Network &rarr;</span>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/50 transition-colors group cursor-pointer hover:-translate-y-1 hover:shadow-xl duration-300" onClick={() => handleNavigate("/sponsors/partner")}>
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                    <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">For Partners</h3>
                  <p className="text-sm text-muted-foreground mb-4">Collaborate on innovation and impact.</p>
                  <span className="text-blue-600 font-semibold text-sm">Sponsor Us &rarr;</span>
                </CardContent>
              </Card>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-24 pt-12 border-t border-border/40"
            >
              <div className="flex justify-center gap-6 mb-6">
                <Cpu className="h-8 w-8 text-blue-500 hover:fill-blue-500/30 hover:scale-110 transition-all duration-300 cursor-pointer" />
                <Leaf className="h-8 w-8 text-emerald-500 hover:fill-emerald-500/30 hover:scale-110 transition-all duration-300 cursor-pointer" />
                <Heart className="h-8 w-8 text-rose-500 hover:fill-rose-500/30 hover:scale-110 transition-all duration-300 cursor-pointer" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Ready to plant seeds for the future?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                We are always looking for dreamers, tinkerers, and doers.
                If you believe technology can heal the planet, you belong here.
              </p>
              <Button size="lg" onClick={() => handleNavigate("/contact")} className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
