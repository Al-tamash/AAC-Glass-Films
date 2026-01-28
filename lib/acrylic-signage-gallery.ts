import type { GalleryCategory } from "@/components/landing/gallery";

// Acrylic Signage Gallery Data - All Images
export const acrylicSignageGalleryCategories: GalleryCategory[] = [
  {
    id: "all",
    name: "All Projects",
    media: [
      // 3D Letters (best picks)
      { type: "image", src: "/services/acrylic-signage/acrylic-3d-letters/e1.jpeg", alt: "3D Acrylic Letters", caption: "LED Acrylic Signage" },
      { type: "image", src: "/services/acrylic-signage/acrylic-3d-letters/e3.jpeg", alt: "3D Letters", caption: "Office Branding" },
      { type: "image", src: "/services/acrylic-signage/acrylic-3d-letters/e5.jpeg", alt: "Acrylic Sign", caption: "Corporate Signage" },
      // Letters Board (best picks)
      { type: "image", src: "/services/acrylic-signage/acrylic-letters-board/e1.jpeg", alt: "Letters Board", caption: "Reception Board" },
      { type: "image", src: "/services/acrylic-signage/acrylic-letters-board/e5.jpeg", alt: "Sign Board", caption: "Directory Board" },
      // Name Plates (best picks)
      { type: "image", src: "/services/acrylic-signage/acrylic-letters-for-name-plates/e1.jpeg", alt: "Name Plate", caption: "Office Name Plate" },
      { type: "image", src: "/services/acrylic-signage/acrylic-letters-for-name-plates/e5.jpeg", alt: "Door Plate", caption: "Door Name Sign" },
      // Wall Doors (best picks)
      { type: "image", src: "/services/acrylic-signage/acrylic-letters-for-wall-doors/e1.jpeg", alt: "Wall Letters", caption: "Wall Signage" },
      // Design Cutting
      { type: "image", src: "/services/acrylic-signage/acrylic-design-cutting/e1.jpeg", alt: "Design Cutting", caption: "Custom Cut Design" },
      // Islamic Art
      { type: "image", src: "/services/acrylic-signage/Acrylic 3d Islamic wall art/e1.jpeg", alt: "Islamic Wall Art", caption: "3D Islamic Art" },
      // Signs
      { type: "image", src: "/services/acrylic-signage/acrylic-letters-for-signs/e1.jpeg", alt: "Sign Letters", caption: "Shop Sign" },
      // Name Plate Design
      { type: "image", src: "/services/acrylic-signage/3D Letter Design Acrylic Name Plate/e1.jpeg", alt: "3D Name Plate", caption: "Premium Name Plate" },
    ],
  },
  {
    id: "3d-letters",
    name: "3D Letters",
    media: [
      { type: "image", src: "/services/acrylic-signage/acrylic-3d-letters/e1.jpeg", alt: "3D Letters 1", caption: "LED Acrylic Signage" },
      { type: "image", src: "/services/acrylic-signage/acrylic-3d-letters/e2.jpeg", alt: "3D Letters 2", caption: "Office Branding" },
      { type: "image", src: "/services/acrylic-signage/acrylic-3d-letters/e3.jpeg", alt: "3D Letters 3", caption: "Corporate Signage" },
      { type: "image", src: "/services/acrylic-signage/acrylic-3d-letters/e4.jpeg", alt: "3D Letters 4", caption: "Storefront Sign" },
      { type: "image", src: "/services/acrylic-signage/acrylic-3d-letters/e5.jpeg", alt: "3D Letters 5", caption: "Acrylic Lettering" },
      { type: "image", src: "/services/acrylic-signage/acrylic-3d-letters/e6.jpeg", alt: "3D Letters 6", caption: "Channel Letters" },
      { type: "image", src: "/services/acrylic-signage/acrylic-3d-letters/e7.jpeg", alt: "3D Letters 7", caption: "Illuminated Sign" },
      { type: "image", src: "/services/acrylic-signage/acrylic-3d-letters/e8.jpeg", alt: "3D Letters 8", caption: "Brand Signage" },
      { type: "image", src: "/services/acrylic-signage/acrylic-3d-letters/e9.jpeg", alt: "3D Letters 9", caption: "Custom Letters" },
      { type: "image", src: "/services/acrylic-signage/acrylic-3d-letters/e10.jpeg", alt: "3D Letters 10", caption: "Premium Signage" },
      { type: "image", src: "/services/acrylic-signage/acrylic-3d-letters/e11.jpeg", alt: "3D Letters 11", caption: "Modern Design" },
      { type: "image", src: "/services/acrylic-signage/acrylic-3d-letters/e12.jpeg", alt: "3D Letters 12", caption: "Professional Finish" },
    ],
  },
  {
    id: "letters-board",
    name: "Letters Board",
    media: Array.from({ length: 30 }, (_, i) => ({
      type: "image" as const,
      src: `/services/acrylic-signage/acrylic-letters-board/e${i + 1}.jpeg`,
      alt: `Letters Board ${i + 1}`,
      caption: `acrylic-letters-board ${i + 1}`,
    })),
  },
  {
    id: "name-plates",
    name: "Name Plates",
    media: Array.from({ length: 23 }, (_, i) => ({
      type: "image" as const,
      src: `/services/acrylic-signage/acrylic-letters-for-name-plates/e${i + 1}.jpeg`,
      alt: `Name Plate ${i + 1}`,
      caption: `Acrylic Name Plate ${i + 1}`,
    })),
  },
  {
    id: "wall-doors",
    name: "Wall & Door Letters",
    media: Array.from({ length: 25 }, (_, i) => ({
      type: "image" as const,
      src: `/services/acrylic-signage/acrylic-letters-for-wall-doors/e${i + 1}.jpeg`,
      alt: `Wall Letters ${i + 1}`,
      caption: `Wall & Door Signage ${i + 1}`,
    })),
  },
  {
    id: "design-cutting",
    name: "Design Cutting",
    media: Array.from({ length: 9 }, (_, i) => ({
      type: "image" as const,
      src: `/services/acrylic-signage/acrylic-design-cutting/e${i + 1}.jpeg`,
      alt: `Design Cutting ${i + 1}`,
      caption: `Custom Cut Design ${i + 1}`,
    })),
  },
  {
    id: "islamic-art",
    name: "Islamic Wall Art",
    media: Array.from({ length: 7 }, (_, i) => ({
      type: "image" as const,
      src: `/services/acrylic-signage/Acrylic 3d Islamic wall art/e${i + 1}.jpeg`,
      alt: `Islamic Art ${i + 1}`,
      caption: `3D Islamic Wall Art ${i + 1}`,
    })),
  },
  {
    id: "signs",
    name: "Signage Letters",
    media: Array.from({ length: 5 }, (_, i) => ({
      type: "image" as const,
      src: `/services/acrylic-signage/acrylic-letters-for-signs/e${i + 1}.jpeg`,
      alt: `Sign ${i + 1}`,
      caption: `Acrylic Sign ${i + 1}`,
    })),
  },
  {
    id: "name-plate-design",
    name: "3D Name Plate Design",
    media: Array.from({ length: 3 }, (_, i) => ({
      type: "image" as const,
      src: `/services/acrylic-signage/3D Letter Design Acrylic Name Plate/e${i + 1}.jpeg`,
      alt: `3D Name Plate ${i + 1}`,
      caption: `Premium Name Plate ${i + 1}`,
    })),
  },
  {
    id: "resin-art",
    name: "Resin Art Letters",
    media: [
      { type: "image", src: "/services/acrylic-signage/Flat acrylic letters for resin art/e1.jpeg", alt: "Resin Art Letters", caption: "Flat Acrylic for Resin" },
    ],
  },
];
