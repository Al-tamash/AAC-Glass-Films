import { FadeIn } from "@/components/landing/anim-wrapper";
import {
  MessageSquare,
  ClipboardCheck,
  Palette,
  Wrench,
  ShieldCheck,
  LucideIcon,
  Circle,
} from "lucide-react";

export interface Step {
  number: string;
  icon?: LucideIcon;
  title: string;
  description: string;
}

const defaultSteps: Step[] = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Free Consultation",
    description:
      "Call or WhatsApp us with your requirements — glass films, acrylic signage, or canvas printing.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Site Inspection",
    description:
      "We visit your location to take measurements and understand your specific needs.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Design & Selection",
    description:
      "Choose from our wide range of films, signage styles, or canvas finishes to match your vision.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Professional Installation",
    description:
      "Our expert technicians install your chosen solution with precision — clean and quick.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Final Check & Support",
    description:
      "We inspect the finish, answer your questions, and provide after-service support.",
  },
];

interface ProcessProps {
  steps?: Step[];
  title?: string;
  description?: string;
  categoryName?: string;
}

export function Process({
  steps = defaultSteps,
  title = "How We Work — From Consultation to Installation",
  description = "Whether it's glass films for privacy, acrylic signage for branding, or canvas prints for decor — our 5-step process ensures a smooth, hassle-free experience.",
  categoryName = "Work Process"
}: ProcessProps) {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {categoryName}
          </span>
          <h2 className="mt-3 mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {description}
          </p>
        </FadeIn>

        {/* Process Steps - Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Connecting line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <FadeIn
                key={step.number}
                delay={index * 0.1}
                duration={0.4}
                className="relative text-center"
              >
                {/* Step circle with icon */}
                <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {step.icon ? <step.icon className="w-7 h-7 text-primary" /> : <Circle className="w-7 h-7 text-primary" />}
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
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
