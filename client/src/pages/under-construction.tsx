import { Link } from "wouter";
import { motion } from "framer-motion";

export default function UnderConstruction() {
    return (
        <div className="min-h-screen bg-black text-yellow-500 font-mono flex flex-col items-center justify-center p-4 overflow-hidden relative selection:bg-red-500 selection:text-white">

            {/* Background Chaos Patterns (Low Opacity) */}
            <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#333_10px,#333_20px)]" />
                <motion.div
                    className="absolute top-0 left-0 w-full h-2 bg-red-500/50"
                    animate={{ y: ["0%", "100%", "0%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Flying Debris Layer (High Opacity) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden pb-20">
                {/* Flying Squares */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`square-${i}`}
                        className="absolute w-12 h-12 border-2 border-yellow-500 bg-yellow-500/20 backdrop-blur-sm"
                        style={{ top: `${(i * 12) + Math.random() * 5}%` }}
                        initial={{ x: "-10vw", rotate: 0 }}
                        animate={{
                            x: "110vw",
                            rotate: 360
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                    />
                ))}

                {/* Floating Code Snippets */}
                {["ERROR", "NULL", "0x5F", "NaN", "SEGFAULT", "404", "VOID", "PANIC"].map((text, i) => (
                    <motion.div
                        key={`text-${i}`}
                        className="absolute text-sm font-bold font-mono text-red-500 bg-black/50 px-2"
                        style={{ top: `${(i * 10) + Math.random() * 5}%` }}
                        initial={{ x: "110vw" }}
                        animate={{ x: "-10vw" }}
                        transition={{
                            duration: Math.random() * 15 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                    >
                        {text}
                    </motion.div>
                ))}
            </div>

            {/* Glitchy Header */}
            <motion.div
                className="relative z-10 text-center mb-16"
                animate={{ x: [-2, 2, -2, 0] }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
            >
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-transparent text-stroke-2 text-stroke-yellow-500 opacity-90">
                    WNR_RNG
                </h1>
                <h1 className="absolute top-0 left-0 w-full text-6xl md:text-9xl font-black uppercase tracking-tighter text-red-600 mix-blend-difference blur-[2px] animate-pulse">
                    WARNING
                </h1>
                <p className="mt-4 text-xs md:text-sm bg-yellow-500 text-black px-2 py-1 inline-block uppercase font-bold tracking-[0.5em]">
                    Experimental Zone // Unstable
                </p>
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 max-w-2xl w-full border-2 border-dashed border-red-500/50 p-8 md:p-12 bg-black/80 backdrop-blur-sm">

                {/* Decorative Corner Markers */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-500" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-500" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-500" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-500" />

                <p className="text-lg md:text-xl text-neutral-400 mb-12 text-center leading-relaxed">
                    You are entering a <span className="text-red-500 font-bold">visceral workspace</span>.
                    Visuals may be unfinished, raw, or vertically challenging.
                    <br /><br />
                    <span className="text-xs font-mono text-neutral-600 block mt-2">
                        ERR_CODE: 504_GATEWAY_TO_FUTURE
                    </span>
                </p>

                {/* Navigation Options */}
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">

                    {/* Option 1: Safety */}
                    <Link href="/">
                        <button className="group relative px-8 py-4 border border-neutral-700 hover:border-yellow-500 transition-colors w-full md:w-auto">
                            <span className="text-neutral-500 group-hover:text-yellow-500 text-sm tracking-widest uppercase transition-colors">
                                &lt; Go Back
                            </span>
                        </button>
                    </Link>

                    {/* Option 2: Adventure */}
                    <Link href="/experience-spc">
                        <button className="relative px-8 py-4 bg-red-600 hover:bg-red-700 text-black font-bold uppercase tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] w-full md:w-auto">
                            <span className="relative z-10 flex items-center gap-2">
                                Check Page Nevertheless
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-20"></span>
                            </span>
                        </button>
                    </Link>

                </div>
            </div>

            {/* Bottom Disclaimer */}
            <div className="fixed bottom-4 left-0 w-full text-center text-[10px] text-neutral-800 uppercase tracking-widest">
                System Status: [Building]
            </div>

            <style>{`
                .text-stroke-2 {
                    -webkit-text-stroke: 2px currentColor;
                }
            `}</style>
        </div>
    );
}
