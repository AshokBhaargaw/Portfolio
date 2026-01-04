"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Edit, Save } from "lucide-react";
import { Button } from "@/Components/ui";
import { useState } from "react";

export default function Page() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Ashok Bhaargaw",
    role: "Frontend / Full-Stack Developer",
    bio:
      "I build modern, scalable, and performance-focused web applications using React, Next.js, and modern frontend tooling. Passionate about clean UI, strong architecture, and real-world problem solving.",
    email: "ashokbhaargaw@gmail.com",
    phone: "+91 70141 37575",
    location: "Ramdevra, Rajasthan",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "WordPress",
      "Git & GitHub",
    ],
  });

  const handleChange = (key: string, value: string) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (!newSkill.trim()) return;

    setProfile((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill.trim()],
    }));

    setNewSkill("");
  };

  const removeSkill = (skillToRemove: string) => {
    setProfile((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };



  return (
    <main className="min-h-screen px-6 py-20 max-w-6xl mx-auto">
      {/* Header */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden border border-slate-700">
          <Image
            src="/ashok.jpg"
            alt={profile.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Intro */}
        <div className="flex-1 text-center md:text-left">
          {isEditing ? (
            <>
              <input
                value={profile.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="text-3xl md:text-4xl font-bold bg-transparent border-b outline-none"
              />
              <br />
            </>
          ) : (
            <h1 className="text-3xl md:text-4xl font-bold">
              {profile.name}
            </h1>
          )}

          {isEditing ? (
            <input
              value={profile.role}
              onChange={(e) => handleChange("role", e.target.value)}
              className="mt-2 text-primary bg-transparent border-b outline-none"
            />
          ) : (
            <p className="mt-2 text-primary font-medium">
              {profile.role}
            </p>
          )}

          {isEditing ? (
            <textarea
              value={profile.bio}
              onChange={(e) => handleChange("bio", e.target.value)}
              rows={3}
              className="mt-4 w-full bg-transparent border rounded-md p-2 outline-none"
            />
          ) : (
            <p className="mt-4 text-muted-foreground max-w-xl">
              {profile.bio}
            </p>
          )}

          {/* CTA */}
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <Link href="/contact">
              <Button>Hire Me</Button>
            </Link>

            <a href={`tel:${profile.phone}`}>
              <Button variant="secondary">Call Now</Button>
            </a>

            <Button
              variant="ghost"
              onClick={() => setIsEditing((p) => !p)}
              className="gap-2"
            >
              {isEditing ? <Save size={16} /> : <Edit size={16} />}
              {isEditing ? "Save" : "Edit"}
            </Button>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">Contact Information</h2>

          <div className="flex items-center gap-3">
            <Mail size={18} />
            {isEditing ? (
              <input
                value={profile.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="bg-transparent border-b outline-none flex-1"
              />
            ) : (
              <span className="text-muted-foreground">{profile.email}</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Phone size={18} />
            {isEditing ? (
              <input
                value={profile.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="bg-transparent border-b outline-none flex-1"
              />
            ) : (
              <span className="text-muted-foreground">{profile.phone}</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={18} />
            {isEditing ? (
              <input
                value={profile.location}
                onChange={(e) => handleChange("location", e.target.value)}
                className="bg-transparent border-b outline-none flex-1"
              />
            ) : (
              <span className="text-muted-foreground">{profile.location}</span>
            )}
          </div>
        </div>

        {/* Skills */}
        {/* Skills */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>

          {/* Skill Chips */}
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-slate-800 border border-slate-700"
              >
                <span>{skill}</span>

                {isEditing && (
                  <button
                    onClick={() => removeSkill(skill)}
                    className="text-red-400 hover:text-red-300"
                    title="Remove skill"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Add Skill Input */}
          {isEditing && (
            <div className="mt-4 flex gap-2">
              <input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add new skill"
                className="flex-1 bg-transparent border border-slate-700 rounded-md px-3 py-2 text-sm outline-none"
                onKeyDown={(e) => e.key === "Enter" && addSkill()}
              />

              <Button onClick={addSkill} className="px-4">
                Add
              </Button>
            </div>
          )}
        </div>

      </section>

      {/* Social Links */}
      <section className="mt-12 flex gap-6 justify-center">
        <Github size={24} />
        <Linkedin size={24} />
      </section>
    </main>
  );
}
