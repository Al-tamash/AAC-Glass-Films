"use client";

import { FadeIn, ScaleIn } from "@/components/landing/anim-wrapper";
import { ShieldCheck } from "lucide-react";

const brands = [
  { 
    name: "3M", 
    tagline: "World-Class Window Film Solutions", 
    description: "Premium sun control, safety, and decorative films trusted worldwide for performance and reliability." 
  },
  { 
    name: "AI", 
    tagline: "Smart & Premium Glass Film Range", 
    description: "Modern glass film solutions designed for heat reduction, privacy, and enhanced comfort." 
  },
  { 
    name: "Micol", 
    tagline: "Advanced Glass Film Solutions", 
    description: "High-quality films offering durability, protection, and stylish finishes for residential and commercial spaces." 
  },
  { 
    name: "Every", 
    tagline: "Reliable & Cost-Effective Films", 
    description: "Durable and stylish glass film options suitable for everyday residential and office requirements." 
  },
  { 
    name: "Decor", 
    tagline: "Elegant Decorative Glass Films", 
    description: "Beautiful patterns and frosted designs that add privacy and enhance interior aesthetics." 
  },
];

export function PremiumBrands() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <FadeIn className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Trusted Glass Film Installation Experts</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Premium Glass Film Brands We Work With
          </h2>
          <div className="text-muted-foreground text-lg max-w-3xl mx-auto space-y-2">
            <p>
              We work with carefully selected, high-quality glass film brands to deliver the best in durability, performance, aesthetics, and long-term satisfaction.
            </p>
            <p>
              Our focus is to provide the right solution based on your requirement, budget, and application.
            </p>
          </div>
        </FadeIn>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <ScaleIn
              key={brand.name}
              delay={index * 0.1}
              className="group relative"
            >
              <div className="flex flex-col p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full group-hover:-translate-y-1">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                {/* Brand Name */}
                <span className="text-3xl md:text-4xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60 group-hover:from-primary group-hover:to-primary/70 transition-all duration-500 mb-3">
                  {brand.name}
                </span>
                
                {/* Brand Tagline */}
                <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {brand.tagline}
                </h3>

                {/* Brand Description */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {brand.description}
                </p>

                {/* Corner Accent */}
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/20 rounded-tr-md group-hover:border-primary/50 transition-all duration-500" />
              </div>
            </ScaleIn>
          ))}
        </div>

        {/* Trust Points */}
        <FadeIn delay={0.4} className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px]">✔</div>
            100% Genuine Products
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px]">✔</div>
            Professional Installation
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px]">✔</div>
            Quality & Service Assurance
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
