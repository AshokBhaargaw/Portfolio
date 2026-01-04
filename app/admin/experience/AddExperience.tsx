"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { uploadExperience } from "@/redux/slices/experienceSlice";

export default function AddExperience() {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error } = useSelector(
        (state: RootState) => state.experience
    );

    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [description, setDescription] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!startDate) {
            alert("Start date is required");
            return;
        }

        try {
            await dispatch(
                uploadExperience({
                    company,
                    role,
                    startDate: startDate.toISOString(),
                    endDate: endDate ? endDate.toISOString() : undefined,
                    description,
                })
            ).unwrap();

            setCompany("");
            setRole("");
            setStartDate(null);
            setEndDate(null);
            setDescription("");
            alert("Experience added successfully");
        } catch (err) {
            console.error("Failed to add experience:", err);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl"
        >
            {/* Header */}
            <div>
                <h2 className="text-lg font-bold text-white">Add Experience</h2>
                <p className="text-xs text-slate-400">
                    Add your professional experience to the timeline
                </p>
            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left */}
                <div className="space-y-4">
                    <input
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company name"
                        className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500
              focus:outline-none focus:ring-2 focus:ring-purple-500/30"
                        required
                    />

                    <input
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="Role / Position"
                        className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500
              focus:outline-none focus:ring-2 focus:ring-purple-500/30"
                        required
                    />

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2">
                            <DatePicker
                                selected={startDate}
                                onChange={(date: Date | null) => setStartDate(date)}
                                dateFormat="MMM yyyy"
                                showMonthYearPicker
                                placeholderText="Start Month"
                                isClearable
                                wrapperClassName="w-full"
                                className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <DatePicker
                                selected={endDate}
                                onChange={(date: Date | null) => setEndDate(date)}
                                dateFormat="MMM yyyy"
                                showMonthYearPicker
                                placeholderText="End Month"
                                isClearable
                                wrapperClassName="w-full"
                                className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe responsibilities, achievements, and impact"
                        rows={6}
                        className="w-full h-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 resize-none
              focus:outline-none focus:ring-2 focus:ring-purple-500/30"
                        required
                    />
                </div>
            </div>

            {/* Action */}
            <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                <div className="">
                    {error && (
                        <div className="text-red-400 text-sm">
                            {error}
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-95
            text-white text-xs font-bold uppercase tracking-widest transition-all
            disabled:opacity-50 disabled:active:scale-100"
                >
                    {loading ? "Saving..." : "Add Experience"}
                </button>
            </div>
        </form>
    );
}