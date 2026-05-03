import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Users, Target, Zap, Award, BarChart3, Clock, Globe, Shield, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us | TrueBrands",
  description: "Learn about TrueBrands, our mission, values, and approach to digital marketing.",
};

const process = [
  { step: "01", title: "Discovery & Audit",    desc: "We start with a deep dive into your brand, market, competitors, and current digital footprint. No assumptions — only data." },
  { step: "02", title: "Strategy & Planning",  desc: "We build a custom growth roadmap tailored to your business goals, budget, and timeline. Clear KPIs from day one." },
  { step: "03", title: "Execute & Launch",     desc: "Our specialists execute across every channel — SEO, ads, social, web — with precision and speed. We move fast, without cutting corners." },
  { step: "04", title: "Measure & Optimise",   desc: "Every campaign is monitored daily. We report transparently, iterate based on data, and compound your results month over month." },
];

const values = [
  { icon: BarChart3, title: "Data Over Gut",        desc: "Every decision we make is backed by numbers, not opinions." },
  { icon: Clock,     title: "Speed to Market",       desc: "We test fast, learn fast, and execute faster than the competition." },
  { icon: Shield,    title: "Radical Transparency",  desc: "You always know exactly what we're doing and why — no black boxes." },
  { icon: Globe,     title: "Global Thinking",       desc: "Strategies inspired by the world's best, built for your local market." },
  { icon: Award,     title: "Excellence First",      desc: "We never settle for 'good enough'. Premium output is our minimum standard." },
  { icon: Users,     title: "Aligned Incentives",    desc: "We succeed only when you do. Your growth is our growth, always." },
];

const whyUs = [
  { icon: Users,  title: "Dedicated Team",   desc: "A specialized squad focused entirely on your growth — not spread thin across hundreds of accounts." },
  { icon: Target, title: "Data-Driven",      desc: "No guesswork. Every decision backed by hard data, analytics, and real market signals." },
  { icon: Zap,    title: "Fast Execution",   desc: "We move quickly, testing and iterating strategies to find winners before the market changes." },
];

const promises = [
  "No lock-in contracts — stay because results keep you",
  "Monthly reporting with real metrics, not vanity numbers",
  "Direct access to your dedicated strategist — no middlemen",
  "First results visible within the first 90 days",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-accent/8 blur-[150px] rounded-full -z-10 pointer-events-none" />

        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2332] border border-white/10 text-accent font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Who We Are
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">We Are TrueBrands</h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              A team of growth specialists, designers, and strategists with one mission: to build and scale digital brands that dominate their markets. We combine creative excellence with relentless data discipline.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <div className="group p-8 rounded-3xl bg-[#1A2332]/50 border border-white/5 hover:border-accent/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To empower ambitious businesses with data-driven strategies and world-class digital experiences that create measurable, scalable revenue growth — not just traffic.
              </p>
            </div>
            <div className="group p-8 rounded-3xl bg-[#1A2332]/50 border border-white/5 hover:border-accent-yellow/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-accent-yellow/10 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-accent-yellow" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To become the go-to partner for brands that want to grow with integrity — where great products find the audiences they deserve through smart, ethical digital marketing.
              </p>
            </div>
          </div>

          {/* How We Work — replaces Team */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">How We Work</h2>
              <p className="text-gray-400">Our proven 4-step framework, applied to every engagement.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {process.map((p, i) => (
                <div key={i} className="flex gap-6 p-7 bg-[#1A2332]/50 border border-white/5 rounded-2xl hover:border-accent/30 transition-all duration-300 group">
                  <span className="text-5xl font-black text-white/5 group-hover:text-accent/20 transition-colors leading-none shrink-0 select-none">
                    {p.step}
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">{p.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Core Values</h2>
              <p className="text-gray-400">The principles that guide every decision we make.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="group flex gap-5 p-6 bg-[#1A2332]/40 border border-white/5 rounded-2xl hover:border-accent/30 hover:bg-[#1A2332]/60 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{v.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Our Promise */}
          <div className="mb-20 bg-[#1A2332]/40 border border-white/5 rounded-3xl p-10 md:p-14">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-3">Our Promise to You</h2>
              <p className="text-gray-400">We hold ourselves accountable to these commitments — not because we have to, but because it&apos;s the right way to do business.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {promises.map((promise, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#0D141C]/50 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm leading-relaxed">{promise}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-4 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-white">Why Choose TrueBrands?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {whyUs.map((w, i) => {
                const Icon = w.icon;
                return (
                  <div key={i} className="p-6 bg-[#1A2332]/40 border border-white/5 rounded-2xl hover:border-accent/30 transition-all duration-300">
                    <div className="w-14 h-14 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="text-accent w-7 h-7" />
                    </div>
                    <h4 className="font-bold mb-2 text-white">{w.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{w.desc}</p>
                  </div>
                );
              })}
            </div>
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
