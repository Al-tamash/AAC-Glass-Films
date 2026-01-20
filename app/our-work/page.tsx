import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Award, Image as ImageIcon, Star, Phone, MessageCircle } from "lucide-react";

import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { CategorizedGallery } from "@/components/landing/categorized-gallery";
import { Testimonials } from "@/components/landing/testimonials";
import { Contact } from "@/components/landing/contact";
import { FadeIn } from "@/components/landing/anim-wrapper";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Gallery | AAC Glass Films - Our Work in Hyderabad",
  description:
    "Browse our portfolio of glass film installations in Hyderabad. See our work in offices, homes, showrooms, and commercial spaces across Telangana.",
  keywords: [
    "glass film gallery",
    "glass film projects Hyderabad",
    "glass film installation examples",
  ],
};

// Stats
const galleryStats = [
  { icon: ImageIcon, value: "500+", label: "Projects Completed" },
  { icon: Award, value: "8", label: "Service Categories" },
  { icon: Star, value: "4.9", label: "Average Rating" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="section-container">
            <FadeIn className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Work
              </span>
              <h1 className="mt-3 mb-4">Project Gallery</h1>
              <p className="text-muted-foreground text-lg mb-8">
                Explore our portfolio of glass film installations across
                Hyderabad. From offices to homes, see the quality of our work.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="tel:9908119150">
                    <Phone className="h-4 w-4 mr-2" />
                    Get Similar Work Done
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link
                    href="https://wa.me/919908119150"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/30">
          <div className="section-container">
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              {galleryStats.map((stat, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <CategorizedGallery />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
