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
  Globe2,
  X,
  Plus
} from 'lucide-react';
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";
import { AnimatePresence, motion } from 'framer-motion';

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

const roadmapData = [
  {
    day: "Day 1",
    date: "27 March",
    time: "3 PM",
    type: "Virtual",
    title: "Solarpunk – The Foundation & Virtual Sandbox",
    objective: "Establish the theoretical floor and bridge the gap between abstract electronics and functional digital simulations.",
    sessions: [
      { title: "Initial Briefing (Simulation Mechanics)", detail: "Introduction to the 'Theory First' philosophy and the safety of the virtual sandbox." },
      { title: "Theory of Robotics", detail: "Deep dive into sensors, actuators, and layered systems. Exploration of hardware communication and robot architecture." },
      { title: "Simulation Environment Setup", detail: "Onboarding for Tinkercad. Interface familiarization and workspace readiness." },
      { title: "Hands-On Digital Prototyping", detail: "Transition from theory to practice by building, wiring, and testing digital circuits based on theoretical frameworks." },
      { title: "Future Visions", detail: "Exploring how basic electronics act as the bridge to Artificial Intelligence and the next phase of evolution." },
    ],
    color: "#FFE975"
  },
  {
    day: "Day 2",
    date: "28 March",
    time: "3 PM",
    type: "Evolution",
    title: "Intelligent Evolution – The Mind & The Ethics",
    objective: "Add a layer of 'intelligence' to the previous day’s systems while introducing critical thinking regarding AI's impact.",
    sessions: [
      { title: "Initial Briefing (Evolution Mechanics)", detail: "Introduction to training models to classify data and trigger intelligent responses." },
      { title: "Reality Check & Inspiration", detail: "Analysis of real-world examples (e.g., AI waste sorting). Identification of technological limitations and brainstorming AI-driven solutions." },
      { title: "Machine Intelligence Lab", detail: "Training simple models using Teachable Machine. Conceptualizing AI extensions for an MVP to classify conditions or trigger alerts." },
      { title: "Exploring Intelligence Limits", detail: "Critical examination of AI failure points, including data bias, sensor errors, and sustainability ethics." },
      { title: "Advanced Robotics Exposure", detail: "Visual exploration of digital twins, the Gazebo environment, and the Robot Operating System (ROS) ecosystem." },
    ],
    color: "#B5A1E5"
  },
  {
    day: "Day 3",
    date: "29 March",
    time: "9 AM & 3 PM",
    type: "Showdown",
    title: "Hardware Showdown – The Market & Physical Realization",
    objective: "Move from simulation to reality through a resource-constrained 'Market Day' ending in a public exhibition and debate.",
    slots: [
      {
        time: "9:00 AM - 12:00 PM",
        name: "Slot 1: The Build",
        sessions: [
          { title: "Catalog Drop & Briefing", detail: "Release of the Component Catalog and the 6 Problem Statements. Distribution of the 100-credit team budgets." },
          { title: "The Marketplace Launch", detail: "Official opening of the hardware stalls. Teams engage in strategic procurement using their credits on a First-Come, First-Serve basis." },
          { title: "Physical Prototyping", detail: "The shift from virtual logic to tangible hardware. Teams begin assembling their physical Minimum Viable Products (MVPs) based on their earlier simulations." },
          { title: "System Validation", detail: "Finalizing the physical build and conducting iterative testing to ensure hardware reliability and alignment with the chosen problem statement." },
        ]
      },
      {
        time: "12:00 PM - 3:00 PM",
        name: "Intermission: The Reset",
        sessions: [
          { title: "Lunch Break", detail: "A mandatory period to disconnect, recharge, and refuel. No preparation or project work is permitted during this time." }
        ]
      },
      {
        time: "3:00 PM - 6:00 PM",
        name: "Slot 2: The Showcase & Reflection",
        sessions: [
          { title: "Green Parliamentary Debate", detail: "A shift to advocacy and ethics. Participation in intense debates regarding various topics like the role of AI in climate survival and environmental policy." },
          { title: "Exhibition & Judging", detail: "Formal demonstration of the physical MVPs. Teams explain their system logic, sustainability impact, and conceptual intelligence upgrades to judges." },
          { title: "Final Reflection", detail: "Closing session focused on shifting perspectives, filling out shared reviews, and summarizing the three-day evolution." }
        ]
      }
    ],
    color: "#A1E4A3"
  }
];

