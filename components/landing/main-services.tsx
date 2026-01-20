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
           Complete Glass, Signage & Printing Solutions in Hyderabad
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive glass film services, premium acrylic signage, and museum-quality canvas printing. Explore our main categories below.
          </p>
        </FadeIn>

        {/* Main Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* 1. Glass Film Solutions */}
          <FadeIn delay={0.1}>
            <Link href="/services/glass-film-solutions" className="block h-full group">
              <Card className="h-full border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer overflow-hidden relative">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/services/printed-glass-film/images/pgf1.jpeg"
                    alt="Glass Film Solutions"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardHeader className="pt-4">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    Glass Film Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Complete range of Frosted, Sparkle, Printed, and Safety glass films for privacy and decoration. 
                    Includes 10+ specialized variants.
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                      Frosted & Decorative Films
                    </li>
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                      Sun Control & Safety Films
                    </li>
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                      Custom Printed Designs
                    </li>
                  </ul>

                  <div className="flex items-center text-primary font-medium group-hover:underline">
                    View All Solutions <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </FadeIn>

          {/* 2. Acrylic Signage Services */}
          <FadeIn delay={0.2}>
            <Link href="/services/acrylic-signage" className="block h-full group">
              <Card className="h-full border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer overflow-hidden relative">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/services/acrylic-signage/Acrylic 3d letters/e1.jpeg"
                    alt="Acrylic Signage"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardHeader className="pt-4">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    Acrylic Signage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Premium acrylic letters, LED signage, and custom boards for high-impact branding.
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                      LED & 3D Letters
                    </li>
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                      Name Plates & Awards
                    </li>
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                      Custom Laser Cutting
                    </li>
                  </ul>

                  <div className="flex items-center text-primary font-medium group-hover:underline">
                    View All Signage <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </FadeIn>

           {/* 3. Canvas Printing */}
           <FadeIn delay={0.3}>
            <Link href="/services/canvas-printing" className="block h-full group">
              <Card className="h-full border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer overflow-hidden relative">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/services/canvas-printing/Canvas printing with installation/e1.jpeg"
                    alt="Canvas Printing"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardHeader className="pt-4">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    Canvas Printing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Turn your favorite photos and digital art into museum-quality canvas prints.
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                      High-Resolution Prints
                    </li>
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                      Gallery Wrap Finish
                    </li>
                    <li className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                      Professional Installation
                    </li>
                  </ul>

                  <div className="flex items-center text-primary font-medium group-hover:underline">
                    View Canvas Options <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
