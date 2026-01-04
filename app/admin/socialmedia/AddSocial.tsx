"use client";

import { useState } from "react";

export default function AddSocial() {
  const [platform, setPlatform] = useState("linkedin");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/social", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ platform, url }),
    });

    setLoading(false);

    if (res.ok) {
      setUrl("");
      alert("Social link saved");
    } else {
      alert("Failed to save");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        className="w-full border p-2"
      >
        <option value="linkedin">LinkedIn</option>
        <option value="github">GitHub</option>
        <option value="twitter">Twitter</option>
        <option value="instagram">Instagram</option>
        <option value="website">Website</option>
      </select>

      <input
        type="url"
        placeholder="https://..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full border p-2"
        required
      />

      <button
        disabled={loading}
        className="bg-black text-white px-4 py-2"
      >
        {loading ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
