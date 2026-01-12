"use client";

import { useRef, useEffect } from "react";
import { skillsData, } from "@/Data/Skills";

export default function Skillbar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Clone data for infinite scroll effect
  const infiniteSkills = [...skillsData, ...skillsData];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let isPaused = false;
    const speed = 0.5;

    // Auto-scroll logic
    const scroll = () => {
      if (scrollContainer && !isPaused) {
        scrollContainer.scrollLeft += speed;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Central boundary check for infinite effect
    const handleScrollBoundary = () => {
      if (!scrollContainer) return;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 1;
      } else if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2 - 1;
      }
    };

    // Drag-to-scroll logic
    let isDragging = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      isPaused = true;
      scrollContainer.classList.add("dragging");
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const handleMouseUp = () => {
      isDragging = false;
      isPaused = false;
      scrollContainer.classList.remove("dragging");
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = x - startX;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    const handleMouseEnter = () => (isPaused = true);
    const handleMouseLeave = () => {
      if (!isDragging) isPaused = false;
    };

    scrollContainer.addEventListener("scroll", handleScrollBoundary);
    scrollContainer.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener("scroll", handleScrollBoundary);
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="py-5 overflow-hidden relative">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto pb-4 no-scrollbar cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex shrink-0 gap-10 pl-4">
          {infiniteSkills.map((categoryData, index) => (
            <div
              key={`${categoryData.category}-${index}`}
              className="flex items-center gap-6 p-2 rounded-2xl border border-border/30 bg-secondary/5 backdrop-blur-sm"
            >
              {/* Sticky Category Label */}
              <div className="sticky left-0 z-10 px-4 py-2 bg-background/80 backdrop-blur-md rounded-lg border-r border-primary/20 shadow-sm">
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary whitespace-nowrap">
                  {categoryData.category}
                </span>
              </div>

              {/* Skills Items */}
              <div className="flex gap-4 pr-4">
                {categoryData.items.map((skill, idx) => (
                  <div
                    key={`${skill.name}-${idx}`}
                    className="group flex items-center gap-3 px-5 py-2.5 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/60 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(168,85,247,0.1)] shrink-0"
                  >
                    <div className="text-xl text-muted-foreground group-hover:text-white transition-colors">
                      <skill.icon style={{ color: skill.color }} />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
