import connectDB from "@/lib/mongoose";
import Blog from "@/app/models/Blog";

// POST: increment the view count for a blog/service post by its slug.
// Replaces the old encrypted-ref-based increment so pages can be plain
// slug-addressed and server-rendered.
export async function POST(req) {
  try {
    await connectDB();
    const { slug } = await req.json();

    if (!slug) {
      return Response.json({ error: "Missing slug" }, { status: 400 });
    }

    const blog = await Blog.findOneAndUpdate(
      { slug, active: true },
      { $inc: { visits: 1 } },
      { new: true }
    );

    if (!blog) {
      return Response.json({ error: "Not found" }, { status: 404 });
    }

    return Response.json({ visits: blog.visits });
  } catch (error) {
    console.error("Error tracking view");
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
