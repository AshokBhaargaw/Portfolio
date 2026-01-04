import ShowProjects from "./ShowProjects";
import AddProjects from "./AddProjects";

export default function ProjectPage() {
  return (
    <div className="w-full space-y-5">
      {/* Form */}
      <AddProjects />

      {/* List */}
      <ShowProjects />
    </div>
  );
}
