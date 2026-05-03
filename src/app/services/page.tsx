import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Services | TrueBrands",
  description: "Comprehensive digital marketing services — SEO, Performance Ads, Web Development, Social Media, and Branding.",
};

const servicesList = [
  {
    id: "seo",
    num: "01",
    title: "SEO Optimization",
    tag: "Organic Growth",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    description: "Dominate search rankings and capture high-intent organic traffic with strategies that compound month over month. We audit, fix, and scale your search presence.",
    benefits: [
      "Keyword & competitor deep-dive",
      "On-page & technical SEO fixes",
      "High-authority link building",
      "Local SEO & Google Business",
    ],
    accent: "#F59E0B",
  },
  {
    id: "performance",
    num: "02",
    title: "Performance Marketing",
    tag: "Paid Acquisition",
    tagColor: "text-accent bg-accent/10 border-accent/20",
    description: "Turn ad spend into predictable revenue. We run ROI-obsessed campaigns across Google, Meta, and TikTok — with transparent reporting and continuous optimisation.",
    benefits: [
      "Google Ads & PPC management",
      "Meta & TikTok ad campaigns",
      "Retargeting & lookalike audiences",
      "CRO & landing page optimisation",
    ],
    accent: "#FF4D29",
  },
  {
    id: "web",
    title: "Web Development",
    num: "03",
    tag: "Digital Infrastructure",
    tagColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    description: "Your website is your best salesperson. We build fast, beautiful sites engineered to convert visitors into customers — from landing pages to full e-commerce builds.",
    benefits: [
      "Custom Next.js / React development",
      "E-commerce & Shopify solutions",
      "Mobile-first responsive design",
      "Speed & Core Web Vitals",
    ],
    accent: "#22D3EE",
  },
  {
    id: "social",
    num: "04",
    title: "Social Media",
    tag: "Brand Presence",
    tagColor: "text-pink-400 bg-pink-400/10 border-pink-400/20",
    description: "Build a loyal community and brand authority with content that actually connects. We handle strategy, creation, scheduling, and community engagement.",
    benefits: [
      "Content strategy & calendar",
      "Short-form video production",
      "Community management",
      "Influencer partnerships",
    ],
    accent: "#F472B6",
  },
  {
    id: "branding",
    num: "05",
    title: "Branding & Design",
    tag: "Brand Identity",
    tagColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    description: "Stand out with a brand identity that commands attention and builds trust. From logo to full design system — we craft visuals that communicate your unique value.",
    benefits: [
      "Logo & visual identity",
      "UI / UX design",
      "Marketing collateral",
      "Brand style guidelines",
    ],
    accent: "#A78BFA",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent/8 blur-[140px] rounded-full -z-10 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl">

          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-semibold mb-6 uppercase tracking-widest">
              What We Do
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">Our Expertise</h1>
            <p className="text-gray-400 text-base leading-relaxed max-w-lg mx-auto">
              End-to-end digital growth — from organic to paid, design to development. Every service tied to one goal: your revenue.
            </p>
          </div>

          {/* Services — numbered rows */}
          <div className="divide-y divide-white/5">
            {servicesList.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-0 md:gap-8 py-10 hover:bg-white/[0.02] -mx-6 px-6 rounded-xl transition-colors duration-300"
              >
                {/* Number */}
                <div className="hidden md:flex items-start pt-1">
                  <span
                    className="text-5xl font-black leading-none select-none"
                    style={{ color: service.accent, opacity: 0.18 }}
                  >
                    {service.num}
                  </span>
                </div>

                {/* Left: Title + Description */}
                <div className="mb-6 md:mb-0">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${service.tagColor}`}>
                      {service.tag}
                    </span>
                    <span className="text-gray-600 text-xs font-mono md:hidden">{service.num}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3">{service.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  <Link
                    href="/contact"
                    className="group/btn mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    Get started
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Right: Benefits */}
                <div className="grid grid-cols-1 gap-2.5">
                  {service.benefits.map((b, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-400 py-2.5 px-3 rounded-lg bg-white/[0.03] border border-white/5 group-hover:border-white/8 transition-colors"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: service.accent, opacity: 0.7 }}
                      />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-5 bg-white/[0.03] border border-white/8 rounded-2xl px-8 py-6">
            <div>
              <p className="font-bold text-white text-lg">Not sure where to start?</p>
              <p className="text-sm text-gray-400 mt-1">Book a free 30-min strategy call — we&apos;ll tell you exactly what would move the needle for your business.</p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-bold text-sm shadow-[0_0_25px_rgba(255,77,41,0.35)] hover:shadow-[0_0_40px_rgba(255,77,41,0.5)] transition-all duration-300 whitespace-nowrap"
            >
              Book Free Call <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-24">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  );
}
