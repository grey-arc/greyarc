import connectDB from "@/lib/mongoose";
import Blog from "@/app/models/Blog";

export async function GET() {
  await connectDB();

  // Admin Notification - Any blogs created in the last 7 days
  const now = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDate() - 7);
  let notify = false;

  const hasRecentBlog = await Blog.exists({
    createdAt: { $gte: sevenDaysAgo, $lte: now },
  });

  if (hasRecentBlog) {
    notify = false;
  } else {
    notify = true;
  }

  // Total Db count
  const totaldbBlogs = await Blog.countDocuments({
    author: { $ne: "services" },
  });

  // Total count
  const totalBlogs = await Blog.countDocuments({
    active: true,
    author: { $ne: "services" },
  });

  // Active / inactive counts
  const activeBlogs = await Blog.countDocuments({
    active: true,
    author: { $ne: "services" },
  });
  const inactiveBlogs = await Blog.countDocuments({
    active: false,
    author: { $ne: "services" },
  });

  // Count of blogs created each month (formatted)
  const blogsPerMonthRaw = await Blog.aggregate([
    {
      $group: {
        _id: { $month: "$publishedAt" },
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
  ]);

  // Map month numbers (1–12) to names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Create full 12-month array with zero-filled months
  const blogsPerMonth = monthNames.map((date, index) => {
    const monthData = blogsPerMonthRaw.find((m) => m._id === index + 1);
    return {
      date,
      count: monthData ? monthData.count : 0,
    };
  });

  // Total visitors
  const totalVisits = await Blog.aggregate([
    {
      $match: {
        active: true,
        author: { $ne: "services" },
      },
    },
    {
      $group: {
        _id: null,
        totalVisits: { $sum: "$visits" },
      },
    },
  ]);

  const sum = totalVisits[0]?.totalVisits || 0;

  return Response.json({
    totaldbBlogs,
    totalBlogs,
    activeBlogs,
    inactiveBlogs,
    blogsPerMonth,
    notify,
    sum,
  });
}
