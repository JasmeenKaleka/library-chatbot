"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 md:px-16 pt-32">

      <div className="grid md:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT CONTENT */}
        <div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[0.3em] text-sm mb-6"
          >
            Architecture & Interior Design
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl leading-[0.95] font-light"
          >
            Spaces That
            <br />
            Feel Timeless
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-700"
          >
            Luxury interiors designed with spatial harmony, warm minimalism,
            and architectural precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex gap-4"
          >
            <Link
              href="/projects"
              className="bg-black text-white px-8 py-4 uppercase tracking-[0.2em] text-sm"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="border border-black px-8 py-4 uppercase tracking-[0.2em] text-sm"
            >
              Contact
            </Link>
          </motion.div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">

          <div className="aspect-[4/5] bg-[#d9d2c7] rounded-sm" />

          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#c2b8aa]" />

        </div>

      </div>

    </section>
  );
}