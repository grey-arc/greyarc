import connectDB from "@/lib/mongoose";
import Config from "@/app/models/Config";

// GET: fetch visitor count
export async function GET() {
  await connectDB();
  const visits = await Config.find({ field_name: "Visits" });
  return Response.json(visits);
}

// POST: update count
export async function POST() {
  try {
    await connectDB();

    const visits = await Config.findOneAndUpdate(
      { field_name: "Visits" },
      { $inc: { field_value: 1 } },
      { new: true }
    );
    if (!visits) {
      return Response.json({ error: "Field not found" }, { status: 404 });
    }
    return Response.json(visits, { status: 200 });
  } catch (error) {
    console.error("Error updating visit count");
    return Response.json(
      { error: "Failed to update visit count", details: "Update Failed" },
      { status: 500 }
    );
  }
}
