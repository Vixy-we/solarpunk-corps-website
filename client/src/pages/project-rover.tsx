
import { useEffect, useRef } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Link } from "wouter";

export default function ProjectRover() {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (svgRef.current) {
                const x = (window.innerWidth - e.pageX) / 50;
                const y = (window.innerHeight - e.pageY) / 50;
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
            <style>{`
        .rover-page-container {
            --color-solar: #E9C46A;
            --color-vine: #2A9D8F;
            
            /* Light Mode Default - Sand/Lab Theme */
            --bg-base: #F8FAF9;
            --bg-panel: rgba(16, 185, 129, 0.05);
            --text-main: #064E3B; /* Emerald 900 */
            --text-muted: #059669; /* Emerald 600 */
            --border-color: rgba(16, 185, 129, 0.2);
            --gradient-1: rgba(42, 157, 143, 0.05);
            --border-color: rgba(16, 185, 129, 0.2);
            --gradient-1: rgba(42, 157, 143, 0.05);
            --gradient-2: rgba(233, 196, 106, 0.1);
            --header-bg: rgba(248, 250, 249, 0.85);

            background-color: var(--bg-base);
            /* Gradient background handled in CSS now */
            background-image: 
                radial-gradient(circle at 10% 20%, var(--gradient-1) 0%, transparent 20%),
                radial-gradient(circle at 90% 80%, var(--gradient-2) 0%, transparent 25%);

            font-family: 'Space Mono', monospace;
            color: var(--text-main);
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Dark Mode Override - Night Mission Theme */
        /* Dark Mode Override - Night Mission Theme */
        .dark .rover-page-container {
            --bg-base: #0f1c18;
            --bg-panel: rgba(6, 78, 59, 0.3); /* Emerald 950/30 */
            --text-main: #ECFDF5; /* Emerald 50 */
            --text-muted: #6EE7B7; /* Emerald 300 */
            --border-color: rgba(16, 185, 129, 0.3);
            --gradient-1: rgba(42, 157, 143, 0.1);
            --gradient-2: rgba(233, 196, 106, 0.05);
            --header-bg: rgba(15, 28, 24, 0.85);
        }

        .font-display {
            font-family: 'Syne', sans-serif;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }

        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }
        .animate-blink {
            animation: blink 2s infinite;
        }

        .circuit-path {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: dash 5s linear forwards;
        }
        @keyframes dash {
            to { stroke-dashoffset: 0; }
        }
        
        .panel-box {
            background-color: var(--bg-panel);
            backdrop-filter: blur(4px);
            border: 1px solid var(--border-color);
        }
      `}</style>

            <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;700;800&display=swap" rel="stylesheet" />

            <Navigation />

            <div className="rover-page-container flex-grow flex flex-col relative selection:bg-emerald-500 selection:text-white pt-16">

                {/* Background Grid */}
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#2A9D8F 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                {/* Internal Header for Project Status */}
                <div className="w-full p-6 flex justify-between items-center border-b transition-colors sticky top-16 z-30 backdrop-blur-md" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--header-bg)' }}>
                    <div className="flex items-center gap-2 font-bold tracking-widest text-sm uppercase transition-colors" style={{ color: 'var(--text-muted)' }}>
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-blink"></span>
                        EcoBotics<span className="text-yellow-500 dark:text-yellow-400"> / HELIOS</span>
                    </div>
                    <div className="hidden md:flex gap-6 text-xs opacity-80" style={{ color: 'var(--text-muted)' }}>
                        <span>PV_CELLS: 100%</span>
                        <span>WHEELS: 6X6</span>
                        <span>STATUS: PROTOTYPING</span>
                    </div>
                </div>

                {/* Main Content */}
                <main className="flex-grow flex flex-col md:flex-row items-center justify-center relative z-10 px-6 py-12 max-w-7xl mx-auto w-full gap-12">

                    {/* Text Section */}
                    <div className="flex-1 text-center md:text-left space-y-6 max-w-lg z-20">
                        <div className="inline-block px-3 py-1 border rounded-full text-xs mb-2 transition-colors"
                            style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-panel)', color: 'var(--text-muted)' }}>
                    // PROJECT_LAUNCH: PENDING
                        </div>

                        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-yellow-500 dark:from-emerald-100 dark:to-yellow-200 transition-all">
                            Solar-Powered<br />
                            <span className="text-emerald-600 dark:text-emerald-400">Env. Rover</span>
                        </h1>

                        <p className="text-lg leading-relaxed transition-colors" style={{ color: 'var(--text-main)', opacity: 0.8 }}>
                            Our first big technical project after launch. A 6-wheel functional prototype powered entirely by solar energy.
                        </p>

                        {/* Specs Grid */}
                        <div className="pt-6 grid grid-cols-2 gap-4 text-left">
                            <div className="p-3 rounded panel-box transition-colors">
                                <div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>POWER SOURCE</div>
                                <div className="font-mono text-sm text-yellow-600 dark:text-yellow-400 font-bold transition-colors">Solar Arrays and Passion</div>
                            </div>
                            <div className="p-3 rounded panel-box transition-colors">
                                <div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>MOBILITY</div>
                                <div className="font-mono text-sm font-bold transition-colors" style={{ color: 'var(--text-main)' }}>6-Wheel Drive</div>
                            </div>
                            <div className="col-span-2 p-3 border border-dashed rounded flex justify-between items-center transition-colors"
                                style={{ borderColor: 'var(--border-color)', backgroundColor: 'transparent' }}>
                                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>STATUS:</span>
                                <span className="text-xs font-mono animate-pulse" style={{ color: 'var(--text-main)' }}>awaiting_deployment...</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Section: CSS/SVG Art */}
                    <div className="flex-1 w-full max-w-md md:max-w-xl aspect-square relative flex items-center justify-center animate-float">
                        {/* Decorative Hexagons Behind */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                            <div className="w-64 h-64 border-2 border-yellow-500/30 rounded-full animate-spin-slow" style={{ borderStyle: 'dashed' }}></div>
                            <div className="absolute w-80 h-80 border border-emerald-500/20 rounded-full"></div>
                        </div>

                        {/* Main Rover Graphic */}
                        <svg ref={svgRef} viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_15px_rgba(42,255,143,0.3)]">
                            <defs>
                                <linearGradient id="metal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#2C5364', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#203A43', stopOpacity: 1 }} />
                                </linearGradient>
                                <linearGradient id="leaf-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#4ade80', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#15803d', stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>

                            {/* Rover Body */}
                            <path className="circuit-path" d="M80,260 L100,200 L300,200 L320,260 L80,260 Z"
                                fill="url(#metal-grad)" stroke="#4ade80" strokeWidth="2" />

                            {/* Solar Panel Top Deck */}
                            <path d="M100,200 L120,160 L280,160 L300,200 Z" fill="#0f1c18" stroke="#2A9D8F" strokeWidth="1" />
                            <rect x="130" y="165" width="140" height="30" fill="url(#metal-grad)" opacity="0.5" />
                            <path d="M130,165 L270,165" stroke="#E9C46A" strokeWidth="2" strokeDasharray="4,4" />

                            {/* Sensor Head */}
                            <g transform="translate(250, 160)">
                                <rect x="-10" y="-40" width="20" height="40" fill="#2C5364" stroke="#4ade80" />
                                <rect x="-25" y="-60" width="50" height="30" rx="5" fill="#0f1c18" stroke="#2A9D8F" />
                                {/* Eyes */}
                                <circle cx="-12" cy="-45" r="8" fill="#E9C46A" className="animate-blink" />
                                <circle cx="12" cy="-45" r="8" fill="#E9C46A" className="animate-blink" />
                            </g>

                            {/* Plant Life on Back */}
                            <g transform="translate(140, 160)">
                                <path d="M0,0 Q-10,-30 0,-50" fill="none" stroke="#8B4513" strokeWidth="3" />
                                <path d="M0,-30 Q-20,-40 -30,-20" fill="url(#leaf-grad)" />
                                <path d="M0,-40 Q20,-50 30,-30" fill="url(#leaf-grad)" />
                                <circle cx="0" cy="-55" r="5" fill="#E9C46A" className="animate-pulse" />
                            </g>

                            {/* Wheels */}
                            <g transform="translate(0, 10)">
                                <circle cx="100" cy="260" r="25" fill="#0f1c18" stroke="#2A9D8F" strokeWidth="2" />
                                <circle cx="100" cy="260" r="10" fill="#2C5364" />

                                <circle cx="200" cy="260" r="25" fill="#0f1c18" stroke="#2A9D8F" strokeWidth="2" />
                                <circle cx="200" cy="260" r="10" fill="#2C5364" />

                                <circle cx="300" cy="260" r="25" fill="#0f1c18" stroke="#2A9D8F" strokeWidth="2" />
                                <circle cx="300" cy="260" r="10" fill="#2C5364" />
                            </g>

                            {/* Antennas */}
                            <line x1="250" y1="120" x2="250" y2="100" stroke="#4ade80" strokeWidth="1" />
                            <circle cx="250" cy="100" r="3" fill="#E9C46A" />

                            {/* Decorative Circuits */}
                            <path d="M80,280 L320,280" fill="none" stroke="#2A9D8F" strokeWidth="1" opacity="0.3" strokeDasharray="10,5" />
                        </svg>
                    </div>
                </main>

                {/* CTA Message */}
                <div className="text-center mb-6 z-20 relative">
                    <p className="font-mono text-sm mb-4 opacity-70" style={{ color: 'var(--text-muted)' }}>Help us build this future.</p>
                    <Link href="/sponsors">
                        <a className="group relative inline-flex items-center justify-center gap-3 px-8 py-3 overflow-hidden font-mono font-bold tracking-widest text-sm text-emerald-600 border border-emerald-500/50 rounded hover:bg-emerald-500/10 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 uppercase cursor-pointer bg-emerald-950/5 backdrop-blur-sm">
                            <span className="relative z-10 flex items-center gap-2">
                                SUPPORT PROJECT
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </span>
                        </a>
                    </Link>
                </div>

                {/* Footer Stats */}
                <div className="relative z-20 w-full p-6 border-t backdrop-blur-sm mt-auto transition-colors"
                    style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-panel)' }}>
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                        <div className="flex gap-4">
                            <span className="flex items-center gap-2">
                                <span className="block w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                                SENSORS: ONLINE
                            </span>
                            <span className="hidden sm:inline">|</span>
                            <span className="hidden sm:inline">FUTURE: AUTONOMOUS</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="hover:text-emerald-500/80 transition-colors cursor-default">ROBOTIC_ARM_READY</span>
                            <span className="hover:text-emerald-500/80 transition-colors cursor-default">CV_ENABLED</span>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}
