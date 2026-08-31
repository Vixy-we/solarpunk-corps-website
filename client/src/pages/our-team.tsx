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

const facultyAdvisors = [
  {
    title: "President",
    name: "Prof. Nagendra Prasad Yadav",
    img: "/Photos/NPY.jpeg",
    subtitle: "Head of Department of Mechanical Engineering",
    icon: GraduationCap,
    initials: "HOD",
    color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400",
  },
  {
    title: "Officer in Charge",
    name: "Dr. Narendra Kumar",
    img: "/Photos/NK.jpeg",
    subtitle: "Associate Professor, Department of Mechanical Engineering",
    icon: GraduationCap,
    initials: "OIC",
    color: "bg-red-500/20 text-red-600 dark:text-red-400",
  },
  {
    title: "Officer in Charge",
    name: "Dr. Aditya Kumar Padap",
    img: "/Photos/AKP.jpeg",
    subtitle: "Associate Professor, Department of Mechanical Engineering",
    icon: GraduationCap,
    initials: "OIC",
    color: "bg-red-500/20 text-red-600 dark:text-red-400",
  },
];

const leadership = [
  {
    title: "General Secretary",
    name: "Bala Jee Soni",
    img: "/Photos/Balaji.jpeg",
    icon: Sparkles,
    initials: "GS",
    color: "bg-primary/20 text-primary",
  },
  {
    title: "Joint Secretary",
    name: "Nishu Vishwakarma",
    img: "/Photos/Nishu.jpeg",
    icon: Users,
    initials: "S",
    color: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
  },
];

const divisionLeads = [
  {
    title: "Robotics & Core Engineering Lead",
    name: "Sumit Kumar Thakur",
    img: "/Photos/sk.jpeg",
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Lead",
    name: "Abhay Singh",
    img: "/Photos/abhay.jpeg",
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Lead",
    name: "Krishna Mathur",
    img: "/Photos/mathur.jpeg",
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Lead",
    name: "Bala Jee Soni",
    img: "/Photos/Balaji.jpeg",
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Sustainable Systems Lead",
    name: "Mohd. Suhel",
    img: "/Photos/suhel.jpeg",
    icon: Leaf,
    initials: "SS",
    color: "bg-green-500/20 text-green-600 dark:text-green-400",
  },
  {
    title: "Frontier Tech & Design Lead",
    name: "Nipun Bhardwaj",
    img: "/Photos/nipun.jpeg",
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Frontier Tech & Design Lead",
    name: "Pallavi Yadav",
    img: "/Photos/pallavi.jpeg",
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Research & Documentation Lead",
    name: "Peeyush Verma",
    img: "/Photos/Piyush.jpeg",
    icon: BookOpen,
    initials: "RD",
    color: "bg-blue-600/20 text-blue-700 dark:text-blue-300",
  },
  {
    title: "Outreach & Collaborations Lead",
    name: "Nishu Vishwakarma",
    img: "/Photos/Nishu.jpeg",
    icon: Globe,
    initials: "OC",
    color: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
  },
  {
    title: "Outreach & Collaborations Lead",
    name: "Vikas Yadav",
    img: "/Photos/vikas.jpeg",
    icon: Globe,
    initials: "OC",
    color: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
  },
  {
    title: "Events & Development Lead",
    name: "Arvind Yadav",
    img: "/Photos/Arvind.jpeg",
    icon: Calendar,
    initials: "ED",
    color: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
  },
  {
    title: "Events & Development Lead",
    name: "Deepanshu Yadav",
    img: "/Photos/deepanshu.jpeg",
    icon: Calendar,
    initials: "ED",
    color: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
  },
  {
    title: "Community & CSR Lead",
    name: "Vijay Pratap Chauhan",
    img: "/Photos/Vijay.jpeg",
    icon: Heart,
    initials: "CC",
    color: "bg-pink-500/20 text-pink-600 dark:text-pink-400",
  },
  {
    title: "Community & CSR",
    name: "Kalpana Yadav",
    img: "/Photos/kalpana.jpeg",
    icon: Heart,
    initials: "CC",
    color: "bg-pink-500/20 text-pink-600 dark:text-pink-400",
  },
  {
    title: "Operations & Records",
    name: "Prabhash Ranjan",
    img: "/Photos/Prabhash.jpeg",
    icon: Coins,
    initials: "OR",
    color: "bg-slate-500/20 text-slate-600 dark:text-slate-400",
  },
  {
    title: "Operations & Records",
    name: "Samarth",
    img: "/Photos/Samarth.jpeg",
    icon: Coins,
    initials: "OR",
    color: "bg-slate-500/20 text-slate-600 dark:text-slate-400",
  },
  {
    title: "Design & Media",
    name: "Radhe Mohan Yadav",
    img: "/Photos/Radhemohan.jpeg",
    icon: Palette,
    initials: "DM",
    color: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Design & Media",
    name: "Anjney Singh",
    img: "/Photos/Anjnay.jpeg",
    icon: Palette,
    initials: "DM",
    color: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Finance Lead",
    name: "Prateek Maurya",
    img: "/Photos/Prateek.jpeg",
    icon: Coins,
    initials: "FIN",
    color: "bg-green-600/20 text-green-700 dark:text-green-300",
  },
];

