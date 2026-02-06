"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook } from "lucide-react";

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/aaconceptz_" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@aacglassfilms" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/share/1Dh2Tdt4nh/" },
];
import { usePathname } from "next/navigation";

// Landing page anchor links for Quick Links
const quickLinks = [
  { name: "Home", href: "/#hero" },
  { name: "Services", href: "/#services" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact", href: "/#contact" },
];

// Service categories - scroll to services section
const servicesItems = [
  { name: "Frosted Glass Film", href: "/#services" },
  { name: "Sparkle Glass Film", href: "/#services" },
  { name: "Printed Glass Film", href: "/#services" },
  { name: "Safety Glass Film", href: "/#services" },
  { name: "One Way Vision Film", href: "/#services" },
  { name: "3D Glass Film", href: "/#services" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHomePage = pathname === "/";
    const targetId = href.split("#")[1];
    
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link 
              href="/#hero" 
              onClick={(e) => handleNavClick(e, "/#hero")}
              className="flex items-center mb-6 cursor-pointer -ml-4 md:ml-0"
            >
              <div className="relative w-[240px] h-[90px] md:w-[350px] md:h-[120px]">
                {/* Dark mode logo */}
                <Image
                  src="/glassfilmfinallogotransparent1.png"
                  alt="AAC Glass Films Logo (Dark)"
                  fill
                  className="object-contain object-left hidden dark:block"
                />
                {/* Light mode logo */}
                <Image
                  src="/glassfilmlogolighttheme.png"
                  alt="AAC Glass Films Logo (Light)"
                  fill
                  className="object-contain object-left block dark:hidden"
                />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Your trusted partner for premium glass film solutions in Hyderabad 
              and across Telangana. Quality installation, lasting results.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">
              Our Services
            </h3>
            <ul className="space-y-2">
              {servicesItems.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    onClick={(e) => handleNavClick(e, service.href)}
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm cursor-pointer"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="tel:9908119150"
                  className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>9908119150</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:aaconceptz21@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>aaconceptz21@gmail.com</span>
                </Link>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  Rd Number 3, Green Valley, Banjara Hills, Hyderabad, Telangana – 500034
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 pb-16 md:pb-0 border-t border-border">
          <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground text-center">
            <p>
              © {currentYear} AAC Glass Films. All rights reserved.
            </p>
            <p className="text-xs">
              Designed & Developed by{" "}
              <Link
                href="https://www.edonesolution.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline font-medium"
              >
                Edone Solution
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
