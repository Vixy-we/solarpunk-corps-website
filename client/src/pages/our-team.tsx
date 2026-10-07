import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  GraduationCap,
  Sparkles,
  Users,
  Wrench,
  Leaf,
  Cpu,
  BookOpen,
  Globe,
  Calendar,
  Heart,
  Palette,
  Coins,
  Info,
} from "lucide-react";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const buildSocialUrl = (network: "instagram" | "linkedin", id: string) => {
  const cleanId = id.trim();
  if (!cleanId) return undefined;
  if (/^https?:\/\//i.test(cleanId)) return cleanId;

  const handle = cleanId.replace(/^@/, "");
  return network === "instagram"
    ? `https://www.instagram.com/${handle}/`
    : `https://www.linkedin.com/in/${handle}/`;
};

const facultyAdvisors = [
  {
    title: "President",
    name: "Prof. Nagendra Prasad Yadav",
    img: "/Photos/NPY.jpeg",
    subtitle: "Head of Department of Mechanical Engineering",
    description: "Leads the department and advises student initiatives.",
    instagramId: "",
    linkedinId: "",
    icon: GraduationCap,
    initials: "HOD",
    color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400",
  },
  {
    title: "Officer in Charge",
    name: "Dr. Narendra Kumar",
    img: "/Photos/NK.jpeg",
    subtitle: "Associate Professor, Mechanical Engineering Department",
    description: "Guides departmental coordination and supports student activities.",
    instagramId: "",
    linkedinId: "",
    icon: GraduationCap,
    initials: "OIC",
    color: "bg-red-500/20 text-red-600 dark:text-red-400",
  },
  {
    title: "Officer in Charge",
    name: "Dr. Aditya Kumar Padap",
    img: "/Photos/AKP.jpeg",
    subtitle: "Associate Professor, Mechanical Engineering Department",
    description: "Guides departmental coordination and supports student activities.",
    instagramId: "",
    linkedinId: "",
    icon: GraduationCap,
    initials: "OIC",
    color: "bg-red-500/20 text-red-600 dark:text-red-400",
  },
];

const leadership = [
  {
    title: "General Secretary",
    name: "Bala Jee Soni",
    img: "/Photos/Balajee.jpg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Leads and coordinates club operations and drives organizational follow-through.",
    instagramId: "balajee.soni_",
    linkedinId: "bala-jee-soni",
    icon: Sparkles,
    initials: "GS",
    color: "bg-primary/20 text-primary",
  },
  {
    title: "Joint Secretary",
    name: "Nishu Vishwakarma",
    img: "/Photos/Nishu.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Leads and supports leadership coordination and keeps initiatives moving.",
    instagramId: "",
    linkedinId: "",
    icon: Users,
    initials: "JS",
    color: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
  },
];

const coreTeam = [
  {
    title: "Robotics & Engineering Head",
    name: "Abhay Singh",
    img: "/Photos/abhay.jpeg",
    subtitle: "ECE",
    year: "B.Tech Final Year",
    description: "Builds robotics systems through hands-on engineering projects.",
    instagramId: "",
    linkedinId: "",
    icon: Wrench,
    initials: "AS",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Engineering Head",
    name: "Deepanshu Yadav",
    img: "/Photos/deepanshu.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Builds robotics systems through hands-on engineering projects.",
    instagramId: "",
    linkedinId: "",
    icon: Wrench,
    initials: "DY",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Engineering Head",
    name: "Yuvraj Singh Yadav",
    img: "/Photos/yuvraj.jpeg",
    subtitle: "ECE",
    year: "B.Tech Final Year",
    description: "Builds robotics systems through hands-on engineering projects.",
    instagramId: "",
    linkedinId: "",
    icon: Wrench,
    initials: "YS",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Sustainable Development Head",
    name: "Krishna Mathur",
    img: "/Photos/mathur.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Develops sustainability projects with practical campus impact.",
    instagramId: "",
    linkedinId: "",
    icon: Leaf,
    initials: "KM",
    color: "bg-green-500/20 text-green-600 dark:text-green-400",
  },
  {
    title: "Sustainable Development Head",
    name: "Vijay Pratap Chauhan",
    img: "/Photos/Vijay.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Develops sustainability projects with practical campus impact.",
    instagramId: "",
    linkedinId: "",
    icon: Leaf,
    initials: "VPC",
    color: "bg-green-500/20 text-green-600 dark:text-green-400",
  },
  {
    title: "Emerging Tech & Research Head",
    name: "Pallavi Yadav",
    img: "/Photos/pallavi.jpeg",
    subtitle: "IT",
    year: "B.Tech Final Year",
    description: "Researches emerging technology and prototypes new ideas.",
    instagramId: "",
    linkedinId: "",
    icon: Cpu,
    initials: "PY",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Emerging Tech & Research Head",
    name: "Nipun Bhardwaj",
    img: "/Photos/nipun.jpeg",
    subtitle: "IT",
    year: "B.Tech Final Year",
    description: "Researches emerging technology and prototypes new ideas.",
    instagramId: "",
    linkedinId: "",
    icon: Cpu,
    initials: "NB",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Events & Coordination Head",
    name: "Arvind Yadav",
    img: "/Photos/Arvind.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Plans events and coordinates people, resources, and timelines.",
    instagramId: "arvindyadav8075",
    linkedinId: "arvind-yadav-b3563a361",
    icon: Calendar,
    initials: "AY",
    color: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
  },
  {
    title: "Events & Coordination Head",
    name: "Khushi Singh",
    img: "/Photos/khushi.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Plans events and coordinates people, resources, and timelines.",
    instagramId: "",
    linkedinId: "",
    icon: Calendar,
    initials: "KS",
    color: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
  },
  {
    title: "Events & Coordination Head",
    name: "Nikhil Kumar",
    img: "/Photos/Nikhil.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Plans events and coordinates people, resources, and timelines.",
    instagramId: "",
    linkedinId: "",
    icon: Calendar,
    initials: "NK",
    color: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
  },
  {
    title: "Content & Documentation Head",
    name: "Peeyush Verma",
    img: "/Photos/Piyush.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Documents projects and creates clear technical communication.",
    instagramId: "",
    linkedinId: "",
    icon: BookOpen,
    initials: "PV",
    color: "bg-blue-600/20 text-blue-700 dark:text-blue-300",
  },
  {
    title: "Content & Documentation Head",
    name: "Muhammad Asif Husain",
    img: "/Photos/Asif.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Documents projects and creates clear technical communication.",
    instagramId: "",
    linkedinId: "",
    icon: BookOpen,
    initials: "MAH",
    color: "bg-blue-600/20 text-blue-700 dark:text-blue-300",
  },
  {
    title: "Creative & Design Head",
    name: "Radhe Mohan Yadav",
    img: "/Photos/Radhemohan.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Designs visual concepts for engaging club experiences.",
    instagramId: "",
    linkedinId: "",
    icon: Palette,
    initials: "RMY",
    color: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Creative & Design Head",
    name: "Neelakshi",
    img: "/Photos/Nilakshi.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Designs visual concepts for engaging club experiences.",
    instagramId: "",
    linkedinId: "",
    icon: Palette,
    initials: "N",
    color: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  },
  {
    title: "PR & Outreach Head",
    name: "Vikas Yadav",
    img: "/Photos/vikas.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Builds partnerships and shares club work with communities.",
    instagramId: "",
    linkedinId: "",
    icon: Globe,
    initials: "VY",
    color: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
  },
  {
    title: "PR & Outreach Head",
    name: "Srishti Bundela",
    img: "/Photos/shrishti.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Builds partnerships and shares club work with communities.",
    instagramId: "",
    linkedinId: "",
    icon: Globe,
    initials: "SB",
    color: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
  },
  {
    title: "Resources & Logistics Head",
    name: "Prabhash Ranjan",
    img: "/Photos/Prabhash.jpeg",
    subtitle: "CSE",
    year: "B.Tech Final Year",
    description: "Organizes equipment and logistics for reliable execution.",
    instagramId: "",
    linkedinId: "",
    icon: Coins,
    initials: "PR",
    color: "bg-slate-500/20 text-slate-600 dark:text-slate-400",
  },
  {
    title: "Finance Head",
    name: "Prateek Maurya",
    img: "/Photos/Prateek.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Manages budgets and promotes responsible financial planning.",
    instagramId: "",
    linkedinId: "",
    icon: Coins,
    initials: "PM",
    color: "bg-green-600/20 text-green-700 dark:text-green-300",
  },
  {
    title: "Social Media Head",
    name: "Aditya Rai",
    img: "/Photos/Aditya.jpeg",
    subtitle: "CE",
    year: "B.Tech Final Year",
    description: "Creates social updates and engages online audiences.",
    instagramId: "",
    linkedinId: "",
    icon: Globe,
    initials: "AR",
    color: "bg-pink-500/20 text-pink-600 dark:text-pink-400",
  },
];

const advisoryMembers = [
  {
    title: "Advisory Board Member",
    name: "Ashish Kumar",
    img: "/Photos/Ashish.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Offers guidance and perspective to strengthen SPC's direction.",
    instagramId: "",
    linkedinId: "",
    icon: GraduationCap,
    initials: "AK",
    color: "bg-slate-500/20 text-slate-600 dark:text-slate-400",
  },
  {
    title: "Advisory Board Member",
    name: "Ayush Kumar Jaswal",
    img: "/Photos/Ayush.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Offers guidance and perspective to strengthen SPC's direction.",
    instagramId: "",
    linkedinId: "",
    icon: GraduationCap,
    initials: "AKJ",
    color: "bg-slate-500/20 text-slate-600 dark:text-slate-400",
  },
  {
    title: "Advisory Board Member",
    name: "Jasveer Yadav",
    subtitle: "ECE",
    year: "B.Tech Final Year",
    description: "Offers guidance and perspective to strengthen SPC's direction.",
    instagramId: "",
    linkedinId: "",
    icon: GraduationCap,
    initials: "JY",
    color: "bg-slate-500/20 text-slate-600 dark:text-slate-400",
  },
  {
    title: "Advisory Board Member",
    name: "Kishan Kumar Maurya",
    img: "/Photos/kishankumar.jpeg",
    subtitle: "ECE",
    year: "B.Tech Final Year",
    description: "Offers guidance and perspective to strengthen SPC's direction.",
    instagramId: "",
    linkedinId: "",
    icon: GraduationCap,
    initials: "KKM",
    color: "bg-slate-500/20 text-slate-600 dark:text-slate-400",
  },
  {
    title: "Advisory Board Member",
    name: "Mayank Mishra",
    img: "/Photos/Mayank.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Offers guidance and perspective to strengthen SPC's direction.",
    instagramId: "",
    linkedinId: "",
    icon: GraduationCap,
    initials: "MM",
    color: "bg-slate-500/20 text-slate-600 dark:text-slate-400",
  },
  {
    title: "Advisory Board Member",
    name: "Nishant Kumar",
    img: "/Photos/nishant.jpeg",
    subtitle: "ECE",
    year: "B.Tech Final Year",
    description: "Offers guidance and perspective to strengthen SPC's direction.",
    instagramId: "",
    linkedinId: "",
    icon: GraduationCap,
    initials: "NK",
    color: "bg-slate-500/20 text-slate-600 dark:text-slate-400",
  },
  {
    title: "Advisory Board Member",
    name: "Prakhar Gupta",
    img: "/Photos/Prakhar.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Offers guidance and perspective to strengthen SPC's direction.",
    instagramId: "",
    linkedinId: "",
    icon: GraduationCap,
    initials: "PG",
    color: "bg-slate-500/20 text-slate-600 dark:text-slate-400",
  },
  {
    title: "Advisory Board Member",
    name: "Raghav Tiwari",
    img: "/Photos/raghav.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Offers guidance and perspective to strengthen SPC's direction.",
    instagramId: "",
    linkedinId: "",
    icon: GraduationCap,
    initials: "RT",
    color: "bg-slate-500/20 text-slate-600 dark:text-slate-400",
  },
  {
    title: "Advisory Board Member",
    name: "Samarth",
    img: "/Photos/Samarth.jpeg",
    subtitle: "CSE",
    year: "B.Tech Final Year",
    description: "Offers guidance and perspective to strengthen SPC's direction.",
    instagramId: "",
    linkedinId: "",
    icon: GraduationCap,
    initials: "S",
    color: "bg-slate-500/20 text-slate-600 dark:text-slate-400",
  },
];

const pastMembers = [
  {
    title: "Board Member",
    name: "Sumit Kumar Thakur",
    img: "/Photos/sk.jpeg",
    subtitle: "Electronics and Communication Engineering",
    year: "B.Tech Final Year",
    description: "Contributes to robotics engineering projects with the team.",
    instagramId: "",
    linkedinId: "",
    icon: Wrench,
    initials: "SKT",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Board Member",
    name: "Mohd. Suhel",
    img: "/Photos/suhel.jpeg",
    subtitle: "Electrical Engineering",
    year: "B.Tech Final Year",
    description: "Contributes to sustainability initiatives for campus communities.",
    instagramId: "",
    linkedinId: "",
    icon: Leaf,
    initials: "MS",
    color: "bg-green-500/20 text-green-600 dark:text-green-400",
  },
  {
    title: "Board Member",
    name: "Kalpana Yadav",
    img: "/Photos/kalpana.jpeg",
    subtitle: "Mechanical Engineering",
    year: "B.Tech Final Year",
    description: "Contributes to community programs and social impact.",
    instagramId: "",
    linkedinId: "",
    icon: Heart,
    initials: "KY",
    color: "bg-pink-500/20 text-pink-600 dark:text-pink-400",
  },
  {
    title: "Board Member",
    name: "Anjney Singh",
    img: "/Photos/Anjnay.jpeg",
    subtitle: "Mechanical Engineering",
    year: "B.Tech Final Year",
    description: "Contributes to visual identity and design projects.",
    instagramId: "",
    linkedinId: "",
    icon: Palette,
    initials: "AS",
    color: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Board Member",
    name: "Ritesh Kushwaha",
    img: "/Photos/Ritesh.jpeg",
    subtitle: "Computer Science & Engineering",
    year: "B.Tech Final Year",
    description: "Contributes to emerging technology and design initiatives.",
    instagramId: "",
    linkedinId: "",
    icon: Cpu,
    initials: "RK",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
];


const coordinators = [
  {
    title: "Coordinator",
    name: "Udit Pal",
    img: "/Photos/Udit Pal.jpeg",
    subtitle: "Computer Science and Engineering",
    instagramId: "uditx26",
    linkedinId: "uditpal825",
    icon: Users,
    initials: "UP",
    color: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    
  },
  {
    title: "Coordinator",
    name: "Adarsh Singh",
    img: "/Photos/Adarsh Singh.png",
    subtitle: "Electronics and Communication Engineering",
    instagramId: "fabulous_adii__",
    linkedinId: "adarsh-singh-07b968358",
    icon: Users,
    initials: "AS",
    color: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    
  },
  {
    title: "Coordinator",
    name: "Anjali Sharma",
    img: "/Photos/Anjali Sharma.jpg",
    subtitle: "Electronics and Communication Engineering",
    instagramId: "_anjalisharmaparashar_",
    linkedinId: "anjali-sharma-b95789356",
    icon: Users,
    initials: "AS",
    color: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    
  },
  {
    title: "Coordinator",
    name: "Chandragupt",
    img: "/Photos/Chandragupt.jpg",
    subtitle: "Electrical Engineering",
    instagramId: "8chandra_vibes",
    linkedinId: "chandragupt-8a6a642ba",
    icon: Users,
    initials: "C",
    color: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    
  },
  {
    title: "Coordinator",
    name: "Gaurav Kumar Singh",
    img: "/Photos/Gaurav Kumar Singh.png",
    subtitle: "Mechanical Engineering",
    instagramId: "_gauravsuryavanshi_",
    linkedinId: "gaurav-kumar-singh-82a438316",
    icon: Users,
    initials: "GKS",
    color: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    
  },
  {
    title: "Coordinator",
    name: "Mayank Dubey",
    img: "/Photos/Mayank Dubey.jpg",
    subtitle: "Mechanical Engineering",
    instagramId: "",
    linkedinId: "",
    icon: Users,
    initials: "MD",
    color: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    
  },
  {
    title: "Coordinator",
    name: "Megha Nain",
    img: "/Photos/Megha.jpg",
    subtitle: "Electrical Engineering",
    instagramId: "",
    linkedinId: "megha-nain-6585a7340",
    icon: Users,
    initials: "MN",
    color: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    
  },
  {
    title: "Coordinator",
    name: "Nihal Gandhi",
    img: "/Photos/Nihal Gandhi.jpg",
    subtitle: "Mechanical Engineering",
    instagramId: "nihal.06__",
    linkedinId: "nihal-gandhi-58aa48370",
    icon: Users,
    initials: "NG",
    color: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    
  },
  {
    title: "Coordinator",
    name: "Satyam Tripathi",
    img: "/Photos/SATYAM TRIPATHI.jpg",
    subtitle: "Electrical Engineering",
    instagramId: "",
    linkedinId: "satyamtripathi93365",
    icon: Users,
    initials: "ST",
    color: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    
  },
  {
    title: "Coordinator",
    name: "Shreyansh Maurya",
    img: "/Photos/Shreyansh Maurya.jpg",
    subtitle: "Electronics and Communication Engineering",
    instagramId: "shreyanshmaurya1108",
    linkedinId: "shreyansh-maurya-397867331",
    icon: Users,
    initials: "SM",
    color: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    
  },
];


const explorerMembers = Array.from({ length: 5 }, (_, i) => ({
  title: `Explorer Member ${i + 1}`,
  initials: `EX${i + 1}`,
  color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400",
}));

const branchNames: Record<string, string> = {
  me: "Mechanical Engineering",
  cse: "Computer Science & Engineering",
  it: "Information Technology",
  ce: "Civil Engineering",
  ece: "Electronics and Communication Engineering",
  ee: "Electrical Engineering",
};

const formatBranch = (subtitle: string) =>
  branchNames[subtitle.trim().toLowerCase()] ?? subtitle;

const TeamSection = ({
  title,
  subtitle,
  secondSubtitle,
  members,
  badgeText,
  headingText,
  isFaculty = false,
  isLeadership = false,
  isDivision = false,
  showPost = true,
  showIcon = true,
}: {
  title: string;
  subtitle?: string;
  secondSubtitle?: string;
  members: any[];
  badgeText: string;
  headingText: string;
  isFaculty?: boolean;
  isLeadership?: boolean;
  isDivision?: boolean;
  showPost?: boolean;
  showIcon?: boolean;
}) => (
  <motion.div
    className="mb-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="mb-6 text-center">
      <Badge
        variant="secondary"
        className="mb-4 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300"
      >
        {badgeText}
      </Badge>
      <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
        {headingText}
      </h3>
      {subtitle && (
        <p className="mt-3 text-muted-foreground text-sm md:text-base">
          {subtitle}
        </p>
      )}
      {secondSubtitle && (
        <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
          {secondSubtitle}
        </p>
      )}
    </div>

    <div
      className={`grid ${
        isFaculty
          ? "sm:grid-cols-3 max-w-3xl mx-auto gap-6"
          : isLeadership
            ? "sm:grid-cols-2 max-w-2xl mx-auto gap-6"
            : isDivision
              ? "sm:grid-cols-2 lg:grid-cols-5 gap-6"
              : "sm:grid-cols-2 lg:grid-cols-5 gap-4"
      }`}
    >
      {members.map((member: any, index: number) => {
        const year = member.year;
        const description = member.description;
        const instagramUrl = buildSocialUrl("instagram", member.instagramId ?? "");
        const linkedinUrl = buildSocialUrl("linkedin", member.linkedinId ?? "");

        return (
          <motion.div
            key={`${title}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Card className="group h-full cursor-pointer border border-slate-200/80 bg-white/80 text-left shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0_rgba(16,185,129,0.65),0_18px_45px_rgba(15,23,42,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-[0_18px_45px_rgba(2,6,23,0.35)]">
                  <CardContent className="p-5 text-center sm:p-6">
                    <div className="relative mx-auto mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-emerald-200 bg-gradient-to-br from-emerald-100 to-slate-100 shadow-inner shadow-emerald-200/50 md:h-28 md:w-28 dark:border-emerald-500/30 dark:from-emerald-500/10 dark:to-slate-900 dark:shadow-none">
                      <Avatar className="h-full w-full rounded-full border-0">
                        <AvatarImage src={member.img} alt={member.name || "Team Member"} />
                        <AvatarFallback
                          className={`text-lg font-bold md:text-xl ${member.color}`}
                        >
                          {member.name?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    <h4 className="font-bold text-base tracking-tight text-slate-900 dark:text-white md:text-lg">
                      {member.name}
                    </h4>

                    {showIcon && member.icon && (
                      <div className="my-2 flex justify-center">
                        <member.icon
                          className={`h-5 w-5 ${member.color
                            .split(" ")
                            .filter(
                              (c: string) =>
                                c.startsWith("text-") || c.startsWith("dark:text-")
                            )
                            .join(" ")}`}
                        />
                      </div>
                    )}

                    {showPost && (
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 md:text-base">
                        {member.title}
                      </h4>
                    )}

                    {member.subtitle && (
                      <p className="mt-1 text-xs italic text-muted-foreground md:text-sm">
                        {formatBranch(member.subtitle)}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-h-[90vh] overflow-y-auto rounded-2xl border border-emerald-100 bg-white p-0 shadow-[8px_8px_0_rgba(16,185,129,0.12),0_30px_80px_rgba(15,23,42,0.18)] dark:border-emerald-900/60 dark:bg-slate-950 dark:shadow-[8px_8px_0_rgba(16,185,129,0.1),0_30px_80px_rgba(2,6,23,0.5)] sm:max-w-2xl">
                <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-cyan-100 p-[5px] sm:min-h-[420px] dark:from-emerald-950 dark:via-slate-900 dark:to-cyan-950">
                    {member.img ? (
                      <img
                        src={member.img}
                        alt={member.name || "Team member"}
                        className="relative max-h-[42vh] w-full rounded-xl object-cover shadow-[0_12px_30px_rgba(15,23,42,0.16)] sm:h-full sm:max-h-[520px]"
                      />
                    ) : (
                      <div className={`flex h-36 w-36 items-center justify-center rounded-full border-4 border-white/80 text-4xl font-bold shadow-[0_12px_30px_rgba(15,23,42,0.12)] dark:border-slate-700 ${member.color}`}>
                        {member.initials || member.name?.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-center p-[7px] sm:p-2">
                    <DialogHeader className="space-y-2 text-left">
                      <DialogTitle className="pr-8 text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                        {member.name}
                      </DialogTitle>
                      {showPost && member.title && (
                        <p className="font-semibold leading-tight text-emerald-700 dark:text-emerald-300">
                          {member.title}
                        </p>
                      )}
                      <DialogDescription className="text-sm text-muted-foreground">
                        {member.subtitle
                          ? formatBranch(member.subtitle)
                          : "Solarpunk Corps team member"}
                      </DialogDescription>
                    </DialogHeader>

                    {year && (
                      <p className="mt-3 w-fit rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:text-emerald-200">
                        {year}
                      </p>
                    )}

                    {description && (
                      <p className="mt-5 border-t border-border/70 pt-5 text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    )}

                    <div className="mt-7 flex gap-3">
                      {instagramUrl ? (
                        <a
                          href={instagramUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${member.name} on Instagram`}
                          title="Instagram"
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted/50 transition-all hover:-translate-y-0.5 hover:border-[#E4405F]/50 hover:bg-background hover:shadow-[3px_3px_0_rgba(228,64,95,0.22)] hover:text-[#E4405F]"
                        >
                          <SiInstagram className="h-4 w-4 transition-colors" />
                        </a>
                      ) : (
                        <span
                          aria-label="Add Instagram ID to this member's profile entry"
                          title="Add Instagram ID to this member's profile entry"
                          className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground/50"
                        >
                          <SiInstagram className="h-4 w-4" />
                        </span>
                      )}
                      {linkedinUrl ? (
                        <a
                          href={linkedinUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                          title="LinkedIn"
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted/50 transition-all hover:-translate-y-0.5 hover:border-[#0077b5]/50 hover:bg-background hover:shadow-[3px_3px_0_rgba(0,119,181,0.22)] hover:text-[#0077b5]"
                        >
                          <SiLinkedin className="h-4 w-4 transition-colors" />
                        </a>
                      ) : (
                        <span
                          aria-label="Add LinkedIn ID to this member's profile entry"
                          title="Add LinkedIn ID to this member's profile entry"
                          className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground/50"
                        >
                          <SiLinkedin className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        );
      })}
    </div>
  </motion.div>
);

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Our Team: Robotics & Sustainability Club at BIET Jhansi"
        description="Meet the faculty advisors, leadership, core team, coordinators, board members, and student explorers of Solarpunk Corps (SPC), a student-led robotics and sustainability club in the Mechanical Engineering Department at Bundelkhand Institute of Engineering and Technology (BIET), Jhansi."
        keywords={[
          "Solarpunk Corps team",
          "SPC team",
          "BIET Jhansi",
          "Mechanical Engineering Department",
          "robotics and sustainability club",
          "team members",
          "leadership",
          "core committee",
          "faculty advisors",
          "executive members",
          "coordinators",
          "explorer members",
          "students",
          "BIET Jhansi",
        ]}
      />
      <Navigation />
      <main className="pt-16">
        <section id="team-top" className="relative py-20 md:py-32">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_55%)]" />
          <span id="our-team" />
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="relative overflow-hidden rounded-[32px] border border-emerald-200/70 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 px-6 py-12 shadow-[0_30px_80px_rgba(16,185,129,0.12)] md:px-12 md:py-16 dark:border-emerald-500/20 dark:from-emerald-950/80 dark:via-slate-950 dark:to-slate-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="pointer-events-none absolute -left-10 top-8 h-48 w-48 rounded-full bg-emerald-500/15 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 bottom-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative text-center">
                <Badge className="mb-5 border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-200">
                  Our Heart, Mind & Soul
                </Badge>
                <h2 className="mb-6 text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">
                  Meet the Humans Behind SPC
                </h2>
                <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
                  The people of Solarpunk Corps are more than members—we're
                  innovators shaping a sustainable future. We're just a bunch of
                  humans who love building robots, care about sustainability, and
                  believe great things happen when different minds work together.
                </p>
              </div>
            </motion.div>

            {/* Faculty Advisors */}
            <TeamSection
              title="Faculty Guidance"
              badgeText="Faculty"
              headingText="Faculty Guidance"
              subtitle="Supporting the club with institutional guidance"
              members={facultyAdvisors}
              isFaculty={true}
            />

            {/* Leadership */}
            <TeamSection
              title="Leadership"
              badgeText="Head Members"
              headingText="Student Leadership"
              subtitle="The founding team driving Solarpunk Corps forward"
              members={leadership}
              isLeadership={true}
            />

            {/* Core Team */}
            <TeamSection
              title="Core Team"
              badgeText="Core Team"
              headingText="Divisional Heads"
              subtitle="Leads and members driving each of SPC's core initiatives"
              members={coreTeam}
              isDivision={true}
            />

            {/* Advisory Board Members */}
            <TeamSection
              title="Advisory Board Members"
              badgeText="Advisory Members"
              headingText="Advisory Board Members"
              subtitle="Offering guidance, & support across all of SPC."
              members={advisoryMembers}
            />

            {/* Coordinators */}
            <TeamSection
              title="Coordinators"
              badgeText="Coordinators"
              headingText="Coordinators"
              subtitle="Coordinating teams and initiatives across SPC"
              members={coordinators}
              showPost={false}
            />

            {/* Board Members */}
            <TeamSection
              title="Board Members"
              badgeText="Board Members"
              headingText="Board Members"
              subtitle="Contributors supporting SPC's projects and community"
              members={pastMembers}
              showPost={false}
              showIcon={false}
            />

            {/* Explorers */}
            <TeamSection
              title="Explorers"
              badgeText="Explorer Members"
              headingText="Explorers"
              subtitle="Beginners exploring robotics, sustainability, and creative tech"
              members={explorerMembers}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mb-20 max-w-4xl overflow-hidden rounded-[28px] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-white to-cyan-500/10 px-6 py-12 text-center shadow-[0_20px_50px_rgba(16,185,129,0.12)] dark:from-emerald-500/10 dark:via-slate-950 dark:to-sky-500/10"
            >
              <Sparkles className="mx-auto mb-4 h-10 w-10 text-emerald-600 dark:text-emerald-300" />
              <h3 className="mb-4 text-2xl font-black tracking-tight text-slate-900 dark:text-white md:text-3xl">
                You can be next to carry the torch forward!
              </h3>
              <p className="mx-auto mb-8 max-w-2xl text-base text-slate-600 dark:text-slate-300 md:text-lg">
                Join us as an Explorer and start your journey with Solarpunk Corps
                today.
              </p>
              <div className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
                Applications Open Soon!
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}