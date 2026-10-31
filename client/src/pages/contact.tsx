import { Navigation } from "@/components/navigation";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us | Robotics Club BIET Jhansi | Bundelkhand Institute of Engineering & Technology"
        description="Get in touch with Solarpunk Corps. Questions, ideas, or just want to say hi? We'd love to hear from you."
        keywords={["contact", "reach out", "email", "support", "inquiries", "questions", "feedback", "location", "robotics club biet jhansi", "biet jhansi", "Bundelkhand Institute of Engineering & Technology, Jhansi", "spc", "spc biet", "spc biet jhansi", "Solarpunk Corps"]}
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
