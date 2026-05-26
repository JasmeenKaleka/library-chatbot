"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

const spaces = [
  {
    number: "01",
    title: "Kitchen Design",
    link: "/projects/kitchen-design",
    description:
      "Warm material palettes and clean architectural geometry designed for calm daily living.",
  },
  {
    number: "02",
    title: "Luxury Bathroom",
    link: "/projects/luxury-bathroom",
    description:
      "Minimal compositions crafted with texture, lighting, and spatial balance.",
  },
  {
    number: "03",
    title: "Living Room",
    link: "/projects/living-room",
    description:
      "Open environments focused on emotional warmth and timeless visual rhythm.",
  },
  {
    number: "04",
    title: "Bedroom Interior",
    link: "/projects/bedroom-interior",
    description:
      "Private spaces designed to feel quiet, soft, and architecturally refined.",
  },
];

export default function Portfolio() {
  return (
    <section className="py-40">

      {/* SECTION INTRO */}
      <div className="px-6 md:px-16 mb-24">

        <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
          Spatial Portfolio
        </p>

        <h2 className="text-5xl md:text-7xl font-light leading-[1] max-w-5xl">
          A curated journey through timeless interior experiences.
        </h2>

      </div>

      {/* PORTFOLIO ITEMS */}
      {spaces.map((space, index) => (

        <Reveal key={index}>

          <section className="min-h-screen flex items-center px-6 md:px-16 py-20">

            <div
              className={`grid md:grid-cols-2 gap-20 items-center w-full ${
                index % 2 !== 0
                  ? "md:[&>*:first-child]:order-2"
                  : ""
              }`}
            >

              {/* IMAGE PLACEHOLDER */}
              <div className="relative">

                <div className="aspect-[4/5] w-full bg-[#d7d0c5]" />

                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-black/10" />

              </div>

              {/* TEXT CONTENT */}
              <div>

                <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-4">
                  {space.number}
                </p>

                <h3 className="text-5xl md:text-7xl font-light leading-[1] mb-8">
                  {space.title}
                </h3>

                <p className="text-lg leading-relaxed text-neutral-700 max-w-lg mb-14">
                  {space.description}
                </p>

                <Link
                  href={space.link}
                  className="inline-block uppercase tracking-[0.2em] text-sm border-b border-black pb-2 transition duration-300 hover:opacity-60"
                >
                  Explore Space
                </Link>

              </div>

            </div>

          </section>

        </Reveal>

      ))}

    </section>
  );
}