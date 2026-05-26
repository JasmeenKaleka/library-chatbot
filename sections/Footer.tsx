export default function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 md:px-16 py-10">

      <div className="flex flex-col md:flex-row justify-between gap-10">

        <div>
          <h3 className="text-2xl font-light mb-4">
            Gurbani Interiors
          </h3>

          <p className="text-neutral-600 max-w-sm">
            Architecture and interior design experiences crafted with timeless elegance.
          </p>
        </div>

        <div className="flex gap-10 uppercase tracking-[0.2em] text-sm">
          <a href="#">Instagram</a>
          <a href="#">Behance</a>
          <a href="#">LinkedIn</a>
        </div>

      </div>

    </footer>
  );
}