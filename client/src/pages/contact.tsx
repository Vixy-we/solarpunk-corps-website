import { Navigation } from "@/components/navigation";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us"
        description="Get in touch with Solarpunk Corps. Questions, ideas, or just want to say hi? We'd love to hear from you."
      />
      <Navigation />
      <main className="pt-16">
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
