import { Navigation } from "@/components/navigation";
import { SponsorSection } from "@/components/sponsor-section";
import { Footer } from "@/components/footer";

export default function Sponsors() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <SponsorSection />
      </main>
      <Footer />
    </div>
  );
}