export default function Horizon10() {
  const [selectedDay, setSelectedDay] = React.useState<number | null>(null);

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

            <p className="text-2xl md:text-3xl font-black mt-4 leading-tight uppercase">
              Think differently. <br />
              Build confidently. <br />
              <span className="text-stone-500 dark:text-stone-400">Engineer with purpose.</span>
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
            {roadmapData.map((day, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => setSelectedDay(index)}
                whileHover={{ y: -5 }}
              >
                <div
                  className="absolute inset-0 bg-stone-900 rounded-[2rem] translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform border-[3px] border-stone-900"
                  style={{
                    backgroundColor: `var(--card-shadow, ${day.color})`,
                    opacity: 0.2
                  }}
                ></div>
                <div 
                  className="relative p-8 rounded-[2rem] border-[3px] border-stone-900 h-full flex flex-col group-hover:scale-[1.01] transition-transform"
                  style={{ 
                    borderColor: day.color,
                    backgroundColor: selectedDay === index ? 'transparent' : day.color + '1A', // 10% opacity in light mode
                  }}
                >
                  <div className="dark:bg-[#111] absolute inset-0 rounded-[1.8rem] -z-10 bg-transparent"></div> {/* Keep dark mode bg dark */}
                  <div className="flex justify-between items-start mb-8">
                    <span 
                      className="text-stone-900 font-mono font-bold text-sm px-4 py-1 rounded-full uppercase shadow-[2px_2px_0px_#000]"
                      style={{ backgroundColor: day.color }}
                    >
                      {day.type}
                    </span>
                    <span className="font-black text-5xl opacity-30 select-none" style={{ color: day.color }}>0{index + 1}</span>
                  </div>
                  <h3 className="text-4xl font-black uppercase mb-2 dark:text-white leading-tight">
                    {index === 0 ? "Tinkering" : index === 1 ? "Evolution" : "Showdown"}
                  </h3>
                  <p 
                    className="font-mono text-xs font-bold px-2 py-1 rounded mb-4 w-fit text-stone-900 border-2 border-stone-900 shadow-[2px_2px_0px_#000]"
                    style={{ backgroundColor: day.color }}
                  >
                    {day.time}
                  </p>
                  <p className="text-lg font-medium leading-relaxed dark:text-stone-300 mb-6">
                    {index === 0 
                      ? "Software and electronics hands-on simulations. Map out your logic in a digital sandbox."
                      : index === 1 
                        ? "AI & ML understanding and hands-on demo. Explore the potential of automated minds."
                        : "Physical build-a-thon prototype and debate. Pitch your vision for the future."
                    }
                  </p>
                  <div 
                    className="mt-auto flex items-center gap-2 font-mono text-sm font-black group-hover:gap-4 transition-all"
                    style={{ color: index === 0 ? '#B8860B' : index === 1 ? '#4B0082' : '#006400' }} // Darker variants for readable text
                  >
                    <span className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded cursor-pointer">VIEW FULL SCHEDULE <Plus size={16} className="inline ml-1" /></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedDay !== null && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedDay(null)}
                  className="absolute inset-0 bg-stone-900/60 backdrop-blur-md"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-stone-950 border-[4px] border-stone-900 dark:border-white rounded-[2rem] shadow-[12px_12px_0px_0px_rgba(28,25,23,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)] p-6 md:p-12"
                >
                  <button
                    onClick={() => setSelectedDay(null)}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
                  >
                    <X size={32} />
                  </button>

                  <div className="mb-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="font-mono font-black text-xl px-4 py-1 rounded-lg text-stone-900 uppercase"
                        style={{ backgroundColor: roadmapData[selectedDay].color }}
                      >
                        {roadmapData[selectedDay].day}
                      </span>
                      <span className="font-mono font-bold text-stone-500">{roadmapData[selectedDay].date} // {roadmapData[selectedDay].time}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
                      {roadmapData[selectedDay].title}
                    </h2>
                    <div className="p-4 bg-stone-50 dark:bg-stone-900 border-l-[6px] border-stone-900 dark:border-white" style={{ borderLeftColor: roadmapData[selectedDay].color }}>
                      <p className="font-mono text-sm font-bold uppercase tracking-widest text-stone-500 mb-2">Primary Objective</p>
                      <p className="text-xl font-bold italic leading-relaxed">"{roadmapData[selectedDay].objective}"</p>
                    </div>
                  </div>

                  <div className="space-y-12">
                    {roadmapData[selectedDay].sessions ? (
                      <div className="space-y-6">
                        {roadmapData[selectedDay].sessions.map((session, idx) => (
                          <div key={idx} className="group relative">
                            <div className="pl-8 border-l-2 border-stone-200 dark:border-stone-800 group-hover:border-stone-900 dark:group-hover:border-white transition-colors">
                              <div
                                className="absolute left-0 top-0 w-3 h-3 rounded-full -translate-x-[7px] border-2 border-stone-900 dark:border-white bg-white dark:bg-stone-950"
                                style={{ backgroundColor: roadmapData[selectedDay].color }}
                              ></div>
                              <h4 className="text-xl font-black uppercase mb-1">{session.title}</h4>
                              <p className="text-stone-600 dark:text-stone-400 font-medium">{session.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      roadmapData[selectedDay].slots?.map((slot, sIdx) => (
                        <div key={sIdx} className="space-y-6">
                          <div className="flex items-center gap-4">
                            <h3 className="text-2xl font-black bg-stone-900 text-white dark:bg-white dark:text-stone-900 px-4 py-1 skew-x-[-10deg]">
                              {slot.name}
                            </h3>
                            <span className="font-mono font-bold text-stone-500">{slot.time}</span>
                          </div>
                          <div className="space-y-6">
                            {slot.sessions.map((session, idx) => (
                              <div key={idx} className="group relative">
                                <div className="pl-8 border-l-2 border-stone-200 dark:border-stone-800 group-hover:border-stone-900 dark:group-hover:border-white transition-colors">
                                  <div
                                    className="absolute left-0 top-0 w-3 h-3 rounded-full -translate-x-[7px] border-2 border-stone-900 dark:border-white bg-white dark:bg-stone-950"
                                    style={{ backgroundColor: roadmapData[selectedDay].color }}
                                  ></div>
                                  <h4 className="text-xl font-black uppercase mb-1">{session.title}</h4>
                                  <p className="text-stone-600 dark:text-stone-400 font-medium">{session.detail}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="mt-16 pt-8 border-t-2 border-stone-100 dark:border-stone-900 flex justify-between items-center">
                    <p className="font-mono text-xs font-bold text-stone-400 uppercase tracking-widest">Horizon 1.0 // Solarpunk Corps</p>
                    <button
                      onClick={() => setSelectedDay(null)}
                      className="bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-8 py-3 rounded-xl font-black uppercase hover:scale-105 transition-transform"
                    >
                      Close Details
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
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
