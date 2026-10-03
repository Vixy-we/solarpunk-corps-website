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
    title: "Robotics & Engineering Lead",
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
    title: "Robotics & Engineering Lead",
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
    title: "Robotics & Engineering Lead",
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
    title: "Sustainable Development Lead",
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
    title: "Sustainable Development Lead",
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
    title: "Emerging Tech & Research Lead",
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
    title: "Emerging Tech & Research Lead",
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
    title: "Events & Coordination Lead",
    name: "Arvind Yadav",
    img: "/Photos/Arvind.jpeg",
    subtitle: "ME",
    year: "B.Tech Final Year",
    description: "Plans events and coordinates people, resources, and timelines.",
    instagramId: "",
    linkedinId: "",
    icon: Calendar,
    initials: "AY",
    color: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
  },
  {
    title: "Events & Coordination Lead",
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
    title: "Events & Coordination Lead",
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
    title: "Content & Documentation Lead",
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
    title: "Content & Documentation Lead",
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
    title: "Creative & Design Lead",
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
    title: "Creative & Design Lead",
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
    title: "PR & Outreach Lead",
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
    title: "PR & Outreach Lead",
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
    title: "Resources & Logistics Lead",
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
    title: "Finance Lead",
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
    title: "Social Media Lead",
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
    title: "Past Members of SPC",
    name: "Sumit Kumar Thakur",
    img: "/Photos/sk.jpeg",
    subtitle: "Electronics and Communication Engineering",
    year: "B.Tech Final Year",
    description: "Previously built robotics engineering projects with the team.",
    instagramId: "",
    linkedinId: "",
    icon: Wrench,
    initials: "SKT",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Past Members of SPC",
    name: "Mohd. Suhel",
    img: "/Photos/suhel.jpeg",
    subtitle: "Electrical Engineering",
    year: "B.Tech Final Year",
    description: "Previously developed sustainability initiatives for campus communities.",
    instagramId: "",
    linkedinId: "",
    icon: Leaf,
    initials: "MS",
    color: "bg-green-500/20 text-green-600 dark:text-green-400",
  },
  {
    title: "Past Members of SPC",
    name: "Kalpana Yadav",
    img: "/Photos/kalpana.jpeg",
    subtitle: "Mechanical Engineering",
    year: "B.Tech Final Year",
    description: "Previously strengthened community programs and social impact.",
    instagramId: "",
    linkedinId: "",
    icon: Heart,
    initials: "KY",
    color: "bg-pink-500/20 text-pink-600 dark:text-pink-400",
  },
  {
    title: "Past Members of SPC",
    name: "Anjney Singh",
    img: "/Photos/Anjnay.jpeg",
    subtitle: "Mechanical Engineering",
    year: "B.Tech Final Year",
    description: "Previously shaped visual identity and design projects.",
    instagramId: "",
    linkedinId: "",
    icon: Palette,
    initials: "AS",
    color: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Past Members of SPC",
    name: "Ritesh Kushwaha",
    img: "/Photos/Ritesh.jpeg",
    subtitle: "Computer Science & Engineering",
    year: "B.Tech Final Year",
    description: "Previously explored frontier technology and design initiatives.",
    instagramId: "",
    linkedinId: "",
    icon: Cpu,
    initials: "RK",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
];

