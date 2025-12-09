import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { WhatWeDoSection } from "@/components/what-we-do-section";
import { DivisionsSection } from "@/components/divisions-section";
import { MembershipSection } from "@/components/membership-section";
import { VisionSection } from "@/components/vision-section";
import { ProjectsSection } from "@/components/projects-section";
import { SponsorSection } from "@/components/sponsor-section";
import { ContactSection } from "@/components/contact-section";
import { LeadershipSection } from "@/components/leadership-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <WhatWeDoSection />
        <DivisionsSection />
        <MembershipSection />
        <VisionSection />
        <ProjectsSection />
        <SponsorSection />
        <LeadershipSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
