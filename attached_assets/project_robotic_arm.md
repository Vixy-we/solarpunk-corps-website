import { useEffect, useRef } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";
import { Cpu, Crosshair, Settings } from "lucide-react";
import { Link } from "wouter";

export default function ProjectRoboticArm() {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (svgRef.current) {
                const x = (window.innerWidth - e.pageX) / 60;
                const y = (window.innerHeight - e.pageY) / 60;
                svgRef.current.style.transform = `translate(${x}px, ${y}px)`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <SEO
                title="Robotic Arm Project"
                description="A 6-axis robotic arm prototype engineered for precision tasks, automated recycling sorting, and intelligent manufacturing research."
                keywords={["robotic arm", "automation", "6-axis", "robotics", "engineering project", "manufacturing", "AI vision"]}
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Project Aegis Robotic Arm",
                    "description": "A 6-DOF robotic arm for sustainable automation research.",
                    "category": "Robotics",
                    "brand": {
                        "@type": "Organization",
                        "name": "CodeGreen"
                    }
                }}
            />

            <style>{`
        .arm-page-container {
            /* Accents */
            --accent-orange: #f97316;
            --accent-cyan: #22d3ee;
            
            /* Light Mode Default - Industrial Lab Theme */
            --bg-base: #f4f4f5; /* Zinc 100 */
            --bg-panel: rgba(255, 255, 255, 0.6);
            --text-main: #27272a; /* Zinc 800 */
            --text-muted: #52525b; /* Zinc 600 */
            --border-color: rgba(39, 39, 42, 0.15);
            --header-bg: rgba(244, 244, 245, 0.85);
            --grid-line: rgba(39, 39, 42, 0.05);
            
            background-color: var(--bg-base);
            font-family: 'Space Mono', monospace;
            color: var(--text-main);
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Dark Mode Override - Midnight Factory Theme */
        .dark .arm-page-container {
            --bg-base: #09090b; /* Zinc 950 */
            --bg-panel: rgba(39, 39, 42, 0.4);
            --text-main: #f4f4f5; /* Zinc 100 */
            --text-muted: #a1a1aa; /* Zinc 400 */
            --border-color: rgba(244, 244, 245, 0.15);
            --header-bg: rgba(9, 9, 11, 0.85);
            --grid-line: rgba(244, 244, 245, 0.03);
        }

        .font-tech {
            font-family: 'Rajdhani', sans-serif;
        }

        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(1000%); }
        }
        .animate-scanline {
            animation: scanline 8s linear infinite;
        }

        @keyframes pulse-ring {
            0% { transform: scale(0.8); opacity: 0.5; }
            100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-pulse-ring {
            animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }

        /* Robotic Arm Kinematic Animations */
        @keyframes shoulder-pivot {
            0%, 100% { transform: rotate(-5deg); }
            50% { transform: rotate(15deg); }
        }
        .anim-shoulder {
            transform-origin: 200px 380px;
            animation: shoulder-pivot 6s ease-in-out infinite;
        }

        @keyframes elbow-pivot {
            0%, 100% { transform: rotate(10deg); }
            50% { transform: rotate(-25deg); }
        }
        .anim-elbow {
            transform-origin: 200px 200px;
            animation: elbow-pivot 6s ease-in-out infinite;
        }

        @keyframes wrist-pivot {
            0%, 100% { transform: rotate(-15deg); }
            50% { transform: rotate(10deg); }
        }
        .anim-wrist {
            transform-origin: 320px 100px;
            animation: wrist-pivot 6s ease-in-out infinite;
        }

        .tech-panel {
            background: var(--bg-panel);
            backdrop-filter: blur(8px);
            border: 1px solid var(--border-color);
            position: relative;
            overflow: hidden;
        }
        .tech-panel::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 4px; height: 100%;
            background: var(--accent-orange);
        }
        .tech-panel.cyan-accent::before {
            background: var(--accent-cyan);
        }

      `}</style>

            <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />

            <Navigation />

            <div className="arm-page-container flex-grow flex flex-col relative pt-16">

                {/* Blueprint Background Grid */}
                <div className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: `
                            linear-gradient(var(--grid-line) 1px, transparent 1px),
                            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
                        `,
                        backgroundSize: '30px 30px'
                    }}>
                </div>
                
                {/* Overlay Scanline Effect */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
                    <div className="w-full h-2 bg-cyan-400/50 animate-scanline shadow-[0_0_20px_rgba(34,211,238,0.8)] blur-[1px]"></div>
                </div>

                {/* Internal Header / Status Bar */}
                <div className="w-full p-4 md:px-8 border-b transition-colors sticky top-16 z-30 backdrop-blur-md flex justify-between items-center" 
                     style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--header-bg)' }}>
                    <div className="flex items-center gap-3 font-tech text-lg font-bold uppercase tracking-wider transition-colors" style={{ color: 'var(--text-main)' }}>
                        <Settings className="w-5 h-5 text-orange-500 animate-[spin_4s_linear_infinite]" />
                        Project Aegis <span className="text-orange-500">/ 6-DOF</span>
                    </div>
                    <div className="hidden md:flex gap-6 text-xs font-mono opacity-80 uppercase" style={{ color: 'var(--text-muted)' }}>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                            Kinematics: Online
                        </span>
                        <span>Payload: 2.5kg</span>
                        <span>Mode: Calibration</span>
                    </div>
                </div>

                {/* Main Content */}
                <main className="flex-grow flex flex-col lg:flex-row items-center justify-center relative z-10 px-6 py-12 max-w-7xl mx-auto w-full gap-12 lg:gap-8">

                    {/* Left Column: Text & Specs */}
                    <div className="flex-1 space-y-8 max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 border rounded-sm text-xs font-mono transition-colors bg-orange-500/10 border-orange-500/30 text-orange-600 dark:text-orange-400">
                            <Crosshair className="w-3 h-3" />
                            SYS.INITIALIZED
                        </div>

                        <h1 className="font-tech text-5xl md:text-7xl font-bold leading-none uppercase tracking-tight">
                            Automated<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-400">Robotic Arm</span>
                        </h1>

                        <p className="text-base md:text-lg leading-relaxed font-mono transition-colors" style={{ color: 'var(--text-muted)' }}>
                            A multi-axis articulated robotic arm engineered for precision tasks, automated sustainable sorting, and advanced kinematic research. Built to bridge the gap between software algorithms and physical world interaction.
                        </p>

                        {/* Tech Panels */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="tech-panel p-4 rounded-sm transition-colors">
                                <Cpu className="w-5 h-5 text-orange-500 mb-2" />
                                <div className="text-[10px] uppercase font-mono tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Degrees of Freedom</div>
                                <div className="font-tech text-2xl font-bold transition-colors" style={{ color: 'var(--text-main)' }}>6-Axis Articulation</div>
                            </div>
                            <div className="tech-panel cyan-accent p-4 rounded-sm transition-colors">
                                <Activity className="w-5 h-5 text-cyan-400 mb-2" />
                                <div className="text-[10px] uppercase font-mono tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Core Materials</div>
                                <div className="font-tech text-2xl font-bold transition-colors" style={{ color: 'var(--text-main)' }}>Alum / PETG</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Complex Interactive SVG Art */}
                    <div className="flex-1 w-full flex items-center justify-center relative min-h-[450px]">
                        
                        {/* Glow Behind Arm */}
                        <div className="absolute w-[300px] h-[300px] bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-[80px] z-0"></div>
                        <div className="absolute w-[200px] h-[200px] bg-cyan-400/10 dark:bg-cyan-400/20 rounded-full blur-[60px] translate-x-20 -translate-y-20 z-0"></div>

                        <svg ref={svgRef} viewBox="0 0 500 500" className="w-full max-w-[550px] drop-shadow-2xl z-10 overflow-visible">
                            <defs>
                                <linearGradient id="metal-base" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#52525b" />
                                    <stop offset="50%" stopColor="#3f3f46" />
                                    <stop offset="100%" stopColor="#27272a" />
                                </linearGradient>
                                <linearGradient id="metal-light" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#71717a" />
                                    <stop offset="100%" stopColor="#52525b" />
                                </linearGradient>
                                <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="4" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Background Measurement Arcs & Data Overlay */}
                            <g stroke="var(--text-muted)" opacity="0.3" fill="none" strokeWidth="1">
                                <circle cx="200" cy="380" r="150" strokeDasharray="4,8" />
                                <circle cx="200" cy="380" r="100" strokeDasharray="2,4" />
                                <path d="M50,380 A150,150 0 0,1 350,380" stroke="var(--accent-orange)" opacity="0.5" />
                                <text x="50" y="375" fontSize="10" fontFamily="monospace" fill="var(--text-muted)" stroke="none">0°</text>
                                <text x="330" y="375" fontSize="10" fontFamily="monospace" fill="var(--text-muted)" stroke="none">180°</text>
                            </g>

                            {/* --- THE ROBOTIC ARM HIERARCHY --- */}
                            
                            {/* 1. Base (Static) */}
                            <g transform="translate(100, 420)">
                                <path d="M0,80 L200,80 L180,30 L20,30 Z" fill="url(#metal-base)" stroke="#18181b" strokeWidth="2" />
                                <rect x="40" y="15" width="120" height="15" rx="2" fill="url(#metal-light)" stroke="#18181b" />
                                <circle cx="100" cy="15" r="40" fill="url(#metal-base)" stroke="#18181b" strokeWidth="2" />
                                {/* Status lights on base */}
                                <circle cx="30" cy="55" r="3" fill="#22d3ee" filter="url(#neon-glow)" />
                                <circle cx="45" cy="55" r="3" fill="#22d3ee" filter="url(#neon-glow)" />
                                <circle cx="60" cy="55" r="3" fill="#ef4444" opacity="0.5" />
                            </g>

                            {/* 2. Shoulder & Lower Arm (Animates) */}
                            <g className="anim-shoulder">
                                {/* Base Pivot Joint */}
                                <circle cx="200" cy="380" r="30" fill="url(#metal-light)" stroke="#18181b" strokeWidth="2" />
                                <circle cx="200" cy="380" r="12" fill="#18181b" />
                                <circle cx="200" cy="380" r="5" fill="#f97316" />
                                
                                {/* Lower Arm Segment */}
                                <path d="M185,380 L180,200 L220,200 L215,380 Z" fill="url(#metal-base)" stroke="#18181b" strokeWidth="2" />
                                {/* Hydraulic/Support Strut */}
                                <line x1="160" y1="380" x2="170" y2="250" stroke="url(#metal-light)" strokeWidth="6" strokeLinecap="round" />
                                <line x1="160" y1="380" x2="170" y2="250" stroke="#18181b" strokeWidth="2" strokeDasharray="10,5" />

                                {/* 3. Elbow & Upper Arm (Animates relative to Shoulder) */}
                                <g className="anim-elbow">
                                    {/* Elbow Joint */}
                                    <circle cx="200" cy="200" r="25" fill="url(#metal-light)" stroke="#18181b" strokeWidth="2" />
                                    <circle cx="200" cy="200" r="10" fill="#18181b" />
                                    <path d="M185,200 A15,15 0 0,1 215,200" fill="none" stroke="#22d3ee" strokeWidth="3" filter="url(#neon-glow)" />
                                    
                                    {/* Upper Arm Segment */}
                                    <path d="M190,200 L320,110 L335,130 L210,215 Z" fill="url(#metal-base)" stroke="#18181b" strokeWidth="2" />
                                    {/* Orange Wiring */}
                                    <path d="M210,195 Q260,140 310,115" fill="none" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />

                                    {/* 4. Wrist & Gripper (Animates relative to Elbow) */}
                                    <g className="anim-wrist">
                                        {/* Wrist Joint */}
                                        <circle cx="320" cy="100" r="18" fill="url(#metal-light)" stroke="#18181b" strokeWidth="2" />
                                        <rect x="315" y="65" width="40" height="20" rx="4" transform="rotate(25, 315, 65)" fill="url(#metal-base)" stroke="#18181b" />
                                        
                                        {/* Gripper Claw Top */}
                                        <path d="M350,70 L390,60 L395,75 L360,85 Z" fill="url(#metal-light)" stroke="#18181b" />
                                        <path d="M390,60 L410,70 L400,80 L395,75 Z" fill="#f97316" stroke="#18181b" />
                                        
                                        {/* Gripper Claw Bottom */}
                                        <path d="M340,90 L380,110 L370,125 L330,105 Z" fill="url(#metal-light)" stroke="#18181b" />
                                        <path d="M380,110 L400,105 L390,95 L370,125 Z" fill="#f97316" stroke="#18181b" />

                                        {/* Glowing Target/Object being manipulated */}
                                        <g transform="translate(415, 85)">
                                            <circle cx="0" cy="0" r="15" fill="none" stroke="#22d3ee" strokeWidth="1" className="animate-pulse-ring" />
                                            <circle cx="0" cy="0" r="8" fill="#22d3ee" filter="url(#neon-glow)" />
                                            <rect x="-2" y="-2" width="4" height="4" fill="#fff" />
                                        </g>
                                    </g>
                                </g>
                            </g>

                            {/* UI Overlay Elements inside SVG */}
                            <g transform="translate(380, 20)">
                                <rect x="0" y="0" width="100" height="40" fill="var(--bg-panel)" stroke="var(--accent-cyan)" strokeWidth="1" rx="2" opacity="0.8" />
                                <text x="10" y="15" fontSize="10" fontFamily="monospace" fill="var(--text-main)" fontWeight="bold">TGT_LOCK</text>
                                <text x="10" y="30" fontSize="12" fontFamily="monospace" fill="var(--accent-cyan)">X: 415 Y: 85</text>
                            </g>
                        </svg>
                    </div>
                </main>

                {/* Call to Action */}
                <div className="text-center mb-12 z-20 relative px-4">
                    <p className="font-mono text-sm mb-4 uppercase tracking-widest transition-colors" style={{ color: 'var(--text-muted)' }}>Help us iterate the next prototype.</p>
                    <Link href="/sponsors">
                        <a className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-tech text-lg font-bold uppercase tracking-wider rounded-sm hover:scale-105 transition-transform duration-300 overflow-hidden shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                            <span className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative z-10 flex items-center gap-2">
                                Sponsor the Build
                                <Crosshair className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                            </span>
                        </a>
                    </Link>
                </div>

                {/* Internal Footer: Roadmap & Specs */}
                <div className="w-full border-t backdrop-blur-md mt-auto transition-colors z-20 relative" 
                     style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-panel)' }}>
                    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        
                        <div className="flex flex-col gap-1">
                            <span className="font-tech text-sm font-bold uppercase tracking-widest text-orange-500">Development Roadmap</span>
                            <span className="text-xs font-mono opacity-70" style={{ color: 'var(--text-main)' }}>PHASE 2 DEPLOYMENT</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-auto font-mono text-xs" style={{ color: 'var(--text-main)' }}>
                            <div className="flex items-center gap-3 border-l-2 border-orange-500 pl-3">
                                <span className="opacity-70">01.</span>
                                <span>Computer Vision<br/><span className="text-[10px] opacity-50 uppercase">Object Detection</span></span>
                            </div>
                            <div className="flex items-center gap-3 border-l-2 border-cyan-400 pl-3">
                                <span className="opacity-70">02.</span>
                                <span>Haptic Feedback<br/><span className="text-[10px] opacity-50 uppercase">Teleoperation</span></span>
                            </div>
                            <div className="flex items-center gap-3 border-l-2 border-zinc-500 pl-3 opacity-50">
                                <span>03.</span>
                                <span>Swarm Control<br/><span className="text-[10px] uppercase">Multi-Arm Sync</span></span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}