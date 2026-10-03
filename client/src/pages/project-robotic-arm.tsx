import { useEffect, useRef } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";
import { Cog, Eye, Cpu } from "lucide-react";
import { Link } from "wouter";

const BASE = { x: 200, y: 330 };
const L1 = 120;
const L2 = 100;

export default function ProjectArm() {
    const svgRef = useRef<SVGSVGElement>(null);
    const upperRef = useRef<SVGGElement>(null);
    const foreRef = useRef<SVGGElement>(null);
    const jawTopRef = useRef<SVGPathElement>(null);
    const jawBotRef = useRef<SVGPathElement>(null);
    const targetDotRef = useRef<SVGCircleElement>(null);
    const j1Ref = useRef<HTMLSpanElement>(null);
    const j2Ref = useRef<HTMLSpanElement>(null);
    const gripRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const target = { x: 300, y: 200 };
        const current = { x: 300, y: 200 };
        let lastMove = 0;
        let gripClosed = false;
        let grip = 0;
        let raf = 0;

        const onMove = (e: MouseEvent) => {
            const svg = svgRef.current;
            if (!svg) return;
            const bounds = svg.getBoundingClientRect();
            target.x = ((e.clientX - bounds.left) / bounds.width) * 400;
            target.y = ((e.clientY - bounds.top) / bounds.height) * 400;
            lastMove = performance.now();
        };
        const onDown = () => { gripClosed = true; };
        const onUp = () => { gripClosed = false; };

        const tick = (time: number) => {
            if (time - lastMove > 2500) {
                target.x = 250 + Math.cos(time / 1400) * 70;
                target.y = 190 + Math.sin(time / 900) * 50;
                gripClosed = Math.sin(time / 1800) > 0.6;
            }

            current.x += (target.x - current.x) * 0.08;
            current.y += (target.y - current.y) * 0.08;
            grip += ((gripClosed ? 1 : 0) - grip) * 0.15;

            let dx = current.x - BASE.x;
            let dy = current.y - BASE.y;
            let distance = Math.hypot(dx, dy);
            const maxDistance = L1 + L2 - 2;
            const minDistance = Math.abs(L1 - L2) + 2;
            const clampedDistance = Math.min(Math.max(distance, minDistance), maxDistance);
            if (distance > 0) {
                dx = (dx / distance) * clampedDistance;
                dy = (dy / distance) * clampedDistance;
            }
            distance = clampedDistance;

            const cos2 = (distance * distance - L1 * L1 - L2 * L2) / (2 * L1 * L2);
            const t2 = Math.acos(Math.max(-1, Math.min(1, cos2)));
            const t1 = Math.atan2(dy, dx) - Math.atan2(L2 * Math.sin(t2), L1 + L2 * Math.cos(t2));
            const a1 = (t1 * 180) / Math.PI;
            const a2 = (t2 * 180) / Math.PI;

            upperRef.current?.setAttribute("transform", `rotate(${a1})`);
            foreRef.current?.setAttribute("transform", `translate(${L1},0) rotate(${a2})`);

            const open = 16 - grip * 12;
            jawTopRef.current?.setAttribute("transform", `translate(${L2},0) rotate(${-open})`);
            jawBotRef.current?.setAttribute("transform", `translate(${L2},0) rotate(${open})`);
            targetDotRef.current?.setAttribute("cx", String(current.x));
            targetDotRef.current?.setAttribute("cy", String(current.y));
            if (j1Ref.current) j1Ref.current.textContent = `${(-a1).toFixed(1)}°`;
            if (j2Ref.current) j2Ref.current.textContent = `${(-a2).toFixed(1)}°`;
            if (gripRef.current) gripRef.current.textContent = grip > 0.5 ? "CLOSED" : "OPEN";

            raf = requestAnimationFrame(tick);
        };

        document.addEventListener("mousemove", onMove);
        document.addEventListener("mousedown", onDown);
        document.addEventListener("mouseup", onUp);
        raf = requestAnimationFrame(tick);

        return () => {
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mousedown", onDown);
            document.removeEventListener("mouseup", onUp);
            cancelAnimationFrame(raf);
        };
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <SEO
                title="Robotic Arm Project"
                description="A multi-joint robotic arm designed to mount on our solar rover for sampling and manipulation in the field."
                keywords={["robotic arm", "robotics", "inverse kinematics", "sustainable technology", "engineering project", "manipulator", "BIET Jhansi"]}
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Robotic Arm Project",
                    "description": "A multi-joint robotic arm for field sampling, designed to mount on the Solarpunk Corps solar rover.",
                    "category": "Robotics",
                    "brand": { "@type": "Organization", "name": "Solarpunk Corps" }
                }}
            />

            <style>{`
        .arm-page-container {
            --color-copper: #F4A261;
            --color-teal: #2A9D8F;
            --bg-base: #FAF7F2;
            --bg-panel: rgba(244, 162, 97, 0.08);
            --text-main: #3B2A1A;
            --text-muted: #9A5B1E;
            --border-color: rgba(194, 120, 50, 0.28);
            --gradient-1: rgba(244, 162, 97, 0.12);
            --gradient-2: rgba(42, 157, 143, 0.08);
            --header-bg: rgba(250, 247, 242, 0.88);
            --grid-dot: #C27832;
            background-color: var(--bg-base);
            background-image:
                radial-gradient(circle at 12% 18%, var(--gradient-1) 0%, transparent 22%),
                radial-gradient(circle at 88% 82%, var(--gradient-2) 0%, transparent 26%);
            font-family: 'IBM Plex Mono', monospace;
            color: var(--text-main);
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .dark .arm-page-container {
            --bg-base: #14110e;
            --bg-panel: rgba(244, 162, 97, 0.07);
            --text-main: #FFF4E6;
            --text-muted: #F4B97F;
            --border-color: rgba(244, 162, 97, 0.28);
            --gradient-1: rgba(244, 162, 97, 0.10);
            --gradient-2: rgba(42, 157, 143, 0.08);
            --header-bg: rgba(20, 17, 14, 0.88);
            --grid-dot: #F4A261;
        }

        .font-display { font-family: 'Chakra Petch', sans-serif; }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 7s ease-in-out infinite; }
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 24s linear infinite; }
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }
        .animate-blink { animation: blink 2s infinite; }
        .panel-box {
            background-color: var(--bg-panel);
            backdrop-filter: blur(4px);
            border: 1px solid var(--border-color);
        }
      `}</style>

            <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;600;700&family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

            <Navigation />

            <div className="arm-page-container flex-grow flex flex-col relative selection:bg-orange-400 selection:text-white pt-16">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--grid-dot) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <div className="w-full p-6 flex justify-between items-center border-b transition-colors sticky top-16 z-30 backdrop-blur-md" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--header-bg)' }}>
                    <div className="flex items-center gap-2 font-bold tracking-widest text-sm uppercase transition-colors" style={{ color: 'var(--text-muted)' }}>
                        <span className="w-2 h-2 bg-orange-400 rounded-full animate-blink"></span>
                        EcoBotics<span className="text-teal-600 dark:text-teal-400"> / MANIPULATOR</span>
                    </div>
                    <div className="hidden md:flex gap-6 text-xs opacity-80" style={{ color: 'var(--text-muted)' }}>
                        <span>JOINTS: MULTI-AXIS</span>
                        <span>MOUNT: HELIOS ROVER</span>
                        <span>STATUS: DESIGN PHASE</span>
                    </div>
                </div>

                <main className="flex-grow flex flex-col md:flex-row items-center justify-center relative z-10 px-6 py-12 max-w-7xl mx-auto w-full gap-12">
                    <div className="flex-1 text-center md:text-left space-y-6 max-w-lg z-20">
                        <div className="inline-block px-3 py-1 border rounded-full text-xs mb-2 transition-colors" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-panel)', color: 'var(--text-muted)' }}>
                            // PROJECT_LAUNCH: PENDING
                        </div>

                        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-teal-600 dark:from-orange-200 dark:to-teal-300 transition-all">
                            Field-Ready<br />
                            <span className="text-orange-600 dark:text-orange-400">Robotic Arm</span>
                        </h1>

                        <p className="text-lg leading-relaxed transition-colors" style={{ color: 'var(--text-main)', opacity: 0.8 }}>
                            A multi-joint manipulator built to ride on our solar rover. It picks up soil samples, moves sensors into place, and turns a roaming monitor into a machine that can act.
                        </p>

                        <div className="pt-6 grid grid-cols-2 gap-4 text-left">
                            <div className="p-3 rounded panel-box transition-colors">
                                <div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>MISSION</div>
                                <div className="font-mono text-sm text-orange-600 dark:text-orange-400 font-bold transition-colors">Sampling &amp; Placement</div>
                            </div>
                            <div className="p-3 rounded panel-box transition-colors">
                                <div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>CONTROL</div>
                                <div className="font-mono text-sm font-bold transition-colors" style={{ color: 'var(--text-main)' }}>Inverse Kinematics</div>
                            </div>

                            <div className="col-span-2 p-3 rounded panel-box transition-colors">
                                <div className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>LIVE_TELEMETRY (move your cursor, click to grip)</div>
                                <div className="grid grid-cols-3 gap-2 font-mono text-sm font-bold">
                                    <div><div className="text-[10px] font-normal" style={{ color: 'var(--text-muted)' }}>SHOULDER</div><span ref={j1Ref} className="text-orange-600 dark:text-orange-400">0.0°</span></div>
                                    <div><div className="text-[10px] font-normal" style={{ color: 'var(--text-muted)' }}>ELBOW</div><span ref={j2Ref} className="text-orange-600 dark:text-orange-400">0.0°</span></div>
                                    <div><div className="text-[10px] font-normal" style={{ color: 'var(--text-muted)' }}>GRIPPER</div><span ref={gripRef} className="text-teal-600 dark:text-teal-400">OPEN</span></div>
                                </div>
                            </div>

                            <div className="col-span-2 p-3 border border-dashed rounded flex justify-between items-center transition-colors" style={{ borderColor: 'var(--border-color)', backgroundColor: 'transparent' }}>
                                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>STATUS:</span>
                                <span className="text-xs font-mono animate-pulse" style={{ color: 'var(--text-main)' }}>awaiting_fabrication...</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-md md:max-w-xl aspect-square relative flex items-center justify-center animate-float">
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                            <div className="w-64 h-64 border-2 border-orange-500/40 rounded-full animate-spin-slow" style={{ borderStyle: 'dashed' }}></div>
                            <div className="absolute w-80 h-80 border border-teal-500/30 rounded-full"></div>
                        </div>

                        <svg ref={svgRef} viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_15px_rgba(244,162,97,0.35)]">
                            <defs>
                                <linearGradient id="arm-metal" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#5b4636', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#2f241b', stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>

                            <circle cx={BASE.x} cy={BASE.y} r={L1 + L2} fill="none" stroke="#2A9D8F" strokeWidth="1" strokeDasharray="4,6" opacity="0.35" />
                            <circle ref={targetDotRef} cx="300" cy="200" r="5" fill="none" stroke="#2A9D8F" strokeWidth="1.5" className="animate-blink" />
                            <rect x="90" y="340" width="220" height="22" rx="4" fill="url(#arm-metal)" stroke="#2A9D8F" strokeWidth="1.5" />
                            <path d="M165,340 L180,318 L220,318 L235,340 Z" fill="url(#arm-metal)" stroke="#F4A261" strokeWidth="1.5" />

                            <g transform={`translate(${BASE.x}, ${BASE.y})`}>
                                <g ref={upperRef}>
                                    <rect x="-10" y="-11" width={L1 + 20} height="22" rx="11" fill="url(#arm-metal)" stroke="#F4A261" strokeWidth="2" />
                                    <line x1="8" y1="0" x2={L1 - 8} y2="0" stroke="#F4A261" strokeWidth="1" strokeDasharray="4,4" opacity="0.6" />

                                    <g ref={foreRef} transform={`translate(${L1},0)`}>
                                        <rect x="-10" y="-8" width={L2 + 14} height="16" rx="8" fill="url(#arm-metal)" stroke="#2A9D8F" strokeWidth="2" />
                                        <path ref={jawTopRef} d="M0,-4 L26,-4 L32,0 L0,0 Z" transform={`translate(${L2},0) rotate(-16)`} fill="#F4A261" stroke="#F4A261" strokeWidth="1.5" strokeLinejoin="round" />
                                        <path ref={jawBotRef} d="M0,4 L26,4 L32,0 L0,0 Z" transform={`translate(${L2},0) rotate(16)`} fill="#E9C46A" stroke="#E9C46A" strokeWidth="1.5" strokeLinejoin="round" />
                                        <circle cx={L2} cy="0" r="6" fill="#14110e" stroke="#F4A261" strokeWidth="2" />
                                    </g>

                                    <circle cx={L1} cy="0" r="9" fill="#14110e" stroke="#F4A261" strokeWidth="2" />
                                </g>
                                <circle cx="0" cy="0" r="14" fill="#14110e" stroke="#F4A261" strokeWidth="2.5" />
                                <circle cx="0" cy="0" r="5" fill="#2A9D8F" className="animate-blink" />
                            </g>

                            <text x="200" y="385" textAnchor="middle" fill="#2A9D8F" fontFamily="monospace" fontSize="10" opacity="0.7">REACH_ENVELOPE</text>
                        </svg>
                    </div>
                </main>

                <section className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-10">
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="p-4 rounded panel-box flex items-start gap-4 hover:border-orange-400/60 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0"><Cog className="w-5 h-5 text-orange-500" /></div>
                            <div><h3 className="font-display font-bold" style={{ color: 'var(--text-main)' }}>Mechanical Design</h3><p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Lightweight links and joints sized for the rover's power budget.</p></div>
                        </div>
                        <div className="p-4 rounded panel-box flex items-start gap-4 hover:border-teal-400/60 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0"><Cpu className="w-5 h-5 text-teal-500" /></div>
                            <div><h3 className="font-display font-bold" style={{ color: 'var(--text-main)' }}>Kinematics &amp; Control</h3><p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Inverse kinematics turns a target point into joint angles, as the demo above shows.</p></div>
                        </div>
                        <div className="p-4 rounded panel-box flex items-start gap-4 hover:border-yellow-400/60 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0"><Eye className="w-5 h-5 text-yellow-500" /></div>
                            <div><h3 className="font-display font-bold" style={{ color: 'var(--text-main)' }}>Vision-Guided Pick</h3><p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Camera input picks the target so the arm finds samples on its own.</p></div>
                        </div>
                    </div>
                </section>

                <div className="text-center mb-6 z-20 relative">
                    <p className="font-mono text-sm mb-4 opacity-70" style={{ color: 'var(--text-muted)' }}>Help us build this future.</p>
                    <Link href="/sponsors">
                        <a className="group relative inline-flex items-center justify-center gap-3 px-8 py-3 overflow-hidden font-mono font-bold tracking-widest text-sm text-orange-600 dark:text-orange-400 border border-orange-500/50 rounded hover:bg-orange-500/10 hover:border-orange-400 hover:shadow-[0_0_20px_rgba(244,162,97,0.35)] transition-all duration-300 uppercase cursor-pointer backdrop-blur-sm">
                            <span className="relative z-10 flex items-center gap-2">SUPPORT PROJECT<span className="group-hover:translate-x-1 transition-transform duration-300">→</span></span>
                        </a>
                    </Link>
                </div>

                <div className="relative z-20 w-full p-6 border-t backdrop-blur-sm mt-auto transition-colors" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-panel)' }}>
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                        <div className="flex gap-4">
                            <span className="flex items-center gap-2"><span className="block w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>ACTUATORS: OFFLINE</span>
                            <span className="hidden sm:inline">|</span>
                            <span className="hidden sm:inline">NEXT: ROVER_INTEGRATION</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="hover:text-orange-500/80 transition-colors cursor-default">IK_SOLVER_READY</span>
                            <span className="hover:text-orange-500/80 transition-colors cursor-default">CV_PLANNED</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}