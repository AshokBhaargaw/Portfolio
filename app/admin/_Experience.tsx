"use client";

import React, { useState } from "react";

type Experience = {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
};

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: 1,
      role: "WordPress Developer",
      company: "Kreativo Pro",
      duration: "Dec 2022 – Jul 2024",
      description:
        "Worked on client websites, performance optimization, and maintenance.",
    },
    {
      id: 2,
      role: "WordPress Developer",
      company: "Vande Digital",
      duration: "Oct 2024 – Sept 2025",
      description:
        "Handled multiple client projects and improved SEO and site performance.",
    },
  ]);

  return (
    <div className="space-y-6 sm:space-y-8 w-full">
      {/* Header */}
      <header>
        <h1 className="text-2xl sm:text-3xl font-semibold">Experience</h1>
        <p className="text-gray-400 mt-1 text-sm sm:text-base">
          Manage your professional experience entries
        </p>
      </header>

      {/* Add Experience */}
      <section className="bg-[#0F172A] border border-slate-700 rounded-2xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Add Experience
        </h2>

        <ExperienceForm
          onAdd={(exp) =>
            setExperiences((prev) => [...prev, { ...exp, id: Date.now() }])
          }
        />
      </section>

      {/* Experience List */}
      <section className="bg-[#0F172A] border border-slate-700 rounded-2xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Your Experience
        </h2>

        {experiences.length === 0 ? (
          <p className="text-gray-400 text-sm sm:text-base">
            No experience added yet.
          </p>
        ) : (
          <div className="space-y-4">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

/* ======================
   Components
   ====================== */

function ExperienceForm({
  onAdd,
}: {
  onAdd: (exp: Omit<Experience, "id">) => void;
}) {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!role || !company || !duration) return;

    onAdd({ role, company, duration, description });

    setRole("");
    setCompany("");
    setDuration("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
      <input
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Role / Position"
        className="bg-[#1E293B] border border-slate-600 rounded-xl px-4 py-2 text-sm sm:text-base"
      />

      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
        className="bg-[#1E293B] border border-slate-600 rounded-xl px-4 py-2 text-sm sm:text-base"
      />

      <input
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Duration (e.g. Jan 2022 – Dec 2023)"
        className="bg-[#1E293B] border border-slate-600 rounded-xl px-4 py-2 text-sm sm:text-base"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        rows={3}
        className="bg-[#1E293B] border border-slate-600 rounded-xl px-4 py-2 text-sm sm:text-base md:col-span-2"
      />

      <button
        type="submit"
        className="md:col-span-2 w-full sm:w-auto bg-purple-700 hover:bg-purple-600 transition rounded-xl px-6 py-3 text-sm sm:text-base font-medium"
      >
        Add Experience
      </button>
    </form>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="border border-slate-700 rounded-xl p-4 sm:p-5">
      <h3 className="text-base sm:text-lg font-semibold">{experience.role}</h3>

      <p className="text-purple-400 text-sm sm:text-base">
        {experience.company}
      </p>

      <p className="text-xs sm:text-sm text-gray-400">{experience.duration}</p>

      <p className="text-gray-300 mt-2 text-sm sm:text-base">
        {experience.description}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm sm:text-base">
          Edit
        </button>
        <button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-sm sm:text-base">
          Delete
        </button>
      </div>
    </div>
  );
}
