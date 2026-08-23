import React, { useState, useEffect } from 'react';
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

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

const HORIZON_PHOTOS = [
  "/Horizon1/Inauguration1.webp",
  "/Horizon1/Inauguration2.webp",
  "/Horizon1/Inauguration3.webp",
  "/Horizon1/Inauguration4.webp",
  "/Horizon1/DayOne1.webp",
  "/Horizon1/DayOne2.webp",
  "/Horizon1/DayTwo1.webp",
  "/Horizon1/DayTwo2.webp",
  "/Horizon1/DayTwo3.webp",
  "/Horizon1/DayTwo4.webp",
  "/Horizon1/DayTwo5.webp",
  "/Horizon1/DayTwo6.webp",
  "/Horizon1/DayTwo7.webp",
  "/Horizon1/DayThree1.webp",
  "/Horizon1/DayThree2.webp",
  "/Horizon1/DayThree3.webp",
  "/Horizon1/DayThree4.webp",
  "/Horizon1/DayThree5.webp",
  "/Horizon1/DayThree12.webp",
  "/Horizon1/DayThree7.webp",
  "/Horizon1/DayThree8.webp",
  "/Horizon1/DayThree9.webp",
  "/Horizon1/DayThree10.webp",
] as const;

const hz = (i: number) => HORIZON_PHOTOS[i % HORIZON_PHOTOS.length];

const HORIZON_IMG_HOVER =
  "grayscale hover:grayscale-0 transition-all duration-500";

const HORIZON_IMG_GROUP_HOVER =
  "grayscale group-hover:grayscale-0 transition-all duration-500";

const ROADMAP_PHOTO_CLASS =
  `w-full h-48 object-cover border-[3px] border-stone-900 dark:border-white shadow-[6px_6px_0px_rgba(28,25,23,1)] hover:scale-[1.02] cursor-pointer bg-white p-2 ${HORIZON_IMG_HOVER}`;

