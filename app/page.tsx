import type { Metadata } from "next";
import { Suspense } from "react";

import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { QuickStats } from "@/components/landing/quick-stats";
import { ServiceCategoryGrid } from "@/components/services/service-category-grid";
import { Process } from "@/components/landing/process";
import { Testimonials } from "@/components/landing/testimonials";
import { Gallery } from "@/components/landing/gallery";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { FAQ } from "@/components/landing/faq";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";
import { StickyMobileCTA } from "@/components/landing/sticky-mobile-cta";
import { PremiumBrands } from "@/components/landing/premium-brands";
import { glassFilmGalleryCategories } from "@/lib/glass-film-gallery";

// SEO Metadata - Glass Film Solutions Landing Page
export const metadata: Metadata = {
  title: "AAC Glass Films | Premium Glass Film Solutions in Hyderabad, Telangana",
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
    "3D glass film",
    "sun control film",
    "glass writing board",
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
    title: "AAC Glass Films | Premium Glass Film Solutions in Hyderabad",
    description:
      "Expert glass film installation in Hyderabad. Frosted, decorative, safety & one-way vision films for homes and offices. Call 9908119150.",
    images: [
      {
        url: "/services/images/Modernofficewithfrostedpartitions.png",
        width: 1200,
        height: 630,
        alt: "AAC Glass Films - Premium Glass Film Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AAC Glass Films | Glass Film Solutions Hyderabad",
    description:
      "Transform your space with premium glass films. Expert installation in Hyderabad & Telangana. Call 9908119150.",
    images: ["/services/images/Modernofficewithfrostedpartitions.png"],
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
  image: "https://aacglassfilms.com/services/images/Modernofficewithfrostedpartitions.png",
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
    "3D Glass Film",
    "Sun Control Film",
    "Glass Writing Board",
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
        {/* Hero Section - Glass Film Specific */}
        <section id="hero">
          <Hero 
            title={<>Hyderabad's Trusted Experts for <span className="text-gradient">Premium Glass Film Solutions</span></>}
            description="From decorative window tinting to safety glass films, we help homes and businesses enhance privacy, protection, and style with expert installation."
          />
        </section>

        {/* Quick Stats */}
        <QuickStats />


        {/* Services Grid - Glass Films Only */}
        <section id="services">
          <ServiceCategoryGrid 
            category="glass-film" 
            title="Our Glass Film Solutions"
            subtitle="Complete range of Frosted, Sparkle, Printed, 3D, Sun Control, and Safety glass films for every need."
          />
        </section>

        {/* Premium Brands */}
        <PremiumBrands />

        {/* Process */}
        <section id="process">
          <Process />
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Why Choose Us */}
        <section id="why-us">
          <WhyChooseUs />
        </section>

        {/* Gallery - Glass Film Projects Only */}
        <section id="gallery">
          <Suspense fallback={<div className="section-spacing bg-muted/30"><div className="section-container text-center py-12">Loading gallery...</div></div>}>
            <Gallery 
              categories={glassFilmGalleryCategories}
              title="Our Glass Film Projects"
              description="Browse through our completed glass film installations across Hyderabad. From offices to homes — quality you can trust."
            />
          </Suspense>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* Contact Form */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
