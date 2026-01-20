"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define the structure for media items
interface MediaItem {
  type: "image" | "video";
  src: string;
  alt: string;
}

// Define sub-categories for each main service
interface SubCategory {
  id: string;
  name: string;
  media: MediaItem[];
}

interface MainCategory {
  id: string;
  name: string;
  subCategories: SubCategory[];
}

// Glass Film sub-categories
const glassFilmSubCategories: SubCategory[] = [
  {
    id: "frosted",
    name: "Frosted Glass Film",
    media: [
      { type: "image", src: "/services/plain-frosted-glass-film/images/pfgf1.png", alt: "Frosted Glass Film" },
    ],
  },
  {
    id: "sparkle",
    name: "Sparkle Glass Film",
    media: [
      { type: "image", src: "/services/sparkle-glass-film/images/e1.png", alt: "Sparkle Glass Film" },
    ],
  },
  {
    id: "printed",
    name: "Printed Glass Film",
    media: [
      { type: "image", src: "/services/printed-glass-film/images/pgf1.jpeg", alt: "Printed Glass Film 1" },
      { type: "image", src: "/services/printed-glass-film/images/pgf2.jpeg", alt: "Printed Glass Film 2" },
      { type: "image", src: "/services/printed-glass-film/images/pgf3.jpeg", alt: "Printed Glass Film 3" },
      { type: "image", src: "/services/printed-glass-film/images/pgf4.jpeg", alt: "Printed Glass Film 4" },
      { type: "image", src: "/services/printed-glass-film/images/pgf5.jpeg", alt: "Printed Glass Film 5" },
      { type: "image", src: "/services/printed-glass-film/images/pgf6.jpeg", alt: "Printed Glass Film 6" },
    ],
  },
  {
    id: "colour",
    name: "Colour Glass Film",
    media: [
      { type: "image", src: "/services/colour-glass-film/images/cgf1.png", alt: "Colour Glass Film" },
    ],
  },
  {
    id: "one-way",
    name: "One Way Vision",
    media: [
      { type: "image", src: "/services/one-way-vision-glass-film/images/owvgf1.png", alt: "One Way Vision Film" },
    ],
  },
  {
    id: "vinyl",
    name: "Vinyl Glass Film",
    media: [
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf1.jpeg", alt: "Vinyl Glass Film 1" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf2.jpeg", alt: "Vinyl Glass Film 2" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf3.jpeg", alt: "Vinyl Glass Film 3" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf4.jpeg", alt: "Vinyl Glass Film 4" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf5.jpeg", alt: "Vinyl Glass Film 5" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf6.jpeg", alt: "Vinyl Glass Film 6" },
    ],
  },
  {
    id: "safety",
    name: "Safety Glass Film",
    media: [
      { type: "image", src: "/services/safety-glass-film/images/sgf1.png", alt: "Safety Glass Film" },
    ],
  },
  {
    id: "3d-glass",
    name: "3D Glass Film",
    media: [
      { type: "image", src: "/services/3d glass film/e1.jpeg", alt: "3D Glass Film 1" },
      { type: "image", src: "/services/3d glass film/e2.jpeg", alt: "3D Glass Film 2" },
      { type: "image", src: "/services/3d glass film/e3.jpeg", alt: "3D Glass Film 3" },
    ],
  },
  {
    id: "sun-control",
    name: "Sun Control Film",
    media: [
      { type: "image", src: "/services/sun control film for glass window/WhatsApp Image 2026-01-13 at 1.57.31 PM.jpeg", alt: "Sun Control Film 1" },
      { type: "image", src: "/services/sun control film for glass window/WhatsApp Image 2026-01-13 at 1.57.32 PM.jpeg", alt: "Sun Control Film 2" },
    ],
  },
  {
    id: "glass-board",
    name: "Glass Writing Board",
    media: [
      { type: "image", src: "/services/Glass writing board/e1.jpeg", alt: "Glass Writing Board 1" },
      { type: "image", src: "/services/Glass writing board/e2.jpeg", alt: "Glass Writing Board 2" },
      { type: "image", src: "/services/Glass writing board/e3.jpeg", alt: "Glass Writing Board 3" },
    ],
  },
];

