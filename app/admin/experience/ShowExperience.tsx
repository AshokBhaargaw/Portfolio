"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { fetchExperiences, deleteExperience } from "@/redux/slices/experienceSlice";
import type { Experience } from "@/redux/types/experience";

// Helper function to format date for display
const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

export default function Experience() {
    const dispatch = useDispatch<AppDispatch>();
    const { experiences, loading, error } = useSelector(
        (state: RootState) => state.experience
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

    const handleEdit = (id: string) => {
        alert(`Edit experience with id: ${id}`);
        // Later: open modal / navigate to edit form
    };

    if (loading) {
        return (
            <section className="space-y-6 py-3 my-5 border-t border-slate-800">
                <h2 className="text-xl font-bold text-white">Experience</h2>
                <p className="text-slate-400 text-sm">Loading experiences...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="space-y-6 py-3 my-5 border-t border-slate-800">
                <h2 className="text-xl font-bold text-white">Experience</h2>
                <p className="text-red-400 text-sm">Error: {error}</p>
            </section>
        );
    }

    return (
        <section className="space-y-6 py-3 my-5 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white">Experience</h2>

            {experiences.length === 0 ? (
                <p className="text-slate-400 text-sm">No experiences added yet.</p>
            ) : (
                <div className="space-y-4">
                    {experiences.map((exp: Experience) => (
                        <div
                            key={exp._id}
                            className="bg-slate-900/60 border border-slate-800 rounded-xl p-4"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">
                                        {exp.role}
                                    </h3>
                                    <p className="text-sm text-purple-400 font-medium">
                                        {exp.company}
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(exp._id)}
                                        className="px-3 py-1 text-xs font-bold uppercase tracking-wider cursor-pointer
                        rounded-lg border border-slate-700 text-slate-300
                        hover:bg-slate-800 transition"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => handleDelete(exp._id)}
                                        className="px-3 py-1 text-xs font-bold uppercase tracking-wider cursor-pointer
                        rounded-lg border border-red-500/40 text-red-400
                        hover:bg-red-500/10 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>

                            {/* Dates */}
                            <p className="text-xs text-slate-400 mt-1">
                                {formatDate(exp.startDate)} – {exp.endDate ? formatDate(exp.endDate) : "Present"}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
