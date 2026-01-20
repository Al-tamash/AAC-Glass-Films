"use client";

import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface GalleryItem {
  type: "image" | "video";
  src: string;
  alt: string;
  caption: string;
  thumbnail?: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  media: GalleryItem[];
}

// Service categories with their media items
const defaultCategories: GalleryCategory[] = [
  {
    id: "all",
    name: "All Projects",
    media: [], // Will be populated from all services
  },
  {
    id: "frosted",
    name: "Frosted Glass Film",
    media: [
      { type: "image", src: "/services/plain-frosted-glass-film/images/pfgf1.png", alt: "Plain Frosted Glass Film Installation", caption: "Office Privacy Solution" },
    ],
  },
  {
    id: "sparkle",
    name: "Sparkle Glass Film",
    media: [
      { type: "image", src: "/services/sparkle-glass-film/images/e1.png", alt: "Sparkle Glass Film Installation", caption: "Premium Sparkle Effect" },
    ],
  },
  {
    id: "printed",
    name: "Printed Glass Film",
    media: [
      { type: "image", src: "/services/printed-glass-film/images/pgf1.jpeg", alt: "Printed Glass Film 1", caption: "Custom Printed Design 1" },
      { type: "image", src: "/services/printed-glass-film/images/pgf2.jpeg", alt: "Printed Glass Film 2", caption: "Custom Printed Design 2" },
      { type: "image", src: "/services/printed-glass-film/images/pgf3.jpeg", alt: "Printed Glass Film 3", caption: "Custom Printed Design 3" },
      { type: "image", src: "/services/printed-glass-film/images/pgf4.jpeg", alt: "Printed Glass Film 4", caption: "Custom Printed Design 4" },
      { type: "image", src: "/services/printed-glass-film/images/pgf5.jpeg", alt: "Printed Glass Film 5", caption: "Custom Printed Design 5" },
      { type: "image", src: "/services/printed-glass-film/images/pgf6.jpeg", alt: "Printed Glass Film 6", caption: "Custom Printed Design 6" },
      { type: "image", src: "/services/printed-glass-film/images/pgf7.jpeg", alt: "Printed Glass Film 7", caption: "Custom Printed Design 7" },
      { type: "image", src: "/services/printed-glass-film/images/pgf8.jpeg", alt: "Printed Glass Film 8", caption: "Custom Printed Design 8" },
      { type: "image", src: "/services/printed-glass-film/images/pgf9.jpeg", alt: "Printed Glass Film 9", caption: "Custom Printed Design 9" },
      { type: "image", src: "/services/printed-glass-film/images/pgf10.jpeg", alt: "Printed Glass Film 10", caption: "Custom Printed Design 10" },
      { type: "image", src: "/services/printed-glass-film/images/pgf11.jpeg", alt: "Printed Glass Film 11", caption: "Custom Printed Design 11" },
      { type: "video", src: "/services/printed-glass-film/videos/pgfv1.mp4", thumbnail: "/services/printed-glass-film/images/pgf1.jpeg", alt: "Printed Glass Film Video 1", caption: "Installation Showcase 1" },
      { type: "video", src: "/services/printed-glass-film/videos/pgfv2.mp4", thumbnail: "/services/printed-glass-film/images/pgf2.jpeg", alt: "Printed Glass Film Video 2", caption: "Installation Showcase 2" },
    ],
  },
  {
    id: "colour",
    name: "Colour Glass Film",
    media: [
      { type: "image", src: "/services/colour-glass-film/images/cgf1.png", alt: "Colour Glass Film Installation", caption: "Vibrant Colour Tint" },
    ],
  },
  {
    id: "one-way",
    name: "One Way Vision",
    media: [
      { type: "image", src: "/services/one-way-vision-glass-film/images/owvgf1.png", alt: "One Way Vision Glass Film", caption: "Privacy with Visibility" },
    ],
  },
  {
    id: "vinyl",
    name: "Vinyl Glass Film",
    media: [
      { type: "video", src: "/services/colour-vinyl-glass-film/videos/v1.mp4", thumbnail: "/services/colour-vinyl-glass-film/images/vgf1.jpeg", alt: "Colour Vinyl Exhibition", caption: "Colour Vinyl Showcase" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf1.jpeg", alt: "Colour Vinyl Film 1", caption: "Vibrant Colour Vinyl" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf2.jpeg", alt: "Colour Vinyl Film 2", caption: "Decorative Vinyl Pattern" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf3.jpeg", alt: "Colour Vinyl Film 3", caption: "Office Privacy Solution" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf4.jpeg", alt: "Colour Vinyl Film 4", caption: "Custom Glass Design" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf5.jpeg", alt: "Colour Vinyl Film 5", caption: "Modern Glass Art" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf6.jpeg", alt: "Colour Vinyl Film 6", caption: "Corporate Branding" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf7.jpeg", alt: "Colour Vinyl Film 7", caption: "Interior Decor Film" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf8.jpeg", alt: "Colour Vinyl Film 8", caption: "Stylish Glass Tint" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf9.jpeg", alt: "Colour Vinyl Film 9", caption: "Geometric Vinyl Design" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf10.jpeg", alt: "Colour Vinyl Film 10", caption: "Frosted Colour Vinyl" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf11.jpeg", alt: "Colour Vinyl Film 11", caption: "Glass Partition Design" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf12.jpeg", alt: "Colour Vinyl Film 12", caption: "Colourful Window Film" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf13.jpeg", alt: "Colour Vinyl Film 13", caption: "Privacy & Aesthetics" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf14.jpeg", alt: "Colour Vinyl Film 14", caption: "Architectural Vinyl" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf15.jpeg", alt: "Colour Vinyl Film 15", caption: "Blue Tone Vinyl" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf16.jpeg", alt: "Colour Vinyl Film 16", caption: "Red Tone Vinyl" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf17.jpeg", alt: "Colour Vinyl Film 17", caption: "Green Tone Vinyl" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf18.jpeg", alt: "Colour Vinyl Film 18", caption: "Yellow Tone Vinyl" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf19.jpeg", alt: "Colour Vinyl Film 19", caption: "Mixed Colour Vinyl" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf20.jpeg", alt: "Colour Vinyl Film 20", caption: "Abstract Vinyl Art" },
      { type: "image", src: "/services/colour-vinyl-glass-film/images/vgf21.jpeg", alt: "Colour Vinyl Film 21", caption: "Premium Vinyl Finish" },
    ],
  },
  {
    id: "safety",
    name: "Safety Glass Film",
    media: [
      { type: "image", src: "/services/safety-glass-film/images/sgf1.png", alt: "Safety Glass Film Installation", caption: "Shatter-proof Protection" },
    ],
  },
  {
    id: "tinting",
    name: "Window Tinting",
    media: [
      { type: "image", src: "/services/decorative-window-tinting/images/dwt1.png", alt: "Decorative Window Tinting", caption: "Heat & Glare Reduction" },
    ],
  },
  {
    id: "3d-glass",
    name: "3D Glass Film",
    media: [
      { type: "image", src: "/services/3d glass film/e1.jpeg", alt: "3D Glass Film 1", caption: "3D Texture Effect" },
      { type: "image", src: "/services/3d glass film/e2.jpeg", alt: "3D Glass Film 2", caption: "Decorative 3D Pattern" },
      { type: "image", src: "/services/3d glass film/e3.jpeg", alt: "3D Glass Film 3", caption: "3D Visual Depth" },
    ],
  },
  {
    id: "sun-control",
    name: "Sun Control Film",
    media: [
      { type: "image", src: "/services/sun control film for glass window/WhatsApp Image 2026-01-13 at 1.57.31 PM.jpeg", alt: "Sun Control Film 1", caption: "Heat Rejection" },
      { type: "image", src: "/services/sun control film for glass window/WhatsApp Image 2026-01-13 at 1.57.32 PM.jpeg", alt: "Sun Control Film 2", caption: "UV Protection" },
    ],
  },
  {
    id: "glass-board",
    name: "Glass Writing Board",
    media: [
      { type: "image", src: "/services/Glass writing board/e1.jpeg", alt: "Glass Writing Board 1", caption: "Modern Whiteboard" },
      { type: "image", src: "/services/Glass writing board/e2.jpeg", alt: "Glass Writing Board 2", caption: "Meeting Room Board" },
      { type: "image", src: "/services/Glass writing board/e3.jpeg", alt: "Glass Writing Board 3", caption: "Office Glass Board" },
      { type: "image", src: "/services/Glass writing board/e4.jpeg", alt: "Glass Writing Board 4", caption: "Magnetic Glass Board" },
      { type: "image", src: "/services/Glass writing board/e5.jpeg", alt: "Glass Writing Board 5", caption: "Custom Glass Board" },
    ],
  },
  {
    id: "acrylic-signage",
    name: "Acrylic Signage",
    media: [
      { type: "image", src: "/services/acrylic-signage/Acrylic 3d letters/e1.jpeg", alt: "3D Acrylic Letters", caption: "LED Acrylic Signage" },
      { type: "image", src: "/services/acrylic-signage/Acrylic 3d letters/e2.jpeg", alt: "3D Letters", caption: "Office Branding" },
      { type: "image", src: "/services/acrylic-signage/Acrylic 3d letters/e3.jpeg", alt: "Acrylic Sign", caption: "Corporate Signage" },
      { type: "image", src: "/services/acrylic-signage/Acrylic letters board/e1.jpeg", alt: "Letters Board", caption: "Reception Board" },
      { type: "image", src: "/services/acrylic-signage/Acrylic letters for name plates/e1.jpeg", alt: "Name Plate", caption: "Office Name Plate" },
      { type: "image", src: "/services/acrylic-signage/Acrylic design cutting/e1.jpeg", alt: "Design Cutting", caption: "Custom Cut Design" },
      { type: "image", src: "/services/acrylic-signage/Acrylic 3d Islamic wall art/e1.jpeg", alt: "Islamic Wall Art", caption: "3D Islamic Art" },
    ],
  },
  {
    id: "canvas-printing",
    name: "Canvas Printing",
    media: [
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e1.jpeg", alt: "Canvas Print 1", caption: "Living Room Art" },
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e2.jpeg", alt: "Canvas Print 2", caption: "Family Portrait" },
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e3.jpeg", alt: "Canvas Print 3", caption: "Office Decor" },
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e4.jpeg", alt: "Canvas Print 4", caption: "Gallery Wall" },
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e5.jpeg", alt: "Canvas Print 5", caption: "Custom Art Print" },
      { type: "image", src: "/services/canvas-printing/Canvas printing with installation/e6.jpeg", alt: "Canvas Print 6", caption: "Photo Canvas" },
    ],
  },
  {
    id: "process",
    name: "Our Team at Work",
    media: [
      { type: "image", src: "/gallery/team-1.jpg", alt: "Team measuring glass", caption: "Precise measurement" },
      { type: "image", src: "/gallery/team-2.jpg", alt: "Team installing film", caption: "Expert installation" },
      { type: "video", src: "/gallery/team-work.mp4", thumbnail: "/gallery/team-thumb.jpg", alt: "Installation process video", caption: "Behind the scenes" },
    ],
  },
];

