import { Navigation } from "@/components/navigation";
import { MembershipSection } from "@/components/membership-section";
import { DivisionsSection } from "@/components/divisions-section";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";

export default function Structure() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Club Structure"
        description="Explore membership tiers and the 9 divisions of Solarpunk Corps — from Robotics to Storytelling."
      />
      <Navigation />
      <main className="pt-16">
        <span id="structure-top" />
        <MembershipSection />
        <DivisionsSection />
      </main>
      <Footer />
    </div>
  );
}
