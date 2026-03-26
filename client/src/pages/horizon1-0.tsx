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

function MainHero() {
  return (
    <header className="relative w-full min-h-[90vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#111] text-white py-20 md:py-32 px-4 md:px-12">
      {/* Background Chaos */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pattern-stripes"></div>
      <div className="absolute -top-24 -left-24 w-64 md:w-96 h-64 md:h-96 bg-solar-green rounded-full mix-blend-screen animate-pulse blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 md:w-96 h-64 md:h-96 bg-neo-pink rounded-full mix-blend-screen animate-pulse blur-3xl shadow-[0_0_100px_rgba(255,144,232,0.5)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-block bg-sun-yellow text-black px-6 md:px-8 py-3 md:py-3 brutal-border mb-10 md:mb-12 transform -rotate-2 md:-rotate-2 hover:rotate-0 transition-all duration-300 active:scale-95 cursor-default shadow-[6px_6px_0px_#111]">
          <span className="font-black tracking-[0.1em] md:tracking-[0.3em] uppercase text-base md:text-xl whitespace-nowrap">An Initiative of Solarpunk Corps</span>
        </div>

        <h1 className="text-7xl sm:text-8xl md:text-[13rem] lg:text-[15rem] font-black tracking-tighter leading-[0.8] md:leading-[0.8] uppercase mb-12 md:mb-16">
          <span className="block text-white drop-shadow-[5px_5px_0px_#27AE60] md:drop-shadow-[12px_12px_0px_#27AE60]">HORIZON</span>
          <span className="block text-sun-yellow mt-1 md:mt-4 transform translate-x-1 sm:translate-x-4 text-[0.32em] sm:text-[0.32em] md:text-[0.32em] lg:text-[0.32em] tracking-[0.1em] leading-none">beyond the machine</span>
        </h1>

        <div className="max-w-4xl mx-auto relative px-4 sm:px-2">
          <div className="absolute -inset-1 md:-inset-4 bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl transform rotate-1 block sm:block"></div>
          <p className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black md:font-medium leading-[1.1] md:leading-tight tracking-tight text-white/95 p-4 md:p-6 bg-white/5 sm:bg-transparent rounded-lg backdrop-blur-sm sm:backdrop-blur-none border-2 border-white/10 sm:border-none uppercase">
            From Circuitry to Conscious Design. <br />
            Think differently. <br />
            Build confidently. <br />
            Engineer with purpose. <br />
            <span className="flex flex-wrap justify-center gap-x-3 mt-4 md:mt-0">
              <span className="text-solar-green tracking-tighter">build</span>
              <span className="text-tech-blue tracking-tighter">simulate</span>
              <span className="text-neo-pink tracking-tighter">evolve</span>
            </span>
          </p>
        </div>

        <div className="mt-12 md:mt-20 flex flex-wrap justify-center gap-6">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-white brutal-border rounded-full flex items-center justify-center text-black transform rotate-6 hover:rotate-0 transition-all duration-300 shadow-[4px_4px_0px_#27AE60] overflow-hidden">
            <img src="/SPC_logo.png" alt="SPC Logo" className="w-[85%] h-[85%] object-contain" />
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 md:w-12 md:h-12 border-b-4 border-r-4 border-white/40 rotate-45 transform"></div>
      </div>
    </header>
  );
}

export default function Horizon10() {
  return (
    <div className="min-h-screen bg-[#F4F4F0] dark:bg-background text-stone-900 dark:text-foreground font-sans selection:bg-[#A1E4A3] selection:text-stone-900 overflow-x-hidden transition-colors duration-300">
      <SEO
        title="Horizon 1.0 - Beyond the Machine"
        description="Horizon 1.0 by Solarpunk Corps. An immersive, hands-on technical workshop blending hardware hacking, conceptual AI, and sustainability."
      />
      <Navigation />

      <MainHero />

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
              <span className="dark:text-[#A1E4A3]">Applications Open Now</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
              The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 to-stone-600 dark:from-white dark:to-stone-400 block my-2">Experimental</span>
              Sandbox
            </h1>

            <p className="mt-4 font-mono font-bold text-sm uppercase tracking-widest text-stone-600 dark:text-stone-400">
              Come Explore // Limited Seats Available
            </p>

            <div className="flex flex-wrap gap-3 font-mono text-lg md:text-xl font-bold">
              <span className="bg-[#FFE975] dark:bg-[#FFE975]/30 dark:text-white border-[3px] border-stone-900 dark:border-white px-4 py-1 rounded-lg shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]">March 27-29</span>
              <span className="bg-[#B5A1E5] dark:bg-[#B5A1E5]/30 dark:text-white border-[3px] border-stone-900 dark:border-white px-4 py-1 rounded-lg shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]">Open to All 2nd years</span>
            </div>

            <p className="text-2xl md:text-3xl font-black mt-4 leading-tight">
              Prototype the Future. <br />
              <span className="text-stone-500 dark:text-stone-400">Refine the Innovation.</span>
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

      {/* SCHEDULE OVERVIEW */}
      <section className="py-24 px-4 bg-white dark:bg-zinc-900 border-y-[3px] border-stone-900 dark:border-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Event Roadmap</h2>
            <p className="text-2xl font-medium max-w-2xl text-stone-600 dark:text-stone-400 font-mono">
              3 Days of Intensive Simulation, Intelligence, and Physical Construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Day 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-stone-900 dark:bg-[#FFE975]/20 rounded-[2rem] translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform border-[3px] border-stone-900 dark:border-[#FFE975]/50"></div>
              <div className="relative bg-[#FFE975] dark:bg-[#111] p-8 rounded-[2rem] border-[3px] border-stone-900 dark:border-[#FFE975] h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <span className="bg-stone-900 text-white dark:bg-[#FFE975] dark:text-stone-900 font-mono font-bold text-sm px-4 py-1 rounded-full uppercase">Virtual</span>
                  <span className="font-black text-4xl opacity-20 dark:text-[#FFE975]">01</span>
                </div>
                <h3 className="text-4xl font-black uppercase mb-2 dark:text-white">Tinkering</h3>
                <p className="font-mono text-xs font-bold bg-stone-900 text-white dark:bg-[#FFE975] dark:text-stone-900 px-2 py-1 rounded mb-4 w-fit">3:00 PM - 6:00 PM</p>
                <p className="text-lg font-medium leading-relaxed dark:text-stone-300">
                  Software and electronics hands-on simulations. Map out your logic in a digital sandbox.
                </p>
              </div>
            </div>

            {/* Day 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-stone-900 dark:bg-[#B5A1E5]/20 rounded-[2rem] translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform border-[3px] border-stone-900 dark:border-[#B5A1E5]/50"></div>
              <div className="relative bg-[#B5A1E5] dark:bg-[#111] p-8 rounded-[2rem] border-[3px] border-stone-900 dark:border-[#B5A1E5] h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <span className="bg-stone-900 text-white dark:bg-[#B5A1E5] dark:text-stone-900 font-mono font-bold text-sm px-4 py-1 rounded-full uppercase">Evolution</span>
                  <span className="font-black text-4xl opacity-20 dark:text-[#B5A1E5]">02</span>
                </div>
                <h3 className="text-3xl font-black uppercase mb-2 leading-tight dark:text-white">Intelligent <br /> Evolution</h3>
                <p className="font-mono text-xs font-bold bg-stone-900 text-white dark:bg-[#B5A1E5] dark:text-stone-900 px-2 py-1 rounded mb-4 w-fit">3:00 PM - 6:00 PM</p>
                <p className="text-lg font-medium leading-relaxed dark:text-stone-300">
                  AI & ML understanding and hands-on demo. Explore the potential of automated minds.
                </p>
              </div>
            </div>

            {/* Day 3 */}
            <div className="relative group md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-stone-900 dark:bg-[#A1E4A3]/20 rounded-[2rem] translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform border-[3px] border-stone-900 dark:border-[#A1E4A3]/50"></div>
              <div className="relative bg-[#A1E4A3] dark:bg-[#111] p-8 rounded-[2rem] border-[3px] border-stone-900 dark:border-[#A1E4A3] h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <span className="bg-stone-900 text-white dark:bg-[#A1E4A3] dark:text-stone-900 font-mono font-bold text-sm px-4 py-1 rounded-full uppercase">Showdown</span>
                  <span className="font-black text-4xl opacity-20 dark:text-[#A1E4A3]">03</span>
                </div>
                <h3 className="text-3xl font-black uppercase mb-2 leading-tight dark:text-white">Hardware <br /> Showdown</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <p className="font-mono text-xs font-bold bg-stone-900 text-white dark:bg-[#A1E4A3] dark:text-stone-900 px-2 py-1 rounded w-fit">9:00 AM - 12:00 PM</p>
                  <p className="font-mono text-xs font-bold bg-stone-900 text-white dark:bg-[#A1E4A3] dark:text-stone-900 px-2 py-1 rounded w-fit">3:00 PM - 6:00 PM</p>
                </div>
                <p className="text-lg font-medium leading-relaxed dark:text-stone-300">
                  Physical build-a-thon prototype and debate. Pitch your vision for the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE EXPERIENCE (Bento Grid) */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6">The Experience</h2>
          <p className="text-2xl font-medium max-w-2xl bg-[#FFE975] dark:bg-[#FFE975]/30 dark:text-white inline-block p-2 border-[3px] border-stone-900 dark:border-white shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]">
            We provide the tools, the space, and the guidance. You bring the brains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <BrutalistCard colorClass="bg-[#7AC0FF] dark:bg-[#7AC0FF]/30 lg:col-span-2">
            <div className="flex justify-between items-start mb-12">
              <h3 className="text-4xl font-black dark:text-white">Simulate</h3>
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
              <h3 className="text-4xl font-black dark:text-white">Prototype</h3>
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
              <h3 className="text-4xl font-black dark:text-white">? Intelligence</h3>
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
              <h3 className="text-4xl font-black dark:text-white">Debate</h3>
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
                href="https://docs.google.com/forms/d/e/1FAIpQLSdVaAEpqv_UnHOKPLbEEBgjunrIE-XtdVXQBoJ5caJzhBeg5Q/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[#A1E4A3] text-stone-900 border-[3px] border-stone-900 dark:border-white p-6 rounded-xl font-black text-3xl uppercase tracking-wider hover:bg-[#FFE975] active:translate-y-1 active:shadow-none shadow-[10px_10px_0px_0px_rgba(28,25,23,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.8)] transition-all relative overflow-hidden group"
              >
                <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">Apply via Google Forms</span>
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
