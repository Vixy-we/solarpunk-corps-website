import { Navigation } from "@/components/navigation";
import { SupportSection } from "@/components/support-section";
import { Footer } from "@/components/footer";

export default function Sponsors() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-16">
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}
