"use client";

import { Container, Button, Heading, Project } from "@/Components/ui";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Loader2, AlertCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { fetchProjects } from "@/redux/slices/projectSlice";

export default function Projects() {
  const dispatch = useDispatch<AppDispatch>();
  const { projects, loading, error } = useSelector((state: RootState) => state.projects);
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const handleNext = () => {
    if (projects.length === 0) return;
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    if (projects.length === 0) return;
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  console.log(project)

  return (
    <Container className="py-20 relative">
      {/* <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10" /> */}

      <Heading as="h2" className="text-4xl md:text-5xl font-bold text-center mb-16">
        Featured Projects
      </Heading>

      {loading && projects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
          <p className="text-gray-400">Loading projects...</p>
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
          <p className="text-red-400 font-medium">Failed to load projects</p>
          <p className="text-gray-500 text-sm">{error}</p>
          <button
            onClick={() => dispatch(fetchProjects())}
            className="mt-6 px-6 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-full border border-primary/30 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && projects.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p>No projects found.</p>
        </div>
      )}

      {projects.length > 0 && (
        <>
          <div className="hidden md:block">
            <Button className="absolute top-1/2 -left-20 z-50" variant="secondary" onClick={handlePrev}> <ChevronLeft size={20} /> </Button>
            <Button className="absolute top-1/2 -right-20 z-50" variant="secondary" onClick={handleNext}> <ChevronRight size={20} /> </Button>
          </div>

          <Project
            project={project}
            currentProject={currentProject}
            totalProjects={projects.length}
            onNext={handleNext}
            onPrev={handlePrev}
          />

        </>
      )}

    </Container>
  );
}
