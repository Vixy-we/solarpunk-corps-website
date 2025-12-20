import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Banknote, Wrench, Mic, GraduationCap, Heart, Building2, CheckCircle2 } from "lucide-react";

type ContextType = {
    title: string;
    desc: string;
    placeholder: string;
    borderColor: string;
};

const contexts: Record<string, ContextType> = {
    inaugural: {
        title: "Which project interests you?",
        desc: "We are currently seeking partners for: 1) Solar Rover v1, 2) The Annual Magazine, 3) Community Tech Survey.",
        placeholder: "We are interested in sponsoring the Solar Rover chassis...",
        borderColor: "border-red-200"
    },
    microgrant: {
        title: "Define your Grant",
        desc: "What kind of project do you want to fund? (e.g., IoT, Sustainability, Robotics). What is your approximate budget?",
        placeholder: "We'd like to offer a ₹5,000 grant for the best 'Water Conservation' project...",
        borderColor: "border-green-200"
    },
    resources: {
        title: "In-Kind Donation",
        desc: "What equipment, software licenses, or materials can you provide?",
        placeholder: "We have 10 unused Arduino kits and some 3D printer filament...",
        borderColor: "border-amber-200"
    },
    knowledge: {
        title: "Host a Session",
        desc: "Are you interested in a technical workshop, career talk, or social impact lecture?",
        placeholder: "Our Senior Engineer can do a workshop on Embedded C...",
        borderColor: "border-blue-200"
    },
    talent: {
        title: "Hiring Needs",
        desc: "Are you looking for interns, freelancers, or full-time hires? What tech stack?",
        placeholder: "We need 2 Python interns for a 3-month summer project...",
        borderColor: "border-purple-200"
    },
    csr: {
        title: "Club Social Responsibility",
        desc: "Support our social outreach: Teaching kids, cleanup drives, plantation drives, or funding a documentary.",
        placeholder: "We'd like to fund a teaching workshop for underprivileged children...",
        borderColor: "border-teal-200"
    }
};

