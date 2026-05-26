import Reveal from "@/components/Reveal";
import Link from "next/link";


export default function Projects() {
  return (
    <section className="py-40 px-6 md:px-16">

      <Reveal>

        <div className="flex flex-col md:flex-row justify-between md:items-end gap-10 mb-20">

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-4">
              Featured Projects
            </p>

            <h2 className="text-5xl md:text-7xl font-light leading-[1]">
              Selected Works
            </h2>

          </div>

          <Link
          href="/projects"
          className="uppercase tracking-[0.2em] text-sm border-b border-black pb-2 w-fit">
            View All Projects
          </Link>

        </div>

      </Reveal>

      <div className="grid md:grid-cols-3 gap-10">

        {[1, 2, 3].map((item) => (

          <Reveal key={item}>

            <div className="group cursor-pointer">

              <div className="overflow-hidden mb-6">

                <div className="aspect-[4/5] bg-[#d7d0c5] transition duration-700 group-hover:scale-105" />

              </div>

              <h3 className="text-3xl font-light mb-3">
                Modern Residence
              </h3>

              <p className="text-neutral-600">
                Chandigarh, India
              </p>

            </div>

          </Reveal>

        ))}

      </div>

    </section>
  );
}