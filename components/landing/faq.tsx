"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does glass film last?",
    answer:
      "High-quality glass films typically last 10–15 years with proper care. Our premium films are scratch-resistant, UV-protected, and designed to withstand Hyderabad's climate without peeling or fading.",
  },
  {
    question: "Does glass film reduce heat inside rooms?",
    answer:
      "Yes! Our solar control and decorative window tinting films can reduce indoor heat by up to 60%, keeping your space cooler and cutting down on AC costs — especially useful during Hyderabad's hot summers.",
  },
  {
    question: "Will glass film give me complete privacy?",
    answer:
      "It depends on the type. Frosted and one-way vision films offer excellent daytime privacy while still allowing natural light. For 24/7 privacy, we recommend opaque or blackout films.",
  },
  {
    question: "How do I clean and maintain glass film?",
    answer:
      "Simply wipe with a soft cloth and mild soapy water. Avoid abrasive cleaners or rough scrubbing. That's it — our films are low-maintenance and easy to keep looking fresh.",
  },
  {
    question: "Can glass film be removed later?",
    answer:
      "Yes, glass films are removable without damaging the glass. Our team can professionally remove old films if you want to upgrade or change styles. No residue, no hassle.",
  },
  {
    question: "Is the installation process safe for my glass?",
    answer:
      "Absolutely. We use bubble-free, precision installation techniques that are completely safe for all glass types. The process is clean, quick, and doesn't involve any drilling or permanent fixtures.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most residential installations are completed within 2–4 hours. For larger commercial projects, we provide a timeline after assessing your space. Same-day service is available in Hyderabad.",
  },
];

export function FAQ() {
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
            Common Questions About Glass Film Installation
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We've got answers. Here's what our customers in Hyderabad 
            commonly ask before getting glass film installed.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
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
