import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type ContextType = {
    title: string;
    desc: string;
    placeholder: string;
    borderColor: string;
};

const contexts: Record<string, ContextType> = {
    mentorship: {
        title: "Share Your Expertise",
        desc: "We are looking for alumni to give guest talks or review our project plans. What is your area of expertise?",
        placeholder: "I work in embedded systems and can review your circuit designs...",
        borderColor: "border-blue-200"
    },
    material: {
        title: "Help Build Our Lab",
        desc: "We are starting with an empty room. Do you have old hardware, tools, or 3D printers to donate?",
        placeholder: "I have a few Raspberry Pi 3s and a soldering station collecting dust...",
        borderColor: "border-amber-200"
    },
    network: {
        title: "Open Doors",
        desc: "Can you help our founding members visit your company or connect us with industry experts?",
        placeholder: "My company hosts open days for students, I can arrange a visit...",
        borderColor: "border-purple-200"
    },
    financial: {
        title: "Seed Fund",
        desc: "Help us buy our first set of tools and materials. Any amount helps get us started.",
        placeholder: "I'd like to make a one-time donation to the startup fund...",
        borderColor: "border-green-200"
    },
    csr: {
        title: "The Angel",
        desc: "Fund CSR Initiatives Under Club Social Responsibility, we conduct plantation drives, teach underprivileged kids, conduct seminars on social issues and more.",
        placeholder: "We are interested in funding a plantation drive...",
        borderColor: "border-rose-200"
    }
};

