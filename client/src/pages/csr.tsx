import React, { useState, useEffect } from "react";
import { Leaf, Heart, Users, Lightbulb, BookOpen, ChevronDown, ChevronUp, Wind, Sun, X, MessageSquarePlus } from "lucide-react";
import { useLocation, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";

const BackgroundDecoration: React.FC = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-background transition-colors duration-500" />
        {/* Abstract Organic Blob 1 */}
        <svg className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] text-green-50/50 fill-current opacity-60"
            viewBox="0 0 200 200">
            <path
                d="M45.7,-76.3C58.9,-69.3,69.1,-55.5,77.3,-41.2C85.5,-26.9,91.7,-12,89.6,1.9C87.5,15.8,77.1,28.7,66.4,39.6C55.7,50.5,44.7,59.4,32.6,65.3C20.5,71.2,7.3,74.1,-4.6,82.1C-16.5,90.1,-27.1,103.2,-36.8,100.8C-46.5,98.4,-55.3,80.5,-63.4,66.1C-71.5,51.7,-78.9,40.8,-83.1,28.9C-87.3,17,-88.3,4.1,-84.4,-7.1C-80.5,-18.3,-71.7,-27.8,-62.4,-36.6C-53.1,-45.4,-43.3,-53.5,-32.7,-61.8C-22.1,-70.1,-10.7,-78.6,2.2,-82.4C15.1,-86.2,32.5,-101.3,45.7,-76.3Z"
                transform="translate(100 100)" />
        </svg>
        {/* Abstract Organic Blob 2 */}
        <svg className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] text-stone-100 dark:text-zinc-900 fill-current"
            viewBox="0 0 200 200">
            <path
                d="M42.7,-72.8C54.6,-67.2,63.1,-54.3,70.3,-41.1C77.5,-27.9,83.4,-14.4,81.3,-1.2C79.2,12,69.1,24.9,59.3,36.1C49.5,47.3,40,56.8,28.8,63.6C17.6,70.4,4.7,74.5,-7.2,87C-19.1,99.5,-30,120.4,-40.5,119.5C-51,118.6,-61.1,95.9,-67.2,76.5C-73.3,57.1,-75.4,41,-78.4,26.1C-81.4,11.2,-85.3,-2.5,-82.7,-14.8C-80.1,-27.1,-71,-38,-60.7,-46.3C-50.4,-54.6,-38.9,-60.3,-27.6,-66.2C-16.3,-72.1,-5.2,-78.2,4.9,-86.7C15,-95.2,28.3,-97.5,42.7,-72.8Z"
                transform="translate(100 100)" />
        </svg>
    </div>
);

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id = "" }) => (
    <section id={id} className={`px-4 md:px-6 py-20 md:py-32 max-w-4xl mx-auto ${className}`}>
        {children}
    </section>
);

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
        {children}
    </motion.div>
);

