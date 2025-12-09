import { Navigation } from "@/components/navigation";
import { WhatWeDoSection } from "@/components/what-we-do-section";
import { Footer } from "@/components/footer";

export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <WhatWeDoSection />
      </main>
      <Footer />
    </div>
  );
}
