"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, deleteProject, updateProject, Project } from "@/redux/slices/projects/projectSlice";
import type { RootState, AppDispatch } from "@/redux/store";
import { Github, ExternalLink, Trash2, Code2, Layers, Sparkles, Pencil, X, Check, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ShowProjects() {
  const dispatch = useDispatch<AppDispatch>();
  const { projects, loading, error } = useSelector(
    (state: RootState) => state.projects
  );

  // Edit state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Project>>({});
  const [tempTech, setTempTech] = useState("");
  const [tempFeature, setTempFeature] = useState("");

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await dispatch(deleteProject(id)).unwrap();
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  const startEditing = (project: Project) => {
    setEditingId(project._id);
    setEditForm(project);
    setTempTech("");
    setTempFeature("");
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleUpdate = async () => {
    if (!editingId) return;
    try {
      await dispatch(updateProject({ id: editingId, data: editForm })).unwrap();
      setEditingId(null);
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const addArrayItem = (field: 'techStack' | 'keyFeatures', value: string, setter: (v: string) => void) => {
    if (!value.trim()) return;
    const currentArray = (editForm[field] as string[]) || [];
    setEditForm({ ...editForm, [field]: [...currentArray, value.trim()] });
    setter("");
  };

  const removeArrayItem = (field: 'techStack' | 'keyFeatures', index: number) => {
    const currentArray = (editForm[field] as string[]) || [];
    setEditForm({ ...editForm, [field]: currentArray.filter((_, i) => i !== index) });
  };

  if (loading && projects.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="relative">
          <div className="h-12 w-12 rounded-full border-t-2 border-b-2 border-purple-500 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center text-purple-400">
            <Sparkles className="h-4 w-4 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="space-y-6">
      <AnimatePresence mode="popLayout">
        {projects.length === 0 && !loading ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-16 border-2 border-dashed border-slate-800 rounded-3xl"
          >
            <ImageIcon className="w-12 h-12 text-slate-700 mb-4" />
            <p className="text-slate-500 text-center italic">
              Your portfolio is waiting for its first masterpiece.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project: Project, index: number) => {
              const isEditing = editingId === project._id;

              return (
                <motion.div
                  key={project._id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group relative overflow-hidden bg-slate-900/40 backdrop-blur-md border ${isEditing ? 'border-purple-500/50 ring-1 ring-purple-500/20' : 'border-slate-800'} rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/5`}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Project Image Placeholder */}
                    <div className="w-full md:w-72 h-48 md:h-auto bg-slate-800/50 relative overflow-hidden flex-shrink-0 border-b md:border-b-0 md:border-r border-slate-800">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 space-y-2 bg-gradient-to-br from-slate-800/80 to-slate-900/80">
                          <ImageIcon className="w-10 h-10 opacity-20" />
                          <span className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-20 text-center px-4 leading-relaxed">Image Placeholder</span>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.1),transparent)] pointer-events-none"></div>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 p-5 md:p-8 flex flex-col min-w-0">
                      {isEditing ? (
                        /* Edit Form */
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="space-y-1">
                              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Title</label>
                              <input
                                value={editForm.title || ""}
                                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-500 transition-colors"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">GitHub URL</label>
                              <input
                                value={editForm.githubUrl || ""}
                                onChange={(e) => setEditForm({ ...editForm, githubUrl: e.target.value })}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-500 transition-colors"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Live URL</label>
                              <input
                                value={editForm.liveUrl || ""}
                                onChange={(e) => setEditForm({ ...editForm, liveUrl: e.target.value })}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-500 transition-colors"
                              />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Description</label>
                            <textarea
                              value={editForm.description || ""}
                              onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-500 h-28 resize-none transition-colors"
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Tech Stack Edit */}
                            <div className="space-y-2">
                              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Tech Stack</label>
                              <div className="flex gap-2">
                                <input
                                  value={tempTech}
                                  onChange={(e) => setTempTech(e.target.value)}
                                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addArrayItem('techStack', tempTech, setTempTech))}
                                  className="flex-1 bg-slate-800/50 border border-slate-700 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-purple-500"
                                  placeholder="Add tech..."
                                />
                                <button type="button" onClick={() => addArrayItem('techStack', tempTech, setTempTech)} className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white">
                                  <Check className="w-4 h-4" />
                                </button>
                              </div>
                              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-2 custom-scrollbar">
                                {editForm.techStack?.map((tech, i) => (
                                  <span key={i} className="flex items-center gap-1.5 bg-purple-500/10 text-purple-300 text-[10px] px-2.5 py-1 rounded-md border border-purple-500/20">
                                    {tech}
                                    <X className="w-3 h-3 cursor-pointer hover:text-red-400" onClick={() => removeArrayItem('techStack', i)} />
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Key Features Edit */}
                            <div className="space-y-2">
                              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Key Features</label>
                              <div className="flex gap-2">
                                <input
                                  value={tempFeature}
                                  onChange={(e) => setTempFeature(e.target.value)}
                                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addArrayItem('keyFeatures', tempFeature, setTempFeature))}
                                  className="flex-1 bg-slate-800/50 border border-slate-700 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-purple-500"
                                  placeholder="Add feature..."
                                />
                                <button type="button" onClick={() => addArrayItem('keyFeatures', tempFeature, setTempFeature)} className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white">
                                  <Check className="w-4 h-4" />
                                </button>
                              </div>
                              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-2 custom-scrollbar">
                                {editForm.keyFeatures?.map((feature, i) => (
                                  <span key={i} className="flex items-center gap-1.5 bg-blue-500/10 text-blue-300 text-[10px] px-2.5 py-1 rounded-md border border-blue-500/20">
                                    {feature}
                                    <X className="w-3 h-3 cursor-pointer hover:text-red-400" onClick={() => removeArrayItem('keyFeatures', i)} />
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-end gap-3 pt-6 border-t border-slate-800/50">
                            <button onClick={cancelEditing} className="px-5 py-2 rounded-xl bg-slate-800 text-slate-400 hover:bg-slate-700 transition-all text-[10px] font-black uppercase tracking-widest">
                              Cancel
                            </button>
                            <button onClick={handleUpdate} className="px-6 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-500 transition-all text-[10px] font-black uppercase tracking-widest shadow-xl shadow-purple-950/20">
                              Update Project
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* View Mode */
                        <>
                          <div className="flex justify-between items-start mb-4 gap-4">
                            <div className="min-w-0 flex-1">
                              <h3 className="text-2xl font-black text-white group-hover:text-purple-400 transition-colors truncate">
                                {project.title}
                              </h3>
                              <div className="flex flex-wrap gap-2 mt-3">
                                {project.techStack.map((tech, i) => (
                                  <span key={i} className="text-[9px] uppercase tracking-widest font-black px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/50 hover:border-purple-500/40 hover:text-purple-300 transition-all cursor-default">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex items-center gap-2 flex-shrink-0">
                              <button
                                onClick={() => startEditing(project)}
                                className="p-2.5 rounded-xl bg-slate-800/40 text-slate-400 hover:bg-slate-700 hover:text-white transition-all border border-slate-700/30 group-hover:border-purple-500/30"
                                title="Edit"
                              >
                                <Pencil className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(project._id)}
                                className="p-2.5 rounded-xl bg-slate-800/40 text-slate-400 hover:bg-red-500/20 hover:text-red-400 transition-all border border-slate-700/30 group-hover:border-red-500/30"
                                title="Delete"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3 md:line-clamp-4">
                            {project.description}
                          </p>

                          <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-800/30">
                            <div className="flex items-center gap-5">
                              <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-500 tracking-wider">
                                <Layers className="w-3.5 h-3.5 text-purple-500/40" />
                                <span>{project.keyFeatures?.length || 0} Features</span>
                              </div>
                              <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-500 tracking-wider">
                                <Code2 className="w-3.5 h-3.5 text-blue-500/40" />
                                <span>{project.techStack.length} Techs</span>
                              </div>
                            </div>

                            <div className="flex items-center sm:justify-end gap-3">
                              {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                  className="group/link flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/30 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white hover:bg-slate-800 transition-all border border-slate-800/50">
                                  <Github className="w-4 h-4" />
                                  <span className="hidden lg:inline">Source</span>
                                </a>
                              )}
                              {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                  className="group/link flex items-center gap-2 px-3 py-2 rounded-xl bg-purple-500/10 text-[10px] font-black uppercase tracking-widest text-purple-400 hover:text-white hover:bg-purple-600 transition-all border border-purple-500/20">
                                  <ExternalLink className="w-4 h-4" />
                                  <span className="hidden lg:inline">Preview</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {error && projects.length > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-4 rounded-2xl bg-red-500/5 border border-red-500/10 text-red-400 text-[11px] font-bold uppercase tracking-widest text-center">
          <Sparkles className="w-3 h-3 inline-block mr-2 opacity-50" />
          {error}
        </motion.div>
      )}
    </section>
  );
}
