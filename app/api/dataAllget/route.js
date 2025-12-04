import connectDB from "@/lib/mongoose";
import Pagedata from "@/app/models/PageSection";

export async function GET() {
  try {
    await connectDB();
    const pageData = await Pagedata.find({}).sort({ section_sequence: 1 });
    return Response.json(pageData, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const data = await req.json();
    const { _id, ...updateFields } = data;

    if (!_id) {
      return Response.json({ error: "Missing section _id" }, { status: 400 });
    }

    await connectDB();

    // ✅ Update the section
    const updatedSection = await Pagedata.findByIdAndUpdate(
      _id,
      updateFields,
      { new: true } // returns the updated document
    );

    if (!updatedSection) {
      return Response.json({ error: "Section not found" }, { status: 404 });
    }

    return Response.json(updatedSection);
  } catch (error) {
    return Response.json(
      { error: "Failed to update section" },
      { status: 500 }
    );
  }
}
