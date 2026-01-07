import { FadeIn } from "@/components/landing/anim-wrapper";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary" />
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-white rounded-full" />
      </div>

      <div className="section-container relative z-10">
        <FadeIn
          duration={0.6}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-primary-foreground mb-6">
            Ready to Transform Your Glass Surfaces?
          </h2>
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-8">
            Get a free consultation and quote today. Our team is ready to help 
            you find the perfect glass film solution for your home or business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6"
            >
              <Link href="tel:9908119150">
                <Phone className="w-5 h-5 mr-2" />
                Call: 9908119150
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
            >
              <Link
                href="https://wa.me/919908119150?text=Hi, I would like to get a free quote for glass film installation."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-primary-foreground/70 text-sm">
            No obligation. Quick response guaranteed.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
