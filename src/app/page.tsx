import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";     


const About = dynamic(() => import("@/components/About"));
const Services = dynamic(() => import("@/components/Services"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const Location = dynamic(() => import("@/components/Location"));
const CtaSection = dynamic(() => import("@/components/CtaSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Location />
      <CtaSection />
      <Footer />
    </main>
  );
}