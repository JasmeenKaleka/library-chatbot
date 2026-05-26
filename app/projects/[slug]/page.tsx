import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

const projects = {
  "kitchen-design": {
    title: "Kitchen Design",
    location: "Chandigarh, India",
    description:
      "Warm architectural kitchen environments designed with timeless material palettes and spatial harmony.",
  },

  "luxury-bathroom": {
    title: "Luxury Bathroom",
    location: "Mohali, India",
    description:
      "Minimal bathroom interiors focused on texture, lighting, and calm visual rhythm.",
  },

  "living-room": {
    title: "Living Room",
    location: "Delhi, India",
    description:
      "Open living environments designed for emotional warmth and refined daily experiences.",
  },

  "bedroom-interior": {
    title: "Bedroom Interior",
    location: "Ludhiana, India",
    description:
      "Private spaces crafted to feel soft, quiet, and architecturally timeless.",
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const project =
    projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl">
        Project not found.
      </div>
    );
  }

  return (
    <main className="bg-[#f5f1eb] text-[#1a1a1a] min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="pt-40 px-6 md:px-16 pb-24">

        <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
          {project.location}
        </p>

        <h1 className="text-5xl md:text-8xl font-light leading-[1] max-w-5xl mb-16">
          {project.title}
        </h1>

        <div className="aspect-[16/9] bg-[#d7d0c5]" />

      </section>

      {/* DESCRIPTION */}
      <section className="px-6 md:px-16 py-32">

        <div className="grid md:grid-cols-2 gap-20">

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
              Project Overview
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-tight">
              Timeless architectural experiences crafted through material,
              light, and spatial rhythm.
            </h2>

          </div>

          <div>

            <p className="text-lg leading-relaxed text-neutral-700">
              {project.description}
            </p>

          </div>

        </div>

      </section>

      {/* GALLERY PLACEHOLDERS */}
      <section className="px-6 md:px-16 pb-32">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="aspect-[4/5] bg-[#d7d0c5]" />

          <div className="aspect-[4/5] bg-[#d7d0c5]" />

          <div className="aspect-[16/10] bg-[#d7d0c5] md:col-span-2" />

        </div>

      </section>

      <Footer />

    </main>
  );
}