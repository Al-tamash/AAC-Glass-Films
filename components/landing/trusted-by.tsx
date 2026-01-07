import { FadeIn, ScaleIn } from "@/components/landing/anim-wrapper";
import {
  Building2,
  Building,
  ShoppingBag,
  Store,
  Home,
  Landmark,
  Hospital,
  GraduationCap,
} from "lucide-react";

// Client categories 
const clients = [
  { name: "Corporate Offices", icon: Building2 },
  { name: "IT Companies", icon: Building },
  { name: "Retail Stores", icon: ShoppingBag },
  { name: "Showrooms", icon: Store },
  { name: "Hospitals & Clinics", icon: Hospital },
  { name: "Schools & Colleges", icon: GraduationCap },
  { name: "Banks & Finance", icon: Landmark },
  { name: "Residential Projects", icon: Home },
];

export function TrustedBy() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-muted/30 to-background border-y border-border/50">
      <div className="section-container">
        {/* Section Header */}
        <FadeIn className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-4">
            Trusted by Businesses Across Hyderabad
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From corporate offices to retail showrooms — we serve clients who value quality, durability, and aesthetics.
          </p>
        </FadeIn>

        {/* Logo Grid */}
        <FadeIn className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6" duration={0.6}>
          {clients.map((client, index) => (
            <ScaleIn
              key={client.name}
              delay={index * 0.05}
              duration={0.3}
              className="group flex flex-col items-center justify-center p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default aspect-square"
            >
              <div 
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-primary/80 group-hover:text-primary group-hover:scale-110 transition-all duration-300 bg-primary/10 rounded-full p-3 mb-3"
                title={client.name}
              >
                <client.icon className="w-full h-full" strokeWidth={1.5} />
              </div>
              <span className="text-xs md:text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors text-center leading-tight">
                {client.name}
              </span>
            </ScaleIn>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
