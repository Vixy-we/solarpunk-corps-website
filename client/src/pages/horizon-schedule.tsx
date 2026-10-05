import React from 'react';
import { Link } from 'wouter';
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
          <span className="block text-white drop-shadow-[5px_5px_0px_#27AE60] md:drop-shadow-[12px_12px_0px_#27AE60]">HORIZON 2.0</span>
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
    day: "DAY 1",
    date: "3:00–6:00 PM",
    time: "3 PM",
    type: "Virtual",
    title: "Foundation",
    summary: "Build the foundation. Explore robotics, electronics, intelligent systems, AI, and sustainability through hands-on learning.",
    objective: "Build the foundation for intelligent technology by understanding how mechanical systems, electronics, programming, and Artificial Intelligence come together to create robotics and solve real-world problems.",
    sessions: [
      { title: "Robotics, Electronics & Intelligent Systems", detail: "Introduction to robotics, electronics, and intelligent systems." },
      { title: "Sensors, Actuators, Motors & Controllers", detail: "Understanding the fundamental components that allow machines to sense, move, and respond." },
      { title: "AI Fundamentals & Technological Advancements", detail: "Explore the fundamentals of Artificial Intelligence and the rapidly evolving landscape of intelligent technologies." },
      { title: "Future Visions", detail: "Exploring how basic mechanical engineering, electronics, programming, and Artificial Intelligence act as the bridge to build robotics systems and solve real-world problems." },
      { title: "Future Scope of Robotics & AI", detail: "Explore where robotics, automation, intelligent systems, and AI can lead across engineering, industry, sustainability, and society." },
      { title: "Sustainability & Real-World Challenges", detail: "Connect technological development with real-world environmental and societal challenges." },
      { title: "Robotics & AI for Environmental and Societal Needs", detail: "Explore how intelligent technologies can be applied to practical challenges involving people, resources, infrastructure, and the environment." },
      { title: "Technical & Logical Quiz", detail: "Individual technical and logical assessment." },
    ],
    color: "#FFE975"
  },
  {
    day: "DAY 2",
    date: "3:00–6:00 PM",
    time: "3 PM",
    type: "Virtual",
    title: "Intelligence",
    summary: "Put intelligence into action. Explore AI, computer vision, and simulation while building mini workable solutions.",
    objective: "Put intelligence into action by using AI, computer vision, and simulation to develop mini workable solutions addressing real-world or sustainability challenges.",
    sessions: [
      { title: "AI & Machine Learning Fundamentals", detail: "Understand the fundamental concepts behind Artificial Intelligence and Machine Learning." },
      { title: "Computer Vision with OpenCV & MediaPipe", detail: "Explore how machines interpret visual information using computer vision tools." },
      { title: "Camera-Based Intelligent Systems", detail: "Build systems that use cameras and visual information to understand and respond to their surroundings." },
      { title: "Simulation with Tinkercad & Wokwi", detail: "Design and test ideas virtually before moving toward physical implementation." },
      { title: "Team Mini Projects", detail: "Work in teams to create mini workable projects addressing a real-world or sustainability challenge." },
      { title: "Technology Applied to Purpose", detail: "Projects may address resource efficiency, environmental observation, safety, accessibility, health, responsible infrastructure, or other societal needs." },
      { title: "Resource-Conscious Development", detail: "Use simulation to test ideas before physical implementation, supporting safer and more resource-conscious development." },
    ],
    color: "#B5A1E5"
  },
  {
    day: "DAY 3",
    date: "3:00–6:00 PM",
    time: "3 PM",
    type: "Fun Event",
    title: "Robo Race",
    summary: "Take control. Race through obstacles, test robotic systems, and challenge your control and coordination.",
    objective: "Put robotic systems to the test through hands-on control, navigation, obstacle handling, and coordinated system response.",
    sessions: [
      { title: "Hands-On Robotic Control", detail: "Take control of a physical robotic system and understand how it responds to commands." },
      { title: "Motors, Sensors & Navigation", detail: "Work with motors and sensors to control movement and navigate the race environment." },
      { title: "Obstacle Handling", detail: "Test how the robotic system responds to obstacles and changing conditions." },
      { title: "Control & Coordination", detail: "Challenge your control, timing, coordination, and system response." },
    ],
    color: "#A1E4A3"
  },
  {
    day: "DAY 4",
    date: "10:00 AM–1:00 PM",
    time: "10 AM & 3 PM",
    type: "Physical",
    title: "Buildathon",
    summary: "From problem to prototype to impact. Build a working solution within resource and time constraints.",
    objective: "Turn a real-world problem into a working prototype through resource-conscious design, rapid building, and practical engineering.",
    slots: [
      {
        time: "10:00 AM–1:00 PM",
        name: "Hardware Buildathon — Part I",
        sessions: [
          { title: "Real-World Problem Statement", detail: "Teams receive a problem statement based on an environmental, social, or resource challenge." },
          { title: "100-Credit Component Marketplace", detail: "Each team receives 100 credits to select components from the available marketplace." },
          { title: "Resource Selection", detail: "Choose components strategically while staying within the available credit limit." },
          { title: "Problem & Context Analysis", detail: "Analyse the environmental or societal context behind the assigned problem." },
          { title: "Design, Build & Program", detail: "Design, assemble, and program a functional prototype within the given time." },
        ]
      },
      {
        time: "3:00–6:00 PM",
        name: "Buildathon — Part II & Showcase",
        sessions: [
          { title: "Continue, Integrate & Test", detail: "Continue development and integrate the selected components into the prototype." },
          { title: "Debugging & Optimization", detail: "Identify problems, improve system performance, and optimize the design." },
          { title: "Resource-Conscious Design", detail: "Evaluate how effectively the team used its limited resources." },
          { title: "Working Demonstration", detail: "Demonstrate the working solution to the judges." },
          { title: "Practical Impact", detail: "Explain how the proposed solution addresses the given problem." },
          { title: "Future Scope & Improvements", detail: "Identify limitations, possible improvements, and future development." },
          { title: "UN SDG Connection", detail: "Explain the relevant Sustainable Development Goal connected to the project." },
          { title: "Technical Pitch & Judging", detail: "Present the solution, technical approach, impact, and future scope before judging." },
          { title: "Results & Closure", detail: "Final evaluation, results, and closing of HORIZON 2.0." },
        ]
      }
    ],
    color: "#FFB17A"
  }
];


