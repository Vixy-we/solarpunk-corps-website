import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Banknote, Wrench, Mic, GraduationCap, Heart, Check, Building2, Briefcase } from "lucide-react";

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

    const handlePathwaySelect = (type: string) => {
        setSelectedPathway(type);
        const element = document.getElementById("contact-section");
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: "smooth" });
            }, 100);
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

                    {/* Card 1: Inaugural Projects */}
                    <div
                        className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-border hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
                        onClick={() => handlePathwaySelect('inaugural')}
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-red-400"></div>
                        <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
                            <Rocket className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2 font-serif">Sponsor Inaugural Projects</h3>
                        <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed mb-4">
                            Directly fund our headline initiatives: The <strong className="text-gray-700 dark:text-gray-300">Solar Rover</strong>, our <strong className="text-gray-700 dark:text-gray-300">Annual Magazine</strong>, or the <strong className="text-gray-700 dark:text-gray-300">Community Survey</strong>.
                        </p>
                        <span className="text-red-500 dark:text-red-400 text-sm font-semibold flex items-center">
                            Power a Launch <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                        </span>
                    </div>

                    {/* Card 2: Micro-Grants */}
                    <div
                        className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-border hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
                        onClick={() => handlePathwaySelect('microgrant')}
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                        <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <Banknote className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2 font-serif">Project Micro-Grants</h3>
                        <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed mb-4">
                            Want to see something specific built? Offer a small grant (₹2k-₹10k) for a custom student project. You set the budget.
                        </p>
                        <span className="text-green-600 dark:text-green-400 text-sm font-semibold flex items-center">
                            Fund Innovation <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                        </span>
                    </div>

                    {/* Card 3: Resources */}
                    <div
                        className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-border hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
                        onClick={() => handlePathwaySelect('resources')}
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                        <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                            <Wrench className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2 font-serif">Equip the Lab</h3>
                        <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed mb-4">
                            Support us with in-kind donations: Spare hardware, sensors, software licenses, or cloud credits.
                        </p>
                        <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold flex items-center">
                            Donate Tools <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                        </span>
                    </div>

                    {/* Card 4: Knowledge */}
                    <div
                        className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-border hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
                        onClick={() => handlePathwaySelect('knowledge')}
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Mic className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2 font-serif">Workshops & Lectures</h3>
                        <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed mb-4">
                            Sponsor a workshop or send an expert for a guest lecture on Tech, Sustainability, or Social Work.
                        </p>
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold flex items-center">
                            Share Knowledge <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                        </span>
                    </div>

                    {/* Card 5: Talent */}
                    <div
                        className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-border hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
                        onClick={() => handlePathwaySelect('talent')}
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                        <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <GraduationCap className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2 font-serif">Hire Students</h3>
                        <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed mb-4">
                            Our members are self-taught builders. Offer internships or project-based work to our best students.
                        </p>
                        <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold flex items-center">
                            Recruit Talent <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                        </span>
                    </div>

                    {/* Card 6: CSR */}
                    <div
                        className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-border hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
                        onClick={() => handlePathwaySelect('csr')}
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
                        <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                            <Heart className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2 font-serif">Fund CSR Initiatives</h3>
                        <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed mb-4">
                            Under <strong>Club Social Responsibility</strong>, we conduct plantation drives, teach underprivileged kids, conduct seminars on social issues and more.
                        </p>
                        <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold flex items-center">
                            Support a Cause <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                        </span>
                    </div>

                </div>
            </section>

            {/* Context Divider */}
            <div className="w-full max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4"></div>

            {/* Dynamic "Collaboration" Form */}
            <section id="contact-section" className="max-w-3xl mx-auto px-6 py-16 w-full">
                <div className="bg-white dark:bg-card rounded-3xl shadow-xl border border-gray-100 dark:border-border overflow-hidden relative">
                    {/* Decorative Top Bar */}
                    <div className="h-2 w-full bg-gradient-to-r from-green-700 via-green-500 to-green-700"></div>

                    <div className="p-8 md:p-12">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-2 font-serif">Let's Collaborate</h2>
                            <p className="text-gray-500 dark:text-muted-foreground">How would you like to get involved?</p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            {/* Identity Section */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 dark:text-muted-foreground uppercase tracking-wide mb-2">Your Name</label>
                                    <input type="text" className="w-full bg-gray-50 dark:bg-secondary border border-gray-200 dark:border-input rounded-lg px-4 py-3 focus:bg-white dark:focus:bg-background focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-foreground" placeholder="Your Full Name" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 dark:text-muted-foreground uppercase tracking-wide mb-2">Organization</label>
                                    <input type="text" className="w-full bg-gray-50 dark:bg-secondary border border-gray-200 dark:border-input rounded-lg px-4 py-3 focus:bg-white dark:focus:bg-background focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-foreground" placeholder="Tech Labs Inc." />
                                </div>
                            </div>

                            {/* Dynamic Selection Area */}
                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-muted-foreground uppercase tracking-wide mb-2">Interest Area</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="contribution_type"
                                            value="inaugural"
                                            className="peer sr-only"
                                            checked={selectedPathway === 'inaugural'}
                                            onChange={(e) => handlePathwaySelect(e.target.value)}
                                        />
                                        <div className="border-2 border-gray-200 dark:border-border peer-checked:border-red-500 peer-checked:bg-red-50 dark:peer-checked:bg-red-900/20 rounded-lg p-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-muted h-full flex flex-col items-center justify-center">
                                            <span className="text-lg mb-1">🚀</span>
                                            <span className="text-xs font-bold text-gray-700 dark:text-foreground">Inaugural</span>
                                        </div>
                                    </label>

                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="contribution_type"
                                            value="microgrant"
                                            className="peer sr-only"
                                            checked={selectedPathway === 'microgrant'}
                                            onChange={(e) => handlePathwaySelect(e.target.value)}
                                        />
                                        <div className="border-2 border-gray-200 dark:border-border peer-checked:border-green-500 peer-checked:bg-green-50 dark:peer-checked:bg-green-900/20 rounded-lg p-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-muted h-full flex flex-col items-center justify-center">
                                            <span className="text-lg mb-1">💸</span>
                                            <span className="text-xs font-bold text-gray-700 dark:text-foreground">Micro-Grant</span>
                                        </div>
                                    </label>

                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="contribution_type"
                                            value="resources"
                                            className="peer sr-only"
                                            checked={selectedPathway === 'resources'}
                                            onChange={(e) => handlePathwaySelect(e.target.value)}
                                        />
                                        <div className="border-2 border-gray-200 dark:border-border peer-checked:border-amber-500 peer-checked:bg-amber-50 dark:peer-checked:bg-amber-900/20 rounded-lg p-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-muted h-full flex flex-col items-center justify-center">
                                            <span className="text-lg mb-1">🛠️</span>
                                            <span className="text-xs font-bold text-gray-700 dark:text-foreground">Resources</span>
                                        </div>
                                    </label>

                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="contribution_type"
                                            value="knowledge"
                                            className="peer sr-only"
                                            checked={selectedPathway === 'knowledge'}
                                            onChange={(e) => handlePathwaySelect(e.target.value)}
                                        />
                                        <div className="border-2 border-gray-200 dark:border-border peer-checked:border-blue-500 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 rounded-lg p-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-muted h-full flex flex-col items-center justify-center">
                                            <span className="text-lg mb-1">🎤</span>
                                            <span className="text-xs font-bold text-gray-700 dark:text-foreground">Lecture</span>
                                        </div>
                                    </label>

                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="contribution_type"
                                            value="talent"
                                            className="peer sr-only"
                                            checked={selectedPathway === 'talent'}
                                            onChange={(e) => handlePathwaySelect(e.target.value)}
                                        />
                                        <div className="border-2 border-gray-200 dark:border-border peer-checked:border-purple-500 peer-checked:bg-purple-50 dark:peer-checked:bg-purple-900/20 rounded-lg p-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-muted h-full flex flex-col items-center justify-center">
                                            <span className="text-lg mb-1">🎓</span>
                                            <span className="text-xs font-bold text-gray-700 dark:text-foreground">Hiring</span>
                                        </div>
                                    </label>

                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="contribution_type"
                                            value="csr"
                                            className="peer sr-only"
                                            checked={selectedPathway === 'csr'}
                                            onChange={(e) => handlePathwaySelect(e.target.value)}
                                        />
                                        <div className="border-2 border-gray-200 dark:border-border peer-checked:border-teal-500 peer-checked:bg-teal-50 dark:peer-checked:bg-teal-900/20 rounded-lg p-3 text-center transition-all hover:bg-gray-50 dark:hover:bg-muted h-full flex flex-col items-center justify-center">
                                            <span className="text-lg mb-1">❤️</span>
                                            <span className="text-xs font-bold text-gray-700 dark:text-foreground">CSR</span>
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
                                            <motion.div
                                                key={selectedPathway}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <h4 className="font-bold text-gray-800 dark:text-foreground mb-2">{contexts[selectedPathway].title}</h4>
                                                <p className="text-sm text-gray-500 dark:text-muted-foreground mb-4">{contexts[selectedPathway].desc}</p>
                                                <textarea
                                                    rows={3}
                                                    className="w-full bg-white dark:bg-card border border-gray-300 dark:border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-400 outline-none text-sm font-sans transition-all duration-200 dark:text-foreground"
                                                    placeholder={contexts[selectedPathway].placeholder}
                                                ></textarea>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-muted-foreground uppercase tracking-wide mb-2">Work Email</label>
                                <input type="email" className="w-full bg-gray-50 dark:bg-secondary border border-gray-200 dark:border-input rounded-lg px-4 py-3 focus:bg-white dark:focus:bg-background focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-foreground" placeholder="name@company.com" />
                            </div>

                            <button className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-all shadow-lg font-sans">
                                Submit Proposal
                            </button>
                            <p className="text-center text-sm text-gray-500 mt-4">
                                This feature will be added soon. Meanwhile, please use the <a href="/contact" className="text-green-600 hover:underline">Contact Us</a> page.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
