export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  applications: string[];
  applicationIcons: string[];
  gallery: string[];
  galleryCategory?: string;
  faqs: FAQ[];
  category: 'glass-film' | 'acrylic-signage' | 'canvas-printing';
}

export const services: Service[] = [
  // GLASS FILM SOLUTIONS
  {
    slug: "plain-frosted-glass-film",
    category: "glass-film",
    galleryCategory: "frosted",
    title: "Plain Frosted Glass Film",
    tagline: "Ideal for offices and bathrooms.",
    shortDescription: "Enhances privacy while allowing natural light to pass through.",
    description:
      "Plain frosted glass film is the perfect solution for creating privacy in offices, bathrooms, conference rooms, and residential spaces without blocking natural light. Our high-quality frosted films provide a clean, professional appearance while maintaining brightness in your interior spaces.",
    image: "/services/images/Modernofficewithfrostedpartitions.png",
    features: [
      "Uniform frosted finish",
      "Easy to clean and maintain",
      "UV protection",
      "Scratch-resistant coating",
      "Available in various opacity levels",
    ],
    benefits: [
      "Complete privacy without blocking light",
      "Professional and elegant appearance",
      "Reduces glare on screens",
      "Energy efficient – reduces cooling costs",
      "Long-lasting durability",
    ],
    applications: [
      "Office partitions",
      "Bathroom windows",
      "Conference rooms",
      "Hospital and clinic windows",
      "Residential glass doors",
    ],
    applicationIcons: [
      "Building2",
      "Bath",
      "Users",
      "Hospital",
      "Home",
    ],
    gallery: [
      "/services/plain-frosted-glass-film/images/pfgf1.png",
    ],
    faqs: [
      {
        question: "How long does frosted glass film last?",
        answer: "High-quality frosted glass film typically lasts 10-15 years with proper care. Our premium films come with a warranty and are designed for long-term durability.",
      },
      {
        question: "Can frosted glass film be removed easily?",
        answer: "Yes, frosted films can be removed without damaging the glass. Professional removal ensures no residue is left behind, allowing you to update or change the film as needed.",
      },
      {
        question: "Does frosted glass film block UV rays?",
        answer: "Yes, our frosted glass films block up to 99% of harmful UV rays, protecting your furniture, flooring, and fabrics from fading while keeping your space comfortable.",
      },
      {
        question: "What is the cost of frosted glass film installation?",
        answer: "The cost depends on the area to be covered and the type of film. We offer free site visits and quotations. Contact us for a customized quote based on your requirements.",
      },
      {
        question: "Can frosted film be applied to any glass surface?",
        answer: "Yes, frosted film can be applied to most glass surfaces including windows, doors, partitions, and shower enclosures. We assess your glass type during the site visit.",
      },
      {
        question: "Do you provide warranty on installation?",
        answer: "Yes, we provide a 2-year installation warranty and the film itself comes with a manufacturer warranty of up to 10 years depending on the product.",
      },
    ],
  },
  {
    slug: "sparkle-glass-film",
    category: "glass-film",
    galleryCategory: "sparkle",
    title: "Sparkle Glass Film",
    tagline: "Perfect for showrooms and modern interiors.",
    shortDescription: "Adds a stylish sparkle effect to glass surfaces.",
    description:
      "Sparkle glass film transforms ordinary glass into a stunning decorative element. With its unique glittering effect, this film catches light beautifully, creating an eye-catching display perfect for showrooms, retail stores, and modern interiors.",
    image: "/services/images/Elegantinteriorswithsparklingglasspartitions.png",
    features: [
      "Unique sparkle/glitter effect",
      "Available in multiple colors",
      "Light-diffusing properties",
      "Premium finish quality",
      "Bubble-free installation",
    ],
    benefits: [
      "Creates stunning visual impact",
      "Enhances interior aesthetics",
      "Provides moderate privacy",
      "Adds luxury feel to any space",
      "Cost-effective decoration",
    ],
    applications: [
      "Retail showrooms",
      "Hotel lobbies",
      "Beauty salons",
      "Modern office interiors",
      "Event spaces",
    ],
    applicationIcons: [
      "Store",
      "Building",
      "Sparkles",
      "Building2",
      "PartyPopper",
    ],
    gallery: [
      "/services/sparkle-glass-film/images/e1.png",
    ],
    faqs: [
      {
        question: "Is sparkle film suitable for office environments?",
        answer: "Yes! Sparkle glass film is popular in modern offices, conference rooms, and reception areas. It adds a touch of elegance while providing privacy and visual interest.",
      },
      {
        question: "How does the sparkle effect work?",
        answer: "The sparkle effect is created by tiny light-refracting particles within the film that catch and reflect light, creating a beautiful glittering appearance throughout the day.",
      },
      {
        question: "Can I choose different sparkle colors?",
        answer: "Yes, our sparkle films come in various colors including silver, gold, blue, and rainbow effects. We can help you choose the perfect sparkle that complements your interior design.",
      },
      {
        question: "How much does sparkle glass film cost?",
        answer: "Pricing varies based on the sparkle type and coverage area. We offer competitive rates with free site inspection. Contact us for a customized quote.",
      },
      {
        question: "Is sparkle film easy to maintain?",
        answer: "Yes, sparkle films are very easy to maintain. Simply clean with a soft cloth and mild glass cleaner. Avoid abrasive materials to preserve the sparkle effect.",
      },
    ],
  },
  {
    slug: "printed-glass-film",
    category: "glass-film",
    galleryCategory: "printed",
    title: "Printed Glass Film",
    tagline: "Best for branding and décor.",
    shortDescription: "Custom designs, logos, and patterns printed on high-quality film.",
    description:
      "Printed glass film allows you to customize your glass surfaces with any design, logo, or pattern you desire. Using advanced digital printing technology, we can reproduce your brand identity or decorative designs with stunning clarity and color accuracy.",
    image: "/services/images/PrintedGlassFilm.png",
    features: [
      "High-resolution digital printing",
      "Full color customization",
      "Fade-resistant inks",
      "Custom sizing available",
      "Photo-realistic quality",
    ],
    benefits: [
      "Strong brand visibility",
      "Unique custom designs",
      "Professional appearance",
      "Easy to update or replace",
      "Cost-effective marketing",
    ],
    applications: [
      "Corporate offices",
      "Retail store branding",
      "Restaurant décor",
      "Reception areas",
      "Exhibition displays",
    ],
    applicationIcons: [
      "Building2",
      "Store",
      "UtensilsCrossed",
      "Armchair",
      "Presentation",
    ],
    gallery: [
      "/services/printed-glass-film/images/pgf1.jpeg",
      "/services/printed-glass-film/images/pgf2.jpeg",
      "/services/printed-glass-film/images/pgf3.jpeg",
      "/services/printed-glass-film/images/pgf4.jpeg",
      "/services/printed-glass-film/images/pgf5.jpeg",
      "/services/printed-glass-film/images/pgf6.jpeg",
      "/services/printed-glass-film/images/pgf7.jpeg",
      "/services/printed-glass-film/images/pgf8.jpeg",
    ],
    faqs: [
      {
        question: "Can you print our company logo on glass film?",
        answer: "Absolutely! We specialize in custom printed glass films featuring logos, brand colors, and designs. Just provide us with high-resolution artwork and we'll create a perfect reproduction.",
      },
      {
        question: "What resolution is needed for printed films?",
        answer: "For best results, we recommend artwork at 150-300 DPI at actual size. Our team can also help optimize your designs for printing on glass film.",
      },
      {
        question: "How fade-resistant are printed films?",
        answer: "Our printed films use UV-resistant inks that maintain their vibrancy for years. With normal indoor use, you can expect 8-10 years of vibrant colors.",
      },
      {
        question: "How long does custom printing take?",
        answer: "Standard turnaround is 3-5 working days after design approval. Rush orders can be accommodated for urgent requirements.",
      },
      {
        question: "Can you help with design if I don't have artwork?",
        answer: "Yes, our design team can help create custom designs based on your requirements. We offer design consultation as part of our service.",
      },
    ],
  },
  {
    slug: "colour-glass-film",
    category: "glass-film",
    galleryCategory: "colour",
    title: "Colour Glass Film",
    tagline: "Great for creative interiors.",
    shortDescription: "Adds vibrant colour to glass without permanent changes.",
    description:
      "Colour glass film is an excellent way to add vibrant hues to your glass surfaces without the expense of replacing the glass. Available in a wide range of colors, these films can transform any space with beautiful colored light effects.",
    image: "/services/images/ColourGlassFilm.png",
    features: [
      "Wide range of colors",
      "Consistent color throughout",
      "UV stable – won't fade",
      "Multiple opacity options",
      "Removable without damage",
    ],
    benefits: [
      "Transform spaces instantly",
      "Create mood lighting effects",
      "Match brand colors",
      "Non-permanent solution",
      "Affordable alternative to colored glass",
    ],
    applications: [
      "Interior design projects",
      "Children's rooms",
      "Creative workspaces",
      "Restaurants and bars",
      "Art installations",
    ],
    applicationIcons: [
      "Palette",
      "Baby",
      "Lightbulb",
      "Wine",
      "Frame",
    ],
    gallery: [
      "/services/colour-glass-film/images/cgf1.png",
    ],
    faqs: [
      {
        question: "What colors are available for glass film?",
        answer: "We offer a complete spectrum of colors including red, blue, green, yellow, orange, purple, and many more. We can also match specific Pantone or brand colors upon request.",
      },
      {
        question: "Does colored film darken the room?",
        answer: "It depends on the opacity you choose. We offer transparent, translucent, and opaque options. Transparent colored films allow 60-80% light transmission while adding beautiful color effects.",
      },
      {
        question: "Can colored film be used outdoors?",
        answer: "Yes, our colour films are UV-stable and weather-resistant, making them suitable for both indoor and outdoor applications. They won't fade or peel under normal weather conditions.",
      },
      {
        question: "Can I combine multiple colors in one design?",
        answer: "Yes, we can create gradient effects or multi-colored patterns. This is popular for decorative installations in restaurants, hotels, and creative spaces.",
      },
      {
        question: "How long does colour film installation take?",
        answer: "Most installations are completed within a few hours. Larger projects may take a full day. We work efficiently to minimize disruption to your space.",
      },
    ],
  },
  {
    slug: "one-way-vision-glass-film",
    category: "glass-film",
    galleryCategory: "one-way",
    title: "One Way Vision Glass Film",
    tagline: "Ideal for offices and storefronts.",
    shortDescription: "Clear inside view while blocking outside visibility.",
    description:
      "One way vision film provides the perfect balance between privacy and visibility. From inside, you can clearly see outside, while from outside, the glass appears opaque or displays your chosen design. Perfect for storefronts and office windows.",
    image: "/services/images/OneWayVisionGlassFilm.png",
    features: [
      "Perforated micro-hole design",
      "Clear view from inside",
      "Opaque from outside",
      "Printable surface",
      "Weather resistant",
    ],
    benefits: [
      "Privacy without losing view",
      "Advertising space on exterior",
      "Reduces solar heat gain",
      "Professional appearance",
      "Dual functionality",
    ],
    applications: [
      "Retail storefronts",
      "Vehicle windows",
      "Office exteriors",
      "Building facades",
      "Security applications",
    ],
    applicationIcons: [
      "Store",
      "Car",
      "Building2",
      "Landmark",
      "Shield",
    ],
    gallery: [
      "/services/one-way-vision-glass-film/images/owvgf1.png",
    ],
    faqs: [
      {
        question: "How does one-way vision film work?",
        answer: "One-way vision film uses micro-perforated holes that allow you to see out from the darker side while appearing opaque from the brighter side. This is why it works best on exterior windows.",
      },
      {
        question: "Does it work at night?",
        answer: "At night, when interior lights are on and it's dark outside, the effect reverses. People outside may be able to see in. We recommend pairing with blinds or curtains for nighttime privacy.",
      },
      {
        question: "Can I print advertising on one-way vision film?",
        answer: "Yes! One-way vision film is perfect for storefront advertising. You can print any design on the exterior-facing side while maintaining clear visibility from inside.",
      },
      {
        question: "What percentage of visibility does one-way vision film provide?",
        answer: "Our one-way vision films typically offer 50-70% visibility from inside, depending on the perforation pattern. We can help you choose the right balance for your needs.",
      },
      {
        question: "Is one-way vision film suitable for residential use?",
        answer: "Yes, it's popular for ground-floor apartments and homes wanting daytime privacy. It works best on windows that receive direct sunlight.",
      },
    ],
  },
  {
    slug: "colour-vinyl-glass-film",
    category: "glass-film",
    galleryCategory: "vinyl",
    title: "Colour Vinyl Glass Film",
    tagline: "Perfect for indoor and outdoor applications.",
    shortDescription: "Durable, long-lasting vinyl films for glass surfaces.",
    description:
      "Colour vinyl glass film offers superior durability and longevity for both indoor and outdoor applications. Made from premium vinyl material, these films withstand harsh weather conditions while maintaining their vibrant colors.",
    image: "/services/images/ColourVinylGlassFilm.png",
    features: [
      "Premium vinyl material",
      "Weather resistant",
      "Long-lasting colors",
      "Easy maintenance",
      "Multiple finish options",
    ],
    benefits: [
      "Exceptional durability",
      "Indoor and outdoor use",
      "Low maintenance",
      "Cost-effective solution",
      "Professional finish",
    ],
    applications: [
      "Outdoor signage",
      "Building exteriors",
      "Commercial spaces",
      "Industrial applications",
      "Vehicle branding",
    ],
    applicationIcons: [
      "Signpost",
      "Building",
      "Store",
      "Factory",
      "Car",
    ],
    gallery: [
      "/services/colour-vinyl-glass-film/images/vgf1.jpeg",
      "/services/colour-vinyl-glass-film/images/vgf2.jpeg",
      "/services/colour-vinyl-glass-film/images/vgf3.jpeg",
      "/services/colour-vinyl-glass-film/images/vgf4.jpeg",
      "/services/colour-vinyl-glass-film/images/vgf5.jpeg",
      "/services/colour-vinyl-glass-film/images/vgf6.jpeg",
      "/services/colour-vinyl-glass-film/images/vgf7.jpeg",
      "/services/colour-vinyl-glass-film/images/vgf8.jpeg",
    ],
    faqs: [
      {
        question: "What's the difference between vinyl and regular glass film?",
        answer: "Vinyl films are thicker and more durable than standard films, making them ideal for high-traffic areas and outdoor applications. They're also more resistant to scratches and weather damage.",
      },
      {
        question: "How long does vinyl glass film last outdoors?",
        answer: "Our premium colour vinyl films are rated for 7-10 years of outdoor use. They're specifically designed to withstand sun exposure, rain, and temperature variations.",
      },
      {
        question: "Can vinyl film be applied to curved surfaces?",
        answer: "Yes, vinyl films are more flexible than standard films and can conform to slightly curved surfaces. For complex curves, we use special application techniques to ensure a smooth finish.",
      },
      {
        question: "Is vinyl film suitable for vehicle wrapping?",
        answer: "Yes, our vinyl films are commonly used for vehicle branding and wrapping. They adhere well to automotive glass and can be removed without damage when needed.",
      },
      {
        question: "What finishes are available in vinyl film?",
        answer: "We offer matte, glossy, and satin finishes. Each creates a different visual effect, and we can help you choose the best finish for your application.",
      },
    ],
  },
  {
    slug: "safety-glass-film",
    category: "glass-film",
    galleryCategory: "safety",
    title: "Safety Glass Film",
    tagline: "Recommended for homes and commercial spaces.",
    shortDescription: "Protects against shattering and improves glass strength.",
    description:
      "Safety glass film is an essential security measure for homes and businesses. This specialized film holds glass together when broken, preventing dangerous shards from scattering and providing additional protection against break-ins and accidents.",
    image: "/services/images/SafetyGlassFilm.png",
    features: [
      "Shatter-resistant technology",
      "Multiple thickness options",
      "Clear or tinted varieties",
      "UV blocking",
      "Scratch resistant surface",
    ],
    benefits: [
      "Enhanced safety from breakage",
      "Burglar deterrent",
      "Protects against storm damage",
      "Reduces injury risk",
      "Insurance premium reduction",
    ],
    applications: [
      "Homes with children",
      "Schools and hospitals",
      "Storefronts",
      "High-rise buildings",
      "Banks and jewelry stores",
    ],
    applicationIcons: [
      "Baby",
      "GraduationCap",
      "Store",
      "Building",
      "Vault",
    ],
    gallery: [
      "/services/safety-glass-film/images/sgf1.png",
    ],
    faqs: [
      {
        question: "How does safety film protect against break-ins?",
        answer: "Safety film holds the glass together even when shattered, making it much harder for intruders to break through. It can delay entry by several minutes, often enough to deter burglars.",
      },
      {
        question: "Is safety film required by law for commercial buildings?",
        answer: "In many areas, safety film or safety glass is required for certain applications like storefronts, schools, and hospitals. We can advise you on local building codes and requirements.",
      },
      {
        question: "Can safety film be combined with other film types?",
        answer: "Yes, we offer safety films that also provide UV protection, privacy, or decorative finishes. This gives you multiple benefits from a single installation.",
      },
      {
        question: "What thickness of safety film do I need?",
        answer: "For residential use, 4-mil film is usually sufficient. For commercial security applications, we recommend 8-mil or 12-mil films. We can assess your needs during the site visit.",
      },
      {
        question: "Does safety film change the appearance of glass?",
        answer: "Our clear safety films are virtually invisible once installed. We also offer tinted options if you prefer some privacy or sun control along with safety benefits.",
      },
    ],
  },
  {
    slug: "decorative-window-tinting",
    category: "glass-film",
    galleryCategory: "tinting",
    title: "Decorative Window Tinting",
    tagline: "Best for heat and glare control.",
    shortDescription: "Keeps interiors cooler while enhancing appearance.",
    description:
      "Decorative window tinting combines functionality with aesthetics. These films reduce heat and glare while adding a decorative element to your windows. Perfect for creating comfortable interior environments with style.",
    image: "/services/images/Shatteredandintactofficeglasspartitions.png",
    features: [
      "Heat rejection technology",
      "Glare reduction",
      "Decorative patterns available",
      "UV protection",
      "Energy efficient",
    ],
    benefits: [
      "Reduced energy bills",
      "Comfortable indoor temperature",
      "Eye strain reduction",
      "Furniture protection from UV",
      "Enhanced visual appeal",
    ],
    applications: [
      "Residential windows",
      "Office buildings",
      "Conservatories",
      "Sun rooms",
      "Commercial facades",
    ],
    applicationIcons: [
      "Home",
      "Building2",
      "TreePine",
      "Sun",
      "Landmark",
    ],
    gallery: [
      "/services/decorative-window-tinting/images/dwt1.png",
    ],
    faqs: [
      {
        question: "How much heat can window tinting reduce?",
        answer: "Our decorative window tinting can reduce solar heat by up to 65%, significantly lowering your air conditioning costs and creating a more comfortable indoor environment.",
      },
      {
        question: "Will window tinting make my room too dark?",
        answer: "No! We offer various tint levels from light to dark. Our decorative tints are designed to reduce glare and heat while still allowing plenty of natural light to enter.",
      },
      {
        question: "Does window tinting help with energy efficiency?",
        answer: "Yes, window tinting is one of the most cost-effective ways to improve energy efficiency. It reduces cooling costs in summer and can also help retain heat in winter.",
      },
      {
        question: "What decorative patterns are available?",
        answer: "We offer frosted patterns, geometric designs, botanical prints, and custom patterns. You can choose designs that complement your interior décor.",
      },
      {
        question: "How long does decorative tinting last?",
        answer: "Quality decorative window tints last 15-20 years with proper care. We use premium films that won't bubble, peel, or discolor over time.",
      },
    ],
  },
  
  // NEW GLASS FILM ITEMS
  {
    slug: "3d-glass-film",
    category: "glass-film",
    galleryCategory: "3d",
    title: "3D Glass Film",
    tagline: "Adds depth and texture to glass surfaces.",
    shortDescription: "Create stunning 3D visual effects on any glass surface.",
    description: "3D glass film introduces a new dimension to your glass surfaces. These films create fascinating visual depth and texture, making them perfect for feature walls, partitions, and areas where you want to make a bold design statement.",
    image: "/services/3d glass film/e1.jpeg",
    features: [
      "Visual depth effect",
      "Textured surface options",
      "Light-diffusing properties",
      "Geometric patterns",
      "Easy installation",
    ],
    benefits: [
      "Unique visual appeal",
      "Enhances privacy",
      "Hides glass imperfections",
      "Modern aesthetic",
      "Durable and long-lasting",
    ],
    applications: [
      "Feature partitions",
      "Meeting rooms",
      "Residential accents",
      "Retail displays",
      "Hotel interiors",
    ],
    applicationIcons: ["Box", "Building2", "Home", "Store", "Hotel"],
    gallery: [
      "/services/3d glass film/e1.jpeg",
      "/services/3d glass film/e2.jpeg",
      "/services/3d glass film/e3.jpeg",
    ],
    faqs: [
      {
        question: "Is the 3D effect visible from both sides?",
        answer: "The 3D effect is typically most pronounced from the front viewing angle, but the film provides privacy and visual interest from both sides of the glass.",
      },
    ],
  },
  {
    slug: "sun-control-glass-film",
    category: "glass-film",
    galleryCategory: "sun-control",
    title: "Sun Control Film",
    tagline: "Superior heat rejection and UV protection.",
    shortDescription: "Advanced films to block heat and damaging UV rays.",
    description: "Sun control film is engineered to improve energy efficiency and comfort. By blocking a significant amount of solar heat and UV radiation, these films reduce cooling costs, prevent furniture fading, and create a more comfortable indoor environment.",
    image: "/services/sun control film for glass window/WhatsApp Image 2026-01-13 at 1.57.31 PM.jpeg",
    features: [
      "High heat rejection",
      "UV blocking (99%)",
      "Glare reduction",
      "Energy saving",
      "Clear or tinted options",
    ],
    benefits: [
      "Lower energy bills",
      "Improved comfort",
      "Protects furnishings",
      "Reduces eye strain",
      "Maintains natural light",
    ],
    applications: [
      "Office buildings",
      "Residential windows",
      "Conservatories",
      "Storefronts",
      "Schools",
    ],
    applicationIcons: ["Sun", "Home", "Building", "Store", "GraduationCap"],
    gallery: [
      "/services/sun control film for glass window/WhatsApp Image 2026-01-13 at 1.57.31 PM.jpeg",
      "/services/sun control film for glass window/WhatsApp Image 2026-01-13 at 1.57.32 PM.jpeg",
    ],
    faqs: [
      {
        question: "Will sun control film make my room dark?",
        answer: "Not necessarily. We offer spectrally selective films that block heat while letting in plenty of natural light. You can choose the level of tint that suits your needs.",
      },
    ],
  },
  {
    slug: "glass-writing-board",
    category: "glass-film",
    galleryCategory: "writing-board",
    title: "Glass Writing Board",
    tagline: "Modern alternative to traditional whiteboards.",
    shortDescription: "Sleek glass boards for offices and meeting rooms.",
    description: "Glass writing boards offer a modern, elegant alternative to traditional whiteboards. Made from tempered glass, they are durable, easy to clean, and never stain or ghost. Perfect for offices, meeting rooms, and educational spaces.",
    image: "/services/glass-writing-board/e5.jpeg",
    features: [
      "Tempered safety glass",
      "Ghost-free surface",
      "Magnetic options available",
      "Custom sizes",
      "Easy to clean",
    ],
    benefits: [
      "Professional appearance",
      "Never stains",
      "Long-lasting",
      "Modern aesthetic",
      "Low maintenance",
    ],
    applications: [
      "Meeting rooms",
      "Offices",
      "Schools",
      "Home offices",
      "Creative studios",
    ],
    applicationIcons: ["Users", "Building2", "GraduationCap", "Home", "Lightbulb"],
    gallery: [
      "/services/glass-writing-board/e1.jpeg",
      "/services/glass-writing-board/e2.jpeg",
      "/services/glass-writing-board/e3.jpeg",
      "/services/glass-writing-board/e4.jpeg",
      "/services/glass-writing-board/e5.jpeg",
    ],
    faqs: [
      {
        question: "Is the glass writing board magnetic?",
        answer: "We offer both magnetic and non-magnetic options. Magnetic boards use a special backing that allows magnets to stick to the surface.",
      },
      {
        question: "What markers can I use on glass boards?",
        answer: "Standard dry-erase markers work perfectly. The glass surface wipes clean easily and doesn't ghost or stain over time.",
      },
    ],
  },

  // ACRYLIC SIGNAGE
  {
    slug: "acrylic-letters-led",
    category: "acrylic-signage",
    title: "Acrylic Letters with LED",
    tagline: "Illuminated signage for high visibility.",
    shortDescription: "Premium acrylic letters with integrated LED lighting.",
    description: "Acrylic letters with LED lighting combine the sleek look of acrylic with the visibility of illumination. Perfect for storefronts and office branding, these signs ensure your brand is seen day and night.",
    image: "/services/acrylic-signage/acrylic-3d-letters/e1.jpeg",
    features: ["Energy-efficient LED", "Custom shapes", "Weatherproof", "Vibrant colors", "Long life"],
    benefits: ["24/7 visibility", "Premium look", "Low energy cost", "Durable", "High impact"],
    applications: ["Storefronts", "Receptions", "Building facades", "Malls", "Events"],
    applicationIcons: ["Lightbulb", "Store", "Building", "ShoppingBag", "PartyPopper"],
    gallery: [
      "/services/acrylic-signage/acrylic-3d-letters/e1.jpeg",
      "/services/acrylic-signage/acrylic-3d-letters/e2.jpeg",
      "/services/acrylic-signage/acrylic-3d-letters/e3.jpeg",
    ],
    faqs: [],
  },
  {
    slug: "acrylic-3d-letters",
    category: "acrylic-signage",
    title: "acrylic-3d-letters",
    tagline: "Dimensional signage that stands out.",
    shortDescription: "Solid acrylic letters for a bold 3D effect.",
    description: "acrylic-3d-letters add solid dimension to your signage. Available in various thicknesses and finishes, they are ideal for creating professional, high-impact branding on walls and displays.",
    image: "/services/acrylic-signage/acrylic-3d-letters/e4.jpeg",
    features: ["Solid acrylic", "Various thicknesses", "Custom finishes", "Precision cut", "Easy mounting"],
    benefits: ["Professional look", "Dimensional depth", "Versatile design", "Durable", "Easy maintenance"],
    applications: ["Office walls", "Receptions", "Retail displays", "Exhibitions", "Logos"],
    applicationIcons: ["Box", "Building2", "Store", "Presentation", "Star"],
    gallery: [
      "/services/acrylic-signage/acrylic-3d-letters/e4.jpeg",
      "/services/acrylic-signage/acrylic-3d-letters/e5.jpeg",
      "/services/acrylic-signage/acrylic-3d-letters/e6.jpeg",
    ],
    faqs: [],
  },
  {
    slug: "acrylic-letters-board",
    category: "acrylic-signage",
    title: "acrylic-letters-board",
    tagline: "Classic signage solutions.",
    shortDescription: "Acrylic letters mounted on a backing board.",
    description: "acrylic-letters-board provides a complete signage solution with letters pre-mounted on a backing panel. This allows for easy installation and a cohesive look, perfect for directories and informational signs.",
    image: "/services/acrylic-signage/acrylic-letters-board/e1.jpeg",
    features: ["Pre-mounted", "Custom backing", "Easy install", "Clean finish", "Durable"],
    benefits: ["Unified look", "Protects wall", "Quick installation", "Professional", "Customizable"],
    applications: ["Office directories", "Information boards", "Menu boards", "Door signs", "Wayfinding"],
    applicationIcons: ["Signpost", "Building2", "Utensils", "DoorOpen", "Map"],
    gallery: [
      "/services/acrylic-signage/acrylic-letters-board/e1.jpeg",
      "/services/acrylic-signage/acrylic-letters-board/e2.jpeg",
      "/services/acrylic-signage/acrylic-letters-board/e3.jpeg",
    ],
    faqs: [],
  },
  {
    slug: "acrylic-letters-wall-doors",
    category: "acrylic-signage",
    title: "Acrylic Letters for Wall & Doors",
    tagline: "Versatile branding for any surface.",
    shortDescription: "Custom acrylic text for walls and doors.",
    description: "Enhance your interiors with acrylic letters designed specifically for walls and doors. Ideal for room names, inspirational quotes, or branding throughout your space.",
    image: "/services/acrylic-signage/acrylic-letters-for-wall-doors/e1.jpeg",
    features: ["Lightweight", "Strong adhesive", "Various fonts", "Damage-free options", "Custom colors"],
    benefits: ["Easy to apply", "Enhances decor", "Clear identification", "Flexible design", "Cost-effective"],
    applications: ["Office doors", "Wall quotes", "Room numbering", "Home decor", "Cabin cabins"],
    applicationIcons: ["DoorOpen", "Home", "Hash", "Palette", "Building2"],
    gallery: [
      "/services/acrylic-signage/acrylic-letters-for-wall-doors/e1.jpeg",
      "/services/acrylic-signage/acrylic-letters-for-wall-doors/e2.jpeg",
      "/services/acrylic-signage/acrylic-letters-for-wall-doors/e3.jpeg",
    ],
    faqs: [],
  },
  {
    slug: "acrylic-design-cutting",
    category: "acrylic-signage",
    title: "acrylic-design-cutting",
    tagline: "Precision laser cutting for intricate designs.",
    shortDescription: "Custom cut acrylic shapes and patterns.",
    description: "Our acrylic-design-cutting service offers precision laser cutting for intricate patterns, logos, and decorative elements. We can create complex shapes with clean, polished edges for any application.",
    image: "/services/acrylic-signage/acrylic-design-cutting/e1.jpeg",
    features: ["Laser precision", "Complex shapes", "Polished edges", "Custom sizes", "Various colors"],
    benefits: ["Perfect detail", "Creative freedom", "Professional finish", "Versatile use", "Unique designs"],
    applications: ["Decor panels", "Screens", "Art pieces", "Custom parts", "Prototypes"],
    applicationIcons: ["Scissors", "Palette", "Frame", "Settings", "Box"],
    gallery: [
      "/services/acrylic-signage/acrylic-design-cutting/e1.jpeg",
      "/services/acrylic-signage/acrylic-design-cutting/e2.jpeg",
      "/services/acrylic-signage/acrylic-design-cutting/e3.jpeg",
    ],
    faqs: [],
  },
  {
    slug: "acrylic-letters-signs",
    category: "acrylic-signage",
    title: "acrylic-letters-for-signs",
    tagline: "Durable letters for all sign types.",
    shortDescription: "High-quality letters for external and internal signs.",
    description: "We provide high-quality acrylic letters suitable for all types of signs. whether for a main shop sign, a directional sign, or an informational plaque, our letters are built to last.",
    image: "/services/acrylic-signage/acrylic-letters-for-signs/e1.jpeg",
    features: ["UV resistant", "Impact resistant", "Colorfast", "Custom fonts", "Mounting options"],
    benefits: ["Long lasting", "Weatherproof", "Low maintenance", "Clear visibility", "Brand consistency"],
    applications: ["Main signs", "Directional signs", "Pylons", "Monuments", "Fascias"],
    applicationIcons: ["Signpost", "MapPin", "Building", "Landmark", "Store"],
    gallery: [
      "/services/acrylic-signage/acrylic-letters-for-signs/e1.jpeg",
      "/services/acrylic-signage/acrylic-letters-for-signs/e2.jpeg",
      "/services/acrylic-signage/acrylic-letters-for-signs/e3.jpeg",
    ],
    faqs: [],
  },
  {
    slug: "acrylic-letters-name-plates",
    category: "acrylic-signage",
    title: "acrylic-letters-for-name-plates",
    tagline: "Professional identification.",
    shortDescription: "Elegant acrylic letters for desks and doors.",
    description: "Create a professional impression with acrylic-letters-for-name-plates. Perfect for office desks, door signs, and cubicles, adding a touch of class to personal identification.",
    image: "/services/acrylic-signage/acrylic-letters-for-name-plates/e1.jpeg",
    features: ["Small capabilities", "Fine detail", "Elegant finish", "Stand-offs available", "Custom text"],
    benefits: ["Professional image", "Clear reading", "Personalized", "Durable", "Easy to change"],
    applications: ["Desk plates", "Door names", "Cubicle signs", "Mailboxes", "Lockers"],
    applicationIcons: ["User", "DoorOpen", "Briefcase", "Mail", "Lock"],
    gallery: [
      "/services/acrylic-signage/acrylic-letters-for-name-plates/e1.jpeg",
      "/services/acrylic-signage/acrylic-letters-for-name-plates/e2.jpeg",
      "/services/acrylic-signage/acrylic-letters-for-name-plates/e3.jpeg",
    ],
    faqs: [],
  },
  {
    slug: "flat-acrylic-letters-resin-art",
    category: "acrylic-signage",
    title: "Flat Acrylic Letters for Resin Art",
    tagline: "Perfect for artists and crafters.",
    shortDescription: "Precision cut flat letters for resin embedding.",
    description: "Specially designed flat acrylic letters perfect for resin art projects. These letters are clean-cut and ready to be embedded in resin for coasters, trays, art pieces, and more.",
    image: "/services/acrylic-signage/flat-acrylic-letters-for-resin-art/e1.jpeg",
    features: ["Precise cut", "Smooth edges", "Resin compatible", "Various gloss levels", "Custom fonts"],
    benefits: ["Easy embedding", "No bubbles", "Professional art finish", "Creative flexibility", "Unique component"],
    applications: ["Resin art", "Coasters", "Keychains", "Custom gifts", "Craft projects"],
    applicationIcons: ["Palette", "Coffee", "Key", "Gift", "Scissors"],
    gallery: [
      "/services/acrylic-signage/flat-acrylic-letters-for-resin-art/e1.jpeg",
    ],
    faqs: [],
  },
  {
    slug: "acrylic-mementos-awards",
    category: "acrylic-signage",
    title: "Acrylic Mementos & Awards",
    tagline: "Recognize achievement in style.",
    shortDescription: "Custom designed acrylic awards and trophies.",
    description: "Celebrate success with our custom acrylic mementos and awards. We design and fabricate stunning trophies that are modern, durable, and fully customizable with engraving and printing.",
    image: "/services/acrylic-signage/3d-letter-design-acrylic-name-plate/e1.jpeg",
    features: ["Custom shapes", "Laser engraving", "Color printing", "Heavy base", "Polished finish"],
    benefits: ["Memorable", "Premium feel", "Fully custom", "Durable keepsake", "Modern look"],
    applications: ["Corporate awards", "Sports events", "Academic recognition", "Employee appreciation", "Special events"],
    applicationIcons: ["Trophy", "Medal", "GraduationCap", "Briefcase", "PartyPopper"],
    gallery: [
      "/services/acrylic-signage/3d-letter-design-acrylic-name-plate/e1.jpeg",
      "/services/acrylic-signage/3d-letter-design-acrylic-name-plate/e2.jpeg",
      "/services/acrylic-signage/3d-letter-design-acrylic-name-plate/e3.jpeg",
    ],
    faqs: [],
  },

  // CANVAS PRINTING
  {
    slug: "canvas-printing-installation",
    category: "canvas-printing",
    title: "Canvas Printing with Installation",
    tagline: "Turn photos into art.",
    shortDescription: "High-quality canvas prints with professional installation.",
    description: "Transform your favorite photos or digital art into museum-quality canvas prints. We offer full-service printing and professional installation to ensure your art looks perfect on your wall.",
    image: "/services/canvas-printing/Canvas printing with installation/e1.jpeg",
    features: ["High-res printing", "Gallery wrap", "UV coating", "Custom sizes", "Professional mounting"],
    benefits: ["Artistic look", "Personalized decor", "Long lasting", "No glare", "Complete service"],
    applications: ["Home decor", "Office art", "Gifts", "Galleries", "Exhibitions"],
    applicationIcons: ["Image", "Home", "Gift", "Building2", "Frame"],
    gallery: [
      "/services/canvas-printing/Canvas printing with installation/e1.jpeg",
      "/services/canvas-printing/Canvas printing with installation/e2.jpeg",
      "/services/canvas-printing/Canvas printing with installation/e3.jpeg",
      "/services/canvas-printing/Canvas printing with installation/e4.jpeg",
      "/services/canvas-printing/Canvas printing with installation/e5.jpeg",
      "/services/canvas-printing/Canvas printing with installation/e6.jpeg",
    ],
    faqs: [
      {
        question: "What kind of images can I print on canvas?",
        answer: "We can print almost any high-resolution digital image, including family photos, landscapes, digital art, and more. We'll check your image quality before printing.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
