import Link from "next/link";

import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "Kitchen Design",
    location: "Chandigarh, India",
    slug: "kitchen-design",
  },
  {
    title: "Luxury Bathroom",
    location: "Mohali, India",
    slug: "luxury-bathroom",
  },
  {
    title: "Living Room",
    location: "Delhi, India",
    slug: "living-room",
  },
  {
    title: "Bedroom Interior",
    location: "Ludhiana, India",
    slug: "bedroom-interior",
  },
  {
    title: "Modern Residence",
    location: "Panchkula, India",
    slug: "modern-residence",
  },
  {
    title: "Minimal Villa",
    location: "Jaipur, India",
    slug: "minimal-villa",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#f5f1eb] text-[#1a1a1a] min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 px-6 md:px-16">

        <Reveal>

          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
            Projects
          </p>

          <h1 className="text-5xl md:text-8xl font-light leading-[1] max-w-5xl mb-20">
            Selected architectural and interior works.
          </h1>

        </Reveal>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <Reveal key={index}>

              <Link
                href={`/projects/${project.slug}`}
                className="group block cursor-pointer"
              >

                {/* IMAGE */}
                <div className="overflow-hidden mb-6">

                  <div className="aspect-[4/5] bg-[#d7d0c5] transition duration-700 group-hover:scale-105" />

                </div>

                {/* CONTENT */}
                <div>

                  <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-3">
                    0{index + 1}
                  </p>

                  <h3 className="text-3xl font-light mb-3 transition duration-300 group-hover:opacity-60">
                    {project.title}
                  </h3>

                  <p className="text-neutral-600">
                    {project.location}
                  </p>

                </div>

              </Link>

            </Reveal>

          ))}

        </div>

      </section>

      <Footer />

    </main>
  );
}