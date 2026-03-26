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
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";
import img1 from "../../public/Photos/Balaji.jpeg";
import img2 from "../../public/Photos/Nishu.jpeg";
import img3 from "../../public/Photos/sk.jpeg";
import img4 from "../../public/Photos/lalit.jpeg";
import img5 from "../../public/Photos/mathur.jpeg";
import img6 from "../../public/Photos/nipun.jpeg";
import img7 from "../../public/Photos/Piyush.jpeg";
import img8 from "../../public/Photos/vikas.jpeg";
import img9 from "../../public/Photos/Arvind.jpeg";
import img10 from "../../public/Photos/deepanshu.jpeg";
import img11 from "../../public/Photos/Vijay.jpeg";
import img12 from "../../public/Photos/kalpana.jpeg";
import img13 from "../../public/Photos/Prabhash.jpeg";
import img14 from "../../public/Photos/Samarth.jpeg";
import img15 from "../../public/Photos/Radhemohan.jpeg";
import img16 from "../../public/Photos/Anjnay.jpeg";
import img17 from "../../public/Photos/Prateek.jpeg";
import img18 from "../../public/Photos/suhel.jpeg";
import img19 from "../../public/Photos/pallavi.jpeg";
import img20 from "../../public/Photos/nishant.jpeg";
import img21 from "../../public/Photos/kishankumar.jpeg";
import img22 from "../../public/Photos/yuvraj.jpeg";
import img23 from "../../public/Photos/khushi.jpeg";
import img24 from "../../public/Photos/Mayank.jpeg";
import img25 from "../../public/Photos/Aditya.jpeg";
import img26 from "../../public/Photos/Ritesh.jpeg";
import img27 from "../../public/Photos/Asif.jpeg";
import img28 from "../../public/Photos/shrishti.jpeg";
import img29 from "../../public/Photos/Ayush.jpeg";
import img30 from "../../public/Photos/raghav.jpeg";
import img31 from "../../public/Photos/Nikhil.jpeg";
import img32 from "../../public/Photos/Prakhar.jpeg";
import img33 from "../../public/Photos/Nilakshi.jpeg";
import img34 from "../../public/Photos/Ashish.jpeg";
const facultyAdvisors = [
  {
    title: "President",
    subtitle: "Head of Department of Mechanical Engineering",
    icon: GraduationCap,
    initials: "HOD",
    color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400",
  },
  {
    title: "Officer in Charge",
    subtitle: "Faculty Advisor",
    icon: GraduationCap,
    initials: "OIC",
    color: "bg-red-500/20 text-red-600 dark:text-red-400",
  },
  {
    title: "Officer in Charge",
    subtitle: "Faculty Advisor",
    icon: GraduationCap,
    initials: "OIC",
    color: "bg-red-500/20 text-red-600 dark:text-red-400",
  },
];

const leadership = [
  {
    title: "Founder & General Secretary",
    img: img1,
    name: "Bala jee Soni",
    icon: Sparkles,
    initials: "GS",
    color: "bg-primary/20 text-primary",
  },
  {
    title: "Co-Founder and Joint Secretary",
    name: "Nishu Vishwakarma",
    img: img2,
    icon: Users,
    initials: "S",
    color: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
  },
];

const divisionLeads = [
  {
    title: "Robotics & Core Engineering Lead",
    name: "Sumit Kumar Thakur",
    img : img3,
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Lead",
    name: "Lalit Rajput",
    img : img4,
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Lead",
    name: "krishna Mathur",
    img : img5,
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Lead",
    name: "Bala Jee Soni",
    img : img1,
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Sustainable Systems Lead",
    name: "Mohd. Suhel",
    img: img18,
    icon: Leaf,
    initials: "SS",
    color: "bg-green-500/20 text-green-600 dark:text-green-400",
  },
  {
    title: "Frontier Tech & Design Lead",
    name: "Nipun Bhardwaj",
    img: img6,
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Frontier Tech & Design Lead",
    name: "Pallavi Yadav",
    img: img19,
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Research & Documentation Lead",
    name: "Peeyush Verma",
    img: img7,
    icon: BookOpen,
    initials: "RD",
    color: "bg-blue-600/20 text-blue-700 dark:text-blue-300",
  },
  {
    title: "Outreach & Collaborations Lead",
    name: "Nishu Vishwakarma",
    img: img2,
    icon: Globe,
    initials: "OC",
    color: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
  },
  {
    title: "Outreach & Collaborations Lead",
    name: "Vikas Yadav",
    img: img8,
    icon: Globe,
    initials: "OC",
    color: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
  },
  {
    title: "Events & Development Lead",
    name: "Arvind Yadav",
    img: img9,
    icon: Calendar,
    initials: "ED",
    color: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
  },
  {
    title: "Events & Development Lead",
    name: "Deepanshu Yadav",
    img: img10,
    icon: Calendar,
    initials: "ED",
    color: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
  },
  {
    title: "Community & CSR Lead",
    name: "Vijay Pratap Chauhan",
    img: img11,
    icon: Heart,
    initials: "CC",
    color: "bg-pink-500/20 text-pink-600 dark:text-pink-400",
  },
  {
    title: "Community & CSR Lead",
    name: "Kalpana Yadav",
    img: img12,
    icon: Heart,
    initials: "CC",
    color: "bg-pink-500/20 text-pink-600 dark:text-pink-400",
  },
  {
    title: "Operations & Records Lead",
    name: "Prabhash Ranjan",
    img: img13,
    icon: Coins,
    initials: "OR",
    color: "bg-slate-500/20 text-slate-600 dark:text-slate-400",
  },
  {
    title: "Operations & Records Lead",
    name: "Samarth",
    img: img14,
    icon: Coins,
    initials: "OR",
    color: "bg-slate-500/20 text-slate-600 dark:text-slate-400",
  },
  {
    title: "Design & Media Lead",
    name: "Radhe Mohan Yadav",
    img: img15,
    icon: Palette,
    initials: "DM",
    color: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Design & Media Lead",
    name: "Anjney Singh",
    img: img16,
    icon: Palette,
    initials: "DM",
    color: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Finance Lead",
    name: "Prateek Maurya",
    img: img17,
    icon: Coins,
    initials: "FIN",
    color: "bg-green-600/20 text-green-700 dark:text-green-300",
  },
];

