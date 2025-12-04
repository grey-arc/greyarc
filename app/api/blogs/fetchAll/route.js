import connectDB from "@/lib/mongoose";
import Blog from "@/app/models/Blog";

// GET: fetch all active & published blogs
export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find({ active: true, published: true }).sort({
      createdAt: -1,
    });

    return Response.json(blogs);
  } catch (error) {
    console.log("Error fetching blog data");
  }
}
