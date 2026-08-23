import { Navigation } from "@/components/navigation";
import { AboutSection } from "@/components/about-section";
import { VisionSection } from "@/components/vision-section";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us"
        description="Learn about Solarpunk Corps — our mission, values, and the vision driving a student-led movement for hopeful innovation at BIET Jhansi."
        keywords={["mission", "vision", "solarpunk ethos", "student movement", "values", "about us", "BIET Jhansi"]}
      />
      <Navigation />
      <main className="pt-16">
        <AboutSection />
        <VisionSection />
      </main>
      <Footer />
    </div>
  );
}
