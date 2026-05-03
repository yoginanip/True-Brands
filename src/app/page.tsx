import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Results } from "@/components/sections/Results";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 md:pt-0">
        <Hero />
        <ServicesOverview />
        <Results />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
