import { dbConnect } from "@/lib/dbConnect";
import Response from "@/models/Response.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const responses = await Response.find({});
    return NextResponse.json(responses);
  } catch (error) {
    console.error("GET /api/response error:", error);
    return NextResponse.json(
      { error: "Failed to fetch response" },
      { status: 500 }
    );
  }
};

export const POST = async (req: Request) => {
  try {
    await dbConnect();
    const body = await req.json();
    const response = await Response.create(body);
    return NextResponse.json(response);
  } catch (error) {
    console.error("GET /api/response error:", error);
    return NextResponse.json(
      { error: "Failed to fetch response" },
      { status: 500 }
    );
  }
};
