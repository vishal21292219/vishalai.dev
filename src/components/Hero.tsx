"use client";

export default function Hero() {
  return (
    <section className="w-full py-32 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Vishal Kumar
        </h1>

        <p className="mt-6 text-xl text-slate-300 max-w-2xl">
          Tech Architect • Platform Engineer • Backend Specialist • System Designer
        </p>

        <p className="mt-4 text-slate-400 max-w-3xl">
          Designing scalable systems, secure platforms, and production-grade architectures.
          Focused on distributed systems, APIs, cloud infrastructure, and enterprise platforms.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/projects"
            className="px-7 py-3 rounded-xl bg-white text-black font-semibold hover:bg-slate-200 transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
