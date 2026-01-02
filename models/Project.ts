import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    techStack: String,
    image: String,
    liveUrl: String,
    githubUrl: String,
});

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
