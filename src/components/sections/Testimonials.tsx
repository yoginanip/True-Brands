"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CMO, TechFlow",
    image: "https://i.pravatar.cc/150?img=47",
    content: "TrueBrands completely transformed our acquisition strategy. We saw a 150% increase in qualified leads within the first 3 months. Their attention to detail and design is unmatched."
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthStack",
    image: "https://i.pravatar.cc/150?img=11",
    content: "The web development team delivered a blazing fast, gorgeous website that actually converts. Our bounce rate dropped by 40% and online sales have doubled."
  },
  {
    name: "Emma Davis",
    role: "Marketing Director, Bloom",
    image: "https://i.pravatar.cc/150?img=5",
    content: "Finding an agency that understands both beautiful design and hard performance metrics is rare. TrueBrands delivers on both fronts flawlessly."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-muted-foreground text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our partners have to say about working with TrueBrands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/10 rotate-180" />
              <div className="flex text-yellow-400 gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-8 relative z-10">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
