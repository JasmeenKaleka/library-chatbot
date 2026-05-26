import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#f5f1eb] text-[#1a1a1a] min-h-screen">

      <Navbar />

      <section className="pt-40 pb-24 px-6 md:px-16">

        <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
          About Us
        </p>

        <h1 className="text-5xl md:text-8xl font-light leading-[1] max-w-5xl mb-12">
          Designing spaces with timeless architectural clarity.
        </h1>

        <div className="grid md:grid-cols-2 gap-16 mt-24">

          <div className="aspect-[4/5] bg-[#d7d0c5]" />

          <div className="flex flex-col justify-center">

            <p className="text-lg leading-relaxed text-neutral-700 mb-8">
              Gurbani Interiors creates refined architectural and interior
              environments focused on warmth, proportion, and timeless
              spatial experiences.
            </p>

            <p className="text-lg leading-relaxed text-neutral-700">
              Our process combines material sensitivity, minimal composition,
              and modern functionality to craft spaces that feel calm,
              luxurious, and emotionally grounded.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}