/*
const coordinators = [
  {
    title: "Coordinator",
    name: "Name",
    img: "/Photos/Name.jpeg",
    subtitle: "Branch",
    icon: Users,
    initials: "NM",
    color: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    
  },
];
*/

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
    className="mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-center mb-12">
      <Badge variant="secondary" className="mb-4">
        {badgeText}
      </Badge>
      <h3 className="text-2xl md:text-3xl font-bold">{headingText}</h3>
      {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
      {secondSubtitle && (
        <p className="mt-1 text-sm font-medium text-gray-600">
          {secondSubtitle}
        </p>
      )}
    </div>

    <div
      className={`grid ${isFaculty
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
              <Card className="h-full cursor-pointer text-left transition-all duration-300 hover-elevate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <CardContent className="p-6 text-center">
                  <Avatar className="mx-auto mb-4 h-24 w-24 border-2 border-border md:h-28 md:w-28">
                    <AvatarImage src={member.img} alt={member.name || "Team Member"} />
                    <AvatarFallback
                      className={`text-lg font-bold md:text-xl ${member.color}`}
                    >
                      {member.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <h4 className="font-semibold text-base md:text-lg">
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
                    <h4 className="font-medium text-sm md:text-base">
                      {member.title}
                    </h4>
                  )}

                  {member.subtitle && (
                    <p className="mt-1 text-sm italic text-muted-foreground">
                      {formatBranch(member.subtitle)}
                    </p>
                  )}
                </CardContent>
              </Card>
            </DialogTrigger>

            <DialogContent className="max-h-[90vh] overflow-y-auto p-0 sm:max-w-2xl">
              <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
                <div className="flex min-h-[260px] items-center justify-center bg-muted sm:min-h-[420px]">
                  {member.img ? (
                    <img
                      src={member.img}
                      alt={member.name || "Team member"}
                      className="max-h-[42vh] w-full object-cover sm:h-full sm:max-h-none"
                    />
                  ) : (
                    <div className={`flex h-36 w-36 items-center justify-center rounded-full text-4xl font-bold ${member.color}`}>
                      {member.initials || member.name?.charAt(0)}
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8">
                  <DialogHeader className="space-y-1 text-left">
                    <DialogTitle className="pr-8 text-2xl font-bold sm:text-3xl">
                      {member.name}
                    </DialogTitle>
                    {showPost && member.title && (
                      <p className="font-medium leading-tight text-foreground">{member.title}</p>
                    )}
                    <DialogDescription className="text-sm italic">
                      {member.subtitle
                        ? formatBranch(member.subtitle)
                        : "Solarpunk Corps team member"}
                    </DialogDescription>
                  </DialogHeader>

                  {year && (
                    <p className="mt-1 text-sm font-medium italic text-foreground">
                      {year}
                    </p>
                  )}

                  {description && (
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  )}

                  <div className="mt-6 flex gap-3">
                    {instagramUrl ? (
                      <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} on Instagram`}
                        title="Instagram"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted/50 transition-all hover:scale-110 hover:bg-background hover:text-[#E4405F]"
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
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted/50 transition-all hover:scale-110 hover:bg-background hover:text-[#0077b5]"
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
        title="Meet the Team"
        description="The humans behind Solarpunk Corps — students from BIET Jhansi who love building robots, care about sustainability, and believe in collaboration."
        keywords={[
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
        <section id="team-top" className="py-20 md:py-32">
          <span id="our-team" />
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-4">
                Our Heart, Mind & Soul
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet the Humans Behind SPC
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                The people of Solarpunk Corps are more than members—we're
                innovators shaping a sustainable future. We're just a bunch of
                humans who love building robots, care about sustainability, and
                believe great things happen when different minds work together.
              </p>
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
              badgeText="Lead Members"
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
            {/* <TeamSection
              title="Coordinators"
              badgeText="Coordinators"
              headingText="Coordinators"
              subtitle="Coordinating teams and initiatives across SPC"
              members={coordinators}
              showPost={false}
            /> */}

            {/* Past Members */}
            <TeamSection
              title="Past Members of SPC"
              badgeText="Past Members of SPC"
              headingText="Past Members of SPC"
              subtitle="Former members who have contributed to SPC's journey"
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
              className="text-center py-12 px-6 rounded-2xl border-2 border-dashed border-primary/20 bg-primary/5 max-w-4xl mx-auto mb-20"
            >
              <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                You can be next to carry the torch forward!
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join us as an Explorer and start your journey with Solarpunk Corps
                today.
              </p>
              <div className="mt-8 p-3 px-6 rounded-full bg-primary/10 border border-primary/20 inline-block font-semibold text-primary">
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