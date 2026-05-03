"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] opacity-70" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[128px] opacity-70" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Premium Digital Marketing Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            We Build & Scale <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-yellow">
              Digital Brands
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Transform your online presence with data-driven SEO, high-converting performance marketing, and stunning web design. Built for ambitious brands ready to dominate their market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-accent/90 text-white font-bold text-lg shadow-[0_0_30px_rgba(255,77,41,0.35)] hover:shadow-[0_0_50px_rgba(255,77,41,0.55)] transition-all duration-300">
              Book a Free Strategy Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-gray-300 hover:border-white/40 hover:text-white hover:bg-white/5 font-semibold text-lg transition-all duration-300">
              See Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex text-yellow-400 gap-0.5 mb-2">
                {[1,2,3,4,5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm text-gray-400 font-medium">
                Premium quality · ROI-first strategy · Full transparency
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
