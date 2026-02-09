import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight, Cpu, Leaf, Heart, Zap, Globe, Rocket, Users, Target, Palette, Handshake, GraduationCap, Calendar } from "lucide-react";
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
      <SEO
        title="Home"
        description="Solarpunk Corps is a student-led club at BIET Jhansi blending robotics, sustainability, creativity, and community action. Join the movement for hopeful innovation."
      />
      <Navigation />

      <main>
        <HeroSection />

        {/* SECTION 1: THE MISSION SUMMARY (The "Why") */}
        {/* SECTION 1: THE MISSION SUMMARY (The "Why") */}
        {/* SECTION 1: THE MISSION SUMMARY (The "Why") */}
        <section className="py-24 relative overflow-hidden bg-background border-y border-border/50">
          {/* Abstract Background Element for this section */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -left-[10%] -top-[10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content Box */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge variant="outline" className="mb-4 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10">The Solarpunk Ethos</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                    We don't just build machines. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600 dark:to-blue-500">We build a Future.</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                    Engineering often forgets the human element. We're bringing it back.
                    Solarpunk Corps is a student movement closing the gap between classroom theory and real-world impact.
                  </p>
                </motion.div>

                {/* Bottom Features Text */}
                <motion.div
                  className="pt-4 flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-blue-500" /> Open Hardware
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-emerald-500" /> Sustainable
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-rose-500" /> Community First
                  </div>
                </motion.div>

                <div className="pt-2">
                  <Button variant="ghost" className="p-0 h-auto text-emerald-600 dark:text-emerald-400 text-base font-semibold group hover:bg-transparent hover:text-emerald-500" onClick={() => handleNavigate("/about")}>
                    Learn more about us <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Right Visual (Abstract Representation - Tilted Cards) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative hidden lg:block"
              >
                <div className="relative z-10 grid grid-cols-2 gap-4 translate-x-8">
                  <div className="space-y-4 pt-12">
                    <motion.div
                      initial={{ rotate: -6 }}
                      whileHover={{ scale: 1.15, rotate: 0, zIndex: 20 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="bg-card dark:bg-zinc-900 border border-border dark:border-zinc-800 p-6 rounded-2xl shadow-xl backdrop-blur-sm cursor-default relative"
                    >
                      <div className="h-10 w-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                        <Leaf className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
                      </div>
                      <h3 className="text-foreground dark:text-white font-bold mb-1">Ecologist</h3>
                      <p className="text-muted-foreground dark:text-zinc-400 text-sm">Reshaping consumption.</p>
                    </motion.div>

                    <motion.div
                      initial={{ rotate: -3 }}
                      whileHover={{ scale: 1.15, rotate: 0, zIndex: 20 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="bg-card dark:bg-zinc-900 border border-border dark:border-zinc-800 p-6 rounded-2xl shadow-xl backdrop-blur-sm cursor-default relative"
                    >
                      <div className="h-10 w-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                        <Cpu className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                      </div>
                      <h3 className="text-foreground dark:text-white font-bold mb-1">Technologist</h3>
                      <p className="text-muted-foreground dark:text-zinc-400 text-sm">Automation for good.</p>
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <motion.div
                      initial={{ rotate: 6 }}
                      whileHover={{ scale: 1.15, rotate: 0, zIndex: 20 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="bg-card dark:bg-zinc-900 border border-border dark:border-zinc-800 p-6 rounded-2xl shadow-xl backdrop-blur-sm cursor-default relative"
                    >
                      <div className="h-10 w-10 bg-rose-500/20 rounded-lg flex items-center justify-center mb-4">
                        <Heart className="h-6 w-6 text-rose-600 dark:text-rose-500" />
                      </div>
                      <h3 className="text-foreground dark:text-white font-bold mb-1">Humanist</h3>
                      <p className="text-muted-foreground dark:text-zinc-400 text-sm">People over profit.</p>
                    </motion.div>

                    <motion.div
                      initial={{ rotate: 3 }}
                      whileHover={{ scale: 1.15, rotate: 0, zIndex: 20 }}
                      onClick={() => handleNavigate("/structure")}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="bg-gradient-to-br from-emerald-600 to-emerald-800 border border-emerald-500/50 p-6 rounded-2xl shadow-2xl backdrop-blur-sm flex flex-col justify-center items-center text-center cursor-pointer group relative"
                    >
                      <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <ArrowRight className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-lg leading-tight">Make an<br />Impact</h3>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Elements behind grid */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl -z-10" />
              </motion.div>
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
                { label: "Art and Voice", icon: Palette, color: "#FFC32F" },
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


        {/* SECTION 2.5: UPCOMING (GreenShift) - REFINED */}
        <section className="py-24 relative overflow-hidden bg-background">
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-[5%] top-[10%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
              <div>
                <Badge className="mb-4 bg-emerald-600 text-white hover:bg-emerald-700">Upcoming Flagship Event</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Engineering for Sustainability</h2>
                <p className="text-muted-foreground mt-2 max-w-md">
                  Master the tools to build a greener future through our hands-on technical workshops.
                </p>
              </div>
              <Button variant="outline" onClick={() => handleNavigate("/events")}>View All Events</Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card dark:bg-zinc-900 border border-border p-8 md:p-12 rounded-3xl overflow-hidden shadow-2xl relative"
            >
              {/* Decorative Gradient Blob */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative z-10">
                  <Badge variant="outline" className="mb-6 py-1.5 px-4 text-sm border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5">
                    Annual Flagship Workshop
                  </Badge>

                  <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif tracking-tight text-foreground">
                    GreenShift <span className="text-emerald-600 dark:text-emerald-500">2026</span>
                  </h2>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                    An immersive engineering workshop where sustainability meets innovation. Join us to build, learn, and shape the green future.
                  </p>

                  <div className="flex flex-wrap gap-4 items-center">
                    <Button onClick={() => handleNavigate("/events/greenshift")} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-6 h-auto text-base shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 transition-all rounded-full group">
                      Explore Event
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full border border-border/50">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      <span>Dates Announcement Soon</span>
                    </div>
                  </div>
                </div>

                <div className="relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => handleNavigate("/events/greenshift")}>
                  <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                  <img
                    src="/hourglass.webp"
                    alt="GreenShift 2026"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-bold text-lg mb-1">Coming Soon</p>
                      <p className="text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">Tap to view details</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              className="mt-16 sm:mt-20 border-t border-border/40 pt-12"
            >
              <div className="mb-10 text-center max-w-3xl mx-auto">
                <p className="text-base md:text-lg font-medium text-foreground/80 leading-relaxed">
                  Solarpunk Corps is a <span className="text-emerald-600 dark:text-emerald-400 font-bold">non-profit student initiative</span>.
                  All sponsorships and resources are strictly utilized for club activities, ensuring maximum impact and complete transparency.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
                    <Target className="h-5 w-5" />
                    <h3>100% Impact Allocation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every rupee/resource goes directly into hardware, tools, projects and work logistics.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold">
                    <Globe className="h-5 w-5" />
                    <h3>Radical Transparency</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Detailed reporting and open financial records for all major supporters.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold">
                    <Handshake className="h-5 w-5" />
                    <h3>Direct Engagement</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Choose to direct support toward specific projects or divisions.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold">
                    <GraduationCap className="h-5 w-5" />
                    <h3>Youth Mentorship First</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Priority is always given to student growth and professional development.
                  </p>
                </div>
              </div>
            </motion.div>

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
    </div >
  );
}
