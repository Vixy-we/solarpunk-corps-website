import { useEffect, useRef } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";
import { Radio, Map as MapIcon, ShieldAlert } from "lucide-react";
import { Link } from "wouter";

const W = 600;
const H = 600;
const ROBOT_R = 13;
const MAX_RANGE = 280;
const PX_PER_M = 60;

type Rect = { x: number; y: number; w: number; h: number };
type Segment = { x1: number; y1: number; x2: number; y2: number };

const RECTS: Rect[] = [
    { x: 150, y: 8, w: 14, h: 180 },
    { x: 8, y: 300, w: 200, h: 14 },
    { x: 380, y: 380, w: 212, h: 14 },
    { x: 380, y: 394, w: 14, h: 100 },
    { x: 300, y: 120, w: 50, h: 50 },
    { x: 250, y: 430, w: 50, h: 50 },
    { x: 440, y: 90, w: 90, h: 60 },
    { x: 510, y: 230, w: 50, h: 110 },
    { x: 80, y: 440, w: 70, h: 60 },
];

const SEGMENTS: Segment[] = (() => {
    const segments: Segment[] = [
        { x1: 8, y1: 8, x2: W - 8, y2: 8 },
        { x1: W - 8, y1: 8, x2: W - 8, y2: H - 8 },
        { x1: W - 8, y1: H - 8, x2: 8, y2: H - 8 },
        { x1: 8, y1: H - 8, x2: 8, y2: 8 },
    ];
    RECTS.forEach(({ x, y, w, h }) => segments.push(
        { x1: x, y1: y, x2: x + w, y2: y },
        { x1: x + w, y1: y, x2: x + w, y2: y + h },
        { x1: x + w, y1: y + h, x2: x, y2: y + h },
        { x1: x, y1: y + h, x2: x, y2: y },
    ));
    return segments;
})();

function castRay(originX: number, originY: number, angle: number): number | null {
    const directionX = Math.cos(angle);
    const directionY = Math.sin(angle);
    let nearest = Infinity;
    for (const segment of SEGMENTS) {
        const segmentX = segment.x2 - segment.x1;
        const segmentY = segment.y2 - segment.y1;
        const denominator = directionX * segmentY - directionY * segmentX;
        if (Math.abs(denominator) < 1e-9) continue;
        const offsetX = segment.x1 - originX;
        const offsetY = segment.y1 - originY;
        const distance = (offsetX * segmentY - offsetY * segmentX) / denominator;
        const alongSegment = (offsetX * directionY - offsetY * directionX) / denominator;
        if (distance > 0 && alongSegment >= 0 && alongSegment <= 1 && distance < nearest) nearest = distance;
    }
    return nearest <= MAX_RANGE ? nearest : null;
}

function angleLerp(from: number, to: number, amount: number) {
    let difference = ((to - from + Math.PI) % (Math.PI * 2)) - Math.PI;
    if (difference < -Math.PI) difference += Math.PI * 2;
    return from + difference * amount;
}

