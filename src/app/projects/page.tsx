export default function ProjectsPage() {
  const projects = [
    {
      name: "OAuth Platform",
      desc: "Secure authentication platform with AWS migration",
      color: "bg-blue-50 border-blue-200",
      text: "text-blue-900",
    },
    {
      name: "Agent Assist Platform",
      desc: "Enterprise AI-assisted support automation",
      color: "bg-purple-50 border-purple-200",
      text: "text-purple-900",
    },
    {
      name: "Wallet Infrastructure",
      desc: "Scalable fintech wallet onboarding system",
      color: "bg-emerald-50 border-emerald-200",
      text: "text-emerald-900",
    },
    {
      name: "AI Workflow Engine",
      desc: "AI-driven automation orchestration system",
      color: "bg-indigo-50 border-indigo-200",
      text: "text-indigo-900",
    },
    {
      name: "Distributed Event Platform",
      desc: "High-throughput event processing system",
      color: "bg-orange-50 border-orange-200",
      text: "text-orange-900",
    },
    {
      name: "Observability Platform",
      desc: "Monitoring, tracing, and system analytics",
      color: "bg-cyan-50 border-cyan-200",
      text: "text-cyan-900",
    },
    {
      name: "API Gateway System",
      desc: "Enterprise API management layer",
      color: "bg-rose-50 border-rose-200",
      text: "text-rose-900",
    },
    {
      name: "Internal Dev Platform",
      desc: "Developer tooling and platform engineering stack",
      color: "bg-teal-50 border-teal-200",
      text: "text-teal-900",
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">All Projects</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border ${p.color} hover:shadow-md transition`}
            >
              <h3 className={`text-xl font-semibold ${p.text}`}>
                {p.name}
              </h3>
              <p className="mt-3 text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
