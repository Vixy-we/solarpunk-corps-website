import { Navigation } from "@/components/navigation";
import { AboutSection } from "@/components/about-section";
import { VisionSection } from "@/components/vision-section";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us | Robotics Club BIET Jhansi | Bundelkhand Institute of Engineering & Technology"
        description="Learn about Solarpunk Corps (SPC) — our mission, values, and vision as the robotics and sustainability club in the Mechanical Engineering Department at Bundelkhand Institute of Engineering and Technology (BIET), Jhansi."
        keywords={["mission", "vision", "solarpunk ethos", "robotics and sustainability club", "values", "about us", "BIET Jhansi", "robotics club biet jhansi", "biet jhansi", "Bundelkhand Institute of Engineering & Technology, Jhansi", "spc", "spc biet", "spc biet jhansi", "Solarpunk Corps"]}
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
