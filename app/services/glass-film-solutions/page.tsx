import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, MessageCircle } from "lucide-react";
import { services } from "@/lib/service-data";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { CTA } from "@/components/landing/cta";
import { FadeIn } from "@/components/landing/anim-wrapper";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Glass Film Solutions | AAC Glass Films Hyderabad",
  description: "Explore our complete range of glass film solutions including Frosted, Sparkle, Printed, and Safety films. Expert installation in Hyderabad.",
};

export default function GlassFilmSolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="section-container">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Premium Glass Film <span className="text-primary">Solutions</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Discover our comprehensive range of high-quality glass films designed to enhance privacy, aesthetics, and safety for your home and office.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Link href="tel:9908119150">
                      <Phone className="w-4 h-4 mr-2" />
                      Get a Quote
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/our-work">
                      View Our Work
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Services List */}
        <div className="section-container pb-20 space-y-20 md:space-y-32">
          {services.map((service, index) => (
            <section 
              key={service.slug} 
              id={service.slug} 
              className="scroll-mt-28"
            >
              <FadeIn delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? 'lg:order-last' : ''
                }`}>
                  {/* Image Column */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-border/50">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                    <div>
                      <h2 className="text-3xl font-bold mb-3">{service.title}</h2>
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                      {service.features.slice(0, 6).map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Applications Badge List */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Ideal For
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.applications.slice(0, 5).map((app, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm rounded-full font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* FAQ Accordion */}
                    {service.faqs && service.faqs.length > 0 && (
                      <div className="pt-4">
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="faq-1" className="border-b-0">
                            <AccordionTrigger className="hover:no-underline py-2 text-sm text-primary font-medium">
                              Frequently Asked Questions
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-4 pt-2">
                                {service.faqs.slice(0, 3).map((faq, i) => (
                                  <div key={i} className="space-y-1">
                                    <h4 className="font-medium text-foreground">{faq.question}</h4>
                                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <Link 
                          href={`https://api.whatsapp.com/send?phone=919908119150&text=Hi, I'm interested in ${service.title}. Can you provide a quote?`} 
                          target="_blank"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Get Quote via WhatsApp
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" className="hover:text-primary">
                        <Link href={`/our-work?category=${service.galleryCategory || 'all'}`}>
                          See Projects <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </section>
          ))}
        </div>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
