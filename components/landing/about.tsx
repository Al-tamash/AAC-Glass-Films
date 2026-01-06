"use client";

import { motion } from "motion/react";
import { Award, Users, Clock, Shield } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Award, value: "1000+", label: "Projects Completed" },
  { icon: Shield, value: "100%", label: "Quality Assured" },
];

export function About() {
  return (
    <section id="about" className="section-spacing bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About AAC Glass Films
            </span>
            <h2 className="mt-3 mb-6">
              Your Trusted Partner for Glass Film Solutions in Hyderabad
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At AAC Glass Films, we've spent over a decade helping homes, offices, 
                and commercial spaces across Hyderabad and Telangana transform their 
                glass surfaces into works of functional art.
              </p>
              <p>
                Whether you're looking to add privacy to your office, reduce glare 
                in your living room, or enhance the security of your storefront, 
                we have the perfect glass film solution for you. Our team of skilled 
                professionals ensures flawless installation every time.
              </p>
              <p>
                We take pride in using only premium quality materials that are durable, 
                easy to maintain, and designed to last. From decorative films to safety 
                glass films, we offer a complete range of solutions tailored to your needs.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center hover:border-primary/50 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
