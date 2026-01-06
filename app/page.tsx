import type { Metadata } from "next";

import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { TrustedBy } from "@/components/landing/trusted-by";
import { Services } from "@/components/landing/services";
import { Process } from "@/components/landing/process";
import { Testimonials } from "@/components/landing/testimonials";
import { Gallery } from "@/components/landing/gallery";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";
import { StickyMobileCTA } from "@/components/landing/sticky-mobile-cta";

// SEO Metadata
export const metadata: Metadata = {
  title: "AAC Glass Films | Premium Glass Film Services in Hyderabad, Telangana",
  description:
    "Transform your space with AAC Glass Films. Expert installation of frosted, decorative, safety, and one-way vision glass films in Hyderabad. 10+ years experience. Call 9908119150 for a free consultation.",
  keywords: [
    "glass film Hyderabad",
    "glass film services Telangana",
    "decorative window tinting Hyderabad",
    "frosted glass film",
    "safety glass film installation",
    "one way vision glass film",
    "vinyl glass film",
    "sparkle glass film",
    "printed glass film",
    "glass film experts Hyderabad",
    "window film installation",
    "office glass film",
    "residential glass film",
  ],
  authors: [{ name: "AAC Glass Films" }],
  creator: "AAC Glass Films",
  publisher: "AAC Glass Films",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aacglassfilms.com",
    siteName: "AAC Glass Films",
    title: "AAC Glass Films | Premium Glass Film Services in Hyderabad",
    description:
      "Expert glass film installation in Hyderabad. Frosted, decorative, safety & one-way vision films for homes and offices. Call 9908119150.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AAC Glass Films - Premium Glass Film Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AAC Glass Films | Glass Film Services Hyderabad",
    description:
      "Transform your space with premium glass films. Expert installation in Hyderabad & Telangana. Call 9908119150.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://aacglassfilms.com",
  },
};

// JSON-LD Schema for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AAC Glass Films",
  image: "https://aacglassfilms.com/og-image.jpg",
  description:
    "Premium glass film installation services in Hyderabad, Telangana. Specializing in frosted, decorative, safety, and one-way vision glass films for residential and commercial spaces.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8-2-334/25, Rd Number 3, Green Valley, Banjara Hills",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500034",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4234,
    longitude: 78.4371,
  },
  url: "https://aacglassfilms.com",
  telephone: "+919908119150",
  email: "aaconceptz21@gmail.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "State",
    name: "Telangana",
  },
  serviceType: [
    "Glass Film Installation",
    "Decorative Window Tinting",
    "Safety Glass Film",
    "Frosted Glass Film",
    "One Way Vision Film",
    "Printed Glass Film",
    "Vinyl Glass Film",
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Sections */}
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <Process />
        <Testimonials />
        <WhyChooseUs />
        <Gallery />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
