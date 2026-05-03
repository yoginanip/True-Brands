"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Shield, Clock } from "lucide-react";

const perks = [
  "No long-term contracts",
  "Transparent monthly reporting",
  "Results in 90 days or your money back",
];

const stats = [
  { icon: Zap,    value: "ROI-First",    label: "Every Strategy" },
  { icon: Shield, value: "100%",         label: "Transparent" },
  { icon: Clock,  value: "90-Day",       label: "Results Promise" },
];

export const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden border border-white/8"
        >
          <div className="absolute inset-0 bg-[#0D141C]" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-purple/15" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-purple/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />

          <div className="relative z-10 p-6 sm:p-10 md:p-16 lg:p-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

              {/* Left: Text & CTAs */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-yellow text-sm font-semibold mb-8">
                  <Zap size={14} className="fill-accent-yellow" />
                  Taking on new clients now
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Ready to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-yellow">
                    Scale Your Brand
                  </span>
                  ?
                </h2>

                <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl lg:max-w-none">
                  Let&apos;s build a digital presence that actually drives revenue — not just impressions. Book a free strategy call and we&apos;ll show you exactly how.
                </p>

                <ul className="flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 mb-10">
                  {perks.map((perk, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                      <CheckCircle2 size={15} className="text-accent shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/contact"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-accent hover:bg-accent/90 text-white font-bold text-lg shadow-[0_0_40px_rgba(255,77,41,0.4)] hover:shadow-[0_0_60px_rgba(255,77,41,0.6)] transition-all duration-300"
                  >
                    Book a Free Strategy Call
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-gray-300 hover:border-white/40 hover:text-white hover:bg-white/5 font-semibold text-lg transition-all duration-300"
                  >
                    Talk to Us First
                  </Link>
                </div>

                <p className="text-gray-500 text-sm mt-8 flex items-center justify-center lg:justify-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  We typically reply within 2 business hours
                </p>
              </div>

              <div className="w-full lg:w-auto shrink-0 mt-8 lg:mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-5">
                  {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={i}
                        className="bg-white/5 border border-white/8 rounded-2xl p-5 lg:p-7 text-center lg:min-w-[180px] hover:border-accent/30 hover:bg-white/8 transition-all duration-300"
                      >
                        <Icon className="w-6 h-6 text-accent mx-auto mb-3" />
                        <div className="text-2xl lg:text-3xl font-black text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs lg:text-sm text-accent-yellow font-bold uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