interface InitiativeCardProps {
    icon: React.ElementType;
    title: string;
    items: string[];
    subtitle: string;
    color: string;
    accent: string;
    onClick: () => void;
    layoutId: string;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({ icon: Icon, title, items, subtitle, color, accent, onClick, layoutId }) => (
    <motion.div
        layoutId={layoutId}
        onClick={onClick}
        className="group relative h-auto min-h-[280px] md:h-80 rounded-[24px] md:rounded-[32px] cursor-pointer overflow-hidden border border-border bg-card/70 backdrop-blur-md shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
        whileHover={{ y: -8 }}
    >
        {/* Baseline Themed Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700`} />

        {/* Large Background Decorative Icon */}
        <div className={`absolute -right-8 -bottom-8 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-700 ${accent}`}>
            <Icon size={200} strokeWidth={0.5} />
        </div>

        {/* Top Accent Line */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${color} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="relative p-6 md:p-8 h-full flex flex-col justify-between z-10 gap-6 md:gap-0">
            <div>
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-background shadow-md border border-border flex items-center justify-center mb-6 ${accent}`}>
                    <Icon size={24} strokeWidth={1.5} className="md:w-7 md:h-7" />
                </div>

                <h3 className="font-sans font-bold tracking-tight text-2xl md:text-3xl text-foreground mb-2 leading-tight">{title}</h3>
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${color}`} />
                    <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">{subtitle}</p>
                </div>
            </div>

            <div className="flex justify-between items-end">
                <div className="space-y-1">
                    <div className="w-12 h-0.5 bg-border rounded-full" />
                    <div className="w-8 h-0.5 bg-border/50 rounded-full" />
                </div>
                <div className="text-[10px] font-bold text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-widest">
                    View Details
                </div>
            </div>
        </div>
    </motion.div>
);

interface DetailOverlayProps {
    initiative: typeof initiatives[0];
    onClose: () => void;
    layoutId: string;
    isClosing: boolean;
}

const DetailOverlay: React.FC<DetailOverlayProps> = ({ initiative: init, onClose, layoutId, isClosing }) => (
    <>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-[100] cursor-zoom-out"
        />
        <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
                layoutId={isClosing ? undefined : layoutId}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, transition: { duration: 0 } }}
                className="w-full max-w-4xl max-h-[90vh] md:max-h-none bg-card/80 backdrop-blur-3xl rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl pointer-events-auto relative border border-border flex flex-col md:block" // Changed: Added flex-col and max-h for mobile scrolling
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Top Accent Line - Mirror Card */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${init.color} z-20`} />

                {/* Large Background Decorative Icon - Mirror Card */}
                <div className={`absolute -right-20 -bottom-20 opacity-[0.03] z-0 ${init.accent}`}>
                    <init.icon size={500} strokeWidth={0.5} />
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-8 md:right-8 p-2 md:p-3 rounded-full bg-background/50 backdrop-blur-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all z-30 group shadow-sm border border-border/50"
                >
                    <X size={20} className="transition-transform group-hover:rotate-90" />
                </button>

                <div className="grid md:grid-cols-[1fr_1.5fr] min-h-[500px] relative z-10 overflow-y-auto md:overflow-visible custom-scrollbar"> {/* Changed: Added overflow-y-auto for mobile */}
                    {/* Thematic Header Area */}
                    <div className={`relative p-8 md:p-12 flex flex-col justify-end min-h-[200px] md:min-h-full border-b md:border-b-0 md:border-r border-border/50`}>
                        {/* Soft Gradient Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${init.color} opacity-10`} />

                        <div className="relative z-10">
                            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-[24px] bg-background shadow-lg border border-border flex items-center justify-center mb-6 md:mb-8 ${init.accent}`}>
                                <init.icon size={32} strokeWidth={1.5} className="md:w-10 md:h-10" />
                            </div>

                            <h2 className="font-sans font-bold tracking-tight text-3xl md:text-5xl mb-2 md:mb-4 text-foreground leading-tight">{init.title}</h2>
                            <div className="flex items-center gap-2">
                                <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${init.color}`} />
                                <p className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">{init.subtitle}</p>
                            </div>
                        </div>
                    </div>

                    {/* Details Content */}
                    <div className="p-6 md:p-16 flex flex-col justify-center bg-background/30 backdrop-blur-sm">
                        <div className="mb-8 md:mb-10">
                            <h3 className="text-muted-foreground/40 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 md:mb-8">Strategic Initiatives</h3>
                            <ul className="space-y-4 md:space-y-6">
                                {init.items.map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.1 }}
                                        className="flex items-start gap-3 md:gap-5 group"
                                    >
                                        <div className={`mt-2 w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-gradient-to-br ${init.color} flex-shrink-0 shadow-sm`} />
                                        <span className="text-foreground/90 font-light leading-relaxed text-base md:text-xl">
                                            {item}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {init.id === 'idea' ? (
                            <Link href="/contact" onClick={onClose}>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-background shadow-md border border-border group/btn cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
                                >
                                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${init.color} opacity-40`} />
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span className="text-xl md:text-2xl font-serif text-muted-foreground/20 block mb-2">“</span>
                                            <span className="text-foreground/90 font-bold text-lg md:text-2xl tracking-tight leading-relaxed">
                                                {init.philosophy}
                                            </span>
                                        </div>
                                        <div className={`p-3 md:p-4 rounded-2xl bg-gradient-to-br ${init.color} text-white shadow-lg transition-transform group-hover/btn:scale-110`}>
                                            <MessageSquarePlus size={20} className="md:w-6 md:h-6" />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-background shadow-md border border-border italic font-light text-muted-foreground leading-relaxed relative overflow-hidden text-sm md:text-base"
                            >
                                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${init.color} opacity-40`} />
                                <span className="text-xl md:text-2xl font-serif text-muted-foreground/20 block mb-2">“</span>
                                {init.philosophy}
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    </>
);

