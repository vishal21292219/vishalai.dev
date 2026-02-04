export default function ServicesPreview() {
  const services = [
    {
      title: "System Architecture",
      desc: "Designing scalable, secure, and resilient distributed systems",
      color: "bg-blue-50 border-blue-200 text-blue-800",
    },
    {
      title: "Backend Engineering",
      desc: "High-performance APIs, microservices, and data platforms",
      color: "bg-emerald-50 border-emerald-200 text-emerald-800",
    },
    {
      title: "Cloud & DevOps",
      desc: "AWS, CI/CD pipelines, infrastructure automation",
      color: "bg-indigo-50 border-indigo-200 text-indigo-800",
    },
    {
      title: "Platform Engineering",
      desc: "Internal tools, developer platforms, system foundations",
      color: "bg-orange-50 border-orange-200 text-orange-800",
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">What I Do</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border ${s.color} hover:shadow-md transition`}
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
