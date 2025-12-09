import { Navigation } from "@/components/navigation";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
