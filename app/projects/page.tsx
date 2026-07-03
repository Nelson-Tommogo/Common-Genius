import React from "react";

const projects = [
  {
    title: "Common Genius Platform",
    description: "A collaborative knowledge-sharing app for teams and communities.",
    status: "In development",
  },
  {
    title: "AI Research Hub",
    description: "A curated space for publishing and reviewing AI research projects.",
    status: "Planning",
  },
  {
    title: "Productivity Dashboard",
    description: "A modern dashboard for tracking goals, tasks, and project progress.",
    status: "Live",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-semibold text-slate-900">Projects</h1>
        <p className="mt-3 text-lg text-slate-600">
          Explore active and upcoming projects in Common Genius.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-slate-900">{project.title}</h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                  {project.status}
                </span>
              </div>
              <p className="mt-4 text-slate-600">{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