function RoadmapPhoto({
  src,
  alt,
  className = "",
  onZoom,
}: {
  src: string;
  alt: string;
  className?: string;
  onZoom: (src: string) => void;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${ROADMAP_PHOTO_CLASS} ${className}`}
      onClick={() => onZoom(src)}
    />
  );
}

function HeartPhoto({
  src,
  gridClass,
  imgClass = `w-full h-full object-cover group-hover:scale-110 mix-blend-multiply group-hover:mix-blend-normal ${HORIZON_IMG_GROUP_HOVER}`,
  onZoom,
}: {
  src: string;
  gridClass: string;
  imgClass?: string;
  onZoom: (src: string) => void;
}) {
  return (
    <div
      className={`${gridClass} aspect-square border-[4px] border-stone-900 overflow-hidden relative group cursor-pointer`}
      onClick={() => onZoom(src)}
    >
      <img src={src} alt="Gallery" className={imgClass} />
    </div>
  );
}

// Swap paths when you add group/family photos to client/public/Horizon1/
const VANGUARD_GROUP_PHOTO = "/Horizon1/DayThree10.jpg";
const CHAMPIONS_GROUP_PHOTO = "/Horizon1/AwardGroup.jpeg";
const SPC_FAMILY_PHOTOS = [
  "/Horizon1/TeamSPC1.webp",
  "/Horizon1/TeamSPC2.webp",
  "/Horizon1/TeamSPC3.webp",
] as const;

function FeaturePhotoBox({
  src,
  alt,
  caption,
  onZoom,
  className = "",
  imageClassName = "h-64 md:h-80 lg:h-[22rem]",
  variant = "light",
}: {
  src: string;
  alt: string;
  caption?: string;
  onZoom: (src: string) => void;
  className?: string;
  imageClassName?: string;
  variant?: "light" | "dark";
}) {
  const frame =
    variant === "dark"
      ? "border-[4px] border-white bg-stone-800 p-3 shadow-[10px_10px_0px_#FFF]"
      : "border-[4px] border-stone-900 bg-white p-3 shadow-[10px_10px_0px_rgba(28,25,23,1)]";

  return (
    <div
      className={`group w-full cursor-pointer transition-transform hover:-translate-y-1 ${className}`}
      onClick={() => onZoom(src)}
    >
      <div className={frame}>
        <img
          src={src}
          alt={alt}
          className={`w-full ${imageClassName} object-cover ${HORIZON_IMG_GROUP_HOVER}`}
        />
      </div>
      {caption && (
        <p
          className={`mt-4 font-black text-xl md:text-2xl text-center ${
            variant === "dark" ? "text-white" : "text-stone-900"
          }`}
        >
          {caption}
        </p>
      )}
    </div>
  );
}

function TableScatterPhoto({
  src,
  alt,
  rotation,
  lift = "",
  onZoom,
  size = "default",
}: {
  src: string;
  alt: string;
  rotation: string;
  lift?: string;
  onZoom: (src: string) => void;
  size?: "default" | "featured";
}) {
  const sizeClasses =
    size === "featured"
      ? "max-w-[300px] sm:max-w-[400px] md:max-w-[520px] lg:max-w-[620px] z-20"
      : "max-w-[180px] sm:max-w-[220px] md:max-w-[260px] z-10";
  const aspectClass = size === "featured" ? "aspect-[16/10]" : "aspect-[4/5]";

  return (
    <div
      className={`group relative w-full ${sizeClasses} cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:rotate-0 hover:-translate-y-2 ${rotation} ${lift}`}
      onClick={() => onZoom(src)}
    >
      <div className="bg-white p-3 md:p-4 border-[4px] border-stone-900 shadow-[10px_10px_0px_rgba(28,25,23,1)] group-hover:shadow-[14px_14px_0px_rgba(28,25,23,1)]">
        <img
          src={src}
          alt={alt}
          className={`w-full ${aspectClass} object-cover ${HORIZON_IMG_GROUP_HOVER}`}
        />
      </div>
    </div>
  );
}

function MainHero() {
  return (
    <header className="relative w-full min-h-[90vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#F4F4F0] text-stone-900 py-20 md:py-32 px-4 md:px-12 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#111_1px,transparent_1px)]">
      {/* Brutalist Shapes */}
      <div className="absolute top-10 right-10 w-32 md:w-48 h-32 md:h-48 bg-[#FF88A8] border-[4px] border-stone-900 rounded-full shadow-[8px_8px_0px_rgba(28,25,23,1)] rotate-12"></div>
      <div className="absolute bottom-10 left-10 w-40 md:w-64 h-40 md:h-64 bg-[#4A90E2] border-[4px] border-stone-900 rounded-tl-full rounded-br-full shadow-[12px_12px_0px_rgba(28,25,23,1)] -rotate-12"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-block bg-[#FFD33D] text-black px-6 md:px-8 py-2 md:py-3 border-[4px] border-stone-900 mb-6 md:mb-8 transform rotate-2 hover:-rotate-1 transition-all duration-300 shadow-[6px_6px_0px_rgba(28,25,23,1)]">
          <span className="font-black tracking-[0.1em] md:tracking-[0.2em] uppercase text-sm md:text-xl whitespace-nowrap">Event Wrap-up // 2026</span>
        </div>

        <h1 className="text-7xl sm:text-8xl md:text-[13rem] lg:text-[15rem] font-black tracking-tighter leading-[0.8] md:leading-[0.8] uppercase mb-12 md:mb-16">
          <span className="block text-[#FF5757] drop-shadow-[5px_5px_0px_rgba(28,25,23,1)] md:drop-shadow-[12px_12px_0px_rgba(28,25,23,1)] stroke-stone-900 stroke-2">HORIZON</span>
          <span className="block text-stone-900 mt-2 md:mt-4 transform translate-x-1 sm:translate-x-4 text-[0.45em] md:text-[0.45em] tracking-[0.05em] leading-none drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">THE ARCHIVE</span>
        </h1>

        <div className="max-w-4xl mx-auto relative px-4 sm:px-2">
          <div className="absolute -inset-1 md:-inset-4 bg-stone-900 rounded-xl md:rounded-2xl transform -rotate-1"></div>
          <p className="relative z-10 text-lg sm:text-xl md:text-2xl font-black md:font-medium leading-relaxed tracking-tight text-[#F4F4F0] p-6 md:p-8 bg-stone-900 rounded-lg border-[4px] border-stone-900 shadow-[8px_8px_0px_rgba(28,25,23,1)] uppercase text-left sm:text-center">
            Welcome, co-pioneers! To kick off Solarpunk Corps, we hosted our very first hands-on build-a-thon. We blended hardware hacking, conceptual AI, and sustainability into one epic weekend. You brought your curiosity, teamed up, and engineered systems that actually matter.
            <br className="hidden md:block" /><br className="hidden md:block" />
            <span className="text-[#FFD33D] font-black italic">From Circuitry to Conscious Design.</span>
            <span className="flex flex-wrap justify-start sm:justify-center gap-3 mt-6">
              <span className="text-stone-900 bg-[#FFD33D] px-4 py-1 border-[3px] border-stone-900 shadow-[3px_3px_0px_rgba(255,255,255,0.8)]">BUILD</span>
              <span className="text-stone-900 bg-[#FF88A8] px-4 py-1 border-[3px] border-stone-900 shadow-[3px_3px_0px_rgba(255,255,255,0.8)]">SIMULATE</span>
              <span className="text-[#F4F4F0] bg-[#4A90E2] px-4 py-1 border-[3px] border-stone-900 shadow-[3px_3px_0px_rgba(255,255,255,0.8)]">EVOLVE</span>
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Horizon2026WrapUp() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    if (lightboxImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [lightboxImg]);

  return (
    <div className="min-h-screen bg-[#F4F4F0] dark:bg-background text-stone-900 dark:text-foreground font-sans selection:bg-[#FF88A8] selection:text-white overflow-x-hidden transition-colors duration-300">
      <SEO
        title="Horizon 1.0 Wrap-Up - Solarpunk Corps"
        description="Horizon 2026 workshop wrap-up by Solarpunk Corps. Relive the epic weekend of hardware hacking, conceptual AI, and sustainability."
      />
      <Navigation />

      <MainHero />

      {/* MARQUEE */}
      <div className="w-full bg-[#FFD33D] dark:bg-[#FFD33D]/90 border-y-[4px] border-stone-900 py-4 overflow-hidden relative flex items-center z-20 shadow-[0px_4px_0px_rgba(28,25,23,1)]">
        <div className="animate-marquee font-mono font-bold text-xl md:text-2xl whitespace-nowrap text-stone-900 flex items-center gap-4 min-w-full">
          <span>HARMONY BETWEEN TECH, NATURE, AND PEOPLE</span> <span className="mx-2">*</span>
          <span>NO INSTRUCTION MANUALS</span> <span className="mx-2">*</span>
          <span>PROTOTYPE AND HACK</span> <span className="mx-2">*</span>
          <span>QUESTION ASSUMPTIONS</span> <span className="mx-2">*</span>
          <span>HARMONY BETWEEN TECH, NATURE, AND PEOPLE</span> <span className="mx-2">*</span>
          <span>NO INSTRUCTION MANUALS</span> <span className="mx-2">*</span>
          <span>PROTOTYPE AND HACK</span> <span className="mx-2">*</span>
          <span>QUESTION ASSUMPTIONS</span> <span className="mx-2">*</span>
        </div>
      </div>

      {/* IMAGE CAROUSEL */}
      <section className="py-24 bg-[#FFD33D]/20 dark:bg-zinc-900 border-y-[4px] border-stone-900 dark:border-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative">
          {/* Decorative arrows/text to mimic the reference image */}
          <div className="absolute left-4 md:left-12 top-0 hidden lg:block transform -rotate-12">
            <span className="font-writing text-2xl font-bold italic">See the action</span>
            <svg className="w-12 h-12 mt-2 ml-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </div>
          <div className="absolute right-4 md:right-12 bottom-0 hidden lg:block transform rotate-12">
            <span className="font-writing text-2xl font-bold italic">Unforgettable</span>
            <svg className="w-12 h-12 mt-2 mr-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path></svg>
          </div>

          <div className="inline-block bg-[#34D399] text-stone-900 font-black px-6 py-2 border-[3px] border-stone-900 shadow-[4px_4px_0px_rgba(28,25,23,1)] mb-6 transform -rotate-1">
            Glimpses of Horizon
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight text-stone-900 dark:text-white">
            Engage with the<br />Builders
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-mono font-medium dark:text-zinc-300">
            A look back at the chaos, the creativity, and the community that made Horizon 1.0 an absolute success.
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
              "/Horizon1/DayTwo5.webp",
              "/Horizon1/DayThree3.webp",
              "/Horizon1/DayTwo4.webp",
              "/Horizon1/DayThree4.webp",
              "/Horizon1/DayTwo3.webp",
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
                  className={`w-full h-full object-cover ${HORIZON_IMG_GROUP_HOVER}`}
                  alt={`Horizon Highlight ${idx + 1}`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* THE ARSENAL */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-black bg-white dark:bg-zinc-800 inline-block border-[3px] border-stone-900 dark:border-white px-4 py-2 shadow-[6px_6px_0px_rgba(28,25,23,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,0.8)]">The Arsenal</h2>
          <p className="mt-4 font-mono font-bold text-xl max-w-2xl dark:text-zinc-300">Think differently. Build confidently. Engineer with purpose.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BrutalistCard colorClass="bg-[#FF88A8] dark:bg-[#FF88A8]/40">
            <div className="w-12 h-12 bg-white dark:bg-zinc-800 border-[3px] border-stone-900 dark:border-white flex items-center justify-center text-2xl font-black mb-6 shadow-[3px_3px_0px_rgba(28,25,23,1)] dark:shadow-[3px_3px_0px_rgba(255,255,255,0.8)]">~</div>
            <h3 className="text-3xl font-black mb-3 dark:text-white">Simulate</h3>
            <p className="font-medium text-base border-t-2 border-stone-900 dark:border-white pt-4 dark:text-zinc-200">Mapped out logic in a digital sandbox. Tested theories, understood system behaviors, and pushed boundaries in a virtual space.</p>
          </BrutalistCard>

          <BrutalistCard colorClass="bg-[#FFD33D] dark:bg-[#FFD33D]/40">
            <div className="w-12 h-12 bg-white dark:bg-zinc-800 border-[3px] border-stone-900 dark:border-white flex items-center justify-center text-2xl font-black mb-6 shadow-[3px_3px_0px_rgba(28,25,23,1)] dark:shadow-[3px_3px_0px_rgba(255,255,255,0.8)]">*</div>
            <h3 className="text-3xl font-black mb-3 dark:text-white">Prototype</h3>
            <p className="font-medium text-base border-t-2 border-stone-900 dark:border-white pt-4 dark:text-zinc-200">Translated ideas into reality. Collaborated to hack together tangible solutions, iterating rapidly to build functional systems from scratch.</p>
          </BrutalistCard>

          <BrutalistCard colorClass="bg-[#4A90E2] text-white dark:bg-[#4A90E2]/40">
            <div className="w-12 h-12 bg-white text-stone-900 dark:bg-zinc-800 border-[3px] border-stone-900 dark:border-white flex items-center justify-center text-2xl font-black mb-6 shadow-[3px_3px_0px_rgba(28,25,23,1)] dark:shadow-[3px_3px_0px_rgba(255,255,255,0.8)]">?</div>
            <h3 className="text-3xl font-black mb-3">Intelligence</h3>
            <p className="font-medium text-base border-t-2 border-white dark:border-white pt-4">Explored the potential of automated minds. Understood how data shapes decisions and what it means to build responsible tech.</p>
          </BrutalistCard>
        </div>
      </section>

      {/* ROADMAP / TIMELINE */}
      <section className="py-24 bg-white dark:bg-zinc-900 border-y-[4px] border-stone-900 dark:border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black inline-block bg-[#34D399] dark:bg-[#34D399]/80 border-[3px] border-stone-900 dark:border-white px-6 py-3 shadow-[6px_6px_0px_rgba(28,25,23,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,0.8)] rotate-[1deg] text-stone-900">Event Roadmap</h2>
            <p className="mt-6 font-mono font-bold text-xl dark:text-zinc-300">March 27-29 // The Experimental Sandbox</p>
          </div>

          <div className="space-y-32">
            {/* Node: Inauguration */}
            <div className="relative flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/3 z-10">
                <BrutalistCard colorClass="bg-[#FFD33D] dark:bg-[#FFD33D]/90 rotate-[-2deg]" className="text-stone-900">
                  <h4 className="text-4xl font-black mb-2">Kick-Off</h4>
                  <p className="font-mono font-bold text-stone-800 mb-4 bg-white/50 inline-block px-2 py-1">Inauguration & Briefing</p>
                  <p className="font-medium text-lg border-t-2 border-stone-900 pt-4">The gathering of minds. Introduction to the event and roadmap.</p>
                </BrutalistCard>
              </div>
              <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                <RoadmapPhoto src="/Horizon1/Inauguration1.webp" alt="Kick-Off 1" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/Inauguration2.webp" alt="Kick-Off 2" className="translate-y-2" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/Inauguration3.webp" alt="Kick-Off 3" className="-translate-y-2" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/Inauguration4.webp" alt="Kick-Off 4" className="translate-y-2" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/Inauguration1.webp" alt="Kick-Off 5" className="md:col-span-2" onZoom={setLightboxImg} />
              </div>
            </div>

            {/* Node: Day 1 */}
            <div className="relative flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="lg:w-1/3 z-10">
                <BrutalistCard colorClass="bg-[#4A90E2] text-white rotate-[1deg]" className="dark:bg-[#4A90E2]/90 dark:text-white">
                  <div className="font-mono bg-white text-stone-900 inline-block px-2 py-1 border-[3px] border-stone-900 mb-4 text-sm font-bold shadow-[3px_3px_0px_rgba(28,25,23,1)]">3 PM, March 27</div>
                  <h4 className="text-4xl font-black mb-2">Virtual Tinkering</h4>
                  <p className="font-mono font-bold text-white/90 mb-4 bg-black/20 inline-block px-2 py-1">Day 01 // Software & Logic</p>
                  <p className="font-medium text-lg border-t-2 border-white pt-4">Software and electronics hands-on simulations. Teams mapped out their logic in a digital sandbox.</p>
                </BrutalistCard>
              </div>
              <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                <RoadmapPhoto src="/Horizon1/DayOne1.webp" alt="Virtual Tinkering 1" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayOne2.webp" alt="Virtual Tinkering 2" className="translate-y-3" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayOne3.webp" alt="Virtual Tinkering 3" className="-translate-y-2" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayOne4.webp" alt="Virtual Tinkering 4" className="md:col-span-2" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayOne5.webp" alt="Virtual Tinkering 5" className="translate-y-4" onZoom={setLightboxImg} />
              </div>
            </div>

            {/* Node: Day 2 */}
            <div className="relative flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/3 z-10">
                <BrutalistCard colorClass="bg-[#FF88A8] dark:bg-[#FF88A8]/90 rotate-[-1deg]" className="text-stone-900">
                  <div className="font-mono bg-white text-stone-900 inline-block px-2 py-1 border-[3px] border-stone-900 mb-4 text-sm font-bold shadow-[3px_3px_0px_rgba(28,25,23,1)]">3 PM, March 28</div>
                  <h4 className="text-4xl font-black mb-2">Evolution</h4>
                  <p className="font-mono font-bold text-stone-800 mb-4 bg-white/50 inline-block px-2 py-1">Day 02 // AI & ML Hands-on</p>
                  <p className="font-medium text-lg border-t-2 border-stone-900 pt-4">Training simple browser ML models. Learning not just how AI works, but when it fails and why data bias matters.</p>
                </BrutalistCard>
              </div>
              <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                <RoadmapPhoto src="/Horizon1/DayTwo1.webp" alt="Evolution 1" className="-translate-y-4" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayTwo2.webp" alt="Evolution 2" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayTwo3.webp" alt="Evolution 2" className="translate-y-3" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayTwo4.webp" alt="Evolution 3" className="translate-y-4 md:col-span-2" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayTwo5.webp" alt="Evolution 4" className="-translate-y-3" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayTwo6.webp" alt="Evolution 5" className="translate-y-4" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayTwo7.webp" alt="Evolution 6" className="translate-y-5" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayTwo9.webp" alt="Evolution 7" className="translate-y-6" onZoom={setLightboxImg} />
              </div>
            </div>

            {/* Node: Day 3 */}
            <div className="relative flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="lg:w-1/3 z-10">
                <BrutalistCard colorClass="bg-[#FF5757] text-white rotate-[2deg]" className="dark:bg-[#FF5757]/90 dark:text-white">
                  <div className="font-mono bg-white text-stone-900 inline-block px-2 py-1 border-[3px] border-stone-900 mb-4 text-sm font-bold shadow-[3px_3px_0px_rgba(28,25,23,1)]">3 PM, March 29</div>
                  <h4 className="text-4xl font-black mb-2">Showdown</h4>
                  <p className="font-mono font-bold text-white/90 mb-4 bg-black/20 inline-block px-2 py-1">Day 03 // Physical Buildathon</p>
                  <p className="font-medium text-lg border-t-2 border-white pt-4">Wiring up real sensors and actuators. Going from digital simulation to a physical MVP. The chaotic component marketplace.</p>
                </BrutalistCard>
              </div>
              <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                <RoadmapPhoto src="/Horizon1/DayThree12.webp" alt="Showdown 1" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayThree4.webp" alt="Showdown 2" className="translate-y-3" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayThree3.webp" alt="Showdown 2" className="translate-y-3" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayThree7.webp" alt="Showdown 3" className="translate-y-3" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayThree5.webp" alt="Showdown 4" className="translate-y-4" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayThree9.webp" alt="Showdown 5" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayThree2.webp" alt="Showdown 6" className="translate-y-3" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayThree1.webp" alt="Showdown 7" className="translate-y-4" onZoom={setLightboxImg} />
                <RoadmapPhoto src="/Horizon1/DayThree8.webp" alt="Showdown 8" className="translate-y-4" onZoom={setLightboxImg} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE VANGUARD */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black bg-white dark:bg-zinc-800 inline-block border-[3px] border-stone-900 dark:border-white px-6 py-3 shadow-[6px_6px_0px_rgba(28,25,23,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,0.8)] mb-6">The Vanguard</h2>
          <p className="font-mono font-bold text-lg max-w-3xl border-l-[4px] border-stone-900 dark:border-white pl-6 bg-white dark:bg-zinc-800 p-4 shadow-[4px_4px_0px_rgba(28,25,23,1)] dark:shadow-[4px_4px_0px_rgba(255,255,255,0.8)] dark:text-zinc-200">
            Props to every single builder who stepped into the sandbox. 3 days of grinding, breaking things, and building them back better.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "Autonomous Mobility", bg: "bg-[#FFD33D]", img: "/Horizon1/TeamA.webp" },
            { name: "Sun-Responsive Utility System", bg: "bg-[#FF88A8]", img: "/Horizon1/TeamB.webp" },
            { name: "Adaptive Crossing Guidance", bg: "bg-white text-stone-900", img: "/Horizon1/TeamC.webp" },
            { name: "Tilt-Responsive Stabiliser", bg: "bg-[#34D399]", img: "/Horizon1/TeamD.webp" },
            { name: "Intelligent Access Node", bg: "bg-[#4A90E2] text-white", img: "/Horizon1/TeamE.webp" },
            { name: "Intelligent Access Node", bg: "bg-white text-stone-900", img: "/Horizon1/TeamF.webp" },
            { name: "Adaptive Crossing Guidance", bg: "bg-[#FF5757] text-white", img: "/Horizon1/TeamG.webp" },
            { name: "Distress Alert System", bg: "bg-white text-stone-900", img: "/Horizon1/TeamH.webp" },
          ].map((team, idx) => (
            <div key={idx} className={`group p-4 md:p-6 border-[3px] border-stone-900 dark:border-white shadow-[4px_4px_0px_rgba(28,25,23,1)] dark:shadow-[4px_4px_0px_rgba(255,255,255,0.8)] text-center transition-transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_rgba(28,25,23,1)] dark:hover:shadow-[8px_8px_0px_rgba(255,255,255,0.8)] cursor-pointer flex flex-col items-center ${team.bg.includes('bg-white') ? 'dark:bg-zinc-800 dark:text-white' : team.bg}`} onClick={() => setLightboxImg(team.img)}>
              <div className="w-full h-32 md:h-40 mb-4 border-[3px] border-stone-900 bg-white p-1 overflow-hidden">
                <img src={team.img} alt={`${team.name} team photo`} className={`w-full h-full object-cover ${HORIZON_IMG_GROUP_HOVER}`} />
              </div>
              <h4 className="font-black text-xl md:text-2xl mt-auto">{team.name}</h4>
            </div>
          ))}
        </div>

        <FeaturePhotoBox
          src={VANGUARD_GROUP_PHOTO}
          alt="All Horizon teams group photo"
          caption="The Full Lineup"
          onZoom={setLightboxImg}
          className="mt-10"
        />
      </section>

      {/* THE CHAMPIONS */}
      <section className="py-32 bg-stone-900 dark:bg-black text-white relative z-10 border-t-[4px] border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-[#FFD33D] inline-block border-[4px] border-[#FFD33D] px-8 py-4 shadow-[10px_10px_0px_#FFF] bg-stone-900 rotate-[-1deg]">
              THE CHAMPIONS
            </h2>
            <p className="mt-10 font-mono text-xl max-w-2xl mx-auto bg-white text-stone-900 p-4 border-[3px] border-stone-900 shadow-[6px_6px_0px_#FFF] font-bold">
              The architectures that stood out. The prototypes that didn't catch fire.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-end justify-center gap-12 lg:gap-8 min-h-[500px]">

            {/* 1st Runner Up */}
            <div className="w-full lg:w-1/3 order-2 lg:order-1">
              <BrutalistCard colorClass="bg-white text-stone-900 rotate-[-2deg]" className="shadow-[8px_8px_0px_#FFF] text-center !p-6" noHover>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#4A90E2] text-white font-mono font-bold px-6 py-2 border-[3px] border-stone-900 shadow-[4px_4px_0px_rgba(28,25,23,1)]">
                  2ND PLACE
                </div>
                <h3 className="text-3xl font-black mt-6 mb-4">Intelligent Access Node</h3>
                <div className="group bg-[#F4F4F0] p-2 border-[3px] border-stone-900 mb-6 cursor-pointer" onClick={() => { setLightboxImg("/Horizon1/TeamF.webp") }}>
                  <img src="/Horizon1/TeamF.webp" alt="2nd Place Team" className={`w-full h-48 object-cover border-[3px] border-stone-900 ${HORIZON_IMG_GROUP_HOVER}`} />
                </div>
                <p className="font-medium text-base border-t-[3px] border-stone-900 pt-4">A card-based smart access system that verifies authentication and controls entry through an automated response.</p>
              </BrutalistCard>
            </div>

            {/* Winner*/}
            <div className="w-full lg:w-1/3 order-1 lg:order-2 transform lg:-translate-y-12 z-20">
              <BrutalistCard colorClass="bg-[#FFD33D] text-stone-900" className="shadow-[12px_12px_0px_#FFF] text-center !p-8" noHover>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#FF5757] text-white text-2xl font-black px-8 py-3 border-[3px] border-stone-900 shadow-[6px_6px_0px_rgba(28,25,23,1)] scale-110 whitespace-nowrap">
                  1ST PLACE
                </div>
                <h3 className="text-4xl font-black mt-8 mb-6">Sun-Responsive Utility System</h3>
                <div className="group bg-white p-2 border-[3px] border-stone-900 mb-6 cursor-pointer hover:scale-[1.02] transition-transform" onClick={() => { setLightboxImg("/Horizon1/TeamB.webp") }}>
                  <img src="/Horizon1/TeamB.webp" alt="1st Place Team" className={`w-full h-56 object-cover border-[3px] border-stone-900 ${HORIZON_IMG_GROUP_HOVER}`} />
                </div>
                <p className="font-bold text-lg border-t-[4px] border-stone-900 pt-5">An autonomous solar-tracking system that senses the sun's position and adjusts the panel orientation for improved energy collection.</p>
              </BrutalistCard>
            </div>

            {/* 2nd Runner Up */}
            <div className="w-full lg:w-1/3 order-3 lg:order-3">
              <BrutalistCard colorClass="bg-white text-stone-900 rotate-[2deg]" className="shadow-[8px_8px_0px_#FFF] text-center !p-6" noHover>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#34D399] text-stone-900 font-mono font-bold px-6 py-2 border-[3px] border-stone-900 shadow-[4px_4px_0px_rgba(28,25,23,1)]">
                  3RD PLACE
                </div>
                <h3 className="text-3xl font-black mt-6 mb-4">Autonomous Mobility</h3>
                <div className="group bg-[#F4F4F0] p-2 border-[3px] border-stone-900 mb-6 cursor-pointer" onClick={() => { setLightboxImg("/Horizon1/TeamA.webp") }}>
                  <img src="/Horizon1/TeamA.webp" alt="3rd Place Team" className={`w-full h-48 object-cover border-[3px] border-stone-900 ${HORIZON_IMG_GROUP_HOVER}`} />
                </div>
                <p className="font-medium text-base border-t-[3px] border-stone-900 pt-4">An IR-sensor-based mobile robot that detects its surroundings and autonomously adjusts its movement.</p>
              </BrutalistCard>
            </div>

          </div>

          <FeaturePhotoBox
            src={CHAMPIONS_GROUP_PHOTO}
            alt="Champions group celebration photo"
            caption="Photobooth"
            onZoom={setLightboxImg}
            variant="dark"
            className="mt-20 max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* Footer Area with Custom Neo-Brutalist Branding */}
      <div className="bg-[#FFD33D] border-t-[8px] border-stone-900 py-20 relative z-10 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <h3 className="text-4xl md:text-5xl font-black bg-[#FF88A8] border-[4px] border-stone-900 px-6 py-3 shadow-[6px_6px_0px_rgba(28,25,23,1)] mb-10 text-stone-900 rotate-[-1deg]">
            Our SPC Family
          </h3>

          <div className="relative w-full max-w-6xl mx-auto mb-16 px-2 sm:px-4">
            <div
              aria-hidden
              className="absolute left-1/2 -translate-x-1/2 bottom-2 md:bottom-4 w-[95%] max-w-5xl h-24 md:h-32 bg-[#E8DCC8] border-[4px] border-stone-900 -rotate-1 shadow-[8px_8px_0px_rgba(28,25,23,1)]"
            />
            <div className="relative flex flex-col sm:flex-row items-end justify-center gap-6 md:gap-4 lg:gap-8 pt-4 pb-10 md:pb-14">
              <TableScatterPhoto
                src={SPC_FAMILY_PHOTOS[0]}
                alt="SPC family moment 1"
                rotation="-rotate-6"
                lift="sm:translate-y-6"
                onZoom={setLightboxImg}
              />
              <TableScatterPhoto
                src={SPC_FAMILY_PHOTOS[1]}
                alt="SPC family moment 2"
                rotation="rotate-2"
                lift="sm:-translate-y-4"
                size="featured"
                onZoom={setLightboxImg}
              />
              <TableScatterPhoto
                src={SPC_FAMILY_PHOTOS[2]}
                alt="SPC family moment 3"
                rotation="-rotate-3"
                lift="sm:translate-y-5"
                onZoom={setLightboxImg}
              />
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black bg-white border-[4px] border-stone-900 px-8 py-3 shadow-[8px_8px_0px_rgba(28,25,23,1)] mb-8 text-stone-900">SOLARPUNK CORPS</h2>
          <p className="font-bold text-2xl mb-16 max-w-lg text-stone-900">Engineering systems that actually matter.</p>

          {/* Heart Gallery */}
          <div className="w-full max-w-5xl mx-auto grid grid-cols-12 gap-1 sm:gap-2 md:gap-3 p-2 relative mb-12">
            {/* ROW 1 & 2 */}
            <HeartPhoto src="/Horizon1/TeamSPC1.webp" gridClass="col-start-2 col-span-2 row-start-1 row-span-2 bg-[#34D399]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(1)} gridClass="col-start-4 col-span-2 row-start-1 row-span-2 bg-[#4A90E2]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(2)} gridClass="col-start-8 col-span-2 row-start-1 row-span-2 bg-[#FF88A8]" onZoom={setLightboxImg} />
            <HeartPhoto src="/Horizon1/TeamSPC2.webp" gridClass="col-start-10 col-span-2 row-start-1 row-span-2 bg-[#FFD33D]" onZoom={setLightboxImg} />

            {/* ROW 3 & 4 */}
            <HeartPhoto src="/Horizon1/TeamSPC3.webp" gridClass="col-start-1 col-span-2 row-start-3 row-span-2 bg-[#FF5757]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(3)} gridClass="col-start-3 col-span-2 row-start-3 row-span-2 bg-[#FFD33D]" onZoom={setLightboxImg} />
            <HeartPhoto src="/Horizon1/TeamSPC5.webp" gridClass="col-start-5 col-span-2 row-start-3 row-span-2 bg-[#4A90E2]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(4)} gridClass="col-start-7 col-span-2 row-start-3 row-span-2 bg-[#34D399]" onZoom={setLightboxImg} />
            <div className="col-start-9 col-span-2 row-start-3 row-span-2 aspect-square border-[4px] border-stone-900 bg-white overflow-hidden relative group flex items-center justify-center cursor-default">
              <h3 className="font-black text-2xl md:text-5xl text-stone-900 -rotate-12 group-hover:scale-110 transition-transform">#SPC</h3>
            </div>
            <HeartPhoto src="/Horizon1/TeamSPC6.webp" gridClass="col-start-11 col-span-2 row-start-3 row-span-2 bg-[#FF88A8]" onZoom={setLightboxImg} />

            {/* ROW 5 */}
            <HeartPhoto src={hz(5)} gridClass="col-start-2 col-span-1 row-start-[5] row-span-1 bg-[#FFD33D]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(6)} gridClass="col-start-3 col-span-1 row-start-[5] row-span-1 bg-[#4A90E2]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(7)} gridClass="col-start-4 col-span-1 row-start-[5] row-span-1 bg-[#FF5757]" onZoom={setLightboxImg} />
            <HeartPhoto src="/Horizon1/TeamSPC4.webp" gridClass="col-start-5 col-span-1 row-start-[5] row-span-1 bg-[#34D399]" onZoom={setLightboxImg} />
            <div className="col-start-6 col-span-1 row-start-[5] row-span-1 aspect-square border-[4px] border-stone-900 bg-white flex items-center justify-center text-stone-900 text-xl sm:text-2xl group hover:bg-[#FF88A8] transition-colors cursor-default">
              <span className="group-hover:scale-125 transition-transform">💖</span>
            </div>
            <div className="col-start-7 col-span-1 row-start-[5] row-span-1 aspect-square border-[4px] border-stone-900 bg-stone-900 text-white flex items-center justify-center text-xl sm:text-2xl group hover:bg-[#4A90E2] transition-colors cursor-default">
              <span className="group-hover:scale-125 transition-transform">⚡</span>
            </div>
            <HeartPhoto src={hz(8)} gridClass="col-start-8 col-span-1 row-start-[5] row-span-1 bg-[#FF88A8]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(9)} gridClass="col-start-9 col-span-1 row-start-[5] row-span-1 bg-[#FFD33D]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(10)} gridClass="col-start-10 col-span-1 row-start-[5] row-span-1 bg-[#34D399]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(11)} gridClass="col-start-11 col-span-1 row-start-[5] row-span-1 bg-[#4A90E2]" onZoom={setLightboxImg} />

            {/* ROW 6 */}
            <HeartPhoto src={hz(12)} gridClass="col-start-3 col-span-1 row-start-[6] row-span-1 bg-[#FF88A8]" onZoom={setLightboxImg} />
            <div className="col-start-4 col-span-1 row-start-[6] row-span-1 aspect-square border-[4px] border-stone-900 bg-[#FFD33D] flex items-center justify-center text-xl sm:text-2xl group hover:bg-white transition-colors cursor-default text-stone-900">
              <span className="group-hover:scale-125 transition-transform">🤔</span>
            </div>
            <HeartPhoto src={hz(13)} gridClass="col-start-5 col-span-1 row-start-[6] row-span-1 bg-[#34D399]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(14)} gridClass="col-start-6 col-span-1 row-start-[6] row-span-1 bg-[#FF5757]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(15)} gridClass="col-start-7 col-span-1 row-start-[6] row-span-1 bg-[#4A90E2]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(16)} gridClass="col-start-8 col-span-1 row-start-[6] row-span-1 bg-[#FFD33D]" onZoom={setLightboxImg} />
            <div className="col-start-9 col-span-1 row-start-[6] row-span-1 aspect-square border-[4px] border-stone-900 bg-[#FF88A8] flex items-center justify-center text-xl sm:text-2xl group hover:bg-white transition-colors cursor-default text-stone-900">
              <span className="group-hover:scale-125 transition-transform">🤖</span>
            </div>
            <HeartPhoto src={hz(17)} gridClass="col-start-10 col-span-1 row-start-[6] row-span-1 bg-[#34D399]" onZoom={setLightboxImg} />

            {/* ROW 7 */}
            <HeartPhoto src={hz(18)} gridClass="col-start-4 col-span-1 row-start-[7] row-span-1 bg-[#4A90E2]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(19)} gridClass="col-start-5 col-span-1 row-start-[7] row-span-1 bg-[#FFD33D]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(20)} gridClass="col-start-6 col-span-1 row-start-[7] row-span-1 bg-[#34D399]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(21)} gridClass="col-start-7 col-span-1 row-start-[7] row-span-1 bg-[#FF88A8]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(22)} gridClass="col-start-8 col-span-1 row-start-[7] row-span-1 bg-[#FF5757]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(23)} gridClass="col-start-9 col-span-1 row-start-[7] row-span-1 bg-[#4A90E2]" onZoom={setLightboxImg} />

            {/* ROW 8 */}
            <HeartPhoto src={hz(24)} gridClass="col-start-5 col-span-1 row-start-[8] row-span-1 bg-[#FF88A8]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(24)} gridClass="col-start-6 col-span-1 row-start-[8] row-span-1 bg-[#FFD33D]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(26)} gridClass="col-start-7 col-span-1 row-start-[8] row-span-1 bg-[#34D399]" onZoom={setLightboxImg} />
            <HeartPhoto src={hz(27)} gridClass="col-start-8 col-span-1 row-start-[8] row-span-1 bg-[#4A90E2]" onZoom={setLightboxImg} />

            {/* ROW 9 */}
            <div className="col-start-6 col-span-1 row-start-[9] row-span-1 aspect-square border-[4px] border-stone-900 bg-[#FF5757] flex items-center justify-center text-xl sm:text-2xl group hover:bg-white transition-colors cursor-default text-stone-900">
              <span className="group-hover:scale-125 transition-transform">🌿</span>
            </div>
            <HeartPhoto src={hz(15)} gridClass="col-start-7 col-span-1 row-start-[9] row-span-1 bg-[#FFD33D]" onZoom={setLightboxImg} />
          </div>

          <div className="font-mono font-bold text-lg bg-stone-900 text-white px-6 py-3 border-[3px] border-stone-900 shadow-[6px_6px_0px_#FFF]">
            © 2026 HORIZON WORKSHOP
          </div>
        </div>
      </div>

      <Footer />

      <AnimatePresence>
        {lightboxImg && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12" onClick={() => setLightboxImg(null)}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-stone-900/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] bg-white p-4 md:p-6 border-[4px] border-stone-900 shadow-[12px_12px_0px_rgba(28,25,23,1)]"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute -top-6 -right-6 md:-top-8 md:-right-8 bg-[#FF5757] text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-2xl font-black border-[3px] border-stone-900 shadow-[4px_4px_0px_rgba(28,25,23,1)] hover:translate-y-1 hover:shadow-none transition-all z-[101]"
              >
                <X size={32} />
              </button>
              <img src={lightboxImg} alt="Fullscreen view" className="max-w-full max-h-[80vh] object-contain border-[4px] border-stone-900 bg-[#F4F4F0]" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