export default function Partner() {
    const [selectedPathway, setSelectedPathway] = useState<string | null>(null);

    // UI STATES
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [progress, setProgress] = useState(0);

    const [formData, setFormData] = useState({
        name: "",
        org: "",
        email: "",
        details: ""
    });

    useEffect(() => {
        setFormData(prev => ({ ...prev, details: "" }));
    }, [selectedPathway]);

    const handleCardClick = (type: string) => {
        setSelectedPathway(type);
        const element = document.getElementById("contact-section");
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
            alert("Please select an interest area first.");
            return;
        }

        setStatus('loading');
        setProgress(0);

        // Fake Progress Animation
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 90) return 90;
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 90);
            });
        }, 200);

        try {
            const timestamp = new Date().toISOString();

            const data = {
                timestamp,
                name: formData.name,
                organization: formData.org,
                email: formData.email,
                pathway: selectedPathway,
                details: formData.details
            };

            // PARTNER URL
            const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_PARTNER_URL;
            console.log("Partner Script URL:", scriptUrl);

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

            clearInterval(timer);
            setProgress(100);

            setTimeout(() => {
                setStatus('success');
                setFormData({ name: "", org: "", email: "", details: "" });
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
        <div id="partner-top" className="min-h-screen bg-[#FDFBF7] dark:bg-background text-gray-800 dark:text-foreground flex flex-col font-sans">
            <Navigation />

            {/* Hero Section */}
            <header className="relative pt-20 pb-16 px-6 text-center max-w-4xl mx-auto mt-16">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
                    <Building2 className="h-4 w-4" />
                    Corporate Partnership
                </div>
                <span className="text-green-700 font-bold tracking-widest text-xs uppercase mb-4 block">Building the Future Together</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-foreground mb-6 leading-tight font-serif">
                    Fuel the Movement.<br />
                    <span className="text-green-700 dark:text-green-500 italic font-light">Choose Your Impact.</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto leading-relaxed font-serif">
                    Solarpunk Corps is more than just a student club; it's a <strong>hub for an optimistic future</strong>.
                    We aren't looking for charity—we are looking for partners to build with us. From funding our inaugural rover to hiring our top talent, there is a role for you here.
                </p>
            </header>

            {/* The "Ways to Help" Grid */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">

                    {/* Card 1 */}
                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-border hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden" onClick={() => handleCardClick('inaugural')}>
                        <div className="absolute top-0 left-0 w-1 h-full bg-red-400"></div>
                        <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors"><Rocket className="h-6 w-6" /></div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2 font-serif">Sponsor Inaugural Projects</h3>
                        <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed mb-4">Directly fund our headline initiatives: The Solar Rover, Annual Magazine, or Community Survey.</p>
                        <span className="text-red-500 dark:text-red-400 text-sm font-semibold flex items-center">Power a Launch <span className="ml-1 transition-transform group-hover:translate-x-1">→</span></span>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-border hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden" onClick={() => handleCardClick('microgrant')}>
                        <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                        <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors"><Banknote className="h-6 w-6" /></div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2 font-serif">Project Micro-Grants</h3>
                        <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed mb-4">Want to see something specific built? Offer a small grant (₹2k-₹10k) for a custom student project.</p>
                        <span className="text-green-600 dark:text-green-400 text-sm font-semibold flex items-center">Fund Innovation <span className="ml-1 transition-transform group-hover:translate-x-1">→</span></span>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-border hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden" onClick={() => handleCardClick('resources')}>
                        <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                        <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors"><Wrench className="h-6 w-6" /></div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2 font-serif">Equip the Lab</h3>
                        <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed mb-4">Support us with in-kind donations: Spare hardware, sensors, software licenses, or cloud credits.</p>
                        <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold flex items-center">Donate Tools <span className="ml-1 transition-transform group-hover:translate-x-1">→</span></span>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-border hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden" onClick={() => handleCardClick('knowledge')}>
                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors"><Mic className="h-6 w-6" /></div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2 font-serif">Workshops & Lectures</h3>
                        <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed mb-4">Sponsor a workshop or send an expert for a guest lecture on Tech, Sustainability, or Social Work.</p>
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold flex items-center">Share Knowledge <span className="ml-1 transition-transform group-hover:translate-x-1">→</span></span>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-border hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden" onClick={() => handleCardClick('talent')}>
                        <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                        <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors"><GraduationCap className="h-6 w-6" /></div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2 font-serif">Hire Students</h3>
                        <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed mb-4">Our members are self-taught builders. Offer internships or project-based work to our best students.</p>
                        <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold flex items-center">Recruit Talent <span className="ml-1 transition-transform group-hover:translate-x-1">→</span></span>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-border hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden" onClick={() => handleCardClick('csr')}>
                        <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
                        <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors"><Heart className="h-6 w-6" /></div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2 font-serif">Fund CSR Initiatives</h3>
                        <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed mb-4">Under <strong>Club Social Responsibility</strong>, we conduct plantation drives, teach underprivileged kids, and more.</p>
                        <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold flex items-center">Support a Cause <span className="ml-1 transition-transform group-hover:translate-x-1">→</span></span>
                    </div>
                </div>
            </section>

            <div className="w-full max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4"></div>

            <section id="contact-section" className="max-w-3xl mx-auto px-6 py-16 w-full">
                <div className="bg-white dark:bg-card rounded-3xl shadow-xl border border-gray-100 dark:border-border overflow-hidden relative">
                    <div className="h-2 w-full bg-gradient-to-r from-green-700 via-green-500 to-green-700"></div>

                    <div className="p-8 md:p-12">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-2 font-serif">Let's Collaborate</h2>
                            <p className="text-gray-500 dark:text-muted-foreground">How would you like to get involved?</p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Input Fields (Name/Org) */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 dark:text-muted-foreground uppercase tracking-wide mb-2">Your Name</label>
                                    <input type="text" className="w-full bg-gray-50 dark:bg-secondary border border-gray-200 dark:border-input rounded-lg px-4 py-3 focus:bg-white dark:focus:bg-background focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-foreground" placeholder="Your Good Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 dark:text-muted-foreground uppercase tracking-wide mb-2">Organization</label>
                                    <input type="text" className="w-full bg-gray-50 dark:bg-secondary border border-gray-200 dark:border-input rounded-lg px-4 py-3 focus:bg-white dark:focus:bg-background focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-foreground" placeholder="Tech Labs Inc." value={formData.org} onChange={(e) => setFormData({ ...formData, org: e.target.value })} required />
                                </div>
                            </div>

                            {/* Interest Area Grid (Radio Buttons) */}
                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-muted-foreground uppercase tracking-wide mb-2">Interest Area</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    <label className="cursor-pointer">
                                        <input type="radio" name="contribution_type" value="inaugural" className="peer sr-only" checked={selectedPathway === 'inaugural'} onChange={(e) => handleRadioChange(e.target.value)} />
                                        <div className="border-2 border-gray-200 dark:border-border peer-checked:border-red-500 peer-checked:bg-red-50 dark:peer-checked:bg-red-900/20 rounded-lg p-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-muted h-full flex flex-col items-center justify-center">
                                            <span className="text-lg mb-1">🚀</span><span className="text-xs font-bold text-gray-700 dark:text-foreground">Inaugural</span>
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input type="radio" name="contribution_type" value="microgrant" className="peer sr-only" checked={selectedPathway === 'microgrant'} onChange={(e) => handleRadioChange(e.target.value)} />
                                        <div className="border-2 border-gray-200 dark:border-border peer-checked:border-green-500 peer-checked:bg-green-50 dark:peer-checked:bg-green-900/20 rounded-lg p-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-muted h-full flex flex-col items-center justify-center">
                                            <span className="text-lg mb-1">💸</span><span className="text-xs font-bold text-gray-700 dark:text-foreground">Micro-Grant</span>
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input type="radio" name="contribution_type" value="resources" className="peer sr-only" checked={selectedPathway === 'resources'} onChange={(e) => handleRadioChange(e.target.value)} />
                                        <div className="border-2 border-gray-200 dark:border-border peer-checked:border-amber-500 peer-checked:bg-amber-50 dark:peer-checked:bg-amber-900/20 rounded-lg p-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-muted h-full flex flex-col items-center justify-center">
                                            <span className="text-lg mb-1">🛠️</span><span className="text-xs font-bold text-gray-700 dark:text-foreground">Resources</span>
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input type="radio" name="contribution_type" value="knowledge" className="peer sr-only" checked={selectedPathway === 'knowledge'} onChange={(e) => handleRadioChange(e.target.value)} />
                                        <div className="border-2 border-gray-200 dark:border-border peer-checked:border-blue-500 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 rounded-lg p-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-muted h-full flex flex-col items-center justify-center">
                                            <span className="text-lg mb-1">🎤</span><span className="text-xs font-bold text-gray-700 dark:text-foreground">Lecture</span>
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input type="radio" name="contribution_type" value="talent" className="peer sr-only" checked={selectedPathway === 'talent'} onChange={(e) => handleRadioChange(e.target.value)} />
                                        <div className="border-2 border-gray-200 dark:border-border peer-checked:border-purple-500 peer-checked:bg-purple-50 dark:peer-checked:bg-purple-900/20 rounded-lg p-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-muted h-full flex flex-col items-center justify-center">
                                            <span className="text-lg mb-1">🎓</span><span className="text-xs font-bold text-gray-700 dark:text-foreground">Hiring</span>
                                        </div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input type="radio" name="contribution_type" value="csr" className="peer sr-only" checked={selectedPathway === 'csr'} onChange={(e) => handleRadioChange(e.target.value)} />
                                        <div className="border-2 border-gray-200 dark:border-border peer-checked:border-teal-500 peer-checked:bg-teal-50 dark:peer-checked:bg-teal-900/20 rounded-lg p-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-muted h-full flex flex-col items-center justify-center">
                                            <span className="text-lg mb-1">❤️</span><span className="text-xs font-bold text-gray-700 dark:text-foreground">CSR</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Details Box */}
                            <AnimatePresence>
                                {selectedPathway && contexts[selectedPathway] && (
                                    <motion.div key="details-box" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className={`bg-gray-50 dark:bg-muted rounded-xl border overflow-hidden transition-colors duration-300 ${contexts[selectedPathway].borderColor}`}>
                                        <div className="p-6">
                                            <motion.div key={selectedPathway} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                                                <h4 className="font-bold text-gray-800 dark:text-foreground mb-2">{contexts[selectedPathway].title}</h4>
                                                <p className="text-sm text-gray-500 dark:text-muted-foreground mb-4">{contexts[selectedPathway].desc}</p>
                                                <textarea rows={3} className="w-full bg-white dark:bg-card border border-gray-300 dark:border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-400 outline-none text-sm font-sans transition-all duration-200 dark:text-foreground" placeholder={contexts[selectedPathway].placeholder} value={formData.details} onChange={(e) => setFormData({ ...formData, details: e.target.value })}></textarea>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Email Input */}
                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-muted-foreground uppercase tracking-wide mb-2">Work Email</label>
                                <input type="email" className="w-full bg-gray-50 dark:bg-secondary border border-gray-200 dark:border-input rounded-lg px-4 py-3 focus:bg-white dark:focus:bg-background focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-foreground" placeholder="name@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                            </div>

                            {/* --- BUTTON REPLACEMENT AREA --- */}
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
                                            Submit Proposal
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
                                                Sending Proposal... {Math.round(progress)}%
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
                                                <h4 className="text-lg font-bold text-green-800 dark:text-green-400">Proposal Received!</h4>
                                                <p className="text-sm text-green-700 dark:text-green-300">
                                                    Thank you for reaching out. We will review your details and contact you shortly.
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