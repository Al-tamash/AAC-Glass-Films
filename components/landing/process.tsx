"use client";

import { motion } from "motion/react";
import {
  MessageSquare,
  ClipboardCheck,
  Palette,
  Wrench,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Free Consultation",
    description:
      "Call or WhatsApp us with your requirements — frosted, safety, decorative, or any glass film type.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Site Inspection",
    description:
      "We visit your home, office, or shop to measure glass surfaces and understand your needs.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Film Selection",
    description:
      "Choose from our range: plain frosted, sparkle, printed, colour, one-way vision, safety, or vinyl films.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Professional Installation",
    description:
      "Our expert technicians install your chosen film with bubble-free precision — clean and quick.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Final Check & Support",
    description:
      "We inspect the finish, answer your questions, and provide after-service support.",
  },
];

export function Process() {
  return (
    <section className="section-spacing bg-muted/30">
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
            Our Work Process
          </span>
          <h2 className="mt-3 mb-4">
            How We Work — From Consultation to Installation
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether it's frosted film for your bathroom, safety film for your office, or decorative 
            tinting for your showroom — our 5-step process ensures a smooth, hassle-free experience.
          </p>
        </motion.div>

        {/* Process Steps - Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Connecting line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Step circle with icon */}
                <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Step number badge */}
                <div className="absolute top-0 right-1/2 translate-x-10 -translate-y-1 w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
