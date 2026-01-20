import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { CTA } from "@/components/landing/cta";
import { ServiceCategoryGrid } from "@/components/services/service-category-grid";
import { TrustedBy } from "@/components/landing/trusted-by";
import { Process } from "@/components/landing/process";
import { Testimonials } from "@/components/landing/testimonials";
import { Gallery } from "@/components/landing/gallery";
import { FAQ } from "@/components/landing/faq";
import { acrylicSignageGalleryCategories } from "@/lib/acrylic-signage-gallery";

export const metadata: Metadata = {
  title: "Acrylic Signage Solutions | AAC Glass Films Hyderabad",
  description: "Premium acrylic signage solutions including LED letters, 3D letters, name plates, and awards. Custom branding for offices and retail.",
};

export default function AcrylicSignagePage() {
  return (
    <>
      <Header />
      <main>
        {/* Specific Hero Content */}
        <Hero 
          title={<>Premium <span className="text-gradient">Acrylic Signage Solutions</span> in Hyderabad</>}
          description="Elevate your brand with high-quality LED letters, 3D acrylic signs, name plates, and custom awards. Professional design and installation."
          trustBadgeText="Trusted for Corporate Branding"
        />

        {/* Trusted By */}
        <TrustedBy />

        {/* Services Grid */}
        <ServiceCategoryGrid 
          category="acrylic-signage"
          title="Acrylic Signage Solutions"
          subtitle="Premium acrylic letters, boards, and custom designs for your business."
        />
        
        {/* Process - Custom Text */}
        <Process 
          title="From Design to Installation"
          description="We handle everything from the initial design concept to the final installation of your signage."
          categoryName="Our Signage Process"
          steps={[
            {
              number: "01",
              title: "Free Consultation",
              description: "Discuss your branding needs — LED letters, 3D signs, name plates, or custom awards."
            },
            {
              number: "02",
              title: "Design & Mockup",
              description: "Our team creates a visual mockup with your logo, fonts, colours, and preferred materials."
            },
            {
              number: "03",
              title: "Material Selection",
              description: "Choose from acrylic, metal, vinyl, or LED-lit options that fit your budget and style."
            },
            {
              number: "04",
              title: "Fabrication",
              description: "Precision laser cutting and assembly at our workshop with quality checks at every stage."
            },
            {
              number: "05",
              title: "Installation & Support",
              description: "We install your signage on-site with secure mounting and provide after-sales support."
            }
          ]}
        />
        
        {/* Testimonials */}
        <Testimonials 
          title="What Our Signage Clients Say"
          description="Feedback from businesses across Hyderabad"
          items={[
            {
              rating: 5,
              review: "The LED acrylic board for our new office looks fantastic. Great finish and professional installation.",
              name: "Vikram S.",
              type: "Business Owner",
              location: "Hitech City"
            },
            {
              rating: 5,
              review: "Ordered custom name plates for our apartment complex. Delivered on time and the quality is excellent.",
              name: "Sujatha R.",
              type: "Apartment Secretary",
              location: "Manikonda"
            },
            {
              rating: 4,
              review: "Very creative design team. They helped us choose the right font and style for our shop signboard.",
              name: "Ahmed K.",
              type: "Shop Owner",
              location: "Abids"
            }
          ]}
        />
        
        {/* Gallery */}
        <Suspense fallback={<div className="section-spacing bg-muted/30"><div className="section-container text-center py-12">Loading gallery...</div></div>}>
          <Gallery 
            title="Our Recent Signage Projects"
            description="Explore our complete portfolio of acrylic letters, boards, and LED signs."
            categories={acrylicSignageGalleryCategories}
          />
        </Suspense>
        
        {/* FAQ - Custom Text (could also pass custom items) */}
        <FAQ 
          title="Acrylic Signage Questions"
          description="Common questions about our acrylic letters and signage services."
          items={[
            {
              question: "How long does acrylic signage last?",
              answer: "High-quality acrylic signage uses UV-resistant materials that can last 5-7 years outdoors and even longer indoors."
            },
            {
              question: "Do you provide LED lighting?",
              answer: "Yes, we specialize in LED-illuminated acrylic letters that provide high visibility for your brand day and night."
            },
            {
              question: "Can you cut custom shapes?",
              answer: "Absolutely. We use precision laser cutting to create any shape, logo, or font you require."
            }
          ]}
        />
        
        {/* CTA */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
