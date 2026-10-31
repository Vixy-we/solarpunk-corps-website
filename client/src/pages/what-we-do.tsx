import { Navigation } from "@/components/navigation";
import { WhatWeDoSection } from "@/components/what-we-do-section";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";

export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="What We Do | Robotics Club BIET Jhansi | Bundelkhand Institute of Engineering & Technology"
        description="Explore our activities at Solarpunk Corps, including projects, workshops, and community initiatives."
        keywords={["activities", "workshops", "projects", "community", "events", "initiatives", "student club", "robotics club biet jhansi", "biet jhansi", "Bundelkhand Institute of Engineering & Technology, Jhansi", "spc", "spc biet", "spc biet jhansi", "Solarpunk Corps"]}
      />
      <Navigation />
      <main className="pt-16">
        <WhatWeDoSection />
      </main>
      <Footer />
    </div>
  );
}
