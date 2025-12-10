import { useEffect, useRef } from 'react';
import { useLocation } from "wouter";

// --- CONFIGURATION ---
const config = {
    lines: ["SOLARPUNK", "CORPS"],
    colors: {
        textFill: '#1a1a1a',
        goldOutline: '#c5a028',
        bronzeShadow: '#5c4015',
        vineStem: '#32cd32',
        vineHighlight: '#98fb98',
        leafFill: '#39ff14',
        leafDark: '#006400',
        star: '#ffffff',
        comet: '#aaffaa'
    },
    leafSizeBase: 7.5,
    leafDensity: 0.35,
    animTime: 0
};

// Global variables for animation state
let mouse = { x: -1000, y: -1000, active: false, vx: 0, vy: 0 };
let stars: Star[] = [];
let comets: Comet[] = [];
let particles: Particle[] = [];
let letters: Letter[] = [];
// Global Camera Parallax (Smoothed Mouse)
let globalParallax = { x: 0, y: 0 };
const PARALLAX_BG_STRENGTH = 0.02;
const PARALLAX_TEXT_BASE_STRENGTH = 0.06;

function randomRange(min: number, max: number) { return Math.random() * (max - min) + min; }

class Star {
    x: number = 0;
    y: number = 0;
    size: number = 0;
    speed: number = 0;
    alpha: number = 0;
    alphaChange: number = 0;
    canvasWidth: number = 0;
    canvasHeight: number = 0;

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
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
    }
}

class Comet {
    active: boolean = false;
    trail: { x: number, y: number, alpha: number }[] = [];
    x: number = 0;
    y: number = 0;
    size: number = 0;
    vx: number = 0;
    vy: number = 0;
    canvasWidth: number = 0;
    canvasHeight: number = 0;

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
        this.trail.push({ x: this.x, y: this.y, alpha: 1 });
        if (this.y > this.canvasHeight + 50) this.active = false;

        for (let i = this.trail.length - 1; i >= 0; i--) {
            const p = this.trail[i]; p.alpha -= 0.05;
            if (p.alpha <= 0) { this.trail.splice(i, 1); continue; }
            ctx.fillStyle = `rgba(170, 255, 170, ${p.alpha})`;
            ctx.beginPath(); ctx.arc(p.x, p.y, this.size * p.alpha, 0, Math.PI * 2); ctx.fill();
        }
        ctx.fillStyle = '#fff'; ctx.shadowBlur = 10; ctx.shadowColor = '#39ff14';
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

    constructor(x: number, y: number) {
        this.x = x; this.y = y;
        this.vx = (Math.random() - 0.5) * 2; this.vy = (Math.random() - 0.5) * 2;
        this.life = 1; this.decay = Math.random() * 0.03 + 0.01;
        this.color = Math.random() > 0.5 ? '#39ff14' : '#c5a028';
        this.size = Math.random() * 3;
    }
    draw(ctx: CanvasRenderingContext2D) {
        this.x += this.vx; this.y += this.vy; this.life -= this.decay;
        if (this.life > 0) {
            ctx.globalAlpha = this.life; ctx.fillStyle = this.color;
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1;
        }
    }
}

class Leaf {
    x: number; y: number; baseAngle: number; size: number;
    swaySpeed: number; swayOffset: number;

    constructor(x: number, y: number, angle: number, size: number) {
        this.x = x; this.y = y; this.baseAngle = angle; this.size = size;
        this.swaySpeed = 1 + Math.random(); this.swayOffset = Math.random() * 10;
    }
    draw(ctx: CanvasRenderingContext2D, time: number, parentSwayX: number, parentSwayY: number, effectiveMouse: any) {
        const rotSway = Math.sin(time * this.swaySpeed + this.swayOffset) * 0.3;
        let currentAngle = this.baseAngle + rotSway;
        const drawX = this.x + parentSwayX; const drawY = this.y + parentSwayY;

        if (effectiveMouse && effectiveMouse.active) {
            const dx = effectiveMouse.x - drawX; const dy = effectiveMouse.y - drawY;
            const dist = Math.sqrt(dx * dx + dy * dy); const range = 150;
            if (dist < range) {
                const targetAngle = Math.atan2(dy, dx);
                const influence = (1 - dist / range) * 0.5;
                currentAngle = currentAngle * (1 - influence) + targetAngle * influence;
            }
        }
        ctx.save(); ctx.translate(drawX, drawY); ctx.rotate(currentAngle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(this.size, -this.size / 2.5, this.size * 1.8, -this.size / 4, this.size * 2.2, 0);
        ctx.bezierCurveTo(this.size * 1.8, this.size / 4, this.size, this.size / 2.5, 0, 0);
        const grad = ctx.createLinearGradient(0, 0, this.size * 2, 0);
        grad.addColorStop(0, config.colors.leafDark); grad.addColorStop(0.4, '#228b22'); grad.addColorStop(1, config.colors.leafFill);
        ctx.fillStyle = grad; ctx.fill(); ctx.restore();
    }
}

class VineSegment {
    start: { x: number, y: number }; end: { x: number, y: number };
    cp1: { x: number, y: number }; cp2: { x: number, y: number };
    isFront: boolean; leaves: Leaf[] = []; animOffset: number;

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

                // Tangent approximation
                const tx = (3 * Math.pow(1 - t, 2) * (this.cp1.x - this.start.x)) + (6 * (1 - t) * t * (this.cp2.x - this.cp1.x)) + (3 * t * t * (this.end.x - this.cp2.x));
                const ty = (3 * Math.pow(1 - t, 2) * (this.cp1.y - this.start.y)) + (6 * (1 - t) * t * (this.cp2.y - this.cp1.y)) + (3 * t * t * (this.end.y - this.cp2.y));
                const angle = Math.atan2(ty, tx);