export default function HorizonSchedule() {
  const [selectedDay, setSelectedDay] = React.useState<number | null>(null);
  const [lightboxImg, setLightboxImg] = React.useState<string | null>(null);

  React.useEffect(() => {
    const isModalOpen = selectedDay !== null || lightboxImg !== null;
    const previousOverflow = document.body.style.overflow;

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedDay, lightboxImg]);

  return (
    <div className="min-h-screen bg-[#F4F4F0] dark:bg-background text-stone-900 dark:text-foreground font-sans selection:bg-[#A1E4A3] selection:text-stone-900 overflow-x-hidden transition-colors duration-300">

      <SEO
        title="Horizon 2.0: Beyond the Machine"
        description="Discover Horizon 2.0, Solarpunk Corps' flagship technical workshop at BIET Jhansi. Explore robotics, electronics, AI, and sustainable development through hands-on engineering, simulation, and purposeful innovation. Horizon 1.0 launched the series in March 2026."
        image="/hourglass.webp"
        keywords={[
          "Horizon 2.0",
          "Solarpunk Corps",
          "BIET Jhansi",
          "robotics workshop",
          "AI workshop",
          "electronics",
          "sustainable development",
          "hands-on engineering",
          "Horizon 1.0",
        ]}
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
            <div className="inline-flex items-center gap-2 bg-[#FFD33D] dark:bg-[#FFD33D]/20 border-[3px] border-stone-900 dark:border-white px-4 py-2 rounded-full font-mono font-bold text-sm shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]">
              <span className="w-2 h-2 rounded-full bg-stone-900 dark:bg-[#FFD33D]"></span>
              <span className="dark:text-[#FFD33D]">Flagship Event</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
              The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 to-stone-600 dark:from-white dark:to-stone-400 block my-2">Experimental</span>
              Sandbox
            </h1>

            <p className="mt-4 font-mono font-bold text-sm uppercase tracking-widest text-stone-600 dark:text-stone-400">
              A 4-day immersive workshop blending Robotics, AI, and sustainability.
            </p>

            <div className="flex flex-wrap gap-3 font-mono text-lg md:text-xl font-bold">
              <span className="bg-[#FFE975] dark:bg-[#FFE975]/30 dark:text-white border-[3px] border-stone-900 dark:border-white px-4 py-1 rounded-lg shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]">October, 2026</span>
              <span className="bg-[#B5A1E5] dark:bg-[#B5A1E5]/30 dark:text-white border-[3px] border-stone-900 dark:border-white px-4 py-1 rounded-lg shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]">Horizon 2.0</span>
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
                <strong className="font-black text-xl dark:text-white">Our Flagship Event.</strong> Horizon is our flagship event, and we started our first chapter, <strong>Horizon 1.0: Beyond the Machine</strong>, in March 2026. We blended hardware hacking, conceptual AI, and sustainability into one epic weekend.
                <br /><br />
                <span className="font-bold text-[#FF5757] dark:text-[#FF88A8]">Horizon 2.0 is coming this OCTOBER...</span>
              </p>
              <button 
                onClick={() => document.getElementById('glimpses-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-3 w-full bg-stone-900 dark:bg-white text-[#F4F4F0] dark:text-stone-900 font-black text-xl py-4 px-6 rounded-xl border-[3px] border-stone-900 dark:border-white hover:bg-[#A1E4A3] hover:text-stone-900 transition-colors"
              >
                Visit glimpses of our first
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
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
              4 Days of Intelligence, Simulation, Competition, and Physical Construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
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
                    backgroundColor: selectedDay === index ? 'transparent' : day.color + '1A',
                  }}
                >
                  <div className="dark:bg-[#111] absolute inset-0 rounded-[1.8rem] -z-10 bg-transparent"></div>

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
                    {day.title}
                  </h3>

                  <p 
                    className="font-mono text-xs font-bold px-2 py-1 rounded mb-4 w-fit text-stone-900 border-2 border-stone-900 shadow-[2px_2px_0px_#000]"
                    style={{ backgroundColor: day.color }}
                  >
                    {day.time}
                  </p>

                  <p className="text-lg font-medium leading-relaxed dark:text-stone-300 mb-6">
                    {day.summary}
                  </p>

                  <div 
                    className="mt-auto flex items-center gap-2 font-mono text-sm font-black group-hover:gap-4 transition-all"
                    style={{ color: index === 0 ? '#B8860B' : index === 1 ? '#4B0082' : index === 2 ? '#006400' : '#8B4513' }}
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
                  className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto overscroll-contain bg-white dark:bg-stone-950 border-[4px] border-stone-900 dark:border-white rounded-[2rem] shadow-[12px_12px_0px_0px_rgba(28,25,23,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)] p-6 md:p-12"
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
                    <p className="font-mono text-xs font-bold text-stone-400 uppercase tracking-widest">Horizon 2.0 // Solarpunk Corps</p>
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
              Use simulation to test ideas before physical implementation. Explore system behaviour, develop logic, and build solutions in a safer, more resource-conscious digital space.
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
              Translate ideas into working systems. Build, integrate, test, and iterate with your team to turn a real-world problem into a functional prototype.
            </p>
          </BrutalistCard>

          <BrutalistCard colorClass="bg-[#B5A1E5] dark:bg-[#B5A1E5]/30">
            <div className="flex justify-between items-start mb-12">
              <h3 className="text-4xl font-black dark:text-white">Intelligence</h3>
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-full border-[3px] border-stone-900 dark:border-white shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]">
                <BrainCircuit size={32} className="dark:text-white" />
              </div>
            </div>
            <p className="text-lg font-medium leading-relaxed dark:text-zinc-200">
              Explore AI, computer vision, and intelligent systems. Understand how data, algorithms, and perception can be applied to real-world challenges and purposeful technology.
            </p>
          </BrutalistCard>

          <BrutalistCard colorClass="bg-[#FFB17A] dark:bg-[#FFB17A]/30 lg:col-span-2">
            <div className="flex justify-between items-start mb-12">
              <h3 className="text-4xl font-black dark:text-white">Impact</h3>
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-full border-[3px] border-stone-900 dark:border-white shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]">
                <MessageSquareWarning size={32} className="dark:text-white" />
              </div>
            </div>
            <p className="text-xl font-medium leading-relaxed max-w-xl dark:text-zinc-200">
              Connect engineering with purpose. Explain the problem, defend your design choices, demonstrate practical impact, and show how your solution can contribute to a more sustainable future.
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
              Build skills, solve problems, and turn technology into purposeful solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-[3px] border-[#F4F4F0] dark:border-zinc-800 rounded-2xl p-6 hover:bg-[#F4F4F0] hover:text-stone-900 dark:hover:bg-zinc-900 dark:hover:text-[#A1E4A3] transition-colors group">
              <div className="text-[#A1E4A3] group-hover:text-stone-900 dark:group-hover:text-[#A1E4A3] mb-6 font-mono text-3xl font-black">*</div>
              <h4 className="text-2xl font-black mb-4 flex items-center gap-2">
                <Cpu className="group-hover:animate-pulse" /> Hardware & Robotics
              </h4>
              <p className="font-medium opacity-90 group-hover:opacity-100">
                Work with sensors, actuators, motors, controllers, and real hardware. Move from system concepts and simulations to functional robotic prototypes.
              </p>
            </div>

            <div className="border-[3px] border-[#F4F4F0] dark:border-zinc-800 rounded-2xl p-6 hover:bg-[#F4F4F0] hover:text-stone-900 dark:hover:bg-zinc-900 dark:hover:text-[#7AC0FF] transition-colors group">
              <div className="text-[#7AC0FF] group-hover:text-stone-900 dark:group-hover:text-[#7AC0FF] mb-6 font-mono text-3xl font-black">+</div>
              <h4 className="text-2xl font-black mb-4 flex items-center gap-2">
                <TerminalSquare className="group-hover:animate-pulse" /> AI & Computer Vision
              </h4>
              <p className="font-medium opacity-90 group-hover:opacity-100">
                Explore AI and machine learning fundamentals, computer vision with OpenCV and MediaPipe, and camera-based intelligent systems.
              </p>
            </div>

            <div className="border-[3px] border-[#F4F4F0] dark:border-zinc-800 rounded-2xl p-6 hover:bg-[#F4F4F0] hover:text-stone-900 dark:hover:bg-zinc-900 dark:hover:text-[#FFB17A] transition-colors group">
              <div className="text-[#FFB17A] group-hover:text-stone-900 dark:group-hover:text-[#FFB17A] mb-6 font-mono text-3xl font-black">#</div>
              <h4 className="text-2xl font-black mb-4 flex items-center gap-2">
                <Zap className="group-hover:animate-bounce" /> Resourceful Prototyping
              </h4>
              <p className="font-medium opacity-90 group-hover:opacity-100">
                Navigate a component marketplace with limited credits. Manage resources, collaborate, and build a working solution against the clock.
              </p>
            </div>

            <div className="border-[3px] border-[#F4F4F0] dark:border-zinc-800 rounded-2xl p-6 hover:bg-[#F4F4F0] hover:text-stone-900 dark:hover:bg-zinc-900 dark:hover:text-[#B5A1E5] transition-colors group">
              <div className="text-[#B5A1E5] group-hover:text-stone-900 dark:group-hover:text-[#B5A1E5] mb-6 font-mono text-3xl font-black">~</div>
              <h4 className="text-2xl font-black mb-4 flex items-center gap-2">
                <Globe2 className="group-hover:rotate-12 transition-transform" /> Purpose & Impact
              </h4>
              <p className="font-medium opacity-90 group-hover:opacity-100">
                Present your solution, explain its practical impact, connect it with relevant UN SDGs, and define its future scope and improvements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* IMAGE CAROUSEL */}
      <section id="glimpses-section" className="py-24 bg-[#FFD33D]/20 dark:bg-zinc-900 border-y-[4px] border-stone-900 dark:border-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative">
          <div className="absolute left-4 md:left-12 top-0 hidden lg:block transform -rotate-12">
            <span className="font-writing text-2xl font-bold italic">See the action</span>
            <svg className="w-12 h-12 mt-2 ml-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </div>
          <div className="absolute right-4 md:right-12 bottom-0 hidden lg:block transform rotate-12">
            <span className="font-writing text-2xl font-bold italic">Unforgettable</span>
            <svg className="w-12 h-12 mt-2 mr-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path></svg>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black inline-block bg-white dark:bg-zinc-800 border-[3px] border-stone-900 dark:border-white px-6 py-3 shadow-[8px_8px_0px_rgba(28,25,23,1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,0.8)] rotate-[-1deg] text-stone-900 dark:text-white uppercase">
            Glimpses of Horizon 1.0
          </h2>
          <p className="mt-8 font-mono text-xl max-w-2xl mx-auto dark:text-zinc-300 font-bold">
            Relive the energy. The late nights, the breakthroughs, and the community we built together.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-[100vw] overflow-hidden py-4">
          <motion.div 
            className="flex gap-6 md:gap-8 px-4 w-max hover:[animation-play-state:paused]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 50, repeat: Infinity }}
          >
            {[
              "/Horizon1/DayOne1.webp",
              "/Horizon1/DayTwo1.webp",
              "/Horizon1/DayThree1.webp",
              "/Horizon1/DayOne2.webp",
              "/Horizon1/DayTwo2.webp",
              "/Horizon1/DayThree2.webp",
              "/Horizon1/DayTwo3.webp",
              "/Horizon1/DayThree3.webp",
              "/Horizon1/DayTwo4.webp",
              "/Horizon1/DayThree4.webp",
              "/Horizon1/DayTwo5.webp",
              "/Horizon1/DayThree5.webp",
            ].map((src, idx) => (
              <div 
                key={idx} 
                className={`flex-none w-[280px] md:w-[350px] lg:w-[400px] h-[350px] md:h-[450px] shrink-0 
                            border-[4px] border-stone-900 dark:border-white shadow-[8px_8px_0px_rgba(28,25,23,1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,0.8)] 
                            bg-white p-2 md:p-3 cursor-pointer transition-all duration-300 group
                            hover:-translate-y-4 hover:shadow-[16px_16px_0px_rgba(28,25,23,1)]
                            ${idx % 2 === 0 ? 'rotate-2 hover:rotate-0' : '-rotate-2 hover:rotate-0'}
                          `}
                onClick={() => setLightboxImg(src)}
              >
                <img 
                  src={src} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  alt={`Horizon Highlight ${idx + 1}`} 
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center relative z-10 px-4">
          <p className="font-mono text-xl font-bold mb-6 dark:text-zinc-300">Want to see more?</p>
          <Link href="/events/horizon1-2026">
            <a className="group relative inline-flex items-center justify-center gap-4 bg-[#FF5757] text-white font-black text-2xl md:text-4xl py-6 px-12 rounded-2xl border-[4px] border-stone-900 dark:border-white shadow-[8px_8px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_rgba(28,25,23,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
              TAKE A PEEK
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
      
      {/* FULLSCREEN LIGHTBOX */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-[100] bg-stone-900/95 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.button
              className="absolute top-6 right-6 bg-[#FF5757] text-white w-12 h-12 flex items-center justify-center text-2xl font-black border-[3px] border-stone-900 shadow-[4px_4px_0px_rgba(28,25,23,1)] hover:translate-y-1 hover:shadow-none transition-all z-[101]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => { e.stopPropagation(); setLightboxImg(null); }}
            >
              <X size={24} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightboxImg} alt="Fullscreen" className="max-w-full max-h-[85vh] object-contain border-[4px] border-white shadow-[8px_8px_0px_rgba(255,255,255,0.2)]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
