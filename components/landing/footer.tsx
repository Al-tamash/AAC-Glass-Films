import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Frosted Glass Film",
  "Sparkle Glass Film",
  "Printed Glass Film",
  "Safety Glass Film",
  "One Way Vision Film",
  "Decorative Tinting",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark bg-background text-foreground border-t border-border">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-card p-1">
                <Image
                  src="/AAglassfilmlogo.jpeg"
                  alt="AAC Glass Films Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl text-foreground">
                AAC Glass Films
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Your trusted partner for premium glass film solutions in Hyderabad 
              and across Telangana. Quality installation, lasting results.
            </p>
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
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm"
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
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                  >
                    {service}
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
                  8-2-334/25, Rd Number 3, Green Valley, Banjara Hills, Hyderabad, Telangana – 500034
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 pb-16 md:pb-0 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} AAC Glass Films. All rights reserved.
            </p>
            <p>
              Glass film services in Hyderabad, Telangana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