// Acrylic Signage sub-categories
const acrylicSignageSubCategories: SubCategory[] = [
  {
    id: "3d-letters",
    name: "3D Acrylic Letters",
    media: [
      { type: "image", src: "/services/acrylic-signage/Acrylic 3d letters/e1.jpeg", alt: "3D Acrylic Letters 1" },
      { type: "image", src: "/services/acrylic-signage/Acrylic 3d letters/e2.jpeg", alt: "3D Acrylic Letters 2" },
      { type: "image", src: "/services/acrylic-signage/Acrylic 3d letters/e3.jpeg", alt: "3D Acrylic Letters 3" },
      { type: "image", src: "/services/acrylic-signage/Acrylic 3d letters/e4.jpeg", alt: "3D Acrylic Letters 4" },
      { type: "image", src: "/services/acrylic-signage/Acrylic 3d letters/e5.jpeg", alt: "3D Acrylic Letters 5" },
      { type: "image", src: "/services/acrylic-signage/Acrylic 3d letters/e6.jpeg", alt: "3D Acrylic Letters 6" },
    ],
  },
  {
    id: "name-plates",
    name: "Acrylic Name Plates",
    media: [
      { type: "image", src: "/services/acrylic-signage/Acrylic letters for name plates/e1.jpeg", alt: "Acrylic Name Plate 1" },
      { type: "image", src: "/services/acrylic-signage/Acrylic letters for name plates/e2.jpeg", alt: "Acrylic Name Plate 2" },
      { type: "image", src: "/services/acrylic-signage/Acrylic letters for name plates/e3.jpeg", alt: "Acrylic Name Plate 3" },
      { type: "image", src: "/services/acrylic-signage/Acrylic letters for name plates/e4.jpeg", alt: "Acrylic Name Plate 4" },
      { type: "image", src: "/services/acrylic-signage/Acrylic letters for name plates/e5.jpeg", alt: "Acrylic Name Plate 5" },
      { type: "image", src: "/services/acrylic-signage/Acrylic letters for name plates/e6.jpeg", alt: "Acrylic Name Plate 6" },
    ],
  },
  {
    id: "letters-board",
    name: "Acrylic Letters Board",
    media: [
      { type: "image", src: "/services/acrylic-signage/Acrylic letters board/e1.jpeg", alt: "Acrylic Letters Board 1" },
      { type: "image", src: "/services/acrylic-signage/Acrylic letters board/e2.jpeg", alt: "Acrylic Letters Board 2" },
      { type: "image", src: "/services/acrylic-signage/Acrylic letters board/e3.jpeg", alt: "Acrylic Letters Board 3" },
      { type: "image", src: "/services/acrylic-signage/Acrylic letters board/e4.jpeg", alt: "Acrylic Letters Board 4" },
      { type: "image", src: "/services/acrylic-signage/Acrylic letters board/e5.jpeg", alt: "Acrylic Letters Board 5" },
      { type: "image", src: "/services/acrylic-signage/Acrylic letters board/e6.jpeg", alt: "Acrylic Letters Board 6" },
    ],
  },
  {
    id: "wall-doors",
    name: "Wall & Door Letters",
    media: [
      { type: "image", src: "/services/acrylic-signage/Acrylic letters for wall doors/e1.jpeg", alt: "Wall Door Letters 1" },
      { type: "image", src: "/services/acrylic-signage/Acrylic letters for wall doors/e2.jpeg", alt: "Wall Door Letters 2" },
      { type: "image", src: "/services/acrylic-signage/Acrylic letters for wall doors/e3.jpeg", alt: "Wall Door Letters 3" },
      { type: "image", src: "/services/acrylic-signage/Acrylic letters for wall doors/e4.jpeg", alt: "Wall Door Letters 4" },
      { type: "image", src: "/services/acrylic-signage/Acrylic letters for wall doors/e5.jpeg", alt: "Wall Door Letters 5" },
      { type: "image", src: "/services/acrylic-signage/Acrylic letters for wall doors/e6.jpeg", alt: "Wall Door Letters 6" },
    ],
  },
  {
    id: "islamic-art",
    name: "Islamic Wall Art",
    media: [
      { type: "image", src: "/services/acrylic-signage/Acrylic 3d Islamic wall art/e1.jpeg", alt: "Islamic Wall Art 1" },
      { type: "image", src: "/services/acrylic-signage/Acrylic 3d Islamic wall art/e2.jpeg", alt: "Islamic Wall Art 2" },
      { type: "image", src: "/services/acrylic-signage/Acrylic 3d Islamic wall art/e3.jpeg", alt: "Islamic Wall Art 3" },
      { type: "image", src: "/services/acrylic-signage/Acrylic 3d Islamic wall art/e4.jpeg", alt: "Islamic Wall Art 4" },
      { type: "image", src: "/services/acrylic-signage/Acrylic 3d Islamic wall art/e5.jpeg", alt: "Islamic Wall Art 5" },
      { type: "image", src: "/services/acrylic-signage/Acrylic 3d Islamic wall art/e6.jpeg", alt: "Islamic Wall Art 6" },
    ],
  },
  {
    id: "design-cutting",
    name: "Custom Laser Cutting",
    media: [
      { type: "image", src: "/services/acrylic-signage/Acrylic design cutting/e1.jpeg", alt: "Acrylic Design Cutting 1" },
      { type: "image", src: "/services/acrylic-signage/Acrylic design cutting/e2.jpeg", alt: "Acrylic Design Cutting 2" },
      { type: "image", src: "/services/acrylic-signage/Acrylic design cutting/e3.jpeg", alt: "Acrylic Design Cutting 3" },
      { type: "image", src: "/services/acrylic-signage/Acrylic design cutting/e4.jpeg", alt: "Acrylic Design Cutting 4" },
      { type: "image", src: "/services/acrylic-signage/Acrylic design cutting/e5.jpeg", alt: "Acrylic Design Cutting 5" },
      { type: "image", src: "/services/acrylic-signage/Acrylic design cutting/e6.jpeg", alt: "Acrylic Design Cutting 6" },
    ],
  },
];

