import { NextResponse } from "next/server";
import connectDB from "@/lib/mongoose";
import DailyVisit from "@/app/models/DailyVisit";

// GET: Fetch visit analytics (used in admin dashboard)
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const period = searchParams.get("period") || "all"; // all, today, week, month

    const today = new Date().toISOString().split("T")[0];
    const todayDate = new Date();

    // Calculate date ranges
    const last7Days = new Date(todayDate);
    last7Days.setDate(last7Days.getDate() - 7);
    const last7DaysStr = last7Days.toISOString().split("T")[0];

    const last30Days = new Date(todayDate);
    last30Days.setDate(last30Days.getDate() - 30);
    const last30DaysStr = last30Days.toISOString().split("T")[0];

    // Today's stats
    const todayStats = await DailyVisit.findOne({ date: today });

    // Last 7 days data
    const last7DaysData = await DailyVisit.find({
      date: { $gte: last7DaysStr },
    }).sort({ date: 1 });

    // Last 30 days data
    const last30DaysData = await DailyVisit.find({
      date: { $gte: last30DaysStr },
    }).sort({ date: 1 });

    // All time stats
    const allTimeStats = await DailyVisit.aggregate([
      {
        $group: {
          _id: null,
          totalVisits: { $sum: "$count" },
          totalUniqueVisitors: { $sum: "$uniqueVisitors" },
        },
      },
    ]);

    // Get total days tracked
    const totalDays = await DailyVisit.countDocuments();

    // Calculate averages
    const avgVisitsPerDay =
      totalDays > 0
        ? Math.round((allTimeStats[0]?.totalVisits || 0) / totalDays)
        : 0;

    // Format data for charts
    const formatChartData = (data) => {
      return data.map((d) => ({
        date: new Date(d.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        count: d.count,
        uniqueVisitors: d.uniqueVisitors,
      }));
    };

    // Projection to include only needed fields
    const selectFields = { date: 1, count: 1, uniqueVisitors: 1, _id: 0 };

    // For all time
    const allTimeData = await DailyVisit.find({}, selectFields).sort({
      date: 1,
    });

    const response = {
      success: true,
      stats: {
        today: {
          visits: todayStats?.count || 0,
          uniqueVisitors: todayStats?.uniqueVisitors || 0,
        },
        last7Days: {
          visits: last7DaysData.reduce((sum, day) => sum + day.count, 0),
          uniqueVisitors: last7DaysData.reduce(
            (sum, day) => sum + day.uniqueVisitors,
            0
          ),
          chartData: formatChartData(last7DaysData),
        },
        last30Days: {
          visits: last30DaysData.reduce((sum, day) => sum + day.count, 0),
          uniqueVisitors: last30DaysData.reduce(
            (sum, day) => sum + day.uniqueVisitors,
            0
          ),
          chartData: formatChartData(last30DaysData),
        },
        allTime: {
          visits: allTimeStats[0]?.totalVisits || 0,
          uniqueVisitors: allTimeStats[0]?.totalUniqueVisitors || 0,
          totalDays,
          avgVisitsPerDay,
        },
        fullData: allTimeData,
      },
    };

    // Filter by period if specified
    if (period === "today") {
      return NextResponse.json({
        success: true,
        period,
        data: response.stats.today,
      });
    } else if (period === "week") {
      return NextResponse.json({
        success: true,
        period,
        data: response.stats.last7Days,
      });
    } else if (period === "month") {
      return NextResponse.json({
        success: true,
        period,
        data: response.stats.last30Days,
      });
    }

    // Return all stats by default
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}
