import connectDB from "@/lib/mongoose";
import Blog from "@/app/models/Blog";

// GET: fetch all active blogs (listing)
export async function GET() {
  await connectDB();
  const blogs = await Blog.find({ author: "services" });
  return Response.json(blogs);
}