                const sideAngle = angle + (Math.random() > 0.5 ? 1.2 : -1.2);
                this.leaves.push(new Leaf(cx, cy, sideAngle, config.leafSizeBase + Math.random() * 6));
            }
        }
    }
    draw(ctx: CanvasRenderingContext2D, time: number, effectiveMouse: any) {
        const swayX = Math.sin(time * 2 + this.animOffset) * 2;
        const swayY = Math.cos(time * 1.5 + this.animOffset) * 2;
        const d_cp1x = this.cp1.x + swayX; const d_cp1y = this.cp1.y + swayY;
        const d_cp2x = this.cp2.x - swayX; const d_cp2y = this.cp2.y + swayY;

        ctx.beginPath(); ctx.moveTo(this.start.x, this.start.y);
        ctx.bezierCurveTo(d_cp1x, d_cp1y, d_cp2x, d_cp2y, this.end.x, this.end.y);
        ctx.lineWidth = 3 + Math.sin(time * 3) * 0.4; ctx.strokeStyle = 'rgba(0,0,0,0.6)'; ctx.lineCap = 'round'; ctx.stroke();
        ctx.lineWidth = 1.9; ctx.strokeStyle = config.colors.vineStem; ctx.stroke();
        ctx.lineWidth = 0.75; ctx.strokeStyle = 'rgba(152, 251, 152, 0.4)'; ctx.stroke();
        this.leaves.forEach(leaf => leaf.draw(ctx, time, swayX * 0.5, swayY * 0.5, effectiveMouse));
    }
}

class Letter {
    char: string; x: number; y: number; size: number;
    vines: VineSegment[] = [];
    currentOffset: { x: number, y: number };
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
        ctx.font = `900 ${this.size}px 'Exo 2'`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round';
        ctx.lineWidth = this.size * 0.08; ctx.strokeStyle = config.colors.bronzeShadow; ctx.strokeText(this.char, this.x + 2, this.y + 2);
        ctx.lineWidth = this.size * 0.08; ctx.strokeStyle = config.colors.goldOutline; ctx.strokeText(this.char, this.x, this.y);
        ctx.lineWidth = this.size * 0.03; ctx.strokeStyle = '#ffe680'; ctx.strokeText(this.char, this.x, this.y);
        ctx.fillStyle = config.colors.textFill; ctx.fillText(this.char, this.x, this.y);
    }

    drawVinesBack(ctx: CanvasRenderingContext2D, time: number, effMouse: any) { this.vines.filter(v => !v.isFront).forEach(v => v.draw(ctx, time, effMouse)); }
    drawVinesFront(ctx: CanvasRenderingContext2D, time: number, effMouse: any) { this.vines.filter(v => v.isFront).forEach(v => v.draw(ctx, time, effMouse)); }
}

export default function HiddenEgg() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const [, navigate] = useLocation();

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
            ctx.font = `900 ${fontSize}px 'Exo 2'`;
            const charStride1 = fontSize * 0.85;
            const totalWidth1 = (line1.length - 1) * charStride1;
            const startX1 = (width - totalWidth1) / 2;
            const y1 = height / 2 - fontSize * 0.6;

            for (let i = 0; i < line1.length; i++) {
                letters.push(new Letter(line1[i], startX1 + (i * charStride1), y1, fontSize));
            }

            const line2 = config.lines[1];
            const fontSize2 = fontSize * 0.8;
            ctx.font = `900 ${fontSize2}px 'Exo 2'`;
            const charStride2 = fontSize2 * 0.85;
            const totalWidth2 = (line2.length - 1) * charStride2;
            const startX2 = (width - totalWidth2) / 2;
            const y2 = height / 2 + fontSize * 0.7;

            for (let i = 0; i < line2.length; i++) {
                letters.push(new Letter(line2[i], startX2 + (i * charStride2), y2, fontSize2));
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            config.animTime += 0.01;

            // --- 1. GLOBAL PARALLAX INPUT ---
            const rawTargetX = mouse.active ? (mouse.x - width / 2) : 0;
            const rawTargetY = mouse.active ? (mouse.y - height / 2) : 0;

            globalParallax.x += (rawTargetX - globalParallax.x) * 0.05;
            globalParallax.y += (rawTargetY - globalParallax.y) * 0.05;

            // Background moves slightly opposite
            const bgPx = globalParallax.x * PARALLAX_BG_STRENGTH * -1;
            const bgPy = globalParallax.y * PARALLAX_BG_STRENGTH * -1;

            // --- 2. DRAW BACKGROUND ---
            const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, width);
            bgGrad.addColorStop(0, '#111a14'); bgGrad.addColorStop(1, '#020302');
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

            // --- 3. PHYSICS & DRAWING TEXT ---
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

            // --- 4. DRAW CURSOR ---
            if (mouse.active) {
                ctx.beginPath(); ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
                ctx.fillStyle = '#fff'; ctx.shadowBlur = 10; ctx.shadowColor = '#39ff14';
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

        document.fonts.ready.then(() => {
            init();
            animate();
        });

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <>
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@900&display=swap');`}
            </style>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                backgroundColor: '#080c08',
                cursor: 'none'
            }}>

                <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    zIndex: 50,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer'
                }} onClick={() => navigate('/')}>
                    <img src="/SPC_logo.png" alt="Solarpunk Corps Logo" style={{ height: '32px', width: '32px', objectFit: 'contain' }} />
                    <span style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 'bold',
                        fontSize: '1.125rem',
                        color: 'white',
                        textShadow: '0 0 10px rgba(57, 255, 20, 0.5)'
                    }}>Solarpunk Corps</span>
                </div>

                <canvas ref={canvasRef} style={{ display: 'block' }} />
            </div>
        </>
    );
}
