import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Target, Eye, Heart, CheckCircle, MapPin } from "lucide-react";

import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { Testimonials } from "@/components/landing/testimonials";
import { Contact } from "@/components/landing/contact";
import { FadeIn } from "@/components/landing/anim-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us | AAC Glass Films - Glass Films, Signage & Printing Experts",
  description:
    "Learn about AAC Glass Films - 15+ years of experience providing premium glass films, acrylic signage, and canvas printing in Hyderabad and Telangana.",
  keywords: [
    "about AAC Glass Films",
    "glass film company Hyderabad",
    "acrylic signage Hyderabad",
    "canvas printing Telangana",
  ],
};

// Stats
const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "2000+", label: "Projects Completed" },
  { value: "100%", label: "Quality Assurance" },
  { value: "24/7", label: "Customer Support" },
];

// Mission & Vision
const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide premium glass films, acrylic signage, and canvas printing solutions that transform spaces, enhance branding, and beautify homes and businesses across Telangana.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the most trusted visual solutions company in South India, known for quality glass films, stunning signage, and museum-quality prints.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Quality materials, professional installation, honest pricing, and complete customer satisfaction are at the heart of everything we do.",
  },
];



// Service areas
const serviceRegions = [
  {
    region: "Hyderabad",
    areas: ["Banjara Hills", "Jubilee Hills", "Madhapur", "Hitech City", "Gachibowli", "Kondapur"],
  },
  {
    region: "Secunderabad",
    areas: ["Begumpet", "Ameerpet", "Paradise", "Trimulgherry", "Alwal"],
  },
  {
    region: "Greater Hyderabad",
    areas: ["LB Nagar", "Dilsukhnagar", "Kukatpally", "Miyapur", "Shamshabad"],
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="section-container">
            <FadeIn className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h1 className="mt-3 mb-4">
                Your Trusted Partner for Glass Films, Signage & Printing
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                With over 15 years of experience, AAC Glass Films has been
                transforming spaces across Hyderabad and Telangana with premium
                glass films, acrylic signage, and canvas printing solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="tel:9908119150">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
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

        {/* Story Section with Stats */}
        <section className="section-spacing">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Our Story
                </span>
                <h2 className="mt-3 mb-4">From Local Business to Trusted Name</h2>
                <p className="text-muted-foreground mb-4">
                  AAC Glass Films started with a simple mission: to provide
                  high-quality solutions that transform ordinary spaces into
                  extraordinary ones. Over the years, we have expanded from glass
                  films to include acrylic signage and canvas printing, becoming
                  a trusted name across Telangana.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our team of skilled professionals brings expertise to every
                  project — whether it&apos;s glass film installation, LED signage
                  for your business, or canvas prints for your home. We take
                  pride in our attention to detail and commitment to customer
                  satisfaction.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-xl bg-primary/5">
                      <span className="text-3xl font-bold text-primary">{stat.value}</span>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/services/images/Modernofficewithfrostedpartitions.png"
                    alt="AAC Glass Films Team at Work"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section-spacing bg-muted/30">
          <div className="section-container">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="mb-4">What Drives Us</h2>
              <p className="text-muted-foreground">
                Our mission, vision, and values guide everything we do
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {values.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card className="h-full text-center hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Testimonials - Using Home Page Component */}
        <Testimonials />

        {/* Service Areas */}
        <section className="section-spacing">
          <div className="section-container">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Service Coverage
              </span>
              <h2 className="mt-3 mb-4">Areas We Serve</h2>
              <p className="text-muted-foreground">
                We provide glass films, acrylic signage, and canvas printing across Hyderabad and all of Telangana
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {serviceRegions.map((region, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-lg">{region.region}</h3>
                      </div>
                      <ul className="space-y-2">
                        {region.areas.map((area, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            {area}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.3}>
              <p className="text-center text-muted-foreground mt-8">
                * We also serve all other areas across Telangana. Contact us for service in your area.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Contact Form */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
