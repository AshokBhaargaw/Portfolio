"use client";
import { useState, useEffect } from "react";

type Project = {
  _id: string;
  title: string;
  techStack: string;
  description: string;
};

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [title, setTitle] = useState("");
  const [techStack, setTechStack] = useState("");
  const [description, setDescription] = useState("");

  // Fetch projects on mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const addProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !techStack) return;

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, techStack, description }),
      });

      if (response.ok) {
        const newProject = await response.json();
        setProjects((prev) => [...prev, newProject]);

        setTitle("");
        setTechStack("");
        setDescription("");
      } else {
        console.error("Failed to add project");
      }
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 w-full">
      {/* Header */}
      <header>
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Projects
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Manage your portfolio projects
        </p>
      </header>

      {/* Form */}
      <form
        onSubmit={addProject}
        className="bg-[#0F172A] border border-slate-700 rounded-xl p-4 sm:p-6 space-y-4"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project title"
          className="w-full bg-[#1E293B] border border-slate-600 rounded-lg px-4 py-2 text-sm sm:text-base"
        />

        <input
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          placeholder="Tech stack (React, Next.js, etc.)"
          className="w-full bg-[#1E293B] border border-slate-600 rounded-lg px-4 py-2 text-sm sm:text-base"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows={3}
          className="w-full bg-[#1E293B] border border-slate-600 rounded-lg px-4 py-2 text-sm sm:text-base"
        />

        <button
          type="submit"
          className="w-full sm:w-auto bg-purple-700 hover:bg-purple-600 px-6 py-2 rounded-lg text-sm sm:text-base"
        >
          Add Project
        </button>
      </form>

      {/* List */}
      <section className="space-y-4">
        {projects.length === 0 ? (
          <p className="text-gray-400 text-sm sm:text-base">
            No projects added yet.
          </p>
        ) : (
          projects.map((project) => (
            <div
              key={project._id}
              className="border border-slate-700 rounded-xl p-4 sm:p-5"
            >
              <h3 className="text-base sm:text-lg font-semibold">
                {project.title}
              </h3>

              <p className="text-purple-400 text-sm sm:text-base">
                {project.techStack}
              </p>

              {project.description && (
                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  {project.description}
                </p>
              )}
            </div>
          ))
        )}
      </section>
    </div>
  );
}
