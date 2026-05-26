import Link from "next/link";
export default function Contact() {
  return (
    <section className="py-40 px-6 md:px-16 text-center">

      <p className="uppercase tracking-[0.3em] text-sm mb-6">
        Start Your Project
      </p>

      <h2 className="text-5xl md:text-7xl font-light leading-tight max-w-4xl mx-auto">
        Let’s create spaces that feel meaningful, calm, and timeless.
      </h2>

      <div className="mt-5">
  <Link
    href="/contact"
    className="inline-block bg-black text-white px-10 py-5 uppercase tracking-[0.2em] text-sm"
  >
    Contact Us
  </Link>
</div>

    </section>
  );
}