import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Is SPC a new club?",
    answer: "Yes! Solarpunk Corps is newly launching at BIET Jhansi. We're in the founding stage, building our team and preparing our first projects. This is an exciting opportunity to be part of something from the very beginning."
  },
  {
    question: "Can first-year students join?",
    answer: "Absolutely! We welcome students from all years. First-year students join as Explorers and can participate in sessions, workshops, and mini-projects while learning the basics. There's no prior experience required."
  },
  {
    question: "Is SPC only for robotics students?",
    answer: "No, SPC is open to students from any branch. We're a multidisciplinary club that values diverse perspectives. Whether you're into engineering, design, writing, management, or social work, there's a place for you here."
  },
  {
    question: "Are the membership fees high?",
    answer: "No, our fees are minimal and only cover basic resources and operational costs. We believe in accessibility and want every interested student to be able to participate, regardless of their financial situation."
  },
  {
    question: "Do sponsors get regular updates?",
    answer: "Yes! We provide quarterly Impact Reports to all sponsors, showing exactly how funds were used and the progress of projects they supported. Our financial records are transparent and available upon request."
  },
  {
    question: "What if I don't have any technical skills?",
    answer: "That's perfectly fine! SPC is about learning by doing. We have divisions for research, documentation, outreach, events, community work, design, and finance. You can contribute based on your interests and grow your skills with us."
  },
  {
    question: "When will SPC officially launch?",
    answer: "We are in the active founding stage in 2026. Follow our social media channels for announcements about our official launch event and how to become a founding member."
  },
  {
    question: "How can I support SPC as an external organization?",
    answer: "We welcome partnerships and sponsorships from organizations that share our vision. You can support us through funding, equipment donations, mentorship, or collaboration opportunities. Reach out through our contact form!"
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