const FaqItem: React.FC<{ question: string; answer: React.ReactNode; isOpen: boolean; onToggle: () => void }> = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className="border-b border-border">
            <button onClick={onToggle} className="w-full text-left py-6 flex justify-between items-center transition-colors">
                <span className={`text-lg font-medium transition-colors pr-8 ${isOpen ? 'text-primary' : 'text-foreground/80'}`}>
                    {question}
                </span>
                <ChevronDown className={`text-muted-foreground/50 transition-transform duration-500 ${isOpen ? 'rotate-180 text-primary' : ''}`} size={20} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 text-muted-foreground leading-relaxed font-light whitespace-pre-line">{answer}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const initiatives = [
    {
        id: "env",
        title: "Environmental Responsibility",
        icon: Leaf,
        color: "from-emerald-400 to-teal-600",
        accent: "text-emerald-500",
        items: [
            "Campus and neighborhood cleanliness drives",
            "Tree plantation and urban greening efforts",
            "Waste segregation and sustainability awareness",
            "Low-cost sustainability experiments (rainwater, composting, solar demos)"
        ],
        subtitle: "Practical Impact",
        philosophy: "These are not symbolic acts. They align directly with solarpunk values."
    },
    {
        id: "edu",
        title: "Educational & Knowledge Equity",
        icon: BookOpen,
        color: "from-blue-400 to-indigo-600",
        accent: "text-blue-500",
        items: [
            "Teaching underprivileged children",
            "Free workshops (basic science, robotics curiosity, digital literacy)",
            "Mentorship sessions for school students",
            "Open-access notes, guides, and explainer content"
        ],
        subtitle: "Knowledge Flow",
        philosophy: "This is not charity. It is knowledge redistribution."
    },
    {
        id: "soc",
        title: "Social Awareness & Storytelling",
        icon: Users,
        color: "from-rose-400 to-pink-600",
        accent: "text-rose-500",
        items: [
            "Awareness campaigns (mental health, environment, tech misuse, civic sense)",
            "Short documentaries and visual storytelling",
            "Articles, blogs, zines, and long-form writing",
            "Street-style presentations and poster exhibitions"
        ],
        subtitle: "Empathy & Stories",
        philosophy: "This is where ideas meet empathy — and where stories matter as much as solutions."
    },
    {
        id: "com",
        title: "Community & NGO Collaboration",
        icon: Heart,
        color: "from-amber-400 to-orange-600",
        accent: "text-amber-500",
        items: [
            "Volunteering with NGOs (environmental, educational, social)",
            "Supporting existing initiatives instead of duplicating effort",
            "Providing technical help to NGOs (websites, data handling, simple automation)"
        ],
        subtitle: "Amplify Voice",
        philosophy: "CSR does not mean doing everything alone. It means knowing when to support and amplify."
    },
    {
        id: "tech",
        title: "Tech-for-Good Initiatives",
        icon: Lightbulb,
        color: "from-cyan-400 to-sky-600",
        accent: "text-cyan-500",
        items: [
            "Low-cost assistive or socially useful devices",
            "Open-source tools for public benefit",
            "Robotics and automation only where they genuinely help",
            "Sustainable tech demonstrations instead of flashy, hollow builds"
        ],
        subtitle: "Meaningful Tech",
        philosophy: "The path to better technology is not more tech, but more purposeful tech."
    },
    {
        id: "idea",
        title: "Your Idea",
        icon: MessageSquarePlus,
        color: "from-violet-400 to-fuchsia-600",
        accent: "text-violet-500",
        items: [
            "Submit problems worth addressing",
            "Pitch ideas for positive social impact",
            "Collaborate on early-stage concepts",
            "Get support for intent-driven curiosity"
        ],
        subtitle: "Community-Driven Impact",
        philosophy: "Have an Idea? Let’s Talk."
    }
];

