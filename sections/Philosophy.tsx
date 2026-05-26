import Reveal from "@/components/Reveal";

export default function Philosophy() {
  return (
    <section className="py-40 px-6 md:px-16">

      <Reveal>

        <div className="grid md:grid-cols-2 gap-20">

          <div>

            <p className="uppercase tracking-[0.3em] text-sm mb-6 text-neutral-500">
              Philosophy
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-[1.1]">
              Designing environments that balance emotion, material, and light.
            </h2>

          </div>

          <div className="flex items-end">

            <p className="text-lg leading-relaxed text-neutral-700 max-w-xl">
              Every interior should feel intentional and emotionally grounded.
              We combine architectural discipline with warm material palettes
              and refined spatial composition to create timeless experiences.
            </p>

          </div>

        </div>

      </Reveal>

    </section>
  );
}