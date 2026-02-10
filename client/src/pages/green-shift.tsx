import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "wouter";

export default function GreenShiftVision() {
    return (
        <div className="h-screen overflow-hidden bg-black text-white font-sans selection:bg-green-500/30">
            <SEO
                title="GreenShift 2026 Vision"
                description="GreenShift 2026: A Solarpunk Corps Vision. Annual flagship technical workshop on sustainability innovation."
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Event",
                    "name": "GreenShift 2026",
                    "description": "Annual flagship technical workshop designed as an immersive, hands-on learning experience focused on sustainability-driven engineering.",
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
            <main className="relative mt-16 min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/greenshift-vision.webp"
                        alt="GreenShift Vision Background"
                        className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute inset-0 bg-green-950/20 mix-blend-overlay" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Link href="/events">
                            <span className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mb-8 cursor-pointer text-sm font-medium tracking-wider uppercase">
                                <ArrowLeft className="w-4 h-4" /> Back to Events
                            </span>
                        </Link>

                        <div className="mb-6 flex justify-center">
                            <Badge variant="outline" className="border-green-500/50 text-green-400 bg-green-950/30 backdrop-blur-md px-4 py-1 tracking-widest uppercase text-xs">
                                Coming Soon
                            </Badge>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-serif mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-2xl">
                            GreenShift <span className="text-green-500">2026</span>
                        </h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="h-px w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mb-8"
                        />

                        <h2 className="text-xl md:text-3xl font-light text-green-100/80 tracking-wide font-serif italic max-w-3xl mx-auto mb-12">
                            A Solarpunk Corps Vision
                        </h2>

                        <div className="flex justify-center gap-8 text-sm text-green-200/60 font-mono">
                            <div className="flex flex-col items-center gap-2">
                                <Clock className="w-5 h-5 text-green-500" />
                                <span>Stay Tuned</span>
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
