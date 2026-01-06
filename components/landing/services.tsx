"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Plain Frosted Glass Film",
    tagline: "Ideal for offices and bathrooms.",
    description: "Enhances privacy while allowing natural light to pass through.",
    image: "/services/images/Modernofficewithfrostedpartitions.png",
  },
  {
    title: "Sparkle Glass Film",
    tagline: "Perfect for showrooms and modern interiors.",
    description: "Adds a stylish sparkle effect to glass surfaces.",
    image: "/services/images/Elegantinteriorswithsparklingglasspartitions.png",
  },
  {
    title: "Printed Glass Film",
    tagline: "Best for branding and décor.",
    description: "Custom designs, logos, and patterns printed on high-quality film.",
    image: "/services/images/PrintedGlassFilm.png",
  },
  {
    title: "Colour Glass Film",
    tagline: "Great for creative interiors.",
    description: "Adds vibrant colour to glass without permanent changes.",
    image: "/services/images/ColourGlassFilm.png",
  },
  {
    title: "One Way Vision Glass Film",
    tagline: "Ideal for offices and storefronts.",
    description: "Clear inside view while blocking outside visibility.",
    image: "/services/images/OneWayVisionGlassFilm.png",
  },
  {
    title: "Colour Vinyl Glass Film",
    tagline: "Perfect for indoor and outdoor applications.",
    description: "Durable, long-lasting vinyl films for glass surfaces.",
    image: "/services/images/ColourVinylGlassFilm.png",
  },
  {
    title: "Safety Glass Film",
    tagline: "Recommended for homes and commercial spaces.",
    description: "Protects against shattering and improves glass strength.",
    image: "/services/images/SafetyGlassFilm.png",
  },
  {
    title: "Decorative Window Tinting",
    tagline: "Best for heat and glare control.",
    description: "Keeps interiors cooler while enhancing appearance.",
    image: "/services/images/Shatteredandintactofficeglasspartitions.png",
  },
];

export function Services() {
  return (
    <section id="services" className="section-spacing">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 mb-4">
            Professional Glass Film Services in Hyderabad
          </h2>
          <p className="text-muted-foreground text-lg">
            From privacy solutions to decorative enhancements, we offer a complete
            range of glass film and vinyl services for homes and businesses across Telangana.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
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
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
