import { Navigation } from "@/components/navigation";
import { MembershipSection } from "@/components/membership-section";
import { DivisionsSection } from "@/components/divisions-section";
import { Footer } from "@/components/footer";

export default function Structure() {
  return (
    <div className="min-h-screen bg-background">
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
