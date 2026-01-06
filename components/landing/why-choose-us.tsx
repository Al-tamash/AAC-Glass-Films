"use client";

import { motion } from "motion/react";
import { Check, Star } from "lucide-react";

const benefits = [
  {
    title: "Expert Installation Team",
    description:
      "Our trained professionals ensure bubble-free, perfectly aligned installation every single time.",
  },
  {
    title: "Premium Quality Materials",
    description:
      "We use only top-grade films that are scratch-resistant, UV-protected, and built to last.",
  },
  {
    title: "Competitive Pricing",
    description:
      "Get the best value for your money with transparent pricing and no hidden costs.",
  },
  {
    title: "Wide Range of Options",
    description:
      "From frosted to safety films, we offer the most comprehensive selection in Hyderabad.",
  },
  {
    title: "Quick Turnaround Time",
    description:
      "Most installations completed within a day. We respect your time and schedule.",
  },
  {
    title: "After-Sales Support",
    description:
      "Our commitment doesn't end at installation. We're here for any maintenance needs.",
  },
];

const highlights = [
  "15+ Years of Experience",
  "1000+ Successful Projects",
  "Serving All of Telangana",
  "Residential & Commercial",
];

export function WhyChooseUs() {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="mt-3 mb-6">
              Why AAC Glass Films is the Right Choice for You
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              When you choose AAC Glass Films, you're choosing quality, reliability, 
              and a team that genuinely cares about transforming your space. Here's 
              what sets us apart from other glass film services in Hyderabad.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-primary/10"
                >
                  <Star className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
