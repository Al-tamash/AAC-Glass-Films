import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { CTA } from "@/components/landing/cta";
import { GlassFilmGrid } from "@/components/services/glass-film-grid";
import { TrustedBy } from "@/components/landing/trusted-by";
import { Process } from "@/components/landing/process";
import { Testimonials } from "@/components/landing/testimonials";
import { Gallery } from "@/components/landing/gallery";
import { FAQ } from "@/components/landing/faq";

export const metadata: Metadata = {
  title: "Glass Film Solutions | AAC Glass Films Hyderabad",
  description: "Explore our complete range of glass film solutions including Frosted, Sparkle, Printed, and Safety films. Expert installation in Hyderabad.",
};

export default function GlassFilmSolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Same as Home Page */}
        <Hero />

        {/* Trusted By - Build trust first */}
        <TrustedBy />

        {/* Services Grid */}
        <GlassFilmGrid />
        
        {/* Process */}
        <Process />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Gallery */}
        <Suspense fallback={<div className="section-spacing bg-muted/30"><div className="section-container text-center py-12">Loading gallery...</div></div>}>
          <Gallery />
        </Suspense>
        
        {/* FAQ */}
        <FAQ />
        
        {/* CTA */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}

