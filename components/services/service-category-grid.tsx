"use client";

import { FadeIn } from "@/components/landing/anim-wrapper";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services, Service } from "@/lib/service-data";

interface ServiceCategoryGridProps {
  category: Service['category'];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function ServiceCategoryGrid({ 
  category, 
  title = "Explore Our Solutions", 
  subtitle = "High-quality solutions for your needs.",
  className = ""
}: ServiceCategoryGridProps) {
  
  const categoryServices = services.filter(service => service.category === category);

  return (
    <section id={`services-grid-${category}`} className={`py-12 md:py-16 ${className}`}>
      <div className="section-container">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {subtitle}
          </p>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryServices.map((service, index) => (
            <FadeIn
              key={service.slug}
              delay={index * 0.05}
              duration={0.4}
            >
              <Card className="h-full hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col border-border relative group">
                <div className="relative w-full h-48 bg-muted overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Overlay for better text readability if needed, or just hover effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-sm font-medium text-primary mb-2 line-clamp-2">
                    {service.tagline}
                  </p>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                    {service.shortDescription}
                  </p>
                  {/* <Button variant="outline" size="sm" className="w-full mt-auto">View Details</Button> */}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {categoryServices.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No services found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
