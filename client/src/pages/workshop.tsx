import React from 'react';
import {
  Cpu,
  Zap,
  TerminalSquare,
  Wrench,
  BrainCircuit,
  MessageSquareWarning,
  MonitorPlay,
  ArrowRight,
  Globe2
} from 'lucide-react';
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";

// Custom component for the recurring Neo-Brutalist card style
interface BrutalistCardProps {
  children: React.ReactNode;
  colorClass: string;
  className?: string;
  noHover?: boolean;
}

const BrutalistCard = ({ children, colorClass, className = "", noHover = false }: BrutalistCardProps) => {
  return (
    <div
      className={`
        border-[3px] border-stone-900 dark:border-white rounded-[2rem] p-6 md:p-8 
        shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.8)]
        transition-transform duration-200
        ${!noHover ? 'hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(28,25,23,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.8)]' : ''}
        ${colorClass} ${className}
      `}
    >
      {children}
    </div>
  );
};

export default function Workshop() {
  return (
    <div className="min-h-screen bg-[#F4F4F0] dark:bg-background text-stone-900 dark:text-foreground font-sans selection:bg-[#A1E4A3] selection:text-stone-900 overflow-x-hidden transition-colors duration-300">
      <SEO 
        title="Ecotech Workshop"
        description="Join the Ecotech Workshop by Solarpunk Corps. Build the future, don't break the planet. Hardware hacking, conceptual AI, and sustainability."
      />
      <Navigation />

      {/* HERO SECTION */}
      <header className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-pattern-dots py-20 px-4">
        {/* Decorative Geometric Shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFE975] dark:bg-[#FFE975]/80 rounded-full border-[3px] border-stone-900 dark:border-white shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] hidden lg:block animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#7AC0FF] dark:bg-[#7AC0FF]/80 rounded-tl-full rounded-br-full border-[3px] border-stone-900 dark:border-white shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.8)] hidden lg:block"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 bg-[#FFB17A] dark:bg-[#FFB17A]/80 rotate-45 border-[3px] border-stone-900 dark:border-white shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] hidden md:block"></div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 bg-[#A1E4A3] dark:bg-[#A1E4A3]/20 border-[3px] border-stone-900 dark:border-white px-4 py-2 rounded-full font-mono font-bold text-sm shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]">
              <span className="w-2 h-2 rounded-full bg-stone-900 dark:bg-[#A1E4A3] animate-pulse"></span>
              <span className="dark:text-[#A1E4A3]">An Initiative By Solarpunk Corps</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 to-stone-600 dark:from-white dark:to-stone-400 block my-2">Ecotech</span>
              Workshop
            </h1>

            <div className="flex flex-wrap gap-3 font-mono text-lg md:text-xl font-bold">
              <span className="bg-[#FFE975] dark:bg-[#FFE975]/30 dark:text-[#FFE975] border-[3px] border-stone-900 dark:border-white px-4 py-1 rounded-lg shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]">March 27-29</span>
              <span className="bg-[#B5A1E5] dark:bg-[#B5A1E5]/30 dark:text-[#B5A1E5] border-[3px] border-stone-900 dark:border-white px-4 py-1 rounded-lg shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]">Open to All</span>
            </div>

            <p className="text-2xl md:text-4xl font-black mt-4 leading-tight">
              Build the Future. <br />
              <span className="text-stone-500 dark:text-stone-400">Don't Break The Planet.</span>
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <BrutalistCard colorClass="bg-white dark:bg-zinc-900" noHover className="rotate-2">
              <p className="text-lg font-medium leading-relaxed mb-8 dark:text-zinc-300">
                <strong className="font-black text-xl dark:text-white">Welcome, co-pioneers!</strong> To kick off Solarpunk Corps, we are hosting our very first hands-on build-a-thon. We're blending hardware hacking, conceptual AI, and sustainability into one epic weekend.
                <br /><br />
                Bring your curiosity, team up with fellow builders, and let's engineer systems that actually matter.
              </p>
              <a href="#apply" className="group flex items-center justify-center gap-3 w-full bg-stone-900 dark:bg-white text-[#F4F4F0] dark:text-stone-900 font-black text-xl py-4 px-6 rounded-xl border-[3px] border-stone-900 dark:border-white hover:bg-[#A1E4A3] hover:text-stone-900 transition-colors">
                Apply Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </BrutalistCard>
            {/* Background accent card */}
            <div className="absolute inset-0 bg-[#A1E4A3] dark:bg-[#A1E4A3]/30 border-[3px] border-stone-900 dark:border-white rounded-[2rem] -z-10 -rotate-3 translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="w-full bg-[#FFB17A] dark:bg-[#FFB17A]/80 border-y-[3px] border-stone-900 dark:border-white py-4 overflow-hidden relative flex items-center z-20">
        <div className="animate-marquee font-mono font-bold text-xl md:text-2xl whitespace-nowrap dark:text-stone-900">
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
          <p className="text-2xl font-medium max-w-2xl bg-[#FFE975] dark:bg-[#FFE975]/30 dark:text-[#FFE975] inline-block p-2 border-[3px] border-stone-900 dark:border-white shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]">
            We provide the tools, the space, and the guidance. You bring the brains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <BrutalistCard colorClass="bg-[#7AC0FF] dark:bg-[#7AC0FF]/30 lg:col-span-2">
            <div className="flex justify-between items-start mb-12">
              <h3 className="text-4xl font-black dark:text-[#7AC0FF]">Simulate</h3>
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-full border-[3px] border-stone-900 dark:border-white shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]">
                <MonitorPlay size={32} className="dark:text-white" />
              </div>
            </div>
            <p className="text-xl font-medium leading-relaxed max-w-xl dark:text-zinc-200">
              Map out your logic in a digital sandbox. Test theories, understand system behaviors, and push boundaries in a virtual space before committing to the physical realm.
            </p>
          </BrutalistCard>

          <BrutalistCard colorClass="bg-[#A1E4A3] dark:bg-[#A1E4A3]/30">
            <div className="flex justify-between items-start mb-12">
              <h3 className="text-4xl font-black dark:text-[#A1E4A3]">Prototype</h3>
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-full border-[3px] border-stone-900 dark:border-white shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]">
                <Wrench size={32} className="dark:text-white" />
              </div>
            </div>
            <p className="text-lg font-medium leading-relaxed dark:text-zinc-200">
              Translate ideas into reality. Collaborate with your team to hack together tangible solutions, iterating rapidly to build functional, physical systems from scratch.
            </p>
          </BrutalistCard>

          <BrutalistCard colorClass="bg-[#B5A1E5] dark:bg-[#B5A1E5]/30">
            <div className="flex justify-between items-start mb-12">
              <h3 className="text-4xl font-black dark:text-[#B5A1E5]">? Intelligence</h3>
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-full border-[3px] border-stone-900 dark:border-white shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]">
                <BrainCircuit size={32} className="dark:text-white" />
              </div>
            </div>
            <p className="text-lg font-medium leading-relaxed dark:text-zinc-200">
              Explore the potential and boundaries of automated minds. Understand how data shapes decisions, where algorithms fail, and what it means to build responsible tech.
            </p>
          </BrutalistCard>

          <BrutalistCard colorClass="bg-[#FFB17A] dark:bg-[#FFB17A]/30 lg:col-span-2">
            <div className="flex justify-between items-start mb-12">
              <h3 className="text-4xl font-black dark:text-[#FFB17A]">Debate</h3>
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-full border-[3px] border-stone-900 dark:border-white shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]">
                <MessageSquareWarning size={32} className="dark:text-white" />
              </div>
            </div>
            <p className="text-xl font-medium leading-relaxed max-w-xl dark:text-zinc-200">
              Challenge the status quo. Defend your engineering choices, question the impact of emerging technologies, and pitch your vision for a sustainable, upgraded future.
            </p>
          </BrutalistCard>
        </div>
      </section>

      {/* THE ARSENAL */}
      <section className="bg-stone-900 dark:bg-zinc-950 text-[#F4F4F0] py-24 px-4 border-y-[3px] border-stone-900 dark:border-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-[#FFE975]">The Arsenal</h2>
            <p className="text-2xl font-medium max-w-2xl font-mono text-[#A1E4A3]">
              Walk away with real skills, new allies, and a fresh perspective on tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-[3px] border-[#F4F4F0] dark:border-zinc-800 rounded-2xl p-6 hover:bg-[#F4F4F0] hover:text-stone-900 dark:hover:bg-zinc-900 dark:hover:text-[#A1E4A3] transition-colors group">
              <div className="text-[#A1E4A3] group-hover:text-stone-900 dark:group-hover:text-[#A1E4A3] mb-6 font-mono text-3xl font-black">*</div>
              <h4 className="text-2xl font-black mb-4 flex items-center gap-2">
                <Cpu className="group-hover:animate-pulse" /> Hardware Hacking
              </h4>
              <p className="font-medium opacity-90 group-hover:opacity-100">
                Wire up real sensors and actuators. Go from a digital Tinkercad simulation to a physical MVP.
              </p>
            </div>

            <div className="border-[3px] border-[#F4F4F0] dark:border-zinc-800 rounded-2xl p-6 hover:bg-[#F4F4F0] hover:text-stone-900 dark:hover:bg-zinc-900 dark:hover:text-[#7AC0FF] transition-colors group">
              <div className="text-[#7AC0FF] group-hover:text-stone-900 dark:group-hover:text-[#7AC0FF] mb-6 font-mono text-3xl font-black">+</div>
              <h4 className="text-2xl font-black mb-4 flex items-center gap-2">
                <TerminalSquare className="group-hover:animate-pulse" /> Applied AI
              </h4>
              <p className="font-medium opacity-90 group-hover:opacity-100">
                Train simple browser ML models. Learn not just how AI works, but when it fails and why data bias matters.
              </p>
            </div>

            <div className="border-[3px] border-[#F4F4F0] dark:border-zinc-800 rounded-2xl p-6 hover:bg-[#F4F4F0] hover:text-stone-900 dark:hover:bg-zinc-900 dark:hover:text-[#FFB17A] transition-colors group">
              <div className="text-[#FFB17A] group-hover:text-stone-900 dark:group-hover:text-[#FFB17A] mb-6 font-mono text-3xl font-black">#</div>
              <h4 className="text-2xl font-black mb-4 flex items-center gap-2">
                <Zap className="group-hover:animate-bounce" /> Rapid Prototyping
              </h4>
              <p className="font-medium opacity-90 group-hover:opacity-100">
                Navigate a chaotic component marketplace. Manage your budget, collaborate, and build against the clock.
              </p>
            </div>

            <div className="border-[3px] border-[#F4F4F0] dark:border-zinc-800 rounded-2xl p-6 hover:bg-[#F4F4F0] hover:text-stone-900 dark:hover:bg-zinc-900 dark:hover:text-[#B5A1E5] transition-colors group">
              <div className="text-[#B5A1E5] group-hover:text-stone-900 dark:group-hover:text-[#B5A1E5] mb-6 font-mono text-3xl font-black">~</div>
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

      {/* REGISTRATION CALL TO ACTION */}
      <section id="apply" className="py-24 px-4 bg-pattern-dots">
        <div className="max-w-4xl mx-auto relative text-center">
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#A1E4A3] dark:bg-[#A1E4A3]/30 rounded-full border-[3px] border-stone-900 dark:border-white shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] z-0"></div>

          <BrutalistCard colorClass="bg-white dark:bg-zinc-900 relative z-10" noHover>
            <div className="mb-10 text-center">
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4 dark:text-white">Initialize<br />Sequence</h2>
              <p className="text-xl font-mono bg-stone-900 dark:bg-white text-[#A1E4A3] dark:text-stone-900 inline-block px-4 py-1 rounded-md">Spaces are limited. Apply now.</p>
            </div>

            <div className="space-y-8 flex flex-col items-center">
               <p className="text-xl font-medium max-w-xl mx-auto dark:text-zinc-300">
                Ready to join the movement? We use an external platform to handle applications more efficiently. Click the button below to start your journey.
              </p>

              <a
                href="https://forms.google.com/your-placeholder-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[#A1E4A3] text-stone-900 border-[3px] border-stone-900 dark:border-white p-6 rounded-xl font-black text-3xl uppercase tracking-wider hover:bg-[#FFE975] active:translate-y-1 active:shadow-none shadow-[10px_10px_0px_0px_rgba(28,25,23,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.8)] transition-all relative overflow-hidden group"
              >
                <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">Apply via External Form</span>
                <div className="absolute inset-0 bg-stone-900 dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out -z-0"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white dark:text-stone-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10 delay-100 font-mono text-xl text-center">
                  OPEN EXTERNAL LINK &gt;
                </span>
              </a>
              
              <p className="text-sm font-bold font-mono text-stone-500 dark:text-stone-400 mt-4">
                * Application takes approximately 5-10 minutes.
              </p>
            </div>
          </BrutalistCard>

          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFB17A] dark:bg-[#FFB17A]/30 border-[3px] border-stone-900 dark:border-white shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] z-0 rotate-12"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
