import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Philosophy from "@/sections/Philosophy";
import Portfolio from "@/sections/Portfolio";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="bg-[#f5f1eb] text-[#1a1a1a] overflow-hidden">
      <Navbar />
      <Hero />
      <Philosophy />
      <Portfolio />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}