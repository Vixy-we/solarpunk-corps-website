import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "wouter";
import { ArrowDown } from "lucide-react";

export default function ExperienceSPC() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Scroll Indicator Logic (Hide when scrolling, show when idle)
    const [isIdle, setIsIdle] = useState(true);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const handleScroll = () => {
            setIsIdle(false);
            clearTimeout(timeout);
            timeout = setTimeout(() => setIsIdle(true), 3000); // Show again after 3s of inactivity
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeout);
        };
    }, []);

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 25, restDelta: 0.001 });

    // --- BACKGROUND COLOR TRANSITIONS ---
    // [P1, P2, P3(start), P3(end), P4(start), P4(end), P5]
    // Synced to text opacity peaks so colors hold while reading.
    const backgroundColor = useTransform(smoothProgress,
        [0, 0.23, 0.4, 0.52, 0.60, 0.82, 1],
        ["#050505", "#0f0c29", "#1e293b", "#1e293b", "#271a0c", "#271a0c", "#f0fdf4"]
    );

    // --- PHASE ANIMATIONS ---

    // PHASE 1: CONFUSION (0% - 15%)
    // Visible immediately, fades out as we transition to P2
    const p1Opacity = useTransform(smoothProgress, [0, 0.12, 0.17], [1, 1, 0]);
    const p1Blur = useTransform(smoothProgress, [0, 0.12], ["0px", "10px"]);
    const p1Scale = useTransform(smoothProgress, [0, 0.15], [1, 0.9]);

    // PHASE 2: THE CONFLICT (15% - 35%)
    // Start overlap with P1 (0.12), visible until 0.35
    const p2Opacity = useTransform(smoothProgress, [0.12, 0.17, 0.28, 0.33], [0, 1, 1, 0]);
    const p2Y = useTransform(smoothProgress, [0.12, 0.35], [50, -50]);

    // PHASE 3: THE FRAMEWORK (35% - 55%)
    // SHIFTED: Starts fading in at 0.28 (was 0.32/0.25 prev). Becomes full at 0.38
    const p3Opacity = useTransform(smoothProgress, [0.28, 0.38, 0.48, 0.6], [0, 1, 1, 0]);
    const p3GridScale = useTransform(smoothProgress, [0.28, 0.6], [1.2, 1]);

    // PHASE 4: THE PROTOTYPE (60% - 80%)
    // FIXED: Now stays visible through the entire 60-80% sticky section.
    // Fade IN: 0.55-0.65 | FULL: 0.65-0.85 | Fade OUT: 0.85-0.95
    const p4Opacity = useTransform(smoothProgress, [0.55, 0.60, 0.75, 0.85], [0, 1, 1, 0]);
    const p4Rotate = useTransform(smoothProgress, [0.55, 0.85], [-2, 2]);

    // PHASE 5: HOPE (80% - 100%)
    // Starts VERY late (0.92) to purely coincide with Green background.
    const p5Opacity = useTransform(smoothProgress, [0.82, 0.87, 0.92], [0, 1, 1]);

    // Dynamic Scroll Indicator Color
    const scrollColor = useTransform(smoothProgress,
        [0, 0.2, 0.4, 0.6, 0.8],
        ["rgba(255,255,255,0.4)", "rgba(165, 180, 252, 0.4)", "rgba(148, 163, 184, 0.4)", "rgba(253, 186, 116, 0.4)", "rgba(6, 78, 59, 0.3)"]
    );


    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ backgroundColor }}
            className="relative min-h-[1200vh] text-neutral-200 overflow-hidden font-serif selection:bg-emerald-500/30"
        >

            {/* PROGRESS INDICATOR */}
            <motion.div
                className="fixed top-0 left-0 h-1 bg-white/20 z-50 mix-blend-difference"
                style={{ width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
            />

            {/* --- PHASE 1: CONFUSION (Story: The Refusal) --- */}
            {/* --- PHASE 1: CONFUSION (Refined: Fragmented & Broken) --- */}
            <div className="relative z-10 h-[200vh]">
                <div className="sticky top-0 h-screen flex flex-col justify-center items-center p-6 mix-blend-difference overflow-hidden">
                    <motion.div style={{ opacity: p1Opacity, filter: useTransform(p1Blur, v => `blur(${v})`), scale: p1Scale }} className="max-w-6xl w-full relative">

                        {/* Fragmented Title with Independent Motion */}
                        <div className="relative h-[20rem] flex items-center justify-center font-bold tracking-tighter mb-12 select-none">
                            {"What is SPC?".split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    className="inline-block text-6xl md:text-[9rem] leading-none text-neutral-100 relative"
                                    animate={{
                                        y: [0, (i % 2 === 0 ? 1 : -1) * (Math.random() * 15), 0],
                                        opacity: [0.9, 1, 0.8],
                                        filter: [`blur(0px)`, `blur(${Math.random() * 2}px)`, `blur(0px)`]
                                    }}
                                    transition={{
                                        duration: 3 + Math.random() * 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.15
                                    }}
                                    style={{
                                        y: useTransform(smoothProgress, [0, 0.15], [0, (i % 3 === 0 ? -1 : 1) * 150])
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </div>

                        {/* Misaligned & Staggered Text Blocks */}
                        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 font-mono text-lg md:text-xl tracking-wide opacity-90 max-w-5xl mx-auto">

                            {/* Block 1: Left Aligned */}
                            <motion.div
                                className="md:col-span-5 text-left border-l-4 border-neutral-700/50 pl-6 py-2"
                                style={{ x: useTransform(smoothProgress, [0, 0.15], [0, -40]) }}
                            >
                                <p className="font-bold mb-2">You might be confused right now.</p>
                                <motion.div
                                    className="h-1 bg-red-500/50 w-12"
                                    animate={{ width: ["0%", "100%", "50%"] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                />
                            </motion.div>

                            {/* Block 2: Right Aligned & Offset */}
                            <motion.div
                                className="md:col-span-5 md:col-start-8 text-right pr-4"
                                style={{ x: useTransform(smoothProgress, [0, 0.15], [0, 60]), y: 40 }}
                            >
                                <p className="text-neutral-500 italic text-2xl">That’s not an accident.</p>
                            </motion.div>

                            {/* Block 3: Centered but Broken */}
                            <motion.div
                                className="md:col-span-8 md:col-start-3 mt-20 text-center"
                                animate={{ opacity: [0.6, 1, 0.7] }}
                                transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror", repeatDelay: 5 }}
                            >
                                <p className="text-xl md:text-3xl font-light leading-relaxed">
                                    Most things worth building don’t make immediate sense.
                                </p>
                                <div className="mt-4 flex justify-center gap-8 text-sm uppercase tracking-[0.3em] text-neutral-600">
                                    <span>[ Unshaped ]</span>
                                    <span>[ Unfinished ]</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom Emotion/Pull */}
                        <motion.div
                            className="absolute -bottom-48 left-0 w-full text-center text-xs uppercase tracking-[0.5em] opacity-40 mix-blend-exclusion"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            "I don’t know what this is… but something is pulling me downwards."
                        </motion.div>

                    </motion.div>
                </div>
            </div>


            {/* --- GAP 1 (The Refusal - LEVITATION) --- */}
            <div
                className="relative z-20 min-h-[80vh] flex items-start justify-center pt-10 p-8 text-center pointer-events-none"
            >
                <motion.div
                    className="max-w-2xl -mt-48"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <p className="text-2xl md:text-4xl font-light text-neutral-300 leading-relaxed">
                        Solarpunk was a refusal.<br />
                        <span className="text-neutral-500">A refusal to believe the future must be gray.</span>
                    </p>
                </motion.div>
            </div>

            {/* --- PHASE 2: THE CONFLICT (Story: Art vs Reality) --- */}
            <div className="relative z-10 h-[200vh]">
                <div className="sticky top-0 h-screen flex items-center justify-center p-6 overflow-hidden">
                    {/* Background Wireframes */}
                    <motion.div
                        className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{
                            backgroundImage: "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                            opacity: p2Opacity,
                            maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
                            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)"
                        }}
                    />

                    <motion.div style={{ opacity: p2Opacity, y: p2Y }} className="max-w-5xl relative z-10 w-full">
                        <div className="backdrop-blur-md bg-indigo-950/30 border border-indigo-500/20 p-8 md:p-16 rounded-2xl shadow-2xl">
                            <h2 className="text-4xl md:text-7xl font-bold mb-12 text-indigo-300 leading-tight">
                                Art imagines futures.<br />
                                <span className="text-white">Engineering builds them.</span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-16 text-lg md:text-xl text-indigo-100/80">
                                <div>
                                    <p className="mb-6">Solarpunk began in art. Paintings of cities covered in vines but powered by light. Pretty. Hopeful. Unreal.</p>
                                    <p>But Solarpunk was never meant to stay on canvas.</p>
                                </div>
                                <div className="border-l border-indigo-500/30 pl-8">
                                    <p className="italic text-white font-medium text-2xl mb-6">The moment Solarpunk enters technology, it stops being romantic.</p>
                                    <div className="text-indigo-200 space-y-1 font-mono uppercase tracking-widest text-sm">
                                        <p>It becomes Political.</p>
                                        <p>Economic.</p>
                                        <p>Ethical.</p>
                                        <p className="text-red-400 font-bold">Messy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>


            {/* --- GAP 2 (Values Over Goals - BREATHING) --- */}
            <div
                className="relative z-20 min-h-[80vh] flex items-start justify-center pt-10 p-8 text-center pointer-events-none"
            >
                <motion.div
                    className="max-w-3xl -mt-48"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <p className="text-2xl md:text-3xl font-mono text-indigo-200/80 leading-relaxed">
                        Clear goals create fast clubs.<br />
                        <span className="text-indigo-100 font-bold">Clear values create lasting movements.</span>
                    </p>
                </motion.div>
            </div>

            {/* --- PHASE 3: THE FRAMEWORK (Story: Not a box) --- */}
            <div className="relative z-10 h-[200vh]">
                <div className="sticky top-0 h-screen flex items-center justify-center p-6">
                    {/* Structured Grid Overlay */}
                    <motion.div
                        className="absolute inset-0 border-[20px] border-slate-700/20"
                        style={{ opacity: p3Opacity, scale: p3GridScale }}
                    />

                    <motion.div style={{ opacity: p3Opacity }} className="max-w-3xl text-center">
                        <p className="text-slate-400 text-sm uppercase tracking-[0.3em] mb-8">System Architecture</p>

                        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-slate-100">
                            Not a discipline.<br />A direction.
                        </h2>

                        {/* Grid Layout for Definitions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-5xl mx-auto mb-16">
                            {[
                                { title: "Robotics", desc: "Designing systems that assist, protect, and reduce unnecessary harm" },
                                { title: "AI", desc: "Supporting human judgment, not replacing responsibility" },
                                { title: "Sustainability", desc: "The base layer, not a feature" },
                                { title: "Community Work", desc: "Co-development, not charity" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="p-6 border border-slate-600/30 bg-slate-800/40 hover:bg-slate-700/50 transition-colors rounded-lg group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-2 h-2 bg-slate-400 rounded-full group-hover:bg-emerald-400 transition-colors" />
                                        <h3 className="text-xl font-bold text-slate-100">{item.title}</h3>
                                    </div>
                                    <p className="text-slate-400 group-hover:text-slate-200 transition-colors pl-5">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Staggered Quote Block */}
                        <div className="relative max-w-2xl mx-auto text-left">
                            <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-500 to-transparent" />
                            <motion.div
                                className="space-y-4 text-xl md:text-2xl font-light text-slate-200"
                                initial="hidden"
                                whileInView="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
                                }}
                            >
                                <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                                    "Technology must answer to <span className="text-emerald-300 font-normal">ecology</span>.
                                </motion.p>
                                <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                                    Innovation must answer to <span className="text-emerald-300 font-normal">people</span>.
                                </motion.p>
                                <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                                    Progress must answer to <span className="text-emerald-300 font-normal">dignity</span>."
                                </motion.p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>


            {/* --- GAP 3 (The Risk - JITTER/WARNING) --- */}
            <div
                className="relative z-20 min-h-[80vh] flex items-start justify-center pt-10 p-8 text-center pointer-events-none"
            >
                <motion.div
                    className="max-w-2xl -mt-48 bg-red-950/30 p-8 border-l-2 border-red-500/50 backdrop-blur-sm"
                    animate={{ x: [-1, 1, -1] }}
                    transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
                >
                    <p className="text-xl md:text-2xl text-red-200/90 italic font-serif">
                        "It can fail if it stays abstract for too long."
                    </p>
                </motion.div>
            </div>

            {/* --- PHASE 4: THE PROTOTYPE (Story: Living Prototype) --- */}
            <div className="relative z-10 h-[200vh]">
                <div className="sticky top-0 h-screen flex items-center justify-center p-6">

                    <motion.div style={{ opacity: p4Opacity, rotate: p4Rotate }} className="max-w-4xl text-center">
                        <motion.div
                            animate={{ rotate: [-1, 1, -1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            style={{ transformOrigin: "top center" }}
                        >
                            <motion.div
                                className="inline-block px-6 py-2 border-2 border-orange-500 bg-orange-900/20 text-orange-400 font-mono text-sm mb-12 relative overflow-hidden"
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-orange-500 animate-[loading_2s_linear_infinite]" />
                                ⚠ STATUS: WORK_IN_PROGRESS
                            </motion.div>

                            <h2 className="text-5xl md:text-8xl font-black mb-12 text-orange-50 tracking-tighter uppercase" style={{ fontFamily: '"Black Ops One", system-ui' }}>
                                <span className="block text-stroke-orange text-transparent" style={{ WebkitTextStroke: '1px #fed7aa', opacity: 0.7 }}>THE LIVING</span>
                                <span className="relative inline-block">
                                    PROTOTYPE
                                    <span className="absolute -inset-1 blur-sm bg-orange-500/20 rounded-lg -z-10 animate-pulse"></span>
                                </span>
                            </h2>

                            <p className="text-xl md:text-3xl text-orange-100/80 mb-16 max-w-3xl mx-auto leading-relaxed font-mono">
                                SPC comes from a simple, uncomfortable belief:<br />
                                <span className="bg-orange-500/20 text-orange-200 px-2 py-1">Waiting for perfect conditions is how futures die quietly.</span>
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {["PEOPLE", "LEARNING", "ACTION"].map((stage, i) => (
                                <motion.div
                                    key={i}
                                    className="border border-orange-500/30 bg-orange-900/10 p-6 text-left relative overflow-hidden group"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    animate={{ y: [0, 5, 0] }} // Gentle float
                                    transition={{
                                        y: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
                                        opacity: { duration: 0.5 }
                                    }}
                                >
                                    <div className="text-orange-500/40 text-xs font-mono mb-2">MODULE_0{i + 1}</div>
                                    <div className="text-xl font-bold text-orange-100 mb-4 tracking-widest">[{stage}]</div>

                                    {/* Loading Bar Animation */}
                                    <div className="w-full h-1 bg-orange-900/50">
                                        <motion.div
                                            className="h-full bg-orange-500"
                                            initial={{ width: "0%" }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 2, delay: 0.5 + (i * 0.5), ease: "circOut" }}
                                        />
                                    </div>
                                    <div className="absolute right-2 bottom-2 text-orange-500/20 text-[10px]">INITIALIZING...</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>


            {/* --- GAP 4 (The Promise - FLUX/MATERIALIZATION) --- */}
            <div
                className="relative z-20 min-h-[80vh] flex items-start justify-center pt-10 p-8 text-center pointer-events-none"
            >
                <motion.div
                    className="max-w-3xl -mt-48"
                    animate={{ opacity: [0.6, 1, 0.6], filter: ["blur(0px)", "blur(2px)", "blur(0px)"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <p className="text-3xl md:text-5xl font-black text-orange-100/20 uppercase tracking-tighter drop-shadow-2xl">
                        It looks unclear<br />
                        <span className="text-emerald-500/80">before it works.</span>
                    </p>
                </motion.div>
            </div>

            {/* --- PHASE 5: HOPE (Refined: Organic & Breathable) --- */}
            {/* Removed overflow-hidden to prevent cutting off top content. Added pt-20 for safety. */}
            <div className="relative z-10 h-[100vh] flex items-end justify-center p-6 pb-0 md:pb-6">

                {/* Background Ambient Glows */}
                <motion.div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{ opacity: p5Opacity }}
                >
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[100px]"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-yellow-200/20 rounded-full blur-[80px]"
                        animate={{ scale: [1, 1.3, 1], x: [0, 20, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                </motion.div>

                <motion.div style={{ opacity: p5Opacity }} className="relative z-10 max-w-5xl w-full text-center text-emerald-950">

                    <motion.div
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-6xl md:text-9xl font-bold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-emerald-800 to-teal-600 drop-shadow-sm pb-4 leading-tight">
                            Solarpunk Corps.
                        </h2>
                    </motion.div>

                    <p className="text-2xl md:text-4xl text-emerald-800/90 font-serif italic mb-12 max-w-4xl mx-auto leading-relaxed">
                        “This future feels possible.<br />I want to be part of it.”
                    </p>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-50 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-700" />
                        <div className="relative bg-white/40 backdrop-blur-md border border-white/50 p-10 md:p-14 rounded-3xl shadow-2xl shadow-emerald-900/5 max-w-2xl mx-auto mb-16 transition-transform duration-500 hover:scale-[1.01]">
                            <p className="text-xl md:text-2xl text-emerald-900 mb-10 font-light">
                                You don’t need to have all the answers to belong here.<br />
                                <span className="font-semibold text-emerald-700">You just need to care about the questions.</span>
                            </p>

                            <Link href="/">
                                <button className="relative px-12 py-6 bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-full text-xl font-bold shadow-lg shadow-emerald-600/20 overflow-hidden group/btn hover:shadow-emerald-600/40 hover:scale-105 transition-all duration-300">
                                    <span className="relative z-10 flex items-center gap-3">
                                        Join the Experiment
                                        <ArrowDown className="w-5 h-5 -rotate-90 group-hover/btn:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-4 text-emerald-900/40 text-sm uppercase tracking-widest pb-8">
                        <span>Established 2025</span>
                        <span className="w-1 h-1 bg-emerald-900/20 rounded-full" />
                        <span>BIET Jhansi</span>
                    </div>

                </motion.div>
            </div>

            {/* Scroll Indicator Container (Handles Position & End-of-Page Fade) */}
            <motion.div
                className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none"
                style={{ opacity: useTransform(smoothProgress, [0.9, 1], [1, 0]), color: scrollColor }}
            >
                {/* Scroll Indicator Content (Handles Idle Fade & Bounce) */}
                <motion.div
                    className="flex flex-col items-center gap-2"
                    animate={{
                        y: [0, 10, 0],
                        opacity: isIdle ? 1 : 0
                    }}
                    transition={{
                        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                        opacity: { duration: 0.5 }
                    }}
                >
                    <span className="text-[9px] uppercase tracking-[0.3em] font-light">Scroll</span>
                    <motion.div
                        className="w-[1px] h-12"
                        style={{ backgroundColor: scrollColor }}
                    />
                </motion.div>
            </motion.div>

        </motion.div >
    );
}
