import { Navigation } from "@/components/navigation";
import { WhatWeDoSection } from "@/components/what-we-do-section";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";

export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="What We Do"
        description="Explore our activities at Solarpunk Corps, including projects, workshops, and community initiatives."
      />
      <Navigation />
      <main className="pt-16">
        <WhatWeDoSection />
      </main>
      <Footer />
    </div>
  );
}
