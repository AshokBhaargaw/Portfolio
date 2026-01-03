import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { uploadProject } from "@/redux/slices/projects/projectSlice";
import { Sparkles, Terminal, Globe, Github, Plus, Layers, Image as ImageIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AddProjects() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.projects);

  // local variables for input fields
  const [techStack, setTechStack] = useState("");
  const [keyFeature, setKeyFeature] = useState("");

  const [title, setTitle] = useState("");
  const [techStackArray, setTechStackArray] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [keyFeaturesArray, setKeyFeaturesArray] = useState<string[]>([]);
  const [liveUrl, setLiveUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  const arrayTrimmer = (e: React.KeyboardEvent<HTMLInputElement>, setArray: React.Dispatch<React.SetStateAction<string[]>>, setLocalValue: React.Dispatch<React.SetStateAction<string>>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = e.currentTarget.value.trim();
      if (value) {
        setArray((prev) => [...prev, value]);
        setLocalValue("");
      }
    }
  }

  const removeItem = (setArray: React.Dispatch<React.SetStateAction<string[]>>, index: number) => {
    setArray((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || techStackArray.length === 0 || !description) {
      alert("Please fill in the title, description and at least one technology.");
      return;
    }

    try {
      await dispatch(uploadProject({
        title,
        techStack: techStackArray,
        description,
        keyFeatures: keyFeaturesArray,
        liveUrl,
        githubUrl,
      })).unwrap();

      // clear form after success
      setTitle("");
      setDescription("");
      setLiveUrl("");
      setGithubUrl("");
      setTechStackArray([]);
      setKeyFeaturesArray([]);
    } catch (err) {
      console.error("Failed to add project:", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
    >
      <div className="p-6 md:p-8 border-b border-slate-800">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-500" />
          Create New Project
        </h2>
        <p className="text-slate-500 text-xs mt-1 uppercase tracking-widest font-bold">Add a fresh masterpiece to your portfolio</p>
      </div>

      <form onSubmit={handleAddProject} className="p-6 md:p-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black text-slate-500 tracking-[0.2em] flex items-center gap-2">
                <Terminal className="w-3 h-3" /> Project Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nexara - AI Dashboard"
                className="w-full bg-slate-800/40 border border-slate-700/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all placeholder:text-slate-600"
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black text-slate-500 tracking-[0.2em] flex items-center gap-2">
                <Layers className="text-purple-500/50 w-3 h-3" /> Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Briefly explain what makes this project special..."
                rows={4}
                className="w-full bg-slate-800/40 border border-slate-700/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all resize-none placeholder:text-slate-600"
                disabled={loading}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-slate-500 tracking-[0.2em] flex items-center gap-2">
                  <Globe className="w-3 h-3" /> Live URL
                </label>
                <input
                  value={liveUrl}
                  onChange={(e) => setLiveUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full bg-slate-800/40 border border-slate-700/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all placeholder:text-slate-600"
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-slate-500 tracking-[0.2em] flex items-center gap-2">
                  <Github className="w-3 h-3" /> GitHub Link
                </label>
                <input
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/..."
                  className="w-full bg-slate-800/40 border border-slate-700/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all placeholder:text-slate-600"
                  disabled={loading}
                />
              </div>
            </div>

            <InputField
              label="Tech Stack"
              value={techStack}
              onChange={setTechStack}
              onKeyDown={(e) => arrayTrimmer(e, setTechStackArray, setTechStack)}
              onAdd={() => addManualItem(setTechStackArray, techStack, setTechStack)}
              onRemove={(i) => removeItem(setTechStackArray, i)}
              placeholder="React, Next.js, Redux..."
              displayArray={techStackArray}
              loading={loading}
            />

            <InputField
              label="Key Features"
              value={keyFeature}
              onChange={setKeyFeature}
              onKeyDown={(e) => arrayTrimmer(e, setKeyFeaturesArray, setKeyFeature)}
              onAdd={() => addManualItem(setKeyFeaturesArray, keyFeature, setKeyFeature)}
              onRemove={(i) => removeItem(setKeyFeaturesArray, i)}
              placeholder="Auth, Dark Mode, API Integration..."
              displayArray={keyFeaturesArray}
              loading={loading}
              variant="blue"
            />
          </div>

          {/* Right Column: Image */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black text-slate-500 tracking-[0.2em] flex items-center gap-2">
              <ImageIcon className="w-3 h-3" /> Project Image
            </label>
            <div className="min-h-[300px] lg:h-[calc(100%-2rem)] border-2 border-dashed border-slate-800 rounded-xl flex flex-col items-center justify-center bg-slate-800/20 relative group overflow-hidden">
              <ImageIcon className="w-12 h-12 text-slate-700 group-hover:text-purple-500/50 transition-colors" />
              <span className="text-[10px] uppercase font-black text-slate-600 tracking-widest mt-4 group-hover:text-purple-500/50 transition-colors text-center px-4">Upload Module Locked</span>
              <p className="text-[9px] text-slate-700 mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity">FUTURE ASSET MANAGEMENT</p>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ready to deploy</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-10 py-4 bg-purple-600 hover:bg-purple-500 active:scale-95 text-white text-xs font-black uppercase tracking-[0.2em] rounded-xl transition-all shadow-xl shadow-purple-950/20 disabled:opacity-50 disabled:active:scale-100"
          >
            {loading ? "Initializing..." : "Publish Project"}
          </button>
        </div>
      </form>

      {error && (
        <div className="mx-6 mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-[10px] font-bold uppercase tracking-widest text-center">
          {error}
        </div>
      )}
    </motion.div>
  );
}



// Add Manual Item
const addManualItem = (setArray: any, value: string, setValue: any) => {
  if (value.trim()) {
    setArray((prev: any) => [...prev, value.trim()]);
    setValue("");
  }
};

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
  placeholder: string;
  displayArray: string[];
  loading?: boolean;
  variant?: 'purple' | 'blue';
}


// Input Field
const InputField = ({ label, value, onChange, onKeyDown, onAdd, onRemove, placeholder, displayArray, loading, variant = 'purple' }: InputFieldProps) => {
  const isPurple = variant === 'purple';

  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase font-black text-slate-500 tracking-[0.2em]">
        {label}
      </label>
      <div className="flex gap-2">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className="flex-1 bg-slate-800/40 border border-slate-700/50 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all placeholder:text-slate-600"
          disabled={loading}
        />
        <button
          type="button"
          onClick={onAdd}
          className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-all border border-slate-700/50"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto pr-2 custom-scrollbar">
        <AnimatePresence>
          {displayArray.map((item, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className={`flex items-center gap-2 text-[10px] font-bold px-3 py-1 rounded-lg border transition-all ${isPurple
                ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                }`}
            >
              {item}
              <X className="w-3 h-3 cursor-pointer hover:text-red-400" onClick={() => onRemove(index)} />
            </motion.span>
          ))}
        </AnimatePresence>
        {displayArray.length === 0 && (
          <span className="text-[10px] text-slate-700 italic font-medium">None added yet</span>
        )}
      </div>
    </div>
  );
};