const faqs = [
    {
        question: "Isn’t this just NSS with branding?",
        answer: (
            <div className="space-y-4">
                <p>Our college does not have an NSS unit. There is a real void when it comes to structured, student-led social responsibility, and SPC aims to fill that gap thoughtfully.</p>
                <p><strong className="text-foreground font-bold underline decoration-primary/30 underline-offset-4">CSR at SPC is different.</strong> It integrates technology, creativity, storytelling, and systems thinking into the act of giving back. It's not just about volunteering; it's about innovating for others.</p>
            </div>
        )
    },
    {
        question: "Is this too non-technical for a tech-focused club?",
        answer: (
            <div className="space-y-4">
                <p>It can be — if CSR remains symbolic or disconnected from learning. That’s why SPC focuses on <strong className="text-foreground font-medium">tech-enabled impact</strong>, documentation, and reflection.</p>
                <p>CSR here complements technical growth. It provides a real-world testing ground for your skills where the stakes are human, not just digital.</p>
            </div>
        )
    },
    {
        question: "Are you trying to do too many things at once?",
        answer: (
            <div className="space-y-4">
                <p>That’s a valid concern. SPC does not attempt to run all initiatives simultaneously.</p>
                <p><strong className="text-foreground font-medium">Focus is priority.</strong> CSR activities are rotated and focused per semester, ensuring depth and genuine impact over superficial breadth.</p>
            </div>
        )
    },
    {
        question: "Shouldn’t students focus on careers instead?",
        answer: (
            <div className="space-y-4">
                <p>Careers matter — but responsibility, communication, leadership, and ethical grounding matter too.</p>
                <p>CSR at SPC exists for those who believe that being <strong className="text-foreground font-medium italic">technically skilled</strong> and <strong className="text-foreground font-medium italic">socially aware</strong> should not be mutually exclusive.</p>
            </div>
        )
    },
    {
        question: "Is participation in CSR mandatory for SPC members?",
        answer: (
            <div className="space-y-4">
                <p className="text-2xl font-bold text-primary italic">No.</p>
                <p>CSR at Solarpunk Corps is voluntary by design. Members participate based on interest, availability, and belief — not obligation.</p>
                <p>We value genuine intent over forced participation, because <strong className="text-foreground font-medium">responsibility only matters when it’s chosen.</strong></p>
            </div>
        )
    },
    {
        question: "How does CSR help me? What’s in it for me?",
        answer: (
            <div className="space-y-4">
                <p>CSR won’t magically make your career — and it’s not meant to.</p>
                <p>What it does offer is something quieter and more durable:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>You learn how ideas survive outside classrooms.</li>
                    <li>You learn how to work with people who don’t think like you.</li>
                    <li>You learn responsibility, communication, and decision-making in real situations — not simulations.</li>
                </ul>
                <p>For some, CSR becomes a space to apply technical skills meaningfully.</p>
                <p>For others, it becomes a place to grow perspective, empathy, and leadership.</p>
                <p className="mt-4 pt-4 border-t border-border/50">
                    And if none of that resonates — that’s okay. <br />
                    <strong className="text-foreground font-bold">CSR at SPC is voluntary, not transactional.</strong>
                </p>
            </div>
        )
    }
];

