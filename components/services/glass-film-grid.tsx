"use client";

import { FadeIn } from "@/components/landing/anim-wrapper";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/service-data";

export function GlassFilmGrid() {
  return (
    <section id="services-grid" className="py-12 md:py-16">
      <div className="section-container">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            High-quality glass films for privacy, aesthetics, and protection.
          </p>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn
              key={service.slug}
              delay={index * 0.05}
              duration={0.4}
            >
              <Card className="h-full hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col border-border">
                <div className="relative w-full h-48 bg-muted overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-primary mb-2 line-clamp-2">
                    {service.tagline}
                  </p>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {service.shortDescription}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

