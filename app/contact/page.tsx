import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";

export default function ContactPage() {
  return (
    <main className="bg-[#f5f1eb] text-[#1a1a1a] min-h-screen">

      <Navbar />

      <section className="pt-40 pb-24 px-6 md:px-16">

        <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
          Contact
        </p>

        <h1 className="text-5xl md:text-8xl font-light leading-[1] max-w-5xl mb-24">
          Let’s create meaningful architectural experiences together.
        </h1>

        <div className="grid md:grid-cols-2 gap-20">

          <div>

            <div className="mb-10">
              <p className="uppercase tracking-[0.3em] text-sm mb-4 text-neutral-500">
                Email
              </p>

              <p className="text-2xl font-light">
                hello@gurbaniinteriors.com
              </p>
            </div>

            <div className="mb-10">
              <p className="uppercase tracking-[0.3em] text-sm mb-4 text-neutral-500">
                Phone
              </p>

              <p className="text-2xl font-light">
                +91 98765 43210
              </p>
            </div>

            <div>
              <p className="uppercase tracking-[0.3em] text-sm mb-4 text-neutral-500">
                Studio
              </p>

              <p className="text-2xl font-light max-w-md">
                Chandigarh, Punjab, India
              </p>
            </div>

          </div>

          <div className="aspect-[4/5] bg-[#d7d0c5]" />

        </div>

      </section>

      <Footer/>

    </main>
  );
}