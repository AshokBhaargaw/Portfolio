"use client";

import { Container, Button, Heading, Project } from "@/Components/ui";
import { useState } from "react";
import { ChevronLeft, ChevronRight, } from "lucide-react";
import { ProjectCardsData } from "@/data/projects";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % ProjectCardsData.length);
  };

  const handlePrev = () => {
    setCurrentProject((prev) => (prev - 1 + ProjectCardsData.length) % ProjectCardsData.length);
  };

  const project = ProjectCardsData[currentProject];

  return (
    <Container className="py-20 relative">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10" />

      <Heading as="h2" className="text-4xl md:text-5xl font-bold text-center mb-16">
        Featured Projects
      </Heading>

      <div className="hidden md:block">
        <Button className="absolute top-1/2 -left-5 z-50" variant="secondary" onClick={handlePrev}> <ChevronLeft size={20} /> </Button>
        <Button className="absolute top-1/2 -right-5 z-50" variant="secondary" onClick={handleNext}> <ChevronRight size={20} /> </Button>
      </div>

      <Project
        project={project}
        handleNext={handleNext}
        handlePrev={handlePrev}
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
      />

    </Container>
  );
}
