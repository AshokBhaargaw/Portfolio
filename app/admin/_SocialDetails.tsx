"use client";

import React, { useState } from "react";

type SocialDetail = {
  id: number;
  platform: string;
  url: string;
};

export default function SocialDetails() {
  const [socials, setSocials] = useState<SocialDetail[]>([
    {
      id: 1,
      platform: "LinkedIn",
      url: "https://linkedin.com/in/your-profile",
    },
    {
      id: 2,
      platform: "GitHub",
      url: "https://github.com/your-username",
    },
  ]);

  return (
    <div className="space-y-6 sm:space-y-8 w-full">
      {/* Header */}
      <header>
        <h1 className="text-2xl sm:text-3xl font-semibold">Social Details</h1>
        <p className="text-gray-400 mt-1 text-sm sm:text-base">
          Manage your social media and profile links
        </p>
      </header>

      {/* Add Social Link */}
      <section className="bg-[#0F172A] border border-slate-700 rounded-2xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Add Social Link
        </h2>

        <SocialForm
          onAdd={(social) =>
            setSocials((prev) => [...prev, { ...social, id: Date.now() }])
          }
        />
      </section>

      {/* Social List */}
      <section className="bg-[#0F172A] border border-slate-700 rounded-2xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Your Social Links
        </h2>

        {socials.length === 0 ? (
          <p className="text-gray-400 text-sm sm:text-base">
            No social links added yet.
          </p>
        ) : (
          <div className="space-y-4">
            {socials.map((social) => (
              <SocialCard key={social.id} social={social} />
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

function SocialForm({
  onAdd,
}: {
  onAdd: (social: Omit<SocialDetail, "id">) => void;
}) {
  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!platform || !url) return;

    onAdd({ platform, url });

    setPlatform("");
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
      <input
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        placeholder="Platform (e.g. LinkedIn, GitHub)"
        className="bg-[#1E293B] border border-slate-600 rounded-xl px-4 py-2 text-sm sm:text-base"
      />

      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Profile URL"
        className="bg-[#1E293B] border border-slate-600 rounded-xl px-4 py-2 text-sm sm:text-base"
      />

      <button
        type="submit"
        className="md:col-span-2 w-full sm:w-auto bg-purple-700 hover:bg-purple-600 transition rounded-xl px-6 py-3 text-sm sm:text-base font-medium"
      >
        Add Social Link
      </button>
    </form>
  );
}

function SocialCard({ social }: { social: SocialDetail }) {
  return (
    <div className="border border-slate-700 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h3 className="text-base sm:text-lg font-semibold">
          {social.platform}
        </h3>
        <a
          href={social.url}
          target="_blank"
          className="text-blue-400 hover:underline text-sm sm:text-base break-all"
        >
          {social.url}
        </a>
      </div>

      <div className="flex gap-3">
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
