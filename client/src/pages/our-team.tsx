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
const img1 = "/Photos/Balaji.jpeg";
const img2 = "/Photos/Nishu.jpeg";
const img3 = "/Photos/sk.jpeg";
const img4 = "/Photos/lalit.jpeg";
const img5 = "/Photos/mathur.jpeg";
const img6 = "/Photos/nipun.jpeg";
const img7 = "/Photos/Piyush.jpeg";
const img8 = "/Photos/vikas.jpeg";
const img9 = "/Photos/Arvind.jpeg";
const img10 = "/Photos/deepanshu.jpeg";
const img11 = "/Photos/Vijay.jpeg";
const img12 = "/Photos/kalpana.jpeg";
const img13 = "/Photos/Prabhash.jpeg";
const img14 = "/Photos/Samarth.jpeg";
const img15 = "/Photos/Radhemohan.jpeg";
const img16 = "/Photos/Anjnay.jpeg";
const img17 = "/Photos/Prateek.jpeg";
const img18 = "/Photos/suhel.jpeg";
const img19 = "/Photos/pallavi.jpeg";
const img20 = "/Photos/nishant.jpeg";
const img21 = "/Photos/kishankumar.jpeg";
const img22 = "/Photos/yuvraj.jpeg";
const img23 = "/Photos/khushi.jpeg";
const img24 = "/Photos/Mayank.jpeg";
const img25 = "/Photos/Aditya.jpeg";
const img26 = "/Photos/Ritesh.jpeg";
const img27 = "/Photos/Asif.jpeg";
const img28 = "/Photos/shrishti.jpeg";
const img29 = "/Photos/Ayush.jpeg";
const img30 = "/Photos/raghav.jpeg";
const img31 = "/Photos/Nikhil.jpeg";
const img32 = "/Photos/Prakhar.jpeg";
const img33 = "/Photos/Nilakshi.jpeg";
const img34 = "/Photos/Ashish.jpeg";
const img35 = "/Photos/NPY.jpeg";
const img36 = "/Photos/NK.jpeg";
const img37 = "/Photos/AKP.jpeg";
const facultyAdvisors = [
  {
    title: "President",
    name: "Prof. Nagendra Prasad Yadav",
    img: img35,
    subtitle: "Head of Department of Mechanical Engineering",
    icon: GraduationCap,
    initials: "HOD",
    color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400",
  },
  {
    title: "Officer in Charge",
    name: "Dr. Narendra Kumar",
    img: img36,
    subtitle: "Associate Professor, Department of Mechanical Engineering",
    icon: GraduationCap,
    initials: "OIC",
    color: "bg-red-500/20 text-red-600 dark:text-red-400",
  },
  {
    title: "Officer in Charge",
    name: "Dr. Aditya Kumar Padap",
    img: img37,
    subtitle: "Associate Professor, Department of Mechanical Engineering",
    icon: GraduationCap,
    initials: "OIC",
    color: "bg-red-500/20 text-red-600 dark:text-red-400",
  },
];

const leadership = [
  {
    title: "Founder & General Secretary",
    img: img1,
    name: "Bala Jee Soni",
    icon: Sparkles,
    initials: "GS",
    color: "bg-primary/20 text-primary",
  },
  {
    title: "Joint Secretary",
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
    img: img3,
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Lead",
    name: "Lalit Rajput",
    img: img4,
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Lead",
    name: "Krishna Mathur",
    img: img5,
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Lead",
    name: "Bala Jee Soni",
    img: img1,
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
    title: "Community & CSR",
    name: "Kalpana Yadav",
    img: img12,
    icon: Heart,
    initials: "CC",
    color: "bg-pink-500/20 text-pink-600 dark:text-pink-400",
  },
  {
    title: "Operations & Records",
    name: "Prabhash Ranjan",
    img: img13,
    icon: Coins,
    initials: "OR",
    color: "bg-slate-500/20 text-slate-600 dark:text-slate-400",
  },
  {
    title: "Operations & Records",
    name: "Samarth",
    img: img14,
    icon: Coins,
    initials: "OR",
    color: "bg-slate-500/20 text-slate-600 dark:text-slate-400",
  },
  {
    title: "Design & Media",
    name: "Radhe Mohan Yadav",
    img: img15,
    icon: Palette,
    initials: "DM",
    color: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Design & Media",
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
    title: "Robotics & Core Engineering Executive",
    name: "Mayank Mishra",
    img: img24,
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Executive",
    name: "Nishant Kumar",
    img: img20,
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Executive",
    name: "Kishan Kumar Maurya",
    img: img21,
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Executive",
    name: "Yuvraj Singh Yadav",
    img: img22,
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Robotics & Core Engineering Executive",
    name: "Khushi Singh",
    img: img23,
    icon: Wrench,
    initials: "RCE",
    color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Frontier Tech & Design Executive",
    name: "Aditya Rai",
    img: img25,
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Frontier Tech & Design Executive",
    name: "Ritesh Kushwaha",
    img: img26,
    icon: Cpu,
    initials: "FTD",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Research & Documentation Executive",
    name: "Mohd. Asif Husain",
    img: img27,
    icon: BookOpen,
    initials: "RD",
    color: "bg-blue-600/20 text-blue-700 dark:text-blue-300",
  },
  {
    title: "Outreach & Collaborations Executive",
    name: "Shristi Bundela",
    img: img28,
    icon: Globe,
    initials: "OC",
    color: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
  },
  {
    title: "Events & Development Executive",
    name: "Ayush Kumar Jaiswal",
    img: img29,
    icon: Calendar,
    initials: "ED",
    color: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
  },
  {
    title: "Events & Development Executive",
    name: "Raghav Tiwari",
    img: img30,
    icon: Calendar,
    initials: "ED",
    color: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
  },
  {
    title: "Community & CSR Executive",
    name: "Nikhil Kumar",
    img: img31,
    icon: Heart,
    initials: "CC",
    color: "bg-pink-500/20 text-pink-600 dark:text-pink-400",
  },
  {
    title: "Community & CSR Executive",
    name: "Prakhar Gupta",
    img: img32,
    icon: Cpu,
    initials: "CC",
    color: "bg-pink-500/20 text-pink-600 dark:text-pink-400",
  },
  {
    title: "Design & Media Executive",
    name: "Ashish Kumar",
    img: img34,
    icon: Palette,
    initials: "DM",
    color: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Design & Media Executive",
    name: "Neelakshi",
    img: img33,
    icon: Palette,
    initials: "DM",
    color: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  },
]

const explorerMembers = Array.from({ length: 5 }, (_, i) => ({
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

              {member.icon && (
                <div className="flex justify-center my-1">
                  <member.icon
                    className={`w-5 h-5 ${member.color.split(' ').filter((c: string) => c.startsWith('text-') || c.startsWith('dark:text-')).join(' ')}`}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-12 px-6 rounded-2xl border-2 border-dashed border-primary/20 bg-primary/5 max-w-4xl mx-auto mb-20"
            >
              <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">You can be next to carry the torch forward!</h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join us as an Explorer and start your journey with Solarpunk Corps today.
              </p>
              <div className="mt-8 p-3 px-6 rounded-full bg-primary/10 border border-primary/20 inline-block font-semibold text-primary">
                Applications Open Soon!
              </div>
            </motion.div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
