import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Contact } from "@/components/landing/contact";
import { ServiceCategoryGrid } from "@/components/services/service-category-grid";
import { QuickStats } from "@/components/landing/quick-stats";
import { Process } from "@/components/landing/process";
import { Testimonials } from "@/components/landing/testimonials";
import { Gallery } from "@/components/landing/gallery";
import { FAQ } from "@/components/landing/faq";
import { glassFilmGalleryCategories } from "@/lib/glass-film-gallery";

export const metadata: Metadata = {
  title: "Glass Film Solutions | AAC Glass Films Hyderabad",
  description: "Explore our complete range of glass film solutions including Frosted, Sparkle, Printed, and Safety films. Expert installation in Hyderabad.",
};

export default function GlassFilmSolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Glass Film Specific */}
        <Hero 
          title={<>Hyderabad's Trusted Experts for <span className="text-gradient">Premium Glass Film Solutions</span></>}
          description="From decorative window tinting to safety glass films, we help homes and businesses enhance privacy, protection, and style with expert installation."
        />

        {/* Quick Stats */}
        <QuickStats />

        {/* Services Grid */}
        <ServiceCategoryGrid 
          category="glass-film" 
          title="Glass Film Solutions"
          subtitle="Complete range of Frosted, Sparkle, Printed, and Safety glass films."
        />
        
        {/* Process */}
        <Process />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Gallery - Glass Film Projects Only */}
        <Suspense fallback={<div className="section-spacing bg-muted/30"><div className="section-container text-center py-12">Loading gallery...</div></div>}>
          <Gallery 
            categories={glassFilmGalleryCategories}
            title="Our Glass Film Projects"
            description="Browse through our completed glass film installations across Hyderabad. From offices to homes — quality you can trust."
          />
        </Suspense>
        
        {/* FAQ */}
        <FAQ />
        
        {/* Contact Form */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

