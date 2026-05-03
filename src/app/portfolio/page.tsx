import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Approach & Portfolio | TrueBrands",
  description: "See how TrueBrands approaches digital marketing challenges — strategy, execution, and the results our methodology is designed to deliver.",
};

const caseStudies = [
  {
    id: "techflow",
    num: "01",
    client: "SaaS Growth Play",
    category: "Web Dev & SEO",
    accent: "#22D3EE",
    accentFaded: "rgba(34,211,238,0.08)",
    accentBorder: "rgba(34,211,238,0.15)",
    problem: "Outdated website with poor conversion rate and low organic visibility — a challenge common in B2B SaaS.",
    solution: "Complete website redesign with Next.js, paired with a comprehensive SEO content strategy targeting high-intent keywords.",
    results: [
      { metric: "+200%", label: "Organic Traffic" },
      { metric: "4x",    label: "Conversion Lift" },
      { metric: "<1.5s", label: "Page Load Time" },
    ],
  },
  {
    id: "bloom",
    num: "02",
    client: "E-commerce Scale-Up",
    category: "Performance Ads",
    accent: "#FF4D29",
    accentFaded: "rgba(255,77,41,0.08)",
    accentBorder: "rgba(255,77,41,0.15)",
    problem: "High Customer Acquisition Cost eating into profit margins — a classic challenge with unoptimised Meta campaigns.",
    solution: "Robust pixel tracking, UGC-style ad creatives, and restructured audience segmentation for drastically lower CPAs.",
    results: [
      { metric: "50%",   label: "CAC Reduction" },
      { metric: "3x+",   label: "ROAS Potential" },
      { metric: "+120%", label: "Revenue Upside" },
    ],
  },
  {
    id: "nexus",
    num: "03",
    client: "Finance Brand Rebrand",
    category: "Branding & Web",
    accent: "#A78BFA",
    accentFaded: "rgba(167,139,250,0.08)",
    accentBorder: "rgba(167,139,250,0.15)",
    problem: "Legacy brand identity failing to attract younger, digital-native audiences and investors.",
    solution: "Full rebrand — new visual identity, tone of voice, and a modern mobile-first web experience that speaks to the audience.",
    results: [
      { metric: "2x",      label: "Engagement Rate" },
      { metric: "-35%",    label: "Bounce Rate" },
      { metric: "Premium", label: "Perception" },
    ],
  },
  {
    id: "elevate",
    num: "04",
    client: "Fitness & Wellness Brand",
    category: "Social Media",
    accent: "#F472B6",
    accentFaded: "rgba(244,114,182,0.08)",
    accentBorder: "rgba(244,114,182,0.15)",
    problem: "Stagnant follower growth and low engagement — the content wasn't connecting with the community.",
    solution: "Community-first content strategy: short-form video, weekly challenges, and micro-influencer partnerships.",
    results: [
      { metric: "5x",   label: "Engagement" },
      { metric: "+10k", label: "Follower Growth" },
      { metric: "+60%", label: "Lead Generation" },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute -top-10 right-1/4 w-[500px] h-[400px] bg-violet-500/8 blur-[140px] rounded-full -z-10 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl">

          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-semibold mb-6 uppercase tracking-widest">
              Strategic Thinking in Action
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">Our Approach</h1>
            <p className="text-gray-400 text-base leading-relaxed max-w-lg mx-auto">
              Real frameworks we apply to real business challenges — and the kind of outcomes they&apos;re designed to unlock.
            </p>
          </div>

          {/* Case Studies */}
          <div className="space-y-6">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                style={{ borderColor: study.accentBorder, background: study.accentFaded }}
                className="group rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-7 pt-6 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-4xl font-black select-none leading-none"
                      style={{ color: study.accent, opacity: 0.25 }}
                    >
                      {study.num}
                    </span>
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">{study.client}</h3>
                      <span
                        className="text-xs font-bold uppercase tracking-widest mt-0.5 block"
                        style={{ color: study.accent }}
                      >
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Result pills */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex gap-2 sm:gap-3 flex-wrap">
                    {study.results.map((r, i) => (
                      <div key={i} className="text-center px-4 py-2 rounded-xl bg-white/5 border border-white/8">
                        <div className="text-base font-black text-white">{r.metric}</div>
                        <div className="text-[10px] text-gray-500 font-medium mt-0.5 uppercase tracking-wider">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Body: challenge + solution */}
                <div className="grid sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
                  <div className="px-7 py-5">
                    <p
                      className="text-[10px] font-black uppercase tracking-widest mb-2"
                      style={{ color: study.accent, opacity: 0.7 }}
                    >
                      The Challenge
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">{study.problem}</p>
                  </div>
                  <div className="px-7 py-5">
                    <p
                      className="text-[10px] font-black uppercase tracking-widest mb-2"
                      style={{ color: study.accent, opacity: 0.7 }}
                    >
                      Our Solution
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 bg-white/[0.03] border border-white/8 rounded-2xl px-8 py-6">
            <div>
              <p className="font-bold text-white text-lg">Ready to apply this thinking to your brand?</p>
              <p className="text-sm text-gray-400 mt-1">Let&apos;s build a custom strategy tailored to your specific goals.</p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-[#0D141C] font-bold text-sm transition-all duration-300 whitespace-nowrap"
            >
              Let&apos;s Talk <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  );
}
