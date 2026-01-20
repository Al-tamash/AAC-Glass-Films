"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Featured projects from all 3 categories
const featuredProjects = [
  // Glass Films
  { src: "/services/printed-glass-film/images/pgf1.jpeg", alt: "Printed Glass Film", category: "Glass Films" },
  { src: "/services/printed-glass-film/images/pgf2.jpeg", alt: "Custom Printed Glass", category: "Glass Films" },
  { src: "/services/colour-vinyl-glass-film/images/vgf1.jpeg", alt: "Vinyl Glass Film", category: "Glass Films" },
  // Acrylic Signage
  { src: "/services/acrylic-signage/Acrylic 3d letters/e1.jpeg", alt: "3D Acrylic Letters", category: "Acrylic Signage" },
  { src: "/services/acrylic-signage/Acrylic 3d letters/e2.jpeg", alt: "LED Signage", category: "Acrylic Signage" },
  { src: "/services/acrylic-signage/Acrylic letters board/e1.jpeg", alt: "Acrylic Letters Board", category: "Acrylic Signage" },
  // Canvas Printing
  { src: "/services/canvas-printing/Canvas printing with installation/e1.jpeg", alt: "Canvas Print", category: "Canvas Printing" },
  { src: "/services/canvas-printing/Canvas printing with installation/e2.jpeg", alt: "Wall Canvas Art", category: "Canvas Printing" },
];

interface GalleryPreviewProps {
  title?: string;
  description?: string;
}

export function GalleryPreview({
  title = "Our Recent Projects",
  description = "A glimpse of our work across glass films, acrylic signage, and canvas printing.",
}: GalleryPreviewProps) {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="mt-3 mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg">{description}</p>
        </motion.div>

        {/* Gallery Grid - 8 Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Category Badge */}
              <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.category}
              </div>
              {/* Alt Text */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium text-white truncate">{project.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/our-work">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
