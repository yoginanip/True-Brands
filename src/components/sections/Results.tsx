"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Target, Clock } from "lucide-react";

const pillars = [
  {
    icon: Target,
    value: "ROI-First",
    label: "Every Strategy We Build",
    color: "from-accent to-accent-yellow"
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Transparent Reporting",
    color: "from-accent-yellow to-amber-400"
  },
  {
    icon: Zap,
    value: "48hr",
    label: "Kickoff After Onboarding",
    color: "from-accent-purple to-accent"
  },
  {
    icon: Clock,
    value: "90-Day",
    label: "First Results Guarantee",
    color: "from-accent to-accent-purple"
  }
];

export const Results = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-1/4 w-full h-full bg-accent blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 -right-1/4 w-full h-full bg-accent-purple blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Deliver Results</h2>
          <p className="text-gray-400 text-lg">
            We don&apos;t promise vanity metrics. Every engagement is built on clear commitments, hard data, and measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5 group-hover:border-accent/30 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <div className={`text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r ${pillar.color}`}>
                  {pillar.value}
                </div>
                <div className="text-gray-400 text-sm font-medium leading-snug">{pillar.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
