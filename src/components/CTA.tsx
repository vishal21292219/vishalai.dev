export default function CTA() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Let’s Build Something Serious</h2>
        <p className="mt-4 text-gray-400">
          Architecture, engineering, platforms, and systems that scale.
        </p>

        <div className="mt-8 flex justify-center">
          {/* Instagram Button */}
          <a
            href="https://instagram.com/vishaal.gopu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-black transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
