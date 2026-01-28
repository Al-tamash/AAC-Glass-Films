"use client";

import { FadeIn, ScaleIn } from "@/components/landing/anim-wrapper";
import { ShieldCheck, CheckCircle2, BadgeCheck, Zap } from "lucide-react";

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
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Gradient Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 md:mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 mx-auto border border-primary/20">
            <ShieldCheck className="w-4 h-4" />
            <span>Trusted Glass Film Installation Experts</span>
          </div>
          
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-4xl mx-auto mb-6">
            Premium Glass Film Brands We Work With
          </h2>
          
          <div className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-medium space-y-2">
            <p>
              We work with carefully selected, high-quality glass film brands to deliver the best in durability, performance, aesthetics, and long-term satisfaction.
            </p>
            <p>
              Our focus is to provide the right solution based on your requirement, budget, and application.
            </p>
          </div>
        </FadeIn>

        {/* Interactive Spotlight Row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-center">
          {brands.map((brand, index) => (
            <ScaleIn
              key={brand.name}
              delay={index * 0.1}
              className="group relative flex flex-col items-center text-center focus:outline-none"
            >
              {/* Brand Logo/Name Area */}
              <div className="relative z-10 py-6 px-4 w-full group-hover:-translate-y-2 transition-transform duration-500">
                {/* Tooltip Reveal on Hover (Above) */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[200px] md:w-64 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none z-20">
                   <div className="bg-popover/95 backdrop-blur-sm text-popover-foreground text-xs p-3 rounded-lg shadow-xl border border-border relative text-center">
                     <p className="font-medium leading-relaxed">
                      {brand.description}
                     </p>
                     {/* Tooltip Arrow */}
                     <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-popover/95 border-b border-r border-border transform rotate-45"></div>
                   </div>
                </div>

                {/* Brand Name Text */}
                <span className="text-4xl md:text-5xl font-black tracking-tighter text-muted-foreground/30 group-hover:text-foreground transition-all duration-500 grayscale group-hover:grayscale-0 filter cursor-default block">
                  {brand.name}
                </span>
              </div>
            </ScaleIn>
          ))}
        </div>

      </div>
    </section>
  );
}