const executiveMembers = [
  {
    title: "Robotics & Core Engineering Executive",
    name: "Mayank Mishra",
    img: "/Photos/Mayank.jpeg",
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Executive",
    name: "Nishant Kumar",
    img: "/Photos/nishant.jpeg",
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Executive",
    name: "Kishan Kumar Maurya",
    img: "/Photos/kishankumar.jpeg",
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Executive",
    name: "Yuvraj Singh Yadav",
    img: "/Photos/yuvraj.jpeg",
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Executive",
    name: "Khushi Singh",
    img: "/Photos/khushi.jpeg",
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Frontier Tech & Design Executive",
    name: "Aditya Rai",
    img: "/Photos/Aditya.jpeg",
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Frontier Tech & Design Executive",
    name: "Ritesh Kushwaha",
    img: "/Photos/Ritesh.jpeg",
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Research & Documentation Executive",
    name: "Mohd. Asif Husain",
    img: "/Photos/Asif.jpeg",
    icon: BookOpen,
    initials: "RD",
    color: "bg-blue-600/20 text-blue-700 dark:text-blue-300",
  },
  {
    title: "Outreach & Collaborations Executive",
    name: "Shristi Bundela",
    img: "/Photos/shrishti.jpeg",
    icon: Globe,
    initials: "OC",
    color: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
  },
  {
    title: "Events & Development Executive",
    name: "Ayush Kumar Jaiswal",
    img: "/Photos/Ayush.jpeg",
    icon: Calendar,
    initials: "ED",
    color: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
  },
  {
    title: "Events & Development Executive",
    name: "Raghav Tiwari",
    img: "/Photos/raghav.jpeg",
    icon: Calendar,
    initials: "ED",
    color: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
  },
  {
    title: "Community & CSR Executive",
    name: "Nikhil Kumar",
    img: "/Photos/Nikhil.jpeg",
    icon: Heart,
    initials: "CC",
    color: "bg-pink-500/20 text-pink-600 dark:text-pink-400",
  },
  {
    title: "Community & CSR Executive",
    name: "Prakhar Gupta",
    img: "/Photos/Prakhar.jpeg",
    icon: Cpu,
    initials: "CC",
    color: "bg-pink-500/20 text-pink-600 dark:text-pink-400",
  },
  {
    title: "Design & Media Executive",
    name: "Ashish Kumar",
    img: "/Photos/Ashish.jpeg",
    icon: Palette,
    initials: "DM",
    color: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Design & Media Executive",
    name: "Neelakshi",
    img: "/Photos/Nilakshi.jpeg",
    icon: Palette,
    initials: "DM",
    color: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  },
];

const explorerMembers = Array.from({ length: 5 }, (_, i) => ({
  title: `Explorer Member ${i + 1}`,
  initials: `EX${i + 1}`,
  color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400",
}));

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
      className={`grid ${isFaculty
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
                <AvatarImage src={member.img} alt={member.name || "Team Member"} />
                <AvatarFallback
                  className={`text-lg md:text-xl font-bold ${member.color}`}
                >
                  {member.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <h4 className="font-semibold text-base md:text-lg">
                {member.name}
              </h4>

              {member.icon && (
                <div className="flex justify-center my-1">
                  <member.icon
                    className={`w-5 h-5 ${member.color
                      .split(" ")
                      .filter(
                        (c: string) =>
                          c.startsWith("text-") || c.startsWith("dark:text-")
                      )
                      .join(" ")}`}
                  />
                </div>
              )}

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

            {/* Division Leads */}
            <TeamSection
              title="Division Leads"
              badgeText="Lead Members"
              headingText="Division Leads"
              subtitle="Leading specialized divisions across technical, knowledge, and social initiatives"
              members={divisionLeads}
              isDivision={true}
            />

            {/* Senior Executives */}
            <TeamSection
              title="Senior Executives"
              badgeText="Senior Executive Members"
              headingText="Senior Executives"
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