// src/app/page.tsx

import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import ProjectsPreview from "@/components/ProjectsPreview";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Vishal Kumar | Tech Architect & Engineer",
  description:
    "Personal tech profile of Vishal Kumar. Engineering leader, system architect, backend specialist, and platform engineer.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <ServicesPreview />
      <ProjectsPreview />
      <CTA />
    </main>
  );
}
