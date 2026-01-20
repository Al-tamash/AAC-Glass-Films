import { FadeIn } from "@/components/landing/anim-wrapper";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { services } from "@/lib/service-data";

export function Services() {
  return (
    <section id="services" className="section-spacing">
      <div className="section-container">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 mb-4">
            Professional Glass Solutions in Hyderabad
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive glass film services, premium acrylic signage, and museum-quality canvas printing. Explore our main categories below.
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
              <Link href={`/services/glass-film-solutions#${service.slug}`} className="h-full block">
                <Card className="h-full group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col border-border">
                  <div className="relative w-full h-48 bg-muted">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium text-primary mb-2 line-clamp-2">
                      {service.tagline}
                    </p>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
