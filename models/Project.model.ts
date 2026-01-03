import mongoose from "mongoose";

// Force delete the old cached model to ensure schema updates are applied
if (mongoose.models.Project) {
    delete mongoose.models.Project;
    console.log("Deleted cached Project model");
}

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: [{ type: String }],
    keyFeatures: [{ type: String }],
    liveUrl: { type: String, default: "" },
    githubUrl: { type: String, default: "" },
    image: { type: String, default: "" },
}, { timestamps: true });

const Project = mongoose.model("Project", ProjectSchema);

console.log("Project model initialized with array schema for techStack and keyFeatures");

export default Project;
