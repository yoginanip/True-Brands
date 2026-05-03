"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Send, Zap, Shield, Clock } from "lucide-react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1500);
  };

  const contactDetails = [
    { icon: Mail,   label: "Email Us",   sub: "We reply within 2 hours",  value: "truebrands@gmail.com",  href: "mailto:truebrands@gmail.com" },
    { icon: Phone,  label: "Call Us",    sub: "Mon–Fri, 9am–6pm IST",     value: "+91 91549 50171",           href: "tel:+919154950171" },
    { icon: MapPin, label: "Find Us",    sub: "Drop by anytime",          value: "Hyderabad, India",          href: "#" },
  ];

  const trustBadges = [
    { icon: Zap,    label: "Fast Response",  sub: "2-hr reply guarantee" },
    { icon: Shield, label: "Confidential",   sub: "Your data stays private" },
    { icon: Clock,  label: "Quick Kickoff",  sub: "Start within 48 hours" },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-accent/8 blur-[150px] rounded-full -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-[400px] bg-accent-purple/10 blur-[130px] rounded-full -z-10 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2332] border border-white/10 text-accent-yellow font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse" />
              Let&apos;s Connect
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Let&apos;s Build Together</h1>
            <p className="text-lg text-gray-400">
              Ready to scale your brand? Drop us a line and our team will get back to you within 2 hours.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
            {trustBadges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div key={i} className="flex items-center gap-4 bg-[#1A2332]/50 border border-white/5 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{badge.label}</p>
                    <p className="text-gray-500 text-xs">{badge.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Left: Info Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              {contactDetails.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a key={i} href={item.href} className="group flex items-center gap-5 bg-[#1A2332]/40 backdrop-blur-md border border-white/5 hover:border-accent/30 rounded-2xl p-6 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-[#0D141C] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent/30 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{item.label}</p>
                      <p className="text-xs text-gray-500 mb-1">{item.sub}</p>
                      <p className="font-semibold text-white group-hover:text-accent transition-colors">{item.value}</p>
                    </div>
                  </a>
                );
              })}

              {/* Decorative Visual */}
              <div className="relative bg-[#1A2332]/40 border border-white/5 rounded-2xl p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-purple/10" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <p className="text-3xl font-black text-white mb-2">150+</p>
                  <p className="text-accent font-bold mb-4">Brands Scaled</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    From D2C startups to enterprise clients, we&apos;ve helped brands across every industry unlock digital growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-3 bg-[#1A2332]/50 backdrop-blur-md rounded-3xl border border-white/5 p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
              <p className="text-gray-500 mb-10 text-sm">Fill in the details below and we&apos;ll get back to you ASAP.</p>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6">
                    <Send className="w-9 h-9 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-gray-400 max-w-sm">Thank you! Our team will be in touch with you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                      <input
                        type="text" id="name" name="name" value={formData.name}
                        onChange={handleChange} required placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#0D141C] text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                      <input
                        type="email" id="email" name="email" value={formData.email}
                        onChange={handleChange} required placeholder="john@company.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#0D141C] text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-300">Company <span className="text-gray-600">(Optional)</span></label>
                      <input
                        type="text" id="company" name="company" value={formData.company}
                        onChange={handleChange} placeholder="Your Company"
                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#0D141C] text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-gray-300">Service Interested In</label>
                      <select
                        id="service" name="service" value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#0D141C] text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all appearance-none"
                      >
                        <option value="" className="bg-[#0D141C]">Select a service...</option>
                        <option value="seo" className="bg-[#0D141C]">SEO Optimization</option>
                        <option value="ads" className="bg-[#0D141C]">Performance Ads</option>
                        <option value="web" className="bg-[#0D141C]">Web Development</option>
                        <option value="social" className="bg-[#0D141C]">Social Media</option>
                        <option value="branding" className="bg-[#0D141C]">Branding & Design</option>
                        <option value="full" className="bg-[#0D141C]">Full Growth Package</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Your Message</label>
                    <textarea
                      id="message" name="message" value={formData.message}
                      onChange={handleChange} required rows={5}
                      placeholder="Tell us about your project goals, budget range, and timeline..."
                      className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#0D141C] text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-accent hover:bg-accent/90 disabled:opacity-60 text-white font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_30px_rgba(255,77,41,0.3)] hover:shadow-[0_0_50px_rgba(255,77,41,0.5)]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3"><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</span>
                    ) : (
                      <><Send size={20} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* WhatsApp Floating Button — Real Icon */}
        <a
          href="https://wa.me/919154950171"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:scale-110 hover:shadow-[#25D366]/50 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon />
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-[#0D141C] rounded-full animate-pulse" />
        </a>
      </main>
      <Footer />
    </>
  );
}