export default function CSRPage() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [isClosing, setIsClosing] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const handleClose = () => {
        setIsClosing(true);
        // Instant removal from state to trigger exit
        setSelectedId(null);
        // Reset closing state after a short delay
        setTimeout(() => setIsClosing(false), 100);
    };

    // Handle scroll lock
    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedId]);

    return (
        <div className="font-sans text-foreground min-h-screen bg-background selection:bg-primary/20 selection:text-primary transition-colors duration-500 overflow-x-hidden">
            <SEO
                title="Club Social Responsibility"
                description="Technology without responsibility is incomplete. Explore how Solarpunk Corps integrates social impact into everything we build."
                keywords={["club social responsibility", "CSR", "community impact", "social initiatives", "tech for good", "volunteering", "BIET Jhansi"]}
            />
            <BackgroundDecoration />

            <Navigation />

            {/* Hero Section */}
            <main className="pt-20 overflow-x-hidden">
                <Section className="text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-6 border border-primary/20">
                            CSR · Club Social Responsibility
                        </div>

                        <h1 className="font-sans font-bold tracking-tight text-4xl md:text-7xl text-foreground leading-tight mb-6">
                            Club Social Responsibility
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed mb-6">
                            Technology without responsibility is incomplete.
                        </p>

                        <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto font-light leading-relaxed">
                            At Solarpunk Corps, we build, study, and imagine so that learning and innovation
                            actively serve people, society, and the environment —
                            not just résumés or competitions.
                        </p>
                    </FadeIn>
                </Section>

                <Section>
                    <FadeIn delay={200}>
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                {/* Decorative Accent */}
                                <div className="absolute -left-12 top-0 bottom-0 w-1.5 bg-gradient-to-b from-green-500/40 via-emerald-500/10 to-transparent rounded-full hidden md:block" />

                                <h2 className="font-sans font-bold tracking-tight text-3xl md:text-5xl text-foreground mb-8 leading-tight">A Conscious Choice</h2>
                                <div className="space-y-6 text-xl text-muted-foreground font-light leading-relaxed">
                                    <p>
                                        At Solarpunk Corps, CSR is our effort to ensure that progress stays human.
                                        It is not an obligation. <span className="text-foreground font-medium italic underline underline-offset-8 decoration-primary/30">It is a choice.</span>
                                    </p>
                                    <p>
                                        Unlike corporate CSR which can be policy-driven, our approach is
                                        <strong className="font-semibold text-foreground"> bottom-up and voluntary</strong>.
                                        Participation comes from belief, not compulsion.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                {/* Backdrop Glow */}
                                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-x-12 translate-y-12 -z-10" />

                                <div className="bg-card/80 backdrop-blur-xl p-10 md:p-12 rounded-[40px] border border-border shadow-xl shadow-primary/5 relative overflow-hidden">
                                    {/* Abstract Pattern */}
                                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full opacity-50 -z-10" />

                                    <div className="flex items-center gap-3 mb-10">
                                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                            <Wind size={20} />
                                        </div>
                                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/50">Our Pillars</h3>
                                    </div>

                                    <ul className="space-y-8">
                                        {[
                                            { title: "Corporate Responsibility", desc: "Impact that extends beyond the bottom line.", icon: "🌱" },
                                            { title: "NSS Spirit", desc: "Voluntary service as a lifestyle, not charity.", icon: "🤝" },
                                            { title: "Personal Ethics", desc: "Doing the right thing even when no one is watching.", icon: "✨" }
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-5">
                                                <span className="text-2xl mt-1">{item.icon}</span>
                                                <div>
                                                    <h4 className="font-bold text-foreground leading-none mb-1.5">{item.title}</h4>
                                                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </Section>

                {/* Initiatives Grid - KEEPING Interactive Logic */}
                <div className="bg-gradient-to-b from-transparent to-muted/20 py-24 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16 text-center max-w-2xl mx-auto">
                            <h2 className="font-sans font-bold tracking-tight text-3xl md:text-5xl text-foreground mb-6">Our Focus Areas</h2>
                            <p className="text-lg text-muted-foreground font-light">
                                Small, consistent actions that align with our values.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                            {initiatives.map((init) => (
                                <InitiativeCard
                                    key={init.id}
                                    {...init}
                                    layoutId={`card-${init.id}`}
                                    onClick={() => setSelectedId(init.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Global Details View Overlay - Asymmetrical Animation */}
                <AnimatePresence>
                    {selectedId && (
                        <DetailOverlay
                            initiative={initiatives.find(i => i.id === selectedId)!}
                            layoutId={`card-${selectedId}`}
                            onClose={handleClose}
                            isClosing={isClosing}
                        />
                    )}
                </AnimatePresence>

                {/* The "Why" Section - Redesigned for Visual Appeal */}
                <div className="my-32 bg-stone-900 dark:bg-zinc-900 py-24 md:py-32 px-6 relative overflow-hidden rounded-[32px] md:rounded-[64px] mx-4 md:mx-12 shadow-2xl">
                    {/* Thematic Background Elements */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <svg width="100%" height="100%">
                            <pattern id="dot-pattern-large" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1.5" fill="white" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#dot-pattern-large)" />
                        </svg>
                    </div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h2 className="font-sans font-bold tracking-tight text-4xl md:text-6xl text-white mb-16 leading-tight">Why This Matters</h2>

                        <div className="grid md:grid-cols-3 gap-8 text-left mb-20">
                            {[
                                { text: "Because progress that ignores people is not progress.", icon: "🕊️" },
                                { text: "Because learning should travel outward, not stay locked inside labs.", icon: "🌍" },
                                { text: "Because kindness and responsibility are skills too.", icon: "💎" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <p className="text-stone-300 font-light leading-relaxed text-lg italic">
                                        "{item.text}"
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="relative pt-16 border-t border-white/10">
                            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-900 px-6 py-2 text-green-500/60 font-serif text-6xl">“</span>
                            <p className="text-2xl md:text-3xl text-stone-100 italic font-light leading-relaxed max-w-2xl mx-auto">
                                CSR is not separate from technology — it is what gives technology meaning.
                            </p>
                            <div className="mt-8 flex justify-center items-center gap-4">
                                <div className="h-px w-8 bg-green-500/30" />
                                <span className="text-xs font-bold uppercase tracking-[0.4em] text-green-500/50">Core Philosophy</span>
                                <div className="h-px w-8 bg-green-500/30" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section - Redesigned for Visual Appeal */}
                <Section id="faq" className="!pt-32">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-card rounded-[32px] md:rounded-[48px] border border-border shadow-xl p-6 md:p-16 relative overflow-hidden">
                            {/* Backdrop pattern */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-muted/30 rounded-full blur-[80px] -z-10" />

                            <div className="mb-16">
                                <h2 className="font-sans font-bold tracking-tight text-4xl md:text-5xl text-foreground mb-4">Common Questions</h2>
                                <p className="text-xl text-muted-foreground font-light">Addressing doubts with clarity and openness.</p>
                            </div>

                            <div className="space-y-4">
                                {faqs.map((faq, idx) => (
                                    <FaqItem
                                        key={idx}
                                        {...faq}
                                        isOpen={openFaqIndex === idx}
                                        onToggle={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                    />
                                ))}
                            </div>

                            <div className="mt-16 pt-12 border-t border-border text-center">
                                <p className="text-muted-foreground font-light mb-6">Have more questions about our impact?</p>
                                <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all cursor-pointer">
                                    Get in touch with our team <X size={16} className="rotate-45" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
