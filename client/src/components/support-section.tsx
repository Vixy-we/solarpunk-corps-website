import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Check, Cpu, Wrench, Newspaper, Heart,
    Building2, TrendingUp, ArrowRight, Users,
    Coins, GraduationCap, Microscope, Rocket
} from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useEffect } from "react";

const supportImpact = [
    { icon: Microscope, title: "Foundational Labs", description: "Help us build our first hardware inventory from scratch." },
    { icon: Rocket, title: "Student Launches", description: "Directly fund inaugural projects like the Solar Rover." },
    { icon: Heart, title: "Social Impact", description: "Enable our CSR activities and community tech outreach." },
    { icon: GraduationCap, title: "Talent Pipeline", description: "Connect directly with our top performing student builders." }
];

const fundingAreas = [
    { icon: Cpu, title: "Hardware Lab", description: "Microcontrollers, sensors, motors, battery systems" },
    { icon: Wrench, title: "Workshop Tools", description: "Soldering stations, safety equipment, prototyping tools" },
    { icon: Newspaper, title: "Creative Output", description: "Magazine printing costs, art supplies" },
    { icon: Heart, title: "Community Impact", description: "CSR logistics, survey tools, outreach materials" }
];

const commitments = [
    { title: "100% Impact Allocation", description: "Every rupee/resource goes directly into hardware, tools, and project logistics." },
    { title: "Radical Transparency", description: "Detailed reporting and open financial records for all major supporters." },
    { title: "Direct Engagement", description: "Choose to direct support toward specific projects or divisions." },
    { title: "Youth Mentorship First", description: "Priority is always given to student growth and professional development." }
];

function BackgroundElements() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated Solar Circles */}
            <motion.div
                className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Ambient Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none mix-blend-overlay"></div>
        </div>
    );
}

export function SupportSection() {
    const [, setLocation] = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleNavigate = (path: string) => {
        setLocation(path);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    return (
        <section id="support-top" className="relative py-20 md:py-32 bg-background transition-colors duration-500 overflow-hidden">
            <BackgroundElements />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Badge variant="outline" className="mb-6 border-primary/30 text-primary px-4 py-1.5 text-sm font-medium tracking-wide bg-primary/5">
                        Support Our Club
                    </Badge>
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[1.1]">
                        Help Us Build the<br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-500 to-primary bg-[length:200%_auto] animate-gradient">
                            Solarpunk Future.
                        </span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground font-serif leading-relaxed opacity-90">
                        We're just a group of passionate students starting from scratch — building a future we believe in. Your support, whether it's mentorship, equipment, or just a word of encouragement, means the world to us. 💚
                    </p>
                </motion.div>

                {/* Major Pathways - Redesigned */}
                <div className="flex flex-col gap-16 mb-24">

                    {/* Alumni Card - CENTRAL SPOTLIGHT */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-5xl mx-auto"
                    >
                        <Card className="border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.03] via-background to-emerald-500/[0.05] dark:from-emerald-900/[0.1] dark:to-emerald-900/[0.05] overflow-hidden shadow-2xl shadow-emerald-500/10 relative">
                            <div className="absolute top-0 right-0 p-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <CardContent className="p-8 md:p-12 relative z-10">
                                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8">
                                    <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                                        <GraduationCap className="h-10 w-10 text-emerald-600" />
                                    </div>
                                    <div>
                                        <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 mb-2 px-3 py-1 text-sm">Guidance & Legacy</Badge>
                                        <h3 className="text-4xl md:text-5xl font-bold font-serif text-foreground">For Alumni</h3>
                                    </div>
                                </div>

                                <p className="text-xl md:text-2xl text-muted-foreground mb-10 font-serif leading-relaxed max-w-3xl">
                                    Reconnect with your roots. Share the wisdom you've gained, mentor the builders who came after you,
                                    and help us turn an empty room into a powerhouse of innovation.
                                </p>

                                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                                    {[
                                        "Mentorship & Insights", "Resource Support",
                                        "Financial Seed Fund", "Advisory & Guidance"
                                    ].map((item, i) => (
                                        <motion.div
                                            key={item}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 + (i * 0.1) }}
                                            className="flex items-center gap-3 text-base font-medium p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                                            <span>{item}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        size="lg"
                                        className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 text-lg h-14 px-8 shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all"
                                        onClick={() => handleNavigate("/sponsors/alumni")}
                                    >
                                        Reconnect as Alumni
                                        <ArrowRight className="h-5 w-5" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Partner Card - SECONDARY */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full max-w-3xl mx-auto"
                    >
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                            <CardContent className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <Building2 className="h-8 w-8 text-primary" />
                                </div>

                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row items-center md:items-start gap-2 mb-2">
                                        <Badge variant="outline" className="border-primary/20 text-primary">Innovation & Impact</Badge>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">For Partners</h3>
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        Partner with us to fuel hardware innovation and social impact.
                                        Align your brand with sustainability and gain access to a dedicated talent pool of self-taught builders.
                                    </p>

                                    <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-foreground/80 mb-6">
                                        {["Corporate Sponsorship", "Project Micro-Grants", "Knowledge Shares", "Hiring Access"].map(item => (
                                            <span key={item} className="flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    <Button
                                        variant="outline"
                                        className="border-primary/20 text-primary hover:bg-primary/5 gap-2 group/btn"
                                        onClick={() => handleNavigate("/sponsors/partner")}
                                    >
                                        Partner With Us
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                </div>

                {/* Re-using existing good blocks as requested */}
                <div className="space-y-24">
                    {/* Support Value Prop */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Support Solarpunk Corps?</h3>
                            <p className="text-muted-foreground">Your support translates directly into tangible impact.</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">
                            {supportImpact.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all h-full border-primary/10">
                                        <CardContent className="p-6 text-center">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                                <item.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <h4 className="font-bold mb-2">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Funding Breakdown (Previous good block) */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge variant="secondary" className="mb-4">Foundational Needs</Badge>
                            <h3 className="text-3xl font-bold mb-6">What Your Support Funds</h3>
                            <p className="text-lg text-muted-foreground mb-8 font-serif">
                                We are starting from zero. Your contributions fund the tools, materials, and logistics that allow student builders to create.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {fundingAreas.map((area) => (
                                    <Card key={area.title} className="hover-elevate border-primary/10">
                                        <CardContent className="p-5 flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <area.icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm mb-1">{area.title}</h4>
                                                <p className="text-xs text-muted-foreground">{area.description}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 h-full">
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold mb-6">Our Commitments to You</h3>
                                    <p className="text-muted-foreground mb-6">
                                        We're building our reputation on trust and tangible results. Here's what we promise:
                                    </p>

                                    <ul className="space-y-4">
                                        {commitments.map((commitment) => (
                                            <li key={commitment.title} className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Check className="h-4 w-4 text-primary-foreground" />
                                                </div>
                                                <div>
                                                    <span className="font-semibold">{commitment.title}</span>
                                                    <p className="text-sm text-muted-foreground">{commitment.description}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
