"use client";
import { apiFetch } from "@/lib/api";
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

  const [error, setError] = useState("");

  // to get all the projects form the backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await apiFetch("/projects");
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);

  // to add new project in backend
  const addProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !techStack || !description) {
      setError("There is an error");
      return;
    }
  };
  return (
    <div className="space-y-6 sm:space-y-8 w-full">
      {/* Header */}
      <header>
        <h1 className="text-2xl sm:text-3xl font-semibold">Projects</h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Manage your portfolio projects
        </p>
      </header>

      {/* Form */}
      <form
        onSubmit={addProject}
        className="bg-[#0F172A] border border-slate-700 rounded-xl p-4 sm:p-6 space-y-6"
      >
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">
                Project Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="My Awesome Project"
                className="w-full bg-[#1E293B] border border-slate-600 rounded-lg px-4 py-2 text-sm sm:text-base
                     focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">
                Tech Stack
              </label>
              <input
                value={techStack}
                onChange={(e) => setTechStack(e.target.value)}
                placeholder="React, Next.js, Tailwind"
                className="w-full bg-[#1E293B] border border-slate-600 rounded-lg px-4 py-2 text-sm sm:text-base
                     focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">
                Key Features
              </label>
              <input
                value={techStack}
                onChange={(e) => setTechStack(e.target.value)}
                placeholder="eg. Responsive Design, Premium Animations"
                className="w-full bg-[#1E293B] border border-slate-600 rounded-lg px-4 py-2 text-sm sm:text-base
                     focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-1">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What problem does this project solve?"
                rows={4}
                className="w-full resize-none bg-[#1E293B] border border-slate-600 rounded-lg px-4 py-2 text-sm sm:text-base
                     focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="h-full">
            <div className="space-y-4 h-full">
              <label className="block text-sm text-slate-400 mb-1">
                Project Image
              </label>
              <div className="flex items-center justify-center h-[92%] border-2 border-dashed border-slate-600 rounded-lg text-slate-500 text-sm">
                Upload Image (Coming Soon)
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-600 active:scale-95 transition
                 px-6 py-2 rounded-lg text-sm sm:text-base font-medium"
          >
            Add Project
          </button>
        </div>
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
