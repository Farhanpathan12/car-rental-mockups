import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import InfiniteDifference from "@/components/InfiniteDifference";
import ValueProp from "@/components/ValueProp";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesGrid from "@/components/ServicesGrid";
import FleetShowcase from "@/components/FleetShowcase";
import ProcessSteps from "@/components/ProcessSteps";
import AirportGuide from "@/components/AirportGuide";
import Testimonials from "@/components/Testimonials";
import ServiceAreasCTA from "@/components/ServiceAreasCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-gold/30 selection:text-gold overflow-hidden">
      <Navbar />
      <Hero />
      <StatsBanner />
      <InfiniteDifference />
      <ValueProp />
      <WhyChooseUs />
      <ServicesGrid />
      <FleetShowcase />
      <ProcessSteps />
      <AirportGuide />
      <Testimonials />
      <ServiceAreasCTA />
      <Footer />
    </main>
  );
}
