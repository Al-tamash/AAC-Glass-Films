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
import { canvasPrintingGalleryCategories } from "@/lib/canvas-printing-gallery";

export const metadata: Metadata = {
  title: "Canvas Printing & Installation | AAC Glass Films Hyderabad",
  description: "High-quality canvas printing with professional installation. Turn your photos and digital art into stunning wall decor.",
};

export default function CanvasPrintingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Specific Hero Content */}
        <Hero 
          title={<>Turn Photos into Art with <span className="text-gradient">Canvas Printing</span></>}
          description="Museum-quality canvas prints with professional framing and installation. Perfect for home decor, office art, and personalized gifts."
          trustBadgeText="Premium Quality Prints"
        />

        {/* Trusted By */}
        <TrustedBy />

        {/* Services Grid */}
        <ServiceCategoryGrid 
          category="canvas-printing"
          title="Canvas Printing Services"
          subtitle="Turn your memories and art into museum-quality masterpiece."
        />
        
        {/* Process */}
        <Process 
          title="Process: Print to Wall"
          description="Select your image, choose your size, and let us handle the printing, framing, and installation."
          categoryName="How It Works"
          steps={[
            {
              number: "01",
              title: "Upload Your Image",
              description: "Send us your photo or digital art via WhatsApp or email. We'll check the resolution for best results."
            },
            {
              number: "02",
              title: "Choose Size & Frame",
              description: "Pick from standard or custom sizes. Select your frame style — gallery wrap, floating, or traditional."
            },
            {
              number: "03",
              title: "Color Proofing",
              description: "We send you a digital proof so you can approve the colors and cropping before printing."
            },
            {
              number: "04",
              title: "Premium Printing",
              description: "Your image is printed on archival-quality canvas using UV-resistant, fade-proof inks."
            },
            {
              number: "05",
              title: "Delivery & Installation",
              description: "We deliver your print ready to hang, or install it for you at your home or office."
            }
          ]}
        />
        
        {/* Testimonials */}
        <Testimonials 
          title="Happy Canvas Customers"
          description="See what people are saying about our canvas prints"
          items={[
            {
              rating: 5,
              review: "Turned my wedding photo into a huge canvas. The print quality is amazing, looks like a painting!",
              name: "Pooja D.",
              type: "Homeowner",
              location: "Jubilee Hills"
            },
            {
              rating: 5,
              review: "Excellent framing and installation service. They helped me create a gallery wall in my living room.",
              name: "Karan M.",
              type: "Interior Designer",
              location: "Banjara Hills"
            },
            {
              rating: 4,
              review: "Good quality prints and fast delivery. Highly recommended for personalized gifts.",
              name: "Neodra L.",
              type: "Customer",
              location: "Gachibowli"
            }
          ]}
        />
        
        {/* Gallery */}
        <Suspense fallback={<div className="section-spacing bg-muted/30"><div className="section-container text-center py-12">Loading gallery...</div></div>}>
          <Gallery 
             title="Canvas Print Inspiration"
             description="From family portraits to abstract art, see how our prints transform spaces."
             categories={canvasPrintingGalleryCategories}
          />
        </Suspense>
        
        {/* FAQ */}
        <FAQ 
           title="Canvas Printing Questions"
           description="Everything you need to know about our canvas printing services."
           items={[
             {
               question: "What image resolution do I need?",
               answer: "For best results, we recommend high-resolution images (300 DPI). We can check your image quality before printing."
             },
             {
               question: "Do you offer installation?",
               answer: "Yes, we provide professional installation services to ensure your canvas is securely and perfectly mounted."
             },
             {
               question: "Is the canvas durable?",
               answer: "We use archival-quality canvas and UV-resistant inks that prevent fading and yellowing over time."
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
