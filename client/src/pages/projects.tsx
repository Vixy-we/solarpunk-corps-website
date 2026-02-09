import { Navigation } from "@/components/navigation";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Projects"
        description="Explore our ongoing initiatives — from sustainable rovers to community surveys. See what students at Solarpunk Corps are building."
      />
      <Navigation />
      <main className="pt-16">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
