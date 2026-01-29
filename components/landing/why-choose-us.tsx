import { FadeIn, ScaleIn } from "@/components/landing/anim-wrapper";
import { Check, Star } from "lucide-react";

const defaultBenefits = [
  {
    title: "Expert Installation Team",
    description:
      "Our trained professionals ensure precise, flawless installation for glass films, signage, and canvas prints.",
  },
  {
    title: "Premium Quality Materials",
    description:
      "We use only top-grade materials — scratch-resistant films, durable acrylic, and museum-quality canvas.",
  },
  {
    title: "Competitive Pricing",
    description:
      "Get the best value for your money with transparent pricing and no hidden costs.",
  },
  {
    title: "Wide Range of Options",
    description:
      "From frosted films to LED signage and custom canvas prints, we offer the most comprehensive selection in Hyderabad.",
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

const defaultHighlights = [
  "15+ Years of Experience",
  "1000+ Successful Projects",
  "Serving All of Telangana",
  "Residential & Commercial",
];

interface Benefit {
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  benefits?: Benefit[];
  highlights?: string[];
  title?: string;
  description?: string;
}

export function WhyChooseUs({ 
  benefits = defaultBenefits, 
  highlights = defaultHighlights,
  title = "Why AAC Glass Films is the Right Choice for You",
  description = "When you choose AAC Glass Films, you're choosing quality, reliability, and a team that genuinely cares about transforming your space — whether it's glass films, acrylic signage, or canvas printing."
}: WhyChooseUsProps) {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <FadeIn direction="right" duration={0.6}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="mt-3 mb-6">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {description}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <ScaleIn
                  key={highlight}
                  delay={index * 0.1}
                  duration={0.3}
                  className="flex items-center gap-2 p-3 rounded-lg bg-primary/10"
                >
                  <Star className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {highlight}
                  </span>
                </ScaleIn>
              ))}
            </div>
          </FadeIn>

          {/* Right - Benefits List */}
          <FadeIn direction="left" duration={0.6} className="space-y-4">
            {benefits.map((benefit, index) => (
              <FadeIn
                key={benefit.title}
                delay={index * 0.08}
                duration={0.3}
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
              </FadeIn>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
