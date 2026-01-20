import type { GalleryCategory } from "@/components/landing/gallery";

// Canvas Printing Gallery Data - All Images
export const canvasPrintingGalleryCategories: GalleryCategory[] = [
  {
    id: "all",
    name: "All Projects",
    media: Array.from({ length: 21 }, (_, i) => ({
      type: "image" as const,
      src: `/services/canvas-printing/Canvas printing with installation/e${i + 1}.jpeg`,
      alt: `Canvas Print Installation ${i + 1}`,
      caption: `Canvas Print Project ${i + 1}`,
    })),
  },
  {
    id: "installations",
    name: "Installations",
    media: Array.from({ length: 10 }, (_, i) => ({
      type: "image" as const,
      src: `/services/canvas-printing/Canvas printing with installation/e${i + 1}.jpeg`,
      alt: `Canvas Installation ${i + 1}`,
      caption: `Installation Work ${i + 1}`,
    })),
  },
  {
    id: "prints",
    name: "Art Prints",
    media: Array.from({ length: 11 }, (_, i) => ({
      type: "image" as const,
      src: `/services/canvas-printing/Canvas printing with installation/e${i + 11}.jpeg`,
      alt: `Art Print ${i + 1}`,
      caption: `Custom Print ${i + 1}`,
    })),
  },
];
