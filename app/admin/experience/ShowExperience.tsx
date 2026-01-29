"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import {
  fetchExperiences,
  deleteExperience,
  updateExperience,
} from "@/redux/slices/experienceSlice";
import type { Experience } from "@/redux/types/experience";

// Helper function to format date for display
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

// Helper function to format date for input (YYYY-MM-DD)
const formatDateForInput = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};

export default function Experience() {
  const dispatch = useDispatch<AppDispatch>();
  const { experiences, loading, error } = useSelector(
    (state: RootState) => state.experience,
  );

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Omit<Experience, "_id">>>(
    {},
  );

  useEffect(() => {
    dispatch(fetchExperiences());
  }, [dispatch]);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this experience?")) {
      try {
        await dispatch(deleteExperience(id)).unwrap();
      } catch (err) {
        console.error("Failed to delete experience:", err);
      }
    }
  };

  const handleEdit = (exp: Experience) => {
    setEditingId(exp._id);
    setEditForm({
      role: exp.role,
      company: exp.company,
      startDate: exp.startDate,
      endDate: exp.endDate,
      description: exp.description,
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleSaveEdit = async (id: string) => {
    try {
      // Updated to match your slice signature: { id: string; data: Partial<Omit<Experience, "_id">> }
      await dispatch(updateExperience({ id, data: editForm })).unwrap();
      setEditingId(null);
      setEditForm({});
    } catch (err) {
      console.error("Failed to update experience:", err);
    }
  };

  const handleInputChange = (
    field: keyof Omit<Experience, "_id">,
    value: string,
  ) => {
    setEditForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-8">Experience</h1>
          <div className="text-slate-300">Loading experiences...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-8">Experience</h1>
          <div className="text-red-400">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Experience</h1>

        {experiences.length === 0 ? (
          <div className="text-slate-400 text-center py-8">
            No experiences added yet.
          </div>
        ) : (
          <div className="space-y-6">
            {experiences.map((exp: Experience) => (
              <div
                key={exp._id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                {editingId === exp._id ? (
                  // Edit Mode
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Role
                      </label>
                      <input
                        type="text"
                        value={editForm.role || ""}
                        onChange={(e) =>
                          handleInputChange("role", e.target.value)
                        }
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={editForm.company || ""}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Start Date
                        </label>
                        <input
                          type="date"
                          value={
                            editForm.startDate
                              ? formatDateForInput(editForm.startDate)
                              : ""
                          }
                          onChange={(e) =>
                            handleInputChange("startDate", e.target.value)
                          }
                          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          End Date (Optional)
                        </label>
                        <input
                          type="date"
                          value={
                            editForm.endDate
                              ? formatDateForInput(editForm.endDate)
                              : ""
                          }
                          onChange={(e) =>
                            handleInputChange("endDate", e.target.value)
                          }
                          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Description
                      </label>
                      <textarea
                        value={editForm.description || ""}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                        rows={4}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                      />
                    </div>

                    <div className="flex gap-3 justify-end pt-2">
                      <button
                        onClick={handleCancelEdit}
                        className="px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-700 transition"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSaveEdit(exp._id)}
                        className="px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  // View Mode
                  <>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-1">
                          {exp.role}
                        </h2>
                        <p className="text-purple-400 font-medium">
                          {exp.company}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(exp)}
                          className="px-3 py-1 text-xs font-bold uppercase tracking-wider cursor-pointer rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(exp._id)}
                          className="px-3 py-1 text-xs font-bold uppercase tracking-wider cursor-pointer rounded-lg border border-red-500/40 text-red-400 hover:bg-red-500/10 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    {/* Dates */}
                    <p className="text-sm text-slate-400 mb-4">
                      {formatDate(exp.startDate)} –{" "}
                      {exp.endDate ? formatDate(exp.endDate) : "Present"}
                    </p>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
