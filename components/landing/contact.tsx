"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "9908119150",
    href: "tel:9908119150",
  },
  {
    icon: Mail,
    label: "Email",
    value: "aaconceptz21@gmail.com",
    href: "mailto:aaconceptz21@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "8-2-334/25, Rd Number 3, Green Valley, Banjara Hills, Hyderabad, Telangana – 500034",
    href: "https://maps.app.goo.gl/V5m5eCN2oB9cwqZ47",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 7:00 PM",
    href: null,
  },
];

const defaultServiceOptions = [
  "--- Glass Film Solutions ---",
  "Frosted Glass Film",
  "Sparkle Glass Film",
  "Printed Glass Film",
  "Colour Glass Film",
  "One Way Vision Film",
  "Vinyl Glass Film",
  "Safety Glass Film",
  "Decorative Window Tinting",
  "--- Acrylic Signage ---",
  "3D Acrylic Letters",
  "LED Signage",
  "Acrylic Name Plates",
  "Acrylic Letters Board",
  "Custom Laser Cutting",
  "--- Canvas Printing ---",
  "Canvas Printing with Installation",
  "--- Other ---",
  "Multiple Services",
  "Other Enquiry",
];

interface ContactProps {
  serviceOptions?: string[];
}

export function Contact({ 
  serviceOptions = defaultServiceOptions 
}: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*New Enquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email || "Not provided"}%0A*Service Required:* ${formData.service}%0A*Message:* ${formData.message || "No additional message"}`;
    
    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/919908119150?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="mt-3 mb-4">
            Get in Touch with AAC Glass Films
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions or ready to start your project? Fill out the form below 
            or reach out through any of our channels. We're here to help!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Your Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Phone Number <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email (optional)"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">
                  Service Required <span className="text-destructive">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                >

                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                <Send className="w-5 h-5 mr-2" />
                Send via WhatsApp
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Your details will be sent to our WhatsApp for quick response
              </p>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Contact Info Cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    target={item.label === "Address" ? "_blank" : undefined}
                    rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                    className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">
                        {item.label}
                      </div>
                      <div className="font-medium text-foreground text-sm">
                        {item.value}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">
                        {item.label}
                      </div>
                      <div className="font-medium text-foreground text-sm">
                        {item.value}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="h-[200px] rounded-xl overflow-hidden border border-border"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8273618685!2d78.4338973!3d17.4254594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c837a0feeb%3A0x7fb714b6bbe3b2f9!2sAAC%20Glass%20Films!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AAC Glass Films Location - Banjara Hills, Hyderabad"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
