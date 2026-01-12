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
  faqs: FAQ[];
}

export const services: Service[] = [
  {
    slug: "plain-frosted-glass-film",
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
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