// Combine all media for "All Projects" tab
defaultCategories[0].media = defaultCategories.slice(1).flatMap((s) => s.media);

interface GalleryProps {
  categories?: GalleryCategory[];
  title?: string;
  description?: string;
  categoryName?: string;
}

export function Gallery({
  categories = defaultCategories,
  title = "Real Projects. Real Results. See Our Work in Action.",
  description = "Browse through our completed projects across Hyderabad — glass films, acrylic signage, and canvas printing. Quality you can trust.",
  categoryName = "Our Work"
}: GalleryProps) {
  const [activeService, setActiveService] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      const exists = categories.some((s) => s.id === category);
      if (exists) {
        setActiveService(category);
        // Scroll to gallery section if needed, or it might be handled by the user clicking the link
        const element = document.getElementById("gallery-content");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [searchParams]);

  const INITIAL_ITEMS = 8; // Show 2 rows (4 columns x 2 rows)


  const currentService = categories.find((s) => s.id === activeService) || categories[0];
  const currentMedia = currentService.media;
  const displayedMedia = showAll ? currentMedia : currentMedia.slice(0, INITIAL_ITEMS);
  const hasMore = currentMedia.length > INITIAL_ITEMS;

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    setVideoPlaying(null);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setVideoPlaying(null);
  }, []);

  const nextItem = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % currentMedia.length);
    setVideoPlaying(null);
  }, [currentMedia.length]);

  const prevItem = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + currentMedia.length) % currentMedia.length);
    setVideoPlaying(null);
  }, [currentMedia.length]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextItem();
      if (e.key === "ArrowLeft") prevItem();
    },
    [closeLightbox, nextItem, prevItem]
  );

  return (
    <section id="gallery" className="section-spacing bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {categoryName}
          </span>
          <h2 className="mt-3 mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {description}
          </p>
        </motion.div>

        {/* Service Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((service) => (
            <button
              key={service.id}
              onClick={() => {
                setActiveService(service.id);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeService === service.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:border-primary/50"
              }`}
            >
              {service.name}
            </button>
          ))}
        </motion.div>

        {/* Media Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {displayedMedia.map((item, index) => (
              <motion.div
                key={`${activeService}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-xl overflow-hidden bg-card border border-border cursor-pointer"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
                aria-label={`View ${item.alt}`}
              >
                {/* Thumbnail / Image */}
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-xs">
                    {item.type === "video" ? "Video" : "Image"}
                  </span>
                </div>

                <Image
                  src={item.type === "video" ? (item.thumbnail || item.src) : item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                  {item.type === "video" && (
                    <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      <Play className="w-5 h-5 ml-0.5" />
                    </div>
                  )}
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-primary-foreground text-sm font-medium">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More/Less Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-6"
          >
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="gap-2"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  View All {currentMedia.length} Projects
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </Button>
          </motion.div>
        )}

        {/* Empty State */}
        {currentMedia.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects available for this category yet.</p>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground mb-4">
            Want to see your space transformed like these?
          </p>
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <a href="tel:9908119150">Get a Free Consultation</a>
          </Button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && currentMedia[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-label="Media lightbox"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/20 hover:bg-card/40 flex items-center justify-center text-primary-foreground transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevItem();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 hover:bg-card/40 flex items-center justify-center text-primary-foreground transition-colors"
              aria-label="Previous item"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextItem();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 hover:bg-card/40 flex items-center justify-center text-primary-foreground transition-colors"
              aria-label="Next item"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {currentMedia[lightboxIndex].type === "video" ? (
                <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
                  {videoPlaying === currentMedia[lightboxIndex].src ? (
                    <video
                      src={currentMedia[lightboxIndex].src}
                      controls
                      autoPlay
                      className="w-full h-full"
                    />
                  ) : (
                    <div
                      className="w-full h-full bg-muted flex items-center justify-center cursor-pointer"
                      onClick={() => setVideoPlaying(currentMedia[lightboxIndex].src)}
                    >
                      <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative aspect-video bg-muted rounded-xl overflow-hidden flex items-center justify-center">
                  <Image
                    src={currentMedia[lightboxIndex].src}
                    alt={currentMedia[lightboxIndex].alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              )}

              {/* Caption */}
              <p className="text-center text-primary-foreground mt-4 text-lg">
                {currentMedia[lightboxIndex].caption}
              </p>
              <p className="text-center text-primary-foreground/60 mt-1 text-sm">
                {lightboxIndex + 1} / {currentMedia.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
