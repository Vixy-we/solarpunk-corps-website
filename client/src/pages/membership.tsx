import { Navigation } from "@/components/navigation";
import { MembershipSection } from "@/components/membership-section";
import { Footer } from "@/components/footer";

export default function Membership() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <MembershipSection />
      </main>
      <Footer />
    </div>
  );
}
