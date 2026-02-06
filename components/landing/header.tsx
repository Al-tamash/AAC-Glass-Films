"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

// Landing page anchor navigation
const navItems = [
  { name: "Home", href: "/#hero" },
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Why Us", href: "/#why-us" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact", href: "/#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // Smooth scroll function
  const scrollToSection = useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, []);

  // Click handler for navigation
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    const isHomePage = pathname === "/";
    const targetId = href.split("#")[1];
    
    // Close mobile menu first
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      // If mobile menu was open, wait for it to close/animate before scrolling
      // derived from animation duration or estimated layout shift time
      if (isHomePage) {
        e.preventDefault();
        setTimeout(() => {
          scrollToSection(targetId);
        }, 300); // 300ms matches typical transition duration
      }
      return;
    }

    if (isHomePage) {
      e.preventDefault();
      scrollToSection(targetId);
    } 
  }, [pathname, scrollToSection, isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-20 md:h-28">
          {/* Logo */}
          <Link 
            href="/#hero"
            onClick={(e) => handleNavClick(e, "/#hero")}
            className="flex items-center cursor-pointer -ml-4 md:ml-0"
          >
            <div className={`relative ${isDark ? "w-[260px] h-[95px] md:w-[380px] md:h-[130px]" : "w-[220px] h-[80px] md:w-[320px] md:h-[110px]"}`}>
              <Image
                src={isDark ? "/glassfilmfinallogotransparent1.png" : "/glassfilmlogolighttheme.png"}
                alt="AAC Glass Films Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-10 h-10 md:w-10 md:h-10"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </Button>

            {/* Call Button - Desktop */}
            <Button
              asChild
              className="hidden md:flex bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <Link href="tel:9908119150">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-12 h-12"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-10 w-10" />
              ) : (
                <Menu className="h-10 w-10" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-background border-t border-border"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-2">
                  <Button
                    asChild
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    <Link href="tel:9908119150">
                      <Phone className="h-4 w-4 mr-2" />
                      Call: 9908119150
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
