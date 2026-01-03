import { dbConnect } from "@/lib/dbConnect";
import Project from "@/models/Project.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const projects = await Project.find({});
    return NextResponse.json(projects);
  } catch (error) {
    console.error("GET /api/projects error:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export const POST = async (req: Request) => {
  try {
    await dbConnect();
    const body = await req.json();
    const { title, techStack, description, keyFeatures, liveUrl, githubUrl } = body;

    const project = await Project.create({
      title,
      techStack,
      description,
      keyFeatures,
      liveUrl,
      githubUrl
    });

    return NextResponse.json(project);
  } catch (error: any) {
    console.error("POST /api/projects error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create project" },
      { status: 500 }
    )
  }
}
export const PUT = async (req: Request) => {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    const body = await req.json();
    const updatedProject = await Project.findByIdAndUpdate(id, body, { new: true });

    return NextResponse.json(updatedProject);
  } catch (error: any) {
    console.error("PUT /api/projects error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update project" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req: Request) => {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    await Project.findByIdAndDelete(id);
    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error: any) {
    console.error("DELETE /api/projects error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to delete project" },
      { status: 500 }
    );
  }
};
