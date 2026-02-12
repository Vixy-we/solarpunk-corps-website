// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Instagram, Linkedin, Github } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SEO } from "@/components/seo"; // Import SEO
// --- Components ---

const BackgroundBioCircuitry = () => {
    // New paths: Leaf structure + Circuit Board Traces
    const circuitPaths = [
        "M150,420 C150,320 150,200 150,50",
        "M150,340 Q110,330 80,310 L50,310",
        "M150,320 Q190,310 220,290 L250,290",
        "M150,240 Q110,230 80,200 L60,200 L40,180",
        "M150,220 Q190,210 220,180 L240,180 L260,160",
        "M150,140 Q120,120 100,80 L80,60",
        "M150,140 Q180,120 200,80 L220,60"
    ];

    const nodes = [
        { cx: 150, cy: 50 },
        { cx: 50, cy: 310 },
        { cx: 250, cy: 290 },
        { cx: 40, cy: 180 },
        { cx: 260, cy: 160 },
        { cx: 80, cy: 60 },
        { cx: 220, cy: 60 }
    ];

    return (
        <div className="absolute inset-0 z-0 overflow-hidden opacity-25 pointer-events-none">
            <svg
                viewBox="0 0 300 400"
                className="w-full h-full text-emerald-800"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id="growthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#d97706" />
                        <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                </defs>

                {circuitPaths.map((path, index) => (
                    <g key={index}>
                        <motion.path
                            d={path}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: [0, 1],
                                opacity: [0, 1, 1, 0]
                            }}
                            transition={{
                                duration: 4,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 0.2,
                                delay: index * 0.3,
                                times: [0, 0.8, 1]
                            }}
                        />
                    </g>
                ))}

                {nodes.map((node, i) => (
                    <motion.circle
                        key={`node-${i}`}
                        cx={node.cx}
                        cy={node.cy}
                        r="3"
                        fill="#059669"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 2 + i * 0.2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};

const AmbientParticles = () => {
    const particles = Array.from({ length: 15 });

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-amber-400 opacity-30"
                    style={{
                        width: Math.random() * 4 + 2 + 'px',
                        height: Math.random() * 4 + 2 + 'px',
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                        opacity: [0.2, 0.6, 0.2]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

const SocialLink = ({ href, icon: Icon, label, delay }: any) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-emerald-800 hover:text-amber-600 transition-colors duration-300 p-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay, duration: 0.8 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
    >
        <Icon size={24} strokeWidth={2} />
    </motion.a>
);

const XLogo = ({ size = 24, ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

const LogoPlaceholder = () => (
    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/30 to-amber-100/30" />
        <img
            src="/SPC_logo.png"
            alt="Solarpunk Corps Logo"
            className="relative w-full h-full object-cover opacity-90 select-none"
            draggable={false}
        />
    </div>
);

// --- Reforestation Effect Component ---

const ReforestationOverlay = ({ active }: { active: boolean }) => {
    // enhanced vine paths for better coverage
    const vinePaths = [
        // Main Trunks
        "M150,400 C150,300 100,250 50,200", // Left Main
        "M150,400 C150,300 200,250 250,200", // Right Main
        "M150,400 C150,200 150,150 150,50",  // Center Main

        // Secondary Branches
        "M100,250 Q50,200 20,150",
        "M200,250 Q250,200 280,150",
        "M150,200 Q100,150 80,100",
        "M150,200 Q200,150 220,100",

        // Ground spread
        "M150,400 Q80,380 20,350",
        "M150,400 Q220,380 280,350"
    ];

    return (
        <div className={`fixed inset-0 z-50 pointer-events-none transition-opacity duration-1000 ${active ? 'opacity-100' : 'opacity-0'}`}>
            {/* 1. Flash of Light */}
            <motion.div
                className="absolute inset-0 bg-amber-100/20 mix-blend-overlay"
                initial={{ opacity: 0 }}
                animate={active ? { opacity: [0, 1, 0] } : { opacity: 0 }}
                transition={{ duration: 1.5, times: [0, 0.5, 1] }}
            />

            {/* 2. Growing Vines Overlay */}
            <svg className="absolute inset-0 w-full h-full text-emerald-800/60 drop-shadow-lg" viewBox="0 0 300 400" preserveAspectRatio="none">
                {vinePaths.map((path, i) => (
                    <motion.path
                        key={i}
                        d={path}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={i < 3 ? "4" : "2"} // Thicker mains
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={active ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                        transition={{
                            duration: 3.5,
                            ease: "easeInOut",
                            delay: i < 3 ? 0.2 : 1.5 // Branches grow after mains
                        }}
                    />
                ))}
            </svg>

            {/* 3. Bloom Flash (Final Transition) */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-emerald-100 to-white"
                initial={{ opacity: 0 }}
                animate={active ? { opacity: [0, 0, 1] } : { opacity: 0 }}
                transition={{ duration: 2, delay: 4, ease: "easeInOut" }}
            />
        </div>
    );
};

export default function SolarpunkLanding({ onEnter }: { onEnter?: () => void }) {
    const [mounted, setMounted] = useState(false);
    const [isCelebrating, setIsCelebrating] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleEnter = () => {
        if (!onEnter) return;
        setIsCelebrating(true);

        // Custom Shapes
        const leaf = confetti.shapeFromPath({ path: 'M50 0 Q0 50 50 100 Q100 50 50 0' });
        const flower = confetti.shapeFromPath({ path: 'M50 0 Q65 40 100 50 Q65 60 50 100 Q35 60 0 50 Q35 40 50 0' });

        // 1. Initial "Seed" Burst (Gold)
        confetti({
            particleCount: 80,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#fbbf24', '#f59e0b', '#fffbeb'], // Amber & Cream
            scalar: 0.8,
            drift: 0,
            ticks: 200
        });

        // 2. Continuous Growth - Leaf Explosion (Emerald)
        const duration = 4000; // Back to 4s (Longer)
        const animationEnd = Date.now() + duration;

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 40 * (timeLeft / duration); // Standard density

            // Left Cannon
            confetti({
                particleCount,
                startVelocity: 45,
                spread: 80,
                ticks: 100,
                origin: { x: randomInRange(0, 0.2), y: Math.random() - 0.2 },
                colors: ['#059669', '#10b981', '#34d399', '#065f46'],
                shapes: [leaf],
                scalar: randomInRange(1.5, 2.5), // Bigger leaves
                drift: randomInRange(0, 0.5)
            });

            // Right Cannon
            confetti({
                particleCount,
                startVelocity: 45,
                spread: 80,
                ticks: 100,
                origin: { x: randomInRange(0.8, 1), y: Math.random() - 0.2 },
                colors: ['#059669', '#10b981', '#34d399', '#065f46'],
                shapes: [leaf],
                scalar: randomInRange(1.5, 2.5), // Bigger leaves
                drift: randomInRange(-0.5, 0)
            });

            // Center Cannon (New for filling gaps)
            confetti({
                particleCount: particleCount / 2,
                startVelocity: 55,
                spread: 120,
                ticks: 120,
                origin: { x: 0.5, y: 0.5 }, // Mid-screen explosion
                colors: ['#34d399', '#6ee7b7'], // Lighter greens
                shapes: [leaf],
                scalar: randomInRange(1, 2), // Bigger leaves in center
                drift: randomInRange(-0.2, 0.2)
            });
        }, 150);

        // 3. Final Bloom (Flowers)
        setTimeout(() => {
            confetti({
                particleCount: 200, // Massive burst
                spread: 160,
                origin: { y: 0.6 },
                colors: ['#fbbf24', '#f59e0b', '#d97706', '#fcd34d'],
                shapes: [flower],
                scalar: 2,
                startVelocity: 60,
                decay: 0.9,
                gravity: 0.6,
                ticks: 300
            });
        }, 3000); // 3.0s (Canon happens AFTER site reveal)

        // 4. Transition to App handled by overlay bloom + timeout
        setTimeout(() => {
            onEnter();
        }, 2200); // 2.2s (Site opens BEFORE canon)
    };


    if (!mounted) return null;

    return (
        <div
            className="relative min-h-screen w-full bg-[#FDFCF8] text-emerald-950 font-sans flex flex-col items-center overflow-hidden selection:bg-amber-100 selection:text-emerald-900 select-none"
        >
            <SEO
                title="Coming Soon"
                description="Solarpunk Corps is launching soon. Technology with purpose, nature in mind, people at heart."
                keywords={["coming soon", "launch", "solarpunk corps", "technology", "nature", "people", "BIET Jhansi"]}
            />

            {/* ... background layers ... */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 via-stone-50/30 to-emerald-50/20 pointer-events-none" />
            <BackgroundBioCircuitry />
            <AmbientParticles />

            {/* Main Content Container */}
            <main className="flex-grow relative z-10 px-6 max-w-3xl w-full text-center flex flex-col items-center justify-center gap-4 py-8">

                {/* ... Header Section ... */}
                <div className="flex flex-col items-center gap-4">
                    {/* ... Logo ... */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="mb-2"
                    >
                        <LogoPlaceholder />
                    </motion.div>

                    {/* Text Container with Enhanced Organic Morphing Glass */}
                    <div className="relative flex flex-col items-center gap-2 z-10 px-8 py-6">
                        {/* The Organic Background Shape - High Translucency & Shadow */}
                        <motion.div
                            className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl z-[-1]"
                            style={{
                                borderRadius: "39% 61% 36% 64% / 54% 39% 61% 46%"
                            }}
                            animate={{
                                borderRadius: [
                                    "39% 61% 36% 64% / 54% 39% 61% 46%",
                                    "53% 47% 62% 38% / 37% 68% 32% 63%",
                                    "45% 55% 40% 60% / 50% 40% 60% 50%",
                                    "39% 61% 36% 64% / 54% 39% 61% 46%"
                                ],
                                rotate: [0, 1, -1, 0]
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-bold text-emerald-900 drop-shadow-sm"
                            style={{ fontFamily: '"Cormorant Garamond", serif' }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            Solarpunk Corps
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-2xl text-emerald-800/90 font-light max-w-xl leading-relaxed"
                            style={{ fontFamily: '"Cormorant Garamond", serif' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.6 }}
                        >
                            Technology with purpose, nature in mind,<br className="hidden md:block" /> people at heart.
                        </motion.p>
                    </div>
                </div>

                {/* Divider / Connector */}
                <motion.div
                    className="h-8 w-[1px] bg-gradient-to-b from-emerald-200 to-transparent"
                    initial={{ height: 0 }}
                    animate={{ height: 32 }}
                    transition={{ duration: 1, delay: 1 }}
                />

                {/* Status & Date */}
                <div className="flex flex-col items-center gap-3">
                    {onEnter ? (
                        <motion.button
                            onClick={handleEnter}
                            className="group relative px-8 py-3 rounded-full overflow-hidden bg-emerald-900 text-emerald-50 font-medium tracking-widest uppercase text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            whileHover={{ letterSpacing: "0.2em" }}
                        >
                            <span className="relative z-10 flex items-center justify-center h-12 min-w-[240px]">
                                <AnimatePresence mode="wait">
                                    {isCelebrating ? (
                                        <motion.span
                                            key="welcome"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.2 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className="absolute text-xl tracking-[0.2em] font-bold"
                                        >
                                            WELCOME
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="enter"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute flex flex-col items-center leading-tight"
                                        >
                                            <span className="text-xs tracking-[0.3em] text-emerald-200/80 mb-0.5">ENTER</span>
                                            <span className="flex items-center gap-2 text-base tracking-[0.15em] font-semibold">
                                                SOLARPUNK WORLD
                                                <motion.span
                                                    animate={{ x: [0, 4, 0] }}
                                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                                >→</motion.span>
                                            </span>
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                    ) : (
                        <motion.div
                            className="px-4 py-1.5 rounded-full border border-emerald-900/10 bg-white/40 backdrop-blur-sm text-sm tracking-widest uppercase text-emerald-800 font-medium shadow-sm cursor-default"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            Coming Soon
                        </motion.div>
                    )}

                    <motion.span
                        className="text-stone-500 text-sm md:text-base"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.4 }}
                    >
                        Launching in early 2026
                    </motion.span>
                </div>

                {/* Social Icons */}
                <div className="mt-6 flex items-center justify-center gap-6 md:gap-8">
                    <SocialLink href="mailto:solarpunkcorps@gmail.com" icon={Mail} label="Email" delay={1.6} />
                    <SocialLink href="https://x.com/SolarpunkCorps" icon={XLogo} label="X" delay={1.7} />
                    <SocialLink href="https://www.instagram.com/we.the.spc/" icon={Instagram} label="Instagram" delay={1.8} />
                    <SocialLink href="https://www.linkedin.com/company/solarpunk-corps/" icon={Linkedin} label="LinkedIn" delay={1.9} />
                    <SocialLink href="https://github.com/SolarpunkCorps" icon={Github} label="GitHub" delay={2.0} />
                </div>
            </main>

            {/* Footer / Copyright subtle */}
            <motion.footer
                className="w-full py-4 text-center text-xs text-stone-400 font-light relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
            >
                © 2026 Solarpunk Corps
            </motion.footer>

            {/* Custom Styles */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
        </div>
    );
}
