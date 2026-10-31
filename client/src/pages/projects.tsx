import { Navigation } from "@/components/navigation";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Projects | Robotics Club BIET Jhansi | Bundelkhand Institute of Engineering & Technology"
        description="Explore our ongoing initiatives — from sustainable rovers to community surveys. See what students at Solarpunk Corps are building."
        keywords={["student projects", "solar rover", "magazine", "survey", "engineering projects", "innovation", "BIET Jhansi", "robotics club biet jhansi", "biet jhansi", "Bundelkhand Institute of Engineering & Technology, Jhansi", "spc", "spc biet", "spc biet jhansi", "Solarpunk Corps"]}
      />
      <Navigation />
      <main className="pt-16">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
