import { dbConnect } from "@/lib/dbConnect";
import Project from "@/models/Project";
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
    const { title, techStack, description } = body;

    const project = await Project.create({
      title,
      techStack,
      description
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error("POST /api/projects error:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    )
  }
}

