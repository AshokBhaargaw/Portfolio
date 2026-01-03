import ShowProjects from "./components/Projects/ShowProjects";
import AddProjects from "./components/Projects/AddProjects";

export default function ProjectPage() {
  return (
    <div className="space-y-2 w-full py-2">
      {/* Form */}
      <AddProjects />

      {/* List */}
      <ShowProjects />
    </div>
  );
}
