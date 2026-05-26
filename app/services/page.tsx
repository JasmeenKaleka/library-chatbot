import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

const services = [
  "Interior Design",
  "Architecture Planning",
  "Luxury Residential Design",
  "Commercial Spaces",
  "Furniture & Material Consultation",
  "3D Visualization",
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f5f1eb] text-[#1a1a1a] min-h-screen">

      <Navbar />

      <section className="pt-40 pb-24 px-6 md:px-16">

        <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
          Services
        </p>

        <h1 className="text-5xl md:text-8xl font-light leading-[1] max-w-5xl mb-24">
          Thoughtfully crafted architectural and interior solutions.
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="border border-black/10 p-10 bg-white/40"
            >

              <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
                0{index + 1}
              </p>

              <h3 className="text-3xl font-light leading-tight">
                {service}
              </h3>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </main>
  );
}