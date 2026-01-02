import { Link } from "wouter";
import { motion } from "framer-motion";
import { Leaf, Hammer, ArrowLeft, ArrowRight } from "lucide-react";

export default function UnderConstruction() {
    return (
        <div className="min-h-screen bg-background font-sans flex flex-col items-center justify-center p-6 overflow-hidden relative">

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-background to-blue-500/5" />

            {/* Animated Floating Elements (Leaves/Specs) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`leaf-${i}`}
                        className="absolute text-emerald-500/20"
                        style={{ top: `${Math.random() * 100}%` }}
                        initial={{ x: "-10vw", opacity: 0, rotate: 0 }}
                        animate={{
                            x: "110vw",
                            opacity: [0, 1, 0],
                            rotate: 360,
                            y: [0, -50, 0]
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10
                        }}
                    >
                        <Leaf size={Math.random() * 30 + 20} />
                    </motion.div>
                ))}
            </div>

            {/* Main Content Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-2xl w-full text-center space-y-8"
            >
                {/* Icon Wrapper */}
                <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full" />
                    <div className="relative bg-card border border-border p-6 rounded-2xl shadow-lg inline-flex items-center justify-center">
                        <Hammer className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">
                        We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">Cultivating</span> <br />
                        This Space
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                        Good things take time to grow. We are currently building and polishing this section of the Solarpunk Corps digital garden.
                    </p>
                </div>

                {/* Progress Indicator (Decorative) */}
                <div className="max-w-xs mx-auto w-full bg-secondary/50 h-2 rounded-full overflow-hidden relative">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-emerald-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "65%" }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    />
                </div>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
                    Status: Germinating...
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                    <Link href="/">
                        <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground font-medium text-sm">
                            <ArrowLeft className="h-4 w-4" /> Return Home
                        </button>
                    </Link>

                    {/* Optional 'Peek' button if they really want to see it, 
                        or we can just remove it if access should be blocked. 
                        Keeping it as 'Visit Anyway' for now since the user had it before. */}
                    <div className="flex flex-col items-center gap-1">
                        <Link href="/experience-spc">
                            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 font-medium text-sm">
                                Visit Anyway <ArrowRight className="h-4 w-4" />
                            </button>
                        </Link>
                        <span className="text-[10px] text-muted-foreground/70 uppercase tracking-widest font-mono">
                            (Prefer PC)
                        </span>
                    </div>
                </div>
            </motion.div>

        </div>
    );
}
