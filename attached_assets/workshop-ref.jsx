import React, { useState } from 'react';
import {
    Leaf,
    Cpu,
    Zap,
    TerminalSquare,
    Wrench,
    BrainCircuit,
    MessageSquareWarning,
    MonitorPlay,
    ArrowRight,
    Sun,
    Globe2
} from 'lucide-react';

// Custom component for the recurring Neo-Brutalist card style
const BrutalistCard = ({ children, colorClass, className = "", noHover = false }) => {
    return (
        <div
            className={`
        border-[3px] border-stone-900 rounded-[2rem] p-6 md:p-8 
        shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] 
        transition-transform duration-200
        ${!noHover ? 'hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(28,25,23,1)]' : ''}
        ${colorClass} ${className}
      `}
        >
            {children}
        </div>
    );
};

export default function App() {
    const [formData, setFormData] = useState({ name: '', email: '', reason: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: '', email: '', reason: '' });
    };

    return (
        <div className="min-h-screen bg-[#F4F4F0] text-stone-900 font-sans selection:bg-[#A1E4A3] selection:text-stone-900 overflow-x-hidden">

            {/* Inline Styles for Marquee Animation */}
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
        
        /* Custom geometric backgrounds */
        .bg-pattern-dots {
          background-image: radial-gradient(rgba(28, 25, 23, 0.1) 2px, transparent 2px);
          background-size: 24px 24px;
        }
      `}</style>

            {/* HEADER */}
            <nav className="w-full border-b-[3px] border-stone-900 bg-[#F4F4F0] relative z-10 flex justify-between items-center px-6 py-4">
                <div className="flex items-center gap-2 font-black tracking-tight uppercase">
                    <Leaf className="text-[#A1E4A3]" fill="currentColor" size={24} />
                    <span>Solarpunk Corps</span>
                </div>
                <div className="hidden md:flex gap-4 font-mono text-sm font-bold bg-stone-900 text-[#F4F4F0] px-4 py-2 rounded-full">
                    Init: 2026.03.27
                </div>
            </nav>

            {/* HERO SECTION */}
            <header className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-pattern-dots py-20 px-4">
                {/* Decorative Geometric Shapes (Inspired by Bauhaus/De Stijl image) */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFE975] rounded-full border-[3px] border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hidden lg:block animate-bounce" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#7AC0FF] rounded-tl-full rounded-br-full border-[3px] border-stone-900 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] hidden lg:block"></div>
                <div className="absolute top-1/4 right-20 w-16 h-16 bg-[#FFB17A] rotate-45 border-[3px] border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hidden md:block"></div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                    <div className="lg:col-span-7 flex flex-col items-start gap-6">
                        <div className="inline-flex items-center gap-2 bg-[#A1E4A3] border-[3px] border-stone-900 px-4 py-2 rounded-full font-mono font-bold text-sm shadow-[3px_3px_0px_0px_rgba(28,25,23,1)]">
                            <span className="w-2 h-2 rounded-full bg-stone-900 animate-pulse"></span>
                            An Initiative By Solarpunk Corps
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                            The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 to-stone-600 block my-2">Ecotech</span>
                            Workshop
                        </h1>

                        <div className="flex flex-wrap gap-3 font-mono text-lg md:text-xl font-bold">
                            <span className="bg-[#FFE975] border-[3px] border-stone-900 px-4 py-1 rounded-lg shadow-[3px_3px_0px_0px_rgba(28,25,23,1)]">March 27-29</span>
                            <span className="bg-[#B5A1E5] border-[3px] border-stone-900 px-4 py-1 rounded-lg shadow-[3px_3px_0px_0px_rgba(28,25,23,1)]">Open to All</span>
                        </div>

                        <p className="text-2xl md:text-4xl font-black mt-4 leading-tight">
                            Build the Future. <br />
                            <span className="text-stone-500">Don't Break The Planet.</span>
                        </p>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <BrutalistCard colorClass="bg-white" noHover className="rotate-2">
                            <p className="text-lg font-medium leading-relaxed mb-8">
                                <strong className="font-black text-xl">Welcome, co-pioneers!</strong> To kick off Solarpunk Corps, we are hosting our very first hands-on build-a-thon. We're blending hardware hacking, conceptual AI, and sustainability into one epic weekend.
                                <br /><br />
                                Bring your curiosity, team up with fellow builders, and let's engineer systems that actually matter.
                            </p>
                            <a href="#apply" className="group flex items-center justify-center gap-3 w-full bg-stone-900 text-[#F4F4F0] font-black text-xl py-4 px-6 rounded-xl border-[3px] border-stone-900 hover:bg-[#A1E4A3] hover:text-stone-900 transition-colors">
                                Join Now
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </BrutalistCard>
                        {/* Background accent card */}
                        <div className="absolute inset-0 bg-[#A1E4A3] border-[3px] border-stone-900 rounded-[2rem] -z-10 -rotate-3 translate-x-4 translate-y-4"></div>
                    </div>

                </div>
            </header>

            {/* MARQUEE */}
            <div className="w-full bg-[#FFB17A] border-y-[3px] border-stone-900 py-4 overflow-hidden relative flex items-center z-20">
                <div className="animate-marquee font-mono font-bold text-xl md:text-2xl whitespace-nowrap">
                    <span className="mx-4">*</span> HARMONY BETWEEN TECH, NATURE, AND PEOPLE
                    <span className="mx-4">*</span> NO INSTRUCTION MANUALS
                    <span className="mx-4">*</span> PROTOTYPE AND HACK
                    <span className="mx-4">*</span> QUESTION ASSUMPTIONS
                    <span className="mx-4">*</span> HARMONY BETWEEN TECH, NATURE, AND PEOPLE
                    <span className="mx-4">*</span> NO INSTRUCTION MANUALS
                    <span className="mx-4">*</span> PROTOTYPE AND HACK
                    <span className="mx-4">*</span> QUESTION ASSUMPTIONS
                    <span className="mx-4">*</span> HARMONY BETWEEN TECH, NATURE, AND PEOPLE
                    <span className="mx-4">*</span> NO INSTRUCTION MANUALS
                    <span className="mx-4">*</span> PROTOTYPE AND HACK
                    <span className="mx-4">*</span> QUESTION ASSUMPTIONS
                </div>
            </div>

            {/* THE EXPERIENCE (Bento Grid) */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-5xl md:text-7xl font-black mb-6">The Experience</h2>
                    <p className="text-2xl font-medium max-w-2xl bg-[#FFE975] inline-block p-2 border-[3px] border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
                        We provide the tools, the space, and the guidance. You bring the brains.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                    <BrutalistCard colorClass="bg-[#7AC0FF] lg:col-span-2">
                        <div className="flex justify-between items-start mb-12">
                            <h3 className="text-4xl font-black">Simulate</h3>
                            <div className="bg-white p-3 rounded-full border-[3px] border-stone-900">
                                <MonitorPlay size={32} />
                            </div>
                        </div>
                        <p className="text-xl font-medium leading-relaxed max-w-xl">
                            Map out your logic in a digital sandbox. Test theories, understand system behaviors, and push boundaries in a virtual space before committing to the physical realm.
                        </p>
                    </BrutalistCard>

                    <BrutalistCard colorClass="bg-[#A1E4A3]">
                        <div className="flex justify-between items-start mb-12">
                            <h3 className="text-4xl font-black">Prototype</h3>
                            <div className="bg-white p-3 rounded-full border-[3px] border-stone-900">
                                <Wrench size={32} />
                            </div>
                        </div>
                        <p className="text-lg font-medium leading-relaxed">
                            Translate ideas into reality. Collaborate with your team to hack together tangible solutions, iterating rapidly to build functional, physical systems from scratch.
                        </p>
                    </BrutalistCard>

                    <BrutalistCard colorClass="bg-[#B5A1E5]">
                        <div className="flex justify-between items-start mb-12">
                            <h3 className="text-4xl font-black">? Intelligence</h3>
                            <div className="bg-white p-3 rounded-full border-[3px] border-stone-900">
                                <BrainCircuit size={32} />
                            </div>
                        </div>
                        <p className="text-lg font-medium leading-relaxed">
                            Explore the potential and boundaries of automated minds. Understand how data shapes decisions, where algorithms fail, and what it means to build responsible tech.
                        </p>
                    </BrutalistCard>

                    <BrutalistCard colorClass="bg-[#FFB17A] lg:col-span-2">
                        <div className="flex justify-between items-start mb-12">
                            <h3 className="text-4xl font-black">Debate</h3>
                            <div className="bg-white p-3 rounded-full border-[3px] border-stone-900">
                                <MessageSquareWarning size={32} />
                            </div>
                        </div>
                        <p className="text-xl font-medium leading-relaxed max-w-xl">
                            Challenge the status quo. Defend your engineering choices, question the impact of emerging technologies, and pitch your vision for a sustainable, upgraded future.
                        </p>
                    </BrutalistCard>

                </div>
            </section>

            {/* THE ARSENAL */}
            <section className="bg-stone-900 text-[#F4F4F0] py-24 px-4 border-y-[3px] border-stone-900">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-5xl md:text-7xl font-black mb-6 text-[#FFE975]">The Arsenal</h2>
                        <p className="text-2xl font-medium max-w-2xl font-mono text-[#A1E4A3]">
                            Walk away with real skills, new allies, and a fresh perspective on tech.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Arsenal Item 1 */}
                        <div className="border-[3px] border-[#F4F4F0] rounded-2xl p-6 hover:bg-[#F4F4F0] hover:text-stone-900 transition-colors group">
                            <div className="text-[#A1E4A3] group-hover:text-stone-900 mb-6 font-mono text-3xl font-black">*</div>
                            <h4 className="text-2xl font-black mb-4 flex items-center gap-2">
                                <Cpu className="group-hover:animate-spin-slow" /> Hardware Hacking
                            </h4>
                            <p className="font-medium opacity-90 group-hover:opacity-100">
                                Wire up real sensors and actuators. Go from a digital Tinkercad simulation to a physical MVP.
                            </p>
                        </div>

                        {/* Arsenal Item 2 */}
                        <div className="border-[3px] border-[#F4F4F0] rounded-2xl p-6 hover:bg-[#F4F4F0] hover:text-stone-900 transition-colors group">
                            <div className="text-[#7AC0FF] group-hover:text-stone-900 mb-6 font-mono text-3xl font-black">+</div>
                            <h4 className="text-2xl font-black mb-4 flex items-center gap-2">
                                <TerminalSquare className="group-hover:animate-pulse" /> Applied AI
                            </h4>
                            <p className="font-medium opacity-90 group-hover:opacity-100">
                                Train simple browser ML models. Learn not just how AI works, but when it fails and why data bias matters.
                            </p>
                        </div>

                        {/* Arsenal Item 3 */}
                        <div className="border-[3px] border-[#F4F4F0] rounded-2xl p-6 hover:bg-[#F4F4F0] hover:text-stone-900 transition-colors group">
                            <div className="text-[#FFB17A] group-hover:text-stone-900 mb-6 font-mono text-3xl font-black">#</div>
                            <h4 className="text-2xl font-black mb-4 flex items-center gap-2">
                                <Zap className="group-hover:animate-bounce" /> Rapid Prototyping
                            </h4>
                            <p className="font-medium opacity-90 group-hover:opacity-100">
                                Navigate a chaotic component marketplace. Manage your budget, collaborate, and build against the clock.
                            </p>
                        </div>

                        {/* Arsenal Item 4 */}
                        <div className="border-[3px] border-[#F4F4F0] rounded-2xl p-6 hover:bg-[#F4F4F0] hover:text-stone-900 transition-colors group">
                            <div className="text-[#B5A1E5] group-hover:text-stone-900 mb-6 font-mono text-3xl font-black">~</div>
                            <h4 className="text-2xl font-black mb-4 flex items-center gap-2">
                                <Globe2 className="group-hover:rotate-12 transition-transform" /> The Pitch
                            </h4>
                            <p className="font-medium opacity-90 group-hover:opacity-100">
                                Engage in rapid-fire parliamentary debates. Defend your tech, pitch your vision, and win over the judges.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* REGISTRATION FORM */}
            <section id="apply" className="py-24 px-4 bg-pattern-dots">
                <div className="max-w-4xl mx-auto relative">

                    <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#A1E4A3] rounded-full border-[3px] border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] z-0"></div>

                    <BrutalistCard colorClass="bg-white relative z-10" noHover>
                        <div className="mb-10 text-center">
                            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">Initialize<br />Sequence</h2>
                            <p className="text-xl font-mono bg-stone-900 text-[#A1E4A3] inline-block px-4 py-1 rounded-md">Spaces are limited. Apply now.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="space-y-2">
                                <label className="block text-lg font-black font-mono">Operator Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-[#F4F4F0] border-[3px] border-stone-900 p-4 rounded-xl font-medium focus:outline-none focus:bg-[#FFE975] focus:shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] transition-all"
                                    placeholder="Jane Doe"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-lg font-black font-mono">Comms Link (Email)</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-[#F4F4F0] border-[3px] border-stone-900 p-4 rounded-xl font-medium focus:outline-none focus:bg-[#7AC0FF] focus:shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] transition-all"
                                    placeholder="jane@solarpunk.org"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-lg font-black font-mono">Why do you want to build?</label>
                                <textarea
                                    required
                                    rows="4"
                                    value={formData.reason}
                                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                    className="w-full bg-[#F4F4F0] border-[3px] border-stone-900 p-4 rounded-xl font-medium focus:outline-none focus:bg-[#B5A1E5] focus:shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] transition-all resize-none"
                                    placeholder="Tell us your motivation..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#A1E4A3] text-stone-900 border-[3px] border-stone-900 p-4 rounded-xl font-black text-2xl uppercase tracking-wider hover:bg-[#FFE975] active:translate-y-1 active:shadow-none shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] transition-all mt-4 relative overflow-hidden group"
                            >
                                <span className="relative z-10">{isSubmitted ? 'Application Received!' : 'Submit Application'}</span>
                                <div className="absolute inset-0 bg-stone-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out -z-0"></div>
                                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10 delay-100 font-mono text-lg">
                                    {isSubmitted ? 'SYSTEM UPDATED' : 'INITIATE UPLOAD >'}
                                </span>
                            </button>

                        </form>
                    </BrutalistCard>

                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFB17A] border-[3px] border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] z-0 rotate-12"></div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-stone-900 text-[#F4F4F0] py-12 px-6 border-t-[3px] border-stone-900">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="flex items-center gap-3">
                        <div className="bg-[#A1E4A3] p-2 rounded-lg border-2 border-transparent">
                            <Sun className="text-stone-900" size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black uppercase tracking-tighter leading-none">Solarpunk<br />Corps</h2>
                        </div>
                    </div>

                    <div className="text-center md:text-right font-mono">
                        <p className="text-[#7AC0FF] font-bold text-xl mb-2">Progress with Purpose.</p>
                        <p className="text-stone-500 text-sm">© 2026 Ecotech Workshop</p>
                    </div>

                </div>
            </footer>

        </div>
    );
}