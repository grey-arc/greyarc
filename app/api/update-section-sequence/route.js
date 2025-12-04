import connectDB from "@/lib/mongoose";
import PageSection from "@/app/models/PageSection";

export async function POST(req) {
  const { orderedIds } = await req.json();
  await connectDB();

  // Force add the new field explicitly (even if it doesn’t exist)
  const bulkOps = orderedIds.map(({ id, order }) => ({
    updateOne: {
      filter: { _id: id },
      update: { $set: { section_sequence: order + 1 } },
      upsert: true, // don't create new, just update existing
    },
  }));

  const result = await PageSection.bulkWrite(bulkOps);

  return Response.json({ success: true });
}
