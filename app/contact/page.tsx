import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { FadeIn } from "@/components/landing/anim-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { ContactFormSimple } from "@/components/contact-form-simple";

export const metadata: Metadata = {
  title: "Contact Us | AAC Glass Films - Get a Free Quote",
  description:
    "Contact AAC Glass Films for a free consultation and quote. Call 9908119150 or visit our office in Banjara Hills, Hyderabad. Expert glass film installation.",
  keywords: [
    "contact AAC Glass Films",
    "glass film quote Hyderabad",
    "glass film consultation",
  ],
};

// Quick contact options
const quickContacts = [
  {
    icon: Phone,
    title: "Call Us",
    value: "9908119150",
    href: "tel:9908119150",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat Now",
    href: "https://wa.me/919908119150",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Mail,
    title: "Email",
    value: "aaconceptz21@gmail.com",
    href: "mailto:aaconceptz21@gmail.com",
    color: "bg-primary/10 text-primary",
  },
];

// Service areas
const serviceAreas = [
  "Banjara Hills", "Jubilee Hills", "Madhapur", "Hitech City",
  "Gachibowli", "Kondapur", "Kukatpally", "Secunderabad",
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="section-container">
            <FadeIn className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Get in Touch
              </span>
              <h1 className="mt-3 mb-4">Contact Us</h1>
              <p className="text-muted-foreground text-lg">
                Ready to transform your space? Get a free consultation and quote.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="py-8">
          <div className="section-container">
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {quickContacts.map((contact, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Link href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined}>
                    <Card className="h-full hover:border-primary/50 hover:shadow-lg transition-all group cursor-pointer">
                      <CardContent className="py-5 flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <contact.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{contact.title}</p>
                          <p className="font-medium text-foreground">{contact.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form + Map Section */}
        <section className="section-spacing bg-muted/30">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <FadeIn>
                <ContactFormSimple />
              </FadeIn>

              {/* Map + Info */}
              <FadeIn delay={0.1}>
                <div className="space-y-6">
                  {/* Google Map */}
                  <div className="rounded-2xl overflow-hidden h-[300px] bg-muted">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8273618685!2d78.4338973!3d17.4254594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c837a0feeb%3A0x7fb714b6bbe3b2f9!2sAAC%20Glass%20Films!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="AAC Glass Films Location"
                    />
                  </div>

                  {/* Office Info */}
                  <Card>
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">Our Office</h3>
                          <p className="text-sm text-muted-foreground">
                            8-2-334/25, Road No. 3, Green Valley,<br />
                            Banjara Hills, Hyderabad - 500034
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Clock className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">Business Hours</h3>
                          <p className="text-sm text-muted-foreground">
                            Mon - Sat: 9:00 AM - 7:00 PM<br />
                            Sunday: By Appointment
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Service Areas */}
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-3">Service Areas</h3>
                      <div className="flex flex-wrap gap-2">
                        {serviceAreas.map((area, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-primary/10 text-primary"
                          >
                            <CheckCircle className="h-3 w-3" />
                            {area}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-3">
                        + All areas across Hyderabad & Telangana
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