// Canvas Printing sub-categories
const canvasPrintingSubCategories: SubCategory[] = [
  {
    id: "canvas-all",
    name: "Canvas Prints",
    media: [
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e1.jpeg", alt: "Canvas Print 1" },
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e2.jpeg", alt: "Canvas Print 2" },
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e3.jpeg", alt: "Canvas Print 3" },
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e4.jpeg", alt: "Canvas Print 4" },
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e5.jpeg", alt: "Canvas Print 5" },
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e6.jpeg", alt: "Canvas Print 6" },
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e7.jpeg", alt: "Canvas Print 7" },
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e8.jpeg", alt: "Canvas Print 8" },
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e9.jpeg", alt: "Canvas Print 9" },
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e10.jpeg", alt: "Canvas Print 10" },
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e11.jpeg", alt: "Canvas Print 11" },
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e12.jpeg", alt: "Canvas Print 12" },
    ],
  },
];

// Main categories data
const mainCategories: MainCategory[] = [
  {
    id: "glass-films",
    name: "Glass Films",
    subCategories: glassFilmSubCategories,
  },
  {
    id: "acrylic-signage",
    name: "Acrylic Signage",
    subCategories: acrylicSignageSubCategories,
  },
  {
    id: "canvas-printing",
    name: "Canvas Printing",
    subCategories: canvasPrintingSubCategories,
  },
];

interface CategorizedGalleryProps {
  title?: string;
  description?: string;
}

export function CategorizedGallery({
  title = "Our Work Portfolio",
  description = "Browse through our completed projects across Hyderabad — glass films, acrylic signage, and canvas printing.",
}: CategorizedGalleryProps) {
  const [activeMainCategory, setActiveMainCategory] = useState<string>("glass-films");
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // Get current main category
  const currentMainCategory = mainCategories.find((c) => c.id === activeMainCategory);

  // Get all media for current main category or specific sub-category
  const getCurrentMedia = (): MediaItem[] => {
    if (!currentMainCategory) return [];

    if (activeSubCategory) {
      const subCat = currentMainCategory.subCategories.find((s) => s.id === activeSubCategory);
      return subCat?.media || [];
    }

    // Return all media from all sub-categories
    return currentMainCategory.subCategories.flatMap((s) => s.media);
  };

  const currentMedia = getCurrentMedia();
  const displayedMedia = showAll ? currentMedia : currentMedia.slice(0, 8);

  // Reset sub-category when main category changes
  useEffect(() => {
    setActiveSubCategory(null);
    setShowAll(false);
  }, [activeMainCategory]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

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

        {/* Main Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          {mainCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveMainCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeMainCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card border border-border hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              {category.name}
              <ChevronDown className={`inline-block ml-2 h-4 w-4 transition-transform ${
                activeMainCategory === category.id ? "rotate-180" : ""
              }`} />
            </button>
          ))}
        </motion.div>

        {/* Sub-Category Filter Chips */}
        <AnimatePresence mode="wait">
          {currentMainCategory && (
            <motion.div
              key={activeMainCategory}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              <button
                onClick={() => setActiveSubCategory(null)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeSubCategory === null
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground"
                }`}
              >
                All {currentMainCategory.name}
              </button>
              {currentMainCategory.subCategories.map((subCat) => (
                <button
                  key={subCat.id}
                  onClick={() => setActiveSubCategory(subCat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    activeSubCategory === subCat.id
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground"
                  }`}
                >
                  {subCat.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {displayedMedia.map((item, index) => (
              <motion.div
                key={`${item.src}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => openLightbox(index)}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium text-white truncate">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {currentMedia.length > 8 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {showAll ? `Show Less` : `View All ${currentMedia.length} Projects`}
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
            </Button>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Want to see your space transformed like these?
          </p>
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <a href="tel:9908119150">Get a Free Consultation</a>
          </Button>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors z-10"
              >
                <X className="h-6 w-6" />
              </button>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl max-h-[80vh] w-full aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={currentMedia[lightboxIndex]?.src || ""}
                  alt={currentMedia[lightboxIndex]?.alt || ""}
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </motion.div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {currentMedia.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === lightboxIndex ? "bg-primary w-6" : "bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
