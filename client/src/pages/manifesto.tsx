import React, { useRef } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sprout, Hammer, Globe, Heart, ArrowRight, Sun, Leaf } from "lucide-react";
import { Link } from "wouter";

export default function Manifesto() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    return (
        <div ref={containerRef} className="bg-stone-50 dark:bg-stone-900 min-h-screen text-stone-800 dark:text-stone-200 font-sans selection:bg-amber-100 dark:selection:bg-amber-900/30 selection:text-amber-900 dark:selection:text-amber-100">
            <Navigation />

            {/* HERO */}
            <header className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply dark:mix-blend-overlay"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />

                {/* Warm Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-[100px]" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center max-w-4xl space-y-8"
                >
                    <p className="font-mono text-stone-500 dark:text-stone-400 text-sm uppercase tracking-[0.4em]">
                        Solarpunk Corps — Manifesto
                    </p>
                    <h1 className="text-5xl md:text-8xl font-serif font-medium tracking-tight text-stone-900 dark:text-stone-50 leading-[1.1]">
                        We Begin With <br />
                        <span className="italic text-amber-700 dark:text-amber-200">A Refusal.</span>
                    </h1>
                </motion.div>
            </header>


            <div className="max-w-3xl mx-auto px-6 pb-32 space-y-32 relative z-10">

                {/* 1. THE REFUSAL */}
                <section className="space-y-12 text-center md:text-left">
                    <div className="space-y-6 text-xl md:text-2xl font-serif leading-relaxed text-stone-700 dark:text-stone-300">
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            We refuse the idea that collapse is inevitable.
                        </motion.p>
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            We refuse the comfort of cynicism dressed up as realism.
                        </motion.p>
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            We refuse a future designed only for profit, speed, and extraction.
                        </motion.p>
                    </div>

                    <div className="py-8 border-y border-stone-200 dark:border-stone-800">
                        <p className="text-lg md:text-xl font-medium text-stone-900 dark:text-stone-100">
                            The world is not broken beyond repair. <br />
                            <span className="text-stone-500 font-normal">It is mismanaged, unequal, and neglected — and those are solvable problems.</span>
                        </p>
                    </div>

                    <p className="font-mono text-sm text-stone-500 text-center">
                        Solarpunk Corps exists because giving up is the laziest prediction of the future.
                    </p>
                </section>


                {/* 1.5 WHAT WE MEAN */}
                <section className="space-y-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-stone-100 leading-tight">
                        What We Mean by
                        <span className="italic text-amber-700 dark:text-amber-200"> Solarpunk.</span>
                    </h2>

                    <div className="space-y-8 text-xl md:text-2xl font-serif leading-relaxed text-stone-700 dark:text-stone-300">
                        <p className="text-2xl md:text-3xl font-medium text-stone-900 dark:text-stone-50">
                            Solarpunk is not a style. <br />
                            <span className="text-stone-500">It is a stance toward the future.</span>
                        </p>

                        <div className="py-10 border-y border-stone-200 dark:border-stone-800 space-y-8 font-serif">
                            <p>
                                Solarpunk assumes that sustainability, equity, and technological progress are not contradictions.
                                It rejects futures built on artificial scarcity, endless extraction, and centralized control.
                            </p>
                            <p>
                                Solarpunk asks whether a system can endure — socially, environmentally, and ethically — without collapsing under its own cost.
                            </p>
                        </div>
                    </div>

                    <p className="font-serif italic text-2xl text-center text-stone-800 dark:text-stone-200">
                        A solarpunk future is not perfect. <br />
                        <span className="not-italic font-bold text-amber-700 dark:text-amber-400">It is repairable.</span>
                    </p>
                </section>


                {/* 2. TECHNOLOGY */}
                <section className="space-y-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-stone-100">
                        Technology Is Not Neutral — <br />
                        <span className="italic text-stone-500">It Chooses Sides.</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 pt-8">
                        <div className="bg-stone-100 dark:bg-stone-800/50 p-8 rounded-2xl">
                            <p className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-6">Legacy Engineering</p>
                            <ul className="space-y-4 text-stone-600 dark:text-stone-400">
                                <li>Dominate nature</li>
                                <li>Dominate resources</li>
                                <li>Dominate efficiency</li>
                                <li>Dominate scale</li>
                            </ul>
                            <p className="mt-8 font-bold text-stone-900 dark:text-white">SPC rejects this framing.</p>
                        </div>

                        <div>
                            <p className="text-xl leading-relaxed mb-6 font-medium text-amber-800 dark:text-amber-100">
                                We believe technology is a gardening tool, not a weapon of conquest.
                            </p>
                            <p className="text-stone-600 dark:text-stone-400 mb-6 font-serif italic">
                                Engineering, at its best, is cultivation:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 items-center"><Leaf size={16} className="text-green-600" /> Systems that regenerate instead of exhaust</li>
                                <li className="flex gap-3 items-center"><Heart size={16} className="text-rose-600" /> Tools that empower instead of alienate</li>
                                <li className="flex gap-3 items-center"><Globe size={16} className="text-blue-600" /> Infrastructure that serves people, not just markets</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-center italic text-stone-500 border-t border-stone-200 dark:border-stone-800 pt-8">
                        Silicon, steel, and code are not enemies of nature — irresponsible intent is.
                    </p>
                </section>


                {/* 3. DISPOSABLE FUTURES */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-bold uppercase tracking-tight text-center">Against Disposable Futures</h2>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                        <div className="text-right space-y-4">
                            <h3 className="font-serif italic text-stone-500">We stand against:</h3>
                            <ul className="space-y-2 text-stone-800 dark:text-stone-200 font-medium">
                                <li>Planned obsolescence</li>
                                <li>Sealed black boxes</li>
                                <li>Irreparable devices</li>
                                <li>Extractive supply chains</li>
                                <li>“Move fast and break things” thinking</li>
                            </ul>
                        </div>

                        <div className="w-px bg-stone-200 dark:bg-stone-700 hidden md:block mx-auto" />

                        <div className="text-left space-y-4">
                            <h3 className="font-serif italic text-amber-600 dark:text-amber-400">And we replace it with:</h3>
                            <ul className="space-y-2 text-stone-800 dark:text-stone-200 font-bold">
                                <li>Right to repair</li>
                                <li>Open systems</li>
                                <li>Transparent design</li>
                                <li>Longevity over novelty</li>
                                <li>Move deliberately and fix what exists</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 p-8 rounded-xl text-center font-mono text-sm md:text-base">
                        Progress that cannot be maintained is not progress — it is debt.
                    </div>
                </section>


                {/* 4. THE PUNK */}
                <section className="space-y-12">
                    <h2 className="text-4xl md:text-6xl font-serif text-stone-900 dark:text-stone-100 leading-tight">
                        The "Punk" Is Not <br /> An Aesthetic.
                    </h2>

                    <div className="prose dark:prose-invert prose-lg text-stone-600 dark:text-stone-400">
                        <p>
                            Solarpunk is often reduced to illustrations of green cities and glowing skylines.
                            That vision matters — but images don't build systems.
                        </p>
                        <p className="font-bold text-stone-900 dark:text-white block text-xl">
                            At SPC, punk means action.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: "DIY", desc: "when institutions move too slow" },
                            { title: "Learning across disciplines", desc: "instead of staying in silos" },
                            { title: "Building alternatives", desc: "instead of waiting for permission" },
                            { title: "Accepting imperfect prototypes", desc: "over perfect excuses" },
                        ].map((item, i) => (
                            <div key={i} className="border border-stone-200 dark:border-stone-700 p-6 rounded-lg hover:border-amber-400 transition-colors">
                                <h4 className="font-bold text-stone-900 dark:text-stone-100 mb-1">{item.title}</h4>
                                <p className="text-sm text-stone-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-2xl font-serif italic text-center text-stone-800 dark:text-stone-200">
                        "We are not here to imagine the future endlessly. <br /> We are here to prototype it."
                    </p>
                </section>


                {/* 5. WE BUILD */}
                <section className="space-y-8">
                    <h3 className="text-xl font-mono uppercase tracking-widest text-center mb-8">We Build With What We Have</h3>

                    <div className="space-y-6">
                        {[
                            { action: "We Scavenge", detail: "repurposing e-waste, scrap, and discarded tech into functional systems." },
                            { action: "We Sow", detail: "integrating biology, ecology, and sustainability into engineering decisions." },
                            { action: "We Range", detail: "using robotics, automation, and sensing to reach places humans cannot." },
                            { action: "We Teach", detail: "because knowledge hoarded is power wasted." },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 border-b border-stone-100 dark:border-stone-800 pb-4">
                                <span className="text-2xl font-bold font-serif text-amber-700 dark:text-amber-500 w-48 shrink-0">{item.action}</span>
                                <span className="text-stone-600 dark:text-stone-400">{item.detail}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-stone-500 text-sm text-center pt-8">
                        SPC is not a lab isolated from society. It is a workshop embedded in reality.
                    </p>
                </section>


                {/* 6. OPTIMISM */}
                <section className="py-20 text-center space-y-8 bg-amber-50 dark:bg-stone-800/30 -mx-6 px-6 rounded-3xl">
                    <Sun className="mx-auto text-amber-500 mb-4" size={48} />
                    <h2 className="text-4xl font-bold text-stone-900 dark:text-stone-100">Optimism Is Not Naivety</h2>

                    <p className="max-w-xl mx-auto text-stone-600 dark:text-stone-300">
                        We are not blind to poverty, inequality, environmental damage, political inertia, or institutional failure.
                        <br /><br />
                        Optimism does not deny these problems. It refuses to let them define the end of the story.
                    </p>

                    <div className="text-xl md:text-2xl font-serif italic text-stone-800 dark:text-stone-200 py-8">
                        Hope without action is escapism. <br />
                        Action without hope is burnout. <br />
                        <span className="text-sm font-sans not-italic text-stone-500 block mt-4">SPC exists in the tension between the two.</span>
                    </div>
                </section>


                {/* 7. INVITATION */}
                <section className="text-center space-y-12 pt-12">
                    <h2 className="text-3xl font-bold">This Is an Invitation, Not a Promise</h2>

                    <div className="space-y-6 text-lg text-stone-600 dark:text-stone-400">
                        <p>We don’t promise utopia. We don’t promise quick solutions. We don’t promise comfort.</p>
                        <div className="p-8 border-2 border-dashed border-stone-300 dark:border-stone-700 rounded-xl inline-block">
                            <p className="font-bold text-stone-900 dark:text-stone-100 uppercase tracking-widest text-sm mb-4">We Promise</p>
                            <ul className="space-y-2 font-medium">
                                <li>Honest work</li>
                                <li>Long-term thinking</li>
                                <li>Collective responsibility</li>
                                <li>A refusal to surrender imagination</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <p className="text-xl font-serif italic">
                            Engineers, artists, writers, designers, educators, and builders — <br />
                            If you believe the future is something we construct, not predict,
                        </p>

                        <h3 className="text-4xl md:text-6xl font-black uppercase text-stone-900 dark:text-white">
                            Welcome to <br /> Solarpunk Corps.
                        </h3>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                            <Link href="/membership">
                                <button className="px-8 py-4 bg-amber-600 text-white font-bold text-lg rounded-full hover:bg-amber-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-amber-500/20">
                                    Join The Corps <ArrowRight size={20} />
                                </button>
                            </Link>
                            <Link href="/projects">
                                <button className="px-8 py-4 border-2 border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 font-bold text-lg rounded-full hover:border-amber-600 transition-all">
                                    View Our Work
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                <footer className="text-center border-t border-stone-200 dark:border-stone-800 pt-16">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-stone-500">
                        The apocalypse is boring. Repair is radical. Optimism is a form of resistance.
                    </p>
                </footer>

            </div>

            <Footer />
        </div>
    );
}