const executiveMembers = [
  {
    title: "Robotics & Core Engineering Lead",
    name: "Mayank Mishra",
    img : img24,
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Lead",
    name: "Nishant Kumar",
    img : img20,
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Lead",
    name: "Kishan Kumar Maurya",
    img : img21,
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Lead",
    name: "Yuvraj Singh Yadav",
    img : img22,
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Lead",
    name: "Khushi Singh",
    img : img23,
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Frontier Tech & Design Lead",
    name: "Aditya Rai",
    img: img25,
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Frontier Tech & Design Lead",
    name: "Ritesh Kushwaha",
    img: img26,
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Research & Documentation",
    name: "Mohd. Asif Husain",
    img: img27,
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Outreach & Collaborations",
    name: "Shristi Bundela",
    img: img28,
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Events & Development",
    name: "Ayush Kumar Jaiswal",
    img: img29,
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Events & Development",
    name: "Raghav Tiwari",
    img: img30,
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Community & CSR",
    name: "Nikhil Kumar",
    img: img31,
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Community & CSR",
    name: "Prakhar Gupta",
    img: img32,
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Design & Media",
    name: "Ashish Kumar",
    img: img34,
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Design & Media",
    name: "Neelakshi",
    img: img33,
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
]

const explorerMembers = Array.from({ length: 15 }, (_, i) => ({
  title: `Explorer Member ${i + 1}`,
  initials: `EX${i + 1}`,
  color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400",
}));

const TeamSection = ({
  title,
  subtitle,
  members,
  badgeText,
  headingText,
  isFaculty = false,
  isLeadership = false,
  isDivision = false,
  secondSubtitle,
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
      {members.map((member: any, index: number) => (
        <motion.div
          key={`${title}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          <Card className="h-full hover-elevate transition-all duration-300">
  <CardContent className="p-6 text-center">
    
    <Avatar className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 border-2 border-border">
      <AvatarImage src={member.img} alt="member" />

      <AvatarFallback
        className={`text-lg md:text-xl font-bold ${member.color}`}
      >
        {member.name?.charAt(0)}
      </AvatarFallback>
    </Avatar>

    <h4 className="font-semibold text-base md:text-lg">
      {member.name}
    </h4>

    <h4 className="font-medium text-sm md:text-base">
      {member.title}
    </h4>

    {member.subtitle && (
      <p className="text-sm text-muted-foreground mt-1">
        {member.subtitle}
      </p>
    )}

  </CardContent>
</Card>
        </motion.div>
      ))}
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
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12 p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm flex gap-4 items-start md:items-center max-w-3xl mx-auto"
            >
              <div className="p-2 rounded-full bg-yellow-500/10 shrink-0">
                <Info className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                <span className="font-semibold text-yellow-700 dark:text-yellow-400 mr-1">
                  Note:
                </span>
                This page will be continually updated as full team members are
                officially announced and assigned roles.
              </p>
            </motion.div>
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
              badgeText="Leaders"
              headingText="Student Leadership"
              subtitle="The founding team driving Solarpunk Corps forward"
              members={leadership}
              isLeadership={true}
            />

            {/* Division Leads */}
            <TeamSection
              title="Division Leads"
              badgeText="Leaders"
              headingText="Division Leads"
              subtitle="Leading specialized divisions across technical, knowledge, and social initiatives"
              members={divisionLeads}
              isDivision={true}
            />

            {/* Executives */}
            <TeamSection
              title="Executives"
              badgeText="Executive Members"
              headingText="Executives"
              subtitle="Action team helping organize events and manage projects"
              secondSubtitle="Execution-focused members contributing across divisions, with a primary area of involvement."
              members={executiveMembers}
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
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-muted-foreground">
                Team members will be announced as Solarpunk Corps officially
                launches.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
