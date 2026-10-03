import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from "wouter";
import { SEO } from "@/components/seo";

type GameItem = {
    id: number;
    number: number;
    name: string;
    tagline: string;
    url?: string;
    color: string;
    status: 'active' | 'soon';
};

const GAMES_LIST: GameItem[] = [
    {
        id: 1,
        number: 1,
        name: "Messenger",
        tagline: "Interactive Narrative Game",
        url: "https://messenger.abeto.co/",
        color: "#4ade80",
        status: "active"
    },
    {
        id: 2,
        number: 2,
        name: "Townscaper",
        tagline: "Procedural Island Building",
        url: "https://oskarstalberg.com/Townscaper/",
        color: "#38bdf8",
        status: "active"
    },
    {
        id: 3,
        number: 3,
        name: "The-Third",
        tagline: "Upcoming Experience",
        url: "#",
        color: "#eab308",
        status: "soon"
    },
    {
        id: 4,
        number: 4,
        name: "The-Fourth",
        tagline: "Upcoming Experience",
        url: "#",
        color: "#f97316",
        status: "soon"
    },
    {
        id: 5,
        number: 5,
        name: "The-Fifth",
        tagline: "Upcoming Experience",
        url: "#",
        color: "#a855f7",
        status: "soon"
    },
    {
        id: 6,
        number: 6,
        name: "The-Sixth",
        tagline: "Upcoming Experience",
        url: "#",
        color: "#14b8a6",
        status: "soon"
    }
];

const config = {
    lines: ["SOLARPUNK", "CORPS"],
    colors: {
        textFill: '#1c241e',
        goldOutline: '#c5a028',
        bronzeShadow: '#4a3512',
        vineStem: '#2e7d32',
        vineHighlight: '#81c784',
        leafFill: '#4ade80',
        leafDark: '#14532d',
        star: '#ffffff',
        comet: '#d1fae5'
    },
    leafSizeBase: 7.5,
    leafDensity: 0.35,
    animTime: 0
};

let mouse: { x: number; y: number; active: boolean; vx: number; vy: number } = { x: -1000, y: -1000, active: false, vx: 0, vy: 0 };
let stars: Star[] = [];
let comets: Comet[] = [];
let particles: Particle[] = [];
let letters: Letter[] = [];
let globalParallax = { x: 0, y: 0 };
const PARALLAX_BG_STRENGTH = 0.02;
const PARALLAX_TEXT_BASE_STRENGTH = 0.06;

function randomRange(min: number, max: number) { return Math.random() * (max - min) + min; }

class Star {
    canvasWidth: number = 0;
    canvasHeight: number = 0;
    x: number = 0;
    y: number = 0;
    size: number = 0;
    speed: number = 0;
    alpha: number = 0;
    alphaChange: number = 0;

