import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "wouter";

export default function HorizonVision() {
    const targetDate = new Date("2026-03-24T21:00:00+05:30");
    
    const calculateTimeLeft = () => {
        const difference = +targetDate - +new Date();
        if (difference <= 0) return null;
        
        return {
            hours: Math.floor((difference / (1000 * 60 * 60))),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-green-500/30 overflow-x-hidden">
            <SEO
                title="Horizon 1.0 Vision"
                description="Horizon 1.0: Beyond the Machine. A Solarpunk Corps Vision."
                keywords={["Horizon 1.0", "technical workshop", "innovation", "BIET Jhansi", "student event", "engineering workshop"]}
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Event",
                    "name": "Horizon 1.0",
                    "description": "Annual flagship technical workshop: Beyond the Machine.",
                    "startDate": "2026-04-01",
                    "location": {
                        "@type": "Place",
                        "name": "BIET Jhansi",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Jhansi",
                            "addressRegion": "UP",
                            "addressCountry": "IN"
                        }
                    },
                    "organizer": {
                        "@type": "Organization",
                        "name": "Solarpunk Corps"
                    }
                }}
            />
            <Navigation className="bg-zinc-900/90 border-green-900/30 text-white" />

            {/* Main content with top margin to account for fixed header */}
            <main className="relative mt-16 min-h-[calc(100vh-4rem)] flex items-start md:items-center justify-center overflow-hidden py-16 md:py-0">
                {/* Refined Background Overlay with More Visible Dynamic Gradients */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[#020617]" /> {/* Deep midnight blue/black base */}
                    
                    {/* Vibrant Center Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.15),transparent_70%)]" />
                    
                    {/* Animated Accent Swirls - Increased Opacity */}
                    <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse-slow" />
                    <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-green-600/20 rounded-full blur-[120px] animate-pulse-slow-delayed" />
                    
                    {/* Subtle Top-Down Gradient to anchor the header */}
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-transparent to-black" />
                </div>
 
                {/* Content Container */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-6 md:pt-10">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Link href="/events">
                            <span className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mb-4 md:mb-8 cursor-pointer text-sm font-medium tracking-wider uppercase">
                                <ArrowLeft className="w-4 h-4" /> Back to Events
                            </span>
                        </Link>

                        <div className="mb-6 flex justify-center">
                            <Badge variant="outline" className="border-green-500/50 text-green-400 bg-green-950/30 backdrop-blur-md px-4 py-1 tracking-widest uppercase text-xs">
                                Coming Soon
                            </Badge>
                        </div>

                        <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold font-horizon mb-4 md:mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-2xl leading-tight">
                            Horizon <span className="text-green-500">1.0</span>
                        </h1>
                        <p className="text-green-500 font-bold text-xl md:text-2xl mb-8 md:mb-8 uppercase tracking-[0.25em] md:tracking-[0.3em]">Beyond the Machine</p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="h-px w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mb-8"
                        />

                        <h2 className="text-xl md:text-3xl font-light text-green-100/80 tracking-wide font-serif italic max-w-3xl mx-auto mb-12 md:mb-12 px-4 leading-relaxed">
                            Where logic meets the sandbox, and minds meet the machine.
                        </h2>

                        <div className="flex flex-col items-center gap-6">
                            {timeLeft ? (
                                <div className="flex gap-4 md:gap-8 justify-center">
                                    {[
                                        { label: "HOURS", value: timeLeft.hours },
                                        { label: "MINUTES", value: timeLeft.minutes },
                                        { label: "SECONDS", value: timeLeft.seconds }
                                    ].map((unit) => (
                                        <div key={unit.label} className="flex flex-col items-center">
                                            <div className="text-4xl md:text-5xl font-mono font-bold text-green-400 bg-green-950/20 backdrop-blur-sm border border-green-500/20 rounded-lg w-20 md:w-24 h-20 md:h-24 flex items-center justify-center shadow-lg shadow-green-900/10">
                                                {String(unit.value).padStart(2, '0')}
                                            </div>
                                            <span className="text-[10px] md:text-[10px] font-bold tracking-widest text-green-500/60 mt-2">{unit.label}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-2xl md:text-4xl font-bold text-green-400 animate-pulse">
                                    THE SEQUENCE HAS BEGUN
                                </div>
                            )}
                            
                            <div className="flex items-center gap-2 text-sm text-green-200/60 font-mono">
                                <Clock className="w-5 h-5 text-green-500" />
                                <span>Applications begin soon.</span>
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            </main>
        </div>
    );
}
