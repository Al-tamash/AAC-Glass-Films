// Glass Film specific gallery categories for the Glass Film Solutions page
// This includes ALL glass film images, excluding Acrylic Signage and Canvas Printing

export const glassFilmGalleryCategories = [
  {
    id: "all",
    name: "All Projects",
    media: [] as { type: "image" | "video"; src: string; alt: string }[],
  },
  {
    id: "frosted",
    name: "Frosted Glass Film",
    media: [
      { type: "image" as const, src: "/services/plain-frosted-glass-film/images/pfgf1.png", alt: "Plain Frosted Glass Film" },
    ],
  },
  {
    id: "sparkle",
    name: "Sparkle Glass Film",
    media: [
      { type: "image" as const, src: "/services/sparkle-glass-film/images/e1.png", alt: "Sparkle Glass Film Design" },
    ],
  },
  {
    id: "printed",
    name: "Printed Glass Film",
    media: [
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf1.jpeg", alt: "Printed Glass Film Design" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf2.jpeg", alt: "Custom Printed Glass" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf3.jpeg", alt: "Logo Printed Glass Film" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf4.jpeg", alt: "Printed Glass Pattern" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf5.jpeg", alt: "Office Printed Glass" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf6.jpeg", alt: "Decorative Printed Film" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf7.jpeg", alt: "Custom Design Film" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf8.jpeg", alt: "Printed Glass Project" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf9.jpeg", alt: "Glass Film Installation" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf10.jpeg", alt: "Commercial Printed Film" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf11.jpeg", alt: "Residential Printed Film" },
    ],
  },
  {
    id: "colour",
    name: "Colour Glass Film",
    media: [
      { type: "image" as const, src: "/services/colour-glass-film/images/cgf1.png", alt: "Colour Glass Film" },
    ],
  },
  {
    id: "one-way",
    name: "One Way Vision",
    media: [
      { type: "image" as const, src: "/services/one-way-vision-glass-film/images/owvgf1.png", alt: "One Way Vision Glass Film" },
    ],
  },
  {
    id: "vinyl",
    name: "Vinyl Glass Film",
    media: [
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf1.jpeg", alt: "Vinyl Glass Film 1" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf2.jpeg", alt: "Vinyl Glass Film 2" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf3.jpeg", alt: "Vinyl Glass Film 3" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf4.jpeg", alt: "Vinyl Glass Film 4" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf5.jpeg", alt: "Vinyl Glass Film 5" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf6.jpeg", alt: "Vinyl Glass Film 6" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf7.jpeg", alt: "Vinyl Glass Film 7" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf8.jpeg", alt: "Vinyl Glass Film 8" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf9.jpeg", alt: "Vinyl Glass Film 9" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf10.jpeg", alt: "Vinyl Glass Film 10" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf11.jpeg", alt: "Vinyl Glass Film 11" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf12.jpeg", alt: "Vinyl Glass Film 12" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf13.jpeg", alt: "Vinyl Glass Film 13" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf14.jpeg", alt: "Vinyl Glass Film 14" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf15.jpeg", alt: "Vinyl Glass Film 15" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf16.jpeg", alt: "Vinyl Glass Film 16" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf17.jpeg", alt: "Vinyl Glass Film 17" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf18.jpeg", alt: "Vinyl Glass Film 18" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf19.jpeg", alt: "Vinyl Glass Film 19" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf20.jpeg", alt: "Vinyl Glass Film 20" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf21.jpeg", alt: "Vinyl Glass Film 21" },
    ],
  },
  {
    id: "safety",
    name: "Safety Glass Film",
    media: [
      { type: "image" as const, src: "/services/safety-glass-film/images/sgf1.png", alt: "Safety Glass Film" },
    ],
  },
  {
    id: "decorative",
    name: "Window Tinting",
    media: [
      { type: "image" as const, src: "/services/decorative-window-tinting/images/dwt1.png", alt: "Decorative Window Tinting" },
    ],
  },
  {
    id: "3d-glass",
    name: "3D Glass Film",
    media: [
      { type: "image" as const, src: "/services/3d glass film/e1.jpeg", alt: "3D Glass Film Design" },
      { type: "image" as const, src: "/services/3d glass film/e2.jpeg", alt: "3D Decorative Glass Film" },
      { type: "image" as const, src: "/services/3d glass film/e3.jpeg", alt: "3D Pattern Glass Film" },
    ],
  },
  {
    id: "sun-control",
    name: "Sun Control Film",
    media: [
      { type: "image" as const, src: "/services/sun control film for glass window/WhatsApp Image 2026-01-13 at 1.57.31 PM.jpeg", alt: "Sun Control Film" },
      { type: "image" as const, src: "/services/sun control film for glass window/WhatsApp Image 2026-01-13 at 1.57.32 PM.jpeg", alt: "Heat Reduction Film" },
    ],
  },
  {
    id: "glass-writing-board",
    name: "Glass Writing Board",
    media: [
      { type: "image" as const, src: "/services/Glass writing board/e1.jpeg", alt: "Glass Writing Board" },
      { type: "image" as const, src: "/services/Glass writing board/e2.jpeg", alt: "Office Glass Board" },
      { type: "image" as const, src: "/services/Glass writing board/e3.jpeg", alt: "Whiteboard Glass" },
      { type: "image" as const, src: "/services/Glass writing board/e4.jpeg", alt: "Conference Room Board" },
      { type: "image" as const, src: "/services/Glass writing board/e5.jpeg", alt: "Custom Glass Board" },
    ],
  },
];

// Populate "All Projects" with media from all categories
glassFilmGalleryCategories[0].media = glassFilmGalleryCategories.slice(1).flatMap((cat) => cat.media);
