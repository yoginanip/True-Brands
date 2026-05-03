"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Globe, PenTool, Search, Smartphone } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO Optimization",
    description: "Dominate search rankings and drive organic traffic with our data-driven SEO strategies.",
    link: "/services#seo"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Performance Ads",
    description: "Maximize ROI with highly targeted campaigns across Google, Meta, and TikTok.",
    link: "/services#performance"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Development",
    description: "Custom, lightning-fast websites designed to convert visitors into loyal customers.",
    link: "/services#web"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Social Media",
    description: "Engage your audience and build brand awareness with compelling social content.",
    link: "/services#social"
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Branding & Design",
    description: "Create a memorable brand identity that resonates with your target market.",
    link: "/services#branding"
  }
];

export const ServicesOverview = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Core Services</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive digital marketing solutions designed to scale your business and outpace the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A2332] border border-white/5 p-8 rounded-2xl group hover:border-accent/50 hover:bg-[#1E293B] transition-all shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="inline-flex items-center text-accent font-medium hover:text-accent/80 transition-colors"
              >
                Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
