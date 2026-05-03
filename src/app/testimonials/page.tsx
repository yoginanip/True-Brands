import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Star, Quote, Play } from "lucide-react";

export const metadata = {
  title: "Client Testimonials | TrueBrands",
  description: "Read what our clients have to say about partnering with TrueBrands to scale their digital presence.",
};

const allTestimonials = [
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
  },
  {
    name: "James Wilson",
    role: "CEO, Nexus Finance",
    image: "https://i.pravatar.cc/150?img=33",
    content: "The rebrand they did for us was nothing short of spectacular. We've received endless compliments from our users, and it directly contributed to our recent Series B funding round."
  },
  {
    name: "Olivia Martinez",
    role: "E-commerce Manager, Luxe",
    image: "https://i.pravatar.cc/150?img=44",
    content: "Our ROAS was hovering around 1.5x before TrueBrands took over. Within two months, they completely revamped our creative strategy and got us to 4x ROAS consistently."
  },
  {
    name: "Daniel Lee",
    role: "Founder, Elevate",
    image: "https://i.pravatar.cc/150?img=68",
    content: "Their SEO expertise is legitimate. They don't just do basic on-page stuff; they built a content engine that now brings us thousands of targeted organic visitors every month."
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Client Love</h1>
            <p className="text-lg text-muted-foreground">
              Don&apos;t just take our word for it. Here&apos;s what happens when you partner with TrueBrands.
            </p>
          </div>

          {/* Featured Video Testimonial Placeholder */}
          <div className="mb-24">
            <div className="relative rounded-3xl overflow-hidden aspect-video bg-muted group cursor-pointer max-w-4xl mx-auto border border-border shadow-2xl shadow-accent/5">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80" 
                alt="Video Testimonial" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-accent/90 text-white flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-lg shadow-accent/20">
                  <Play size={32} fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-2xl font-bold mb-2">How TrueBrands helped TechFlow scale from $1M to $5M ARR</h3>
                <p className="text-white/80">Sarah Johnson, CMO at TechFlow</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <div key={index} className="glass p-8 rounded-2xl relative flex flex-col h-full border border-border hover:border-accent/30 transition-colors">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/10 rotate-180" />
                <div className="flex text-yellow-400 gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-8 relative z-10 flex-grow">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-4 mt-auto">
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
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  );
}
