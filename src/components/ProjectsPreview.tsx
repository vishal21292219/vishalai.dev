export default function ProjectsPreview() {
  const projects = [
    {
      name: "OAuth Platform",
      desc: "Secure authentication platform with AWS migration",
      color: "from-blue-500/10 to-blue-600/10 border-blue-300",
      text: "text-blue-700",
    },
    {
      name: "Agent Assist Platform",
      desc: "Enterprise AI-assisted support automation",
      color: "from-purple-500/10 to-purple-600/10 border-purple-300",
      text: "text-purple-700",
    },
    {
      name: "Wallet Infrastructure",
      desc: "Scalable fintech wallet onboarding system",
      color: "from-emerald-500/10 to-emerald-600/10 border-emerald-300",
      text: "text-emerald-700",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Projects</h2>
          <a href="/projects" className="text-blue-600 font-medium">
            View all →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border bg-gradient-to-br ${p.color} hover:shadow-lg transition`}
            >
              <h3 className={`text-xl font-semibold ${p.text}`}>
                {p.name}
              </h3>
              <p className="mt-3 text-gray-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
