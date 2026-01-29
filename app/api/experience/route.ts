import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Experience from "@/models/Experience.model";

export async function GET() {
  try {
    await dbConnect();
    const experiences = await Experience.find({}).sort({ startDate: -1 });
    
    // Map model fields to frontend format
    const mappedExperiences = experiences.map((exp) => ({
      _id: exp._id.toString(),
      company: exp.organization,
      role: exp.position,
      startDate: exp.startDate.toISOString(),
      endDate: exp.endDate ? exp.endDate.toISOString() : undefined,
      description: exp.description,
    }));
    
    return NextResponse.json(mappedExperiences, { status: 200 });
  } catch (error) {
    console.log("GET /api/experience", error);
    return NextResponse.json(
      { error: "Failed to fetch past company data" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    
    // Validate required fields
    if (!body.startDate) {
      return NextResponse.json(
        { error: "Start date is required" },
        { status: 400 }
      );
    }

    // Validate and parse dates
    const startDate = new Date(body.startDate);
    if (isNaN(startDate.getTime())) {
      return NextResponse.json(
        { error: "Invalid start date format" },
        { status: 400 }
      );
    }

    let endDate: Date | undefined;
    if (body.endDate) {
      endDate = new Date(body.endDate);
      if (isNaN(endDate.getTime())) {
        return NextResponse.json(
          { error: "Invalid end date format" },
          { status: 400 }
        );
      }
    }

    // Map frontend fields to model fields
    const experience = await Experience.create({
      organization: body.company || body.organization,
      position: body.role || body.position,
      startDate,
      endDate,
      description: body.description,
      location: body.location || "Remote", // Default to "Remote" if not provided
    });
    
    // Map model fields back to frontend format
    const mappedExperience = {
      _id: experience._id.toString(),
      company: experience.organization,
      role: experience.position,
      startDate: experience.startDate.toISOString(),
      endDate: experience.endDate ? experience.endDate.toISOString() : undefined,
      description: experience.description,
    };
    
    return NextResponse.json(mappedExperience, { status: 201 });
  } catch (error: any) {
    console.log("Failed to post data", error);
    return NextResponse.json(
      { error: error.message || "Failed to store data from backend side" },
      { status: 500 }
    );
  }
}


export async function PUT(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { error: "Experience ID is required" },
        { status: 400 }
      );
    }
    const body = await req.json();
    const updatedExperience = await Experience.findByIdAndUpdate(id, body, {
      new: true,
    });
    return NextResponse.json(updatedExperience, { status: 201 });
  } catch (error) {
    console.log("Failed to update data from backend", error);
    return NextResponse.json(
      { error: "Failed to update data from backend" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { error: "Experience ID is required" },
        { status: 400 }
      );
    }
    const deletedExperience = await Experience.findByIdAndDelete(id);
    return NextResponse.json(deletedExperience, { status: 201 });
  } catch (error) {
    console.log("Failed to update data from backend", error);
    return NextResponse.json(
      { error: "Failed to update data from backend" },
      { status: 500 }
    );
  }
}
