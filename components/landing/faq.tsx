"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We offer three main services: Glass Film Solutions (frosted, decorative, safety, sun control films), Acrylic Signage (LED letters, 3D signage, name plates), and Canvas Printing (high-resolution photo prints with professional installation).",
  },
  {
    question: "How long does glass film last?",
    answer:
      "High-quality glass films typically last 10–15 years with proper care. Our premium films are scratch-resistant, UV-protected, and designed to withstand Hyderabad's climate without peeling or fading.",
  },
  {
    question: "What types of acrylic signage do you provide?",
    answer:
      "We offer LED & 3D acrylic letters, letters boards, name plates, wall & door letters, custom laser cutting, Islamic wall art, mementos & awards, and flat letters for resin art.",
  },
  {
    question: "Can you print any image on canvas?",
    answer:
      "Yes! We can print any high-resolution digital image on canvas — family photos, landscapes, digital art, and more. We check image quality before printing to ensure the best results.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most residential glass film installations are completed within 2–4 hours. Acrylic signage and canvas installation times vary based on size and complexity. Same-day service is available in Hyderabad.",
  },
  {
    question: "Do you serve areas outside Hyderabad?",
    answer:
      "Yes, we serve all of Telangana including Secunderabad, Gachibowli, Hitech City, Madhapur, Kukatpally, and surrounding areas. Contact us for installations in other cities.",
  },
  {
    question: "What are your payment options?",
    answer:
      "We accept cash, UPI, bank transfer, and all major credit/debit cards. For large commercial projects, we offer flexible payment terms.",
  },
];

interface FAQProps {
  items?: FAQItem[];
  title?: string;
  description?: string;
}

export function FAQ({
  items = defaultFaqs,
  title = "Frequently Asked Questions",
  description = "Got questions about our glass films, signage, or canvas printing services? Here are answers to common queries from our customers in Hyderabad."
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-spacing bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            FAQs
          </span>
          <h2 className="mt-3 mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {description}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div
                className={`bg-card border rounded-xl overflow-hidden transition-colors ${
                  openIndex === index ? "border-primary/50" : "border-border"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 text-muted-foreground">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