export default function ProjectLidar() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointsRef = useRef<HTMLSpanElement>(null);
    const rangeRef = useRef<HTMLSpanElement>(null);
    const headingRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) return;

        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = W * pixelRatio;
        canvas.height = H * pixelRatio;
        context.scale(pixelRatio, pixelRatio);

        const mapCanvas = document.createElement("canvas");
        mapCanvas.width = W;
        mapCanvas.height = H;
        const mapContext = mapCanvas.getContext("2d");
        if (!mapContext) return;

        const position = { x: 300, y: 250 };
        const mouse = { x: 300, y: 250 };
        let lastMove = 0;
        let heading = 0;
        let sweep = 0;
        let totalHits = 0;
        let lastRange = 0;
        let frame = 0;
        let previousTime = performance.now();
        let animationFrame = 0;
        const freshReturns: { x: number; y: number; time: number }[] = [];
        const fan: { x: number; y: number }[] = [];

        const onMove = (event: MouseEvent) => {
            const bounds = canvas.getBoundingClientRect();
            mouse.x = ((event.clientX - bounds.left) / bounds.width) * W;
            mouse.y = ((event.clientY - bounds.top) / bounds.height) * H;
            lastMove = performance.now();
        };
        document.addEventListener("mousemove", onMove);

        const tick = (now: number) => {
            const deltaTime = Math.min((now - previousTime) / 1000, 0.05);
            previousTime = now;
            frame++;

            const targetX = now - lastMove > 2500 ? 300 + Math.sin(now / 4200) * 200 : mouse.x;
            const targetY = now - lastMove > 2500 ? 260 + Math.sin(now / 3100 + 1) * 170 : mouse.y;
            let velocityX = (targetX - position.x) * 1.8;
            let velocityY = (targetY - position.y) * 1.8;
            const speed = Math.hypot(velocityX, velocityY);
            if (speed > 130) {
                velocityX = (velocityX / speed) * 130;
                velocityY = (velocityY / speed) * 130;
            }
            position.x += velocityX * deltaTime;
            position.y += velocityY * deltaTime;
            position.x = Math.min(Math.max(position.x, 8 + ROBOT_R), W - 8 - ROBOT_R);
            position.y = Math.min(Math.max(position.y, 8 + ROBOT_R), H - 8 - ROBOT_R);

            for (const obstacle of RECTS) {
                const closestX = Math.min(Math.max(position.x, obstacle.x), obstacle.x + obstacle.w);
                const closestY = Math.min(Math.max(position.y, obstacle.y), obstacle.y + obstacle.h);
                const dx = position.x - closestX;
                const dy = position.y - closestY;
                const distance = Math.hypot(dx, dy);
                if (distance < ROBOT_R) {
                    if (distance > 0) {
                        position.x += (dx / distance) * (ROBOT_R - distance);
                        position.y += (dy / distance) * (ROBOT_R - distance);
                    } else position.y -= ROBOT_R;
                }
            }
            if (Math.hypot(velocityX, velocityY) > 8) heading = angleLerp(heading, Math.atan2(velocityY, velocityX), 0.1);

            const advance = 7.5 * deltaTime;
            const rays = Math.max(1, Math.ceil(advance / ((Math.PI / 180) * 1.2)));
            for (let ray = 0; ray < rays; ray++) {
                sweep += advance / rays;
                const range = castRay(position.x, position.y, sweep);
                const reach = range === null ? MAX_RANGE : range + (Math.random() - 0.5) * 2.4;
                const hitX = position.x + Math.cos(sweep) * reach;
                const hitY = position.y + Math.sin(sweep) * reach;
                fan.push({ x: hitX, y: hitY });
                if (fan.length > 70) fan.shift();
                if (range !== null) {
                    freshReturns.push({ x: hitX, y: hitY, time: now });
                    mapContext.fillStyle = "rgba(56, 189, 248, 0.55)";
                    mapContext.fillRect(hitX - 0.8, hitY - 0.8, 1.6, 1.6);
                    totalHits++;
                    lastRange = range;
                }
            }
            while (freshReturns.length && now - freshReturns[0].time > 1400) freshReturns.shift();

            context.clearRect(0, 0, W, H);
            const background = context.createLinearGradient(0, 0, W, H);
            background.addColorStop(0, "#0b1f3a");
            background.addColorStop(1, "#0a2a3a");
            context.fillStyle = background;
            context.fillRect(0, 0, W, H);
            context.strokeStyle = "rgba(56, 189, 248, 0.07)";
            context.lineWidth = 1;
            context.beginPath();
            for (let grid = 0; grid <= W; grid += 30) {
                context.moveTo(grid, 0); context.lineTo(grid, H);
                context.moveTo(0, grid); context.lineTo(W, grid);
            }
            context.stroke();
            context.drawImage(mapCanvas, 0, 0);

            context.strokeStyle = "rgba(186, 230, 253, 0.18)";
            context.setLineDash([4, 6]);
            for (const radius of [70, 140, 210]) {
                context.beginPath(); context.arc(position.x, position.y, radius, 0, Math.PI * 2); context.stroke();
            }
            context.setLineDash([]);

            if (fan.length > 2) {
                context.beginPath();
                context.moveTo(position.x, position.y);
                fan.forEach(point => context.lineTo(point.x, point.y));
                context.closePath();
                const fanGradient = context.createRadialGradient(position.x, position.y, 0, position.x, position.y, MAX_RANGE);
                fanGradient.addColorStop(0, "rgba(56, 189, 248, 0.38)");
                fanGradient.addColorStop(1, "rgba(56, 189, 248, 0.04)");
                context.fillStyle = fanGradient;
                context.fill();
                const head = fan[fan.length - 1];
                context.strokeStyle = "rgba(186, 230, 253, 0.85)";
                context.lineWidth = 1.2;
                context.beginPath(); context.moveTo(position.x, position.y); context.lineTo(head.x, head.y); context.stroke();
            }

            for (const point of freshReturns) {
                const alpha = 1 - (now - point.time) / 1400;
                context.fillStyle = `rgba(224, 247, 255, ${alpha.toFixed(3)})`;
                context.fillRect(point.x - 1.4, point.y - 1.4, 2.8, 2.8);
            }

            context.save();
            context.translate(position.x, position.y);
            context.fillStyle = "#e2e8f0";
            context.beginPath(); context.arc(0, 0, ROBOT_R + 2, 0, Math.PI * 2); context.fill();
            context.fillStyle = "#1e293b";
            context.beginPath(); context.arc(0, 0, ROBOT_R, 0, Math.PI * 2); context.fill();
            context.rotate(heading);
            context.fillStyle = "#f97316";
            context.beginPath(); context.moveTo(ROBOT_R + 4, 0); context.lineTo(ROBOT_R - 5, -6); context.lineTo(ROBOT_R - 5, 6); context.closePath(); context.fill();
            context.restore();
            context.fillStyle = "#f8fafc";
            context.beginPath(); context.arc(position.x, position.y, 3, 0, Math.PI * 2); context.fill();
            context.fillStyle = "rgba(125, 211, 252, 0.8)";
            context.font = "11px monospace";
            context.fillText("LIDAR_2D // 360° SCAN", 16, 24);

            if (frame % 6 === 0) {
                if (pointsRef.current) pointsRef.current.textContent = totalHits.toLocaleString();
                if (rangeRef.current) rangeRef.current.textContent = `${(lastRange / PX_PER_M).toFixed(2)} m`;
                if (headingRef.current) headingRef.current.textContent = `${(((heading * 180) / Math.PI + 360) % 360).toFixed(0)}°`;
            }
            animationFrame = requestAnimationFrame(tick);
        };
        animationFrame = requestAnimationFrame(tick);
        return () => {
            document.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <SEO
                title="LiDAR Mapping Project"
                description="A LiDAR-based perception and mapping system that lets our rover see its surroundings, build maps and avoid obstacles."
                keywords={["LiDAR", "SLAM", "robotics", "point cloud", "autonomous navigation", "obstacle avoidance", "engineering project", "BIET Jhansi"]}
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "LiDAR Mapping Project",
                    "description": "A LiDAR perception system for mapping and obstacle avoidance on the Solarpunk Corps rover.",
                    "category": "Robotics",
                    "brand": { "@type": "Organization", "name": "Solarpunk Corps" }
                }}
            />
            <style>{`
        .lidar-page-container {
            --bg-base: #F4F9FD;
            --bg-panel: rgba(56, 189, 248, 0.08);
            --text-main: #0B2540;
            --text-muted: #1D6FA5;
            --border-color: rgba(29, 111, 165, 0.25);
            --gradient-1: rgba(56, 189, 248, 0.12);
            --gradient-2: rgba(74, 222, 128, 0.10);
            --header-bg: rgba(244, 249, 253, 0.88);
            --grid-dot: #1D6FA5;
            background-color: var(--bg-base);
            background-image: radial-gradient(circle at 10% 15%, var(--gradient-1) 0%, transparent 22%), radial-gradient(circle at 90% 85%, var(--gradient-2) 0%, transparent 26%);
            font-family: 'Fira Code', monospace;
            color: var(--text-main);
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        .dark .lidar-page-container {
            --bg-base: #0a1628;
            --bg-panel: rgba(56, 189, 248, 0.07);
            --text-main: #E6F4FF;
            --text-muted: #7DD3FC;
            --border-color: rgba(56, 189, 248, 0.28);
            --gradient-1: rgba(56, 189, 248, 0.10);
            --gradient-2: rgba(74, 222, 128, 0.06);
            --header-bg: rgba(10, 22, 40, 0.88);
            --grid-dot: #38bdf8;
        }
        .font-display { font-family: 'Exo 2', sans-serif; }
        @keyframes lidar-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        .animate-lidar-blink { animation: lidar-blink 2s infinite; }
        @keyframes lidar-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-lidar-spin { animation: lidar-spin 24s linear infinite; }
        .panel-box { background-color: var(--bg-panel); backdrop-filter: blur(4px); border: 1px solid var(--border-color); }
      `}</style>
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;800&family=Fira+Code:wght@400;500;700&display=swap" rel="stylesheet" />
            <Navigation />

            <div className="lidar-page-container flex-grow flex flex-col relative selection:bg-sky-400 selection:text-white pt-16">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--grid-dot) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="w-full p-6 flex justify-between items-center border-b transition-colors sticky top-16 z-30 backdrop-blur-md" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--header-bg)' }}>
                    <div className="flex items-center gap-2 font-bold tracking-widest text-sm uppercase" style={{ color: 'var(--text-muted)' }}><span className="w-2 h-2 bg-sky-400 rounded-full animate-lidar-blink"></span>EcoBotics<span className="text-green-600 dark:text-green-400"> / PERCEPTION</span></div>
                    <div className="hidden md:flex gap-6 text-xs opacity-80" style={{ color: 'var(--text-muted)' }}><span>SENSOR: LIDAR</span><span>COVERAGE: 360°</span><span>STATUS: PROTOTYPING</span></div>
                </div>

                <main className="flex-grow flex flex-col md:flex-row items-center justify-center relative z-10 px-6 py-12 max-w-7xl mx-auto w-full gap-12">
                    <div className="flex-1 text-center md:text-left space-y-6 max-w-lg z-20">
                        <div className="inline-block px-3 py-1 border rounded-full text-xs mb-2" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-panel)', color: 'var(--text-muted)' }}>// PROJECT_LAUNCH: PENDING</div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-green-600 dark:from-sky-200 dark:to-green-300">Teaching Robots<br /><span className="text-sky-600 dark:text-sky-400">To See.</span></h1>
                        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-main)', opacity: 0.8 }}>A LiDAR perception system that fires laser pulses in a full circle, turns the echoes into a point cloud, and builds a live map of the world around our rover.</p>

                        <div className="pt-6 grid grid-cols-2 gap-4 text-left">
                            <div className="p-3 rounded panel-box"><div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>PRINCIPLE</div><div className="text-sm text-sky-600 dark:text-sky-400 font-bold">Time of Flight</div></div>
                            <div className="p-3 rounded panel-box"><div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>OUTPUT</div><div className="text-sm font-bold" style={{ color: 'var(--text-main)' }}>2D Occupancy Map</div></div>
                            <div className="col-span-2 p-3 rounded panel-box">
                                <div className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>LIVE_SCAN (move your cursor to drive the robot)</div>
                                <div className="grid grid-cols-3 gap-2 text-sm font-bold">
                                    <div><div className="text-[10px] font-normal" style={{ color: 'var(--text-muted)' }}>POINTS</div><span ref={pointsRef} className="text-sky-600 dark:text-sky-400">0</span></div>
                                    <div><div className="text-[10px] font-normal" style={{ color: 'var(--text-muted)' }}>LAST_RANGE</div><span ref={rangeRef} className="text-sky-600 dark:text-sky-400">0.00 m</span></div>
                                    <div><div className="text-[10px] font-normal" style={{ color: 'var(--text-muted)' }}>HEADING</div><span ref={headingRef} className="text-green-600 dark:text-green-400">0°</span></div>
                                </div>
                            </div>
                            <div className="col-span-2 p-3 border border-dashed rounded flex justify-between items-center" style={{ borderColor: 'var(--border-color)' }}><span className="text-xs" style={{ color: 'var(--text-muted)' }}>STATUS:</span><span className="text-xs animate-pulse" style={{ color: 'var(--text-main)' }}>awaiting_sensor_integration...</span></div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-md md:max-w-xl aspect-square relative flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none"><div className="w-[85%] h-[85%] border-2 border-sky-500/40 rounded-full animate-lidar-spin" style={{ borderStyle: 'dashed' }}></div></div>
                        <canvas ref={canvasRef} aria-label="Simulated LiDAR scan of a room, with a robot building a map from laser returns" className="relative w-full h-full rounded-xl border-2 border-sky-400/60 shadow-[0_0_30px_rgba(56,189,248,0.25)]" />
                    </div>
                </main>

                <section className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-10"><div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 rounded panel-box flex items-start gap-4 hover:border-sky-400/60 transition-colors"><div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center shrink-0"><Radio className="w-5 h-5 text-sky-500" /></div><div><h3 className="font-display font-bold" style={{ color: 'var(--text-main)' }}>Point Cloud Sensing</h3><p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Thousands of distance readings per second form a live picture of nearby surfaces.</p></div></div>
                    <div className="p-4 rounded panel-box flex items-start gap-4 hover:border-green-400/60 transition-colors"><div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0"><MapIcon className="w-5 h-5 text-green-500" /></div><div><h3 className="font-display font-bold" style={{ color: 'var(--text-main)' }}>SLAM Mapping</h3><p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Build the map and locate the rover inside it at the same time, as the demo above does.</p></div></div>
                    <div className="p-4 rounded panel-box flex items-start gap-4 hover:border-orange-400/60 transition-colors"><div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0"><ShieldAlert className="w-5 h-5 text-orange-500" /></div><div><h3 className="font-display font-bold" style={{ color: 'var(--text-main)' }}>Obstacle Avoidance</h3><p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Nearby returns trigger path changes so the rover steers around hazards on its own.</p></div></div>
                </div></section>

                <div className="text-center mb-6 z-20 relative"><p className="font-mono text-sm mb-4 opacity-70" style={{ color: 'var(--text-muted)' }}>Help us build this future.</p><Link href="/sponsors"><a className="group inline-flex items-center gap-3 px-8 py-3 font-mono font-bold tracking-widest text-sm text-sky-600 dark:text-sky-400 border border-sky-500/50 rounded hover:bg-sky-500/10 hover:border-sky-400 transition-all uppercase"><span className="flex items-center gap-2">SUPPORT PROJECT<span className="group-hover:translate-x-1 transition-transform">→</span></span></a></Link></div>
                <div className="relative z-20 w-full p-6 border-t mt-auto" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-panel)' }}><div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs" style={{ color: 'var(--text-muted)' }}><div className="flex gap-4"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>SCANNER: SIMULATED</span><span className="hidden sm:inline">|</span><span className="hidden sm:inline">NEXT: ROVER_INTEGRATION</span></div><div className="flex gap-4"><span>SLAM_PLANNED</span><span>NAV_AUTONOMOUS</span></div></div></div>
            </div>
            <Footer />
        </div>
    );
}