import { NextResponse } from "next/server";
import AnalyticsEvent from "@/models/AnalyticsEvent.model";
import { dbConnect } from "@/lib/dbConnect";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    await AnalyticsEvent.create({
      event: body.event,
      path: body.path,
      device: body.device,
      country: body.country,
      referrer: body.referrer,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
