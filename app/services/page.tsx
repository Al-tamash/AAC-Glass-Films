import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Award, Users, Wrench, Phone, MessageCircle } from "lucide-react";

import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Process } from "@/components/landing/process";
import { Testimonials } from "@/components/landing/testimonials";
import { CTA } from "@/components/landing/cta";
import { FadeIn } from "@/components/landing/anim-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/service-data";

export const metadata: Metadata = {
  title: "Our Services | AAC Glass Films - Glass Film Solutions Hyderabad",
  description:
    "Explore our complete range of glass film services in Hyderabad. Frosted, sparkle, printed, safety, and decorative glass films for homes and offices.",
  keywords: [
    "glass film services Hyderabad",
    "frosted glass film",
    "decorative glass film",
    "safety glass film",
    "one way vision film",
  ],
};

// Trust indicators
const trustIndicators = [
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Award, value: "2000+", label: "Projects Completed" },
  { icon: Users, value: "100%", label: "Customer Satisfaction" },
  { icon: Wrench, value: "Expert", label: "Installation Team" },
];

// FAQs
const serviceFaqs = [
  {
    question: "What types of glass film do you offer?",
    answer: "We offer 8 types: Plain Frosted, Sparkle, Printed, Colour, One-Way Vision, Colour Vinyl, Safety, and Decorative Window Tinting. Each serves different purposes from privacy to branding.",
  },
  {
    question: "How long does installation take?",
    answer: "Most residential installations take 2-4 hours. Commercial projects may take 1-2 days depending on the area. We work efficiently to minimize disruption.",
  },
  {
    question: "Do you offer free site visits?",
    answer: "Yes! We provide free site visits and consultations anywhere in Hyderabad and surrounding areas. We'll measure, assess, and provide a detailed quote.",
  },
  {
    question: "What warranty do you provide?",
    answer: "We offer 2 years installation warranty and manufacturer warranties ranging from 5-15 years depending on the film type. All our work is guaranteed.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="section-container">
            <FadeIn className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
              <h1 className="mt-3 mb-4">
                Professional Glass Film Services in Hyderabad
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                From privacy solutions to decorative enhancements, we offer a
                complete range of glass film and vinyl services for homes and
                businesses across Telangana.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="tel:9908119150">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
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

        {/* Why Choose Us */}
        <section className="section-spacing bg-muted/30">
          <div className="section-container">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="mt-3 mb-4">Trusted by Thousands in Hyderabad</h2>
              <p className="text-muted-foreground">
                We bring years of expertise, quality materials, and professional service to every project
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {trustIndicators.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card className="text-center hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-3xl font-bold text-primary mb-1">{item.value}</p>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-spacing">
          <div className="section-container">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="mb-4">Our Glass Film Services</h2>
              <p className="text-muted-foreground">
                Choose from our wide range of premium glass film solutions
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <FadeIn key={service.slug} delay={index * 0.05} duration={0.4}>
                  <Link href={`/services/${service.slug}`}>
                    <Card className="h-full group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col border-border">
                      <div className="relative w-full h-48 bg-muted">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center justify-between">
                          {service.title}
                          <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm font-medium text-primary mb-2 line-clamp-2">
                          {service.tagline}
                        </p>
                        <p className="text-muted-foreground text-sm line-clamp-3">
                          {service.shortDescription}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <Process />

        {/* Testimonials Section - Using Home Page Component */}
        <Testimonials />

        {/* FAQ Section */}
        <section className="section-spacing bg-muted/30">
          <div className="section-container">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Common questions about our glass film services
              </p>
            </FadeIn>

            <div className="max-w-3xl mx-auto space-y-4">
              {serviceFaqs.map((faq, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card className="overflow-hidden">
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-medium text-foreground hover:text-primary transition-colors list-none">
                        <span>{faq.question}</span>
                        <span className="ml-4 flex-shrink-0 transition-transform duration-200 group-open:rotate-180">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-4 text-muted-foreground">
                        {faq.answer}
                      </div>
                    </details>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