    constructor(w: number, h: number) {
        this.canvasWidth = w;
        this.canvasHeight = h;
        this.reset();
        this.y = Math.random() * h;
    }
    reset() {
        this.x = randomRange(-50, this.canvasWidth + 50);
        this.y = -10;
        this.size = Math.random() * 1.5;
        this.speed = Math.random() * 0.2 + 0.05;
        this.alpha = Math.random();
        this.alphaChange = (Math.random() * 0.02) - 0.01;
    }
    draw(ctx: CanvasRenderingContext2D) {
        this.y += this.speed;
        this.alpha += this.alphaChange;
        if (this.alpha <= 0 || this.alpha >= 1) this.alphaChange *= -1;
        if (this.y > this.canvasHeight + 50) this.reset();
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha * 0.7})`;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
    }
}

class Comet {
    canvasWidth: number = 0;
    canvasHeight: number = 0;
    active: boolean = false;
    trail: { x: number, y: number, alpha: number }[] = [];
    x: number = 0;
    y: number = 0;
    size: number = 0;
    vx: number = 0;
    vy: number = 0;

    constructor(w: number, h: number) {
        this.canvasWidth = w;
        this.canvasHeight = h;
        this.active = false;
        this.trail = [];
    }
    spawn() {
        if (Math.random() > 0.995 && !this.active) {
            this.active = true;
            this.x = Math.random() * this.canvasWidth; this.y = -50;
            this.size = Math.random() * 2 + 1;
            this.vx = (Math.random() - 0.5) * 4; this.vy = Math.random() * 5 + 3;
            this.trail = [];
        }
    }
    draw(ctx: CanvasRenderingContext2D) {
        if (!this.active) { this.spawn(); return; }
        this.x += this.vx; this.y += this.vy;
        this.trail.push({ x: this.x, y: this.y, alpha: 0.8 });
        if (this.y > this.canvasHeight + 50) this.active = false;

        for (let i = this.trail.length - 1; i >= 0; i--) {
            const p = this.trail[i]; p.alpha -= 0.04;
            if (p.alpha <= 0) { this.trail.splice(i, 1); continue; }
            ctx.fillStyle = `rgba(167, 243, 208, ${p.alpha * 0.6})`;
            ctx.beginPath(); ctx.arc(p.x, p.y, this.size * p.alpha, 0, Math.PI * 2); ctx.fill();
        }
        ctx.fillStyle = '#f0fdf4'; ctx.shadowBlur = 6; ctx.shadowColor = '#4ade80';
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
    }
}

class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    decay: number;
    color: string;
    size: number;

    constructor(x: number, y: number, customColor?: string) {
        this.x = x; this.y = y;
        this.vx = (Math.random() - 0.5) * 1.8; this.vy = (Math.random() - 0.5) * 1.8;
        this.life = 1; this.decay = Math.random() * 0.03 + 0.015;
        this.color = customColor || (Math.random() > 0.5 ? '#4ade80' : '#c5a028');
        this.size = Math.random() * 2.8 + 1;
    }
    draw(ctx: CanvasRenderingContext2D) {
        this.x += this.vx; this.y += this.vy; this.life -= this.decay;
        if (this.life > 0) {
            ctx.globalAlpha = Math.max(0, this.life * 0.75); ctx.fillStyle = this.color;
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1;
        }
    }
}

class Leaf {
    x: number;
    y: number;
    baseAngle: number;
    size: number;
    swaySpeed: number;
    swayOffset: number;

    constructor(x: number, y: number, angle: number, size: number) {
        this.x = x; this.y = y; this.baseAngle = angle; this.size = size;
        this.swaySpeed = 1 + Math.random(); this.swayOffset = Math.random() * 10;
    }
    draw(ctx: CanvasRenderingContext2D, time: number, parentSwayX: number, parentSwayY: number, effectiveMouse: { x: number; y: number; active: boolean } | null) {
        const rotSway = Math.sin(time * this.swaySpeed + this.swayOffset) * 0.25;
        let currentAngle = this.baseAngle + rotSway;
        const drawX = this.x + parentSwayX; const drawY = this.y + parentSwayY;

        if (effectiveMouse && effectiveMouse.active) {
            const dx = effectiveMouse.x - drawX; const dy = effectiveMouse.y - drawY;
            const dist = Math.sqrt(dx * dx + dy * dy); const range = 140;
            if (dist < range) {
                const targetAngle = Math.atan2(dy, dx);
                const influence = (1 - dist / range) * 0.4;
                currentAngle = currentAngle * (1 - influence) + targetAngle * influence;
            }
        }
        ctx.save(); ctx.translate(drawX, drawY); ctx.rotate(currentAngle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(this.size, -this.size / 2.5, this.size * 1.8, -this.size / 4, this.size * 2.2, 0);
        ctx.bezierCurveTo(this.size * 1.8, this.size / 4, this.size, this.size / 2.5, 0, 0);
        const grad = ctx.createLinearGradient(0, 0, this.size * 2, 0);
        grad.addColorStop(0, config.colors.leafDark); grad.addColorStop(0.5, '#166534'); grad.addColorStop(1, config.colors.leafFill);
        ctx.fillStyle = grad; ctx.fill(); ctx.restore();
    }
}

class VineSegment {
    start: { x: number, y: number };
    end: { x: number, y: number };
    cp1: { x: number, y: number };
    cp2: { x: number, y: number };
    isFront: boolean;
    leaves: Leaf[];
    animOffset: number;

    constructor(startX: number, startY: number, endX: number, endY: number, cp1x: number, cp1y: number, cp2x: number, cp2y: number, isFront: boolean) {
        this.start = { x: startX, y: startY }; this.end = { x: endX, y: endY };
        this.cp1 = { x: cp1x, y: cp1y }; this.cp2 = { x: cp2x, y: cp2y };
        this.isFront = isFront; this.leaves = []; this.animOffset = Math.random() * 10;
        this.initLeaves();
    }
    initLeaves() {
        const dx = this.end.x - this.start.x; const dy = this.end.y - this.start.y;
        const dist = Math.sqrt(dx * dx + dy * dy); const steps = Math.floor(dist / 12);
        for (let i = 1; i < steps; i++) {
            if (Math.random() > (1 - config.leafDensity)) {
                const t = i / steps;
                const cx = Math.pow(1 - t, 3) * this.start.x + 3 * Math.pow(1 - t, 2) * t * this.cp1.x + 3 * (1 - t) * Math.pow(t, 2) * this.cp2.x + Math.pow(t, 3) * this.end.x;
                const cy = Math.pow(1 - t, 3) * this.start.y + 3 * Math.pow(1 - t, 2) * t * this.cp1.y + 3 * (1 - t) * Math.pow(t, 2) * this.cp2.y + Math.pow(t, 3) * this.end.y;

                const tx = (3 * Math.pow(1 - t, 2) * (this.cp1.x - this.start.x)) + (6 * (1 - t) * t * (this.cp2.x - this.cp1.x)) + (3 * t * t * (this.end.x - this.cp2.x));
                const ty = (3 * Math.pow(1 - t, 2) * (this.cp1.y - this.start.y)) + (6 * (1 - t) * t * (this.cp2.y - this.cp1.y)) + (3 * t * t * (this.end.y - this.cp2.y));
                const angle = Math.atan2(ty, tx);

                const sideAngle = angle + (Math.random() > 0.5 ? 1.2 : -1.2);
                this.leaves.push(new Leaf(cx, cy, sideAngle, config.leafSizeBase + Math.random() * 5));
            }
        }
    }
    draw(ctx: CanvasRenderingContext2D, time: number, effectiveMouse: { x: number; y: number; active: boolean } | null) {
        const swayX = Math.sin(time * 2 + this.animOffset) * 1.8;
        const swayY = Math.cos(time * 1.5 + this.animOffset) * 1.8;
        const d_cp1x = this.cp1.x + swayX; const d_cp1y = this.cp1.y + swayY;
        const d_cp2x = this.cp2.x - swayX; const d_cp2y = this.cp2.y + swayY;

        ctx.beginPath(); ctx.moveTo(this.start.x, this.start.y);
        ctx.bezierCurveTo(d_cp1x, d_cp1y, d_cp2x, d_cp2y, this.end.x, this.end.y);
        ctx.lineWidth = 3 + Math.sin(time * 3) * 0.3; ctx.strokeStyle = 'rgba(0,0,0,0.5)'; ctx.lineCap = 'round'; ctx.stroke();
        ctx.lineWidth = 1.8; ctx.strokeStyle = config.colors.vineStem; ctx.stroke();
        ctx.lineWidth = 0.7; ctx.strokeStyle = 'rgba(167, 243, 208, 0.4)'; ctx.stroke();
        this.leaves.forEach(leaf => leaf.draw(ctx, time, swayX * 0.5, swayY * 0.5, effectiveMouse));
    }
}

class Letter {
    char: string;
    x: number;
    y: number;
    size: number;
    vines: VineSegment[];
    currentOffset: { x: number; y: number };
    depth: number;
    inertia: number;

    constructor(char: string, x: number, y: number, size: number) {
        this.char = char; this.x = x; this.y = y; this.size = size;
        this.vines = [];
        this.currentOffset = { x: 0, y: 0 };
        this.depth = randomRange(0.8, 1.4);
        this.inertia = randomRange(0.04, 0.08);
        this.generateVines();
    }

    generateVines() {
        const w = this.size * 0.5; const h = this.size * 0.7;
        const L = this.x - w / 2; const R = this.x + w / 2; const T = this.y - h / 2; const B = this.y + h / 2;
        const c = this.char.toUpperCase();

        if (['O', 'C', 'G', 'Q', 'U', 'D'].includes(c)) {
            this.addSegment(L, B - h * 0.3, L, T + h * 0.3, true); this.addSegment(L, T + h * 0.3, R, T, false);
            this.addSegment(R, T, R, B - h * 0.3, true); this.addSegment(R, B - h * 0.3, L, B, false);
        } else if (['S'].includes(c)) {
            this.addSegment(R, T + h * 0.2, L, T + h * 0.2, true); this.addSegment(L, T + h * 0.2, R, B - h * 0.2, false);
            this.addSegment(R, B - h * 0.2, L, B - h * 0.2, true);
        } else if (['A', 'R', 'P', 'B'].includes(c)) {
            this.addSegment(L, T + h * 0.5, R, T + h * 0.2, true); this.addSegment(R, T + h * 0.2, L, T, false);
            this.addSegment(L, B, R, B - h * 0.3, true);
        } else if (['N', 'M', 'W', 'K', 'X', 'V', 'Z'].includes(c)) {
            this.addSegment(L, B, R, T, true); this.addSegment(R, T, R, B, false);
        } else if (['L', 'I', 'T', 'H', 'E', 'F', 'J'].includes(c)) {
            this.addSegment(L, B, R, B - h * 0.3, true); this.addSegment(R, B - h * 0.3, L, B - h * 0.6, false);
            this.addSegment(L, B - h * 0.6, R, T + h * 0.2, true);
        } else {
            this.addSegment(L, B, R, T, true);
        }
    }

    addSegment(x1: number, y1: number, x2: number, y2: number, isFront: boolean) {
        const mx = (x1 + x2) / 2;
        const cp1x = x1 + (mx - x1) * 0.5 + randomRange(-15, 15); const cp1y = y1 + (randomRange(-25, 25));
        const cp2x = x2 - (x2 - mx) * 0.5 + randomRange(-15, 15); const cp2y = y2 + (randomRange(-25, 25));
        this.vines.push(new VineSegment(x1, y1, x2, y2, cp1x, cp1y, cp2x, cp2y, isFront));
    }

    updatePhysics(targetParallaxX: number, targetParallaxY: number) {
        const targetX = targetParallaxX * this.depth;
        const targetY = targetParallaxY * this.depth;
        this.currentOffset.x += (targetX - this.currentOffset.x) * this.inertia;
        this.currentOffset.y += (targetY - this.currentOffset.y) * this.inertia;
    }

    drawText(ctx: CanvasRenderingContext2D) {
        ctx.font = `900 ${this.size}px 'Exo 2', sans-serif`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round';
        ctx.lineWidth = this.size * 0.08; ctx.strokeStyle = config.colors.bronzeShadow; ctx.strokeText(this.char, this.x + 2, this.y + 2);
        ctx.lineWidth = this.size * 0.08; ctx.strokeStyle = config.colors.goldOutline; ctx.strokeText(this.char, this.x, this.y);
        ctx.lineWidth = this.size * 0.03; ctx.strokeStyle = '#fef08a'; ctx.strokeText(this.char, this.x, this.y);
        ctx.fillStyle = config.colors.textFill; ctx.fillText(this.char, this.x, this.y);
    }

    drawVinesBack(ctx: CanvasRenderingContext2D, time: number, effMouse: { x: number; y: number; active: boolean } | null) { this.vines.filter(v => !v.isFront).forEach(v => v.draw(ctx, time, effMouse)); }
    drawVinesFront(ctx: CanvasRenderingContext2D, time: number, effMouse: { x: number; y: number; active: boolean } | null) { this.vines.filter(v => v.isFront).forEach(v => v.draw(ctx, time, effMouse)); }
}

function Die3D({ game, onSelect, isSpinning }: { game: GameItem; onSelect: (game: GameItem) => void; isSpinning: boolean }) {
    const renderPips = (num: number) => {
        const pipPositions: Record<number, string[]> = {
            1: ['center'],
            2: ['top-right', 'bottom-left'],
            3: ['top-right', 'center', 'bottom-left'],
            4: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
            5: ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'],
            6: ['top-left', 'top-right', 'mid-left', 'mid-right', 'bottom-left', 'bottom-right']
        };

        const activePositions = pipPositions[num] || ['center'];

        return (
            <div className="dice-pips-grid">
                {['top-left', 'top-right', 'mid-left', 'center', 'mid-right', 'bottom-left', 'bottom-right'].map((pos) => (
                    <span
                        key={pos}
                        className={`pip ${pos} ${activePositions.includes(pos) ? 'visible' : ''}`}
                        style={{ backgroundColor: activePositions.includes(pos) ? game.color : 'transparent' }}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="die-card-container" onClick={() => onSelect(game)}>
            <div className="die-badge" style={{ borderColor: `${game.color}55` }}>
                <div className="badge-number" style={{ backgroundColor: game.color }}>
                    #{game.number}
                </div>
                <div className="badge-text">
                    <span className="badge-title">{game.name}</span>
                    <span className="badge-subtitle">{game.tagline}</span>
                </div>
            </div>

            <div className="dice-3d-scene">
                <div className={`cube ${isSpinning ? 'spinning' : ''}`}>
                    <div className="face front" style={{ borderColor: `${game.color}88` }}>
                        {renderPips(game.number)}
                    </div>
                    <div className="face back" style={{ borderColor: `${game.color}88` }}>{renderPips(7 - game.number)}</div>
                    <div className="face right" style={{ borderColor: `${game.color}88` }}>{renderPips((game.number % 6) + 1)}</div>
                    <div className="face left" style={{ borderColor: `${game.color}88` }}>{renderPips(((game.number + 2) % 6) + 1)}</div>
                    <div className="face top" style={{ borderColor: `${game.color}88` }}>{renderPips(((game.number + 3) % 6) + 1)}</div>
                    <div className="face bottom" style={{ borderColor: `${game.color}88` }}>{renderPips(((game.number + 4) % 6) + 1)}</div>
                </div>
            </div>

            <button className="die-action-btn" style={{ ['--accent-color' as string]: game.color }}>
                {game.status === 'active' ? (
                    <>
                        PLAY <span className="btn-arrow">→</span>
                    </>
                ) : (
                    'SOON'
                )}
            </button>
        </div>
    );
}

export default function HiddenEgg() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationRef = useRef<number>(0);
    const [, navigate] = useLocation();
    const [viewMode, setViewMode] = useState<'title' | 'games'>('title');
    const [spinningDieId, setSpinningDieId] = useState<number | null>(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0, visible: false });
    const [cursorTrail, setCursorTrail] = useState<Array<{ x: number; y: number; life: number; size: number }>>([]);

    useEffect(() => {
        const handlePointerMove = (event: PointerEvent) => {
            const nextDot = {
                x: event.clientX,
                y: event.clientY,
                life: 1,
                size: 5 + Math.random() * 10,
            };

            setCursorPosition({
                x: event.clientX,
                y: event.clientY,
                visible: true,
            });

            setCursorTrail((prev) => [...prev.slice(-18), nextDot]);
        };

        const handlePointerLeave = () => {
            setCursorPosition((prev) => ({ ...prev, visible: false }));
        };

        const interval = window.setInterval(() => {
            setCursorTrail((prev) =>
                prev
                    .map((dot) => ({ ...dot, life: dot.life - 0.12 }))
                    .filter((dot) => dot.life > 0)
                    .slice(-20)
            );
        }, 30);

        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerleave', handlePointerLeave);

        return () => {
            window.clearInterval(interval);
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerleave', handlePointerLeave);
        };
    }, []);

    const handleDieClick = (game: GameItem) => {
        setSpinningDieId(game.id);

        if (mouse.x > 0 && mouse.y > 0) {
            for (let i = 0; i < 25; i++) {
                particles.push(new Particle(mouse.x, mouse.y, game.color));
            }
        }

        setTimeout(() => {
            if (game.url && game.url !== '#') {
                window.open(game.url, '_blank', 'noopener,noreferrer');
            }
            setSpinningDieId(null);
        }, 750);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            stars = []; for (let i = 0; i < 150; i++) stars.push(new Star(width, height));
            comets = []; for (let i = 0; i < 3; i++) comets.push(new Comet(width, height));

            letters = [];
            const fontSize = Math.min(width / 10, 140);

            const line1 = config.lines[0];
            ctx.font = `900 ${fontSize}px 'Exo 2', sans-serif`;
            const charStride1 = fontSize * 0.85;
            const totalWidth1 = (line1.length - 1) * charStride1;
            const startX1 = (width - totalWidth1) / 2;
            const y1 = height / 2 - fontSize * 0.7;

            for (let i = 0; i < line1.length; i++) {
                letters.push(new Letter(line1[i], startX1 + (i * charStride1), y1, fontSize));
            }

            const line2 = config.lines[1];
            const fontSize2 = fontSize * 0.8;
            ctx.font = `900 ${fontSize2}px 'Exo 2', sans-serif`;
            const charStride2 = fontSize2 * 0.85;
            const totalWidth2 = (line2.length - 1) * charStride2;
            const startX2 = (width - totalWidth2) / 2;
            const y2 = height / 2 + fontSize * 0.35;

            for (let i = 0; i < line2.length; i++) {
                letters.push(new Letter(line2[i], startX2 + (i * charStride2), y2, fontSize2));
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            config.animTime += 0.01;

            const rawTargetX = mouse.active ? (mouse.x - width / 2) : 0;
            const rawTargetY = mouse.active ? (mouse.y - height / 2) : 0;

            globalParallax.x += (rawTargetX - globalParallax.x) * 0.05;
            globalParallax.y += (rawTargetY - globalParallax.y) * 0.05;

            const bgPx = globalParallax.x * PARALLAX_BG_STRENGTH * -1;
            const bgPy = globalParallax.y * PARALLAX_BG_STRENGTH * -1;

            const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, width);
            bgGrad.addColorStop(0, '#0f1712'); bgGrad.addColorStop(1, '#050a06');
            ctx.fillStyle = bgGrad; ctx.fillRect(0, 0, width, height);

            ctx.save();
            ctx.translate(bgPx, bgPy);
            stars.forEach(s => s.draw(ctx));
            comets.forEach(c => c.draw(ctx));
            ctx.restore();

            if (mouse.active && (Math.abs(mouse.vx) > 0.1 || Math.abs(mouse.vy) > 0.1)) {
                particles.push(new Particle(mouse.x, mouse.y));
            }
            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].draw(ctx);
                if (particles[i].life <= 0) particles.splice(i, 1);
            }

            if (viewMode === 'title') {
                const baseTextTargetX = globalParallax.x * PARALLAX_TEXT_BASE_STRENGTH * -1;
                const baseTextTargetY = globalParallax.y * PARALLAX_TEXT_BASE_STRENGTH * -1;

                letters.forEach(letter => {
                    letter.updatePhysics(baseTextTargetX, baseTextTargetY);

                    ctx.save();
                    ctx.translate(letter.currentOffset.x, letter.currentOffset.y);

                    const effMouse = {
                        x: mouse.x - letter.currentOffset.x,
                        y: mouse.y - letter.currentOffset.y,
                        active: mouse.active
                    };

                    letter.drawVinesBack(ctx, config.animTime, effMouse);
                    letter.drawText(ctx);
                    letter.drawVinesFront(ctx, config.animTime, effMouse);

                    ctx.restore();
                });
            }

            if (mouse.active) {
                ctx.beginPath(); ctx.arc(mouse.x, mouse.y, 3.5, 0, Math.PI * 2);
                ctx.fillStyle = '#ffffff'; ctx.shadowBlur = 6; ctx.shadowColor = '#4ade80';
                ctx.fill(); ctx.shadowBlur = 0;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        let lastX = 0; let lastY = 0;
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.vx = mouse.x - lastX;
            mouse.vy = mouse.y - lastY;
            lastX = mouse.x;
            lastY = mouse.y;
            mouse.active = true;
        };
        const handleMouseLeave = () => { mouse.active = false; };
        const handleResize = () => { init(); };

        window.addEventListener('resize', handleResize);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        void document.fonts.ready.then(() => {
            init();
            animate();
        });

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [viewMode]);

    return (
        <div className="solarpunk-root">
            <SEO title="Hidden Easter Egg" robots="noindex, follow" />
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,700;0,900;1,900&family=Inter:wght@400;600;700;800&display=swap');

                .solarpunk-root {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    overflow: hidden;
                    background-color: #050806;
                    font-family: 'Inter', sans-serif;
                    user-select: none;
                }

                .navbar {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    right: 20px;
                    z-index: 50;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .nav-logo {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    cursor: pointer;
                    background: rgba(15, 23, 18, 0.7);
                    padding: 8px 16px;
                    border-radius: 30px;
                    border: 1px solid rgba(74, 222, 128, 0.2);
                    backdrop-filter: blur(8px);
                    transition: all 0.3s ease;
                }

                .nav-logo:hover {
                    border-color: rgba(74, 222, 128, 0.4);
                    box-shadow: 0 0 12px rgba(74, 222, 128, 0.15);
                }

                .logo-img {
                    height: 28px;
                    width: 28px;
                    object-fit: contain;
                }

                .logo-title {
                    font-weight: 800;
                    font-size: 1rem;
                    color: #f0fdf4;
                    letter-spacing: 0.5px;
                }

                .back-btn {
                    background: rgba(197, 160, 40, 0.1);
                    border: 1px solid rgba(197, 160, 40, 0.5);
                    color: #fef08a;
                    padding: 8px 18px;
                    border-radius: 20px;
                    font-weight: 700;
                    font-size: 0.85rem;
                    cursor: pointer;
                    backdrop-filter: blur(8px);
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .back-btn:hover {
                    background: #c5a028;
                    color: #0f1712;
                    box-shadow: 0 0 12px rgba(197, 160, 40, 0.3);
                }

                .main-canvas {
                    display: block;
                    width: 100%;
                    height: 100%;
                    cursor: none;
                }

                .cursor-glow {
                    position: fixed;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 90;
                    background: radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(74, 222, 128, 0.9) 18%, rgba(74, 222, 128, 0.3) 42%, rgba(74, 222, 128, 0) 70%);
                    box-shadow: 0 0 18px rgba(74, 222, 128, 0.9), 0 0 32px rgba(74, 222, 128, 0.5), 0 0 50px rgba(74, 222, 128, 0.25);
                    transform: translate(-50%, -50%);
                    transition: opacity 0.15s ease;
                }

                .cursor-trail-dot {
                    position: fixed;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 89;
                    background: radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(74, 222, 128, 0.85) 25%, rgba(74, 222, 128, 0.2) 55%, rgba(74, 222, 128, 0) 75%);
                    box-shadow: 0 0 12px rgba(74, 222, 128, 0.65);
                    transform: translate(-50%, -50%);
                }

                .title-overlay-container {
                    position: absolute;
                    bottom: 12vh;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 40;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                }

                .play-games-btn {
                    position: relative;
                    padding: 16px 40px;
                    font-family: 'Exo 2', sans-serif;
                    font-weight: 900;
                    font-size: 1.25rem;
                    letter-spacing: 2px;
                    color: #f0fdf4;
                    background: linear-gradient(135deg, #1f4228 0%, #142a1a 100%);
                    border: 1.5px solid rgba(74, 222, 128, 0.5);
                    border-radius: 40px;
                    cursor: pointer;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2);
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                    text-transform: uppercase;
                }

                .play-games-btn:hover {
                    transform: translateY(-2px) scale(1.04);
                    border-color: rgba(74, 222, 128, 0.8);
                    background: linear-gradient(135deg, #275433 0%, #193621 100%);
                    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.6), 0 0 15px rgba(74, 222, 128, 0.2);
                }

                .play-games-btn:active {
                    transform: translateY(1px) scale(0.98);
                }

                .subtitle-hint {
                    color: rgba(240, 253, 244, 0.5);
                    font-size: 0.8rem;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                }

                .games-grid-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 30;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 80px 20px 30px;
                    box-sizing: border-box;
                    background: rgba(5, 10, 7, 0.55);
                    backdrop-filter: blur(6px);
                    animation: fadeIn 0.4s ease-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .games-header {
                    text-align: center;
                    margin-bottom: 28px;
                }

                .games-header h2 {
                    font-family: 'Exo 2', sans-serif;
                    font-size: 2rem;
                    font-weight: 900;
                    color: #f0fdf4;
                    margin: 0 0 6px 0;
                    letter-spacing: 2px;
                }

                .games-header p {
                    color: rgba(240, 253, 244, 0.6);
                    font-size: 0.85rem;
                    margin: 0;
                }

                .dice-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px 20px;
                    max-width: 960px;
                    width: 100%;
                }

                @media (max-width: 850px) {
                    .dice-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 18px;
                    }
                }

                @media (max-width: 520px) {
                    .dice-grid {
                        grid-template-columns: 1fr;
                        max-height: 65vh;
                        overflow-y: auto;
                    }
                }

                .die-card-container {
                    background: rgba(15, 23, 18, 0.75);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 18px 16px 16px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 16px;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                    backdrop-filter: blur(10px);
                    position: relative;
                }

                .die-card-container:hover {
                    transform: translateY(-5px);
                    border-color: rgba(255, 255, 255, 0.2);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
                    background: rgba(20, 31, 24, 0.85);
                }

                .die-badge {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(0, 0, 0, 0.35);
                    border: 1px solid;
                    border-radius: 20px;
                    padding: 4px 12px 4px 4px;
                    width: 100%;
                    box-sizing: border-box;
                }

                .badge-number {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    color: #0f1712;
                    font-weight: 800;
                    font-size: 0.8rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .badge-text {
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                }

                .badge-title {
                    color: #f0fdf4;
                    font-weight: 700;
                    font-size: 0.9rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                .badge-subtitle {
                    color: rgba(240, 253, 244, 0.45);
                    font-size: 0.7rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                .dice-3d-scene {
                    width: 76px;
                    height: 76px;
                    perspective: 400px;
                    margin: 6px 0;
                }

                .cube {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    transform-style: preserve-3d;
                    transform: rotateX(-22deg) rotateY(-35deg);
                    transition: transform 0.5s ease;
                }

                .die-card-container:hover .cube {
                    transform: rotateX(-10deg) rotateY(350deg);
                }

                .cube.spinning {
                    animation: spinDice 0.75s ease-in-out infinite;
                }

                @keyframes spinDice {
                    0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
                    100% { transform: rotateX(720deg) rotateY(1080deg) rotateZ(360deg); }
                }

                .face {
                    position: absolute;
                    width: 76px;
                    height: 76px;
                    background: #0f1712;
                    border: 1.5px solid rgba(255, 255, 255, 0.15);
                    border-radius: 10px;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
                }

                .face.front  { transform: rotateY(0deg) translateZ(38px); }
                .face.back   { transform: rotateY(180deg) translateZ(38px); }
                .face.right  { transform: rotateY(90deg) translateZ(38px); }
                .face.left   { transform: rotateY(-90deg) translateZ(38px); }
                .face.top    { transform: rotateX(90deg) translateZ(38px); }
                .face.bottom { transform: rotateX(-90deg) translateZ(38px); }

                .dice-pips-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-template-rows: repeat(3, 1fr);
                    width: 52px;
                    height: 52px;
                    gap: 2px;
                    align-items: center;
                    justify-items: center;
                }

                .pip {
                    width: 9px;
                    height: 9px;
                    border-radius: 50%;
                    opacity: 0;
                    transition: opacity 0.2s;
                }

                .pip.visible {
                    opacity: 1;
                }

                .pip.top-left { grid-area: 1 / 1; }
                .pip.top-right { grid-area: 1 / 3; }
                .pip.mid-left { grid-area: 2 / 1; }
                .pip.center { grid-area: 2 / 2; }
                .pip.mid-right { grid-area: 2 / 3; }
                .pip.bottom-left { grid-area: 3 / 1; }
                .pip.bottom-right { grid-area: 3 / 3; }

                .die-action-btn {
                    width: 100%;
                    padding: 8px 0;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    background: rgba(0, 0, 0, 0.25);
                    color: rgba(240, 253, 244, 0.8);
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 0.78rem;
                    letter-spacing: 1px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    transition: all 0.25s ease;
                }

                .die-card-container:hover .die-action-btn {
                    background: var(--accent-color);
                    color: #050a06;
                    border-color: var(--accent-color);
                }

                .btn-arrow {
                    transition: transform 0.2s ease;
                }

                .die-card-container:hover .btn-arrow {
                    transform: translateX(3px);
                }
            `}</style>

            <div className="navbar">
                <div className="nav-logo" onClick={() => navigate('/')}>
                    <img
                        src="/SPC_logo.png"
                        alt="Solarpunk Corps"
                        className="logo-img"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                    <span className="logo-title">Solarpunk Corps</span>
                </div>

                {viewMode === 'games' && (
                    <button className="back-btn" onClick={() => setViewMode('title')}>
                        ← Return to Title
                    </button>
                )}
            </div>

            {cursorTrail.map((dot, index) => (
                <div
                    key={`${dot.x}-${dot.y}-${index}`}
                    className="cursor-trail-dot"
                    style={{
                        left: `${dot.x}px`,
                        top: `${dot.y}px`,
                        width: `${dot.size * (0.2 + dot.life) * 1.5}px`,
                        height: `${dot.size * (0.2 + dot.life) * 1.5}px`,
                        opacity: Math.max(0, dot.life),
                    }}
                />
            ))}

            <div
                className="cursor-glow"
                style={{
                    left: `${cursorPosition.x}px`,
                    top: `${cursorPosition.y}px`,
                    opacity: cursorPosition.visible ? 1 : 0,
                }}
            />

            <canvas ref={canvasRef} className="main-canvas" />

            {viewMode === 'title' && (
                <div className="title-overlay-container">
                    <button className="play-games-btn" onClick={() => setViewMode('games')}>
                        PLAY GAMES
                    </button>
                    <span className="subtitle-hint">Click to launch game dice</span>
                </div>
            )}

            {viewMode === 'games' && (
                <div className="games-grid-overlay">
                    <div className="games-header">
                        <h2>SPC GAMES ARCADE</h2>
                        <p>Select a die face to roll and launch into a title</p>
                    </div>

                    <div className="dice-grid">
                        {GAMES_LIST.map((game) => (
                            <Die3D
                                key={game.id}
                                game={game}
                                onSelect={handleDieClick}
                                isSpinning={spinningDieId === game.id}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
