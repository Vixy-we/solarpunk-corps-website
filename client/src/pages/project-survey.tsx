
import { useEffect, useRef } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Activity, Zap, Leaf } from "lucide-react";
import { Link } from "wouter";

export default function ProjectSurvey() {
    const chartRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (chartRef.current) {
                const x = (window.innerWidth - e.pageX) / 80;
                const y = (window.innerHeight - e.pageY) / 80;
                chartRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
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
        .survey-page-container {
            /* Accents */
            --accent-tech: #38bdf8;
            --accent-burnout: #f472b6;
            --accent-eco: #4ade80;
            
            /* Light Mode Default - Clinical/Data Theme */
            --bg-color: #F8FAFC; /* Slate 50 */
            --text-primary: #0F172A; /* Slate 900 */
            --text-secondary: #475569; /* Slate 600 */
            --border-color: #E2E8F0; /* Slate 200 */
            --panel-bg: rgba(255, 255, 255, 0.7);
            --header-bg: rgba(255, 255, 255, 0.8);
            --grid-color: rgba(15, 23, 42, 0.05);
            
            background-color: var(--bg-color);
            color: var(--text-primary);
            font-family: 'Work Sans', sans-serif;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Dark Mode Override - Dark Data Theme */
        /* Dark Mode Override - Dark Data Theme */
        .dark .survey-page-container {
            --bg-color: #0d1f18; /* Library Green / Dark Slate */
            --text-primary: #f1f5f9;
            --text-secondary: #94a3b8; /* Slate 400 */
            --border-color: rgba(51, 65, 85, 0.5); /* Slate 700/50 */
            --panel-bg: rgba(30, 41, 59, 0.7);
            --header-bg: rgba(15, 23, 42, 0.5);
            --grid-color: rgba(255, 255, 255, 0.03);
        }

        .font-data {
            font-family: 'JetBrains Mono', monospace;
        }

        @keyframes morph-graph {
            /* 0% - Top Dominant -> BLUE */
            0% { d: path("M150,60 L195,176 L90,184 Z"); fill: rgba(56, 189, 248, 0.2); stroke: var(--accent-tech); }
            
            /* 25% - Bottom-Right Dominant -> PINK */
            25% { d: path("M150,105 L220,190 L115,170 Z"); fill: rgba(244, 114, 182, 0.2); stroke: var(--accent-burnout); }
            
            /* 50% - Bottom-Left Dominant -> GREEN */
            50% { d: path("M150,85 L205,182 L75,193 Z"); fill: rgba(74, 222, 128, 0.2); stroke: var(--accent-eco); }
            
            /* 75% - Top Dominant -> BLUE */
            75% { d: path("M150,70 L215,187 L105,176 Z"); fill: rgba(56, 189, 248, 0.2); stroke: var(--accent-tech); }
            
            /* 100% - Loop to A -> BLUE */
            100% { d: path("M150,60 L195,176 L90,184 Z"); fill: rgba(56, 189, 248, 0.2); stroke: var(--accent-tech); }
        }
        .animate-morph {
            animation: morph-graph 8s ease-in-out infinite;
        }

        @keyframes pulse-node {
            0%, 100% { r: 4; opacity: 1; }
            50% { r: 6; opacity: 0.5; }
        }
        .animate-pulse-node {
            animation: pulse-node 2s ease-in-out infinite;
        }

        @keyframes float-data {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }
        .animate-float {
            animation: float-data 4s ease-in-out infinite;
        }

        .glass-panel {
            background: var(--panel-bg);
            backdrop-filter: blur(12px);
            border: 1px solid var(--border-color);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: background 0.3s, border-color 0.3s;
        }

        .text-gradient-tech { background: linear-gradient(to right, #38bdf8, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .text-gradient-burnout { background: linear-gradient(to right, #f472b6, #fb7185); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .text-gradient-eco { background: linear-gradient(to right, #4ade80, #2dd4bf); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        
        @keyframes tri-pulse {
            0% { 
                box-shadow: 0 0 20px -5px rgba(56,189,248,0.3); 
                border-color: rgba(56,189,248,0.5);
                background-color: rgba(56,189,248,0.05); /* Blue */
            }
            33% { 
                box-shadow: 0 0 20px -5px rgba(244,114,182,0.3); 
                border-color: rgba(244,114,182,0.5);
                background-color: rgba(244,114,182,0.05); /* Pink */
            }
            66% { 
                box-shadow: 0 0 20px -5px rgba(74,222,128,0.3); 
                border-color: rgba(74,222,128,0.5);
                background-color: rgba(74,222,128,0.05); /* Green */
            }
            100% { 
                box-shadow: 0 0 20px -5px rgba(56,189,248,0.3); 
                border-color: rgba(56,189,248,0.5);
                background-color: rgba(56,189,248,0.05);
            }
        }
        .tri-glow-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .tri-glow-hover:hover {
            animation: tri-pulse 6s infinite ease-in-out;
            transform: translateY(-2px);
        }
      `}</style>

            <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Work+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />

            <Navigation />

            <div className="survey-page-container flex-grow flex flex-col relative pt-16">

                {/* Background Grid */}
                <div className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}>
                </div>

                {/* Internal Header / Status Bar */}
                <div className="w-full p-6 border-b flex justify-between items-center backdrop-blur-md sticky top-16 z-40 transition-colors"
                    style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--header-bg)' }}>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center border transition-colors"
                            style={{ background: 'linear-gradient(to bottom right, var(--text-secondary), var(--bg-color))', borderColor: 'var(--border-color)' }}>
                            <Activity className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <div className="text-sm font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>Campus Tech-Life Survey</div>
                            <div className="text-[10px] font-data uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>SPC Study #2026-A</div>
                        </div>
                    </div>
                    <div className="hidden md:flex gap-4 text-xs font-data">
                        <span className="flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                            DATA COLLECTION: PENDING
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <main className="flex-grow flex flex-col lg:flex-row items-center justify-center relative z-10 w-full max-w-7xl mx-auto px-6 py-12 gap-16">

                    {/* Left Column: Research Abstract */}
                    <div className="flex-1 space-y-8 max-w-xl">

                        <div className="space-y-4">
                            <span className="px-3 py-1 rounded-full border text-xs font-data transition-colors"
                                style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--panel-bg)', color: 'var(--text-secondary)' }}>
                                Phase 1: Participant Recruitment
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                                Understanding the <br />
                                <span className="text-gradient-tech">Digital</span>,
                                <span className="text-gradient-burnout"> Emotional</span>, &
                                <span className="text-gradient-eco"> Ecological</span> Balance.
                            </h1>
                            <p className="text-lg leading-relaxed font-light transition-colors" style={{ color: 'var(--text-secondary)' }}>
                                A comprehensive study to map the intersection of student technology usage, digital burnout, and sustainability habits on campus.
                            </p>
                        </div>

                        {/* Key Study Areas Cards */}
                        <div className="grid gap-4">
                            <div className="glass-panel p-4 rounded-lg flex items-start gap-4 hover:bg-slate-500/10 transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition">
                                    <Activity className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold transition-colors" style={{ color: 'var(--text-primary)' }}>Student Tech Habits</h3>
                                    <p className="text-sm mt-1 transition-colors" style={{ color: 'var(--text-secondary)' }}>Screen time quantification & usage patterns analysis.</p>
                                </div>
                            </div>

                            <div className="glass-panel p-4 rounded-lg flex items-start gap-4 hover:bg-slate-500/10 transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center shrink-0 group-hover:bg-pink-500/20 transition">
                                    <Zap className="w-5 h-5 text-pink-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold transition-colors" style={{ color: 'var(--text-primary)' }}>Burnout Analysis</h3>
                                    <p className="text-sm mt-1 transition-colors" style={{ color: 'var(--text-secondary)' }}>Correlating digital intensity with mental fatigue.</p>
                                </div>
                            </div>

                            <div className="glass-panel p-4 rounded-lg flex items-start gap-4 hover:bg-slate-500/10 transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition">
                                    <Leaf className="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold transition-colors" style={{ color: 'var(--text-primary)' }}>Eco-Routine Mapping</h3>
                                    <p className="text-sm mt-1 transition-colors" style={{ color: 'var(--text-secondary)' }}>Identifying sustainable behaviors in daily campus life.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Data Visualization (The Radar Chart) */}
                    <div className="flex-1 w-full flex items-center justify-center relative">

                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-full blur-3xl"></div>

                        <div className="relative w-full max-w-[500px] aspect-square">

                            {/* Floating Data Cards */}
                            <div className="absolute top-0 right-0 glass-panel px-3 py-2 rounded-md animate-float z-20">
                                <div className="text-[10px] font-data uppercase transition-colors" style={{ color: 'var(--text-secondary)' }}>Sample Size</div>
                                <div className="text-lg font-bold transition-colors" style={{ color: 'var(--text-primary)' }}>n = 0</div>
                            </div>
                            <div className="absolute bottom-10 left-0 glass-panel px-3 py-2 rounded-md animate-float z-20" style={{ animationDelay: '1s' }}>
                                <div className="text-[10px] font-data uppercase transition-colors" style={{ color: 'var(--text-secondary)' }}>Avg Screen Time</div>
                                <div className="text-lg font-bold text-blue-400">-- h -- m</div>
                            </div>

                            {/* Main SVG Chart */}
                            <svg ref={chartRef} viewBox="0 0 300 300" className="w-full h-full drop-shadow-2xl">
                                {/* Grid System (Concentric Hexagons) */}
                                <g fill="none" className="chart-grid" stroke={'var(--text-secondary)'} strokeWidth="1">
                                    <path d="M150,50 L237,100 L237,200 L150,250 L63,200 L63,100 Z" opacity="0.3" /> {/* Outer */}
                                    <path d="M150,80 L211,115 L211,185 L150,220 L89,185 L89,115 Z" opacity="0.3" /> {/* Mid */}
                                    <path d="M150,110 L185,130 L185,170 L150,190 L115,170 L115,130 Z" opacity="0.3" /> {/* Inner */}

                                    {/* Axis Lines */}
                                    <line x1="150" y1="150" x2="150" y2="50" opacity="0.3" />
                                    <line x1="150" y1="150" x2="237" y2="200" opacity="0.3" />
                                    <line x1="150" y1="150" x2="63" y2="200" opacity="0.3" />
                                </g>

                                {/* Axis Labels */}
                                <text x="150" y="40" textAnchor="middle" fill="#38bdf8" fontFamily="monospace" fontSize="10" fontWeight="bold">TECHNOLOGY</text>
                                <text x="250" y="210" textAnchor="middle" fill="#f472b6" fontFamily="monospace" fontSize="10" fontWeight="bold">BURNOUT</text>
                                <text x="50" y="210" textAnchor="middle" fill="#4ade80" fontFamily="monospace" fontSize="10" fontWeight="bold">ECOLOGY</text>

                                {/* The Morphing Data Shape */}
                                <path className="animate-morph" strokeWidth="2" strokeLinejoin="round" />

                                {/* Central Node */}
                                <circle cx="150" cy="150" r="4" fill="var(--text-primary)" className="animate-pulse-node" />

                                {/* Decorative scanning line */}
                                <line x1="150" y1="150" x2="150" y2="50" stroke="var(--text-primary)" strokeWidth="1" opacity="0.5">
                                    <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="6s" repeatCount="indefinite" />
                                </line>
                            </svg>
                        </div>
                    </div>
                </main>

                {/* CTA Message */}
                <div className="text-center mb-8 z-20 relative">
                    <p className="font-data text-xs uppercase tracking-widest mb-4 opacity-80" style={{ color: 'var(--text-secondary)' }}>Enable these insights.</p>
                    <Link href="/sponsors">
                        <a className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 transition-all duration-300 cursor-pointer font-data font-bold text-sm tracking-wide overflow-hidden shadow-sm tri-glow-hover"
                            style={{ color: 'var(--text-primary)' }}>

                            <span className="relative z-10 flex items-center gap-2">
                                Support This Initiative
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </span>
                        </a>
                    </Link>
                </div>

                {/* Internal Footer: Future Scope */}
                <div className="w-full border-t border-slate-700/50 backdrop-blur-md mt-auto transition-colors"
                    style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--header-bg)' }}>
                    <div className="max-w-7xl mx-auto px-6 py-8">
                        <h4 className="text-xs font-data uppercase tracking-widest mb-4 transition-colors" style={{ color: 'var(--text-secondary)' }}>Research Roadmap & Future Scope</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Item 1 */}
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
                                <div>
                                    <h5 className="text-sm font-bold transition-colors" style={{ color: 'var(--text-primary)' }}>Data-Driven Solutions</h5>
                                    <p className="text-xs mt-1 leading-relaxed transition-colors" style={{ color: 'var(--text-secondary)' }}>Developing an open-source dataset for student wellbeing analysis.</p>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-2 h-2 rounded-full bg-purple-500"></div>
                                <div>
                                    <h5 className="text-sm font-bold transition-colors" style={{ color: 'var(--text-primary)' }}>Policy Recommendations</h5>
                                    <p className="text-xs mt-1 leading-relaxed transition-colors" style={{ color: 'var(--text-secondary)' }}>Drafting a whitepaper for campus administration on digital sustainability.</p>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-2 h-2 rounded-full bg-green-500"></div>
                                <div>
                                    <h5 className="text-sm font-bold transition-colors" style={{ color: 'var(--text-primary)' }}>Longitudinal Tracking</h5>
                                    <p className="text-xs mt-1 leading-relaxed transition-colors" style={{ color: 'var(--text-secondary)' }}>Multi-year tracking of cohort habits to identify long-term trends.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}
