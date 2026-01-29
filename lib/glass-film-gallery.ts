// Glass Film specific gallery categories for the Glass Film Solutions page
// This includes ALL glass film images, excluding Acrylic Signage and Canvas Printing

export const glassFilmGalleryCategories = [
  {
    id: "all",
    name: "All Projects",
    media: [] as { type: "image" | "video"; src: string; alt: string; caption: string }[],
  },
  {
    id: "frosted",
    name: "Frosted Glass Film",
    media: [
      { type: "image" as const, src: "/services/plain-frosted-glass-film/images/pfgf1.png", alt: "Plain Frosted Glass Film", caption: "Elegant Frosted Finish" },
    ],
  },
  {
    id: "sparkle",
    name: "Sparkle Glass Film",
    media: [
      { type: "image" as const, src: "/services/sparkle-glass-film/images/e1.png", alt: "Sparkle Glass Film Design", caption: "Premium Sparkle Effect" },
    ],
  },
  {
    id: "printed",
    name: "Printed Glass Film",
    media: [
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf1.jpeg", alt: "Printed Glass Film Design", caption: "Custom Printed Design" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf2.jpeg", alt: "Custom Printed Glass", caption: "Office Branding Film" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf3.jpeg", alt: "Logo Printed Glass Film", caption: "Logo Graphics Film" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf4.jpeg", alt: "Printed Glass Pattern", caption: "Decorative Pattern" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf5.jpeg", alt: "Office Printed Glass", caption: "Corporate Glass Design" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf6.jpeg", alt: "Decorative Printed Film", caption: "Artistic Print Film" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf7.jpeg", alt: "Custom Design Film", caption: "Custom Graphics" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf8.jpeg", alt: "Printed Glass Project", caption: "Commercial Installation" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf9.jpeg", alt: "Glass Film Installation", caption: "Professional Install" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf10.jpeg", alt: "Commercial Printed Film", caption: "Business Signage" },
      { type: "image" as const, src: "/services/printed-glass-film/images/pgf11.jpeg", alt: "Residential Printed Film", caption: "Home Décor Film" },
    ],
  },
  {
    id: "colour",
    name: "Colour Glass Film",
    media: [
      { type: "image" as const, src: "/services/colour-glass-film/images/cgf1.png", alt: "Colour Glass Film", caption: "Vibrant Colour Tint" },
    ],
  },
  {
    id: "one-way",
    name: "One Way Vision",
    media: [
      { type: "image" as const, src: "/services/one-way-vision-glass-film/images/owvgf1.png", alt: "One Way Vision Glass Film", caption: "Privacy with Visibility" },
    ],
  },
  {
    id: "vinyl",
    name: "Vinyl Glass Film",
    media: [
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf1.jpeg", alt: "Vinyl Glass Film 1", caption: "Premium Vinyl Design" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf2.jpeg", alt: "Vinyl Glass Film 2", caption: "Decorative Vinyl" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf3.jpeg", alt: "Vinyl Glass Film 3", caption: "Office Vinyl Film" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf4.jpeg", alt: "Vinyl Glass Film 4", caption: "Custom Vinyl Pattern" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf5.jpeg", alt: "Vinyl Glass Film 5", caption: "Colour Block Design" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf6.jpeg", alt: "Vinyl Glass Film 6", caption: "Modern Vinyl Tint" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf7.jpeg", alt: "Vinyl Glass Film 7", caption: "Artistic Vinyl" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf8.jpeg", alt: "Vinyl Glass Film 8", caption: "Stylish Glass Tint" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf9.jpeg", alt: "Vinyl Glass Film 9", caption: "Geometric Vinyl Design" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf10.jpeg", alt: "Vinyl Glass Film 10", caption: "Contemporary Vinyl" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf11.jpeg", alt: "Vinyl Glass Film 11", caption: "Frosted Vinyl Effect" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf12.jpeg", alt: "Vinyl Glass Film 12", caption: "Gradient Vinyl Film" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf13.jpeg", alt: "Vinyl Glass Film 13", caption: "Bold Vinyl Pattern" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf14.jpeg", alt: "Vinyl Glass Film 14", caption: "Dual Tone Vinyl" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf15.jpeg", alt: "Vinyl Glass Film 15", caption: "Elegant Vinyl Finish" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf16.jpeg", alt: "Vinyl Glass Film 16", caption: "Window Vinyl Wrap" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf17.jpeg", alt: "Vinyl Glass Film 17", caption: "Commercial Vinyl" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf18.jpeg", alt: "Vinyl Glass Film 18", caption: "Yellow Tone Vinyl" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf19.jpeg", alt: "Vinyl Glass Film 19", caption: "Mixed Colour Vinyl" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf20.jpeg", alt: "Vinyl Glass Film 20", caption: "Abstract Vinyl Art" },
      { type: "image" as const, src: "/services/colour-vinyl-glass-film/images/vgf21.jpeg", alt: "Vinyl Glass Film 21", caption: "Premium Vinyl Finish" },
    ],
  },
  {
    id: "safety",
    name: "Safety Glass Film",
    media: [
      { type: "image" as const, src: "/services/safety-glass-film/images/sgf1.png", alt: "Safety Glass Film", caption: "Shatter-proof Protection" },
    ],
  },
  {
    id: "decorative",
    name: "Window Tinting",
    media: [
      { type: "image" as const, src: "/services/images/window-tinting-service-img.png", alt: "Decorative Window Tinting", caption: "Elegant Window Tint" },
    ],
  },
  {
    id: "3d-glass",
    name: "3D Glass Film",
    media: [
      { type: "image" as const, src: "/services/3d glass film/e1.jpeg", alt: "3D Glass Film Design", caption: "3D Prismatic Effect" },
      { type: "image" as const, src: "/services/3d glass film/e2.jpeg", alt: "3D Decorative Glass Film", caption: "Dimensional Pattern" },
      { type: "image" as const, src: "/services/3d glass film/e3.jpeg", alt: "3D Pattern Glass Film", caption: "Modern 3D Design" },
    ],
  },
  {
    id: "sun-control",
    name: "Sun Control Film",
    media: [
      { type: "image" as const, src: "/services/sun control film for glass window/WhatsApp Image 2026-01-13 at 1.57.31 PM.jpeg", alt: "Sun Control Film", caption: "Heat Reduction Film" },
      { type: "image" as const, src: "/services/sun control film for glass window/WhatsApp Image 2026-01-13 at 1.57.32 PM.jpeg", alt: "Heat Reduction Film", caption: "UV Protection Film" },
    ],
  },
  {
    id: "glass-writing-board",
    name: "Glass Writing Board",
    media: [
      { type: "image" as const, src: "/services/glass-writing-board/e1.jpeg", alt: "Glass Writing Board", caption: "Modern Whiteboard" },
      { type: "image" as const, src: "/services/glass-writing-board/e2.jpeg", alt: "Office Glass Board", caption: "Office Meeting Board" },
      { type: "image" as const, src: "/services/glass-writing-board/e3.jpeg", alt: "Whiteboard Glass", caption: "Collaborative Board" },
      { type: "image" as const, src: "/services/glass-writing-board/e4.jpeg", alt: "Conference Room Board", caption: "Conference Room" },
      { type: "image" as const, src: "/services/glass-writing-board/e5.jpeg", alt: "Custom Glass Board", caption: "Custom Glass Board" },
    ],
  },
];

// Populate "All Projects" with media from all categories
glassFilmGalleryCategories[0].media = glassFilmGalleryCategories.slice(1).flatMap((cat) => cat.media);
