import { NextResponse } from "next/server";
import connectDB from "@/lib/mongoose";
import DailyVisit from "@/app/models/DailyVisit";

// POST: Track a new visit (used in frontend)
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { visitorId, userAgent } = body;

    if (!visitorId) {
      return NextResponse.json(
        { success: false, error: "Visitor ID is required" },
        { status: 400 }
      );
    }

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split("T")[0];

    // Find or create today's record
    let dailyVisit = await DailyVisit.findOne({ date: today });

    if (!dailyVisit) {
      // Create new record for today
      dailyVisit = await DailyVisit.create({
        date: today,
        count: 1,
        uniqueVisitors: 1,
        visitors: [
          {
            visitorId,
            timestamp: new Date(),
            userAgent: userAgent || "Unknown",
          },
        ],
      });
    } else {
      // Check if visitor is unique for today
      const isUniqueToday = !dailyVisit.visitors.some(
        (v) => v.visitorId === visitorId
      );

      // Update the record
      dailyVisit.count += 1;

      if (isUniqueToday) {
        dailyVisit.uniqueVisitors += 1;
        dailyVisit.visitors.push({
          visitorId,
          timestamp: new Date(),
          userAgent: userAgent || "Unknown",
        });
      }

      await dailyVisit.save();
    }

    return NextResponse.json({
      success: true,
      message: "Visit tracked successfully",
      data: {
        date: today,
        count: dailyVisit.count,
        uniqueVisitors: dailyVisit.uniqueVisitors,
        isUniqueVisitor:
          dailyVisit.visitors[dailyVisit.visitors.length - 1].visitorId ===
          visitorId,
      },
    });
  } catch (error) {
    console.error("Error tracking visit:", error);
    return NextResponse.json(
      { success: false, error: "Failed to track visit" },
      { status: 500 }
    );
  }
}