export default function Alumni() {
    const [selectedPathway, setSelectedPathway] = useState<string | null>(null);

    // UI STATES: 'idle' | 'loading' | 'success' | 'error'
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [progress, setProgress] = useState(0);

    const [formData, setFormData] = useState({
        name: "",
        gradYear: "",
        email: "",
        details: ""
    });

    useEffect(() => {
        setFormData(prev => ({ ...prev, details: "" }));
    }, [selectedPathway]);

    const handleCardClick = (type: string) => {
        setSelectedPathway(type);
        const element = document.getElementById("reconnect-section");
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    };

    const handleRadioChange = (type: string) => {
        setSelectedPathway(type);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedPathway) {
            alert("Please select how you want to contribute first.");
            return;
        }

        // 1. Start Loading UI
        setStatus('loading');
        setProgress(0);

        // 2. Fake Progress Animation
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 90) return 90;
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 90);
            });
        }, 200);

        try {
            // Generate Timestamp here to match Partner code
            const timestamp = new Date().toISOString();

            const data = {
                timestamp,
                name: formData.name,
                gradYear: formData.gradYear,
                email: formData.email,
                pathway: selectedPathway,
                details: formData.details
            };

            // 3. The Actual Request (Using your ALUMNI Link)
            const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_ALUMNI_URL;
            console.log("Alumni Script URL:", scriptUrl);

            if (!scriptUrl) {
                throw new Error("Google Script URL is not defined in environment variables");
            }

            await fetch(
                scriptUrl,
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "text/plain" },
                    body: JSON.stringify(data)
                }
            );

            // 4. Request Done! Snap bar to 100%
            clearInterval(timer);
            setProgress(100);

            // 5. Small delay then show Success Message
            setTimeout(() => {
                setStatus('success');
                setFormData({ name: "", gradYear: "", email: "", details: "" });
                setSelectedPathway(null);
            }, 600);

        } catch (err) {
            console.error(err);
            clearInterval(timer);
            setStatus('idle');
            alert(err instanceof Error ? err.message : "Something went wrong. Please check your internet.");
        }
    };

    return (
        <div id="alumni-top" className="min-h-screen bg-[#FDFBF7] dark:bg-background text-gray-800 dark:text-foreground flex flex-col font-sans">
            <SEO
                title="Alumni Network"
                description="Connect with Solarpunk Corps. Mentorship, support, and networking alumni opportunities."
                keywords={["alumni", "network", "mentorship", "support", "donation", "connect", "graduates", "BIET Jhansi alumni"]}
            />
            <Navigation />

            {/* Hero Section */}
            <header className="relative pt-20 pb-16 px-6 text-center max-w-4xl mx-auto mt-16">
                <div className="absolute top-10 left-10 opacity-10 animate-pulse pointer-events-none">
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                </div>

                <span className="text-green-700 font-bold tracking-widest text-xs uppercase mb-4 block">To Our College Alumni</span>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-foreground mb-6 leading-tight font-serif">
                    Help Us Plant <br />the First Seeds.<br />
                    <span className="text-green-700 dark:text-green-500 italic font-light">Support the New Wave.</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto leading-relaxed font-serif">
                    Remember the spark you had as a student? The drive to build, hack, and create?
                    <strong> Solarpunk Corps</strong> is a <strong>new student initiative</strong> capturing that energy.
                    As we lay our foundation, we need the wisdom, mentorship, and support of those who walked these halls before us.
                </p>
            </header>

            {/* The "Ways to Give" Grid */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex flex-wrap justify-center gap-6">

                    {/* Card 1: Mentorship */}
                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-border hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] relative overflow-hidden" onClick={() => handleCardClick('mentorship')}>
                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2 font-serif">The Guide</h3>
                        <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed mb-4">We are starting from scratch. Help us avoid the pitfalls you faced. We need advisors and technical mentors.</p>
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold flex items-center">Share Wisdom <span className="ml-1 transition-transform group-hover:translate-x-1">→</span></span>
                    </div>

                    {/* Card 2: Material */}
                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-border hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] relative overflow-hidden" onClick={() => handleCardClick('material')}>
                        <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                        <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2 font-serif">The Builder</h3>
                        <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed mb-4">We are building our inventory from zero. You can help kickstart our clubroom with tools, equipment, or essential infrastructure.</p>
                        <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold flex items-center">Donate Gear <span className="ml-1 transition-transform group-hover:translate-x-1">→</span></span>
                    </div>

                    {/* Card 3: Network */}
                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-border hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] relative overflow-hidden" onClick={() => handleCardClick('network')}>
                        <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                        <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2 font-serif">The Bridge</h3>
                        <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed mb-4">Connect this new generation to the industry. Help arrange our first industrial visits or internships.</p>
                        <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold flex items-center">Connect Us <span className="ml-1 transition-transform group-hover:translate-x-1">→</span></span>
                    </div>

                    {/* Card 4: Financial */}
                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-border hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] relative overflow-hidden" onClick={() => handleCardClick('financial')}>
                        <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                        <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2 font-serif">The Gardener</h3>
                        <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed mb-4">New clubs have zero budget. Small contributions help us buy our first microcontroller or server.</p>
                        <span className="text-green-600 dark:text-green-400 text-sm font-semibold flex items-center">Fuel the Start <span className="ml-1 transition-transform group-hover:translate-x-1">→</span></span>
                    </div>

                    {/* Card 5: CSR */}
                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-border hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] relative overflow-hidden" onClick={() => handleCardClick('csr')}>
                        <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
                        <div className="w-12 h-12 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2 font-serif">The Angel</h3>
                        <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed mb-4">Fund CSR Initiatives Under Club Social Responsibility, we conduct plantation drives, teach underprivileged kids...</p>
                        <span className="text-rose-600 dark:text-rose-400 text-sm font-semibold flex items-center">Support a Cause <span className="ml-1 transition-transform group-hover:translate-x-1">→</span></span>
                    </div>

                </div>
            </section>

            {/* Context Divider */}
            <div className="w-full max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4"></div>

            {/* Dynamic "Reconnect" Form */}
            <section id="reconnect-section" className="max-w-3xl mx-auto px-6 py-16 w-full">
                <div className="bg-white dark:bg-card rounded-3xl shadow-xl border border-gray-100 dark:border-border overflow-hidden relative">

                    {/* Decorative Top Bar */}
                    <div className="h-2 w-full bg-gradient-to-r from-green-700 via-green-500 to-green-700"></div>

                    <div className="p-8 md:p-12">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-2 font-serif">Join Our Advisory Network</h2>
                            <p className="text-gray-500 dark:text-muted-foreground">How would you like to help us get off the ground?</p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Identity Section */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 dark:text-muted-foreground uppercase tracking-wide mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-50 dark:bg-secondary border border-gray-200 dark:border-input rounded-lg px-4 py-3 focus:bg-white dark:focus:bg-background focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-foreground"
                                        placeholder="Your Good Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 dark:text-muted-foreground uppercase tracking-wide mb-2">Graduation Year</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-50 dark:bg-secondary border border-gray-200 dark:border-input rounded-lg px-4 py-3 focus:bg-white dark:focus:bg-background focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-foreground"
                                        placeholder="2012"
                                        value={formData.gradYear}
                                        onChange={(e) => setFormData({ ...formData, gradYear: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>


                            {/* Dynamic Selection Area */}
                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-muted-foreground uppercase tracking-wide mb-2">I want to contribute by...</label>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="contribution_type"
                                            value="mentorship"
                                            className="peer sr-only"
                                            checked={selectedPathway === 'mentorship'}
                                            onChange={(e) => handleRadioChange(e.target.value)}
                                        />
                                        <div className="border-2 border-gray-200 dark:border-border peer-checked:border-blue-500 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 rounded-lg p-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-muted h-full flex flex-col items-center justify-center">
                                            <span className="text-2xl mb-1">🎓</span><span className="text-xs font-bold text-gray-700 dark:text-foreground">Mentoring</span>
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="contribution_type"
                                            value="material"
                                            className="peer sr-only"
                                            checked={selectedPathway === 'material'}
                                            onChange={(e) => handleRadioChange(e.target.value)}
                                        />
                                        <div className="border-2 border-gray-200 dark:border-border peer-checked:border-amber-500 peer-checked:bg-amber-50 dark:peer-checked:bg-amber-900/20 rounded-lg p-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-muted h-full flex flex-col items-center justify-center">
                                            <span className="text-2xl mb-1">🛠️</span><span className="text-xs font-bold text-gray-700 dark:text-foreground">Equipping</span>
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="contribution_type"
                                            value="network"
                                            className="peer sr-only"
                                            checked={selectedPathway === 'network'}
                                            onChange={(e) => handleRadioChange(e.target.value)}
                                        />
                                        <div className="border-2 border-gray-200 dark:border-border peer-checked:border-purple-500 peer-checked:bg-purple-50 dark:peer-checked:bg-purple-900/20 rounded-lg p-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-muted h-full flex flex-col items-center justify-center">
                                            <span className="text-2xl mb-1">🤝</span><span className="text-xs font-bold text-gray-700 dark:text-foreground">Connecting</span>
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="contribution_type"
                                            value="financial"
                                            className="peer sr-only"
                                            checked={selectedPathway === 'financial'}
                                            onChange={(e) => handleRadioChange(e.target.value)}
                                        />
                                        <div className="border-2 border-gray-200 dark:border-border peer-checked:border-green-500 peer-checked:bg-green-50 dark:peer-checked:bg-green-900/20 rounded-lg p-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-muted h-full flex flex-col items-center justify-center">
                                            <span className="text-2xl mb-1">🌱</span><span className="text-xs font-bold text-gray-700 dark:text-foreground">Sponsoring</span>
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="contribution_type"
                                            value="csr"
                                            className="peer sr-only"
                                            checked={selectedPathway === 'csr'}
                                            onChange={(e) => handleRadioChange(e.target.value)}
                                        />
                                        <div className="border-2 border-gray-200 dark:border-border peer-checked:border-rose-500 peer-checked:bg-rose-50 dark:peer-checked:bg-rose-900/20 rounded-lg p-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-muted h-full flex flex-col items-center justify-center">
                                            <span className="text-2xl mb-1">❤️</span><span className="text-xs font-bold text-gray-700 dark:text-foreground">CSR</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Dynamic Details Box */}
                            <AnimatePresence>
                                {selectedPathway && contexts[selectedPathway] && (
                                    <motion.div
                                        key="details-box"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`bg-gray-50 dark:bg-muted rounded-xl border overflow-hidden transition-colors duration-300 ${contexts[selectedPathway].borderColor}`}
                                    >
                                        <div className="p-6">
                                            <motion.div key={selectedPathway} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                                                <h4 className="font-bold text-gray-800 dark:text-foreground mb-2">{contexts[selectedPathway].title}</h4>
                                                <p className="text-sm text-gray-500 dark:text-muted-foreground mb-4">{contexts[selectedPathway].desc}</p>
                                                <textarea
                                                    rows={3}
                                                    className="w-full bg-white dark:bg-card border border-gray-300 dark:border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-400 outline-none text-sm font-sans transition-all duration-200 dark:text-foreground"
                                                    placeholder={contexts[selectedPathway].placeholder}
                                                    value={formData.details}
                                                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                                ></textarea>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-muted-foreground uppercase tracking-wide mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-gray-50 dark:bg-secondary border border-gray-200 dark:border-input rounded-lg px-4 py-3 focus:bg-white dark:focus:bg-background focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-foreground"
                                    placeholder="you@company.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            {/* --- LOADING & SUCCESS STATE BUTTON --- */}
                            <div className="relative overflow-hidden rounded-xl">
                                <AnimatePresence mode="wait">
                                    {/* STATE 1: IDLE BUTTON */}
                                    {status === 'idle' && (
                                        <motion.button
                                            key="submit-btn"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-all shadow-lg font-sans"
                                        >
                                            Sign Up as a Supporter
                                        </motion.button>
                                    )}

                                    {/* STATE 2: LOADING BAR */}
                                    {status === 'loading' && (
                                        <motion.div
                                            key="loading-bar"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="w-full h-14 bg-gray-100 dark:bg-muted rounded-xl relative overflow-hidden flex items-center justify-center border border-gray-200 dark:border-input"
                                        >
                                            <motion.div
                                                className="absolute left-0 top-0 bottom-0 bg-green-500/20 dark:bg-green-900/40 border-r-2 border-green-500"
                                                initial={{ width: "0%" }}
                                                animate={{ width: `${progress}%` }}
                                                transition={{ ease: "linear" }}
                                            />
                                            <span className="relative z-10 text-sm font-bold text-green-700 dark:text-green-400 animate-pulse">
                                                Connecting... {Math.round(progress)}%
                                            </span>
                                        </motion.div>
                                    )}

                                    {/* STATE 3: SUCCESS MESSAGE */}
                                    {status === 'success' && (
                                        <motion.div
                                            key="success-msg"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="w-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center"
                                        >
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="h-10 w-10 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-1">
                                                    <CheckCircle2 className="h-6 w-6" />
                                                </div>
                                                <h4 className="text-lg font-bold text-green-800 dark:text-green-400">Welcome Aboard!</h4>
                                                <p className="text-sm text-green-700 dark:text-green-300">
                                                    Thank you a lot for helping us build SPC. We will contact you soon.
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}