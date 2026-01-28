"use client";

import { FadeIn } from "@/components/landing/anim-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function MainServices() {
  return (
    <section id="services" className="section-spacing">
      <div className="section-container">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 mb-4">
            Transform Your Space with Our Expert Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From privacy glass films to eye-catching signage and stunning wall art — we bring your vision to life with professional installation across Hyderabad.
          </p>
        </FadeIn>

        {/* Main Categories Grid - Full Width */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* 1. Glass Film Solutions */}
          <FadeIn delay={0.1}>
            <Link href="/services/glass-film-solutions" className="block h-full group">
              <Card className="h-full flex flex-col border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src="/services/images/glassfilmsolutionserviceimg.png"
                    alt="Glass Film Solutions"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
                <CardHeader className="pt-5 pb-2">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    Glass Film Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Enhance privacy, reduce glare, and add style to any glass surface. Choose from 10+ premium film varieties for homes, offices, and commercial spaces.
                  </p>
                  
                  <ul className="space-y-2 mb-6 flex-1">
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      Frosted, Sparkle & Decorative Films
                    </li>
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      Sun Control & Safety Protection
                    </li>
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      Custom Printed & One-Way Vision
                    </li>
                  </ul>

                  <div className="flex items-center text-primary font-semibold group-hover:underline mt-auto">
                    Explore Glass Films <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </FadeIn>

          {/* 2. Acrylic Signage Services */}
          <FadeIn delay={0.2}>
            <Link href="/services/acrylic-signage" className="block h-full group">
              <Card className="h-full flex flex-col border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src="/services/images/acrylicsignageserviceimg.png"
                    alt="Acrylic Signage"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
                <CardHeader className="pt-5 pb-2">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    Acrylic Signage
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Make your brand stand out with premium 3D letters, LED signage, and custom-cut acrylic boards. Perfect for offices, retail stores, and events.
                  </p>
                  
                  <ul className="space-y-2 mb-6 flex-1">
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      3D Letters & LED Backlit Signs
                    </li>
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      Name Plates, Awards & Mementos
                    </li>
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      Custom Laser Cutting & Islamic Art
                    </li>
                  </ul>

                  <div className="flex items-center text-primary font-semibold group-hover:underline mt-auto">
                    Explore Signage <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </FadeIn>

           {/* 3. Canvas Printing */}
           <FadeIn delay={0.3}>
            <Link href="/services/canvas-printing" className="block h-full group">
              <Card className="h-full flex flex-col border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src="/services/images/canvasprintingserviceimg.png"
                    alt="Canvas Printing"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
                <CardHeader className="pt-5 pb-2">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    Canvas Printing
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Turn your cherished photos and digital artwork into stunning wall decor. Museum-quality prints with professional framing and installation.
                  </p>
                  
                  <ul className="space-y-2 mb-6 flex-1">
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      High-Resolution Archival Prints
                    </li>
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      Gallery Wrap & Custom Framing
                    </li>
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      Professional Wall Installation
                    </li>
                  </ul>

                  <div className="flex items-center text-primary font-semibold group-hover:underline mt-auto">
                    Explore Canvas Prints <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
