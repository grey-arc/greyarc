import connectDB from "@/lib/mongoose";
import Contact from "@/app/models/Contactdata";

export async function GET() {
  await connectDB();

  const now = new Date();

  // --- Define UTC date boundaries ---
  const startOfToday = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );

  const startOfMonth = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)
  );

  // ✅ Include today in past 7 days range
  const sevenDaysAgo = new Date(startOfToday);
  sevenDaysAgo.setUTCDate(startOfToday.getUTCDate() - 6); // includes today + past 6 days

  // Last 30 days for trend chart
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(now.getDate() - 29); // include today + past 29 days
  thirtyDaysAgo.setHours(0, 0, 0, 0); // set to start of day

  // ---- COUNTS ----
  const totalContacts = await Contact.countDocuments();

  const contactsThisMonth = await Contact.countDocuments({
    createdAt: { $gte: startOfMonth, $lte: now },
  });

  const contactsLast7Days = await Contact.countDocuments({
    createdAt: { $gte: sevenDaysAgo, $lte: now },
  });

  const contactsToday = await Contact.countDocuments({
    createdAt: { $gte: startOfToday, $lte: now },
  });

  const recentContacts = await Contact.find()
    .sort({ updatedAt: -1, createdAt: -1 })
    .limit(10)
    .select("name email company phone message createdAt updatedAt");

  // ---- TREND (last 30 days) ----
  const contactTrendRaw = await Contact.aggregate([
    {
      $match: {
        createdAt: { $gte: thirtyDaysAgo, $lte: now },
      },
    },
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
  ]);

  // Fill missing days
  const contactTrend = [];
  for (let i = 0; i < 30; i++) {
    const date = new Date(thirtyDaysAgo);
    date.setDate(thirtyDaysAgo.getDate() + i);

    // Format date as "9 Sep", "12 Oct"
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
    });

    const dateStr = date.toISOString().split("T")[0];
    const entry = contactTrendRaw.find((d) => d._id === dateStr);
    contactTrend.push({ date: formattedDate, count: entry ? entry.count : 0 });
  }

  // ---- FINAL RESPONSE ----
  return Response.json({
    totalContacts,
    contactsThisMonth,
    contactsLast7Days,
    contactsToday,
    recentContacts,
    contactTrend,
  });
}
