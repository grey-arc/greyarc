import connectDB from "@/lib/mongoose";
import Pagedata from "@/app/models/PageSection";

export async function GET() {
  try {
    await connectDB();
    const navLinks = await Pagedata.find({ status: "Active" })
      .select("nav_link section_name section_sequence")
      .sort({ section_sequence: 1 }); // 👈 ASCENDING ORDER

    return Response.json(navLinks, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Error fetching data" }, { status: 500 });
  }
}
