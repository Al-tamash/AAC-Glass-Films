"use client";

import { FadeIn } from "@/components/landing/anim-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Layers, PlusCircle, ArrowRight } from "lucide-react";

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
            Professional Glass Solutions in Hyderabad
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive glass film services. Explore our main categories below.
          </p>
        </FadeIn>

        {/* Main Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* 1. Glass Film Solutions (Active) */}
          <FadeIn delay={0.1}>
            <Link href="/services/glass-film-solutions" className="block h-full group">
              <Card className="h-full border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer overflow-hidden relative">
                <div className="h-2 w-full bg-primary" />
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    Glass Film Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Complete range of Frosted, Sparkle, Printed, and Safety glass films for privacy and decoration. 
                    Includes 8 specialized variants.
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

          {/* 2. Second Services (Coming Soon) */}
          <FadeIn delay={0.2}>
            <div className="h-full block relative opacity-80">
              <Card className="h-full border-dashed border-2 border-border/60 bg-muted/20 flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                    <PlusCircle className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-muted-foreground flex items-center justify-between">
                    Second Services
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">Coming Soon</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground/80">
                    We are expanding our portfolio. New premium services will be available shortly to serve you better.
                  </p>
                </CardContent>
              </Card>
            </div>
          </FadeIn>

           {/* 3. Third Services (Coming Soon) */}
           <FadeIn delay={0.3}>
            <div className="h-full block relative opacity-80">
              <Card className="h-full border-dashed border-2 border-border/60 bg-muted/20 flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                    <PlusCircle className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-muted-foreground flex items-center justify-between">
                    Third Services
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">Coming Soon</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground/80">
                    Our team is working on bringing more innovative solutions for your residential and commercial needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
