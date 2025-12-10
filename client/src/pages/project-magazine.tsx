
import { useEffect, useRef } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Pen, Download, Mic } from "lucide-react";

export default function ProjectMagazine() {
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
            <style>{`
        .magazine-page-container {
            --color-paper: #F3F0E6;
            --color-ink: #1A2F23;
            --color-accent: #D4A373;
            --color-leaf: #4F772D;
            --color-highlight: #90A955;
            
            /* Light Mode Default - Paper Theme */
            --bg-color: var(--color-paper);
            --text-main: var(--color-ink);
            --text-muted: rgba(26, 47, 35, 0.6);
            --border-color: rgba(26, 47, 35, 0.1);
            --header-bg: rgba(243, 240, 230, 0.85);
            
            /* SVG Pattern: Dark dots for light background (encoded #1A2F23) */
            --bg-pattern: radial-gradient(circle at 50% 0%, rgba(79, 119, 45, 0.15) 0%, transparent 50%), url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231A2F23' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E");

            background-color: var(--bg-color);
            background-image: var(--bg-pattern);
            font-family: 'Space Mono', monospace;
            color: var(--text-main);
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Dark Mode Override - Library Theme */
        /* Dark Mode Override - Library Theme */
        .dark .magazine-page-container {
            --bg-color: #0d1f18;
            --text-main: #F3F0E6;
            --text-muted: rgba(243, 240, 230, 0.5);
            --border-color: rgba(255, 255, 255, 0.1);
            --header-bg: rgba(13, 31, 24, 0.85);

            /* SVG Pattern: Light dots for dark background (encoded #F3F0E6) */
            --bg-pattern: radial-gradient(circle at 50% 0%, rgba(79, 119, 45, 0.15) 0%, transparent 50%), url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F3F0E6' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E");
        }

        .font-editorial {
            font-family: 'Playfair Display', serif;
        }

        @keyframes hover-book {
            0%, 100% { transform: translateY(0) rotate(-1deg); }
            50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-book {
            animation: hover-book 7s ease-in-out infinite;
        }

        @keyframes sway {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(5deg); }
        }
        .animate-sway {
            transform-origin: bottom center;
            animation: sway 5s ease-in-out infinite;
        }

        .glass-card {
            background: rgba(243, 240, 230, 0.05);
            backdrop-filter: blur(8px);
            border: 1px solid var(--border-color);
        }
        .dark .glass-card {
            background: rgba(243, 240, 230, 0.05);
        }
        /* Light mode glass card adjustment */
        /* Light mode glass card adjustment */
        .magazine-page-container:not(.dark) .glass-card {
             background: rgba(26, 47, 35, 0.03);
             border: 1px solid rgba(26, 47, 35, 0.08);
        }
      `}</style>

            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Space+Mono:ital,wght@0,400;1,400&display=swap" rel="stylesheet" />

            <Navigation />

            <div className="magazine-page-container flex-grow flex flex-col relative pt-16">

                {/* Background Pattern - Now handled in CSS */}
                <div className="absolute inset-0 z-0 pointer-events-none"></div>

                {/* Internal Navbar (Masthead) */}
                <div className="w-full p-8 flex justify-between items-end border-b transition-colors sticky top-16 z-30 backdrop-blur-md" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--header-bg)' }}>
                    <div>
                        <div className="font-editorial italic text-xs mb-1" style={{ color: 'var(--text-muted)' }}>The Student Publication</div>
                        <div className="text-xl tracking-tighter font-bold uppercase flex items-center gap-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            CodeGreen
                        </div>
                    </div>
                    <div className="hidden md:block text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                        ISSUE NO. 01 <span className="mx-2">•</span> EST. 2026
                    </div>
                </div>

                {/* Main Content */}
                <main className="flex-grow flex flex-col md:flex-row items-center justify-center relative z-10 px-8 py-12 max-w-7xl mx-auto w-full gap-16">

                    {/* Text Section: Editorial Layout */}
                    <div className="flex-1 space-y-8 relative z-20">
                        {/* decorative line */}
                        <div className="w-12 h-1 bg-green-500"></div>

                        <h1 className="font-editorial text-6xl md:text-8xl leading-[0.9]">
                            <span className="italic text-5xl md:text-6xl block mb-2" style={{ color: 'var(--text-muted)' }}>Vol. 1</span>
                            Defining<br />
                            <span className="text-green-600 dark:text-green-400 transition-colors">Our Voice.</span>
                        </h1>

                        <p className="text-lg md:text-xl font-editorial italic max-w-md leading-relaxed border-l-2 pl-6 transition-colors" style={{ color: 'var(--text-main)', borderColor: 'var(--border-color)' }}>
                            "Our student-run publication to establish our creative identity in a changing world."
                        </p>

                        {/* Table of Contents Style List */}
                        <div className="glass-card p-6 rounded-sm max-w-sm mt-8 transition-colors">
                            <div className="text-xs font-mono uppercase tracking-widest mb-4 border-b pb-2 transition-colors" style={{ color: 'var(--text-muted)', borderColor: 'var(--border-color)' }}>Inside This Issue</div>
                            <ul className="space-y-3 font-mono text-sm">
                                <li className="flex items-center gap-3 group transition-colors" style={{ color: 'var(--text-main)' }}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover:bg-green-300 transition-colors"></span>
                                    Stories & Articles
                                </li>
                                <li className="flex items-center gap-3 group transition-colors" style={{ color: 'var(--text-main)' }}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover:bg-green-300 transition-colors"></span>
                                    Tech Ideas & Research
                                </li>
                                <li className="flex items-center gap-3 group transition-colors" style={{ color: 'var(--text-main)' }}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover:bg-green-300 transition-colors"></span>
                                    Social Issues Coverage
                                </li>
                                <li className="flex items-center gap-3 group transition-colors" style={{ color: 'var(--text-main)' }}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover:bg-green-300 transition-colors"></span>
                                    Exclusive Interviews
                                </li>
                                <li className="flex items-center gap-3 italic pl-1 transition-colors" style={{ color: 'var(--text-muted)' }}>
                                    ...and much more
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Visual Section: The "Living Zine" SVG */}
                    {/* Added pt-20 to shift the whole svg section down, avoiding overlap */}
                    <div className="flex-1 w-full flex items-center justify-center relative pt-20">

                        {/* Abstract Background Shapes */}
                        <div className="absolute w-[600px] h-[600px] bg-green-900/20 rounded-full blur-3xl -z-10"></div>

                        {/* Modified viewBox to 0 -50 700 650 to add headroom for the vines */}
                        <svg ref={svgRef} viewBox="0 -50 700 650" className="w-full max-w-[700px] animate-book drop-shadow-2xl">
                            <defs>
                                <linearGradient id="page-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: '#F3F0E6', stopOpacity: 1 }} />
                                    <stop offset="5%" style={{ stopColor: '#d4d0c4', stopOpacity: 1 }} /> {/* Gutter shadow */}
                                    <stop offset="20%" style={{ stopColor: '#F3F0E6', stopOpacity: 1 }} />
                                    <stop offset="95%" style={{ stopColor: '#F3F0E6', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#d4d0c4', stopOpacity: 1 }} /> {/* Edge shadow */}
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* The Book/Magazine Structure (Enhanced 3D) */}
                            <g transform="translate(180, 250) rotate(-10)">

                                {/* Back Cover / Hardcover Thickness */}
                                <path d="M-15,15 L340,15 L360,-30 L5,-30 Z" fill="#06110d" />
                                <path d="M-15,15 L-15,35 L340,35 L340,15 Z" fill="#0b1c15" /> {/* Side edge */}
                                <path d="M5,-30 L360,-30 L360,-10 L5,-10 Z" fill="#0b1c15" /> {/* Top edge of back cover */}

                                {/* Pages Stack (Left) */}
                                <path d="M0,5 L160,25 L175,0 L15,-20 Z" fill="#dcd8cd" />
                                <path d="M-2,8 L158,28 L173,3 L13,-17 Z" fill="#ccc" />

                                {/* Pages Stack (Right) */}
                                <path d="M175,0 L340,-20 L355,5 L190,25 Z" fill="#ccc" />
                                <path d="M177,-3 L342,-23 L357,2 L192,22 Z" fill="#dcd8cd" />

                                {/* Open Spread */}
                                {/* Left Page (Curved) */}
                                <path d="M0,5 Q90,15 175,0 L185,-200 Q100,-185 10,-195 Z" fill="url(#page-grad)" stroke="#dcd8cd" strokeWidth="0.5" />
                                {/* Right Page (Curved) */}
                                <path d="M175,0 Q260,-15 350,5 L360,-195 Q270,-215 185,-200 Z" fill="url(#page-grad)" stroke="#dcd8cd" strokeWidth="0.5" />

                                {/* Center Gutter/Spine */}
                                <path d="M175,0 L185,-200" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />

                                {/* Content Simulation (Left Page - Grid Layout) */}
                                <g opacity="0.8" transform="rotate(4, 90, -100) translate(20, -180)">
                                    {/* Main Image */}
                                    <rect x="0" y="0" width="130" height="70" rx="2" fill="#2A2F23" opacity="0.15" />
                                    <rect x="0" y="0" width="130" height="70" fill="url(#page-grad)" opacity="0.1" />

                                    {/* Headline */}
                                    <rect x="0" y="80" width="110" height="12" fill="#1A2F23" />
                                    <rect x="0" y="96" width="60" height="6" fill="#4F772D" />

                                    {/* Text Columns */}
                                    <rect x="0" y="110" width="60" height="2" fill="#555" />
                                    <rect x="0" y="116" width="55" height="2" fill="#555" />
                                    <rect x="0" y="122" width="58" height="2" fill="#555" />
                                    <rect x="0" y="128" width="50" height="2" fill="#555" />
                                    <rect x="0" y="134" width="58" height="2" fill="#555" />

                                    <rect x="70" y="110" width="60" height="2" fill="#555" />
                                    <rect x="70" y="116" width="55" height="2" fill="#555" />
                                    <rect x="70" y="122" width="58" height="2" fill="#555" />
                                    <rect x="70" y="128" width="50" height="2" fill="#555" />
                                    <rect x="70" y="134" width="58" height="2" fill="#555" />
                                </g>

                                {/* Content Simulation (Right Page - Modern Layout) */}
                                <g opacity="0.8" transform="rotate(-4, 270, -100) translate(200, -180)">
                                    {/* Sidebar Accent */}
                                    <rect x="-10" y="0" width="4" height="160" fill="#D4A373" opacity="0.6" />

                                    {/* Header */}
                                    <rect x="0" y="0" width="100" height="8" fill="#1A2F23" />

                                    {/* Diagram / Infographic */}
                                    <circle cx="65" cy="60" r="35" fill="none" stroke="#4F772D" strokeWidth="1" strokeDasharray="4,2" />
                                    <circle cx="65" cy="60" r="15" fill="#4F772D" opacity="0.2" />
                                    <line x1="65" y1="25" x2="65" y2="95" stroke="#4F772D" strokeWidth="0.5" />
                                    <line x1="30" y1="60" x2="100" y2="60" stroke="#4F772D" strokeWidth="0.5" />

                                    {/* Text wrapping around */}
                                    <rect x="0" y="110" width="130" height="2" fill="#555" />
                                    <rect x="0" y="116" width="120" height="2" fill="#555" />
                                    <rect x="0" y="122" width="125" height="2" fill="#555" />
                                    <rect x="0" y="128" width="90" height="2" fill="#555" />

                                    {/* Highlighted pull-quote */}
                                    <rect x="20" y="140" width="90" height="15" fill="#90A955" opacity="0.2" />
                                    <rect x="30" y="146" width="70" height="3" fill="#1A2F23" opacity="0.5" />
                                </g>
                            </g>

                            {/* Organic Elements (Vines & Growth) */}
                            <g className="animate-sway" style={{ transformOrigin: '350px 350px' }}>
                                {/* Main Vines growing from the spine */}
                                <path d="M365,250 Q380,180 350,120 Q320,60 380,0" fill="none" stroke="#4F772D" strokeWidth="5" strokeLinecap="round" />
                                <path d="M365,250 Q320,200 390,140 Q430,80 400,20" fill="none" stroke="#2A9D8F" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

                                {/* Leaves attached to vines (More detailed) */}
                                {/* Branch 1 */}
                                <g transform="translate(370, 0) rotate(-15)">
                                    <path d="M0,0 Q10,-10 20,0 Q10,10 0,0" fill="#90A955" />
                                    <path d="M0,0 Q-10,-10 -20,0 Q-10,10 0,0" fill="#4F772D" />
                                </g>
                                {/* Branch 2 */}
                                <g transform="translate(350, 120) rotate(20)">
                                    <path d="M0,0 Q12,-8 24,0 Q12,8 0,0" fill="#4F772D" />
                                    <line x1="0" y1="0" x2="20" y2="0" stroke="#1A2F23" strokeWidth="0.5" opacity="0.3" />
                                </g>
                                {/* Branch 3 */}
                                <g transform="translate(390, 140) rotate(-45)">
                                    <path d="M0,0 Q8,-15 16,0 Q8,15 0,0" fill="#90A955" />
                                </g>

                                {/* Glowing "Ideas" / Fireflies */}
                                <g filter="url(#glow)">
                                    <circle cx="380" cy="0" r="8" fill="#E9C46A" className="animate-pulse" />
                                    <circle cx="410" cy="60" r="4" fill="#E9C46A" opacity="0.7">
                                        <animate attributeName="cy" values="60;50;60" dur="3s" repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="330" cy="90" r="3" fill="#E9C46A" opacity="0.5">
                                        <animate attributeName="cx" values="330;340;330" dur="4s" repeatCount="indefinite" />
                                    </circle>
                                </g>
                            </g>

                            {/* Floating Holographic/Tech Elements Overlay (Subtle) */}
                            <g className="animate-float" style={{ opacity: 0.6, animationDelay: '1s' }}>
                                <rect x="420" y="100" width="100" height="60" rx="4" stroke="#4ade80" strokeWidth="1.5" fill="rgba(74, 222, 128, 0.05)" strokeDasharray="4,4" />
                                <text x="430" y="125" fontFamily="monospace" fontSize="10" fill="#4ade80">ECO_METRICS</text>
                                <rect x="430" y="135" width="40" height="4" fill="#4ade80" opacity="0.5" />
                                <rect x="430" y="142" width="60" height="4" fill="#4ade80" opacity="0.3" />

                                {/* Connecting line to book */}
                                <line x1="420" y1="130" x2="350" y2="150" stroke="#4ade80" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5" />
                            </g>
                        </svg>
                    </div>
                </main>

                {/* Internal Footer: Future Scope */}
                <div className="w-full border-t backdrop-blur-md mt-auto transition-colors" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--border-color)' }}>
                    <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex gap-2 items-center text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--text-muted)' }}></span>
                            Coming Soon
                        </div>

                        {/* Future Scope Items */}
                        <div className="flex gap-8 text-sm font-editorial italic" style={{ color: 'var(--text-muted)' }}>
                            <div className="flex items-center gap-2">
                                <Pen className="w-4 h-4 text-green-500" />
                                <span>Guest Contributions</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Download className="w-4 h-4 text-green-500" />
                                <span>Digital Editions</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mic className="w-4 h-4 text-green-500" />
                                <span>Podcast Companion</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}
