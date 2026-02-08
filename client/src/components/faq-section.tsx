import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Is SPC a new club?",
    answer: (
      <div className="space-y-2">
        <p><strong className="text-foreground font-semibold">Yes!</strong> Solarpunk Corps is newly launching at BIET Jhansi.</p>
        <p>We're currently in the founding stage, building our core team and preparing our first batch of pilot projects. This is an exciting opportunity to be part of something from the very beginning.</p>
      </div>
    )
  },
  {
    question: "Can first-year students join?",
    answer: (
      <div className="space-y-2">
        <p><strong className="text-foreground font-semibold">Absolutely!</strong> But it's not just for 1st years.</p>
        <p>Students from <strong className="text-primary font-bold">1st–3rd Year</strong> can join as <strong className="text-primary italic">Explorers</strong> — beginners who join to explore robotics, sustainability, and creative tech ideas. No prior experience is required.</p>
      </div>
    )
  },
  {
    question: "Is SPC only for mechanical engineering students?",
    answer: (
      <div className="space-y-2">
        <p>No, SPC is open to students from <strong className="text-foreground font-semibold">any branch</strong>.</p>
        <p>We're a multidisciplinary club that values diverse perspectives. Whether you're into engineering, design, writing, management, or social work, there's a vital role for you here.</p>
      </div>
    )
  },
  {
    question: "Are the membership fees high?",
    answer: (
      <div className="space-y-2">
        <p>No, our fees are <strong className="text-foreground font-semibold">minimal</strong> and only cover basic collective resources.</p>
        <p>We believe in accessibility. We want every interested student to be able to participate, regardless of their financial background.</p>
      </div>
    )
  },
  {
    question: "Do sponsors get regular updates?",
    answer: (
      <div className="space-y-2">
        <p><strong className="text-foreground font-semibold">Yes!</strong> Transparency is one of our core values.</p>
        <p>We provide <strong className="text-primary">quarterly Impact Reports</strong> to all sponsors, showing exactly how funds were used and the progress of the projects they supported.</p>
      </div>
    )
  },
  {
    question: "What if I don't have any technical skills?",
    answer: (
      <div className="space-y-2">
        <p>That's perfectly fine! SPC is about <strong className="italic underline decoration-primary/30">learning by doing</strong>.</p>
        <p>We have divisions for:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Research & Documentation</li>
          <li>Outreach & Events</li>
          <li>Community & Social Design</li>
          <li>Finance & Management</li>
        </ul>
      </div>
    )
  },
  {
    question: "When will SPC officially launch?",
    answer: (
      <div className="space-y-2">
        <p>We are in the <strong className="text-foreground font-semibold">active founding stage in 2026</strong>.</p>
        <p>Follow our social media channels for announcements about our official launch event and how to become a member.</p>
      </div>
    )
  },
  {
    question: "How can I support SPC as an external organization?",
    answer: (
      <div className="space-y-2">
        <p>We welcome partnerships and sponsorships from organizations that share our vision for a sustainable, tech-enabled future.</p>
        <p>You can support us through <strong className="font-medium text-foreground">funding, equipment donations, mentorship</strong>, or collaboration opportunities. Please reach out through our contact form!</p>
      </div>
    )
  }
];

export function FaqSection() {
  return (
    <section id="faq-top" className="py-20 md:py-32">
      <span id="faq" />
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4" data-testid="badge-faq">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-faq-title">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground" data-testid="text-faq-description">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 data-[state=open]:bg-card"
              >
                <AccordionTrigger
                  className="text-left font-semibold hover:no-underline py-4"
                  data-testid={`accordion-trigger-${index}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
