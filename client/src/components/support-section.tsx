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
        <section id="support-top" className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge variant="outline" className="mb-4 border-primary/30 text-primary px-4 py-1">Collaborate</Badge>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Help Us Forge the <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-600">Solarpunk Future.</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl text-muted-foreground font-serif leading-relaxed">
                        The future isn't just funded—it's forged. Whether you are an alumnus looking to share expertise or a partner seeking to empower innovation, your contribution shapes the next generation of builders.
                    </p>
                </motion.div>

                {/* Major Pathways */}
                <div className="grid lg:grid-cols-2 gap-8 mb-24">
                    {/* Alumni Card - Top Priority */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="h-full border-2 border-emerald-500/20 bg-emerald-500/[0.02] dark:bg-emerald-500/[0.05] overflow-hidden group hover:border-emerald-500/40 transition-all duration-500 shadow-xl shadow-emerald-500/5">
                            <CardContent className="p-10 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <Users className="h-8 w-8 text-emerald-600" />
                                    </div>
                                    <div>
                                        <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 mb-1">Guidance & Legacy</Badge>
                                        <h3 className="text-3xl font-bold">For Alumni</h3>
                                    </div>
                                </div>

                                <p className="text-lg text-muted-foreground mb-8 font-serif leading-relaxed">
                                    Reconnect with your roots. Share the wisdom you've gained, mentor the builders who came after you,
                                    and help us turn an empty room into a powerhouse of innovation.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-10">
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <span>Mentorship & Insights</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <span>Resource Support</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <span>Financial Seed Fund</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <span>Advisory & Guidance</span>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <Button
                                        size="lg"
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white gap-2 text-lg h-14"
                                        onClick={() => handleNavigate("/sponsors/alumni")}
                                    >
                                        Reconnect as Alumni
                                        <ArrowRight className="h-5 w-5" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Partner Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Card className="h-full border-2 border-primary/20 bg-primary/[0.02] dark:bg-primary/[0.05] overflow-hidden group hover:border-primary/40 transition-all duration-500 shadow-xl shadow-primary/5">
                            <CardContent className="p-10 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <Building2 className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                        <Badge className="bg-primary/10 text-primary mb-1">Innovation & Impact</Badge>
                                        <h3 className="text-3xl font-bold">For Partners</h3>
                                    </div>
                                </div>

                                <p className="text-lg text-muted-foreground mb-8 font-serif leading-relaxed">
                                    Partner with us to fuel hardware innovation and social impact.
                                    Align your brand with sustainability and gain access to a dedicated talent pool of self-taught builders.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-10">
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span>Corporate Sponsorship</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span>Project Micro-Grants</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span>Knowledge Shares</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span>Hiring Access</span>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <Button
                                        size="lg"
                                        className="w-full bg-primary hover:bg-primary/90 gap-2 text-lg h-14"
                                        onClick={() => handleNavigate("/sponsors/partner")}
                                    >
                                        Partner With Us
                                        <ArrowRight className="h-5 w-5" />
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
                                <Card key={item.title} className="bg-card/50 backdrop-blur-sm hover-elevate transition-all">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <h4 className="font-bold mb-2">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </CardContent>
                                </Card>
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
