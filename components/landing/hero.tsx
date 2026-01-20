"use client";

import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

interface HeroProps {
  title?: React.ReactNode; 
  description?: string;
  trustBadgeText?: string;
  videoPoster?: string;
}

export function Hero({
  title = <>Hyderabad's Trusted Experts for <span className="text-gradient">Glass Films, Signage & Canvas Printing</span></>,
  description = "From decorative glass films to LED acrylic signage and museum-quality canvas prints, we help homes and businesses enhance privacy, branding, and aesthetics with expert solutions.",
  trustBadgeText = "Trusted by 500+ clients across Hyderabad",
  videoPoster = "/services/images/Modernofficewithfrostedpartitions.png"
}: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex items-center pt-16 md:pt-12 pb-6 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 md:w-64 md:h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-3 md:mb-4"
            >
              <span className="text-warning">⭐</span>
              <span className="text-xs md:text-sm font-medium text-foreground">
                {trustBadgeText}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base lg:text-lg text-muted-foreground mb-5 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
              >
                <Link href="tel:9908119150">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now 
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-6 py-3 md:px-8 md:py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link
                  href="https://wa.me/919908119150?text=Hi, I'd like a free consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp  
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-5 md:mt-6 flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Same-Day Installation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>No Hidden Charges</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={videoPoster}
                className="w-full h-full object-cover"
              >
                <source src="/herosectionvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Overlay gradient for premium look */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
              {/* Corner overlay to cover watermark */}
              <div className="absolute bottom-0 right-0 w-16 h-8 bg-background rounded-tl-lg pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex"
      >
        <Link
          href="#services"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm">Explore Services</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="w-5 h-5 rotate-90" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
