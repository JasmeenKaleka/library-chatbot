"use client";

import { useEffect, useState } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#f5f1eb]/90 backdrop-blur-md border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-16 py-6">

        <div className="text-xl tracking-[0.3em] uppercase font-light">
          Gurbani Interiors
        </div>

<nav className="hidden md:flex gap-10 text-sm tracking-[0.2em] uppercase">

  <a href="/" className="hover:opacity-60 transition">
    Home
  </a>

  <a href="/projects" className="hover:opacity-60 transition">
    Projects
  </a>

  <a href="/about" className="hover:opacity-60 transition">
    About
  </a>

  <a href="/services" className="hover:opacity-60 transition">
    Services
  </a>

  <a href="/contact" className="hover:opacity-60 transition">
    Contact
  </a>

</nav>

      </div>
    </header>
  );
}