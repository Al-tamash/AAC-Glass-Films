"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      setIsVisible(window.scrollY > 600);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-3"
        >
          <div className="flex gap-2">
            <Link
              href="tel:9908119150"
              className="flex-1 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-3 rounded-lg font-medium"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Link>
            <Link
              href="https://wa.me/919908119150?text=Hi, I'm interested in your glass film services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-success text-primary-foreground py-3 rounded-lg font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
