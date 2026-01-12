import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Phone,
  MessageCircle,
  Clock,
  Award,
  Users,
  Wrench,
  Star,
  MessageSquare,
  ClipboardCheck,
  ShieldCheck,
  Building2,
  Bath,
  Hospital,
  Home,
  Store,
  Building,
  Sparkles,
  PartyPopper,
  UtensilsCrossed,
  Armchair,
  Presentation,
  Palette,
  Baby,
  Lightbulb,
  Wine,
  Frame,
  Car,
  Landmark,
  Shield,
  Signpost,
  Factory,
  GraduationCap,
  Vault,
  TreePine,
  Sun,
} from "lucide-react";

import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { CTA } from "@/components/landing/cta";
import { FadeIn } from "@/components/landing/anim-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/lib/service-data";

// Icon mapping for applications
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Building2,
  Bath,
  Users,
  Hospital,
  Home,
  Store,
  Building,
  Sparkles,
  PartyPopper,
  UtensilsCrossed,
  Armchair,
  Presentation,
  Palette,
  Baby,
  Lightbulb,
  Wine,
  Frame,
  Car,
  Landmark,
  Shield,
  Signpost,
  Factory,
  GraduationCap,
  Vault,
  TreePine,
  Sun,
};

// Trust indicators data
const trustIndicators = [
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Award, value: "2000+", label: "Projects Completed" },
  { icon: Users, value: "100%", label: "Customer Satisfaction" },
  { icon: Wrench, value: "Expert", label: "Installation Team" },
];

// Process steps
const processSteps = [
  { icon: MessageSquare, number: "01", title: "Free Consultation", description: "Call or WhatsApp us with your requirements" },
  { icon: ClipboardCheck, number: "02", title: "Site Visit & Quote", description: "We measure and provide a detailed quote" },
  { icon: Wrench, number: "03", title: "Professional Installation", description: "Expert technicians install with precision" },
  { icon: ShieldCheck, number: "04", title: "Quality Assurance", description: "Final inspection and warranty provided" },
];

// Sample testimonials for service pages
const serviceTestimonials = [
  {
    rating: 5,
    review: "Excellent work! Very professional team, neat installation, and reasonable pricing. Highly recommend for anyone in Hyderabad.",
    name: "Rajesh K.",
    type: "Office Owner",
    location: "Banjara Hills",
  },
  {
    rating: 5,
    review: "Great job by the AAC team! The quality is amazing and the installation was quick and clean.",
    name: "Priya M.",
    type: "Homeowner",
    location: "Jubilee Hills",
  },
];

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | AAC Glass Films",
    };
  }

  return {
    title: `${service.title} | AAC Glass Films Hyderabad`,
    description: service.description,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} Hyderabad`,
      "glass film installation",
      "AAC Glass Films",
    ],
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="section-container">
            <FadeIn>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </Link>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  {service.tagline}
                </span>
                <h1 className="mt-3 mb-4">{service.title}</h1>
                <p className="text-muted-foreground text-lg mb-8">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-4">
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

              <FadeIn delay={0.2}>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="section-spacing">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Features */}
              <FadeIn>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <Check className="h-3 w-3 text-primary" />
                          </span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Benefits */}
              <FadeIn delay={0.1}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-6">Benefits</h2>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
                            <Check className="h-3 w-3 text-secondary" />
                          </span>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
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

        {/* Applications with Icons */}
        <section className="section-spacing">
          <div className="section-container">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="mb-4">Perfect For</h2>
              <p className="text-muted-foreground">
                Our {service.title.toLowerCase()} is ideal for various applications
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.applications.map((application, index) => {
                const iconName = service.applicationIcons?.[index];
                const IconComponent = iconName ? iconMap[iconName] : Building2;
                
                return (
                  <FadeIn key={index} delay={index * 0.05}>
                    <Card className="text-center hover:border-primary/50 hover:shadow-lg transition-all group">
                      <CardContent className="pt-6">
                        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          {IconComponent && <IconComponent className="h-7 w-7 text-primary" />}
                        </div>
                        <p className="font-medium">{application}</p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-spacing bg-muted/30">
          <div className="section-container">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Process
              </span>
              <h2 className="mt-3 mb-4">Simple 4-Step Installation</h2>
              <p className="text-muted-foreground">
                From consultation to completion — we make it easy for you
              </p>
            </FadeIn>

            <div className="relative">
              {/* Connecting line - Desktop */}
              <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-border" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                {processSteps.map((step, index) => (
                  <FadeIn
                    key={step.number}
                    delay={index * 0.1}
                    className="relative text-center"
                  >
                    {/* Step circle with icon */}
                    <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Step number badge */}
                    <div className="absolute top-0 right-1/2 translate-x-10 -translate-y-1 w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </div>

                    {/* Content */}
                    <h3 className="font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {service.gallery && service.gallery.length > 0 && (
          <section className="section-spacing">
            <div className="section-container">
              <FadeIn className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Our Work
                </span>
                <h2 className="mt-3 mb-4">Project Gallery</h2>
                <p className="text-muted-foreground">
                  See our {service.title.toLowerCase()} installations across Hyderabad
                </p>
              </FadeIn>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {service.gallery.map((imageUrl, index) => (
                  <FadeIn key={index} delay={index * 0.05}>
                    <div className="group relative aspect-square rounded-xl overflow-hidden bg-muted cursor-pointer hover:shadow-lg transition-all">
                      <Image
                        src={imageUrl}
                        alt={`${service.title} project ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* CTA for more projects */}
              <FadeIn delay={0.3}>
                <div className="text-center mt-8">
                  <p className="text-muted-foreground mb-4">
                    Want to see more of our work?
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/our-work">View Full Gallery</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </section>
        )}

        {/* Testimonials Section */}
        <section className="section-spacing">
          <div className="section-container">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Customer Reviews
              </span>
              <h2 className="mt-3 mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground flex items-center justify-center gap-2">
                <span className="inline-block w-5 h-5">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </span>
                Verified reviews from Google Maps
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {serviceTestimonials.map((testimonial, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card className="h-full hover:border-primary/30 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className={`w-5 h-5 ${
                              s <= testimonial.rating
                                ? "fill-warning text-warning"
                                : "fill-muted text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-foreground leading-relaxed mb-4">
                        &quot;{testimonial.review}&quot;
                      </p>
                      <div className="pt-4 border-t border-border">
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.type} • {testimonial.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="section-spacing bg-muted/30">
            <div className="section-container">
              <FadeIn className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                  Common questions about {service.title.toLowerCase()}
                </p>
              </FadeIn>

              <div className="max-w-3xl mx-auto space-y-4">
                {service.faqs.map((faq, index) => (
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
        )}

        {/* Other Services */}
        <section className="section-spacing">
          <div className="section-container">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="mb-4">Explore Other Services</h2>
              <p className="text-muted-foreground">
                Discover our complete range of glass film solutions
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services
                .filter((s) => s.slug !== service.slug)
                .slice(0, 4)
                .map((otherService, index) => (
                  <FadeIn key={otherService.slug} delay={index * 0.05}>
                    <Link href={`/services/${otherService.slug}`}>
                      <Card className="group hover:border-primary/50 transition-all">
                        <CardContent className="pt-6">
                          <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-1">
                            {otherService.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {otherService.tagline}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </FadeIn>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
