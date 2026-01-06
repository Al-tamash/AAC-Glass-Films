"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    rating: 5,
    review:
      "Excellent work! They installed frosted film in my office cabin. Very professional team, neat installation, and reasonable pricing. Highly recommend for anyone in Hyderabad.",
    name: "Rajesh K.",
    type: "Office Owner",
    location: "Banjara Hills",
  },
  {
    rating: 5,
    review:
      "Got one-way vision film for my ground floor apartment. Now I have full privacy during the day without blocking sunlight. Great job by the AAC team!",
    name: "Priya M.",
    type: "Homeowner",
    location: "Jubilee Hills",
  },
  {
    rating: 5,
    review:
      "We hired them for our jewellery showroom. The sparkle glass film looks stunning and adds a premium feel to our display cases. Customers love it!",
    name: "Venkat R.",
    type: "Store Owner",
    location: "Begumpet",
  },
  {
    rating: 4,
    review:
      "Good service overall. Installed safety film on all our office glass partitions. The team was punctual and completed the work in one day.",
    name: "Srinivas P.",
    type: "Commercial Client",
    location: "Hi-Tech City",
  },
  {
    rating: 5,
    review:
      "Very impressed with the quality and finish. We got decorative tinting for our living room and it has reduced the heat significantly. Thank you!",
    name: "Anitha S.",
    type: "Homeowner",
    location: "Madhapur",
  },
  {
    rating: 5,
    review:
      "Best glass film service in Hyderabad! They did printed film with our company logo for our storefront. Looks very professional and the installation was flawless.",
    name: "Mohammed A.",
    type: "Store Owner",
    location: "Secunderabad",
  },
  {
    rating: 4,
    review:
      "Reliable and trustworthy. Got colour vinyl film for my bathroom windows. The team explained all options clearly and helped me choose the right one.",
    name: "Lakshmi N.",
    type: "Homeowner",
    location: "Kondapur",
  },
  {
    rating: 5,
    review:
      "Fantastic experience from start to finish. They installed sun control film in our entire office building. Noticeable difference in temperature and AC costs.",
    name: "Suresh B.",
    type: "Commercial Client",
    location: "Gachibowli",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "fill-warning text-warning"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-play: 5 seconds per slide
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStart(null);
  };

  // Show 3 cards on desktop, 1 on mobile
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  return (
    <section className="section-spacing">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Customer Reviews
          </span>
          <h2 className="mt-3 mb-4">
            What Our Clients in Hyderabad Say About Us
          </h2>
          <p className="text-muted-foreground text-lg flex items-center justify-center gap-2">
            <span className="inline-block w-6 h-6">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </span>
            Verified reviews from Google Maps
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Customer testimonials carousel"
        >
          {/* Desktop: 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {getVisibleTestimonials().map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.originalIndex}-${currentIndex}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <StarRating rating={testimonial.rating} />
                  <p className="mt-4 text-foreground leading-relaxed">
                    "{testimonial.review}"
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.type} • {testimonial.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile: 1 card */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <StarRating rating={testimonials[currentIndex].rating} />
                <p className="mt-4 text-foreground leading-relaxed">
                  "{testimonials[currentIndex].review}"
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].type} •{" "}
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "w-6 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA to Google Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <Button asChild variant="outline" className="gap-2">
            <Link
              href="https://www.google.com/maps/place/AAC+Glass+Films/@17.4254594,78.4338973,17z/data=!4m8!3m7!1s0x3bcb91c837a0feeb:0x7fb714b6bbe3b2f9!8m2!3d17.4254543!4d78.4364722!9m1!1b1!16s%2Fg%2F11xlg6x77v?hl=en-US&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Reviews on Google
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
