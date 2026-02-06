"use client";

import { FadeIn, ScaleIn } from "@/components/landing/anim-wrapper";
import { ShieldCheck, CheckCircle2, BadgeCheck, Zap } from "lucide-react";

const brands = [
  { 
    name: "3M", 
    image: "/brand-logo-img/3m.webp",
    description: "Global leader in scientific innovation" 
  },
  { 
    name: "Avery Dennison", 
    image: "/brand-logo-img/AD_H1_Logo_Red_RGB.png",
    description: "Premium display and graphic solutions" 
  },
  { 
    name: "AI", 
    image: "/brand-logo-img/LOGO_AI.png",
    description: "Advanced architectural films" 
  },
  { 
    name: "Mccal", 
    image: "/brand-logo-img/Mccal.png",
    description: "High-quality colored vinyls",
    scale: 1.4 // Increased scale for better visibility
  },
  { 
    name: "Garware", 
    image: "/brand-logo-img/fs.png",
    description: "Trusted sun control films",
    scale: 1.5 // Increased scale for better visibility
  },
  { 
    name: "Olive", 
    image: "/brand-logo-img/olive.png",
    description: "Decorative and designer films",
    scale: 1.4 // Increased scale for better visibility
  },
];

export function PremiumBrands() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Gradient Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 mx-auto border border-primary/20">
            <ShieldCheck className="w-4 h-4" />
            <span>Trusted Installation Partners</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-4xl mx-auto">
            Premium Brands We Work With
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We partner with industry leaders to ensure you get the durable, high-performance, and stylish glass film solutions.
          </p>
        </FadeIn>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {brands.map((brand, index) => (
            <ScaleIn
              key={brand.name}
              delay={index * 0.1}
              className="group relative flex flex-col items-center justify-center p-4"
            >
              <div className="relative w-32 h-20 md:w-40 md:h-24 flex items-center justify-center transition-all duration-300 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={brand.image} 
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain transition-transform duration-300"
                  style={{ transform: brand.scale ? `scale(${brand.scale})` : 'none' }}
                />
              </div>
            </ScaleIn>
          ))}
        </div>

      </div>
    </section>
  );
}
